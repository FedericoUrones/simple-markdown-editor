import { create } from "zustand";

interface EditorStore {
  editorValue: string;
  setEditorValue: (value: string) => void;
  charsCount: number;
  hasInitialValue: boolean;
}

const getInitialValue = () => {
  if (typeof window !== "undefined") {
    const savedValue = localStorage.getItem("editorValue");
    return savedValue ?? "";
  }
  return "";
};

export const useEditorStore = create<EditorStore>((set) => ({
  editorValue: getInitialValue(),
  hasInitialValue: !!getInitialValue(),
  setEditorValue: (value) => {
    if (value !== useEditorStore.getState().editorValue) {
      localStorage.setItem("editorValue", value);
      set({ editorValue: value, charsCount: value.length });
    }
  },
  charsCount: getInitialValue().length,
}));
