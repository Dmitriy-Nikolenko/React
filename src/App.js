import { Message } from './Message';

const text = {text: "Home work lesson 1 successfully"};

export function App(props) {
  return (
    <div className="App">
      <header className="App-header"><Message text={text} /></header>
    </div>
  );
}

