import { useEditorStore } from "../state/useEditorStore";
import { MAX_EDITOR_LENGTH } from "./Editor";

const Counter = ({ show }: { show: boolean }) => {
  const charsCount = useEditorStore((state) => state.charsCount);

  return show ? (
    <p
      className={`text-sm mb-2 ${
        charsCount < MAX_EDITOR_LENGTH ? "text-gray-500" : "text-red-500"
      }`}
    >
      {charsCount} / {MAX_EDITOR_LENGTH}
    </p>
  ) : null;
};

export default Counter;
