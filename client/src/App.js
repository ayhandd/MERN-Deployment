import React from 'react';
import {Router} from "@reach/router"
import Main from "./pages/Main"
import PetAdd from "./components/PetAdd"
import PetDetail from "./components/PetDetail"
import PetEdit from "./components/PetEdit"


function App() {
  return (
    <div>
      <Router>
        <Main path="/" default/>
        <PetAdd path="/pet/new"/>
        <PetDetail path="/pet/:id"/>
        <PetEdit path="/pet/update/:id"/>
      </Router>
    </div>
  );
}

export default App;