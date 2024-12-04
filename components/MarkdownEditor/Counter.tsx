import { useContext } from "react";
import { MarkdownEditorContext } from "@/components/state/context";
import { MAX_EDITOR_LENGTH } from "./Editor";

const Counter = ({ show }: { show: boolean }) => {
  const { editorValue } = useContext(MarkdownEditorContext);

  return show ? (
    <p
      className={`text-sm mb-2 ${
        editorValue.length < MAX_EDITOR_LENGTH
          ? "text-gray-500"
          : "text-red-500"
      }`}
    >
      {editorValue.length} / {MAX_EDITOR_LENGTH}
    </p>
  ) : null;
};

export default Counter;
