import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from './containers';
import store from './redux/store';



class Root extends React.Component {
    public render() {
        return (
            <Provider store={store}>
                <Router>
                    <React.Fragment>
                        <Route exact={true} path="/" component={Home} />
                    </React.Fragment>
                </Router>
            </Provider>
        )
    }
}

export default Root;