import React, { ReactElement, useEffect, useState } from 'react'
import {useHistory, useParams} from 'react-router-dom';
import './App.css';
// 뒤로가기 필요할때 사용 useHistory

interface Props {
  data: {
    id: number,
    title: string,
    content: string,
    price: number}[]
}
// 스타일링할때 sass 쓰면 편함 고려해보자
function Detail(props: Props): ReactElement {
  // useEffect 여러개쓰면 쓴 순서대로 실행
  let [alert, setAlert] = useState(true);
  useEffect(() => {
    // 마운트될때 실행할 함수 => 컴포넌트 등장, 업데이트시 실행됨 => 업데이트는 재렌더링 일어날때마다 되므로
    // input창에서 onChange를 쓴다거나 하면 관계없는 상황에서 너무 자주 일어날 수 있음 
    // useEffect 끝에 [state] 해당 state가 변경될때만 실행하게끔 조건 설정 가능, 빈값 [] 넣으면 컴포넌트 첫 등장때만 실행됨
    // 2초후에 alert 안보이게 하기
    let timer = setTimeout(()=>{
      setAlert(false)
    }, 2000)
    return ()=>{
      // useEffect의 리턴에는 언마운트 될때 실행할 함수를 넣을 수 있음
      // setTimeout의 경우 실행되기전에 다른페이지로 이동한다거나 할경우 버그가 생길 수 있으니 
      // 언마운트될때 클리어하는 함수를 넣어주자
      clearTimeout(timer)
    }
  }, [alert]);
  let history = useHistory(); // 방문기록이 담겨있음
  let { id }: {id: string} = useParams(); // 라우터의 useParams훅 중괄호 안에{사용자가 입력한 url파라미터들} 담겨있음
  let index = Number(id);
  // 현재 방식으론 main에서 상품이 정렬되면 상품 위치와 param으로 넘기는 id값이 불일치할 경우가 생김
  // 따라서 넘어오는 데이터의 고유한 id값과 param을 대조해서 일치하는 아이템의 데이터를 가져오는 방식을 취하면됨
  // 실제로 서버와 통신할때는 상세 api를 통해 해당 값만 가져올테니 걱정 ㄴㄴ
  // find를 사용해보자
  // 1. find()는 array 뒤에 붙일 수 있으며, 안에 콜백함수가 들어갑니다.
  // 2. 콜백함수 내의 파라미터 item은 array 안에 있던 하나하나의 데이터를 의미합니다.
  // 3. return 오른쪽엔 조건식을 적을 수 있습니다. 이게 참인 데이터만 새로운 변수에 저장해줍니다
  // 4. 조건식엔 그리고 그걸 현재 URL의 /:id에 적힌 값과 item의 영구번호 (item.id)가 같은지 비교하고 있는 겁니다.
  let foundItem: any = props.data.find(function(item){
    return item.id === index
  })

  return (
    <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={"https://codingapple1.github.io/shop/shoes"+(foundItem.id+1)+".jpg"} width="100%" />
            </div>
            <div className="col-md-6 mt-4">
              <h4 className="pt-5">{foundItem.title}</h4>
              {/* 항상 보이는 ui가 아닐경우 이렇게 처리하자 */}
              {
                alert
                ? (<div className="my-alert">
                    <p>재고가 얼마 남지 않았습니다</p>
                  </div>)
                : null
              }
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
