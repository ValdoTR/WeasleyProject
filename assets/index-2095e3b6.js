import{l as m,m as u}from"./layers-2921e1af.js";import{t as o}from"./translate-cf2b8c4c.js";import{a as M}from"./translate-cf2b8c4c.js";const r=()=>{WA.player.state.saveVariable("chatRoomId",null,{public:!0,persist:!1,score:"room"}),WA.state.receiveChatMessage=!1,WA.state.onVariableChange("receiveChatMessage").subscribe(e=>{e&&(WA.state.chatMessageRoom===null||WA.state.chatMessageRoom===WA.player.state.chatRoomId)&&WA.chat.sendChatMessage(WA.state.chatMessageContent,WA.state.chatMessageAuthor)})},l=(e,t,a=null)=>{WA.state.chatMessageContent=e,WA.state.chatMessageAuthor=t,WA.state.chatMessageRoom=a,WA.state.receiveChatMessage=!0,setTimeout(()=>{WA.state.receiveChatMessage=!1},100)},c=(e=null)=>{WA.player.state.saveVariable("chatRoomId",e,{public:!0,persist:!1,score:"room"})},n=(e,t,a={})=>{for(let s=0;s<e.length;s++)WA.chat.sendChatMessage(o(e[s],a),t)},i=Object.freeze(Object.defineProperty({__proto__:null,initChat:r,setPlayerChatRoomId:c,sendMessageToAllPlayers:l,monologue:n},Symbol.toStringTag,{value:"Module"}));export{i as chat,m as layers,u as main,M as translations};
