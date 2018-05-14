// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('spots.ui.forms.recipient');
goog.require('cljs.core');
goog.require('keechma.ui_component');
goog.require('keechma.toolbox.ui');
goog.require('keechma.toolbox.forms.core');
goog.require('keechma.toolbox.css.core');
goog.require('reagent.core');
goog.require('keechma.toolbox.forms.helpers');
goog.require('spots.ui.components.inputs');
goog.require('clojure.string');
goog.require('spots.ui.components.decorators');
goog.require('spots.ui.components.modals');
goog.require('spots.ui.components.address_autocomplete');
goog.require('spots.ui.components.datepicker');
goog.require('spots.util.helpers');
goog.require('spots.domain.form_helpers');
goog.require('spots.domain.modal_content');
goog.require('spots.ui.components.delivery_form');
goog.require('spots.ui.components.shipping_form');
goog.require('spots.ui.components.pickup_form');
keechma.toolbox.css.core.register_component_styles.call(null,new cljs.core.Keyword(null,".spots_ui_forms_recipient--anchor-wrap27923",".spots_ui_forms_recipient--anchor-wrap27923",-249504950),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem"], null)], null));

spots.ui.forms.recipient._anchor_wrap = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,(function (){var or__8916__auto__ = new cljs.core.Keyword(null,"a","a",-2123407586);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return "div";
}
})())),".spots_ui_forms_recipient--anchor-wrap27923",".spots_ui_forms_recipient--anchor-wrap",".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.core.name,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"underline","underline",2018066703),new cljs.core.Keyword(null,"inline-block","inline-block",1967810016)], null))))].join('');
spots.ui.forms.recipient.render = (function spots$ui$forms$recipient$render(ctx){
var form_props = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipient","recipient",1650072234),new cljs.core.Keyword(null,"form","form",-1624062471)], null);
var form_state = cljs.core.deref.call(null,keechma.toolbox.forms.helpers.form_state.call(null,ctx,form_props));
var order_form = keechma.toolbox.ui.sub_GT_.call(null,ctx,new cljs.core.Keyword(null,"order-form","order-form",-1222210477));
var helpers = keechma.toolbox.forms.helpers.make_component_helpers.call(null,ctx,form_props);
var industries = keechma.toolbox.ui.sub_GT_.call(null,ctx,new cljs.core.Keyword(null,"industries","industries",-1300796770));
var buildings = keechma.toolbox.ui.sub_GT_.call(null,ctx,new cljs.core.Keyword(null,"buildings","buildings",-308691065));
var industry_list = cljs.core.map.call(null,((function (form_props,form_state,order_form,helpers,industries,buildings){
return (function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(f)], null);
});})(form_props,form_state,order_form,helpers,industries,buildings))
,industries);
var industry_id = keechma.toolbox.forms.helpers.attr_get_in.call(null,form_state,new cljs.core.Keyword(null,"industryId","industryId",2042732930));
var industry_name = spots.util.helpers.get_property_name.call(null,industry_id,industries);
var gift_note = keechma.toolbox.forms.helpers.attr_get_in.call(null,form_state,new cljs.core.Keyword(null,"giftMessage","giftMessage",-894570989));
var map__27924 = helpers;
var map__27924__$1 = ((((!((map__27924 == null)))?((((map__27924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27924.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27924):map__27924);
var submit = cljs.core.get.call(null,map__27924__$1,new cljs.core.Keyword(null,"submit","submit",-49315317));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),submit], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"shippingMethod","shippingMethod",-206764952).cljs$core$IFn$_invoke$arity$1(order_form);
if(cljs.core.truth_(temp__5457__auto__)){
var sm = temp__5457__auto__;
var G__27926 = sm;
switch (G__27926) {
case "manhattan_delivery":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.delivery_form.render,ctx,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"form-props","form-props",202171605),form_props,new cljs.core.Keyword(null,"form-state","form-state",-1897375037),form_state,new cljs.core.Keyword(null,"helpers","helpers",385052827),helpers,new cljs.core.Keyword(null,"order-form","order-form",-1222210477),order_form,new cljs.core.Keyword(null,"buildings","buildings",-308691065),buildings], null)], null);

break;
case "shipping":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.shipping_form.render,ctx,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"form-props","form-props",202171605),form_props,new cljs.core.Keyword(null,"form-state","form-state",-1897375037),form_state,new cljs.core.Keyword(null,"helpers","helpers",385052827),helpers,new cljs.core.Keyword(null,"order-form","order-form",-1222210477),order_form,new cljs.core.Keyword(null,"buildings","buildings",-308691065),buildings], null)], null);

break;
case "pickup":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.pickup_form.render,ctx,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"form-props","form-props",202171605),form_props,new cljs.core.Keyword(null,"form-state","form-state",-1897375037),form_state,new cljs.core.Keyword(null,"helpers","helpers",385052827),helpers], null)], null);

break;
default:
return null;

}
} else {
return null;
}
})(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.decorators._title,"Please select what type of order this is:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inline-block.mr3","div.inline-block.mr3",-1892374914),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs.radiobtn,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"label","label",1718410804),"Personal",new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"orderType","orderType",-1327411288),new cljs.core.Keyword(null,"helpers","helpers",385052827),helpers,new cljs.core.Keyword(null,"form-state","form-state",-1897375037),form_state,new cljs.core.Keyword(null,"name","name",1843675177),"orderType",new cljs.core.Keyword(null,"value","value",305978217),"personal"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inline-block","div.inline-block",-502349916),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs.radiobtn,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"label","label",1718410804),"Corporate",new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"orderType","orderType",-1327411288),new cljs.core.Keyword(null,"helpers","helpers",385052827),helpers,new cljs.core.Keyword(null,"form-state","form-state",-1897375037),form_state,new cljs.core.Keyword(null,"name","name",1843675177),"orderType",new cljs.core.Keyword(null,"value","value",305978217),"corporate"], null)], null)], null),((cljs.core._EQ_.call(null,keechma.toolbox.forms.helpers.attr_get_in.call(null,form_state,new cljs.core.Keyword(null,"orderType","orderType",-1327411288)),"corporate"))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.decorators._title,"Company name:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs.controlled_input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"form-state","form-state",-1897375037),form_state,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Enter here",new cljs.core.Keyword(null,"helpers","helpers",385052827),helpers,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"company","company",-340475075)], null)], null)], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.decorators._title,"Add a gift note to your order:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs.controlled_textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"form-state","form-state",-1897375037),form_state,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"",new cljs.core.Keyword(null,"helpers","helpers",385052827),helpers,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"giftMessage","giftMessage",-894570989)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"+$1 (Optional) - ",cljs.core.count.call(null,(function (){var or__8916__auto__ = gift_note;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return "";
}
})())," / 160"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-center","div.flex.justify-center",-491420122),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.domain.form_helpers.submit_button,form_state,"Next Step"], null)], null)], null)], null);
});
spots.ui.forms.recipient.component = keechma.ui_component.constructor$.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"renderer","renderer",336841071),spots.ui.forms.recipient.render,new cljs.core.Keyword(null,"subscription-deps","subscription-deps",1798032321),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form-state","form-state",-1897375037),new cljs.core.Keyword(null,"order-form","order-form",-1222210477),new cljs.core.Keyword(null,"buildings","buildings",-308691065),new cljs.core.Keyword(null,"industries","industries",-1300796770)], null),new cljs.core.Keyword(null,"topic","topic",-1960480691),keechma.toolbox.forms.core.id_key], null));
