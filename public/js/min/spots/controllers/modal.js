// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('spots.controllers.modal');
goog.require('cljs.core');
goog.require('keechma.toolbox.pipeline.controller');
goog.require('keechma.toolbox.pipeline.core');
goog.require('keechma.toolbox.forms.core');
goog.require('oops.core');
goog.require('promesa.core');
spots.controllers.modal.controller = keechma.toolbox.pipeline.controller.constructor$.call(null,(function (route_data){
return true;
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close-paid-modal","close-paid-modal",1638042411),keechma.toolbox.pipeline.core.make_pipeline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/commit! (assoc-in app-db [:kv :show-paid-modal] false))",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.commit_BANG_.call(null,cljs.core.assoc_in.call(null,app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword(null,"show-paid-modal","show-paid-modal",-1898264110)], null),false))], null);
})], null)], null))], null));
