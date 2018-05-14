// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('spots.ui.components.design_modals');
goog.require('cljs.core');
goog.require('keechma.ui_component');
goog.require('keechma.toolbox.ui');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('keechma.toolbox.forms.core');
goog.require('keechma.toolbox.forms.helpers');
goog.require('spots.stylesheets.colors');
goog.require('spots.ui.components.inputs');
goog.require('spots.ui.components.decorators');
goog.require('spots.ui.components.modals');
goog.require('oops.core');
goog.require('spots.ui.components.image_upload');
spots.ui.components.design_modals.render = (function spots$ui$components$design_modals$render(ctx,p__28882){
var map__28883 = p__28882;
var map__28883__$1 = ((((!((map__28883 == null)))?((((map__28883.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28883.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28883):map__28883);
var form_props = cljs.core.get.call(null,map__28883__$1,new cljs.core.Keyword(null,"form-props","form-props",202171605));
var form_state = cljs.core.get.call(null,map__28883__$1,new cljs.core.Keyword(null,"form-state","form-state",-1897375037));
var helpers = cljs.core.get.call(null,map__28883__$1,new cljs.core.Keyword(null,"helpers","helpers",385052827));
var current_url = keechma.toolbox.ui.route_GT_.call(null,ctx);
var popup = new cljs.core.Keyword(null,"popup","popup",635890211).cljs$core$IFn$_invoke$arity$1(current_url);
var popup_type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(popup);
var G__28885 = popup_type;
switch (G__28885) {
case "upload":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.modals.form_modal,ctx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"modal-title","modal-title",-709050582),"",new cljs.core.Keyword(null,"modal-content","modal-content",-6375807),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.ui_component.component.call(null,ctx,new cljs.core.Keyword(null,"image-upload","image-upload",-1506272457))], null)], null)], null);

break;
case "clipart":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.modals.form_modal,ctx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"modal-title","modal-title",-709050582),"",new cljs.core.Keyword(null,"modal-content","modal-content",-6375807),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.ui_component.component.call(null,ctx,new cljs.core.Keyword(null,"clipart","clipart",-2064250491))], null)], null)], null);

break;
case "message":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.modals.form_modal,ctx,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"modal-title","modal-title",-709050582),"Write A Message",new cljs.core.Keyword(null,"modal-content","modal-content",-6375807),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.ui_component.component.call(null,ctx,new cljs.core.Keyword(null,"message","message",-406056002)),form_props], null)], null)], null);

break;
default:
return null;

}
});
spots.ui.components.design_modals.component = keechma.ui_component.constructor$.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"renderer","renderer",336841071),spots.ui.components.design_modals.render,new cljs.core.Keyword(null,"topic","topic",-1960480691),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"component-deps","component-deps",-405716162),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"image-upload","image-upload",-1506272457),new cljs.core.Keyword(null,"clipart","clipart",-2064250491),new cljs.core.Keyword(null,"message","message",-406056002)], null)], null));
