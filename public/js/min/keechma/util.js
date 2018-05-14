// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('keechma.util');
goog.require('cljs.core');
goog.require('cljs.core.async');
keechma.util.update_values = (function keechma$util$update_values(var_args){
var args__10191__auto__ = [];
var len__10184__auto___19736 = arguments.length;
var i__10185__auto___19737 = (0);
while(true){
if((i__10185__auto___19737 < len__10184__auto___19736)){
args__10191__auto__.push((arguments[i__10185__auto___19737]));

var G__19738 = (i__10185__auto___19737 + (1));
i__10185__auto___19737 = G__19738;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((2) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((2)),(0),null)):null);
return keechma.util.update_values.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10192__auto__);
});

keechma.util.update_values.cljs$core$IFn$_invoke$arity$variadic = (function (m,f,args){
return cljs.core.reduce.call(null,(function (r,p__19732){
var vec__19733 = p__19732;
var k = cljs.core.nth.call(null,vec__19733,(0),null);
var v = cljs.core.nth.call(null,vec__19733,(1),null);
return cljs.core.assoc.call(null,r,k,cljs.core.apply.call(null,f,v,args));
}),cljs.core.PersistentArrayMap.EMPTY,m);
});

keechma.util.update_values.cljs$lang$maxFixedArity = (2);

keechma.util.update_values.cljs$lang$applyTo = (function (seq19729){
var G__19730 = cljs.core.first.call(null,seq19729);
var seq19729__$1 = cljs.core.next.call(null,seq19729);
var G__19731 = cljs.core.first.call(null,seq19729__$1);
var seq19729__$2 = cljs.core.next.call(null,seq19729__$1);
return keechma.util.update_values.cljs$core$IFn$_invoke$arity$variadic(G__19730,G__19731,seq19729__$2);
});

/**
 * true if seq contains elm
 */
keechma.util.in_QMARK_ = (function keechma$util$in_QMARK_(seq,elm){
return cljs.core.some.call(null,(function (p1__19739_SHARP_){
return cljs.core._EQ_.call(null,elm,p1__19739_SHARP_);
}),seq);
});
keechma.util.without = (function keechma$util$without(list,val){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,(function (ls_val){
return cljs.core._EQ_.call(null,val,ls_val);
}),list));
});
/**
 * Return a channel which will close on the nth next animation frame.
 */
keechma.util.animation_frame = (function keechma$util$animation_frame(var_args){
var G__19741 = arguments.length;
switch (G__19741) {
case 0:
return keechma.util.animation_frame.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return keechma.util.animation_frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.util.animation_frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.util.animation_frame.cljs$core$IFn$_invoke$arity$0 = (function (){
return keechma.util.animation_frame.call(null,(1));
});

keechma.util.animation_frame.cljs$core$IFn$_invoke$arity$1 = (function (n){
return keechma.util.animation_frame.call(null,n,cljs.core.async.chan.call(null,(1)));
});

keechma.util.animation_frame.cljs$core$IFn$_invoke$arity$2 = (function (n,out){
window.requestAnimationFrame((function (timestamp){
if(cljs.core._EQ_.call(null,n,(1))){
cljs.core.async.put_BANG_.call(null,out,timestamp);

return cljs.core.async.close_BANG_.call(null,out);
} else {
return keechma.util.animation_frame.call(null,(n - (1)),out);
}
}));

return out;
});

keechma.util.animation_frame.cljs$lang$maxFixedArity = 2;

/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 */
keechma.util.dissoc_in = (function keechma$util$dissoc_in(m,p__19743){
var vec__19744 = p__19743;
var seq__19745 = cljs.core.seq.call(null,vec__19744);
var first__19746 = cljs.core.first.call(null,seq__19745);
var seq__19745__$1 = cljs.core.next.call(null,seq__19745);
var k = first__19746;
var ks = seq__19745__$1;
var keys = vec__19744;
if(ks){
var temp__5455__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__5455__auto__)){
var nextmap = temp__5455__auto__;
var newmap = keechma.util.dissoc_in.call(null,nextmap,ks);
if(cljs.core.seq.call(null,newmap)){
return cljs.core.assoc.call(null,m,k,newmap);
} else {
return cljs.core.dissoc.call(null,m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.call(null,m,k);
}
});
