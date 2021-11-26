import React from "react";
// TEST HERE
import Axios from "axios";
import Notelist from "../components/Notelist";

const Notes = () => {
  // testing this

  // This is working????????????????????????????
  const API_URL = "http://localhost:3001/account/";
  var name = "toronto";

  async function sendGetRequest() {
    const response = await Axios.get(API_URL + name, {
      // params: {
      //   first: "Dan",
      //   last: "Cox",
      // },
    });
    console.log(response.data);
  }
  // async function sendGetRequest() {
  //   const response = await Axios.get("http://localhost:3001/example", {
  //     params: {
  //       first: "Dan",
  //       last: "Cox",
  //     },
  //   });
  //   console.log(response.data);
  // }

  return (
    <>
      <h1>Notes Page</h1>
      <button onClick={sendGetRequest}>Test</button>
        <div class="form-group">
          <label for="notesBox">Enter note</label>
          <textarea
            class="form-control"
            id="notesBox"
            rows="10"
          ></textarea>
        </div>
      <h2>Past notes, filter possibly</h2>
      {/* Notes list, like task list.. */}
      {/* <Notelist></Notelist> */}
    </>
  );
};

export default Notes;
