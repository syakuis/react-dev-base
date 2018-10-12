import React from 'react';
import style from '../resources/style.css';

const HelloWorld = () => (
  <div className="container">
    Hello World!!!
    <p className={style.color}>React!!!</p>
  </div>
);

const ConsoleLog = () => {
  console.log('Hello World!!!');
};

export default HelloWorld;
export { ConsoleLog };
