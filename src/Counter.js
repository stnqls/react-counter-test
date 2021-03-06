import React, {Component} from 'react';

class Counter extends Component {
  state = {
    number: 0
  }
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  componentWillMount() {
    console.log('componenetWillMount (deprecated)');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    if(nextProps.number %5 === 0) return false;
    return true;
  }

  componentWillUpdate(nextpProps, nextState) {
    console.log('componentWillUpdate');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  handleIncrease = () => {
    this.setState({
      number: this.state.number + 1
    });

    // 1.
    // this.setState(
    //   (state) => ({
    //     number: state.number
    //   })
    // );

    // 2.
    // this.setState(
    //   ({number}) => ({
    //     number:number +1
    //   })
    // );

    // 3.
    // const {number} = this.setState;
    // this.setState({
    //   number: number+1
    // });
  }

  handleDecrease = () => {
    this.setState({
      number: this.state.number - 1
    });
  }
  // constructor(props) {
  //   super(props);
  //   this.handleIncrease = this.handleIncrease.bind(this);
  //   this.handleDecrease = this.handleDecrease.bind(this);
  // }

  render(){
    return(
      <div>
        <h1>카운터</h1>
        <div>값: {this.state.number}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    );
  }
}

export default Counter;