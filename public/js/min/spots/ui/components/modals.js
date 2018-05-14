// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('spots.ui.components.modals');
goog.require('cljs.core');
goog.require('keechma.ui_component');
goog.require('keechma.toolbox.css.core');
goog.require('keechma.toolbox.ui');
goog.require('spots.stylesheets.colors');
goog.require('spots.ui.components.inputs');
goog.require('garden.stylesheet');
goog.require('reagent.core');
goog.require('keechma.toolbox.util');
goog.require('spots.stylesheets.core');
goog.require('oops.core');
keechma.toolbox.css.core.register_component_styles.call(null,new cljs.core.Keyword(null,".spots_ui_components_modals--modal-wrapper27599",".spots_ui_components_modals--modal-wrapper27599",-1334954339),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(0),new cljs.core.Keyword(null,"right","right",-452581833),(0),new cljs.core.Keyword(null,"background-color","background-color",570434026),"rgba(0,0,0,0.5)",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null));

spots.ui.components.modals._modal_wrapper = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,(function (){var or__8916__auto__ = new cljs.core.Keyword(null,"div","div",1057191632);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return "div";
}
})())),".spots_ui_components_modals--modal-wrapper27599",".spots_ui_components_modals--modal-wrapper",".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.core.name,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fixed","fixed",-562004358)], null))))].join('');
keechma.toolbox.css.core.register_component_styles.call(null,new cljs.core.Keyword(null,".spots_ui_components_modals--modal-body27600",".spots_ui_components_modals--modal-body27600",-1123329548),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"0 7px 5px rgba(0, 0, 0, 0.5)",new cljs.core.Keyword(null,"min-height","min-height",398480837),"450px",new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),"none",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"400",new cljs.core.Keyword(null,"color","color",1011675173),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"gray","gray",1013268388).cljs$core$IFn$_invoke$arity$1(spots.stylesheets.colors.colors_with_variations))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),["2px solid",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"light-gray","light-gray",-1481920825).cljs$core$IFn$_invoke$arity$1(spots.stylesheets.colors.colors_with_variations))].join('')], null)], null)], null));

spots.ui.components.modals._modal_body = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,(function (){var or__8916__auto__ = new cljs.core.Keyword(null,"div","div",1057191632);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return "div";
}
})())),".spots_ui_components_modals--modal-body27600",".spots_ui_components_modals--modal-body",".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.core.name,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"my4","my4",813258798),new cljs.core.Keyword(null,"mx-auto","mx-auto",796863543),new cljs.core.Keyword(null,"p2","p2",905500641),new cljs.core.Keyword(null,"bg-white","bg-white",-1453241673),new cljs.core.Keyword(null,"max-width-4","max-width-4",1280412343),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-column","flex-column",-1536652789),new cljs.core.Keyword(null,"justify-between","justify-between",1651302654)], null))))].join('');
spots.ui.components.modals.modal = (function spots$ui$components$modals$modal(p__27601){
var map__27602 = p__27601;
var map__27602__$1 = ((((!((map__27602 == null)))?((((map__27602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27602.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27602):map__27602);
var title = cljs.core.get.call(null,map__27602__$1,new cljs.core.Keyword(null,"title","title",636505583));
var content = cljs.core.get.call(null,map__27602__$1,new cljs.core.Keyword(null,"content","content",15833224));
var footer = cljs.core.get.call(null,map__27602__$1,new cljs.core.Keyword(null,"footer","footer",1606445390));
var close_fn = cljs.core.get.call(null,map__27602__$1,new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512));
return ((function (map__27602,map__27602__$1,title,content,footer,close_fn){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.modals._modal_wrapper,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__27602,map__27602__$1,title,content,footer,close_fn){
return (function (e){
if(cljs.core._EQ_.call(null,e.target,e.currentTarget)){
close_fn.call(null);
} else {
}

if(cljs.core.not_EQ_.call(null,"A",(function (){var target_obj_27604 = e;
var _STAR_runtime_state_STAR_27607 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_27604,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_27605 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_27604,(0),"currentTarget",true))?(target_obj_27604["currentTarget"]):null);
var next_obj_27606 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_27605,(0),"nodeName",true))?(next_obj_27605["nodeName"]):null);
return next_obj_27606;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_27607;
}})())){
var target_obj_27608 = e;
var _STAR_runtime_state_STAR_27612 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_27608,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_27610 = [target_obj_27608,(function (){var next_obj_27611 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_27608,(0),"preventDefault",true))?(target_obj_27608["preventDefault"]):null);
return next_obj_27611;
})()];
var fn_27609 = (call_info_27610[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_27609,oops.state.get_last_access_modifier.call(null))){
if(!((fn_27609 == null))){
return fn_27609.call((call_info_27610[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_27612;
}} else {
return null;
}
});})(map__27602,map__27602__$1,title,content,footer,close_fn))
], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.modals._modal_body,((!(cljs.core._EQ_.call(null,"",title)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.regular.c-light-gray.caps.pb1","h2.regular.c-light-gray.caps.pb1",932739364),title], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),content], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer.mt2.c-gray-l.center.z4.flex.justify-center","footer.mt2.c-gray-l.center.z4.flex.justify-center",-248760427),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs._button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__27602,map__27602__$1,title,content,footer,close_fn){
return (function (e){
return close_fn.call(null);
});})(map__27602,map__27602__$1,title,content,footer,close_fn))
], null),footer], null)], null)], null)], null);
});
;})(map__27602,map__27602__$1,title,content,footer,close_fn))
});
spots.ui.components.modals.modal_with_action = (function spots$ui$components$modals$modal_with_action(p__27613){
var map__27614 = p__27613;
var map__27614__$1 = ((((!((map__27614 == null)))?((((map__27614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27614.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27614):map__27614);
var title = cljs.core.get.call(null,map__27614__$1,new cljs.core.Keyword(null,"title","title",636505583));
var content = cljs.core.get.call(null,map__27614__$1,new cljs.core.Keyword(null,"content","content",15833224));
var footer = cljs.core.get.call(null,map__27614__$1,new cljs.core.Keyword(null,"footer","footer",1606445390));
var close_fn = cljs.core.get.call(null,map__27614__$1,new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512));
var submit_fn = cljs.core.get.call(null,map__27614__$1,new cljs.core.Keyword(null,"submit-fn","submit-fn",1986212071));
return ((function (map__27614,map__27614__$1,title,content,footer,close_fn,submit_fn){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.modals._modal_wrapper,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__27614,map__27614__$1,title,content,footer,close_fn,submit_fn){
return (function (e){
if(cljs.core._EQ_.call(null,e.target,e.currentTarget)){
return close_fn.call(null);
} else {
return null;
}
});})(map__27614,map__27614__$1,title,content,footer,close_fn,submit_fn))
], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.modals._modal_body,((!(cljs.core._EQ_.call(null,"",title)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.regular.c-light-gray.caps.pb1","h2.regular.c-light-gray.caps.pb1",932739364),title], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),content], null)], null)], null);
});
;})(map__27614,map__27614__$1,title,content,footer,close_fn,submit_fn))
});
keechma.toolbox.css.core.register_component_styles.call(null,new cljs.core.Keyword(null,".spots_ui_components_modals--question-wrapper27616",".spots_ui_components_modals--question-wrapper27616",1791582221),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"max-height","max-height",-612563804),new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"height","height",1025178622)],["25px","25px","10px",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"light-gray-l","light-gray-l",-813032290).cljs$core$IFn$_invoke$arity$1(spots.stylesheets.colors.colors_with_variations))].join(''),"100%","25px","1","inline-block","100%","100%"]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:hover","&:hover",-852658855),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"white-d","white-d",1568933635).cljs$core$IFn$_invoke$arity$1(spots.stylesheets.colors.colors_with_variations))].join('')], null)], null)], null));

spots.ui.components.modals._question_wrapper = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,(function (){var or__8916__auto__ = new cljs.core.Keyword(null,"div","div",1057191632);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return "div";
}
})())),".spots_ui_components_modals--question-wrapper27616",".spots_ui_components_modals--question-wrapper",".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.core.name,null)))].join('');
spots.ui.components.modals.more_info = (function spots$ui$components$modals$more_info(p__27617){
var map__27618 = p__27617;
var map__27618__$1 = ((((!((map__27618 == null)))?((((map__27618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27618.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27618):map__27618);
var modal_title = cljs.core.get.call(null,map__27618__$1,new cljs.core.Keyword(null,"modal-title","modal-title",-709050582));
var modal_content = cljs.core.get.call(null,map__27618__$1,new cljs.core.Keyword(null,"modal-content","modal-content",-6375807));
var modal_footer = cljs.core.get.call(null,map__27618__$1,new cljs.core.Keyword(null,"modal-footer","modal-footer",1462046278));
var open_tooltip_atom_QMARK_ = reagent.core.atom.call(null,false);
return ((function (open_tooltip_atom_QMARK_,map__27618,map__27618__$1,modal_title,modal_content,modal_footer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.modals._question_wrapper,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.cursor-pointer","img.cursor-pointer",-47593363),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),"img/question-circle.svg",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_tooltip_atom_QMARK_,map__27618,map__27618__$1,modal_title,modal_content,modal_footer){
return (function (){
return cljs.core.swap_BANG_.call(null,open_tooltip_atom_QMARK_,cljs.core.not);
});})(open_tooltip_atom_QMARK_,map__27618,map__27618__$1,modal_title,modal_content,modal_footer))
], null)], null),(cljs.core.truth_(cljs.core.deref.call(null,open_tooltip_atom_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.modals.modal,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),modal_title,new cljs.core.Keyword(null,"content","content",15833224),modal_content,new cljs.core.Keyword(null,"footer","footer",1606445390),modal_footer,new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512),((function (open_tooltip_atom_QMARK_,map__27618,map__27618__$1,modal_title,modal_content,modal_footer){
return (function (){
return cljs.core.reset_BANG_.call(null,open_tooltip_atom_QMARK_,false);
});})(open_tooltip_atom_QMARK_,map__27618,map__27618__$1,modal_title,modal_content,modal_footer))
], null)], null):null)], null);
});
;})(open_tooltip_atom_QMARK_,map__27618,map__27618__$1,modal_title,modal_content,modal_footer))
});
keechma.toolbox.css.core.register_component_styles.call(null,new cljs.core.Keyword(null,".spots_ui_components_modals--modal-label27620",".spots_ui_components_modals--modal-label27620",-1376227140),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),"none",new cljs.core.Keyword(null,"color","color",1011675173),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"gray","gray",1013268388).cljs$core$IFn$_invoke$arity$1(spots.stylesheets.colors.colors_with_variations))].join(''),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"400",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"14px"], null)], null));

spots.ui.components.modals._modal_label = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,(function (){var or__8916__auto__ = new cljs.core.Keyword(null,"p","p",151049309);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return "div";
}
})())),".spots_ui_components_modals--modal-label27620",".spots_ui_components_modals--modal-label",".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.core.name,null)))].join('');
spots.ui.components.modals.caption_info = (function spots$ui$components$modals$caption_info(p__27621){
var map__27622 = p__27621;
var map__27622__$1 = ((((!((map__27622 == null)))?((((map__27622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27622.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27622):map__27622);
var label = cljs.core.get.call(null,map__27622__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var modal_title = cljs.core.get.call(null,map__27622__$1,new cljs.core.Keyword(null,"modal-title","modal-title",-709050582));
var modal_content = cljs.core.get.call(null,map__27622__$1,new cljs.core.Keyword(null,"modal-content","modal-content",-6375807));
var modal_footer = cljs.core.get.call(null,map__27622__$1,new cljs.core.Keyword(null,"modal-footer","modal-footer",1462046278));
var open_tooltip_atom_QMARK_ = reagent.core.atom.call(null,false);
return ((function (open_tooltip_atom_QMARK_,map__27622,map__27622__$1,label,modal_title,modal_content,modal_footer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inline-block","div.inline-block",-502349916),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cursor-pointer.underline.ml3","div.cursor-pointer.underline.ml3",-902817275),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_tooltip_atom_QMARK_,map__27622,map__27622__$1,label,modal_title,modal_content,modal_footer){
return (function (){
return cljs.core.swap_BANG_.call(null,open_tooltip_atom_QMARK_,cljs.core.not);
});})(open_tooltip_atom_QMARK_,map__27622,map__27622__$1,label,modal_title,modal_content,modal_footer))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.modals._modal_label,label], null)], null),(cljs.core.truth_(cljs.core.deref.call(null,open_tooltip_atom_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.modals.modal,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),modal_title,new cljs.core.Keyword(null,"content","content",15833224),modal_content,new cljs.core.Keyword(null,"footer","footer",1606445390),modal_footer,new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512),((function (open_tooltip_atom_QMARK_,map__27622,map__27622__$1,label,modal_title,modal_content,modal_footer){
return (function (){
return cljs.core.reset_BANG_.call(null,open_tooltip_atom_QMARK_,false);
});})(open_tooltip_atom_QMARK_,map__27622,map__27622__$1,label,modal_title,modal_content,modal_footer))
], null)], null):null)], null);
});
;})(open_tooltip_atom_QMARK_,map__27622,map__27622__$1,label,modal_title,modal_content,modal_footer))
});
spots.ui.components.modals.link_info = (function spots$ui$components$modals$link_info(p__27624){
var map__27625 = p__27624;
var map__27625__$1 = ((((!((map__27625 == null)))?((((map__27625.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27625.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27625):map__27625);
var label = cljs.core.get.call(null,map__27625__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var modal_title = cljs.core.get.call(null,map__27625__$1,new cljs.core.Keyword(null,"modal-title","modal-title",-709050582));
var modal_content = cljs.core.get.call(null,map__27625__$1,new cljs.core.Keyword(null,"modal-content","modal-content",-6375807));
var modal_footer = cljs.core.get.call(null,map__27625__$1,new cljs.core.Keyword(null,"modal-footer","modal-footer",1462046278));
var open_tooltip_atom_QMARK_ = reagent.core.atom.call(null,false);
return ((function (open_tooltip_atom_QMARK_,map__27625,map__27625__$1,label,modal_title,modal_content,modal_footer){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inline-block","div.inline-block",-502349916),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.cursor-pointer","div.cursor-pointer",1719595822),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_tooltip_atom_QMARK_,map__27625,map__27625__$1,label,modal_title,modal_content,modal_footer){
return (function (){
return cljs.core.swap_BANG_.call(null,open_tooltip_atom_QMARK_,cljs.core.not);
});})(open_tooltip_atom_QMARK_,map__27625,map__27625__$1,label,modal_title,modal_content,modal_footer))
], null),label], null),(cljs.core.truth_(cljs.core.deref.call(null,open_tooltip_atom_QMARK_))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.modals.modal,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),modal_title,new cljs.core.Keyword(null,"content","content",15833224),modal_content,new cljs.core.Keyword(null,"footer","footer",1606445390),modal_footer,new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512),((function (open_tooltip_atom_QMARK_,map__27625,map__27625__$1,label,modal_title,modal_content,modal_footer){
return (function (){
return cljs.core.reset_BANG_.call(null,open_tooltip_atom_QMARK_,false);
});})(open_tooltip_atom_QMARK_,map__27625,map__27625__$1,label,modal_title,modal_content,modal_footer))
], null)], null):null)], null);
});
;})(open_tooltip_atom_QMARK_,map__27625,map__27625__$1,label,modal_title,modal_content,modal_footer))
});
spots.ui.components.modals.form_modal = (function spots$ui$components$modals$form_modal(ctx,p__27627){
var map__27628 = p__27627;
var map__27628__$1 = ((((!((map__27628 == null)))?((((map__27628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27628.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27628):map__27628);
var modal_title = cljs.core.get.call(null,map__27628__$1,new cljs.core.Keyword(null,"modal-title","modal-title",-709050582));
var modal_content = cljs.core.get.call(null,map__27628__$1,new cljs.core.Keyword(null,"modal-content","modal-content",-6375807));
var modal_footer = cljs.core.get.call(null,map__27628__$1,new cljs.core.Keyword(null,"modal-footer","modal-footer",1462046278));
var submit_fn = cljs.core.get.call(null,map__27628__$1,new cljs.core.Keyword(null,"submit-fn","submit-fn",1986212071));
var close_fn = cljs.core.get.call(null,map__27628__$1,new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512));
var current_url = keechma.toolbox.ui.route_GT_.call(null,ctx);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inline-block","div.inline-block",-502349916),(cljs.core.truth_(new cljs.core.Keyword(null,"popup","popup",635890211).cljs$core$IFn$_invoke$arity$1(current_url))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.modals.modal_with_action,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),modal_title,new cljs.core.Keyword(null,"content","content",15833224),modal_content,new cljs.core.Keyword(null,"footer","footer",1606445390),modal_footer,new cljs.core.Keyword(null,"submit-fn","submit-fn",1986212071),submit_fn,new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512),(function (){var or__8916__auto__ = close_fn;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return ((function (or__8916__auto__,current_url,map__27628,map__27628__$1,modal_title,modal_content,modal_footer,submit_fn,close_fn){
return (function (){
return keechma.ui_component.redirect.call(null,ctx,cljs.core.dissoc.call(null,current_url,new cljs.core.Keyword(null,"popup","popup",635890211)));
});
;})(or__8916__auto__,current_url,map__27628,map__27628__$1,modal_title,modal_content,modal_footer,submit_fn,close_fn))
}
})()], null)], null):null)], null);
});
