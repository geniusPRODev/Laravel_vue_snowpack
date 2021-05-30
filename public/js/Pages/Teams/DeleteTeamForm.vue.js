import _ from"../../Jetstream/ActionSection.vue.js";import f from"../../Jetstream/ConfirmationModal.vue.js";import u from"../../Jetstream/DangerButton.vue.js";import p from"../../Jetstream/SecondaryButton.vue.js";const r={props:["team"],components:{JetActionSection:_,JetConfirmationModal:f,JetDangerButton:u,JetSecondaryButton:p},data(){return{confirmingTeamDeletion:!1,deleting:!1,form:this.$inertia.form()}},methods:{confirmTeamDeletion(){this.confirmingTeamDeletion=!0},deleteTeam(){this.form.delete(route("teams.destroy",this.team),{errorBag:"deleteTeam"})}}};import{createTextVNode as o,createVNode as n,resolveComponent as s,withCtx as e,openBlock as h,createBlock as g}from"../../../_snowpack/pkg/vue.js";const T=o(" Delete Team "),y=o(" Permanently delete this team. "),j=n("div",{class:"max-w-xl text-sm text-gray-600"}," Once a team is deleted, all of its resources and data will be permanently deleted. Before deleting this team, please download any data or information regarding this team that you wish to retain. ",-1),C={class:"mt-5"},D=o(" Delete Team "),k=o(" Delete Team "),v=o(" Are you sure you want to delete this team? Once a team is deleted, all of its resources and data will be permanently deleted. "),w=o(" Cancel "),B=o(" Delete Team ");export function render(t,a){const i=s("jet-danger-button"),l=s("jet-secondary-button"),m=s("jet-confirmation-modal"),d=s("jet-action-section");return h(),g(d,null,{title:e(()=>[T]),description:e(()=>[y]),content:e(()=>[j,n("div",C,[n(i,{onClick:t.confirmTeamDeletion},{default:e(()=>[D]),_:1},8,["onClick"])]),n(m,{show:t.confirmingTeamDeletion,onClose:a[2]||(a[2]=c=>t.confirmingTeamDeletion=!1)},{title:e(()=>[k]),content:e(()=>[v]),footer:e(()=>[n(l,{onClick:a[1]||(a[1]=c=>t.confirmingTeamDeletion=!1)},{default:e(()=>[w]),_:1}),n(i,{class:["ml-2",{"opacity-25":t.form.processing}],onClick:t.deleteTeam,disabled:t.form.processing},{default:e(()=>[B]),_:1},8,["onClick","class","disabled"])]),_:1},8,["show"])]),_:1})}r.render=render;export default r;
