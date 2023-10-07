import { create } from "zustand";

type Store = {
  open: boolean;
  modalState: any;
  toggleModal: () => void;
  closeModal: () => void;
  openModal: (data: any) => void;
};

export const useModal = create<Store>()((set) => ({
  open: false,
  modalState: null, //To any hold data
  toggleModal: () => set((state) => ({ open: !state.open })),
  closeModal: () => set((state) => ({ open: false, modalState: false })),
  openModal: (data) => set((state) => ({ open: true, modalState: data })),
}));
