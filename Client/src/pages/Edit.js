import React from 'react'
import EditForm from '../components/EditForm'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function Edit(server) {
    return (
        <>
            <Nav />
            <EditForm server={server} />
            <Footer />
        </>
    )
}

export default Edit
