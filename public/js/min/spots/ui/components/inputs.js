// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('spots.ui.components.inputs');
goog.require('cljs.core');
goog.require('keechma.toolbox.css.core');
goog.require('spots.stylesheets.colors');
goog.require('keechma.toolbox.forms.helpers');
goog.require('spots.forms.validators');
goog.require('reagent.core');
goog.require('garden.stylesheet');
goog.require('keechma.toolbox.ui');
goog.require('keechma.toolbox.util');
goog.require('spots.stylesheets.core');
goog.require('oops.core');
goog.require('forms.util');
keechma.toolbox.css.core.register_component_styles.call(null,new cljs.core.Keyword(null,".spots_ui_components_inputs--input-group23473",".spots_ui_components_inputs--input-group23473",-527929376),cljs.core.PersistentArrayMap.EMPTY);

spots.ui.components.inputs._input_group = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,(function (){var or__8916__auto__ = null;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return "div";
}
})())),".spots_ui_components_inputs--input-group23473",".spots_ui_components_inputs--input-group",".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.core.name,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mt2","mt2",262528889)], null))))].join('');
keechma.toolbox.css.core.register_component_styles.call(null,new cljs.core.Keyword(null,".spots_ui_components_inputs--label23474",".spots_ui_components_inputs--label23474",1881510407),cljs.core.PersistentArrayMap.EMPTY);

spots.ui.components.inputs._label = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,(function (){var or__8916__auto__ = null;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return "div";
}
})())),".spots_ui_components_inputs--label23474",".spots_ui_components_inputs--label",".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.core.name,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mb1","mb1",476361811)], null))))].join('');
keechma.toolbox.css.core.register_component_styles.call(null,new cljs.core.Keyword(null,".spots_ui_components_inputs--input23475",".spots_ui_components_inputs--input23475",442556857),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),["3px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"light-gray","light-gray",-1481920825).cljs$core$IFn$_invoke$arity$1(spots.stylesheets.colors.colors_with_variations))].join(''),new cljs.core.Keyword(null,"outline","outline",793464534),"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:focus","&:focus",1074121139),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),["3px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cyan","cyan",1118839274).cljs$core$IFn$_invoke$arity$1(spots.stylesheets.colors.colors_with_variations))].join('')], null)], null)], null));

spots.ui.components.inputs._input = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,(function (){var or__8916__auto__ = new cljs.core.Keyword(null,"input","input",556931961);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return "div";
}
})())),".spots_ui_components_inputs--input23475",".spots_ui_components_inputs--input",".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.core.name,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p1","p1",-936759954),new cljs.core.Keyword(null,"mb1","mb1",476361811),new cljs.core.Keyword(null,"spots-text","spots-text",-1820154189),new cljs.core.Keyword(null,"inline-block","inline-block",1967810016),new cljs.core.Keyword(null,"w-100","w-100",672107769),new cljs.core.Keyword(null,"a-text","a-text",-1922247171),new cljs.core.Keyword(null,"c-gray","c-gray",769495615)], null))))].join('');
keechma.toolbox.css.core.register_component_styles.call(null,new cljs.core.Keyword(null,".spots_ui_components_inputs--form-input-title23476",".spots_ui_components_inputs--form-input-title23476",-1513368247),cljs.core.PersistentArrayMap.EMPTY);

spots.ui.components.inputs._form_input_title = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,(function (){var or__8916__auto__ = new cljs.core.Keyword(null,"label","label",1718410804);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return "div";
}
})())),".spots_ui_components_inputs--form-input-title23476",".spots_ui_components_inputs--form-input-title",".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.core.name,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spots-h3","spots-h3",1038347052),new cljs.core.Keyword(null,"c-red-gray","c-red-gray",326469113),new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"mb1","mb1",476361811),new cljs.core.Keyword(null,"mt2","mt2",262528889)], null))))].join('');
keechma.toolbox.css.core.register_component_styles.call(null,new cljs.core.Keyword(null,".spots_ui_components_inputs--form-inline-label23477",".spots_ui_components_inputs--form-inline-label23477",-953925767),cljs.core.PersistentArrayMap.EMPTY);

spots.ui.components.inputs._form_inline_label = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,(function (){var or__8916__auto__ = new cljs.core.Keyword(null,"label","label",1718410804);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return "div";
}
})())),".spots_ui_components_inputs--form-inline-label23477",".spots_ui_components_inputs--form-inline-label",".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.core.name,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spots-small","spots-small",384223439),new cljs.core.Keyword(null,"c-red-gray","c-red-gray",326469113),new cljs.core.Keyword(null,"ml0-5","ml0-5",-863292375),new cljs.core.Keyword(null,"mt0","mt0",-895563994),new cljs.core.Keyword(null,"mb0","mb0",1392815266)], null))))].join('');
keechma.toolbox.css.core.register_component_styles.call(null,new cljs.core.Keyword(null,".spots_ui_components_inputs--form-add-new-label23478",".spots_ui_components_inputs--form-add-new-label23478",-1413981247),cljs.core.PersistentArrayMap.EMPTY);

spots.ui.components.inputs._form_add_new_label = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,(function (){var or__8916__auto__ = new cljs.core.Keyword(null,"a","a",-2123407586);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return "div";
}
})())),".spots_ui_components_inputs--form-add-new-label23478",".spots_ui_components_inputs--form-add-new-label",".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.core.name,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c-red","c-red",-1791925992),new cljs.core.Keyword(null,"spots-small","spots-small",384223439),new cljs.core.Keyword(null,"text-decoration-none","text-decoration-none",1954421292)], null))))].join('');
keechma.toolbox.css.core.register_component_styles.call(null,new cljs.core.Keyword(null,".spots_ui_components_inputs--textarea23479",".spots_ui_components_inputs--textarea23479",-514091052),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"border","border",1444987323),["3px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"light-gray","light-gray",-1481920825).cljs$core$IFn$_invoke$arity$1(spots.stylesheets.colors.colors_with_variations))].join(''),new cljs.core.Keyword(null,"outline","outline",793464534),"none",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:focus","&:focus",1074121139),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border","border",1444987323),["3px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cyan","cyan",1118839274).cljs$core$IFn$_invoke$arity$1(spots.stylesheets.colors.colors_with_variations))].join('')], null)], null)], null));

spots.ui.components.inputs._textarea = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,(function (){var or__8916__auto__ = new cljs.core.Keyword(null,"textarea","textarea",-650375824);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return "div";
}
})())),".spots_ui_components_inputs--textarea23479",".spots_ui_components_inputs--textarea",".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.core.name,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p1","p1",-936759954),new cljs.core.Keyword(null,"mb1","mb1",476361811),new cljs.core.Keyword(null,"spots-text","spots-text",-1820154189),new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"w-100","w-100",672107769)], null))))].join('');
keechma.toolbox.css.core.register_component_styles.call(null,new cljs.core.Keyword(null,".spots_ui_components_inputs--button23480",".spots_ui_components_inputs--button23480",548098999),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),"center",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"700",new cljs.core.Keyword(null,"height","height",1025178622),"50px"], null)], null));

spots.ui.components.inputs._button = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,(function (){var or__8916__auto__ = new cljs.core.Keyword(null,"button","button",1456579943);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return "div";
}
})())),".spots_ui_components_inputs--button23480",".spots_ui_components_inputs--button",".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.core.name,new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bg-cyan","bg-cyan",-1582237015),new cljs.core.Keyword(null,"bg-h-gray","bg-h-gray",-1175323165),new cljs.core.Keyword(null,"a-text","a-text",-1922247171),new cljs.core.Keyword(null,"btn","btn",1978294651),new cljs.core.Keyword(null,"border-none","border-none",1383902613),new cljs.core.Keyword(null,"uppercase","uppercase",2080890922),new cljs.core.Keyword(null,"c-white","c-white",-1472522683),new cljs.core.Keyword(null,"px3","px3",-215663887),new cljs.core.Keyword(null,"justify-center","justify-center",-1320200398),new cljs.core.Keyword(null,"items-center","items-center",2056701063),new cljs.core.Keyword(null,"flex","flex",-1425124628)], null))))].join('');
keechma.toolbox.css.core.register_component_styles.call(null,new cljs.core.Keyword(null,".spots_ui_components_inputs--button-warning23481",".spots_ui_components_inputs--button-warning23481",-2031358914),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"700",new cljs.core.Keyword(null,"height","height",1025178622),"58px"], null)], null));

spots.ui.components.inputs._button_warning = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,(function (){var or__8916__auto__ = new cljs.core.Keyword(null,"button","button",1456579943);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return "div";
}
})())),".spots_ui_components_inputs--button-warning23481",".spots_ui_components_inputs--button-warning",".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.core.name,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bg-red","bg-red",-1645498040),new cljs.core.Keyword(null,"bg-h-red","bg-h-red",459574916),new cljs.core.Keyword(null,"a-text","a-text",-1922247171),new cljs.core.Keyword(null,"px1","px1",132759719),new cljs.core.Keyword(null,"btn","btn",1978294651),new cljs.core.Keyword(null,"border-none","border-none",1383902613),new cljs.core.Keyword(null,"uppercase","uppercase",2080890922),new cljs.core.Keyword(null,"c-white","c-white",-1472522683)], null))))].join('');
keechma.toolbox.css.core.register_component_styles.call(null,new cljs.core.Keyword(null,".spots_ui_components_inputs--button-rounded23482",".spots_ui_components_inputs--button-rounded23482",-461489897),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"700",new cljs.core.Keyword(null,"height","height",1025178622),"30px",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"250px"], null)], null));

spots.ui.components.inputs._button_rounded = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,(function (){var or__8916__auto__ = new cljs.core.Keyword(null,"button","button",1456579943);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return "div";
}
})())),".spots_ui_components_inputs--button-rounded23482",".spots_ui_components_inputs--button-rounded",".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.core.name,new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bg-cyan","bg-cyan",-1582237015),new cljs.core.Keyword(null,"bg-h-gray","bg-h-gray",-1175323165),new cljs.core.Keyword(null,"a-text","a-text",-1922247171),new cljs.core.Keyword(null,"mr1","mr1",1260993358),new cljs.core.Keyword(null,"px2","px2",643250873),new cljs.core.Keyword(null,"pt1","pt1",911706224),new cljs.core.Keyword(null,"pb2","pb2",1844578532),new cljs.core.Keyword(null,"my1","my1",263571567),new cljs.core.Keyword(null,"btn","btn",1978294651),new cljs.core.Keyword(null,"border-none","border-none",1383902613),new cljs.core.Keyword(null,"uppercase","uppercase",2080890922),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"c-white","c-white",-1472522683),new cljs.core.Keyword(null,"pill","pill",-37707000)], null))))].join('');
spots.ui.components.inputs.render_errors = (function spots$ui$components$inputs$render_errors(var_args){
var G__23484 = arguments.length;
switch (G__23484) {
case 1:
return spots.ui.components.inputs.render_errors.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return spots.ui.components.inputs.render_errors.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

spots.ui.components.inputs.render_errors.cljs$core$IFn$_invoke$arity$1 = (function (attr_errors){
return spots.ui.components.inputs.render_errors.call(null,attr_errors,cljs.core.PersistentVector.EMPTY);
});

spots.ui.components.inputs.render_errors.cljs$core$IFn$_invoke$arity$2 = (function (attr_errors,server_side_errors){
var errors = cljs.core.get_in.call(null,attr_errors,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"$errors$","$errors$",634888771),new cljs.core.Keyword(null,"failed","failed",-1397425762)], null));
if(cljs.core.truth_((function (){var or__8916__auto__ = errors;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return server_side_errors;
}
})())){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),cljs.core.concat.call(null,cljs.core.doall.call(null,cljs.core.map.call(null,((function (errors){
return (function (e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.a-small.c-red","div.a-small.c-red",278767425),spots.forms.validators.get_validator_message.call(null,e)], null);
});})(errors))
,errors)),cljs.core.doall.call(null,cljs.core.map.call(null,((function (errors){
return (function (e){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.a-small.c-red","div.a-small.c-red",278767425),e], null);
});})(errors))
,server_side_errors))));
} else {
return null;
}
});

spots.ui.components.inputs.render_errors.cljs$lang$maxFixedArity = 2;

spots.ui.components.inputs.get_server_side_errors = (function spots$ui$components$inputs$get_server_side_errors(form_state,attr){
var path = forms.util.key_to_path.call(null,attr);
var state = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(form_state);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"submit-failed","submit-failed",252220857),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(state))){
var errors = (function (){var target_obj_23486 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(state);
var _STAR_runtime_state_STAR_23488 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_23486,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_23487 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_23486,(0),"data",true))?(target_obj_23486["data"]):null);
return next_obj_23487;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_23488;
}})();
return cljs.core.get_in.call(null,errors,path);
} else {
return null;
}
});
spots.ui.components.inputs.controlled_input = (function spots$ui$components$inputs$controlled_input(p__23489){
var map__23490 = p__23489;
var map__23490__$1 = ((((!((map__23490 == null)))?((((map__23490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23490.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23490):map__23490);
var form_state = cljs.core.get.call(null,map__23490__$1,new cljs.core.Keyword(null,"form-state","form-state",-1897375037));
var helpers = cljs.core.get.call(null,map__23490__$1,new cljs.core.Keyword(null,"helpers","helpers",385052827));
var placeholder = cljs.core.get.call(null,map__23490__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var label = cljs.core.get.call(null,map__23490__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var attr = cljs.core.get.call(null,map__23490__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var map__23492 = helpers;
var map__23492__$1 = ((((!((map__23492 == null)))?((((map__23492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23492.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23492):map__23492);
var on_change = cljs.core.get.call(null,map__23492__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_blur = cljs.core.get.call(null,map__23492__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb0-5","div.mb0-5",-1114465674),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs._input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change.call(null,attr),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),on_blur.call(null,attr),new cljs.core.Keyword(null,"value","value",305978217),keechma.toolbox.forms.helpers.attr_get_in.call(null,form_state,attr)], null)], null),spots.ui.components.inputs.render_errors.call(null,keechma.toolbox.forms.helpers.attr_errors.call(null,form_state,attr),spots.ui.components.inputs.get_server_side_errors.call(null,form_state,attr))], null);
});
spots.ui.components.inputs.controlled_textarea = (function spots$ui$components$inputs$controlled_textarea(p__23494){
var map__23495 = p__23494;
var map__23495__$1 = ((((!((map__23495 == null)))?((((map__23495.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23495.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23495):map__23495);
var form_state = cljs.core.get.call(null,map__23495__$1,new cljs.core.Keyword(null,"form-state","form-state",-1897375037));
var helpers = cljs.core.get.call(null,map__23495__$1,new cljs.core.Keyword(null,"helpers","helpers",385052827));
var placeholder = cljs.core.get.call(null,map__23495__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var label = cljs.core.get.call(null,map__23495__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var attr = cljs.core.get.call(null,map__23495__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var map__23497 = helpers;
var map__23497__$1 = ((((!((map__23497 == null)))?((((map__23497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23497.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23497):map__23497);
var on_change = cljs.core.get.call(null,map__23497__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_blur = cljs.core.get.call(null,map__23497__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb1-5","div.mb1-5",755892190),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs._textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change.call(null,attr),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),on_blur.call(null,attr),new cljs.core.Keyword(null,"value","value",305978217),keechma.toolbox.forms.helpers.attr_get_in.call(null,form_state,attr)], null)], null),spots.ui.components.inputs.render_errors.call(null,keechma.toolbox.forms.helpers.attr_errors.call(null,form_state,attr),spots.ui.components.inputs.get_server_side_errors.call(null,form_state,attr))], null);
});
spots.ui.components.inputs.controlled_password = (function spots$ui$components$inputs$controlled_password(p__23499){
var map__23500 = p__23499;
var map__23500__$1 = ((((!((map__23500 == null)))?((((map__23500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23500.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23500):map__23500);
var form_state = cljs.core.get.call(null,map__23500__$1,new cljs.core.Keyword(null,"form-state","form-state",-1897375037));
var helpers = cljs.core.get.call(null,map__23500__$1,new cljs.core.Keyword(null,"helpers","helpers",385052827));
var placeholder = cljs.core.get.call(null,map__23500__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var label = cljs.core.get.call(null,map__23500__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var attr = cljs.core.get.call(null,map__23500__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var map__23502 = helpers;
var map__23502__$1 = ((((!((map__23502 == null)))?((((map__23502.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23502.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23502):map__23502);
var on_change = cljs.core.get.call(null,map__23502__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_blur = cljs.core.get.call(null,map__23502__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb1-5","div.mb1-5",755892190),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs._input,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change.call(null,attr),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),on_blur.call(null,attr),new cljs.core.Keyword(null,"type","type",1174270348),"password",new cljs.core.Keyword(null,"value","value",305978217),keechma.toolbox.forms.helpers.attr_get_in.call(null,form_state,attr)], null)], null),spots.ui.components.inputs.render_errors.call(null,keechma.toolbox.forms.helpers.attr_errors.call(null,form_state,attr),spots.ui.components.inputs.get_server_side_errors.call(null,form_state,attr))], null);
});
keechma.toolbox.css.core.register_component_styles.call(null,new cljs.core.Keyword(null,".spots_ui_components_inputs--radio-wrap23504",".spots_ui_components_inputs--radio-wrap23504",1735133428),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"none",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:checked","&:checked",-93007205),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~label",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:before","&:before",-1329379652),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"#86D6F6",new cljs.core.Keyword(null,"width","width",-384071477),"10px",new cljs.core.Keyword(null,"height","height",1025178622),"10px",new cljs.core.Keyword(null,"left","left",-399115937),"-33px"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:checked","&:checked",-93007205),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~label",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:after","&:after",-945103658),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),"#86D6F6"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"40px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:after","&:after",-945103658),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],["all ease-out .25s","-3px","\"\"","19px","absolute","3px solid #C7C7C7","16px","19px","-40px"])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:before","&:before",-1329379652),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"content","content",15833224),"\"\"",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),"-32px",new cljs.core.Keyword(null,"top","top",-1856271961),"4px",new cljs.core.Keyword(null,"width","width",-384071477),"10px",new cljs.core.Keyword(null,"height","height",1025178622),"10px",new cljs.core.Keyword(null,"transition","transition",765692007),"all ease-out .25s",new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"100%"], null)], null)], null)], null));

spots.ui.components.inputs._radio_wrap = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,(function (){var or__8916__auto__ = new cljs.core.Keyword(null,"span","span",1394872991);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return "div";
}
})())),".spots_ui_components_inputs--radio-wrap23504",".spots_ui_components_inputs--radio-wrap",".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.core.name,null)))].join('');
spots.ui.components.inputs.radiobtn = (function spots$ui$components$inputs$radiobtn(p__23505){
var map__23506 = p__23505;
var map__23506__$1 = ((((!((map__23506 == null)))?((((map__23506.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23506.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23506):map__23506);
var label = cljs.core.get.call(null,map__23506__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var form_state = cljs.core.get.call(null,map__23506__$1,new cljs.core.Keyword(null,"form-state","form-state",-1897375037));
var attr = cljs.core.get.call(null,map__23506__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var helpers = cljs.core.get.call(null,map__23506__$1,new cljs.core.Keyword(null,"helpers","helpers",385052827));
var name = cljs.core.get.call(null,map__23506__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.call(null,map__23506__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__23508 = helpers;
var map__23508__$1 = ((((!((map__23508 == null)))?((((map__23508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23508.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23508):map__23508);
var on_change = cljs.core.get.call(null,map__23508__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_blur = cljs.core.get.call(null,map__23508__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747));
var set_value = cljs.core.get.call(null,map__23508__$1,new cljs.core.Keyword(null,"set-value","set-value",445227352));
var id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,"radio"))].join('');
var selected_QMARK_ = cljs.core._EQ_.call(null,value,keechma.toolbox.forms.helpers.attr_get_in.call(null,form_state,attr));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb1-5","div.mb1-5",755892190),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs._radio_wrap,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"checked","checked",-50955819),selected_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__23508,map__23508__$1,on_change,on_blur,set_value,id,selected_QMARK_,map__23506,map__23506__$1,label,form_state,attr,helpers,name,value){
return (function (e){
if(cljs.core.truth_(e.target.checked)){
return set_value.call(null,attr,value);
} else {
return null;
}
});})(map__23508,map__23508__$1,on_change,on_blur,set_value,id,selected_QMARK_,map__23506,map__23506__$1,label,form_state,attr,helpers,name,value))
,new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label.my1.c-light-gray.uppercase.bold","label.my1.c-light-gray.uppercase.bold",-277360062),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),id], null),label], null)], null),spots.ui.components.inputs.render_errors.call(null,keechma.toolbox.forms.helpers.attr_errors.call(null,form_state,attr))], null);
});
keechma.toolbox.css.core.register_component_styles.call(null,new cljs.core.Keyword(null,".spots_ui_components_inputs--cupcake-wrap23510",".spots_ui_components_inputs--cupcake-wrap23510",-1602749644),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"40px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"40px",new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"250px",new cljs.core.Keyword(null,"text-align","text-align",1786091845),"center",new cljs.core.Keyword(null,"border-color","border-color",-2059162761),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cyan","cyan",1118839274).cljs$core$IFn$_invoke$arity$1(spots.stylesheets.colors.colors_with_variations))].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"height","height",1025178622),"40px",new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"250px",new cljs.core.Keyword(null,"top","top",-1856271961),"0px",new cljs.core.Keyword(null,"line-height","line-height",1870784992),"40px",new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null)], null)], null));

spots.ui.components.inputs._cupcake_wrap = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,(function (){var or__8916__auto__ = new cljs.core.Keyword(null,"div","div",1057191632);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return "div";
}
})())),".spots_ui_components_inputs--cupcake-wrap23510",".spots_ui_components_inputs--cupcake-wrap",".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.core.name,null)))].join('');
spots.ui.components.inputs.cupcake_ammount = (function spots$ui$components$inputs$cupcake_ammount(p__23511){
var map__23512 = p__23511;
var map__23512__$1 = ((((!((map__23512 == null)))?((((map__23512.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23512.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23512):map__23512);
var label = cljs.core.get.call(null,map__23512__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var form_state = cljs.core.get.call(null,map__23512__$1,new cljs.core.Keyword(null,"form-state","form-state",-1897375037));
var attr = cljs.core.get.call(null,map__23512__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var helpers = cljs.core.get.call(null,map__23512__$1,new cljs.core.Keyword(null,"helpers","helpers",385052827));
var placeholder = cljs.core.get.call(null,map__23512__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var map__23514 = helpers;
var map__23514__$1 = ((((!((map__23514 == null)))?((((map__23514.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23514.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23514):map__23514);
var on_change = cljs.core.get.call(null,map__23514__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_blur = cljs.core.get.call(null,map__23514__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs._cupcake_wrap,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs._input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change.call(null,attr),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),on_blur.call(null,attr),new cljs.core.Keyword(null,"value","value",305978217),keechma.toolbox.forms.helpers.attr_get_in.call(null,form_state,attr)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inline-block.bg-cyan.uppercase.c-white.bold.center","div.inline-block.bg-cyan.uppercase.c-white.bold.center",-839839034),label], null),spots.ui.components.inputs.render_errors.call(null,keechma.toolbox.forms.helpers.attr_errors.call(null,form_state,attr))], null);
});
keechma.toolbox.css.core.register_component_styles.call(null,new cljs.core.Keyword(null,".spots_ui_components_inputs--dropdown-wrapper23516",".spots_ui_components_inputs--dropdown-wrapper23516",-1269008038),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"outline","outline",793464534),"none",new cljs.core.Keyword(null,"clear","clear",1877104959),"both"], null)], null));

spots.ui.components.inputs._dropdown_wrapper = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,(function (){var or__8916__auto__ = new cljs.core.Keyword(null,"div","div",1057191632);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return "div";
}
})())),".spots_ui_components_inputs--dropdown-wrapper23516",".spots_ui_components_inputs--dropdown-wrapper",".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.core.name,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spots-text","spots-text",-1820154189),new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"w-100","w-100",672107769),new cljs.core.Keyword(null,"a-text","a-text",-1922247171),new cljs.core.Keyword(null,"c-white","c-white",-1472522683),new cljs.core.Keyword(null,"cursor-pointer","cursor-pointer",1756742679),new cljs.core.Keyword(null,"mb2","mb2",176785602),new cljs.core.Keyword(null,"relative","relative",22796862)], null))))].join('');
keechma.toolbox.css.core.register_component_styles.call(null,new cljs.core.Keyword(null,".spots_ui_components_inputs--dropdown-button23517",".spots_ui_components_inputs--dropdown-button23517",975424754),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"background-color","background-color",570434026),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cyan","cyan",1118839274).cljs$core$IFn$_invoke$arity$1(spots.stylesheets.colors.colors_with_variations))].join(''),new cljs.core.Keyword(null,"border","border",1444987323),["3px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cyan","cyan",1118839274).cljs$core$IFn$_invoke$arity$1(spots.stylesheets.colors.colors_with_variations))].join(''),new cljs.core.Keyword(null,"z-index","z-index",1892827090),"9"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:after","&:after",-945103658),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"content","content",15833224),"\"\"",new cljs.core.Keyword(null,"right","right",-452581833),"10px",new cljs.core.Keyword(null,"top","top",-1856271961),"17px",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"border-left","border-left",-1150760178),"20px solid transparent",new cljs.core.Keyword(null,"border-right","border-right",-668932860),"20px solid transparent",new cljs.core.Keyword(null,"border-top","border-top",-158897573),["20px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"white","white",-483998618).cljs$core$IFn$_invoke$arity$1(spots.stylesheets.colors.colors_with_variations))].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover:after","&:hover:after",975745128),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-top","border-top",-158897573),["20px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"white","white",-483998618).cljs$core$IFn$_invoke$arity$1(spots.stylesheets.colors.colors_with_variations))].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.is-open:after","&.is-open:after",-97028118),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"top","top",-1856271961),"-7px",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"20px solid transparent",new cljs.core.Keyword(null,"border-left","border-left",-1150760178),"20px solid transparent",new cljs.core.Keyword(null,"border-right","border-right",-668932860),"20px solid transparent",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),["20px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"white","white",-483998618).cljs$core$IFn$_invoke$arity$1(spots.stylesheets.colors.colors_with_variations))].join('')], null)], null)], null));

spots.ui.components.inputs._dropdown_button = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,(function (){var or__8916__auto__ = new cljs.core.Keyword(null,"div","div",1057191632);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return "div";
}
})())),".spots_ui_components_inputs--dropdown-button23517",".spots_ui_components_inputs--dropdown-button",".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.core.name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p1","p1",-936759954),new cljs.core.Keyword(null,"relative","relative",22796862)], null))))].join('');
keechma.toolbox.css.core.register_component_styles.call(null,new cljs.core.Keyword(null,".spots_ui_components_inputs--dropdown-content23518",".spots_ui_components_inputs--dropdown-content23518",-1628547161),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"200px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(100),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 0 5px 0 rgba(0,0,0,0.1)",new cljs.core.Keyword(null,"border","border",1444987323),["3px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cyan","cyan",1118839274).cljs$core$IFn$_invoke$arity$1(spots.stylesheets.colors.colors_with_variations))].join('')], null)], null));

spots.ui.components.inputs._dropdown_content = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,(function (){var or__8916__auto__ = new cljs.core.Keyword(null,"div","div",1057191632);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return "div";
}
})())),".spots_ui_components_inputs--dropdown-content23518",".spots_ui_components_inputs--dropdown-content",".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.core.name,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"absolute","absolute",1655386478)], null))))].join('');
spots.ui.components.inputs.get_dropdown_label = (function spots$ui$components$inputs$get_dropdown_label(values,value){
var current_value = cljs.core.first.call(null,cljs.core.filter.call(null,(function (v){
if(typeof v === 'string'){
return cljs.core._EQ_.call(null,value,v);
} else {
return cljs.core._EQ_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,v))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''));
}
}),values));
if(typeof current_value === 'string'){
return current_value;
} else {
return cljs.core.get.call(null,current_value,(1));
}
});
spots.ui.components.inputs.dropdown_input = (function spots$ui$components$inputs$dropdown_input(ctx,form_state,form_props,p__23519){
var map__23520 = p__23519;
var map__23520__$1 = ((((!((map__23520 == null)))?((((map__23520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23520.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23520):map__23520);
var label = cljs.core.get.call(null,map__23520__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var attr = cljs.core.get.call(null,map__23520__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var values = cljs.core.get.call(null,map__23520__$1,new cljs.core.Keyword(null,"values","values",372645556));
var dropdown_selected = reagent.core.atom.call(null,label);
var dropdown_open_QMARK_ = reagent.core.atom.call(null,false);
return ((function (dropdown_selected,dropdown_open_QMARK_,map__23520,map__23520__$1,label,attr,values){
return (function (ctx__$1,form_state__$1){
var value = keechma.toolbox.forms.helpers.attr_get_in.call(null,form_state__$1,attr);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs._dropdown_wrapper,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),keechma.toolbox.util.class_names.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"is-open","is-open",1660707069),cljs.core.deref.call(null,dropdown_open_QMARK_)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs._dropdown_button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (value,dropdown_selected,dropdown_open_QMARK_,map__23520,map__23520__$1,label,attr,values){
return (function (){
return cljs.core.swap_BANG_.call(null,dropdown_open_QMARK_,cljs.core.not);
});})(value,dropdown_selected,dropdown_open_QMARK_,map__23520,map__23520__$1,label,attr,values))
], null),(cljs.core.truth_(value)?spots.ui.components.inputs.get_dropdown_label.call(null,values,value):cljs.core.deref.call(null,dropdown_selected))], null),(cljs.core.truth_(cljs.core.deref.call(null,dropdown_open_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs._dropdown_content,cljs.core.map.call(null,((function (value,dropdown_selected,dropdown_open_QMARK_,map__23520,map__23520__$1,label,attr,values){
return (function (v){
var vec__23522 = ((typeof v === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v], null):v);
var key = cljs.core.nth.call(null,vec__23522,(0),null);
var val = cljs.core.nth.call(null,vec__23522,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p1.bg-h-cyan.c-h-white.bg-white.c-gray","div.p1.bg-h-cyan.c-h-white.bg-white.c-gray",-1062926949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__23522,key,val,value,dropdown_selected,dropdown_open_QMARK_,map__23520,map__23520__$1,label,attr,values){
return (function (){
keechma.toolbox.ui._LT_cmd.call(null,ctx__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [form_props,attr,null,key,null], null));

cljs.core.reset_BANG_.call(null,dropdown_selected,val);

return cljs.core.reset_BANG_.call(null,dropdown_open_QMARK_,false);
});})(vec__23522,key,val,value,dropdown_selected,dropdown_open_QMARK_,map__23520,map__23520__$1,label,attr,values))
], null),val], null);
});})(value,dropdown_selected,dropdown_open_QMARK_,map__23520,map__23520__$1,label,attr,values))
,values)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mt1.c-red.a-small","div.mt1.c-red.a-small",-1035787521),spots.ui.components.inputs.render_errors.call(null,keechma.toolbox.forms.helpers.attr_errors.call(null,form_state__$1,attr),spots.ui.components.inputs.get_server_side_errors.call(null,form_state__$1,attr))], null)], null);
});
;})(dropdown_selected,dropdown_open_QMARK_,map__23520,map__23520__$1,label,attr,values))
});
spots.ui.components.inputs.dropdown = (function spots$ui$components$inputs$dropdown(p__23525){
var map__23526 = p__23525;
var map__23526__$1 = ((((!((map__23526 == null)))?((((map__23526.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23526.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23526):map__23526);
var label = cljs.core.get.call(null,map__23526__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var selected_value = cljs.core.get.call(null,map__23526__$1,new cljs.core.Keyword(null,"selected-value","selected-value",-81904500));
var values = cljs.core.get.call(null,map__23526__$1,new cljs.core.Keyword(null,"values","values",372645556));
var on_select = cljs.core.get.call(null,map__23526__$1,new cljs.core.Keyword(null,"on-select","on-select",-192407950));
var dropdown_open_QMARK_ = reagent.core.atom.call(null,false);
return ((function (dropdown_open_QMARK_,map__23526,map__23526__$1,label,selected_value,values,on_select){
return (function (p__23528){
var map__23529 = p__23528;
var map__23529__$1 = ((((!((map__23529 == null)))?((((map__23529.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23529.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23529):map__23529);
var label__$1 = cljs.core.get.call(null,map__23529__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var selected_value__$1 = cljs.core.get.call(null,map__23529__$1,new cljs.core.Keyword(null,"selected-value","selected-value",-81904500));
var values__$1 = cljs.core.get.call(null,map__23529__$1,new cljs.core.Keyword(null,"values","values",372645556));
var on_select__$1 = cljs.core.get.call(null,map__23529__$1,new cljs.core.Keyword(null,"on-select","on-select",-192407950));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs._dropdown_wrapper,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),keechma.toolbox.util.class_names.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"is-open","is-open",1660707069),cljs.core.deref.call(null,dropdown_open_QMARK_)], null))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs._dropdown_button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__23529,map__23529__$1,label__$1,selected_value__$1,values__$1,on_select__$1,dropdown_open_QMARK_,map__23526,map__23526__$1,label,selected_value,values,on_select){
return (function (){
return cljs.core.swap_BANG_.call(null,dropdown_open_QMARK_,cljs.core.not);
});})(map__23529,map__23529__$1,label__$1,selected_value__$1,values__$1,on_select__$1,dropdown_open_QMARK_,map__23526,map__23526__$1,label,selected_value,values,on_select))
], null),(function (){var or__8916__auto__ = selected_value__$1;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return label__$1;
}
})()], null),(cljs.core.truth_(cljs.core.deref.call(null,dropdown_open_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs._dropdown_content,cljs.core.map.call(null,((function (map__23529,map__23529__$1,label__$1,selected_value__$1,values__$1,on_select__$1,dropdown_open_QMARK_,map__23526,map__23526__$1,label,selected_value,values,on_select){
return (function (v){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p1.bg-h-cyan.c-h-white.bg-white.c-gray","div.p1.bg-h-cyan.c-h-white.bg-white.c-gray",-1062926949),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),v,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__23529,map__23529__$1,label__$1,selected_value__$1,values__$1,on_select__$1,dropdown_open_QMARK_,map__23526,map__23526__$1,label,selected_value,values,on_select){
return (function (e){
on_select__$1.call(null,v);

var target_obj_23531_23536 = e;
var _STAR_runtime_state_STAR_23535_23537 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_23531_23536,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_23533_23538 = [target_obj_23531_23536,(function (){var next_obj_23534 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_23531_23536,(0),"preventDefault",true))?(target_obj_23531_23536["preventDefault"]):null);
return next_obj_23534;
})()];
var fn_23532_23539 = (call_info_23533_23538[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_23532_23539,oops.state.get_last_access_modifier.call(null))){
if(!((fn_23532_23539 == null))){
fn_23532_23539.call((call_info_23533_23538[(0)]));
} else {
}
} else {
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_23535_23537;
}
return cljs.core.reset_BANG_.call(null,dropdown_open_QMARK_,false);
});})(map__23529,map__23529__$1,label__$1,selected_value__$1,values__$1,on_select__$1,dropdown_open_QMARK_,map__23526,map__23526__$1,label,selected_value,values,on_select))
], null),v], null);
});})(map__23529,map__23529__$1,label__$1,selected_value__$1,values__$1,on_select__$1,dropdown_open_QMARK_,map__23526,map__23526__$1,label,selected_value,values,on_select))
,values__$1)], null):null)], null);
});
;})(dropdown_open_QMARK_,map__23526,map__23526__$1,label,selected_value,values,on_select))
});
keechma.toolbox.css.core.register_component_styles.call(null,new cljs.core.Keyword(null,".spots_ui_components_inputs--checkbox-wrap23540",".spots_ui_components_inputs--checkbox-wrap23540",1638420404),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"250px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:checked","&:checked",-93007205),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~label",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-color","border-color",-2059162761),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cyan","cyan",1118839274).cljs$core$IFn$_invoke$arity$1(spots.stylesheets.colors.colors_with_variations))].join('')], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"1rem",new cljs.core.Keyword(null,"border","border",1444987323),["3px solid ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"white","white",-483998618).cljs$core$IFn$_invoke$arity$1(spots.stylesheets.colors.colors_with_variations))].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-radius","border-radius",419594011),"100%"], null)], null)], null));

spots.ui.components.inputs._checkbox_wrap = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,(function (){var or__8916__auto__ = new cljs.core.Keyword(null,"div","div",1057191632);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return "div";
}
})())),".spots_ui_components_inputs--checkbox-wrap23540",".spots_ui_components_inputs--checkbox-wrap",".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.core.name,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p1","p1",-936759954),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"clearfix","clearfix",1896309300)], null))))].join('');
spots.ui.components.inputs.image_checkbox = (function spots$ui$components$inputs$image_checkbox(p__23541){
var map__23542 = p__23541;
var map__23542__$1 = ((((!((map__23542 == null)))?((((map__23542.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23542.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23542):map__23542);
var label = cljs.core.get.call(null,map__23542__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var form_state = cljs.core.get.call(null,map__23542__$1,new cljs.core.Keyword(null,"form-state","form-state",-1897375037));
var helpers = cljs.core.get.call(null,map__23542__$1,new cljs.core.Keyword(null,"helpers","helpers",385052827));
var image_src = cljs.core.get.call(null,map__23542__$1,new cljs.core.Keyword(null,"image-src","image-src",1152914289));
var attr = cljs.core.get.call(null,map__23542__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var name = cljs.core.get.call(null,map__23542__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var details_url = cljs.core.get.call(null,map__23542__$1,new cljs.core.Keyword(null,"details-url","details-url",-926884790));
var map__23544 = helpers;
var map__23544__$1 = ((((!((map__23544 == null)))?((((map__23544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__23544.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23544):map__23544);
var on_change = cljs.core.get.call(null,map__23544__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_blur = cljs.core.get.call(null,map__23544__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747));
var set_value = cljs.core.get.call(null,map__23544__$1,new cljs.core.Keyword(null,"set-value","set-value",445227352));
var id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.call(null,"checkbox"))].join('');
var value = keechma.toolbox.forms.helpers.attr_get_in.call(null,form_state,attr);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs._checkbox_wrap,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"value","value",305978217),true,new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core.boolean$.call(null,value),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__23544,map__23544__$1,on_change,on_blur,set_value,id,value,map__23542,map__23542__$1,label,form_state,helpers,image_src,attr,name,details_url){
return (function (){
return set_value.call(null,attr,cljs.core.not.call(null,value));
});})(map__23544,map__23544__$1,on_change,on_blur,set_value,id,value,map__23542,map__23542__$1,label,form_state,helpers,image_src,attr,name,details_url))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for","for",-1323786319),id], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-column.justify-center","div.flex.flex-column.justify-center",2030921178),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.circle.border","div.circle.border",-1159797205),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"180px",new cljs.core.Keyword(null,"height","height",1025178622),"180px",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"background-position","background-position",1112702746),"center center",new cljs.core.Keyword(null,"background-size","background-size",-1248630243),"cover",new cljs.core.Keyword(null,"background-image","background-image",-1142314704),["url(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(image_src),")"].join('')], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.bold","p.bold",371653438),label], null)], null)], null),spots.ui.components.inputs.render_errors.call(null,keechma.toolbox.forms.helpers.attr_errors.call(null,form_state,attr),spots.ui.components.inputs.get_server_side_errors.call(null,form_state,attr))], null);
});
