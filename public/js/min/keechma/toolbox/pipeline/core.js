// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('keechma.toolbox.pipeline.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('promesa.core');
goog.require('promesa.impl');
goog.require('keechma.controller');

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
keechma.toolbox.pipeline.core.Error = (function (type,message,payload,cause,__meta,__extmap,__hash){
this.type = type;
this.message = message;
this.payload = payload;
this.cause = cause;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.toolbox.pipeline.core.Error.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9604__auto__,k__9605__auto__){
var self__ = this;
var this__9604__auto____$1 = this;
return this__9604__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9605__auto__,null);
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9606__auto__,k24968,else__9607__auto__){
var self__ = this;
var this__9606__auto____$1 = this;
var G__24972 = k24968;
var G__24972__$1 = (((G__24972 instanceof cljs.core.Keyword))?G__24972.fqn:null);
switch (G__24972__$1) {
case "type":
return self__.type;

break;
case "message":
return self__.message;

break;
case "payload":
return self__.payload;

break;
case "cause":
return self__.cause;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24968,else__9607__auto__);

}
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9618__auto__,writer__9619__auto__,opts__9620__auto__){
var self__ = this;
var this__9618__auto____$1 = this;
var pr_pair__9621__auto__ = ((function (this__9618__auto____$1){
return (function (keyval__9622__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,cljs.core.pr_writer,""," ","",opts__9620__auto__,keyval__9622__auto__);
});})(this__9618__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,pr_pair__9621__auto__,"#keechma.toolbox.pipeline.core.Error{",", ","}",opts__9620__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"message","message",-406056002),self__.message],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"payload","payload",-383036092),self__.payload],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cause","cause",231901252),self__.cause],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24967){
var self__ = this;
var G__24967__$1 = this;
return (new cljs.core.RecordIter((0),G__24967__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.Keyword(null,"cause","cause",231901252)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9602__auto__){
var self__ = this;
var this__9602__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9599__auto__){
var self__ = this;
var this__9599__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.Error(self__.type,self__.message,self__.payload,self__.cause,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9608__auto__){
var self__ = this;
var this__9608__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9600__auto__){
var self__ = this;
var this__9600__auto____$1 = this;
var h__9372__auto__ = self__.__hash;
if(!((h__9372__auto__ == null))){
return h__9372__auto__;
} else {
var h__9372__auto____$1 = ((function (h__9372__auto__,this__9600__auto____$1){
return (function (coll__9601__auto__){
return (37091761 ^ cljs.core.hash_unordered_coll.call(null,coll__9601__auto__));
});})(h__9372__auto__,this__9600__auto____$1))
.call(null,this__9600__auto____$1);
self__.__hash = h__9372__auto____$1;

return h__9372__auto____$1;
}
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24969,other24970){
var self__ = this;
var this24969__$1 = this;
return (!((other24970 == null))) && ((this24969__$1.constructor === other24970.constructor)) && (cljs.core._EQ_.call(null,this24969__$1.type,other24970.type)) && (cljs.core._EQ_.call(null,this24969__$1.message,other24970.message)) && (cljs.core._EQ_.call(null,this24969__$1.payload,other24970.payload)) && (cljs.core._EQ_.call(null,this24969__$1.cause,other24970.cause)) && (cljs.core._EQ_.call(null,this24969__$1.__extmap,other24970.__extmap));
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9613__auto__,k__9614__auto__){
var self__ = this;
var this__9613__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cause","cause",231901252),null,new cljs.core.Keyword(null,"payload","payload",-383036092),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"message","message",-406056002),null], null), null),k__9614__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9613__auto____$1),self__.__meta),k__9614__auto__);
} else {
return (new keechma.toolbox.pipeline.core.Error(self__.type,self__.message,self__.payload,self__.cause,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9614__auto__)),null));
}
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9611__auto__,k__9612__auto__,G__24967){
var self__ = this;
var this__9611__auto____$1 = this;
var pred__24973 = cljs.core.keyword_identical_QMARK_;
var expr__24974 = k__9612__auto__;
if(cljs.core.truth_(pred__24973.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__24974))){
return (new keechma.toolbox.pipeline.core.Error(G__24967,self__.message,self__.payload,self__.cause,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24973.call(null,new cljs.core.Keyword(null,"message","message",-406056002),expr__24974))){
return (new keechma.toolbox.pipeline.core.Error(self__.type,G__24967,self__.payload,self__.cause,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24973.call(null,new cljs.core.Keyword(null,"payload","payload",-383036092),expr__24974))){
return (new keechma.toolbox.pipeline.core.Error(self__.type,self__.message,G__24967,self__.cause,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24973.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),expr__24974))){
return (new keechma.toolbox.pipeline.core.Error(self__.type,self__.message,self__.payload,G__24967,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.pipeline.core.Error(self__.type,self__.message,self__.payload,self__.cause,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9612__auto__,G__24967),null));
}
}
}
}
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9616__auto__){
var self__ = this;
var this__9616__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"message","message",-406056002),self__.message],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"payload","payload",-383036092),self__.payload],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cause","cause",231901252),self__.cause],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9603__auto__,G__24967){
var self__ = this;
var this__9603__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.Error(self__.type,self__.message,self__.payload,self__.cause,G__24967,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.Error.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9609__auto__,entry__9610__auto__){
var self__ = this;
var this__9609__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9610__auto__)){
return this__9609__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9610__auto__,(0)),cljs.core._nth.call(null,entry__9610__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9609__auto____$1,entry__9610__auto__);
}
});

keechma.toolbox.pipeline.core.Error.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"message","message",1234475525,null),new cljs.core.Symbol(null,"payload","payload",1257495435,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null);
});

keechma.toolbox.pipeline.core.Error.cljs$lang$type = true;

keechma.toolbox.pipeline.core.Error.cljs$lang$ctorPrSeq = (function (this__9642__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"keechma.toolbox.pipeline.core/Error");
});

keechma.toolbox.pipeline.core.Error.cljs$lang$ctorPrWriter = (function (this__9642__auto__,writer__9643__auto__){
return cljs.core._write.call(null,writer__9643__auto__,"keechma.toolbox.pipeline.core/Error");
});

keechma.toolbox.pipeline.core.__GT_Error = (function keechma$toolbox$pipeline$core$__GT_Error(type,message,payload,cause){
return (new keechma.toolbox.pipeline.core.Error(type,message,payload,cause,null,null,null));
});

keechma.toolbox.pipeline.core.map__GT_Error = (function keechma$toolbox$pipeline$core$map__GT_Error(G__24971){
return (new keechma.toolbox.pipeline.core.Error(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__24971),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(G__24971),new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(G__24971),new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(G__24971),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__24971,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"payload","payload",-383036092),new cljs.core.Keyword(null,"cause","cause",231901252))),null));
});

keechma.toolbox.pipeline.core.error_BANG_ = (function keechma$toolbox$pipeline$core$error_BANG_(type,payload){
return keechma.toolbox.pipeline.core.__GT_Error.call(null,type,null,payload,null);
});

/**
 * @interface
 */
keechma.toolbox.pipeline.core.ISideffect = function(){};

keechma.toolbox.pipeline.core.call_BANG_ = (function keechma$toolbox$pipeline$core$call_BANG_(this$,controller,app_db_atom){
if((!((this$ == null))) && (!((this$.keechma$toolbox$pipeline$core$ISideffect$call_BANG_$arity$3 == null)))){
return this$.keechma$toolbox$pipeline$core$ISideffect$call_BANG_$arity$3(this$,controller,app_db_atom);
} else {
var x__9649__auto__ = (((this$ == null))?null:this$);
var m__9650__auto__ = (keechma.toolbox.pipeline.core.call_BANG_[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return m__9650__auto__.call(null,this$,controller,app_db_atom);
} else {
var m__9650__auto____$1 = (keechma.toolbox.pipeline.core.call_BANG_["_"]);
if(!((m__9650__auto____$1 == null))){
return m__9650__auto____$1.call(null,this$,controller,app_db_atom);
} else {
throw cljs.core.missing_protocol.call(null,"ISideffect.call!",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {keechma.toolbox.pipeline.core.ISideffect}
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
keechma.toolbox.pipeline.core.CommitSideffect = (function (value,cb,__meta,__extmap,__hash){
this.value = value;
this.cb = cb;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9604__auto__,k__9605__auto__){
var self__ = this;
var this__9604__auto____$1 = this;
return this__9604__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9605__auto__,null);
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9606__auto__,k24978,else__9607__auto__){
var self__ = this;
var this__9606__auto____$1 = this;
var G__24982 = k24978;
var G__24982__$1 = (((G__24982 instanceof cljs.core.Keyword))?G__24982.fqn:null);
switch (G__24982__$1) {
case "value":
return self__.value;

break;
case "cb":
return self__.cb;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24978,else__9607__auto__);

}
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9618__auto__,writer__9619__auto__,opts__9620__auto__){
var self__ = this;
var this__9618__auto____$1 = this;
var pr_pair__9621__auto__ = ((function (this__9618__auto____$1){
return (function (keyval__9622__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,cljs.core.pr_writer,""," ","",opts__9620__auto__,keyval__9622__auto__);
});})(this__9618__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,pr_pair__9621__auto__,"#keechma.toolbox.pipeline.core.CommitSideffect{",", ","}",opts__9620__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cb","cb",589947841),self__.cb],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24977){
var self__ = this;
var G__24977__$1 = this;
return (new cljs.core.RecordIter((0),G__24977__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"cb","cb",589947841)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9602__auto__){
var self__ = this;
var this__9602__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9599__auto__){
var self__ = this;
var this__9599__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.CommitSideffect(self__.value,self__.cb,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9608__auto__){
var self__ = this;
var this__9608__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9600__auto__){
var self__ = this;
var this__9600__auto____$1 = this;
var h__9372__auto__ = self__.__hash;
if(!((h__9372__auto__ == null))){
return h__9372__auto__;
} else {
var h__9372__auto____$1 = ((function (h__9372__auto__,this__9600__auto____$1){
return (function (coll__9601__auto__){
return (706431185 ^ cljs.core.hash_unordered_coll.call(null,coll__9601__auto__));
});})(h__9372__auto__,this__9600__auto____$1))
.call(null,this__9600__auto____$1);
self__.__hash = h__9372__auto____$1;

return h__9372__auto____$1;
}
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24979,other24980){
var self__ = this;
var this24979__$1 = this;
return (!((other24980 == null))) && ((this24979__$1.constructor === other24980.constructor)) && (cljs.core._EQ_.call(null,this24979__$1.value,other24980.value)) && (cljs.core._EQ_.call(null,this24979__$1.cb,other24980.cb)) && (cljs.core._EQ_.call(null,this24979__$1.__extmap,other24980.__extmap));
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$ = cljs.core.PROTOCOL_SENTINEL;

keechma.toolbox.pipeline.core.CommitSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$call_BANG_$arity$3 = (function (this$,_,app_db_atom){
var self__ = this;
var this$__$1 = this;
var cb__$1 = new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(this$__$1);
cljs.core.reset_BANG_.call(null,app_db_atom,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(this$__$1));

if(cljs.core.truth_(cb__$1)){
return cb__$1.call(null);
} else {
return null;
}
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9613__auto__,k__9614__auto__){
var self__ = this;
var this__9613__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cb","cb",589947841),null,new cljs.core.Keyword(null,"value","value",305978217),null], null), null),k__9614__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9613__auto____$1),self__.__meta),k__9614__auto__);
} else {
return (new keechma.toolbox.pipeline.core.CommitSideffect(self__.value,self__.cb,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9614__auto__)),null));
}
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9611__auto__,k__9612__auto__,G__24977){
var self__ = this;
var this__9611__auto____$1 = this;
var pred__24983 = cljs.core.keyword_identical_QMARK_;
var expr__24984 = k__9612__auto__;
if(cljs.core.truth_(pred__24983.call(null,new cljs.core.Keyword(null,"value","value",305978217),expr__24984))){
return (new keechma.toolbox.pipeline.core.CommitSideffect(G__24977,self__.cb,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24983.call(null,new cljs.core.Keyword(null,"cb","cb",589947841),expr__24984))){
return (new keechma.toolbox.pipeline.core.CommitSideffect(self__.value,G__24977,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.pipeline.core.CommitSideffect(self__.value,self__.cb,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9612__auto__,G__24977),null));
}
}
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9616__auto__){
var self__ = this;
var this__9616__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"value","value",305978217),self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"cb","cb",589947841),self__.cb],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9603__auto__,G__24977){
var self__ = this;
var this__9603__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.CommitSideffect(self__.value,self__.cb,G__24977,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.CommitSideffect.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9609__auto__,entry__9610__auto__){
var self__ = this;
var this__9609__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9610__auto__)){
return this__9609__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9610__auto__,(0)),cljs.core._nth.call(null,entry__9610__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9609__auto____$1,entry__9610__auto__);
}
});

keechma.toolbox.pipeline.core.CommitSideffect.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null);
});

keechma.toolbox.pipeline.core.CommitSideffect.cljs$lang$type = true;

keechma.toolbox.pipeline.core.CommitSideffect.cljs$lang$ctorPrSeq = (function (this__9642__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"keechma.toolbox.pipeline.core/CommitSideffect");
});

keechma.toolbox.pipeline.core.CommitSideffect.cljs$lang$ctorPrWriter = (function (this__9642__auto__,writer__9643__auto__){
return cljs.core._write.call(null,writer__9643__auto__,"keechma.toolbox.pipeline.core/CommitSideffect");
});

keechma.toolbox.pipeline.core.__GT_CommitSideffect = (function keechma$toolbox$pipeline$core$__GT_CommitSideffect(value,cb){
return (new keechma.toolbox.pipeline.core.CommitSideffect(value,cb,null,null,null));
});

keechma.toolbox.pipeline.core.map__GT_CommitSideffect = (function keechma$toolbox$pipeline$core$map__GT_CommitSideffect(G__24981){
return (new keechma.toolbox.pipeline.core.CommitSideffect(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(G__24981),new cljs.core.Keyword(null,"cb","cb",589947841).cljs$core$IFn$_invoke$arity$1(G__24981),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__24981,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"cb","cb",589947841))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {keechma.toolbox.pipeline.core.ISideffect}
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
keechma.toolbox.pipeline.core.SendCommandSideffect = (function (command,payload,__meta,__extmap,__hash){
this.command = command;
this.payload = payload;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9604__auto__,k__9605__auto__){
var self__ = this;
var this__9604__auto____$1 = this;
return this__9604__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9605__auto__,null);
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9606__auto__,k24988,else__9607__auto__){
var self__ = this;
var this__9606__auto____$1 = this;
var G__24992 = k24988;
var G__24992__$1 = (((G__24992 instanceof cljs.core.Keyword))?G__24992.fqn:null);
switch (G__24992__$1) {
case "command":
return self__.command;

break;
case "payload":
return self__.payload;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24988,else__9607__auto__);

}
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9618__auto__,writer__9619__auto__,opts__9620__auto__){
var self__ = this;
var this__9618__auto____$1 = this;
var pr_pair__9621__auto__ = ((function (this__9618__auto____$1){
return (function (keyval__9622__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,cljs.core.pr_writer,""," ","",opts__9620__auto__,keyval__9622__auto__);
});})(this__9618__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,pr_pair__9621__auto__,"#keechma.toolbox.pipeline.core.SendCommandSideffect{",", ","}",opts__9620__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"command","command",-894540724),self__.command],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"payload","payload",-383036092),self__.payload],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24987){
var self__ = this;
var G__24987__$1 = this;
return (new cljs.core.RecordIter((0),G__24987__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"payload","payload",-383036092)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9602__auto__){
var self__ = this;
var this__9602__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9599__auto__){
var self__ = this;
var this__9599__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.SendCommandSideffect(self__.command,self__.payload,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9608__auto__){
var self__ = this;
var this__9608__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9600__auto__){
var self__ = this;
var this__9600__auto____$1 = this;
var h__9372__auto__ = self__.__hash;
if(!((h__9372__auto__ == null))){
return h__9372__auto__;
} else {
var h__9372__auto____$1 = ((function (h__9372__auto__,this__9600__auto____$1){
return (function (coll__9601__auto__){
return (-1801969228 ^ cljs.core.hash_unordered_coll.call(null,coll__9601__auto__));
});})(h__9372__auto__,this__9600__auto____$1))
.call(null,this__9600__auto____$1);
self__.__hash = h__9372__auto____$1;

return h__9372__auto____$1;
}
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24989,other24990){
var self__ = this;
var this24989__$1 = this;
return (!((other24990 == null))) && ((this24989__$1.constructor === other24990.constructor)) && (cljs.core._EQ_.call(null,this24989__$1.command,other24990.command)) && (cljs.core._EQ_.call(null,this24989__$1.payload,other24990.payload)) && (cljs.core._EQ_.call(null,this24989__$1.__extmap,other24990.__extmap));
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$ = cljs.core.PROTOCOL_SENTINEL;

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$call_BANG_$arity$3 = (function (this$,controller,_){
var self__ = this;
var this$__$1 = this;
return keechma.controller.send_command.call(null,controller,new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(this$__$1),new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(this$__$1));
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9613__auto__,k__9614__auto__){
var self__ = this;
var this__9613__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),null,new cljs.core.Keyword(null,"command","command",-894540724),null], null), null),k__9614__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9613__auto____$1),self__.__meta),k__9614__auto__);
} else {
return (new keechma.toolbox.pipeline.core.SendCommandSideffect(self__.command,self__.payload,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9614__auto__)),null));
}
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9611__auto__,k__9612__auto__,G__24987){
var self__ = this;
var this__9611__auto____$1 = this;
var pred__24993 = cljs.core.keyword_identical_QMARK_;
var expr__24994 = k__9612__auto__;
if(cljs.core.truth_(pred__24993.call(null,new cljs.core.Keyword(null,"command","command",-894540724),expr__24994))){
return (new keechma.toolbox.pipeline.core.SendCommandSideffect(G__24987,self__.payload,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__24993.call(null,new cljs.core.Keyword(null,"payload","payload",-383036092),expr__24994))){
return (new keechma.toolbox.pipeline.core.SendCommandSideffect(self__.command,G__24987,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.pipeline.core.SendCommandSideffect(self__.command,self__.payload,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9612__auto__,G__24987),null));
}
}
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9616__auto__){
var self__ = this;
var this__9616__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"command","command",-894540724),self__.command],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"payload","payload",-383036092),self__.payload],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9603__auto__,G__24987){
var self__ = this;
var this__9603__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.SendCommandSideffect(self__.command,self__.payload,G__24987,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.SendCommandSideffect.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9609__auto__,entry__9610__auto__){
var self__ = this;
var this__9609__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9610__auto__)){
return this__9609__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9610__auto__,(0)),cljs.core._nth.call(null,entry__9610__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9609__auto____$1,entry__9610__auto__);
}
});

keechma.toolbox.pipeline.core.SendCommandSideffect.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"command","command",745990803,null),new cljs.core.Symbol(null,"payload","payload",1257495435,null)], null);
});

keechma.toolbox.pipeline.core.SendCommandSideffect.cljs$lang$type = true;

keechma.toolbox.pipeline.core.SendCommandSideffect.cljs$lang$ctorPrSeq = (function (this__9642__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"keechma.toolbox.pipeline.core/SendCommandSideffect");
});

keechma.toolbox.pipeline.core.SendCommandSideffect.cljs$lang$ctorPrWriter = (function (this__9642__auto__,writer__9643__auto__){
return cljs.core._write.call(null,writer__9643__auto__,"keechma.toolbox.pipeline.core/SendCommandSideffect");
});

keechma.toolbox.pipeline.core.__GT_SendCommandSideffect = (function keechma$toolbox$pipeline$core$__GT_SendCommandSideffect(command,payload){
return (new keechma.toolbox.pipeline.core.SendCommandSideffect(command,payload,null,null,null));
});

keechma.toolbox.pipeline.core.map__GT_SendCommandSideffect = (function keechma$toolbox$pipeline$core$map__GT_SendCommandSideffect(G__24991){
return (new keechma.toolbox.pipeline.core.SendCommandSideffect(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(G__24991),new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(G__24991),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__24991,new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"payload","payload",-383036092))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {keechma.toolbox.pipeline.core.ISideffect}
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
keechma.toolbox.pipeline.core.ExecuteSideffect = (function (command,payload,__meta,__extmap,__hash){
this.command = command;
this.payload = payload;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9604__auto__,k__9605__auto__){
var self__ = this;
var this__9604__auto____$1 = this;
return this__9604__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9605__auto__,null);
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9606__auto__,k24998,else__9607__auto__){
var self__ = this;
var this__9606__auto____$1 = this;
var G__25002 = k24998;
var G__25002__$1 = (((G__25002 instanceof cljs.core.Keyword))?G__25002.fqn:null);
switch (G__25002__$1) {
case "command":
return self__.command;

break;
case "payload":
return self__.payload;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k24998,else__9607__auto__);

}
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9618__auto__,writer__9619__auto__,opts__9620__auto__){
var self__ = this;
var this__9618__auto____$1 = this;
var pr_pair__9621__auto__ = ((function (this__9618__auto____$1){
return (function (keyval__9622__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,cljs.core.pr_writer,""," ","",opts__9620__auto__,keyval__9622__auto__);
});})(this__9618__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,pr_pair__9621__auto__,"#keechma.toolbox.pipeline.core.ExecuteSideffect{",", ","}",opts__9620__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"command","command",-894540724),self__.command],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"payload","payload",-383036092),self__.payload],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__24997){
var self__ = this;
var G__24997__$1 = this;
return (new cljs.core.RecordIter((0),G__24997__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"payload","payload",-383036092)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9602__auto__){
var self__ = this;
var this__9602__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9599__auto__){
var self__ = this;
var this__9599__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.ExecuteSideffect(self__.command,self__.payload,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9608__auto__){
var self__ = this;
var this__9608__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9600__auto__){
var self__ = this;
var this__9600__auto____$1 = this;
var h__9372__auto__ = self__.__hash;
if(!((h__9372__auto__ == null))){
return h__9372__auto__;
} else {
var h__9372__auto____$1 = ((function (h__9372__auto__,this__9600__auto____$1){
return (function (coll__9601__auto__){
return (1063192084 ^ cljs.core.hash_unordered_coll.call(null,coll__9601__auto__));
});})(h__9372__auto__,this__9600__auto____$1))
.call(null,this__9600__auto____$1);
self__.__hash = h__9372__auto____$1;

return h__9372__auto____$1;
}
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this24999,other25000){
var self__ = this;
var this24999__$1 = this;
return (!((other25000 == null))) && ((this24999__$1.constructor === other25000.constructor)) && (cljs.core._EQ_.call(null,this24999__$1.command,other25000.command)) && (cljs.core._EQ_.call(null,this24999__$1.payload,other25000.payload)) && (cljs.core._EQ_.call(null,this24999__$1.__extmap,other25000.__extmap));
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$ = cljs.core.PROTOCOL_SENTINEL;

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$call_BANG_$arity$3 = (function (this$,controller,_){
var self__ = this;
var this$__$1 = this;
return keechma.controller.execute.call(null,controller,new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(this$__$1),new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(this$__$1));
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9613__auto__,k__9614__auto__){
var self__ = this;
var this__9613__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"payload","payload",-383036092),null,new cljs.core.Keyword(null,"command","command",-894540724),null], null), null),k__9614__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9613__auto____$1),self__.__meta),k__9614__auto__);
} else {
return (new keechma.toolbox.pipeline.core.ExecuteSideffect(self__.command,self__.payload,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9614__auto__)),null));
}
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9611__auto__,k__9612__auto__,G__24997){
var self__ = this;
var this__9611__auto____$1 = this;
var pred__25003 = cljs.core.keyword_identical_QMARK_;
var expr__25004 = k__9612__auto__;
if(cljs.core.truth_(pred__25003.call(null,new cljs.core.Keyword(null,"command","command",-894540724),expr__25004))){
return (new keechma.toolbox.pipeline.core.ExecuteSideffect(G__24997,self__.payload,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25003.call(null,new cljs.core.Keyword(null,"payload","payload",-383036092),expr__25004))){
return (new keechma.toolbox.pipeline.core.ExecuteSideffect(self__.command,G__24997,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.pipeline.core.ExecuteSideffect(self__.command,self__.payload,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9612__auto__,G__24997),null));
}
}
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9616__auto__){
var self__ = this;
var this__9616__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"command","command",-894540724),self__.command],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"payload","payload",-383036092),self__.payload],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9603__auto__,G__24997){
var self__ = this;
var this__9603__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.ExecuteSideffect(self__.command,self__.payload,G__24997,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.ExecuteSideffect.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9609__auto__,entry__9610__auto__){
var self__ = this;
var this__9609__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9610__auto__)){
return this__9609__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9610__auto__,(0)),cljs.core._nth.call(null,entry__9610__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9609__auto____$1,entry__9610__auto__);
}
});

keechma.toolbox.pipeline.core.ExecuteSideffect.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"command","command",745990803,null),new cljs.core.Symbol(null,"payload","payload",1257495435,null)], null);
});

keechma.toolbox.pipeline.core.ExecuteSideffect.cljs$lang$type = true;

keechma.toolbox.pipeline.core.ExecuteSideffect.cljs$lang$ctorPrSeq = (function (this__9642__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"keechma.toolbox.pipeline.core/ExecuteSideffect");
});

keechma.toolbox.pipeline.core.ExecuteSideffect.cljs$lang$ctorPrWriter = (function (this__9642__auto__,writer__9643__auto__){
return cljs.core._write.call(null,writer__9643__auto__,"keechma.toolbox.pipeline.core/ExecuteSideffect");
});

keechma.toolbox.pipeline.core.__GT_ExecuteSideffect = (function keechma$toolbox$pipeline$core$__GT_ExecuteSideffect(command,payload){
return (new keechma.toolbox.pipeline.core.ExecuteSideffect(command,payload,null,null,null));
});

keechma.toolbox.pipeline.core.map__GT_ExecuteSideffect = (function keechma$toolbox$pipeline$core$map__GT_ExecuteSideffect(G__25001){
return (new keechma.toolbox.pipeline.core.ExecuteSideffect(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(G__25001),new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(G__25001),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__25001,new cljs.core.Keyword(null,"command","command",-894540724),new cljs.core.Keyword(null,"payload","payload",-383036092))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {keechma.toolbox.pipeline.core.ISideffect}
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
keechma.toolbox.pipeline.core.RedirectSideffect = (function (params,__meta,__extmap,__hash){
this.params = params;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9604__auto__,k__9605__auto__){
var self__ = this;
var this__9604__auto____$1 = this;
return this__9604__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9605__auto__,null);
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9606__auto__,k25008,else__9607__auto__){
var self__ = this;
var this__9606__auto____$1 = this;
var G__25012 = k25008;
var G__25012__$1 = (((G__25012 instanceof cljs.core.Keyword))?G__25012.fqn:null);
switch (G__25012__$1) {
case "params":
return self__.params;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25008,else__9607__auto__);

}
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9618__auto__,writer__9619__auto__,opts__9620__auto__){
var self__ = this;
var this__9618__auto____$1 = this;
var pr_pair__9621__auto__ = ((function (this__9618__auto____$1){
return (function (keyval__9622__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,cljs.core.pr_writer,""," ","",opts__9620__auto__,keyval__9622__auto__);
});})(this__9618__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,pr_pair__9621__auto__,"#keechma.toolbox.pipeline.core.RedirectSideffect{",", ","}",opts__9620__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25007){
var self__ = this;
var G__25007__$1 = this;
return (new cljs.core.RecordIter((0),G__25007__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9602__auto__){
var self__ = this;
var this__9602__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9599__auto__){
var self__ = this;
var this__9599__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.RedirectSideffect(self__.params,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9608__auto__){
var self__ = this;
var this__9608__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9600__auto__){
var self__ = this;
var this__9600__auto____$1 = this;
var h__9372__auto__ = self__.__hash;
if(!((h__9372__auto__ == null))){
return h__9372__auto__;
} else {
var h__9372__auto____$1 = ((function (h__9372__auto__,this__9600__auto____$1){
return (function (coll__9601__auto__){
return (829097778 ^ cljs.core.hash_unordered_coll.call(null,coll__9601__auto__));
});})(h__9372__auto__,this__9600__auto____$1))
.call(null,this__9600__auto____$1);
self__.__hash = h__9372__auto____$1;

return h__9372__auto____$1;
}
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25009,other25010){
var self__ = this;
var this25009__$1 = this;
return (!((other25010 == null))) && ((this25009__$1.constructor === other25010.constructor)) && (cljs.core._EQ_.call(null,this25009__$1.params,other25010.params)) && (cljs.core._EQ_.call(null,this25009__$1.__extmap,other25010.__extmap));
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$ = cljs.core.PROTOCOL_SENTINEL;

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$call_BANG_$arity$3 = (function (this$,controller,_){
var self__ = this;
var this$__$1 = this;
return keechma.controller.redirect.call(null,controller,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$__$1));
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9613__auto__,k__9614__auto__){
var self__ = this;
var this__9613__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"params","params",710516235),null], null), null),k__9614__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9613__auto____$1),self__.__meta),k__9614__auto__);
} else {
return (new keechma.toolbox.pipeline.core.RedirectSideffect(self__.params,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9614__auto__)),null));
}
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9611__auto__,k__9612__auto__,G__25007){
var self__ = this;
var this__9611__auto____$1 = this;
var pred__25013 = cljs.core.keyword_identical_QMARK_;
var expr__25014 = k__9612__auto__;
if(cljs.core.truth_(pred__25013.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__25014))){
return (new keechma.toolbox.pipeline.core.RedirectSideffect(G__25007,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.pipeline.core.RedirectSideffect(self__.params,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9612__auto__,G__25007),null));
}
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9616__auto__){
var self__ = this;
var this__9616__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9603__auto__,G__25007){
var self__ = this;
var this__9603__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.RedirectSideffect(self__.params,G__25007,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.RedirectSideffect.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9609__auto__,entry__9610__auto__){
var self__ = this;
var this__9609__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9610__auto__)){
return this__9609__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9610__auto__,(0)),cljs.core._nth.call(null,entry__9610__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9609__auto____$1,entry__9610__auto__);
}
});

keechma.toolbox.pipeline.core.RedirectSideffect.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"params","params",-1943919534,null)], null);
});

keechma.toolbox.pipeline.core.RedirectSideffect.cljs$lang$type = true;

keechma.toolbox.pipeline.core.RedirectSideffect.cljs$lang$ctorPrSeq = (function (this__9642__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"keechma.toolbox.pipeline.core/RedirectSideffect");
});

keechma.toolbox.pipeline.core.RedirectSideffect.cljs$lang$ctorPrWriter = (function (this__9642__auto__,writer__9643__auto__){
return cljs.core._write.call(null,writer__9643__auto__,"keechma.toolbox.pipeline.core/RedirectSideffect");
});

keechma.toolbox.pipeline.core.__GT_RedirectSideffect = (function keechma$toolbox$pipeline$core$__GT_RedirectSideffect(params){
return (new keechma.toolbox.pipeline.core.RedirectSideffect(params,null,null,null));
});

keechma.toolbox.pipeline.core.map__GT_RedirectSideffect = (function keechma$toolbox$pipeline$core$map__GT_RedirectSideffect(G__25011){
return (new keechma.toolbox.pipeline.core.RedirectSideffect(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__25011),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__25011,new cljs.core.Keyword(null,"params","params",710516235))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {keechma.toolbox.pipeline.core.ISideffect}
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
keechma.toolbox.pipeline.core.DoSideffect = (function (sideffects,__meta,__extmap,__hash){
this.sideffects = sideffects;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9604__auto__,k__9605__auto__){
var self__ = this;
var this__9604__auto____$1 = this;
return this__9604__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9605__auto__,null);
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9606__auto__,k25018,else__9607__auto__){
var self__ = this;
var this__9606__auto____$1 = this;
var G__25022 = k25018;
var G__25022__$1 = (((G__25022 instanceof cljs.core.Keyword))?G__25022.fqn:null);
switch (G__25022__$1) {
case "sideffects":
return self__.sideffects;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25018,else__9607__auto__);

}
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9618__auto__,writer__9619__auto__,opts__9620__auto__){
var self__ = this;
var this__9618__auto____$1 = this;
var pr_pair__9621__auto__ = ((function (this__9618__auto____$1){
return (function (keyval__9622__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,cljs.core.pr_writer,""," ","",opts__9620__auto__,keyval__9622__auto__);
});})(this__9618__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,pr_pair__9621__auto__,"#keechma.toolbox.pipeline.core.DoSideffect{",", ","}",opts__9620__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sideffects","sideffects",1173151920),self__.sideffects],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25017){
var self__ = this;
var G__25017__$1 = this;
return (new cljs.core.RecordIter((0),G__25017__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sideffects","sideffects",1173151920)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9602__auto__){
var self__ = this;
var this__9602__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9599__auto__){
var self__ = this;
var this__9599__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.DoSideffect(self__.sideffects,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9608__auto__){
var self__ = this;
var this__9608__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9600__auto__){
var self__ = this;
var this__9600__auto____$1 = this;
var h__9372__auto__ = self__.__hash;
if(!((h__9372__auto__ == null))){
return h__9372__auto__;
} else {
var h__9372__auto____$1 = ((function (h__9372__auto__,this__9600__auto____$1){
return (function (coll__9601__auto__){
return (1418968668 ^ cljs.core.hash_unordered_coll.call(null,coll__9601__auto__));
});})(h__9372__auto__,this__9600__auto____$1))
.call(null,this__9600__auto____$1);
self__.__hash = h__9372__auto____$1;

return h__9372__auto____$1;
}
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25019,other25020){
var self__ = this;
var this25019__$1 = this;
return (!((other25020 == null))) && ((this25019__$1.constructor === other25020.constructor)) && (cljs.core._EQ_.call(null,this25019__$1.sideffects,other25020.sideffects)) && (cljs.core._EQ_.call(null,this25019__$1.__extmap,other25020.__extmap));
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$ = cljs.core.PROTOCOL_SENTINEL;

keechma.toolbox.pipeline.core.DoSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$call_BANG_$arity$3 = (function (this$,controller,app_db_atom){
var self__ = this;
var this$__$1 = this;
var sideffects__$1 = new cljs.core.Keyword(null,"sideffects","sideffects",1173151920).cljs$core$IFn$_invoke$arity$1(this$__$1);
var seq__25023 = cljs.core.seq.call(null,sideffects__$1);
var chunk__25024 = null;
var count__25025 = (0);
var i__25026 = (0);
while(true){
if((i__25026 < count__25025)){
var s = cljs.core._nth.call(null,chunk__25024,i__25026);
keechma.toolbox.pipeline.core.call_BANG_.call(null,s,controller,app_db_atom);

var G__25031 = seq__25023;
var G__25032 = chunk__25024;
var G__25033 = count__25025;
var G__25034 = (i__25026 + (1));
seq__25023 = G__25031;
chunk__25024 = G__25032;
count__25025 = G__25033;
i__25026 = G__25034;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__25023);
if(temp__5457__auto__){
var seq__25023__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25023__$1)){
var c__9847__auto__ = cljs.core.chunk_first.call(null,seq__25023__$1);
var G__25035 = cljs.core.chunk_rest.call(null,seq__25023__$1);
var G__25036 = c__9847__auto__;
var G__25037 = cljs.core.count.call(null,c__9847__auto__);
var G__25038 = (0);
seq__25023 = G__25035;
chunk__25024 = G__25036;
count__25025 = G__25037;
i__25026 = G__25038;
continue;
} else {
var s = cljs.core.first.call(null,seq__25023__$1);
keechma.toolbox.pipeline.core.call_BANG_.call(null,s,controller,app_db_atom);

var G__25039 = cljs.core.next.call(null,seq__25023__$1);
var G__25040 = null;
var G__25041 = (0);
var G__25042 = (0);
seq__25023 = G__25039;
chunk__25024 = G__25040;
count__25025 = G__25041;
i__25026 = G__25042;
continue;
}
} else {
return null;
}
}
break;
}
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9613__auto__,k__9614__auto__){
var self__ = this;
var this__9613__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sideffects","sideffects",1173151920),null], null), null),k__9614__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9613__auto____$1),self__.__meta),k__9614__auto__);
} else {
return (new keechma.toolbox.pipeline.core.DoSideffect(self__.sideffects,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9614__auto__)),null));
}
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9611__auto__,k__9612__auto__,G__25017){
var self__ = this;
var this__9611__auto____$1 = this;
var pred__25027 = cljs.core.keyword_identical_QMARK_;
var expr__25028 = k__9612__auto__;
if(cljs.core.truth_(pred__25027.call(null,new cljs.core.Keyword(null,"sideffects","sideffects",1173151920),expr__25028))){
return (new keechma.toolbox.pipeline.core.DoSideffect(G__25017,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.pipeline.core.DoSideffect(self__.sideffects,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9612__auto__,G__25017),null));
}
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9616__auto__){
var self__ = this;
var this__9616__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sideffects","sideffects",1173151920),self__.sideffects],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9603__auto__,G__25017){
var self__ = this;
var this__9603__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.DoSideffect(self__.sideffects,G__25017,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.DoSideffect.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9609__auto__,entry__9610__auto__){
var self__ = this;
var this__9609__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9610__auto__)){
return this__9609__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9610__auto__,(0)),cljs.core._nth.call(null,entry__9610__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9609__auto____$1,entry__9610__auto__);
}
});

keechma.toolbox.pipeline.core.DoSideffect.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"sideffects","sideffects",-1481283849,null)], null);
});

keechma.toolbox.pipeline.core.DoSideffect.cljs$lang$type = true;

keechma.toolbox.pipeline.core.DoSideffect.cljs$lang$ctorPrSeq = (function (this__9642__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"keechma.toolbox.pipeline.core/DoSideffect");
});

keechma.toolbox.pipeline.core.DoSideffect.cljs$lang$ctorPrWriter = (function (this__9642__auto__,writer__9643__auto__){
return cljs.core._write.call(null,writer__9643__auto__,"keechma.toolbox.pipeline.core/DoSideffect");
});

keechma.toolbox.pipeline.core.__GT_DoSideffect = (function keechma$toolbox$pipeline$core$__GT_DoSideffect(sideffects){
return (new keechma.toolbox.pipeline.core.DoSideffect(sideffects,null,null,null));
});

keechma.toolbox.pipeline.core.map__GT_DoSideffect = (function keechma$toolbox$pipeline$core$map__GT_DoSideffect(G__25021){
return (new keechma.toolbox.pipeline.core.DoSideffect(new cljs.core.Keyword(null,"sideffects","sideffects",1173151920).cljs$core$IFn$_invoke$arity$1(G__25021),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__25021,new cljs.core.Keyword(null,"sideffects","sideffects",1173151920))),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {keechma.toolbox.pipeline.core.ISideffect}
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
keechma.toolbox.pipeline.core.RunPipelineSideffect = (function (pipeline_key,args,__meta,__extmap,__hash){
this.pipeline_key = pipeline_key;
this.args = args;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.toolbox.pipeline.core.RunPipelineSideffect.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9604__auto__,k__9605__auto__){
var self__ = this;
var this__9604__auto____$1 = this;
return this__9604__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9605__auto__,null);
});

keechma.toolbox.pipeline.core.RunPipelineSideffect.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9606__auto__,k25044,else__9607__auto__){
var self__ = this;
var this__9606__auto____$1 = this;
var G__25048 = k25044;
var G__25048__$1 = (((G__25048 instanceof cljs.core.Keyword))?G__25048.fqn:null);
switch (G__25048__$1) {
case "pipeline-key":
return self__.pipeline_key;

break;
case "args":
return self__.args;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k25044,else__9607__auto__);

}
});

keechma.toolbox.pipeline.core.RunPipelineSideffect.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9618__auto__,writer__9619__auto__,opts__9620__auto__){
var self__ = this;
var this__9618__auto____$1 = this;
var pr_pair__9621__auto__ = ((function (this__9618__auto____$1){
return (function (keyval__9622__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,cljs.core.pr_writer,""," ","",opts__9620__auto__,keyval__9622__auto__);
});})(this__9618__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,pr_pair__9621__auto__,"#keechma.toolbox.pipeline.core.RunPipelineSideffect{",", ","}",opts__9620__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pipeline-key","pipeline-key",-1849937086),self__.pipeline_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.RunPipelineSideffect.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__25043){
var self__ = this;
var G__25043__$1 = this;
return (new cljs.core.RecordIter((0),G__25043__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pipeline-key","pipeline-key",-1849937086),new cljs.core.Keyword(null,"args","args",1315556576)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.toolbox.pipeline.core.RunPipelineSideffect.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9602__auto__){
var self__ = this;
var this__9602__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.pipeline.core.RunPipelineSideffect.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9599__auto__){
var self__ = this;
var this__9599__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.RunPipelineSideffect(self__.pipeline_key,self__.args,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.RunPipelineSideffect.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9608__auto__){
var self__ = this;
var this__9608__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

keechma.toolbox.pipeline.core.RunPipelineSideffect.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9600__auto__){
var self__ = this;
var this__9600__auto____$1 = this;
var h__9372__auto__ = self__.__hash;
if(!((h__9372__auto__ == null))){
return h__9372__auto__;
} else {
var h__9372__auto____$1 = ((function (h__9372__auto__,this__9600__auto____$1){
return (function (coll__9601__auto__){
return (-45318976 ^ cljs.core.hash_unordered_coll.call(null,coll__9601__auto__));
});})(h__9372__auto__,this__9600__auto____$1))
.call(null,this__9600__auto____$1);
self__.__hash = h__9372__auto____$1;

return h__9372__auto____$1;
}
});

keechma.toolbox.pipeline.core.RunPipelineSideffect.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this25045,other25046){
var self__ = this;
var this25045__$1 = this;
return (!((other25046 == null))) && ((this25045__$1.constructor === other25046.constructor)) && (cljs.core._EQ_.call(null,this25045__$1.pipeline_key,other25046.pipeline_key)) && (cljs.core._EQ_.call(null,this25045__$1.args,other25046.args)) && (cljs.core._EQ_.call(null,this25045__$1.__extmap,other25046.__extmap));
});

keechma.toolbox.pipeline.core.RunPipelineSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$ = cljs.core.PROTOCOL_SENTINEL;

keechma.toolbox.pipeline.core.RunPipelineSideffect.prototype.keechma$toolbox$pipeline$core$ISideffect$call_BANG_$arity$3 = (function (this$,controller,app_db_atom){
var self__ = this;
var this$__$1 = this;
var pipeline = cljs.core.get_in.call(null,controller,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pipelines","pipelines",687128919),self__.pipeline_key], null));
if(cljs.core.truth_(pipeline)){
return pipeline.call(null,controller,app_db_atom,self__.args);
} else {
throw cljs.core.ex_info.call(null,["Pipeline ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.pipeline_key)," doesn't exist"].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pipeline","pipeline",-401746042),self__.pipeline_key], null));
}
});

keechma.toolbox.pipeline.core.RunPipelineSideffect.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9613__auto__,k__9614__auto__){
var self__ = this;
var this__9613__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),null,new cljs.core.Keyword(null,"pipeline-key","pipeline-key",-1849937086),null], null), null),k__9614__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9613__auto____$1),self__.__meta),k__9614__auto__);
} else {
return (new keechma.toolbox.pipeline.core.RunPipelineSideffect(self__.pipeline_key,self__.args,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9614__auto__)),null));
}
});

keechma.toolbox.pipeline.core.RunPipelineSideffect.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9611__auto__,k__9612__auto__,G__25043){
var self__ = this;
var this__9611__auto____$1 = this;
var pred__25049 = cljs.core.keyword_identical_QMARK_;
var expr__25050 = k__9612__auto__;
if(cljs.core.truth_(pred__25049.call(null,new cljs.core.Keyword(null,"pipeline-key","pipeline-key",-1849937086),expr__25050))){
return (new keechma.toolbox.pipeline.core.RunPipelineSideffect(G__25043,self__.args,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__25049.call(null,new cljs.core.Keyword(null,"args","args",1315556576),expr__25050))){
return (new keechma.toolbox.pipeline.core.RunPipelineSideffect(self__.pipeline_key,G__25043,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.pipeline.core.RunPipelineSideffect(self__.pipeline_key,self__.args,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9612__auto__,G__25043),null));
}
}
});

keechma.toolbox.pipeline.core.RunPipelineSideffect.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9616__auto__){
var self__ = this;
var this__9616__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pipeline-key","pipeline-key",-1849937086),self__.pipeline_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"args","args",1315556576),self__.args],null))], null),self__.__extmap));
});

keechma.toolbox.pipeline.core.RunPipelineSideffect.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9603__auto__,G__25043){
var self__ = this;
var this__9603__auto____$1 = this;
return (new keechma.toolbox.pipeline.core.RunPipelineSideffect(self__.pipeline_key,self__.args,G__25043,self__.__extmap,self__.__hash));
});

keechma.toolbox.pipeline.core.RunPipelineSideffect.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9609__auto__,entry__9610__auto__){
var self__ = this;
var this__9609__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9610__auto__)){
return this__9609__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9610__auto__,(0)),cljs.core._nth.call(null,entry__9610__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9609__auto____$1,entry__9610__auto__);
}
});

keechma.toolbox.pipeline.core.RunPipelineSideffect.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pipeline-key","pipeline-key",-209405559,null),new cljs.core.Symbol(null,"args","args",-1338879193,null)], null);
});

keechma.toolbox.pipeline.core.RunPipelineSideffect.cljs$lang$type = true;

keechma.toolbox.pipeline.core.RunPipelineSideffect.cljs$lang$ctorPrSeq = (function (this__9642__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"keechma.toolbox.pipeline.core/RunPipelineSideffect");
});

keechma.toolbox.pipeline.core.RunPipelineSideffect.cljs$lang$ctorPrWriter = (function (this__9642__auto__,writer__9643__auto__){
return cljs.core._write.call(null,writer__9643__auto__,"keechma.toolbox.pipeline.core/RunPipelineSideffect");
});

keechma.toolbox.pipeline.core.__GT_RunPipelineSideffect = (function keechma$toolbox$pipeline$core$__GT_RunPipelineSideffect(pipeline_key,args){
return (new keechma.toolbox.pipeline.core.RunPipelineSideffect(pipeline_key,args,null,null,null));
});

keechma.toolbox.pipeline.core.map__GT_RunPipelineSideffect = (function keechma$toolbox$pipeline$core$map__GT_RunPipelineSideffect(G__25047){
return (new keechma.toolbox.pipeline.core.RunPipelineSideffect(new cljs.core.Keyword(null,"pipeline-key","pipeline-key",-1849937086).cljs$core$IFn$_invoke$arity$1(G__25047),new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(G__25047),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__25047,new cljs.core.Keyword(null,"pipeline-key","pipeline-key",-1849937086),new cljs.core.Keyword(null,"args","args",1315556576))),null));
});

/**
 * 
 * Commit pipeline sideffect.
 * 
 * Accepts `value` or `value` and `callback` as arguments. Value should be a new version of app-db.
 * 
 * ```clojure
 * (commit! (assoc-in app-db [:kv :user] {:username "retro"}))
 * 
 * ```
 * 
 * If the callback argument is present, this function will be called immediately after the app-db-atom is updated.
 * This is useful if you want to force Reagent to re-render the screen.
 */
keechma.toolbox.pipeline.core.commit_BANG_ = (function keechma$toolbox$pipeline$core$commit_BANG_(var_args){
var G__25054 = arguments.length;
switch (G__25054) {
case 1:
return keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (value){
return keechma.toolbox.pipeline.core.commit_BANG_.call(null,value,null);
});

keechma.toolbox.pipeline.core.commit_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (value,cb){
return keechma.toolbox.pipeline.core.__GT_CommitSideffect.call(null,value,cb);
});

keechma.toolbox.pipeline.core.commit_BANG_.cljs$lang$maxFixedArity = 2;

/**
 * 
 * Execute pipeline sideffect.
 * 
 * Accepts `command` and `payload` arguments. Use this if you want to execute a command on the current controller.
 */
keechma.toolbox.pipeline.core.execute_BANG_ = (function keechma$toolbox$pipeline$core$execute_BANG_(command,payload){
return keechma.toolbox.pipeline.core.__GT_ExecuteSideffect.call(null,command,payload);
});
/**
 * 
 * Send command pipeline sideffect.
 * 
 * Accepts `command` and `payload` arguments. Command should be a vector where first element is the controller topic, and the second
 * element is the command name. 
 */
keechma.toolbox.pipeline.core.send_command_BANG_ = (function keechma$toolbox$pipeline$core$send_command_BANG_(command,payload){
return keechma.toolbox.pipeline.core.__GT_SendCommandSideffect.call(null,command,payload);
});
/**
 * 
 * Redirect pipeline sideffect.
 * 
 * Accepts `params` argument. Page will be redirected to a new URL which will be generated from the passed in params argument. If you need to 
 * access the current route data, it is present in the pipeline `app-db` argument under the `[:route :data]` path.
 */
keechma.toolbox.pipeline.core.redirect_BANG_ = (function keechma$toolbox$pipeline$core$redirect_BANG_(params){
return keechma.toolbox.pipeline.core.__GT_RedirectSideffect.call(null,params);
});
/**
 * 
 * Runs multiple sideffects sequentially:
 * 
 * ```clojure
 * (do!
 *   (commit! (assoc-in app-db [:kv :current-user] value))
 *   (redirect! {:page "user" :id (:id user)}))
 * ```
 */
keechma.toolbox.pipeline.core.do_BANG_ = (function keechma$toolbox$pipeline$core$do_BANG_(var_args){
var args__10191__auto__ = [];
var len__10184__auto___25057 = arguments.length;
var i__10185__auto___25058 = (0);
while(true){
if((i__10185__auto___25058 < len__10184__auto___25057)){
args__10191__auto__.push((arguments[i__10185__auto___25058]));

var G__25059 = (i__10185__auto___25058 + (1));
i__10185__auto___25058 = G__25059;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((0) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((0)),(0),null)):null);
return keechma.toolbox.pipeline.core.do_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__10192__auto__);
});

keechma.toolbox.pipeline.core.do_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (sideffects){
return keechma.toolbox.pipeline.core.__GT_DoSideffect.call(null,sideffects);
});

keechma.toolbox.pipeline.core.do_BANG_.cljs$lang$maxFixedArity = (0);

keechma.toolbox.pipeline.core.do_BANG_.cljs$lang$applyTo = (function (seq25056){
return keechma.toolbox.pipeline.core.do_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq25056));
});

/**
 * Runs a pipeline in a way that blocks the current pipeline until the current pipeline is done. It behaves same as `execute! but blocks the parent pipeline until it's done. Return value and errors will be ignored by the parent pipeline.
 */
keechma.toolbox.pipeline.core.run_pipeline_BANG_ = (function keechma$toolbox$pipeline$core$run_pipeline_BANG_(var_args){
var G__25061 = arguments.length;
switch (G__25061) {
case 1:
return keechma.toolbox.pipeline.core.run_pipeline_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.toolbox.pipeline.core.run_pipeline_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.toolbox.pipeline.core.run_pipeline_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (pipeline_key){
return keechma.toolbox.pipeline.core.run_pipeline_BANG_.call(null,pipeline_key,null);
});

keechma.toolbox.pipeline.core.run_pipeline_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (pipeline_key,args){
return keechma.toolbox.pipeline.core.__GT_RunPipelineSideffect.call(null,pipeline_key,args);
});

keechma.toolbox.pipeline.core.run_pipeline_BANG_.cljs$lang$maxFixedArity = 2;

keechma.toolbox.pipeline.core.process_error = (function keechma$toolbox$pipeline$core$process_error(err){
if((err instanceof keechma.toolbox.pipeline.core.Error)){
return err;
} else {
return keechma.toolbox.pipeline.core.__GT_Error.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),null,err,null);

}
});
keechma.toolbox.pipeline.core.is_promise_QMARK_ = (function keechma$toolbox$pipeline$core$is_promise_QMARK_(val){
return cljs.core._EQ_.call(null,promesa.impl.Promise,cljs.core.type.call(null,val));
});
keechma.toolbox.pipeline.core.promise__GT_chan = (function keechma$toolbox$pipeline$core$promise__GT_chan(promise){
var promise_chan = cljs.core.async.chan.call(null);
promesa.core.error.call(null,((function (promise_chan){
return (function (e){
return cljs.core.async.put_BANG_.call(null,promise_chan,keechma.toolbox.pipeline.core.process_error.call(null,e));
});})(promise_chan))
,promesa.core.map.call(null,((function (promise_chan){
return (function (v){
return cljs.core.async.put_BANG_.call(null,promise_chan,(((v == null))?new cljs.core.Keyword("keechma.toolbox.pipeline.core","nil","keechma.toolbox.pipeline.core/nil",-1518367909):v));
});})(promise_chan))
,promise));

return promise_chan;
});
keechma.toolbox.pipeline.core.pipeline_errors = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"async-sideffect","async-sideffect",-972592540),"Returning sideffects from promises is not permitted. It is possible that application state was modified in the meantime"], null);
keechma.toolbox.pipeline.core.action_ret_val = (function keechma$toolbox$pipeline$core$action_ret_val(action,ctrl,context,app_db_atom,value,error){
try{var ret = (((error == null))?action.call(null,value,cljs.core.deref.call(null,app_db_atom),context):action.call(null,value,cljs.core.deref.call(null,app_db_atom),context,error));
var ret_val = new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(ret);
var ret_repr = new cljs.core.Keyword(null,"repr","repr",669525472).cljs$core$IFn$_invoke$arity$1(ret);
if(cljs.core.truth_(new cljs.core.Keyword(null,"pipeline?","pipeline?",1488086785).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,ret_val)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),ret_val.call(null,ctrl,app_db_atom,value),new cljs.core.Keyword(null,"promise?","promise?",-1924347409),true], null);
} else {
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),ret_val,new cljs.core.Keyword(null,"repr","repr",669525472),ret_repr,new cljs.core.Keyword(null,"promise?","promise?",-1924347409),keechma.toolbox.pipeline.core.is_promise_QMARK_.call(null,ret_val)], null);
}
}catch (e25063){var err = e25063;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("keechma.toolbox.pipeline.core","pipeline-error","keechma.toolbox.pipeline.core/pipeline-error",446844314),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(err.data))){
throw err;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),keechma.toolbox.pipeline.core.process_error.call(null,err),new cljs.core.Keyword(null,"promise?","promise?",-1924347409),false], null);
}
}});
keechma.toolbox.pipeline.core.extract_nil = (function keechma$toolbox$pipeline$core$extract_nil(value){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("keechma.toolbox.pipeline.core","nil","keechma.toolbox.pipeline.core/nil",-1518367909),value)){
return null;
} else {
return value;
}
});
keechma.toolbox.pipeline.core.pending_and_cancelable_QMARK_ = (function keechma$toolbox$pipeline$core$pending_and_cancelable_QMARK_(promise){
var and__8904__auto__ = promesa.core.pending_QMARK_.call(null,promise);
if(cljs.core.truth_(and__8904__auto__)){
return cljs.core.fn_QMARK_.call(null,promise.cancel);
} else {
return and__8904__auto__;
}
});
keechma.toolbox.pipeline.core.call_sideffect = (function keechma$toolbox$pipeline$core$call_sideffect(sideffect,ctrl,app_db_atom){
try{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),keechma.toolbox.pipeline.core.call_BANG_.call(null,sideffect,ctrl,app_db_atom),new cljs.core.Keyword(null,"error?","error?",-460689159),false], null);
}catch (e25064){var err = e25064;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),err,new cljs.core.Keyword(null,"error?","error?",-460689159),true], null);
}});
keechma.toolbox.pipeline.core.run_pipeline = (function keechma$toolbox$pipeline$core$run_pipeline(pipeline,ctrl,app_db_atom,value){
var map__25065 = pipeline;
var map__25065__$1 = ((((!((map__25065 == null)))?((((map__25065.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25065.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25065):map__25065);
var begin = cljs.core.get.call(null,map__25065__$1,new cljs.core.Keyword(null,"begin","begin",-319034319));
var rescue = cljs.core.get.call(null,map__25065__$1,new cljs.core.Keyword(null,"rescue","rescue",1135767523));
var current_promise = cljs.core.atom.call(null,null);
var context = keechma.controller.context.call(null,ctrl);
return promesa.core.promise.call(null,((function (map__25065,map__25065__$1,begin,rescue,current_promise,context){
return (function (resolve,reject,on_cancel){
if(cljs.core.fn_QMARK_.call(null,on_cancel)){
on_cancel.call(null,((function (map__25065,map__25065__$1,begin,rescue,current_promise,context){
return (function (){
var c = cljs.core.deref.call(null,current_promise);
if(cljs.core.truth_(keechma.toolbox.pipeline.core.pending_and_cancelable_QMARK_.call(null,c))){
return c.cancel();
} else {
return null;
}
});})(map__25065,map__25065__$1,begin,rescue,current_promise,context))
);
} else {
}

var c__17808__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17808__auto__,map__25065,map__25065__$1,begin,rescue,current_promise,context){
return (function (){
var f__17809__auto__ = (function (){var switch__17718__auto__ = ((function (c__17808__auto__,map__25065,map__25065__$1,begin,rescue,current_promise,context){
return (function (state_25273){
var state_val_25274 = (state_25273[(1)]);
if((state_val_25274 === (65))){
var inst_25206 = (state_25273[(2)]);
var state_25273__$1 = state_25273;
if(cljs.core.truth_(inst_25206)){
var statearr_25275_25423 = state_25273__$1;
(statearr_25275_25423[(1)] = (66));

} else {
var statearr_25276_25424 = state_25273__$1;
(statearr_25276_25424[(1)] = (67));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (70))){
var state_25273__$1 = state_25273;
var statearr_25277_25425 = state_25273__$1;
(statearr_25277_25425[(2)] = null);

(statearr_25277_25425[(1)] = (71));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (62))){
var inst_25200 = (state_25273[(2)]);
var state_25273__$1 = state_25273;
var statearr_25278_25426 = state_25273__$1;
(statearr_25278_25426[(2)] = inst_25200);

(statearr_25278_25426[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (74))){
var inst_25265 = (state_25273[(2)]);
var state_25273__$1 = state_25273;
var statearr_25279_25427 = state_25273__$1;
(statearr_25279_25427[(2)] = inst_25265);

(statearr_25279_25427[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (7))){
var inst_25079 = (state_25273[(7)]);
var inst_25084 = inst_25079.cljs$lang$protocol_mask$partition0$;
var inst_25085 = (inst_25084 & (64));
var inst_25086 = inst_25079.cljs$core$ISeq$;
var inst_25087 = (cljs.core.PROTOCOL_SENTINEL === inst_25086);
var inst_25088 = (inst_25085) || (inst_25087);
var state_25273__$1 = state_25273;
if(cljs.core.truth_(inst_25088)){
var statearr_25280_25428 = state_25273__$1;
(statearr_25280_25428[(1)] = (10));

} else {
var statearr_25281_25429 = state_25273__$1;
(statearr_25281_25429[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (59))){
var inst_25219 = (state_25273[(2)]);
var state_25273__$1 = state_25273;
var statearr_25282_25430 = state_25273__$1;
(statearr_25282_25430[(2)] = inst_25219);

(statearr_25282_25430[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (86))){
var inst_25245 = (state_25273[(2)]);
var state_25273__$1 = state_25273;
if(cljs.core.truth_(inst_25245)){
var statearr_25283_25431 = state_25273__$1;
(statearr_25283_25431[(1)] = (87));

} else {
var statearr_25284_25432 = state_25273__$1;
(statearr_25284_25432[(1)] = (88));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (20))){
var inst_25101 = (state_25273[(8)]);
var inst_25113 = inst_25101.cljs$lang$protocol_mask$partition$;
var inst_25114 = (!inst_25113);
var state_25273__$1 = state_25273;
if(cljs.core.truth_(inst_25114)){
var statearr_25285_25433 = state_25273__$1;
(statearr_25285_25433[(1)] = (22));

} else {
var statearr_25286_25434 = state_25273__$1;
(statearr_25286_25434[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (72))){
var inst_25223 = resolve.call(null,new cljs.core.Keyword("keechma.toolbox.pipeline.core","break","keechma.toolbox.pipeline.core/break",-1503986725));
var state_25273__$1 = state_25273;
var statearr_25288_25435 = state_25273__$1;
(statearr_25288_25435[(2)] = inst_25223);

(statearr_25288_25435[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (58))){
var inst_25179 = (state_25273[(9)]);
var state_25273__$1 = state_25273;
if(cljs.core.truth_(inst_25179)){
var statearr_25289_25436 = state_25273__$1;
(statearr_25289_25436[(1)] = (63));

} else {
var statearr_25290_25437 = state_25273__$1;
(statearr_25290_25437[(1)] = (64));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (60))){
var inst_25069 = (state_25273[(10)]);
var inst_25178 = (state_25273[(11)]);
var tmp25287 = inst_25069;
var inst_25067 = new cljs.core.Keyword(null,"rescue","rescue",1135767523);
var inst_25068 = rescue;
var inst_25069__$1 = tmp25287;
var inst_25070 = inst_25178;
var state_25273__$1 = (function (){var statearr_25291 = state_25273;
(statearr_25291[(10)] = inst_25069__$1);

(statearr_25291[(12)] = inst_25068);

(statearr_25291[(13)] = inst_25067);

(statearr_25291[(14)] = inst_25070);

return statearr_25291;
})();
var statearr_25292_25438 = state_25273__$1;
(statearr_25292_25438[(2)] = null);

(statearr_25292_25438[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (27))){
var inst_25102 = (state_25273[(15)]);
var inst_25130 = (state_25273[(2)]);
var state_25273__$1 = (function (){var statearr_25296 = state_25273;
(statearr_25296[(16)] = inst_25130);

return statearr_25296;
})();
if(cljs.core.truth_(inst_25102)){
var statearr_25297_25439 = state_25273__$1;
(statearr_25297_25439[(1)] = (28));

} else {
var statearr_25298_25440 = state_25273__$1;
(statearr_25298_25440[(1)] = (29));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (1))){
var inst_25067 = new cljs.core.Keyword(null,"begin","begin",-319034319);
var inst_25068 = begin;
var inst_25069 = value;
var inst_25070 = null;
var state_25273__$1 = (function (){var statearr_25299 = state_25273;
(statearr_25299[(10)] = inst_25069);

(statearr_25299[(12)] = inst_25068);

(statearr_25299[(13)] = inst_25067);

(statearr_25299[(14)] = inst_25070);

return statearr_25299;
})();
var statearr_25300_25441 = state_25273__$1;
(statearr_25300_25441[(2)] = null);

(statearr_25300_25441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (69))){
var inst_25069 = (state_25273[(10)]);
var inst_25068 = (state_25273[(12)]);
var inst_25067 = (state_25273[(13)]);
var inst_25070 = (state_25273[(14)]);
var inst_25211 = cljs.core.rest.call(null,inst_25068);
var tmp25293 = inst_25069;
var tmp25294 = inst_25067;
var tmp25295 = inst_25070;
var inst_25067__$1 = tmp25294;
var inst_25068__$1 = inst_25211;
var inst_25069__$1 = tmp25293;
var inst_25070__$1 = tmp25295;
var state_25273__$1 = (function (){var statearr_25301 = state_25273;
(statearr_25301[(10)] = inst_25069__$1);

(statearr_25301[(12)] = inst_25068__$1);

(statearr_25301[(13)] = inst_25067__$1);

(statearr_25301[(14)] = inst_25070__$1);

return statearr_25301;
})();
var statearr_25302_25442 = state_25273__$1;
(statearr_25302_25442[(2)] = null);

(statearr_25302_25442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (24))){
var inst_25119 = (state_25273[(2)]);
var state_25273__$1 = state_25273;
var statearr_25303_25443 = state_25273__$1;
(statearr_25303_25443[(2)] = inst_25119);

(statearr_25303_25443[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (55))){
var inst_25179 = (state_25273[(9)]);
var state_25273__$1 = state_25273;
var statearr_25304_25444 = state_25273__$1;
(statearr_25304_25444[(2)] = inst_25179);

(statearr_25304_25444[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (85))){
var inst_25139 = (state_25273[(17)]);
var state_25273__$1 = state_25273;
var statearr_25305_25445 = state_25273__$1;
(statearr_25305_25445[(2)] = inst_25139);

(statearr_25305_25445[(1)] = (86));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (39))){
var inst_25138 = (state_25273[(18)]);
var inst_25221 = cljs.core._EQ_.call(null,new cljs.core.Keyword("keechma.toolbox.pipeline.core","break","keechma.toolbox.pipeline.core/break",-1503986725),inst_25138);
var state_25273__$1 = state_25273;
if(inst_25221){
var statearr_25306_25446 = state_25273__$1;
(statearr_25306_25446[(1)] = (72));

} else {
var statearr_25307_25447 = state_25273__$1;
(statearr_25307_25447[(1)] = (73));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (88))){
var state_25273__$1 = state_25273;
var statearr_25308_25448 = state_25273__$1;
(statearr_25308_25448[(1)] = (90));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (46))){
var inst_25169 = (state_25273[(2)]);
var state_25273__$1 = state_25273;
var statearr_25310_25449 = state_25273__$1;
(statearr_25310_25449[(2)] = inst_25169);

(statearr_25310_25449[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (4))){
var inst_25069 = (state_25273[(10)]);
var inst_25075 = resolve.call(null,inst_25069);
var state_25273__$1 = state_25273;
var statearr_25313_25450 = state_25273__$1;
(statearr_25313_25450[(2)] = inst_25075);

(statearr_25313_25450[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (77))){
var inst_25229 = (state_25273[(2)]);
var state_25273__$1 = state_25273;
if(cljs.core.truth_(inst_25229)){
var statearr_25314_25451 = state_25273__$1;
(statearr_25314_25451[(1)] = (78));

} else {
var statearr_25315_25452 = state_25273__$1;
(statearr_25315_25452[(1)] = (79));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (95))){
var inst_25250 = (state_25273[(19)]);
var inst_25067 = (state_25273[(13)]);
var inst_25070 = (state_25273[(14)]);
var inst_25255 = (state_25273[(2)]);
var tmp25311 = inst_25067;
var tmp25312 = inst_25070;
var inst_25067__$1 = tmp25311;
var inst_25068 = inst_25250;
var inst_25069 = inst_25255;
var inst_25070__$1 = tmp25312;
var state_25273__$1 = (function (){var statearr_25316 = state_25273;
(statearr_25316[(10)] = inst_25069);

(statearr_25316[(12)] = inst_25068);

(statearr_25316[(13)] = inst_25067__$1);

(statearr_25316[(14)] = inst_25070__$1);

return statearr_25316;
})();
var statearr_25317_25453 = state_25273__$1;
(statearr_25317_25453[(2)] = null);

(statearr_25317_25453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (54))){
var inst_25067 = (state_25273[(13)]);
var inst_25189 = cljs.core._EQ_.call(null,inst_25067,new cljs.core.Keyword(null,"begin","begin",-319034319));
var state_25273__$1 = state_25273;
var statearr_25318_25454 = state_25273__$1;
(statearr_25318_25454[(2)] = inst_25189);

(statearr_25318_25454[(1)] = (56));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (92))){
var inst_25259 = (state_25273[(2)]);
var state_25273__$1 = state_25273;
var statearr_25319_25455 = state_25273__$1;
(statearr_25319_25455[(2)] = inst_25259);

(statearr_25319_25455[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (15))){
var inst_25101 = (state_25273[(8)]);
var inst_25100 = (state_25273[(2)]);
var inst_25101__$1 = cljs.core.get.call(null,inst_25100,new cljs.core.Keyword(null,"value","value",305978217));
var inst_25102 = cljs.core.get.call(null,inst_25100,new cljs.core.Keyword(null,"promise?","promise?",-1924347409));
var inst_25103 = cljs.core.get.call(null,inst_25100,new cljs.core.Keyword(null,"repr","repr",669525472));
var inst_25105 = (inst_25101__$1 == null);
var inst_25106 = cljs.core.not.call(null,inst_25105);
var state_25273__$1 = (function (){var statearr_25320 = state_25273;
(statearr_25320[(8)] = inst_25101__$1);

(statearr_25320[(20)] = inst_25103);

(statearr_25320[(15)] = inst_25102);

return statearr_25320;
})();
if(inst_25106){
var statearr_25321_25456 = state_25273__$1;
(statearr_25321_25456[(1)] = (16));

} else {
var statearr_25322_25457 = state_25273__$1;
(statearr_25322_25457[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (48))){
var inst_25156 = (state_25273[(21)]);
var state_25273__$1 = state_25273;
var statearr_25323_25458 = state_25273__$1;
(statearr_25323_25458[(2)] = inst_25156);

(statearr_25323_25458[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (50))){
var inst_25178 = (state_25273[(11)]);
var inst_25182 = keechma.toolbox.pipeline.core.promise__GT_chan.call(null,inst_25178);
var state_25273__$1 = state_25273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25273__$1,(53),inst_25182);
} else {
if((state_val_25274 === (75))){
var inst_25067 = (state_25273[(13)]);
var inst_25226 = cljs.core._EQ_.call(null,inst_25067,new cljs.core.Keyword(null,"begin","begin",-319034319));
var state_25273__$1 = state_25273;
var statearr_25324_25459 = state_25273__$1;
(statearr_25324_25459[(2)] = inst_25226);

(statearr_25324_25459[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (21))){
var inst_25121 = (state_25273[(2)]);
var state_25273__$1 = state_25273;
var statearr_25325_25460 = state_25273__$1;
(statearr_25325_25460[(2)] = inst_25121);

(statearr_25325_25460[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (31))){
var inst_25134 = (state_25273[(2)]);
var inst_25135 = keechma.toolbox.pipeline.core.extract_nil.call(null,inst_25134);
var state_25273__$1 = state_25273;
var statearr_25326_25461 = state_25273__$1;
(statearr_25326_25461[(2)] = inst_25135);

(statearr_25326_25461[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (32))){
var inst_25125 = (state_25273[(22)]);
var state_25273__$1 = state_25273;
var statearr_25327_25462 = state_25273__$1;
(statearr_25327_25462[(2)] = inst_25125);

(statearr_25327_25462[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (40))){
var inst_25267 = (state_25273[(2)]);
var state_25273__$1 = state_25273;
var statearr_25328_25463 = state_25273__$1;
(statearr_25328_25463[(2)] = inst_25267);

(statearr_25328_25463[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (91))){
var state_25273__$1 = state_25273;
var statearr_25329_25464 = state_25273__$1;
(statearr_25329_25464[(2)] = null);

(statearr_25329_25464[(1)] = (92));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (56))){
var inst_25192 = (state_25273[(2)]);
var state_25273__$1 = state_25273;
if(cljs.core.truth_(inst_25192)){
var statearr_25330_25465 = state_25273__$1;
(statearr_25330_25465[(1)] = (57));

} else {
var statearr_25331_25466 = state_25273__$1;
(statearr_25331_25466[(1)] = (58));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (33))){
var inst_25102 = (state_25273[(15)]);
var state_25273__$1 = state_25273;
var statearr_25332_25467 = state_25273__$1;
(statearr_25332_25467[(2)] = inst_25102);

(statearr_25332_25467[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (13))){
var inst_25079 = (state_25273[(7)]);
var inst_25097 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25079);
var state_25273__$1 = state_25273;
var statearr_25333_25468 = state_25273__$1;
(statearr_25333_25468[(2)] = inst_25097);

(statearr_25333_25468[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (22))){
var inst_25101 = (state_25273[(8)]);
var inst_25116 = cljs.core.native_satisfies_QMARK_.call(null,keechma.toolbox.pipeline.core.ISideffect,inst_25101);
var state_25273__$1 = state_25273;
var statearr_25334_25469 = state_25273__$1;
(statearr_25334_25469[(2)] = inst_25116);

(statearr_25334_25469[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (90))){
var inst_25138 = (state_25273[(18)]);
var inst_25068 = (state_25273[(12)]);
var inst_25250 = cljs.core.rest.call(null,inst_25068);
var inst_25251 = (inst_25138 == null);
var state_25273__$1 = (function (){var statearr_25335 = state_25273;
(statearr_25335[(19)] = inst_25250);

return statearr_25335;
})();
if(cljs.core.truth_(inst_25251)){
var statearr_25336_25470 = state_25273__$1;
(statearr_25336_25470[(1)] = (93));

} else {
var statearr_25337_25471 = state_25273__$1;
(statearr_25337_25471[(1)] = (94));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (36))){
var state_25273__$1 = state_25273;
var statearr_25338_25472 = state_25273__$1;
(statearr_25338_25472[(2)] = null);

(statearr_25338_25472[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (41))){
var inst_25156 = (state_25273[(21)]);
var inst_25161 = inst_25156.cljs$lang$protocol_mask$partition0$;
var inst_25162 = (inst_25161 & (64));
var inst_25163 = inst_25156.cljs$core$ISeq$;
var inst_25164 = (cljs.core.PROTOCOL_SENTINEL === inst_25163);
var inst_25165 = (inst_25162) || (inst_25164);
var state_25273__$1 = state_25273;
if(cljs.core.truth_(inst_25165)){
var statearr_25339_25473 = state_25273__$1;
(statearr_25339_25473[(1)] = (44));

} else {
var statearr_25340_25474 = state_25273__$1;
(statearr_25340_25474[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (89))){
var inst_25261 = (state_25273[(2)]);
var state_25273__$1 = state_25273;
var statearr_25341_25475 = state_25273__$1;
(statearr_25341_25475[(2)] = inst_25261);

(statearr_25341_25475[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (43))){
var inst_25172 = (state_25273[(2)]);
var state_25273__$1 = state_25273;
if(cljs.core.truth_(inst_25172)){
var statearr_25342_25476 = state_25273__$1;
(statearr_25342_25476[(1)] = (47));

} else {
var statearr_25343_25477 = state_25273__$1;
(statearr_25343_25477[(1)] = (48));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (61))){
var inst_25178 = (state_25273[(11)]);
var inst_25198 = reject.call(null,inst_25178);
var state_25273__$1 = state_25273;
var statearr_25344_25478 = state_25273__$1;
(statearr_25344_25478[(2)] = inst_25198);

(statearr_25344_25478[(1)] = (62));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (29))){
var inst_25101 = (state_25273[(8)]);
var state_25273__$1 = state_25273;
var statearr_25345_25479 = state_25273__$1;
(statearr_25345_25479[(2)] = inst_25101);

(statearr_25345_25479[(1)] = (30));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (44))){
var state_25273__$1 = state_25273;
var statearr_25346_25480 = state_25273__$1;
(statearr_25346_25480[(2)] = true);

(statearr_25346_25480[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (93))){
var inst_25069 = (state_25273[(10)]);
var state_25273__$1 = state_25273;
var statearr_25347_25481 = state_25273__$1;
(statearr_25347_25481[(2)] = inst_25069);

(statearr_25347_25481[(1)] = (95));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (6))){
var inst_25269 = (state_25273[(2)]);
var state_25273__$1 = state_25273;
var statearr_25348_25482 = state_25273__$1;
(statearr_25348_25482[(2)] = inst_25269);

(statearr_25348_25482[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (28))){
var inst_25101 = (state_25273[(8)]);
var inst_25132 = keechma.toolbox.pipeline.core.promise__GT_chan.call(null,inst_25101);
var state_25273__$1 = state_25273;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25273__$1,(31),inst_25132);
} else {
if((state_val_25274 === (64))){
var inst_25179 = (state_25273[(9)]);
var state_25273__$1 = state_25273;
var statearr_25349_25483 = state_25273__$1;
(statearr_25349_25483[(2)] = inst_25179);

(statearr_25349_25483[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (51))){
var inst_25178 = (state_25273[(11)]);
var state_25273__$1 = state_25273;
var statearr_25350_25484 = state_25273__$1;
(statearr_25350_25484[(2)] = inst_25178);

(statearr_25350_25484[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (25))){
var inst_25101 = (state_25273[(8)]);
var inst_25127 = cljs.core.reset_BANG_.call(null,current_promise,inst_25101);
var state_25273__$1 = state_25273;
var statearr_25351_25485 = state_25273__$1;
(statearr_25351_25485[(2)] = inst_25127);

(statearr_25351_25485[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (34))){
var inst_25143 = (state_25273[(2)]);
var state_25273__$1 = state_25273;
if(cljs.core.truth_(inst_25143)){
var statearr_25352_25486 = state_25273__$1;
(statearr_25352_25486[(1)] = (35));

} else {
var statearr_25353_25487 = state_25273__$1;
(statearr_25353_25487[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (17))){
var inst_25101 = (state_25273[(8)]);
var inst_25123 = cljs.core.native_satisfies_QMARK_.call(null,keechma.toolbox.pipeline.core.ISideffect,inst_25101);
var state_25273__$1 = state_25273;
var statearr_25354_25488 = state_25273__$1;
(statearr_25354_25488[(2)] = inst_25123);

(statearr_25354_25488[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (3))){
var inst_25271 = (state_25273[(2)]);
var state_25273__$1 = state_25273;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25273__$1,inst_25271);
} else {
if((state_val_25274 === (12))){
var inst_25092 = (state_25273[(2)]);
var state_25273__$1 = state_25273;
var statearr_25355_25489 = state_25273__$1;
(statearr_25355_25489[(2)] = inst_25092);

(statearr_25355_25489[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (2))){
var inst_25068 = (state_25273[(12)]);
var inst_25072 = cljs.core.seq.call(null,inst_25068);
var inst_25073 = cljs.core.not.call(null,inst_25072);
var state_25273__$1 = state_25273;
if(inst_25073){
var statearr_25356_25490 = state_25273__$1;
(statearr_25356_25490[(1)] = (4));

} else {
var statearr_25357_25491 = state_25273__$1;
(statearr_25357_25491[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (66))){
var inst_25178 = (state_25273[(11)]);
var inst_25208 = reject.call(null,inst_25178);
var state_25273__$1 = state_25273;
var statearr_25358_25492 = state_25273__$1;
(statearr_25358_25492[(2)] = inst_25208);

(statearr_25358_25492[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (23))){
var state_25273__$1 = state_25273;
var statearr_25359_25493 = state_25273__$1;
(statearr_25359_25493[(2)] = false);

(statearr_25359_25493[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (47))){
var inst_25156 = (state_25273[(21)]);
var inst_25174 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25156);
var state_25273__$1 = state_25273;
var statearr_25360_25494 = state_25273__$1;
(statearr_25360_25494[(2)] = inst_25174);

(statearr_25360_25494[(1)] = (49));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (35))){
var inst_25145 = new cljs.core.Keyword(null,"async-sideffect","async-sideffect",-972592540).cljs$core$IFn$_invoke$arity$1(keechma.toolbox.pipeline.core.pipeline_errors);
var inst_25146 = [new cljs.core.Keyword(null,"type","type",1174270348)];
var inst_25147 = [new cljs.core.Keyword("keechma.toolbox.pipeline.core","pipeline-error","keechma.toolbox.pipeline.core/pipeline-error",446844314)];
var inst_25148 = cljs.core.PersistentHashMap.fromArrays(inst_25146,inst_25147);
var inst_25149 = cljs.core.ex_info.call(null,inst_25145,inst_25148);
var inst_25150 = (function(){throw inst_25149})();
var state_25273__$1 = state_25273;
var statearr_25361_25495 = state_25273__$1;
(statearr_25361_25495[(2)] = inst_25150);

(statearr_25361_25495[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (82))){
var inst_25138 = (state_25273[(18)]);
var inst_25235 = reject.call(null,inst_25138);
var state_25273__$1 = state_25273;
var statearr_25362_25496 = state_25273__$1;
(statearr_25362_25496[(2)] = inst_25235);

(statearr_25362_25496[(1)] = (83));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (76))){
var inst_25139 = (state_25273[(17)]);
var state_25273__$1 = state_25273;
var statearr_25363_25497 = state_25273__$1;
(statearr_25363_25497[(2)] = inst_25139);

(statearr_25363_25497[(1)] = (77));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (19))){
var state_25273__$1 = state_25273;
var statearr_25364_25498 = state_25273__$1;
(statearr_25364_25498[(2)] = true);

(statearr_25364_25498[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (57))){
var inst_25194 = cljs.core.seq.call(null,rescue);
var state_25273__$1 = state_25273;
if(inst_25194){
var statearr_25365_25499 = state_25273__$1;
(statearr_25365_25499[(1)] = (60));

} else {
var statearr_25366_25500 = state_25273__$1;
(statearr_25366_25500[(1)] = (61));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (68))){
var inst_25217 = (state_25273[(2)]);
var state_25273__$1 = state_25273;
var statearr_25367_25501 = state_25273__$1;
(statearr_25367_25501[(2)] = inst_25217);

(statearr_25367_25501[(1)] = (59));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (11))){
var state_25273__$1 = state_25273;
var statearr_25368_25502 = state_25273__$1;
(statearr_25368_25502[(2)] = false);

(statearr_25368_25502[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (9))){
var inst_25095 = (state_25273[(2)]);
var state_25273__$1 = state_25273;
if(cljs.core.truth_(inst_25095)){
var statearr_25369_25503 = state_25273__$1;
(statearr_25369_25503[(1)] = (13));

} else {
var statearr_25370_25504 = state_25273__$1;
(statearr_25370_25504[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (5))){
var inst_25069 = (state_25273[(10)]);
var inst_25079 = (state_25273[(7)]);
var inst_25068 = (state_25273[(12)]);
var inst_25070 = (state_25273[(14)]);
var inst_25078 = cljs.core.first.call(null,inst_25068);
var inst_25079__$1 = keechma.toolbox.pipeline.core.action_ret_val.call(null,inst_25078,ctrl,context,app_db_atom,inst_25069,inst_25070);
var inst_25081 = (inst_25079__$1 == null);
var inst_25082 = cljs.core.not.call(null,inst_25081);
var state_25273__$1 = (function (){var statearr_25371 = state_25273;
(statearr_25371[(7)] = inst_25079__$1);

return statearr_25371;
})();
if(inst_25082){
var statearr_25372_25505 = state_25273__$1;
(statearr_25372_25505[(1)] = (7));

} else {
var statearr_25373_25506 = state_25273__$1;
(statearr_25373_25506[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (83))){
var inst_25237 = (state_25273[(2)]);
var state_25273__$1 = state_25273;
var statearr_25374_25507 = state_25273__$1;
(statearr_25374_25507[(2)] = inst_25237);

(statearr_25374_25507[(1)] = (80));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (14))){
var inst_25079 = (state_25273[(7)]);
var state_25273__$1 = state_25273;
var statearr_25375_25508 = state_25273__$1;
(statearr_25375_25508[(2)] = inst_25079);

(statearr_25375_25508[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (45))){
var state_25273__$1 = state_25273;
var statearr_25376_25509 = state_25273__$1;
(statearr_25376_25509[(2)] = false);

(statearr_25376_25509[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (53))){
var inst_25184 = (state_25273[(2)]);
var state_25273__$1 = state_25273;
var statearr_25377_25510 = state_25273__$1;
(statearr_25377_25510[(2)] = inst_25184);

(statearr_25377_25510[(1)] = (52));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (78))){
var inst_25231 = cljs.core.seq.call(null,rescue);
var state_25273__$1 = state_25273;
if(inst_25231){
var statearr_25378_25511 = state_25273__$1;
(statearr_25378_25511[(1)] = (81));

} else {
var statearr_25379_25512 = state_25273__$1;
(statearr_25379_25512[(1)] = (82));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (26))){
var state_25273__$1 = state_25273;
var statearr_25381_25513 = state_25273__$1;
(statearr_25381_25513[(2)] = null);

(statearr_25381_25513[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (16))){
var inst_25101 = (state_25273[(8)]);
var inst_25108 = inst_25101.keechma$toolbox$pipeline$core$ISideffect$;
var inst_25109 = (cljs.core.PROTOCOL_SENTINEL === inst_25108);
var inst_25110 = (false) || (inst_25109);
var state_25273__$1 = state_25273;
if(cljs.core.truth_(inst_25110)){
var statearr_25382_25514 = state_25273__$1;
(statearr_25382_25514[(1)] = (19));

} else {
var statearr_25383_25515 = state_25273__$1;
(statearr_25383_25515[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (81))){
var inst_25069 = (state_25273[(10)]);
var inst_25138 = (state_25273[(18)]);
var tmp25380 = inst_25069;
var inst_25067 = new cljs.core.Keyword(null,"rescue","rescue",1135767523);
var inst_25068 = rescue;
var inst_25069__$1 = tmp25380;
var inst_25070 = inst_25138;
var state_25273__$1 = (function (){var statearr_25384 = state_25273;
(statearr_25384[(10)] = inst_25069__$1);

(statearr_25384[(12)] = inst_25068);

(statearr_25384[(13)] = inst_25067);

(statearr_25384[(14)] = inst_25070);

return statearr_25384;
})();
var statearr_25385_25516 = state_25273__$1;
(statearr_25385_25516[(2)] = null);

(statearr_25385_25516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (79))){
var inst_25139 = (state_25273[(17)]);
var state_25273__$1 = state_25273;
if(cljs.core.truth_(inst_25139)){
var statearr_25386_25517 = state_25273__$1;
(statearr_25386_25517[(1)] = (84));

} else {
var statearr_25387_25518 = state_25273__$1;
(statearr_25387_25518[(1)] = (85));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (38))){
var inst_25156 = (state_25273[(21)]);
var inst_25138 = (state_25273[(18)]);
var inst_25156__$1 = keechma.toolbox.pipeline.core.call_sideffect.call(null,inst_25138,ctrl,app_db_atom);
var inst_25158 = (inst_25156__$1 == null);
var inst_25159 = cljs.core.not.call(null,inst_25158);
var state_25273__$1 = (function (){var statearr_25388 = state_25273;
(statearr_25388[(21)] = inst_25156__$1);

return statearr_25388;
})();
if(inst_25159){
var statearr_25389_25519 = state_25273__$1;
(statearr_25389_25519[(1)] = (41));

} else {
var statearr_25390_25520 = state_25273__$1;
(statearr_25390_25520[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (87))){
var inst_25070 = (state_25273[(14)]);
var inst_25247 = reject.call(null,inst_25070);
var state_25273__$1 = state_25273;
var statearr_25391_25521 = state_25273__$1;
(statearr_25391_25521[(2)] = inst_25247);

(statearr_25391_25521[(1)] = (89));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (30))){
var inst_25138 = (state_25273[(18)]);
var inst_25102 = (state_25273[(15)]);
var inst_25138__$1 = (state_25273[(2)]);
var inst_25139 = (inst_25138__$1 instanceof keechma.toolbox.pipeline.core.Error);
var state_25273__$1 = (function (){var statearr_25392 = state_25273;
(statearr_25392[(18)] = inst_25138__$1);

(statearr_25392[(17)] = inst_25139);

return statearr_25392;
})();
if(cljs.core.truth_(inst_25102)){
var statearr_25393_25522 = state_25273__$1;
(statearr_25393_25522[(1)] = (32));

} else {
var statearr_25394_25523 = state_25273__$1;
(statearr_25394_25523[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (73))){
var inst_25139 = (state_25273[(17)]);
var state_25273__$1 = state_25273;
if(cljs.core.truth_(inst_25139)){
var statearr_25395_25524 = state_25273__$1;
(statearr_25395_25524[(1)] = (75));

} else {
var statearr_25396_25525 = state_25273__$1;
(statearr_25396_25525[(1)] = (76));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (10))){
var state_25273__$1 = state_25273;
var statearr_25397_25526 = state_25273__$1;
(statearr_25397_25526[(2)] = true);

(statearr_25397_25526[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (18))){
var inst_25102 = (state_25273[(15)]);
var inst_25125 = (state_25273[(2)]);
var state_25273__$1 = (function (){var statearr_25398 = state_25273;
(statearr_25398[(22)] = inst_25125);

return statearr_25398;
})();
if(cljs.core.truth_(inst_25102)){
var statearr_25399_25527 = state_25273__$1;
(statearr_25399_25527[(1)] = (25));

} else {
var statearr_25400_25528 = state_25273__$1;
(statearr_25400_25528[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (52))){
var inst_25179 = (state_25273[(9)]);
var inst_25187 = (state_25273[(2)]);
var state_25273__$1 = (function (){var statearr_25401 = state_25273;
(statearr_25401[(23)] = inst_25187);

return statearr_25401;
})();
if(cljs.core.truth_(inst_25179)){
var statearr_25402_25529 = state_25273__$1;
(statearr_25402_25529[(1)] = (54));

} else {
var statearr_25403_25530 = state_25273__$1;
(statearr_25403_25530[(1)] = (55));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (67))){
var state_25273__$1 = state_25273;
var statearr_25404_25531 = state_25273__$1;
(statearr_25404_25531[(1)] = (69));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (71))){
var inst_25215 = (state_25273[(2)]);
var state_25273__$1 = state_25273;
var statearr_25406_25532 = state_25273__$1;
(statearr_25406_25532[(2)] = inst_25215);

(statearr_25406_25532[(1)] = (68));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (42))){
var state_25273__$1 = state_25273;
var statearr_25407_25533 = state_25273__$1;
(statearr_25407_25533[(2)] = false);

(statearr_25407_25533[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (80))){
var inst_25263 = (state_25273[(2)]);
var state_25273__$1 = state_25273;
var statearr_25408_25534 = state_25273__$1;
(statearr_25408_25534[(2)] = inst_25263);

(statearr_25408_25534[(1)] = (74));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (37))){
var inst_25125 = (state_25273[(22)]);
var inst_25153 = (state_25273[(2)]);
var state_25273__$1 = (function (){var statearr_25409 = state_25273;
(statearr_25409[(24)] = inst_25153);

return statearr_25409;
})();
if(cljs.core.truth_(inst_25125)){
var statearr_25410_25535 = state_25273__$1;
(statearr_25410_25535[(1)] = (38));

} else {
var statearr_25411_25536 = state_25273__$1;
(statearr_25411_25536[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (63))){
var inst_25067 = (state_25273[(13)]);
var inst_25203 = cljs.core._EQ_.call(null,inst_25067,new cljs.core.Keyword(null,"rescue","rescue",1135767523));
var state_25273__$1 = state_25273;
var statearr_25412_25537 = state_25273__$1;
(statearr_25412_25537[(2)] = inst_25203);

(statearr_25412_25537[(1)] = (65));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (94))){
var inst_25138 = (state_25273[(18)]);
var state_25273__$1 = state_25273;
var statearr_25413_25538 = state_25273__$1;
(statearr_25413_25538[(2)] = inst_25138);

(statearr_25413_25538[(1)] = (95));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (8))){
var state_25273__$1 = state_25273;
var statearr_25414_25539 = state_25273__$1;
(statearr_25414_25539[(2)] = false);

(statearr_25414_25539[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (49))){
var inst_25178 = (state_25273[(11)]);
var inst_25177 = (state_25273[(2)]);
var inst_25178__$1 = cljs.core.get.call(null,inst_25177,new cljs.core.Keyword(null,"value","value",305978217));
var inst_25179 = cljs.core.get.call(null,inst_25177,new cljs.core.Keyword(null,"error?","error?",-460689159));
var inst_25180 = keechma.toolbox.pipeline.core.is_promise_QMARK_.call(null,inst_25178__$1);
var state_25273__$1 = (function (){var statearr_25415 = state_25273;
(statearr_25415[(11)] = inst_25178__$1);

(statearr_25415[(9)] = inst_25179);

return statearr_25415;
})();
if(cljs.core.truth_(inst_25180)){
var statearr_25416_25540 = state_25273__$1;
(statearr_25416_25540[(1)] = (50));

} else {
var statearr_25417_25541 = state_25273__$1;
(statearr_25417_25541[(1)] = (51));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25274 === (84))){
var inst_25138 = (state_25273[(18)]);
var inst_25067 = (state_25273[(13)]);
var inst_25070 = (state_25273[(14)]);
var inst_25240 = cljs.core._EQ_.call(null,inst_25067,new cljs.core.Keyword(null,"rescue","rescue",1135767523));
var inst_25241 = cljs.core.not_EQ_.call(null,inst_25070,inst_25138);
var inst_25242 = (inst_25240) && (inst_25241);
var state_25273__$1 = state_25273;
var statearr_25418_25542 = state_25273__$1;
(statearr_25418_25542[(2)] = inst_25242);

(statearr_25418_25542[(1)] = (86));


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
}
}
}
});})(c__17808__auto__,map__25065,map__25065__$1,begin,rescue,current_promise,context))
;
return ((function (switch__17718__auto__,c__17808__auto__,map__25065,map__25065__$1,begin,rescue,current_promise,context){
return (function() {
var keechma$toolbox$pipeline$core$run_pipeline_$_state_machine__17719__auto__ = null;
var keechma$toolbox$pipeline$core$run_pipeline_$_state_machine__17719__auto____0 = (function (){
var statearr_25419 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25419[(0)] = keechma$toolbox$pipeline$core$run_pipeline_$_state_machine__17719__auto__);

(statearr_25419[(1)] = (1));

return statearr_25419;
});
var keechma$toolbox$pipeline$core$run_pipeline_$_state_machine__17719__auto____1 = (function (state_25273){
while(true){
var ret_value__17720__auto__ = (function (){try{while(true){
var result__17721__auto__ = switch__17718__auto__.call(null,state_25273);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17721__auto__;
}
break;
}
}catch (e25420){if((e25420 instanceof Object)){
var ex__17722__auto__ = e25420;
var statearr_25421_25543 = state_25273;
(statearr_25421_25543[(5)] = ex__17722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25544 = state_25273;
state_25273 = G__25544;
continue;
} else {
return ret_value__17720__auto__;
}
break;
}
});
keechma$toolbox$pipeline$core$run_pipeline_$_state_machine__17719__auto__ = function(state_25273){
switch(arguments.length){
case 0:
return keechma$toolbox$pipeline$core$run_pipeline_$_state_machine__17719__auto____0.call(this);
case 1:
return keechma$toolbox$pipeline$core$run_pipeline_$_state_machine__17719__auto____1.call(this,state_25273);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
keechma$toolbox$pipeline$core$run_pipeline_$_state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$toolbox$pipeline$core$run_pipeline_$_state_machine__17719__auto____0;
keechma$toolbox$pipeline$core$run_pipeline_$_state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$toolbox$pipeline$core$run_pipeline_$_state_machine__17719__auto____1;
return keechma$toolbox$pipeline$core$run_pipeline_$_state_machine__17719__auto__;
})()
;})(switch__17718__auto__,c__17808__auto__,map__25065,map__25065__$1,begin,rescue,current_promise,context))
})();
var state__17810__auto__ = (function (){var statearr_25422 = f__17809__auto__.call(null);
(statearr_25422[(6)] = c__17808__auto__);

return statearr_25422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17810__auto__);
});})(c__17808__auto__,map__25065,map__25065__$1,begin,rescue,current_promise,context))
);

return c__17808__auto__;
});})(map__25065,map__25065__$1,begin,rescue,current_promise,context))
);
});
keechma.toolbox.pipeline.core.make_pipeline = (function keechma$toolbox$pipeline$core$make_pipeline(pipeline){
return cljs.core.with_meta.call(null,cljs.core.partial.call(null,keechma.toolbox.pipeline.core.run_pipeline,pipeline),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pipeline?","pipeline?",1488086785),true], null));
});
keechma.toolbox.pipeline.core.exclusive = (function keechma$toolbox$pipeline$core$exclusive(pipeline){
var current = cljs.core.atom.call(null,null);
return ((function (current){
return (function (ctrl,app_db_atom,value){
var temp__5457__auto___25545 = cljs.core.deref.call(null,current);
if(cljs.core.truth_(temp__5457__auto___25545)){
var c_25546 = temp__5457__auto___25545;
if(cljs.core.truth_(keechma.toolbox.pipeline.core.pending_and_cancelable_QMARK_.call(null,c_25546))){
c_25546.cancel();
} else {
}
} else {
}

return cljs.core.reset_BANG_.call(null,current,pipeline.call(null,ctrl,app_db_atom,value));
});
;})(current))
});
