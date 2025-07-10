import React from 'react';
import './App.css';

export default class App extends React.Component<{}, { result: number }> {

  constructor(props: {}) {
    super(props);
    this.state = {
      result: 0
    };
  }

  async componentDidMount(): Promise<void> {

  }

  render() {
    return (
      <>
        <div className="card">
          <button onClick={() => {
            this.setState({ result: this.state.result + 1 });
          }}>
            {this.state.result}
          </button>
        </div>
      </>
    )
  }
}
