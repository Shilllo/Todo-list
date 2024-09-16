(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function t(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(e){if(e.ep)return;e.ep=!0;const n=t(e);fetch(e.href,n)}})();function g(o){let r=document.querySelector("#detailsModal"),t=document.querySelectorAll(".details"),l=o.getStorage()[o.currentProject];for(let e=1;e<t.length;e++)t[e].addEventListener("click",function(){document.querySelector("#detailsTitle").textContent=l[e-1].title,document.querySelector("#detailsModal-project").textContent=o.currentProject,document.querySelector("#detailsModal-priority").textContent=l[e-1].priority,document.querySelector("#detailsModal-dueDate").textContent=l[e-1].date,document.querySelector("#detailsModal-description").textContent=l[e-1].description,r.style.display="block"});window.onclick=function(e){e.target==r&&(r.style.display="none")}}function p(o,r){let t=document.querySelector(".content");if(t.innerHTML="",o.length===0){let e=document.createElement("p");e.textContent="No todos",e.classList.add("no-todos"),t.appendChild(e)}for(let e=0;e<o.length;e++){let n=document.querySelector("#todoExample").cloneNode(!0);n.children[0].children[1].textContent=o[e].title,n.children[1].children[1].textContent=o[e].date,o[e].status&&n.classList.add("done"),n.classList.add(o[e].priority),n.removeAttribute("id"),n.classList.add("todo"),t.appendChild(n)}let l=document.querySelectorAll(".todo");for(let e=0;e<l.length;e++)l[e].classList.contains("done")?(l[e].children[0].children[0].children[0].style.display="none",l[e].children[0].children[0].children[1].style.display="block"):(l[e].children[0].children[0].children[1].style.display="none",l[e].children[0].children[0].children[0].style.display="block")}function m(o){let r=document.querySelectorAll(".checkBox"),t=document.querySelectorAll(".todo");for(let l=0;l<t.length;l++)r[l+1].addEventListener("click",function(){t[l].classList.toggle("done"),o.refreshStatus(o.currentProject,l),t[l].classList.contains("done")?(t[l].children[0].children[0].children[0].style.display="none",t[l].children[0].children[0].children[1].style.display="block"):(t[l].children[0].children[0].children[1].style.display="none",t[l].children[0].children[0].children[0].style.display="block")})}function f(o){let r=document.querySelectorAll(".delete");for(let t=1;t<r.length;t++)r[t].addEventListener("click",function(){o.deleteTodo(o.currentProject,t-1),p(o.getStorage()[o.currentProject]),f(o),m(o)})}function S(o){let r=document.querySelectorAll(".project"),t=document.querySelector(".content");for(let l=0;l<r.length;l++)r[l].addEventListener("click",function(){o.currentProject=r[l].children[0].textContent,t.innerHTML="";const e=o.getStorage()[r[l].children[0].textContent];if(document.querySelectorAll(".active")[0].classList.remove("active"),r[l].classList.add("active"),e.length===0){let i=document.createElement("p");i.textContent="No todos",i.classList.add("no-todos"),t.appendChild(i)}else{for(let i=0;i<e.length;i++){let c=document.querySelector("#todoExample").cloneNode(!0);c.children[0].children[1].textContent=e[i].title,c.children[1].children[1].textContent=e[i].date,c.removeAttribute("id"),c.classList.add("todo"),e[i].status&&c.classList.add("done"),c.classList.contains("done")?(c.children[0].children[0].children[0].style.display="none",c.children[0].children[0].children[1].style.display="block"):(c.children[0].children[0].children[1].style.display="none",c.children[0].children[0].children[0].style.display="block"),c.classList.add(e[i].priority),t.appendChild(c)}m(o),g(o),f(o)}document.querySelector(".sidebar").classList.remove("show-sidebar")})}function q(o){let r=document.querySelector(".plus"),t=document.querySelector(".createNew");document.getElementsByClassName("close")[0],r.onclick=function(){t.style.display="block"},window.onclick=function(s){s.target==t&&(t.style.display="none")};let l=document.querySelector("#optionTodo"),e=document.querySelector("#optionProject"),n=document.querySelector("#optionTodoContent"),d=document.querySelector("#optionProjectContent");l.addEventListener("click",function(){n.style.display="flex",d.style.display="none"}),e.addEventListener("click",function(){n.style.display="none",d.style.display="flex"});let i=document.querySelector("#addTodo"),c=document.querySelector("#createProject");i.addEventListener("click",function(){let s=document.querySelector("#titleInput").value,a=document.querySelector("#detailsInput").value,u=document.querySelector("#dueDate").children[1].value,h=document.querySelector("#priority").children[1];s&&a&&u&&(o.addTodo(o.currentProject,{status:!1,title:s,description:a,date:u,priority:h.value}),p(o.getStorage()[o.currentProject]),t.style.display="none",document.querySelector("#titleInput").value="",document.querySelector("#detailsInput").value="",document.querySelector("#priority").children[1].value="low",document.querySelector("#dueDate").children[1].value=""),g(o),m(o),f(o)}),c.addEventListener("click",function(){let s=document.querySelector("#titleProjectInput").value;if(s){o.addProject(s);let a=document.createElement("button");a.classList.add("project");let u=document.createElement("h4");u.textContent=s,a.appendChild(u);let h=document.createElement("div");h.classList.add("count"),h.textContent=0,a.appendChild(h),document.querySelector(".projects").appendChild(a),document.querySelector("#titleProjectInput").value=""}t.style.display="none",S(o),p([]),o.currentProject=s})}function L(){const o=document.querySelector(".menu"),r=document.querySelector(".sidebar"),t=document.querySelector(".menu-icon");o.addEventListener("click",()=>{r.classList.toggle("show-sidebar"),t.classList.toggle("opened")})}function y(o){let r=document.querySelectorAll(".project");for(let t=0;t<r.length;t++)r[t].children[1].textContent=o.getStorage()[r[t].children[0].textContent].length}function j(o){let r=document.querySelector(".projects");r.innerHTML="";let t=o.getStorage();for(let l in t){let e=document.createElement("button");e.classList.add("project");let n=document.createElement("h4");n.textContent=l;let d=document.createElement("div");d.classList.add("count"),d.textContent=t[l].length,e.appendChild(n),e.appendChild(d),l===o.currentProject&&e.classList.add("active"),r.appendChild(e)}}class v{constructor(){this.storage={Today:[{status:!1,title:"brush teeth",description:"brush teeth with tooth brush",date:"2024-09-12",priority:"medium"},{status:!1,title:"eat breakfast",description:"eat breakfast with milk",date:"2024-09-12",priority:"low"},{status:!1,title:"complete homework",description:"ex. 1, 2, 3",date:"2024-09-25",priority:"high"}],Week:[],Gym:[],Study:[],Notes:[{status:!1,title:"go for a walk",description:"go for a walk with my dog",date:"2024-09-25",priority:"medium"}]},this.currentProject="Today",localStorage.getItem("storage")?this.storage=JSON.parse(localStorage.getItem("storage")):localStorage.setItem("storage",JSON.stringify(this.storage)),j(this),p(this.storage[this.currentProject]),m(this),f(this),S(this),q(this),L(),g(this),y(this)}addProject(r){this.storage[r]=[],localStorage.setItem("storage",JSON.stringify(this.storage)),y(this)}addTodo(r,t){this.storage[r].push(t),localStorage.setItem("storage",JSON.stringify(this.storage)),y(this)}getStorage(){return this.storage}refreshStatus(r,t){this.storage[r][t].status=!this.storage[r][t].status,localStorage.setItem("storage",JSON.stringify(this.storage))}deleteTodo(r,t){this.storage[r].splice(t,1),localStorage.setItem("storage",JSON.stringify(this.storage)),y(this)}}new v;