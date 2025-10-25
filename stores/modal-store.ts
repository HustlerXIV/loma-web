import { create } from "zustand";

type ModalType = "success" | "error" | "warning" | "info";

interface ModalOptions {
  type?: ModalType;
  title?: string;
  description?: string;
  onConfirm?: () => void;
  onClose?: () => void;
}

interface ModalState extends ModalOptions {
  isOpen: boolean;
  open: (options: ModalOptions) => void;
  close: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  type: "info",
  title: "",
  description: "",
  onConfirm: undefined,
  open: (options) => set({ isOpen: true, ...options }),
  close: () =>
    set({
      isOpen: false,
      type: "info",
      title: "",
      description: "",
      onConfirm: undefined,
      onClose: undefined,
    }),
}));
