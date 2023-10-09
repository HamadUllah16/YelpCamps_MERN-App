import React from 'react'
import Nav from '../components/Nav'
import AddForm from '../components/AddForm'
import Footer from '../components/Footer'

function Add({server}) {
    return (
        <>
            <Nav />
            <AddForm server={server} />
            <Footer />
        </>
    )
}

export default Add
