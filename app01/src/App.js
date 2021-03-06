import React, { useState } from 'react';
import './App.css';
import Table from './components/Table'

function App() {

  const [data,dataSet]=useState([

    {name:`Red Dead Redemption 2`,price:80,imgSrc:`rdd2`},
    {name:`GTA V`,price:60,imgSrc:`gtav`}, // GTA V => gtav
    {name:`Smite`,price:5,imgSrc:`smite`},
  ])

  return (
    <React.Fragment>
      

      Games Under 6$ <br/>
      <Table data={data.filter(obj=>obj.price<6)} headers={[`image`,`name`,`price`]}/>

    </React.Fragment>
  );
}

export default App;
