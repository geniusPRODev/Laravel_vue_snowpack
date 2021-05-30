import p from"../../Jetstream/AuthenticationCard.vue.js";import f from"../../Jetstream/AuthenticationCardLogo.vue.js";import _ from"../../Jetstream/Button.vue.js";import h from"../../Jetstream/Input.vue.js";import j from"../../Jetstream/Label.vue.js";import b from"../../Jetstream/ValidationErrors.vue.js";const n={components:{JetAuthenticationCard:p,JetAuthenticationCardLogo:f,JetButton:_,JetInput:h,JetLabel:j,JetValidationErrors:b},data(){return{form:this.$inertia.form({password:""})}},methods:{submit(){this.form.post(this.route("password.confirm"),{onFinish:()=>this.form.reset()})}}};import{resolveComponent as e,createVNode as t,createTextVNode as v,withCtx as a,withModifiers as w,openBlock as J,createBlock as g}from"../../../_snowpack/pkg/vue.js";const C=t("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),V={class:"flex justify-end mt-4"},k=v(" Confirm ");export function render(o,r){const i=e("jet-authentication-card-logo"),m=e("jet-validation-errors"),d=e("jet-label"),l=e("jet-input"),u=e("jet-button"),c=e("jet-authentication-card");return J(),g(c,null,{logo:a(()=>[t(i)]),default:a(()=>[C,t(m,{class:"mb-4"}),t("form",{onSubmit:r[2]||(r[2]=w((...s)=>o.submit&&o.submit(...s),["prevent"]))},[t("div",null,[t(d,{for:"password",value:"Password"}),t(l,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:o.form.password,"onUpdate:modelValue":r[1]||(r[1]=s=>o.form.password=s),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"])]),t("div",V,[t(u,{class:["ml-4",{"opacity-25":o.form.processing}],disabled:o.form.processing},{default:a(()=>[k]),_:1},8,["class","disabled"])])],32)]),_:1})}n.render=render;export default n;
