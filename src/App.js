import "./App.css";
import { marked } from "marked";
import { useState } from "react";

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![Grumpy Cat](https://imgr.search.brave.com/HIZatZuKhc8uEXX0U8buOB9LTZbqI_rvHPdm6iRXaGo/fit/190/225/ce/1/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5o/VzdIQWF1QU8yeFF1/VUtmUmw2R2VnQUFB/QSZwaWQ9QXBp)
`;

function Editor(props) {
  return (
    <textarea
      value={props.value}
      onChange={props.onChange}
      id="editor"
    ></textarea>
  );
}

function Preview(props) {
  return (
    <div
      id="preview"
      dangerouslySetInnerHTML={{ __html: props.children }}
    ></div>
  );
}

function App() {
  const [rawText, setRawText] = useState(placeholder);
  const [parsedText, setParsedText] = useState(
    marked.parse(placeholder, { gfm: true, breaks: true })
  );

  const changeHandler = (event) => {
    const raw = event.target.value;
    const parsed = marked.parse(raw, { gfm: true, breaks: true });
    setRawText(raw);
    setParsedText(parsed);
  };

  return (
    <div id="wrapper">
      <Editor onChange={changeHandler} value={rawText} />
      <Preview>{parsedText}</Preview>
    </div>
  );
}

export default App;
