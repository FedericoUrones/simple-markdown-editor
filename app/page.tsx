"use client";
import { useEffect, useMemo, useState } from "react";
import MarkdownEditor from "@/components/MarkdownEditor";
import { MarkdownEditorContext } from "@/components/state/context";

export default function Home() {
  const [editorValue, setEditorValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const contextValue = useMemo(
    () => ({ editorValue, setEditorValue }),
    [editorValue]
  );

  useEffect(() => {
    const savedValue = localStorage.getItem("editorValue");
    if (savedValue) {
      setEditorValue(savedValue);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("editorValue", editorValue);
  }, [editorValue]);

  return (
    <MarkdownEditorContext.Provider value={contextValue}>
      <div className="flex flex-col gap-2 min-h-screen">
        <main className="flex-grow p-8 flex flex-col gap-8 items-center">
          <h1 className="text-4xl font-bold text-center">
            Simple Markdown Editor
          </h1>
          <p className="text-lg text-center">
            A simple markdown editor with live preview.
          </p>
          {isLoading ? (
            <div className="flex justify-center items-center h-[70vh]">
              <p className="text-2xl font-bold text-center">Loading...</p>
            </div>
          ) : (
            <div className="flex-1 w-full max-w-screen-lg">
              <MarkdownEditor />
            </div>
          )}
        </main>
        <footer className="p-4 flex gap-6 flex-wrap items-center justify-center">
          <p>
            Made with ❤️ by{" "}
            <a href="https://github.com/FedericoUrones">Federico Urones</a>
          </p>
        </footer>
      </div>
    </MarkdownEditorContext.Provider>
  );
}
