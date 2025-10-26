"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Switch,
  FormControlLabel,
  Skeleton,
} from "@mui/material";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  Autocomplete,
} from "@react-google-maps/api";
import { useModalStore } from "@/stores/modal-store";
import { withLoader } from "@/utils/with-loader";
import { useSession } from "next-auth/react";
import PageTitle from "@/components/ui/page-title";
import DividerWithText from "@/components/ui/divider-with-text";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SaveIcon from "@mui/icons-material/Save";
import { useRouter } from "next/navigation";

const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "8px",
};

const defaultCenter = { lat: 13.736717, lng: 100.523186 };

interface LocationPickerFormProps {
  locationId?: string;
}

export default function LocationPickerForm({
  locationId,
}: LocationPickerFormProps) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    latitude: 0,
    longitude: 0,
    placeId: "",
    addressLine: "",
    link: "",
    isFavorite: false,
  });

  const [position, setPosition] = useState<{ lat: number; lng: number } | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const open = useModalStore((s) => s.open);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const router = useRouter();
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
    libraries: ["places"],
  });

  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "loading" || !locationId) return;

    const fetchLocation = async () => {
      try {
        const appToken =
          sessionStorage.getItem("appToken") ||
          session?.idToken ||
          session?.accessToken;

        const res = await withLoader(
          () =>
            fetch(`/api/backend/locations/${locationId}`, {
              headers: {
                Authorization: `Bearer ${appToken}`,
              },
            }),
          "Loading..."
        );
        if (!res.ok) throw new Error("Failed to load location");
        const data = await res.json();

        setForm({
          name: data.name || "",
          description: data.description || "",
          latitude: data.latitude,
          longitude: data.longitude,
          placeId: data.placeId || "",
          addressLine: data.addressLine || "",
          link: data.link || "",
          isFavorite: data.isFavorite || false,
        });

        if (data.latitude && data.longitude)
          setPosition({ lat: data.latitude, lng: data.longitude });
      } catch (err) {
        console.error(err);
        open({
          type: "error",
          title: "Load failed",
          description: "Unable to load location details.",
        });
      }
    };

    fetchLocation();
  }, [locationId, status, session, open]);

  const handleMapClick = useCallback(async (e: google.maps.MapMouseEvent) => {
    if (!e.latLng) return;
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();

    setPosition({ lat, lng });
    setForm((f) => ({ ...f, latitude: lat, longitude: lng }));

    setLoading(true);
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ location: { lat, lng } }, (results, status) => {
      if (status === "OK" && results && results[0]) {
        setForm((f) => ({
          ...f,
          addressLine: results[0].formatted_address,
          placeId: results[0].place_id || "",
        }));
      }
      setLoading(false);
    });
  }, []);

  const handlePlaceChanged = () => {
    if (!autocompleteRef.current) return;
    const place = autocompleteRef.current.getPlace();
    if (!place.geometry?.location) return;

    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();

    setPosition({ lat, lng });
    setForm((f) => ({
      ...f,
      name: place.name || f.name,
      latitude: lat,
      longitude: lng,
      placeId: place.place_id || "",
      addressLine: place.formatted_address || "",
      link: place.url || "",
    }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.latitude || !form.longitude) {
      open({
        type: "warning",
        title: "Missing location",
        description: "Please select a location on the map.",
      });
      return;
    }

    try {
      const appToken =
        sessionStorage.getItem("appToken") ||
        session?.idToken ||
        session?.accessToken;

      const method = locationId ? "PUT" : "POST";
      const url = locationId
        ? `/api/backend/locations/${locationId}`
        : `/api/backend/locations`;

      const res = await withLoader(
        () =>
          fetch(url, {
            method,
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${appToken}`,
            },
            body: JSON.stringify(form),
          }),
        locationId ? "Updating location..." : "Saving location..."
      );

      if (!res.ok) throw new Error("Failed to save");

      open({
        type: "success",
        title: locationId ? "Updated successfully" : "Saved successfully",
        description: locationId
          ? "บันทึกการแก้ไขสถานที่เรียบร้อยแล้ว"
          : "บันทึกสถานที่เรียบร้อยแล้ว",
        onClose: () => (window.location.href = "/my-places"),
      });

      if (!locationId) {
        setForm({
          name: "",
          description: "",
          latitude: 0,
          longitude: 0,
          placeId: "",
          addressLine: "",
          link: "",
          isFavorite: false,
        });
        setPosition(null);
      }
    } catch (err) {
      console.error(err);
      open({
        type: "error",
        title: "Error",
        description: "An error occurred while saving the location.",
      });
    }
  };

  if (!isLoaded) {
    return (
      <Box>
        <Skeleton variant="text" width="60%" height={32} />
        <Skeleton variant="text" width="80%" height={28} />
        <Skeleton variant="text" width="40%" height={28} />
        <Skeleton
          variant="rectangular"
          width="100%"
          height={400}
          sx={{ borderRadius: 2, mb: 3 }}
        />
      </Box>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {locationId ? (
        <PageTitle title="Edit Place" desc="แก้ไขสถานที่" />
      ) : (
        <PageTitle title="Add New Place" desc="เพิ่มสถานที่" />
      )}
      <Box my={3} display="flex" flexDirection="column" gap={2}>
        <TextField
          label="ชื่อสถานที่"
          name="name"
          value={form.name}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          label="คำอธิบายสั้นๆ"
          name="description"
          value={form.description}
          onChange={handleChange}
          fullWidth
          multiline
          rows={3}
        />
      </Box>
      <DividerWithText text="รายละเอียดสถานที่" />
      <Autocomplete
        onLoad={(autocomplete) => (autocompleteRef.current = autocomplete)}
        onPlaceChanged={handlePlaceChanged}
      >
        <TextField
          fullWidth
          placeholder="ค้นหาสถานที่"
          variant="outlined"
          value={form.addressLine}
          onChange={(e) =>
            setForm((f) => ({ ...f, addressLine: e.target.value }))
          }
          sx={{ mb: 2 }}
        />
      </Autocomplete>

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={position || defaultCenter}
        zoom={position ? 16 : 12}
        onClick={handleMapClick}
      >
        {position && <Marker position={position} />}
      </GoogleMap>

      <Box mt={3} display="flex" flexDirection="column" gap={2}>
        <TextField
          label="Address"
          name="addressLine"
          value={loading ? "Loading..." : form.addressLine}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Latitude"
          value={form.latitude}
          InputProps={{ readOnly: true }}
          fullWidth
        />
        <TextField
          label="Longitude"
          value={form.longitude}
          InputProps={{ readOnly: true }}
          fullWidth
        />
        <FormControlLabel
          control={
            <Switch
              checked={form.isFavorite}
              onChange={(e) =>
                setForm((f) => ({ ...f, isFavorite: e.target.checked }))
              }
            />
          }
          label="สถานที่โปรด"
        />
        <div className="flex gap-2">
          <Button
            variant="outlined"
            color="primary"
            sx={{ mt: 2, height: "56px", minWidth: "120px" }}
            startIcon={<ArrowBackIosNewIcon />}
            onClick={() => router.push("/my-places")}
          >
            ย้อนกลับ
          </Button>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            className="w-full"
            startIcon={<SaveIcon />}
          >
            บันทึกสถานที่
          </Button>
        </div>
      </Box>
    </form>
  );
}
