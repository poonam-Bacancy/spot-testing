// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('spots.ui.components.datepicker');
goog.require('cljs.core');
goog.require('oops.core');
goog.require('spots.ui.components.inputs');
goog.require('reagent.core');
goog.require('keechma.toolbox.forms.helpers');
goog.require('clojure.string');
goog.require('keechma.toolbox.ui');
goog.require('camel_snake_kebab.core');
goog.require('camel_snake_kebab.extras');
spots.ui.components.datepicker.mount_datepicker = (function spots$ui$components$datepicker$mount_datepicker(ctx,form_props,datepicker_params,el){
var default_date = (new Date());
var pikaday = (new Pikaday(cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"field","field",-1302436500),el,new cljs.core.Keyword(null,"format","format",-1306924766),"MM-DD-YYYY",new cljs.core.Keyword(null,"minDate","minDate",229610480),(function (){var target_obj_23924 = (function (){var target_obj_23928 = moment();
var _STAR_runtime_state_STAR_23932 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_23928,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_23930 = [target_obj_23928,(function (){var next_obj_23931 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_23928,(0),"add",true))?(target_obj_23928["add"]):null);
return next_obj_23931;
})()];
var fn_23929 = (call_info_23930[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_23929,oops.state.get_last_access_modifier.call(null))){
if(!((fn_23929 == null))){
return fn_23929.call((call_info_23930[(0)]),(1),"days");
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_23932;
}})();
var _STAR_runtime_state_STAR_23933 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_23924,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_23926 = [target_obj_23924,(function (){var next_obj_23927 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_23924,(0),"toDate",true))?(target_obj_23924["toDate"]):null);
return next_obj_23927;
})()];
var fn_23925 = (call_info_23926[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_23925,oops.state.get_last_access_modifier.call(null))){
if(!((fn_23925 == null))){
return fn_23925.call((call_info_23926[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_23933;
}})(),new cljs.core.Keyword(null,"onSelect","onSelect",251862405),((function (default_date){
return (function (_){
var this$ = this;
var value = (function (){var target_obj_23934 = this$;
var _STAR_runtime_state_STAR_23938 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_23934,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_23936 = [target_obj_23934,(function (){var next_obj_23937 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_23934,(0),"toString",true))?(target_obj_23934["toString"]):null);
return next_obj_23937;
})()];
var fn_23935 = (call_info_23936[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_23935,oops.state.get_last_access_modifier.call(null))){
if(!((fn_23935 == null))){
return fn_23935.call((call_info_23936[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_23938;
}})();
return keechma.toolbox.ui._LT_cmd.call(null,ctx,new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_props,new cljs.core.Keyword(null,"shippingDate","shippingDate",1531513730),null,value,null], null));
});})(default_date))
], null),datepicker_params))));
return null;
});
spots.ui.components.datepicker.render_input = (function spots$ui$components$datepicker$render_input(ctx,input_props){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (ctx__$1,input_props__$1){
var map__23939 = input_props__$1;
var map__23939__$1 = ((((!((map__23939 == null)))?((((map__23939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23939.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23939):map__23939);
var form_state = cljs.core.get.call(null,map__23939__$1,new cljs.core.Keyword(null,"form-state","form-state",-1897375037));
var helpers = cljs.core.get.call(null,map__23939__$1,new cljs.core.Keyword(null,"helpers","helpers",385052827));
var placeholder = cljs.core.get.call(null,map__23939__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var label = cljs.core.get.call(null,map__23939__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var form_props = cljs.core.get.call(null,map__23939__$1,new cljs.core.Keyword(null,"form-props","form-props",202171605));
var attr = cljs.core.get.call(null,map__23939__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var map__23940 = helpers;
var map__23940__$1 = ((((!((map__23940 == null)))?((((map__23940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23940.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23940):map__23940);
var on_change = cljs.core.get.call(null,map__23940__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_blur = cljs.core.get.call(null,map__23940__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs._input,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change.call(null,attr),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),on_blur.call(null,attr),new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),((function (map__23939,map__23939__$1,form_state,helpers,placeholder,label,form_props,attr,map__23940,map__23940__$1,on_change,on_blur){
return (function (e){
if(cljs.core._EQ_.call(null,(13),(function (){var target_obj_23943 = e;
var _STAR_runtime_state_STAR_23945 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_23943,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_23944 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_23943,(0),"which",true))?(target_obj_23943["which"]):null);
return next_obj_23944;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_23945;
}})())){
var target_obj_23946 = e;
var _STAR_runtime_state_STAR_23950 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_23946,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_23948 = [target_obj_23946,(function (){var next_obj_23949 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_23946,(0),"preventDefault",true))?(target_obj_23946["preventDefault"]):null);
return next_obj_23949;
})()];
var fn_23947 = (call_info_23948[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_23947,oops.state.get_last_access_modifier.call(null))){
if(!((fn_23947 == null))){
return fn_23947.call((call_info_23948[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_23950;
}} else {
return null;
}
});})(map__23939,map__23939__$1,form_state,helpers,placeholder,label,form_props,attr,map__23940,map__23940__$1,on_change,on_blur))
,new cljs.core.Keyword(null,"value","value",305978217),keechma.toolbox.forms.helpers.attr_get_in.call(null,form_state,attr)], null)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
var dom_node = reagent.core.dom_node.call(null,this$);
var map__23951 = input_props;
var map__23951__$1 = ((((!((map__23951 == null)))?((((map__23951.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23951.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23951):map__23951);
var form_props = cljs.core.get.call(null,map__23951__$1,new cljs.core.Keyword(null,"form-props","form-props",202171605));
var datepicker_params = cljs.core.get.call(null,map__23951__$1,new cljs.core.Keyword(null,"datepicker-params","datepicker-params",-1918630416));
return spots.ui.components.datepicker.mount_datepicker.call(null,ctx,form_props,datepicker_params,dom_node);
}),new cljs.core.Keyword(null,"component-will-update","component-will-update",335247566),(function (this$,p__23953){
var vec__23954 = p__23953;
var _ = cljs.core.nth.call(null,vec__23954,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__23954,(1),null);
var input_props__$1 = cljs.core.nth.call(null,vec__23954,(2),null);
var dom_node = reagent.core.dom_node.call(null,this$);
var form_state = new cljs.core.Keyword(null,"form-state","form-state",-1897375037).cljs$core$IFn$_invoke$arity$1(input_props__$1);
var shipping_date = keechma.toolbox.forms.helpers.attr_get_in.call(null,form_state,new cljs.core.Keyword(null,"shippingDate","shippingDate",1531513730));
if(cljs.core.not_EQ_.call(null,shipping_date,(function (){var target_obj_23957 = dom_node;
var _STAR_runtime_state_STAR_23959 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_23957,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_23958 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_23957,(0),"value",true))?(target_obj_23957["value"]):null);
return next_obj_23958;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_23959;
}})())){
var target_obj_23960 = dom_node;
var _STAR_runtime_state_STAR_23962 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_23960,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var parent_obj_23961_23963 = target_obj_23960;
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_23961_23963,(0),"value",true)){
(parent_obj_23961_23963["value"] = shipping_date);
} else {
}

return target_obj_23960;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_23962;
}} else {
return null;
}
})], null));
});
spots.ui.components.datepicker.render = (function spots$ui$components$datepicker$render(ctx,input_props){
var map__23964 = input_props;
var map__23964__$1 = ((((!((map__23964 == null)))?((((map__23964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23964.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23964):map__23964);
var form_state = cljs.core.get.call(null,map__23964__$1,new cljs.core.Keyword(null,"form-state","form-state",-1897375037));
var attr = cljs.core.get.call(null,map__23964__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb0-5","div.mb0-5",-1114465674),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.datepicker.render_input,ctx,input_props], null),spots.ui.components.inputs.render_errors.call(null,keechma.toolbox.forms.helpers.attr_errors.call(null,form_state,attr))], null);
});
