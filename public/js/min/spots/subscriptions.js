// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('spots.subscriptions');
goog.require('cljs.core');
goog.require('keechma.toolbox.dataloader.subscriptions');
goog.require('spots.edb');
goog.require('spots.datasources');
goog.require('keechma.toolbox.forms.helpers');
spots.subscriptions.get_kv = (function spots$subscriptions$get_kv(key){
return (function (app_db_atom){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,app_db_atom),cljs.core.flatten.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),key], null)));
}));
});
});
spots.subscriptions.clipart_url = (function spots$subscriptions$clipart_url(app_db_atom,id){
return reagent.ratom.make_reaction.call(null,(function (){
var clipart = spots.edb.get_item_by_id.call(null,cljs.core.deref.call(null,app_db_atom),new cljs.core.Keyword(null,"clipart","clipart",-2064250491),id);
return new cljs.core.Keyword(null,"imageURL","imageURL",1945550434).cljs$core$IFn$_invoke$arity$1(clipart);
}));
});
spots.subscriptions.clipart_filtered = (function spots$subscriptions$clipart_filtered(app_db_atom){
return reagent.ratom.make_reaction.call(null,(function (){
var app_db = cljs.core.deref.call(null,app_db_atom);
var clipart_filter = cljs.core.get_in.call(null,cljs.core.get_in.call(null,app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"data","data",-232669377)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"popup","popup",635890211),new cljs.core.Keyword(null,"filter","filter",-948537934)], null));
var clipart_list = spots.edb.get_collection.call(null,app_db,new cljs.core.Keyword(null,"clipart","clipart",-2064250491),new cljs.core.Keyword(null,"list","list",765357683));
var clipart_filtered = cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.filter.call(null,((function (app_db,clipart_filter,clipart_list){
return (function (p1__28930_SHARP_){
return cljs.core._EQ_.call(null,clipart_filter,new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(p1__28930_SHARP_));
});})(app_db,clipart_filter,clipart_list))
,clipart_list));
if((cljs.core._EQ_.call(null,"All",clipart_filter)) || ((clipart_filter == null))){
return clipart_list;
} else {
return clipart_filtered;
}
}));
});
spots.subscriptions.subscriptions = cljs.core.merge.call(null,keechma.toolbox.dataloader.subscriptions.make_subscriptions.call(null,spots.datasources.datasources,spots.edb.edb_schema),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"clipart-filtered","clipart-filtered",-659482432),new cljs.core.Keyword(null,"processing-selected-image?","processing-selected-image?",1187395905),new cljs.core.Keyword(null,"form-state","form-state",-1897375037),new cljs.core.Keyword(null,"form-progress","form-progress",1431385543),new cljs.core.Keyword(null,"cupcake-designs","cupcake-designs",-373967257),new cljs.core.Keyword(null,"order-pricing","order-pricing",1246212489),new cljs.core.Keyword(null,"image-upload-preview","image-upload-preview",-889826131),new cljs.core.Keyword(null,"clipart-url","clipart-url",-638041999),new cljs.core.Keyword(null,"show-paid-modal","show-paid-modal",-1898264110),new cljs.core.Keyword(null,"order-form","order-form",-1222210477)],[spots.subscriptions.clipart_filtered,spots.subscriptions.get_kv.call(null,new cljs.core.Keyword(null,"processing-selected-image?","processing-selected-image?",1187395905)),keechma.toolbox.forms.helpers.form_state_sub,spots.subscriptions.get_kv.call(null,new cljs.core.Keyword(null,"form-progress","form-progress",1431385543)),spots.subscriptions.get_kv.call(null,new cljs.core.Keyword(null,"cupcake-designs","cupcake-designs",-373967257)),spots.subscriptions.get_kv.call(null,new cljs.core.Keyword(null,"order-pricing","order-pricing",1246212489)),spots.subscriptions.get_kv.call(null,new cljs.core.Keyword(null,"image-upload-preview","image-upload-preview",-889826131)),spots.subscriptions.clipart_url,spots.subscriptions.get_kv.call(null,new cljs.core.Keyword(null,"show-paid-modal","show-paid-modal",-1898264110)),spots.subscriptions.get_kv.call(null,new cljs.core.Keyword(null,"order-form","order-form",-1222210477))]));
