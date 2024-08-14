import React, { useState } from "react";

const MakeNote = () => {
  const [Task, setTask] = useState([]);
  const [InputTitle, setInputTitle] = useState("");
  const [InputDesc, setInputDesc] = useState("");
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState("");

  const newTask = {
    title: InputTitle,
    desc: InputDesc,
  };

  function AddNote() {
    if (!(InputTitle === "" && InputDesc === "")) {
      newTask.title = InputTitle;
      newTask.Desc = InputDesc;
      setTask([...Task, newTask]);
      setInputTitle("");
      setInputDesc("");
    }
  }

  function deleteHandler(e) {
    let localArr = [...Task];
    localArr.splice(e, 1);
    setTask(localArr);
  }

  function editHandler(element) {
    setIndex(element);
    setShow(true);
    console.log(element);
    let localArray = [...Task];

    setInputTitle(localArray[element].title);
    setInputDesc(localArray[element].desc);
  }

  function UpdateNote() {
    let UpdateArray = [...Task];
    const newUpdate = {
      title: InputTitle,
      desc: InputDesc,
    };
    UpdateArray[index] = newUpdate;
    setInputTitle("");
    setInputDesc("");
    setShow(false);
    setTask(UpdateArray);
  }

  return (
    <>
      <form className="w-50 m-auto mt-3">
        <h1 className="text-center text-light bg-danger ">Daily Goals</h1>
        <div className="mb-3 ">
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Your title"
            value={InputTitle}
            onChange={(e) => setInputTitle(e.target.value)}
          />
        </div>
        <div className="mb-3 ">
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Your Description"
            value={InputDesc}
            onChange={(e) => setInputDesc(e.target.value)}
          />
        </div>
      </form>
      <div className="text-center">
        {show ? (
          <button
            className="btn btn-primary w-25 m-auto mt-3"
            onClick={UpdateNote}
          >
            Update Note
          </button>
        ) : (
          <button
            className="btn btn-primary w-25 m-auto mt-3"
            onClick={AddNote}
          >
            Add Note
          </button>
        )}
      </div>

      <div className=" w-100  mt-3 row row-cols-1 row-cols-md-4  g-4 d-flex justify-content-around ">
        {Task.map((e, i) => (
          <div
            key={i}
            className="bg-primary text-light mt-3 mx-2 rounded col border  border-dark"
          >
            <div className="card">
              <p className="text-center text-dark">
                <span className="fw-bold">Title : </span>
                {e.title}
              </p>
              <p className="text-center  text-dark">
                <span className="fw-bold">Description : </span>
                {e.desc}
              </p>
              <div className="d-flex justify-content-center  py-2">
                <button
                  className="btn btn-secondary mx-2"
                  onClick={() => editHandler(i)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger mx-2"
                  onClick={() => deleteHandler(i)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MakeNote;
