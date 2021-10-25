import React, { ReactElement } from 'react'
import {useHistory, useParams} from 'react-router-dom';
// 뒤로가기 필요할때 사용 useHistory

interface Props {
  data: {
    id: number,
    title: string,
    content: string,
    price: number}[]
}

function Detail(props: Props): ReactElement {

  let history = useHistory(); // 방문기록이 담겨있음
  let { id }: {id: string} = useParams(); // 라우터의 useParams훅 중괄호 안에{사용자가 입력한 url파라미터들} 담겨있음
  let index = Number(id)
  // 현재 방식으론 main에서 상품이 정렬되면 상품 위치와 param으로 넘기는 id값이 불일치할 경우가 생김
  // 따라서 넘어오는 데이터의 고유한 id값과 param을 대조해서 일치하는 아이템의 데이터를 가져오는 방식을 취하면됨
  // 실제로 서버와 통신할때는 상세 api를 통해 해당 값만 가져올테니 걱정 ㄴㄴ
  // find를 사용해보자
  // 1. find()는 array 뒤에 붙일 수 있으며, 안에 콜백함수가 들어갑니다.
  // 2. 콜백함수 내의 파라미터 item은 array 안에 있던 하나하나의 데이터를 의미합니다.
  // 3. return 오른쪽엔 조건식을 적을 수 있습니다. 이게 참인 데이터만 새로운 변수에 저장해줍니다
  // 4. 조건식엔 그리고 그걸 현재 URL의 /:id에 적힌 값과 item의 영구번호 (item.id)가 같은지 비교하고 있는 겁니다.
  let foundItem: any = props.data.find(function(item){
    return item.id == index
  })

  return (
    <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={"https://codingapple1.github.io/shop/shoes"+(foundItem.id+1)+".jpg"} width="100%" />
            </div>
            <div className="col-md-6 mt-4">
              <h4 className="pt-5">{props.data[index].title}</h4>
              <p>{foundItem.content}</p>
              <p>{foundItem.price}</p>
              <button className="btn btn-danger">주문하기</button>
              <button className="btn btn-danger" onClick={ ()=>{
                history.goBack();
                // history.push('/') 해당 url의 위치로 이동
              } }>뒤로가기</button>          
            </div>
          </div>
    </div> 
  )
}

export default Detail
