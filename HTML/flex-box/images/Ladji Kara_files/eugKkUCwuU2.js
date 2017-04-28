if (self.CavalryLogger) { CavalryLogger.start_js(["zvUfG"]); }

__d('canUseReactEditor',['UserAgent'],(function a(b,c,d,e,f,g){'use strict';var h=typeof b.getSelection==='function',i=h&&(c('UserAgent').isPlatform('iOS')||c('UserAgent').isPlatform('Linux')||c('UserAgent').isPlatform('Mac OS X')||c('UserAgent').isPlatform('Windows')||c('UserAgent').isPlatform('Chrome OS'))&&(c('UserAgent').isEngine('EdgeHTML >= 12')||c('UserAgent').isEngine('Gecko >= 16')||c('UserAgent').isEngine('Trident >= 5')||c('UserAgent').isEngine('WebKit >= 533.16')&&!c('UserAgent').isBrowser('Mobile Safari < 6'));function j(){return i;}f.exports=j;}),null);
__d('applyEmoticonToContentState',['EmoticonsList','applyEmoticonToContentBlock','getTextAfterNearestEntity'],(function a(b,c,d,e,f,g){'use strict';var h=new RegExp(c('EmoticonsList').regexp.source,'g');function i(j,k){var l=k.getAnchorKey(),m=k.getAnchorOffset(),n=j.getBlockForKey(l),o=c('getTextAfterNearestEntity')(n,m),p,q;while(q!==null){q=h.exec(o);if(q!==null)p=q;}if(!p)return j;var r=p[1];if(!r&&m!==o.length)return j;var s=p[2],t=m-o.length,u=t+p.index+p[1].length,v=j.getBlockMap().set(l,c('applyEmoticonToContentBlock')(n,s,u));m-=s.length-1;return j.merge({blockMap:v,selectionBefore:k,selectionAfter:k.merge({anchorOffset:m,focusOffset:m})});}f.exports=i;}),null);
__d('handleBeforeInputForEmoticon',['DraftModifier','EditorState','applyEmoticonToContentState'],(function a(b,c,d,e,f,g){var h=new RegExp(/[\s'".,!?]/);function i(j,k){var l=j.getSelection();if(!l.isCollapsed()||!k||!h.test(k))return j;var m=j.getCurrentContent(),n=c('applyEmoticonToContentState')(m,l);if(n===m)return j;var o=c('DraftModifier').insertText(n,n.getSelectionAfter(),k);return c('EditorState').push(j,o,'insert-characters');}f.exports=i;}),null);
__d('handleSoftNewlineForEmoticon',['DraftModifier','EditorState','applyEmoticonToContentState'],(function a(b,c,d,e,f,g){function h(i){var j=i.getCurrentContent(),k=i.getSelection(),l=c('applyEmoticonToContentState')(j,k),m=c('DraftModifier').splitBlock(l,j===l?k:l.getSelectionAfter());return c('EditorState').push(i,m,'split-block');}f.exports=h;}),null);
__d('UFIMentionsInput.react',['cx','Arbiter','BanzaiScuba','Bootloader','DraftEntity','DraftModifier','DOMVector','EditorState','EmojiFormat','Input','Keys','MentionsInput.react','React','ReactDOM','UFIUIEvents','URI','UFIConfig','addEmojiInput','addEmojiToEditorState','canUseReactEditor','clickRefAction','createEditorStateWithEntities','createMentionEntity','emptyFunction','getMentionsInputDecorator','getMentionsTextForContentState','getVisibleValueForContentState','handleBeforeInputForEmoticon','handleSoftNewlineForEmoticon','isSoftNewlineEvent','setImmediate'],(function a(b,c,d,e,f,g,h){'use strict';var i=null;if(c('UFIConfig').hasEmojiPicker){i=c('addEmojiInput')(c('MentionsInput.react'));}else i=c('MentionsInput.react');var j=new (c('BanzaiScuba'))('ufi_tinder',null,{addBrowserFields:true,addGeoFields:true,addPredictedGeographyFields:true,addMobileDeviceFields:true,addUser:true}),k=200,l='ufi_comment_composer',m='ufi_reply_composer',n=c('canUseReactEditor')(),o=c('React').PropTypes;function p(t){var u=t.map(function(v){return {kind:'file',type:v.type,getAsFile:c('emptyFunction').thatReturns(v)};});return {clipboardData:{items:u}};}function q(t){var u=/^image\//;return t.filter(function(v){return u.test(v.type);});}var r=c('React').createClass({displayName:'UFIMentionsInput',propTypes:{onContentChange:o.func,isBroadcasterUFI:o.bool},getInitialState:function t(){var u='',v=[];c('Arbiter').subscribe('Story/delete',function(x){this._clearDocumentState();}.bind(this));if(this.props.initialData){u=this.props.initialData.value||'';v=this.props.initialData.mentions||[];v=v.map(function(x){return babelHelpers['extends']({},x,{entity:{uid:x.uid,weakreference:x.weakreference}});});}var w=c('createEditorStateWithEntities')({text:u,ranges:v,decorator:c('getMentionsInputDecorator')(),entityCreationFn:s});w=c('EditorState').moveSelectionToEnd(w);return {bootloaded:false,fullRender:!!(this.props.initialData&&this.props.initialData.value),typeaheadReporter:null,editorState:w,mentionsSource:null,mentionableEntries:null,fallbackText:u};},hasEnteredText:function t(){return !!this.state.editorState.getCurrentContent().getPlainText().trim();},getText:function t(){var u=this.state.editorState.getCurrentContent();return c('getMentionsTextForContentState')(u);},focus:function t(){this._triggerFullRender(function(){if(n){this.refs.mentionsInput.focus();}else c('ReactDOM').findDOMNode(this.refs.textarea).focus();}.bind(this));},submitComment:function t(event){if(this._submitComment(event))this._clearDocumentState();},insertMention:function t(u){this._triggerFullRender(function(){if(n){var v=this.state.editorState,w=v.getSelection(),x=v.getCurrentContent(),y=w.getStartKey(),z=w.getStartOffset(),aa=x.getBlockForKey(y),ba;if(aa.getText().substr(z-1,1).trim().length>0){var ca=c('DraftModifier').replaceText(x,w,' ');w=ca.getSelectionAfter();ba=c('DraftModifier').insertText(ca,w,u.getTitle(),v.getCurrentInlineStyle(),c('createMentionEntity')(u));}else ba=c('DraftModifier').replaceText(x,w,u.getTitle(),v.getCurrentInlineStyle(),c('createMentionEntity')(u));w=ba.getSelectionAfter();ba=c('DraftModifier').insertText(ba,w,' ');v=c('EditorState').push(v,ba,'insert-fragment');v=c('EditorState').forceSelection(v,v.getSelection());this.setState({editorState:v});this.focus();}else{c('ReactDOM').findDOMNode(this.refs.textarea).focus();if(this.state.fallbackText.length){this.setState({fallbackText:this.state.fallbackText+' '+u.title});}else this.setState({fallbackText:u.title});}}.bind(this));},insertEmoticon:function t(u){if(!n){this.setState({fallbackText:this.state.fallbackText+' '+u});return;}var v=this.state.editorState,w=v.getCurrentContent(),x=v.getSelection(),y=w.getBlockForKey(x.getStartKey()).getText()[x.getStartOffset()-1];if(y&&y!==' ')u=' '+u;var z=w.getBlockForKey(x.getEndKey()).getText()[x.getEndOffset()];if(z&&z!==' ')u+=' ';var aa=c('DraftModifier').replaceText(v.getCurrentContent(),v.getSelection(),u);v=c('EditorState').push(v,aa,'insert-characters');v=c('EditorState').forceSelection(v,v.getSelection());this.setState({editorState:v});},insertEmoji:function t(u){var v=c('EmojiFormat').codeArrayToUnicode(u);if(!n){this.setState({fallbackText:this.state.fallbackText+' '+v});return;}c('addEmojiToEditorState')(v,this.state.editorState,this._onChange);},_informHeightChange:function t(){if(this.props.monitorHeight)c('setImmediate')(function(){if(!this.isMounted())return;var u=n?c('ReactDOM').findDOMNode(this.refs.mentionsInput):c('ReactDOM').findDOMNode(this.refs.textarea),v=c('DOMVector').getElementDimensions(u).y;if(v!==this._height){this._height=v;c('Arbiter').inform(c('UFIUIEvents').InputHeightChanged,{node:u});}}.bind(this));},_onChange:function t(u){if(this.props.onContentChange){var v=this.state.editorState.getCurrentContent(),w=u.getCurrentContent();if(v!==w)this.props.onContentChange(c('getMentionsTextForContentState')(w));}this.setState({editorState:u},this._informHeightChange);},_clearDocumentState:function t(){this.state.typeaheadReporter&&this.state.typeaheadReporter.sessionEnd();var u=c('EditorState').createEmpty(c('getMentionsInputDecorator')());this.setState({editorState:c('EditorState').moveFocusToEnd(u)});},_handleContentReturn:function t(u,v){if(c('isSoftNewlineEvent')(u)){this.setState({editorState:c('handleSoftNewlineForEmoticon')(v)});return true;}u.persist();this.setState({},function(){if(this._submitComment(u))this._clearDocumentState();}.bind(this));return true;},_handleBeforeInput:function t(u,v){var w=c('handleBeforeInputForEmoticon')(v,u);if(w===v){return false;}else{this.setState({editorState:w});return true;}},_submitComment:function t(u){var v=this.state.editorState.getCurrentContent(),w=c('getVisibleValueForContentState')(v),x=c('getMentionsTextForContentState')(v),y={visibleValue:w,encodedValue:x},z=c('Input').getValue(c('ReactDOM').findDOMNode(this.refs.proxyInput));if(z){var aa=new (c('URI'))(b.location.href);j.addNormal('path',aa.getPath());j.addNormal('proxy_value',z.substr(0,k));j.post();}return this.props.onEnterSubmit(y,u);},_handleFiles:function t(u){var v=q(u);if(v.length){this.props.onPaste(p(v));return true;}return false;},_handleDroppedFiles:function t(u,v){return this._handleFiles(v);},_handlePastedFiles:function t(u){return this._handleFiles(u);},_onMentionsInputBlur:function t(){this.state.typeaheadReporter&&this.state.typeaheadReporter.sessionEnd();this.props.onBlur&&this.props.onBlur();c('Arbiter').inform(c('UFIUIEvents').Blur,{ftEntIdentifier:this.props.ftEntIdentifier,instanceID:this.props.instanceID,hasEnteredText:this.hasEnteredText()});},_onMentionsInputFocus:function t(){if(!this.state.bootloaded&&!this._currentlyBootloading){this._currentlyBootloading=true;c('Bootloader').loadModules(["TypeaheadMetricReporter","getMentionsSearchSource"],function(u,v){if(!this.isMounted())return;var w=new u({event_name:'tinder_mentions'});w.sessionStart();var x=v(this.props.datasource,w,c('UFIConfig').showHashtagTypeahead);x.bootstrap();this.setState({typeaheadReporter:w,bootloaded:true,mentionsSource:x},function(){this._currentlyBootloading=false;}.bind(this));}.bind(this),'UFIMentionsInput.react');}else if(this.state.typeaheadReporter)this.state.typeaheadReporter.sessionStart();this.props.onFocus&&this.props.onFocus();c('Arbiter').inform(c('UFIUIEvents').Focus,{ftEntIdentifier:this.props.ftEntIdentifier,instanceID:this.props.instanceID});},_onShowMentions:function t(u,v){if(this.state.typeaheadReporter)this.state.typeaheadReporter.reportResults(u.map(function(w){return w.getUniqueID();}));},_onAddMention:function t(u,v,w){if(this.state.typeaheadReporter){this.state.typeaheadReporter.reportSelect(u.getUniqueID(),u.getType(),v,w.button>=0);this.state.typeaheadReporter.sessionEnd();this.state.typeaheadReporter.sessionStart();}},_onFallbackKeyDown:function t(u){if(u.which!==c('Keys').RETURN)return;if(c('isSoftNewlineEvent')(u)||!this.state.fallbackText.trim())return;u.preventDefault();var v={visibleValue:this.state.fallbackText,encodedValue:this.state.fallbackText};if(this.props.onEnterSubmit(v,u))this.setState({fallbackText:''});},_onFallbackChange:function t(u){this.setState({fallbackText:u.target.value});},_onFallbackBlur:function t(u){this.props.onBlur&&this.props.onBlur();},_onFallbackFocus:function t(u){this.props.onFocus&&this.props.onFocus();},_sortByRenderType:function t(u,v){var w=u.getAuxiliaryData().renderType,x=v.getAuxiliaryData().renderType;if(w===x)return u.getOrder()-v.getOrder();var y=this.props.viewOptionsTypeObjectsOrder;return y.indexOf(w)-y.indexOf(x);},_triggerFullRender:function t(u){this.setState({fullRender:true},u);},_triggerFullRenderWithoutCallback:function t(){this._triggerFullRender();},_renderFallback:function t(){return c('React').createElement('div',{className:"_2xwx",'data-interaction-root-id':"_2twy"},c('React').createElement('textarea',{ref:'textarea',className:"UFIAddCommentInput _1os9 _2xww",name:'add_comment_text',placeholder:this.props.placeholder,spellCheck:true,onKeyDown:this._onFallbackKeyDown,onChange:this._onFallbackChange,onBlur:this._onFallbackBlur,onFocus:this._onFallbackFocus,value:this.state.fallbackText}));},_renderProxyInput:function t(){if(!this.props.hideProxyInput){var u="_1osa mentionsHidden";return c('React').createElement('input',{className:u,'data-interaction-root-id':"_2twz",name:'add_comment_text',ref:'proxyInput',onFocus:this.focus,tabIndex:'-1'});}},_renderDummy:function t(){var u="UFIAddCommentInput _1osb _1osc _2xww";return c('React').createElement('div',{'data-interaction-root-id':"_2tw-",onClick:this._triggerFullRenderWithoutCallback,className:"_2xwx",onFocus:this._triggerFullRenderWithoutCallback,onMouseOver:this._triggerFullRenderWithoutCallback,onSelect:c('emptyFunction'),onTouchStart:this._triggerFullRenderWithoutCallback,role:'presentation'},this._renderProxyInput(),c('React').createElement('div',{className:u},this.props.placeholder));},_onClickEditorContainer:function t(u){c('clickRefAction')('ufi',u.target,null,'FORCE');},_renderMentionsInput:function t(){var u="UFIAddCommentInput _1osb _2xww",v=babelHelpers['extends']({mentionSortFn:this.props.viewOptionsTypeObjectsOrder?this._sortByRenderType:null},this.props.viewProps);return c('React').createElement('div',{className:"_2xwx",'data-interaction-root-id':"_2tw_",onClick:this._onClickEditorContainer,role:'presentation'},this._renderProxyInput(),c('React').createElement(i,{ref:'mentionsInput',className:u,editorState:this.state.editorState,onChange:this._onChange,mentionsSource:this.state.mentionsSource,typeaheadView:this.props.viewComponent,typeaheadViewProps:v,spellCheck:true,placeholder:this.props.placeholder,onAddMention:this._onAddMention,onShowMentions:this._onShowMentions,onFocus:this._onMentionsInputFocus,onBlur:this._onMentionsInputBlur,handleContentReturn:this._handleContentReturn,handleBeforeInput:this._handleBeforeInput,handlePastedFiles:this._handlePastedFiles,handleDroppedFiles:this._handleDroppedFiles,autoflip:this.props.autoflip,position:this.props.isBroadcasterUFI?'above':null,webDriverTestID:this.props.replyCommentID?m:l}));},componentDidMount:function t(){if(!n){if(this.state.fallbackText)c('ReactDOM').findDOMNode(this.refs.textarea).focus();}else if(this.state.editorState.getCurrentContent().hasText())c('setImmediate')(function(){this.isMounted()&&this.focus();}.bind(this));},render:function t(){if(!n)return this._renderFallback();if(!this.state.fullRender)return this._renderDummy();return this._renderMentionsInput();}});function s(t){return c('DraftEntity').create('MENTION','IMMUTABLE',{id:t.uid,isWeak:t.weakreference});}f.exports=r;}),null);