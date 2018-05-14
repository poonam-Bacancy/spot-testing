// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('garden.core');
goog.require('cljs.core');
goog.require('garden.compiler');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
garden.core.css = (function garden$core$css(var_args){
var args__10191__auto__ = [];
var len__10184__auto___23311 = arguments.length;
var i__10185__auto___23312 = (0);
while(true){
if((i__10185__auto___23312 < len__10184__auto___23311)){
args__10191__auto__.push((arguments[i__10185__auto___23312]));

var G__23313 = (i__10185__auto___23312 + (1));
i__10185__auto___23312 = G__23313;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((0) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((0)),(0),null)):null);
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__10192__auto__);
});

garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.call(null,garden.compiler.compile_css,rules);
});

garden.core.css.cljs$lang$maxFixedArity = (0);

garden.core.css.cljs$lang$applyTo = (function (seq23310){
return garden.core.css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23310));
});

/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
garden.core.style = (function garden$core$style(var_args){
var args__10191__auto__ = [];
var len__10184__auto___23315 = arguments.length;
var i__10185__auto___23316 = (0);
while(true){
if((i__10185__auto___23316 < len__10184__auto___23315)){
args__10191__auto__.push((arguments[i__10185__auto___23316]));

var G__23317 = (i__10185__auto___23316 + (1));
i__10185__auto___23316 = G__23317;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((0) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((0)),(0),null)):null);
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__10192__auto__);
});

garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return garden.compiler.compile_style.call(null,maps);
});

garden.core.style.cljs$lang$maxFixedArity = (0);

garden.core.style.cljs$lang$applyTo = (function (seq23314){
return garden.core.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq23314));
});

