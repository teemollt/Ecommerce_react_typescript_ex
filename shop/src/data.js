// 다른 파일에서도 쓸수 있게 export default 변수명 가져오기 import 변수명 from 경로
// export default 파일 하나당 딱 한번 쓸수있음 
// 여러개 쓸때는 export { 변수1, 변수2 }    import { 변수1, 변수2 } from 경로
let data = [
  {
    id : 0,
    title : "White and Black",
    content : "Born in France",
    price : 120000
  },

  {
    id : 1,
    title : "Red Knit",
    content : "Born in Seoul",
    price : 110000
  },

  {
    id : 2,
    title : "Grey Yordan",
    content : "Born in the States",
    price : 130000
  }
] 

export default data