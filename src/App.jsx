import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  increment() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  decrement() {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  }

  render() {
    const { count } = this.state;
    return (
      <>
        <header>
          <h1>Counter App</h1>
        </header>
        <section>
          Count: {count}
          <div className="counter-container">
            <button
              type="button"
              className="counter"
              onClick={() => this.increment()}
            >
              Increment
            </button>
            <button
              type="button"
              className="counter"
              onClick={() => this.decrement()}
            >
              Decrement
            </button>
          </div>
        </section>
      </>
    );
  }
}

export default App;
