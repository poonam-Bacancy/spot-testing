// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('keechma.controller');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('keechma.reporter');
keechma.controller.not_implemented = new cljs.core.Keyword("keechma.controller","not-implemented","keechma.controller/not-implemented",1337990552);
/**
 * Helper function to dispatch commands from the `handler` function.
 * 
 *   Most of the time, handler function will just dispatch the commands
 *   to other functions. This functions provides a shortcut for that case.
 * 
 *   ```clojure
 *   (defrecord Controller []
 *  IController
 *  (handler [_ app-db-atom in-chan _]
 *    (dispatcher app-db-atom in-chan {:command-name some-fn})))
 *   ```
 */
keechma.controller.dispatcher = (function keechma$controller$dispatcher(app_db_atom,in_chan,actions){
var c__17808__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17808__auto__){
return (function (){
var f__17809__auto__ = (function (){var switch__17718__auto__ = ((function (c__17808__auto__){
return (function (state_24916){
var state_val_24917 = (state_24916[(1)]);
if((state_val_24917 === (7))){
var inst_24900 = (state_24916[(7)]);
var inst_24907 = (state_24916[(2)]);
var state_24916__$1 = (function (){var statearr_24918 = state_24916;
(statearr_24918[(8)] = inst_24907);

return statearr_24918;
})();
if(cljs.core.truth_(inst_24900)){
var statearr_24919_24934 = state_24916__$1;
(statearr_24919_24934[(1)] = (8));

} else {
var statearr_24920_24935 = state_24916__$1;
(statearr_24920_24935[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24917 === (1))){
var state_24916__$1 = state_24916;
var statearr_24921_24936 = state_24916__$1;
(statearr_24921_24936[(2)] = null);

(statearr_24921_24936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24917 === (4))){
var inst_24900 = (state_24916[(7)]);
var inst_24902 = (state_24916[(9)]);
var inst_24899 = (state_24916[(2)]);
var inst_24900__$1 = cljs.core.nth.call(null,inst_24899,(0),null);
var inst_24901 = cljs.core.nth.call(null,inst_24899,(1),null);
var inst_24902__$1 = cljs.core.get.call(null,actions,inst_24900__$1);
var state_24916__$1 = (function (){var statearr_24922 = state_24916;
(statearr_24922[(10)] = inst_24901);

(statearr_24922[(7)] = inst_24900__$1);

(statearr_24922[(9)] = inst_24902__$1);

return statearr_24922;
})();
if(cljs.core.truth_(inst_24902__$1)){
var statearr_24923_24937 = state_24916__$1;
(statearr_24923_24937[(1)] = (5));

} else {
var statearr_24924_24938 = state_24916__$1;
(statearr_24924_24938[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24917 === (6))){
var state_24916__$1 = state_24916;
var statearr_24925_24939 = state_24916__$1;
(statearr_24925_24939[(2)] = null);

(statearr_24925_24939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24917 === (3))){
var inst_24914 = (state_24916[(2)]);
var state_24916__$1 = state_24916;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24916__$1,inst_24914);
} else {
if((state_val_24917 === (2))){
var state_24916__$1 = state_24916;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24916__$1,(4),in_chan);
} else {
if((state_val_24917 === (9))){
var state_24916__$1 = state_24916;
var statearr_24926_24940 = state_24916__$1;
(statearr_24926_24940[(2)] = null);

(statearr_24926_24940[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24917 === (5))){
var inst_24901 = (state_24916[(10)]);
var inst_24902 = (state_24916[(9)]);
var inst_24904 = inst_24902.call(null,app_db_atom,inst_24901);
var state_24916__$1 = state_24916;
var statearr_24927_24941 = state_24916__$1;
(statearr_24927_24941[(2)] = inst_24904);

(statearr_24927_24941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24917 === (10))){
var inst_24912 = (state_24916[(2)]);
var state_24916__$1 = state_24916;
var statearr_24928_24942 = state_24916__$1;
(statearr_24928_24942[(2)] = inst_24912);

(statearr_24928_24942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24917 === (8))){
var state_24916__$1 = state_24916;
var statearr_24929_24943 = state_24916__$1;
(statearr_24929_24943[(2)] = null);

(statearr_24929_24943[(1)] = (2));


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
var keechma$controller$dispatcher_$_state_machine__17719__auto__ = null;
var keechma$controller$dispatcher_$_state_machine__17719__auto____0 = (function (){
var statearr_24930 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24930[(0)] = keechma$controller$dispatcher_$_state_machine__17719__auto__);

(statearr_24930[(1)] = (1));

return statearr_24930;
});
var keechma$controller$dispatcher_$_state_machine__17719__auto____1 = (function (state_24916){
while(true){
var ret_value__17720__auto__ = (function (){try{while(true){
var result__17721__auto__ = switch__17718__auto__.call(null,state_24916);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17721__auto__;
}
break;
}
}catch (e24931){if((e24931 instanceof Object)){
var ex__17722__auto__ = e24931;
var statearr_24932_24944 = state_24916;
(statearr_24932_24944[(5)] = ex__17722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24916);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24931;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24945 = state_24916;
state_24916 = G__24945;
continue;
} else {
return ret_value__17720__auto__;
}
break;
}
});
keechma$controller$dispatcher_$_state_machine__17719__auto__ = function(state_24916){
switch(arguments.length){
case 0:
return keechma$controller$dispatcher_$_state_machine__17719__auto____0.call(this);
case 1:
return keechma$controller$dispatcher_$_state_machine__17719__auto____1.call(this,state_24916);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
keechma$controller$dispatcher_$_state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$controller$dispatcher_$_state_machine__17719__auto____0;
keechma$controller$dispatcher_$_state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$controller$dispatcher_$_state_machine__17719__auto____1;
return keechma$controller$dispatcher_$_state_machine__17719__auto__;
})()
;})(switch__17718__auto__,c__17808__auto__))
})();
var state__17810__auto__ = (function (){var statearr_24933 = f__17809__auto__.call(null);
(statearr_24933[(6)] = c__17808__auto__);

return statearr_24933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17810__auto__);
});})(c__17808__auto__))
);

return c__17808__auto__;
});

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
keechma.controller.SerializedController = (function (params,__meta,__extmap,__hash){
this.params = params;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.controller.SerializedController.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9604__auto__,k__9605__auto__){
var self__ = this;
var this__9604__auto____$1 = this;
return this__9604__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9605__auto__,null);
});

keechma.controller.SerializedController.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9606__auto__,k24947,else__9607__auto__){
var self__ = this;
var this__9606__auto____$1 = this;
var G__24951 = k24947;
var G__24951__$1 = (((G__24951 instanceof cljs.core.Keyword))?G__24951.fqn:null);
switch (G__24951__$1) {
case "params":
return self__.params;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24947,else__9607__auto__);

}
});

keechma.controller.SerializedController.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9618__auto__,writer__9619__auto__,opts__9620__auto__){
var self__ = this;
var this__9618__auto____$1 = this;
var pr_pair__9621__auto__ = ((function (this__9618__auto____$1){
return (function (keyval__9622__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,cljs.core.pr_writer,""," ","",opts__9620__auto__,keyval__9622__auto__);
});})(this__9618__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,pr_pair__9621__auto__,"#keechma.controller.SerializedController{",", ","}",opts__9620__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null))], null),self__.__extmap));
});

keechma.controller.SerializedController.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24946){
var self__ = this;
var G__24946__$1 = this;
return (new cljs.core.RecordIter((0),G__24946__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.controller.SerializedController.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9602__auto__){
var self__ = this;
var this__9602__auto____$1 = this;
return self__.__meta;
});

keechma.controller.SerializedController.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9599__auto__){
var self__ = this;
var this__9599__auto____$1 = this;
return (new keechma.controller.SerializedController(self__.params,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.controller.SerializedController.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9608__auto__){
var self__ = this;
var this__9608__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

keechma.controller.SerializedController.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9600__auto__){
var self__ = this;
var this__9600__auto____$1 = this;
var h__9372__auto__ = self__.__hash;
if(!((h__9372__auto__ == null))){
return h__9372__auto__;
} else {
var h__9372__auto____$1 = ((function (h__9372__auto__,this__9600__auto____$1){
return (function (coll__9601__auto__){
return (2020583419 ^ cljs.core.hash_unordered_coll.call(null,coll__9601__auto__));
});})(h__9372__auto__,this__9600__auto____$1))
.call(null,this__9600__auto____$1);
self__.__hash = h__9372__auto____$1;

return h__9372__auto____$1;
}
});

keechma.controller.SerializedController.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24948,other24949){
var self__ = this;
var this24948__$1 = this;
return (!((other24949 == null))) && ((this24948__$1.constructor === other24949.constructor)) && (cljs.core._EQ_.call(null,this24948__$1.params,other24949.params)) && (cljs.core._EQ_.call(null,this24948__$1.__extmap,other24949.__extmap));
});

keechma.controller.SerializedController.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9613__auto__,k__9614__auto__){
var self__ = this;
var this__9613__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),null], null), null),k__9614__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9613__auto____$1),self__.__meta),k__9614__auto__);
} else {
return (new keechma.controller.SerializedController(self__.params,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9614__auto__)),null));
}
});

keechma.controller.SerializedController.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9611__auto__,k__9612__auto__,G__24946){
var self__ = this;
var this__9611__auto____$1 = this;
var pred__24952 = cljs.core.keyword_identical_QMARK_;
var expr__24953 = k__9612__auto__;
if(cljs.core.truth_(pred__24952.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__24953))){
return (new keechma.controller.SerializedController(G__24946,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.controller.SerializedController(self__.params,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9612__auto__,G__24946),null));
}
});

keechma.controller.SerializedController.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9616__auto__){
var self__ = this;
var this__9616__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null))], null),self__.__extmap));
});

keechma.controller.SerializedController.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9603__auto__,G__24946){
var self__ = this;
var this__9603__auto____$1 = this;
return (new keechma.controller.SerializedController(self__.params,G__24946,self__.__extmap,self__.__hash));
});

keechma.controller.SerializedController.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9609__auto__,entry__9610__auto__){
var self__ = this;
var this__9609__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9610__auto__)){
return this__9609__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9610__auto__,(0)),cljs.core._nth.call(null,entry__9610__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9609__auto____$1,entry__9610__auto__);
}
});

keechma.controller.SerializedController.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",-1943919534,null)], null);
});

keechma.controller.SerializedController.cljs$lang$type = true;

keechma.controller.SerializedController.cljs$lang$ctorPrSeq = (function (this__9642__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"keechma.controller/SerializedController");
});

keechma.controller.SerializedController.cljs$lang$ctorPrWriter = (function (this__9642__auto__,writer__9643__auto__){
return cljs.core._write.call(null,writer__9643__auto__,"keechma.controller/SerializedController");
});

keechma.controller.__GT_SerializedController = (function keechma$controller$__GT_SerializedController(params){
return (new keechma.controller.SerializedController(params,null,null,null));
});

keechma.controller.map__GT_SerializedController = (function keechma$controller$map__GT_SerializedController(G__24950){
return (new keechma.controller.SerializedController(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__24950),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__24950,new cljs.core.Keyword(null,"params","params",710516235))),null));
});

keechma.controller.record_type = (function keechma$controller$record_type(var_args){
var args__10191__auto__ = [];
var len__10184__auto___24958 = arguments.length;
var i__10185__auto___24959 = (0);
while(true){
if((i__10185__auto___24959 < len__10184__auto___24958)){
args__10191__auto__.push((arguments[i__10185__auto___24959]));

var G__24960 = (i__10185__auto___24959 + (1));
i__10185__auto___24959 = G__24960;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((1) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((1)),(0),null)):null);
return keechma.controller.record_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10192__auto__);
});

keechma.controller.record_type.cljs$core$IFn$_invoke$arity$variadic = (function (record,args){
return cljs.core.type.call(null,record);
});

keechma.controller.record_type.cljs$lang$maxFixedArity = (1);

keechma.controller.record_type.cljs$lang$applyTo = (function (seq24956){
var G__24957 = cljs.core.first.call(null,seq24956);
var seq24956__$1 = cljs.core.next.call(null,seq24956);
return keechma.controller.record_type.cljs$core$IFn$_invoke$arity$variadic(G__24957,seq24956__$1);
});

if(typeof keechma.controller.params !== 'undefined'){
} else {
/**
 * Receives the `route-params` and returns either the `params` for the controller or `nil`
 */
keechma.controller.params = (function (){var method_table__9971__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9972__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9973__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9974__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9975__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","params"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9975__auto__,method_table__9971__auto__,prefer_table__9972__auto__,method_cache__9973__auto__,cached_hierarchy__9974__auto__));
})();
}
if(typeof keechma.controller.start !== 'undefined'){
} else {
/**
 * Called when the controller is started. Receives the controller `params` (returned by the
 *   `params` function) and the application state. It must return the application state.
 */
keechma.controller.start = (function (){var method_table__9971__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9972__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9973__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9974__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9975__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","start"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9975__auto__,method_table__9971__auto__,prefer_table__9972__auto__,method_cache__9973__auto__,cached_hierarchy__9974__auto__));
})();
}
if(typeof keechma.controller.wake !== 'undefined'){
} else {
/**
 * Called when the controller is started from the saved state stored on the server. It will be
 * called instead of the `start` function if the `ssr-handler` function is implemented. This
 * allows you to manually revive the serialized data if needed. Usually this function is not
 * needed, but if you for instance start the inner application from the controller, you can
 * use this function to wake the inner app.
 */
keechma.controller.wake = (function (){var method_table__9971__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9972__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9973__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9974__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9975__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","wake"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9975__auto__,method_table__9971__auto__,prefer_table__9972__auto__,method_cache__9973__auto__,cached_hierarchy__9974__auto__));
})();
}
if(typeof keechma.controller.stop !== 'undefined'){
} else {
/**
 * Called when the controller is stopped. Receives the controller `params` (returned by the
 *   `params` function) and the application state. It must return the application state.
 */
keechma.controller.stop = (function (){var method_table__9971__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9972__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9973__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9974__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9975__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","stop"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9975__auto__,method_table__9971__auto__,prefer_table__9972__auto__,method_cache__9973__auto__,cached_hierarchy__9974__auto__));
})();
}
if(typeof keechma.controller.handler !== 'undefined'){
} else {
/**
 * Called after the `start` function. You can listen to the commands on the `in-chan` 
 *   inside the `go` block. This is the function in which you implement anything that reacts
 *   to the user commands (coming from the UI).
 */
keechma.controller.handler = (function (){var method_table__9971__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9972__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9973__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9974__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9975__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","handler"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9975__auto__,method_table__9971__auto__,prefer_table__9972__auto__,method_cache__9973__auto__,cached_hierarchy__9974__auto__));
})();
}
if(typeof keechma.controller.ssr_handler !== 'undefined'){
} else {
/**
 * Called in after the `start` (instead of the `handler` function) function in the server
 *   side context. This function should call the `done` callback when it has completed the 
 *   server side data loading. Returning `::not-implemented` which is a default behavior will
 *   mark the controller as non server side.
 */
keechma.controller.ssr_handler = (function (){var method_table__9971__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9972__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9973__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9974__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9975__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","ssr-handler"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9975__auto__,method_table__9971__auto__,prefer_table__9972__auto__,method_cache__9973__auto__,cached_hierarchy__9974__auto__));
})();
}
if(typeof keechma.controller.context !== 'undefined'){
} else {
/**
 * Return the context passed to the application.
 */
keechma.controller.context = (function (){var method_table__9971__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9972__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9973__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9974__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9975__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","context"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9975__auto__,method_table__9971__auto__,prefer_table__9972__auto__,method_cache__9973__auto__,cached_hierarchy__9974__auto__));
})();
}
if(typeof keechma.controller.report !== 'undefined'){
} else {
keechma.controller.report = (function (){var method_table__9971__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9972__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9973__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9974__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9975__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","report"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9975__auto__,method_table__9971__auto__,prefer_table__9972__auto__,method_cache__9973__auto__,cached_hierarchy__9974__auto__));
})();
}
if(typeof keechma.controller.execute !== 'undefined'){
} else {
/**
 * Puts the command on the controller's `in-chan` which is passed as an argument to the 
 *   `handler` function. Can be called from the `start` and `stop` functions.
 */
keechma.controller.execute = (function (){var method_table__9971__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9972__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9973__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9974__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9975__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","execute"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9975__auto__,method_table__9971__auto__,prefer_table__9972__auto__,method_cache__9973__auto__,cached_hierarchy__9974__auto__));
})();
}
if(typeof keechma.controller.send_command !== 'undefined'){
} else {
/**
 * Sends a command to another controller
 */
keechma.controller.send_command = (function (){var method_table__9971__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9972__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9973__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9974__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9975__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","send-command"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9975__auto__,method_table__9971__auto__,prefer_table__9972__auto__,method_cache__9973__auto__,cached_hierarchy__9974__auto__));
})();
}
if(typeof keechma.controller.is_running_QMARK_ !== 'undefined'){
} else {
/**
 * Returns `true` if this controller is still running. You can use this if you have some
 *   kind of async action, and you want to make sure that the controller is still running 
 *   when you receive the results.
 */
keechma.controller.is_running_QMARK_ = (function (){var method_table__9971__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9972__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9973__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9974__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9975__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","is-running?"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9975__auto__,method_table__9971__auto__,prefer_table__9972__auto__,method_cache__9973__auto__,cached_hierarchy__9974__auto__));
})();
}
if(typeof keechma.controller.redirect !== 'undefined'){
} else {
/**
 * Redirects the page to the URL based on the params.
 */
keechma.controller.redirect = (function (){var method_table__9971__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9972__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9973__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9974__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9975__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"keechma.controller","redirect"),keechma.controller.record_type,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__9975__auto__,method_table__9971__auto__,prefer_table__9972__auto__,method_cache__9973__auto__,cached_hierarchy__9974__auto__));
})();
}
cljs.core._add_method.call(null,keechma.controller.params,new cljs.core.Keyword(null,"default","default",-1987822328),(function (controller,route_params){
return route_params;
}));
cljs.core._add_method.call(null,keechma.controller.start,new cljs.core.Keyword(null,"default","default",-1987822328),(function (controller,params,app_db){
return app_db;
}));
cljs.core._add_method.call(null,keechma.controller.wake,new cljs.core.Keyword(null,"default","default",-1987822328),(function (controller,params,app_db){
return app_db;
}));
cljs.core._add_method.call(null,keechma.controller.stop,new cljs.core.Keyword(null,"default","default",-1987822328),(function (controller,params,app_db){
return app_db;
}));
cljs.core._add_method.call(null,keechma.controller.handler,new cljs.core.Keyword(null,"default","default",-1987822328),(function (controller,app_db_atom,in_chan,out_chan){
return null;
}));
cljs.core._add_method.call(null,keechma.controller.ssr_handler,new cljs.core.Keyword(null,"default","default",-1987822328),(function (controller,app_db_atom,done,in_chan,out_chan){
return keechma.controller.not_implemented;
}));
cljs.core._add_method.call(null,keechma.controller.context,new cljs.core.Keyword(null,"default","default",-1987822328),(function() {
var G__24961 = null;
var G__24961__1 = (function (controller){
return new cljs.core.Keyword(null,"context","context",-830191113).cljs$core$IFn$_invoke$arity$1(controller);
});
var G__24961__2 = (function (controller,key){
var key_vec = ((cljs.core.vector_QMARK_.call(null,key))?key:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null));
return cljs.core.get_in.call(null,controller,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"context","context",-830191113)], null),key_vec));
});
G__24961 = function(controller,key){
switch(arguments.length){
case 1:
return G__24961__1.call(this,controller);
case 2:
return G__24961__2.call(this,controller,key);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__24961.cljs$core$IFn$_invoke$arity$1 = G__24961__1;
G__24961.cljs$core$IFn$_invoke$arity$2 = G__24961__2;
return G__24961;
})()
);
cljs.core._add_method.call(null,keechma.controller.report,new cljs.core.Keyword(null,"default","default",-1987822328),(function() {
var G__24962 = null;
var G__24962__4 = (function (controller,direction,name,payload){
return keechma.controller.report.call(null,controller,direction,name,payload,keechma.reporter.cmd_info.call(null),new cljs.core.Keyword(null,"info","info",-317069002));
});
var G__24962__5 = (function (controller,direction,name,payload,cmd_info){
return keechma.controller.report.call(null,controller,direction,name,payload,cmd_info,new cljs.core.Keyword(null,"info","info",-317069002));
});
var G__24962__6 = (function (controller,direction,name,payload,cmd_info,severity){
var reporter = (function (){var or__8916__auto__ = new cljs.core.Keyword(null,"reporter","reporter",-805360621).cljs$core$IFn$_invoke$arity$1(controller);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return ((function (or__8916__auto__){
return (function (_,___$1,___$2,___$3,___$4,___$5,___$6,___$7){
return null;
});
;})(or__8916__auto__))
}
})();
var topic = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(controller);
return reporter.call(null,new cljs.core.Keyword(null,"controller","controller",2013778659),direction,topic,name,payload,cmd_info,severity);
});
G__24962 = function(controller,direction,name,payload,cmd_info,severity){
switch(arguments.length){
case 4:
return G__24962__4.call(this,controller,direction,name,payload);
case 5:
return G__24962__5.call(this,controller,direction,name,payload,cmd_info);
case 6:
return G__24962__6.call(this,controller,direction,name,payload,cmd_info,severity);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__24962.cljs$core$IFn$_invoke$arity$4 = G__24962__4;
G__24962.cljs$core$IFn$_invoke$arity$5 = G__24962__5;
G__24962.cljs$core$IFn$_invoke$arity$6 = G__24962__6;
return G__24962;
})()
);
cljs.core._add_method.call(null,keechma.controller.execute,new cljs.core.Keyword(null,"default","default",-1987822328),(function() {
var G__24963 = null;
var G__24963__2 = (function (controller,command_name){
return keechma.controller.execute.call(null,controller,command_name,null);
});
var G__24963__3 = (function (controller,command_name,args){
var cmd_info = keechma.reporter.cmd_info.call(null);
keechma.controller.report.call(null,controller,new cljs.core.Keyword(null,"in","in",-1531184865),command_name,args,cmd_info);

return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"in-chan","in-chan",1839083771).cljs$core$IFn$_invoke$arity$1(controller),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [command_name,args,cmd_info], null));
});
G__24963 = function(controller,command_name,args){
switch(arguments.length){
case 2:
return G__24963__2.call(this,controller,command_name);
case 3:
return G__24963__3.call(this,controller,command_name,args);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__24963.cljs$core$IFn$_invoke$arity$2 = G__24963__2;
G__24963.cljs$core$IFn$_invoke$arity$3 = G__24963__3;
return G__24963;
})()
);
cljs.core._add_method.call(null,keechma.controller.send_command,new cljs.core.Keyword(null,"default","default",-1987822328),(function() {
var G__24964 = null;
var G__24964__2 = (function (controller,command_name){
return keechma.controller.send_command.call(null,controller,command_name,null,null);
});
var G__24964__3 = (function (controller,command_name,args){
return keechma.controller.send_command.call(null,controller,command_name,args,null);
});
var G__24964__4 = (function (controller,command_name,args,origin){
var out_chan = new cljs.core.Keyword(null,"out-chan","out-chan",384315017).cljs$core$IFn$_invoke$arity$1(controller);
var cmd_info = keechma.reporter.cmd_info.call(null);
keechma.controller.report.call(null,controller,new cljs.core.Keyword(null,"out","out",-910545517),command_name,args,cmd_info);

cljs.core.async.put_BANG_.call(null,out_chan,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [command_name,args,cmd_info], null));

return controller;
});
G__24964 = function(controller,command_name,args,origin){
switch(arguments.length){
case 2:
return G__24964__2.call(this,controller,command_name);
case 3:
return G__24964__3.call(this,controller,command_name,args);
case 4:
return G__24964__4.call(this,controller,command_name,args,origin);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__24964.cljs$core$IFn$_invoke$arity$2 = G__24964__2;
G__24964.cljs$core$IFn$_invoke$arity$3 = G__24964__3;
G__24964.cljs$core$IFn$_invoke$arity$4 = G__24964__4;
return G__24964;
})()
);
cljs.core._add_method.call(null,keechma.controller.is_running_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),(function (controller){
return cljs.core._EQ_.call(null,controller,new cljs.core.Keyword(null,"running","running",1554969103).cljs$core$IFn$_invoke$arity$1(controller).call(null));
}));
cljs.core._add_method.call(null,keechma.controller.redirect,new cljs.core.Keyword(null,"default","default",-1987822328),(function (controller,params){
return new cljs.core.Keyword(null,"redirect-fn","redirect-fn",281458973).cljs$core$IFn$_invoke$arity$1(controller).call(null,params);
}));
