import React from 'react'
import {Card,Button} from 'react-bootstrap'

function TellerGerichte() {

  var menueTeller=[
    {
      id:1,
    image:"https://images.pexels.com/photos/7439809/pexels-photo-7439809.jpeg?cs=srgb&dl=pexels-furkan-tumer-7439809.jpg&fm=jpg",
    name:"Adana Spieß",
    text:"besteht aus Reihnem RinderHack, und orientalisch gewürzt",
    btnText:"Adana Spieß",
    kosten:13.00

  },
    {
      id:2,
    image:"https://images.pexels.com/photos/7439808/pexels-photo-7439808.jpeg?cs=srgb&dl=pexels-furkan-tumer-7439808.jpg&fm=jpg",
    name:"IskenderKebab",
    text:"Kebab Fleisch vermischt mit Joghut Soße, und einer Tomaten Soße und mit Salat und orientalischen Gewürzen",
    btnText:"iskander Kebab",
    kosten:14.00
    

  },
    {
      id:3,
    image:"https://images.pexels.com/photos/3220617/pexels-photo-3220617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name:"Chili Cheese Döner",
    text:"Wie der klassische Döner Teller, mit einer der besten Soßen Chilli Cheese",
    btnText:"Chili Cheese",
    kosten:15.00

  },

]
const warenKorb=()=>{


   const warenTest=document.querySelectorAll("h5").textContent
  const warenTestKorb=document.querySelector(".test")
 
if(warenTest){
    warenTestKorb.style.background=""
    console.log("halloWare")
}else{
  warenTestKorb.style.background="red"
  
}




}
const onBtnClick=[{
  
 onClick1(e){

  // versuch hier menueTeller die kosten hier auf zurufen




  

  const name1=document.querySelector("h5")
    console.log("hallo1")
    name1.innerText=menueTeller[0].name
    const CheckOutItem=document.querySelector("h6")
    const val=e.target.value
    
    
   
    CheckOutItem.innerText=val
    console.log(e.target.value)
    
    // versuchen wir es mit einem addEventListener

  },
 onClick2(e){


  const name2=document.querySelector("h5")
    console.log("hallo2")
    name2.innerText=menueTeller[1].name
    const CheckOutItem=document.querySelector("h6")
    const val=e.target.value
    
    
   
    CheckOutItem.innerText=val
    console.log(e.target.value)
    
  

  },
 onClick3(e){


  const name3=document.querySelector("h5")
    console.log("hallo3")
    
    const CheckOutItem=document.querySelector("h6")
    const val=e.target.value
    name3.innerText=menueTeller[2].name
    
    
   
    CheckOutItem.innerText=val
    console.log(e.target.value)
    
    // versuchen wir es mit einem addEventListener

  },


  }]


  return (
    <>
    <h1>Teller und Grilll Gerichte</h1>
    <div className="App">
    
    <h4></h4>
   {menueTeller.map(({name,image,id,text,kosten})=>(

  <Card onClick={warenKorb} className="CardTest" key={id} style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
     
     {text}
   
  
    </Card.Text>
    
    {onBtnClick.map(({onClick1,onClick2,onClick3})=>(
   <Button onClick={(
    onClick1=onClick1=(e)=>{

      // versuch hier menueTeller die kosten hier auf zurufen
    
    
    
    
      
    
      const name1=document.querySelector("h5")
        console.log("hallo1")
        name1.innerText=menueTeller[0].name
        const CheckOutItem=document.querySelector("h6")
        const val=e.target.value
        
        
       
        CheckOutItem.innerText=val
        console.log(e.target.value)
        
        // versuchen wir es mit einem addEventListener
    
      
     onClick2=onClick2=(e)=>{


        const name2=document.querySelector("h5")
          console.log("hallo2")
          name2.innerText=menueTeller[1].name
          const CheckOutItem=document.querySelector("h6")
          const val=e.target.value
          
          
         
          CheckOutItem.innerText=val
          console.log(e.target.value)}
          
        
      
        
      onClick3=onClick3=(e)=>{
      
      
        const name3=document.querySelector("h5")
          console.log("hallo3")
          
          const CheckOutItem=document.querySelector("h6")
          const val=e.target.value
          name3.innerText=menueTeller[2].name
          
          
         
          CheckOutItem.innerText=val
          console.log(e.target.value)
          
          // versuchen wir es mit einem addEventListener
      
     }
      
    
}


// warenKorb

)} variant="primary" value={kosten}>{"Kaufen".toUpperCase()}</Button>))}
<h7 className="cost">{kosten}€</h7>
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