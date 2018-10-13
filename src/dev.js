import ReactDOM from 'react-dom';
import React from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import HelloWorld from '_components/HelloWorld';
import Counter from '_components/Counter';

const Root = () => (
  <div className="container">
    <HelloWorld />
    {process.env.NODE_ENV}
    <hr />
    <Counter title="counter" />
  </div>
);

ReactDOM.render(<Root />, document.getElementById(APP_ID));
