if (self.CavalryLogger) { CavalryLogger.start_js(["pnnji"]); }

__d('FriendsCenterStickyController',['StickyController'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('StickyController'));i=h&&h.prototype;function j(k,l,m,n){'use strict';i.constructor.call(this,k,l,m,n);this.$FriendsCenterStickyController1=l;this.$FriendsCenterStickyController2=n||k.parentNode;var o=k.getBoundingClientRect();this.$FriendsCenterStickyController3=o.bottom-o.top;this.$FriendsCenterStickyController4=true;}j.prototype.unstick=function(){'use strict';this.$FriendsCenterStickyController4=false;this.handleScroll();};j.prototype.restick=function(){'use strict';this.$FriendsCenterStickyController4=true;this.handleScroll();};j.prototype.shouldFix=function(){'use strict';if(!this.$FriendsCenterStickyController4)return false;var k=this.$FriendsCenterStickyController2.getBoundingClientRect();return this.$FriendsCenterStickyController1>=k.top&&this.$FriendsCenterStickyController1+this.$FriendsCenterStickyController3<k.bottom;};f.exports=j;}),null);
__d('FriendsCenterStickyHeader',['cx','BlueBar','CSS','DOM','FriendsCenterStickyController','Style','Vector'],(function a(b,c,d,e,f,g,h){var i=[];function j(k){'use strict';var l=c('BlueBar').getBar();if(!l)return;var m=c('Style').isFixed(l)?c('Vector').getElementDimensions(l).y:0,n=this.getPlaceholder(k.getBoundingClientRect());c('DOM').insertAfter(k,n);c('CSS').addClass(k,"_5m65");var o=new (c('FriendsCenterStickyController'))(k,m,function(p){c('CSS').conditionShow(n,p);c('CSS').conditionClass(k,'stuck',p);}.bind(this));o.start();i[k.id]=o;}j.prototype.getPlaceholder=function(k){'use strict';var l=c('DOM').create('div');c('CSS').hide(l);c('Style').set(l,'height',k.bottom-k.top+'px');c('Style').set(l,'width',k.right-k.left+'px');return l;};j.stopSticky=function(k){'use strict';k&&k.id in i&&i[k.id].unstick();};j.startSticky=function(k){'use strict';k&&k.id in i&&i[k.id].restick();};f.exports=j;}),null);
__d('FriendBrowserCheckboxController',['csx','Arbiter','AsyncRequest','CSS','DOM','Event','Form','FriendsCenterStickyHeader','OnVisible','$','bind','ge'],(function a(b,c,d,e,f,g,h){var i='friend_browser_list';function j(){}Object.assign(j,{instances:{},getInstance:function k(l){return this.instances[l];}});Object.assign(j.prototype,{init:function k(l,m,n,o){j.instances[l]=this;this._id=l;this._simplified=n;this._infiniteScroll=o;this._form=m;this._contentGrid=c('DOM').find(m,'.friendBrowserCheckboxContentGrid');this._loadingIndicator=c('DOM').find(m,'.friendBrowsingCheckboxContentLoadingIndicator');this._checkboxResults=c('DOM').find(m,'.friendBrowserCheckboxResults');this._contentPager=c('DOM').find(m,'.friendBrowserCheckboxContentPager');this._standaloneFilters=null;this._searchStarted=false;this._stickyHeader=null;c('Arbiter').subscribe('friend-browser/name-change',this.getNew.bind(this,false));this.numGetNewRequests=0;this.queuedRequests={};c('Event').listen(this._form,'submit',this.onFormSubmit.bind(this));},addTypeahead:function k(l,m){l.subscribe('select',this.onHubSelect.bind(this,l,m));if(this._simplified)l.subscribe('unselect',this.onHubSelect.bind(this,l,m));},setStandaloneFilters:function k(l){if(l){this._standaloneFilters=c('DOM').scry(document.body,'.friendBrowserCheckboxFilters')[0];this._stickyHeader=c('DOM').scry(c('$')('fbSearchResultsBox'),"._5m65")[0];var m=c('$')('doneSearchButton');m.onclick=function(){this._searchStarted=false;c('DOM').scry(document.body,"._5n-u").forEach(function(n){c('CSS').show(n);});c('CSS').hide(m);window.scrollTo(0,0);c('FriendsCenterStickyHeader').startSticky(this._stickyHeader);}.bind(this);}return this;},onFormSubmit:function k(){this.getNew(true);return false;},addSelector:function k(l){l.subscribe('change',this.getNew.bind(this,false));},onHubSelect:function k(l,m,event,n){if(this._simplified){this.getNew(true);return;}if(!(event=='select'&&n.selected))return;var o=this.buildNewCheckbox(m,n.selected.text,n.selected.uid),p=c('DOM').find(this._standaloneFilters||this._form,'.checkboxes_'+m);c('DOM').appendContent(p.firstChild,o);var q=c('DOM').scry(l.getElement(),'input[type="button"]');if(q&&q[0])q[0].click();this.getNew(true);},buildNewCheckbox:function k(l,m,n){var o=l+'_ids_'+n,p=l+'_ids[]',q=c('DOM').create('input',{id:o,type:'checkbox',value:n,name:p,checked:true});c('Event').listen(q,'click',c('bind')(this,'getNew',false));var r=c('DOM').create('td',null,q);c('CSS').addClass(r,'vTop');c('CSS').addClass(r,'hLeft');var s=c('DOM').create('label',null,m),t=c('DOM').create('td',null,s);c('CSS').addClass(t,'vMid');c('CSS').addClass(t,'hLeft');var u=c('DOM').create('tr');u.appendChild(r);u.appendChild(t);return u;},showMore:function k(){var l=c('DOM').scry(this._contentPager,'.friendBrowserMorePager')[0];if(!l)return false;if(c('CSS').hasClass(l,'async_saving'))return false;var m=this.numGetNewRequests,n=this.getFormData();n.show_more=true;if(this._searchStarted)n.page=i;new (c('AsyncRequest'))().setURI('/ajax/growth/friend_browser/checkbox.php').setData(n).setHandler(c('bind')(this,function(o){this.showMoreHandler(o,m);})).setStatusElement(l).send();},showMoreHandler:function k(l,m){if(m==this.numGetNewRequests){var n=l.payload;c('DOM').appendContent(this._contentGrid,n.results);this.updatePagerAndExtraData(n.pager,n.extra_data);}},getFormData:function k(){var l=c('Form').serialize(this._form);if(this._standaloneFilters){var m=c('Form').serialize(this._standaloneFilters);for(var n in m)l[n]=m[n];}return l;},getNew:function k(l){this.numGetNewRequests++;var m=this.numGetNewRequests;c('CSS').addClass(this._checkboxResults,'friendBrowserCheckboxContentOnload');if(c('ge')('friendBrowserCI'))c('CSS').addClass(c('$')('friendBrowserCI'),'friendBrowserCheckboxContentOnload');this.startStandaloneSearch();c('CSS').show(this._loadingIndicator);var n=this.getFormData();n.used_typeahead=l;if(this._searchStarted)n.page=i;new (c('AsyncRequest'))().setURI('/ajax/growth/friend_browser/checkbox.php').setData(n).setHandler(c('bind')(this,function(o){this.getNewHandler(o,m);})).send();},getNewHandler:function k(l,m){if(m==this.numGetNewRequests){var n=l.payload;c('DOM').setContent(this._contentGrid,n.results);c('CSS').removeClass(this._checkboxResults,'friendBrowserCheckboxContentOnload');if(c('ge')('friendBrowserCI'))c('CSS').hide(c('$')('friendBrowserCI'));c('CSS').hide(this._loadingIndicator);this.updatePagerAndExtraData(n.pager,n.extra_data);}},startStandaloneSearch:function k(){if(!this._standaloneFilters)return;window.scrollTo(0,0);if(this._searchStarted)return;this._searchStarted=true;c('CSS').show(c('$')('fbSearchResultsBox'));c('DOM').scry(document.body,"._5n-u").forEach(function(l){c('CSS').hide(l);});c('CSS').show(c('$')('doneSearchButton'));c('FriendsCenterStickyHeader').stopSticky(this._stickyHeader);},updatePagerAndExtraData:function k(l,m){c('DOM').setContent(this._contentPager,l);if(this._infiniteScroll)this.setupOnVisible();c('DOM').replace(this._form.elements.extra_data,m);},setupOnVisible:function k(){var l=c('DOM').scry(this._contentPager,'.friendBrowserMorePager')[0];if(l&&this._id!='jewel'){this._onVisible&&this._onVisible.remove();this._onVisible=new (c('OnVisible'))(l,c('bind')(this,'showMore'),false,1000);}}});f.exports=j;}),null);
__d('legacy:friend-browser-checkbox-js',['FriendBrowserCheckboxController'],(function a(b,c,d,e,f,g){b.FriendBrowserCheckboxController=c('FriendBrowserCheckboxController');}),3);
__d("XFriendJewelNotifsController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/friendjewel\/friendconfirmednotifications\/",{alert_ids:{type:"IntVector",required:true},action:{type:"String",required:true}});}),null);
__d('FriendConfirmedNotifs',['Event','shield','CSS','DOM','ge','DataStore','Arbiter','AsyncRequest','Parent','XFriendJewelNotifsController','RequestsJewelController'],(function a(b,c,d,e,f,g){function h(i){'use strict';this.$FriendConfirmedNotifs3=function(){if(!this.$FriendConfirmedNotifs2.length)return;this.$FriendConfirmedNotifs7(this.$FriendConfirmedNotifs2,'mark_read');this.$FriendConfirmedNotifs2=[];}.bind(this);this.$FriendConfirmedNotifs4=function(){};var j=i.close;for(var k=0;k<j.length;++k)c('Event').listen(j[k],'click',this.$FriendConfirmedNotifs1.bind(this));this.$FriendConfirmedNotifs2=i.unread_notifs;if(this.$FriendConfirmedNotifs2.length)if(c('RequestsJewelController').isOpen()){this.$FriendConfirmedNotifs3();}else{c('Arbiter').subscribeOnce('requestsJewel/opened',c('shield')(this.$FriendConfirmedNotifs3,this));c('Arbiter').subscribeOnce('requestsJewel/closed',c('shield')(this.$FriendConfirmedNotifs3,this));}c('Arbiter').subscribeOnce('requestsJewel/closed',c('shield')(this.$FriendConfirmedNotifs4,this));this.$FriendConfirmedNotifs5=i.notifids;}h.prototype.$FriendConfirmedNotifs6=function(i){'use strict';var j=false,k=c('ge')('fbRequestsJewel'),l=c('DOM').find(k,'.requestsUnitTitle'),m=c('DOM').scry(i,'.friendConfirmedNotifsUnitTitle')[0];if(!m){j=true;m=c('DOM').find(k,'.friendConfirmedNotifsUnitTitle');}if(j){c('CSS').show(c('DOM').find(k,'.requestsJewelLinks'));c('DOM').replace(m,l);}else c('CSS').hide(m);};h.prototype.$FriendConfirmedNotifs1=function(event){'use strict';var i=event.getTarget(),j,k=[],l=c('Parent').byClass(i,'friendConfirmedNotifsUnitDisaggregated');if(l){k=c('DataStore').get(l,'notifids');j=l.parentElement.parentElement;c('CSS').hide(l);}var m=c('Parent').byClass(i,'friendConfirmedNotifsUnitAggregated');if(m){k=c('DataStore').get(m,'notifids');j=m.parentElement.parentElement;c('CSS').hide(m);}for(var n=0;n<k.length;++n){var o=this.$FriendConfirmedNotifs5.indexOf(k[n]);if(o>-1)this.$FriendConfirmedNotifs5.splice(o,1);}if(!this.$FriendConfirmedNotifs5.length)this.$FriendConfirmedNotifs6(j);this.$FriendConfirmedNotifs7(k,'xout');};h.prototype.$FriendConfirmedNotifs7=function(i,j){'use strict';var k=c('XFriendJewelNotifsController').getURIBuilder().setIntVector('alert_ids',i).setString('action',j).getURI();new (c('AsyncRequest'))().setURI(k).send();};f.exports=h;}),null);
__d('FriendConfirmedNotifsClickLogging',['Event','AsyncSignal'],(function a(b,c,d,e,f,g){var h={addClickLoggingListener:function i(j,k){c('Event').listen(j,'click',function(){new (c('AsyncSignal'))(k).send();});}};f.exports=h;}),null);
__d('legacy:onvisible',['OnVisible'],(function a(b,c,d,e,f,g){b.OnVisible=c('OnVisible');}),3);
__d('JewelFollowupUnit',['csx','DOM','Arbiter','CSS'],(function a(b,c,d,e,f,g,h){function i(j,k,l,m){this._followup=k;this._parentContainer=this._followup.parentNode;this._friendRequest=this._parentContainer.firstChild;l&&c('Arbiter').subscribe(l,function(o,p){p.uid==j&&this._showFollowup();}.bind(this));var n=c('DOM').scry(this._parentContainer,"._e7")[0];n&&(n.onclick=this._hideFollowup.bind(this));m&&c('Arbiter').subscribe(m,function(o,p){p.uid==j&&this._hideFollowup();}.bind(this));}Object.assign(i.prototype,{_showFollowup:function j(){this._updateRequestAnimClass();c('CSS').addClass(this._followup,'active');c('CSS').addClass(this._parentContainer,'followupActivated');},_hideFollowup:function j(){this._updateRequestAnimClass();c('CSS').removeClass(this._followup,'active');c('CSS').removeClass(this._parentContainer,'followupActivated');},_updateRequestAnimClass:function j(){c('CSS').conditionClass(this._friendRequest,'animated',c('CSS').hasClass(this._followup,'animated'));}});f.exports=i;}),null);
__d('InnerStickyArea',['cx','ContextualLayer','CSS','DataStore','DOM','Event','LayerHideOnTransition','Locale','Parent','Scroll','Style','Vector','removeFromArray'],(function a(b,c,d,e,f,g,h){function i(l){var m=c('Parent').byClass(l,'scrollable')||c('Style').getScrollParent(l.parentNode);return m;}function j(l){'use strict';var m=i(l);this.node=l;this._extracted=false;this._placeholder=c('DOM').create('div',{className:"_ptr"});k.getInstance(m).register(this);}j.prototype.update=function(){'use strict';if(this._extracted){c('Vector').getElementDimensions(this._placeholder).setElementWidth(this.node);c('Vector').getElementDimensions(this.node).setElementHeight(this._placeholder);}else c('Vector').getElementDimensions(this.node).setElementWidth(this.node).setElementHeight(this._placeholder);return this;};j.prototype.setExtracted=function(l){'use strict';if(l===this._extracted)return this;if(l){this.update();c('DOM').replace(this.node,this._placeholder);}else{c('Style').set(this.node,'height',null);c('Style').set(this.node,'width',null);if(this._placeholder.parentNode){c('DOM').replace(this._placeholder,this.node);}else c('DOM').remove(this.node);}this._extracted=l;return this;};j.prototype.getInlineNode=function(){'use strict';return this._extracted?this._placeholder:this.node;};j.prototype.isDisplayed=function(){'use strict';var l=this.getInlineNode();return l.offsetWidth>0&&l.offsetHeight>0;};j.prototype.getStickyContainer=function(){'use strict';return this._stickyContainer;};j.prototype.updateContainer=function(){'use strict';var l=i(this.node);k.getInstance(l).register(this);};j.prototype.destroy=function(){'use strict';this.getStickyContainer().unregister(this);};j.getStickyContainer=function(l){'use strict';return k.getInstance(i(l));};function k(l){'use strict';this.node=l;this._areas=[];this._fixTarget=null;this._fixedArea=null;this._initialized=false;this._layer=new (c('ContextualLayer'))({permanent:true},c('DOM').create('div')).setInsertParent(this.node.parentNode).disableBehavior(c('LayerHideOnTransition'));this._listener=c('Event').listen(l,'scroll',this.update.bind(this));c('CSS').addClass(l,"_pts");c('DataStore').set(l,'StickyContainer',this);}k.prototype.isDisplayed=function(){'use strict';return this.node.offsetWidth>0&&this.node.offsetHeight>0;};k.prototype.register=function(l){'use strict';if(l.getStickyContainer())l.getStickyContainer().unregister(l);l._stickyContainer=this;this._areas.push(l);this.update();return this;};k.prototype.unregister=function(l){'use strict';c('removeFromArray')(this._areas,l);this.update();};k.prototype.update=function(){'use strict';if(!this.isDisplayed())return this;var l=null,m=this,n=c('Scroll').getTop(this.node),o;for(var p=0;p<this._areas.length;p++){var q=this._areas[p],r=q.getInlineNode();if(!q.isDisplayed())continue;if(!c('DOM').contains(this.node.parentNode,r))continue;var s=r.offsetTop;if(s<=n){if(o===undefined||s>o){l=q;o=s;}}else if(l){var t=c('Vector').getElementDimensions(l.node).y;if(s-t<n)m=q;break;}}if(this._fixedArea===l&&this._fixTarget===m){this._fixedArea&&this._fixedArea.update();}else{if(this._fixedArea&&this._fixedArea!==l)this._unfixArea(this._fixedArea);if(l)this._fixAreaTo(l,m);this._fixedArea=l;this._fixTarget=m;}return this;};k.prototype.destroy=function(){'use strict';this._listener&&this._listener.remove();this._listener=null;};k.prototype._fixAreaTo=function(l,m){'use strict';this._layer.hide();l.setExtracted(true);if(m instanceof k){this._layer.setInsertParent(this.node.parentNode).setAlignment(c('Locale').isRTL()?'right':'left').setContext(this.node);}else this._layer.setInsertParent(this.node).setContext(m.node);this._layer.setContent(l.node).show();c('CSS').addClass(l.node,"_57kj");};k.prototype._unfixArea=function(l){'use strict';this._layer.hide();l.setExtracted(false);c('CSS').removeClass(l.node,"_57kj");};k.getInstance=function(l){'use strict';var m=c('DataStore').get(l,'StickyContainer');return m||new k(l);};f.exports=j;}),null);