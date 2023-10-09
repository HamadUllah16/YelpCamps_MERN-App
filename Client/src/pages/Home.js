import React from 'react'
import Nav from '../components/Nav'
import Elements from '../components/Elements'
import Footer from '../components/Footer'

function Home({server}) {
    return (
        <>
            <Nav />
            <Elements server={server} />
            <Footer />
        </>
    )
}

export default Home
