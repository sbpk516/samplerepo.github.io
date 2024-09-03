import React, { Component } from 'react';
import { marked } from 'marked';

class MarkdownPreviewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: `
# Welcome to my Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Here's some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)
`
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }

  renderMarkdown() {
    return { __html: marked(this.state.input) };
  }

  render() {
    return (
      <div className="App">
        <textarea
          id="editor"
          value={this.state.input}
          onChange={this.handleChange}
        ></textarea>
        <div id="preview" dangerouslySetInnerHTML={this.renderMarkdown()}></div>
      </div>
    );
  }
}

export default MarkdownPreviewer;
