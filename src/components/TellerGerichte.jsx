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
    kosten:13.00,
    
    onClick(e){
      e.preventDefault()
          // versuch hier menueTeller die kosten hier auf zurufen
        
        
        
        // nimm das beispiel von Mein portfolio mit den clicks im json/array
          
          const item1=document.querySelector(".item1")
          const name1=document.querySelector("h5")
            console.log("hallo1")
           
            const CheckOutItem=document.querySelector("h6")
            // gesamtbestellung aller Produkte
            const item1_ext=document.querySelector(".item1_ext")
            const val=e.target.value
            
            
           
            CheckOutItem.innerText=val
            item1_ext.innerText=val
           const name1_ex= name1.innerText=menueTeller[0].name
            item1.textContent=name1_ex
            console.log(e.target.value)
            
            // versuchen wir es mit einem addEventListener
    },

  },
    {
      id:2,
    image:"https://images.pexels.com/photos/7439808/pexels-photo-7439808.jpeg?cs=srgb&dl=pexels-furkan-tumer-7439808.jpg&fm=jpg",
    name:"IskenderKebab",
    text:"Kebab Fleisch vermischt mit Joghut Soße, und einer Tomaten Soße und mit Salat und orientalischen Gewürzen",
    btnText:"iskander Kebab",
    kosten:14.00,
    onClick(e){
      e.preventDefault()

       const item2=document.querySelector(".item2")
        const name2=document.querySelector("h5")
          console.log("hallo2")
          // name2.innerText=menueTeller[1].name
          const CheckOutItem=document.querySelector("h6")
          // gesamtbestellung aller Produkte
          const item2_ext=document.querySelector(".item2_ext")
          const val=e.target.value
          
          
         
          CheckOutItem.innerText=val
          item2_ext.innerText=val
       const name2_ex= name2.innerText=menueTeller[1].name
        item2.innerHTML=name2_ex
          console.log(e.target.value)
        }
          
     

    

  },
    {
      id:3,
    image:"https://images.pexels.com/photos/3220617/pexels-photo-3220617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    name:"Chili Cheese Döner",
    text:"Wie der klassische Döner Teller, mit einer der besten Soßen Chilli Cheese",
    btnText:"Chili Cheese",
    kosten:15.00,
    onClick(e){
        
      const item3=document.querySelector(".item3")
      
    
      const name3=document.querySelector("h5")
        console.log("hallo3")
        
        const CheckOutItem=document.querySelector("h6")
        const item3_ext=document.querySelector(".item3_ext")
      
        const val=e.target.value
        item3_ext.innerText=val
       
        
        
       
        CheckOutItem.innerText=val
        const name3_ex= name3.innerText=menueTeller[2].name
        item3.innerHTML=name3_ex
        console.log(e.target.value)
    } 

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
// ähnlich wie useState Hook

  



 


  return (
    <>
    <h1>Teller und Grilll Gerichte</h1>
    <div className="App">
    
    <h4></h4>
   {menueTeller.map(({name,image,id,text,kosten,onClick})=>(

  <Card onClick={warenKorb} className="CardTest" key={id} style={{ width: '18rem' }}>
  <Card.Img variant="top" src={image} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Text>
     
     {text}
   
  
    </Card.Text>
    
   
<Button
   
    onClick={onClick}
 variant="primary" value={kosten}>{"Kaufen".toUpperCase()}</Button>
<h7 className="cost">{kosten}€</h7>
</Card.Body>
  </Card>
  
  
// nur noch ein Increase item mit Paypal search system
  
  
      ))}


    </div>
    </>
  )
}

export default TellerGerichte