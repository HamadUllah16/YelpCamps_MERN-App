import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function Elements(){
    const [data, setData] = useState([])
    const [spinner, setSpinner] = useState(true)
    async function fetchAPI() {
      await fetch('https://yelp-camps-mern-app-server.vercel.app/').then(response => response.json()).then((data)=>
      setData(data)
      ).catch(e => console.log(`${e} FetchAPI Error`))
      setSpinner(false)
    }
  
    useEffect(() => {
      fetchAPI()
    }, [])
    const renderCards = data.map((item) => {
        return (
            <div className="col-2 m-2 card cardSize p-0">
                <img src={item.image} className="img-fluid cardImage rounded" alt="..." />
                <div className='card-body'>
                    <h5 class="card-title">{item.name}</h5>
                    <p class="card-text">{item.description}</p>
                    <Link to={`/edit/${item._id}`}>
                        <button className='btn btn-primary me-1' value={item._id}>Edit</button>
                    </Link>
                    <button className='btn btn-danger me-1' value={item._id} onClick={(e)=>deleteOne(item._id)}>Delete</button>
                </div>
            </div>
        )
    })
    const deleteOne = (id)=>{
        fetch(`http://localhost:2000/delete/${id}`)
        window.location.reload()
    }
    async function deleteHandler() {
        try {
            await fetch('http://localhost:2000/deleteAll')
        }
        catch (err) {
            console.log(err)
        }
    }
    return (
        <section className='container'>
            {data.length > 0 ? <h3 className='text-center mt-5'>Welcome, below are the listed campgrounds.</h3> : <h3 className='text-center mt-5'>Seems empty, Add a campground.</h3>}
            <Link to={'/add'}>
                <button className='btn btn-dark my-3' type='button'>Add</button>
            </Link>
            <button onClick={deleteHandler} className='btn btn-danger my-3 mx-2'>Delete All</button>
            <div className="row">
                {spinner ? <FontAwesomeIcon icon={faSpinner} spinPulse /> : renderCards}
            </div>
        </section>
    )
}

export default Elements
