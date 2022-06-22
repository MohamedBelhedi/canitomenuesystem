import React from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import Swal from 'sweetalert2';

// palceholderfunc für die Items die der Kunde auswählt
function CartItem({placeholderfun}) {


// sicherheitsCode
// const Total=()=>{

//     const Summe=document.querySelector(".Summe")
//     const name1=document.querySelector("h5")
//     return Summe=name1.textContent

// }
const bezahlen=(async()=>{    
   //#region für Whatsapp 
    const name1=document.querySelector(".item1").textContent
    const name2=document.querySelector(".item2").textContent
    const name3=document.querySelector(".item3").textContent
    
    const text="Gesamtsumme:"+document.querySelector("h6").textContent+" € "+" Bestellung: "+name1+name2+name3
//#endregion
//berechnung der Gesamtsumme

const summeItem1=document.querySelectorAll("item1_ext").textContent
 const SummeItem2=document.querySelector(".item2_ext").textContent
 const summeItem3=document.querySelector(".item3_ext").textContent


 const h6_ext_test=document.querySelector(".Summe")

 h6_ext_test.innerHTML=summeItem1+SummeItem2+summeItem3


console.log(summeItem1+SummeItem2+summeItem3)
    // const summeTestMathe=Number(document.querySelector("h6").textContent)
    // const random=11
    // const summeTestAll=summeTestMathe+random
    // console.log(summeTestAll)
    // console.log(1+6)
    

await Swal.fire({
    title: 'Nach oder vor dem Paypal bezahlen bitte wir dich deine Bestellung an uns über Whatsapp Support abzuschicken',
    text: 'Nicht Vergessen Danke ',



})
window.open("https://api.whatsapp.com/send/?phone=1111111111&text="+`${text}`)

})






  return (
    <div>

     
       

    <hr />    
    <h6 className="item1_ext" > </h6>
    <h6 className="item2_ext" > </h6>
    <h6 className="item3_ext" > </h6>
    <h4>Summe Total:   <h6 className="Summe" > </h6> € </h4>
    
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