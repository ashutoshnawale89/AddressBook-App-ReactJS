import axios from "axios";

class AddressBookService {
  baseUrl = "http://localhost:8080/AddressBookservice";

  addPerson(data) {
    return axios.post(`${this.baseUrl}/create`, data);
  }
  getAllPerson() {
    return axios.get(`${this.baseUrl}/get`);
  }

  deletePerson(person_id) {
    return axios.delete(`${this.baseUrl}/delete/${person_id}`);
  }
  getPersonById(person_id) {
    return axios.get(`${this.baseUrl}/get/${person_id}`);
  }

  updatePerson(person_id, data) {
    return axios.put(`${this.baseUrl}/update/${person_id}`, data);
  }

}

export default new AddressBookService();