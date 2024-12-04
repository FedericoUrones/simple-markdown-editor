import { useEditorStore } from "../state/useEditorStore";
import { MAX_EDITOR_LENGTH } from "./Editor";

const Counter = () => {
  const charsCount = useEditorStore((state) => state.charsCount);

  return (
    <p
      className={`text-sm mb-2 ${
        charsCount < MAX_EDITOR_LENGTH ? "text-gray-500" : "text-red-500"
      }`}
    >
      {charsCount} / {MAX_EDITOR_LENGTH}
    </p>
  );
};

export default Counter;
