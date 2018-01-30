import React from 'react';
import style from '../resources/style.css';

const HelloWorld = () => (
  <div className="container">
    Hello World!!! <span className={style.color}>React!!!</span>
  </div>
);

const ConsoleLog = () => {
  console.log('Hello World!!!');
};

export default HelloWorld;
export { ConsoleLog };
