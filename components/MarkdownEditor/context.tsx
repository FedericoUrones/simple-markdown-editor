import { createContext } from "react";

const MarkdownEditorContext = createContext({
  editorValue: "",
  setEditorValue: (value: string) => {
    console.log(value);
  },
  previewValue: "",
  setPreviewValue: (value: string) => {
    console.log(value);
  },
});

export default MarkdownEditorContext;
