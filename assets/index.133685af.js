import{j as x,R as g,a as h}from"./vendor.6a39c237.js";const p=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerpolicy&&(i.referrerPolicy=l.referrerpolicy),l.crossorigin==="use-credentials"?i.credentials="include":l.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(l){if(l.ep)return;l.ep=!0;const i=r(l);fetch(l.href,i)}};p();const e=x.exports.jsx,t=x.exports.jsxs,u=()=>e("div",{className:"w-full landing",children:e("div",{className:"landing2 landing2 flex h-screen",children:t("div",{className:"text-center my-auto px-8 container mx-auto lg:max-w-screen-md lg:space-y-0.5",children:[e("h1",{className:"text-gray-200 font-medium tracking-wide text-lg lg:text-xl",children:"Hello! \u{1F44B}"}),e("p",{className:"text-white font-bold text-4xl gradientText lg:text-5xl",children:"I'm Kevin,"}),e("p",{className:"text-gray-300 pt-1 lg:text-lg max-w-xs lg:max-w-sm lg:tracking-wide mx-auto",children:"a web developer based in Brooklyn. I design unique and memorable web experiences."})]})})}),c=({label:a,text:o,center:r=!1})=>t("div",{className:r?"text-center mb-3 space-y-2 xl:mb-5 xl:space-y-3":"mb-3 space-y-2 xl:mb-5 xl:space-y-3",children:[e("h1",{className:"text-gray-600 font-black tracking-wide uppercase text-sm md:text-base lg:text-lg 2xl:text-xl",children:r?a:"\u2014 "+a}),e("h1",{className:"text-gray-300 font-semibold tracking-wide text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl",children:o})]}),f=()=>t("div",{children:[e(c,{label:"ABOUT",text:"Hello! I'm Kevin,"}),t("div",{className:"text-gray-400 space-y-2 md:text-lg xl:text-xl",children:[e("p",{children:"a computer science student from Brooklyn. From a young age, I've been fascinated by the internet. I remember coming home from school everyday to checkout beautiful websites and play awesome flash games."}),e("p",{children:"Today, I take my adventure with the internet one step further. I'm an experienced web developer who specializes in building beautiful and unique websites, capable of elevating your brand and conveying your message across to millions of others."})]}),t("div",{children:[e("img",{src:"./../../public/vscode.png",alt:"VScode stock image"}),t("div",{className:"relative z-10 rounded-lg p-8 2xl:px-10 shadow-2xl shadow-black/75 space-y-2 background -top-24 -mb-24 md:-top-40 md:-mb-40 lg:-top-52 lg:-mb-52 2xl:-top-64 2xl:-mb-64",children:[e("h1",{className:"font-medium text-lg lg:text-xl 2xl:text-3xl text-white tracking-wide 2xl:leading-relaxed",children:"Technologies I work with:"}),e("p",{className:"text-gray-400 pb-2 lg:text-lg 2xl:text-xl lg:tracking-wide",children:"Here are some of the technologies I work with: I'm learning more everyday!"}),t("div",{className:"space-y-3 sm:flex sm:justify-between sm:pr-24 md:pr-36 2xl:pr-48",children:[e(d,{items:["JavaScript (ES7+)","TypeScript","React","Tailwind CSS"]}),e(d,{items:["NodeJS","Java","Rust"]}),e(d,{items:["Photoshop","Framer","UI/UX Tools"]})]})]})]})]}),d=({items:a})=>{let o=[];for(let r of a)o.push(e("li",{children:r}));return e("ul",{className:"text-gray-500 lg:text-lg 2xl:text-xl lg:tracking-wide",children:o})},b=()=>t("div",{children:[e(c,{label:"Projects",text:"Selected Works"}),t("div",{className:"space-y-6 md:space-y-7 lg:space-y-9 2xl:space-y-12 pt-2 md:pt-3 lg:pt-5",children:[e(m,{title:"This Portfolio",desc:"The second iteration of my personal portfolio built with ReactJS and Tailwind CSS. Open sourced on GitHub.",img:"https://images.unsplash.com/photo-1639793677434-b7c29536388a?fit=crop&w=900&q=80",alt:"Portfolio cover image",url:"https://github.com/kevinMEH/portfolio-v2"}),e(m,{title:"Hello World",desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",img:"https://images.unsplash.com/photo-1567588344489-e1466a854e2e?fit=crop&w=900&q=80",alt:"Lorem Ipsum cover image"}),t("div",{className:"github flex flex-col justify-around p-6 2xl:p-8 relative  rounded-lg md:rounded-xl 2xl:rounded-2xl h-48 md:h-52 lg:h-56 2xl:h-60",children:[e("h2",{className:"text-white text-xl md:text-2xl 2xl:text-3xl font-semibold tracking-wide text-center",children:"Ready to see more?"}),e("p",{className:"text-white opacity-70 text-center text-sm md:text-base 2xl:text-lg sm:w-2/3 lg:w-3/5 sm:mx-auto",children:"I open source most of my projects. Check out my GitHub page for a list of all my projects!"}),e("div",{className:"flex justify-center pt-2",children:e("a",{href:"https://github.com/kevinMEH",className:"font-medium leading-relaxed tracking-wide text-white text-sm md:text-base 2xl:text-lg flex bg-black/10 hover:bg-black/20 px-6 py-2 lg:px-9 lg:py-3 rounded-full",children:"GitHub"})})]})]})]}),m=({title:a,desc:o,img:r,alt:s,url:l})=>t("a",{href:l,className:"relative block rounded-lg overflow-hidden md:rounded-xl 2xl:rounded-2xl",children:[e("img",{className:"object-cover w-full h-48 md:h-52 lg:h-56 2xl:h-60",src:r,alt:s}),e("div",{className:"absolute top-0 left-0 right-0 bottom-0 background opacity-70 hover:opacity-50 transition-opacity duration-500"}),t("div",{className:"absolute bottom-6 left-6 pr-6 lg:bottom-8 lg:left-8 2xl:bottom-10 2xl:left-10 sm:w-2/3 2xl:w-3/5",children:[e("h2",{className:"text-white text-xl md:text-2xl 2xl:text-3xl md:leading-relaxed font-semibold tracking-wide",children:a}),e("p",{className:"text-gray-300 text-sm md:text-base 2xl:text-lg",children:o})]})]}),y=()=>t("div",{children:[e(c,{label:"CONTACT",text:"Lets start working!",center:!0}),t("div",{className:"space-y-5 md:pt-2",children:[e("p",{className:"text-gray-400 text-center md:text-lg 2xl:text-xl max-w-md 2xl:max-w-xl mx-auto lg:tracking-wide",children:"I'm always looking for opportunities to work on new projects. Press the button below and let's start working!"}),e("div",{className:"flex justify-center pt-1",children:e("a",{href:"mailto:hello@liao.gg",className:"px-5 py-2.5 2xl:px-7 2xl:py-3.5 2xl:text-xl rounded-lg text-indigo-100  shadow-xl shadow-indigo-500/10 hover:shadow-indigo-500/20 bg-indigo-500/10 hover:bg-indigo-500/20  border-2 border-indigo-500/70 hover:border-indigo-500 hover:scale-105 transition-all duration-300",children:"Get In Touch!"})})]})]}),w=()=>t("div",{className:"flex justify-between text-gray-500 pt-6 md:pt-16 xl:pb-4 lg:text-lg",children:[e("div",{children:"\xA9 2021 kevinMEH"}),t("div",{className:"flex items-center space-x-4 lg:space-x-16",children:[e("a",{href:"https://github.com/kevinMEH",children:"GitHub"}),e("a",{href:"mailto:hello@liao.gg",children:"Contact"})]})]});function v(){return t("div",{className:"background",children:[e(u,{}),t("div",{className:"container mx-auto p-8 space-y-40 lg:space-y-48 xl:space-y-56 2xl:space-y-64 lg:px-44 xl:px-72 2xl:px-80",children:[e(f,{}),e(b,{}),e(y,{}),e(w,{})]})]})}g.render(e(h.StrictMode,{children:e(v,{})}),document.getElementById("root"));
