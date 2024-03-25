import{u as t,t as n,j as e}from"./index-4f1cfb12.js";const i="/rental-camper/assets/home-background-a220c53a.jpg",r=t.div`
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  gap: 60px;

  &::after {
    content: '';
    display: block;
    position: absolute;
    height: 100%;

    background-image: url(${i});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    z-index: -1;
  }
`,a=t.h1`
  width: 800px;
  font-weight: 600;
  font-size: 32px;
  line-height: 125%;
  color: ${n.colors.main};
`,o=t.p`
  width: 700px;
  font-weight: 500;
  font-size: 20px;
  line-height: 125%;
  color: ${n.colors.main};
`,c=()=>e.jsxs(r,{children:[e.jsx(a,{children:"Camper Rental UA"}),e.jsx(o,{children:"Our project is a convenient and easy-to-use web service for renting camper vans in Ukraine, which allows you to travel and discover new places without restrictions, without having your own car."}),e.jsx(o,{children:"So, hit on the open road with our app and find your perfect campervan for an unforgettable trip!"})]});export{c as default};
