// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('spots.ui.forms.personalization');
goog.require('cljs.core');
goog.require('cljs_uuid_utils.core');
goog.require('clojure.string');
goog.require('keechma.toolbox.forms.core');
goog.require('keechma.toolbox.forms.helpers');
goog.require('keechma.toolbox.ui');
goog.require('keechma.ui_component');
goog.require('oops.core');
goog.require('reagent.core');
goog.require('spots.stylesheets.colors');
goog.require('spots.ui.components.address_autocomplete');
goog.require('spots.ui.components.decorators');
goog.require('spots.ui.components.design_modals');
goog.require('spots.ui.components.inputs');
goog.require('spots.ui.components.modals');
goog.require('spots.util.gql_api');
goog.require('spots.util.helpers');
goog.require('spots.domain.form_helpers');
goog.require('spots.domain.modal_content');
spots.ui.forms.personalization.blank_img = "/img/blank-img.jpg";
spots.ui.forms.personalization.cupcake_size = "/img/cupcake-size.jpg";
spots.ui.forms.personalization.cupcake_total = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"For adults we recommend 3-4 cupcakes per person.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"For children we recommend 2-3 cupcakes per person."], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.center","div.center",1338956224),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),spots.ui.forms.personalization.cupcake_size], null)], null)], null)], null);
spots.ui.forms.personalization.get_design_img_src = (function spots$ui$forms$personalization$get_design_img_src(ctx,design){
if(cljs.core.truth_(new cljs.core.Keyword(null,"encodedImage","encodedImage",-564854346).cljs$core$IFn$_invoke$arity$1(design))){
return new cljs.core.Keyword(null,"encodedImage","encodedImage",-564854346).cljs$core$IFn$_invoke$arity$1(design);
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"clipartId","clipartId",-284954072).cljs$core$IFn$_invoke$arity$1(design))){
return spots.util.helpers.generate_resource_link.call(null,keechma.toolbox.ui.sub_GT_.call(null,ctx,new cljs.core.Keyword(null,"clipart-url","clipart-url",-638041999),new cljs.core.Keyword(null,"clipartId","clipartId",-284954072).cljs$core$IFn$_invoke$arity$1(design)));
} else {
return spots.ui.forms.personalization.blank_img;

}
}
});
spots.ui.forms.personalization.add_cupcake = (function spots$ui$forms$personalization$add_cupcake(cupcakes,cupcakes_diff){
return cljs.core.conj.call(null,cupcakes,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"quantity","quantity",-1929050694),cupcakes_diff,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs_uuid_utils.core.make_random_uuid.call(null)], null));
});
spots.ui.forms.personalization.cupcakes_total = (function spots$ui$forms$personalization$cupcakes_total(cupcakes){
return cljs.core.reduce.call(null,(function (acc,v){
return (acc + (function (){var or__8916__auto__ = new cljs.core.Keyword(null,"quantity","quantity",-1929050694).cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return (0);
}
})());
}),(0),cupcakes);
});
spots.ui.forms.personalization.remove_by_index = (function spots$ui$forms$personalization$remove_by_index(coll,remove_idx){
var items = coll;
var cleared_items = cljs.core.PersistentVector.EMPTY;
var idx = (0);
while(true){
if(cljs.core.not.call(null,cljs.core.seq.call(null,items))){
return cleared_items;
} else {
var next = cljs.core.first.call(null,items);
if(cljs.core.not_EQ_.call(null,idx,remove_idx)){
var G__28889 = cljs.core.rest.call(null,items);
var G__28890 = cljs.core.conj.call(null,cleared_items,next);
var G__28891 = (idx + (1));
items = G__28889;
cleared_items = G__28890;
idx = G__28891;
continue;
} else {
var G__28892 = cljs.core.rest.call(null,items);
var G__28893 = cleared_items;
var G__28894 = (idx + (1));
items = G__28892;
cleared_items = G__28893;
idx = G__28894;
continue;
}
}
break;
}
});
spots.ui.forms.personalization.render = (function spots$ui$forms$personalization$render(ctx){
var form_props = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"personalization","personalization",-90772288),new cljs.core.Keyword(null,"form","form",-1624062471)], null);
var form_state = cljs.core.deref.call(null,keechma.toolbox.forms.helpers.form_state.call(null,ctx,form_props));
var helpers = keechma.toolbox.forms.helpers.make_component_helpers.call(null,ctx,form_props);
var ccb = keechma.toolbox.forms.helpers.attr_get_in.call(null,form_state,new cljs.core.Keyword(null,"countCupcakesBy","countCupcakesBy",1194237456));
var cc = keechma.toolbox.forms.helpers.attr_get_in.call(null,form_state,new cljs.core.Keyword(null,"cupcakeCount","cupcakeCount",-729321273));
var cupcakes = (function (){var or__8916__auto__ = keechma.toolbox.forms.helpers.attr_get_in.call(null,form_state,new cljs.core.Keyword(null,"cupcakes","cupcakes",1587634267));
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var flavors = keechma.toolbox.forms.helpers.attr_get_in.call(null,form_state,new cljs.core.Keyword(null,"flavorIds","flavorIds",1648187953));
var cupcake_types = keechma.toolbox.ui.sub_GT_.call(null,ctx,new cljs.core.Keyword(null,"cupcake-types","cupcake-types",811632501));
var cupcake_sum = ((cljs.core._EQ_.call(null,"the_dozen",ccb))?((12) * cc):((4) * cc));
var pack_sum = ((((cc >= (6))) && (cljs.core._EQ_.call(null,"packs_of_four",ccb)))?true:null);
var customization_wording = ((cljs.core._EQ_.call(null,"the_dozen",ccb))?"Design":"Cupcake");
var current_url = keechma.toolbox.ui.route_GT_.call(null,ctx);
var map__28895 = helpers;
var map__28895__$1 = ((((!((map__28895 == null)))?((((map__28895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28895.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28895):map__28895);
var submit = cljs.core.get.call(null,map__28895__$1,new cljs.core.Keyword(null,"submit","submit",-49315317));
var set_value = cljs.core.get.call(null,map__28895__$1,new cljs.core.Keyword(null,"set-value","set-value",445227352));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.ui_component.component.call(null,ctx,new cljs.core.Keyword(null,"design-modals","design-modals",2035274581)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"helpers","helpers",385052827),helpers,new cljs.core.Keyword(null,"form-props","form-props",202171605),form_props,new cljs.core.Keyword(null,"form-state","form-state",-1897375037),form_state], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),submit], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.decorators._title,"Cupcake Total:",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.modals.more_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"modal-title","modal-title",-709050582),"Recommended order size",new cljs.core.Keyword(null,"modal-content","modal-content",-6375807),spots.ui.forms.personalization.cupcake_total,new cljs.core.Keyword(null,"modal-footer","modal-footer",1462046278),"Close"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.flex-row","div.flex.items-center.flex-row",1597322739),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inline-block.mr3","div.inline-block.mr3",-1892374914),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center","div.flex.items-center",-1537844053),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs.radiobtn,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"By the Dozen",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.c-gray.ml1","span.c-gray.ml1",126696878),"$25/Dozen"], null)], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"countCupcakesBy","countCupcakesBy",1194237456),new cljs.core.Keyword(null,"helpers","helpers",385052827),helpers,new cljs.core.Keyword(null,"form-state","form-state",-1897375037),form_state,new cljs.core.Keyword(null,"name","name",1843675177),"orderType",new cljs.core.Keyword(null,"value","value",305978217),"the_dozen"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb1-5","div.mb1-5",755892190),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.modals.more_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"modal-title","modal-title",-709050582),"Dozen Cupcake Designs",new cljs.core.Keyword(null,"modal-content","modal-content",-6375807),spots.domain.modal_content.by_the_dozen,new cljs.core.Keyword(null,"modal-footer","modal-footer",1462046278),"Close"], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inline-block","div.inline-block",-502349916),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center","div.flex.items-center",-1537844053),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs.radiobtn,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Packs of 4 (Minimum of 6 packs)",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.c-gray.ml1","span.c-gray.ml1",126696878),"$10/Pack"], null)], null),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"countCupcakesBy","countCupcakesBy",1194237456),new cljs.core.Keyword(null,"helpers","helpers",385052827),helpers,new cljs.core.Keyword(null,"form-state","form-state",-1897375037),form_state,new cljs.core.Keyword(null,"name","name",1843675177),"orderType",new cljs.core.Keyword(null,"value","value",305978217),"packs_of_four"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mb1-5","div.mb1-5",755892190),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.modals.more_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"modal-title","modal-title",-709050582),"4-Pack Designs",new cljs.core.Keyword(null,"modal-content","modal-content",-6375807),spots.domain.modal_content.four_packs,new cljs.core.Keyword(null,"modal-footer","modal-footer",1462046278),"Close"], null)], null)], null)], null)], null)], null),((cljs.core._EQ_.call(null,keechma.toolbox.forms.helpers.attr_get_in.call(null,form_state,new cljs.core.Keyword(null,"countCupcakesBy","countCupcakesBy",1194237456)),"the_dozen"))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs.cupcake_ammount,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"label","label",1718410804),"Dozen",new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"cupcakeCount","cupcakeCount",-729321273),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Amount",new cljs.core.Keyword(null,"helpers","helpers",385052827),helpers,new cljs.core.Keyword(null,"form-state","form-state",-1897375037),form_state], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inline.ml2.bold.h2","div.inline.ml2.bold.h2",1697922037),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cupcake_sum)," Cupcakes"].join('')], null)], null):null),((cljs.core._EQ_.call(null,keechma.toolbox.forms.helpers.attr_get_in.call(null,form_state,new cljs.core.Keyword(null,"countCupcakesBy","countCupcakesBy",1194237456)),"packs_of_four"))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs.cupcake_ammount,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"label","label",1718410804),"Packs of 4",new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"cupcakeCount","cupcakeCount",-729321273),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Amount",new cljs.core.Keyword(null,"helpers","helpers",385052827),helpers,new cljs.core.Keyword(null,"form-state","form-state",-1897375037),form_state], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inline.ml2.bold.h2","div.inline.ml2.bold.h2",1697922037),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cupcake_sum)," Cupcakes"].join('')], null)], null):null),((cljs.core._EQ_.call(null,keechma.toolbox.forms.helpers.attr_get_in.call(null,form_state,new cljs.core.Keyword(null,"countCupcakesBy","countCupcakesBy",1194237456)),"packs_of_four"))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.decorators._title,"Wraparound Label Message:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs.controlled_input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"form-state","form-state",-1897375037),form_state,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Message",new cljs.core.Keyword(null,"helpers","helpers",385052827),helpers,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"wrapAroundMessage","wrapAroundMessage",1163633710)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"+$1/Pack (Optional)"], null)], null):null),(cljs.core.truth_(cupcake_types)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.clearfix.mb2","div.clearfix.mb2",-883135916),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.decorators._title,"Click your flavor selections:"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.clearfix","div.clearfix",1775605822),cljs.core.doall.call(null,cljs.core.map.call(null,((function (form_props,form_state,helpers,ccb,cc,cupcakes,flavors,cupcake_types,cupcake_sum,pack_sum,customization_wording,current_url,map__28895,map__28895__$1,submit,set_value){
return (function (ct){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs.image_checkbox,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(ct),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ct),new cljs.core.Keyword(null,"image-src","image-src",1152914289),spots.util.helpers.generate_resource_link.call(null,new cljs.core.Keyword(null,"imageURL","imageURL",1945550434).cljs$core$IFn$_invoke$arity$1(ct)),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flavorIds","flavorIds",1648187953),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(ct)], null),new cljs.core.Keyword(null,"name","name",1843675177),"flavorId",new cljs.core.Keyword(null,"details-url","details-url",-926884790),"#",new cljs.core.Keyword(null,"form-state","form-state",-1897375037),form_state,new cljs.core.Keyword(null,"helpers","helpers",385052827),helpers], null)], null);
});})(form_props,form_state,helpers,ccb,cc,cupcakes,flavors,cupcake_types,cupcake_sum,pack_sum,customization_wording,current_url,map__28895,map__28895__$1,submit,set_value))
,cupcake_types))], null)], null):null),(cljs.core.truth_((function (){var and__8904__auto__ = ((0) < cupcake_sum);
if(and__8904__auto__){
return cljs.core.some.call(null,cljs.core.true_QMARK_,cljs.core.vals.call(null,flavors));
} else {
return and__8904__auto__;
}
})())?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.decorators._title,"Add cupcake designs"], null),(cljs.core.truth_(cupcakes)?cljs.core.doall.call(null,cljs.core.map_indexed.call(null,((function (form_props,form_state,helpers,ccb,cc,cupcakes,flavors,cupcake_types,cupcake_sum,pack_sum,customization_wording,current_url,map__28895,map__28895__$1,submit,set_value){
return (function (idx,design){
var attr_name = cljs.core.keyword.call(null,["design-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''));
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(design);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3.caps","h3.caps",1424740072),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(customization_wording)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((idx + (1)))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Customize your Cupcakes"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.clearfix.flex","div.clearfix.flex",-953937201),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-7q","div.col.col-7q",-1919753674),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs._button_rounded,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (attr_name,id,form_props,form_state,helpers,ccb,cc,cupcakes,flavors,cupcake_types,cupcake_sum,pack_sum,customization_wording,current_url,map__28895,map__28895__$1,submit,set_value){
return (function (e){
keechma.ui_component.redirect.call(null,ctx,cljs.core.assoc.call(null,current_url,new cljs.core.Keyword(null,"popup","popup",635890211),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"upload",new cljs.core.Keyword(null,"id","id",-1388402092),id], null)));

var target_obj_28897 = e;
var _STAR_runtime_state_STAR_28901 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_28897,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_28899 = [target_obj_28897,(function (){var next_obj_28900 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_28897,(0),"preventDefault",true))?(target_obj_28897["preventDefault"]):null);
return next_obj_28900;
})()];
var fn_28898 = (call_info_28899[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_28898,oops.state.get_last_access_modifier.call(null))){
if(!((fn_28898 == null))){
return fn_28898.call((call_info_28899[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_28901;
}});})(attr_name,id,form_props,form_state,helpers,ccb,cc,cupcakes,flavors,cupcake_types,cupcake_sum,pack_sum,customization_wording,current_url,map__28895,map__28895__$1,submit,set_value))
], null),"Upload My Art"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs._button_rounded,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (attr_name,id,form_props,form_state,helpers,ccb,cc,cupcakes,flavors,cupcake_types,cupcake_sum,pack_sum,customization_wording,current_url,map__28895,map__28895__$1,submit,set_value){
return (function (e){
keechma.ui_component.redirect.call(null,ctx,cljs.core.assoc.call(null,current_url,new cljs.core.Keyword(null,"popup","popup",635890211),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"clipart",new cljs.core.Keyword(null,"id","id",-1388402092),id], null)));

var target_obj_28902 = e;
var _STAR_runtime_state_STAR_28906 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_28902,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_28904 = [target_obj_28902,(function (){var next_obj_28905 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_28902,(0),"preventDefault",true))?(target_obj_28902["preventDefault"]):null);
return next_obj_28905;
})()];
var fn_28903 = (call_info_28904[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_28903,oops.state.get_last_access_modifier.call(null))){
if(!((fn_28903 == null))){
return fn_28903.call((call_info_28904[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_28906;
}});})(attr_name,id,form_props,form_state,helpers,ccb,cc,cupcakes,flavors,cupcake_types,cupcake_sum,pack_sum,customization_wording,current_url,map__28895,map__28895__$1,submit,set_value))
], null),"Choose Clip-Art"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs._button_rounded,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (attr_name,id,form_props,form_state,helpers,ccb,cc,cupcakes,flavors,cupcake_types,cupcake_sum,pack_sum,customization_wording,current_url,map__28895,map__28895__$1,submit,set_value){
return (function (e){
keechma.ui_component.redirect.call(null,ctx,cljs.core.assoc.call(null,current_url,new cljs.core.Keyword(null,"popup","popup",635890211),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"message",new cljs.core.Keyword(null,"id","id",-1388402092),id], null)));

var target_obj_28907 = e;
var _STAR_runtime_state_STAR_28911 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_28907,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_28909 = [target_obj_28907,(function (){var next_obj_28910 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_28907,(0),"preventDefault",true))?(target_obj_28907["preventDefault"]):null);
return next_obj_28910;
})()];
var fn_28908 = (call_info_28909[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_28908,oops.state.get_last_access_modifier.call(null))){
if(!((fn_28908 == null))){
return fn_28908.call((call_info_28909[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_28911;
}});})(attr_name,id,form_props,form_state,helpers,ccb,cc,cupcakes,flavors,cupcake_types,cupcake_sum,pack_sum,customization_wording,current_url,map__28895,map__28895__$1,submit,set_value))
], null),"Write Message"], null),((cljs.core._EQ_.call(null,"the_dozen",ccb))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.caps.mt4","p.caps.mt4",363231620),"Quantity of cupcakes",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"with design ",(idx + (1)),": "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-row.items-start","div.flex.flex-row.items-start",-642182129),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inline-block.col-2","div.inline-block.col-2",-595293376),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs.controlled_input,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"form-state","form-state",-1897375037),form_state,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Qty",new cljs.core.Keyword(null,"helpers","helpers",385052827),helpers,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cupcakes","cupcakes",1587634267),idx,new cljs.core.Keyword(null,"quantity","quantity",-1929050694)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.inline-block.col-2.ml1","div.inline-block.col-2.ml1",1368436399),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs._button_warning,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (attr_name,id,form_props,form_state,helpers,ccb,cc,cupcakes,flavors,cupcake_types,cupcake_sum,pack_sum,customization_wording,current_url,map__28895,map__28895__$1,submit,set_value){
return (function (e){
set_value.call(null,new cljs.core.Keyword(null,"cupcakes","cupcakes",1587634267),spots.ui.forms.personalization.remove_by_index.call(null,cupcakes,idx));

return e.preventDefault();
});})(attr_name,id,form_props,form_state,helpers,ccb,cc,cupcakes,flavors,cupcake_types,cupcake_sum,pack_sum,customization_wording,current_url,map__28895,map__28895__$1,submit,set_value))
], null),"Delete"], null)], null)], null)], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col.col-3","div.col.col-3",-395287545),((cljs.core._EQ_.call(null,"message",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(design)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.decorators.cupcake_message_design,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"svg-params","svg-params",-1332952437),spots.util.helpers.get_message_params.call(null,keechma.toolbox.ui.sub_GT_.call(null,ctx,new cljs.core.Keyword(null,"font","font",-1506159249)),keechma.toolbox.ui.sub_GT_.call(null,ctx,new cljs.core.Keyword(null,"colors","colors",1157174732)),design)], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.decorators.cupcake_design,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"img-src","img-src",-108905265),spots.ui.forms.personalization.get_design_img_src.call(null,ctx,design)], null)], null))], null)], null)], null);
});})(form_props,form_state,helpers,ccb,cc,cupcakes,flavors,cupcake_types,cupcake_sum,pack_sum,customization_wording,current_url,map__28895,map__28895__$1,submit,set_value))
,cupcakes)):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-center.py2","div.flex.justify-center.py2",1787741266),(function (){var cupcakes_added = spots.ui.forms.personalization.cupcakes_total.call(null,cupcakes);
var cupcakes_available_QMARK_ = (cupcakes_added < cupcake_sum);
if(cupcakes_available_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs._button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (cupcakes_added,cupcakes_available_QMARK_,form_props,form_state,helpers,ccb,cc,cupcakes,flavors,cupcake_types,cupcake_sum,pack_sum,customization_wording,current_url,map__28895,map__28895__$1,submit,set_value){
return (function (e){
set_value.call(null,new cljs.core.Keyword(null,"cupcakes","cupcakes",1587634267),spots.ui.forms.personalization.add_cupcake.call(null,cupcakes,(cupcake_sum - cupcakes_added)));

var target_obj_28912 = e;
var _STAR_runtime_state_STAR_28916 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_28912,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var call_info_28914 = [target_obj_28912,(function (){var next_obj_28915 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_28912,(0),"preventDefault",true))?(target_obj_28912["preventDefault"]):null);
return next_obj_28915;
})()];
var fn_28913 = (call_info_28914[(1)]);
if(oops.core.validate_fn_call_dynamically.call(null,fn_28913,oops.state.get_last_access_modifier.call(null))){
if(!((fn_28913 == null))){
return fn_28913.call((call_info_28914[(0)]));
} else {
return null;
}
} else {
return null;
}
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_28916;
}});})(cupcakes_added,cupcakes_available_QMARK_,form_props,form_state,helpers,ccb,cc,cupcakes,flavors,cupcake_types,cupcake_sum,pack_sum,customization_wording,current_url,map__28895,map__28895__$1,submit,set_value))
], null),"Add Design"], null);
} else {
if(cljs.core._EQ_.call(null,"the_dozen",ccb)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.c-red.h3","div.c-red.h3",-1811891321),"If you want to add additional customization, please adjust the cupcake quantities."], null);
} else {
return null;
}
}
})()], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.decorators._dashed_divider], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-center.mt2","div.flex.justify-center.mt2",-1636224666),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.domain.form_helpers.submit_button,form_state,"Next Step"], null)], null)], null):null)], null)], null);
});
spots.ui.forms.personalization.component = keechma.ui_component.constructor$.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"renderer","renderer",336841071),spots.ui.forms.personalization.render,new cljs.core.Keyword(null,"component-deps","component-deps",-405716162),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"design-modals","design-modals",2035274581)], null),new cljs.core.Keyword(null,"subscription-deps","subscription-deps",1798032321),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form-state","form-state",-1897375037),new cljs.core.Keyword(null,"cupcake-types","cupcake-types",811632501),new cljs.core.Keyword(null,"image-upload-preview","image-upload-preview",-889826131),new cljs.core.Keyword(null,"clipart-url","clipart-url",-638041999),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.Keyword(null,"colors","colors",1157174732)], null),new cljs.core.Keyword(null,"topic","topic",-1960480691),keechma.toolbox.forms.core.id_key], null));
