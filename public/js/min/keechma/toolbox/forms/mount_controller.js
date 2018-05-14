// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('keechma.toolbox.forms.mount_controller');
goog.require('cljs.core');
goog.require('keechma.controller');
goog.require('keechma.toolbox.forms.core');
goog.require('cljs.core.async');
goog.require('clojure.set');

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
keechma.toolbox.forms.mount_controller.Controller = (function (forms_params,__meta,__extmap,__hash){
this.forms_params = forms_params;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9604__auto__,k__9605__auto__){
var self__ = this;
var this__9604__auto____$1 = this;
return this__9604__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9605__auto__,null);
});

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9606__auto__,k28692,else__9607__auto__){
var self__ = this;
var this__9606__auto____$1 = this;
var G__28696 = k28692;
var G__28696__$1 = (((G__28696 instanceof cljs.core.Keyword))?G__28696.fqn:null);
switch (G__28696__$1) {
case "forms-params":
return self__.forms_params;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k28692,else__9607__auto__);

}
});

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9618__auto__,writer__9619__auto__,opts__9620__auto__){
var self__ = this;
var this__9618__auto____$1 = this;
var pr_pair__9621__auto__ = ((function (this__9618__auto____$1){
return (function (keyval__9622__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,cljs.core.pr_writer,""," ","",opts__9620__auto__,keyval__9622__auto__);
});})(this__9618__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,pr_pair__9621__auto__,"#keechma.toolbox.forms.mount-controller.Controller{",", ","}",opts__9620__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"forms-params","forms-params",709182870),self__.forms_params],null))], null),self__.__extmap));
});

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28691){
var self__ = this;
var G__28691__$1 = this;
return (new cljs.core.RecordIter((0),G__28691__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"forms-params","forms-params",709182870)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9602__auto__){
var self__ = this;
var this__9602__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9599__auto__){
var self__ = this;
var this__9599__auto____$1 = this;
return (new keechma.toolbox.forms.mount_controller.Controller(self__.forms_params,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9608__auto__){
var self__ = this;
var this__9608__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9600__auto__){
var self__ = this;
var this__9600__auto____$1 = this;
var h__9372__auto__ = self__.__hash;
if(!((h__9372__auto__ == null))){
return h__9372__auto__;
} else {
var h__9372__auto____$1 = ((function (h__9372__auto__,this__9600__auto____$1){
return (function (coll__9601__auto__){
return (-1277434469 ^ cljs.core.hash_unordered_coll.call(null,coll__9601__auto__));
});})(h__9372__auto__,this__9600__auto____$1))
.call(null,this__9600__auto____$1);
self__.__hash = h__9372__auto____$1;

return h__9372__auto____$1;
}
});

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28693,other28694){
var self__ = this;
var this28693__$1 = this;
return (!((other28694 == null))) && ((this28693__$1.constructor === other28694.constructor)) && (cljs.core._EQ_.call(null,this28693__$1.forms_params,other28694.forms_params)) && (cljs.core._EQ_.call(null,this28693__$1.__extmap,other28694.__extmap));
});

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9613__auto__,k__9614__auto__){
var self__ = this;
var this__9613__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"forms-params","forms-params",709182870),null], null), null),k__9614__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9613__auto____$1),self__.__meta),k__9614__auto__);
} else {
return (new keechma.toolbox.forms.mount_controller.Controller(self__.forms_params,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9614__auto__)),null));
}
});

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9611__auto__,k__9612__auto__,G__28691){
var self__ = this;
var this__9611__auto____$1 = this;
var pred__28697 = cljs.core.keyword_identical_QMARK_;
var expr__28698 = k__9612__auto__;
if(cljs.core.truth_(pred__28697.call(null,new cljs.core.Keyword(null,"forms-params","forms-params",709182870),expr__28698))){
return (new keechma.toolbox.forms.mount_controller.Controller(G__28691,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.forms.mount_controller.Controller(self__.forms_params,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9612__auto__,G__28691),null));
}
});

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9616__auto__){
var self__ = this;
var this__9616__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"forms-params","forms-params",709182870),self__.forms_params],null))], null),self__.__extmap));
});

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9603__auto__,G__28691){
var self__ = this;
var this__9603__auto____$1 = this;
return (new keechma.toolbox.forms.mount_controller.Controller(self__.forms_params,G__28691,self__.__extmap,self__.__hash));
});

keechma.toolbox.forms.mount_controller.Controller.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9609__auto__,entry__9610__auto__){
var self__ = this;
var this__9609__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9610__auto__)){
return this__9609__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9610__auto__,(0)),cljs.core._nth.call(null,entry__9610__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9609__auto____$1,entry__9610__auto__);
}
});

keechma.toolbox.forms.mount_controller.Controller.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms-params","forms-params",-1945252899,null)], null);
});

keechma.toolbox.forms.mount_controller.Controller.cljs$lang$type = true;

keechma.toolbox.forms.mount_controller.Controller.cljs$lang$ctorPrSeq = (function (this__9642__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"keechma.toolbox.forms.mount-controller/Controller");
});

keechma.toolbox.forms.mount_controller.Controller.cljs$lang$ctorPrWriter = (function (this__9642__auto__,writer__9643__auto__){
return cljs.core._write.call(null,writer__9643__auto__,"keechma.toolbox.forms.mount-controller/Controller");
});

keechma.toolbox.forms.mount_controller.__GT_Controller = (function keechma$toolbox$forms$mount_controller$__GT_Controller(forms_params){
return (new keechma.toolbox.forms.mount_controller.Controller(forms_params,null,null,null));
});

keechma.toolbox.forms.mount_controller.map__GT_Controller = (function keechma$toolbox$forms$mount_controller$map__GT_Controller(G__28695){
return (new keechma.toolbox.forms.mount_controller.Controller(new cljs.core.Keyword(null,"forms-params","forms-params",709182870).cljs$core$IFn$_invoke$arity$1(G__28695),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__28695,new cljs.core.Keyword(null,"forms-params","forms-params",709182870))),null));
});

keechma.toolbox.forms.mount_controller.forms_for_route = (function keechma$toolbox$forms$mount_controller$forms_for_route(route,forms_params){
return cljs.core.map.call(null,(function (p__28701){
var vec__28702 = p__28701;
var form = cljs.core.nth.call(null,vec__28702,(0),null);
var params_fn = cljs.core.nth.call(null,vec__28702,(1),null);
var temp__5457__auto__ = params_fn.call(null,route);
if(cljs.core.truth_(temp__5457__auto__)){
var id = temp__5457__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,id], null);
} else {
return null;
}
}),forms_params);
});
keechma.toolbox.forms.mount_controller.mount_forms = (function keechma$toolbox$forms$mount_controller$mount_forms(controller,route,mounted_forms){
var forms_params = new cljs.core.Keyword(null,"forms-params","forms-params",709182870).cljs$core$IFn$_invoke$arity$1(controller);
var should_be_mounted_forms = cljs.core.set.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,keechma.toolbox.forms.mount_controller.forms_for_route.call(null,route,forms_params)));
var forms_to_unmount = clojure.set.difference.call(null,mounted_forms,should_be_mounted_forms);
var forms_to_mount = clojure.set.difference.call(null,should_be_mounted_forms,mounted_forms);
var seq__28705_28713 = cljs.core.seq.call(null,forms_to_unmount);
var chunk__28706_28714 = null;
var count__28707_28715 = (0);
var i__28708_28716 = (0);
while(true){
if((i__28708_28716 < count__28707_28715)){
var f_28717 = cljs.core._nth.call(null,chunk__28706_28714,i__28708_28716);
keechma.controller.send_command.call(null,controller,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.toolbox.forms.core.id_key,new cljs.core.Keyword(null,"unmount-form","unmount-form",-11208746)], null),f_28717);

var G__28718 = seq__28705_28713;
var G__28719 = chunk__28706_28714;
var G__28720 = count__28707_28715;
var G__28721 = (i__28708_28716 + (1));
seq__28705_28713 = G__28718;
chunk__28706_28714 = G__28719;
count__28707_28715 = G__28720;
i__28708_28716 = G__28721;
continue;
} else {
var temp__5457__auto___28722 = cljs.core.seq.call(null,seq__28705_28713);
if(temp__5457__auto___28722){
var seq__28705_28723__$1 = temp__5457__auto___28722;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28705_28723__$1)){
var c__9847__auto___28724 = cljs.core.chunk_first.call(null,seq__28705_28723__$1);
var G__28725 = cljs.core.chunk_rest.call(null,seq__28705_28723__$1);
var G__28726 = c__9847__auto___28724;
var G__28727 = cljs.core.count.call(null,c__9847__auto___28724);
var G__28728 = (0);
seq__28705_28713 = G__28725;
chunk__28706_28714 = G__28726;
count__28707_28715 = G__28727;
i__28708_28716 = G__28728;
continue;
} else {
var f_28729 = cljs.core.first.call(null,seq__28705_28723__$1);
keechma.controller.send_command.call(null,controller,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.toolbox.forms.core.id_key,new cljs.core.Keyword(null,"unmount-form","unmount-form",-11208746)], null),f_28729);

var G__28730 = cljs.core.next.call(null,seq__28705_28723__$1);
var G__28731 = null;
var G__28732 = (0);
var G__28733 = (0);
seq__28705_28713 = G__28730;
chunk__28706_28714 = G__28731;
count__28707_28715 = G__28732;
i__28708_28716 = G__28733;
continue;
}
} else {
}
}
break;
}

var seq__28709 = cljs.core.seq.call(null,forms_to_mount);
var chunk__28710 = null;
var count__28711 = (0);
var i__28712 = (0);
while(true){
if((i__28712 < count__28711)){
var f = cljs.core._nth.call(null,chunk__28710,i__28712);
keechma.controller.send_command.call(null,controller,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.toolbox.forms.core.id_key,new cljs.core.Keyword(null,"mount-form","mount-form",-123555853)], null),f);

var G__28734 = seq__28709;
var G__28735 = chunk__28710;
var G__28736 = count__28711;
var G__28737 = (i__28712 + (1));
seq__28709 = G__28734;
chunk__28710 = G__28735;
count__28711 = G__28736;
i__28712 = G__28737;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__28709);
if(temp__5457__auto__){
var seq__28709__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28709__$1)){
var c__9847__auto__ = cljs.core.chunk_first.call(null,seq__28709__$1);
var G__28738 = cljs.core.chunk_rest.call(null,seq__28709__$1);
var G__28739 = c__9847__auto__;
var G__28740 = cljs.core.count.call(null,c__9847__auto__);
var G__28741 = (0);
seq__28709 = G__28738;
chunk__28710 = G__28739;
count__28711 = G__28740;
i__28712 = G__28741;
continue;
} else {
var f = cljs.core.first.call(null,seq__28709__$1);
keechma.controller.send_command.call(null,controller,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.toolbox.forms.core.id_key,new cljs.core.Keyword(null,"mount-form","mount-form",-123555853)], null),f);

var G__28742 = cljs.core.next.call(null,seq__28709__$1);
var G__28743 = null;
var G__28744 = (0);
var G__28745 = (0);
seq__28709 = G__28742;
chunk__28710 = G__28743;
count__28711 = G__28744;
i__28712 = G__28745;
continue;
}
} else {
return null;
}
}
break;
}
});
keechma.toolbox.forms.mount_controller.get_mounted_forms = (function keechma$toolbox$forms$mount_controller$get_mounted_forms(app_db){
return cljs.core.set.call(null,cljs.core.get_in.call(null,app_db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),keechma.toolbox.forms.core.id_key,new cljs.core.Keyword(null,"order","order",-1254677256)], null)));
});
cljs.core._add_method.call(null,keechma.controller.params,keechma.toolbox.forms.mount_controller.Controller,(function (this$,route){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route);
}));
cljs.core._add_method.call(null,keechma.controller.start,keechma.toolbox.forms.mount_controller.Controller,(function (this$,params,app_db){
keechma.controller.execute.call(null,this$,new cljs.core.Keyword(null,"mount-forms","mount-forms",1368091957),params);

return app_db;
}));
cljs.core._add_method.call(null,keechma.controller.handler,keechma.toolbox.forms.mount_controller.Controller,(function (this$,app_db_atom,in_chan,out_chan){
var c__17808__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17808__auto__){
return (function (){
var f__17809__auto__ = (function (){var switch__17718__auto__ = ((function (c__17808__auto__){
return (function (state_28774){
var state_val_28775 = (state_28774[(1)]);
if((state_val_28775 === (7))){
var inst_28753 = (state_28774[(7)]);
var inst_28758 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(inst_28753);
var inst_28759 = cljs.core.deref.call(null,app_db_atom);
var inst_28760 = keechma.toolbox.forms.mount_controller.get_mounted_forms.call(null,inst_28759);
var inst_28761 = keechma.toolbox.forms.mount_controller.mount_forms.call(null,this$,inst_28758,inst_28760);
var state_28774__$1 = state_28774;
var statearr_28776_28795 = state_28774__$1;
(statearr_28776_28795[(2)] = inst_28761);

(statearr_28776_28795[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (1))){
var state_28774__$1 = state_28774;
var statearr_28777_28796 = state_28774__$1;
(statearr_28777_28796[(2)] = null);

(statearr_28777_28796[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (4))){
var inst_28752 = (state_28774[(8)]);
var inst_28751 = (state_28774[(2)]);
var inst_28752__$1 = cljs.core.nth.call(null,inst_28751,(0),null);
var inst_28753 = cljs.core.nth.call(null,inst_28751,(1),null);
var state_28774__$1 = (function (){var statearr_28778 = state_28774;
(statearr_28778[(7)] = inst_28753);

(statearr_28778[(8)] = inst_28752__$1);

return statearr_28778;
})();
var G__28779_28797 = inst_28752__$1;
var G__28779_28798__$1 = (((G__28779_28797 instanceof cljs.core.Keyword))?G__28779_28797.fqn:null);
switch (G__28779_28798__$1) {
case "mount-forms":
var statearr_28780_28800 = state_28774__$1;
(statearr_28780_28800[(1)] = (6));


break;
case "route-changed":
var statearr_28781_28801 = state_28774__$1;
(statearr_28781_28801[(1)] = (7));


break;
default:
var statearr_28782_28802 = state_28774__$1;
(statearr_28782_28802[(1)] = (8));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (6))){
var inst_28753 = (state_28774[(7)]);
var inst_28754 = cljs.core.deref.call(null,app_db_atom);
var inst_28755 = keechma.toolbox.forms.mount_controller.get_mounted_forms.call(null,inst_28754);
var inst_28756 = keechma.toolbox.forms.mount_controller.mount_forms.call(null,this$,inst_28753,inst_28755);
var state_28774__$1 = state_28774;
var statearr_28783_28803 = state_28774__$1;
(statearr_28783_28803[(2)] = inst_28756);

(statearr_28783_28803[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (3))){
var inst_28772 = (state_28774[(2)]);
var state_28774__$1 = state_28774;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28774__$1,inst_28772);
} else {
if((state_val_28775 === (2))){
var state_28774__$1 = state_28774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28774__$1,(4),in_chan);
} else {
if((state_val_28775 === (11))){
var inst_28770 = (state_28774[(2)]);
var state_28774__$1 = state_28774;
var statearr_28784_28804 = state_28774__$1;
(statearr_28784_28804[(2)] = inst_28770);

(statearr_28784_28804[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (9))){
var state_28774__$1 = state_28774;
var statearr_28785_28805 = state_28774__$1;
(statearr_28785_28805[(2)] = null);

(statearr_28785_28805[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (5))){
var inst_28752 = (state_28774[(8)]);
var inst_28765 = (state_28774[(2)]);
var state_28774__$1 = (function (){var statearr_28786 = state_28774;
(statearr_28786[(9)] = inst_28765);

return statearr_28786;
})();
if(cljs.core.truth_(inst_28752)){
var statearr_28787_28806 = state_28774__$1;
(statearr_28787_28806[(1)] = (9));

} else {
var statearr_28788_28807 = state_28774__$1;
(statearr_28788_28807[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (10))){
var state_28774__$1 = state_28774;
var statearr_28789_28808 = state_28774__$1;
(statearr_28789_28808[(2)] = null);

(statearr_28789_28808[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28775 === (8))){
var state_28774__$1 = state_28774;
var statearr_28790_28809 = state_28774__$1;
(statearr_28790_28809[(2)] = null);

(statearr_28790_28809[(1)] = (5));


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
});})(c__17808__auto__))
;
return ((function (switch__17718__auto__,c__17808__auto__){
return (function() {
var keechma$toolbox$forms$mount_controller$state_machine__17719__auto__ = null;
var keechma$toolbox$forms$mount_controller$state_machine__17719__auto____0 = (function (){
var statearr_28791 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28791[(0)] = keechma$toolbox$forms$mount_controller$state_machine__17719__auto__);

(statearr_28791[(1)] = (1));

return statearr_28791;
});
var keechma$toolbox$forms$mount_controller$state_machine__17719__auto____1 = (function (state_28774){
while(true){
var ret_value__17720__auto__ = (function (){try{while(true){
var result__17721__auto__ = switch__17718__auto__.call(null,state_28774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17721__auto__;
}
break;
}
}catch (e28792){if((e28792 instanceof Object)){
var ex__17722__auto__ = e28792;
var statearr_28793_28810 = state_28774;
(statearr_28793_28810[(5)] = ex__17722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28792;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28811 = state_28774;
state_28774 = G__28811;
continue;
} else {
return ret_value__17720__auto__;
}
break;
}
});
keechma$toolbox$forms$mount_controller$state_machine__17719__auto__ = function(state_28774){
switch(arguments.length){
case 0:
return keechma$toolbox$forms$mount_controller$state_machine__17719__auto____0.call(this);
case 1:
return keechma$toolbox$forms$mount_controller$state_machine__17719__auto____1.call(this,state_28774);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
keechma$toolbox$forms$mount_controller$state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$toolbox$forms$mount_controller$state_machine__17719__auto____0;
keechma$toolbox$forms$mount_controller$state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$toolbox$forms$mount_controller$state_machine__17719__auto____1;
return keechma$toolbox$forms$mount_controller$state_machine__17719__auto__;
})()
;})(switch__17718__auto__,c__17808__auto__))
})();
var state__17810__auto__ = (function (){var statearr_28794 = f__17809__auto__.call(null);
(statearr_28794[(6)] = c__17808__auto__);

return statearr_28794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17810__auto__);
});})(c__17808__auto__))
);

return c__17808__auto__;
}));
keechma.toolbox.forms.mount_controller.constructor$ = (function keechma$toolbox$forms$mount_controller$constructor(form_params){
return keechma.toolbox.forms.mount_controller.__GT_Controller.call(null,form_params);
});
keechma.toolbox.forms.mount_controller.register = (function keechma$toolbox$forms$mount_controller$register(var_args){
var G__28813 = arguments.length;
switch (G__28813) {
case 1:
return keechma.toolbox.forms.mount_controller.register.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.toolbox.forms.mount_controller.register.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.toolbox.forms.mount_controller.register.cljs$core$IFn$_invoke$arity$1 = (function (form_params){
return keechma.toolbox.forms.mount_controller.register.call(null,cljs.core.PersistentArrayMap.EMPTY,form_params);
});

keechma.toolbox.forms.mount_controller.register.cljs$core$IFn$_invoke$arity$2 = (function (controllers,form_params){
return cljs.core.assoc.call(null,controllers,new cljs.core.Keyword("keechma.toolbox.forms.mount-controller","id","keechma.toolbox.forms.mount-controller/id",1803111360),keechma.toolbox.forms.mount_controller.constructor$.call(null,form_params));
});

keechma.toolbox.forms.mount_controller.register.cljs$lang$maxFixedArity = 2;

