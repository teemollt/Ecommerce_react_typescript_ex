/* eslint-disable */
import React, {useState} from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import Data from './data.js';
import './App.css';
import Detail from './Detail';

import { Link, Route, Switch } from 'react-router-dom';

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
          <Nav.Link> <Link to="/">Home</Link> </Nav.Link>
          <Nav.Link><Link to="/detail">Detail</Link></Nav.Link>
          <Nav.Link>Pricing</Nav.Link>
        </Nav>
        </Container>
      </Navbar>
      

      <Switch>
        {/* path url로 접속시 다음 html보여줌 해당 url을 포함하는걸 다보여줌 딱 그 url만 정확히 보여주려면 exact path */}
        <Route exact path="/">
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
        </Route>
        {/* /:id  url parameter 사용 :id 자리엔 뭐가 오든 거기로 이동시킴 id자리에 원하는대로 작명하면됨
        해당 파라미터는 해당 컴포넌트에서 useParams로 사용할 수 있음 */}
        <Route path="/detail/:id">
          <Detail data={data}></Detail>
        </Route>
        <Route path="/:id">
          {/* 이렇게 라우팅하면 /detail에서도 해당 html이 보임 이럴때 route태그들을 switch로 감싸서 해결 
          switch 쓰고나면 여러개가 일치해도 route 하나만 보임 중복매칭 허용x 맨위에 거만 허용 */}
          <div>아무거나 적었을때 보여주는 페이지</div>
        </Route>
        {/* component로 설정된 컴포넌트 보여줌 */}
        {/* <Route path="/modal" component={ Modal }></Route> */}
      </Switch>
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
