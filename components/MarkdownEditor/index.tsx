"use client";

import { useState } from "react";
import MarkdownEditorContext from "./context";
import Editor from "./Editor";
import PreviewContainer from "./PreviewContainer";

const MarkdownEditor = () => {
  const [editorValue, setEditorValue] = useState("");
  const [previewValue, setPreviewValue] = useState("");

  return (
    <MarkdownEditorContext.Provider
      value={{ editorValue, setEditorValue, previewValue, setPreviewValue }}
    >
      <div className="md:grid md:grid-cols-2 gap-4 w-full h-[70vh]">
        <Editor />
        <PreviewContainer />
      </div>
    </MarkdownEditorContext.Provider>
  );
};

export default MarkdownEditor;
