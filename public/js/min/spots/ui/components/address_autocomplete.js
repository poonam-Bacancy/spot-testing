// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('spots.ui.components.address_autocomplete');
goog.require('cljs.core');
goog.require('oops.core');
goog.require('spots.ui.components.inputs');
goog.require('reagent.core');
goog.require('spots.forms.validators');
goog.require('keechma.toolbox.forms.helpers');
goog.require('clojure.string');
goog.require('keechma.toolbox.ui');
spots.ui.components.address_autocomplete.place__GT_address = (function spots$ui$components$address_autocomplete$place__GT_address(place){
var components = new cljs.core.Keyword(null,"address_components","address_components",1687213607).cljs$core$IFn$_invoke$arity$1(place);
return cljs.core.reduce.call(null,((function (components){
return (function (acc,c){
var types = cljs.core.set.call(null,new cljs.core.Keyword(null,"types","types",590030639).cljs$core$IFn$_invoke$arity$1(c));
if(cljs.core.contains_QMARK_.call(null,types,"street_number")){
return cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"street","street",1870012303),cljs.core.conj.call(null,new cljs.core.Keyword(null,"street","street",1870012303).cljs$core$IFn$_invoke$arity$1(acc),new cljs.core.Keyword(null,"long_name","long_name",1530163266).cljs$core$IFn$_invoke$arity$1(c)));
} else {
if(cljs.core.contains_QMARK_.call(null,types,"route")){
return cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"street","street",1870012303),cljs.core.conj.call(null,new cljs.core.Keyword(null,"street","street",1870012303).cljs$core$IFn$_invoke$arity$1(acc),new cljs.core.Keyword(null,"long_name","long_name",1530163266).cljs$core$IFn$_invoke$arity$1(c)));
} else {
if(cljs.core.contains_QMARK_.call(null,types,"locality")){
return cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"city","city",-393302614),cljs.core.conj.call(null,new cljs.core.Keyword(null,"city","city",-393302614).cljs$core$IFn$_invoke$arity$1(acc),new cljs.core.Keyword(null,"long_name","long_name",1530163266).cljs$core$IFn$_invoke$arity$1(c)));
} else {
if(cljs.core.contains_QMARK_.call(null,types,"administrative_area_level_2")){
return cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"city","city",-393302614),cljs.core.conj.call(null,new cljs.core.Keyword(null,"city","city",-393302614).cljs$core$IFn$_invoke$arity$1(acc),new cljs.core.Keyword(null,"long_name","long_name",1530163266).cljs$core$IFn$_invoke$arity$1(c)));
} else {
if(cljs.core.contains_QMARK_.call(null,types,"administrative_area_level_1")){
return cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"short_name","short_name",1420585806).cljs$core$IFn$_invoke$arity$1(c));
} else {
if(cljs.core.contains_QMARK_.call(null,types,"postal_code")){
return cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"zipcode","zipcode",628451885),cljs.core.conj.call(null,new cljs.core.Keyword(null,"zipcode","zipcode",628451885).cljs$core$IFn$_invoke$arity$1(acc),new cljs.core.Keyword(null,"long_name","long_name",1530163266).cljs$core$IFn$_invoke$arity$1(c)));
} else {
return acc;

}
}
}
}
}
}
});})(components))
,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"street","street",1870012303),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"city","city",-393302614),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"state","state",-1988618099),"",new cljs.core.Keyword(null,"zipcode","zipcode",628451885),cljs.core.PersistentVector.EMPTY], null),components);
});
spots.ui.components.address_autocomplete.join_address_parts = (function spots$ui$components$address_autocomplete$join_address_parts(a){
return cljs.core.assoc.call(null,a,new cljs.core.Keyword(null,"street","street",1870012303),clojure.string.join.call(null,", ",new cljs.core.Keyword(null,"street","street",1870012303).cljs$core$IFn$_invoke$arity$1(a)),new cljs.core.Keyword(null,"city","city",-393302614),clojure.string.join.call(null,", ",new cljs.core.Keyword(null,"city","city",-393302614).cljs$core$IFn$_invoke$arity$1(a)),new cljs.core.Keyword(null,"zipcode","zipcode",628451885),clojure.string.join.call(null," - ",new cljs.core.Keyword(null,"zipcode","zipcode",628451885).cljs$core$IFn$_invoke$arity$1(a)));
});
spots.ui.components.address_autocomplete.Autocomplete = (function (){var target_obj_27833 = window;
var _STAR_runtime_state_STAR_27838 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_27833,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_27834 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_27833,(0),"google",true))?(target_obj_27833["google"]):null);
var next_obj_27835 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_27834,(0),"maps",true))?(next_obj_27834["maps"]):null);
var next_obj_27836 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_27835,(0),"places",true))?(next_obj_27835["places"]):null);
var next_obj_27837 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_27836,(0),"Autocomplete",true))?(next_obj_27836["Autocomplete"]):null);
return next_obj_27837;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_27838;
}})();
spots.ui.components.address_autocomplete.mount_autocomplete = (function spots$ui$components$address_autocomplete$mount_autocomplete(ctx,form_props,el){
var autocomplete = (new spots.ui.components.address_autocomplete.Autocomplete(el,({"componentRestrictions": ({"country": "US"})})));
var target_obj_27839 = autocomplete;
var _STAR_runtime_state_STAR_27843 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_27839,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_27841 = [target_obj_27839,(function (){var next_obj_27842 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_27839,(0),"addListener",true))?(target_obj_27839["addListener"]):null);
return next_obj_27842;
})()];
var fn_27840 = (call_info_27841[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_27840,oops.state.get_last_access_modifier.call(null))){
if(!((fn_27840 == null))){
return fn_27840.call((call_info_27841[(0)]),"place_changed",((function (call_info_27841,fn_27840,_STAR_runtime_state_STAR_27843,target_obj_27839,autocomplete){
return (function (){
var this$ = this;
var place = cljs.core.js__GT_clj.call(null,(function (){var target_obj_27844 = this$;
var _STAR_runtime_state_STAR_27848 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_27844,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_27846 = [target_obj_27844,(function (){var next_obj_27847 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_27844,(0),"getPlace",true))?(target_obj_27844["getPlace"]):null);
return next_obj_27847;
})()];
var fn_27845 = (call_info_27846[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_27845,oops.state.get_last_access_modifier.call(null))){
if(!((fn_27845 == null))){
return fn_27845.call((call_info_27846[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_27848;
}})(),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var formatted_address = spots.ui.components.address_autocomplete.join_address_parts.call(null,spots.ui.components.address_autocomplete.place__GT_address.call(null,place));
var target_obj_27849_27862 = el;
var _STAR_runtime_state_STAR_27851_27863 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_27849_27862,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var parent_obj_27850_27864 = target_obj_27849_27862;
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_27850_27864,(0),"value",true)){
(parent_obj_27850_27864["value"] = new cljs.core.Keyword(null,"street","street",1870012303).cljs$core$IFn$_invoke$arity$1(formatted_address));
} else {
}

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_27851_27863;
}
var seq__27852 = cljs.core.seq.call(null,formatted_address);
var chunk__27853 = null;
var count__27854 = (0);
var i__27855 = (0);
while(true){
if((i__27855 < count__27854)){
var vec__27856 = cljs.core._nth.call(null,chunk__27853,i__27855);
var k = cljs.core.nth.call(null,vec__27856,(0),null);
var v = cljs.core.nth.call(null,vec__27856,(1),null);
keechma.toolbox.ui._LT_cmd.call(null,ctx,new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"address","address",559499426),k], null),null,v,null], null));

var G__27865 = seq__27852;
var G__27866 = chunk__27853;
var G__27867 = count__27854;
var G__27868 = (i__27855 + (1));
seq__27852 = G__27865;
chunk__27853 = G__27866;
count__27854 = G__27867;
i__27855 = G__27868;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__27852);
if(temp__5457__auto__){
var seq__27852__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27852__$1)){
var c__9847__auto__ = cljs.core.chunk_first.call(null,seq__27852__$1);
var G__27869 = cljs.core.chunk_rest.call(null,seq__27852__$1);
var G__27870 = c__9847__auto__;
var G__27871 = cljs.core.count.call(null,c__9847__auto__);
var G__27872 = (0);
seq__27852 = G__27869;
chunk__27853 = G__27870;
count__27854 = G__27871;
i__27855 = G__27872;
continue;
} else {
var vec__27859 = cljs.core.first.call(null,seq__27852__$1);
var k = cljs.core.nth.call(null,vec__27859,(0),null);
var v = cljs.core.nth.call(null,vec__27859,(1),null);
keechma.toolbox.ui._LT_cmd.call(null,ctx,new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"address","address",559499426),k], null),null,v,null], null));

var G__27873 = cljs.core.next.call(null,seq__27852__$1);
var G__27874 = null;
var G__27875 = (0);
var G__27876 = (0);
seq__27852 = G__27873;
chunk__27853 = G__27874;
count__27854 = G__27875;
i__27855 = G__27876;
continue;
}
} else {
return null;
}
}
break;
}
});})(call_info_27841,fn_27840,_STAR_runtime_state_STAR_27843,target_obj_27839,autocomplete))
);
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_27843;
}});
spots.ui.components.address_autocomplete.render_input = (function spots$ui$components$address_autocomplete$render_input(ctx,form_props,input_props){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (ctx__$1,form_props__$1,input_props__$1){
var map__27877 = input_props__$1;
var map__27877__$1 = ((((!((map__27877 == null)))?((((map__27877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27877.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27877):map__27877);
var form_state = cljs.core.get.call(null,map__27877__$1,new cljs.core.Keyword(null,"form-state","form-state",-1897375037));
var helpers = cljs.core.get.call(null,map__27877__$1,new cljs.core.Keyword(null,"helpers","helpers",385052827));
var placeholder = cljs.core.get.call(null,map__27877__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var label = cljs.core.get.call(null,map__27877__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var attr = cljs.core.get.call(null,map__27877__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var map__27878 = helpers;
var map__27878__$1 = ((((!((map__27878 == null)))?((((map__27878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27878.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27878):map__27878);
var on_change = cljs.core.get.call(null,map__27878__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_blur = cljs.core.get.call(null,map__27878__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs._input,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change.call(null,attr),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),on_blur.call(null,attr),new cljs.core.Keyword(null,"on-key-press","on-key-press",-399563677),((function (map__27877,map__27877__$1,form_state,helpers,placeholder,label,attr,map__27878,map__27878__$1,on_change,on_blur){
return (function (e){
if(cljs.core._EQ_.call(null,(13),(function (){var target_obj_27881 = e;
var _STAR_runtime_state_STAR_27883 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_27881,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_27882 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_27881,(0),"which",true))?(target_obj_27881["which"]):null);
return next_obj_27882;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_27883;
}})())){
var target_obj_27884 = e;
var _STAR_runtime_state_STAR_27888 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_27884,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_27886 = [target_obj_27884,(function (){var next_obj_27887 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_27884,(0),"preventDefault",true))?(target_obj_27884["preventDefault"]):null);
return next_obj_27887;
})()];
var fn_27885 = (call_info_27886[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_27885,oops.state.get_last_access_modifier.call(null))){
if(!((fn_27885 == null))){
return fn_27885.call((call_info_27886[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_27888;
}} else {
return null;
}
});})(map__27877,map__27877__$1,form_state,helpers,placeholder,label,attr,map__27878,map__27878__$1,on_change,on_blur))
,new cljs.core.Keyword(null,"value","value",305978217),keechma.toolbox.forms.helpers.attr_get_in.call(null,form_state,attr)], null)], null);
}),new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (this$){
var dom_node = reagent.core.dom_node.call(null,this$);
return spots.ui.components.address_autocomplete.mount_autocomplete.call(null,ctx,form_props,dom_node);
}),new cljs.core.Keyword(null,"component-will-update","component-will-update",335247566),(function (this$,p__27889){
var vec__27890 = p__27889;
var _ = cljs.core.nth.call(null,vec__27890,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__27890,(1),null);
var ___$2 = cljs.core.nth.call(null,vec__27890,(2),null);
var input_props__$1 = cljs.core.nth.call(null,vec__27890,(3),null);
var dom_node = reagent.core.dom_node.call(null,this$);
var form_state = new cljs.core.Keyword(null,"form-state","form-state",-1897375037).cljs$core$IFn$_invoke$arity$1(input_props__$1);
var street = keechma.toolbox.forms.helpers.attr_get_in.call(null,form_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"address","address",559499426),new cljs.core.Keyword(null,"street","street",1870012303)], null));
if(cljs.core.not_EQ_.call(null,street,(function (){var target_obj_27893 = dom_node;
var _STAR_runtime_state_STAR_27895 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_27893,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_27894 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_27893,(0),"value",true))?(target_obj_27893["value"]):null);
return next_obj_27894;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_27895;
}})())){
var target_obj_27896 = dom_node;
var _STAR_runtime_state_STAR_27898 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_27896,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var parent_obj_27897_27899 = target_obj_27896;
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_27897_27899,(0),"value",true)){
(parent_obj_27897_27899["value"] = street);
} else {
}

return target_obj_27896;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_27898;
}} else {
return null;
}
})], null));
});
spots.ui.components.address_autocomplete.render = (function spots$ui$components$address_autocomplete$render(ctx,form_props,input_props){
var map__27900 = input_props;
var map__27900__$1 = ((((!((map__27900 == null)))?((((map__27900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27900.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27900):map__27900);
var form_state = cljs.core.get.call(null,map__27900__$1,new cljs.core.Keyword(null,"form-state","form-state",-1897375037));
var attr = cljs.core.get.call(null,map__27900__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb0-5","div.mb0-5",-1114465674),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.address_autocomplete.render_input,ctx,form_props,input_props], null),spots.ui.components.inputs.render_errors.call(null,keechma.toolbox.forms.helpers.attr_errors.call(null,form_state,attr))], null);
});
