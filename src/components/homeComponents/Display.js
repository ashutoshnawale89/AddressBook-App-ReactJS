import "./Display.css"
import CreateLogo from './update.jpg';
import DeleteLogo from './delete.jpg';
import { useNavigate } from "react-router-dom"
import PersonService from '../service/AddressBookService';

const Display = (props) => {
    let navigate = useNavigate();
    
    const update = (personId) => {
        navigate(`Personform/${personId}`)
    }
    
    const remove = (personId) => {
        console.log(personId);
        var answer = window.confirm(
            "Data once deleted cannot be restored!! Do you wish to continue ?"
            );
        if (answer === true){
            PersonService.deletePerson(personId)
            .then((data) => {
                 console.log(data);
              alert("Person deleted successfully!!");
              window.location.reload();
              props.getAllPerson();
            })
            .catch((error) => {
              console.log("Something Went Wrong!");
            });
        } else {
          alert("Person Not Deleted");
        }
      };


    return(
        <div>
            <table id="display" className="display">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Pin-Code</th>
                        <th>Phone-Number</th>
                        <th>Email-Id</th>
                        <th>Gender</th>
                        <th>Notes</th>
                        <th>Actions</th>
                    </tr>
               </thead>
               <tbody>
                {props.personArray && 
                props.personArray.map((person, index) => (
                    <tr key={`${index}`}>
                        
                        <td>{person.name}</td>
                        <td>{person.address}</td>
                        <td>{person.city}</td>
                        <td>{person.state}</td>
                        <td>{person.pincode}</td>
                        <td>{person.phoneNumber}</td>
                        <td>{person.email}</td>
                        <td className="gender">{person.gender}</td>
                        <td>{person.notes}</td>
                        <td>
                            <img className="removeimg"
                            onClick={() => remove(person.addressId)}
                            src={DeleteLogo}
                            alt="delete"/>
                            <img className="updateimg"
                            onClick={() => update(person.addressId)}
                            src={CreateLogo}
                            alt="edit"/>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    ); }

    export default Display