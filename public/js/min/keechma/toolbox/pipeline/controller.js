// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('keechma.toolbox.pipeline.controller');
goog.require('cljs.core');
goog.require('keechma.controller');
goog.require('cljs.core.async');
goog.require('keechma.toolbox.pipeline.core');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
keechma.toolbox.pipeline.controller.PipelineController = (function (params_fn,pipelines,__meta,__extmap,__hash){
this.params_fn = params_fn;
this.pipelines = pipelines;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9604__auto__,k__9605__auto__){
var self__ = this;
var this__9604__auto____$1 = this;
return this__9604__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9605__auto__,null);
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9606__auto__,k25550,else__9607__auto__){
var self__ = this;
var this__9606__auto____$1 = this;
var G__25554 = k25550;
var G__25554__$1 = (((G__25554 instanceof cljs.core.Keyword))?G__25554.fqn:null);
switch (G__25554__$1) {
case "params-fn":
return self__.params_fn;

break;
case "pipelines":
return self__.pipelines;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25550,else__9607__auto__);

}
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9618__auto__,writer__9619__auto__,opts__9620__auto__){
var self__ = this;
var this__9618__auto____$1 = this;
var pr_pair__9621__auto__ = ((function (this__9618__auto____$1){
return (function (keyval__9622__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,cljs.core.pr_writer,""," ","",opts__9620__auto__,keyval__9622__auto__);
});})(this__9618__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,pr_pair__9621__auto__,"#keechma.toolbox.pipeline.controller.PipelineController{",", ","}",opts__9620__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params-fn","params-fn",2044282154),self__.params_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pipelines","pipelines",687128919),self__.pipelines],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25549){
var self__ = this;
var G__25549__$1 = this;
return (new cljs.core.RecordIter((0),G__25549__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params-fn","params-fn",2044282154),new cljs.core.Keyword(null,"pipelines","pipelines",687128919)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9602__auto__){
var self__ = this;
var this__9602__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9599__auto__){
var self__ = this;
var this__9599__auto____$1 = this;
return (new keechma.toolbox.pipeline.controller.PipelineController(self__.params_fn,self__.pipelines,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9608__auto__){
var self__ = this;
var this__9608__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9600__auto__){
var self__ = this;
var this__9600__auto____$1 = this;
var h__9372__auto__ = self__.__hash;
if(!((h__9372__auto__ == null))){
return h__9372__auto__;
} else {
var h__9372__auto____$1 = ((function (h__9372__auto__,this__9600__auto____$1){
return (function (coll__9601__auto__){
return (930798330 ^ cljs.core.hash_unordered_coll.call(null,coll__9601__auto__));
});})(h__9372__auto__,this__9600__auto____$1))
.call(null,this__9600__auto____$1);
self__.__hash = h__9372__auto____$1;

return h__9372__auto____$1;
}
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25551,other25552){
var self__ = this;
var this25551__$1 = this;
return (!((other25552 == null))) && ((this25551__$1.constructor === other25552.constructor)) && (cljs.core._EQ_.call(null,this25551__$1.params_fn,other25552.params_fn)) && (cljs.core._EQ_.call(null,this25551__$1.pipelines,other25552.pipelines)) && (cljs.core._EQ_.call(null,this25551__$1.__extmap,other25552.__extmap));
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9613__auto__,k__9614__auto__){
var self__ = this;
var this__9613__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"params-fn","params-fn",2044282154),null,new cljs.core.Keyword(null,"pipelines","pipelines",687128919),null], null), null),k__9614__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9613__auto____$1),self__.__meta),k__9614__auto__);
} else {
return (new keechma.toolbox.pipeline.controller.PipelineController(self__.params_fn,self__.pipelines,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9614__auto__)),null));
}
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9611__auto__,k__9612__auto__,G__25549){
var self__ = this;
var this__9611__auto____$1 = this;
var pred__25555 = cljs.core.keyword_identical_QMARK_;
var expr__25556 = k__9612__auto__;
if(cljs.core.truth_(pred__25555.call(null,new cljs.core.Keyword(null,"params-fn","params-fn",2044282154),expr__25556))){
return (new keechma.toolbox.pipeline.controller.PipelineController(G__25549,self__.pipelines,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25555.call(null,new cljs.core.Keyword(null,"pipelines","pipelines",687128919),expr__25556))){
return (new keechma.toolbox.pipeline.controller.PipelineController(self__.params_fn,G__25549,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.pipeline.controller.PipelineController(self__.params_fn,self__.pipelines,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9612__auto__,G__25549),null));
}
}
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9616__auto__){
var self__ = this;
var this__9616__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params-fn","params-fn",2044282154),self__.params_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pipelines","pipelines",687128919),self__.pipelines],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9603__auto__,G__25549){
var self__ = this;
var this__9603__auto____$1 = this;
return (new keechma.toolbox.pipeline.controller.PipelineController(self__.params_fn,self__.pipelines,G__25549,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.controller.PipelineController.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9609__auto__,entry__9610__auto__){
var self__ = this;
var this__9609__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9610__auto__)){
return this__9609__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9610__auto__,(0)),cljs.core._nth.call(null,entry__9610__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9609__auto____$1,entry__9610__auto__);
}
});

keechma.toolbox.pipeline.controller.PipelineController.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params-fn","params-fn",-610153615,null),new cljs.core.Symbol(null,"pipelines","pipelines",-1967306850,null)], null);
});

keechma.toolbox.pipeline.controller.PipelineController.cljs$lang$type = true;

keechma.toolbox.pipeline.controller.PipelineController.cljs$lang$ctorPrSeq = (function (this__9642__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"keechma.toolbox.pipeline.controller/PipelineController");
});

keechma.toolbox.pipeline.controller.PipelineController.cljs$lang$ctorPrWriter = (function (this__9642__auto__,writer__9643__auto__){
return cljs.core._write.call(null,writer__9643__auto__,"keechma.toolbox.pipeline.controller/PipelineController");
});

keechma.toolbox.pipeline.controller.__GT_PipelineController = (function keechma$toolbox$pipeline$controller$__GT_PipelineController(params_fn,pipelines){
return (new keechma.toolbox.pipeline.controller.PipelineController(params_fn,pipelines,null,null,null));
});

keechma.toolbox.pipeline.controller.map__GT_PipelineController = (function keechma$toolbox$pipeline$controller$map__GT_PipelineController(G__25553){
return (new keechma.toolbox.pipeline.controller.PipelineController(new cljs.core.Keyword(null,"params-fn","params-fn",2044282154).cljs$core$IFn$_invoke$arity$1(G__25553),new cljs.core.Keyword(null,"pipelines","pipelines",687128919).cljs$core$IFn$_invoke$arity$1(G__25553),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__25553,new cljs.core.Keyword(null,"params-fn","params-fn",2044282154),new cljs.core.Keyword(null,"pipelines","pipelines",687128919))),null));
});

cljs.core._add_method.call(null,keechma.controller.params,keechma.toolbox.pipeline.controller.PipelineController,(function (this$,route_params){
return new cljs.core.Keyword(null,"params-fn","params-fn",2044282154).cljs$core$IFn$_invoke$arity$1(this$).call(null,route_params);
}));
cljs.core._add_method.call(null,keechma.controller.start,keechma.toolbox.pipeline.controller.PipelineController,(function (this$,params,app_db){
keechma.controller.execute.call(null,this$,new cljs.core.Keyword(null,"start","start",-355208981),params);

return app_db;
}));
cljs.core._add_method.call(null,keechma.controller.stop,keechma.toolbox.pipeline.controller.PipelineController,(function (this$,params,app_db){
keechma.controller.execute.call(null,this$,new cljs.core.Keyword(null,"stop","stop",-2140911342),params);

return app_db;
}));
cljs.core._add_method.call(null,keechma.controller.handler,keechma.toolbox.pipeline.controller.PipelineController,(function (this$,app_db_atom,in_chan,_){
var c__17808__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17808__auto__){
return (function (){
var f__17809__auto__ = (function (){var switch__17718__auto__ = ((function (c__17808__auto__){
return (function (state_25584){
var state_val_25585 = (state_25584[(1)]);
if((state_val_25585 === (7))){
var inst_25565 = (state_25584[(7)]);
var inst_25575 = (state_25584[(2)]);
var state_25584__$1 = (function (){var statearr_25586 = state_25584;
(statearr_25586[(8)] = inst_25575);

return statearr_25586;
})();
if(cljs.core.truth_(inst_25565)){
var statearr_25587_25602 = state_25584__$1;
(statearr_25587_25602[(1)] = (8));

} else {
var statearr_25588_25603 = state_25584__$1;
(statearr_25588_25603[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25585 === (1))){
var state_25584__$1 = state_25584;
var statearr_25589_25604 = state_25584__$1;
(statearr_25589_25604[(2)] = null);

(statearr_25589_25604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25585 === (4))){
var inst_25570 = (state_25584[(9)]);
var inst_25565 = (state_25584[(7)]);
var inst_25564 = (state_25584[(2)]);
var inst_25565__$1 = cljs.core.nth.call(null,inst_25564,(0),null);
var inst_25566 = cljs.core.nth.call(null,inst_25564,(1),null);
var inst_25567 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25568 = [new cljs.core.Keyword(null,"pipelines","pipelines",687128919),inst_25565__$1];
var inst_25569 = (new cljs.core.PersistentVector(null,2,(5),inst_25567,inst_25568,null));
var inst_25570__$1 = cljs.core.get_in.call(null,this$,inst_25569);
var state_25584__$1 = (function (){var statearr_25590 = state_25584;
(statearr_25590[(10)] = inst_25566);

(statearr_25590[(9)] = inst_25570__$1);

(statearr_25590[(7)] = inst_25565__$1);

return statearr_25590;
})();
if(cljs.core.truth_(inst_25570__$1)){
var statearr_25591_25605 = state_25584__$1;
(statearr_25591_25605[(1)] = (5));

} else {
var statearr_25592_25606 = state_25584__$1;
(statearr_25592_25606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25585 === (6))){
var state_25584__$1 = state_25584;
var statearr_25593_25607 = state_25584__$1;
(statearr_25593_25607[(2)] = null);

(statearr_25593_25607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25585 === (3))){
var inst_25582 = (state_25584[(2)]);
var state_25584__$1 = state_25584;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25584__$1,inst_25582);
} else {
if((state_val_25585 === (2))){
var state_25584__$1 = state_25584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25584__$1,(4),in_chan);
} else {
if((state_val_25585 === (9))){
var state_25584__$1 = state_25584;
var statearr_25594_25608 = state_25584__$1;
(statearr_25594_25608[(2)] = null);

(statearr_25594_25608[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25585 === (5))){
var inst_25566 = (state_25584[(10)]);
var inst_25570 = (state_25584[(9)]);
var inst_25572 = inst_25570.call(null,this$,app_db_atom,inst_25566);
var state_25584__$1 = state_25584;
var statearr_25595_25609 = state_25584__$1;
(statearr_25595_25609[(2)] = inst_25572);

(statearr_25595_25609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25585 === (10))){
var inst_25580 = (state_25584[(2)]);
var state_25584__$1 = state_25584;
var statearr_25596_25610 = state_25584__$1;
(statearr_25596_25610[(2)] = inst_25580);

(statearr_25596_25610[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25585 === (8))){
var state_25584__$1 = state_25584;
var statearr_25597_25611 = state_25584__$1;
(statearr_25597_25611[(2)] = null);

(statearr_25597_25611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});})(c__17808__auto__))
;
return ((function (switch__17718__auto__,c__17808__auto__){
return (function() {
var keechma$toolbox$pipeline$controller$state_machine__17719__auto__ = null;
var keechma$toolbox$pipeline$controller$state_machine__17719__auto____0 = (function (){
var statearr_25598 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25598[(0)] = keechma$toolbox$pipeline$controller$state_machine__17719__auto__);

(statearr_25598[(1)] = (1));

return statearr_25598;
});
var keechma$toolbox$pipeline$controller$state_machine__17719__auto____1 = (function (state_25584){
while(true){
var ret_value__17720__auto__ = (function (){try{while(true){
var result__17721__auto__ = switch__17718__auto__.call(null,state_25584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17721__auto__;
}
break;
}
}catch (e25599){if((e25599 instanceof Object)){
var ex__17722__auto__ = e25599;
var statearr_25600_25612 = state_25584;
(statearr_25600_25612[(5)] = ex__17722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25613 = state_25584;
state_25584 = G__25613;
continue;
} else {
return ret_value__17720__auto__;
}
break;
}
});
keechma$toolbox$pipeline$controller$state_machine__17719__auto__ = function(state_25584){
switch(arguments.length){
case 0:
return keechma$toolbox$pipeline$controller$state_machine__17719__auto____0.call(this);
case 1:
return keechma$toolbox$pipeline$controller$state_machine__17719__auto____1.call(this,state_25584);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
keechma$toolbox$pipeline$controller$state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$toolbox$pipeline$controller$state_machine__17719__auto____0;
keechma$toolbox$pipeline$controller$state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$toolbox$pipeline$controller$state_machine__17719__auto____1;
return keechma$toolbox$pipeline$controller$state_machine__17719__auto__;
})()
;})(switch__17718__auto__,c__17808__auto__))
})();
var state__17810__auto__ = (function (){var statearr_25601 = f__17809__auto__.call(null);
(statearr_25601[(6)] = c__17808__auto__);

return statearr_25601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17810__auto__);
});})(c__17808__auto__))
);

return c__17808__auto__;
}));
/**
 * 
 * Constructor for the pipeline controller.
 * 
 * Pipeline controllers are special type of Keechma controllers that handle their commands with pipelines. Pipelines allow you to model a command / action as a series of steps. Pipelines know how to handle promises and they themselves return a promise.
 * 
 * Pipelines allow you to split async actions into distinct steps:
 * 
 * - Pipeline processing
 * - Sideffects
 * 
 * If a pipeline processing step returns a promise (for instance from an AJAX request), pipeline will wait until that promise is resolved before proceeding to the next step.
 * 
 * Simple example
 * 
 * ```clojure
 * (ns some-namespace
 *   (:require [keechma.toolbox.pipeline.controller :as pp-controller]
 *          [keechma.toolbox.pipeline.core :as pp :refer-macros [pipeline!]])
 * 
 * (def some-controller
 *   (fn [route-params] true) ;; route params function
 *   {:start (pipeline! [value app-db]
 *          (pp/commit! (assoc-in app-db [:kv :current-user-status] :loading))
 *          (load-user-from-server)
 *          (pp/commit! (->app-db
 *                         (assoc-in [:kv :current-user-status] :loaded)
 *                         (assoc-in [:kv :current-user] value))))})
 * ```
 * 
 * In the previous example three things happened:
 * 
 * 1. We stored current user status as `:loading` in the app-db
 * 2. We loaded user from the server
 * 3. We stored the current user status and the current user in the app-db
 * 
 * `value` always holds the returned (or resolved) value from the previous processing step - unless the function returns `nil` in that case, value is bound to the previous value. Also, we had to use the `commit!` sideffect function to mutate the app-db.
 * 
 * `value` and `app-db` arguments are always bound to the current pipeline value and to the current version of app-db. This means that in every processing step, value and app-db point to the results of the previous processing step.`
 * 
 * If we want to handle errors or rejections in pipelines, we can use the `rescue!` block:
 * 
 * ```clojure
 * (def some-controller
 *   (fn [route-params] true) ;; route params function
 *   {:start (pipeline! [value app-db]
 *          (pp/commit! (assoc-in app-db [:kv :current-user-status] :loading))
 *          (load-user-from-server)
 *          (pp/commit! (->app-db
 *                         (assoc-in [:kv :current-user-status] :loaded)
 *                         (assoc-in [:kv :current-user] value)))
 *          (rescue! [error]
 *            (pp/commit! (assoc-in app-db [:kv :current-user-status] :error))})
 * ```
 * 
 * Rescue block will catch any errors that happen in the pipeline - including the promises that were rejected. Steps in the rescue block have access to value and app-db arguments.
 * 
 * **Nesting pipelines**
 * 
 * Sometimes you need to run the pipeline only if some condition is true. In that case you can nest pipelines:
 * 
 * ```clojure
 * (def some-controller
 *   (fn [route-params] true) ;; route params function
 *   {:start (pipeline! [value app-db]
 *          (when (= value true)
 *            (pipeline! [value app-db]
 *              (some-api-call)
 *              (pp/commit! (mutate-app-db app-db)))))}) 
 * ```
 * 
 * **Pipeline sideffects**
 * 
 * Pipelines can have various sideffects:
 * 
 * 1. `commit!` - commits the new app-db version in the global app-db atom
 * 2. `send-command!` - sends command to another controller
 * 3. `execute!` - executes command in the current controller
 * 4. `redirect!` - redirects to a different URL
 * 
 * **Exclusive pipelines**
 * 
 * In some cases you want to always run only one pipeline at a time. One example of that behavior is the live search. 
 * 
 * Let's say that you want to implement it as a command that runs on every key press. After the command is ran, it should wait for 500msec before calling the API. If the command is called again in these 500msec, stop the pipeline and run a new one.
 * 
 * Here's how you would implement this feature:
 * 
 * ```clojure
 * (def search-controller
 *   (pp-controller/constructor
 * (fn [] true)
 * {:search (pp/exclusive
 *           (pipeline! [value app-db]
 *             (when-not (empty? value)
 *               (pipeline! [value app-db]
 *                 (delay-pipeline 500)
 *                 (movie-search value)
 *                 (println "SEARCH RESULTS:" value)))))}))
 * ```
 *   
 */
keechma.toolbox.pipeline.controller.constructor$ = (function keechma$toolbox$pipeline$controller$constructor(params_fn,pipelines){
return keechma.toolbox.pipeline.controller.__GT_PipelineController.call(null,params_fn,pipelines);
});
