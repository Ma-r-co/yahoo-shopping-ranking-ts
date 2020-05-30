import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { setupStore } from './store/setupStore';
import { ConnectedRouter } from 'connected-react-router';
import App from './App';


const history = createBrowserHistory()
const store = setupStore(history);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

