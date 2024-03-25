import{u as p,d as r,e as d,r as n,s as o,i as u,j as s,k as f}from"./index-21de3bd5.js";import{g,c as m,d as x,h,C as v,f as C}from"./CamperBookingForm-012dbe64.js";const j=p.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 50px;
  padding-bottom: 40px;
`,E=()=>{const t=r(g),i=r(m),a=r(x),c=r(h),e=d();n.useEffect(()=>{e(o(1))},[e]),n.useEffect(()=>{a>1||e(u(t))},[e,t,a]);const l=()=>{e(o(a+1)),e(f(t))};return s.jsx(s.Fragment,{children:t.length>0&&s.jsxs(j,{children:[s.jsx(v,{campers:c}),a*i<t.length&&s.jsx(C,{onClick:l})]})})};export{E as default};
