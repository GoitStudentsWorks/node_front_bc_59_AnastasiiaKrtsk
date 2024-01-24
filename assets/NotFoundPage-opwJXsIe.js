import{ag as e,j as o,L as n}from"./index-3hR12qFU.js";import{b as t,a as i}from"./bgTable-BC5h5Xl1.js";import{W as a,a as r,b as d}from"./Mobile-Background-Main-Page2@1x-4y_l65a5.js";const s="/node_front_bc_59_AnastasiiaKrtsk/assets/Not-Found-Page-Bg@1x-WeWay5vn.png",p=e.div`
  position: fixed;
  z-index: -999;
  width: 100vw;
  height: 100vh;
  bottom: 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
  background-image: url(${a});
  overflow: hidden;

  @media screen and (min-width: 768px) {
    height: 87vh;
    background-image: url(${s});
  }

  @media screen and (min-width: 1440px) {
    background-position: bottom;
    background-size: contain;
    height: 83vh;
    background-image: url(${r});
  }
`,c=e.div`
  position: fixed;
  z-index: -999;
  width: 100vw;
  height: 100vh;
  top: 0;
  margin-top: 100px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: top;
  background-image: url(${t});

  @media screen and (min-width: 768px) {
    background-image: url(${i});
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${d});
  }
`,x=e.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  align-items: center;
  margin-top: 150px;
`,g=e.p`
  text-transform: uppercase;
  font-size: 80px;
  font-weight: var(--bold);
  color: var(--dark-blue);
  text-shadow: 3px 4px 4px #aebbd8;
  @media screen and (min-width: 768px) {
    text-shadow: 3px 4px 4px #8296c1;
  }
`,m=e.p`
  text-transform: uppercase;
  font-size: 35px;
  font-weight: var(--bold);
  color: #5f5f5f;
  @media screen and (min-width: 768px) {
    font-size: 50px;
  }
`,u=e.p`
  font-size: 12px;

  text-transform: uppercase;
  color: #797979;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`,h=e.button`
  margin-top: 16px;
  width: 100%;
  padding: 8px 30px;
  border: none;
  border-radius: 10px;
  background-color: var(--dark-blue);

  color: var(--white);
  text-transform: uppercase;
  font-size: 16px;
  font-style: normal;
  font-weight: var(--medium);
  line-height: calc(20 / 16);
  @media only screen and (min-width: 767px) {
    width: 200px;
    padding: 10px 30px;
  }
  &:hover {
    box-shadow: 0px 4px 14px 0px rgba(64, 123, 255, 0.54);
    transition: box-shadow var(--transition);
  }
`,w=()=>o.jsxs(o.Fragment,{children:[o.jsx(p,{}),o.jsxs(x,{children:[o.jsx(g,{children:"404"}),o.jsx(m,{children:"page not found"}),o.jsxs(u,{children:["the page you requested could not be found :/"," "]}),o.jsx(n,{to:"/",children:o.jsx(h,{type:"button",children:"home"})})]}),o.jsx(c,{})]});export{w as default};
