import { create } from "zustand";

interface EditorStore {
  editorValue: string;
  setEditorValue: (value: string) => void;
  charsCount: number;
  hasInitialValue: boolean;
}

export const useEditorStore = create<EditorStore>((set) => ({
  editorValue: localStorage.getItem("editorValue") ?? "",
  hasInitialValue: !!localStorage.getItem("editorValue"),
  setEditorValue: (value) => {
    if (value !== useEditorStore.getState().editorValue) {
      localStorage.setItem("editorValue", value);
      set({ editorValue: value, charsCount: value.length });
    }
  },
  charsCount: 0,
}));
