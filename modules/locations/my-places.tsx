"use client";

import PageTitle from "@/components/ui/page-title";
import { useModalStore } from "@/stores/modal-store";
import { withLoader } from "@/utils/with-loader";
import AddIcon from "@mui/icons-material/Add";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip } from "@mui/material";
import { useSession } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const MyPlacesModule = () => {
  const [locations, setLocations] = useState([]);
  const { data: session, status } = useSession();
  const open = useModalStore((s) => s.open);
  const router = useRouter();

  const appToken =
    sessionStorage.getItem("appToken") ||
    session?.idToken ||
    session?.accessToken;

  const fetchLocations = async () => {
    try {
      const res = await withLoader(
        () =>
          fetch("/api/backend/locations/", {
            headers: { Authorization: `Bearer ${appToken}` },
          }),
        "Loading..."
      );

      if (!res.ok) throw new Error("Failed to load locations");
      const data = await res.json();
      setLocations(data);
    } catch (err) {
      console.error(err);
      open({
        type: "error",
        title: "Load failed",
        description: "Unable to load location details.",
      });
    }
  };

  const deleteLocation = async (locationId: any) => {
    try {
      const res = await withLoader(
        () =>
          fetch(`/api/backend/locations/${locationId}`, {
            method: "DELETE",
            headers: { Authorization: `Bearer ${appToken}` },
          }),
        "Loading..."
      );

      if (!res.ok) throw new Error("Failed to delete location");
      fetchLocations();
    } catch (err) {
      console.error(err);
      open({
        type: "error",
        title: "Delete failed",
        description: "Unable to delete location.",
      });
    }
  };

  const handleShare = (location: any) => {
    console.log("Share:", location);
    open({
      type: "info",
      title: "Share Location",
      description: `Share link: ${location.link}`,
    });
  };

  const handleEdit = (location: any) => {
    router.push(`/my-places/edit/${location.id}`);
  };

  const handleDelete = (location: any) => {
    open({
      type: "warning",
      title: "Confirm Delete",
      description: `Are you sure you want to delete "${location.name}"?`,
      onConfirm: () => deleteLocation(location.id),
    });
  };

  const handleCardClick = (location: any) => {
    console.log("Card clicked:", location);
    open({
      type: "info",
      title: location.name,
      description: location.addressLine || "No address available",
    });
  };

  useEffect(() => {
    if (status === "loading") return;

    if (!appToken) {
      console.warn("No appToken yet — waiting for sync");
      return;
    }

    fetchLocations();
  }, [status, session]);

  return (
    <div>
      <PageTitle title="My Places" desc="สถานที่ของฉัน" />

      <div className="flex flex-col gap-4">
        {locations.map((location: any) => {
          return (
            <div
              key={location.id}
              onClick={() => handleCardClick(location)}
              className="border border-gray-400 p-3 rounded-md transition-all duration-200 hover:border-[#6C3BD9] hover:bg-[#F3E9FF] hover:shadow-sm cursor-pointer"
            >
              <div className="flex justify-between items-center">
                <div className="flex gap-3 items-center">
                  <FavoriteIcon
                    sx={{ color: location.isFavorite ? "#FF4545" : "#ccc" }}
                  />
                  <div className="flex flex-col">
                    <div className="font-bold">{location.name}</div>
                    <div className="text-gray-600 text-sm">
                      {location.description}
                    </div>
                  </div>
                </div>

                <div className="flex gap-1">
                  <Tooltip title="Share">
                    <IconButton
                      size="small"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleShare(location);
                      }}
                      sx={{ color: "#6C3BD9" }}
                    >
                      <ShareIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="Edit">
                    <IconButton
                      size="small"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleEdit(location);
                      }}
                      sx={{ color: "#6C3BD9" }}
                    >
                      <EditIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="Delete">
                    <IconButton
                      size="small"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDelete(location);
                      }}
                      sx={{ color: "#d32f2f" }}
                    >
                      <DeleteIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>
                </div>
              </div>
            </div>
          );
        })}

        <div
          onClick={() => router.push("/my-places/create")}
          className="border font-bold border-gray-400 p-3 rounded-md flex justify-center items-center cursor-pointer transition-all duration-200 hover:border-[#6C3BD9] hover:bg-[#F3E9FF] hover:shadow-sm"
        >
          <AddIcon /> เพิ่มสถานที่
        </div>
      </div>
    </div>
  );
};

export default MyPlacesModule;
