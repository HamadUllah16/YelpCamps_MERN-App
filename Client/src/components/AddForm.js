import React, { useState } from 'react'

function AddForm() {
  const [name, setName] = useState()
  const [image, setImage] = useState()
  const [desc, setDesc] = useState()
  const [formData, setFormData] = useState({ name: '', image: '', description: '' })

  async function submitHandler(e) {
    try {
      const response = await fetch('http://localhost:2000/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Adjust the content type if needed
        }, body: JSON.stringify(formData)
      })
      if (response.ok) {
        const responseData = await response.json();
        console.log('Response from backend', responseData)
      }
      else {
        console.log('Error', response.statusText)
      }
    }
    catch (err) {
      console.log('Error', err)
    }

  }
  return (
    <div className='m-5 form bg-dark text-light rounded'>
      <form action='/' className='p-3' onSubmit={submitHandler} >
        <div className="mb-3">
          <label for="name" className="form-label">Name</label>
          <input value={name} onChange={(e) => {
            setName(e.target.value)
            setFormData({ ...formData, name: e.target.value })
          }}
            type="text" className="form-control" name='name' id="name" />
        </div>
        <div className="mb-3">
          <label for="image" className="form-label">Image</label>
          <input value={image} onChange={(e => {
            setImage(e.target.value)
            setFormData({ ...formData, image: e.target.value })
          })}
            type="text" className="form-control" name='image' id="image" />
        </div>
        <div className="mb-3">
          <label for="desc" className="form-label">Description</label>
          <input value={desc} onChange={(e => {
            setDesc(e.target.value)
            setFormData({ ...formData, description: e.target.value })
          })}
            type="text" className="form-control" name='desc' id="desc" />
        </div>
        <button type="submit" className="btn btn-primary" value='OK' onClick={() => {
        }}>Submit</button>
      </form>
    </div>
  )
}

export default AddForm