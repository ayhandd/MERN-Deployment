import React from 'react'
import PetList from '../components/PetList'

const Main = () =>{
    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col">
                    <PetList className="col"/>
                </div>
            </div>
        </div>
        
    )
}

export default Main;