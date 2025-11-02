"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Box,
  IconButton,
  Fade,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import LogoutIcon from "@mui/icons-material/Logout";
import { logout } from "@/utils/next-auth-logout";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);

  const menuItems = [
    { label: "My Places", href: "/my-places" },
    { label: "Survey", href: "/survey" },
    { label: "Privacy", href: "/privacy" },
  ];

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          top: 16,
          left: { xs: 8, md: 0 },
          zIndex: 1300,
        }}
        data-aos="fade-down"
      >
        <IconButton
          onClick={toggleMenu}
          sx={{
            bgcolor: open ? "white" : "primary.main",
            color: open ? "primary.main" : "white",
            "&:hover": { bgcolor: open ? "#f0f0f0" : "primary.dark" },
          }}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </Box>

      <Fade in={open}>
        <Box
          sx={{
            position: "fixed",
            inset: 0,
            bgcolor: "rgba(0,0,0,0.9)",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1200,
          }}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.label} disablePadding>
                <Link href={item.href} passHref>
                  <ListItemButton
                    onClick={toggleMenu}
                    sx={{
                      textAlign: "center",
                      color: "white",
                      py: 2,
                      "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
                    }}
                  >
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontSize: "1.5rem",
                        fontWeight: 500,
                      }}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}

            <ListItem disablePadding>
              <ListItemButton
                onClick={logout}
                sx={{
                  textAlign: "center",
                  justifyContent: "center",
                  color: "#ff6b6b",
                  py: 2,
                  gap: 1.5,
                  "&:hover": {
                    bgcolor: "rgba(255,107,107,0.1)",
                    color: "#ff8585",
                  },
                  transition: "all 0.2s ease-in-out",
                }}
              >
                <LogoutIcon sx={{ fontSize: 28 }} />
                <ListItemText
                  primary="Logout"
                  primaryTypographyProps={{
                    fontSize: "1.6rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                  }}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Fade>
    </>
  );
}
