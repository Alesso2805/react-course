import './App.css';
import Axios from "axios";
import { useState } from "react";

function App() {
    const [name, setName] = useState("");
    const [predictedAge, setPredictedAge] = useState(null);

    const fetchData = () => {
        Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
            console.log(res.data);
        });
    };

  return (
      <div className="App">
          <input
              placeholder="Ex. Pedro..."
              onChange={(event) => {
                  setName(event.target.value);
              }}
          />
          <button onClick={fetchData}>Predict Age</button>

          <h1> Name: {predictedAge?.name}</h1>
          <h1> Predicted age: {predictedAge?.age}</h1>
          <h1> Count: {predictedAge?.count}</h1>
      </div>
  );
}

export default App;
