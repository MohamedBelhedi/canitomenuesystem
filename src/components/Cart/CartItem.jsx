import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Swal from 'sweetalert2';

// palceholderfunc für die Items die der Kunde auswählt
function CartItem({placeholderfun}) {
    const itemIter=[
        {
        id:1,
        name:'Item1',
        cost:'',


    },
        {
        id:2,
        name:'Item2',
        cost:'',


    },
        {
        id:3,
        name:'Item3',
        cost:'',


    },


]

const bezahlen=(async()=>{    
    
    
    const text=document.querySelector("h6").textContent

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
        <h4 className="name" key={id}></h4>
        <h4 className="cost" key={id}></h4>
        
     
        </>

         })}
       

    <hr />    
    
    <h4>Summe Total:   <h6 className="Summe"></h6> </h4>
  
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