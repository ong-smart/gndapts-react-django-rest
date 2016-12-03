import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/Root/Root';
import configureStore from './store/configureStore';
import { authLoginUserSuccess } from './actions/auth';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { AppContainer } from 'react-hot-loader';


const target = document.getElementById('root');

const store = configureStore(window.INITIAL_STATE, browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

const node = (
    <Root store={store} history={history}/>
);

const token = localStorage.getItem('token');
if (token !== null) {
    store.dispatch(authLoginUserSuccess(token));
}

ReactDOM.render(node, target);

if (module.hot) {
console.log(module.hot);
    module.hot.accept('./containers/Root/Root', () => {
        ReactDOM.render(
            <AppContainer>
    <Root store={store} history={history}/>
</AppContainer>

            , target);


    });
}


