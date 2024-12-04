import { useContext } from "react";
import { MarkdownEditorContext } from "@/components/state/context";

export const MAX_EDITOR_LENGTH = 20000;

const Editor = () => {
  const { editorValue, setEditorValue } = useContext(MarkdownEditorContext);

  return (
    <textarea
      className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900
      bg-white w-full h-[200px] md:h-full md:max-h-[70vh]"
      value={editorValue}
      placeholder="Write your markdown here..."
      maxLength={MAX_EDITOR_LENGTH}
      onChange={(e) => {
        setEditorValue(e.target.value);
      }}
    />
  );
};

export default Editor;
