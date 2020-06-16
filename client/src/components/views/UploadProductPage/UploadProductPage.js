import React, { useState } from 'react'
import FileUpload from '../../utils/FileUpload'
import { Button, Input, Form, Typography } from 'antd'
const { Title } = Typography
const {TextArea} = Input
const Continents = [
  { id: 1, value: "Africa" },
  { id: 2, value: "Europe" },
  { id: 3, value: "Asia" },
  { id: 4, value: "NorthAmerica" },
  { id: 5, value: "SouthAmerica" },
  { id: 6, value: "Australia" },
  { id: 7, value: "antarctica" },
]

function UploadProductPage() {

  const [TitleValue, setTitleValue] = useState("")
  const [DescriptionValue, setDescriptionValue] = useState("")
  const [PriceValue, setPriceValue] = useState(0) 
  const [ContinentValue, setContinentValue] = useState(1) 

  const [Images,setImages] = useState([])
  
  const handleTitleChange = (e) => {
    setTitleValue(e.target.value)
  }

  const handleDescriptionChange = (e) => {
    setDescriptionValue(e.target.value)
  }

  const handlePriceChange = (e) => {
    setPriceValue(e.target.value)
  }

  const handleContinentSelect = (e) => {
    setContinentValue(e.target.value)
  }

  const updateImages = (newImages) => {
    console.log(newImages);
    setImages(newImages);
  }

  return (
    <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
      <div style={{ textAlign: 'centre', marginBottom: '2rem'}}>
        <Title level={2}>UploadProduct</Title>
      </div>

      <Form onSubmit>
        <FileUpload refreshFunction={updateImages}/>
        <label>Title</label>
        <Input
          onChange={handleTitleChange}
          value={TitleValue}
        />
        <br />
        <br />
        <lable>Description</lable>
        <TextArea
          onChange={handleDescriptionChange}
          value={DescriptionValue}
        />
        <br />
        <br />
        <label>Price</label>
        <Input
          onChange={handlePriceChange}
          value={PriceValue}
          type='number'
        />
        <br />
        <br />

        <select onChange={handleContinentSelect}>
          {
            Continents.map(item => (
              <option key={item.id} value={item.id}>{item.value}</option>
              ))
          }
        </select>
        <br />
        <Button>Submit</Button>



      </Form>
     
    </div>
  )
}

export default UploadProductPage
