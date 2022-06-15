
import React,{Component} from 'react';
import { Card,Button } from 'react-bootstrap';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


import './App.css';
import Footer from './components/Footer/Footer';
import Getränke from './components/Getränke';
import Navbarleiste from './components/Navbar/Navbarleiste';
import Page from './components/Page';
import Suppen from './components/Suppen';
import TellerGerichte from './components/TellerGerichte';





class App extends Component {
  constructor(props){
    super(props)
  }

DatenSchutz=()=>{

window.location.assign("/datenschutz")

}

Impressum=()=>{

window.location.assign("/impressum")

}
Kontakt=()=>{

window.location.assign("/kontakt")

}

  getränke1=()=>{


    window.location.assign("/drinks")


  }
  // man kann einzelne Seiten erstellen und dann über functions ansteuern oder man sowas hier machen siehe unten
  render(){
    const DatenSchutz=()=>{
      return(<h1>Datenschutz</h1>)
     
  
  
     }
    const Impressum=()=>{
      return(<h1>Impressum</h1>)
     
  
  
     }
    const Kontakt=()=>{
      return(<h1>Kontakt</h1>)
     
  
  
     }
  return (
    <>
<Navbarleiste/>
    
  
    <div className="App">


    <Router>
    
    <Routes>
    <Route path={process.env.PUBLIC_URL +"/"} element={<Page/>} exact/>
    <Route path={"/drinks"} element={<Getränke/>}/>
    <Route path={"/tellergerichte"} element={<TellerGerichte/>}/>
    <Route path={"/suppen"} element={<Suppen/>}/>
    <Route path={"/datenschutz"} element={<DatenSchutz/>}/>
    <Route path={"/impressum"} element={<Impressum/>}/>
    <Route path={"/kontakt"} element={<Kontakt/>}/>
    
   
    </Routes>
    </Router>

    



   
    </div>
    <Footer 
  DatenSchutz={this.DatenSchutz} 
  Impressum={this.Impressum} 
  Kontakt={this.Kontakt}/>
    </>
  );
}
}

export default App;



// const menu=[
//   // mit einem  Array für eine Componente Mehrere Cards erstellen
//   {
  
//   id:1,
//   title:'Teller Gerichte',
//   image:'https://images.pexels.com/photos/3220617/pexels-photo-3220617.jpeg?cs=srgb&dl=pexels-david-geib-3220617.jpg&fm=jpg'
  
//   },
//   {
  
//   id:2,
//   title:'Suppen',
//   image:'https://images.pexels.com/photos/3220617/pexels-photo-3220617.jpeg?cs=srgb&dl=pexels-david-geib-3220617.jpg&fm=jpg'
//   },
//   {
  
//   id:3,
//   title:'Döner'
//   ,
//   image:'https://images.pexels.com/photos/3220617/pexels-photo-3220617.jpeg?cs=srgb&dl=pexels-david-geib-3220617.jpg&fm=jpg'
  
//   },
//   {
  
//   id:4,
//   title:'Grill',
//   image:'https://images.pexels.com/photos/3220617/pexels-photo-3220617.jpeg?cs=srgb&dl=pexels-david-geib-3220617.jpg&fm=jpg'
  
//   },
//   {
  
//   id:5,
//   title:'Getränke',
//   image:'https://images.pexels.com/photos/3220617/pexels-photo-3220617.jpeg?cs=srgb&dl=pexels-david-geib-3220617.jpg&fm=jpg'
  
//   },
  
//     ]

// {menu.map(({title,image,id})=>(

//   <Card key={id} style={{ width: '18rem' }}>
//   <Card.Img variant="top" src={image} />
//   <Card.Body>
//     <Card.Title>{title}</Card.Title>
//     <Card.Text>
     
//     <Button onClick={getränke1} variant="primary" >Kaufen</Button>
  
//     </Card.Text>
   
//   </Card.Body>
//   </Card>
  
  

  
  
//       ))}