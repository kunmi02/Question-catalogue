import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import store from './store';
// import thunk from 'redux-thunk';
// import reducers from './reducers/index';
// import Routes from './Routes';
import App from './components/App';

// const store = createStore(reducers, applyMiddleware(thunk));

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//     {/* <Routes /> */}
//   </React.StrictMode>,
//   document.getElementById('root'),
// );

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
