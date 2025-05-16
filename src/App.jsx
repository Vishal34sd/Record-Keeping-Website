import Header from './components/Header';
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Fields from './components/Fields';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    if (name.trim() === "" || email.trim() === "") {
      return; // Prevent adding empty entries
    }
    setData([...data, { name, email }]);
    setName("");
    setEmail("");
  };

  return (
    <div className="App">
      <Header />
      <div className="form">
        <TextField
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
          id="outlined-required"
          label="Name"
        />
        <TextField
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
          id="outlined-required"
          label="Email"
        />
        <Button onClick={addData} color="success" variant="contained">Add</Button>
      </div>

      <div className="data">
        <div className="data_val">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {data.map((element, index) => (
          <Fields
            key={index}
            name={element.name}
            email={element.email}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
