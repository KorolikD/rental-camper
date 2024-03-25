import{u,r as a,d as m,j as s}from"./index-4f1cfb12.js";import{d,C as p,c as x}from"./CamperBookingForm-b2420425.js";const f=u.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 50px;
`,C=()=>{const[e]=a.useState(4),[t,o]=a.useState(1),[n,c]=a.useState([]),r=m(d);a.useEffect(()=>{c(l=>[...l,...r.slice(t*e-e,t*e)])},[t,e,r]);const i=()=>{o(t+1)};return s.jsx(s.Fragment,{children:r.length>0&&s.jsxs(f,{children:[s.jsx(p,{campers:n}),t*e<r.length&&s.jsx(x,{onClick:i})]})})};export{C as default};
