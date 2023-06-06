import { Component } from "react";

type CounterState = {
  count: number;
};

type CounterProps = {
  message: string;
};

export default class Counter extends Component<CounterProps, CounterState> {
  state = {
    count: 0,
  };

  handleCounter = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>Counter - {this.state.count}</h1>
        <button onClick={() => this.handleCounter()}>Increment</button>
        <h2>{this.props.message}</h2>
      </div>
    );
  }
}
