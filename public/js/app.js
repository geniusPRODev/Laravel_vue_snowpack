import*as t from"../_snowpack/env.js";import.meta.env=t;import{App as i,plugin as o}from"../_snowpack/pkg/@inertiajs/inertia-vue3.js";import{InertiaProgress as r}from"../_snowpack/pkg/@inertiajs/progress.js";import{createApp as s,h as a}from"../_snowpack/pkg/vue.js";const e=document.getElementById("app"),c=s({render:()=>a(i,{initialPage:JSON.parse(e.dataset.page),resolveComponent:p=>import(`./Pages/${p}.vue.js`).then(n=>n.default)})}).mixin({methods:{route}}).use(o).mount(e);r.init({color:"#4B5563"});
