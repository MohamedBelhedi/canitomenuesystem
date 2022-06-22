import {Button,Card} from 'react-bootstrap'
import React,{Component} from 'react'
import '../App.css'

import ButtonGrill from './Buttons/ButtonGrill'
import Swal  from 'sweetalert2/dist/sweetalert2'

const 
alarm=()=>{

  Swal.fire({

    title: 'Achtung'+'❌',
    text: 'Diese Seite ist im Aufbau und dient zu Testzwecken,bitte keine Daten Passwörter oder Sensible Daten eigeben Danke'+'😊',
    timer: 10000

  })

}
class Page extends Component {

    constructor(props){
        super(props)

    }
    
    onGTBst=()=>{

        window.location.assign("/tellergerichte")
    
    
      }
    Grill=()=>{
        window.location.assign("/drinks")
    }

    Suppen=()=>{

      window.location.assign("/suppen")

    }

    render(){
        const urlImag=[
        "https://images.pexels.com/photos/3220617/pexels-photo-3220617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg?cs=srgb&dl=pexels-foodie-factor-539451.jpg&fm=jpg",
        "https://images.pexels.com/photos/7317525/pexels-photo-7317525.jpeg?cs=srgb&dl=pexels-meruyert-gonullu-7317525.jpg&fm=jpg",
        "https://images.pexels.com/photos/3220617/pexels-photo-3220617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        ]
  return (
    <div ClassName="Items" onChange={alarm()}>

<Card  style={{ width: '18rem' }}>
   <Card.Img variant="top" src={urlImag[0]} />
  <Card.Body>     
    <Card.Title>
        Grill und Teller Gerichte
    </Card.Title>
        <Card.Text>
     
  <ButtonGrill onGTBst={this.onGTBst}/>
  
    </Card.Text>
   
   </Card.Body>
   </Card>
<Card  style={{ width: '18rem' }}>
   <Card.Img variant="top" src={urlImag[1]} />
  <Card.Body>     
    <Card.Title>
        Suppen
    </Card.Title>
        <Card.Text>
     
   <Button onClick={this.Suppen} variant="primary" >Kaufen</Button>
  
    </Card.Text>
   
   </Card.Body>
   </Card>
<Card  style={{ width: '18rem' }}>
   <Card.Img variant="top" src={urlImag[2]} />
  <Card.Body>     
    <Card.Title>
      Döner
    </Card.Title>
        <Card.Text>
     
   <Button  variant="primary" >Kaufen</Button>
  
    </Card.Text>
    
   </Card.Body>
   </Card>
    </div>
  )
}
}

export default Page