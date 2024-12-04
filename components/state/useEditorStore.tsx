import { create } from "zustand";

interface EditorStore {
  editorValue: string;
  setEditorValue: (value: string) => void;
  charsCount: number;
}

export const useEditorStore = create<EditorStore>((set, get) => ({
  editorValue: "",
  setEditorValue: (value) => {
    if (value !== get().editorValue) {
      localStorage.setItem("editorValue", value);
      set({ editorValue: value, charsCount: value.length });
    }
  },
  charsCount: 0,
}));
