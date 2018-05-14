// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('spots.controllers.init');
goog.require('cljs.core');
goog.require('keechma.toolbox.pipeline.controller');
goog.require('keechma.toolbox.pipeline.core');
spots.controllers.init.controller = keechma.toolbox.pipeline.controller.constructor$.call(null,(function (_){
return true;
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start","start",-355208981),keechma.toolbox.pipeline.core.make_pipeline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/commit! (assoc-in app-db [:kv :form-progress] {:user-info true}))",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.commit_BANG_.call(null,cljs.core.assoc_in.call(null,app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword(null,"form-progress","form-progress",1431385543)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"user-info","user-info",-1061909920),true], null)))], null);
})], null)], null))], null));
