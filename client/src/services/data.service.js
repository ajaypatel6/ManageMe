import axios from "axios";

const API_URL = "http://localhost:3001/getWeather/";

class DataService {
  getWeather(city) {
    return axios
      .get(API_URL + city, {
        city,
      })
      .then((response) => {
        // if (response.data.accessToken) {
        //   //   localStorage.setItem("user", JSON.stringify(response.data));
        // }
        // console.log(JSON.stringify(response.data) + " is the response");
        // console.log(JSON.stringify(response.data))
        console.log(response);
        console.log(response.data)
        return response.data;
      });
  }
}

export default new DataService();
