import React, {useState} from 'react';
import ColorForm from './components/ColorForm';
import ColorCard from './components/ColorCard';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const[form, setForm] = useState({
    colors:"",
  })
  const handleForm = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const[colors, setColors] = useState ([
    {
    colors: "",
    }
  ])
  
  const handleAddColor = (e) => {
    e.preventDefault();
    setColors([...colors, form]);
    setForm({
      colors: "",
    })
  }
  return (
    <div className="App">
      <ColorForm 
      inputs = {form}
      handleFormChange = {handleForm}
      handleSubmit = {handleAddColor}
      />
      <div className ="d-flex justify-content-start  border p-2">
        {
          colors.map((color, i) => {
            return <ColorCard
                      key={i}
                      color={color.color}
                    />
          })
        }
      </div>
          
            




    </div>
  );
}

export default App;
