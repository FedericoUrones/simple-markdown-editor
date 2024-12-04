"use client";

import Counter from "./Counter";
import Editor from "./Editor";
import PreviewContainer from "./PreviewContainer";

const MarkdownEditor = () => {
  return (
    <div className="md:grid md:grid-cols-2 gap-4 w-full h-[70vh]">
      <div>
        <Editor />
        <div className="md:hidden">
          <Counter />
        </div>
      </div>
      <PreviewContainer />
      <div className="md:block hidden">
        <Counter />
      </div>
    </div>
  );
};

export default MarkdownEditor;
