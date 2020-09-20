import React, { useState } from 'react'
import axios from 'axios'
import {navigate} from "@reach/router"

const PetAdd = () => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("")
    const [skill2, setSkill2] = useState("")
    const [skill3, setSkill3] = useState("")
    const [errs, setErrs] = useState("");

    const onSubmit = e =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/pet/new', {
            name,
            type,
            description,
            skill1,
            skill2,
            skill3
        })
        .then(res => {
            if(res.data.error){
                setErrs(res.data.error.errors);
            }else{
                navigate(`/`)
            }
        })
        .catch(err => console.log(err))
    }
    return(
        <div className="container">
            <h1>Pet Shelter</h1>
            <h4>Know a pet needing a home?</h4>
            <ul className="nav justify-content-end">
                <li className="nav-item">
                    <button className="btn btn-secondary btn-m" onClick={() => navigate(`/`)}>Back to Home</button>
                </li>
            </ul>
            <form onSubmit={onSubmit}>
                
                    <div className="form-group col-md-6">
                        <label>Pet Name:</label>
                        <input className="form-control form-control-sm w-50" type="text" name="name" onChange={(e) => setName(e.target.value)}/>
                        {errs.name ? <p className="text-danger small">{errs.name.message}</p>: null}
                    </div>
                    <div className="form-group col-md-6">
                        <label>Pet Type</label>
                        <input className="form-control form-control-sm w-50" type="text" name="type" onChange={(e) => setType(e.target.value)}/>
                        {errs.type ? <p className="text-danger small">{errs.type.message}</p>: null}
                    </div>
                    <div className="form-group col-md-6">
                        <label>Description</label>
                        <input className="form-control form-control-sm w-50" type="description" name="description" onChange={(e) => setDescription(e.target.value)}/>
                        {errs.description ? <p className="text-danger small">{errs.description.message}</p>: null}
                    </div>
                    <p>Skills (optional):</p>
                    <div className="form-group col-md-6">
                        <label>Skill 1:</label>
                        <input className="form-control form-control-sm w-50" type="text" name="skill1" onChange={(e) => setSkill1(e.target.value)}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label>Skill 2:</label>
                        <input className="form-control form-control-sm w-50" type="text" name="skill2" onChange={(e) => setSkill2(e.target.value)}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label>Skill 3:</label>
                        <input className="form-control form-control-sm w-50" type="text" name="skill3" onChange={(e) => setSkill3(e.target.value)}/>
                    </div>
            
                <input className="btn btn-primary btn-lg" type="submit" value="Add Pet"/>
            </form>
        </div>
    )
}

export default PetAdd;