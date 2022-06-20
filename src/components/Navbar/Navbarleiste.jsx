import React from 'react'
import { Navbar,Container, Nav,NavDropdown } from 'react-bootstrap'
import logo from '../../canitoLogoKlein.jpg'
import CartItem from '../Cart/CartItem';


function Navbarleiste({onBtnClick}) {

const rmvClick=()=>{
  const removeTest=document.querySelector("h5")
  const btnRmv=document.querySelector(".btnRmv")
  const test=document.querySelector(".test")
  const h6Summe=document.querySelector("h6")


  if(btnRmv){

    removeTest.remove(removeTest)
    test.style.background=""
    h6Summe.innerText=""
    

  }
  
  else if(removeTest){

    btnRmv.style.display="none"

  }else{
    btnRmv.style.display="intiale"

  }


}


  return (
<>
    <Navbar bg="light" expand="lg">
    <Container>
      <Navbar.Brand href="/"><img src={logo} width="50" height="50"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <NavDropdown className="test" title="Bezahlen" icon={<svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="currentColor" class="bi bi-basket" viewBox="0 0 16 16">
  <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"/>
</svg>} id="basic-nav-dropdown">
            <NavDropdown.Item>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="20" fill="currentColor" class="bi bi-basket" viewBox="0 0 16 16">
  <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"/>
</svg>
{/* hier die einkäufe brechenen und die Values an Paypal übermitteln und Datenbank oder Whatsapp */}
{/* viele h5 erstellen die die Bestellung aufnehmen und zusammen grechenet werde */}
<span className="btnRmv" onClick={rmvClick}>{"warenkorb löschen".toLocaleUpperCase()}</span>
<hr />
<h5 className="item1" ></h5>
<h5 className="item2"  ></h5>
<h5 className="item3" ></h5>
{/* <h5 className="name"></h5> */}
            <CartItem />

           
            
            </NavDropdown.Item>
           
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
  )
}

export default Navbarleiste