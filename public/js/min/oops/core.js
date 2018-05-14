// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('oops.core');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.object');
goog.require('oops.sdefs');
goog.require('oops.state');
goog.require('oops.config');
goog.require('oops.messages');
goog.require('oops.helpers');
goog.require('oops.schema');
oops.core.report_error_dynamically = (function oops$core$report_error_dynamically(msg,data){
if(oops.state.was_error_reported_QMARK_.call(null)){
return null;
} else {
oops.state.mark_error_reported_BANG_.call(null);

var G__22221 = oops.config.get_error_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__22221)){
throw oops.state.prepare_error_from_call_site.call(null,msg,(function (){var data__21968__auto__ = data;
var or__8916__auto__ = ((oops.config.use_envelope_QMARK_.call(null))?(function (){var temp__5455__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var devtools__21969__auto__ = temp__5455__auto__;
var temp__5455__auto____$1 = (devtools__21969__auto__["toolbox"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var toolbox__21970__auto__ = temp__5455__auto____$1;
var temp__5455__auto____$2 = (toolbox__21970__auto__["envelope"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var envelope__21971__auto__ = temp__5455__auto____$2;
if(cljs.core.fn_QMARK_.call(null,envelope__21971__auto__)){
return envelope__21971__auto__.call(null,data__21968__auto__,"details");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return data__21968__auto__;
}
})());
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__22221)){
return oops.state.get_console_reporter.call(null).call(null,(console["error"]),msg,(function (){var data__21968__auto__ = data;
var or__8916__auto__ = ((oops.config.use_envelope_QMARK_.call(null))?(function (){var temp__5455__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var devtools__21969__auto__ = temp__5455__auto__;
var temp__5455__auto____$1 = (devtools__21969__auto__["toolbox"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var toolbox__21970__auto__ = temp__5455__auto____$1;
var temp__5455__auto____$2 = (toolbox__21970__auto__["envelope"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var envelope__21971__auto__ = temp__5455__auto____$2;
if(cljs.core.fn_QMARK_.call(null,envelope__21971__auto__)){
return envelope__21971__auto__.call(null,data__21968__auto__,"details");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return data__21968__auto__;
}
})());
} else {
if(cljs.core._EQ_.call(null,false,G__22221)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22221)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__22222 = oops.config.get_warning_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__22222)){
throw oops.state.prepare_error_from_call_site.call(null,msg,(function (){var data__21968__auto__ = data;
var or__8916__auto__ = ((oops.config.use_envelope_QMARK_.call(null))?(function (){var temp__5455__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var devtools__21969__auto__ = temp__5455__auto__;
var temp__5455__auto____$1 = (devtools__21969__auto__["toolbox"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var toolbox__21970__auto__ = temp__5455__auto____$1;
var temp__5455__auto____$2 = (toolbox__21970__auto__["envelope"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var envelope__21971__auto__ = temp__5455__auto____$2;
if(cljs.core.fn_QMARK_.call(null,envelope__21971__auto__)){
return envelope__21971__auto__.call(null,data__21968__auto__,"details");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return data__21968__auto__;
}
})());
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__22222)){
return oops.state.get_console_reporter.call(null).call(null,(console["warn"]),msg,(function (){var data__21968__auto__ = data;
var or__8916__auto__ = ((oops.config.use_envelope_QMARK_.call(null))?(function (){var temp__5455__auto__ = (goog.global["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var devtools__21969__auto__ = temp__5455__auto__;
var temp__5455__auto____$1 = (devtools__21969__auto__["toolbox"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var toolbox__21970__auto__ = temp__5455__auto____$1;
var temp__5455__auto____$2 = (toolbox__21970__auto__["envelope"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var envelope__21971__auto__ = temp__5455__auto____$2;
if(cljs.core.fn_QMARK_.call(null,envelope__21971__auto__)){
return envelope__21971__auto__.call(null,data__21968__auto__,"details");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})():null);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return data__21968__auto__;
}
})());
} else {
if(cljs.core._EQ_.call(null,false,G__22222)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22222)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__10191__auto__ = [];
var len__10184__auto___22230 = arguments.length;
var i__10185__auto___22231 = (0);
while(true){
if((i__10185__auto___22231 < len__10184__auto___22230)){
args__10191__auto__.push((arguments[i__10185__auto___22231]));

var G__22232 = (i__10185__auto___22231 + (1));
i__10185__auto___22231 = G__22232;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((1) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10192__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__22225){
var vec__22226 = p__22225;
var info = cljs.core.nth.call(null,vec__22226,(0),null);

if(!(cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),msg_id))){
var G__22229_22233 = oops.config.get_config_key.call(null,msg_id);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),G__22229_22233)){
oops.core.report_warning_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),G__22229_22233)){
oops.core.report_error_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,false,G__22229_22233)){
} else {
if(cljs.core._EQ_.call(null,null,G__22229_22233)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22229_22233)].join('')));

}
}
}
}
} else {
}

return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq22223){
var G__22224 = cljs.core.first.call(null,seq22223);
var seq22223__$1 = cljs.core.next.call(null,seq22223);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic(G__22224,seq22223__$1);
});

oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_22235 = oops.config.get_child_factory.call(null);
var child_factory_22235__$1 = (function (){var G__22236 = child_factory_22235;
var G__22236__$1 = (((G__22236 instanceof cljs.core.Keyword))?G__22236.fqn:null);
switch (G__22236__$1) {
case "js-obj":
return ((function (G__22236,G__22236__$1,child_factory_22235){
return (function (){
return {};
});
;})(G__22236,G__22236__$1,child_factory_22235))

break;
case "js-array":
return ((function (G__22236,G__22236__$1,child_factory_22235){
return (function (){
return [];
});
;})(G__22236,G__22236__$1,child_factory_22235))

break;
default:
return child_factory_22235;

}
})();

var child_obj_22234 = child_factory_22235__$1.call(null,obj,key);
(obj[key] = child_obj_22234);

return child_obj_22234;
});
oops.core.validate_object_access_dynamically = (function oops$core$validate_object_access_dynamically(obj,mode,key,check_key_QMARK_){
if((((cljs.core._EQ_.call(null,mode,(0))) && ((void 0 === obj)))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"undefined",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(((cljs.core._EQ_.call(null,mode,(0))) && ((obj == null)))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"nil",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isBoolean(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"boolean",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isNumber(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"number",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isString(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"string",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):((cljs.core.not.call(null,goog.isObject(obj)))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"non-object",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isDateLike(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"date-like",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_type_QMARK_.call(null,obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs type",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_instance_QMARK_.call(null,obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs instance",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return true;
})()
):true
)))))))))){
oops.state.add_key_to_current_path_BANG_.call(null,key);

oops.state.set_last_access_modifier_BANG_.call(null,mode);

if(cljs.core.truth_(check_key_QMARK_)){
if((cljs.core._EQ_.call(null,mode,(0))) && (cljs.core.not.call(null,goog.object.containsKey(obj,key)))){
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
} else {
return true;
}
} else {
return true;
}
} else {
return null;
}
});
oops.core.validate_fn_call_dynamically = (function oops$core$validate_fn_call_dynamically(fn,mode){
if((cljs.core._EQ_.call(null,mode,(1))) && ((fn == null))){
return true;
} else {
if(cljs.core.truth_(goog.isFunction(fn))){
return true;
} else {
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"soft?","soft?",-1339668477),cljs.core._EQ_.call(null,mode,(1)),new cljs.core.Keyword(null,"fn","fn",-1175266204),fn,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

}
}
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword))){
var selector_path_22240 = [];
oops.schema.prepare_simple_path_BANG_.call(null,selector,selector_path_22240);

return selector_path_22240;
} else {
var selector_path_22241 = [];
oops.schema.prepare_path_BANG_.call(null,selector,selector_path_22241);

return selector_path_22241;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5455__auto__ = oops.schema.check_dynamic_path_BANG_.call(null,path,op);
if(cljs.core.truth_(temp__5455__auto__)){
var issue_22242 = temp__5455__auto__;
return cljs.core.apply.call(null,oops.core.report_if_needed_dynamically,issue_22242);
} else {
return null;
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
if(oops.core.validate_object_access_dynamically.call(null,obj,mode,key,true)){
return (obj[key]);
} else {
return null;
}
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
if(oops.core.validate_object_access_dynamically.call(null,obj,mode,key,true)){
return (obj[key] = val);
} else {
return null;
}
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
if(cljs.core.truth_(((cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_22251 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_22251,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_22244 = (function (){var path_22243 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_22243,(0));

return path_22243;
})();
var len_22245 = path_22244.length;
var i_22246 = (0);
var obj_22247 = obj;
while(true){
if((i_22246 < len_22245)){
var mode_22248 = (path_22244[i_22246]);
var key_22249 = (path_22244[(i_22246 + (1))]);
var next_obj_22250 = oops.core.get_key_dynamically.call(null,obj_22247,key_22249,mode_22248);
var G__22252 = mode_22248;
switch (G__22252) {
case (0):
var G__22254 = (i_22246 + (2));
var G__22255 = next_obj_22250;
i_22246 = G__22254;
obj_22247 = G__22255;
continue;

break;
case (1):
if(!((next_obj_22250 == null))){
var G__22256 = (i_22246 + (2));
var G__22257 = next_obj_22250;
i_22246 = G__22256;
obj_22247 = G__22257;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_22250 == null))){
var G__22258 = (i_22246 + (2));
var G__22259 = next_obj_22250;
i_22246 = G__22258;
obj_22247 = G__22259;
continue;
} else {
var G__22260 = (i_22246 + (2));
var G__22261 = oops.core.punch_key_dynamically_BANG_.call(null,obj_22247,key_22249);
i_22246 = G__22260;
obj_22247 = G__22261;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22252)].join('')));

}
} else {
return obj_22247;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_(((cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_22287 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_22287,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_22263 = (function (){var path_22262 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_22262,(0));

return path_22262;
})();
var len_22264 = path_22263.length;
if((len_22264 < (4))){
return [obj,(function (){var path_22266 = path_22263;
var len_22267 = path_22266.length;
var i_22268 = (0);
var obj_22269 = obj;
while(true){
if((i_22268 < len_22267)){
var mode_22270 = (path_22266[i_22268]);
var key_22271 = (path_22266[(i_22268 + (1))]);
var next_obj_22272 = oops.core.get_key_dynamically.call(null,obj_22269,key_22271,mode_22270);
var G__22288 = mode_22270;
switch (G__22288) {
case (0):
var G__22292 = (i_22268 + (2));
var G__22293 = next_obj_22272;
i_22268 = G__22292;
obj_22269 = G__22293;
continue;

break;
case (1):
if(!((next_obj_22272 == null))){
var G__22294 = (i_22268 + (2));
var G__22295 = next_obj_22272;
i_22268 = G__22294;
obj_22269 = G__22295;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_22272 == null))){
var G__22296 = (i_22268 + (2));
var G__22297 = next_obj_22272;
i_22268 = G__22296;
obj_22269 = G__22297;
continue;
} else {
var G__22298 = (i_22268 + (2));
var G__22299 = oops.core.punch_key_dynamically_BANG_.call(null,obj_22269,key_22271);
i_22268 = G__22298;
obj_22269 = G__22299;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22288)].join('')));

}
} else {
return obj_22269;
}
break;
}
})()];
} else {
var target_obj_22265 = (function (){var path_22273 = path_22263.slice((0),(len_22264 - (2)));
var len_22274 = path_22273.length;
var i_22275 = (0);
var obj_22276 = obj;
while(true){
if((i_22275 < len_22274)){
var mode_22277 = (path_22273[i_22275]);
var key_22278 = (path_22273[(i_22275 + (1))]);
var next_obj_22279 = oops.core.get_key_dynamically.call(null,obj_22276,key_22278,mode_22277);
var G__22289 = mode_22277;
switch (G__22289) {
case (0):
var G__22301 = (i_22275 + (2));
var G__22302 = next_obj_22279;
i_22275 = G__22301;
obj_22276 = G__22302;
continue;

break;
case (1):
if(!((next_obj_22279 == null))){
var G__22303 = (i_22275 + (2));
var G__22304 = next_obj_22279;
i_22275 = G__22303;
obj_22276 = G__22304;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_22279 == null))){
var G__22305 = (i_22275 + (2));
var G__22306 = next_obj_22279;
i_22275 = G__22305;
obj_22276 = G__22306;
continue;
} else {
var G__22307 = (i_22275 + (2));
var G__22308 = oops.core.punch_key_dynamically_BANG_.call(null,obj_22276,key_22278);
i_22275 = G__22307;
obj_22276 = G__22308;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22289)].join('')));

}
} else {
return obj_22276;
}
break;
}
})();
return [target_obj_22265,(function (){var path_22280 = [(path_22263[(len_22264 - (2))]),(path_22263[(len_22264 - (1))])];
var len_22281 = path_22280.length;
var i_22282 = (0);
var obj_22283 = target_obj_22265;
while(true){
if((i_22282 < len_22281)){
var mode_22284 = (path_22280[i_22282]);
var key_22285 = (path_22280[(i_22282 + (1))]);
var next_obj_22286 = oops.core.get_key_dynamically.call(null,obj_22283,key_22285,mode_22284);
var G__22290 = mode_22284;
switch (G__22290) {
case (0):
var G__22310 = (i_22282 + (2));
var G__22311 = next_obj_22286;
i_22282 = G__22310;
obj_22283 = G__22311;
continue;

break;
case (1):
if(!((next_obj_22286 == null))){
var G__22312 = (i_22282 + (2));
var G__22313 = next_obj_22286;
i_22282 = G__22312;
obj_22283 = G__22313;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_22286 == null))){
var G__22314 = (i_22282 + (2));
var G__22315 = next_obj_22286;
i_22282 = G__22314;
obj_22283 = G__22315;
continue;
} else {
var G__22316 = (i_22282 + (2));
var G__22317 = oops.core.punch_key_dynamically_BANG_.call(null,obj_22283,key_22285);
i_22282 = G__22316;
obj_22283 = G__22317;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22290)].join('')));

}
} else {
return obj_22283;
}
break;
}
})()];
}
} else {
return null;
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
if(cljs.core.truth_(((cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_22332 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_22332,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_22319 = (function (){var path_22318 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_22318,(1));

return path_22318;
})();
var len_22322 = path_22319.length;
var parent_obj_path_22323 = path_22319.slice((0),(len_22322 - (2)));
var key_22320 = (path_22319[(len_22322 - (1))]);
var mode_22321 = (path_22319[(len_22322 - (2))]);
var parent_obj_22324 = (function (){var path_22325 = parent_obj_path_22323;
var len_22326 = path_22325.length;
var i_22327 = (0);
var obj_22328 = obj;
while(true){
if((i_22327 < len_22326)){
var mode_22329 = (path_22325[i_22327]);
var key_22330 = (path_22325[(i_22327 + (1))]);
var next_obj_22331 = oops.core.get_key_dynamically.call(null,obj_22328,key_22330,mode_22329);
var G__22333 = mode_22329;
switch (G__22333) {
case (0):
var G__22335 = (i_22327 + (2));
var G__22336 = next_obj_22331;
i_22327 = G__22335;
obj_22328 = G__22336;
continue;

break;
case (1):
if(!((next_obj_22331 == null))){
var G__22337 = (i_22327 + (2));
var G__22338 = next_obj_22331;
i_22327 = G__22337;
obj_22328 = G__22338;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_22331 == null))){
var G__22339 = (i_22327 + (2));
var G__22340 = next_obj_22331;
i_22327 = G__22339;
obj_22328 = G__22340;
continue;
} else {
var G__22341 = (i_22327 + (2));
var G__22342 = oops.core.punch_key_dynamically_BANG_.call(null,obj_22328,key_22330);
i_22327 = G__22341;
obj_22328 = G__22342;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__22333)].join('')));

}
} else {
return obj_22328;
}
break;
}
})();
return oops.core.set_key_dynamically.call(null,parent_obj_22324,key_22320,val,mode_22321);
} else {
return null;
}
});
