import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './fonts/Lato-Regular.ttf';
import './fonts/Lato-Light.ttf';
import './fonts/Lato-Bold.ttf';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
