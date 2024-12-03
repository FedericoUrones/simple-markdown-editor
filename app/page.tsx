import MarkdownEditor from "@/components/MarkdownEditor";

export default function Home() {
  return (
    <div className="flex flex-col gap-2 min-h-screen">
      <main className="flex-grow p-8 flex flex-col gap-8 items-center">
        <h1 className="text-4xl font-bold text-center">
          Simple Markdown Editor
        </h1>
        <p className="text-lg text-center">
          A simple markdown editor with live preview.
        </p>
        <div className="flex-1 w-full max-w-screen-lg">
          <MarkdownEditor />
        </div>
      </main>
      <footer className="p-4 flex gap-6 flex-wrap items-center justify-center">
        <p>
          Made with ❤️ by{" "}
          <a href="https://github.com/FedericoUrones">Federico Urones</a>
        </p>
      </footer>
    </div>
  );
}
