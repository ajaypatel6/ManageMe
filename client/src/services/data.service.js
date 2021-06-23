import axios from "axios";

const API_URL = "http://localhost:3001/getWeather/";

class DataService {
  getWeather(username, city) {
    return axios
      .get(API_URL + city, {
        city,
      })
      .then((response) => {
        // if (response.data.accessToken) {
        //   //   localStorage.setItem("user", JSON.stringify(response.data));
        // }
        return response.data;
      });
  }
}

export default new DataService();
