// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('spots.ui.components.clipart');
goog.require('cljs.core');
goog.require('keechma.ui_component');
goog.require('keechma.toolbox.css.core');
goog.require('keechma.toolbox.ui');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('keechma.toolbox.forms.core');
goog.require('keechma.toolbox.forms.helpers');
goog.require('spots.stylesheets.colors');
goog.require('spots.ui.components.inputs');
goog.require('spots.ui.components.decorators');
goog.require('spots.ui.components.modals');
goog.require('spots.util.gql_api');
goog.require('spots.util.helpers');
goog.require('oops.core');
keechma.toolbox.css.core.register_component_styles.call(null,new cljs.core.Keyword(null,".spots_ui_components_clipart--clipart-wrapper27654",".spots_ui_components_clipart--clipart-wrapper27654",1968528810),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"250px"], null)], null));

spots.ui.components.clipart._clipart_wrapper = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,(function (){var or__8916__auto__ = new cljs.core.Keyword(null,"div","div",1057191632);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return "div";
}
})())),".spots_ui_components_clipart--clipart-wrapper27654",".spots_ui_components_clipart--clipart-wrapper",".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.core.name,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"items-center","items-center",2056701063),new cljs.core.Keyword(null,"justify-around","justify-around",-1601621942),new cljs.core.Keyword(null,"items-center","items-center",2056701063),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"sm-col","sm-col",1681500684),new cljs.core.Keyword(null,"sm-col-6","sm-col-6",972872085),new cljs.core.Keyword(null,"md-col-3","md-col-3",1679961458),new cljs.core.Keyword(null,"mx2","mx2",1606652603),new cljs.core.Keyword(null,"overflow-hidden","overflow-hidden",977968944)], null))))].join('');
spots.ui.components.clipart.render = (function spots$ui$components$clipart$render(ctx){
var clipart = keechma.toolbox.ui.sub_GT_.call(null,ctx,new cljs.core.Keyword(null,"clipart","clipart",-2064250491));
var clipart_filtered = keechma.toolbox.ui.sub_GT_.call(null,ctx,new cljs.core.Keyword(null,"clipart-filtered","clipart-filtered",-659482432));
var current_route = keechma.toolbox.ui.route_GT_.call(null,ctx);
var filter = cljs.core.get_in.call(null,current_route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"popup","popup",635890211),new cljs.core.Keyword(null,"filter","filter",-948537934)], null));
var categories = cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["All"], null),cljs.core.distinct.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"category","category",-593092832),clipart)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-column.justify-center","div.flex.flex-column.justify-center",2030921178),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-baseline","div.flex.items-baseline",-1654787738),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-5.mr3","div.col.col-5.mr3",1198544590),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs.dropdown,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Choose a category",new cljs.core.Keyword(null,"values","values",372645556),categories,new cljs.core.Keyword(null,"selected-value","selected-value",-81904500),filter,new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (clipart,clipart_filtered,current_route,filter,categories){
return (function (p1__27655_SHARP_){
return keechma.ui_component.redirect.call(null,ctx,cljs.core.assoc_in.call(null,current_route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"popup","popup",635890211),new cljs.core.Keyword(null,"filter","filter",-948537934)], null),p1__27655_SHARP_));
});})(clipart,clipart_filtered,current_route,filter,categories))
], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.clearfix","div.clearfix",1775605822),cljs.core.doall.call(null,cljs.core.map.call(null,((function (clipart,clipart_filtered,current_route,filter,categories){
return (function (c){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.clipart._clipart_wrapper,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (clipart,clipart_filtered,current_route,filter,categories){
return (function (e){
keechma.toolbox.ui._LT_cmd.call(null,ctx,new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c));

var target_obj_27656 = e;
var _STAR_runtime_state_STAR_27660 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_27656,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_27658 = [target_obj_27656,(function (){var next_obj_27659 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_27656,(0),"preventDefault",true))?(target_obj_27656["preventDefault"]):null);
return next_obj_27659;
})()];
var fn_27657 = (call_info_27658[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_27657,oops.state.get_last_access_modifier.call(null))){
if(!((fn_27657 == null))){
return fn_27657.call((call_info_27658[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_27660;
}});})(clipart,clipart_filtered,current_route,filter,categories))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),spots.util.helpers.generate_resource_link.call(null,new cljs.core.Keyword(null,"imageURL","imageURL",1945550434).cljs$core$IFn$_invoke$arity$1(c))], null)], null)], null);
});})(clipart,clipart_filtered,current_route,filter,categories))
,clipart_filtered))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer.mt2.c-gray-l.center.z4.flex.justify-center","footer.mt2.c-gray-l.center.z4.flex.justify-center",-248760427),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs._button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (clipart,clipart_filtered,current_route,filter,categories){
return (function (e){
keechma.ui_component.redirect.call(null,ctx,cljs.core.dissoc.call(null,current_route,new cljs.core.Keyword(null,"popup","popup",635890211)));

var target_obj_27661 = e;
var _STAR_runtime_state_STAR_27665 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_27661,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_27663 = [target_obj_27661,(function (){var next_obj_27664 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_27661,(0),"preventDefault",true))?(target_obj_27661["preventDefault"]):null);
return next_obj_27664;
})()];
var fn_27662 = (call_info_27663[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_27662,oops.state.get_last_access_modifier.call(null))){
if(!((fn_27662 == null))){
return fn_27662.call((call_info_27663[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_27665;
}});})(clipart,clipart_filtered,current_route,filter,categories))
], null),"Close"], null)], null)], null);
});
spots.ui.components.clipart.component = keechma.ui_component.constructor$.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"renderer","renderer",336841071),spots.ui.components.clipart.render,new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"clipart","clipart",-2064250491),new cljs.core.Keyword(null,"subscription-deps","subscription-deps",1798032321),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clipart","clipart",-2064250491),new cljs.core.Keyword(null,"clipart-filtered","clipart-filtered",-659482432)], null)], null));
