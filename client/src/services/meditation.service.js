import axios from "axios";

// tentative
const API_URL = "http://localhost:3001/api/meditation/";

class MeditationService {
  saveMeditation(email,seconds) {
    return axios
    .post(API_URL + "saveMeditation", {
      email,
      seconds,
    })
      .then((response) => {
        // if (response.data.accessToken) {
        //   //   localStorage.setItem("user", JSON.stringify(response.data));
        // }
        console.log(JSON.stringify(response.data) + " is the response");
        console.log(JSON.stringify(response.data))
        console.log('saving meditation')
        return response.data;
      });
  }
}

export default new MeditationService();
