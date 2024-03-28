import{u as r,t as a,N as f,d as n,e as g,r as i,s as c,i as h,j as t,k as x}from"./index-a2acb232.js";import{g as m,c as v,d as j,h as C,_ as F,C as P,f as $}from"./index-6531caf3.js";const l=r.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 50px;
  padding-bottom: 40px;
`,z=r.p`
  padding-top: 60px;
  font-size: ${a.fontSizes.medium};
  font-weight: 500;
`,L=r(f)`
  padding: 8px 8px;

  color: ${a.colors.button};
  cursor: pointer;
  font-size: ${a.fontSizes.small};
  font-weight: 600;
  min-width: 80px;

  transition: ${`color ${a.animation.cubicBezier}`};

  &:hover,
  &:focus {
    color: ${a.colors.buttonHover};
  }
`,w=()=>{const e=n(m),d=n(v),o=n(j),p=n(C),s=g();i.useEffect(()=>{s(c(1))},[s]),i.useEffect(()=>{o>1||s(h(e))},[s,e,o]);const u=()=>{s(c(o+1)),s(x(e))};return t.jsxs(t.Fragment,{children:[e.length===0&&t.jsxs(l,{children:[t.jsx(z,{children:"It seems you have not added anything to favorites..."}),t.jsxs(L,{to:"/catalog",children:[" ","> Go to catalog <"]})]}),e.length>0&&t.jsxs(l,{children:[t.jsx(F,{showUnder:10,children:t.jsx("span",{children:"UP"})}),t.jsx(P,{campers:p}),o*d<e.length&&t.jsx($,{onClick:u})]})]})};export{w as default};
