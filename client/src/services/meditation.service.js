import axios from "axios";

// tentative
const API_URL = "http://localhost:3001/api/meditation";
///api/meditation/saveMeditation
class MeditationService {
  saveMeditation(email,seconds) {
    return axios
    .post(API_URL + "/saveMeditation", {
      email,
      seconds,
      // email: email,
      // meditation_length: seconds,
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

  getMeditation(email, meditation_length ) {
    return axios
      .get(API_URL + meditation_length, {
        email,
        meditation_length,
      })
      .then((response) => {

        console.log(response);
        console.log(response.data)
        return response.data;
      });
  }
}

export default new MeditationService();
