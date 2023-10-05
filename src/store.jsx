import { createStore } from 'redux'; // Import createStore from 'redux'
import rootReducer from './redux/clientReducer'; // Import your rootReducer from the appropriate location
import React from 'react'; // Import React
import ReactDOM from 'react-dom'; // Import ReactDOM
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
  </Provider>,
  document.getElementById('root') // You need to specify the DOM element where you want to render your React app
);

export default store;
