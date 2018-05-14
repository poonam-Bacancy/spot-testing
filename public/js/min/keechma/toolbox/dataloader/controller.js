// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('keechma.toolbox.dataloader.controller');
goog.require('cljs.core');
goog.require('keechma.controller');
goog.require('cljs.core.async');
goog.require('keechma.toolbox.dataloader.core');
goog.require('keechma.toolbox.pipeline.core');
goog.require('promesa.core');
keechma.toolbox.dataloader.controller.chan__GT_promise = (function keechma$toolbox$dataloader$controller$chan__GT_promise(wait_chan,value){
return promesa.core.promise.call(null,(function (resolve,reject){
var c__17808__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17808__auto__){
return (function (){
var f__17809__auto__ = (function (){var switch__17718__auto__ = ((function (c__17808__auto__){
return (function (state_28509){
var state_val_28510 = (state_28509[(1)]);
if((state_val_28510 === (1))){
var state_28509__$1 = state_28509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28509__$1,(2),wait_chan);
} else {
if((state_val_28510 === (2))){
var inst_28506 = (state_28509[(2)]);
var inst_28507 = resolve.call(null);
var state_28509__$1 = (function (){var statearr_28511 = state_28509;
(statearr_28511[(7)] = inst_28506);

return statearr_28511;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28509__$1,inst_28507);
} else {
return null;
}
}
});})(c__17808__auto__))
;
return ((function (switch__17718__auto__,c__17808__auto__){
return (function() {
var keechma$toolbox$dataloader$controller$chan__GT_promise_$_state_machine__17719__auto__ = null;
var keechma$toolbox$dataloader$controller$chan__GT_promise_$_state_machine__17719__auto____0 = (function (){
var statearr_28512 = [null,null,null,null,null,null,null,null];
(statearr_28512[(0)] = keechma$toolbox$dataloader$controller$chan__GT_promise_$_state_machine__17719__auto__);

(statearr_28512[(1)] = (1));

return statearr_28512;
});
var keechma$toolbox$dataloader$controller$chan__GT_promise_$_state_machine__17719__auto____1 = (function (state_28509){
while(true){
var ret_value__17720__auto__ = (function (){try{while(true){
var result__17721__auto__ = switch__17718__auto__.call(null,state_28509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17721__auto__;
}
break;
}
}catch (e28513){if((e28513 instanceof Object)){
var ex__17722__auto__ = e28513;
var statearr_28514_28516 = state_28509;
(statearr_28514_28516[(5)] = ex__17722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28517 = state_28509;
state_28509 = G__28517;
continue;
} else {
return ret_value__17720__auto__;
}
break;
}
});
keechma$toolbox$dataloader$controller$chan__GT_promise_$_state_machine__17719__auto__ = function(state_28509){
switch(arguments.length){
case 0:
return keechma$toolbox$dataloader$controller$chan__GT_promise_$_state_machine__17719__auto____0.call(this);
case 1:
return keechma$toolbox$dataloader$controller$chan__GT_promise_$_state_machine__17719__auto____1.call(this,state_28509);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
keechma$toolbox$dataloader$controller$chan__GT_promise_$_state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$toolbox$dataloader$controller$chan__GT_promise_$_state_machine__17719__auto____0;
keechma$toolbox$dataloader$controller$chan__GT_promise_$_state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$toolbox$dataloader$controller$chan__GT_promise_$_state_machine__17719__auto____1;
return keechma$toolbox$dataloader$controller$chan__GT_promise_$_state_machine__17719__auto__;
})()
;})(switch__17718__auto__,c__17808__auto__))
})();
var state__17810__auto__ = (function (){var statearr_28515 = f__17809__auto__.call(null);
(statearr_28515[(6)] = c__17808__auto__);

return statearr_28515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17810__auto__);
});})(c__17808__auto__))
);

return c__17808__auto__;
}));
});
keechma.toolbox.dataloader.controller.wait_dataloader_pipeline_BANG_ = (function keechma$toolbox$dataloader$controller$wait_dataloader_pipeline_BANG_(){
var wait_chan = cljs.core.async.chan.call(null);
return keechma.toolbox.pipeline.core.make_pipeline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (wait_chan){
return (function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/send-command! [dataloader/id-key :waits] wait-chan)",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.send_command_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.toolbox.dataloader.core.id_key,new cljs.core.Keyword(null,"waits","waits",-716278748)], null),wait_chan)], null);
});})(wait_chan))
,((function (wait_chan){
return (function (value,app_db,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(chan->promise wait-chan value)",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.dataloader.controller.chan__GT_promise.call(null,wait_chan,value)], null);
});})(wait_chan))
], null)], null));
});
keechma.toolbox.dataloader.controller.run_dataloader_BANG_ = (function keechma$toolbox$dataloader$controller$run_dataloader_BANG_(){
return keechma.toolbox.pipeline.core.send_command_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.toolbox.dataloader.core.id_key,new cljs.core.Keyword(null,"load-data","load-data",-1806350928)], null),null);
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
keechma.toolbox.dataloader.controller.Controller = (function (dataloader,__meta,__extmap,__hash){
this.dataloader = dataloader;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9604__auto__,k__9605__auto__){
var self__ = this;
var this__9604__auto____$1 = this;
return this__9604__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9605__auto__,null);
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9606__auto__,k28519,else__9607__auto__){
var self__ = this;
var this__9606__auto____$1 = this;
var G__28523 = k28519;
var G__28523__$1 = (((G__28523 instanceof cljs.core.Keyword))?G__28523.fqn:null);
switch (G__28523__$1) {
case "dataloader":
return self__.dataloader;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k28519,else__9607__auto__);

}
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9618__auto__,writer__9619__auto__,opts__9620__auto__){
var self__ = this;
var this__9618__auto____$1 = this;
var pr_pair__9621__auto__ = ((function (this__9618__auto____$1){
return (function (keyval__9622__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,cljs.core.pr_writer,""," ","",opts__9620__auto__,keyval__9622__auto__);
});})(this__9618__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,pr_pair__9621__auto__,"#keechma.toolbox.dataloader.controller.Controller{",", ","}",opts__9620__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dataloader","dataloader",1084918675),self__.dataloader],null))], null),self__.__extmap));
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28518){
var self__ = this;
var G__28518__$1 = this;
return (new cljs.core.RecordIter((0),G__28518__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dataloader","dataloader",1084918675)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9602__auto__){
var self__ = this;
var this__9602__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9599__auto__){
var self__ = this;
var this__9599__auto____$1 = this;
return (new keechma.toolbox.dataloader.controller.Controller(self__.dataloader,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9608__auto__){
var self__ = this;
var this__9608__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9600__auto__){
var self__ = this;
var this__9600__auto____$1 = this;
var h__9372__auto__ = self__.__hash;
if(!((h__9372__auto__ == null))){
return h__9372__auto__;
} else {
var h__9372__auto____$1 = ((function (h__9372__auto__,this__9600__auto____$1){
return (function (coll__9601__auto__){
return (1993883316 ^ cljs.core.hash_unordered_coll.call(null,coll__9601__auto__));
});})(h__9372__auto__,this__9600__auto____$1))
.call(null,this__9600__auto____$1);
self__.__hash = h__9372__auto____$1;

return h__9372__auto____$1;
}
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28520,other28521){
var self__ = this;
var this28520__$1 = this;
return (!((other28521 == null))) && ((this28520__$1.constructor === other28521.constructor)) && (cljs.core._EQ_.call(null,this28520__$1.dataloader,other28521.dataloader)) && (cljs.core._EQ_.call(null,this28520__$1.__extmap,other28521.__extmap));
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9613__auto__,k__9614__auto__){
var self__ = this;
var this__9613__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dataloader","dataloader",1084918675),null], null), null),k__9614__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9613__auto____$1),self__.__meta),k__9614__auto__);
} else {
return (new keechma.toolbox.dataloader.controller.Controller(self__.dataloader,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9614__auto__)),null));
}
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9611__auto__,k__9612__auto__,G__28518){
var self__ = this;
var this__9611__auto____$1 = this;
var pred__28524 = cljs.core.keyword_identical_QMARK_;
var expr__28525 = k__9612__auto__;
if(cljs.core.truth_(pred__28524.call(null,new cljs.core.Keyword(null,"dataloader","dataloader",1084918675),expr__28525))){
return (new keechma.toolbox.dataloader.controller.Controller(G__28518,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.dataloader.controller.Controller(self__.dataloader,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9612__auto__,G__28518),null));
}
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9616__auto__){
var self__ = this;
var this__9616__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dataloader","dataloader",1084918675),self__.dataloader],null))], null),self__.__extmap));
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9603__auto__,G__28518){
var self__ = this;
var this__9603__auto____$1 = this;
return (new keechma.toolbox.dataloader.controller.Controller(self__.dataloader,G__28518,self__.__extmap,self__.__hash));
});

keechma.toolbox.dataloader.controller.Controller.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9609__auto__,entry__9610__auto__){
var self__ = this;
var this__9609__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9610__auto__)){
return this__9609__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9610__auto__,(0)),cljs.core._nth.call(null,entry__9610__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9609__auto____$1,entry__9610__auto__);
}
});

keechma.toolbox.dataloader.controller.Controller.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dataloader","dataloader",-1569517094,null)], null);
});

keechma.toolbox.dataloader.controller.Controller.cljs$lang$type = true;

keechma.toolbox.dataloader.controller.Controller.cljs$lang$ctorPrSeq = (function (this__9642__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"keechma.toolbox.dataloader.controller/Controller");
});

keechma.toolbox.dataloader.controller.Controller.cljs$lang$ctorPrWriter = (function (this__9642__auto__,writer__9643__auto__){
return cljs.core._write.call(null,writer__9643__auto__,"keechma.toolbox.dataloader.controller/Controller");
});

keechma.toolbox.dataloader.controller.__GT_Controller = (function keechma$toolbox$dataloader$controller$__GT_Controller(dataloader){
return (new keechma.toolbox.dataloader.controller.Controller(dataloader,null,null,null));
});

keechma.toolbox.dataloader.controller.map__GT_Controller = (function keechma$toolbox$dataloader$controller$map__GT_Controller(G__28522){
return (new keechma.toolbox.dataloader.controller.Controller(new cljs.core.Keyword(null,"dataloader","dataloader",1084918675).cljs$core$IFn$_invoke$arity$1(G__28522),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__28522,new cljs.core.Keyword(null,"dataloader","dataloader",1084918675))),null));
});

cljs.core._add_method.call(null,keechma.controller.params,keechma.toolbox.dataloader.controller.Controller,(function (this$,route_params){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route_params);
}));
cljs.core._add_method.call(null,keechma.controller.start,keechma.toolbox.dataloader.controller.Controller,(function (this$,route_params,app_db){
keechma.controller.execute.call(null,this$,new cljs.core.Keyword(null,"load-data","load-data",-1806350928));

return app_db;
}));
cljs.core._add_method.call(null,keechma.controller.handler,keechma.toolbox.dataloader.controller.Controller,(function (this$,app_db_atom,in_chan,out_chan){
var c__17808__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17808__auto__){
return (function (){
var f__17809__auto__ = (function (){var switch__17718__auto__ = ((function (c__17808__auto__){
return (function (state_28602){
var state_val_28603 = (state_28602[(1)]);
if((state_val_28603 === (7))){
var inst_28598 = (state_28602[(2)]);
var state_28602__$1 = state_28602;
var statearr_28604_28653 = state_28602__$1;
(statearr_28604_28653[(2)] = inst_28598);

(statearr_28604_28653[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (20))){
var inst_28564 = (state_28602[(7)]);
var inst_28573 = cljs.core.first.call(null,inst_28564);
var inst_28574 = cljs.core.async.close_BANG_.call(null,inst_28573);
var inst_28575 = cljs.core.next.call(null,inst_28564);
var inst_28551 = inst_28575;
var inst_28552 = null;
var inst_28553 = (0);
var inst_28554 = (0);
var state_28602__$1 = (function (){var statearr_28605 = state_28602;
(statearr_28605[(8)] = inst_28554);

(statearr_28605[(9)] = inst_28552);

(statearr_28605[(10)] = inst_28574);

(statearr_28605[(11)] = inst_28551);

(statearr_28605[(12)] = inst_28553);

return statearr_28605;
})();
var statearr_28606_28654 = state_28602__$1;
(statearr_28606_28654[(2)] = null);

(statearr_28606_28654[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (1))){
var inst_28528 = cljs.core.PersistentVector.EMPTY;
var inst_28529 = inst_28528;
var state_28602__$1 = (function (){var statearr_28607 = state_28602;
(statearr_28607[(13)] = inst_28529);

return statearr_28607;
})();
var statearr_28608_28655 = state_28602__$1;
(statearr_28608_28655[(2)] = null);

(statearr_28608_28655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (4))){
var inst_28535 = (state_28602[(14)]);
var inst_28536 = (state_28602[(15)]);
var inst_28535__$1 = (state_28602[(2)]);
var inst_28536__$1 = cljs.core.nth.call(null,inst_28535__$1,(0),null);
var inst_28537 = cljs.core.nth.call(null,inst_28535__$1,(1),null);
var state_28602__$1 = (function (){var statearr_28609 = state_28602;
(statearr_28609[(14)] = inst_28535__$1);

(statearr_28609[(16)] = inst_28537);

(statearr_28609[(15)] = inst_28536__$1);

return statearr_28609;
})();
if(cljs.core.truth_(inst_28536__$1)){
var statearr_28610_28656 = state_28602__$1;
(statearr_28610_28656[(1)] = (5));

} else {
var statearr_28611_28657 = state_28602__$1;
(statearr_28611_28657[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (15))){
var inst_28583 = (state_28602[(2)]);
var state_28602__$1 = state_28602;
var statearr_28615_28658 = state_28602__$1;
(statearr_28615_28658[(2)] = inst_28583);

(statearr_28615_28658[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (21))){
var inst_28578 = (state_28602[(2)]);
var state_28602__$1 = state_28602;
var statearr_28616_28659 = state_28602__$1;
(statearr_28616_28659[(2)] = inst_28578);

(statearr_28616_28659[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (13))){
var inst_28554 = (state_28602[(8)]);
var inst_28552 = (state_28602[(9)]);
var inst_28551 = (state_28602[(11)]);
var inst_28553 = (state_28602[(12)]);
var inst_28559 = cljs.core._nth.call(null,inst_28552,inst_28554);
var inst_28560 = cljs.core.async.close_BANG_.call(null,inst_28559);
var inst_28561 = (inst_28554 + (1));
var tmp28612 = inst_28552;
var tmp28613 = inst_28551;
var tmp28614 = inst_28553;
var inst_28551__$1 = tmp28613;
var inst_28552__$1 = tmp28612;
var inst_28553__$1 = tmp28614;
var inst_28554__$1 = inst_28561;
var state_28602__$1 = (function (){var statearr_28617 = state_28602;
(statearr_28617[(8)] = inst_28554__$1);

(statearr_28617[(9)] = inst_28552__$1);

(statearr_28617[(17)] = inst_28560);

(statearr_28617[(11)] = inst_28551__$1);

(statearr_28617[(12)] = inst_28553__$1);

return statearr_28617;
})();
var statearr_28618_28660 = state_28602__$1;
(statearr_28618_28660[(2)] = null);

(statearr_28618_28660[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (22))){
var inst_28529 = (state_28602[(13)]);
var inst_28537 = (state_28602[(16)]);
var inst_28589 = cljs.core.conj.call(null,inst_28529,inst_28537);
var inst_28529__$1 = inst_28589;
var state_28602__$1 = (function (){var statearr_28619 = state_28602;
(statearr_28619[(13)] = inst_28529__$1);

return statearr_28619;
})();
var statearr_28620_28661 = state_28602__$1;
(statearr_28620_28661[(2)] = null);

(statearr_28620_28661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (6))){
var state_28602__$1 = state_28602;
var statearr_28621_28662 = state_28602__$1;
(statearr_28621_28662[(2)] = null);

(statearr_28621_28662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (17))){
var state_28602__$1 = state_28602;
var statearr_28622_28663 = state_28602__$1;
(statearr_28622_28663[(2)] = null);

(statearr_28622_28663[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (3))){
var inst_28600 = (state_28602[(2)]);
var state_28602__$1 = state_28602;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28602__$1,inst_28600);
} else {
if((state_val_28603 === (12))){
var inst_28585 = (state_28602[(2)]);
var inst_28586 = cljs.core.PersistentVector.EMPTY;
var inst_28529 = inst_28586;
var state_28602__$1 = (function (){var statearr_28624 = state_28602;
(statearr_28624[(13)] = inst_28529);

(statearr_28624[(18)] = inst_28585);

return statearr_28624;
})();
var statearr_28625_28664 = state_28602__$1;
(statearr_28625_28664[(2)] = null);

(statearr_28625_28664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (2))){
var state_28602__$1 = state_28602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28602__$1,(4),in_chan);
} else {
if((state_val_28603 === (23))){
var inst_28529 = (state_28602[(13)]);
var tmp28623 = inst_28529;
var inst_28529__$1 = tmp28623;
var state_28602__$1 = (function (){var statearr_28626 = state_28602;
(statearr_28626[(13)] = inst_28529__$1);

return statearr_28626;
})();
var statearr_28627_28665 = state_28602__$1;
(statearr_28627_28665[(2)] = null);

(statearr_28627_28665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (19))){
var inst_28564 = (state_28602[(7)]);
var inst_28568 = cljs.core.chunk_first.call(null,inst_28564);
var inst_28569 = cljs.core.chunk_rest.call(null,inst_28564);
var inst_28570 = cljs.core.count.call(null,inst_28568);
var inst_28551 = inst_28569;
var inst_28552 = inst_28568;
var inst_28553 = inst_28570;
var inst_28554 = (0);
var state_28602__$1 = (function (){var statearr_28629 = state_28602;
(statearr_28629[(8)] = inst_28554);

(statearr_28629[(9)] = inst_28552);

(statearr_28629[(11)] = inst_28551);

(statearr_28629[(12)] = inst_28553);

return statearr_28629;
})();
var statearr_28630_28666 = state_28602__$1;
(statearr_28630_28666[(2)] = null);

(statearr_28630_28666[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (11))){
var inst_28554 = (state_28602[(8)]);
var inst_28553 = (state_28602[(12)]);
var inst_28556 = (inst_28554 < inst_28553);
var inst_28557 = inst_28556;
var state_28602__$1 = state_28602;
if(cljs.core.truth_(inst_28557)){
var statearr_28631_28667 = state_28602__$1;
(statearr_28631_28667[(1)] = (13));

} else {
var statearr_28632_28668 = state_28602__$1;
(statearr_28632_28668[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (9))){
var inst_28529 = (state_28602[(13)]);
var inst_28535 = (state_28602[(14)]);
var inst_28537 = (state_28602[(16)]);
var inst_28536 = (state_28602[(15)]);
var inst_28539 = (function (){var waits = inst_28529;
var vec__28531 = inst_28535;
var command = inst_28536;
var args = inst_28537;
return ((function (waits,vec__28531,command,args,inst_28529,inst_28535,inst_28537,inst_28536,state_val_28603,c__17808__auto__){
return (function (){
return keechma.controller.execute.call(null,this$,new cljs.core.Keyword(null,"loaded-data","loaded-data",-1515086713));
});
;})(waits,vec__28531,command,args,inst_28529,inst_28535,inst_28537,inst_28536,state_val_28603,c__17808__auto__))
})();
var inst_28540 = new cljs.core.Keyword(null,"dataloader","dataloader",1084918675).cljs$core$IFn$_invoke$arity$1(this$);
var inst_28541 = keechma.controller.context.call(null,this$);
var inst_28542 = inst_28540.call(null,app_db_atom,inst_28541);
var inst_28543 = promesa.core.map.call(null,inst_28539,inst_28542);
var tmp28628 = inst_28529;
var inst_28529__$1 = tmp28628;
var state_28602__$1 = (function (){var statearr_28633 = state_28602;
(statearr_28633[(13)] = inst_28529__$1);

(statearr_28633[(19)] = inst_28543);

return statearr_28633;
})();
var statearr_28634_28669 = state_28602__$1;
(statearr_28634_28669[(2)] = null);

(statearr_28634_28669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (5))){
var inst_28536 = (state_28602[(15)]);
var state_28602__$1 = state_28602;
var G__28635_28670 = inst_28536;
var G__28635_28671__$1 = (((G__28635_28670 instanceof cljs.core.Keyword))?G__28635_28670.fqn:null);
switch (G__28635_28671__$1) {
case "load-data":
var statearr_28636_28673 = state_28602__$1;
(statearr_28636_28673[(1)] = (9));


break;
case "loaded-data":
var statearr_28637_28674 = state_28602__$1;
(statearr_28637_28674[(1)] = (10));


break;
case "waits":
var statearr_28638_28675 = state_28602__$1;
(statearr_28638_28675[(1)] = (22));


break;
default:
var statearr_28639_28676 = state_28602__$1;
(statearr_28639_28676[(1)] = (23));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (14))){
var inst_28564 = (state_28602[(7)]);
var inst_28551 = (state_28602[(11)]);
var inst_28564__$1 = cljs.core.seq.call(null,inst_28551);
var state_28602__$1 = (function (){var statearr_28640 = state_28602;
(statearr_28640[(7)] = inst_28564__$1);

return statearr_28640;
})();
if(inst_28564__$1){
var statearr_28641_28677 = state_28602__$1;
(statearr_28641_28677[(1)] = (16));

} else {
var statearr_28642_28678 = state_28602__$1;
(statearr_28642_28678[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (16))){
var inst_28564 = (state_28602[(7)]);
var inst_28566 = cljs.core.chunked_seq_QMARK_.call(null,inst_28564);
var state_28602__$1 = state_28602;
if(inst_28566){
var statearr_28643_28679 = state_28602__$1;
(statearr_28643_28679[(1)] = (19));

} else {
var statearr_28644_28680 = state_28602__$1;
(statearr_28644_28680[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (10))){
var inst_28529 = (state_28602[(13)]);
var inst_28550 = cljs.core.seq.call(null,inst_28529);
var inst_28551 = inst_28550;
var inst_28552 = null;
var inst_28553 = (0);
var inst_28554 = (0);
var state_28602__$1 = (function (){var statearr_28645 = state_28602;
(statearr_28645[(8)] = inst_28554);

(statearr_28645[(9)] = inst_28552);

(statearr_28645[(11)] = inst_28551);

(statearr_28645[(12)] = inst_28553);

return statearr_28645;
})();
var statearr_28646_28681 = state_28602__$1;
(statearr_28646_28681[(2)] = null);

(statearr_28646_28681[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (18))){
var inst_28581 = (state_28602[(2)]);
var state_28602__$1 = state_28602;
var statearr_28647_28682 = state_28602__$1;
(statearr_28647_28682[(2)] = inst_28581);

(statearr_28647_28682[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28603 === (8))){
var inst_28595 = (state_28602[(2)]);
var state_28602__$1 = state_28602;
var statearr_28648_28683 = state_28602__$1;
(statearr_28648_28683[(2)] = inst_28595);

(statearr_28648_28683[(1)] = (7));


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
}
}
}
});})(c__17808__auto__))
;
return ((function (switch__17718__auto__,c__17808__auto__){
return (function() {
var keechma$toolbox$dataloader$controller$state_machine__17719__auto__ = null;
var keechma$toolbox$dataloader$controller$state_machine__17719__auto____0 = (function (){
var statearr_28649 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28649[(0)] = keechma$toolbox$dataloader$controller$state_machine__17719__auto__);

(statearr_28649[(1)] = (1));

return statearr_28649;
});
var keechma$toolbox$dataloader$controller$state_machine__17719__auto____1 = (function (state_28602){
while(true){
var ret_value__17720__auto__ = (function (){try{while(true){
var result__17721__auto__ = switch__17718__auto__.call(null,state_28602);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17721__auto__;
}
break;
}
}catch (e28650){if((e28650 instanceof Object)){
var ex__17722__auto__ = e28650;
var statearr_28651_28684 = state_28602;
(statearr_28651_28684[(5)] = ex__17722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28685 = state_28602;
state_28602 = G__28685;
continue;
} else {
return ret_value__17720__auto__;
}
break;
}
});
keechma$toolbox$dataloader$controller$state_machine__17719__auto__ = function(state_28602){
switch(arguments.length){
case 0:
return keechma$toolbox$dataloader$controller$state_machine__17719__auto____0.call(this);
case 1:
return keechma$toolbox$dataloader$controller$state_machine__17719__auto____1.call(this,state_28602);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
keechma$toolbox$dataloader$controller$state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$toolbox$dataloader$controller$state_machine__17719__auto____0;
keechma$toolbox$dataloader$controller$state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$toolbox$dataloader$controller$state_machine__17719__auto____1;
return keechma$toolbox$dataloader$controller$state_machine__17719__auto__;
})()
;})(switch__17718__auto__,c__17808__auto__))
})();
var state__17810__auto__ = (function (){var statearr_28652 = f__17809__auto__.call(null);
(statearr_28652[(6)] = c__17808__auto__);

return statearr_28652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17810__auto__);
});})(c__17808__auto__))
);

return c__17808__auto__;
}));
/**
 * Dataloader controller constructor
 */
keechma.toolbox.dataloader.controller.constructor$ = (function keechma$toolbox$dataloader$controller$constructor(datasources,edb_schema){
return keechma.toolbox.dataloader.controller.__GT_Controller.call(null,keechma.toolbox.dataloader.core.make_dataloader.call(null,datasources,edb_schema));
});
/**
 * 
 * 
 * Registers dataloader controller to the controller map
 * 
 * ```clojure
 *  (def app
 *   {:controllers (-> {}
 *                  (keechma.toolbox.dataloader.controller/register datasources-map edb-schema))})
 * ```
 * 
 *   `keechma.toolbox.dataloader.controller/register` function expects three arguments:
 * 
 * - controller map
 * - datasources map
 * - EDB schema
 * 
 * It returns a new version of the controller map with the dataloader controller registered.
 * 
 * **Datasources**
 * 
 * Datasource is an abstraction of any data that is loaded from the "outside" world. It can be an API endpoint, local storage value or any other data that is not present in the application state.
 * 
 * Dataloader allows you to declaratively list your datasources. It then determines when and how the datasources should be loaded. Datasources can be defined as a graph, where datasources can depend on other datasources. This removes any need to manually load data in the correct order. When datasources params or depenedencies change, dataloader will invalidate that datasource and reload it.
 * 
 * Dataloader checks it's datasources on each route change. If the datasource `params` function returns a result different from the previous result, this datasource (and any datasources that depend on it) will be reloaded.
 * 
 * Dataloader can be manually triggered by sending the `:load-data` command to the dataloader controller.
 * 
 * **Example**
 * 
 * ```clojure
 * 
 * (defn promised-datasource
 *  ([] (promised-datasource nil))
 *  ([data]
 *   (fn [params]
 *  (map (fn [loader-params]
 *         (p/promise (fn [resolve reject]
 *                      (let [value (or data (:params loader-params))]
 *                        (js/setTimeout #(resolve value) 1)))))
 *       params))))
 * 
 * (def simple-promised-datasource (promised-datasource))
 * 
 * (def simple-datasources
 *  {:jwt
 *   {:target [:kv :jwt]
 * :loader (promised-datasource)
 * :processor (fn [value datasource]
 *              (str value "!"))
 * :params (fn [prev route _]
 *           (or (:jwt route) "JWT"))}
 * 
 *   :current-user
 *   {:target [:kv :user :current]
 * :deps   [:jwt]
 * :loader simple-promised-datasource
 * :params (fn [prev route {:keys [jwt]}]
 *           {:jwt jwt
 *            :current-user-id 1})}
 * 
 *   :users
 *   {:target [:kv :user :list]
 * :deps   [:jwt]
 * :loader simple-promised-datasource
 * :params (fn [prev route {:keys [jwt]}]
 *           {:jwt jwt
 *            :users [{:id 1} {:id 2}]})}
 * 
 *   :current-user-favorites
 *   {:target [:kv :favorites :current]
 * :deps   [:jwt :current-user]
 * :loader simple-promised-datasource
 * :params (fn [prev route {:keys [jwt current-user]}]
 *           {:jwt jwt
 *            :current-user current-user
 *            :favorites [{:id 3} {:id 4}]})}})
 * ```
 * 
 * A lot of stuff is happening in this example, so let's explain them one by one.
 * 
 * `promised-datasource` function is used as an example loader. The important thing to note here is that loader functions accept an array of requests. This means that you can use this function as an optimization point, a place where you can optimize the requests - remove duplicates or combine them into one request. Loader function should return a list of promises or results (these can be combined). Dataloader will wait for each promise to resolve, and then continue loading the dependent datasources.
 * 
 * Datasources are registered in the map, and the key under which the datasource is registered can be used by the other datasources to depend on it.
 * 
 * Each datasource map can have the following attributes:
 * 
 * - `:target` - where to store the returned data
 * - `:params` - function that returns the params needed to load the data
 * - `:loader` - function that is used to load the data, this function gets a list of requests
 * - `:deps` - list of datasources that the datasource depends on
 * - `:processor` - function that processes the result data before it gets stored in the app-db
 * 
 * **`:target` attribute**
 * 
 * Target attribute tells dataloader where it should store the loaded data. It has three different forms:
 * 
 * - general path - `[:kv :user]` - it will be stored under this path in the app-db
 * - EntityDB collection path - `[:edb/collection :user/list]` - If the first element of the target vector is `:edb/collection` keyword, the results will be treated as the EntityDB collection and the second element of the vector will be split on `/` to determine where this collection should be stored. If the second element of the target vector looked like `:user/list` the data would be stored in the collection named `:list` for the entity named `:user`.
 * - EntityDB named item - `[:edb/named-item :user/current]` - this will store the EntityDB named item, using the same rules like the EntityDB collection target to determine where the item should be stored.
 * 
 * **`:params` attribute**
 * 
 * Params function returns the params needed to load the datasource. It receives three arguments:
 * 
 * - previously loaded value
 * - current route
 * - datasource dependencies
 * 
 * This function is called to determine the current datasource state. If the returned value is different from the previously returned value, the datasource will be reloaded. Loader function receives the params, and it has to make sense of it. Even if your params fn returns `nil`, loader function will be called. It is loader function's responsobility to decide what the returned params mean.
 * 
 * **`:loader`** attribute:
 * 
 * Loader function is responsible for the data loading. This is where you should place your AJAX request functions. Loader function will receive a vector of requests (one element for each "triggered" datasource). Each request comes from a datasource, and it contains the following attributes:
 * 
 * - `:params` - value returned from the "params" function
 * - `:prev` - previously loaded value
 * - `:datasource` - key under which the datasource is registered
 * - `:app-db` - current app-db state
 * - `:target` - path where data will be stored in the app-db
 * 
 * Loader function should return a vector (one item for each request). Values in the returned vector can be either promises or resolved values.
 * 
 * 
 * **Manually triggering the Dataloader**
 * 
 * In some cases you will want to manually trigger the dataloader without the route change. For instance you might obtain a JWT token as a result of some user's action, and then reload all datasources that depend on it. Dataloader controller can manually trigger the dataloader. You can achieve this by sending the `:load-data` command to the dataloader controller:
 * 
 * ```clojure
 * (ns some.namespace
 *   (:require [keechma.toolbox.dataloader.core :as dataloader]
 *      [keechma.controller :as controller]))
 * 
 * (defn trigger-dataloader [ctrl]
 *   (controller/send-command ctrl [dataloader/id-key :load-data])) ;; dataloader controller will be registered under the dataloader/id-key keyword
 * ```
 * 
 * This will reload all invalidated datasources.
 */
keechma.toolbox.dataloader.controller.register = (function keechma$toolbox$dataloader$controller$register(var_args){
var G__28687 = arguments.length;
switch (G__28687) {
case 2:
return keechma.toolbox.dataloader.controller.register.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return keechma.toolbox.dataloader.controller.register.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.toolbox.dataloader.controller.register.cljs$core$IFn$_invoke$arity$2 = (function (datasources,edb_schema){
return keechma.toolbox.dataloader.controller.register.call(null,cljs.core.PersistentArrayMap.EMPTY,datasources,edb_schema);
});

keechma.toolbox.dataloader.controller.register.cljs$core$IFn$_invoke$arity$3 = (function (controllers,datasources,edb_schema){
return cljs.core.assoc.call(null,controllers,keechma.toolbox.dataloader.core.id_key,keechma.toolbox.dataloader.controller.constructor$.call(null,datasources,edb_schema));
});

keechma.toolbox.dataloader.controller.register.cljs$lang$maxFixedArity = 3;

