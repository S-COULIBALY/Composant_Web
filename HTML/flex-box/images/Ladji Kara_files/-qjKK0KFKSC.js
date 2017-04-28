if (self.CavalryLogger) { CavalryLogger.start_js(["jSq\/k"]); }

__d('MapsReporterTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){'use strict';function h(){this.clear();}h.prototype.log=function(){c('GeneratedLoggerUtils').log('logger:MapsReporterLoggerConfig',this.$MapsReporterTypedLogger1,c('Banzai').BASIC);};h.prototype.logVital=function(){c('GeneratedLoggerUtils').log('logger:MapsReporterLoggerConfig',this.$MapsReporterTypedLogger1,c('Banzai').VITAL);};h.prototype.clear=function(){this.$MapsReporterTypedLogger1={};return this;};h.prototype.updateData=function(j){this.$MapsReporterTypedLogger1=babelHelpers['extends']({},this.$MapsReporterTypedLogger1,j);return this;};h.prototype.setCategory=function(j){this.$MapsReporterTypedLogger1.category=j;return this;};h.prototype.setMapURI=function(j){this.$MapsReporterTypedLogger1.map_uri=j;return this;};h.prototype.setStage=function(j){this.$MapsReporterTypedLogger1.stage=j;return this;};h.prototype.setUserComment=function(j){this.$MapsReporterTypedLogger1.user_comment=j;return this;};h.prototype.setVC=function(j){this.$MapsReporterTypedLogger1.vc=j;return this;};var i={category:true,map_uri:true,stage:true,user_comment:true,vc:true};f.exports=h;}),null);
__d('FBTilesReportButton.react',['ix','fbt','AdsTextInput.react','ContextualDialogArrow','Image.react','Link.react','MapsReporterTypedLogger','MenuSeparator.react','PopoverMenu.react','React','ReactXUIMenu','SimpleXUIDialog','XUIDialogButton.react','XUIDialogCancelButton.react','XUIDialogCloseButton.react','fbglyph'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k,l=c('ReactXUIMenu').Item;j=babelHelpers.inherits(m,c('React').Component);k=j&&j.prototype;function m(n){k.constructor.call(this,n);this.STAGE={CLICKED_BUTTON:'init',SELECTED_CATEGORY:'category',SUBMITTED_COMMENT:'submit_comment',REDIRECTED_TO_EXTERNAL_SITE:'external'};this.CATEGORY=[{category:'lineLabel',itemLabel:i._("Nom de route"),itemIcon:h("114032"),title:i._("Signaler un probl\u00e8me avec le nom d\u2019une route"),hint:i._("Quel nom de route est incorrect\u00a0? (facultatif)")},{category:'line',itemLabel:i._("Forme de route"),itemIcon:h("114088"),title:i._("Signaler un probl\u00e8me avec la forme de la route"),hint:i._("Quelle route est mal form\u00e9e\u00a0? (facultatif)")},{category:'lineMissing',itemLabel:i._("Route manquante"),itemIcon:h("114009"),title:i._("Signaler une route manquante"),hint:i._("Quelle route manque\u00a0? (facultatif)")},{category:'polygon',itemLabel:i._("Forme d\u2019un immeuble ou d\u2019un parc"),itemIcon:h("113021"),title:i._("Signaler un probl\u00e8me avec la forme d\u2019un immeuble ou d\u2019un parc"),hint:i._("Quel immeuble ou parc est mal form\u00e9\u00a0? (facultatif)")},{category:'border',itemLabel:i._("Fronti\u00e8re du pays, de l\u2019\u00e9tat ou de la ville"),itemIcon:h("113681"),title:i._("Signaler un probl\u00e8me avec une fronti\u00e8re"),hint:i._("Quelle fronti\u00e8re est mal dessin\u00e9e\u00a0? (facultatif)")},{category:'other',itemLabel:i._("Autre"),itemIcon:h("112584"),title:i._("Signaler un probl\u00e8me avec la carte"),hint:i._("Qu\u2019est-ce qui ne va pas avec la carte\u00a0? (Facultatif)")}];this.$FBTilesReportButton6=function(p){this.setState({comment:p});}.bind(this);this.$FBTilesReportButton2=function(){if(this.state.selectedCategory==='')this.$FBTilesReportButton7(this.STAGE.CLICKED_BUTTON);}.bind(this);this.$FBTilesReportButton3=function(){this.$FBTilesReportButton7(this.STAGE.SELECTED_CATEGORY);}.bind(this);this.$FBTilesReportButton4=function(){this.$FBTilesReportButton7(this.STAGE.REDIRECTED_TO_EXTERNAL_SITE);window.open(this.state.reportURL,'_blank');}.bind(this);this.$FBTilesReportButton5=function(){this.$FBTilesReportButton7(this.STAGE.SUBMITTED_COMMENT);var p=i._("Merci"),q=i._("Vos commentaires nous aident \u00e0 am\u00e9liorer les cartes Facebook pour tous."),r=c('React').createElement(c('XUIDialogCloseButton.react'),{use:'confirm'});c('SimpleXUIDialog').showEx(q,p,r);}.bind(this);var o=this.props.mapConfig();this.state={mapURI:o.mapURI?o.mapURI:o.reportURL,mapSource:o.mapSource,reportURL:o.reportURL,selectedCategory:'',selectedCategoryTitle:'',selectedCategoryHint:'',comment:''};}m.prototype.render=function(){var n,o=this,p=[c('React').createElement(l,{key:'title',disabled:true},i._("Signaler un probl\u00e8me avec")),c('React').createElement(c('MenuSeparator.react'),{key:'sep'})],q=function s(t){var u=o.CATEGORY[t],v=c('React').createElement(c('Image.react'),{src:u.itemIcon});p.push(c('React').createElement(l,{key:u.category,icon:v,onclick:function(){this.setState({selectedCategory:u.category,selectedCategoryTitle:u.title.toString(),selectedCategoryHint:u.hint.toString()});this.$FBTilesReportButton1();}.bind(o)},u.itemLabel));};for(var r=0;r<this.CATEGORY.length;r++)q(r);return c('React').createElement(c('PopoverMenu.react'),{alignh:'right',position:'above',menu:c('React').createElement(c('ReactXUIMenu'),null,p),layerBehaviors:[c('ContextualDialogArrow')],onHide:this.$FBTilesReportButton2},c('React').createElement(c('Link.react'),{ref:'reportButton',className:this.props.className},i._("Signaler")));};m.prototype.$FBTilesReportButton1=function(){var n=this.props.mapConfig();this.setState({mapURI:n.mapURI?n.mapURI:n.reportURL,mapSource:n.mapSource,reportURL:n.reportURL});if(n.mapSource==='HERE'){var o=c('React').createElement('div',null,c('React').createElement(c('XUIDialogCancelButton.react'),{onClick:this.$FBTilesReportButton3}),c('React').createElement(c('XUIDialogButton.react'),{action:'cancel',use:'confirm',label:i._("Ouvert"),onClick:this.$FBTilesReportButton4}));c('SimpleXUIDialog').showEx(i._({"*":"Cette carte est g\u00e9r\u00e9e par des fournisseurs tiers. Vous allez \u00eatre redirig\u00e9(e) vers ceux-ci pour donner votre avis.","16777216":"Cette carte est g\u00e9r\u00e9e par des fournisseurs tiers. Vous allez \u00eatre redirig\u00e9 vers ceux-ci pour donner votre avis.","33554432":"Cette carte est g\u00e9r\u00e9e par des fournisseurs tiers. Vous allez \u00eatre redirig\u00e9e vers ceux-ci pour donner votre avis.","__vcg":1}),null,o);}else{var p=c('React').createElement('div',null,c('React').createElement(c('XUIDialogCancelButton.react'),{onClick:this.$FBTilesReportButton3}),c('React').createElement(c('XUIDialogButton.react'),{action:'cancel',use:'confirm',label:i._("Envoyer"),onClick:this.$FBTilesReportButton5}));c('SimpleXUIDialog').showEx(c('React').createElement(c('AdsTextInput.react'),{multiline:true,placeholder:this.state.selectedCategoryHint,onChange:this.$FBTilesReportButton6}),this.state.selectedCategoryTitle,p);}};m.prototype.$FBTilesReportButton7=function(n){new (c('MapsReporterTypedLogger'))().setStage(n).setCategory(this.state.selectedCategory).setUserComment(this.state.comment).setMapURI(this.state.mapURI).log();};f.exports=m;}),null);
__d('FBTilesStaticReportButton.react',['React','FBTilesReportButton.react'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('React').Component);i=h&&h.prototype;function j(k){'use strict';i.constructor.call(this,k);this.$FBTilesStaticReportButton1=function(){return this.props.staticMapConfig;}.bind(this);}j.prototype.render=function(){'use strict';return c('React').createElement(c('FBTilesReportButton.react'),{className:this.props.className,mapConfig:this.$FBTilesStaticReportButton1});};f.exports=j;}),null);
__d('EventsToggle',['CSS','Event'],(function a(b,c,d,e,f,g){function h(i,j,k,l,m){'use strict';this.$EventsToggle1=j;this.$EventsToggle2=k;this.$EventsToggle3=i;this.$EventsToggle4=l;this.$EventsToggle5=m;var n=this.toggle.bind(this);if(this.$EventsToggle5&&this.$EventsToggle5.href)c('Event').listen(this.$EventsToggle5,'click',this.clickTitle);if(this.$EventsToggle4){c('Event').listen(this.$EventsToggle4,'click',n);}else if(this.$EventsToggle1)c('Event').listen(this.$EventsToggle1,'click',n);}h.prototype.toggle=function(){'use strict';if(this.$EventsToggle3)c('CSS').toggleClass(this.$EventsToggle3,'hidden_elem');if(this.$EventsToggle1)c('CSS').toggle(this.$EventsToggle1);if(this.$EventsToggle2)c('CSS').toggle(this.$EventsToggle2);};h.prototype.clickTitle=function(i){'use strict';i.stopPropagation();};f.exports=h;}),null);
__d("XEventTicketURIClickedAsyncLogController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/events\/ticket\/",{event_id:{type:"Int"},clicked_ticket_info_id:{type:"Int"},action_context:{type:"StringToStringMap",required:true}});}),null);
__d('EventTicketURIClickedAsyncLog',['Event','AsyncRequest','XEventTicketURIClickedAsyncLogController'],(function a(b,c,d,e,f,g){var h={onClick:function i(j,k,l,m){c('Event').listen(j,'click',function(){var n=c('XEventTicketURIClickedAsyncLogController').getURIBuilder().setInt('event_id',k).setInt('clicked_ticket_info_id',l).setStringToStringMap('action_context',m).getURI();new (c('AsyncRequest'))().setURI(n).send();});}};f.exports=h;}),null);