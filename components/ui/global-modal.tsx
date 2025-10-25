"use client";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  IconButton,
  Slide,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import WarningIcon from "@mui/icons-material/Warning";
import InfoIcon from "@mui/icons-material/Info";
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef } from "react";
import { useModalStore } from "@/stores/modal-store";

const Transition = forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ICON_MAP = {
  success: {
    icon: <CheckCircleIcon sx={{ fontSize: 40 }} />,
    color: "#2e7d32",
  },
  error: { icon: <ErrorIcon sx={{ fontSize: 40 }} />, color: "#d32f2f" },
  warning: { icon: <WarningIcon sx={{ fontSize: 40 }} />, color: "#ed6c02" },
  info: { icon: <InfoIcon sx={{ fontSize: 40 }} />, color: "#0288d1" },
};

export default function GlobalModal() {
  const {
    isOpen,
    type = "info",
    title,
    description,
    onConfirm,
    onClose,
    close,
  } = useModalStore();
  const { icon, color } = ICON_MAP[type];

  const handleConfirm = () => {
    if (onConfirm) onConfirm();
    close();
  };

  const handleOnClose = () => {
    if (onClose) onClose();
    close();
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleOnClose}
      TransitionComponent={Transition}
      keepMounted
      aria-labelledby="global-dialog-title"
      fullWidth
      maxWidth="sm"
    >
      <DialogTitle
        id="global-dialog-title"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          fontWeight: 600,
          pb: 1,
        }}
      >
        <div className="flex items-center gap-2">
          <Box sx={{ color }}>{icon}</Box>
          <Typography variant="h6">{title || "Notification"}</Typography>
        </div>
        <IconButton aria-label="close" onClick={handleOnClose} size="small">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        <Box display="flex" alignItems="flex-start" gap={2}>
          <Typography variant="body1" color="text.secondary">
            {description}
          </Typography>
        </Box>
      </DialogContent>

      <DialogActions>
        {onConfirm ? (
          <>
            <Button
              onClick={handleOnClose}
              variant="outlined"
              color="inherit"
              sx={{ borderRadius: 2, height: "56px" }}
            >
              ยกเลิก
            </Button>
            <Button
              onClick={handleConfirm}
              variant="contained"
              sx={{
                borderRadius: 2,
                backgroundColor: color,
              }}
            >
              ตกลง
            </Button>
          </>
        ) : (
          <Button
            onClick={handleOnClose}
            variant="contained"
            color="primary"
            sx={{ borderRadius: 2 }}
          >
            ปิด
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}
