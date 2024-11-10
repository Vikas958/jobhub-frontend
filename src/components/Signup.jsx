import React, { useState } from 'react';
import Axios from 'axios';

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [mobilenumber, setMobilenumber] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const register = (e) => {
    e.preventDefault();
    setErrorMessage("");
    //ee route okati marustey chalu avani enduk gelukutunav  dia aguu
    //ee url akada petu ah url ikada petu
    Axios.post(' http://localhost:3000/register/recruiters', {
      firstName,
      lastName,
      email,
      password,
      gender,
      mobilenumber,
      jobRole,
    })
      .then(() => {
        alert("Registration successful!");
        // Reset form fields after successful registration
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setGender("");
        setMobilenumber("");
        setJobRole("");
      })
      .catch((error) => {//rey
        if (error.response) {
          setErrorMessage(error.response.data); // Set error message from server response
        } else {
          setErrorMessage("Registration failed. Please try again.");
        }
      });

  }

  return (//arey chepedi ardam katledha avani enduk gelkutunav double pani
    <div className="main">
      <div className="form-container">

        <div className='head'>
          <h4 className='font-bold'>We're excited to collaborate with you in refining your recruitment journey.</h4>
          <p className='font-regular'>Crafting an enticing look to attract top-tier talent.</p>
        </div>
        <form id="registration-form" onSubmit={register}>
          <div className="form-group">
            <label htmlFor="firstname" className='font-medium'>First Name:</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="What is your first name?"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastname" className='font-medium'>Last Name:</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="What is your last name?"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className='font-medium'>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tell Us your E-mail ID"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className='font-medium'>Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder='Minimum 6 characters'
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label className='font-medium'>Gender:</label>
            <div className='gender'>
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                onChange={(e) => setGender(e.target.value)}
                required
              />
              <label htmlFor="male" className='font-regular'>Male</label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="female"
                onChange={(e) => setGender(e.target.value)}
                required
              />
              <label htmlFor="female" className='font-regular'>Female</label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="mobile" className='font-medium'>Mobile Number:</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              pattern="[0-9]{10}"
              placeholder='Enter your mobile number'
              required
              value={mobilenumber}
              onChange={(e) => setMobilenumber(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="job-role" className='font-medium'>Job Role:</label>
            <select
              id="job-role"
              name="job-role"
              required
              value={jobRole}
              onChange={(e) => setJobRole(e.target.value)}
            >
              <option value="">Select Job Role</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="manager">Manager</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button type="submit" className='font-medium'>Sign Up</button>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Display error message */}
        </form>
      </div>
    </div>
  );
}

export default Signup;
