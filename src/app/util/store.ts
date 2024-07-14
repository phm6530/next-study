import { create } from "zustand";

//Home Type
interface HomeTabProps {
  homeTab: "rec" | "fol";
  setTab: (tab: "rec" | "fol") => void;
}

// Store InterFace
interface StoreProps extends HomeTabProps {}

const useStore = create<StoreProps>((set) => ({
  //Tab
  homeTab: "rec",
  setTab: (tab: "rec" | "fol") => set({ homeTab: tab }),
}));

export default useStore;
