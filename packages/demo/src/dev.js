import ReactDOM from 'react-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

import HelloWorld from '_components/HelloWorld';

const Root = () => (
  <div>
    Hello World!!!
    <HelloWorld />
  </div>
);

ReactDOM.render(<Root />, document.getElementById(APP_ID));
