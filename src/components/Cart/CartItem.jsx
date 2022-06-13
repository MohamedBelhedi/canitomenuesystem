import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
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

// const CheckOutItem=document.querySelector(".CardTest")
// const name=document.querySelectorAll(".cost")

// CheckOutItem.addEventListener("click",()=>{

//     name.innerText="Test"
//     console.log("was geht")


// })

  return (
    <div>
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

    <h4 className="Summe">Summe Total</h4>
    <h5>
        
        Bezahlen

        <PayPalScriptProvider options={{ "client-id": "test" }}>
            <PayPalButtons style={{ layout: "horizontal" }} />
            {/* hier nach dem Bezaheln die Date4n übermittel an Whatapp oder SQL */}
        </PayPalScriptProvider>


    </h5>


    </div>
  )
}

export default CartItem