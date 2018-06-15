import * as React from 'react';
import { connect, DispatchProp } from "react-redux";
import "../App.css"
import logo from '../logo.svg';
 
export interface ICounter{
    count: number
};

export interface ICounterStateProps {
  count: number,
}

class Counter extends React.Component<ICounterStateProps & DispatchProp> {
  constructor(props: any){
      super(props);
      this.state={
          count: 0
      }
  }

public increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
}

public decrement=()=>{
    this.props.dispatch({ type: 'DECREMENT' });
}    

public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">A BASIC COUNTER APPLICATION</h1>
        </header>
       <h2> COUNTER </h2> 
       <button onClick={this.decrement}> - </button>
        <span> {this.props.count} </span>
        <button onClick={this.increment}> + </button>
      </div>
    );
  }
}
const mapStateToProps = (state: any) => {
    return {
      count: state.count
    };
  }

export default connect(mapStateToProps)(Counter);
