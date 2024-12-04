import Editor from "./Editor";
import PreviewContainer from "./PreviewContainer";

const MarkdownEditor = () => {
  return (
    <div className="md:grid md:grid-cols-2 gap-4 w-full h-[70vh]">
      <Editor />
      <PreviewContainer />
    </div>
  );
};

export default MarkdownEditor;
