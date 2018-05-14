// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('keechma.toolbox.ui');
goog.require('cljs.core');
goog.require('keechma.ui_component');
/**
 * Read and defer a component subscription
 */
keechma.toolbox.ui.sub_GT_ = (function keechma$toolbox$ui$sub_GT_(var_args){
var args__10191__auto__ = [];
var len__10184__auto___22386 = arguments.length;
var i__10185__auto___22387 = (0);
while(true){
if((i__10185__auto___22387 < len__10184__auto___22386)){
args__10191__auto__.push((arguments[i__10185__auto___22387]));

var G__22388 = (i__10185__auto___22387 + (1));
i__10185__auto___22387 = G__22388;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((2) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((2)),(0),null)):null);
return keechma.toolbox.ui.sub_GT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10192__auto__);
});

keechma.toolbox.ui.sub_GT_.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,subscription,args){
return cljs.core.deref.call(null,keechma.ui_component.subscription.call(null,ctx,subscription,args));
});

keechma.toolbox.ui.sub_GT_.cljs$lang$maxFixedArity = (2);

keechma.toolbox.ui.sub_GT_.cljs$lang$applyTo = (function (seq22383){
var G__22384 = cljs.core.first.call(null,seq22383);
var seq22383__$1 = cljs.core.next.call(null,seq22383);
var G__22385 = cljs.core.first.call(null,seq22383__$1);
var seq22383__$2 = cljs.core.next.call(null,seq22383__$1);
return keechma.toolbox.ui.sub_GT_.cljs$core$IFn$_invoke$arity$variadic(G__22384,G__22385,seq22383__$2);
});

/**
 * Send a command to the controller
 */
keechma.toolbox.ui._LT_cmd = (function keechma$toolbox$ui$_LT_cmd(var_args){
var args__10191__auto__ = [];
var len__10184__auto___22392 = arguments.length;
var i__10185__auto___22393 = (0);
while(true){
if((i__10185__auto___22393 < len__10184__auto___22392)){
args__10191__auto__.push((arguments[i__10185__auto___22393]));

var G__22394 = (i__10185__auto___22393 + (1));
i__10185__auto___22393 = G__22394;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((2) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((2)),(0),null)):null);
return keechma.toolbox.ui._LT_cmd.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10192__auto__);
});

keechma.toolbox.ui._LT_cmd.cljs$core$IFn$_invoke$arity$variadic = (function (ctx,command,args){
return cljs.core.apply.call(null,keechma.ui_component.send_command,ctx,command,args);
});

keechma.toolbox.ui._LT_cmd.cljs$lang$maxFixedArity = (2);

keechma.toolbox.ui._LT_cmd.cljs$lang$applyTo = (function (seq22389){
var G__22390 = cljs.core.first.call(null,seq22389);
var seq22389__$1 = cljs.core.next.call(null,seq22389);
var G__22391 = cljs.core.first.call(null,seq22389__$1);
var seq22389__$2 = cljs.core.next.call(null,seq22389__$1);
return keechma.toolbox.ui._LT_cmd.cljs$core$IFn$_invoke$arity$variadic(G__22390,G__22391,seq22389__$2);
});

/**
 * Read current route data. Derefs the route subscription
 */
keechma.toolbox.ui.route_GT_ = (function keechma$toolbox$ui$route_GT_(ctx){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,keechma.ui_component.current_route.call(null,ctx)));
});
