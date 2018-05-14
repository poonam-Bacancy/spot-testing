// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('spots.domain.cupcake_design');
goog.require('cljs.core');
goog.require('keechma.toolbox.forms.core');
spots.domain.cupcake_design.form_data_path = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),keechma.toolbox.forms.core.id_key,new cljs.core.Keyword(null,"states","states",1389013542),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"personalization","personalization",-90772288),new cljs.core.Keyword(null,"form","form",-1624062471)], null),new cljs.core.Keyword(null,"data","data",-232669377)], null);
spots.domain.cupcake_design.get_cupcake_idx = (function spots$domain$cupcake_design$get_cupcake_idx(cupcakes,cupcake_design_id){
var idx = (0);
var cs = cupcakes;
while(true){
var current = cljs.core.first.call(null,cs);
if(cljs.core._EQ_.call(null,cupcake_design_id,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(current))].join(''))){
return idx;
} else {
var rest_cs = cljs.core.rest.call(null,cs);
if(cljs.core.seq.call(null,rest_cs)){
var G__24876 = (idx + (1));
var G__24877 = rest_cs;
idx = G__24876;
cs = G__24877;
continue;
} else {
return null;
}
}
break;
}
});
spots.domain.cupcake_design.set_design_type = (function spots$domain$cupcake_design$set_design_type(app_db,idx,type){
var cupcake_path = cljs.core.concat.call(null,spots.domain.cupcake_design.form_data_path,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cupcakes","cupcakes",1587634267),idx,new cljs.core.Keyword(null,"type","type",1174270348)], null));
var cupcake_design = cljs.core.get_in.call(null,app_db,cupcake_path);
return cljs.core.assoc_in.call(null,app_db,cupcake_path,type);
});
spots.domain.cupcake_design.clear_designs = (function spots$domain$cupcake_design$clear_designs(app_db,idx){
var cupcake_path = cljs.core.concat.call(null,spots.domain.cupcake_design.form_data_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cupcakes","cupcakes",1587634267),idx], null));
var cupcake_design = cljs.core.get_in.call(null,app_db,cupcake_path);
return cljs.core.assoc_in.call(null,app_db,cupcake_path,cljs.core.dissoc.call(null,cupcake_design,new cljs.core.Keyword(null,"encodedImage","encodedImage",-564854346),new cljs.core.Keyword(null,"clipartId","clipartId",-284954072),new cljs.core.Keyword(null,"curved","curved",1164242293),new cljs.core.Keyword(null,"fontId","fontId",-474874285),new cljs.core.Keyword(null,"firstLine","firstLine",-51539625),new cljs.core.Keyword(null,"secondLine","secondLine",-1210275124),new cljs.core.Keyword(null,"thirdLine","thirdLine",698999214),new cljs.core.Keyword(null,"threeLine","threeLine",203582880)));
});
spots.domain.cupcake_design.clear_message = (function spots$domain$cupcake_design$clear_message(app_db,idx){
var cupcake_path = cljs.core.concat.call(null,spots.domain.cupcake_design.form_data_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cupcakes","cupcakes",1587634267),idx], null));
var cupcake_design = cljs.core.get_in.call(null,app_db,cupcake_path);
return cljs.core.assoc_in.call(null,app_db,cupcake_path,cljs.core.dissoc.call(null,cupcake_design,new cljs.core.Keyword(null,"curved","curved",1164242293),new cljs.core.Keyword(null,"colorId","colorId",935519260),new cljs.core.Keyword(null,"fontId","fontId",-474874285),new cljs.core.Keyword(null,"firstLine","firstLine",-51539625),new cljs.core.Keyword(null,"secondLine","secondLine",-1210275124),new cljs.core.Keyword(null,"thirdLine","thirdLine",698999214),new cljs.core.Keyword(null,"textSize","textSize",524775797),new cljs.core.Keyword(null,"threeLine","threeLine",203582880)));
});
spots.domain.cupcake_design.clear_image_and_clipart = (function spots$domain$cupcake_design$clear_image_and_clipart(app_db,idx){
var cupcake_path = cljs.core.concat.call(null,spots.domain.cupcake_design.form_data_path,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cupcakes","cupcakes",1587634267),idx], null));
var cupcake_design = cljs.core.get_in.call(null,app_db,cupcake_path);
return cljs.core.assoc_in.call(null,app_db,cupcake_path,cljs.core.dissoc.call(null,cupcake_design,new cljs.core.Keyword(null,"encodedImage","encodedImage",-564854346),new cljs.core.Keyword(null,"clipartId","clipartId",-284954072)));
});
spots.domain.cupcake_design.remove_cupcake_ids = (function spots$domain$cupcake_design$remove_cupcake_ids(data){
var cupcakes = new cljs.core.Keyword(null,"cupcakes","cupcakes",1587634267).cljs$core$IFn$_invoke$arity$1(data);
return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"cupcakes","cupcakes",1587634267),cljs.core.map.call(null,((function (cupcakes){
return (function (p1__24878_SHARP_){
return cljs.core.dissoc.call(null,p1__24878_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092));
});})(cupcakes))
,cupcakes));
});
spots.domain.cupcake_design.prepare_flavors = (function spots$domain$cupcake_design$prepare_flavors(data){
var flavors = new cljs.core.Keyword(null,"flavorIds","flavorIds",1648187953).cljs$core$IFn$_invoke$arity$1(data);
return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"flavorIds","flavorIds",1648187953),cljs.core.map.call(null,((function (flavors){
return (function (k){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.key.call(null,k))].join('');
});})(flavors))
,flavors));
});
spots.domain.cupcake_design.strip_local_data = (function spots$domain$cupcake_design$strip_local_data(data){
var cupcakes = new cljs.core.Keyword(null,"cupcakes","cupcakes",1587634267).cljs$core$IFn$_invoke$arity$1(data);
var flavor_ids = new cljs.core.Keyword(null,"flavorIds","flavorIds",1648187953).cljs$core$IFn$_invoke$arity$1(data);
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"flavorIds","flavorIds",1648187953),cljs.core.map.call(null,((function (cupcakes,flavor_ids){
return (function (p1__24879_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.key.call(null,p1__24879_SHARP_))].join('');
});})(cupcakes,flavor_ids))
,flavor_ids)),new cljs.core.Keyword(null,"cupcakes","cupcakes",1587634267),cljs.core.map.call(null,((function (cupcakes,flavor_ids){
return (function (p1__24880_SHARP_){
return cljs.core.dissoc.call(null,p1__24880_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"threeLine","threeLine",203582880));
});})(cupcakes,flavor_ids))
,cupcakes)),new cljs.core.Keyword(null,"cupcakeCount","cupcakeCount",-729321273));
});
