import { createContext } from "react";

interface MarkdownEditorContextType {
  editorValue: string;
  setEditorValue: (value: string) => void;
}

export const MarkdownEditorContext = createContext<MarkdownEditorContextType>({
  editorValue: "",
  setEditorValue: () => {},
});
