(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{366:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(178),i=(n(26),n(3),n(407),n(1)),s=n.n(i),l=(n(52),n(117)),c=(n(40),n(116),n(10),n(11),n(27),n(19),n(4),n(5),n(9),n(120),n(121),n(20),n(463)),u=(n(245),n(479));var d=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return r.a.createElement(u.a,Object.assign({display:"inline-flex",border:1,borderRadius:3,marginLeft:"5px",marginTop:"5px"},this.props),this.props.children)},a}(r.a.Component),p=function(e){return{onClick:function(){return e(!0,"onClick")},onFocus:function(){return e(!0,"onFocus")},onBlur:function(){return e(!1,"onBlur")},onMouseEnter:function(){return e(!0,"onMouseEnter")},onMouseLeave:function(){return e(!1,"onMouseLeave")},onClose:function(){return e(!1,"onClose")}}};var m=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).toggleStateHint=function(e){void 0===e&&(e=!n.state.displayHint),n.setState({displayHint:e})},n.state={displayHint:!1},n}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.props,t=e.i18nTranslation,n=e.from,a=e.displayFrom,o=this.props.displayHint||this.state.displayHint;return r.a.createElement("li",null,r.a.createElement("div",{className:"word-card-single-translation",style:{fontSize:"8vmin"}},Object.entries(t.translation).map(function(e){var n=e[0],a=e[1];return Object.keys(t.translation).length>1?n+":"+a+"; ":""+a})),t.hint&&r.a.createElement("div",{className:"word-card-single-translation-hint"},r.a.createElement(d,p(this.toggleStateHint),"Hint"),Object.entries(t.hint).map(function(e){var n=e[0],a=e[1];return r.a.createElement("span",{key:n,style:{visibility:o?"inherit":"hidden"}},Object.keys(t.hint||{}).length>1&&r.a.createElement(d,null,n),r.a.createElement("span",{dangerouslySetInnerHTML:{__html:a||""}}))})),a&&r.a.createElement("div",{style:{color:"gray",width:"100%",fontSize:"1.5vmin",display:"flex",justifyContent:"flex-end"}},"from ",n))},a}(r.a.Component);m.defaultProps={i18nTranslation:{translation:{en:"English Translation",zh:"中文翻译",jp:"日本語"},hint:{en:"English Hint",zh:"中文提示",jp:"日本語"}},displayHint:!0,locales:["jp","zh","en"],from:"",displayFrom:!1};var g=m;var y=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.props,t=e.i18nSentence,n=e.displayFrom;return r.a.createElement("li",null,r.a.createElement("div",{className:"word-card-single-sentence",style:{fontSize:"4vmin"}},r.a.createElement("span",{dangerouslySetInnerHTML:{__html:t.sentence}})),r.a.createElement("div",{className:"word-card-single-sentence-translation",style:{fontSize:"4vmin"}},t.translation&&Object.entries(t.translation).map(function(e){var n=e[0],a=e[1];return Object.keys(t.translation||[]).length>1?n+":"+a+"; ":""+a})),n&&r.a.createElement("div",{style:{color:"gray",width:"100%",fontSize:"1.5vmin",display:"flex",justifyContent:"flex-end"}},"from ",t.from))},a}(r.a.Component);y.defaultProps={i18nSentence:{from:"",sentence:"It's a sample sentence.",translation:{en:"It's the translation of the sample sentence.",zh:"这是例句的中文翻译",jp:"これは例句の日本語の翻訳です"},audios:[],source:"PoiGoi",link:"https://goi.poi.dev/",contributor:"凪"},displayHint:!0,locales:["jp","zh","en"],displayFrom:!1};var f=y;function E(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var v=function(e){return 0===e?String.fromCharCode(9450):e>=1&&e<20?String.fromCharCode(9311+Math.floor(e)):""},h=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){for(var e=this,t="input"===this.props.status?"gray":"first"===this.props.status?"blue":"perfect"===this.props.status?"green":"good"===this.props.status?"lightgreen":"warning"===this.props.status?"orange":"failed"===this.props.status?"red":"peek"===this.props.status?"blue":(this.props.status,"black"),n=Object.assign({},this.props.word),a=[],o=0;o<this.props.dictionarys.length;o++){var i=this.props.dictionarys[o];Object.keys(n.translations).includes(i)&&a.push(i)}for(var s="detailed"!==this.props.display?a.slice(0,1):a,l=[],u=function(t){var a=e.props.dictionarys[t],r=(n.sentences||[]).filter(function(e){return e.from===a});l.push.apply(l,E(r))},p=0;p<this.props.dictionarys.length;p++)u(p);var m="detailed"!==this.props.display?l.slice(0,1):l;return console.debug(s,m),r.a.createElement("div",{className:"word-card"},r.a.createElement("div",{className:"word-card-common",style:{minHeight:"20vmin",fontSize:"10vmin",color:t,visibility:"test-common"===this.props.display?"hidden":"inherit",display:"flex",alignItems:"flex-end"}},r.a.createElement("span",{dangerouslySetInnerHTML:{__html:n.common}})),r.a.createElement("div",{className:"word-card-tags",style:{visibility:"test-common"===this.props.display?"hidden":"inherit"}},"number"==typeof n.tone&&v(n.tone),Array.isArray(n.tone)&&n.tone.map(function(e){return"number"==typeof e&&v(e)}).join(),this.props.level>=0&&r.a.createElement(d,null,"練度",this.props.level),n.pos.includes("KANA")&&r.a.createElement(d,null,"仮名"),n.pos.includes("HIRAGANA")&&r.a.createElement(d,null,"平仮名"),n.pos.includes("KATAKANA")&&r.a.createElement(d,null,"片仮名"),n.pos.includes("DAKUON")&&r.a.createElement(d,null,"濁音"),n.pos.includes("YOON")&&r.a.createElement(d,null,"拗音"),n.pos.includes("CHOON")&&r.a.createElement(d,null,"長音"),n.pos.includes("VERB")&&r.a.createElement(d,null,"動詞"),n.pos.includes("GODAN")&&r.a.createElement(d,null,"五段活用"),n.pos.includes("KAMIICHIDAN")&&r.a.createElement(d,null,"上一段活用"),n.pos.includes("SHIMOICHIDAN")&&r.a.createElement(d,null,"下一段活用"),n.pos.includes("SAHEN")&&r.a.createElement(d,null,"サ変"),n.pos.includes("KAHEN")&&r.a.createElement(d,null,"カ変"),n.pos.includes("JIDOSHI")&&r.a.createElement(d,null,"自動詞"),n.pos.includes("TADOSHI")&&r.a.createElement(d,null,"他動詞"),n.pos.includes("ADJ")&&r.a.createElement(d,null,"形容詞"),n.pos.includes("KEIYODOSHI")&&r.a.createElement(d,null,"形容動詞"),n.pos.includes("NOUN")&&r.a.createElement(d,null,"名詞"),n.pos.includes("PROPER")&&r.a.createElement(d,null,"固有名詞"),n.pos.includes("PRON")&&r.a.createElement(d,null,"代名詞"),n.pos.includes("RENTAISHI")&&r.a.createElement(d,null,"連体詞"),n.pos.includes("ADV")&&r.a.createElement(d,null,"副詞"),n.pos.includes("CONJ")&&r.a.createElement(d,null,"接続詞"),n.pos.includes("INTERJ")&&r.a.createElement(d,null,"感動詞"),n.pos.includes("JODOSHI")&&r.a.createElement(d,null,"助動詞"),n.pos.includes("JOSHI")&&r.a.createElement(d,null,"助詞"),n.pos.includes("IDIOM")&&r.a.createElement(d,null,"熟語"),n.romaji&&r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null,"ローマ字"),n.romaji),n.wapuro&&r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null,"ワープロ"),n.wapuro)),r.a.createElement("div",{className:"word-card-translation",style:{color:t}},r.a.createElement(c.a,null,s.map(function(t){return r.a.createElement(g,{key:t,i18nTranslation:n.translations[t],displayHint:"test-common"!==e.props.display,from:t,displayFrom:"detailed"===e.props.display})}))),"test-common"!==this.props.display&&r.a.createElement("div",{className:"word-card-sentences"},r.a.createElement(c.a,null,m.map(function(t,n){return r.a.createElement(f,{key:n,i18nSentence:t,displayFrom:"detailed"===e.props.display})}))),"detailed"===this.props.display&&r.a.createElement("div",{className:"word-card-textbooks"},n.textbook.map(function(e,t){return r.a.createElement(d,{key:t},e)})))},a}(r.a.Component);h.defaultProps={word:{common:"Common Placeholder",translation:"Translation Placeholder"},display:"detailed",status:"view",dictionarys:["KanaDictionary","GoiSimpleJaDictionary","BiaozhunRibenyu","XinbianRiyu","Xinbian","AnimeSong","Anime","JishoOrg","GooJisho"],level:-1};var I=h,b=n(222),C=n(220),w=n(138),S=n(176),k=n.n(S),O=n(478),P=n(465),j=n(466),A=n(467),x=n(409),W=n.n(x),U=n(410),N=n.n(U),Q=n(411),z=n.n(Q),T=n(412),_=n.n(T),H=n(413),D=n.n(H);function R(e,t,n,a,r,o,i){try{var s=e[o](i),l=s.value}catch(c){return void n(c)}s.done?t(l):Promise.resolve(l).then(a,r)}function G(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var o=e.apply(t,n);function i(e){R(o,a,r,i,s,"next",e)}function s(e){R(o,a,r,i,s,"throw",e)}i(void 0)})}}var J=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).JudgeInputElement=null,n.requestJudge=function(){var e=G(s.a.mark(function e(t){var a,r,o,i,l,c;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=(void 0===t?{}:t).skip,r=n.props,o=r.poiUserId,i=r.savingId,l=n.props.currentWord.toJS(),e.next=5,n.props.judgeAnswer({answer:n.state.testerInput,word:l,skip:a},{poiUserId:o,savingId:i});case 5:c=e.sent,n.setState({testerInput:""}),"Correct"!==c&&"Accepted"!==c&&"Skipped"!==c||n.requestNext();case 8:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.requestNext=function(){var e=n.props,t=e.poiUserId,a=e.savingId,r=e.currentWordKey,o=e.learnedCandidates,i=e.prioritiedCandidates,s=e.pendingCandidates;n.props.showNextWord({poiUserId:t,savingId:a},{currentWordKey:r,learnedCandidates:o,prioritiedCandidates:i,pendingCandidates:s}),n.setState({testerInput:"",displayDetail:!1})},n.state={testerInput:"",displayDetail:!1},n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=a.prototype;return o.componentDidMount=function(){var e=G(s.a.mark(function e(){var t,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.debug("Lasy init user"),e.next=3,this.props.lazyInitUser();case 3:return t=e.sent,console.debug("Lasy init saving"),e.next=7,this.props.lazyInitSaving({poiUserId:t});case 7:return n=e.sent,e.next=10,this.props.showNextWord({poiUserId:t,savingId:n});case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),o.render=function(){var e=this,t=this.props.currentWord.toJS(),n="Pending"===this.props.judgeResult?"input":"Correct"===this.props.judgeResult?"perfect":"Accepted"===this.props.judgeResult?"good":"Rejected"===this.props.judgeResult?"warning":"Wrong"===this.props.judgeResult?"failed":"review",a="Pending"===this.props.judgeResult?"test-common":this.state.displayDetail?"detailed":"simple";return r.a.createElement("div",{className:"goi-tester",style:{marginTop:"20px"}},r.a.createElement(k.a,null,r.a.createElement("title",null,"Pending"===this.props.judgeResult?"PoiGoi":"PoiGoi - "+t.key)),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(O.a,{label:"Justify your answer",variant:"outlined",value:this.state.testerInput,style:{flexGrow:1},onChange:function(t){e.setState({testerInput:t.target.value})},InputProps:{placeholder:"Rejected"===this.props.judgeResult||"Wrong"===this.props.judgeResult?"Type correct answer to continue":"Type your answer here",endAdornment:r.a.createElement(P.a,{position:"end"},r.a.createElement(j.a,{"aria-label":"Request judge",edge:"end",onClick:function(){return e.requestJudge()}},r.a.createElement(W.a,null))),onKeyDown:function(t){"Enter"===t.key&&e.requestJudge()}}}),"Pending"===this.props.judgeResult?r.a.createElement(A.a,{size:"small","aria-label":"Skip current word",onClick:function(){return e.requestJudge({skip:!0})}},"Skip",r.a.createElement(N.a,{fontSize:"small"})):r.a.createElement(A.a,{size:"small","aria-label":"Show next word",onClick:function(){return e.requestNext()}},"Skip",r.a.createElement(z.a,{fontSize:"small"}))),r.a.createElement(I,{word:t,display:a,status:n}),!a.startsWith("test")&&r.a.createElement("div",{className:"word-card-actions"},r.a.createElement(A.a,{"aria-label":"detail",onClick:function(){e.setState({displayDetail:!0})},style:{color:"gray"}},r.a.createElement(_.a,null),"Detail"),r.a.createElement(A.a,{"aria-label":"forget",onClick:function(){e.setState({displayDetail:!0})},style:{color:"gray"}},r.a.createElement(D.a,null),"[WIP]Forget")))},a}(r.a.Component),q=Object(l.b)(function(e){console.debug("GoiTester state: ",e);var t={poiUserId:e.GoiUser.get("PoiUserId"),savingId:e.GoiSaving.get("SavingId"),currentWord:e.GoiTester.get("CurrentWord"),currentWordKey:e.GoiTester.get("CurrentWord").get("key"),judgeResult:e.GoiTester.get("JudgeResult"),saving:e.GoiSaving.get("Saving"),tester:e.GoiTester,learnedCandidates:e.GoiTester.get("LearnedCandidates"),prioritiedCandidates:e.GoiTester.get("PrioritiedCandidates"),pendingCandidates:e.GoiTester.get("PendingCandidates")};return console.debug("GoiTester props: ",t),t},function(e){return{lazyInitUser:function(){return e(Object(b.a)())},lazyInitSaving:function(t){var n=t.poiUserId;return e(Object(C.a)({poiUserId:n}))},showNextWord:function(t,n){var a=t.poiUserId,r=t.savingId,o=void 0===n?{}:n,i=o.currentWordKey,s=o.learnedCandidates,l=o.prioritiedCandidates,c=o.pendingCandidates;return e(Object(w.a)({poiUserId:a,savingId:r},{currentWordKey:i,learnedCandidates:s,prioritiedCandidates:l,pendingCandidates:c}))},judgeAnswer:function(t,n){var a=t.answer,r=t.word,o=t.skip,i=n.poiUserId,s=n.savingId;return e(Object(w.e)({answer:a,word:r,skip:o},{poiUserId:i,savingId:s}))}}})(J),M=n(469),F=n(470),L=n(471),K=n(472),B=n(382),V=n(473),X=n(474),Y=n(475),Z=n(481),$=n(476),ee=n(400),te=n.n(ee),ne=n(91),ae=n(414),re=n.n(ae),oe=n(399),ie=n.n(oe),se=n(416),le=n.n(se),ce=n(415),ue=n.n(ce),de=n(468),pe=n(182),me=n(484),ge=function(e){Object(de.a)(Object(pe.a)().breakpoints.down("xs"));return r.a.createElement(me.a,Object.assign({},e,{PaperProps:{style:{margin:"10px"}}}),e.children)};function ye(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function fe(e,t,n,a,r,o,i){try{var s=e[o](i),l=s.value}catch(c){return void n(c)}s.done?t(l):Promise.resolve(l).then(a,r)}function Ee(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var o=e.apply(t,n);function i(e){fe(o,a,r,i,s,"next",e)}function s(e){fe(o,a,r,i,s,"throw",e)}i(void 0)})}}var ve=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).getSuggestionQuerys=function(){return n.props.suggestions.toJS().map(function(e){return e.Query})},n.getPendingQuerys=function(){return n.props.pendings.toJS().map(function(e){return e.Query})},n.addSuggestion=function(){var e=Ee(s.a.mark(function e(t){var a,r,o;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.props,r=a.poiUserId,o=a.savingId,!Array.isArray(t.SubQuerys)){e.next=4;break}return e.next=4,n.props.addPendingQuerys({querys:[].concat(ye(t.SubQuerys),[{Display:t.Display,Query:t.Query}])},{poiUserId:r,savingId:o});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.clearAllPendingQuerys=Ee(s.a.mark(function e(){return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(n.getPendingQuerys().map(function(e){return n.props.removePendingQuery({query:e})}));case 2:case"end":return e.stop()}},e)})),n.onClickConfirm=Ee(s.a.mark(function e(){var t,a,r;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props,a=t.poiUserId,r=t.savingId,n.setState({addingWordsProgress:!0}),e.next=4,n.props.addWordsFromQuerys({querys:n.getPendingQuerys()},{poiUserId:a,savingId:r});case 4:return n.setState({addingWordsProgress:!1}),n.props.close(),e.next=8,n.clearAllPendingQuerys();case 8:return e.next=10,n.props.showNextWord(a,r);case 10:case"end":return e.stop()}},e)})),n.addCustomQuery=function(){var e=n.props,t=e.poiUserId,a=e.savingId;n.props.addPendingQuery({display:{en:"Custom",zh:"自定义搜索条件"},query:n.state.customQuery.trim()},{poiUserId:t,savingId:a})},n.state={customQuery:"",addingWordsProgress:!1},n}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this;if(!this.props.display)return r.a.createElement("div",{className:"word-adder"});var t=this.props.poiUserId,n=this.props.savingId,a=this.props.status.toJS(),o=this.props.suggestions.toJS(),i=this.props.pendings.toJS(),s=this.props.counters.toJS();return r.a.createElement(ge,{className:"word-adder",open:this.props.display},r.a.createElement(M.a,null,"Add words"),r.a.createElement(F.a,{dividers:!0},r.a.createElement(c.a,{dense:!0},r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement(O.a,{label:"Learned",value:a.LearnedCount,margin:"none",style:{marginRight:"10px",flex:1},InputProps:{readOnly:!0}}),r.a.createElement(O.a,{label:"Prioritied",value:a.PrioritiedCount,margin:"none",style:{marginRight:"10px",flex:1},InputProps:{readOnly:!0}}),r.a.createElement(O.a,{label:"Pending",value:a.PendingCount,margin:"none",style:{flex:1},InputProps:{readOnly:!0,endAdornment:r.a.createElement(P.a,{position:"end"},r.a.createElement(j.a,{size:"small","aria-label":"Clear pending words",onClick:function(){return e.props.clearPendingWords({poiUserId:t,savingId:n})}},r.a.createElement(re.a,null)))}})),r.a.createElement(L.a,null),r.a.createElement(K.a,{component:"li"}),r.a.createElement("li",null,r.a.createElement(B.a,{display:"block",variant:"caption"},"Suggested Word Querys")),o.map(function(t){return r.a.createElement(L.a,{key:"suggestion"+t.Query},r.a.createElement(V.a,{primary:t.Display.en+" ("+t.Query+") "+s[t.Query].TotalCount+" words",secondary:s[t.Query]?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"Learned "+s[t.Query].LearnedCount+", "),r.a.createElement("span",null,"Added "+s[t.Query].AddedCount+", "),r.a.createElement("span",null,"New "+s[t.Query].NewCount)):null}),r.a.createElement(X.a,null,r.a.createElement(j.a,{edge:"end","aria-label":"Add suggestion query",onClick:function(){return e.addSuggestion(t)}},r.a.createElement(ie.a,null))))}),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(O.a,{label:"Custom Query",variant:"outlined",value:this.state.customQuery,style:{flexGrow:1},onChange:function(t){e.setState({customQuery:t.target.value})},InputProps:{placeholder:"(e.g. JLPT-N5) Accept RegExp",endAdornment:r.a.createElement(P.a,{position:"end"},r.a.createElement(j.a,{"aria-label":"add query",edge:"end",onClick:function(){return e.addCustomQuery()}},r.a.createElement(te.a,null))),onKeyDown:function(t){"Enter"===t.key&&e.addCustomQuery()}}})),r.a.createElement(L.a,null),r.a.createElement(K.a,{component:"li"}),r.a.createElement("li",null,r.a.createElement(B.a,{display:"block",variant:"caption"},"Words to add (Order matters)")),i.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{key:"ClearAllPendingQuerys"},r.a.createElement(V.a,{primary:"Clear all",secondary:"Total new: [WIP]"}),r.a.createElement(X.a,null,r.a.createElement(j.a,{edge:"end","aria-label":"remove pending query",onClick:function(){return e.clearAllPendingQuerys()}},r.a.createElement(ue.a,null)))),i.map(function(t){return r.a.createElement(L.a,{key:"pending"+t.Query},r.a.createElement(V.a,{primary:r.a.createElement(r.a.Fragment,null,t.Display.en+" ("+t.Query+")",s[t.Query]&&" "+s[t.Query].TotalCount+" words"),secondary:s[t.Query]?r.a.createElement(r.a.Fragment,null,"Learned "+s[t.Query].LearnedCount+", ","Added "+s[t.Query].AddedCount+", ","New "+s[t.Query].NewCount):null}),r.a.createElement(X.a,null,r.a.createElement(j.a,{edge:"end","aria-label":"remove pending query",onClick:function(){return e.props.removePendingQuery({query:t.Query})}},r.a.createElement(le.a,null))))})):r.a.createElement(L.a,null,r.a.createElement(V.a,null,"No words to add")),r.a.createElement(K.a,{component:"li"}),r.a.createElement("li",null,r.a.createElement(B.a,{display:"block",variant:"caption"},"[WIP] Filters")),r.a.createElement("div",{style:{display:"flux"}},r.a.createElement(Y.a,{control:r.a.createElement(Z.a,{checked:!0,disabled:!0,value:"Basic"}),label:"Basic"}),r.a.createElement(Y.a,{control:r.a.createElement(Z.a,{checked:!0,disabled:!0,onChange:function(){},value:"Proper"}),label:"Proper"}),r.a.createElement(Y.a,{control:r.a.createElement(Z.a,{checked:!0,disabled:!0,value:"Idiom"}),label:"Idiom"}),r.a.createElement(Y.a,{control:r.a.createElement(Z.a,{checked:!0,disabled:!0,value:"Extra"}),label:"Extra"})))),r.a.createElement($.a,null,this.state.addingWordsProgress?r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a,{disabled:!0},"Adding words...")):r.a.createElement(r.a.Fragment,null,r.a.createElement(A.a,{onClick:function(){return e.props.close()}},"Cancel"),i.length<=0?r.a.createElement(A.a,{disabled:!0},"No words"):r.a.createElement(A.a,{variant:"outlined",color:"primary",onClick:this.onClickConfirm},"Add these words"))))},a}(r.a.Component),he=Object(l.b)(function(e){console.debug("WordAdderContainer state: ",e);var t={display:e.WordAdder.get("Display"),status:e.WordAdder.get("Status"),suggestions:e.WordAdder.get("Suggestions"),pendings:e.WordAdder.get("Pendings"),counters:e.WordAdder.get("Counters"),saving:e.GoiSaving.get("Saving"),poiUserId:e.GoiUser.get("PoiUserId"),savingId:e.GoiSaving.get("SavingId")};return console.debug("WordAdderContainer props: ",t),t},function(e){return{clearPendingWords:function(t){var n=t.poiUserId,a=t.savingId;return e(Object(ne.d)({poiUserId:n,savingId:a}))},addPendingQuery:function(t,n){var a=t.display,r=t.query,o=n.poiUserId,i=n.savingId;return e(Object(ne.a)({display:a,query:r},{poiUserId:o,savingId:i}))},addPendingQuerys:function(t,n){var a=t.querys,r=n.poiUserId,o=n.savingId;return e(Object(ne.b)({querys:a},{poiUserId:r,savingId:o}))},removePendingQuery:function(t){var n=t.query;return e(Object(ne.j)({query:n}))},addWordsFromQuerys:function(t,n){var a=t.querys,r=n.poiUserId,o=n.savingId;return e(Object(ne.c)({querys:a},{poiUserId:r,savingId:o}))},close:function(){return e(Object(ne.f)({display:!1}))},showNextWord:function(t,n){return e(Object(w.a)({poiUserId:t,savingId:n}))}}})(ve),Ie=n(485),be=n(486),Ce=n(179),we=n(428),Se=n.n(we),ke=n(427),Oe=n.n(ke),Pe=n(424),je=n.n(Pe),Ae=n(429),xe=n.n(Ae),We=n(430),Ue=n.n(We),Ne=n(422),Qe=n.n(Ne),ze=n(418),Te=n.n(ze),_e=n(420),He=n.n(_e),De=n(419),Re=n.n(De),Ge=n(423),Je=n.n(Ge),qe=n(417),Me=n.n(qe),Fe=n(421),Le=n.n(Fe);var Ke=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).openMenu=function(){n.setState({menuOpened:!0})},n.closeMenu=function(){n.setState({menuOpened:!1})},n.toggleMenu=function(e){void 0===e&&(e=!n.state.menuOpened),n.setState({menuOpened:e})},n.state={menuOpened:!1},n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=a.prototype;return o.navigate=function(e){Object(Ce.b)(e,{replace:!0})},o.render=function(){var e=this,t=this.props,n=t.poiUserId,a=t.savingId;return r.a.createElement("div",{className:"commands-bar",style:{position:"absolute",bottom:"20px",right:"20px",display:"inline-flex",alignItems:"flex-end"}},r.a.createElement("div",{style:{display:"inline-flex",height:"40px",margin:"8px"}},r.a.createElement(A.a,{size:"small"},"[WIP]Parse",r.a.createElement(Me.a,{fontSize:"small"})),r.a.createElement(A.a,{size:"small"},"[WIP]Search",r.a.createElement(te.a,{fontSize:"small"})),r.a.createElement(A.a,{size:"small"},"[WIP]Order",r.a.createElement(Te.a,{fontSize:"small"}),!1),r.a.createElement(A.a,{size:"small"},"[WIP]Mode",r.a.createElement(Re.a,{fontSize:"small"}),!1,!1),r.a.createElement(A.a,{size:"small"},"[WIP]Savings",r.a.createElement(He.a,{fontSize:"small"})),r.a.createElement(A.a,{size:"small"},"[WIP]Audio",r.a.createElement(Le.a,{fontSize:"small"}),!1),r.a.createElement(A.a,{size:"small"},"[WIP]SwotUp",r.a.createElement(Qe.a,{fontSize:"small"})),r.a.createElement(A.a,{size:"small"},"[WIP]Sync",r.a.createElement(Je.a,{fontSize:"small"}),!1),r.a.createElement(A.a,Object.assign({size:"small"},this.props.pendingCandidates.isEmpty()&&{color:"secondary",variant:"outlined"},{onClick:function(){return e.props.showWordAdder({poiUserId:n,savingId:a})}}),"Words",r.a.createElement(ie.a,{fontSize:"small"}))),r.a.createElement(Ie.a,Object.assign({ariaLabel:"menu",open:this.state.menuOpened,icon:r.a.createElement(je.a,{fontSize:"small"})},p(this.toggleMenu),{ButtonProps:{color:"default",size:"small",style:{background:"white",margin:"8px"}}}),r.a.createElement(be.a,{key:"share",icon:r.a.createElement(Oe.a,{fontSize:"small"}),tooltipTitle:"[WIP] Share",tooltipOpen:!0,onClick:function(){e.closeMenu(),e.navigate("/")}}),r.a.createElement(be.a,{key:"tegami",icon:r.a.createElement(Se.a,{fontSize:"small"}),tooltipTitle:"手紙",tooltipOpen:!0,onClick:function(){e.closeMenu(),e.navigate("/tegami/")}}),r.a.createElement(be.a,{key:"mamechishiki",icon:r.a.createElement(xe.a,null),tooltipTitle:"豆知識",tooltipOpen:!0,onClick:function(){e.closeMenu(),e.navigate("/mamechishiki/")}}),r.a.createElement(be.a,{key:"searchwords",icon:r.a.createElement(te.a,null),tooltipTitle:"[WIP] Search Words",tooltipOpen:!0,onClick:function(){e.closeMenu(),e.navigate("/")}}),r.a.createElement(be.a,{key:"addwords",icon:r.a.createElement(ie.a,null),tooltipTitle:"Add Words",tooltipOpen:!0,onClick:function(){e.closeMenu(),e.props.showWordAdder({poiUserId:n,savingId:a})}}),r.a.createElement(be.a,{key:"profile",icon:r.a.createElement(Ue.a,null),tooltipTitle:"[WIP] Profile, statics and settings",tooltipOpen:!0,onClick:function(){e.closeMenu(),e.navigate("/profile/")}})))},a}(r.a.Component),Be=Object(l.b)(function(e){console.debug("CommandsBar state: ",e);var t={poiUserId:e.GoiUser.get("PoiUserId"),savingId:e.GoiSaving.get("SavingId"),pendingCandidates:e.GoiTester.get("PendingCandidates")};return console.debug("CommandsBar props: ",t),t},function(e){return{showWordAdder:function(t){var n=t.poiUserId,a=t.savingId;return e(Object(ne.k)({poiUserId:n,savingId:a}))}}})(Ke),Ve=n(347),Xe=n(483),Ye=n(145);t.default=function(e){return r.a.createElement("div",{className:"goi-index-page",style:{width:"100%",height:"100%",overflow:"hidden",position:"fixed"}},r.a.createElement(Xe.a,{xsDown:!0},r.a.createElement(o.a,null)),r.a.createElement(Xe.a,{smUp:!0},r.a.createElement("div",{style:{background:Ye.a,height:"1px"}})),r.a.createElement(Be,null),r.a.createElement("main",null,r.a.createElement(he,null),r.a.createElement(Ve.a,null,r.a.createElement(q,null))),r.a.createElement("footer",{style:{position:"absolute",bottom:0}},r.a.createElement(Ve.a,null,r.a.createElement("ruby",null,"私",r.a.createElement("rt",null,"わたし")),"たちの",r.a.createElement("ruby",null,"夢",r.a.createElement("rt",null,"ゆめ")),"をここから",r.a.createElement("ruby",null,"始",r.a.createElement("rt",null,"はじ")),"めましょう ٩(ˊᗜˋ*)و")))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-76718032384c8cd5d332.js.map