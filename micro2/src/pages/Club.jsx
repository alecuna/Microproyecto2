import { useState } from "react";

export default function Club() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit() {}

  return (
    <div>
      <label>
        Titulo:{""}
        <input value={title} onChange={(e) => setTitle(e.target.value)}></input>
      </label>
      <label>
        Descripcion:{""}
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
      </label>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
