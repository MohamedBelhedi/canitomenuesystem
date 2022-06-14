import React from 'react'
import {Card,Button} from 'react-bootstrap'

function TellerGerichte() {

  const menueTeller=[
    {
      id:1,
    image:"https://images.pexels.com/photos/7439809/pexels-photo-7439809.jpeg?cs=srgb&dl=pexels-furkan-tumer-7439809.jpg&fm=jpg",
    name:"Adana Spieß",
    text:"besteht aus Reihnem RinderHack, und orientalisch gewürzt",
    btnText:"Adana Spieß"

  },
    {
      id:2,
    image:"https://images.pexels.com/photos/7439808/pexels-photo-7439808.jpeg?cs=srgb&dl=pexels-furkan-tumer-7439808.jpg&fm=jpg",
    name:"IskenderKebab",
    text:"Kebab Fleisch vermischt mit Joghut Soße, und einer Tomaten Soße und mit Salat und orientalischen Gewürzen",
    btnText:"iskander Kebab"

  },
    {
      id:3,
    image:"https://images.pexels.com/photos/3220617/pexels-photo-3220617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name:"Chili Cheese Döner",
    text:"Wie der klassische Döner Teller, mit einer der besten Soßen Chilli Cheese",
    btnText:"Chili Cheese"

  },

]

const onBtnClick=[{

 onClick1(){

  const name1=document.querySelector("h5")
    console.log("hallo1")
    name1.innerText="Adanaspieß:"+" "+2
    const CheckOutItem=document.querySelector("h6")
    
    
    const Summe=name1.textContent
    CheckOutItem.innerText=Summe
    console.log("Bezahlen")
    
    // versuchen wir es mit einem addEventListener

  },
 onClick2(){

    console.log("hallo2")


  },
 onClick3(){

    console.log("hallo3")

  }



}]


  return (
    <>
    <h1>Teller und Grilll Gerichte</h1>
    <div className="App">
    
    <h4></h4>
   {menueTeller.map(({name,image,id,text,btnText})=>(

  <Card className="CardTest" key={id} style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
     
     {text}
   
  
    </Card.Text>
    {onBtnClick.map(({onClick1,onClick2,onClick3})=>(
   <Button onClick={
    
    onClick1} variant="primary">{btnText}</Button>))}

{/* die Funktion war in onClick oben */}
{/* async ()=>{
    await onClick1(onClick1);
    if(onClick1==true&&onClick2,onClick3==false)
    {
      return false
   
    }else{
    return true
    }
    } */}
  </Card.Body>
  </Card>
  
  
// nur noch ein Increase item mit Paypal search system
  
  
      ))}


    </div>
    </>
  )
}

export default TellerGerichte