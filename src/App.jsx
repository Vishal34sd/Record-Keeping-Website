import Header from './components/Header'
import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
    <Header/>
    <div className="form">
    <TextField
          required
          id="outlined-required"
          label="Name"
          defaultValue="Name"
        />
        <TextField
          required
          id="outlined-required"
          label="Email"
          defaultValue="Email"
        />
        <Button color = "success" variant="contained">Add</Button>
        </div>

  </div>
  )
}

export default App
