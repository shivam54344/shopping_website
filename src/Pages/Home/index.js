import React, { useState } from 'react'
import Card from '../../Components/Card'
import axios from 'axios'
import './style.css'

const Home = ({CrdList, SetCrdList}) => {
  const getProducts = async () => {
    let { data } = await axios.get("https://boppotech.github.io/react-task-json.github.io/reactjob.json");
    if (data) {
      SetCrdList(data);
    }
  }

  useState(() => {
    getProducts();
  }, [])
  return (
    <>
      <div className='container'>
        <div>
          <h2>Explore the wide range of products here</h2>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {CrdList.map((elem, ind) => <Card key={ind} Data={elem} Id={ind} />)}
        </div>
        {console.log("Card details =============>>", CrdList)}
      </div>
    </>
  )
}

export default Home
