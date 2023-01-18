import React from "react";
import Form from './components/Page';
import HomePage from "./components/homeComponents/HomePage";
import './components/formcomponents/FormComponent.css';
 import {Link , Route, Routes} from "react-router-dom"


class App extends React.Component {
  render(){
  return (
    <div >
      <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/form' element={<Form/>}/>
            <Route path="/Personform/:id" element={<Form />}></Route>
        </Routes>
    </div>
  );
}
}
export default App;
