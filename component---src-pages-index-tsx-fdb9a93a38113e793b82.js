(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{289:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(305),i=(n(23),n(3),n(0)),s=n.n(i),u=(n(45),n(151));var d=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e="input"===this.props.status?"gray":"first"===this.props.status?"blue":"perfect"===this.props.status?"darkgreen":"good"===this.props.status?"lightgreen":"warning"===this.props.status?"yellow":"failed"===this.props.status?"red":"peek"===this.props.status?"blue":(this.props.status,"black");return a.a.createElement("div",{className:"word-card"},"KANA"===this.props.word.pos?a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"word-card-common"},"test-common"!==this.props.display&&a.a.createElement("span",{dangerouslySetInnerHTML:{__html:this.props.word.common}})),a.a.createElement("div",{className:"word-card-translation",style:{color:e}},this.props.word.translation.KanaDictionary.translation.ja),a.a.createElement("div",{className:"word-card-sentences"},(this.props.word.sentences||[]).map(function(e,t){return a.a.createElement("div",{key:t},a.a.createElement("p",null,a.a.createElement("span",{dangerouslySetInnerHTML:{__html:e.sentence}})),a.a.createElement("p",null,a.a.createElement("span",null,(e.translation||{}).zh)))})),a.a.createElement("pre",{className:"word-card-debug"},JSON.stringify(this.props.word,null,2))):a.a.createElement(a.a.Fragment,null))},r}(a.a.Component);d.defaultProps={word:{common:"Common Placeholder",translation:"Translation Placeholder"},display:"detailed",status:"view"};var l=d,c=n(187),p=n(183),g=n(109),m=n(150),v=n.n(m);function y(e,t,n,r,a,o,i){try{var s=e[o](i),u=s.value}catch(d){return void n(d)}s.done?t(u):Promise.resolve(u).then(r,a)}var f=function(e){var t,n;function r(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).JudgeInputElement=null,t.onRequestJudge=function(){if(t.JudgeInputElement&&t.JudgeInputElement.value){var e=t.props.poiUserId,n=t.props.savingId,r=t.props.currentWord.toJS();t.props.judgeAnswer(t.JudgeInputElement.value,r,{poiUserId:e,savingId:n})}},t.onRequestNext=function(){t.props.judgeResult;var e=t.props,n=e.poiUserId,r=e.savingId,a=e.currentWordKey,o=e.learnedCandidates,i=e.prioritiedCandidates,s=e.pendingCandidates;t.props.showNextWord({poiUserId:n,savingId:r},{currentWordKey:a,learnedCandidates:o,prioritiedCandidates:i,pendingCandidates:s})},t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=r.prototype;return o.componentDidMount=function(){var e,t=(e=s.a.mark(function e(){var t,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.debug("Lasy init user"),e.next=3,this.props.lazyInitUser();case 3:return t=e.sent,console.debug("Lasy init saving"),e.next=7,this.props.lazyInitSaving({poiUserId:t});case 7:return n=e.sent,e.next=10,this.props.showNextWord({poiUserId:t,savingId:n});case 10:case"end":return e.stop()}},e,this)}),function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function i(e){y(o,r,a,i,s,"next",e)}function s(e){y(o,r,a,i,s,"throw",e)}i(void 0)})});return function(){return t.apply(this,arguments)}}(),o.render=function(){var e=this,t=this.props.currentWord.toJS(),n="Pending"===this.props.judgeResult?"input":"Correct"===this.props.judgeResult?"perfect":"Accepted"===this.props.judgeResult?"good":"Rejected"===this.props.judgeResult?"warning":"Wrong"===this.props.judgeResult?"failed":"review";return a.a.createElement("div",{className:"goi-core"},a.a.createElement(v.a,null,a.a.createElement("title",null,t.key||"PoiGoi")),a.a.createElement("input",{ref:function(t){return e.JudgeInputElement=t}}),a.a.createElement("button",{onClick:this.onRequestJudge},"Judge"),a.a.createElement("button",{onClick:this.onRequestNext},"Next"),a.a.createElement(l,{word:t,display:"detailed",status:n}),a.a.createElement("pre",{className:"goi-debug"},JSON.stringify(this.props.tester,null,2),JSON.stringify(this.props.saving,null,2)))},r}(a.a.Component),I=Object(u.b)(function(e){console.debug("GoiTester state: ",e);var t={poiUserId:e.GoiUser.get("PoiUserId"),savingId:e.GoiSaving.get("SavingId"),currentWord:e.GoiTester.get("CurrentWord"),currentWordKey:e.GoiTester.get("CurrentWord").get("key"),judgeResult:e.GoiTester.get("JudgeResult"),saving:e.GoiSaving.get("Saving"),tester:e.GoiTester,learnedCandidates:e.GoiTester.get("LearnedCandidates"),prioritiedCandidates:e.GoiTester.get("PrioritiedCandidates"),pendingCandidates:e.GoiTester.get("PendingCandidates")};return console.debug("GoiTester props: ",t),t},function(e){return{lazyInitUser:function(){return e(Object(c.a)())},lazyInitSaving:function(t){var n=t.poiUserId;return e(Object(p.a)({poiUserId:n}))},showNextWord:function(t,n){var r=t.poiUserId,a=t.savingId,o=void 0===n?{}:n,i=o.currentWordKey,s=o.learnedCandidates,u=o.prioritiedCandidates,d=o.pendingCandidates;return e(Object(g.a)({poiUserId:r,savingId:a},{currentWordKey:i,learnedCandidates:s,prioritiedCandidates:u,pendingCandidates:d}))},judgeAnswer:function(t,n,r){return e(Object(g.e)(t,n,{poiUserId:r.poiUserId,savingId:r.savingId}))}}})(f),h=n(76);function E(e,t,n,r,a,o,i){try{var s=e[o](i),u=s.value}catch(d){return void n(d)}s.done?t(u):Promise.resolve(u).then(r,a)}function C(e){return function(){var t=this,n=arguments;return new Promise(function(r,a){var o=e.apply(t,n);function i(e){E(o,r,a,i,s,"next",e)}function s(e){E(o,r,a,i,s,"throw",e)}i(void 0)})}}var w=function(e){var t,n;function r(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).CustomQueryInput=null,t.getSuggestionQuerys=function(){return t.props.suggestions.toJS().map(function(e){return e.Query})},t.getPendingQuerys=function(){return t.props.pendings.toJS().map(function(e){return e.Query})},t.onClickConfirm=C(s.a.mark(function e(){var n,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.props.poiUserId,r=t.props.savingId,e.next=4,t.props.addWordsFromQuerys({querys:t.getPendingQuerys()},{poiUserId:n,savingId:r});case 4:return t.props.close(),t.getPendingQuerys().map(function(e){return t.props.removePendingQuery({query:e})}),e.next=8,t.props.showNextWord(n,r);case 8:case"end":return e.stop()}},e)})),t}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this;if(!this.props.display)return a.a.createElement("div",{className:"word-adder"});var t=this.props.poiUserId,n=this.props.savingId,r=this.props.status.toJS(),o=this.props.suggestions.toJS(),i=this.props.pendings.toJS(),s=this.props.counters.toJS();return a.a.createElement("div",{className:"word-adder"},a.a.createElement("h1",null,"Word Adder"),a.a.createElement("p",null,"Status:"),a.a.createElement("div",null,"Learned:",r.LearnedCount),a.a.createElement("div",null,"Prioritied:",r.PrioritiedCount),a.a.createElement("div",null,"Pending:",r.PendingCount,a.a.createElement("button",{onClick:function(){return e.props.clearPendingWords({poiUserId:t,savingId:n})}},"Clear")),a.a.createElement("p",null,"Suggestions:"),o.map(function(r){return a.a.createElement("div",{key:r.Display},r.Display,"(",r.Query,")",s[r.Query]&&a.a.createElement("span",null,"Total:",s[r.Query].TotalCount,"(Learned:",s[r.Query].LearnedCount,", Added:",s[r.Query].AddedCount,", New:",s[r.Query].NewCount,")"),a.a.createElement("button",{onClick:function(){return e.props.addPendingQuery({display:r.Display,query:r.Query},{poiUserId:t,savingId:n})}},"+"))}),a.a.createElement("p",null,"Custom Query:",a.a.createElement("input",{ref:function(t){return e.CustomQueryInput=t}}),a.a.createElement("button",{onClick:function(){return e.CustomQueryInput&&e.props.addPendingQuery({display:"Custom",query:e.CustomQueryInput.value},{poiUserId:t,savingId:n})}},"+")),a.a.createElement("p",null,"Pendings (order matters):"),i.map(function(t){return a.a.createElement("div",{key:t.Query},t.Display,"(",t.Query,")",s[t.Query]&&a.a.createElement("span",null,"Total:",s[t.Query].TotalCount,"(Learned:",s[t.Query].LearnedCount,", Added:",s[t.Query].AddedCount,", New:",s[t.Query].NewCount,")"),a.a.createElement("button",{onClick:function(){return e.props.removePendingQuery({query:t.Query})}},"-"))}),a.a.createElement("button",{onClick:this.onClickConfirm},"Confirm"),a.a.createElement("button",{onClick:function(){return e.props.close()}},"Cancel"))},r}(a.a.Component),b=Object(u.b)(function(e){console.debug("WordAdderContainer state: ",e);var t={display:e.WordAdder.get("Display"),status:e.WordAdder.get("Status"),suggestions:e.WordAdder.get("Suggestions"),pendings:e.WordAdder.get("Pendings"),counters:e.WordAdder.get("Counters"),saving:e.GoiSaving.get("Saving"),poiUserId:e.GoiUser.get("PoiUserId"),savingId:e.GoiSaving.get("SavingId")};return console.debug("WordAdderContainer props: ",t),t},function(e){return{clearPendingWords:function(t){var n=t.poiUserId,r=t.savingId;return e(Object(h.c)({poiUserId:n,savingId:r}))},addPendingQuery:function(t,n){var r=t.display,a=t.query,o=n.poiUserId,i=n.savingId;return e(Object(h.a)({display:r,query:a},{poiUserId:o,savingId:i}))},removePendingQuery:function(t){var n=t.query;return e(Object(h.i)({query:n}))},addWordsFromQuerys:function(t,n){var r=t.querys,a=n.poiUserId,o=n.savingId;return e(Object(h.b)({querys:r},{poiUserId:a,savingId:o}))},close:function(){return e(Object(h.e)({display:!1}))},showNextWord:function(t,n){return e(Object(g.a)({poiUserId:t,savingId:n}))}}})(w),U=n(323),j=n(314),N=n.n(j);var Q=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this,t=this.props.poiUserId,n=this.props.savingId;return a.a.createElement("div",{className:"commands-bar"},a.a.createElement("button",{onClick:function(){return e.props.showWordAdder({poiUserId:t,savingId:n})}},"Add Words"),a.a.createElement(U.a,{variant:"extended","aria-label":"delete"},"[WIP]Menud",a.a.createElement(N.a,null)))},r}(a.a.Component),P=Object(u.b)(function(e){console.debug("CommandsBar state: ",e);var t={poiUserId:e.GoiUser.get("PoiUserId"),savingId:e.GoiSaving.get("SavingId")};return console.debug("CommandsBar props: ",t),t},function(e){return{showWordAdder:function(t){var n=t.poiUserId,r=t.savingId;return e(Object(h.j)({poiUserId:n,savingId:r}))}}})(Q);t.default=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,null),a.a.createElement("main",null,a.a.createElement(P,null),a.a.createElement(b,null),a.a.createElement(I,null)),a.a.createElement("footer",null,a.a.createElement("ruby",null,"私",a.a.createElement("rt",null,"わたし")),"たちの",a.a.createElement("ruby",null,"夢",a.a.createElement("rt",null,"ゆめ")),"がここから",a.a.createElement("ruby",null,"始",a.a.createElement("rt",null,"はじ")),"まります ٩(ˊᗜˋ*)و"))}},302:function(e,t,n){var r;e.exports=(r=n(304))&&r.default||r},303:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a}),n.d(t,"c",function(){return o});var r="#99ccff",a="#f0f9ff",o="#c2e2ff"},304:function(e,t,n){"use strict";n.r(t);n(21);var r=n(1),a=n.n(r),o=n(149);t.default=function(e){var t=e.location,n=e.pageResources;return n?a.a.createElement(o.a,Object.assign({location:t,pageResources:n},n.json)):null}},305:function(e,t,n){"use strict";var r=n(1),a=n.n(r),o=n(306),i=n(114),s=n.n(i);n(302),n(34).default.enqueue,a.a.createContext({});var u=n(303),d=o.a.nav.withConfig({displayName:"NavBar",componentId:"j81mwt-0"})(["top:0;left:0;width:100%;"]),l=o.a.ul.withConfig({displayName:"NavBar__NavBarList",componentId:"j81mwt-1"})(["list-style-type:none;margin:0;padding:0;overflow:hidden;background-color:",";"],u.a),c=Object(o.a)(s.a).withConfig({displayName:"NavBar__NavBarLink",componentId:"j81mwt-2"})(["display:block;color:white;text-align:center;padding:14px 16px;text-decoration:none;:hover{background-color:",";}"],u.c),p=Object(o.a)(function(e){return a.a.createElement("li",null,a.a.createElement(c,e))}).withConfig({displayName:"NavBar__NavBarItem",componentId:"j81mwt-3"})(["float:left;"]);t.a=function(){return a.a.createElement(d,null,a.a.createElement(l,null,a.a.createElement(p,{to:"/"},"Home"),a.a.createElement(p,{to:"/mamechishiki/"},"豆知識"),a.a.createElement(p,{to:"/tegami/"},"手紙")))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-fdb9a93a38113e793b82.js.map