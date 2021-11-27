import React, { useState, useEffect } from "react";
// TEST HERE
import Axios from "axios";
import Notelist from "../components/Notelist";
import NoteService from "../services/note.service";

const Notes = () => {
  // testing this

  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");

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

  const saveNote = (e) => {
    e.preventDefault();
    alert("saved note");
    NoteService.register(email, description).then(
      (response) => {
        console.log(response.data);
        window.location = "/Notes";
      },
      (error) => {
        // some
      }
    );
  };

  return (
    <>
      <h1>Notes Page</h1>
      <button onClick={sendGetRequest}>Test</button>
      <form action="saveNote" method="POST">
        <div class="form-group">
          <label>Enter note</label>
          <input
            className="form-control"
            rows="10"
            type="text"
            name="Description"
            required
            onChange={(e) => {
              setDescription(e.targetValue);
            }}
          ></input>
          {/* Try wth input first */}
          {/* <textarea
            className="form-control"
            rows="10"
            type="text"
            name="Description"
            onChange={(e) => {
              setDescription(e.targetValue);
            }}
          ></textarea> */}
          <input
            type="submit"
            value="saveNote"
            className=""
            onClick={saveNote}
          />
        </div>
      </form>
      <h2>Past notes, filter possibly</h2>
      {/* Notes list, like task list.. */}
      {/* <Notelist></Notelist> */}
    </>
  );
};

export default Notes;
