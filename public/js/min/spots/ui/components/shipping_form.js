// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('spots.ui.components.shipping_form');
goog.require('cljs.core');
goog.require('keechma.ui_component');
goog.require('keechma.toolbox.css.core');
goog.require('keechma.toolbox.forms.helpers');
goog.require('spots.ui.components.decorators');
goog.require('spots.ui.components.inputs');
goog.require('spots.ui.components.modals');
goog.require('spots.ui.components.datepicker');
goog.require('spots.util.helpers');
goog.require('spots.domain.modal_content');
goog.require('spots.domain.form_helpers');
goog.require('clojure.string');
keechma.toolbox.css.core.register_component_styles.call(null,new cljs.core.Keyword(null,".spots_ui_components_shipping_form--anchor-wrap27910",".spots_ui_components_shipping_form--anchor-wrap27910",-5156617),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1rem"], null)], null));

spots.ui.components.shipping_form._anchor_wrap = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,(function (){var or__8916__auto__ = new cljs.core.Keyword(null,"a","a",-2123407586);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return "div";
}
})())),".spots_ui_components_shipping_form--anchor-wrap27910",".spots_ui_components_shipping_form--anchor-wrap",".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.core.name,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"underline","underline",2018066703),new cljs.core.Keyword(null,"inline-block","inline-block",1967810016)], null))))].join('');
spots.ui.components.shipping_form.render = (function spots$ui$components$shipping_form$render(ctx,p__27911){
var map__27912 = p__27911;
var map__27912__$1 = ((((!((map__27912 == null)))?((((map__27912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27912.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27912):map__27912);
var form_props = cljs.core.get.call(null,map__27912__$1,new cljs.core.Keyword(null,"form-props","form-props",202171605));
var helpers = cljs.core.get.call(null,map__27912__$1,new cljs.core.Keyword(null,"helpers","helpers",385052827));
var form_state = cljs.core.get.call(null,map__27912__$1,new cljs.core.Keyword(null,"form-state","form-state",-1897375037));
var order_form = cljs.core.get.call(null,map__27912__$1,new cljs.core.Keyword(null,"order-form","order-form",-1222210477));
var buildings = cljs.core.get.call(null,map__27912__$1,new cljs.core.Keyword(null,"buildings","buildings",-308691065));
var building_list = cljs.core.map.call(null,((function (map__27912,map__27912__$1,form_props,helpers,form_state,order_form,buildings){
return (function (f){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(f),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(f)], null);
});})(map__27912,map__27912__$1,form_props,helpers,form_state,order_form,buildings))
,buildings);
var building_id = keechma.toolbox.forms.helpers.attr_get_in.call(null,form_state,new cljs.core.Keyword(null,"buildingTypeId","buildingTypeId",937877519));
var building_name = spots.util.helpers.get_property_name.call(null,building_id,buildings);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.decorators._title,"Recipient Address: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.shipping_form._anchor_wrap,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),keechma.ui_component.url.call(null,ctx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),"order-info"], null))], null),"Change delivery method"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),keechma.ui_component.url.call(null,ctx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),"order-info"], null))], null),clojure.string.join.call(null,",",cljs.core.vals.call(null,new cljs.core.Keyword(null,"address","address",559499426).cljs$core$IFn$_invoke$arity$1(order_form)))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.decorators._title,"Recipient name:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs.controlled_input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"form-state","form-state",-1897375037),form_state,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"First Name Last Name",new cljs.core.Keyword(null,"helpers","helpers",385052827),helpers,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"recipientName","recipientName",-2050589830)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.decorators._title,"Recipient phone number:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs.controlled_input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"form-state","form-state",-1897375037),form_state,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Recipient Phone Number",new cljs.core.Keyword(null,"helpers","helpers",385052827),helpers,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"recipientPhoneNumber","recipientPhoneNumber",-840846021)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.decorators._title,"Building type:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs.dropdown_input,ctx,form_state,form_props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"buildingTypeId","buildingTypeId",937877519),new cljs.core.Keyword(null,"label","label",1718410804),"Select",new cljs.core.Keyword(null,"values","values",372645556),building_list], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.decorators._title,"Other comments:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs.controlled_textarea,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"form-state","form-state",-1897375037),form_state,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Comment",new cljs.core.Keyword(null,"helpers","helpers",385052827),helpers,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"deliveryComment","deliveryComment",2027337810)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"(Optional)"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.decorators._title,"What day should your order arrive?:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.modals.more_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"modal-title","modal-title",-709050582),"Shipping Rates",new cljs.core.Keyword(null,"modal-content","modal-content",-6375807),spots.domain.modal_content.shipping_content,new cljs.core.Keyword(null,"modal-footer","modal-footer",1462046278),"Close"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sm-col.sm-col-12","div.sm-col.sm-col-12",1801403412),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.datepicker.render,ctx,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"form-props","form-props",202171605),form_props,new cljs.core.Keyword(null,"form-state","form-state",-1897375037),form_state,new cljs.core.Keyword(null,"helpers","helpers",385052827),helpers,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Select Date",new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"shippingDate","shippingDate",1531513730)], null)], null)], null)], null)], null)], null)], null);
});
