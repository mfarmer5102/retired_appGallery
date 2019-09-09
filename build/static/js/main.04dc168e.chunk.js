(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(8),s=a.n(l),r=a(1),c=a(2),o=a(4),m=a(3),h=a(5),b=a(6),d=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={visible:a.props.visibility,content:{headerText:"Meet Matthew Farmer.",paragraphOne:"I'm a full-stack web developer with a keen eye for design and a passion for developing applications to solve real-world problems. In addition to more than a year of experience with programming on both the front and back end, I possess more than five years of professional experience with creative problem solving (such as creating departmental knowledge repositories with search capability and writing code to determine refund amounts for thousands of accounts at a large bank).",paragraphTwo:"My higher education includes a Bachelor\u2019s Degree in Business Management as well as the (pending) completion of the UNC Chapel Hill Coding Bootcamp. Technical skills include HTML/CSS, JavaScript, NodeJS, ReactJS, and database manipulation. Certified by the American Society of Quality in process improvement, I am highly skilled with process flowcharting (an invaluable tool in application development). In a collaborative environment, I enjoy teaching others and sharing my knowledge for the benefit of the team."}},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(){var e=this.props.visibility;e!==this.state.visible&&this.setState({visible:e})}},{key:"render",value:function(){return this.state.visible?i.a.createElement("section",{class:"card mb-4 animated fadeInUpBig"},i.a.createElement("subsection",null,i.a.createElement("div",{className:"card-header text-right"}),i.a.createElement("div",{className:"card-body"},i.a.createElement("h3",{class:"mb-4"},this.state.content.headerText),i.a.createElement("p",null,this.state.content.paragraphOne),i.a.createElement("p",{id:"extraAboutText"},this.state.content.paragraphTwo)))):null}}]),t}(n.Component),u={height:"200px"},p=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).handleSearch=function(e){fetch("/hit-db").then(function(e){return e.json()}).then(function(e){console.log(e),console.log(e.length),a.setState({gatheredDbDocs:e})})},a.drawCards=function(e){return i.a.createElement("div",{className:"col-xl-4 col-md-6"},i.a.createElement("div",{className:"card shadow mb-3"},i.a.createElement("h5",{className:"p-3"},e.title),i.a.createElement("img",{src:e.imagePath,style:u}),i.a.createElement("div",{className:"card-footer text-right"},i.a.createElement("a",{href:e.githubLink},i.a.createElement("i",{class:"fab fa-github"})),i.a.createElement("span",null," | "),i.a.createElement("a",{href:e.deployedLink},i.a.createElement("i",{class:"fas fa-external-link-alt"})))))},a.state={visible:a.props.visibility,gatheredDbDocs:{data:[]}},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(){var e=this.props.visibility;e!==this.state.visible&&this.setState({visible:e}),this.handleSearch()}},{key:"componentWillMount",value:function(){this.handleSearch()}},{key:"componentDidMount",value:function(){var e=this.props.visibility;e!==this.state.visible&&this.setState({visible:e})}},{key:"render",value:function(){if(this.state.visible){if(0!==this.state.gatheredDbDocs.data.length){var e=this.state.gatheredDbDocs.data;return i.a.createElement("section",{class:"card mb-4 animated fadeInUpBig"},i.a.createElement("subsection",null,i.a.createElement("div",{className:"card-header text-right"}),i.a.createElement("div",{className:"card-body"},i.a.createElement("div",{className:"row"},e.map(this.drawCards)))))}return null}return null}}]),t}(n.Component),v=[{title:"R\xe9sum\xe9",icon:"fas fa-file-invoice fa-5x",href:"https://drive.google.com/uc?export=download&id=1HOcFhOlveROqNYVoJIyTxzg6UWnjzxaY"},{title:"GitHub",icon:"fab fa-github fa-5x",href:"https://github.com/cafeamericano"},{title:"LinkedIn",icon:"fab fa-linkedin fa-5x",href:"https://www.linkedin.com/in/matthew-farmer-204930182"},{title:"Email",icon:"fas fa-envelope fa-5x",href:"#",text:"mfarmer5102@gmail.com"},{title:"Phone",icon:"fas fa-phone fa-5x",href:"#",text:"252-289-2937"}],f=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).drawConnectBlocks=function(e){return i.a.createElement("div",{className:"col-xl-4 col-lg-4 col-xs-6"},i.a.createElement("div",{className:"card shadow mb-3 text-center"},i.a.createElement("div",{className:"p-3"},i.a.createElement("h5",null,e.title)),i.a.createElement("div",{className:"p-3"},i.a.createElement("a",{href:e.href},i.a.createElement("i",{class:e.icon})))))},a.state={visible:a.props.visibility,connectBlocks:v},a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(){var e=this.props.visibility;e!==this.state.visible&&this.setState({visible:e})}},{key:"render",value:function(){var e=this.state.connectBlocks;return this.state.visible?i.a.createElement("section",{class:"card mb-4 animated fadeInUpBig"},i.a.createElement("subsection",null,i.a.createElement("div",{className:"card-header text-right"}),i.a.createElement("div",{className:"card-body"},i.a.createElement("div",{className:"row"},e.map(this.drawConnectBlocks))))):null}}]),t}(n.Component),g=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={totalClicks:0,subComponentVisibilityToggler:{Applications:!0,Skills:!1,Connect:!1,AboutMe:!1}},a.toggleVisibilityForAll=a.toggleVisibilityForAll.bind(Object(b.a)(Object(b.a)(a))),a}return Object(h.a)(t,e),Object(c.a)(t,[{key:"toggleVisibilityForAll",value:function(e){for(var t=Object.keys(this.state.subComponentVisibilityToggler),a={},n=0;n<t.length;n++){var i=t[n];a[i]=i===e}this.setState({subComponentVisibilityToggler:a}),console.log(this.state.subComponentVisibilityToggler)}},{key:"render",value:function(){var e=this;return i.a.createElement("main",null,i.a.createElement("nav",{class:"navbar fixed-top navbar-expand-lg navbar-dark bg-primary"},i.a.createElement("a",{class:"navbar-brand text-light"},i.a.createElement("i",{className:"fab fa-react"}),i.a.createElement("span",null," Portfolio")),i.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav"},i.a.createElement("span",{class:"navbar-toggler-icon"})),i.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarNav"},i.a.createElement("ul",{class:"navbar-nav"},i.a.createElement("li",{class:"nav-item",onClick:function(){return e.toggleVisibilityForAll("Applications")}},i.a.createElement("a",{class:"nav-link"},"Applications")),i.a.createElement("li",{class:"nav-item",onClick:function(){return e.toggleVisibilityForAll("Connect")}},i.a.createElement("a",{class:"nav-link"},"Connect")),i.a.createElement("li",{class:"nav-item",onClick:function(){return e.toggleVisibilityForAll("AboutMe")}},i.a.createElement("a",{class:"nav-link"},"About"))))),i.a.createElement("section",{className:"container p-3 mt-5"},i.a.createElement(d,{visibility:this.state.subComponentVisibilityToggler.AboutMe}),i.a.createElement(p,{visibility:this.state.subComponentVisibilityToggler.Applications}),i.a.createElement(f,{visibility:this.state.subComponentVisibilityToggler.Connect})))}}]),t}(n.Component),E=function(e){function t(e){return Object(r.a)(this,t),Object(o.a)(this,Object(m.a)(t).call(this,e))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(g,null))}}]),t}(n.Component);s.a.render(i.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.04dc168e.chunk.js.map