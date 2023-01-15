import React from "react";
import Form from './components/Page'
import './components/formcomponents/FormComponent.css';
import {Link , Route, Router} from "react-router-dom"


class App extends React.Component {
  render(){
  return (
    <div >
      <Form/>
    </div>
  );
}
}


export default App;
