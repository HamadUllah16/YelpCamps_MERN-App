import React from 'react'
import Nav from '../components/Nav'
import Elements from '../components/Elements'
import Footer from '../components/Footer'

function Home({data}) {
    return (
        <>
            <Nav />
            <Elements data={data} />
            <Footer />
        </>
    )
}

export default Home
