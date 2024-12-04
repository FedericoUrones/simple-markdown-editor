"use client";

import { create } from "zustand";

interface EditorStore {
  editorValue: string;
  setEditorValue: (value: string) => void;
  charsCount: number;
  hasInitialValue: boolean;
}

const getInitialValue = () => {
  return localStorage.getItem("editorValue") ?? "";
};

export const useEditorStore = create<EditorStore>((set, get) => ({
  editorValue: getInitialValue(),
  hasInitialValue: !!getInitialValue(),
  setEditorValue: (value) => {
    if (value !== get().editorValue) {
      localStorage.setItem("editorValue", value);
      set({ editorValue: value, charsCount: value.length });
    }
  },
  charsCount: getInitialValue().length,
}));
