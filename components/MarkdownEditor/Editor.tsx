import { useEditorStore } from "@/components/state/useEditorStore";

export const MAX_EDITOR_LENGTH = 20000;

const Editor = () => {
  const editorValue = useEditorStore((state) => state.editorValue);
  const setEditorValue = useEditorStore((state) => state.setEditorValue);

  return (
    <textarea
      className="p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900
      bg-white w-full h-[200px] md:h-full md:min-h-[70vh] overflow-y-auto"
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
