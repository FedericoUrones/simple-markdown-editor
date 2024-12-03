import React, { useContext } from "react";
import MarkdownEditorContext from "./context";

const Editor = () => {
  const { editorValue, setEditorValue } = useContext(MarkdownEditorContext);
  return (
    <textarea
      className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black w-full h-[200px] md:h-full"
      value={editorValue}
      placeholder="Write your markdown here..."
      onChange={(e) => {
        setEditorValue(e.target.value);
      }}
    />
  );
};

export default Editor;
