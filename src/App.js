import './App.css';
import { Editor } from './textEditor';
import { MarkdownPreview } from './markdownPreview';

function App() {
  return (
    <div className="App">
      <Editor />
      <MarkdownPreview />
    </div>
  );
}

export default App;
