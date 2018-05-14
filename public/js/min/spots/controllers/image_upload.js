// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('spots.controllers.image_upload');
goog.require('cljs.core');
goog.require('keechma.toolbox.pipeline.controller');
goog.require('keechma.toolbox.pipeline.core');
goog.require('keechma.toolbox.forms.core');
goog.require('oops.core');
goog.require('medley.core');
goog.require('promesa.core');
goog.require('spots.domain.cupcake_design');
spots.controllers.image_upload.read_image_from_file = (function spots$controllers$image_upload$read_image_from_file(file){
return promesa.core.promise.call(null,(function (resolve,reject){
var fr = (new FileReader());
var handler_fn = ((function (fr){
return (function spots$controllers$image_upload$read_image_from_file_$_handler_fn(){
var target_obj_27268_27286 = fr;
var _STAR_runtime_state_STAR_27272_27287 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_27268_27286,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_27270_27288 = [target_obj_27268_27286,(function (){var next_obj_27271 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_27268_27286,(0),"removeEventListener",true))?(target_obj_27268_27286["removeEventListener"]):null);
return next_obj_27271;
})()];
var fn_27269_27289 = (call_info_27270_27288[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_27269_27289,oops.state.get_last_access_modifier.call(null))){
if(!((fn_27269_27289 == null))){
fn_27269_27289.call((call_info_27270_27288[(0)]),"load",spots$controllers$image_upload$read_image_from_file_$_handler_fn,false);
} else {
}
} else {
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_27272_27287;
}
return resolve.call(null,(function (){var target_obj_27273 = fr;
var _STAR_runtime_state_STAR_27275 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_27273,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_27274 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_27273,(0),"result",true))?(target_obj_27273["result"]):null);
return next_obj_27274;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_27275;
}})());
});})(fr))
;
var target_obj_27276_27290 = fr;
var _STAR_runtime_state_STAR_27280_27291 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_27276_27290,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_27278_27292 = [target_obj_27276_27290,(function (){var next_obj_27279 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_27276_27290,(0),"addEventListener",true))?(target_obj_27276_27290["addEventListener"]):null);
return next_obj_27279;
})()];
var fn_27277_27293 = (call_info_27278_27292[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_27277_27293,oops.state.get_last_access_modifier.call(null))){
if(!((fn_27277_27293 == null))){
fn_27277_27293.call((call_info_27278_27292[(0)]),"load",handler_fn,false);
} else {
}
} else {
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_27280_27291;
}
var target_obj_27281 = fr;
var _STAR_runtime_state_STAR_27285 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_27281,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_27283 = [target_obj_27281,(function (){var next_obj_27284 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_27281,(0),"readAsDataURL",true))?(target_obj_27281["readAsDataURL"]):null);
return next_obj_27284;
})()];
var fn_27282 = (call_info_27283[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_27282,oops.state.get_last_access_modifier.call(null))){
if(!((fn_27282 == null))){
return fn_27282.call((call_info_27283[(0)]),file);
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_27285;
}}));
});
spots.controllers.image_upload.commit_image_to_form = (function spots$controllers$image_upload$commit_image_to_form(app_db,cropped_image){
var cupcake_design_id = cljs.core.get_in.call(null,app_db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"popup","popup",635890211),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
var cupcakes = cljs.core.get_in.call(null,app_db,cljs.core.conj.call(null,spots.domain.cupcake_design.form_data_path,new cljs.core.Keyword(null,"cupcakes","cupcakes",1587634267)));
var cupcake_idx = spots.domain.cupcake_design.get_cupcake_idx.call(null,cupcakes,cupcake_design_id);
if(cljs.core.truth_(cupcake_idx)){
return spots.domain.cupcake_design.set_design_type.call(null,cljs.core.assoc_in.call(null,spots.domain.cupcake_design.clear_designs.call(null,medley.core.dissoc_in.call(null,app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword(null,"image-upload-preview","image-upload-preview",-889826131)], null)),cupcake_idx),cljs.core.concat.call(null,spots.domain.cupcake_design.form_data_path,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cupcakes","cupcakes",1587634267),cupcake_idx,new cljs.core.Keyword(null,"encodedImage","encodedImage",-564854346)], null)),cropped_image),cupcake_idx,"image");
} else {
return app_db;
}
});
spots.controllers.image_upload.controller = keechma.toolbox.pipeline.controller.constructor$.call(null,(function (route_data){
if(cljs.core._EQ_.call(null,"upload",cljs.core.get_in.call(null,route_data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"popup","popup",635890211),new cljs.core.Keyword(null,"type","type",1174270348)], null)))){
return true;
} else {
return null;
}
}),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"start","start",-355208981),keechma.toolbox.pipeline.core.make_pipeline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/commit! (assoc-in app-db [:kv :processing-selected-image?] false))",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.commit_BANG_.call(null,cljs.core.assoc_in.call(null,app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword(null,"processing-selected-image?","processing-selected-image?",1187395905)], null),false))], null);
})], null)], null)),new cljs.core.Keyword(null,"stop","stop",-2140911342),keechma.toolbox.pipeline.core.make_pipeline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/commit! (dissoc-in app-db [:kv :image-upload-preview]))",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.commit_BANG_.call(null,medley.core.dissoc_in.call(null,app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword(null,"image-upload-preview","image-upload-preview",-889826131)], null)))], null);
})], null)], null)),new cljs.core.Keyword(null,"upload","upload",-255769218),keechma.toolbox.pipeline.core.make_pipeline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(when\n value\n (pipeline!\n  [value app-db]\n  (pp/commit! (assoc-in app-db [:kv :processing-selected-image?] true))\n  (read-image-from-file value)\n  (pp/commit!\n   (->\n    app-db\n    (assoc-in [:kv :processing-selected-image?] false)\n    (assoc-in [:kv :image-upload-preview] value)))))",new cljs.core.Keyword(null,"val","val",128701612),(cljs.core.truth_(value)?keechma.toolbox.pipeline.core.make_pipeline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value__$1,app_db__$1,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/commit! (assoc-in app-db [:kv :processing-selected-image?] true))",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.commit_BANG_.call(null,cljs.core.assoc_in.call(null,app_db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword(null,"processing-selected-image?","processing-selected-image?",1187395905)], null),true))], null);
}),(function (value__$1,app_db__$1,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(read-image-from-file value)",new cljs.core.Keyword(null,"val","val",128701612),spots.controllers.image_upload.read_image_from_file.call(null,value__$1)], null);
}),(function (value__$1,app_db__$1,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/commit!\n (->\n  app-db\n  (assoc-in [:kv :processing-selected-image?] false)\n  (assoc-in [:kv :image-upload-preview] value)))",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.commit_BANG_.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,app_db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword(null,"processing-selected-image?","processing-selected-image?",1187395905)], null),false),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword(null,"image-upload-preview","image-upload-preview",-889826131)], null),value__$1))], null);
})], null)], null)):null)], null);
})], null)], null)),new cljs.core.Keyword(null,"crop","crop",793731643),keechma.toolbox.pipeline.core.make_pipeline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(when\n value\n (pipeline!\n  [value app-db]\n  (pp/commit! (assoc-in app-db [:kv :image-upload-preview] value))))",new cljs.core.Keyword(null,"val","val",128701612),(cljs.core.truth_(value)?keechma.toolbox.pipeline.core.make_pipeline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value__$1,app_db__$1,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/commit! (assoc-in app-db [:kv :image-upload-preview] value))",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.commit_BANG_.call(null,cljs.core.assoc_in.call(null,app_db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword(null,"image-upload-preview","image-upload-preview",-889826131)], null),value__$1))], null);
})], null)], null)):null)], null);
})], null)], null)),new cljs.core.Keyword(null,"remove","remove",-131428414),keechma.toolbox.pipeline.core.make_pipeline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/commit! (assoc-in app-db [:kv :image-upload-preview] nil))",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.commit_BANG_.call(null,cljs.core.assoc_in.call(null,app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword(null,"image-upload-preview","image-upload-preview",-889826131)], null),null))], null);
})], null)], null)),new cljs.core.Keyword(null,"commit","commit",113374389),keechma.toolbox.pipeline.core.make_pipeline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(when\n value\n (pipeline!\n  [value app-db]\n  (pp/commit! (commit-image-to-form app-db value))\n  (pp/redirect! (dissoc (get-in app-db [:route :data]) :popup))))",new cljs.core.Keyword(null,"val","val",128701612),(cljs.core.truth_(value)?keechma.toolbox.pipeline.core.make_pipeline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value__$1,app_db__$1,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/commit! (commit-image-to-form app-db value))",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.commit_BANG_.call(null,spots.controllers.image_upload.commit_image_to_form.call(null,app_db__$1,value__$1))], null);
}),(function (value__$1,app_db__$1,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/redirect! (dissoc (get-in app-db [:route :data]) :popup))",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.redirect_BANG_.call(null,cljs.core.dissoc.call(null,cljs.core.get_in.call(null,app_db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"data","data",-232669377)], null)),new cljs.core.Keyword(null,"popup","popup",635890211)))], null);
})], null)], null)):null)], null);
})], null)], null))], null));
