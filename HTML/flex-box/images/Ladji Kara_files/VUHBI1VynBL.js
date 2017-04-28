if (self.CavalryLogger) { CavalryLogger.start_js(["66P\/I"]); }

__d('CtaImpressionsTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){'use strict';function h(){this.clear();}h.prototype.log=function(){c('GeneratedLoggerUtils').log('logger:CtaImpressionsLoggerConfig',this.$CtaImpressionsTypedLogger1,c('Banzai').BASIC);};h.prototype.logVital=function(){c('GeneratedLoggerUtils').log('logger:CtaImpressionsLoggerConfig',this.$CtaImpressionsTypedLogger1,c('Banzai').VITAL);};h.prototype.clear=function(){this.$CtaImpressionsTypedLogger1={};return this;};h.prototype.updateData=function(j){this.$CtaImpressionsTypedLogger1=babelHelpers['extends']({},this.$CtaImpressionsTypedLogger1,j);return this;};h.prototype.setCtaType=function(j){this.$CtaImpressionsTypedLogger1.cta_type=j;return this;};h.prototype.setOriginalURI=function(j){this.$CtaImpressionsTypedLogger1.original_uri=j;return this;};h.prototype.updateExtraData=function(j){j=c('nullthrows')(c('GeneratedLoggerUtils').serializeMap(j));c('GeneratedLoggerUtils').checkExtraDataFieldNames(j,i);this.$CtaImpressionsTypedLogger1=babelHelpers['extends']({},this.$CtaImpressionsTypedLogger1,j);return this;};h.prototype.addToExtraData=function(j,k){var l={};l[j]=k;return this.updateExtraData(l);};var i={cta_type:true,original_uri:true};f.exports=h;}),null);
__d('DimensionLogging',['BanzaiNectar','getViewportDimensions'],(function a(b,c,d,e,f,g){var h=c('getViewportDimensions')();c('BanzaiNectar').log('browser_dimension','homeload',{x:h.width,y:h.height,sw:window.screen.width,sh:window.screen.height,aw:window.screen.availWidth,ah:window.screen.availHeight,at:window.screen.availTop,al:window.screen.availLeft});}),null);
__d('PostsCtaModern',['CtaImpressionsTypedLogger','Animation','Style'],(function a(b,c,d,e,f,g){var h=150,i=255,j={show:function k(l,m,n,o){c('Style').set(document.body,'margin-bottom',i+'px');var p=setInterval(q,2500);o.addEventListener('click',function(){c('Style').set(n,'display','none');c('Style').set(l,'height','70%');c('Style').set(m,'display','block');c('Style').set(l,'background','none');r(l,'height',i+'px');clearInterval(p);});function q(){var s=s=document.documentElement.clientHeight,t=l.clientHeight;if(t!==s){c('Style').set(m,'display','none');c('Style').set(n,'display','block');r(l,'height',s+'px');r(l,'background','rgba(0,0,0,0.5)');var u=new (c('CtaImpressionsTypedLogger'))();u.setCtaType('www_permalink_cta');u.setOriginalURI(window.location.href);u.logVital();}}function r(s,t,u){new (c('Animation'))(s).to(t,u).duration(h).ease(c('Animation').ease.both).go();}}};f.exports=j;}),null);
__d('AbstractDockingElement',['Arbiter','Event','Run','SubscriptionsHandler','onEnclosingPageletDestroy','queryThenMutateDOM','removeFromArray'],(function a(b,c,d,e,f,g){var h=[],i=null;function j(){c('queryThenMutateDOM')(function(){return h.forEach(function(m){return m.queryDOM();});},function(){return h.forEach(function(m){return m.updateWithCache();});},'AbstractDockingElement');}function k(){if(!i){i=new (c('SubscriptionsHandler'))();i.addSubscriptions(c('Event').listen(window,'scroll',j),c('Event').listen(window,'resize',j),c('Run').onLeave(function(){while(h.length)l(h[0]);}));i=i;}return i;}function l(m){try{m.onPageletDestroyed&&c('Arbiter').unsubscribe(m.onPageletDestroyed);}catch(n){}finally{m.onPageletDestroyed=null;}if(!i||h.indexOf(m)===-1)return;c('removeFromArray')(h,m);if(h.length)return;i.release();i=null;}f.exports={register:function m(n,o,p){var q=k(),r={onPageletDestroyed:q.addSubscriptions(c('onEnclosingPageletDestroy')(n,function(){l(r);})),queryDOM:o,updateWithCache:p};h.push(r);}};}),null);
__d('DirectionalDockingElement',['AbstractDockingElement','Arbiter','DOM','Scroll','Style','UITinyViewportAction','UserAgent','ViewportBounds','getElementPosition','getStyleProperty','queryThenMutateDOM'],(function a(b,c,d,e,f,g){var h=true,i=false,j=c('UserAgent').isBrowser('Safari')||c('UserAgent').isBrowser('Mobile Safari');function k(l){'use strict';this.$DirectionalDockingElement5=0;this.$DirectionalDockingElement2=null;this.$DirectionalDockingElement7=false;this.$DirectionalDockingElement12=l;this.$DirectionalDockingElement8=0;this.$DirectionalDockingElement11=null;this.$DirectionalDockingElement13=0;this.register();this.$DirectionalDockingElement14=c('ViewportBounds').getTop();c('Style').set(this.$DirectionalDockingElement12,'width',this.$DirectionalDockingElement12.getBoundingClientRect().width+'px');this.$DirectionalDockingElement9=c('DOM').create('div');c('Style').set(this.$DirectionalDockingElement9,'position','relative');c('DOM').replace(this.$DirectionalDockingElement12,this.$DirectionalDockingElement9);c('DOM').appendContent(this.$DirectionalDockingElement9,this.$DirectionalDockingElement12);this.update();}k.prototype.register=function(){'use strict';c('AbstractDockingElement').register(this.getRoot(),this.__queryDOM.bind(this),this.__updateWithCache.bind(this));};k.prototype.subscribe=function(event,l,m){'use strict';if(!this.$DirectionalDockingElement1)this.$DirectionalDockingElement1=new (c('Arbiter'))();return this.$DirectionalDockingElement1.subscribe(event,l,m);};k.prototype.__queryDOM=function(){'use strict';var l=-c('getElementPosition')(this.$DirectionalDockingElement9).y;if(l!==this.$DirectionalDockingElement13){this.$DirectionalDockingElement15=l>this.$DirectionalDockingElement13?i:h;this.$DirectionalDockingElement13=l;}this.$DirectionalDockingElement6=this.$DirectionalDockingElement12.getBoundingClientRect();var m=document,n=m.body,o=m.documentElement;if(n&&o){var p=o.clientHeight,q=o.scrollHeight;this.$DirectionalDockingElement7=c('Scroll').getTop(n)+p>Math.max(p,q);}if(j){this.$DirectionalDockingElement11=c('getElementPosition')(this.$DirectionalDockingElement9);var r=parseInt(c('getStyleProperty')(this.$DirectionalDockingElement12,'left'),10);if(this.$DirectionalDockingElement11&&!isNaN(r)&&r!==this.$DirectionalDockingElement11.x)this.$DirectionalDockingElement11=babelHelpers['extends']({},this.$DirectionalDockingElement11,{x:r});}if(this.$DirectionalDockingElement12.style.position==='fixed')this.$DirectionalDockingElement5=c('getElementPosition')(this.$DirectionalDockingElement12).y+this.$DirectionalDockingElement13;};k.prototype.$DirectionalDockingElement16=function(l,m,n){'use strict';if(m===this.$DirectionalDockingElement4&&l===this.$DirectionalDockingElement3&&n===this.$DirectionalDockingElement2)return;var o={};if(m!==this.$DirectionalDockingElement4){o.top=m+'px';this.$DirectionalDockingElement4=m;}if(l!==this.$DirectionalDockingElement3){o.position=l;this.$DirectionalDockingElement3=l;}if(j)if(n!==this.$DirectionalDockingElement2){o.left=typeof n==='number'?n+'px':'auto';this.$DirectionalDockingElement2=n;}c('Style').apply(this.$DirectionalDockingElement12,o);};k.prototype.$DirectionalDockingElement17=function(){'use strict';this.$DirectionalDockingElement16('fixed',this.$DirectionalDockingElement14,this.$DirectionalDockingElement11?this.$DirectionalDockingElement11.x:null);};k.prototype.$DirectionalDockingElement18=function(){'use strict';this.$DirectionalDockingElement16('fixed',this.$DirectionalDockingElement8,this.$DirectionalDockingElement11?this.$DirectionalDockingElement11.x:null);};k.prototype.$DirectionalDockingElement19=function(){'use strict';this.$DirectionalDockingElement16('absolute',this.$DirectionalDockingElement5,null);};k.prototype.translateY=function(l){'use strict';var m=c('getElementPosition')(this.$DirectionalDockingElement12).y,n=c('getElementPosition')(this.$DirectionalDockingElement9).y,o=m-n;this.$DirectionalDockingElement5=l+o;this.$DirectionalDockingElement19();};k.prototype.__updateWithCache=function(){'use strict';var l=this.$DirectionalDockingElement6.height;if(l!==this.$DirectionalDockingElement10){c('Style').set(this.$DirectionalDockingElement9,'height',l+'px');this.$DirectionalDockingElement10=l;this.$DirectionalDockingElement1&&this.$DirectionalDockingElement1.inform('changedheight');}if(this.$DirectionalDockingElement7)return;if(this.$DirectionalDockingElement13+this.$DirectionalDockingElement14<0||c('UITinyViewportAction').isTiny()){this.$DirectionalDockingElement5=0;this.$DirectionalDockingElement19();return;}if(this.$DirectionalDockingElement15===i&&this.$DirectionalDockingElement13+this.$DirectionalDockingElement8>=this.$DirectionalDockingElement5){this.$DirectionalDockingElement18();}else if(this.$DirectionalDockingElement15===h&&this.$DirectionalDockingElement13+this.$DirectionalDockingElement14<=this.$DirectionalDockingElement5){this.$DirectionalDockingElement17();}else this.$DirectionalDockingElement19();};k.prototype.update=function(){'use strict';c('queryThenMutateDOM')(function(){this.__queryDOM();}.bind(this),function(){this.__updateWithCache();}.bind(this));};k.prototype.setOffset=function(l){'use strict';return this.setOffsetAndTop(l,this.$DirectionalDockingElement14);};k.prototype.setOffsetAndTop=function(l,m){'use strict';c('queryThenMutateDOM')(function(){this.__queryDOM();this.$DirectionalDockingElement8=l;this.$DirectionalDockingElement14=m;}.bind(this),function(){this.__updateWithCache();}.bind(this));return this;};k.prototype.setTop=function(l){'use strict';return this.setOffsetAndTop(this.$DirectionalDockingElement8,l);};k.prototype.getPlaceholder=function(){'use strict';return this.$DirectionalDockingElement9;};k.prototype.getRoot=function(){'use strict';return this.$DirectionalDockingElement12;};f.exports=k;}),null);
__d('DockingElement',['AbstractDockingElement','Arbiter','CSS','DOM','DOMDimensions','Style','UserAgent','UITinyViewportAction','getElementPosition','mixin'],(function a(b,c,d,e,f,g){var h=c('UserAgent').isBrowser('Safari')||c('UserAgent').isBrowser('Mobile Safari');function i(j){'use strict';this.$DockingElement12=j;this.$DockingElement9=c('DOM').create('div');c('Style').set(this.$DockingElement9,'position','relative');c('DOM').replace(this.$DockingElement12,this.$DockingElement9);c('DOM').appendContent(this.$DockingElement9,this.$DockingElement12);this.$DockingElement8=0;this.register();this.update();}i.prototype.register=function(){'use strict';c('AbstractDockingElement').register(this.getRoot(),this.__queryDOM.bind(this),this.__updateWithCache.bind(this));};i.prototype.subscribe=function(event,j,k){'use strict';if(!this.$DockingElement1)this.$DockingElement1=new (c('Arbiter'))();return this.$DockingElement1.subscribe(event,j,k);};i.prototype.__queryDOM=function(){'use strict';this.$DockingElement11=c('getElementPosition')(this.getPlaceholder());this.$DockingElement5=c('DOMDimensions').getElementDimensions(this.$DockingElement12);};i.prototype.__updateWithCache=function(){'use strict';var j=this.$DockingElement8,k=this.getPlaceholder();if(!c('UITinyViewportAction').isTiny()&&this.$DockingElement11.y<=j){if(!this.$DockingElement7&&this.$DockingElement12.parentNode){c('CSS').addClass(this.$DockingElement12,'fixed_elem');this.$DockingElement7=true;}var l;if(this.$DockingElement4!==j){l={};l.top=j+'px';this.$DockingElement4=j;}var m=this.$DockingElement5.width;if(m!==this.$DockingElement3){l=l||{};l.width=m+'px';this.$DockingElement3=m;}if(h){var n=this.$DockingElement11.x;if(n!==this.$DockingElement2){l=l||{};l.left=n+'px';this.$DockingElement2=n;}}l&&c('Style').apply(this.$DockingElement12,l);var o=this.$DockingElement5.height;c('Style').set(k,'height',o+'px');if(o!==this.$DockingElement10){this.$DockingElement10=o;this.$DockingElement1&&this.$DockingElement1.inform('changedheight');}}else if(this.$DockingElement7){c('Style').set(k,'height','');c('Style').apply(this.$DockingElement12,{left:'',top:'',width:''});c('CSS').removeClass(this.$DockingElement12,'fixed_elem');this.$DockingElement7=false;this.$DockingElement2=null;this.$DockingElement3=null;this.$DockingElement4=null;}};i.prototype.update=function(){'use strict';this.__queryDOM();this.__updateWithCache();};i.prototype.getPlaceholder=function(){'use strict';return this.$DockingElement9;};i.prototype.getRoot=function(){'use strict';return this.$DockingElement12;};i.prototype.setOffset=function(j){'use strict';this.$DockingElement8=j;this.update();return this;};f.exports=i;}),null);
__d('StickyRHC',['csx','$','Arbiter','DirectionalDockingElement','DockingElement','DOMDimensions','DOMQuery','Event','Run','SubscriptionsHandler','ViewportBounds','ge','getElementPosition','getViewportDimensions','removeFromArray','throttle'],(function a(b,c,d,e,f,g,h){var i=35,j=[],k;function l(z,aa){if(!aa||!aa.dom_id){j.forEach(m);return;}var ba=c('$')(aa.dom_id);for(var ca=0;ca<j.length;ca++)if(c('DOMQuery').contains(j[ca].getRoot(),ba)){m(j[ca]);return;}}function m(z){var aa=z.getRoot(),ba=z.updateOffset.bind(z),ca=c('DOMQuery').scry(aa,'img.img');ca.forEach(function(da){if(da.complete||da.getAttribute('height')||da.naturalHeight===undefined&&da.naturalHeight!==0)return;var ea=function ia(){ba();fa.remove();ga.remove();ha.remove();},fa=c('Event').listen(da,'load',ea),ga=c('Event').listen(da,'error',ea),ha=c('Event').listen(da,'abort',ea);});ba();}function n(){j.forEach(function(z){z.updateOffset();});}function o(){n();n();}function p(z){var aa=c('DOMQuery').scry(z,"._4-u2"),ba=c('DOMQuery').scry(z,"._4-u3"),ca=c('DOMQuery').scry(z,'.uiHeader'),da=c('DOMQuery').scry(z,'.ego_unit');return [].concat(aa,ba,ca,da).filter(function(ea){return t(ea)!==0;});}function q(z){return c('getElementPosition')(z).y;}function r(z,aa){return z-aa;}function s(){return t(c('ge')('pageFooter'));}function t(z){return z?c('DOMDimensions').getElementDimensions(z).height:0;}var u=v(n);function v(z){return function(aa){return c('Arbiter').subscribe(aa,z);};}function w(z,aa){var ba=arguments.length<=2||arguments[2]===undefined?true:arguments[2];'use strict';this.$StickyRHC1=z;this.$StickyRHC2=aa?new (c('DirectionalDockingElement'))(z):new (c('DockingElement'))(z);this.$StickyRHC3=ba;this.$StickyRHC2.subscribe('changedheight',this.updateOffset.bind(this));this.updateOffset();m(this);if(!j.length){k=new (c('SubscriptionsHandler'))();k.addSubscriptions(u('header_loaded'),u('browse_top_filters_full_width_displayed'),u('search_top_bar_displayed'),c('Arbiter').subscribe('netego_loaded',l),c('Arbiter').subscribe('video_fullscreen_change',o),c('Event').listen(window,'resize',c('throttle')(n)));}c('Run').onLeave(function(){return this.destroy();}.bind(this));j.push(this);}w.getInstances=function(){'use strict';return j;};w.prototype.getRoot=function(){'use strict';return this.$StickyRHC1;};w.prototype.destroy=function(){'use strict';this.$StickyRHC2=null;c('removeFromArray')(j,this);if(!j.length&&k){k.release();k=null;}};w.prototype.updateOffset=function(){'use strict';this.$StickyRHC2.setOffset(this.calculateRHCOffset());};w.prototype.calculateRHCOffset=function(){'use strict';var z=this.getRoot(),aa=t(z),ba=x(),ca=y();if(aa<ca)return ba;if(this.$StickyRHC3){var da=p(z).map(q).sort(r),ea=aa+q(z);for(var fa=da,ga=Array.isArray(fa),ha=0,fa=ga?fa:fa[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var ia;if(ga){if(ha>=fa.length)break;ia=fa[ha++];}else{ha=fa.next();if(ha.done)break;ia=ha.value;}var ja=ia,ka=ea-ja;if(ka<ca)return ba-(aa-ka);}}return ba-(aa-ca);};function x(){return c('ViewportBounds').getTop();}function y(){var z=x(),aa=c('getViewportDimensions')().height,ba=s();return aa-z-i-ba;}f.exports=w;}),null);
__d('EntityTitle.react',['cx','csx','AutoScalingContent.react','CSS','DOMContainer.react','DOMQuery','React'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k;j=babelHelpers.inherits(l,c('React').Component);k=j&&j.prototype;function l(m){k.constructor.call(this,m);this.$EntityTitle1=function(n,o){this.setState({noResize:true});return 1;}.bind(this);this.state={noResize:false};}l.prototype.render=function(){var m=this.props.title;if(!this.props.autoScale||this.state.noResize)c('CSS').addClass(m,"_3d2d");if(!this.props.autoScale){c('CSS').addClass(m,"_3d2f");return c('React').createElement(c('DOMContainer.react'),null,m);}var n=c('DOMQuery').scry(m,"._3d2h *");if(n.length>0)c('CSS').addClass(m,"_3d2g");return c('React').createElement(c('AutoScalingContent.react'),{handleMinWidthRatioViolation:this.$EntityTitle1,minWidthRatio:.7},c('React').createElement(c('DOMContainer.react'),null,m));};l.defaultProps={autoScale:true};f.exports=l;}),null);
__d('XUISubNavigationLoader',['cx','csx','AjaxPipeRequest','CSS','DOM','FIGEntityPageLayout','PageHooks','PageTransitions','PageTransitionsRegistrar','Parent','Run','createCancelableFunction'],(function a(b,c,d,e,f,g,h,i){var j="._3o_h",k='content_container',l="_4t7n",m="._4t7n",n="_2fvv",o="_2yap",p="._2yap",q=null,r=[],s=[],t=null;function u(w){for(var x=r,y=Array.isArray(x),z=0,x=y?x:x[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var aa;if(y){if(z>=x.length)break;aa=x[z++];}else{z=x.next();if(z.done)break;aa=z.value;}var ba=aa;if(ba(w))return true;}c('Run').onLeave(function(){c('PageTransitionsRegistrar').removeHandler(u,6);s.forEach(function(ca){return ca();});s=[];r=[];});return false;}var v={setLoading:function w(x,y){c('CSS').conditionClass(x,l,y);},setSelected:function w(x){var y=c('Parent').byClass(x,n);c('DOM').scry(y,j).forEach(function(z){c('DOM').remove(z);});c('DOM').scry(y,p).forEach(function(z){c('CSS').removeClass(z,o);});c('CSS').addClass(x,o);},cancelRequest:function w(x){if(q){q.abort();q=null;c('DOM').scry(c('Parent').byClass(x,n),m).forEach(function(y){c('CSS').removeClass(y,l);});}},sendRequest:function w(x,y,z){v.cancelRequest(z);v.setSelected(z);v.setLoading(z,true);c('PageHooks').runHooks('onleavehooks');q=new (c('AjaxPipeRequest'))().setURI(y).setData(babelHelpers['extends']({},x.getQueryData(),{path:x.getPath()})).setCanvasId(k).setFirstResponseHandler(function(){v.setLoading(z,false);}).setFinallyHandler(function(){q=null;c('FIGEntityPageLayout').update();c('PageTransitions').transitionComplete(true);}).send();},registerHandler:function w(x){if(!r.length)c('PageTransitionsRegistrar').registerHandler(u,6);if(t)t.remove();r.push(x);},onLeave:function w(x){if(!r.length&&!t)t=c('Run').onLeave(function(){s.forEach(function(y){return y();});s=[];});x=c('createCancelableFunction')(x);s.push(x);return {remove:function y(){x.cancel();}};}};f.exports=v;}),null);
__d('EntityPageDirectionalDockingElement',['DirectionalDockingElement','EntityPageDockingElementController'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('DirectionalDockingElement'));i=h&&h.prototype;j.prototype.register=function(){'use strict';c('EntityPageDockingElementController').register(this.__queryDOM.bind(this),this.__updateWithCache.bind(this));};function j(){'use strict';h.apply(this,arguments);}f.exports=j;}),null);
__d('EntityPageDockingElementController',['Event','SubscriptionsHandler','XUISubNavigationLoader','queryThenMutateDOM','throttle'],(function a(b,c,d,e,f,g){var h=[],i=null,j=c('throttle')(function(){c('queryThenMutateDOM')(function(){return h.forEach(function(l){return l.queryDOM();});},function(){return h.forEach(function(l){return l.updateWithCache();});},'EntityPageDockingElementController');}),k={register:function l(m,n){if(!i){i=new (c('SubscriptionsHandler'))();i.addSubscriptions(c('Event').listen(window,'scroll',j),c('Event').listen(window,'resize',j),c('XUISubNavigationLoader').onLeave(function(){h=[];if(i){i.release();i=null;}}));}var o={queryDOM:m,updateWithCache:n};h.push(o);}};f.exports=k;}),null);
__d('getEntityPageDockingElementOffset',[],(function a(b,c,d,e,f,g){'use strict';var h=function i(j,k,l){var m=l.getRootBoundingClientRect(),n=m.height,o=m.top,p=l.getPlaceholderBoundingClientRect(),q=p.top,r=j-n,s=l.getSections();if(s){var t=Array.from(s).map(function(x){return q+x.getBoundingClientRect().top-o;});t.sort(function(x,y){return x-y;});for(var u=0,v=t.length;u<v;u++){var w=t[u]-q;if(n-w<j-k){r=k-w;break;}}}return r;};f.exports=h;}),null);
__d('EntityPageRegion',['DirectionalDockingElement','getElementRect','getEntityPageDockingElementOffset','memoize','uniqueID'],(function a(b,c,d,e,f,g){'use strict';function h(i,j,k){this.$EntityPageRegion9=function(){return c('getElementRect')(this.$EntityPageRegion1.getPlaceholder());}.bind(this);this.$EntityPageRegion10=function(){return c('getElementRect')(this.$EntityPageRegion1.getRoot());}.bind(this);this.$EntityPageRegion1=i;this.$EntityPageRegion2=c('uniqueID')();this.$EntityPageRegion3=0;this.$EntityPageRegion4=false;this.$EntityPageRegion5=k;this.$EntityPageRegion6=j;this.$EntityPageRegion7=0;this.$EntityPageRegion8=false;this.getPlaceholderBoundingClientRect=c('memoize')(this.$EntityPageRegion9);this.getRootBoundingClientRect=c('memoize')(this.$EntityPageRegion10);}h.prototype.calculateOffset=function(i,j){if(this.$EntityPageRegion5)return this.$EntityPageRegion5(i,j,this);if(this.getRootBoundingClientRect().height+j<i){return j;}else return c('getEntityPageDockingElementOffset')(i,j,this);};h.prototype.getID=function(){return this.$EntityPageRegion2;};h.prototype.getOffset=function(){return this.$EntityPageRegion3;};h.prototype.getTop=function(){return this.$EntityPageRegion7;};h.prototype.getSections=function(){var i=this.$EntityPageRegion6;if(!i)return null;return this.$EntityPageRegion1.getPlaceholder().querySelectorAll(i);};h.prototype.setOffset=function(i){if(i===this.$EntityPageRegion3)return;this.$EntityPageRegion3=i;this.$EntityPageRegion4=true;};h.prototype.setTop=function(i){if(i===this.$EntityPageRegion7)return;this.$EntityPageRegion7=i;this.$EntityPageRegion8=true;};h.prototype.update=function(){var i=this.$EntityPageRegion4,j=this.$EntityPageRegion8,k=this.$EntityPageRegion1,l=this.$EntityPageRegion3,m=this.$EntityPageRegion7;if(k instanceof c('DirectionalDockingElement')&&j){if(i){k.setOffsetAndTop(l,m);}else k.setTop(m);}else if(i)k.setOffset(l);this.$EntityPageRegion4=false;this.$EntityPageRegion8=false;this.getPlaceholderBoundingClientRect=c('memoize')(this.$EntityPageRegion9);this.getRootBoundingClientRect=c('memoize')(this.$EntityPageRegion10);};f.exports=h;}),null);
__d('FIGEntityPageLayout',['Arbiter','DirectionalDockingElement','Event','EntityPageConfig','EntityPageDirectionalDockingElement','EntityPageRegion','MutationObserver','ResizeEventHandler','Run','SubscriptionsHandler','ViewportBounds','XUISubNavigationLoader','getViewportDimensions','queryThenMutateDOM','throttle'],(function a(b,c,d,e,f,g){'use strict';var h=[],i=null,j=null,k=null,l=null,m={attributes:false,characterData:true,childList:true,subtree:true};function n(){c('queryThenMutateDOM')(function(){var s=c('getViewportDimensions')().height,t=c('ViewportBounds').getTop();h.sort(function(u,v){return u.getPlaceholderBoundingClientRect().top<v.getPlaceholderBoundingClientRect().top?-1:1;});h.forEach(function(u){var v=u.getRootBoundingClientRect(),w=v.width,x=u.getPlaceholderBoundingClientRect(),y=x.left,z=x.top,aa=t;h.forEach(function(ca){var da=ca.getRootBoundingClientRect(),ea=da.height,fa=da.width,ga=ca.getPlaceholderBoundingClientRect(),ha=ga.left,ia=ga.top;if(u!==ca&&ia+ea<=z&&Math.min(y+w,ha+fa)>=Math.max(y,ha))aa+=ea+ca.getOffset()-ca.getTop();});var ba=u.calculateOffset(s,aa);u.setOffset(ba);u.setTop(aa);});},function(){h.forEach(function(s,t){s.update();});},'EntityPageLayout');}function o(){p();if(!k){k=new (c('SubscriptionsHandler'))();k.addSubscriptions(c('Run').onLeave(function(){if(k){k.release();k=null;}}));}return k;}function p(){if(!j){j=new (c('SubscriptionsHandler'))();j.addSubscriptions(c('ViewportBounds').subscribe('change',n),c('Arbiter').subscribe('footerLoaded',n),c('Event').listen(window,'resize',c('throttle')(n)),c('XUISubNavigationLoader').onLeave(function(){if(j){j.release();j=null;}if(l){l.disconnect();l=null;}if(i)i=null;}));}return j;}function q(s,t,u,v,w){h.push(new (c('EntityPageRegion'))(u,t?t.join(','):null,w));n();v.addSubscriptions(u.subscribe('changedheight',n),c('Event').listen(s,'resize',n));if(c('EntityPageConfig').hasMutationObserver){if(!l){i=new (c('ResizeEventHandler'))(n);l=new (c('MutationObserver'))(i.handleEvent);}l.observe(s,m);}}var r={register:function s(t,u,v,w){q(t,u,v?new v(t):new (c('DirectionalDockingElement'))(t),o(),w);},registerAcrossTransitions:function s(t,u,v,w){q(t,u,v?new v(t):new (c('EntityPageDirectionalDockingElement'))(t),p(),w);},update:n};f.exports=r;}),null);
__d('XUISubNavigation',['cx','CSS','Event','Parent','Run','SubscriptionsHandler','URI','XUISubNavigationLoader'],(function a(b,c,d,e,f,g,h){var i="_8ue",j="_2yaa";function k(l,m){'use strict';this.$XUISubNavigation1=l;c('XUISubNavigationLoader').registerHandler(function(n){return this.$XUISubNavigation3(n);}.bind(this));this.$XUISubNavigation2=new (c('SubscriptionsHandler'))();this.$XUISubNavigation2&&this.$XUISubNavigation2.addSubscriptions(c('Event').listen(this.$XUISubNavigation1,'click',function(event){var n=c('Parent').byClass(event.target,j);if(n&&n.getAttribute('data-endpoint'))c('XUISubNavigationLoader').setSelected(n);}),c('Event').listen(this.$XUISubNavigation1,'focusin',this.$XUISubNavigation4.bind(this)),c('Event').listen(this.$XUISubNavigation1,'focusout',this.$XUISubNavigation5.bind(this)),c('XUISubNavigationLoader').onLeave(this.destroy.bind(this)));if(m)this.$XUISubNavigation2&&this.$XUISubNavigation2.addSubscriptions(c('Event').listen(m,'click',function(event){event.preventDefault();c('CSS').addClass(this.$XUISubNavigation1,"_5rll");c('Event').fire(this.$XUISubNavigation1,'resize');}.bind(this)));}k.prototype.destroy=function(){'use strict';this.$XUISubNavigation2&&this.$XUISubNavigation2.release();this.$XUISubNavigation2=null;};k.prototype.$XUISubNavigation4=function(event){'use strict';var l=c('Parent').byClass(event.target,j);if(l)c('CSS').addClass(l,i);};k.prototype.$XUISubNavigation5=function(event){'use strict';var l=c('Parent').byClass(event.target,j);if(l&&!l.contains(event.relatedTarget))c('CSS').removeClass(l,i);};k.prototype.$XUISubNavigation3=function(l){'use strict';var m=l.getPath(),n=Array.prototype.find.call(this.$XUISubNavigation1.getElementsByTagName('a'),function(o){return new (c('URI'))(o.href).getPath()===m&&o.hasAttribute('data-endpoint');});if(n){c('XUISubNavigationLoader').sendRequest(l,new (c('URI'))(n.getAttribute('data-endpoint')),c('Parent').byClass(n,j));return true;}return false;};f.exports=k;}),null);
__d('EntityPageLayoutDockingElement',['DockingElement','EntityPageDockingElementController'],(function a(b,c,d,e,f,g){'use strict';var h,i;h=babelHelpers.inherits(j,c('DockingElement'));i=h&&h.prototype;j.prototype.register=function(){c('EntityPageDockingElementController').register(this.__queryDOM.bind(this),this.__updateWithCache.bind(this));};function j(){h.apply(this,arguments);}f.exports=j;}),null);
__d('EntityPageRenderer',['ReactDOM','ReactRenderer','XUISubNavigationLoader'],(function a(b,c,d,e,f,g){var h={constructAndRenderComponent:function i(j,k,l,m){c('XUISubNavigationLoader').onLeave(function(){c('ReactDOM').unmountComponentAtNode(l);});return c('ReactRenderer').constructAndRenderComponentAcrossTransitions(j,k,l,m);}};f.exports=h;}),null);