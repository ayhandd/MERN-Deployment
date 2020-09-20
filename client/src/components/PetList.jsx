import React, {useEffect, useState} from 'react'
import {Link, navigate} from '@reach/router'
import axios from 'axios'

const PetList = () => {
    const [list, setlist] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8000/api/pets")
        .then(res => {
            setlist(res.data.Pet)
        })
        .catch(err =>  console.log(err))
    },[])
    return(
        <div className="container">
            <h1>Pet Shelter</h1>
            <h4>These pets are looking for a good home </h4>
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Type</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
            {
                list.sort((a, b) => (a.type > b.type) ? 1 : -1).map((pet, idx) => (
                    <tr key={idx}>
                        <td>{pet.name}</td>
                        <td>{pet.type}</td>
                        <td>
                            <Link to={`/pet/${pet._id}`}>details</Link> | 
                            <Link to={`/pet/update/${pet._id}`}>edit</Link>
                        </td>
                    </tr>
                ))
            }
            </tbody>
            </table>
            <button className="btn btn-secondary btn-lg m-1" onClick={() => navigate("/pet/new")}>Add a new pet to the shelter</button>
        </div>
    )
}

export default PetList;