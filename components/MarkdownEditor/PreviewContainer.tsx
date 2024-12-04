import { memo } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useEditorStore } from "@/components/state/useEditorStore";
import style from "./markdown-styles.module.css";

const PreviewContainer = memo(function PreviewContainer() {
  const editorValue = useEditorStore((state) => state.editorValue);
  return (
    <div
      className="p-1 px-4 rounded-lg bg-white border border-gray-300 
    focus:outline-none focus:ring-2 text-black 
    w-full h-[200px] md:h-full md:min-h-[70vh] overflow-y-auto"
    >
      {editorValue.length > 0 ? (
        <Markdown className={style.reactMarkDown} remarkPlugins={[remarkGfm]}>
          {editorValue}
        </Markdown>
      ) : (
        <p className="text-gray-500">No content to preview</p>
      )}
    </div>
  );
});

export default PreviewContainer;
