import axios from "axios";

const API_URL = "http://localhost:3001/api/notes/";
// DONE
class NoteService {
  register(email, description) {
    return axios.post(API_URL + "saveNote", {
      email,
      description,
    });
  }
}

export default new NoteService();
