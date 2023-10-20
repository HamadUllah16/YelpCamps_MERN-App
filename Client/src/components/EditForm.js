import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function EditForm() {
  const { id } = useParams()
  const [data, setData] = useState({
    name: '',
    image: '',
    description: ''
  })
  function FetchEditData(){
    fetch(`https://yelp-camps-mern-app-server.vercel.app/edit/${id}`).then((response) => response.json()).then((item) => setData(item)).catch(e => console.log(e, 'Error in fetching Edit Data'))
  }
  useEffect(() => {
    FetchEditData()
  },[])
  async function submitHandler(e) {
    e.preventDefault();
    try {
      const response = await fetch(`https://yelp-camps-mern-app-server.vercel.app/edit/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      if (response.ok) {
        const responseData = await response.json();
        console.log('Response from backend', responseData)
      }
      else {
        console.log('Error', response.statusText)
      }
    }
    catch (e) {
      console.log(e, 'PUT method Error')
    }
  }
  return (
    <>
      <div className='m-5 form bg-dark text-light rounded'>
        <form className='p-3' onSubmit={submitHandler} >
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input value={data.name} onChange={(e) => {
              setData(prevData=>({...prevData, name: e.target.value}))
            }}
              type="text" className="form-control" name='name' id="name" />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Image</label>
            <input value={data.image} onChange={(e => {
              setData({ ...data, image: e.target.value })
            })}
              type="text" className="form-control" name='image' id="image" />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input value={data.description} onChange={(e => {
              setData({ ...data, description: e.target.value })
            })}
              type="text" className="form-control" name='description' id="description" />
          </div>
          <button type="submit" className="btn btn-primary" value='OK'>Submit</button>
        </form>
      </div>
    </>
  )
}

export default EditForm