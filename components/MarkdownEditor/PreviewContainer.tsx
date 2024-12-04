import { memo, useContext } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import style from "./markdown-styles.module.css";
import { MarkdownEditorContext } from "@/components/state/context";

const PreviewContainer = memo(function PreviewContainer() {
  const { editorValue } = useContext(MarkdownEditorContext);
  return (
    <div className="p-1 px-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 text-black w-full h-[200px] md:h-full bg-white">
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
