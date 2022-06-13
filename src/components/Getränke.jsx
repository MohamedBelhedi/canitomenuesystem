import React,{Component} from 'react'
import { Card,Button } from 'react-bootstrap';

const Getränke =()=>{
  
     const getraenke=[


        {
            id:1,
            name:'Cola',
            image:'https://images.pexels.com/photos/2763380/pexels-photo-2763380.jpeg?cs=srgb&dl=pexels-markus-winkler-2763380.jpg&fm=jpg'


        },
        {
            id:2,
            name:'Fanta',
            image:'https://images.pexels.com/photos/2763380/pexels-photo-2763380.jpeg?cs=srgb&dl=pexels-markus-winkler-2763380.jpg&fm=jpg'


        },
        {
            id:3,
            name:'Sprite',
            image:'https://images.pexels.com/photos/2763380/pexels-photo-2763380.jpeg?cs=srgb&dl=pexels-markus-winkler-2763380.jpg&fm=jpg'


        },
        {
            id:4,
            name:'Spezi',
            image:'https://images.pexels.com/photos/2763380/pexels-photo-2763380.jpeg?cs=srgb&dl=pexels-markus-winkler-2763380.jpg&fm=jpg'


        },
        {
            id:5,
            name:'Ayran',
            image:'https://images.pexels.com/photos/7469380/pexels-photo-7469380.jpeg?cs=srgb&dl=pexels-meruyert-gonullu-7469380.jpg&fm=jpg'


        },
    ]
    
  return (

    <div className="App">



{


getraenke.map(({id,name,image})=>(

  <Card key={id} style={{ width: '18rem' }}>
<Card.Img variant="top" src={image}  />
<Card.Body>
  <Card.Title>{name}</Card.Title>
  <Card.Text>
   
  </Card.Text>
  <Button variant="primary">Kaufen</Button>
</Card.Body>
</Card>


))
  






}


    </div>
   
  )
}


export default Getränke

// {this.getränke.map(({name,image,id})=>(
//     ))}