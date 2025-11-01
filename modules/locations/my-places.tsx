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
import Link from "next/link";
import SurveyBanner from "../survey/survey-banner";

const MyPlacesModule = () => {
  const [locations, setLocations] = useState([]);
  const { data: session, status } = useSession();
  const open = useModalStore((s) => s.open);

  const fetchLocations = async () => {
    try {
      const appToken = sessionStorage?.getItem("appToken");

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
      const appToken = sessionStorage?.getItem("appToken");

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
    window.location.href = `/share-location/${location.id}`;
  };

  const handleDelete = (location: any) => {
    open({
      type: "warning",
      title: "Confirm Delete",
      description: `Are you sure you want to delete "${location.name}"?`,
      onConfirm: () => deleteLocation(location.id),
    });
  };

  useEffect(() => {
    if (status === "loading") return;
    const appToken = sessionStorage?.getItem("appToken");

    if (!appToken) {
      console.warn("No appToken yet — waiting for sync");
      return;
    }

    fetchLocations();
  }, [status, session]);

  return (
    <div>
      <PageTitle
        title="My Places"
        desc="เลือกสถานที่ของคุณ แล้วแชร์ให้คนอื่นได้ง่าย ๆ"
      />

      <div className="flex flex-col gap-4">
        {locations.map((location: any) => {
          return (
            <div
              key={location.id}
              onClick={() => handleShare(location)}
              className="border border-gray-400 p-3 rounded-md transition-all duration-200 hover:border-[#6C3BD9] hover:bg-[#F3E9FF] hover:shadow-sm cursor-pointer"
            >
              <div className="flex justify-between items-center gap-2 flex-wrap">
                <div className="flex gap-3 items-center">
                  <FavoriteIcon
                    sx={{ color: location.isFavorite ? "#FF4545" : "#ccc" }}
                  />
                  <div className="flex flex-col">
                    <div className="font-bold truncate w-full max-w-[180px]">
                      {location.name}
                    </div>
                    <div className="text-gray-600 text-sm truncate max-w-[300px]">
                      {location.description}
                    </div>
                  </div>
                </div>

                <div className="flex gap-1">
                  <Tooltip title="แชร์">
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

                  <Tooltip title="แก้ไข">
                    <IconButton
                      size="small"
                      href={`/my-places/edit/${location.id}`}
                      onClick={(e) => {
                        e.stopPropagation();
                      }}
                      sx={{ color: "#6C3BD9" }}
                    >
                      <EditIcon fontSize="small" />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="ลบ">
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

        <Link
          href="/my-places/create"
          className="border font-bold border-gray-400 p-3 rounded-md flex justify-center items-center cursor-pointer transition-all duration-200 hover:border-[#6C3BD9] hover:bg-[#F3E9FF] hover:shadow-sm"
        >
          <AddIcon /> เพิ่มสถานที่
        </Link>
        <SurveyBanner />
      </div>
    </div>
  );
};

export default MyPlacesModule;
