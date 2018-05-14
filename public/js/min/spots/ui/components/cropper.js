// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('spots.ui.components.cropper');
goog.require('cljs.core');
goog.require('keechma.ui_component');
goog.require('keechma.toolbox.css.core');
goog.require('keechma.toolbox.ui');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('oops.core');
goog.require('module$Users$tibor$Work$Projects$spots_frontend$node_modules$cropperjs$dist$cropper');
keechma.toolbox.css.core.register_component_styles.call(null,new cljs.core.Keyword(null,".spots_ui_components_cropper--cropped-image27930",".spots_ui_components_cropper--cropped-image27930",1469184154),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%"], null)], null));

spots.ui.components.cropper._cropped_image = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,(function (){var or__8916__auto__ = new cljs.core.Keyword(null,"img","img",1442687358);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return "div";
}
})())),".spots_ui_components_cropper--cropped-image27930",".spots_ui_components_cropper--cropped-image",".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.core.name,null)))].join('');
keechma.toolbox.css.core.register_component_styles.call(null,new cljs.core.Keyword(null,".spots_ui_components_cropper--wrap27931",".spots_ui_components_cropper--wrap27931",627037619),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"500px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".cropper-view-box",".cropper-view-box",821953313),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"50%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".cropper-face",".cropper-face",1326519549),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"50%"], null)], null)], null));

spots.ui.components.cropper._wrap = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,(function (){var or__8916__auto__ = null;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return "div";
}
})())),".spots_ui_components_cropper--wrap27931",".spots_ui_components_cropper--wrap",".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.core.name,null)))].join('');
spots.ui.components.cropper.Cropper = (function (){var target_obj_27932 = window;
var _STAR_runtime_state_STAR_27934 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_27932,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_27933 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_27932,(0),"Cropper",true))?(target_obj_27932["Cropper"]):null);
return next_obj_27933;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_27934;
}})();
spots.ui.components.cropper.mount_cropper = (function spots$ui$components$cropper$mount_cropper(wrap){
if(cljs.core.truth_(wrap)){
var temp__5457__auto__ = (function (){var target_obj_27935 = wrap;
var _STAR_runtime_state_STAR_27937 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_27935,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_27936 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_27935,(0),"firstChild",true))?(target_obj_27935["firstChild"]):null);
return next_obj_27936;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_27937;
}})();
if(cljs.core.truth_(temp__5457__auto__)){
var image = temp__5457__auto__;
var cropper = (new spots.ui.components.cropper.Cropper(image,({"aspectRatio": (1), "viewMode": (0), "guides": false, "rotatable": false, "zoomable": false})));
return cropper;
} else {
return null;
}
} else {
return null;
}
});
spots.ui.components.cropper.unmount_cropper = (function spots$ui$components$cropper$unmount_cropper(cropper_inst){
if(cljs.core.truth_(cropper_inst)){
var target_obj_27938 = cropper_inst;
var _STAR_runtime_state_STAR_27942 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_27938,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_27940 = [target_obj_27938,(function (){var next_obj_27941 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_27938,(0),"destroy",true))?(target_obj_27938["destroy"]):null);
return next_obj_27941;
})()];
var fn_27939 = (call_info_27940[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_27939,oops.state.get_last_access_modifier.call(null))){
if(!((fn_27939 == null))){
return fn_27939.call((call_info_27940[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_27942;
}} else {
return null;
}
});
spots.ui.components.cropper.render = (function spots$ui$components$cropper$render(p__27943){
var map__27944 = p__27943;
var map__27944__$1 = ((((!((map__27944 == null)))?((((map__27944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27944.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27944):map__27944);
var src = cljs.core.get.call(null,map__27944__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
var cropper_inst_atom = cljs.core.get.call(null,map__27944__$1,new cljs.core.Keyword(null,"cropper-inst-atom","cropper-inst-atom",1016005213));
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (map__27944,map__27944__$1,src,cropper_inst_atom){
return (function (c,_){
var wrap = reagent.core.dom_node.call(null,c);
spots.ui.components.cropper.unmount_cropper.call(null,cljs.core.deref.call(null,cropper_inst_atom));

return cljs.core.reset_BANG_.call(null,cropper_inst_atom,spots.ui.components.cropper.mount_cropper.call(null,wrap));
});})(map__27944,map__27944__$1,src,cropper_inst_atom))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (map__27944,map__27944__$1,src,cropper_inst_atom){
return (function (c,_){
var wrap = reagent.core.dom_node.call(null,c);
spots.ui.components.cropper.unmount_cropper.call(null,cljs.core.deref.call(null,cropper_inst_atom));

return cljs.core.reset_BANG_.call(null,cropper_inst_atom,spots.ui.components.cropper.mount_cropper.call(null,wrap));
});})(map__27944,map__27944__$1,src,cropper_inst_atom))
,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),((function (map__27944,map__27944__$1,src,cropper_inst_atom){
return (function (){
return spots.ui.components.cropper.unmount_cropper.call(null,cljs.core.deref.call(null,cropper_inst_atom));
});})(map__27944,map__27944__$1,src,cropper_inst_atom))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (map__27944,map__27944__$1,src,cropper_inst_atom){
return (function (p__27946){
var map__27947 = p__27946;
var map__27947__$1 = ((((!((map__27947 == null)))?((((map__27947.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27947.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27947):map__27947);
var src__$1 = cljs.core.get.call(null,map__27947__$1,new cljs.core.Keyword(null,"src","src",-1651076051));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.cropper._wrap,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.cropper._cropped_image,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),src__$1], null)], null)], null);
});})(map__27944,map__27944__$1,src,cropper_inst_atom))
], null));
});
