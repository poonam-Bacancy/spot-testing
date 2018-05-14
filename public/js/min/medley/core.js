// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('medley.core');
goog.require('cljs.core');
/**
 * Finds the first item in a collection that matches a predicate.
 */
medley.core.find_first = (function medley$core$find_first(pred,coll){
return cljs.core.reduce.call(null,(function (_,x){
if(cljs.core.truth_(pred.call(null,x))){
return cljs.core.reduced.call(null,x);
} else {
return null;
}
}),null,coll);
});
/**
 * Dissociate a value in a nested assocative structure, identified by a sequence
 *   of keys. Any collections left empty by the operation will be dissociated from
 *   their containing structures.
 */
medley.core.dissoc_in = (function medley$core$dissoc_in(m,ks){
var temp__5455__auto__ = cljs.core.seq.call(null,ks);
if(temp__5455__auto__){
var vec__27170 = temp__5455__auto__;
var seq__27171 = cljs.core.seq.call(null,vec__27170);
var first__27172 = cljs.core.first.call(null,seq__27171);
var seq__27171__$1 = cljs.core.next.call(null,seq__27171);
var k = first__27172;
var ks__$1 = seq__27171__$1;
if(cljs.core.seq.call(null,ks__$1)){
var v = medley.core.dissoc_in.call(null,cljs.core.get.call(null,m,k),ks__$1);
if(cljs.core.empty_QMARK_.call(null,v)){
return cljs.core.dissoc.call(null,m,k);
} else {
return cljs.core.assoc.call(null,m,k,v);
}
} else {
return cljs.core.dissoc.call(null,m,k);
}
} else {
return m;
}
});
/**
 * Associates a key with a value in a map, if and only if the value is not nil.
 */
medley.core.assoc_some = (function medley$core$assoc_some(var_args){
var G__27178 = arguments.length;
switch (G__27178) {
case 3:
return medley.core.assoc_some.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__10207__auto__ = [];
var len__10184__auto___27184 = arguments.length;
var i__10185__auto___27185 = (0);
while(true){
if((i__10185__auto___27185 < len__10184__auto___27184)){
args_arr__10207__auto__.push((arguments[i__10185__auto___27185]));

var G__27186 = (i__10185__auto___27185 + (1));
i__10185__auto___27185 = G__27186;
continue;
} else {
}
break;
}

var argseq__10208__auto__ = (new cljs.core.IndexedSeq(args_arr__10207__auto__.slice((3)),(0),null));
return medley.core.assoc_some.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__10208__auto__);

}
});

medley.core.assoc_some.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
if((v == null)){
return m;
} else {
return cljs.core.assoc.call(null,m,k,v);
}
});

medley.core.assoc_some.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return cljs.core.reduce.call(null,(function (m__$1,p__27179){
var vec__27180 = p__27179;
var k__$1 = cljs.core.nth.call(null,vec__27180,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__27180,(1),null);
return medley.core.assoc_some.call(null,m__$1,k__$1,v__$1);
}),medley.core.assoc_some.call(null,m,k,v),cljs.core.partition.call(null,(2),kvs));
});

medley.core.assoc_some.cljs$lang$applyTo = (function (seq27174){
var G__27175 = cljs.core.first.call(null,seq27174);
var seq27174__$1 = cljs.core.next.call(null,seq27174);
var G__27176 = cljs.core.first.call(null,seq27174__$1);
var seq27174__$2 = cljs.core.next.call(null,seq27174__$1);
var G__27177 = cljs.core.first.call(null,seq27174__$2);
var seq27174__$3 = cljs.core.next.call(null,seq27174__$2);
return medley.core.assoc_some.cljs$core$IFn$_invoke$arity$variadic(G__27175,G__27176,G__27177,seq27174__$3);
});

medley.core.assoc_some.cljs$lang$maxFixedArity = (3);

medley.core.editable_QMARK_ = (function medley$core$editable_QMARK_(coll){
if(!((coll == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === coll.cljs$core$IEditableCollection$))){
return true;
} else {
if((!coll.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEditableCollection,coll);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IEditableCollection,coll);
}
});
medley.core.reduce_map = (function medley$core$reduce_map(f,coll){
if(cljs.core.truth_(medley.core.editable_QMARK_.call(null,coll))){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,f.call(null,cljs.core.assoc_BANG_),cljs.core.transient$.call(null,cljs.core.empty.call(null,coll)),coll));
} else {
return cljs.core.reduce_kv.call(null,f.call(null,cljs.core.assoc),cljs.core.empty.call(null,coll),coll);
}
});
/**
 * Create a map entry for a key and value pair.
 */
medley.core.map_entry = (function medley$core$map_entry(k,v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null);
});
/**
 * Maps a function over the key/value pairs of an associate collection. Expects
 *   a function that takes two arguments, the key and value, and returns the new
 *   key and value as a collection of two elements.
 */
medley.core.map_kv = (function medley$core$map_kv(f,coll){
return medley.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
var vec__27188 = f.call(null,k,v);
var k__$1 = cljs.core.nth.call(null,vec__27188,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__27188,(1),null);
return xf.call(null,m,k__$1,v__$1);
});
}),coll);
});
/**
 * Maps a function over the keys of an associative collection.
 */
medley.core.map_keys = (function medley$core$map_keys(f,coll){
return medley.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
return xf.call(null,m,f.call(null,k),v);
});
}),coll);
});
/**
 * Maps a function over the values of an associative collection.
 */
medley.core.map_vals = (function medley$core$map_vals(f,coll){
return medley.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
return xf.call(null,m,k,f.call(null,v));
});
}),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (key item) (val item))` returns true.
 */
medley.core.filter_kv = (function medley$core$filter_kv(pred,coll){
return medley.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
if(cljs.core.truth_(pred.call(null,k,v))){
return xf.call(null,m,k,v);
} else {
return m;
}
});
}),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (key item))` returns true.
 */
medley.core.filter_keys = (function medley$core$filter_keys(pred,coll){
return medley.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
if(cljs.core.truth_(pred.call(null,k))){
return xf.call(null,m,k,v);
} else {
return m;
}
});
}),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (val item))` returns true.
 */
medley.core.filter_vals = (function medley$core$filter_vals(pred,coll){
return medley.core.reduce_map.call(null,(function (xf){
return (function (m,k,v){
if(cljs.core.truth_(pred.call(null,v))){
return xf.call(null,m,k,v);
} else {
return m;
}
});
}),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (key item) (val item))` returns false.
 */
medley.core.remove_kv = (function medley$core$remove_kv(pred,coll){
return medley.core.filter_kv.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (key item))` returns false.
 */
medley.core.remove_keys = (function medley$core$remove_keys(pred,coll){
return medley.core.filter_keys.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
 * Returns a new associative collection of the items in coll for which
 *   `(pred (val item))` returns false.
 */
medley.core.remove_vals = (function medley$core$remove_vals(pred,coll){
return medley.core.filter_vals.call(null,cljs.core.complement.call(null,pred),coll);
});
/**
 * Creates an empty persistent queue, or one populated with a collection.
 */
medley.core.queue = (function medley$core$queue(var_args){
var G__27192 = arguments.length;
switch (G__27192) {
case 0:
return medley.core.queue.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.queue.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

medley.core.queue.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentQueue.EMPTY;
});

medley.core.queue.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.into.call(null,medley.core.queue.call(null),coll);
});

medley.core.queue.cljs$lang$maxFixedArity = 1;

/**
 * Returns true if x implements clojure.lang.PersistentQueue.
 */
medley.core.queue_QMARK_ = (function medley$core$queue_QMARK_(x){
return (x instanceof cljs.core.PersistentQueue);
});
/**
 * Returns true if x is a boolean.
 */
medley.core.boolean_QMARK_ = (function medley$core$boolean_QMARK_(x){
return (x === true) || (x === false);
});
/**
 * Return the least argument (as defined by the compare function) in O(n) time.
 */
medley.core.least = (function medley$core$least(var_args){
var G__27198 = arguments.length;
switch (G__27198) {
case 0:
return medley.core.least.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.least.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.least.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__10207__auto__ = [];
var len__10184__auto___27200 = arguments.length;
var i__10185__auto___27201 = (0);
while(true){
if((i__10185__auto___27201 < len__10184__auto___27200)){
args_arr__10207__auto__.push((arguments[i__10185__auto___27201]));

var G__27202 = (i__10185__auto___27201 + (1));
i__10185__auto___27201 = G__27202;
continue;
} else {
}
break;
}

var argseq__10208__auto__ = (new cljs.core.IndexedSeq(args_arr__10207__auto__.slice((2)),(0),null));
return medley.core.least.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10208__auto__);

}
});

medley.core.least.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

medley.core.least.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

medley.core.least.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if((cljs.core.compare.call(null,a,b) < (0))){
return a;
} else {
return b;
}
});

medley.core.least.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,medley.core.least,medley.core.least.call(null,a,b),more);
});

medley.core.least.cljs$lang$applyTo = (function (seq27195){
var G__27196 = cljs.core.first.call(null,seq27195);
var seq27195__$1 = cljs.core.next.call(null,seq27195);
var G__27197 = cljs.core.first.call(null,seq27195__$1);
var seq27195__$2 = cljs.core.next.call(null,seq27195__$1);
return medley.core.least.cljs$core$IFn$_invoke$arity$variadic(G__27196,G__27197,seq27195__$2);
});

medley.core.least.cljs$lang$maxFixedArity = (2);

/**
 * Find the greatest argument (as defined by the compare function) in O(n) time.
 */
medley.core.greatest = (function medley$core$greatest(var_args){
var G__27207 = arguments.length;
switch (G__27207) {
case 0:
return medley.core.greatest.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.greatest.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.greatest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__10207__auto__ = [];
var len__10184__auto___27209 = arguments.length;
var i__10185__auto___27210 = (0);
while(true){
if((i__10185__auto___27210 < len__10184__auto___27209)){
args_arr__10207__auto__.push((arguments[i__10185__auto___27210]));

var G__27211 = (i__10185__auto___27210 + (1));
i__10185__auto___27210 = G__27211;
continue;
} else {
}
break;
}

var argseq__10208__auto__ = (new cljs.core.IndexedSeq(args_arr__10207__auto__.slice((2)),(0),null));
return medley.core.greatest.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10208__auto__);

}
});

medley.core.greatest.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
});

medley.core.greatest.cljs$core$IFn$_invoke$arity$1 = (function (a){
return a;
});

medley.core.greatest.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
if((cljs.core.compare.call(null,a,b) > (0))){
return a;
} else {
return b;
}
});

medley.core.greatest.cljs$core$IFn$_invoke$arity$variadic = (function (a,b,more){
return cljs.core.reduce.call(null,medley.core.greatest,medley.core.greatest.call(null,a,b),more);
});

medley.core.greatest.cljs$lang$applyTo = (function (seq27204){
var G__27205 = cljs.core.first.call(null,seq27204);
var seq27204__$1 = cljs.core.next.call(null,seq27204);
var G__27206 = cljs.core.first.call(null,seq27204__$1);
var seq27204__$2 = cljs.core.next.call(null,seq27204__$1);
return medley.core.greatest.cljs$core$IFn$_invoke$arity$variadic(G__27205,G__27206,seq27204__$2);
});

medley.core.greatest.cljs$lang$maxFixedArity = (2);

/**
 * Applies a function f to the argument list formed by concatenating
 *   everything but the last element of args with the last element of
 *   args. This is useful for applying a function that accepts keyword
 *   arguments to a map.
 */
medley.core.mapply = (function medley$core$mapply(var_args){
var G__27216 = arguments.length;
switch (G__27216) {
case 2:
return medley.core.mapply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__10207__auto__ = [];
var len__10184__auto___27218 = arguments.length;
var i__10185__auto___27219 = (0);
while(true){
if((i__10185__auto___27219 < len__10184__auto___27218)){
args_arr__10207__auto__.push((arguments[i__10185__auto___27219]));

var G__27220 = (i__10185__auto___27219 + (1));
i__10185__auto___27219 = G__27220;
continue;
} else {
}
break;
}

var argseq__10208__auto__ = (new cljs.core.IndexedSeq(args_arr__10207__auto__.slice((2)),(0),null));
return medley.core.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10208__auto__);

}
});

medley.core.mapply.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});

medley.core.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,a,args){
return cljs.core.apply.call(null,f,a,cljs.core.apply.call(null,cljs.core.concat,cljs.core.butlast.call(null,args),cljs.core.last.call(null,args)));
});

medley.core.mapply.cljs$lang$applyTo = (function (seq27213){
var G__27214 = cljs.core.first.call(null,seq27213);
var seq27213__$1 = cljs.core.next.call(null,seq27213);
var G__27215 = cljs.core.first.call(null,seq27213__$1);
var seq27213__$2 = cljs.core.next.call(null,seq27213__$1);
return medley.core.mapply.cljs$core$IFn$_invoke$arity$variadic(G__27214,G__27215,seq27213__$2);
});

medley.core.mapply.cljs$lang$maxFixedArity = (2);

/**
 * Returns a lazy seq of the first item in each coll, then the second, etc.
 *   Unlike `clojure.core/interleave`, the returned seq contains all items in the
 *   supplied collections, even if the collections are different sizes.
 */
medley.core.interleave_all = (function medley$core$interleave_all(var_args){
var G__27225 = arguments.length;
switch (G__27225) {
case 0:
return medley.core.interleave_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.interleave_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.interleave_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__10207__auto__ = [];
var len__10184__auto___27227 = arguments.length;
var i__10185__auto___27228 = (0);
while(true){
if((i__10185__auto___27228 < len__10184__auto___27227)){
args_arr__10207__auto__.push((arguments[i__10185__auto___27228]));

var G__27229 = (i__10185__auto___27228 + (1));
i__10185__auto___27228 = G__27229;
continue;
} else {
}
break;
}

var argseq__10208__auto__ = (new cljs.core.IndexedSeq(args_arr__10207__auto__.slice((2)),(0),null));
return medley.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10208__auto__);

}
});

medley.core.interleave_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.List.EMPTY;
});

medley.core.interleave_all.cljs$core$IFn$_invoke$arity$1 = (function (c1){
return (new cljs.core.LazySeq(null,(function (){
return c1;
}),null,null));
});

medley.core.interleave_all.cljs$core$IFn$_invoke$arity$2 = (function (c1,c2){
return (new cljs.core.LazySeq(null,(function (){
var s1 = cljs.core.seq.call(null,c1);
var s2 = cljs.core.seq.call(null,c2);
if((s1) && (s2)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s1),cljs.core.cons.call(null,cljs.core.first.call(null,s2),medley.core.interleave_all.call(null,cljs.core.rest.call(null,s1),cljs.core.rest.call(null,s2))));
} else {
return (s1) || (s2);
}
}),null,null));
});

medley.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (c1,c2,colls){
return (new cljs.core.LazySeq(null,(function (){
var ss = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1)));
if(cljs.core.seq.call(null,ss)){
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss),cljs.core.apply.call(null,medley.core.interleave_all,cljs.core.map.call(null,cljs.core.rest,ss)));
} else {
return null;
}
}),null,null));
});

medley.core.interleave_all.cljs$lang$applyTo = (function (seq27222){
var G__27223 = cljs.core.first.call(null,seq27222);
var seq27222__$1 = cljs.core.next.call(null,seq27222);
var G__27224 = cljs.core.first.call(null,seq27222__$1);
var seq27222__$2 = cljs.core.next.call(null,seq27222__$1);
return medley.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(G__27223,G__27224,seq27222__$2);
});

medley.core.interleave_all.cljs$lang$maxFixedArity = (2);

/**
 * Returns a lazy sequence of the elements of coll, removing any elements that
 *   return duplicate values when passed to a function f.
 */
medley.core.distinct_by = (function medley$core$distinct_by(var_args){
var G__27231 = arguments.length;
switch (G__27231) {
case 1:
return medley.core.distinct_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.distinct_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

medley.core.distinct_by.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (rf){
var seen = cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY);
return ((function (seen){
return (function() {
var G__27237 = null;
var G__27237__0 = (function (){
return rf.call(null);
});
var G__27237__1 = (function (result){
return rf.call(null,result);
});
var G__27237__2 = (function (result,x){
var fx = f.call(null,x);
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,seen),fx)){
return result;
} else {
cljs.core._vreset_BANG_.call(null,seen,cljs.core.conj.call(null,cljs.core._deref.call(null,seen),fx));

return rf.call(null,result,x);
}
});
G__27237 = function(result,x){
switch(arguments.length){
case 0:
return G__27237__0.call(this);
case 1:
return G__27237__1.call(this,result);
case 2:
return G__27237__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__27237.cljs$core$IFn$_invoke$arity$0 = G__27237__0;
G__27237.cljs$core$IFn$_invoke$arity$1 = G__27237__1;
G__27237.cljs$core$IFn$_invoke$arity$2 = G__27237__2;
return G__27237;
})()
;})(seen))
});
});

medley.core.distinct_by.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
var step = (function medley$core$step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__27232,seen__$1){
while(true){
var vec__27233 = p__27232;
var x = cljs.core.nth.call(null,vec__27233,(0),null);
var xs__$1 = vec__27233;
var temp__5457__auto__ = cljs.core.seq.call(null,xs__$1);
if(temp__5457__auto__){
var s = temp__5457__auto__;
var fx = f.call(null,x);
if(cljs.core.contains_QMARK_.call(null,seen__$1,fx)){
var G__27238 = cljs.core.rest.call(null,s);
var G__27239 = seen__$1;
p__27232 = G__27238;
seen__$1 = G__27239;
continue;
} else {
return cljs.core.cons.call(null,x,medley$core$step.call(null,cljs.core.rest.call(null,s),cljs.core.conj.call(null,seen__$1,fx)));
}
} else {
return null;
}
break;
}
}).call(null,xs,seen);
}),null,null));
});
return step.call(null,coll,cljs.core.PersistentHashSet.EMPTY);
});

medley.core.distinct_by.cljs$lang$maxFixedArity = 2;

/**
 * Returns a lazy sequence of the elements of coll, removing any **consecutive**
 *   elements that return duplicate values when passed to a function f.
 */
medley.core.dedupe_by = (function medley$core$dedupe_by(var_args){
var G__27241 = arguments.length;
switch (G__27241) {
case 1:
return medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$1 = (function (f){
return (function (rf){
var pv = cljs.core.volatile_BANG_.call(null,new cljs.core.Keyword("medley.core","none","medley.core/none",60848325));
return ((function (pv){
return (function() {
var G__27243 = null;
var G__27243__0 = (function (){
return rf.call(null);
});
var G__27243__1 = (function (result){
return rf.call(null,result);
});
var G__27243__2 = (function (result,x){
var prior = cljs.core.deref.call(null,pv);
var fx = f.call(null,x);
cljs.core.vreset_BANG_.call(null,pv,fx);

if(cljs.core._EQ_.call(null,prior,fx)){
return result;
} else {
return rf.call(null,result,x);
}
});
G__27243 = function(result,x){
switch(arguments.length){
case 0:
return G__27243__0.call(this);
case 1:
return G__27243__1.call(this,result);
case 2:
return G__27243__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__27243.cljs$core$IFn$_invoke$arity$0 = G__27243__0;
G__27243.cljs$core$IFn$_invoke$arity$1 = G__27243__1;
G__27243.cljs$core$IFn$_invoke$arity$2 = G__27243__2;
return G__27243;
})()
;})(pv))
});
});

medley.core.dedupe_by.cljs$core$IFn$_invoke$arity$2 = (function (f,coll){
return cljs.core.sequence.call(null,medley.core.dedupe_by.call(null,f),coll);
});

medley.core.dedupe_by.cljs$lang$maxFixedArity = 2;

/**
 * Returns a lazy sequence of successive items from coll up to and including
 *   the first item for which `(pred item)` returns true.
 */
medley.core.take_upto = (function medley$core$take_upto(var_args){
var G__27245 = arguments.length;
switch (G__27245) {
case 1:
return medley.core.take_upto.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.take_upto.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

medley.core.take_upto.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (rf){
return (function() {
var G__27247 = null;
var G__27247__0 = (function (){
return rf.call(null);
});
var G__27247__1 = (function (result){
return rf.call(null,result);
});
var G__27247__2 = (function (result,x){
var result__$1 = rf.call(null,result,x);
if(cljs.core.truth_(pred.call(null,x))){
return cljs.core.ensure_reduced.call(null,result__$1);
} else {
return result__$1;
}
});
G__27247 = function(result,x){
switch(arguments.length){
case 0:
return G__27247__0.call(this);
case 1:
return G__27247__1.call(this,result);
case 2:
return G__27247__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__27247.cljs$core$IFn$_invoke$arity$0 = G__27247__0;
G__27247.cljs$core$IFn$_invoke$arity$1 = G__27247__1;
G__27247.cljs$core$IFn$_invoke$arity$2 = G__27247__2;
return G__27247;
})()
});
});

medley.core.take_upto.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return (new cljs.core.LazySeq(null,(function (){
var temp__5457__auto__ = cljs.core.seq.call(null,coll);
if(temp__5457__auto__){
var s = temp__5457__auto__;
var x = cljs.core.first.call(null,s);
return cljs.core.cons.call(null,x,((cljs.core.not.call(null,pred.call(null,x)))?medley.core.take_upto.call(null,pred,cljs.core.rest.call(null,s)):null));
} else {
return null;
}
}),null,null));
});

medley.core.take_upto.cljs$lang$maxFixedArity = 2;

/**
 * Returns a lazy sequence of the items in coll starting *after* the first item
 *   for which `(pred item)` returns true.
 */
medley.core.drop_upto = (function medley$core$drop_upto(var_args){
var G__27249 = arguments.length;
switch (G__27249) {
case 1:
return medley.core.drop_upto.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return medley.core.drop_upto.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

medley.core.drop_upto.cljs$core$IFn$_invoke$arity$1 = (function (pred){
return (function (rf){
var dv = cljs.core.volatile_BANG_.call(null,true);
return ((function (dv){
return (function() {
var G__27251 = null;
var G__27251__0 = (function (){
return rf.call(null);
});
var G__27251__1 = (function (result){
return rf.call(null,result);
});
var G__27251__2 = (function (result,x){
if(cljs.core.truth_(cljs.core.deref.call(null,dv))){
if(cljs.core.truth_(pred.call(null,x))){
cljs.core.vreset_BANG_.call(null,dv,false);
} else {
}

return result;
} else {
return rf.call(null,result,x);
}
});
G__27251 = function(result,x){
switch(arguments.length){
case 0:
return G__27251__0.call(this);
case 1:
return G__27251__1.call(this,result);
case 2:
return G__27251__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__27251.cljs$core$IFn$_invoke$arity$0 = G__27251__0;
G__27251.cljs$core$IFn$_invoke$arity$1 = G__27251__1;
G__27251.cljs$core$IFn$_invoke$arity$2 = G__27251__2;
return G__27251;
})()
;})(dv))
});
});

medley.core.drop_upto.cljs$core$IFn$_invoke$arity$2 = (function (pred,coll){
return cljs.core.rest.call(null,cljs.core.drop_while.call(null,cljs.core.complement.call(null,pred),coll));
});

medley.core.drop_upto.cljs$lang$maxFixedArity = 2;

/**
 * Returns an ordered, lazy sequence of vectors `[index item]`, where item is a
 *   value in coll, and index its position starting from zero.
 */
medley.core.indexed = (function medley$core$indexed(var_args){
var G__27253 = arguments.length;
switch (G__27253) {
case 0:
return medley.core.indexed.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return medley.core.indexed.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

medley.core.indexed.cljs$core$IFn$_invoke$arity$0 = (function (){
return (function (rf){
var i = cljs.core.volatile_BANG_.call(null,(-1));
return ((function (i){
return (function() {
var G__27255 = null;
var G__27255__0 = (function (){
return rf.call(null);
});
var G__27255__1 = (function (result){
return rf.call(null,result);
});
var G__27255__2 = (function (result,x){
return rf.call(null,result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core._vreset_BANG_.call(null,i,(cljs.core._deref.call(null,i) + (1))),x], null));
});
G__27255 = function(result,x){
switch(arguments.length){
case 0:
return G__27255__0.call(this);
case 1:
return G__27255__1.call(this,result);
case 2:
return G__27255__2.call(this,result,x);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__27255.cljs$core$IFn$_invoke$arity$0 = G__27255__0;
G__27255.cljs$core$IFn$_invoke$arity$1 = G__27255__1;
G__27255.cljs$core$IFn$_invoke$arity$2 = G__27255__2;
return G__27255;
})()
;})(i))
});
});

medley.core.indexed.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return cljs.core.map_indexed.call(null,cljs.core.vector,coll);
});

medley.core.indexed.cljs$lang$maxFixedArity = 1;

/**
 * Returns the absolute value of a number.
 */
medley.core.abs = (function medley$core$abs(x){
if((x < (0))){
return (- x);
} else {
return x;
}
});
/**
 * Atomically swaps the value of the atom to be `(apply f x args)`, where x is
 *   the current value of the atom, then returns the original value of the atom.
 *   This function therefore acts like an atomic `deref` then `swap!`.
 */
medley.core.deref_swap_BANG_ = (function medley$core$deref_swap_BANG_(var_args){
var G__27261 = arguments.length;
switch (G__27261) {
case 2:
return medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__10207__auto__ = [];
var len__10184__auto___27263 = arguments.length;
var i__10185__auto___27264 = (0);
while(true){
if((i__10185__auto___27264 < len__10184__auto___27263)){
args_arr__10207__auto__.push((arguments[i__10185__auto___27264]));

var G__27265 = (i__10185__auto___27264 + (1));
i__10185__auto___27264 = G__27265;
continue;
} else {
}
break;
}

var argseq__10208__auto__ = (new cljs.core.IndexedSeq(args_arr__10207__auto__.slice((2)),(0),null));
return medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10208__auto__);

}
});

medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (atom,f){
var value = cljs.core.deref.call(null,atom);
cljs.core.reset_BANG_.call(null,atom,f.call(null,value));

return value;
});

medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (atom,f,args){
return medley.core.deref_swap_BANG_.call(null,atom,(function (p1__27256_SHARP_){
return cljs.core.apply.call(null,f,p1__27256_SHARP_,args);
}));
});

medley.core.deref_swap_BANG_.cljs$lang$applyTo = (function (seq27258){
var G__27259 = cljs.core.first.call(null,seq27258);
var seq27258__$1 = cljs.core.next.call(null,seq27258);
var G__27260 = cljs.core.first.call(null,seq27258__$1);
var seq27258__$2 = cljs.core.next.call(null,seq27258__$1);
return medley.core.deref_swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27259,G__27260,seq27258__$2);
});

medley.core.deref_swap_BANG_.cljs$lang$maxFixedArity = (2);

/**
 * Sets the value of the atom without regard for the current value, then returns
 *   the original value of the atom. See also: [[deref-swap!]].
 */
medley.core.deref_reset_BANG_ = (function medley$core$deref_reset_BANG_(atom,newval){
return medley.core.deref_swap_BANG_.call(null,atom,cljs.core.constantly.call(null,newval));
});
/**
 * Returns the message attached to the given Error/Throwable object. For all
 *   other types returns nil. Same as `cljs.core/ex-message` except it works for
 *   Clojure as well as ClojureScript.
 */
medley.core.ex_message = (function medley$core$ex_message(ex){
return cljs.core.ex_message.call(null,ex);
});
/**
 * Returns the cause attached to the given ExceptionInfo/Throwable object. For
 *   all other types returns nil. Same as `cljs.core/ex-clause` except it works for
 *   Clojure as well as ClojureScript.
 */
medley.core.ex_cause = (function medley$core$ex_cause(ex){
return cljs.core.ex_cause.call(null,ex);
});
/**
 * Returns true if the value is a UUID.
 */
medley.core.uuid_QMARK_ = (function medley$core$uuid_QMARK_(x){
return (x instanceof cljs.core.UUID);
});
/**
 * Returns a UUID generated from the supplied string. Same as `cljs.core/uuid`
 *   in ClojureScript, while in Clojure it returns a `java.util.UUID` object.
 */
medley.core.uuid = (function medley$core$uuid(s){
return cljs.core.uuid.call(null,s);
});
/**
 * Generates a new random UUID. Same as `cljs.core/random-uuid` except it works
 *   for Clojure as well as ClojureScript.
 */
medley.core.random_uuid = (function medley$core$random_uuid(){
return cljs.core.random_uuid.call(null);
});
