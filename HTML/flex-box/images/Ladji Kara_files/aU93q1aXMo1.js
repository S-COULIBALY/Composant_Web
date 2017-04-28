if (self.CavalryLogger) { CavalryLogger.start_js(["wbIsU"]); }

__d("VideoChainingCaller",[],(function a(b,c,d,e,f,g){f.exports={INTERNAL:"internal",WWW_FEED_PIVOTS:"www_feed_pivots",WWW_FEED_SNOWLIFT:"www_feed_snowlift",MISC_PHOTO_SET:"misc_photo_set",MOBILE:"mobile",SEARCH:"search",WWW_FEED_RHC:"www_feed_rhc",WWW_PERMALINK:"www_permalink",WWW_PERMALINK_RHC:"www_permalink_rhc",WWW_PERMALINK_RHC_FROM_NOTIFICATION:"www_permalink_rhc_from_notification",MY_VIDEO_CHANNELS_ENT_QUERY:"my_video_channels_ent_query",TOP_FOLLOWED_VIDEO_CHANNELS_ENT_QUERY:"top_followed_video_channels_ent_query",BADGE:"badge",PAGINATION:"pagination",SUBTITLE:"subtitle",CHANNEL_VIEW_FROM_UNKNOWN:"channel_view_from_unknown",CHANNEL_VIEW_FROM_NEWSFEED:"channel_view_from_newsfeed",CHANNEL_VIEW_FROM_EXPLOREFEED:"channel_view_from_explorefeed",LIVE_INDEXER_FROM_EXPLOREFEED:"live_indexer_from_explorefeed",CHANNEL_VIEW_FROM_SEARCH:"channel_view_from_search",CHANNEL_VIEW_FROM_NEWSFEED_PIVOT:"channel_view_from_newsfeed_pivot",NEWSFEED_PIVOT_INLINE:"newsfeed_pivot_inline",MOBILE_NEWSFEED_PIVOT_INLINE:"mobile_newsfeed_pivot_inline",CHANNEL_VIEW_FROM_PAGE_CALL_TO_ACTION:"channel_view_from_page_call_to_action",CHANNEL_VIEW_FROM_PAGE_TIMELINE:"channel_view_from_page_timeline",CHANNEL_VIEW_FROM_PAGE_TIMELINE_FEATURED:"channel_view_from_page_timeline_featured",CHANNEL_VIEW_FROM_PAGE_VIDEO_TAB:"channel_view_from_page_video_tab",CHANNEL_VIEW_FROM_USER_TIMELINE:"channel_view_from_user_timeline",CHANNEL_VIEW_FROM_USER_VIDEO_TAB:"channel_view_from_user_video_tab",CHANNEL_VIEW_FROM_GROUP_TIMELINE:"channel_view_from_group_timeline",CHANNEL_VIEW_FROM_GROUP_VIDEO_TAB:"channel_view_from_group_video_tab",CHANNEL_VIEW_FROM_SAVED_STORY:"channel_view_from_saved_story",SAVED_STORY_INLINE:"saved_story_inline",CHANNEL_VIEW_FROM_SHARED_WITH_YOU_STORY:"channel_view_from_shared_with_you_story",SHARED_WITH_YOU_STORY_INLINE:"shared_with_you_story_inline",CHANNEL_VIEW_FROM_LATEST_FROM_YOUR_CHANNELS_STORY:"channel_view_from_latest_from_your_channels_story",LATEST_FROM_YOUR_CHANNELS_STORY_INLINE:"latest_from_your_channels_story_inline",CHANNEL_VIEW_FROM_CHANNEL_PIVOT:"channel_view_from_channel_pivot",CHANNEL_PIVOT_INLINE:"channel_pivot_inine",CHANNEL_VIEW_FROM_CHANNEL_RECOMMENDED_CHANNEL_STORY:"channel_view_from_recommended_channel_story",RECOMMENDED_CHANNEL_STORY_INLINE:"recommended_channel_story_inline",CHANNEL_VIEW_FROM_VIDEO_HOME:"channel_view_from_video_home",VIDEO_HOME_INLINE:"video_home_inline",VIDEO_HOME_CHANNEL_SEE_ALL:"video_home_channel_see_all",CHANNEL_VIEW_FROM_CASTING:"channel_view_from_casting",CONNECTED_TV:"connected_tv",CONNECTED_TV_DISCOVERY:"connected_tv_discovery",CONNECTED_TV_PLAYER:"connected_tv_player",CONNECTED_TV_PROFILE:"connected_tv_profile",VIDEO_HOME_FEED:"video_home_feed",FEED_SURVEY_SWIPE:"feed_survey_swipe",FEED_PIVOTS_INLINE:"feed_pivots_inline",CHANNEL_VIEW_FROM_FEED_PIVOTS:"channel_view_from_feed_pivots",VIDEO_SETS_CACHE_REFRESH:"video_sets_cache_refresh",VIDEO_SETS_CACHE_CHECK:"video_sets_cache_check",DUMMY_STORY_RECOMMENDED_VIDEOS:"dummy_story_recommended_videos",DUMMY_STORY_FRIENDS_ENJOYING:"dummy_story_friends_enjoying",LIVE_EVENT_VIDEO_SET:"live_event_video_set",LIVE_VIDEOS_SET:"live_videos_set",SINGLE_CREATOR_VIDEO_SET:"single_creator_video_set",FRT_TOOL:"frt_tool",DUMMY_STORY_FRIENDS_ENJOYING_NOW:"dummy_story_friends_enjoying_now",DUMMY_STORY_DUMMY_ACTION:"dummy_story_dummy_action",OCULUS_VIDEO:"oculus_video",TRENDING_DEMOGRAPHICS_LIVE:"trending_demographics_live",LIVE_MAP:"live_map",UNCONNECTED_LIVE_VIDEO:"unconnected_live_video",PROFILE_VIDEO_GALLERY:"profile_video_gallery",CHANNEL_VIEW_FROM_PLAYLIST:"channel_view_from_playlist",OCULUS_SOCIAL_HUB:"oculus_social_hub",AKIRA:"akira",IS_LIVE_VIDEO_CHAINING:"is_live_video_chaining",TAHOE:"tahoe"};}),null);
__d('ContextualLayer.react',['ContextualLayer','React','ReactBrowserEventEmitter','ReactDOM','ReactLayer','Style'],(function a(b,c,d,e,f,g){var h=c('React').PropTypes,i=c('ReactLayer').createClass({propTypes:{contextRef:h.func,context:function j(k,l,m){if(k.context==null==(k.contextRef==null))return new Error('Exactly one of `context` or `contextRef` must be set on `'+(m+'`.'));var n=k[l];if(n!=null){if(typeof n!=='object')return new Error('Invalid `'+l+'` supplied to `'+m+'`, '+'expected a React component.');if(c('React').isValidElement(n))return new Error('Invalid `'+l+'` supplied to `'+m+'`, '+'expected a React component instance. You\'re passing a React '+'descriptor.');}}},immutableProps:{modal:null},createLayer:function j(k){var l=this._getContextNode(),m={context:l,contextBounds:this.props.contextBounds,'data-testid':this.props['data-testid'],position:this.props.position,alignment:this.props.alignment,offsetX:this.props.offsetX,offsetY:this.props.offsetY,addedBehaviors:this.enumerateBehaviors(this.props.behaviors),shouldSetARIAProperties:this.props.shouldSetARIAProperties},n=new (c('ContextualLayer'))(m,k);this._node=k;this._matchContextSize(this.props);if(this.props.contextBounds)n.setContextWithBounds(l,this.props.contextBounds);this._resizeSubscription=n.subscribe('resize',function(o,p){if(c('ReactBrowserEventEmitter').isEnabled()&&this.props.onResize)this.props.onResize(p);}.bind(this));n.conditionShow(this.props.shown);return n;},componentWillUnmount:function j(){if(this._resizeSubscription){this._resizeSubscription.unsubscribe();this._resizeSubscription=null;}},receiveProps:function j(k,l){this.updateBehaviors(l.behaviors,k.behaviors);var m=this._getContextNode();if(k.contextBounds){this.layer.setContextWithBounds(m,k.contextBounds);}else this.layer.setContext(m);this._matchContextSize(k);this.layer.setPosition(k.position);this.layer.setAlignment(k.alignment);this.layer.setOffsetX(k.offsetX);this.layer.setOffsetY(k.offsetY);this.layer.conditionShow(k.shown);},getDefaultEnabledBehaviors:function j(){return c('ContextualLayer').getDefaultBehaviorsAsObject();},_getContextNode:function j(){var k;if(this.props.context){k=c('ReactDOM').findDOMNode(this.props.context);}else if(this.props.contextRef)k=c('ReactDOM').findDOMNode(this.props.contextRef());return k;},_matchContextSize:function j(k){var l=this._node,m=this._getContextNode();if(k.containerWidthMatchContext)c('Style').set(l,'width',m.offsetWidth+'px');if(k.containerHeightMatchContext)c('Style').set(l,'height',m.offsetHeight+'px');}});f.exports=i;}),null);
__d('AbstractTextField.react',['cx','React','Keys','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,k=c('React').Component,l=c('React').Element,m=c('React').PropTypes;i=babelHelpers.inherits(n,k);j=i&&i.prototype;function n(p){'use strict';j.constructor.call(this,p);o.call(this);this.state={focused:false,value:this.props.defaultValue||''};}n.prototype.getValue=function(){'use strict';return this.props.value!=null?String(this.props.value):this.state.value;};n.prototype.cloneElement=function(p){'use strict';return c('React').cloneElement(p,{'aria-activedescendant':this.props['aria-activedescendant'],'aria-autocomplete':this.props['aria-autocomplete'],'aria-label':this.props['aria-label'],'aria-labelledby':this.props['aria-labelledby'],'aria-expanded':this.props['aria-expanded'],'aria-owns':this.props['aria-owns'],'aria-valuenow':this.props['aria-valuenow'],'aria-valuetext':this.props['aria-valuetext'],'data-testid':this.props['data-testid'],required:this.props.required,role:this.props.role,placeholder:this.props.placeholder,autoCapitalize:this.props.autoCapitalize,autoComplete:this.props.autoComplete,autoCorrect:this.props.autoCorrect,onKeyDown:this.onInputKeyDown,onBlur:this.onInputBlur,onFocus:this.onInputFocus,onChange:this.onInputChange,className:this.props.useLabel?p.props.className:c('joinClasses')(p.props.className,this.props.className),dir:this.props.dir,disabled:this.props.disabled,defaultValue:this.props.defaultValue,name:this.props.name,value:this.getValue(),id:this.props.id,maxLength:this.props.maxLength,min:this.props.min,max:this.props.max,pattern:this.props.pattern,style:this.props.style,title:this.props.title,type:this.props.type||p.props.type});};n.prototype.render=function(){'use strict';var p=c('React').Children.only(this.props.children);if(!this.props.useLabel)return this.cloneElement(p);var q=this.props.className;if(this.props.classNames){q=c('joinClasses')(q,this.props.classNames.root);if(!this.getValue())q=c('joinClasses')(q,this.props.classNames.empty);}return c('React').createElement('label',{className:q,style:this.props.styles.label},this.props.leftChild,this.cloneElement(p),this.props.rightChild);};n.defaultProps={useLabel:true,classNames:{root:"_58ak",empty:"_3ct8"},styles:{label:null}};n.propTypes={useLabel:m.bool,leftChild:m.element,rightChild:m.element,classNames:m.shape({root:m.string.isRequired,empty:m.string.isRequired}),styles:m.shape({label:m.object}),'aria-activedescendant':m.string,'aria-autocomplete':m.string,'aria-label':m.string,'aria-labelledby':m.string,'aria-expanded':m.bool,'aria-owns':m.string,'aria-valuenow':m.number,'aria-valuetext':m.string,'data-testid':m.string,autoComplete:m.string,className:m.string,defaultValue:m.string,dir:m.string,disabled:m.bool,id:m.string,max:m.string,maxLength:m.number,min:m.string,name:m.string,onBackspace:m.func,onBackTab:m.func,onBlur:m.func,onChange:m.func,onClick:m.func,onComma:m.func,onDownArrow:m.func,onEnter:m.func,onEscape:m.func,onFocus:m.func,onKeyDown:m.func,onKeyPress:m.func,onKeyUp:m.func,onLeftArrow:m.func,onNoShiftEnter:m.func,onPaste:m.func,onRightArrow:m.func,onShiftDownArrow:m.func,onShiftEnter:m.func,onShiftUpArrow:m.func,onSpace:m.func,onTab:m.func,onUpArrow:m.func,pattern:m.string,placeholder:m.node,required:m.bool,role:m.string,style:m.object,tabIndex:m.number,title:m.string,type:m.string,value:m.string,autoCapitalize:m.string,autoCorrect:m.string};var o=function p(){this.onInputKeyDown=function(q){var r=this.props,s=q.keyCode,t=q.shiftKey;if(s===c('Keys').BACKSPACE&&!t&&r.onBackspace){r.onBackspace(q);}else if(s===c('Keys').TAB&&!t&&r.onTab){r.onTab(q);}else if(s===c('Keys').TAB&&t&&r.onBackTab){r.onBackTab(q);}else if(s===c('Keys').UP){if(t){if(r.onShiftUpArrow)r.onShiftUpArrow(q);}else if(r.onUpArrow)r.onUpArrow(q);}else if(s===c('Keys').DOWN&&r.onDownArrow){if(t){if(r.onShiftDownArrow)r.onShiftDownArrow(q);}else if(r.onDownArrow)r.onDownArrow(q);}else if(s===c('Keys').LEFT&&r.onLeftArrow){r.onLeftArrow(q);}else if(s===c('Keys').RIGHT&&r.onRightArrow){r.onRightArrow(q);}else if(s===c('Keys').RETURN){if(r.onEnter)r.onEnter(q);if(t){if(r.onShiftEnter)r.onShiftEnter(q);}else if(r.onNoShiftEnter)r.onNoShiftEnter(q);}else if(s===c('Keys').ESC&&r.onEscape){r.onEscape(q);}else if(s==c('Keys').COMMA&&r.onComma){r.onComma(q);}else if(s==c('Keys').SPACE&&r.onSpace)r.onSpace(q);if(r.onKeyDown)r.onKeyDown(q);}.bind(this);this.onInputChange=function(q){if(this.props.onChange)this.props.onChange(q);if(this.props.value===null||this.props.value===undefined)this.setState({value:q.target.value});}.bind(this);this.onInputBlur=function(q){if(this.props.onBlur)this.props.onBlur(q);if(!q.isDefaultPrevented())this.setState({focused:false});}.bind(this);this.onInputFocus=function(q){if(this.props.onFocus)this.props.onFocus(q);if(!q.isDefaultPrevented())this.setState({focused:true});}.bind(this);};f.exports=n;}),null);
__d('AbstractTextInput.react',['cx','AbstractTextField.react','React'],(function a(b,c,d,e,f,g,h){var i,j,k=c('React').Component;i=babelHelpers.inherits(l,k);j=i&&i.prototype;l.prototype.render=function(){'use strict';return c('React').createElement(c('AbstractTextField.react'),this.props,c('React').createElement('input',{className:"_58al",onClick:this.props.onClick,onKeyUp:this.props.onKeyUp,onPaste:this.props.onPaste,size:this.props.size,tabIndex:this.props.tabIndex,type:'text',ref:function(m){return this.$AbstractTextInput1=m;}.bind(this)}));};l.prototype.focusInput=function(){'use strict';this.$AbstractTextInput1&&this.$AbstractTextInput1.focus();};l.prototype.blurInput=function(){'use strict';this.$AbstractTextInput1&&this.$AbstractTextInput1.blur();};l.prototype.getTextFieldDOM=function(){'use strict';return this.$AbstractTextInput1;};l.prototype.getValue=function(){'use strict';return this.$AbstractTextInput1?this.$AbstractTextInput1.value:'';};function l(){'use strict';i.apply(this,arguments);}l.propTypes=c('AbstractTextField.react').propTypes;f.exports=l;}),null);
__d('SearchableTextInput.react',['EventListener','React','AbstractTextInput.react','getActiveElement','areEqual'],(function a(b,c,d,e,f,g){var h,i,j=c('React').PropTypes;h=babelHelpers.inherits(k,c('React').Component);i=h&&h.prototype;function k(){var l,m;'use strict';for(var n=arguments.length,o=Array(n),p=0;p<n;p++)o[p]=arguments[p];return m=(l=i.constructor).call.apply(l,[this].concat(o)),this.$SearchableTextInput2=function(){var q=this.props.searchSource.bootstrap(function(){if(this.props.searchOnFocus)this.search(this.props.queryString);}.bind(this));if(q&&q.done)q.done();this.props.onFocus&&this.props.onFocus();}.bind(this),this.$SearchableTextInput3=function(q,r,s){if(this.props.queryString===r)this.props.onEntriesFound(q,r,s);}.bind(this),this.$SearchableTextInput4=function(event){this.props.onChange&&this.props.onChange(event);var q=event.target.value;setTimeout(function(){return this.search(q);}.bind(this));}.bind(this),this.search=function(q,r){this.props.searchSource.search(q,this.$SearchableTextInput3,r||this.props.searchSourceOptions);}.bind(this),this.focusInput=function(){var q=this.getTextFieldDOM();if(c('getActiveElement')()===q){this.$SearchableTextInput2();}else q.offsetHeight&&q.focus();}.bind(this),this.blurInput=function(){var q=this.getTextFieldDOM();q.offsetHeight&&q.blur();}.bind(this),this.getTextFieldDOM=function(){return this.refs.input.getTextFieldDOM();}.bind(this),m;}k.prototype.componentDidMount=function(){'use strict';if(this.props.onPaste)this.$SearchableTextInput1=c('EventListener').listen(this.refs.input.getTextFieldDOM(),'paste',this.props.onPaste);};k.prototype.componentWillReceiveProps=function(l){'use strict';if(l.searchSourceOptions&&!c('areEqual')(l.searchSourceOptions,this.props.searchSourceOptions))this.search(this.props.queryString,l.searchSourceOptions);};k.prototype.componentDidUpdate=function(l){'use strict';if(this.props.searchOnUpdate)if(l.queryString!==this.props.queryString)this.search(this.props.queryString);};k.prototype.componentWillUnmount=function(){'use strict';if(this.$SearchableTextInput1){this.$SearchableTextInput1.remove();this.$SearchableTextInput1=null;}};k.prototype.render=function(){'use strict';var l=this.props.queryString||'';return c('React').createElement(c('AbstractTextInput.react'),babelHelpers['extends']({},this.props,{onChange:this.$SearchableTextInput4,onFocus:this.$SearchableTextInput2,ref:'input',role:'combobox',value:l}));};k.propTypes=babelHelpers['extends']({},c('AbstractTextInput.react').propTypes,{queryString:j.string,searchSource:j.object,searchSourceOptions:j.object,onEntriesFound:j.func.isRequired,searchOnFocus:j.bool,searchOnUpdate:j.bool,required:j.bool,onPaste:j.func,onFocus:j.func,onChange:j.func});f.exports=k;}),null);
__d('TypeaheadView.react',['cx','React'],(function a(b,c,d,e,f,g,h){var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;'use strict';for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.$TypeaheadView1=function(r,s){if(this.props.onSelect)this.props.onSelect(r,s);}.bind(this),this.$TypeaheadView2=function(r){this.props.onHighlight(r);}.bind(this),n;}l.prototype.render=function(){'use strict';var m=this.props,n=m.extraRendererProps,o=m.isVisible,p=m.Renderer,q=babelHelpers.objectWithoutProperties(m,['extraRendererProps','isVisible','Renderer']);return c('React').createElement('div',{className:!o?"hidden_elem":''},p?c('React').createElement(p,babelHelpers['extends']({},q,n)):null);};l.propTypes={entries:k.array.isRequired,extraRendererProps:k.object,highlightedEntry:k.object,isVisible:k.bool,queryString:k.string,Renderer:k.func,selectedEntry:k.object};f.exports=l;}),null);
__d('AbstractTypeahead.react',['cx','AbstractTextField.react','ContextualLayer.react','InputSelection','Event','React','ReactLayeredComponentMixin_DEPRECATED','SearchableTextInput.react','SearchSourceQueryStatus','TypeaheadNavigation','TypeaheadView.react','clearImmediate','getOrCreateDOMID','joinClasses','setImmediate','uniqueID'],(function a(b,c,d,e,f,g,h){var i=c('React').PropTypes,j=[],k=10,l=c('React').createClass({displayName:'AbstractTypeahead',mixins:[c('ReactLayeredComponentMixin_DEPRECATED')],propTypes:babelHelpers['extends']({},c('AbstractTextField.react').propTypes,{ariaLabel:i.string,additionalElements:i.node,inputClassName:i.string,inputID:i.string,inputStyle:i.object,autoCapitalize:i.string,autoComplete:i.string,autoCorrect:i.string,queryString:i.string,searchSource:i.object,searchSourceOptions:i.object,textInputDataTestID:i.string,'data-testid':i.string,excludedEntries:i.object,entryFilter:i.func,additionalEntries:i.array,presenter:i.object.isRequired,onSelectAttempt:i.func,onEntriesFound:i.func,onNoEntriesFound:i.func,onEnterWithoutSelection:i.func,autoHighlight:i.bool,showEntriesOnFocus:i.bool,selectOnBlur:i.bool,blurOnWindowBlur:i.bool,selectOnTab:i.bool,selectOnSpace:i.bool,selectOnComma:i.bool,focusedOnInit:i.bool,hideViewWithEntries:i.bool,disabled:i.bool,entriesWidthMatchContext:i.bool,selectedEntry:i.object,onTypeaheadVisibilityChanged:i.func,onPaste:i.func,navigation:i.object}),getDefaultProps:function m(){return {autoComplete:'off',autoCorrect:'off',blurOnWindowBlur:true,selectOnBlur:false,selectOnTab:true,selectOnSpace:false,selectOnComma:false,hideViewWithEntries:true,entriesWidthMatchContext:true,navigation:c('TypeaheadNavigation')};},getInitialState:function m(){return {highlightedEntry:null,isArrowNavigation:false,isAutoHighlight:this.props.autoHighlight,ariaActiveDescendantID:null,ariaOwneeID:c('uniqueID')(),activeEntries:null,focused:!!this.props.focusedOnInit,viewIsVisible:!!this.props.focusedOnInit};},_onRenderHighlight:function m(n){var o=c('getOrCreateDOMID')(n);this.setState({ariaActiveDescendantID:o});},_determineViewVisibility:function m(n,o){if(!n)return false;var p=n.length>0&&(this.props.showEntriesOnFocus||this.props.queryString&&this.props.queryString.length>0);return !!(o&&(this.props.presenter.alwaysVisibleOnFocus||p));},_onEntriesFound:function m(n,o,p){if(!this.isMounted())return;if(this.props.excludedEntries){var q=this.props.excludedEntries;n=n.filter(function(aa){return !Object.prototype.hasOwnProperty.call(q,aa.getUniqueID())||q[aa.getUniqueID()]===false;});}if(this.props.entryFilter)n=n.filter(this.props.entryFilter);var r=this.props.presenter,s=typeof r.sortEntries==='function'?r.sortEntries(n,this.state.activeEntries,this.props.queryString):n,t=this.props.additionalEntries,u=t?t.length:0,v=s.slice(0,(r.maxEntries||k)-u);if(this.props.additionalEntries){v=v.concat(this.props.additionalEntries);s=typeof r.sortEntries==='function'?r.sortEntries(v,this.state.activeEntries,this.props.queryString):v;v=s.slice(0,r.maxEntries||k);}var w=this._determineViewVisibility(v,this.state.focused);if(!v.length){this.setState({ariaActiveDescendantID:null,activeEntries:v,highlightedEntry:null,isAutoHighlight:this.props.autoHighlight});this._setViewIsVisible(w);if(this.props.onNoEntriesFound&&p===c('SearchSourceQueryStatus').COMPLETE)this.props.onNoEntriesFound();return;}if(this.props.onEntriesFound)this.props.onEntriesFound(v,p);var x=this.state.highlightedEntry,y=x&&v.indexOf(x)!==-1;if(!this.props.autoHighlight){this.setState({activeEntries:v,highlightedEntry:y?x:null});if(w)this._setViewIsVisible(true);return;}var z=this.state.isAutoHighlight;if(z){x=v[0];}else{x=y?x:v[0];z=!y;}this.setState({activeEntries:v,highlightedEntry:x,isAutoHighlight:z});if(w)this._setViewIsVisible(true);},_onInputFocus:function m(){var n=this._determineViewVisibility(this.state.activeEntries,true);if(n)this._setViewIsVisible(true);this.setState({focused:true});this.props.onFocus&&this.props.onFocus();},_onInputBlurWindowSafe:function m(){var n=void 0,o=c('Event').listen(window,'blur',function(){o.remove();c('clearImmediate')(n);});n=c('setImmediate')(function(){o.remove();this._onInputBlur();}.bind(this));},_onInputBlur:function m(){this.setState({focused:false});if(this.props.hideViewWithEntries)this._close();if(this.props.selectOnBlur&&this.state.highlightedEntry&&this.props.onSelectAttempt)this.props.onSelectAttempt(this.state.highlightedEntry);this.props.onBlur&&this.props.onBlur();},_onInputClick:function m(n){var o=this.getTextFieldDOM(),p=c('InputSelection').get(o);if(p&&p.start==p.end)o.select();this.props.onClick&&this.props.onClick(n);},_onEscape:function m(){this._close();this.blurInput();this.setState({focused:false});this.props.onEscape&&this.props.onEscape();},_onEnter:function m(event){if(this.props.onEnterWithoutSelection&&(!this.state.viewIsVisible||!this.state.highlightedEntry)){this.props.onEnterWithoutSelection(event);return;}if(!this.state.viewIsVisible)return;if(!this.state.highlightedEntry){event.preventDefault();return;}if(this.props.hideViewWithEntries)this._close();if(this.props.onSelectAttempt)this.props.onSelectAttempt(this.state.highlightedEntry,event);event.preventDefault();},_onTab:function m(event){this._onKeySelectAttempt(this.props.selectOnTab,event);},_onSpace:function m(event){this._onKeySelectAttempt(this.props.selectOnSpace,event);},_onComma:function m(event){this._onKeySelectAttempt(this.props.selectOnComma,event);},_onKeySelectAttempt:function m(n,event){if(n&&this.state.viewIsVisible&&this.props.onSelectAttempt&&this.state.highlightedEntry){if(this.props.hideViewWithEntries){this._close();event.preventDefault();}this.props.onSelectAttempt(this.state.highlightedEntry,event);}},_onDownArrow:function m(event){var n=this.props.navigation;if(n&&n.moveDown){event.preventDefault();n.moveDown(this.state.activeEntries||j,this.state.highlightedEntry,this._setHighlight);}},_onLeftArrow:function m(event){var n=this.props.navigation;if(n&&n.moveLeft){event.preventDefault();n.moveLeft(this.state.activeEntries||j,this.state.highlightedEntry,this._setHighlight);}},_onRightArrow:function m(event){var n=this.props.navigation;if(n&&n.moveRight){event.preventDefault();n.moveRight(this.state.activeEntries||j,this.state.highlightedEntry,this._setHighlight);}},_onUpArrow:function m(event){var n=this.props.navigation;if(n&&n.moveUp){event.preventDefault();n.moveUp(this.state.activeEntries||j,this.state.highlightedEntry,this._setHighlight);}},_setHighlight:function m(n){this.setState({highlightedEntry:n,isArrowNavigation:true,isAutoHighlight:!n});},_onInputChange:function m(event){if(this.props.onChange)this.props.onChange(event);this._setViewIsVisible(this.state.focused&&(this.props.showEntriesOnFocus||event.target.value.length>0)&&(this.props.presenter.alwaysVisibleOnFocus||this.state.activeEntries!=null&&this.state.activeEntries.length>0));},_onViewHighlight:function m(n){this.setState({highlightedEntry:n,isArrowNavigation:false,isAutoHighlight:false});},_getView:function m(){return c('React').createElement(c('TypeaheadView.react'),{Renderer:this.props.presenter.ViewRenderer,extraRendererProps:babelHelpers['extends']({},this.props.presenter.extraRendererProps,{isArrowNavigation:this.state.isArrowNavigation}),highlightedEntry:this.state.highlightedEntry,selectedEntry:this.props.selectedEntry,isVisible:this.state.viewIsVisible,ariaOwneeID:this.state.ariaOwneeID,onHighlight:this._onViewHighlight,onRenderHighlight:this._onRenderHighlight,onSelect:this.props.onSelectAttempt,entries:this.state.activeEntries||j,queryString:this.props.queryString});},_setViewIsVisible:function m(n){if(n!==this.state.viewIsVisible){if(this.props.onTypeaheadVisibilityChanged)this.props.onTypeaheadVisibilityChanged(n,this.state.activeEntries||j);this.setState({viewIsVisible:n});}},componentWillReceiveProps:function m(n){if(!n.queryString&&!this.props.showEntriesOnFocus)this.clearActiveEntries();},componentDidUpdate:function m(){var n=this._determineViewVisibility(this.state.activeEntries,this.state.focused);if(n)this._setViewIsVisible(true);},renderLayers:function m(){if(!this.props.presenter.useLayer)return {};var n=null,o=null;if(this.props.context){n=this.props.context;}else o=function(){return this.refs.input;}.bind(this);var p=this.props.presenter,q=p.layerComponent||c('ContextualLayer.react');return {typeaheadView:c('React').createElement(q,{alignment:p.alignment,behaviors:p.layerBehaviors,containerWidthMatchContext:this.props.entriesWidthMatchContext,contextRef:o,context:n,'data-testid':this.props['data-testid'],position:p.layerPosition||'below',shown:this.state.viewIsVisible,shouldSetARIAProperties:false,width:p.width},this._getView())};},render:function m(){var n=this.state.activeEntries,o=!!(n&&n.length),p=c('React').createElement(c('SearchableTextInput.react'),{'aria-activedescendant':this.state.ariaActiveDescendantID,'aria-expanded':o,'aria-autocomplete':'list','aria-label':this.props.ariaLabel,'aria-owns':this.state.ariaOwneeID,'data-testid':this.props.textInputDataTestID,required:this.props.required,ref:'input',autoCapitalize:this.props.autoCapitalize,autoComplete:this.props.autoComplete,autoCorrect:this.props.autoCorrect,className:this.props.inputClassName,id:this.props.inputID,name:this.props.name,queryString:this.props.queryString,placeholder:this.props.placeholder,maxLength:this.props.maxLength,searchSource:this.props.searchSource,searchSourceOptions:this.props.searchSourceOptions,searchOnFocus:!!this.props.showEntriesOnFocus,disabled:this.props.disabled,onDownArrow:this._onDownArrow,onLeftArrow:this._onLeftArrow,onRightArrow:this._onRightArrow,onUpArrow:this._onUpArrow,onEntriesFound:this._onEntriesFound,onEscape:this._onEscape,onBlur:this.props.blurOnWindowBlur?this._onInputBlur:this._onInputBlurWindowSafe,onFocus:this._onInputFocus,onChange:this._onInputChange,onTab:this._onTab,onSpace:this._onSpace,onComma:this._onComma,onEnter:this._onEnter,onBackspace:this.props.onBackspace,onPaste:this.props.onPaste,onClick:this._onInputClick,style:this.props.inputStyle,tabIndex:this.props.tabIndex,type:this.props.type}),q=null;if(!this.props.presenter.useLayer)q=this._getView();var r=Object.assign({},this.props);delete r.additionalElements;delete r.additionalEntries;delete r.ariaLabel;delete r.context;delete r.focusAfterSelection;delete r.inputClassName;delete r.inputID;delete r.inputStyle;delete r.searchSource;delete r.searchSourceOptions;delete r.excludedEntries;delete r.presenter;delete r.onBackspace;delete r.onSelectAttempt;delete r.onEntriesFound;delete r.onNoEntriesFound;delete r.onEnterWithoutSelection;delete r.autoHighlight;delete r.showEntriesOnFocus;delete r.selectOnBlur;delete r.blurOnWindowBlur;delete r.selectOnTab;delete r.selectOnComma;delete r.selectOnSpace;delete r.focusedOnInit;delete r.hideViewWithEntries;delete r.disabled;delete r.entriesWidthMatchContext;delete r.selectedEntry;delete r.onTypeaheadVisibilityChanged;delete r.onPaste;delete r.navigation;delete r.type;delete r.tallInput;delete r.viewStyle;delete r.queryString;delete r.onClear;delete r.clearable;delete r.showPhoto;delete r.highlightOnSelect;delete r.maxEntries;delete r.textInputDataTestID;return c('React').createElement('span',babelHelpers['extends']({},r,{className:c('joinClasses')(this.props.className,"_58ah"),onBlur:undefined,onChange:undefined,onClick:undefined,onFocus:undefined,tabIndex:undefined}),p,this.props.additionalElements,q);},componentDidMount:function m(){if(this.props.focusedOnInit)this.focusInput();},clearActiveEntries:function m(){this.setState({ariaActiveDescendantID:null,activeEntries:null,highlightedEntry:null});},focusInput:function m(){var n=this.getTextFieldDOM();if(n.value)c('InputSelection').set(n,n.value.length);this.refs.input.focusInput();},blurInput:function m(){if(this.refs.input.blur){this.refs.input.blur();}else if(this.refs.input.blurInput)this.refs.input.blurInput();},hideView:function m(){this._setViewIsVisible(false);},_close:function m(){this._setViewIsVisible(false);this.clearActiveEntries();},getTextFieldDOM:function m(){return this.refs.input.getTextFieldDOM();}});f.exports=l;}),null);
__d('XUIDialogConfirmButton.react',['fbt','React','XUIDialogButton.react'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){'use strict';return c('React').createElement(c('XUIDialogButton.react'),babelHelpers['extends']({},this.props,{action:'confirm',label:h._("Confirmer")}));};function k(){'use strict';i.apply(this,arguments);}f.exports=k;}),null);
__d('XUITypeaheadTextOnlyView.react',['cx','React','TypeaheadViewItem','TypeaheadViewPropTypes'],(function a(b,c,d,e,f,g,h){var i,j,k=c('React').createClass({displayName:'XUITypeaheadTextOnlyViewItem',mixins:[c('TypeaheadViewItem').Mixin],propTypes:c('TypeaheadViewItem').propTypes,render:function m(){var n=this.props.entry,o="_599m"+(this.props.highlighted?' '+"_599n":'');return c('React').createElement('li',{'aria-label':n.getTitle(),'aria-selected':this.props.highlighted,className:o,key:n.getUniqueID(),onMouseDown:this._onSelect,onMouseEnter:this._onHighlight,role:this.props.role,title:n.getTitle()},c('React').createElement('div',{className:"_599p"},n.getTitle()));}});i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;'use strict';for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.$XUITypeaheadTextOnlyView1=function(r){var s=r===this.props.highlightedEntry;return c('React').createElement(k,{entry:r,highlighted:s,key:r.getUniqueID(),onSelect:this.props.onSelect,onHighlight:this.props.onHighlight,onRenderHighlight:this.props.onRenderHighlight});}.bind(this),n;}l.prototype.render=function(){'use strict';var m="_599r"+(!this.props.entries.length?' '+"_599s":'');return c('React').createElement('ul',{className:m,id:this.props.ariaOwneeID,role:this.props.role},this.props.entries.map(this.$XUITypeaheadTextOnlyView1));};l.propTypes=c('TypeaheadViewPropTypes');l.defaultProps={role:'listbox'};f.exports=l;}),null);