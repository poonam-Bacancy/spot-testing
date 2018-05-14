// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('spots.controllers.clipart');
goog.require('cljs.core');
goog.require('keechma.toolbox.pipeline.controller');
goog.require('keechma.toolbox.pipeline.core');
goog.require('keechma.toolbox.forms.core');
goog.require('oops.core');
goog.require('medley.core');
goog.require('promesa.core');
goog.require('spots.domain.cupcake_design');
spots.controllers.clipart.set_cupcake_clipart = (function spots$controllers$clipart$set_cupcake_clipart(app_db,clipart_id){
var cupcake_design_id = cljs.core.get_in.call(null,app_db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"popup","popup",635890211),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
var cupcakes = cljs.core.get_in.call(null,app_db,cljs.core.conj.call(null,spots.domain.cupcake_design.form_data_path,new cljs.core.Keyword(null,"cupcakes","cupcakes",1587634267)));
var cupcake_idx = spots.domain.cupcake_design.get_cupcake_idx.call(null,cupcakes,cupcake_design_id);
if(cljs.core.truth_(cupcake_idx)){
return spots.domain.cupcake_design.set_design_type.call(null,cljs.core.assoc_in.call(null,spots.domain.cupcake_design.clear_designs.call(null,app_db,cupcake_idx),cljs.core.concat.call(null,spots.domain.cupcake_design.form_data_path,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cupcakes","cupcakes",1587634267),cupcake_idx,new cljs.core.Keyword(null,"clipartId","clipartId",-284954072)], null)),clipart_id),cupcake_idx,"clipart");
} else {
return app_db;
}
});
spots.controllers.clipart.controller = keechma.toolbox.pipeline.controller.constructor$.call(null,(function (route_data){
if(cljs.core._EQ_.call(null,"clipart",cljs.core.get_in.call(null,route_data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"popup","popup",635890211),new cljs.core.Keyword(null,"type","type",1174270348)], null)))){
return true;
} else {
return null;
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"set","set",304602554),keechma.toolbox.pipeline.core.make_pipeline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/commit! (set-cupcake-clipart app-db value))",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.commit_BANG_.call(null,spots.controllers.clipart.set_cupcake_clipart.call(null,app_db,value))], null);
}),(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/redirect! (dissoc (get-in app-db [:route :data]) :popup))",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.redirect_BANG_.call(null,cljs.core.dissoc.call(null,cljs.core.get_in.call(null,app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"data","data",-232669377)], null)),new cljs.core.Keyword(null,"popup","popup",635890211)))], null);
})], null)], null))], null));
