import React from "react";

class HomeClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      counter: prevState.counter + 1,
    }));
  };
  render() {
    return (
      <>
        H1 my name {this.props.name}
        <button onClick={this.handleIncrement}>
          {this.state.counter}class Counter
        </button>
      </>
    );
  }
}

export default HomeClass;
