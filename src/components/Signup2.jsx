import React, { useState } from 'react';
import Axios from 'axios';
//signup-recuiters
//signup2-job seekers
const Signup2 = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    const [mobilenumber, setMobilenumber] = useState("");
    const [jobRole, setJobRole] = useState("");
    const [errorMessage, setErrorMessage] = useState("");


    const register2 = (e) => {
        e.preventDefault();
        setErrorMessage("");

        // Post request to register
        Axios.post('http://localhost:3000/register/jobseekers', {
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
            .catch((error) => {
                alert("fail");
                if (error.response) {
                    setErrorMessage(error.response.data); // Set error message from server response
                } else {
                    setErrorMessage("Registration failed. Please try again.");
                }
            });
    };

    return (
        <div className="main">
            <div className="form-container">
                <div className='head'>
                    <h4 className='font-bold'>Create your JobHub Profile</h4>
                    <p className='font-regular'>Create and apply for jobs from JobHub</p>
                </div>
                <form id="registration-form" onSubmit={register2}>
                    <div className="form-group">
                        <label htmlFor="firstname" className='font-medium'>First Name:</label>
                        <input
                            type="text"
                            id="firstname"
                            name="firstname"
                            placeholder="What is your first name?"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)} a
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastname" className='font-medium'>Last Name:</label>
                        <input
                            type="text"
                            id="lastname"
                            name="lastname"
                            placeholder="What is your last name?"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className='font-medium'>Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tell Us your E-mail ID"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className='font-medium'>Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder='Minimum 6 characters'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
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
                            value={mobilenumber}
                            onChange={(e) => setMobilenumber(e.target.value)}
                            required
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
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                    <button type="submit" className='font-medium'>Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default Signup2;
