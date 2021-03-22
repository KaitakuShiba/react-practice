import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Hello from './Hello';
// import Timer from './Timer';
// import Todo from './Todo';
// import MarkdownEditor from './Markdown';
import Game from './Game';

ReactDOM.render(
  <React.StrictMode>
    {/* <Hello name="Taylor"/>
    <Timer />
    <Todo />
    <MarkdownEditor /> */}
    <Game />
  </React.StrictMode>, document.getElementById('root')
);
