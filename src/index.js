import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './components/Root';
import {BrowserRouter} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
