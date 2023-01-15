import axios from "axios";

class AddressBookService {
  baseUrl = "http://localhost:8080/AddressBookservice";

  addPerson(data) {
    return axios.post(`${this.baseUrl}create`, data);
  }
}
export default AddressBookService();