(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{404:function(e,t,n){"use strict";n.r(t);n(21);var a=n(0),r=n.n(a),o=n(202),i=(n(26),n(3),n(276),n(1)),l=n.n(i),s=(n(54),n(122)),d=(n(40),n(124),n(9),n(27),n(20),n(4),n(5),n(10),n(88),n(89),n(507)),c=(n(206),n(523));var u=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return r.a.createElement(c.a,Object.assign({display:"inline-flex",fontSize:"3vmin",height:"auto",color:"gray",marginLeft:"4px",marginRight:"1px"},this.props),this.props.children)},a}(r.a.Component),p=function(e){return{onClick:function(){return e(!0,"onClick")},onFocus:function(){return e(!0,"onFocus")},onBlur:function(){return e(!1,"onBlur")},onMouseEnter:function(){return e(!0,"onMouseEnter")},onMouseLeave:function(){return e(!1,"onMouseLeave")},onClose:function(){return e(!1,"onClose")}}},m=n(198);var g=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).toggleStateHint=function(e){void 0===e&&(e=!n.state.displayHint),n.setState({displayHint:e})},n.state={displayHint:!1},n}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.props.t,t=this.props,n=t.i18nTranslation,a=t.from,o=t.displayFrom,i=this.props.displayHint||this.state.displayHint;return r.a.createElement("li",null,r.a.createElement("div",{className:"word-card-single-translation",style:{fontSize:"8vmin"}},Object.entries(n.translation).map(function(e){var t=e[0],a=e[1];return Object.keys(n.translation).length>1?t+":"+a+"; ":""+a})),n.hint&&r.a.createElement("div",{className:"word-card-single-translation-hint"},r.a.createElement(u,p(this.toggleStateHint),e("Hint")),Object.entries(n.hint).map(function(e){var t=e[0],a=e[1];return r.a.createElement("span",{key:t,style:{visibility:i?"inherit":"hidden",fontSize:"3vmin"}},Object.keys(n.hint||{}).length>1&&r.a.createElement(u,null,t),r.a.createElement("span",{dangerouslySetInnerHTML:{__html:a||""}}))})),o&&r.a.createElement("div",{style:{color:"gray",width:"100%",fontSize:"1.5vmin",display:"flex",justifyContent:"flex-end"}},"from ",a))},a}(r.a.Component);g.defaultProps={i18nTranslation:{translation:{en:"English Translation",zh:"中文翻译",jp:"日本語"},hint:{en:"English Hint",zh:"中文提示",jp:"日本語"}},displayHint:!0,locales:["jp","zh","en"],from:"",displayFrom:!1};var y=Object(m.b)("Common")(g);var f=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return r.a.createElement("div",{style:{flexWrap:"nowrap",display:"inline-flex",alignItems:"center"}},r.a.createElement("div",{style:{height:"auto"}},r.a.createElement(u,null,this.props.title)),r.a.createElement("span",{style:{fontSize:"4vmin",color:"gray"}},this.props.children))},a}(r.a.Component);var h=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this.props,t=e.i18nSentence,n=e.displayFrom;return r.a.createElement("li",null,r.a.createElement("div",{className:"word-card-single-sentence",style:{fontSize:"4vmin"}},r.a.createElement("span",{dangerouslySetInnerHTML:{__html:t.sentence}})),r.a.createElement("div",{className:"word-card-single-sentence-translation",style:{fontSize:"4vmin"}},t.translation&&Object.entries(t.translation).map(function(e){var n=e[0],a=e[1];return Object.keys(t.translation||[]).length>1?n+":"+a+"; ":""+a})),n&&r.a.createElement("div",{style:{color:"gray",width:"100%",fontSize:"1.5vmin",display:"flex",justifyContent:"flex-end"}},"from ",t.from))},a}(r.a.Component);h.defaultProps={i18nSentence:{from:"",sentence:"It's a sample sentence.",translation:{en:"It's the translation of the sample sentence.",zh:"这是例句的中文翻译",jp:"これは例句の日本語の翻訳です"},audios:[],source:"PoiGoi",link:"https://goi.poi.dev/",contributor:"凪"},displayHint:!0,locales:["jp","zh","en"],displayFrom:!1};var v=h,E=n(439),S=n.n(E),b=n(440),I=n.n(b),C=n(441),w=n.n(C),x=n(442),P=n.n(x),k=n(443),W=n.n(k),T=n(444),O=n.n(T),j=n(445),A=n.n(j),z=n(446),U=n.n(z),Q=n(447),N=n.n(Q),R=n(424),B=n.n(R),L=n(12),F=n.n(L);function M(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var _=F()("PoiGoi:JaWordCard"),J=function(e){return 0===e?String.fromCharCode(9450):e>=1&&e<20?String.fromCharCode(9311+Math.floor(e)):""},D=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){for(var e=this,t=this.props.level,n="input"===this.props.status?"gray":"first"===this.props.status?"blue":"perfect"===this.props.status?"green":"good"===this.props.status?"lightgreen":"warning"===this.props.status?"orange":"failed"===this.props.status?"red":"peek"===this.props.status?"blue":(this.props.status,"black"),a=Object.assign({},this.props.word),o=[],i=0;i<this.props.dictionarys.length;i++){var l=this.props.dictionarys[i];Object.keys(a.translations).includes(l)&&o.push(l)}for(var s="detailed"!==this.props.display?o.slice(0,1):o,c=[],p=function(t){var n=e.props.dictionarys[t],r=(a.sentences||[]).filter(function(e){return e.from===n});c.push.apply(c,M(r))},m=0;m<this.props.dictionarys.length;m++)p(m);var g="detailed"!==this.props.display?c.slice(0,1):c;return _(s,g),r.a.createElement("div",{className:"word-card"},r.a.createElement("div",{className:"word-card-common",style:{minHeight:"20vmin",fontSize:"10vmin",color:n,visibility:"test-common"===this.props.display?"hidden":"inherit",display:"flex",alignItems:"flex-end"}},r.a.createElement("span",{dangerouslySetInnerHTML:{__html:a.common}})),r.a.createElement("div",{className:"word-card-tags",style:{display:"flex",alignItems:"center"}},r.a.createElement("div",{style:{display:"inline-flex",alignItems:"center",visibility:"test-common"===this.props.display?"hidden":"inherit"}},r.a.createElement(B.a,{fontSize:"small"}),"number"==typeof a.tone&&J(a.tone),Array.isArray(a.tone)&&a.tone.map(function(e){return"number"==typeof e&&J(e)}).join(),0===t?r.a.createElement(S.a,{fontSize:"small"}):1===t?r.a.createElement(I.a,{fontSize:"small"}):2===t?r.a.createElement(w.a,{fontSize:"small"}):3===t?r.a.createElement(P.a,{fontSize:"small"}):4===t?r.a.createElement(W.a,{fontSize:"small"}):5===t?r.a.createElement(O.a,{fontSize:"small"}):6===t?r.a.createElement(A.a,{fontSize:"small"}):t>=7?r.a.createElement(U.a,{fontSize:"small"}):r.a.createElement(N.a,{fontSize:"small"})),r.a.createElement("span",{style:{visibility:"test-common"===this.props.display?"hidden":"inherit"}},r.a.createElement("div",null,a.romaji&&r.a.createElement(f,{title:"ローマ字:"},a.romaji),a.wapuro&&r.a.createElement(f,{title:"ワープロ:"},a.wapuro)),r.a.createElement("div",null,a.pos.includes("KANA")&&r.a.createElement(u,null,"仮名"),a.pos.includes("HIRAGANA")&&r.a.createElement(u,null,"平仮名"),a.pos.includes("KATAKANA")&&r.a.createElement(u,null,"片仮名"),a.pos.includes("DAKUON")&&r.a.createElement(u,null,"濁音"),a.pos.includes("YOON")&&r.a.createElement(u,null,"拗音"),a.pos.includes("CHOON")&&r.a.createElement(u,null,"長音"),a.pos.includes("VERB")&&r.a.createElement(u,null,"動詞"),a.pos.includes("GODAN")&&r.a.createElement(u,null,"五段活用"),a.pos.includes("KAMIICHIDAN")&&r.a.createElement(u,null,"上一段活用"),a.pos.includes("SHIMOICHIDAN")&&r.a.createElement(u,null,"下一段活用"),a.pos.includes("SAHEN")&&r.a.createElement(u,null,"サ変"),a.pos.includes("KAHEN")&&r.a.createElement(u,null,"カ変"),a.pos.includes("JIDOSHI")&&r.a.createElement(u,null,"自動詞"),a.pos.includes("TADOSHI")&&r.a.createElement(u,null,"他動詞"),a.pos.includes("ADJ")&&r.a.createElement(u,null,"形容詞"),a.pos.includes("KEIYODOSHI")&&r.a.createElement(u,null,"形容動詞"),a.pos.includes("NOUN")&&r.a.createElement(u,null,"名詞"),a.pos.includes("PROPER")&&r.a.createElement(u,null,"固有名詞"),a.pos.includes("PRON")&&r.a.createElement(u,null,"代名詞"),a.pos.includes("RENTAISHI")&&r.a.createElement(u,null,"連体詞"),a.pos.includes("ADV")&&r.a.createElement(u,null,"副詞"),a.pos.includes("CONJ")&&r.a.createElement(u,null,"接続詞"),a.pos.includes("INTERJ")&&r.a.createElement(u,null,"感動詞"),a.pos.includes("JODOSHI")&&r.a.createElement(u,null,"助動詞"),a.pos.includes("JOSHI")&&r.a.createElement(u,null,"助詞"),a.pos.includes("IDIOM")&&r.a.createElement(u,null,"熟語"),t>=0&&r.a.createElement(u,null,"練度",t)))),r.a.createElement("div",{className:"word-card-translation",style:{color:n}},r.a.createElement(d.a,null,s.map(function(t){return r.a.createElement(y,{key:t,i18nTranslation:a.translations[t],displayHint:"test-common"!==e.props.display,from:t,displayFrom:"detailed"===e.props.display})}))),"test-common"!==this.props.display&&r.a.createElement("div",{className:"word-card-sentences"},r.a.createElement(d.a,null,g.map(function(t,n){return r.a.createElement(v,{key:n,i18nSentence:t,displayFrom:"detailed"===e.props.display})}))),"detailed"===this.props.display&&r.a.createElement("div",{className:"word-card-textbooks"},a.textbook.map(function(e,t){return r.a.createElement(u,{key:t},e)})))},a}(r.a.Component);D.defaultProps={word:{common:"Common Placeholder",translation:"Translation Placeholder"},display:"detailed",status:"view",dictionarys:["KanaDictionary","GoiSimpleJaDictionary","BiaozhunRibenyu","XinbianRiyu","Xinbian","AnimeSong","Anime","JishoOrg","GooJisho"],level:-1};var G=D,q=n(246),H=n(244),K=n(115),V=n(199),X=n.n(V),Y=n(16),Z=n(522),$=n(510),ee=n(511),te=n(512),ne=n(513),ae=n(448),re=n.n(ae),oe=n(449),ie=n.n(oe),le=n(450),se=n.n(le),de=n(430),ce=n.n(de),ue=n(451),pe=n.n(ue),me=n(452),ge=n.n(me),ye=n(453),fe=n.n(ye),he=n(454),ve=n.n(he),Ee=n(148),Se=n(508),be=n(204),Ie=n(528),Ce=function(e){Object(Se.a)(Object(be.a)().breakpoints.down("xs"));return r.a.createElement(Ie.a,Object.assign({},e,{PaperProps:{style:{margin:"10px"}}}),e.children)};function we(e,t,n,a,r,o,i){try{var l=e[o](i),s=l.value}catch(d){return void n(d)}l.done?t(s):Promise.resolve(s).then(a,r)}function xe(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var o=e.apply(t,n);function i(e){we(o,a,r,i,l,"next",e)}function l(e){we(o,a,r,i,l,"throw",e)}i(void 0)})}}var Pe=F()("PoiGoi:GoiTester"),ke=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).JudgeInputElement=null,n.requestJudge=function(){var e=xe(l.a.mark(function e(t){var a,r,o,i,s,d,c,u;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=(a=void 0===t?{}:t).skip,o=a.forceLevelChange,i=n.props,s=i.poiUserId,d=i.savingId,c=n.props.currentWord.toJS(),e.next=5,n.props.judgeAnswer({answer:n.state.testerInput,word:c,skip:r,forceLevelChange:o},{poiUserId:s,savingId:d});case 5:if(u=e.sent,n.setState({testerInput:""}),"Correct"!==u&&"Accepted"!==u&&"Skipped"!==u){e.next=10;break}return e.next=10,n.requestNext();case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.requestNext=function(){var e=xe(l.a.mark(function e(t){var a,r,o,i,s,d,c,u;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=void 0!==(a=(void 0===t?{}:t).forget)&&a,r=n.props,o=r.poiUserId,i=r.savingId,s=r.currentWordKey,d=r.learnedCandidates,c=r.prioritiedCandidates,u=r.pendingCandidates,!a){e.next=6;break}return e.next=6,Object(Y.e)(o,i,s).Forget();case 6:return e.next=8,n.props.showNextWord({poiUserId:o,savingId:i},Object.assign({},!a&&{currentWordKey:s},{learnedCandidates:d,prioritiedCandidates:c,pendingCandidates:u}));case 8:n.setState({testerInput:"",displayDetail:!1});case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.state={testerInput:"",displayDetail:!1,isReportWordDialogOpened:!1},n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=a.prototype;return o.componentDidMount=function(){var e=xe(l.a.mark(function e(){var t,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return Pe("Lasy init user"),e.next=3,this.props.lazyInitUser();case 3:return t=e.sent,Pe("Lasy init saving"),e.next=7,this.props.lazyInitSaving({poiUserId:t});case 7:return n=e.sent,e.next=10,this.props.showNextWord({poiUserId:t,savingId:n});case 10:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),o.render=function(){var e=this,t=this.props,n=t.t,a=t.i18n,o=this.props.currentWord.toJS(),i=this.props.saving&&this.props.saving.Language?this.props.saving.Language:"en",l="Pending"===this.props.judgeResult?"input":"Correct"===this.props.judgeResult?"perfect":"Accepted"===this.props.judgeResult?"good":"Rejected"===this.props.judgeResult?"warning":"Wrong"===this.props.judgeResult?"failed":"review",s="Pending"===this.props.judgeResult?"test-common":this.state.displayDetail?"detailed":"simple";return r.a.createElement("div",{className:"goi-tester"},r.a.createElement(X.a,null,i.startsWith("ja")?"Pending"===this.props.judgeResult?r.a.createElement("title",null,n("PageTitleWhenEmptyForJaLearner","PoiGoi")):r.a.createElement("title",null,n("PageTitleWhenWordIsDisplayedForJaLearner",{defaultValue:"PoiGoi - {{wordkey}}",wordkey:o.key})):"Pending"===this.props.judgeResult?r.a.createElement("title",null,n("PageTitleWhenEmpty","PoiGoi")):r.a.createElement("title",null,n("PageTitleWhenWordIsDisplayed",{defaultValue:"PoiGoi - {{wordkey}}",wordkey:o.key}))),r.a.createElement("div",{style:{height:"50px"}}),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(Z.a,{label:n("MainInputLabel","Justify your answer"),variant:"outlined",value:this.state.testerInput,style:{flexGrow:1},onFocus:function(){e.props.updateIsTyping({isTyping:!0})},onBlur:function(){e.props.updateIsTyping({isTyping:!1})},onChange:function(t){e.setState({testerInput:t.target.value})},InputProps:{placeholder:"Rejected"===this.props.judgeResult||"Wrong"===this.props.judgeResult?n("MainInputWrongPlaceholder","Type correct answer to continue"):i.startsWith("ja")?n("MainInputPendingPlaceholderForJaLearner","Use japanese IME"):n("MainInputPendingPlaceholder","Type your answer here"),endAdornment:r.a.createElement($.a,{position:"end"},r.a.createElement(ee.a,{"aria-label":"Request judge",edge:"end",onClick:function(){return e.requestJudge()}},r.a.createElement(re.a,null))),onKeyDown:function(t){"Enter"===t.key&&e.requestJudge()}}}),"Pending"===this.props.judgeResult?r.a.createElement(te.a,{size:"small","aria-label":"Skip current word",onClick:function(){return e.requestJudge({skip:!0})}},n("SkipWordButtonText","Skip"),r.a.createElement(ie.a,{fontSize:"small"})):r.a.createElement(te.a,{size:"small","aria-label":"Show next word",onClick:function(){return e.requestNext()}},n("NextWordButtonText","Skip"),r.a.createElement(se.a,{fontSize:"small"}))),r.a.createElement(G,Object.assign({word:o,display:s,status:l},null!==this.props.currentLevel&&{level:this.props.currentLevel})),!s.startsWith("test")&&r.a.createElement("div",{className:"word-card-actions"},!this.state.displayDetail&&r.a.createElement(te.a,{size:"small","aria-label":"detail",onClick:function(){e.setState({displayDetail:!0}),e.props.enableScroll({enableScroll:!0})},style:{color:"gray"}},r.a.createElement(ce.a,{fontSize:"small"}),n("WordDetailButtonText","Detail")),this.state.displayDetail&&r.a.createElement(te.a,{size:"small","aria-label":"forget",onClick:function(){e.requestNext({forget:!0})},style:{color:"gray"}},r.a.createElement(pe.a,{fontSize:"small"}),n("ForgetWordButtonText","Forget")),this.state.displayDetail&&this.props.forcedWordKey!==o.key&&r.a.createElement(te.a,{size:"small","aria-label":"level plus one",onClick:function(){return e.requestJudge({forceLevelChange:1})},style:{color:"gray"}},r.a.createElement(ge.a,{fontSize:"small"}),n("LevelPlusOneButtonText","Level")),this.state.displayDetail&&this.props.forcedWordKey!==o.key&&r.a.createElement(te.a,{size:"small","aria-label":"level plus two",onClick:function(){return e.requestJudge({forceLevelChange:2})},style:{color:"gray"}},r.a.createElement(fe.a,{fontSize:"small"}),n("LevelPlusTwoButtonText","Level")),this.state.displayDetail&&r.a.createElement(te.a,{size:"small","aria-label":"report wrong word",onClick:function(){e.setState({isReportWordDialogOpened:!0})},style:{color:"gray"}},r.a.createElement(ve.a,{fontSize:"small"}),n("ReportWordButtonText","Report"))),r.a.createElement("div",{className:"word-card-bottom-placeholder",style:{height:"100px"}}),r.a.createElement(Ce,{open:this.state.isReportWordDialogOpened},a.language.startsWith("zh")?r.a.createElement("iframe",{width:"640px",height:"480px",src:"https://forms.office.com/Pages/ResponsePage.aspx?id=HO2aql64JEqeASBBMrBBF9_J_XUtkrhFhjg9N756g3xUNTBIMThERkFCT0JDS1JSOFhLSk45WFJKMyQlQCN0PWcu&embed=true",frameBorder:0,marginWidth:0,marginHeight:0,style:{border:"none",maxWidth:"100%",maxHeight:"100vh"},allowFullScreen:!0}):r.a.createElement("iframe",{width:"640px",height:"480px",src:"https://forms.office.com/Pages/ResponsePage.aspx?id=HO2aql64JEqeASBBMrBBF9_J_XUtkrhFhjg9N756g3xUQTNBQUU2NllVUzdZRlcxMzM5Tk1JMkREUCQlQCN0PWcu&embed=true",frameBorder:0,marginWidth:0,marginHeight:0,style:{border:"none",maxWidth:"100%",maxHeight:"100vh"},allowFullScreen:!0}),r.a.createElement(ne.a,null,r.a.createElement(te.a,{onClick:function(){e.setState({isReportWordDialogOpened:!1})}},n("CloseReportWordButtonText","Close")))))},a}(r.a.Component),We=Object(s.b)(function(e){Pe("GoiTester state: ",e);var t={poiUserId:e.GoiUser.get("PoiUserId"),savingId:e.GoiSaving.get("SavingId"),currentWord:e.GoiTester.get("CurrentWord"),currentWordKey:e.GoiTester.getIn(["CurrentWord","key"]),currentLevel:e.GoiTester.has("Record")?e.GoiTester.getIn(["Record","Level"]):null,judgeResult:e.GoiTester.get("JudgeResult"),forcedWordKey:e.GoiTester.get("ForcedWordKey"),saving:e.GoiSaving.get("Saving"),tester:e.GoiTester,learnedCandidates:e.GoiTester.get("LearnedCandidates"),prioritiedCandidates:e.GoiTester.get("PrioritiedCandidates"),pendingCandidates:e.GoiTester.get("PendingCandidates")};return Pe("GoiTester props: ",t),t},function(e){return{lazyInitUser:function(){return e(Object(q.a)())},lazyInitSaving:function(t){var n=t.poiUserId;return e(Object(H.a)({poiUserId:n}))},updateIsTyping:function(t){var n=t.isTyping;return e(Object(K.f)({isTyping:n}))},enableScroll:function(t){var n=t.enableScroll;return e(Object(Ee.b)({enableScroll:n}))},showNextWord:function(t,n){var a=t.poiUserId,r=t.savingId,o=void 0===n?{}:n,i=o.currentWordKey,l=o.learnedCandidates,s=o.prioritiedCandidates,d=o.pendingCandidates;return e(Object(K.a)({poiUserId:a,savingId:r},{currentWordKey:i,learnedCandidates:l,prioritiedCandidates:s,pendingCandidates:d}))},judgeAnswer:function(t,n){var a=t.answer,r=t.word,o=t.skip,i=t.forceLevelChange,l=n.poiUserId,s=n.savingId;return e(Object(K.g)({answer:a,word:r,skip:o,forceLevelChange:i},{poiUserId:l,savingId:s}))}}})(Object(m.b)("GoiTester")(ke)),Te=n(514),Oe=n(515),je=n(516),Ae=n(517),ze=n(413),Ue=n(518),Qe=n(519),Ne=n(520),Re=n(525),Be=n(432),Le=n.n(Be),Fe=n(71),Me=n(455),_e=n.n(Me),Je=n(431),De=n.n(Je),Ge=n(457),qe=n.n(Ge),He=n(456),Ke=n.n(He),Ve=function(e,t){return t.startsWith("zh")&&e.zh?e.zh:t.startsWith("ja")&&e.ja?e.ja:e.en||""};function Xe(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function Ye(e,t,n,a,r,o,i){try{var l=e[o](i),s=l.value}catch(d){return void n(d)}l.done?t(s):Promise.resolve(s).then(a,r)}function Ze(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var o=e.apply(t,n);function i(e){Ye(o,a,r,i,l,"next",e)}function l(e){Ye(o,a,r,i,l,"throw",e)}i(void 0)})}}var $e=F()("PoiGoi:WordAdder"),et=function(e){var t=e.regex;return r.a.createElement("span",{style:{color:"gray",fontSize:"0.5rem"}},"/",t,"/")},tt=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).getSuggestionQuerys=function(){return n.props.suggestions.toJS().map(function(e){return e.Query})},n.getPendingQuerys=function(){return n.props.pendings.toJS().map(function(e){return e.Query})},n.addSuggestion=function(){var e=Ze(l.a.mark(function e(t){var a,r,o;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a=n.props,r=a.poiUserId,o=a.savingId,!Array.isArray(t.SubQuerys)){e.next=4;break}return e.next=4,n.props.addPendingQuerys({querys:[].concat(Xe(t.SubQuerys),[{Display:t.Display,Query:t.Query}])},{poiUserId:r,savingId:o});case 4:n.props.refreshSubtotal({querys:[].concat(Xe(n.getPendingQuerys()),Xe((t.SubQuerys||[]).map(function(e){return e.Query}))),filter:n.props.filter.toJS()},{poiUserId:r,savingId:o});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),n.clearAllPendingQuerys=Ze(l.a.mark(function e(){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(n.getPendingQuerys().map(function(e){return n.props.removePendingQuery({query:e})}));case 2:case"end":return e.stop()}},e)})),n.onClickConfirm=Ze(l.a.mark(function e(){var t,a,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.props,a=t.poiUserId,r=t.savingId,n.setState({addingWordsProgress:!0}),e.next=4,n.props.addWordsFromQuerys({querys:n.getPendingQuerys()},{poiUserId:a,savingId:r});case 4:return n.setState({addingWordsProgress:!1}),n.props.close(),e.next=8,n.clearAllPendingQuerys();case 8:return e.next=10,n.props.showNextWord(a,r);case 10:case"end":return e.stop()}},e)})),n.addCustomQuery=function(){var e=n.props,t=e.poiUserId,a=e.savingId,r=n.state.customQuery.trim();n.props.addPendingQuery({display:{en:"Custom",zh:"自定义搜索条件"},query:r},{poiUserId:t,savingId:a}),n.props.refreshSubtotal({querys:[].concat(Xe(n.getPendingQuerys()),[r]),filter:n.props.filter.toJS()},{poiUserId:t,savingId:a})},n.onClickRemovePendingQuery=function(e){var t=e.query,a=n.props,r=a.poiUserId,o=a.savingId;n.props.removePendingQuery({query:t});var i=n.getPendingQuerys().filter(function(e){return e!=t});n.props.refreshSubtotal({querys:i,filter:n.props.filter.toJS()},{poiUserId:r,savingId:o})},n.state={customQuery:"",addingWordsProgress:!1},n}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){var e=this,t=this.props,n=t.t,a=t.i18n;if(!this.props.display)return r.a.createElement("div",{className:"word-adder"});var o=this.props,i=o.poiUserId,l=o.savingId,s={learnedCount:this.props.status.get("LearnedCount"),prioritiedCount:this.props.status.get("PrioritiedCount"),pendingCount:this.props.status.get("PendingCount")},c=s.learnedCount,u=s.prioritiedCount,p=s.pendingCount,m=this.props.suggestions.toJS(),g=this.props.pendings.toJS(),y=this.props.counters.toJS();return r.a.createElement(Ce,{className:"word-adder",open:this.props.display},r.a.createElement(Te.a,null,n("WordAdderTitle","Add words")),r.a.createElement(Oe.a,{dividers:!0},r.a.createElement(d.a,{dense:!0},r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement(Z.a,{label:n("SavingStatusLearnedCountLabel","Learned"),value:c>=0?c:"...",margin:"none",style:{marginRight:"10px",flex:1},InputProps:{readOnly:!0}}),r.a.createElement(Z.a,{label:n("SavingStatusPrioritiedCountLabel","Prioritied"),value:u>=0?u:"...",margin:"none",style:{marginRight:"10px",flex:1},InputProps:{readOnly:!0}}),r.a.createElement(Z.a,{label:n("SavingStatusPendingCountLabel","Pending"),value:p>=0?p:"...",margin:"none",style:{flex:1},InputProps:{readOnly:!0,endAdornment:r.a.createElement($.a,{position:"end"},r.a.createElement(ee.a,{size:"small","aria-label":"Clear pending words",onClick:function(){return e.props.clearPendingWords({poiUserId:i,savingId:l})}},r.a.createElement(_e.a,null)))}})),r.a.createElement(je.a,null),r.a.createElement(Ae.a,{component:"li"}),r.a.createElement("li",null,r.a.createElement(ze.a,{display:"block",variant:"caption"},n("SuggestionSectionTitle","Suggested Word Querys"))),m.map(function(t){var o=y[t.Query]?y[t.Query]:{TotalCount:-1,LearnedCount:-1,AddedCount:-1,NewCount:-1},i=o.TotalCount,l=o.LearnedCount,s=o.AddedCount,d=o.NewCount;return r.a.createElement(je.a,{key:"suggestion"+t.Query},r.a.createElement(Ue.a,{primary:r.a.createElement(r.a.Fragment,null,Ve(t.Display,a.language),r.a.createElement(et,{regex:t.Query}),y[t.Query]&&n("CountQueryTotalResult",{defaultValue:" {{total}} words",total:i>=0?i:"..."})),secondary:y[t.Query]?r.a.createElement(r.a.Fragment,null,n("CountSuggestionQueryResult",{defaultValue:"Learned {{learned}} | Added {{added}} | New {{new}}",learned:l>=0?l:"...",added:s>=0?s:"...",new:d>=0?d:"..."})):null}),r.a.createElement(Qe.a,null,r.a.createElement(ee.a,{edge:"end","aria-label":"Add suggestion query",onClick:function(){return e.addSuggestion(t)}},r.a.createElement(De.a,null))))}),r.a.createElement("div",{style:{display:"flex"}},r.a.createElement(Z.a,{label:n("CustomQueryInputLabel","Custom Query"),variant:"outlined",value:this.state.customQuery,style:{flexGrow:1},onChange:function(t){e.setState({customQuery:t.target.value})},InputProps:{placeholder:n("CustomQueryInputPlaceholder","(e.g. JLPT-N5) Accept RegExp"),endAdornment:r.a.createElement($.a,{position:"end"},r.a.createElement(ee.a,{"aria-label":"add query",edge:"end",onClick:function(){return e.addCustomQuery()}},r.a.createElement(Le.a,null))),onKeyDown:function(t){"Enter"===t.key&&e.addCustomQuery()}}})),r.a.createElement(je.a,null),r.a.createElement(Ae.a,{component:"li"}),r.a.createElement("li",null,r.a.createElement(ze.a,{display:"block",variant:"caption"},n("WordsToAddSectionTitle","Words to add (Order matters)"))),g.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(je.a,{key:"ClearAllPendingQuerys"},r.a.createElement(Ue.a,{primary:n("CountTotalPendingWords",{defaultValue:"Total new: {{new}}",new:this.props.subtotal>=0?this.props.subtotal:"..."}),secondary:n("ClearAllPendingsItemText","Click right button to clear list")}),r.a.createElement(Qe.a,null,r.a.createElement(ee.a,{edge:"end","aria-label":"clear all pending query",onClick:function(){return e.clearAllPendingQuerys()}},r.a.createElement(Ke.a,null)))),g.map(function(t){var o=y[t.Query]?y[t.Query]:{TotalCount:-1,LearnedCount:-1,AddedCount:-1,NewCount:-1},i=o.TotalCount,l=o.LearnedCount,s=o.AddedCount,d=o.NewCount;return r.a.createElement(je.a,{key:"pending"+t.Query},r.a.createElement(Ue.a,{primary:r.a.createElement(r.a.Fragment,null,Ve(t.Display,a.language),r.a.createElement(et,{regex:t.Query}),y[t.Query]&&n("CountQueryTotalResult",{defaultValue:" {{total}} words",total:i>=0?i:"..."})),secondary:y[t.Query]?r.a.createElement(r.a.Fragment,null,n("CountPendingQueryResult",{defaultValue:"Learned {{learned}} | Added {{added}} | New {{new}}",learned:l>=0?l:"...",added:s>=0?s:"...",new:d>=0?d:"..."})):null}),r.a.createElement(Qe.a,null,r.a.createElement(ee.a,{edge:"end","aria-label":"remove pending query",onClick:function(){return e.onClickRemovePendingQuery({query:t.Query})}},r.a.createElement(qe.a,null))))})):r.a.createElement(je.a,null,r.a.createElement(Ue.a,null,n("NoWordsItemPlaceholder","No words to add"))),r.a.createElement(Ae.a,{component:"li"}),r.a.createElement("li",null,r.a.createElement(ze.a,{display:"block",variant:"caption"},"[WIP]",n("FiltersSectionTitle","Filters"))),r.a.createElement("div",{style:{display:"flux"}},r.a.createElement(Ne.a,{control:r.a.createElement(Re.a,{checked:!0,disabled:!0,value:"BasicFilter"}),label:n("BasicFilterLabel","Basic")}),r.a.createElement(Ne.a,{control:r.a.createElement(Re.a,{checked:!0,disabled:!0,onChange:function(){},value:"ProperFilter"}),label:n("ProperFilterLabel","Proper")}),r.a.createElement(Ne.a,{control:r.a.createElement(Re.a,{checked:!0,disabled:!0,value:"IdiomFilter"}),label:n("IdiomFilterLabel","Idiom")}),r.a.createElement(Ne.a,{control:r.a.createElement(Re.a,{checked:!0,disabled:!0,value:"ExtraFilter"}),label:n("ExtraFilterLabel","Extra")}),r.a.createElement(Ne.a,{control:r.a.createElement(Re.a,{checked:!0,disabled:!0,value:"ForgotFilter"}),label:n("ForgotFilterLabel","Forgot")})))),r.a.createElement(ne.a,null,this.state.addingWordsProgress?r.a.createElement(te.a,{disabled:!0},n("AddingWordsProgressText","Adding words...")):r.a.createElement(r.a.Fragment,null,r.a.createElement(te.a,{onClick:function(){return e.props.close()}},n("WordAdderCancelButtonText","Cancel")),g.length<=0?r.a.createElement(te.a,{disabled:!0},n("NoPendingWordsPromptText","No words")):r.a.createElement(te.a,{variant:"outlined",color:"primary",onClick:this.onClickConfirm},n("WordAdderConfirmButtonText","Add these words")))))},a}(r.a.Component),nt=Object(s.b)(function(e){$e("WordAdderContainer state: ",e);var t={display:e.WordAdder.get("Display"),status:e.WordAdder.get("Status"),suggestions:e.WordAdder.get("Suggestions"),pendings:e.WordAdder.get("Pendings"),counters:e.WordAdder.get("Counters"),filter:e.WordAdder.get("Filter"),subtotal:e.WordAdder.get("Subtotal"),saving:e.GoiSaving.get("Saving"),poiUserId:e.GoiUser.get("PoiUserId"),savingId:e.GoiSaving.get("SavingId")};return $e("WordAdderContainer props: ",t),t},function(e){return{clearPendingWords:function(t){var n=t.poiUserId,a=t.savingId;return e(Object(Fe.d)({poiUserId:n,savingId:a}))},addPendingQuery:function(t,n){var a=t.display,r=t.query,o=n.poiUserId,i=n.savingId;return e(Object(Fe.a)({display:a,query:r},{poiUserId:o,savingId:i}))},addPendingQuerys:function(t,n){var a=t.querys,r=n.poiUserId,o=n.savingId;return e(Object(Fe.b)({querys:a},{poiUserId:r,savingId:o}))},removePendingQuery:function(t){var n=t.query;return e(Object(Fe.k)({query:n}))},addWordsFromQuerys:function(t,n){var a=t.querys,r=n.poiUserId,o=n.savingId;return e(Object(Fe.c)({querys:a},{poiUserId:r,savingId:o}))},close:function(){return e(Object(Fe.f)({display:!1}))},showNextWord:function(t,n){return e(Object(K.a)({poiUserId:t,savingId:n}))},refreshSubtotal:function(t,n){var a=t.querys,r=t.filter,o=n.poiUserId,i=n.savingId;return e(Object(Fe.j)({querys:a,filter:r},{poiUserId:o,savingId:i}))},updateFilter:function(t){var n=t.filter;return e(Object(Fe.p)({filter:n}))}}})(Object(m.b)("WordAdder")(tt)),at=n(529),rt=n(530),ot=n(200),it=n(466),lt=n.n(it),st=n(463),dt=n.n(st),ct=n(464),ut=n.n(ct),pt=n(458),mt=n.n(pt),gt=n(465),yt=n.n(gt),ft=n(460),ht=n.n(ft),vt=n(472),Et=n.n(vt),St=n(467),bt=n.n(St),It=n(459),Ct=n.n(It),wt=n(473),xt=n.n(wt),Pt=n(462),kt=n.n(Pt),Wt=n(470),Tt=n.n(Wt),Ot=n(471),jt=n.n(Ot),At=n(461),zt=n.n(At);var Ut=F()("PoiGoi:CommandsBar"),Qt=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).commandsContainerRef=r.a.createRef(),n.openMenu=function(){n.setState({isMenuOpened:!0})},n.closeMenu=function(){n.setState({isMenuOpened:!1})},n.toggleMenu=function(e){void 0===e&&(e=!n.state.isMenuOpened),n.setState({isMenuOpened:e})},n.state={isMenuOpened:!1,isCommandsExpanded:!1},n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=a.prototype;return o.navigate=function(e){Object(ot.b)(e,{replace:!0})},o.render=function(){var e=this,t=this.props.t,n=this.props,a=n.poiUserId,o=n.savingId,i="undefined"!=typeof window&&window.innerWidth<600,l=this.props.saving&&this.props.saving.Language?this.props.saving.Language:"en";return r.a.createElement("div",{className:"commands-bar",style:{visibility:i&&this.props.isTyping?"hidden":"inherit",position:"fixed",bottom:"20px",right:"20px",display:"inline-flex",alignItems:"flex-end",maxWidth:"calc(100vw - 20px)"}},r.a.createElement("div",{style:{display:"flex",height:"40px",marginBottom:"8px"}},r.a.createElement("div",{style:{margin:"auto"}},i&&this.state.isCommandsExpanded&&r.a.createElement(ee.a,{size:"small","aria-label":"Scroll command bar to left end",onClick:function(){e.commandsContainerRef.current&&e.commandsContainerRef.current.scrollTo({left:-1e4,behavior:"smooth"})}},r.a.createElement(mt.a,{fontSize:"small"})))),r.a.createElement("div",{ref:this.commandsContainerRef,style:{display:"flex",height:"40px",marginTop:"8px",marginBottom:"8px",overflowX:"auto",overflowY:"hidden",direction:"rtl"}},r.a.createElement("div",{style:{display:"inline-flex",direction:"ltr"}},this.state.isCommandsExpanded?r.a.createElement(te.a,{size:"small",style:{whiteSpace:"nowrap"},onClick:function(){e.setState({isCommandsExpanded:!1})}},t("FoldButtonText","Less"),r.a.createElement(Ct.a,{fontSize:"small"})):r.a.createElement(te.a,{size:"small",style:{whiteSpace:"nowrap"},onClick:function(){e.setState({isCommandsExpanded:!0})}},t("ExpandButtonText","More"),r.a.createElement(ce.a,{fontSize:"small"})),this.state.isCommandsExpanded&&r.a.createElement(r.a.Fragment,null,r.a.createElement(te.a,{size:"small",style:{whiteSpace:"nowrap"}},"[WIP]",t("ParseButtonText","Parse"),r.a.createElement(ht.a,{fontSize:"small"})),r.a.createElement(te.a,{size:"small",style:{whiteSpace:"nowrap"}},"[WIP]",t("SearchButtonText","Search"),r.a.createElement(Le.a,{fontSize:"small"})),r.a.createElement(te.a,{size:"small",style:{whiteSpace:"nowrap"}},"[WIP]",t("RevisitButtonText","Revisit"),r.a.createElement(zt.a,{fontSize:"small"}),!1),r.a.createElement(te.a,{size:"small",style:{whiteSpace:"nowrap"}},"[WIP]",t("OrderButtonText","Order"),r.a.createElement(kt.a,{fontSize:"small"}),!1),r.a.createElement(te.a,{size:"small",style:{whiteSpace:"nowrap"}},"[WIP]",t("ModeButtonText","Mode"),r.a.createElement(dt.a,{fontSize:"small"}),!1,!1),r.a.createElement(te.a,{size:"small",style:{whiteSpace:"nowrap"}},"[WIP]",t("SavingsButtonText","Savings"),r.a.createElement(ut.a,{fontSize:"small"})),r.a.createElement(te.a,{size:"small",style:{whiteSpace:"nowrap"}},"[WIP]",t("AudioButtonText","Audio"),r.a.createElement(B.a,{fontSize:"small"}),!1),r.a.createElement(te.a,{size:"small",style:{whiteSpace:"nowrap"}},"[WIP]",t("SwotUpButtonText","SwotUp"),r.a.createElement(yt.a,{fontSize:"small"})),r.a.createElement(te.a,{size:"small",style:{whiteSpace:"nowrap"}},"[WIP]",t("SyncButtonText","Sync"),r.a.createElement(lt.a,{fontSize:"small"}),!1)),r.a.createElement(te.a,Object.assign({size:"small"},this.props.pendingCandidates.isEmpty()&&{color:"secondary",variant:"outlined"},{style:{whiteSpace:"nowrap"},onClick:function(){return e.props.showWordAdder({poiUserId:a,savingId:o})}}),t("AddWordsButtonText","Words"),r.a.createElement(De.a,{fontSize:"small"})))),r.a.createElement(at.a,Object.assign({ariaLabel:"menu",open:this.state.isMenuOpened,icon:r.a.createElement(bt.a,{fontSize:"small"})},p(this.toggleMenu),{ButtonProps:{color:"default",size:"small",style:{background:"white",margin:"8px"}}}),r.a.createElement(rt.a,{key:"share",icon:r.a.createElement(Tt.a,{fontSize:"small"}),tooltipTitle:"[WIP]"+t("ShareMenuButtonText","Share"),tooltipOpen:!0,onClick:function(){e.closeMenu(),e.navigate("/")}}),r.a.createElement(rt.a,{key:"tegami",icon:r.a.createElement(jt.a,{fontSize:"small"}),tooltipTitle:l.startsWith("ja")?"作者の手紙":t("TegamiMenuButtonText","作者の手紙"),tooltipOpen:!0,onClick:function(){e.closeMenu(),e.navigate("/tegami/")}}),r.a.createElement(rt.a,{key:"mamechishiki",icon:r.a.createElement(Et.a,null),tooltipTitle:l.startsWith("ja")?"豆知識":t("MamechishikiMenuButtonText","豆知識"),tooltipOpen:!0,onClick:function(){e.closeMenu(),e.navigate("/mamechishiki/")}}),r.a.createElement(rt.a,{key:"searchwords",icon:r.a.createElement(Le.a,null),tooltipTitle:"[WIP]"+t("SearchMenuButtonText","Search Words"),tooltipOpen:!0,onClick:function(){e.closeMenu(),e.navigate("/")}}),r.a.createElement(rt.a,{key:"addwords",icon:r.a.createElement(De.a,null),tooltipTitle:t("AddWordsMenuButtonText","Add Words"),tooltipOpen:!0,onClick:function(){e.closeMenu(),e.props.showWordAdder({poiUserId:a,savingId:o})}}),r.a.createElement(rt.a,{key:"profile",icon:r.a.createElement(xt.a,null),tooltipTitle:"[WIP]"+t("ProfileMenuButtonText","Profile, statics and settings"),tooltipOpen:!0,onClick:function(){e.closeMenu(),e.navigate("/profile/")}})))},a}(r.a.Component),Nt=Object(s.b)(function(e){Ut("CommandsBar state: ",e);var t={poiUserId:e.GoiUser.get("PoiUserId"),savingId:e.GoiSaving.get("SavingId"),saving:e.GoiSaving.get("Saving"),pendingCandidates:e.GoiTester.get("PendingCandidates"),isTyping:e.GoiTester.get("IsTyping")};return Ut("CommandsBar props: ",t),t},function(e){return{showWordAdder:function(t){var n=t.poiUserId,a=t.savingId;return e(Object(Fe.l)({poiUserId:n,savingId:a}))}}})(Object(m.b)("CommandsBar")(Qt)),Rt=n(385),Bt=n(527),Lt=n(161);var Ft=function(e){var t,n;function a(){return e.apply(this,arguments)||this}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return r.a.createElement("div",Object.assign({className:"goi-index-page"},!this.props.enableScroll&&{style:{width:"100%",height:"100%",overflow:"hidden",position:"fixed"}}),r.a.createElement(Bt.a,{xsDown:!0},r.a.createElement(o.a,null)),r.a.createElement(Bt.a,{smUp:!0},r.a.createElement("div",{style:{background:Lt.a,height:"1px"}})),r.a.createElement(Nt,null),r.a.createElement("main",null,r.a.createElement(nt,null),r.a.createElement(Rt.a,null,r.a.createElement(We,null))),r.a.createElement("div",{className:"buildVersion",style:{position:"absolute",bottom:0,right:0,color:"lightgray"}},"catfood build v1.20190813.rc1"))},a}(r.a.Component);t.default=Object(s.b)(function(e){return{enableScroll:e.Layout.get("EnableScroll")}},function(e){return{}})(Ft)}}]);
//# sourceMappingURL=component---src-pages-index-tsx-04078d17d0924fbc971d.js.map