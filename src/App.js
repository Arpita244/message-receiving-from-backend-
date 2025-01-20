import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; 
function App() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    hobbies: '',
    contact: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [hopefulMessage, setHopefulMessage] = useState('');


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {  // Mark the function as async
    e.preventDefault();
    console.log('Form Data:', formData);
  
    try {
      // Sending data to the backend
      const response = await axios.post('https://message-receiving-from-backend-1wtq.vercel.app/submit', formData);
  
      const data = await response.data;
  
      // Setting the hopeful message from the backend
      setHopefulMessage(data.hopefulMessage);
      setSubmitted(true);
    } catch (error) {
      console.error('Error connecting to backend:', error);
    }
  };
  

  const handleReset = () => {
    setFormData({
      name: '',
      age: '',
      gender: '',
      hobbies: '',
      contact: '',
      message: ''
    });
    setSubmitted(false);
  };

  return (
    <div className="App">
      <h1>Alone People Details Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter your age"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select your gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="hobbies">Hobbies:</label>
          <input
            type="text"
            id="hobbies"
            name="hobbies"
            value={formData.hobbies}
            onChange={handleChange}
            placeholder="Enter your hobbies"
          />
        </div>

        <div className="form-group">
          <label htmlFor="contact">Contact Number:</label>
          <input
            type="tel"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="Enter your contact number"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write something about yourself"
          ></textarea>
        </div>

        <button type="submit">Submit</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </form>

      {submitted && (
        <div className="form-submission">
          
          <h2>{hopefulMessage}</h2>
        </div>
      )}
    </div>
  );
}

export default App;