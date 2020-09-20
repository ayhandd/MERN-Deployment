import React, {useEffect, useState} from 'react'
import {navigate} from '@reach/router'
import axios from 'axios'

const PetDetail = (props) => {
    const [pet, setPet] = useState({})
    const [like, setLike] = useState(0);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pet/${props.id}`)
        .then(res => setPet(res.data))
        .catch(err =>  console.log(err))
    },[])
    const deletePet = () => {
        axios.delete(`http://localhost:8000/api/pet/delete/${props.id}`)
        .then(res => navigate("/products"))
        .catch(err => console.log(err))
    }
    const likeCount = (e) => {
        setLike(like +1);
        e.target.disabled = true
    }
    return(
        <div className="container">
            <h1>Pet Shelter</h1>
            <h4>Details about : {pet.name}</h4>
        <div className="card text-center">
        <div className="card-header font-weight-bold">{pet.name}</div>
        <div className="card-body">
        <dl className="row card-text">
            <dt className="col-sm">Pet Type :</dt>
            <dd className="col-sm">{pet.type}</dd>
        </dl>
        <dl className="row card-text">
            <dt className="col-sm">Description :</dt>
            <dd className="col-sm">{pet.description}</dd>
        </dl>
        <dl className="row card-text">
            <dt className="col-sm-6">Skills :</dt>
            <dd className="col-sm-6">{pet.skill1}</dd>
            <dt className="col-sm-6"></dt>
            <dd className="col-sm-6">{pet.skill2}</dd>
            <dt className="col-sm-6"></dt>
            <dd className="col-sm-6">{pet.skill3}</dd>
        </dl>
            <button className="btn btn-danger m-1" onClick={deletePet}>Adopt {pet.name}</button>
            <button className="btn btn-secondary m-1" onClick={() => navigate("/")}>Back to Home</button>
            <button className="btn btn-success m-1" onClick={likeCount}>Like {pet.name}</button>
            <p>{like} like(s)</p>
        </div>
        </div>
        </div>
    )
}

export default PetDetail;