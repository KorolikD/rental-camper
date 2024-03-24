import{r as t,j as e,F as q,B as S,T as y,a as C,C as l,L as i,t as c,R as g,b,c as W,I as B,u as f,d as k,e as L,f as T,g as A}from"./index-f0c92f44.js";import{S as n,B as I,s as V,a as D,b as E,C as R,c as P}from"./CamperBookingForm-fe82fa96.js";const K=()=>{const[s,a]=t.useState(!1),[r,u]=t.useState(!1),[h,o]=t.useState(!1),[d,p]=t.useState(!1),[m,x]=t.useState(!1),[w]=t.useState(null),F=j=>{j.preventDefault()},v=j=>{w(j.target.value)};return e.jsxs(q,{children:[e.jsx(M,{}),e.jsx(S,{children:"Filters"}),e.jsx(y,{children:"Vehicle equipment"}),e.jsxs(C,{children:[e.jsx(l,{type:"checkbox",checked:s,onChange:()=>{a(!s)},name:"vehicle-equipment",id:"vehicle-equipment-ac",value:"ac"}),e.jsxs(i,{htmlFor:"vehicle-equipment-ac",children:[e.jsx(n,{icon:"filters-AC",color:c.colors.main,height:32,width:32}),"AC"]}),e.jsx(l,{type:"checkbox",checked:r,onChange:()=>{u(!r)},id:"vehicle-equipment-automatic",name:"vehicle-equipment",value:"automatic"}),e.jsxs(i,{htmlFor:"vehicle-equipment-automatic",children:[e.jsx(n,{icon:"filters-transmission",stroke:c.colors.main,height:32,width:32}),"Automatic"]}),e.jsx(l,{type:"checkbox",checked:h,onChange:()=>{o(!h)},id:"vehicle-equipment-kitchen",name:"vehicle-equipment",value:"kitchen"}),e.jsxs(i,{htmlFor:"vehicle-equipment-kitchen",children:[e.jsx(n,{icon:"filters-kitchen",stroke:c.colors.main,height:32,width:32}),"Kitchen"]}),e.jsx(l,{type:"checkbox",checked:d,onChange:()=>{p(!d)},id:"vehicle-equipment-tv",name:"vehicle-equipment",value:"tv"}),e.jsxs(i,{htmlFor:"vehicle-equipment-tv",children:[e.jsx(n,{icon:"filters-TV",stroke:c.colors.main,height:32,width:32}),"TV"]}),e.jsx(l,{type:"checkbox",checked:m,onChange:()=>{x(!m)},id:"vehicle-equipment-shower-WC",name:"vehicle-equipment",value:"shower-WC"}),e.jsxs(i,{htmlFor:"vehicle-equipment-shower-WC",children:[e.jsx(n,{icon:"filters-shower-WC",stroke:c.colors.main,height:32,width:32}),"Shower/WC"]})]}),e.jsx(y,{style:{marginTop:"32px"},children:"Vehicle type"}),e.jsxs(C,{children:[e.jsx(g,{type:"radio",onChange:v,id:"vehicle-type-van",name:"vehicle-type",value:"van"}),e.jsxs(i,{htmlFor:"vehicle-type-van",children:[e.jsx(n,{icon:"filters-van",color:c.colors.main,height:28,width:40}),"Van"]}),e.jsx(g,{type:"radio",onChange:v,id:"vehicle-type-fully-integrated",name:"vehicle-type",value:"fully-integrated"}),e.jsxs(i,{htmlFor:"vehicle-type-fully-integrated",style:{padding:"8px 0"},children:[e.jsx(n,{icon:"filters-fully-integrated",color:c.colors.main,height:28,width:40}),"Fully ",e.jsx("br",{}),"Integrated"]}),e.jsx(g,{type:"radio",onChange:v,id:"vehicle-type-alcove",name:"vehicle-type",value:"alcove"}),e.jsxs(i,{htmlFor:"vehicle-type-alcove",children:[e.jsx(n,{icon:"filters-alcove",color:c.colors.main,height:28,width:40}),"Alcove"]})]}),e.jsx(I,{style:{marginTop:"80px"},type:"submit",onClick:F,children:"Search"})]})},M=()=>e.jsxs(b,{htmlFor:"location",children:["Location",e.jsx(W,{type:"text",name:"location",placeholder:"City"}),e.jsx(B,{children:e.jsx("use",{href:`${V}#location`})})]}),G=f.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 40px;
`,$=f.div`
  display: flex;
  width: 888px;
  align-items: center;
  justify-content: center;
  margin-left: 60px;
`,z=f.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 50px;
`,N=()=>{const[s]=t.useState(4),[a,r]=t.useState(1),[u,h]=t.useState([]),o=k(D),d=k(E),p=L();t.useEffect(()=>{p(T())},[p]),t.useEffect(()=>{h(x=>[...x,...o.slice(a*s-s,a*s)])},[a,s,o]);const m=()=>{r(a+1)};return e.jsxs(G,{children:[e.jsx(K,{}),e.jsxs($,{children:[d&&e.jsx(A,{}),o.length>0&&e.jsxs(z,{children:[e.jsx(R,{campers:u}),a*s<o.length&&e.jsx(P,{onClick:m})]})]})]})};export{N as default};
