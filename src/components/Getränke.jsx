import React,{Component} from 'react'
import { Card,Button } from 'react-bootstrap';

class Getränke extends Component {
    constructor(props){
        super(props)
    }
    //  getränke=()=>[


    //     {
    //         id:1,
    //         name:'Cola',
    //         image:''


    //     },
    //     {
    //         id:2,
    //         name:'Fanta',
    //         image:''


    //     },
    //     {
    //         id:3,
    //         name:'Sprite',
    //         image:''


    //     },
    //     {
    //         id:4,
    //         name:'Spezi',
    //         image:''


    //     },
    //     {
    //         id:5,
    //         name:'Ayran',
    //         image:''


    //     },
    // ]
    render(){
  return (

    <div className="App">





<Card  style={{ width: '18rem' }}>
<Card.Img variant="top"  />
<Card.Body>
  <Card.Title></Card.Title>
  <Card.Text>
   
  </Card.Text>
  <Button variant="primary">Kaufen</Button>
</Card.Body>
</Card>


   


    </div>
   
  )
}
}

export default Getränke

// {this.getränke.map(({name,image,id})=>(
//     ))}