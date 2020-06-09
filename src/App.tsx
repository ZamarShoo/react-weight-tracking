import React from 'react';
import s from './App.module.css'
import Chart from "./components/Chart/Chart";
import Info from "./components/Info/Info";
import Table from './components/Table/Table';

function App() {
  return (
    <div className={s.wrapper}>
      <Chart/>
      <div className={s.downWrapper}>
          <Table />
          <Info />
      </div>
    </div>
  );
}

export default App;
