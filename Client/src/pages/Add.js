import React from 'react'
import AddForm from '../components/AddForm'

function Add({server}) {
    return (
        <div className='row justify-content-center'>
            <AddForm server={server} />
        </div>
    )
}

export default Add
