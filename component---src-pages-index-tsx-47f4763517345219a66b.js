(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{311:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(158),i=(n(24),n(3),n(1)),s=n.n(i),u=(n(46),n(99));var d=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e="input"===this.props.status?"gray":"first"===this.props.status?"blue":"perfect"===this.props.status?"darkgreen":"good"===this.props.status?"lightgreen":"warning"===this.props.status?"yellow":"failed"===this.props.status?"red":"peek"===this.props.status?"blue":(this.props.status,"black");return o.a.createElement("div",{className:"word-card"},"KANA"===this.props.word.pos?o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"word-card-common"},"test-common"!==this.props.display&&o.a.createElement("span",{dangerouslySetInnerHTML:{__html:this.props.word.common}})),o.a.createElement("div",{className:"word-card-translation",style:{color:e}},this.props.word.translation.KanaDictionary.translation.ja),o.a.createElement("div",{className:"word-card-sentences"},(this.props.word.sentences||[]).map(function(e,t){return o.a.createElement("div",{key:t},o.a.createElement("p",null,o.a.createElement("span",{dangerouslySetInnerHTML:{__html:e.sentence}})),o.a.createElement("p",null,o.a.createElement("span",null,(e.translation||{}).zh)))}))):o.a.createElement(o.a.Fragment,null))},r}(o.a.Component);d.defaultProps={word:{common:"Common Placeholder",translation:"Translation Placeholder"},display:"detailed",status:"view"};var l=d,p=n(198),c=n(196),g=n(118),m=n(159),v=n.n(m);function y(e,t,n,r,o,a,i){try{var s=e[a](i),u=s.value}catch(d){return void n(d)}s.done?t(u):Promise.resolve(u).then(r,o)}var f=function(e){var t,n;function r(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).JudgeInputElement=null,t.onRequestJudge=function(){if(t.JudgeInputElement&&t.JudgeInputElement.value){var e=t.props.poiUserId,n=t.props.savingId,r=t.props.currentWord.toJS();t.props.judgeAnswer(t.JudgeInputElement.value,r,{poiUserId:e,savingId:n})}},t.onRequestNext=function(){t.props.judgeResult;var e=t.props,n=e.poiUserId,r=e.savingId,o=e.currentWordKey,a=e.learnedCandidates,i=e.prioritiedCandidates,s=e.pendingCandidates;t.props.showNextWord({poiUserId:n,savingId:r},{currentWordKey:o,learnedCandidates:a,prioritiedCandidates:i,pendingCandidates:s})},t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=r.prototype;return a.componentDidMount=function(){var e,t=(e=s.a.mark(function e(){var t,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.debug("Lasy init user"),e.next=3,this.props.lazyInitUser();case 3:return t=e.sent,console.debug("Lasy init saving"),e.next=7,this.props.lazyInitSaving({poiUserId:t});case 7:return n=e.sent,e.next=10,this.props.showNextWord({poiUserId:t,savingId:n});case 10:case"end":return e.stop()}},e,this)}),function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function i(e){y(a,r,o,i,s,"next",e)}function s(e){y(a,r,o,i,s,"throw",e)}i(void 0)})});return function(){return t.apply(this,arguments)}}(),a.render=function(){var e=this,t=this.props.currentWord.toJS(),n="Pending"===this.props.judgeResult?"input":"Correct"===this.props.judgeResult?"perfect":"Accepted"===this.props.judgeResult?"good":"Rejected"===this.props.judgeResult?"warning":"Wrong"===this.props.judgeResult?"failed":"review";return o.a.createElement("div",{className:"goi-tester"},o.a.createElement(v.a,null,o.a.createElement("title",null,t.key||"PoiGoi")),o.a.createElement("input",{ref:function(t){return e.JudgeInputElement=t}}),o.a.createElement("button",{onClick:this.onRequestJudge},"Judge"),o.a.createElement("button",{onClick:this.onRequestNext},"Next"),o.a.createElement(l,{word:t,display:"detailed",status:n}),o.a.createElement("pre",{className:"goi-debug"}))},r}(o.a.Component),h=Object(u.b)(function(e){console.debug("GoiTester state: ",e);var t={poiUserId:e.GoiUser.get("PoiUserId"),savingId:e.GoiSaving.get("SavingId"),currentWord:e.GoiTester.get("CurrentWord"),currentWordKey:e.GoiTester.get("CurrentWord").get("key"),judgeResult:e.GoiTester.get("JudgeResult"),saving:e.GoiSaving.get("Saving"),tester:e.GoiTester,learnedCandidates:e.GoiTester.get("LearnedCandidates"),prioritiedCandidates:e.GoiTester.get("PrioritiedCandidates"),pendingCandidates:e.GoiTester.get("PendingCandidates")};return console.debug("GoiTester props: ",t),t},function(e){return{lazyInitUser:function(){return e(Object(p.a)())},lazyInitSaving:function(t){var n=t.poiUserId;return e(Object(c.a)({poiUserId:n}))},showNextWord:function(t,n){var r=t.poiUserId,o=t.savingId,a=void 0===n?{}:n,i=a.currentWordKey,s=a.learnedCandidates,u=a.prioritiedCandidates,d=a.pendingCandidates;return e(Object(g.a)({poiUserId:r,savingId:o},{currentWordKey:i,learnedCandidates:s,prioritiedCandidates:u,pendingCandidates:d}))},judgeAnswer:function(t,n,r){return e(Object(g.e)(t,n,{poiUserId:r.poiUserId,savingId:r.savingId}))}}})(f),I=n(389),E=n(304),C=n(386),b=n(392),w=n(383),U=n(352),k=n.n(U),P=n(79);function W(e,t,n,r,o,a,i){try{var s=e[a](i),u=s.value}catch(d){return void n(d)}s.done?t(u):Promise.resolve(u).then(r,o)}function Q(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var a=e.apply(t,n);function i(e){W(a,r,o,i,s,"next",e)}function s(e){W(a,r,o,i,s,"throw",e)}i(void 0)})}}var S=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).getSuggestionQuerys=function(){return n.props.suggestions.toJS().map(function(e){return e.Query})},n.getPendingQuerys=function(){return n.props.pendings.toJS().map(function(e){return e.Query})},n.onClickConfirm=Q(s.a.mark(function e(){var t,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props.poiUserId,r=n.props.savingId,e.next=4,n.props.addWordsFromQuerys({querys:n.getPendingQuerys()},{poiUserId:t,savingId:r});case 4:return n.props.close(),n.getPendingQuerys().map(function(e){return n.props.removePendingQuery({query:e})}),e.next=8,n.props.showNextWord(t,r);case 8:case"end":return e.stop()}},e)})),n.state={customQuery:""},n}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this;if(!this.props.display)return o.a.createElement("div",{className:"word-adder"});var t=this.props.poiUserId,n=this.props.savingId,r=this.props.status.toJS(),a=this.props.suggestions.toJS(),i=this.props.pendings.toJS(),s=this.props.counters.toJS();return o.a.createElement(I.a,{className:"word-adder",open:this.props.display},o.a.createElement(E.a,null,o.a.createElement("h1",null,"Word Adder"),o.a.createElement("p",null,"Status:"),o.a.createElement("div",null,"Learned:",r.LearnedCount),o.a.createElement("div",null,"Prioritied:",r.PrioritiedCount),o.a.createElement("div",null,"Pending:",r.PendingCount,o.a.createElement("button",{onClick:function(){return e.props.clearPendingWords({poiUserId:t,savingId:n})}},"Clear")),o.a.createElement("p",null,"Suggestions:"),a.map(function(r){return o.a.createElement("div",{key:r.Display},r.Display,"(",r.Query,")",s[r.Query]&&o.a.createElement("span",null,"Total:",s[r.Query].TotalCount,"(Learned:",s[r.Query].LearnedCount,", Added:",s[r.Query].AddedCount,", New:",s[r.Query].NewCount,")"),o.a.createElement("button",{onClick:function(){return e.props.addPendingQuery({display:r.Display,query:r.Query},{poiUserId:t,savingId:n})}},"+"))}),o.a.createElement("div",{style:{display:"flex",alignItems:"flex-end"}},o.a.createElement(C.a,{label:"Custom Query",variant:"outlined",value:this.state.customQuery,style:{flexGrow:1},onChange:function(t){e.setState({customQuery:t.target.value})},InputProps:{placeholder:"(e.g. JLPT-N5) Accept RegExp",endAdornment:o.a.createElement(b.a,{position:"end"},o.a.createElement(w.a,{"aria-label":"add query",edge:"end",onClick:function(){return e.props.addPendingQuery({display:"Custom",query:e.state.customQuery},{poiUserId:t,savingId:n})}},o.a.createElement(k.a,null)))}})),o.a.createElement("p",null,"Pendings (order matters):"),i.map(function(t){return o.a.createElement("div",{key:t.Query},t.Display,"(",t.Query,")",s[t.Query]&&o.a.createElement("span",null,"Total:",s[t.Query].TotalCount,"(Learned:",s[t.Query].LearnedCount,", Added:",s[t.Query].AddedCount,", New:",s[t.Query].NewCount,")"),o.a.createElement("button",{onClick:function(){return e.props.removePendingQuery({query:t.Query})}},"-"))}),o.a.createElement("button",{onClick:this.onClickConfirm},"Confirm"),o.a.createElement("button",{onClick:function(){return e.props.close()}},"Cancel")))},r}(o.a.Component),j=Object(u.b)(function(e){console.debug("WordAdderContainer state: ",e);var t={display:e.WordAdder.get("Display"),status:e.WordAdder.get("Status"),suggestions:e.WordAdder.get("Suggestions"),pendings:e.WordAdder.get("Pendings"),counters:e.WordAdder.get("Counters"),saving:e.GoiSaving.get("Saving"),poiUserId:e.GoiUser.get("PoiUserId"),savingId:e.GoiSaving.get("SavingId")};return console.debug("WordAdderContainer props: ",t),t},function(e){return{clearPendingWords:function(t){var n=t.poiUserId,r=t.savingId;return e(Object(P.c)({poiUserId:n,savingId:r}))},addPendingQuery:function(t,n){var r=t.display,o=t.query,a=n.poiUserId,i=n.savingId;return e(Object(P.a)({display:r,query:o},{poiUserId:a,savingId:i}))},removePendingQuery:function(t){var n=t.query;return e(Object(P.i)({query:n}))},addWordsFromQuerys:function(t,n){var r=t.querys,o=n.poiUserId,a=n.savingId;return e(Object(P.b)({querys:r},{poiUserId:o,savingId:a}))},close:function(){return e(Object(P.e)({display:!1}))},showNextWord:function(t,n){return e(Object(g.a)({poiUserId:t,savingId:n}))}}})(S),O=n(384),x=n(390),A=n(391),N=n(183),T=n(353),J=n.n(T),_=n(358),G=n.n(_),M=n(357),q=n.n(M),L=n(354),R=n.n(L),z=n(359),D=n.n(z),K=n(360),F=n.n(K);var B=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this).openMenu=function(){n.setState({menuOpened:!0})},n.closeMenu=function(){n.setState({menuOpened:!1})},n.toggleMenu=function(){n.setState({menuOpened:!n.state.menuOpened})},n.state={menuOpened:!1},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=r.prototype;return a.navigate=function(e){Object(N.b)(e,{replace:!0})},a.render=function(){var e=this,t=this.props,n=t.poiUserId,r=t.savingId;return o.a.createElement("div",{className:"commands-bar",style:{position:"absolute",bottom:"20px",right:"20px",display:"inline-flex",alignItems:"flex-end"}},o.a.createElement(O.a,{size:"small",onClick:function(){return e.props.showWordAdder({poiUserId:n,savingId:r})},style:{height:"36px",margin:"10px"}},"Add Words",o.a.createElement(J.a,{fontSize:"small"})),o.a.createElement(x.a,{ariaLabel:"menu",open:this.state.menuOpened,icon:o.a.createElement(R.a,null),onBlur:this.closeMenu,onClick:this.toggleMenu,onClose:this.closeMenu,onFocus:this.openMenu,onMouseEnter:this.openMenu,onMouseLeave:this.closeMenu,ButtonProps:{color:"default",style:{background:"white"}}},o.a.createElement(A.a,{key:"share",icon:o.a.createElement(q.a,null),tooltipTitle:"[WIP] Share",tooltipOpen:!0,onClick:function(){e.closeMenu()}}),o.a.createElement(A.a,{key:"tegami",icon:o.a.createElement(G.a,null),tooltipTitle:"手紙",tooltipOpen:!0,onClick:function(){e.closeMenu(),e.navigate("/tegami")}}),o.a.createElement(A.a,{key:"mamechishiki",icon:o.a.createElement(D.a,null),tooltipTitle:"豆知識",tooltipOpen:!0,onClick:function(){e.closeMenu(),e.navigate("/mamechishiki")}}),o.a.createElement(A.a,{key:"addwords",icon:o.a.createElement(J.a,null),tooltipTitle:"Add Words",tooltipOpen:!0,onClick:function(){e.closeMenu(),e.props.showWordAdder({poiUserId:n,savingId:r})}}),o.a.createElement(A.a,{key:"profile",icon:o.a.createElement(F.a,null),tooltipTitle:"[WIP] Profile and settings",tooltipOpen:!0,onClick:function(){e.closeMenu(),e.navigate("/")}})))},r}(o.a.Component),H=Object(u.b)(function(e){console.debug("CommandsBar state: ",e);var t={poiUserId:e.GoiUser.get("PoiUserId"),savingId:e.GoiSaving.get("SavingId")};return console.debug("CommandsBar props: ",t),t},function(e){return{showWordAdder:function(t){var n=t.poiUserId,r=t.savingId;return e(Object(P.j)({poiUserId:n,savingId:r}))}}})(B);t.default=function(e){return o.a.createElement("div",{style:{width:"100%",height:"100%",overflow:"hidden",position:"fixed"}},o.a.createElement(a.a,null),o.a.createElement(H,null),o.a.createElement("main",null,o.a.createElement(E.a,null,o.a.createElement(j,null),o.a.createElement(h,null))),o.a.createElement("footer",null,o.a.createElement(E.a,null,o.a.createElement("ruby",null,"私",o.a.createElement("rt",null,"わたし")),"たちの",o.a.createElement("ruby",null,"夢",o.a.createElement("rt",null,"ゆめ")),"がここから",o.a.createElement("ruby",null,"始",o.a.createElement("rt",null,"はじ")),"まります ٩(ˊᗜˋ*)و")))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-47f4763517345219a66b.js.map