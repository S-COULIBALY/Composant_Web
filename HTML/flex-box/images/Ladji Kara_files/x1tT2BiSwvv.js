if (self.CavalryLogger) { CavalryLogger.start_js(["PBEwR"]); }

__d("NotificationConstants",[],(function a(b,c,d,e,f,g){f.exports={PayloadSourceType:{UNKNOWN:0,USER_ACTION:1,LIVE_SEND:2,ENDPOINT:3,INITIAL_LOAD:4,OTHER_APPLICATION:5,SYNC:6,CLIENT:7}};}),null);
__d("arrayStableSort",[],(function a(b,c,d,e,f,g){function h(i,j){return i.map(function(k,l){return {data:k,index:l};}).sort(function(k,l){return j(k.data,l.data)||k.index-l.index;}).map(function(k){return k.data;});}f.exports=h;}),null);
__d('RangedCallbackManager',['CallbackManagerController','arrayStableSort','createObjectFrom'],(function a(b,c,d,e,f,g){function h(i,j,k){'use strict';this.$RangedCallbackManager1=[];this.$RangedCallbackManager2=false;this.$RangedCallbackManager3=false;this.$RangedCallbackManager4={};this.$RangedCallbackManager5=new (c('CallbackManagerController'))(this.$RangedCallbackManager6.bind(this));this.$RangedCallbackManager7=i;this.$RangedCallbackManager8=j;this.$RangedCallbackManager9=k;}h.prototype.executeOrEnqueue=function(i,j,k,l,m){'use strict';return this.$RangedCallbackManager5.executeOrEnqueue({start:i,limit:j},k,{strict:!!l,skipOnStrictHandler:m});};h.prototype.unsubscribe=function(i){'use strict';this.$RangedCallbackManager5.unsubscribe(i);};h.prototype.getUnavailableResources=function(i){'use strict';var j=this.$RangedCallbackManager5.getRequest(i),k=[];if(j&&!this.$RangedCallbackManager2){var l=j.request,m=this.$RangedCallbackManager10(j.options),n=l.start+l.limit;for(var o=m.length;o<n;o++)k.push(o);}return k;};h.prototype.addResources=function(i){'use strict';i.forEach(function(j){if(!this.$RangedCallbackManager4[j]){this.$RangedCallbackManager4[j]=true;this.$RangedCallbackManager1.push(j);this.$RangedCallbackManager3=null;}}.bind(this));this.resortResources();this.$RangedCallbackManager5.runPossibleCallbacks();};h.prototype.addResourcesWithoutSorting=function(i,j){'use strict';var k=this.$RangedCallbackManager1.slice(0,j);k=k.concat(i);k=k.concat(this.$RangedCallbackManager1.slice(j));this.$RangedCallbackManager1=k;Object.assign(this.$RangedCallbackManager4,c('createObjectFrom')(i,true));this.$RangedCallbackManager3=null;this.$RangedCallbackManager5.runPossibleCallbacks();};h.prototype.removeResources=function(i){'use strict';i.forEach(function(j){if(this.$RangedCallbackManager4[j]){this.$RangedCallbackManager4[j]=false;var k=this.$RangedCallbackManager1.indexOf(j);if(k!=-1)this.$RangedCallbackManager1.splice(k,1);}}.bind(this));};h.prototype.removeAllResources=function(){'use strict';this.$RangedCallbackManager1=[];this.$RangedCallbackManager4={};};h.prototype.resortResources=function(){'use strict';this.$RangedCallbackManager1=c('arrayStableSort')(this.$RangedCallbackManager1,function(i,j){return this.$RangedCallbackManager8(this.$RangedCallbackManager7(i),this.$RangedCallbackManager7(j));}.bind(this));};h.prototype.setReachedEndOfArray=function(){'use strict';if(!this.$RangedCallbackManager2){this.$RangedCallbackManager2=true;this.$RangedCallbackManager3=null;this.$RangedCallbackManager5.runPossibleCallbacks();}};h.prototype.hasReachedEndOfArray=function(){'use strict';return this.$RangedCallbackManager2;};h.prototype.setError=function(i){'use strict';if(this.$RangedCallbackManager3!==i){this.$RangedCallbackManager3=i;this.$RangedCallbackManager5.runPossibleCallbacks();}};h.prototype.getError=function(i,j,k){'use strict';var l=this.$RangedCallbackManager10({strict:k});return i+j>l.length?this.$RangedCallbackManager3:null;};h.prototype.hasResource=function(i){'use strict';return this.$RangedCallbackManager4[i];};h.prototype.getResourceAtIndex=function(i){'use strict';return this.$RangedCallbackManager1[i];};h.prototype.getAllResources=function(){'use strict';return this.$RangedCallbackManager1.concat();};h.prototype.getCurrentArraySize=function(i){'use strict';return this.$RangedCallbackManager10(i).length;};h.prototype.$RangedCallbackManager10=function(i){'use strict';var j=this.$RangedCallbackManager1;if(i&&i.strict){var k=i.skipOnStrictHandler||this.$RangedCallbackManager9;if(k)j=j.filter(k);}return j;};h.prototype.$RangedCallbackManager6=function(i,j){'use strict';var k=this.$RangedCallbackManager10(j);if(!this.$RangedCallbackManager2&&!this.$RangedCallbackManager3&&i.start+i.limit>k.length){return false;}else{var l=k.slice(i.start,i.start+i.limit),m=i.start+i.limit>k.length?this.$RangedCallbackManager3:null;return [l,m];}};h.prototype.getElementsUntil=function(i){'use strict';var j=[];for(var k=0;k<this.$RangedCallbackManager1.length;k++){var l=this.$RangedCallbackManager7(this.$RangedCallbackManager1[k]);if(this.$RangedCallbackManager8(l,i)>0)break;j.push(this.$RangedCallbackManager1[k]);}return j;};f.exports=h;}),null);
__d('NotificationStore',['BizSiteIdentifier.brands','BusinessUserConf','KeyedCallbackManager','NotificationConstants','NotificationUpdates','RangedCallbackManager','MercuryServerDispatcher'],(function a(b,c,d,e,f,g){h.getInstance=function(l,m,n){'use strict';var o=m?m:'_',p=n?n:'_',q='(uri)'+l+'(f)'+o+'(c)'+p;if(!Object.prototype.hasOwnProperty.call(h.$EndpointState1,q))h.$EndpointState1[q]=new h();return h.$EndpointState1[q];};function h(){'use strict';this.notifications=new (c('KeyedCallbackManager'))();var l=function m(n){var o=this.notifications.getResource(n);return o.creation_time;};this.order=new (c('RangedCallbackManager'))(l.bind(this),function(m,n){return n-m;});this.graphQLPageInfo=null;}h.$EndpointState1={};var i=c('BizSiteIdentifier.brands').isBizSite()?c('BizSiteIdentifier.brands').getBusinessID():null;c('NotificationUpdates').subscribe('update-notifications',function(l,m){var n=m.filter,o=m.page_info,p=m.classification,q=m.endpoint||j,r=h.getInstance(q,n,p);if(o)r.graphQLPageInfo=o;if(m.nodes===undefined)return;var s,t=[],u={},v=m.nodes||[],w;v.forEach(function(x){s=x.alert_id;w=r.notifications.getResource(s);if(!w||w.creation_time<x.creation_time){t.push(s);u[s]=x;}});r.notifications.addResourcesAndExecute(u);r.order.addResources(t);c('NotificationUpdates').didUpdateNotifications(t);});var j='/ajax/notifications/client/get.php',k={getNotifications:function l(m,n){var o=arguments.length<=2||arguments[2]===undefined?j:arguments[2],p=arguments[3],q=arguments[4],r=h.getInstance(o,p,q),s=r.order.executeOrEnqueue(0,m,function(aa){var ba=r.notifications.executeOrEnqueue(aa,n);}),t=r.order.getUnavailableResources(s);if(t.length){r.order.unsubscribe(s);var u=k.canFetchMore(o,p,q);if(!u){r.notifications.executeOrEnqueue(r.order.getAllResources(),n);return;}var v=r.graphQLPageInfo,w=v&&v.end_cursor||null,x;if(w){var y=Math.max.apply(null,t),z=r.order.getCurrentArraySize();x=y-z+1;}else x=m;c('MercuryServerDispatcher').trySend(o,{businessID:i,businessUserID:c('BusinessUserConf').biz_user_id,filter:p,cursor:w,length:x,classification:q});}},getAll:function l(m){var n=arguments.length<=1||arguments[1]===undefined?j:arguments[1],o=arguments[2],p=arguments[3];k.getNotifications(k.getCount(n,o),m,n,o,p);},getCount:function l(){var m=arguments.length<=0||arguments[0]===undefined?j:arguments[0],n=arguments[1],o=arguments[2],p=h.getInstance(m,n,o);return p.order.getAllResources().length;},canFetchMore:function l(){var m=arguments.length<=0||arguments[0]===undefined?j:arguments[0],n=arguments[1],o=arguments[2],p=h.getInstance(m,n,o),q=p.graphQLPageInfo;return !q||!Object.prototype.hasOwnProperty.call(q,'has_next_page')||q.has_next_page;},registerEndpoint:function l(){var m=arguments.length<=0||arguments[0]===undefined?j:arguments[0],n={};n[m]={mode:c('MercuryServerDispatcher').IMMEDIATE,handler:function o(p){p.endpoint=m;c('NotificationUpdates').handleUpdate(c('NotificationConstants').PayloadSourceType.ENDPOINT,p);}};c('MercuryServerDispatcher').registerEndpoints(n);},setBusinessID:function l(m){i=m;}};k.registerEndpoint(j);f.exports=k;}),null);
__d('NotificationTokens',['CurrentUser'],(function a(b,c,d,e,f,g){var h={tokenizeIDs:function i(j){return j.map(function(k){return c('CurrentUser').getID()+':'+k;});},untokenizeIDs:function i(j){return j.map(function(k){return k.split(':')[1];});}};f.exports=h;}),null);
__d('NotificationUpdates',['Arbiter','BusinessUserConf','ChannelConstants','JSLogger','NotificationConstants','NotificationTokens','LiveTimer','createObjectFrom','NotificationStore'],(function a(b,c,d,e,f,g){var h={},i={},j={},k={},l=[],m=0,n=void 0,o=new (c('Arbiter'))(),p=c('JSLogger').create('notification_updates');function q(){if(m)return;var v=h,w=i,x=j,y=k;h={};i={};j={};k={};s('notifications-updated',v);if(Object.keys(w).length)s('seen-state-updated',w);if(Object.keys(x).length)s('read-state-updated',x);if(Object.keys(y).length)s('hidden-state-updated',y);l.pop();}function r(){if(l.length)return l[l.length-1];return c('NotificationConstants').PayloadSourceType.UNKNOWN;}function s(event,v){u.inform(event,{updates:v,source:r()});}var t=null,u={getserverTime:function v(){return t;},setEndPoint:function v(w){n=w;},handleUpdate:function v(w,x){if(x.nodes&&Array.isArray(x.nodes))x.nodes=this._filterNodesBasedOnBusinessUser(x.nodes,c('BusinessUserConf').biz_user_id);if(x.servertime){t=x.servertime;c('LiveTimer').restart(x.servertime);}if(n&&x.nodes&&Array.isArray(x.nodes)&&w===c('NotificationConstants').PayloadSourceType.LIVE_SEND){var y=c('NotificationStore');y.getNotifications(x.nodes.length,function(z){if(x.nodes)x.nodes=this._filterNodesBasedOnEndPoint(z,x.nodes);this._updateWithPayload(w,x);}.bind(this),n);}else this._updateWithPayload(w,x);},_updateWithPayload:function v(w,x){if(Object.keys(x).length)this.synchronizeInforms(function(){l.push(w);var y=babelHelpers['extends']({payloadsource:r()},x);this.inform('update-notifications',y);this.inform('update-seen',y);this.inform('update-read',y);this.inform('update-hidden',y);}.bind(this));},getArbiter:function v(){return o;},inform:function v(event,w){return o.inform(event,w);},subscribe:function v(event,w){return o.subscribe(event,w);},didUpdateNotifications:function v(w){Object.assign(h,c('createObjectFrom')(w));q();},didUpdateSeenState:function v(w){Object.assign(i,c('createObjectFrom')(w));q();},didUpdateReadState:function v(w){Object.assign(j,c('createObjectFrom')(w));q();},didUpdateHiddenState:function v(w){Object.assign(k,c('createObjectFrom')(w));q();},synchronizeInforms:function v(w){m++;try{w();}catch(x){throw x;}finally{m--;q();}},_filterNodesBasedOnEndPoint:function v(w,x){return x.filter(function(y){return !!w[y.alert_id];});},_filterNodesBasedOnBusinessUser:function v(w,x){return w.filter(function(y){return x==y.biz_user_id;});}};c('Arbiter').subscribe(c('ChannelConstants').getArbiterType('notification_json'),function(v,w){var x=Date.now(),y=w.obj.nodes;if(y){y.forEach(function(aa){aa.receivedTime=x;});p.debug('notifications_received',y);var z=w.obj.servertime;u.handleUpdate(c('NotificationConstants').PayloadSourceType.LIVE_SEND,{nodes:y,servertime:z});}});c('Arbiter').subscribe(c('ChannelConstants').getArbiterType('notifications_seen'),function(v,w){var x=c('NotificationTokens').tokenizeIDs(w.obj.alert_ids);u.handleUpdate(c('NotificationConstants').PayloadSourceType.LIVE_SEND,{seenState:c('createObjectFrom')(x)});});c('Arbiter').subscribe(c('ChannelConstants').getArbiterType('notifications_read'),function(v,w){var x=c('NotificationTokens').tokenizeIDs(w.obj.alert_ids);u.handleUpdate(c('NotificationConstants').PayloadSourceType.LIVE_SEND,{readState:c('createObjectFrom')(x)});});c('Arbiter').subscribe(c('ChannelConstants').getArbiterType('notification_hidden'),function(v,w){var x=c('NotificationTokens').tokenizeIDs([w.obj.notif_id+'']);u.handleUpdate(c('NotificationConstants').PayloadSourceType.LIVE_SEND,{hiddenState:c('createObjectFrom')(x)});});f.exports=u;}),null);
__d("XNotificationsOptionsController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/notifications\/feedback\/option\/",{notif_id:{type:"Int",required:true},undo:{type:"Bool",defaultValue:false},server_action:{type:"String",required:true},biz_user_id:{type:"Int"}});}),null);
__d('NotificationUserActions',['AsyncRequest','Bootloader','BusinessUserConf','NotificationConstants','NotificationTokens','NotificationUpdates','XNotificationsOptionsController','createObjectFrom','emptyFunction'],(function a(b,c,d,e,f,g){var h=c('NotificationConstants').PayloadSourceType.USER_ACTION,i=false;function j(n){n.biz_user_id=c('BusinessUserConf').biz_user_id;new (c('AsyncRequest'))('/ajax/notifications/mark_read.php').setData(n).setAllowCrossPageTransition(true).send();}function k(n){var o={};n.forEach(function(p,q){o['alert_ids['+q+']']=p;});return o;}function l(n,o,p,q,r){var s=c('XNotificationsOptionsController').getURIBuilder().setInt('notif_id',c('NotificationTokens').untokenizeIDs([n])[0]).setInt('biz_user_id',c('BusinessUserConf').biz_user_id).setBool('undo',q).setString('server_action',r).getURI(),t=function u(v){if(!v.payload)throw new Error('No response from notif option!');c('NotificationUpdates').handleUpdate(h,{hiddenState:c('createObjectFrom')([n],!v.payload.visible)});if(v.payload)o(v.payload);};new (c('AsyncRequest'))(s).setHandler(t||c('emptyFunction')).setErrorHandler(p||c('emptyFunction')).send();}var m={markNotificationsAsSeen:function n(o){var p=document.getElementById('notificationsCountValue'),q=null;if(p)q=p.textContent;c('NotificationUpdates').handleUpdate(h,{seenState:c('createObjectFrom')(o)});var r=c('NotificationTokens').untokenizeIDs(o),s=k(r);s.seen=true;if(q)s.badgeCount=q;j(s);},setNextIsFromReadButton:function n(o){i=o;},markNotificationsAsRead:function n(o){c('NotificationUpdates').handleUpdate(h,{readState:c('createObjectFrom')(o)});var p=c('NotificationTokens').untokenizeIDs(o),q=k(p);if(i){q.from_read_button=true;i=false;}j(q);},markAllNotificationsAsRead:function n(){c('Bootloader').loadModules(["NotificationSeenState"],function(o){var p=o.getUnreadIDs();if(p.length>0)c('NotificationUpdates').handleUpdate(h,{readState:c('createObjectFrom')(p)});var q={read:true};if(i){q.from_read_button=true;i=false;}j(q);},'NotificationUserActions');},sendNotifOption:function n(o,p,q,r){l(o,p,q,false,r);},undoNotifOption:function n(o,p,q,r){l(o,p,q,true,r);}};f.exports=m;}),null);
__d("XQuickPromotionSimpleLoggingController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/qp\/action\/log\/",{qp_id:{type:"Int",required:true},qp_action:{type:"Enum",enumType:1},qp_instance_log_data:{type:"StringToStringMap",defaultValue:{}},qp_event:{type:"String"}});}),null);