// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('spots.ui.forms.confirmation');
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
goog.require('spots.util.helpers');
goog.require('spots.domain.form_helpers');
spots.ui.forms.confirmation.blank_img = "/img/blank-img.jpg";
spots.ui.forms.confirmation.get_clipart_url = (function spots$ui$forms$confirmation$get_clipart_url(ctx,id){
var clipart = keechma.toolbox.ui.sub_GT_.call(null,ctx,new cljs.core.Keyword(null,"clipart","clipart",-2064250491));
var url = new cljs.core.Keyword(null,"imageURL","imageURL",1945550434).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.filter.call(null,((function (clipart){
return (function (p1__28923_SHARP_){
return cljs.core._EQ_.call(null,id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__28923_SHARP_));
});})(clipart))
,clipart)));
return url;
});
spots.ui.forms.confirmation.get_design_img_src = (function spots$ui$forms$confirmation$get_design_img_src(ctx,design){
if(cljs.core.truth_(new cljs.core.Keyword(null,"encodedImage","encodedImage",-564854346).cljs$core$IFn$_invoke$arity$1(design))){
return new cljs.core.Keyword(null,"encodedImage","encodedImage",-564854346).cljs$core$IFn$_invoke$arity$1(design);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"clipartId","clipartId",-284954072).cljs$core$IFn$_invoke$arity$1(design))){
return spots.util.helpers.generate_resource_link.call(null,spots.ui.forms.confirmation.get_clipart_url.call(null,ctx,new cljs.core.Keyword(null,"clipartId","clipartId",-284954072).cljs$core$IFn$_invoke$arity$1(design)));
} else {
return spots.ui.forms.confirmation.blank_img;

}
}
});
spots.ui.forms.confirmation.get_flavor = (function spots$ui$forms$confirmation$get_flavor(ctx,id){
var ct = keechma.toolbox.ui.sub_GT_.call(null,ctx,new cljs.core.Keyword(null,"cupcake-types","cupcake-types",811632501));
var flavor = cljs.core.first.call(null,cljs.core.filter.call(null,((function (ct){
return (function (c){
return cljs.core._EQ_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(c))].join(''));
});})(ct))
,ct));
return flavor;
});
spots.ui.forms.confirmation.render = (function spots$ui$forms$confirmation$render(ctx){
var form_props = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"confirmation","confirmation",-634977782),new cljs.core.Keyword(null,"form","form",-1624062471)], null);
var form_state = cljs.core.deref.call(null,keechma.toolbox.forms.helpers.form_state.call(null,ctx,form_props));
var helpers = keechma.toolbox.forms.helpers.make_component_helpers.call(null,ctx,form_props);
var cupcakes = (function (){var or__8916__auto__ = keechma.toolbox.forms.helpers.attr_get_in.call(null,form_state,new cljs.core.Keyword(null,"cupcakes","cupcakes",1587634267));
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var cupcake_flavors = (function (){var or__8916__auto__ = keechma.toolbox.forms.helpers.attr_get_in.call(null,form_state,new cljs.core.Keyword(null,"flavorIds","flavorIds",1648187953));
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var map__28924 = helpers;
var map__28924__$1 = ((((!((map__28924 == null)))?((((map__28924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28924.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28924):map__28924);
var submit = cljs.core.get.call(null,map__28924__$1,new cljs.core.Keyword(null,"submit","submit",-49315317));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),submit], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2.center","h2.center",-22312263),"Please check your designs and confirm this is what you want."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-wrap","div.flex.flex-wrap",-407942064),(cljs.core.truth_(cupcakes)?cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (form_props,form_state,helpers,cupcakes,cupcake_flavors,map__28924,map__28924__$1,submit){
return (function (idx,design){
if(cljs.core._EQ_.call(null,"message",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(design))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.decorators.flavor_image_with_message,cljs.core.into.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),idx,new cljs.core.Keyword(null,"label","label",1718410804),["Design ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((idx + (1)))].join(''),new cljs.core.Keyword(null,"ammount","ammount",548884932),new cljs.core.Keyword(null,"quantity","quantity",-1929050694).cljs$core$IFn$_invoke$arity$1(design)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"svg-params","svg-params",-1332952437),spots.util.helpers.get_message_params.call(null,keechma.toolbox.ui.sub_GT_.call(null,ctx,new cljs.core.Keyword(null,"font","font",-1506159249)),keechma.toolbox.ui.sub_GT_.call(null,ctx,new cljs.core.Keyword(null,"colors","colors",1157174732)),design)], null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.decorators.flavor_image,cljs.core.into.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"image-src","image-src",1152914289),spots.ui.forms.confirmation.get_design_img_src.call(null,ctx,design),new cljs.core.Keyword(null,"label","label",1718410804),["Design ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((idx + (1)))].join(''),new cljs.core.Keyword(null,"ammount","ammount",548884932),new cljs.core.Keyword(null,"quantity","quantity",-1929050694).cljs$core$IFn$_invoke$arity$1(design)], null))], null);
}
});})(form_props,form_state,helpers,cupcakes,cupcake_flavors,map__28924,map__28924__$1,submit))
,cupcakes)):null)], null),(cljs.core.truth_(cupcake_flavors)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.decorators._title,"Flavors:"], null),cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (form_props,form_state,helpers,cupcakes,cupcake_flavors,map__28924,map__28924__$1,submit){
return (function (idx,flav_id){
var flavor = spots.ui.forms.confirmation.get_flavor.call(null,ctx,cljs.core.key.call(null,flav_id));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb1","div.mb1",-1391960614),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center","div.flex.items-center",-1537844053),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.inline-block.circle.mr1","img.inline-block.circle.mr1",-1359295782),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(40),new cljs.core.Keyword(null,"height","height",1025178622),(40),new cljs.core.Keyword(null,"src","src",-1651076051),spots.util.helpers.generate_resource_link.call(null,new cljs.core.Keyword(null,"imageURL","imageURL",1945550434).cljs$core$IFn$_invoke$arity$1(flavor))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.inline-block.mr3","p.inline-block.mr3",-1450490738),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(flavor))].join('')], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.decorators._dashed_divider], null)], null);
});})(form_props,form_state,helpers,cupcakes,cupcake_flavors,map__28924,map__28924__$1,submit))
,cupcake_flavors))], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.decorators._title,"Additional order notes:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs.controlled_input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"form-state","form-state",-1897375037),form_state,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"",new cljs.core.Keyword(null,"helpers","helpers",385052827),helpers,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"additionalNotes","additionalNotes",1125923881)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"(Optional)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.decorators._title,"Promo code:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs.controlled_input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"form-state","form-state",-1897375037),form_state,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"",new cljs.core.Keyword(null,"helpers","helpers",385052827),helpers,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"promoCode","promoCode",1775486936)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"(Optional)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.decorators._title,"Can we post the images of your cupcakes on our social media?:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inline-block.mr3","div.inline-block.mr3",-1892374914),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs.radiobtn,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"label","label",1718410804),"Yes",new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"shareableImages","shareableImages",1104334690),new cljs.core.Keyword(null,"helpers","helpers",385052827),helpers,new cljs.core.Keyword(null,"form-state","form-state",-1897375037),form_state,new cljs.core.Keyword(null,"name","name",1843675177),"shareableImages",new cljs.core.Keyword(null,"value","value",305978217),true], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inline-block","div.inline-block",-502349916),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs.radiobtn,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"label","label",1718410804),"No",new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"shareableImages","shareableImages",1104334690),new cljs.core.Keyword(null,"helpers","helpers",385052827),helpers,new cljs.core.Keyword(null,"form-state","form-state",-1897375037),form_state,new cljs.core.Keyword(null,"name","name",1843675177),"shareableImages",new cljs.core.Keyword(null,"value","value",305978217),false], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-center.mt2","div.flex.justify-center.mt2",-1636224666),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.domain.form_helpers.submit_button,form_state,"Checkout"], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.ui_component.component.call(null,ctx,new cljs.core.Keyword(null,"forms-payment","forms-payment",-1143493798))], null)], null);
});
spots.ui.forms.confirmation.component = keechma.ui_component.constructor$.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"renderer","renderer",336841071),spots.ui.forms.confirmation.render,new cljs.core.Keyword(null,"component-deps","component-deps",-405716162),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"forms-payment","forms-payment",-1143493798)], null),new cljs.core.Keyword(null,"subscription-deps","subscription-deps",1798032321),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form-state","form-state",-1897375037),new cljs.core.Keyword(null,"cupcake-types","cupcake-types",811632501),new cljs.core.Keyword(null,"clipart-url","clipart-url",-638041999),new cljs.core.Keyword(null,"clipart","clipart",-2064250491),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.Keyword(null,"colors","colors",1157174732)], null),new cljs.core.Keyword(null,"topic","topic",-1960480691),keechma.toolbox.forms.core.id_key], null));
