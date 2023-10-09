import React, { useState } from 'react'

function AddForm({ server }) {
  const [name, setName] = useState()
  const [image, setImage] = useState()
  const [desc, setDesc] = useState()
  const [formData, setFormData] = useState({ name: '', image: '', description: '' })

  const submitHandler = async (e) => {
    fetch(`${server}add`,
      {
        method: "POST",
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify(formData)
      }).then(newData => { console.log("Data Added", newData) }).catch(e => { console.log(`${e} Error in New Data`) })
    setFormData('')
    setName('')
    setDesc('')
    setImage('')
    e.preventDefault();
  }
  return (
    <div className='m-5 form bg-dark text-light rounded'>
      <form action='/' className='p-3 formHeight' onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input value={name} onChange={(e) => {
            setName(e.target.value)
            setFormData({ ...formData, name: e.target.value })
          }}
            type="text" className="form-control" name='name' id="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">Image</label>
          <input value={image} onChange={(e => {
            setImage(e.target.value)
            setFormData({ ...formData, image: e.target.value })
          })}
            type="text" className="form-control" name='image' id="image" />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">Description</label>
          <input value={desc} onChange={(e => {
            setDesc(e.target.value)
            setFormData({ ...formData, description: e.target.value })
          })}
            type="text" className="form-control" name='desc' id="desc" />
        </div>
        <button type="submit" className="btn btn-primary" value='OK'>Submit</button>
      </form>
    </div>
  )
}

export default AddForm