import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import {createStore} from "redux";
import Counter from "./components/Counter";
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const initialState = {
count: 0
};

const INCREMENT: string = 'INCREMENT';
const DECREMENT: string = 'DECREMENT';

const reducer =(state = initialState, action: any) =>{
  switch(action.type){
   case INCREMENT :
    return{
      count: state.count + 1
    };
   case DECREMENT :
    return{
      count: state.count -1
    };
   default:
    return state;
  }
}

const store= createStore(reducer);
store.dispatch({type: INCREMENT});
store.dispatch({type: DECREMENT});

const App = () => {
 return (
  <Provider store={store}>
   <Counter />
 </Provider>
 );
}

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
