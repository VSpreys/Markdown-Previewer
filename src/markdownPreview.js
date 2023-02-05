import React from "react";
import "font-awesome/css/font-awesome.min.css";

export class MarkdownPreview extends React.Component {
  //   constructor() {
  //     super();
  //     this.buyMoreBeer = this.buyMoreBeer.bind(this);
  //   }

  render() {
    return (
      <div class="editorWrap">
        <div class="toolbar">
          <i class="fa fa-free-code-camp" title="no-stack-dub-sack"></i> Editor
          <button class="arrows">
            <i class="fa fa-arrows-alt"></i>
          </button>
        </div>
      </div>
    );
  }
}
