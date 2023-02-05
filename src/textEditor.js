import React from "react";
import "font-awesome/css/font-awesome.min.css";

export const Editor = ({ info, setInfo }) => {
  const handleChange = (event) => {
    setInfo({ ...info, text: event.target.value });
  };
  const handleOnClick = () => {
    setInfo({ ...info, editorWindow: !info.editorWindow });
  };
  const currentClass = () => {
    if (info.editorWindow) return "editorWrap maximized";
    if (info.previewWindow) return "editorWrap hide";
    return "editorWrap";
  };

  return (
    <div class={currentClass()}>
      <div class="toolbar">
        <i class="fa fa-free-code-camp" title="no-stack-dub-sack"></i> Editor
        <button class="arrows" onClick={handleOnClick}>
          <i
            class={info.editorWindow ? "fa fa-compress" : "fa fa-arrows-alt"}
          ></i>
        </button>
      </div>
      <textarea
        id="editor"
        type="text"
        value={info.text}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};
