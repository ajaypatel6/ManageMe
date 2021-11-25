import React, { useState, useEffect } from "react";
import Tasklist from "./Tasklist";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};

const Tasks = () => {
  const [name, setName] = useState("");
  const [length, setLength] = useState("");

  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert('enter info')
    } else if(isNaN(length)) {
      alert('not a number');
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditID(null);
      setIsEditing(false);
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name , length: length };

      setList([...list, newItem]);
      setName("");
      setLength("")
    }
  };

  const clearList = () => {
    setList([]);
  };

  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setName(specificItem.title);
  };

  const saveItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    // put into DB
    alert('saaved')
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  return (
    <>
      <h1>Tasks</h1>

      <section className="section-center">
        <form className="task-form" onSubmit={handleSubmit}>
          {/* {alert.show && <Alert {...alert} removeAlert={showAlert} list={list} />} */}
          <div className="form-control">
            <input
              className="taskLength"
              placeholder="minutes"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            /> 
            <input
              className="task"
              placeholder="Code x app"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit" className="submit-btn">
              {isEditing ? "edit" : "submit"}
            </button>
          </div>
        </form>
        {list.length > 0 && (
          <div className="task-container">
            <Tasklist
              items={list}
              removeItem={removeItem}
              editItem={editItem}
              saveItem={saveItem}
            />
            <button className="clear-btn" onClick={clearList}>
              clear items
            </button>
          </div>
        )}
      </section>
    </>
  );
};

export default Tasks;
