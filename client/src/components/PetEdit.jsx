import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {navigate} from "@reach/router"

const PetEdit = (props) => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [description, setDescription] = useState("");
    const [skill1, setSkill1] = useState("")
    const [skill2, setSkill2] = useState("")
    const [skill3, setSkill3] = useState("")
    const [errs, setErrs] = useState("");
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${props.id}`)
        .then(res =>{
            setName(res.data.name);
            setType(res.data.type);
            setDescription(res.data.description);
            setSkill1(res.data.skill1);
            setSkill2(res.data.skill2);
            setSkill3(res.data.skill3);
            setLoaded(true);
        })
        .catch(err =>  console.log(err))
    },[])

    const onUpdate = e =>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/pet/update/${props.id}`, {
            name,
            type,
            description,
            skill1,
            skill2,
            skill3
        })
        .then(res => 
            {
                if(res.data.error){
                    setErrs(res.data.error.errors);
                }else{
                    navigate(`/pet/${props.id}`)
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
        {loaded && (
        <form onSubmit={onUpdate}>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label>Pet Name:</label>
                    <input className="form-control form-control-sm w-50" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
                    {errs.name ? <p className="text-danger small">{errs.name.message}</p>: null}
                </div>
                <div className="form-group col-md-6">
                    <p>Skills (optional):</p>
                    <label>Skill 1:</label>
                    <input className="form-control form-control-sm w-50" type="text" name="skill1" value={skill1} onChange={(e) => setSkill1(e.target.value)}/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label>Pet Type</label>
                    <input className="form-control form-control-sm w-50" type="text" name="type" value={type} onChange={(e) => setType(e.target.value)}/>
                    {errs.type ? <p className="text-danger small">{errs.type.message}</p>: null}
                </div>
                <div className="form-group col-md-6">
                    <label>Skill 2:</label>
                    <input className="form-control form-control-sm w-50" type="text" name="skill2" value={skill2} onChange={(e) => setSkill2(e.target.value)}/>
                </div>
            </div>
        <div className="form-row">
            <div className="form-group col-md-6">
                <label>Description</label>
                <input className="form-control form-control-sm w-50" type="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                {errs.description ? <p className="text-danger small">{errs.description.message}</p>: null}
            </div>
            <div className="form-group col-md-6">
                <label>Skill 3:</label>
                <input className="form-control form-control-sm w-50" type="text" name="skill3" value={skill3} onChange={(e) => setSkill3(e.target.value)}/>
            </div>
        </div>
            <input className="btn btn-primary btn-lg" type="submit" value="Edit Pet"/>
        </form>)}
    </div>
    )
}

export default PetEdit;