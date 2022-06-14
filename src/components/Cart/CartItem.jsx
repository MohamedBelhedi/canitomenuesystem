import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Swal from 'sweetalert2';

// palceholderfunc für die Items die der Kunde auswählt
function CartItem({placeholderfun}) {
    const itemIter=[
        {
        id:1,
        name:'Item1',
        cost:'12.00€',


    },
        {
        id:2,
        name:'Item2',
        cost:'10.00€',


    },
        {
        id:3,
        name:'Item3',
        cost:'13.00€',


    },


]

// sicherheitsCode
// const Total=()=>{

//     const Summe=document.querySelector(".Summe")
//     const name1=document.querySelector("h5")
//     return Summe=name1.textContent

// }
const bezahlen=(async()=>{    
    
    const name1=document.querySelector("h5").textContent
    
    const text=document.querySelector(".cost").textContent+name1
    

await Swal.fire({
    title: 'Nach oder vor dem Paypal bezahlen bitte wir dich deine Bestellung an uns über Whatsapp Support abzuschicken',
    text: 'Nicht Vergessen Danke ',



})
window.open("https://api.whatsapp.com/send/?phone=1111111111&text="+`${text}`)

})






  return (
    <div>

        {}
        {/* vielleicht ein Element mit map( interieren) */}
        {
         
         itemIter.map(({name,cost,id})=>{
            <>
            {/* {name} */}
            {/* {cost} */}
       
        

     
        </>

         })}
       

    <hr />    
    
    <h4>Summe Total:   <h6 className="Summe" ></h6> </h4>
    <h7>
        
        Bezahlen

        <PayPalScriptProvider  options={{ "client-id": "test" }}>
            <PayPalButtons onClick={bezahlen} style={{ layout: "horizontal" }} />
            {/* hier nach dem Bezaheln die Date4n übermittel an Whatapp oder SQL */}
        </PayPalScriptProvider>


    </h7>


    </div>
  )
}

export default CartItem