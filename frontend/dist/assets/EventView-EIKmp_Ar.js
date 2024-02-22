import{_ as h,l as m,u as g,r as i,o as u,E as w,a as c,b as d,d as e,e as b,t as s,F as y,f as k,m as V,v as C,j as S,g as B,q as _,p as j,h as G}from"./index-7F7tAxJi.js";import{E as M}from"./EventRegisterBtn-7L4wCdEW.js";const n=r=>(j("data-v-789e8544"),r=r(),G(),r),E={class:"min-h-[100vh] event-container bg-[#2d1304] flex flex-col ssm:pb-12"},I={class:"flex flex-col justify-center"},D={class:"poster flex justify-start"},L=["src","alt"],R={class:"poster-data flex flex-col h-full sm:gap-32 gap-12 place-items-start flex-wrap max-sm:flex-col justify-between sm:px-12 sm:pl-[125px] px-8 sm:py-10 py-8"},N=_('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-gray-300 hover:text-gray-100 w-10 h-10 xl:w-12 xl:h-12" data-v-789e8544><g id="SVGRepo_bgCarrier" stroke-width="0" data-v-789e8544></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" data-v-789e8544></g><g id="SVGRepo_iconCarrier" data-v-789e8544><path d="M16 8L8 16M12 12L16 16M8 8L10 10" class="stroke-gray-200" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-789e8544></path></g></svg>',1),$=[N],q={class:"flex flex-col flex-left tracking-wider"},F={class:"flex flex-col gap-10"},z={class:"flex flex-col"},A={class:"font-semibold font-robotoslab text-[30px] opacity-90",style:{filter:"drop-shadow(0 0 15px rgb(255, 255, 255))"}},T={class:"font-bold font-merriweather md:text-[52px] sm:text-[47px] max-ssm:text-[42px] text-[35px]",style:{filter:"drop-shadow(0 0 23px rgb(255, 255, 255))"}},U={class:"opacity-85 font-montserrat text-[25px]",style:{filter:"drop-shadow(0 0 23px rgb(255, 255, 255))"}},H={class:"opacity-85 font-montserrat text-[25px]"},J=n(()=>e("br",null,null,-1)),K={class:"opacity-85 font-semibold font-montserrat text-[30px]",style:{filter:"drop-shadow(0 0 23px rgb(255, 255, 255))"}},O={class:"flex flex-col gap-12"},P={class:"flex flex-col gap-1"},Q=n(()=>e("span",{class:"font-bold text-[25px] sm:text-[30px] tracking-wide font-merriweather"},"Description",-1)),W={class:"pl-4 text-[18px] max-ssm:text-[16px]"},X={class:"guidelines flex flex-col gap-1"},Y=n(()=>e("span",{class:"font-bold text-[25px] tracking-wide sm:text-[30px] font-merriweather"},"Guidelines",-1)),Z={class:"pl-4 text-[18px] max-ssm:text-[16px]"},ee={class:"list-disc pl-4"},te={class:"flex justify-center flex-col gap-4"},se={class:"flex gap-3 text-center"},oe={class:"checkbox-wrapper-12"},ae={class:"cbx"},le=["checked"],ie=n(()=>e("label",{for:"cbx-12"},null,-1)),ne=n(()=>e("svg",{fill:"none",viewBox:"0 0 15 14",height:"14",width:"15"},[e("path",{d:"M2 8.36364L6.23077 12L13 2"})],-1)),re=_('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" data-v-789e8544><defs data-v-789e8544><filter id="goo-12" data-v-789e8544><feGaussianBlur result="blur" stdDeviation="4" in="SourceGraphic" data-v-789e8544></feGaussianBlur><feColorMatrix result="goo-12" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7" mode="matrix" in="blur" data-v-789e8544></feColorMatrix><feBlend in2="goo-12" in="SourceGraphic" data-v-789e8544></feBlend></filter></defs></svg>',1),ce={key:0,class:"pt-2"},de={__name:"EventView",setup(r){const p=m(),f=g(),x=i(0),v=i(""),t=i({});i("");const o=i(!1);return u(()=>{document.querySelector(".event-container").scrollIntoView({behavior:"smooth"})}),u(()=>{x.value=p.params.index,v.value=p.params.title,t.value=w[x.value],document.title=`${v.value} -Cine Carnival`}),(pe,a)=>(c(),d("div",E,[e("div",I,[e("div",D,[e("img",{src:t.value.poster,alt:t.value.title,class:"w-[100%] min-h-[400px] max-md:min-h-[300px] max-sm:min-h-[280px] max-vsm:min-h-[200px] object-fill"},null,8,L)]),e("div",R,[e("button",{onClick:a[0]||(a[0]=l=>b(f).back()),to:{name:"home",params:{to:"group"}},class:"arrow-icon-prev z-50 absolute float-right right-10 -mt-4 duration-500 max-md:right-5"},$),e("div",q,[e("div",F,[e("div",z,[e("span",A,s(t.value.club_name),1),e("span",T,s(t.value.title),1),e("span",U,s(t.value.type),1),e("span",H,s(t.value.category),1),J,e("span",K,s(t.value.date),1)]),e("div",O,[e("div",P,[Q,e("span",W,s(t.value.description),1)]),e("div",X,[Y,e("span",Z,[e("ul",ee,[(c(!0),d(y,null,k(t.value.guidelines,l=>(c(),d("li",{key:l},s(l),1))),128))])])]),e("div",te,[e("div",se,[e("div",oe,[e("div",ae,[V(e("input",{checked:o.value,"onUpdate:modelValue":a[1]||(a[1]=l=>o.value=l),type:"checkbox",id:"cbx-12"},null,8,le),[[C,o.value]]),ie,ne]),re]),e("button",{onClick:a[2]||(a[2]=l=>o.value=!o.value),class:"text-lg relative -mt-0.5 font-montserrat text-gray-300"},"I agree to the guidelines")]),o.value?(c(),d("div",ce,[S(M)])):B("",!0)])])])])])])]))}},ue=h(de,[["__scopeId","data-v-789e8544"]]);export{ue as default};
