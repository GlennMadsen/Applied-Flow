import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppliedFlow from "./components/AppliedFlow/AppliedFlow";

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppliedFlow />, document.getElementById('root'));
registerServiceWorker();
