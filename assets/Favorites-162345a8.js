import{u as r,t as o,N as u,d as n,e as f,r as i,s as c,i as m,j as t,k as x}from"./index-257dcbed.js";import{g as h,c as v,d as j,h as C,C as F,f as P}from"./CamperBookingForm-ce949d34.js";const l=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 50px;
  padding-bottom: 40px;
`,$=r.p`
  padding-top: 60px;
  font-size: ${o.fontSizes.medium};
  font-weight: 500;
`,z=r(u)`
  padding: 8px 8px;

  color: ${o.colors.button};
  cursor: pointer;
  font-size: ${o.fontSizes.small};
  font-weight: 600;
  min-width: 80px;

  transition: ${`color ${o.animation.cubicBezier}`};

  &:hover,
  &:focus {
    color: ${o.colors.buttonHover};
  }
`,k=()=>{const e=n(h),d=n(v),a=n(j),p=n(C),s=f();i.useEffect(()=>{s(c(1))},[s]),i.useEffect(()=>{a>1||s(m(e))},[s,e,a]);const g=()=>{s(c(a+1)),s(x(e))};return t.jsxs(t.Fragment,{children:[e.length===0&&t.jsxs(l,{children:[t.jsx($,{children:"It seems you have not added anything to favorites..."}),t.jsxs(z,{to:"/catalog",children:[" ","> Go to catalog <"]})]}),e.length>0&&t.jsxs(l,{children:[t.jsx(F,{campers:p}),a*d<e.length&&t.jsx(P,{onClick:g})]})]})};export{k as default};
