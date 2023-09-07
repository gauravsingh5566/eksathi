// import Forum from 'pages/Forum/Forum';
import React from 'react'
import { Route, Routes } from 'react-router-dom';

const NewRoutes = () => {
  return (
    <Routes>
        {/* <Route path='/' element={Forum}/> */}
        <Route path='/' element={<h1>Hello</h1>}/>
    </Routes>
  )
}

export default NewRoutes;