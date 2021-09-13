/*! For license information please see 803375217ba26e853fc6.js.LICENSE.txt */
"use strict";(globalThis.webpackChunkreact_data_grid=globalThis.webpackChunkreact_data_grid||[]).push([[762],{38698:(e,t,r)=>{var n=r(27418),o=r(67294);function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=60106,l=60107,u=60108,s=60114,c=60109,f=60110,h=60112,p=60113,d=60120,y=60115,m=60116,v=60121,w=60117,x=60119,g=60129,k=60131;if("function"==typeof Symbol&&Symbol.for){var b=Symbol.for;a=b("react.portal"),l=b("react.fragment"),u=b("react.strict_mode"),s=b("react.profiler"),c=b("react.provider"),f=b("react.context"),h=b("react.forward_ref"),p=b("react.suspense"),d=b("react.suspense_list"),y=b("react.memo"),m=b("react.lazy"),v=b("react.block"),w=b("react.fundamental"),x=b("react.scope"),g=b("react.debug_trace_mode"),k=b("react.legacy_hidden")}function S(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case l:return"Fragment";case a:return"Portal";case s:return"Profiler";case u:return"StrictMode";case p:return"Suspense";case d:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case f:return(e.displayName||"Context")+".Consumer";case c:return(e._context.displayName||"Context")+".Provider";case h:var t=e.render;return t=t.displayName||t.name||"",e.displayName||(""!==t?"ForwardRef("+t+")":"ForwardRef");case y:return S(e.type);case v:return S(e._render);case m:t=e._payload,e=e._init;try{return S(e(t))}catch(e){}}return null}var E=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,F={};function C(e,t){for(var r=0|e._threadCount;r<=t;r++)e[r]=e._currentValue2,e._threadCount=r+1}for(var I=new Uint16Array(16),D=0;15>D;D++)I[D]=D+1;I[15]=0;var _=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,N=Object.prototype.hasOwnProperty,O={},M={};function P(e){return!!N.call(M,e)||!N.call(O,e)&&(_.test(e)?M[e]=!0:(O[e]=!0,!1))}function z(e,t,r,n,o,i,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var T={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){T[e]=new z(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];T[t]=new z(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){T[e]=new z(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){T[e]=new z(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){T[e]=new z(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){T[e]=new z(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){T[e]=new z(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){T[e]=new z(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){T[e]=new z(e,5,!1,e.toLowerCase(),null,!1,!1)}));var L=/[\-:]([a-z])/g;function R(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(L,R);T[t]=new z(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(L,R);T[t]=new z(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(L,R);T[t]=new z(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){T[e]=new z(e,1,!1,e.toLowerCase(),null,!1,!1)})),T.xlinkHref=new z("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){T[e]=new z(e,1,!1,e.toLowerCase(),null,!0,!0)}));var V=/["'&<>]/;function A(e){if("boolean"==typeof e||"number"==typeof e)return""+e;e=""+e;var t=V.exec(e);if(t){var r,n="",o=0;for(r=t.index;r<e.length;r++){switch(e.charCodeAt(r)){case 34:t="&quot;";break;case 38:t="&amp;";break;case 39:t="&#x27;";break;case 60:t="&lt;";break;case 62:t="&gt;";break;default:continue}o!==r&&(n+=e.substring(o,r)),o=r+1,n+=t}e=o!==r?n+e.substring(o,r):n}return e}function W(e,t){var r,n=T.hasOwnProperty(e)?T[e]:null;return(r="style"!==e)&&(r=null!==n?0===n.type:2<e.length&&("o"===e[0]||"O"===e[0])&&("n"===e[1]||"N"===e[1])),r||function(e,t,r,n){if(null==t||function(e,t,r,n){if(null!==r&&0===r.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return null!==r?!r.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e;default:return!1}}(e,t,r))return!0;if(null!==r)switch(r.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(e,t,n)?"":null!==n?(e=n.attributeName,3===(r=n.type)||4===r&&!0===t?e+'=""':(n.sanitizeURL&&(t=""+t),e+'="'+A(t)+'"')):P(e)?e+'="'+A(t)+'"':""}var j="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},U=null,q=null,H=null,$=!1,Z=!1,B=null,G=0;function X(){if(null===U)throw Error(i(321));return U}function Y(){if(0<G)throw Error(i(312));return{memoizedState:null,queue:null,next:null}}function J(){return null===H?null===q?($=!1,q=H=Y()):($=!0,H=q):null===H.next?($=!1,H=H.next=Y()):($=!0,H=H.next),H}function K(e,t,r,n){for(;Z;)Z=!1,G+=1,H=null,r=e(t,n);return Q(),r}function Q(){U=null,Z=!1,q=null,G=0,H=B=null}function ee(e,t){return"function"==typeof t?t(e):t}function te(e,t,r){if(U=X(),H=J(),$){var n=H.queue;if(t=n.dispatch,null!==B&&void 0!==(r=B.get(n))){B.delete(n),n=H.memoizedState;do{n=e(n,r.action),r=r.next}while(null!==r);return H.memoizedState=n,[n,t]}return[H.memoizedState,t]}return e=e===ee?"function"==typeof t?t():t:void 0!==r?r(t):t,H.memoizedState=e,e=(e=H.queue={last:null,dispatch:null}).dispatch=ne.bind(null,U,e),[H.memoizedState,e]}function re(e,t){if(U=X(),t=void 0===t?null:t,null!==(H=J())){var r=H.memoizedState;if(null!==r&&null!==t){var n=r[1];e:if(null===n)n=!1;else{for(var o=0;o<n.length&&o<t.length;o++)if(!j(t[o],n[o])){n=!1;break e}n=!0}if(n)return r[0]}}return e=e(),H.memoizedState=[e,t],e}function ne(e,t,r){if(!(25>G))throw Error(i(301));if(e===U)if(Z=!0,e={action:r,next:null},null===B&&(B=new Map),void 0===(r=B.get(t)))B.set(t,e);else{for(t=r;null!==t.next;)t=t.next;t.next=e}}function oe(){}var ie=null,ae={readContext:function(e){var t=ie.threadID;return C(e,t),e[t]},useContext:function(e){X();var t=ie.threadID;return C(e,t),e[t]},useMemo:re,useReducer:te,useRef:function(e){U=X();var t=(H=J()).memoizedState;return null===t?(e={current:e},H.memoizedState=e):t},useState:function(e){return te(ee,e)},useLayoutEffect:function(){},useCallback:function(e,t){return re((function(){return e}),t)},useImperativeHandle:oe,useEffect:oe,useDebugValue:oe,useDeferredValue:function(e){return X(),e},useTransition:function(){return X(),[function(e){e()},!1]},useOpaqueIdentifier:function(){return(ie.identifierPrefix||"")+"R:"+(ie.uniqueID++).toString(36)},useMutableSource:function(e,t){return X(),t(e._source)}},le="http://www.w3.org/1999/xhtml";function ue(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}var se={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},ce=n({menuitem:!0},se),fe={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];Object.keys(fe).forEach((function(e){he.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fe[t]=fe[e]}))}));var pe=/([A-Z])/g,de=/^ms-/,ye=o.Children.toArray,me=E.ReactCurrentDispatcher,ve={listing:!0,pre:!0,textarea:!0},we=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,xe={},ge={},ke=Object.prototype.hasOwnProperty,be={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null};function Se(e,t){if(void 0===e)throw Error(i(152,S(t)||"Component"))}var Ee=function(){function e(e,t,r){o.isValidElement(e)?e.type!==l?e=[e]:(e=e.props.children,e=o.isValidElement(e)?[e]:ye(e)):e=ye(e),e={type:null,domNamespace:le,children:e,childIndex:0,context:F,footer:""};var n=I[0];if(0===n){var a=I,u=2*(n=a.length);if(!(65536>=u))throw Error(i(304));var s=new Uint16Array(u);for(s.set(a),(I=s)[0]=n+1,a=n;a<u-1;a++)I[a]=a+1;I[u-1]=0}else I[0]=I[n];this.threadID=n,this.stack=[e],this.exhausted=!1,this.currentSelectValue=null,this.previousWasTextNode=!1,this.makeStaticMarkup=t,this.suspenseDepth=0,this.contextIndex=-1,this.contextStack=[],this.contextValueStack=[],this.uniqueID=0,this.identifierPrefix=r&&r.identifierPrefix||""}var t=e.prototype;return t.destroy=function(){if(!this.exhausted){this.exhausted=!0,this.clearProviders();var e=this.threadID;I[e]=I[0],I[0]=e}},t.pushProvider=function(e){var t=++this.contextIndex,r=e.type._context,n=this.threadID;C(r,n);var o=r[n];this.contextStack[t]=r,this.contextValueStack[t]=o,r[n]=e.props.value},t.popProvider=function(){var e=this.contextIndex,t=this.contextStack[e],r=this.contextValueStack[e];this.contextStack[e]=null,this.contextValueStack[e]=null,this.contextIndex--,t[this.threadID]=r},t.clearProviders=function(){for(var e=this.contextIndex;0<=e;e--)this.contextStack[e][this.threadID]=this.contextValueStack[e]},t.read=function(e){if(this.exhausted)return null;var t=ie;ie=this;var r=me.current;me.current=ae;try{for(var n=[""],o=!1;n[0].length<e;){if(0===this.stack.length){this.exhausted=!0;var a=this.threadID;I[a]=I[0],I[0]=a;break}var l=this.stack[this.stack.length-1];if(o||l.childIndex>=l.children.length){var u=l.footer;if(""!==u&&(this.previousWasTextNode=!1),this.stack.pop(),"select"===l.type)this.currentSelectValue=null;else if(null!=l.type&&null!=l.type.type&&l.type.type.$$typeof===c)this.popProvider(l.type);else if(l.type===p){this.suspenseDepth--;var s=n.pop();if(o){o=!1;var f=l.fallbackFrame;if(!f)throw Error(i(303));this.stack.push(f),n[this.suspenseDepth]+="\x3c!--$!--\x3e";continue}n[this.suspenseDepth]+=s}n[this.suspenseDepth]+=u}else{var h=l.children[l.childIndex++],d="";try{d+=this.render(h,l.context,l.domNamespace)}catch(e){if(null!=e&&"function"==typeof e.then)throw Error(i(294));throw e}n.length<=this.suspenseDepth&&n.push(""),n[this.suspenseDepth]+=d}}return n[0]}finally{me.current=r,ie=t,Q()}},t.render=function(e,t,r){if("string"==typeof e||"number"==typeof e)return""==(r=""+e)?"":this.makeStaticMarkup?A(r):this.previousWasTextNode?"\x3c!-- --\x3e"+A(r):(this.previousWasTextNode=!0,A(r));if(e=(t=function(e,t,r){function a(o,a){var l=a.prototype&&a.prototype.isReactComponent,u=function(e,t,r,n){if(n&&"object"==typeof(n=e.contextType)&&null!==n)return C(n,r),n[r];if(e=e.contextTypes){for(var o in r={},e)r[o]=t[o];t=r}else t=F;return t}(a,t,r,l),s=[],c=!1,f={isMounted:function(){return!1},enqueueForceUpdate:function(){if(null===s)return null},enqueueReplaceState:function(e,t){c=!0,s=[t]},enqueueSetState:function(e,t){if(null===s)return null;s.push(t)}};if(l){if(l=new a(o.props,u,f),"function"==typeof a.getDerivedStateFromProps){var h=a.getDerivedStateFromProps.call(null,o.props,l.state);null!=h&&(l.state=n({},l.state,h))}}else if(U={},l=a(o.props,u,f),null==(l=K(a,o.props,l,u))||null==l.render)return void Se(e=l,a);if(l.props=o.props,l.context=u,l.updater=f,void 0===(f=l.state)&&(l.state=f=null),"function"==typeof l.UNSAFE_componentWillMount||"function"==typeof l.componentWillMount)if("function"==typeof l.componentWillMount&&"function"!=typeof a.getDerivedStateFromProps&&l.componentWillMount(),"function"==typeof l.UNSAFE_componentWillMount&&"function"!=typeof a.getDerivedStateFromProps&&l.UNSAFE_componentWillMount(),s.length){f=s;var p=c;if(s=null,c=!1,p&&1===f.length)l.state=f[0];else{h=p?f[0]:l.state;var d=!0;for(p=p?1:0;p<f.length;p++){var y=f[p];null!=(y="function"==typeof y?y.call(l,h,o.props,u):y)&&(d?(d=!1,h=n({},h,y)):n(h,y))}l.state=h}}else s=null;if(Se(e=l.render(),a),"function"==typeof l.getChildContext&&"object"==typeof(o=a.childContextTypes)){var m=l.getChildContext();for(var v in m)if(!(v in o))throw Error(i(108,S(a)||"Unknown",v))}m&&(t=n({},t,m))}for(;o.isValidElement(e);){var l=e,u=l.type;if("function"!=typeof u)break;a(l,u)}return{child:e,context:t}}(e,t,this.threadID)).child,t=t.context,null===e||!1===e)return"";if(!o.isValidElement(e)){if(null!=e&&null!=e.$$typeof){if((r=e.$$typeof)===a)throw Error(i(257));throw Error(i(258,r.toString()))}return e=ye(e),this.stack.push({type:null,domNamespace:r,children:e,childIndex:0,context:t,footer:""}),""}var v=e.type;if("string"==typeof v)return this.renderDOM(e,t,r);switch(v){case k:case g:case u:case s:case d:case l:return e=ye(e.props.children),this.stack.push({type:null,domNamespace:r,children:e,childIndex:0,context:t,footer:""}),"";case p:throw Error(i(294));case x:throw Error(i(343))}if("object"==typeof v&&null!==v)switch(v.$$typeof){case h:U={};var b=v.render(e.props,e.ref);return b=K(v.render,e.props,b,e.ref),b=ye(b),this.stack.push({type:null,domNamespace:r,children:b,childIndex:0,context:t,footer:""}),"";case y:return e=[o.createElement(v.type,n({ref:e.ref},e.props))],this.stack.push({type:null,domNamespace:r,children:e,childIndex:0,context:t,footer:""}),"";case c:return r={type:e,domNamespace:r,children:v=ye(e.props.children),childIndex:0,context:t,footer:""},this.pushProvider(e),this.stack.push(r),"";case f:v=e.type,b=e.props;var E=this.threadID;return C(v,E),v=ye(b.children(v[E])),this.stack.push({type:e,domNamespace:r,children:v,childIndex:0,context:t,footer:""}),"";case w:throw Error(i(338));case m:return v=(b=(v=e.type)._init)(v._payload),e=[o.createElement(v,n({ref:e.ref},e.props))],this.stack.push({type:null,domNamespace:r,children:e,childIndex:0,context:t,footer:""}),""}throw Error(i(130,null==v?v:typeof v,""))},t.renderDOM=function(e,t,r){var a=e.type.toLowerCase();if(r===le&&ue(a),!xe.hasOwnProperty(a)){if(!we.test(a))throw Error(i(65,a));xe[a]=!0}var l=e.props;if("input"===a)l=n({type:void 0},l,{defaultChecked:void 0,defaultValue:void 0,value:null!=l.value?l.value:l.defaultValue,checked:null!=l.checked?l.checked:l.defaultChecked});else if("textarea"===a){var u=l.value;if(null==u){u=l.defaultValue;var s=l.children;if(null!=s){if(null!=u)throw Error(i(92));if(Array.isArray(s)){if(!(1>=s.length))throw Error(i(93));s=s[0]}u=""+s}null==u&&(u="")}l=n({},l,{value:void 0,children:""+u})}else if("select"===a)this.currentSelectValue=null!=l.value?l.value:l.defaultValue,l=n({},l,{value:void 0});else if("option"===a){s=this.currentSelectValue;var c=function(e){if(null==e)return e;var t="";return o.Children.forEach(e,(function(e){null!=e&&(t+=e)})),t}(l.children);if(null!=s){var f=null!=l.value?l.value+"":c;if(u=!1,Array.isArray(s)){for(var h=0;h<s.length;h++)if(""+s[h]===f){u=!0;break}}else u=""+s===f;l=n({selected:void 0,children:void 0},l,{selected:u,children:c})}}if(u=l){if(ce[a]&&(null!=u.children||null!=u.dangerouslySetInnerHTML))throw Error(i(137,a));if(null!=u.dangerouslySetInnerHTML){if(null!=u.children)throw Error(i(60));if("object"!=typeof u.dangerouslySetInnerHTML||!("__html"in u.dangerouslySetInnerHTML))throw Error(i(61))}if(null!=u.style&&"object"!=typeof u.style)throw Error(i(62))}u=l,s=this.makeStaticMarkup,c=1===this.stack.length,f="<"+e.type;e:if(-1===a.indexOf("-"))h="string"==typeof u.is;else switch(a){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":h=!1;break e;default:h=!0}for(k in u)if(ke.call(u,k)){var p=u[k];if(null!=p){if("style"===k){var d=void 0,y="",m="";for(d in p)if(p.hasOwnProperty(d)){var v=0===d.indexOf("--"),w=p[d];if(null!=w){if(v)var x=d;else if(x=d,ge.hasOwnProperty(x))x=ge[x];else{var g=x.replace(pe,"-$1").toLowerCase().replace(de,"-ms-");x=ge[x]=g}y+=m+x+":",m=d,y+=v=null==w||"boolean"==typeof w||""===w?"":v||"number"!=typeof w||0===w||fe.hasOwnProperty(m)&&fe[m]?(""+w).trim():w+"px",m=";"}}p=y||null}d=null,h?be.hasOwnProperty(k)||(d=P(d=k)&&null!=p?d+'="'+A(p)+'"':""):d=W(k,p),d&&(f+=" "+d)}}s||c&&(f+=' data-reactroot=""');var k=f;u="",se.hasOwnProperty(a)?k+="/>":(k+=">",u="</"+e.type+">");e:{if(null!=(s=l.dangerouslySetInnerHTML)){if(null!=s.__html){s=s.__html;break e}}else if("string"==typeof(s=l.children)||"number"==typeof s){s=A(s);break e}s=null}return null!=s?(l=[],ve.hasOwnProperty(a)&&"\n"===s.charAt(0)&&(k+="\n"),k+=s):l=ye(l.children),e=e.type,r=null==r||"http://www.w3.org/1999/xhtml"===r?ue(e):"http://www.w3.org/2000/svg"===r&&"foreignObject"===e?"http://www.w3.org/1999/xhtml":r,this.stack.push({domNamespace:r,type:a,children:l,childIndex:0,context:t,footer:u}),this.previousWasTextNode=!1,k},e}();t.renderToNodeStream=function(){throw Error(i(207))},t.renderToStaticMarkup=function(e,t){e=new Ee(e,!0,t);try{return e.read(1/0)}finally{e.destroy()}},t.renderToStaticNodeStream=function(){throw Error(i(208))},t.renderToString=function(e,t){e=new Ee(e,!1,t);try{return e.read(1/0)}finally{e.destroy()}},t.version="17.0.2"},97762:(e,t,r)=>{e.exports=r(38698)}}]);
//# sourceMappingURL=803375217ba26e853fc6.js.map