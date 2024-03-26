import{u as e,t as o,N as i,j as t}from"./index-257dcbed.js";const r="/rental-camper/assets/home-background-a220c53a.jpg",a=e.div`
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  gap: 60px;

  &::after {
    content: '';
    display: block;
    position: absolute;
    height: 100%;

    background-image: url(${r});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    z-index: -1;
  }
`,s=e.h1`
  width: 800px;
  font-weight: 600;
  font-size: 32px;
  line-height: 125%;
  color: ${o.colors.main};
`,n=e.p`
  width: 700px;
  font-weight: 500;
  font-size: 20px;
  line-height: 125%;
  color: ${o.colors.main};
`,c=e(i)`
  display: block;
  width: max-content;
  padding: 8px 8px;

  color: ${o.colors.button};
  cursor: pointer;
  font-size: ${o.fontSizes.medium};
  font-weight: 600;
  min-width: 80px;

  transition: ${`color ${o.animation.cubicBezier}`};

  &:hover,
  &:focus {
    color: ${o.colors.buttonHover};
  }
`,l=()=>t.jsxs(a,{children:[t.jsx(s,{children:"Camper Rental UA"}),t.jsx(n,{children:"Our project is a convenient and easy-to-use web service for renting camper vans in Ukraine, which allows you to travel and discover new places without restrictions, without having your own car."}),t.jsx(n,{children:"So, hit on the open road with our app and find your perfect campervan for an unforgettable trip!"}),t.jsxs(c,{to:"/catalog",children:[" ","> Get started <"]})]});export{l as default};
