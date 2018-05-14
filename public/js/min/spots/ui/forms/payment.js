// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('spots.ui.forms.payment');
goog.require('cljs.core');
goog.require('keechma.ui_component');
goog.require('clojure.string');
goog.require('keechma.toolbox.ui');
goog.require('keechma.toolbox.forms.core');
goog.require('keechma.toolbox.forms.helpers');
goog.require('spots.ui.components.inputs');
goog.require('spots.ui.components.decorators');
goog.require('spots.ui.components.address_autocomplete');
goog.require('reagent.core');
goog.require('spots.util.gql_api');
goog.require('spots.domain.stripe');
goog.require('oops.core');
goog.require('reagent.format');
goog.require('spots.ui.components.modals');
goog.require('spots.domain.form_helpers');
spots.ui.forms.payment.cc_styles = cljs.core.clj__GT_js.call(null,cljs.core.PersistentArrayMap.EMPTY);
spots.ui.forms.payment.stripe_cc = (function spots$ui$forms$payment$stripe_cc(ctx,form_props,form_state,helpers){
var map__28828 = helpers;
var map__28828__$1 = ((((!((map__28828 == null)))?((((map__28828.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28828.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28828):map__28828);
var set_value = cljs.core.get.call(null,map__28828__$1,new cljs.core.Keyword(null,"set-value","set-value",445227352));
var set_value_without_immediate_validation = cljs.core.get.call(null,map__28828__$1,new cljs.core.Keyword(null,"set-value-without-immediate-validation","set-value-without-immediate-validation",2126257571));
var cc_element_id = cljs.core.gensym.call(null,"stripe-cc");
var card_instance_atom = cljs.core.atom.call(null,null);
var change_handler = ((function (map__28828,map__28828__$1,set_value,set_value_without_immediate_validation,cc_element_id,card_instance_atom){
return (function (e){
var error_message = (function (){var target_obj_28830 = e;
var _STAR_runtime_state_STAR_28833 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_28830,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_28831 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_28830,(1),"error",true))?(target_obj_28830["error"]):null);
if(!((next_obj_28831 == null))){
var next_obj_28832 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_28831,(1),"message",true))?(next_obj_28831["message"]):null);
if(!((next_obj_28832 == null))){
return next_obj_28832;
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_28833;
}})();
return set_value.call(null,new cljs.core.Keyword(null,"cc-errors","cc-errors",1203340949),error_message);
});})(map__28828,map__28828__$1,set_value,set_value_without_immediate_validation,cc_element_id,card_instance_atom))
;
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (map__28828,map__28828__$1,set_value,set_value_without_immediate_validation,cc_element_id,card_instance_atom,change_handler){
return (function (ctx__$1,form_props__$1,form_state__$1,helpers__$1){
var errors = keechma.toolbox.forms.helpers.attr_get_in.call(null,form_state__$1,new cljs.core.Keyword(null,"cc-errors","cc-errors",1203340949));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p1.mb1.border.bd-gray.c-gray","div.p1.mb1.border.bd-gray.c-gray",-2025159815),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),cc_element_id], null)], null)], null),(cljs.core.truth_(errors)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb1.c-red","div.mb1.c-red",-641690843),errors], null):null)], null);
});})(map__28828,map__28828__$1,set_value,set_value_without_immediate_validation,cc_element_id,card_instance_atom,change_handler))
,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (map__28828,map__28828__$1,set_value,set_value_without_immediate_validation,cc_element_id,card_instance_atom,change_handler){
return (function (c,_){
var el = (function (){var target_obj_28834 = window;
var _STAR_runtime_state_STAR_28840 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_28834,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_28836 = (function (){var target_obj_28837 = (function (){var next_obj_28838 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_28834,(0),"document",true))?(target_obj_28834["document"]):null);
return next_obj_28838;
})();
return [target_obj_28837,(function (){var next_obj_28839 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_28837,(0),"getElementById",true))?(target_obj_28837["getElementById"]):null);
return next_obj_28839;
})()];
})();
var fn_28835 = (call_info_28836[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_28835,oops.state.get_last_access_modifier.call(null))){
if(!((fn_28835 == null))){
return fn_28835.call((call_info_28836[(0)]),cc_element_id);
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_28840;
}})();
var card = (function (){var target_obj_28841 = spots.domain.stripe.stripe_elements;
var _STAR_runtime_state_STAR_28845 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_28841,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_28843 = [target_obj_28841,(function (){var next_obj_28844 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_28841,(0),"create",true))?(target_obj_28841["create"]):null);
return next_obj_28844;
})()];
var fn_28842 = (call_info_28843[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_28842,oops.state.get_last_access_modifier.call(null))){
if(!((fn_28842 == null))){
return fn_28842.call((call_info_28843[(0)]),"card",spots.ui.forms.payment.cc_styles);
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_28845;
}})();
var target_obj_28846_28866 = card;
var _STAR_runtime_state_STAR_28850_28867 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_28846_28866,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_28848_28868 = [target_obj_28846_28866,(function (){var next_obj_28849 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_28846_28866,(0),"addEventListener",true))?(target_obj_28846_28866["addEventListener"]):null);
return next_obj_28849;
})()];
var fn_28847_28869 = (call_info_28848_28868[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_28847_28869,oops.state.get_last_access_modifier.call(null))){
if(!((fn_28847_28869 == null))){
fn_28847_28869.call((call_info_28848_28868[(0)]),"change",change_handler);
} else {
}
} else {
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_28850_28867;
}
var target_obj_28851_28870 = card;
var _STAR_runtime_state_STAR_28855_28871 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_28851_28870,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_28853_28872 = [target_obj_28851_28870,(function (){var next_obj_28854 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_28851_28870,(0),"mount",true))?(target_obj_28851_28870["mount"]):null);
return next_obj_28854;
})()];
var fn_28852_28873 = (call_info_28853_28872[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_28852_28873,oops.state.get_last_access_modifier.call(null))){
if(!((fn_28852_28873 == null))){
fn_28852_28873.call((call_info_28853_28872[(0)]),el);
} else {
}
} else {
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_28855_28871;
}
cljs.core.reset_BANG_.call(null,card_instance_atom,card);

return setTimeout(((function (el,card,map__28828,map__28828__$1,set_value,set_value_without_immediate_validation,cc_element_id,card_instance_atom,change_handler){
return (function (){
return set_value_without_immediate_validation.call(null,new cljs.core.Keyword(null,"stripe-card","stripe-card",1655943658),card);
});})(el,card,map__28828,map__28828__$1,set_value,set_value_without_immediate_validation,cc_element_id,card_instance_atom,change_handler))
,(1));
});})(map__28828,map__28828__$1,set_value,set_value_without_immediate_validation,cc_element_id,card_instance_atom,change_handler))
,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),((function (map__28828,map__28828__$1,set_value,set_value_without_immediate_validation,cc_element_id,card_instance_atom,change_handler){
return (function (_,___$1){
var temp__5457__auto__ = cljs.core.deref.call(null,card_instance_atom);
if(cljs.core.truth_(temp__5457__auto__)){
var card = temp__5457__auto__;
var target_obj_28856_28874 = card;
var _STAR_runtime_state_STAR_28860_28875 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_28856_28874,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_28858_28876 = [target_obj_28856_28874,(function (){var next_obj_28859 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_28856_28874,(0),"destroy",true))?(target_obj_28856_28874["destroy"]):null);
return next_obj_28859;
})()];
var fn_28857_28877 = (call_info_28858_28876[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_28857_28877,oops.state.get_last_access_modifier.call(null))){
if(!((fn_28857_28877 == null))){
fn_28857_28877.call((call_info_28858_28876[(0)]));
} else {
}
} else {
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_28860_28875;
}
var target_obj_28861 = card;
var _STAR_runtime_state_STAR_28865 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_28861,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_28863 = [target_obj_28861,(function (){var next_obj_28864 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_28861,(0),"removeEventListener",true))?(target_obj_28861["removeEventListener"]):null);
return next_obj_28864;
})()];
var fn_28862 = (call_info_28863[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_28862,oops.state.get_last_access_modifier.call(null))){
if(!((fn_28862 == null))){
return fn_28862.call((call_info_28863[(0)]),"change",change_handler);
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_28865;
}} else {
return null;
}
});})(map__28828,map__28828__$1,set_value,set_value_without_immediate_validation,cc_element_id,card_instance_atom,change_handler))
], null));
});
spots.ui.forms.payment.order_completed_content = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Your payment has been processed! Expect confirmation email soon!"], null)], null);
spots.ui.forms.payment.render = (function spots$ui$forms$payment$render(ctx){
var form_props = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"payment","payment",-1682035288),new cljs.core.Keyword(null,"form","form",-1624062471)], null);
var form_state = cljs.core.deref.call(null,keechma.toolbox.forms.helpers.form_state.call(null,ctx,form_props));
var helpers = keechma.toolbox.forms.helpers.make_component_helpers.call(null,ctx,form_props);
var order_pricing = keechma.toolbox.ui.sub_GT_.call(null,ctx,new cljs.core.Keyword(null,"order-pricing","order-pricing",1246212489));
var map__28878 = helpers;
var map__28878__$1 = ((((!((map__28878 == null)))?((((map__28878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28878.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28878):map__28878);
var submit = cljs.core.get.call(null,map__28878__$1,new cljs.core.Keyword(null,"submit","submit",-49315317));
if(cljs.core.truth_(form_state)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),submit], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.decorators._title,"Bill"], null),(cljs.core.truth_(order_pricing)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-5","div.col.col-5",1078562827),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Cupcakes + Design: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.format.currency_format.call(null,new cljs.core.Keyword(null,"units","units",-533089095).cljs$core$IFn$_invoke$arity$1(order_pricing)))].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.decorators._dashed_divider], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Additional Design: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.format.currency_format.call(null,new cljs.core.Keyword(null,"cupcakeDesigns","cupcakeDesigns",655509043).cljs$core$IFn$_invoke$arity$1(order_pricing)))].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.decorators._dashed_divider], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Gift Message: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.format.currency_format.call(null,new cljs.core.Keyword(null,"giftMessage","giftMessage",-894570989).cljs$core$IFn$_invoke$arity$1(order_pricing)))].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.decorators._dashed_divider], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Rush Order: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.format.currency_format.call(null,new cljs.core.Keyword(null,"rushOrder","rushOrder",1945991379).cljs$core$IFn$_invoke$arity$1(order_pricing)))].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.decorators._dashed_divider], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),["Shipping: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(reagent.format.currency_format.call(null,new cljs.core.Keyword(null,"shipping","shipping",-1732817159).cljs$core$IFn$_invoke$arity$1(order_pricing)))].join('')], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.decorators._total,"Total: ",reagent.format.currency_format.call(null,new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(order_pricing))], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.decorators._title,"Payment info"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs._input_group,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs._label,"Cardholders Name:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs.controlled_input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"form-state","form-state",-1897375037),form_state,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"",new cljs.core.Keyword(null,"helpers","helpers",385052827),helpers,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"cardHoldersName","cardHoldersName",-1132515274)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.forms.payment.stripe_cc,ctx,form_props,form_state,helpers], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-center.mt2","div.flex.justify-center.mt2",-1636224666),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.domain.form_helpers.submit_button,form_state,"Complete Purchase"], null)], null),(cljs.core.truth_(keechma.toolbox.ui.sub_GT_.call(null,ctx,new cljs.core.Keyword(null,"show-paid-modal","show-paid-modal",-1898264110)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.modals.modal,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),"Order completed",new cljs.core.Keyword(null,"content","content",15833224),spots.ui.forms.payment.order_completed_content,new cljs.core.Keyword(null,"footer","footer",1606445390),"Close",new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512),((function (form_props,form_state,helpers,order_pricing,map__28878,map__28878__$1,submit){
return (function (){
return keechma.toolbox.ui._LT_cmd.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modal","modal",-1031880850),new cljs.core.Keyword(null,"close-paid-modal","close-paid-modal",1638042411)], null),null);
});})(form_props,form_state,helpers,order_pricing,map__28878,map__28878__$1,submit))
], null)], null):null)], null)], null);
} else {
return null;
}
});
spots.ui.forms.payment.component = keechma.ui_component.constructor$.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"renderer","renderer",336841071),spots.ui.forms.payment.render,new cljs.core.Keyword(null,"subscription-deps","subscription-deps",1798032321),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form-state","form-state",-1897375037),new cljs.core.Keyword(null,"cupcake-types","cupcake-types",811632501),new cljs.core.Keyword(null,"clipart-url","clipart-url",-638041999),new cljs.core.Keyword(null,"clipart","clipart",-2064250491),new cljs.core.Keyword(null,"order-pricing","order-pricing",1246212489),new cljs.core.Keyword(null,"show-paid-modal","show-paid-modal",-1898264110)], null),new cljs.core.Keyword(null,"topic","topic",-1960480691),keechma.toolbox.forms.core.id_key], null));
