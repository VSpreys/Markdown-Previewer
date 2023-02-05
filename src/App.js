import "./App.css";
import { Editor } from "./textEditor";
import React, { useState } from "react";
import initialText from "./initialText.js";
import { MarkdownPreview } from "./markdownPreview";

function App() {
  const [info, setInfo] = useState({ text: initialText, editorWindow: false, previewWindow: false })
  return (
    <div className="App">
      <Editor info={info} setInfo={setInfo} />
      <MarkdownPreview info={info} setInfo={setInfo} />
    </div>
  );
}

export default App;
