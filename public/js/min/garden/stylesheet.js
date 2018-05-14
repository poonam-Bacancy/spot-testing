// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('garden.stylesheet');
goog.require('cljs.core');
goog.require('garden.util');
goog.require('garden.color');
goog.require('garden.types');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
garden.stylesheet.rule = (function garden$stylesheet$rule(var_args){
var args__10191__auto__ = [];
var len__10184__auto___22347 = arguments.length;
var i__10185__auto___22348 = (0);
while(true){
if((i__10185__auto___22348 < len__10184__auto___22347)){
args__10191__auto__.push((arguments[i__10185__auto___22348]));

var G__22349 = (i__10185__auto___22348 + (1));
i__10185__auto___22348 = G__22349;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((1) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10192__auto__);
});

garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if(!(((selector instanceof cljs.core.Keyword)) || (typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))){
throw cljs.core.ex_info.call(null,"Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__22350__delegate = function (children){
return cljs.core.into.call(null,cljs.core.apply.call(null,cljs.core.vector,selector,more),children);
};
var G__22350 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__22351__i = 0, G__22351__a = new Array(arguments.length -  0);
while (G__22351__i < G__22351__a.length) {G__22351__a[G__22351__i] = arguments[G__22351__i + 0]; ++G__22351__i;}
  children = new cljs.core.IndexedSeq(G__22351__a,0,null);
} 
return G__22350__delegate.call(this,children);};
G__22350.cljs$lang$maxFixedArity = 0;
G__22350.cljs$lang$applyTo = (function (arglist__22352){
var children = cljs.core.seq(arglist__22352);
return G__22350__delegate(children);
});
G__22350.cljs$core$IFn$_invoke$arity$variadic = G__22350__delegate;
return G__22350;
})()
;
}
});

garden.stylesheet.rule.cljs$lang$maxFixedArity = (1);

garden.stylesheet.rule.cljs$lang$applyTo = (function (seq22345){
var G__22346 = cljs.core.first.call(null,seq22345);
var seq22345__$1 = cljs.core.next.call(null,seq22345);
return garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic(G__22346,seq22345__$1);
});

garden.stylesheet.cssfn = (function garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__22353__delegate = function (args){
return (new garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__22353 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22354__i = 0, G__22354__a = new Array(arguments.length -  0);
while (G__22354__i < G__22354__a.length) {G__22354__a[G__22354__i] = arguments[G__22354__i + 0]; ++G__22354__i;}
  args = new cljs.core.IndexedSeq(G__22354__a,0,null);
} 
return G__22353__delegate.call(this,args);};
G__22353.cljs$lang$maxFixedArity = 0;
G__22353.cljs$lang$applyTo = (function (arglist__22355){
var args = cljs.core.seq(arglist__22355);
return G__22353__delegate(args);
});
G__22353.cljs$core$IFn$_invoke$arity$variadic = G__22353__delegate;
return G__22353;
})()
;
});
garden.stylesheet.at_rule = (function garden$stylesheet$at_rule(identifier,value){
return (new garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
garden.stylesheet.at_font_face = (function garden$stylesheet$at_font_face(var_args){
var args__10191__auto__ = [];
var len__10184__auto___22357 = arguments.length;
var i__10185__auto___22358 = (0);
while(true){
if((i__10185__auto___22358 < len__10184__auto___22357)){
args__10191__auto__.push((arguments[i__10185__auto___22358]));

var G__22359 = (i__10185__auto___22358 + (1));
i__10185__auto___22358 = G__22359;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((0) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((0)),(0),null)):null);
return garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__10192__auto__);
});

garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
});

garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0);

garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq22356){
return garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22356));
});

/**
 * Create a CSS @import rule.
 */
garden.stylesheet.at_import = (function garden$stylesheet$at_import(var_args){
var G__22363 = arguments.length;
switch (G__22363) {
case 1:
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__10207__auto__ = [];
var len__10184__auto___22365 = arguments.length;
var i__10185__auto___22366 = (0);
while(true){
if((i__10185__auto___22366 < len__10184__auto___22365)){
args_arr__10207__auto__.push((arguments[i__10185__auto___22366]));

var G__22367 = (i__10185__auto___22366 + (1));
i__10185__auto___22366 = G__22367;
continue;
} else {
}
break;
}

var argseq__10208__auto__ = (new cljs.core.IndexedSeq(args_arr__10207__auto__.slice((1)),(0),null));
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10208__auto__);

}
});

garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
});

garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
});

garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq22361){
var G__22362 = cljs.core.first.call(null,seq22361);
var seq22361__$1 = cljs.core.next.call(null,seq22361);
return garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic(G__22362,seq22361__$1);
});

garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1);

/**
 * Create a CSS @media rule.
 */
garden.stylesheet.at_media = (function garden$stylesheet$at_media(var_args){
var args__10191__auto__ = [];
var len__10184__auto___22370 = arguments.length;
var i__10185__auto___22371 = (0);
while(true){
if((i__10185__auto___22371 < len__10184__auto___22370)){
args__10191__auto__.push((arguments[i__10185__auto___22371]));

var G__22372 = (i__10185__auto___22371 + (1));
i__10185__auto___22371 = G__22372;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((1) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10192__auto__);
});

garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
});

garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1);

garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq22368){
var G__22369 = cljs.core.first.call(null,seq22368);
var seq22368__$1 = cljs.core.next.call(null,seq22368);
return garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic(G__22369,seq22368__$1);
});

/**
 * Create a CSS @keyframes rule.
 */
garden.stylesheet.at_keyframes = (function garden$stylesheet$at_keyframes(var_args){
var args__10191__auto__ = [];
var len__10184__auto___22375 = arguments.length;
var i__10185__auto___22376 = (0);
while(true){
if((i__10185__auto___22376 < len__10184__auto___22375)){
args__10191__auto__.push((arguments[i__10185__auto___22376]));

var G__22377 = (i__10185__auto___22376 + (1));
i__10185__auto___22376 = G__22377;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((1) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((1)),(0),null)):null);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10192__auto__);
});

garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
});

garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1);

garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq22373){
var G__22374 = cljs.core.first.call(null,seq22373);
var seq22373__$1 = cljs.core.next.call(null,seq22373);
return garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic(G__22374,seq22373__$1);
});

/**
 * Create a color from RGB values.
 */
garden.stylesheet.rgb = (function garden$stylesheet$rgb(r,g,b){
return garden.color.rgb.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
garden.stylesheet.hsl = (function garden$stylesheet$hsl(h,s,l){
return garden.color.hsl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});
