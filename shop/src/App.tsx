/* eslint-disable */
import React, {useState} from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import Data from './data.js';
import './App.css';

type Data = {
  data: {
  id: number,
  title: string,
  content: string,
  price: number},
  i: number
}

function App() {

  let [data, setData] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      <div className="jumbotron">
        <br />
        <h1>20% Season Off</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe mollitia qui beatae tempora? Corrupti molestiae molestias voluptates eaque soluta culpa ex vitae tenetur, suscipit explicabo hic exercitationem quae nesciunt dolorum?</p>
        <br />
        <button type="button" className="btn btn-primary">Primary</button>
      </div>
      <div className="container">
        <div className="row">
          {
            data.map((v, i)=>{
              return (
                <Item data={v} i={i} key={i} />
              )
            })
          }
        </div>
      </div>
    </div>
  );
}

function Item(props: Data) :JSX.Element {
  return(
    <div className="col-md-4">
      <img src={`https://codingapple1.github.io/shop/shoes${props.i+1}.jpg`} width="100%" />
      <h4>{props.data.title}</h4>
      <p>{props.data.content}</p>
    </div>
  )
}

export default App;
