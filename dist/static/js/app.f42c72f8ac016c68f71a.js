webpackJsonp([2],{"0KIB":function(t,e){},"6K0+":function(t,e){},"7U6+":function(t,e){},"7f3e":function(t,e){},BWWE:function(t,e){},I9j4:function(t,e){},LUHt:function(t,e){},NHnr:function(t,e,a){"use strict";function n(t){a("I9j4")}function o(t){a("7U6+")}function i(t){a("0KIB")}function l(t){a("UeJ0")}function s(t){a("aA1C")}function r(t){a("wclp")}function c(t){a("6K0+")}function u(t){a("ZAua")}function d(t){a("gZfM")}function m(t){a("WJk4")}function p(t){a("j22a")}function f(t){a("7f3e")}function _(t){a("eks8")}function v(t){a("lEgr")}function h(t){a("LUHt")}function x(t){return new(y.a.extend(Sa))({el:document.createElement("div"),propsData:t})}function g(t){return new(y.a.extend(Pa))({el:document.createElement("div"),propsData:t})}Object.defineProperty(e,"__esModule",{value:!0});var y=a("qRXP"),b={name:"app"},C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{attrs:{id:"aside"}}),t._v(" "),a("div",{attrs:{id:"demo-wrap"}},[a("router-view")],1)])},k=[],V={render:C,staticRenderFns:k},w=V,S=a("/Xao"),$=n,B=S(b,w,!1,$,null,null),F=B.exports,A=a("zO6J");y.a.use(A.a);var E=new A.a({routes:[{path:"/",name:"home",component:function(t){a.e(0).then(function(){var e=[a("26dS")];t.apply(null,e)}.bind(this)).catch(a.oe)}}]}),N=a("4YfN"),R=a.n(N),T=(a("BWWE"),{name:"xm-button",props:{type:{type:String,default:"default"},long:Boolean,loading:{type:Boolean,default:!1},noRadius:{type:Boolean,default:!1},bgColor:{type:String,default:""},borderColor:{type:String,default:""},icon:{type:String,default:""},color:{type:String,default:""},block:Boolean,disabled:Boolean,plain:Boolean,round:Boolean},methods:{handleClick:function(t){this.disabled||this.$emit("click",t)}},computed:{iconClass:function(){if(""!==this.icon)return"xm__hasIconBtn"}}}),X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"xm__btn",class:["xm__btn--"+t.type,{"is-plain":t.plain,"is-round":t.round,"is-long":t.long,"xm__btn--block":t.block,"no-radius":t.noRadius},t.iconClass],style:{backgroundColor:t.bgColor,color:t.color,"border-color":t.borderColor},attrs:{disabled:t.disabled},on:{click:t.handleClick}},[t.icon?a("i",{class:t.icon}):t._e(),t._v(" "),t.loading&&!t.icon?a("i",{staticClass:"xm__icon--loading"}):t._e(),t._v(" "),t._t("default")],2)},I=[],P={render:X,staticRenderFns:I},z=P,D=a("/Xao"),W=o,J=D(T,z,!1,W,"data-v-25bcb4dc",null),M=J.exports,U={name:"xm-button-group"},j=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"xm__btn--group"},[t._t("default")],2)},H=[],K={render:j,staticRenderFns:H},L=K,Z=a("/Xao"),O=i,q=Z(U,L,!1,O,"data-v-18864921",null),Y=q.exports,G={name:"xm-tag",props:{type:{type:String,default:"default"},bgColor:{type:String,default:""},borderColor:{type:String,default:""},color:{type:String,default:""},round:Boolean,closable:{type:Boolean,default:!1}},methods:{closeAction:function(){this.$emit("close")}}},Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"xm__tag",class:["xm__tag--"+t.type,{"is-round":t.round}],style:{backgroundColor:t.bgColor,color:t.color,"border-color":t.borderColor}},[a("span",[t._t("default")],2),t._v(" "),t.closable?a("i",{staticClass:"xm__icon--close xm__tag--close",on:{click:t.closeAction}}):t._e()])},tt=[],et={render:Q,staticRenderFns:tt},at=et,nt=a("/Xao"),ot=l,it=nt(G,at,!1,ot,"data-v-2fc9556c",null),lt=it.exports,st=lt,rt={name:"xm-loadmore",props:{color:{type:String,default:""},icon:{type:Boolean,default:!1},noData:{type:Boolean,default:!1}},methods:{loadMoreAction:function(){this.$emit("action")}}},ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"xm__loadMore",class:[{"xm__loadmore--line is-no-data":t.noData}],style:{color:t.color},on:{click:t.loadMoreAction}},[t.icon&&!t.noData?a("i",{staticClass:"xm__icon--loading"}):t._e(),t._v(" "),a("span",{staticClass:"xm__loadmore--tips"},[t._t("default",[t._v("加载更多")])],2)])},ut=[],dt={render:ct,staticRenderFns:ut},mt=dt,pt=a("/Xao"),ft=s,_t=pt(rt,mt,!1,ft,"data-v-42604cae",null),vt=_t.exports,ht=vt,xt={name:"xm-search",props:{placeholder:{type:String,default:"请输入搜索关键字"},value:{type:String,default:""},bgColor:{type:String,default:""},borderColor:{type:String,default:""},actionTextColor:{type:String,default:""},showAction:{type:Boolean,default:!1}},data:function(){return{isFocus:!1}},methods:{onSearch:function(t){return t.preventDefault(),this.$emit("action",this.value),!1},onInput:function(t){this.$emit("input",t.target.value)},onFocus:function(){this.isFocus=!0,this.$emit("focus")},onBlur:function(){this.isFocus=!1,this.$emit("blur")}}},gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"xm__search",style:{"background-color":t.bgColor}},[a("div",{staticClass:"xm__search--input--wrap"},[a("i",{staticClass:"xm__icon xm__icon--search"}),t._v(" "),a("input",{staticClass:"xm__search--input",attrs:{type:"search",placeholder:t.placeholder},domProps:{value:t.value},on:{input:t.onInput,keypress:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;e.preventDefault(),t.onSearch(e)},focus:t.onFocus,blur:t.onBlur}}),t._v(" "),a("i",{staticClass:"xm__icon xm__icon--clear",staticStyle:{display:"none"}})]),t._v(" "),t.onSearch?a("div",{staticClass:"xm__search--action"},[a("div",{staticClass:"xm__search--action--text",style:{color:t.actionTextColor},on:{click:t.onSearch}},[t._t("default",[t._v("搜索")])],2)]):t._e()])},yt=[],bt={render:gt,staticRenderFns:yt},Ct=bt,kt=a("/Xao"),Vt=r,wt=kt(xt,Ct,!1,Vt,"data-v-568b1e2c",null),St=wt.exports,$t=St,Bt={name:"xm-loading",props:{color:{type:String,default:""},width:{type:String,default:""},height:{type:String,default:""},borderWidth:{type:String,default:""},fullScreen:{type:Boolean,default:!1},hasText:{type:Boolean,default:!1},vertical:{type:Boolean,default:!1}}},Ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"modal-fade"}},[a("div",{staticClass:"xm__loading--wrap"},[t.fullScreen?a("div",{staticClass:"xm__mask"}):t._e(),t._v(" "),a("div",{staticClass:"xm__loading",class:[{"xm__loading--fullScreen":t.fullScreen}]},[a("span",{staticClass:"xm__loading--loader",class:[{"xm__loading--vertical":t.vertical,borderRightTransparent:t.color}],style:{width:t.width+"px",height:t.height+"px","border-color":t.color,"border-width":t.borderWidth+"px"}}),t._v(" "),t.hasText?a("span",{staticClass:"xm__loading--text"},[t._t("default",[t._v("加载中...")])],2):t._e()])])])},At=[],Et={render:Ft,staticRenderFns:At},Nt=Et,Rt=a("/Xao"),Tt=c,Xt=Rt(Bt,Nt,!1,Tt,"data-v-4fbbd05b",null),It=Xt.exports,Pt=It,zt={name:"xm-step",props:{step:{type:Number,default:0},stepList:{type:Array,default:function(){}},direction:{type:String,default:"horizontal"}},data:function(){return{nowStep:""}}},Dt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"xm__steps xm__steps--horizontal"},[a("div",{staticClass:"xm__steps--items"},t._l(t.stepList,function(e,n){return a("div",{staticClass:"xm__step",class:["xm__step--"+t.direction,{"xm__step--process":t.step==n,"xm__step--finish":t.step>n}],attrs:{stepItem:e}},[a("div",{staticClass:"xm__step--circle-container"},[n==t.step?a("i",{staticClass:"xm__icon--checked"}):a("i",{staticClass:"xm__step--circle"})]),t._v(" "),a("div",{staticClass:"xm__step--title"},[t._v("\n        "+t._s(e)+"\n      ")]),t._v(" "),a("div",{staticClass:"xm__step--line"})])}))])},Wt=[],Jt={render:Dt,staticRenderFns:Wt},Mt=Jt,Ut=a("/Xao"),jt=u,Ht=Ut(zt,Mt,!1,jt,"data-v-d293a396",null),Kt=Ht.exports,Lt=Kt,Zt={name:"xm-input",props:{name:String,placeholder:String,value:[String,Number],readonly:Boolean,disabled:Boolean,autocomplete:{type:String,default:"off"},type:{type:String,default:"text"},max:{validator:function(t){return/^\d*$/.test(t)}},right:{type:Boolean,default:!1}},data:function(){return{currentValue:this.value}},watch:{value:function(t){this.currentValue=t},currentValue:function(t){this.$emit("input",t)}},methods:{onBlur:function(t){this.$emit("blur",t.target.value)},onFocus:function(){this.$emit("focus")}}},Ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"xm__input"},["text"==t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",class:[{"is-right":t.right}],attrs:{type:"text",name:t.name,maxlength:t.max,placeholder:t.placeholder,autocomplete:t.autocomplete,readonly:t.readonly,disabled:t.disabled},domProps:{value:t.currentValue},on:{focus:t.onFocus,blur:t.onBlur,input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}):t._e(),t._v(" "),"search"==t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",class:[{"is-right":t.right}],attrs:{type:"search",name:t.name,maxlength:t.max,placeholder:t.placeholder,autocomplete:t.autocomplete,readonly:t.readonly,disabled:t.disabled},domProps:{value:t.currentValue},on:{focus:t.onFocus,blur:t.onBlur,input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}):t._e(),t._v(" "),"password"==t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",class:[{"is-right":t.right}],attrs:{type:"password",name:t.name,maxlength:t.max,placeholder:t.placeholder,autocomplete:t.autocomplete,readonly:t.readonly,disabled:t.disabled},domProps:{value:t.currentValue},on:{focus:t.onFocus,blur:t.onBlur,input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}):t._e(),t._v(" "),"number"==t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",class:[{"is-right":t.right}],attrs:{type:"number",name:t.name,maxlength:t.max,placeholder:t.placeholder,autocomplete:t.autocomplete,readonly:t.readonly,disabled:t.disabled},domProps:{value:t.currentValue},on:{focus:t.onFocus,blur:t.onBlur,input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}):t._e(),t._v(" "),"email"==t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",class:[{"is-right":t.right}],attrs:{type:"email",name:t.name,maxlength:t.max,placeholder:t.placeholder,autocomplete:t.autocomplete,readonly:t.readonly,disabled:t.disabled},domProps:{value:t.currentValue},on:{focus:t.onFocus,blur:t.onBlur,input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}):t._e(),t._v(" "),"tel"==t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",class:[{"is-right":t.right}],attrs:{type:"tel",pattern:"[0-9]*",name:t.name,maxlength:"11",placeholder:t.placeholder,autocomplete:t.autocomplete,readonly:t.readonly,disabled:t.disabled},domProps:{value:t.currentValue},on:{focus:t.onFocus,blur:t.onBlur,input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}):t._e(),t._v(" "),"datetime-local"==t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",class:[{"is-right":t.right}],attrs:{type:"datetime-local",name:t.name,maxlength:t.max,placeholder:t.placeholder,autocomplete:t.autocomplete,readonly:t.readonly,disabled:t.disabled},domProps:{value:t.currentValue},on:{focus:t.onFocus,blur:t.onBlur,input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}):t._e(),t._v(" "),"date"==t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",class:[{"is-right":t.right}],attrs:{type:"date",name:t.name,maxlength:t.max,placeholder:t.placeholder,autocomplete:t.autocomplete,readonly:t.readonly,disabled:t.disabled},domProps:{value:t.currentValue},on:{focus:t.onFocus,blur:t.onBlur,input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}):t._e(),t._v(" "),"time"==t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",class:[{"is-right":t.right}],attrs:{type:"time",name:t.name,maxlength:t.max,placeholder:t.placeholder,autocomplete:t.autocomplete,readonly:t.readonly,disabled:t.disabled},domProps:{value:t.currentValue},on:{focus:t.onFocus,blur:t.onBlur,input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}):t._e()])},qt=[],Yt={render:Ot,staticRenderFns:qt},Gt=Yt,Qt=a("/Xao"),te=d,ee=Qt(Zt,Gt,!1,te,"data-v-70131d0c",null),ae=ee.exports,ne=ae,oe={name:"xm-textarea",props:{placeholder:String,value:{type:String},max:{validator:function(t){return!t||/^(([1-9]\d*)|0)$/.test(t)}}},data:function(){return{strVal:""}},watch:{value:function(t){this.strVal=t},strVal:function(t){this.$emit("input",t)}},mounted:function(){var t=this;this.$nextTick(function(){var e=t.value;e&&(t.strVal=e.length>t.max?e.substr(e,t.max):e)})}},ie=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"xm__textarea"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.strVal,expression:"strVal"}],attrs:{placeholder:t.placeholder,maxlength:t.max},domProps:{value:t.strVal},on:{input:function(e){e.target.composing||(t.strVal=e.target.value)}}})])},le=[],se={render:ie,staticRenderFns:le},re=se,ce=a("/Xao"),ue=m,de=ce(oe,re,!1,ue,"data-v-ada68e20",null),me=de.exports,pe=me,fe={name:"xm-select",props:{data:[Array],right:{type:Boolean,default:!1}},data:function(){return{selectVal:0}},watch:{selectVal:function(t){this.$emit("change",t)}}},_e=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"xm__select"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectVal,expression:"selectVal"}],class:[{"is-right":t.right}],on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.selectVal=e.target.multiple?a:a[0]}}},t._l(t.data,function(e){return a("option",{domProps:{value:e.value}},[t._v(t._s(e.name))])}))])},ve=[],he={render:_e,staticRenderFns:ve},xe=he,ge=a("/Xao"),ye=p,be=ge(fe,xe,!1,ye,"data-v-4576f646",null),Ce=be.exports,ke=Ce,Ve={name:"xm-switch",props:{value:[String,Number,Boolean],disabled:{type:Boolean,default:!1}},data:function(){return{checked:this.value}},watch:{checked:function(t){this.$emit("input",t)},value:function(t){this.checked=t}}},we=function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"model",rawName:"v-model",value:t.checked,expression:"checked"}],staticClass:"xm__switch",attrs:{type:"checkbox",disabled:t.disabled},domProps:{checked:Array.isArray(t.checked)?t._i(t.checked,null)>-1:t.checked},on:{change:function(e){var a=t.checked,n=e.target,o=!!n.checked;if(Array.isArray(a)){var i=t._i(a,null);n.checked?i<0&&(t.checked=a.concat([null])):i>-1&&(t.checked=a.slice(0,i).concat(a.slice(i+1)))}else t.checked=o}}})},Se=[],$e={render:we,staticRenderFns:Se},Be=$e,Fe=a("/Xao"),Ae=f,Ee=Fe(Ve,Be,!1,Ae,"data-v-41e72800",null),Ne=Ee.exports,Re=Ne,Te={name:"xm-modal",props:{type:{type:String,default:"default"},visible:{type:Boolean,default:!1},dialogTitle:{type:String,default:""},zIndex:{type:Number,default:""},color:{type:String,default:""},maskClosable:{type:Boolean,default:!0}},data:function(){return{isVisible:!1}},methods:{active:function(){this.isVisible=!0},close:function(){this.$emit("close")},confirm:function(){this.$emit("confirm")},maskClose:function(){this.maskClosable&&this.close()}},watch:{visible:function(t){this.isVisible=t}},mounted:function(){var t=this;this.$nextTick(function(){document.body.appendChild(t.$el),t.isVisible&&t.active()})},beforeDestroy:function(){this.$el.remove()}},Xe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[t.isVisible?a("div",{ref:"modal",staticClass:"xm__dialog--wrap"},[a("div",{staticClass:"xm__mask",on:{click:t.maskClose}}),t._v(" "),a("div",{staticClass:"xm__dialog",style:{"z-index":t.zIndex}},[a("div",{staticClass:"xm__dialog--hd"},[t.dialogTitle?a("strong",{staticClass:"xm__dialog--title"},[t._v(t._s(t.dialogTitle))]):t._e()]),t._v(" "),a("div",{staticClass:"xm__dialog--bd"},[t._t("default")],2),t._v(" "),a("div",{staticClass:"xm__dialog--ft"},[t.type&&"alert"==t.type?a("div",[a("xm-button",{style:{color:t.color},attrs:{long:""},on:{click:t.confirm}},[t._v("确定")])],1):t.type&&"confirm"==t.type?a("div",[a("xm-button-group",{staticClass:"xm__btn--group"},[a("xm-button",{on:{click:t.close}},[t._v("取消")]),t._v(" "),a("xm-button",{style:{color:t.color},on:{click:t.confirm}},[t._v("确定")])],1)],1):a("div",[a("xm-button",{style:{color:t.color},attrs:{long:""},on:{click:t.confirm}},[t._v("确定")])],1)])])]):t._e()])},Ie=[],Pe={render:Xe,staticRenderFns:Ie},ze=Pe,De=a("/Xao"),We=_,Je=De(Te,ze,!1,We,"data-v-26f35e0c",null),Me=Je.exports,Ue={name:"xm-sp-modal",props:{visible:{type:Boolean,default:!1},zIndex:{type:Number,default:""},maskClosable:{type:Boolean,default:!0}},data:function(){return{isVisible:!1}},methods:{active:function(){this.isVisible=!0},close:function(){this.$emit("close")},maskClose:function(){this.maskClosable&&this.close()}},watch:{visible:function(t){this.isVisible=t}},mounted:function(){var t=this;this.$nextTick(function(){document.body.appendChild(t.$el),t.isVisible&&t.active()})},beforeDestroy:function(){this.$el.remove()}},je=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[t.isVisible?a("div",{ref:"modal",staticClass:"xm__dialog--wrap"},[a("div",{staticClass:"xm__mask",on:{click:t.maskClose}}),t._v(" "),a("div",{staticClass:"xm__dialog xm__dialog--special",style:{"z-index":t.zIndex}},[a("div",{staticClass:"xm__dialog--bd"},[t._t("default")],2),t._v(" "),a("div",{staticClass:"xm__dialog--ft"},[a("div",[a("xm-button",{on:{click:t.close}},[a("i",{staticClass:"xm__icon--close"})])],1)])])]):t._e()])},He=[],Ke={render:je,staticRenderFns:He},Le=Ke,Ze=a("/Xao"),Oe=v,qe=Ze(Ue,Le,!1,Oe,"data-v-35077d1a",null),Ye=qe.exports,Ge={name:"xm-cell-item",props:{type:{type:String,default:""},href:{type:String,default:""},bgColor:{type:String,default:""},borderColor:{type:String,default:""},color:{type:String,default:""},round:Boolean,icon:{type:String,default:""}},computed:{iconClass:function(){if(""!==this.icon)return this.icon}}},Qe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"xm__cell--item"},[a("div",{staticClass:"xm__cell--left"},[t._t("leftIcon"),t._v(" "),t._t("left")],2),t._v(" "),"link"==t.type?a("a",{staticClass:"xm__cell--right",attrs:{href:t.href}},[t._t("right"),t._v(" "),t._t("rightIcon")],2):a("div",{staticClass:"xm__cell--right"},[t._t("right"),t._v(" "),t._t("rightIcon")],2)])},ta=[],ea={render:Qe,staticRenderFns:ta},aa=ea,na=a("/Xao"),oa=h,ia=na(Ge,aa,!1,oa,"data-v-5a630f5d",null),la=ia.exports,sa={name:"xm-cell-group",props:{title:String}},ra=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"xm__cell--box"},[t._t("top"),t._v(" "),a("div",{staticClass:"xm__cell"},[t.title?a("div",{staticClass:"xm__cell--title"},[t._v(t._s(t.title))]):t._e(),t._v(" "),t._t("default")],2),t._v(" "),t._t("bottom")],2)},ca=[],ua={render:ra,staticRenderFns:ca},da=ua,ma=a("/Xao"),pa=ma(sa,da,!1,null,null,null),fa=pa.exports,_a=a("aA9S"),va=a.n(_a),ha={props:{isVisible:{type:Boolean,default:!1}},data:function(){return{isActive:!1}},methods:{active:function(){this.isActive=!0},close:function(){this.$emit("close"),this.isActive=!1}},watch:{isVisible:function(t){this.isActive=t}},mounted:function(){var t=this;this.$nextTick(function(){document.body.appendChild(t.$el),t.isVisible&&t.active()})},beforeDestroy:function(){this.$el.remove()}},xa=ha,ga={mixins:[xa],props:{type:{type:String,default:"default"},title:{type:String,default:""},color:{type:String,default:""},maskClosable:{type:Boolean,default:!0},content:String,autoClose:{type:Boolean,default:!1},callBack:{type:Function,default:function(){}}},methods:{close:function(){this.$emit("close"),this.isVisible=!1,this.destroyed()},confirm:function(){this.$emit("confirm"),this.isVisible=!1,this.callBack(),this.destroyed()},maskClose:function(){this.maskClosable&&this.close()},destroyed:function(){var t=this;setTimeout(function(){t.$destroy()},200)}},mounted:function(){var t=this;setTimeout(function(){t.isVisible=!0},100),this.autoClose&&setTimeout(function(){t.close()},3e3)}},ya=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isVisible,expression:"isVisible"}],ref:"modal",staticClass:"xm__dialog--wrap"},[a("div",{staticClass:"xm__mask",on:{click:t.maskClose}}),t._v(" "),a("div",{staticClass:"xm__dialog"},[a("div",{staticClass:"xm__dialog--hd"},[t.title?a("strong",{staticClass:"xm__dialog--title"},[t._v(t._s(t.title))]):t._e()]),t._v(" "),a("div",{staticClass:"xm__dialog--bd"},[t._v("\n        "+t._s(t.content)+"\n      ")]),t._v(" "),a("div",{staticClass:"xm__dialog--ft"},[t.type&&"alert"==t.type?a("div",[a("xm-button",{style:{color:t.color},attrs:{long:""},on:{click:t.confirm}},[t._v("确定")])],1):t.type&&"confirm"==t.type?a("div",[a("xm-button-group",{staticClass:"xm__btn--group"},[a("xm-button",{on:{click:t.close}},[t._v("取消")]),t._v(" "),a("xm-button",{style:{color:t.color},on:{click:t.confirm}},[t._v("确定")])],1)],1):a("div",[a("xm-button",{style:{color:t.color},attrs:{long:""},on:{click:t.confirm}},[t._v("确定")])],1)])])])])},ba=[],Ca={render:ya,staticRenderFns:ba},ka=Ca,Va=a("/Xao"),wa=Va(ga,ka,!1,null,null,null),Sa=wa.exports,$a={confirm:function(t){var e={content:"",type:"confirm",maskClosable:!0,callBack:function(){}};return x(va()(e,t))},alert:function(t){var e={content:"",type:"alert",maskClosable:!0,autoClose:!1,callBack:function(){}};return x(va()(e,t))}},Ba={props:{isVisible:{type:Boolean,default:!1}},data:function(){return{isActive:!1}},methods:{active:function(){this.isActive=!0}},watch:{isVisible:function(t){this.isActive=t}},mounted:function(){var t=this;this.$nextTick(function(){document.body.appendChild(t.$el),t.isVisible&&t.active()})},beforeDestroy:function(){this.$el.remove()}},Fa=Ba,Aa={mixins:[Fa],props:{content:String,autoClose:{type:Boolean,default:!0},mask:{type:Boolean,default:!1},callBack:{type:Function,default:function(){}},type:{type:String,default:""},direction:{type:String,default:""}},methods:{close:function(){this.$emit("close"),this.isVisible=!1}},mounted:function(){var t=this;setTimeout(function(){t.isVisible=!0},100),this.autoClose&&setTimeout(function(){t.close(),setTimeout(function(){t.$destroy()},200)},3e3)},computed:{classz:function(){return this.type?"xm__toast--loading":"xm__toast--text"},directions:function(){return"top"===this.direction?"top:20%":"bottom"===this.direction?"top:80%":"top:50%"}}},Ea=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isVisible,expression:"isVisible"}],ref:"toast",staticClass:"xm__toast--wrap"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.mask,expression:"mask"}],staticClass:"xm__mask"}),t._v(" "),a("div",{staticClass:"xm__toast",class:t.classz,style:t.directions},[t.type&&"default"==t.type?a("div",{staticClass:" xm__toast--loading"},[a("xm-loading",{attrs:{width:"42",height:"42","border-width":"8",color:"#efefef"}})],1):a("div",[t._v("\n        "+t._s(t.content)+"\n      ")])])])])},Na=[],Ra={render:Ea,staticRenderFns:Na},Ta=Ra,Xa=a("/Xao"),Ia=Xa(Aa,Ta,!1,null,null,null),Pa=Ia.exports,za={text:function(t){var e={content:"",mask:!1,direction:"",callBack:function(){}};return g(va()(e,t))},loading:function(t){var e={content:"",type:"default",mask:!0,callBack:function(){}};return g(va()(e,t))}},Da=[M,Y,st,ht,$t,Me,Ye,Pt,Lt,ne,pe,ke,Re,la,fa],Wa=function t(e){t.installed||(Da.map(function(t){return e.component(t.name,t)}),e.prototype.$modal=$a,e.prototype.$toast=za)};"undefined"!=typeof window&&window.Vue&&Wa(window.Vue);var Ja=R()({install:Wa},Da),Ma=Ja;y.a.use(Ma),y.a.config.productionTip=!1,new y.a({el:"#app",router:E,template:"<App/>",components:{App:F}})},UeJ0:function(t,e){},WJk4:function(t,e){},ZAua:function(t,e){},aA1C:function(t,e){},eks8:function(t,e){},gZfM:function(t,e){},j22a:function(t,e){},lEgr:function(t,e){},wclp:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f42c72f8ac016c68f71a.js.map