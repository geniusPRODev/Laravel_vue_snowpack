const r={props:["href","as"]};import{renderSlot as n,openBlock as t,createBlock as o,resolveComponent as s,withCtx as l}from"../../_snowpack/pkg/vue.js";const i={key:0,type:"submit",class:"block w-full px-4 py-2 text-sm leading-5 text-gray-700 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"};export function render(e,f){const a=s("inertia-link");return t(),o("div",null,[e.as=="button"?(t(),o("button",i,[n(e.$slots,"default")])):e.as=="a"?(t(),o("a",{key:1,href:e.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},[n(e.$slots,"default")],8,["href"])):(t(),o(a,{key:2,href:e.href,class:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition"},{default:l(()=>[n(e.$slots,"default")]),_:3},8,["href"]))])}r.render=render;export default r;