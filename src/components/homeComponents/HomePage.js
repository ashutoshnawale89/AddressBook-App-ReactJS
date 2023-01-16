 import React ,{ Component } from 'react';
import "./HomePage.css"
import logo from "./OIP.jpg";
import { Link } from "react-router-dom"
import PersonService from '../service/AddressBookService'
import './Display.css';
import AddDataLogo from './AddData.jpg';
import Display from './Display'

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
          AllPersonArray: []
        };
      }

      componentDidMount() {
        console.log("Life cycle method");
        this.getAllPerson();
      }

      getAllPerson = () => {
        PersonService.getAllPerson()
          .then((response) => {
            this.setState({
              AllPersonArray: response.data.data
            });
            console.log(response);
          })
          .catch((err) => {
            alert("Something went wrong, while getting all the records", err);
          });
      };

    render() {
        console.log("====================================");
        console.log("Render method");
        console.log("====================================");
    return(
        <div>
            <body>
          <header class="header-content header">
            <div class="logo-content">
              <Link to="/home">
                <img src={logo} alt="" />
              </Link>
              <div>
                <span class="emp-text">ADDRESS</span>
                <br />
                <span class="emp-text emp-payroll">BOOK</span>
              </div>
            </div>
          </header>
          <div class="main-content">
            <div class="header-content sub-main-content">
              <div class="emp-details-text">
                Person Details Data
                <div class="emp-count"></div>
              </div>

              <Link to="/form">
                <img src={AddDataLogo} alt="AddData" />   
              </Link>
            </div>


            <div class="table-main">
            <Display
                personArray={this.state.AllPersonArray}
                getAllPerson={this.getAllPerson}
              />
          </div>
          </div>
        </body>
        </div>
    ); }
}

    export default HomePage

   