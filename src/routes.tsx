import React from 'react';
import { Routes, Route } from 'react-router-dom'

import Home from "./pages/Home"
import Tasks from "./pages/Tasks"

const Rotas = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tarefas" element={<Tasks />} />
    </Routes>
  );
}

export default Rotas;

//react router v6 doesn't support exact anymore.
// old - v5 <Route exact path="/" component={Home} />
// new - v6 <Route path="/" element={<Home />} />

//function Path() {
  //return(
    //<Routes>
      //<Route path="/" exact component={Home} />
      //<Route path="/tarefas" exact component={Tasks} />
    //</Routes>
  //)
//}