import React from 'react'
import {Card} from 'react-bootstrap'

function TellerGerichte() {

  const menueTeller=[
    {
      id:1,
    image:"https://images.pexels.com/photos/7439809/pexels-photo-7439809.jpeg?cs=srgb&dl=pexels-furkan-tumer-7439809.jpg&fm=jpg",
    name:"Adana Spieß"

  },
    {
      id:2,
    image:"https://images.pexels.com/photos/7439808/pexels-photo-7439808.jpeg?cs=srgb&dl=pexels-furkan-tumer-7439808.jpg&fm=jpg",
    name:"IskenderKebab"

  },
    {
      id:3,
    image:"https://images.pexels.com/photos/3220617/pexels-photo-3220617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name:"Chili Cheese Döner"

  },

]
  return (
    <div>
    <h1>Teller und Grilll Gerichte</h1>
   {menueTeller.map(({name,image,id})=>(

  <Card key={id} style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
     
   
  
    </Card.Text>
   
  </Card.Body>
  </Card>
  
  
// nur noch ein Increase item mit Paypal search system
  
  
      ))}


    </div>
  )
}

export default TellerGerichte