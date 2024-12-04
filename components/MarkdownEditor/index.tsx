import Counter from "./Counter";
import Editor from "./Editor";
import PreviewContainer from "./PreviewContainer";

const MarkdownEditor = () => {
  const isMobile = window.screen.width < 1280;

  return (
    <div className="md:grid md:grid-cols-2 gap-4 w-full h-[70vh]">
      <div>
        <Editor />
        <Counter show={isMobile} />
      </div>
      <PreviewContainer />
      <Counter show={!isMobile} />
    </div>
  );
};

export default MarkdownEditor;
