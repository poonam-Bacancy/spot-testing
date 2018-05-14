// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('keechma.app_state.hashchange_router');
goog.require('cljs.core');
goog.require('keechma.app_state.core');
goog.require('router.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('goog.History');
keechma.app_state.hashchange_router.hashchange_listener = (function keechma$app_state$hashchange_router$hashchange_listener(routes,routes_chan,e){
var clean_route = cljs.core.subs.call(null,e.token,(1));
var route_params = router.core.url__GT_map.call(null,routes,clean_route);
return cljs.core.async.put_BANG_.call(null,routes_chan,route_params);
});
keechma.app_state.hashchange_router.get_history = (function keechma$app_state$hashchange_router$get_history(){
return (new goog.History(false,null,document.getElementById("history_state0"),document.getElementById("history_iframe0")));
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
 * @implements {keechma.app_state.core.IRouter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
keechma.app_state.hashchange_router.HashchangeRouter = (function (routes,routes_chan,hashchange_listener,app_db,__meta,__extmap,__hash){
this.routes = routes;
this.routes_chan = routes_chan;
this.hashchange_listener = hashchange_listener;
this.app_db = app_db;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9604__auto__,k__9605__auto__){
var self__ = this;
var this__9604__auto____$1 = this;
return this__9604__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9605__auto__,null);
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9606__auto__,k28351,else__9607__auto__){
var self__ = this;
var this__9606__auto____$1 = this;
var G__28355 = k28351;
var G__28355__$1 = (((G__28355 instanceof cljs.core.Keyword))?G__28355.fqn:null);
switch (G__28355__$1) {
case "routes":
return self__.routes;

break;
case "routes-chan":
return self__.routes_chan;

break;
case "hashchange-listener":
return self__.hashchange_listener;

break;
case "app-db":
return self__.app_db;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k28351,else__9607__auto__);

}
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9618__auto__,writer__9619__auto__,opts__9620__auto__){
var self__ = this;
var this__9618__auto____$1 = this;
var pr_pair__9621__auto__ = ((function (this__9618__auto____$1){
return (function (keyval__9622__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,cljs.core.pr_writer,""," ","",opts__9620__auto__,keyval__9622__auto__);
});})(this__9618__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,pr_pair__9621__auto__,"#keechma.app-state.hashchange-router.HashchangeRouter{",", ","}",opts__9620__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routes","routes",457900162),self__.routes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),self__.routes_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801),self__.hashchange_listener],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-db","app-db",865606302),self__.app_db],null))], null),self__.__extmap));
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__28350){
var self__ = this;
var G__28350__$1 = this;
return (new cljs.core.RecordIter((0),G__28350__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"routes","routes",457900162),new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801),new cljs.core.Keyword(null,"app-db","app-db",865606302)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9602__auto__){
var self__ = this;
var this__9602__auto____$1 = this;
return self__.__meta;
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9599__auto__){
var self__ = this;
var this__9599__auto____$1 = this;
return (new keechma.app_state.hashchange_router.HashchangeRouter(self__.routes,self__.routes_chan,self__.hashchange_listener,self__.app_db,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9608__auto__){
var self__ = this;
var this__9608__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.keechma$app_state$core$IRouter$ = cljs.core.PROTOCOL_SENTINEL;

keechma.app_state.hashchange_router.HashchangeRouter.prototype.keechma$app_state$core$IRouter$start_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var history = keechma.app_state.hashchange_router.get_history.call(null);
var current_route_params = router.core.url__GT_map.call(null,new cljs.core.Keyword(null,"routes","routes",457900162).cljs$core$IFn$_invoke$arity$1(this$__$1),cljs.core.subs.call(null,window.location.hash,(2)));
goog.events.listen(history,goog.history.EventType.NAVIGATE,new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801).cljs$core$IFn$_invoke$arity$1(this$__$1));

var G__28356_28361 = history;
G__28356_28361.setEnabled(true);


cljs.core.swap_BANG_.call(null,self__.app_db,cljs.core.assoc,new cljs.core.Keyword(null,"route","route",329891309),current_route_params);

return cljs.core.assoc.call(null,this$__$1,new cljs.core.Keyword(null,"history","history",-247395220),history);
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.keechma$app_state$core$IRouter$stop_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return goog.events.unlisten(new cljs.core.Keyword(null,"history","history",-247395220).cljs$core$IFn$_invoke$arity$1(this$__$1),goog.history.EventType.NAVIGATE,new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801).cljs$core$IFn$_invoke$arity$1(this$__$1));
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.keechma$app_state$core$IRouter$redirect_BANG_$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return location.hash = ["#!",cljs.core.str.cljs$core$IFn$_invoke$arity$1(router.core.map__GT_url.call(null,new cljs.core.Keyword(null,"routes","routes",457900162).cljs$core$IFn$_invoke$arity$1(this$__$1),params))].join('');
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.keechma$app_state$core$IRouter$url$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return ["#!",cljs.core.str.cljs$core$IFn$_invoke$arity$1(router.core.map__GT_url.call(null,new cljs.core.Keyword(null,"routes","routes",457900162).cljs$core$IFn$_invoke$arity$1(this$__$1),params))].join('');
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9600__auto__){
var self__ = this;
var this__9600__auto____$1 = this;
var h__9372__auto__ = self__.__hash;
if(!((h__9372__auto__ == null))){
return h__9372__auto__;
} else {
var h__9372__auto____$1 = ((function (h__9372__auto__,this__9600__auto____$1){
return (function (coll__9601__auto__){
return (879603011 ^ cljs.core.hash_unordered_coll.call(null,coll__9601__auto__));
});})(h__9372__auto__,this__9600__auto____$1))
.call(null,this__9600__auto____$1);
self__.__hash = h__9372__auto____$1;

return h__9372__auto____$1;
}
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this28352,other28353){
var self__ = this;
var this28352__$1 = this;
return (!((other28353 == null))) && ((this28352__$1.constructor === other28353.constructor)) && (cljs.core._EQ_.call(null,this28352__$1.routes,other28353.routes)) && (cljs.core._EQ_.call(null,this28352__$1.routes_chan,other28353.routes_chan)) && (cljs.core._EQ_.call(null,this28352__$1.hashchange_listener,other28353.hashchange_listener)) && (cljs.core._EQ_.call(null,this28352__$1.app_db,other28353.app_db)) && (cljs.core._EQ_.call(null,this28352__$1.__extmap,other28353.__extmap));
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9613__auto__,k__9614__auto__){
var self__ = this;
var this__9613__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"routes","routes",457900162),null,new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),null,new cljs.core.Keyword(null,"app-db","app-db",865606302),null,new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801),null], null), null),k__9614__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9613__auto____$1),self__.__meta),k__9614__auto__);
} else {
return (new keechma.app_state.hashchange_router.HashchangeRouter(self__.routes,self__.routes_chan,self__.hashchange_listener,self__.app_db,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9614__auto__)),null));
}
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9611__auto__,k__9612__auto__,G__28350){
var self__ = this;
var this__9611__auto____$1 = this;
var pred__28357 = cljs.core.keyword_identical_QMARK_;
var expr__28358 = k__9612__auto__;
if(cljs.core.truth_(pred__28357.call(null,new cljs.core.Keyword(null,"routes","routes",457900162),expr__28358))){
return (new keechma.app_state.hashchange_router.HashchangeRouter(G__28350,self__.routes_chan,self__.hashchange_listener,self__.app_db,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28357.call(null,new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),expr__28358))){
return (new keechma.app_state.hashchange_router.HashchangeRouter(self__.routes,G__28350,self__.hashchange_listener,self__.app_db,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28357.call(null,new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801),expr__28358))){
return (new keechma.app_state.hashchange_router.HashchangeRouter(self__.routes,self__.routes_chan,G__28350,self__.app_db,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__28357.call(null,new cljs.core.Keyword(null,"app-db","app-db",865606302),expr__28358))){
return (new keechma.app_state.hashchange_router.HashchangeRouter(self__.routes,self__.routes_chan,self__.hashchange_listener,G__28350,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.app_state.hashchange_router.HashchangeRouter(self__.routes,self__.routes_chan,self__.hashchange_listener,self__.app_db,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9612__auto__,G__28350),null));
}
}
}
}
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9616__auto__){
var self__ = this;
var this__9616__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routes","routes",457900162),self__.routes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),self__.routes_chan],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801),self__.hashchange_listener],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"app-db","app-db",865606302),self__.app_db],null))], null),self__.__extmap));
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9603__auto__,G__28350){
var self__ = this;
var this__9603__auto____$1 = this;
return (new keechma.app_state.hashchange_router.HashchangeRouter(self__.routes,self__.routes_chan,self__.hashchange_listener,self__.app_db,G__28350,self__.__extmap,self__.__hash));
});

keechma.app_state.hashchange_router.HashchangeRouter.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9609__auto__,entry__9610__auto__){
var self__ = this;
var this__9609__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9610__auto__)){
return this__9609__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9610__auto__,(0)),cljs.core._nth.call(null,entry__9610__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9609__auto____$1,entry__9610__auto__);
}
});

keechma.app_state.hashchange_router.HashchangeRouter.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"routes-chan","routes-chan",-1286759973,null),new cljs.core.Symbol(null,"hashchange-listener","hashchange-listener",405542726,null),new cljs.core.Symbol(null,"app-db","app-db",-1788829467,null)], null);
});

keechma.app_state.hashchange_router.HashchangeRouter.cljs$lang$type = true;

keechma.app_state.hashchange_router.HashchangeRouter.cljs$lang$ctorPrSeq = (function (this__9642__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"keechma.app-state.hashchange-router/HashchangeRouter");
});

keechma.app_state.hashchange_router.HashchangeRouter.cljs$lang$ctorPrWriter = (function (this__9642__auto__,writer__9643__auto__){
return cljs.core._write.call(null,writer__9643__auto__,"keechma.app-state.hashchange-router/HashchangeRouter");
});

keechma.app_state.hashchange_router.__GT_HashchangeRouter = (function keechma$app_state$hashchange_router$__GT_HashchangeRouter(routes,routes_chan,hashchange_listener,app_db){
return (new keechma.app_state.hashchange_router.HashchangeRouter(routes,routes_chan,hashchange_listener,app_db,null,null,null));
});

keechma.app_state.hashchange_router.map__GT_HashchangeRouter = (function keechma$app_state$hashchange_router$map__GT_HashchangeRouter(G__28354){
return (new keechma.app_state.hashchange_router.HashchangeRouter(new cljs.core.Keyword(null,"routes","routes",457900162).cljs$core$IFn$_invoke$arity$1(G__28354),new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796).cljs$core$IFn$_invoke$arity$1(G__28354),new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801).cljs$core$IFn$_invoke$arity$1(G__28354),new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(G__28354),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__28354,new cljs.core.Keyword(null,"routes","routes",457900162),new cljs.core.Keyword(null,"routes-chan","routes-chan",1367675796),new cljs.core.Keyword(null,"hashchange-listener","hashchange-listener",-1234988801),new cljs.core.Keyword(null,"app-db","app-db",865606302))),null));
});

keechma.app_state.hashchange_router.constructor$ = (function keechma$app_state$hashchange_router$constructor(routes,routes_chan,state){
var listener = cljs.core.partial.call(null,keechma.app_state.hashchange_router.hashchange_listener,router.core.expand_routes.call(null,routes),routes_chan);
return keechma.app_state.core.start_BANG_.call(null,keechma.app_state.hashchange_router.__GT_HashchangeRouter.call(null,router.core.expand_routes.call(null,routes),routes_chan,listener,new cljs.core.Keyword(null,"app-db","app-db",865606302).cljs$core$IFn$_invoke$arity$1(state)));
});
