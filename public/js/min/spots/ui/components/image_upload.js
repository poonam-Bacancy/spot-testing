// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('spots.ui.components.image_upload');
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
goog.require('spots.ui.components.cropper');
goog.require('module$Users$tibor$Work$Projects$spots_frontend$node_modules$cropperjs$dist$cropper');
goog.require('oops.core');
goog.require('module$Users$tibor$Work$Projects$spots_frontend$node_modules$react_avatar_edit$lib$react_avatar');
spots.ui.components.image_upload.blank_img = "/img/blank-img.jpg";
spots.ui.components.image_upload.avatar = reagent.core.adapt_react_class.call(null,module$Users$tibor$Work$Projects$spots_frontend$node_modules$react_avatar_edit$lib$react_avatar.reactAvatar.default);
keechma.toolbox.css.core.register_component_styles.call(null,new cljs.core.Keyword(null,".spots_ui_components_image_upload--dropzone-wrap27951",".spots_ui_components_image_upload--dropzone-wrap27951",1147136427),cljs.core.PersistentVector.EMPTY);

spots.ui.components.image_upload._dropzone_wrap = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,(function (){var or__8916__auto__ = new cljs.core.Keyword(null,"label","label",1718410804);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return "div";
}
})())),".spots_ui_components_image_upload--dropzone-wrap27951",".spots_ui_components_image_upload--dropzone-wrap",".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.core.name,new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overflow-hidden","overflow-hidden",977968944),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"top-0","top-0",-272332339),new cljs.core.Keyword(null,"left-0","left-0",878564553),new cljs.core.Keyword(null,"right-0","right-0",-874039782),new cljs.core.Keyword(null,"bottom-0","bottom-0",-1538325664),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"justify-center","justify-center",-1320200398),new cljs.core.Keyword(null,"items-center","items-center",2056701063)], null))))].join('');
keechma.toolbox.css.core.register_component_styles.call(null,new cljs.core.Keyword(null,".spots_ui_components_image_upload--dropzone-input27952",".spots_ui_components_image_upload--dropzone-input27952",312424135),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),"100%",new cljs.core.Keyword(null,"opacity","opacity",397153780),(0),new cljs.core.Keyword(null,"text-align","text-align",1786091845),"right",new cljs.core.Keyword(null,"min-height","min-height",398480837),"100%",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"999px"], null)], null));

spots.ui.components.image_upload._dropzone_input = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,(function (){var or__8916__auto__ = new cljs.core.Keyword(null,"input","input",556931961);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return "div";
}
})())),".spots_ui_components_image_upload--dropzone-input27952",".spots_ui_components_image_upload--dropzone-input",".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.core.name,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"absolute","absolute",1655386478),new cljs.core.Keyword(null,"top-0","top-0",-272332339),new cljs.core.Keyword(null,"right-0","right-0",-874039782),new cljs.core.Keyword(null,"left-0","left-0",878564553),new cljs.core.Keyword(null,"bottom-0","bottom-0",-1538325664)], null))))].join('');
spots.ui.components.image_upload.render = (function spots$ui$components$image_upload$render(ctx,p__27954){
var map__27955 = p__27954;
var map__27955__$1 = ((((!((map__27955 == null)))?((((map__27955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27955.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27955):map__27955);
var idx = cljs.core.get.call(null,map__27955__$1,new cljs.core.Keyword(null,"idx","idx",1053688473));
var form_props = cljs.core.get.call(null,map__27955__$1,new cljs.core.Keyword(null,"form-props","form-props",202171605));
var form_state = cljs.core.get.call(null,map__27955__$1,new cljs.core.Keyword(null,"form-state","form-state",-1897375037));
var helpers = cljs.core.get.call(null,map__27955__$1,new cljs.core.Keyword(null,"helpers","helpers",385052827));
var img_crop_preview = reagent.core.atom.call(null,null);
var cropper_inst_atom = cljs.core.atom.call(null,null);
return ((function (img_crop_preview,cropper_inst_atom,map__27955,map__27955__$1,idx,form_props,form_state,helpers){
return (function (){
var image_upload_preview = keechma.toolbox.ui.sub_GT_.call(null,ctx,new cljs.core.Keyword(null,"image-upload-preview","image-upload-preview",-889826131));
var processing_selected_image_QMARK_ = keechma.toolbox.ui.sub_GT_.call(null,ctx,new cljs.core.Keyword(null,"processing-selected-image?","processing-selected-image?",1187395905));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-column.justify-center","div.flex.flex-column.justify-center",2030921178),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative","div.relative",430334058),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-height","min-height",398480837),"500px",new cljs.core.Keyword(null,"border","border",1444987323),["2px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"light-gray-l","light-gray-l",-813032290).cljs$core$IFn$_invoke$arity$1(spots.stylesheets.colors.colors_with_variations))].join('')], null)], null),(cljs.core.truth_(image_upload_preview)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.cropper.render,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),image_upload_preview,new cljs.core.Keyword(null,"cropper-inst-atom","cropper-inst-atom",1016005213),cropper_inst_atom], null)], null):(cljs.core.truth_(processing_selected_image_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.image_upload._dropzone_wrap,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.h2.caps.regular.c-light-gray.center","p.h2.caps.regular.c-light-gray.center",782606254),"Processing image..."], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.image_upload._dropzone_wrap,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.image_upload._dropzone_input,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"file",new cljs.core.Keyword(null,"accept","accept",1874130431),"image/jpeg, image/png",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (image_upload_preview,processing_selected_image_QMARK_,img_crop_preview,cropper_inst_atom,map__27955,map__27955__$1,idx,form_props,form_state,helpers){
return (function (p1__27953_SHARP_){
return keechma.toolbox.ui._LT_cmd.call(null,ctx,new cljs.core.Keyword(null,"upload","upload",-255769218),(function (){var target_obj_27957 = p1__27953_SHARP_;
var _STAR_runtime_state_STAR_27961 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_27957,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_27958 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_27957,(0),"target",true))?(target_obj_27957["target"]):null);
var next_obj_27959 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_27958,(1),"files",true))?(next_obj_27958["files"]):null);
if(!((next_obj_27959 == null))){
var next_obj_27960 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_27959,(1),"0",true))?(next_obj_27959["0"]):null);
if(!((next_obj_27960 == null))){
return next_obj_27960;
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_27961;
}})());
});})(image_upload_preview,processing_selected_image_QMARK_,img_crop_preview,cropper_inst_atom,map__27955,map__27955__$1,idx,form_props,form_state,helpers))
], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.h2.caps.regular.c-light-gray.center","p.h2.caps.regular.c-light-gray.center",782606254),"Drag an image here or ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.bold","a.bold",-1194514307),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null),"Browse"], null)," for an image to upload"], null)], null)))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer.mt0-5.c-gray-l.center.z4.flex.justify-center.flex-column","footer.mt0-5.c-gray-l.center.z4.flex.justify-center.flex-column",-416885357),(cljs.core.truth_(image_upload_preview)?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.mb1-5","p.mb1-5",762575090),"To resize an image, click and drag the circle to reach the size you want.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"You can also click and drag the sides the preview image to select your desired area."], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs._button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (image_upload_preview,processing_selected_image_QMARK_,img_crop_preview,cropper_inst_atom,map__27955,map__27955__$1,idx,form_props,form_state,helpers){
return (function (e){
var temp__5457__auto___27972 = cljs.core.deref.call(null,cropper_inst_atom);
if(cljs.core.truth_(temp__5457__auto___27972)){
var cropper_inst_27973 = temp__5457__auto___27972;
var canvas_27974 = (function (){var target_obj_27962 = cropper_inst_27973;
var _STAR_runtime_state_STAR_27966 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_27962,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_27964 = [target_obj_27962,(function (){var next_obj_27965 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_27962,(0),"getCroppedCanvas",true))?(target_obj_27962["getCroppedCanvas"]):null);
return next_obj_27965;
})()];
var fn_27963 = (call_info_27964[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_27963,oops.state.get_last_access_modifier.call(null))){
if(!((fn_27963 == null))){
return fn_27963.call((call_info_27964[(0)]),cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fillColor","fillColor",-176906116),"#ffffff"], null)));
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_27966;
}})();
keechma.toolbox.ui._LT_cmd.call(null,ctx,new cljs.core.Keyword(null,"commit","commit",113374389),(function (){var target_obj_27967 = canvas_27974;
var _STAR_runtime_state_STAR_27971 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_27967,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_27969 = [target_obj_27967,(function (){var next_obj_27970 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_27967,(0),"toDataURL",true))?(target_obj_27967["toDataURL"]):null);
return next_obj_27970;
})()];
var fn_27968 = (call_info_27969[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_27968,oops.state.get_last_access_modifier.call(null))){
if(!((fn_27968 == null))){
return fn_27968.call((call_info_27969[(0)]),"image/jpeg",1.0);
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_27971;
}})());
} else {
}

return e.preventDefault();
});})(image_upload_preview,processing_selected_image_QMARK_,img_crop_preview,cropper_inst_atom,map__27955,map__27955__$1,idx,form_props,form_state,helpers))
], null),"Upload Art"], null)], null)], null);
});
;})(img_crop_preview,cropper_inst_atom,map__27955,map__27955__$1,idx,form_props,form_state,helpers))
});
spots.ui.components.image_upload.component = keechma.ui_component.constructor$.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"renderer","renderer",336841071),spots.ui.components.image_upload.render,new cljs.core.Keyword(null,"subscription-deps","subscription-deps",1798032321),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image-upload-preview","image-upload-preview",-889826131),new cljs.core.Keyword(null,"processing-selected-image?","processing-selected-image?",1187395905)], null),new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"image-upload","image-upload",-1506272457)], null));
