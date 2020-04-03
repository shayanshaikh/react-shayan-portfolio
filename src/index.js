import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "animate.css/animate.min.css";
import App from './App';
//import Shayan from './Shayan';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import * as serviceWorker from './serviceWorker';

import SLogo from './SLogo';
import { Preloader, Placeholder } from 'react-preloading-screen';

ReactDOM.render(
  <React.StrictMode>
  	<Preloader fadeDuration={3693}>
    <App />
    <Placeholder>
    <div className="tes">
    <SLogo />
    </div>
    </Placeholder>
    </Preloader>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
