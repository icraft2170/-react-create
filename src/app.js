/* @jsx createElement */
import { render, createElement } from "./react";


// const vdom = createElement('p', {} 
// , createElement('h1', {}, "React 만들기")
// , createElement('ul', {}, 
//     createElement('li',{style: "color:red"}, "첫번째 아이템"),
//     createElement('li',{style: "color:blue"}, "두번째 아이템"),
//     createElement('li',{style: "color:green"}, "세번째 아이템"),
//     )
//   );

const vdom = <p>
  <h1>React 만들기</h1>
  <ul>
    <li style="color:red">첫번째 아이템</li>
    <li style="color:blue">두번째 아이템</li>
    <li style="color:green">세번째 아이템</li>
  </ul>
</p>;

console.log(vdom);

render(vdom, document.querySelector('#app'));