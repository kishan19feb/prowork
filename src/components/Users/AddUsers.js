import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {Container, FormWrap, InputWrap, NameWrap} from '../Styled';

function AddUsers(){
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [gender,setGender] = useState('');
    const [age,setAge] = useState('');
    const [address,setAddress] = useState('');
    const [description,setDescription] = useState('');
    const history = useHistory();

    function saveUser(){
        let newData = {firstName,lastName, gender, age, address, description};
        let userData = localStorage.getItem('userData');
        if(userData == null){
            userData = [];
        } else {
            userData = JSON.parse(userData);
        }
        if(firstName.trim() !== "" && lastName.trim() !== "" && gender.trim() !== "" && age.trim() !== "" && address.trim() !== "" && description.trim() !== ""){
            if(age.trim() < 5 || age.trim() > 100){
                alert("Age should be between 5 to 100.");
            } else {
                userData.push(newData);
                alert("User details saved successfully.");
                history.push('/list');                
            }
        } else {
            alert("All fields are mandatory.");
        }
        localStorage.setItem('userData',JSON.stringify(userData));
    }

    return (
        <Container>
            <h1>Create User</h1>
            <FormWrap>
                <NameWrap>
                    <InputWrap>
                        <label>First Name</label>
                        <input type="text" value={firstName} onChange={(event) => setFirstName(event.target.value)}/>
                    </InputWrap>

                    <InputWrap>
                        <label>Last Name</label>
                        <input type="text" value={lastName} onChange={(event) => setLastName(event.target.value)}/>
                    </InputWrap>
                </NameWrap>

                <InputWrap>
                    <label>Gender</label>
                    <select value={gender} onChange={(event) => setGender(event.target.value)}>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </InputWrap>
                
                <InputWrap>
                    <label>Age</label>
                    <input type="number" value={age} onChange={(event) => setAge(event.target.value)}/>
                </InputWrap>

                <InputWrap>
                    <label>Address</label>
                    <textarea rows='2' value={address} onChange={(event) => setAddress(event.target.value)}></textarea>
                </InputWrap>

                <InputWrap>
                    <label>Description</label>
                    <textarea rows='2' value={description} onChange={(event) => setDescription(event.target.value)}></textarea>
                </InputWrap>
                
                <InputWrap>
                    <button onClick={saveUser}>Save</button>
                </InputWrap>
            </FormWrap>
        </Container>
    );
}
export default AddUsers;