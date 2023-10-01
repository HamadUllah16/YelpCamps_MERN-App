import React from 'react'
import Nav from '../components/Nav'
import Elements from '../components/Elements'
import Footer from '../components/Footer'

function Home({data}) {
    const api = "https://yelp-camps-mern-app-server.vercel.app/"
    return (
        <>
            <Nav />
            <Elements api={api} data={data} />
            <Footer />
        </>
    )
}

export default Home
