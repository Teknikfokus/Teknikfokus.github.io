(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0252":function(e,t,a){e.exports=a.p+"img/Emil.5b1cd1f8.jpg"},"0a6f":function(e,t,a){},"0f93":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"companies"}},[a("div",{staticClass:"container pt-5 pb-5"},[a("h2",{staticClass:"text-capitalize text-center mb-4"},[e._v("Attending Companies")]),!e.isLoading&&!e.isError&&e.filteredCompanies.length>0?a("CompanyGrid",{attrs:{companies:e.filteredCompanies},on:{select:e.selectCompany}}):e._e(),!e.isLoading&&!e.isError&&e.filteredCompanies.length<=0?a("ErrorMessage",{attrs:{text:"No companies found."}}):e._e(),e.isLoading||e.isError?e._e():a("CompanyModal",{class:{show:e.showModal},style:{top:e.scrollTop+"px"},attrs:{info:e.selected},on:{close:function(t){return e.closeModal()}}}),e.isLoading||e.isError?e._e():a("div",{staticClass:"dark-backdrop",class:{show:e.showModal},on:{click:function(t){return e.closeModal()}}}),e.isLoading?a("Loader"):e._e(),e.isError&&!e.isLoading?a("ErrorMessage",{attrs:{text:"Unable to load companies, try again in a moment.<br>If the error persists, feel free to contact us."}}):e._e()],1)])},n=[],o=(a("4de4"),a("caad"),a("07ac"),a("2532"),a("1c7f")),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"company-grid"}},e._l(e.sortedCompanies,(function(t){return a("button",{key:JSON.stringify(t),staticClass:"company",attrs:{tabindex:"0"},on:{click:function(a){return e.$emit("select",t)}}},[a("div",{staticClass:"content"},[t.logo&&t.logo._jv&&t.logo._jv.links&&t.logo._jv.links.image?a("div",{staticClass:"logo"},[a("img",{attrs:{src:e.endpoint+t.logo._jv.links.image,alt:t.name+" logo"}})]):a("div",{staticClass:"name"},[e._v(e._s(t.name))])])])})),0)},r=[],l=(a("b0c0"),a("2909")),c=a("07a4"),u={name:"CompanyGrid",props:{companies:Array},data:function(){return{endpoint:c["b"]}},computed:{sortedCompanies:function(){return Object(l["a"])(this.companies).sort((function(e,t){return"teknikfokus"===e.name.toLowerCase()?-1:"teknikfokus"===t.name.toLowerCase()||e.name>t.name?1:t.name>e.name?-1:0}))}}},d=u,f=(a("2f5c"),a("2877")),p=Object(f["a"])(d,s,r,!1,null,"617f07b2",null),m=p.exports,h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"company-modal"}},[void 0!==e.info?a("div",{staticClass:"content-wrapper"},[e.info.logo&&e.info.logo._jv&&e.info.logo._jv.links&&e.info.logo._jv.links.image?a("div",{staticClass:"logo",style:{"background-image":"url("+e.endpoint+e.info.logo._jv.links.image+")"}}):e._e(),a("div",{staticClass:"name"},[e._v(e._s(e.info.name))]),e.sanitizedDescription&&e.sanitizedDescription.length>0?a("div",{staticClass:"description",domProps:{innerHTML:e._s(e.sanitizedDescription)}}):e._e(),a("div",{staticClass:"body",domProps:{innerHTML:e._s(e.sanitizedBody)}}),a("button",{staticClass:"close",on:{click:function(t){return e.$emit("close")}}},[e._v("Close")])]):e._e()])},g=[],v=(a("a4d3"),a("e01a"),a("a15b"),a("d81d"),{name:"CompanyModal",props:{info:Object},data:function(){return{endpoint:c["b"]}},computed:{sanitizedBody:function(){return this.info.body?Object(l["a"])(this.info.body).map((function(e){return"\n"===e?"<br>":e})).join(""):""},sanitizedDescription:function(){return this.info.description?Object(l["a"])(this.info.description).map((function(e){return"\n"===e?"<br>":e})).join(""):""}}}),b=v,k=(a("cd9f"),Object(f["a"])(b,h,g,!1,null,"f38a4f18",null)),y=k.exports,w=a("555f"),_=a("8e27"),j={name:"Companies",components:{CompanyGrid:m,CompanyModal:y,Loader:w["a"],ErrorMessage:_["a"]},data:function(){return{scrollTop:0,isLoading:!0,isError:!1,selected:void 0,showModal:!1}},created:function(){this.reloadCompanies()},methods:{reloadCompanies:function(){var e=this;this.isLoading=!0;var t=function(){var t=Object.values(o["b"].status);e.isLoading=t.includes(0),e.isError=-1===t[t.length-1]};o["b"].run((function(){return e.$store.dispatch("jv/get","companies")})).then(t).catch(t)},selectCompany:function(e){this.selected=e,this.showModal=!0,this.scrollTop=window.scrollY+150},closeModal:function(){this.showModal=!1},onScroll:function(){}},computed:{companies:function(){return this.$store.getters["jv/get"]("companies")},filteredCompanies:function(){return Object.values(this.companies).filter((function(e){return e.days_attending&&Object.values(e.days_attending).length>0}))}}},C=j,I=(a("b345"),Object(f["a"])(C,i,n,!1,null,"4566e0dc",null));t["default"]=I.exports},1600:function(e,t,a){},2155:function(e,t,a){},"21d6":function(e,t,a){e.exports=a.p+"img/Jonna.8e14b77d.jpg"},"2ca0":function(e,t,a){"use strict";var i=a("23e7"),n=a("06cf").f,o=a("50c4"),s=a("5a34"),r=a("1d80"),l=a("ab13"),c=a("c430"),u="".startsWith,d=Math.min,f=l("startsWith"),p=!c&&!f&&!!function(){var e=n(String.prototype,"startsWith");return e&&!e.writable}();i({target:"String",proto:!0,forced:!p&&!f},{startsWith:function(e){var t=String(r(this));s(e);var a=o(d(arguments.length>1?arguments[1]:void 0,t.length)),i=String(e);return u?u.call(t,i,a):t.slice(a,a+i.length)===i}})},"2f5c":function(e,t,a){"use strict";a("6ab8")},"3c8d":function(e,t,a){"use strict";a("1600")},"4a76":function(e,t,a){},"582b":function(e,t,a){},5877:function(e,t,a){e.exports=a.p+"img/Christoffer.f342ee0c.jpg"},"627b":function(e,t,a){e.exports=a.p+"img/Katia.1c7983d8.jpg"},"686d":function(e,t,a){e.exports=a.p+"img/Annie.9ebc2b9f.jpg"},"6ab8":function(e,t,a){},"7adc":function(e,t,a){e.exports=a.p+"img/Mimmi.1a077094.jpg"},"7bce":function(e,t,a){e.exports=a.p+"img/Alex.5fe6d117.jpg"},"7c09":function(e,t,a){"use strict";a("582b")},"8e27":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"errorMsg"}},[e.text?a("div",{staticClass:"msg",domProps:{innerHTML:e._s(e.text)}}):e._e(),e.code?a("div",{staticClass:"code"},[e._v("(Error code: "+e._s(e.code)+")")]):e._e()])},n=[],o={name:"ErrorMessage",props:{text:void 0,code:void 0}},s=o,r=a("2877"),l=Object(r["a"])(s,i,n,!1,null,"da7ff8ec",null);t["a"]=l.exports},9492:function(e,t,a){"use strict";a("c153")},9670:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"for-companies"}},[a("div",{staticClass:"container pt-5 mt-5"},[a("h3",[e._v("Teknikfokus 2021 is digital!")]),a("p",[e._v(" At this page you will find all information relevant for companies about registering at Teknikfokus digital platform and how to make students visit your stall. There are also video tutorials on how to set up your stall. ")]),a("h3",[e._v("Encourage the students to visit your stall ")]),a("p",[e._v(" The most important thing is to show you opportunities and how the students can benefit from being a part of your company. Also make sure that you have an interesting presentation for students that visit the fair to explore and expand their knowledge about the job market ")]),a("h5",[e._v("Contact the students")]),a("p",[e._v(" During the fair, students will be able to contact companies via chat or a booked video meeting. However, do not forget that companies are able to contact students as well. It has shown to be highly appreciated by students when companies also initiate the contact. Use this opportunity to contact students you find interesting and achieve a busy stall. ")]),a("h5",[e._v("Summer jobs, master thesis and internships")]),a("p",[e._v(" Many of our most active students visiting the fair are interested in working at your company during their studies or would love to do their master thesis at your company. If you have any jobs of any kind, make sure to register them at the plattform to make them easy for students to see! ")]),a("h5",[e._v("Company giveaways")]),a("p",[e._v(" In connection to the fair, Teknikfous will help you distribute your merchandise and other physical giveaways to students visiting the fair. Make sure you tell your business contact if you have anything to give to the students. Even if you don't have any physical merchandise to give to the students, doing a lottery where the students can win digital prizes such as an opportunity to get their resumés reviewed or digital gift cards can entice the students to visit your company stall and start a chat. ")]),a("h3",[e._v("Registration")]),a("p",[e._v(" There are two steps to register at the online platform used at Teknikfokus this year. ")]),a("h4",[e._v("Step 1: Registrating to participate in the fair")]),a("p",[e._v(" If your company want to be a part of Teknikfokus 2021 but are still not registered, contact one of our business managers at email "),a("a",{attrs:{href:"mailto:christoffer@teknikfokus.se"}},[e._v("christoffer@teknikfokus.se")]),e._v(", "),a("a",{attrs:{href:"mailto:evelina@teknikfokus.se"}},[e._v("evelina@teknikfokus.se")]),e._v(" or "),a("a",{attrs:{href:"mailto:nelly@teknikfokus.se"}},[e._v("nelly@teknikfokus.se")])]),a("h4",[e._v("Step 2: Create your virtual stall")]),a("p",[e._v(" To participate in Teknikfokus 2021 you need to create a company account at our digital plattform and build your virtual stall. "),a("br"),a("br"),e._v(" Everything you need to know to build your stall can be seen in the videos below! ")]),a("div",{staticClass:"videos"},[a("div",{staticClass:"video"},[a("iframe",{attrs:{src:"https://www.loom.com/embed/690ee60be1264383a54f9118b8c0b281",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),a("div",{staticClass:"video"},[a("iframe",{attrs:{src:"https://www.loom.com/embed/1e7f63fef026488fa1575d56188d67ee",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),a("div",{staticClass:"video"},[a("iframe",{attrs:{src:"https://www.loom.com/embed/4d46733134ba4d78816a72f8c6374477",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),a("div",{staticClass:"video"},[a("iframe",{attrs:{src:"https://www.loom.com/embed/993b3cb8a0c240508221f3f89e4d710c",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})]),a("div",{staticClass:"video"},[a("iframe",{attrs:{src:"https://www.loom.com/embed/e1d6ce72f35f42959f44cc5460ea7ff1",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})])])])])}],o={name:"ForCompanies",components:{}},s=o,r=(a("9492"),a("2877")),l=Object(r["a"])(s,i,n,!1,null,"b2b55d22",null);t["default"]=l.exports},a15b:function(e,t,a){"use strict";var i=a("23e7"),n=a("44ad"),o=a("fc6a"),s=a("a640"),r=[].join,l=n!=Object,c=s("join",",");i({target:"Array",proto:!0,forced:l||!c},{join:function(e){return r.call(o(this),void 0===e?",":e)}})},a640:function(e,t,a){"use strict";var i=a("d039");e.exports=function(e,t){var a=[][e];return!!a&&i((function(){a.call(null,t||function(){throw 1},1)}))}},b031:function(e,t,a){e.exports=a.p+"img/placeholder-person.4788048f.png"},b345:function(e,t,a){"use strict";a("4a76")},bb20:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"how-to"}},[a("div",{staticClass:"container pt-5"},[a("h3",[e._v("Join Teknikfokus with your LU email")]),a("div",{staticClass:"paragraph"},[e._v(" Teknikfokus 2021 will be completely digitally this year and takes place on February17th 2021 between 10.00-16.00! "),a("br"),a("br"),e._v(" You can find the fair at fair.teknikfokus.se and to participate in the fair you only need to create a user profile: click on View event> Register> Sign up with LU student account and go through the quick steps to create your profile! You can now start exploring the profiles of the participating companies! "),a("br"),a("br"),a("b",[e._v("Register here")]),e._v(": "),a("a",{staticClass:"btn link-button ml-3",attrs:{href:"https://fair.teknikfokus.se/sv/event/4728",target:"_blank"}},[e._v("Register")])]),a("h3",[e._v("What can I do at the fair?")]),a("div",{staticClass:"paragraph"},[a("span",{staticClass:"highlighted"},[e._v("Read about the companies")]),e._v(" - In the company stalls, you can read about the company, what they are doing, what it is like to be an employee there and any jobs they're offering. You can also chat with the company hosts or book an interview. "),a("br"),a("br"),a("span",{staticClass:"highlighted"},[e._v("Applying for a job")]),e._v(" - To see which jobs are available to apply for during the fair, you can either use the jobs page or go to the stalls of individual companies that you are interested in to see if they offer any jobs that would suit you. "),a("br"),a("br"),a("span",{staticClass:"highlighted"},[e._v("Chat with companies")]),e._v(" - You can chat with a company recruiter during the fair by visiting the company's stall. You can also continue ongoing chats started during the fair, after the fair has ended. You can ask specific questions about job opportunities or chat with a recruiter to network and make contacts, all depending on what your goal of the fair is. You can have several chats running at the same time, so if the recruiter has a lot to do, you can start chatting with someone else in the meantime or book an interview! "),a("br"),a("br"),a("span",{staticClass:"highlighted"},[e._v("Interview/Video call")]),e._v(" - You can book a video call with a recruiter from a company where both of you have set aside time especially for each other and there is no stress or pressure due to people waiting! You can sign up for an interview in the company stall, and you will also join the call at the company stall. Once you have booked an interview, you can continue to explore the fair in peace and quiet and come back when it's your turn. Make sure your profile is as complete as possible to get an interview! "),a("br"),a("br"),a("span",{staticClass:"quote"},[a("span",{staticClass:"quote-text"},[e._v('"But have you completed your profile?" … “Immediately after I had saved my new complete profile I got in contact with several different companies.”')]),a("br"),e._v(" - Evelina ")])]),a("h3",[e._v("But how do I gain the most of my time at the fair?")]),a("div",{staticClass:"paragraph"},[e._v(" There are several different ways to prepare for the fair. One of the most important things you can do to get the most out of your experience is to "),a("span",{staticClass:"highlighted"},[e._v("create a strong profile")]),e._v(". The more info you have about yourself, the greater the chance is that a "),a("span",{staticClass:"highlighted"},[e._v("company will contact you")]),e._v(". Feel free to upload a photo, CV, personal presentational text, work experience and skills to give an impression of yourself that is as complete as possible. Then the companies will know that they should contact you! "),a("br"),a("br"),e._v(" Read the list of companies on teknikfokus.se or click around on the fair in advance to get to know the companies before the fair so that you know which ones you are interested in. "),a("br"),a("br"),e._v(" If there is a company that you are particularly interested in, prepare questions so that you can get the most out of your conversation with them! If you have no questions and are just curious, that’s all right! Go in and chat with companies, they really want to talk to you! Don’t be scared to contact them! "),a("br"),a("br"),e._v(" Pssst… Company recruiters can start a video call in a chat. If you think it is more rewarding to talk than to write, you can always ask if they want to start a video call. ")]),a("div",{staticClass:"paragraph quote-block"},[e._v(" “A couple of months ago I attended ARKAD, a two-day long career fair arranged by TLTH. It was the first time that I attended a virtual career fair, so I did not know what to expect. I had registered and had an account ready for the fair, or so I thought. "),a("br"),a("br"),e._v(" The first day of the fair I visited some company stalls. It was nice to read about the companies and I could take my time to look through all the different openings that the companies offered. However, I did not come in contact with any of the company staff that were online. "),a("br"),a("br"),e._v(" The second day, I met some of my classmates who told me that people from several companies had started chatting with them. I was surprised to hear that they got in contact with the companies when I didn’t! “But have you completed your profile?”, one of them asked me. Then it hit me, I was just a profile with nothing but name and some basic contact info. The companies could not see me, so no wonder why they did not write to me. I quickly added my resume, a profile picture, and wrote a small presentation about myself and what I was looking to achieve at the fair. Immediately after I had saved my new complete profile I got in contact with several different companies. "),a("br"),a("br"),e._v(" Teknikfokus is just around the corner and this time I have already started building my profile to make sure that I get the most out of the fair!” ")])])])}],o={name:"HowTo",components:{}},s=o,r=(a("cab3"),a("2877")),l=Object(r["a"])(s,i,n,!1,null,"735b4dcf",null);t["default"]=l.exports},bdef:function(e,t,a){e.exports=a.p+"img/Nelly.07cd1cc6.jpg"},c153:function(e,t,a){},cab3:function(e,t,a){"use strict";a("0a6f")},cb0a:function(e,t,a){var i={"./Alex.jpg":"7bce","./Annie.jpg":"686d","./Christoffer.jpg":"5877","./Emil.jpg":"0252","./Jimmy.jpg":"f6dc","./Jonna.jpg":"21d6","./Katia.jpg":"627b","./Ludvig.jpg":"d171","./Mimmi.jpg":"7adc","./Nelly.jpg":"bdef","./placeholder-person.png":"b031"};function n(e){var t=o(e);return a(t)}function o(e){if(!a.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}n.keys=function(){return Object.keys(i)},n.resolve=o,e.exports=n,n.id="cb0a"},cd9f:function(e,t,a){"use strict";a("2155")},d171:function(e,t,a){e.exports=a.p+"img/Ludvig.8d227e54.jpg"},f6dc:function(e,t,a){e.exports=a.p+"img/Jimmy.9c9c075e.jpg"},f820:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"about"}},[a("div",{staticClass:"container mt-5"},[a("h2",{staticClass:"text-center mb-4 text-capitalize font-weight-bold"},[e._v("The project group")]),a("div",{staticClass:"people-holder"},e._l(e.people,(function(e){return a("Person",{key:e.name,attrs:{info:e}})})),1)])])},n=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"person"}},[a("div",{staticClass:"img-wrapper",style:{"background-image":"url("+(""==e.info.imageUrl?e.getImgUrl("@/placeholder-person.png"):e.getImgUrl(e.info.imageUrl))+")"}}),a("span",{staticClass:"name"},[e._v(e._s(e.info.name))]),a("span",{staticClass:"position"},[e._v(e._s(e.info.position))]),a("div",{staticClass:"icons"},[""!=e.info.linkedIn?a("a",{attrs:{href:e.info.linkedIn}},[a("i",{staticClass:"fab fa-linkedin-in"})]):e._e(),a("a",{attrs:{href:"mailto:"+e.info.mail}},[a("i",{staticClass:"far fa-envelope"})])])])},s=[],r=(a("2ca0"),{name:"Person",props:{info:{name:String,position:String,imageUrl:String,linkedIn:String,mail:String}},methods:{getImgUrl:function(e){return e.startsWith("@/")?a("cb0a")("./"+e.substring(2)):e}}}),l=r,c=(a("7c09"),a("2877")),u=Object(c["a"])(l,o,s,!1,null,"6d323db2",null),d=u.exports,f={name:"About",components:{Person:d},data:function(){return{people:[{name:"Emil Holm",position:"Project Manager",imageUrl:"@/Emil.jpg",linkedIn:"https://www.linkedin.com/in/emil-holm-101023155/",mail:"emil@teknikfokus.se"},{name:"Jonna Fahrman",position:"Project Manager",imageUrl:"@/Jonna.jpg",linkedIn:"https://www.linkedin.com/in/jonna-fahrman-3758a61b8",mail:"jonna@teknikfokus.se"},{name:"Mimmi Hansson",position:"Marketing Director",imageUrl:"@/Mimmi.jpg",linkedIn:"https://www.linkedin.com/in/mimmihansson",mail:"mimmi@teknikfokus.se"},{name:"Ludvig Svedberg",position:"IT Manager, Website",imageUrl:"@/Ludvig.jpg",linkedIn:"https://www.linkedin.com/in/ludvigsvedberg/",mail:"ludvig@teknikfokus.se"},{name:"Patrik Gyllvin",position:"IT Manager, Server",imageUrl:"",linkedIn:"https://linkedin.com/in/patrik-gyllvin-546aa0159",mail:"patrik@teknikfokus.se"},{name:"Jimmy Szentes",position:"Event Manager",imageUrl:"@/Jimmy.jpg",linkedIn:"https://www.linkedin.com/in/jimmy-szentes-342b291ba/",mail:"jimmy@teknikfokus.se"},{name:"Christoffer Fjällborg Rinaldo",position:"Business Manager",imageUrl:"@/Christoffer.jpg",linkedIn:"https://www.linkedin.com/in/christoffer-fjällborg-rinaldo-a910061bb",mail:"christoffer@teknikfokus.se"},{name:"Evelina Danielsson",position:"Business Manager",imageUrl:"",linkedIn:"",mail:"evelina@teknikfokus.se"},{name:"Nelly Ostréus",position:"Business Manager",imageUrl:"@/Nelly.jpg",linkedIn:"www.linkedin.com/in/nellyostréus",mail:"nelly@teknikfokus.se"},{name:"Katia Svennarp",position:"Recruitment Manager",imageUrl:"@/Katia.jpg",linkedIn:"https://www.linkedin.com/in/katia-svennarp-a737071b9/",mail:"katia@teknikfokus.se"},{name:"Alex Gustafsson",position:"Logistics Manager",imageUrl:"@/Alex.jpg",linkedIn:"",mail:"alex@teknikfokus.se"},{name:"Annie Börjesson",position:"Finance Manager",imageUrl:"@/Annie.jpg",linkedIn:"https://linkedin.com/in/annie-börjesson-2400401bb",mail:"annie@teknikfokus.se"}]}}},p=f,m=(a("3c8d"),Object(c["a"])(p,i,n,!1,null,"621258d2",null));t["default"]=m.exports}}]);
//# sourceMappingURL=about.b31308bd.js.map