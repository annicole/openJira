import { createContext } from "react";

interface ContextProps {
  sidemenuOpen: boolean;
  isAdding: boolean;
  isDragging:boolean;

  // Methods
  closeSideMenu: () => void;
  openSideMenu: () => void;
  setIsAddingEntry: (boisAdding: boolean) => void;
  startDragging: () => void;
  endDragging: () => void;
}

export const UIContext = createContext({} as ContextProps);
