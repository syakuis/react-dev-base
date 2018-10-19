import ReactDOM from 'react-dom';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';

import HelloWorld from '_components/HelloWorld';
import Counter from '_components/Counter';

const Root = () => (
  <div className="container">
    <HelloWorld />
    {process.env.NODE_ENV}
    <hr />
    <i className="fas fa-cog" />
    <Counter title="counter" />
  </div>
);

ReactDOM.render(<Root />, document.getElementById(APP_ID));
