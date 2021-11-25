import axios from "axios";

const API_URL = "http://localhost:3001/api/task/";

class TaskService {
  saveTask(task_length, description, email, category) {
    return axios.post(API_URL + "addTask", {
      task_length,
      description,
      email,
      category,
    });
  }

  //   getCurrentUser() {
  //     return JSON.parse(localStorage.getItem("user"));
  //   }
}

export default new TaskService();
