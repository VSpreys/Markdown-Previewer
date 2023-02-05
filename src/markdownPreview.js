import React from "react";
import "font-awesome/css/font-awesome.min.css";
import Markdown from "marked-react";

export const MarkdownPreview = ({ info, setInfo }) => {
  const handleOnClick = () => {
    setInfo({ ...info, previewWindow: !info.previewWindow });
  };
  const currentClass = () => {
    if (info.previewWindow) return "previewWrap maximized";
    if (info.editorWindow) return "previewWrap hide";
    return "previewWrap";
  };
  return (
    <div class={currentClass()}>
      <div class="toolbar">
        <i class="fa fa-free-code-camp" title="no-stack-dub-sack"></i> Previewer
        <button class="arrows" onClick={handleOnClick}>
          <i
            class={info.previewWindow ? "fa fa-compress" : "fa fa-arrows-alt"}
          ></i>
        </button>
      </div>
      <div id="preview">
        <Markdown>{info.text}</Markdown>
      </div>
    </div>
  );
};
