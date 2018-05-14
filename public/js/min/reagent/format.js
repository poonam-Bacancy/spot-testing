// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('reagent.format');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('goog.i18n.DateTimeFormat');
goog.require('goog.i18n.NumberFormat');
goog.require('goog.i18n.NumberFormatSymbols');
goog.require('goog.crypt');
goog.require('goog.crypt.Md5');
goog.require('goog.crypt.Sha1');
goog.require('goog.crypt.Sha2');
goog.require('goog.crypt.Sha256');
goog.require('goog.crypt.Sha384');
goog.require('goog.crypt.Sha512');
reagent.format.add_slashes = (function reagent$format$add_slashes(s){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.mapcat.call(null,(function (c){
if((cljs.core._EQ_.call(null,"\"",c)) || (cljs.core._EQ_.call(null,"'",c))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\\",c], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [c], null);
}
}),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('')));
});
reagent.format.center = (function reagent$format$center(text,w){
var c = cljs.core.count.call(null,text);
var l = Math.ceil(((w - c) / (2)));
var r = Math.floor(((w - c) / (2)));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,l," "))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,r," ")))].join('');
});
/**
 * Formats a string using goog.string.format.
 * e.g: (format "Cost: %.2f" 10.0234)
 */
reagent.format.format = (function reagent$format$format(var_args){
var args__10191__auto__ = [];
var len__10184__auto___24138 = arguments.length;
var i__10185__auto___24139 = (0);
while(true){
if((i__10185__auto___24139 < len__10184__auto___24138)){
args__10191__auto__.push((arguments[i__10185__auto___24139]));

var G__24140 = (i__10185__auto___24139 + (1));
i__10185__auto___24139 = G__24140;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((1) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((1)),(0),null)):null);
return reagent.format.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10192__auto__);
});

reagent.format.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

reagent.format.format.cljs$lang$maxFixedArity = (1);

reagent.format.format.cljs$lang$applyTo = (function (seq24136){
var G__24137 = cljs.core.first.call(null,seq24136);
var seq24136__$1 = cljs.core.next.call(null,seq24136);
return reagent.format.format.cljs$core$IFn$_invoke$arity$variadic(G__24137,seq24136__$1);
});

/**
 * Prints formatted output, as per format
 */
reagent.format.printf = (function reagent$format$printf(var_args){
var args__10191__auto__ = [];
var len__10184__auto___24143 = arguments.length;
var i__10185__auto___24144 = (0);
while(true){
if((i__10185__auto___24144 < len__10184__auto___24143)){
args__10191__auto__.push((arguments[i__10185__auto___24144]));

var G__24145 = (i__10185__auto___24144 + (1));
i__10185__auto___24144 = G__24145;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((1) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((1)),(0),null)):null);
return reagent.format.printf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10192__auto__);
});

reagent.format.printf.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.print.call(null,cljs.core.apply.call(null,reagent.format.format,fmt,args));
});

reagent.format.printf.cljs$lang$maxFixedArity = (1);

reagent.format.printf.cljs$lang$applyTo = (function (seq24141){
var G__24142 = cljs.core.first.call(null,seq24141);
var seq24141__$1 = cljs.core.next.call(null,seq24141);
return reagent.format.printf.cljs$core$IFn$_invoke$arity$variadic(G__24142,seq24141__$1);
});

/**
 * formats currency using the current locale
 * to change locale set goog.i18n.NumberFormatSymbols eg:
 * (set! goog.i18n.NumberFormatSymbols goog.i18n.NumberFormatSymbols_it_IT)
 * see here for supported locales
 * https://github.com/google/closure-library/blob/master/closure/goog/i18n/numberformatsymbols.js
 *   
 */
reagent.format.currency_format = (function reagent$format$currency_format(n){
return (new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.CURRENCY)).format(n);
});
reagent.format.date_format = (function reagent$format$date_format(var_args){
var args__10191__auto__ = [];
var len__10184__auto___24153 = arguments.length;
var i__10185__auto___24154 = (0);
while(true){
if((i__10185__auto___24154 < len__10184__auto___24153)){
args__10191__auto__.push((arguments[i__10185__auto___24154]));

var G__24155 = (i__10185__auto___24154 + (1));
i__10185__auto___24154 = G__24155;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((2) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((2)),(0),null)):null);
return reagent.format.date_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__10192__auto__);
});

reagent.format.date_format.cljs$core$IFn$_invoke$arity$variadic = (function (date,fmt,p__24149){
var vec__24150 = p__24149;
var tz = cljs.core.nth.call(null,vec__24150,(0),null);
var formatter = (new goog.i18n.DateTimeFormat(fmt));
if(cljs.core.truth_(tz)){
return formatter.format(date,tz);
} else {
return formatter.format(date);
}
});

reagent.format.date_format.cljs$lang$maxFixedArity = (2);

reagent.format.date_format.cljs$lang$applyTo = (function (seq24146){
var G__24147 = cljs.core.first.call(null,seq24146);
var seq24146__$1 = cljs.core.next.call(null,seq24146);
var G__24148 = cljs.core.first.call(null,seq24146__$1);
var seq24146__$2 = cljs.core.next.call(null,seq24146__$1);
return reagent.format.date_format.cljs$core$IFn$_invoke$arity$variadic(G__24147,G__24148,seq24146__$2);
});

reagent.format.line_numbers = (function reagent$format$line_numbers(s){
var s__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
return clojure.string.join.call(null,"\n",cljs.core.map_indexed.call(null,((function (s__$1){
return (function (p1__24156_SHARP_,p2__24157_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((p1__24156_SHARP_ + (1))),". ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__24157_SHARP_)].join('');
});})(s__$1))
,clojure.string.split.call(null,s__$1,/\n/)));
});
/**
 * pluralizes the word based on the number of items
 * (util/pluralize ["John"] "lad")
 * (util/pluralize ["John" "James"] "lad")
 * (util/pluralize ["Alice"] "lad" "y" "ies")
 */
reagent.format.pluralize = (function reagent$format$pluralize(var_args){
var args__10191__auto__ = [];
var len__10184__auto___24166 = arguments.length;
var i__10185__auto___24167 = (0);
while(true){
if((i__10185__auto___24167 < len__10184__auto___24166)){
args__10191__auto__.push((arguments[i__10185__auto___24167]));

var G__24168 = (i__10185__auto___24167 + (1));
i__10185__auto___24167 = G__24168;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((1) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((1)),(0),null)):null);
return reagent.format.pluralize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10192__auto__);
});

reagent.format.pluralize.cljs$core$IFn$_invoke$arity$variadic = (function (items,p__24160){
var vec__24161 = p__24160;
var word = cljs.core.nth.call(null,vec__24161,(0),null);
var ending1 = cljs.core.nth.call(null,vec__24161,(1),null);
var ending2 = cljs.core.nth.call(null,vec__24161,(2),null);
var opts = vec__24161;
var n = cljs.core.count.call(null,items);
var plural = (function (){var G__24164 = cljs.core.count.call(null,opts);
switch (G__24164) {
case (1):
return "s";

break;
case (2):
return ending1;

break;
case (3):
return ending2;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24164)].join('')));

}
})();
var singular = (function (){var G__24165 = cljs.core.count.call(null,opts);
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"list","list",-1889078086,null),G__24165)){
return "";
} else {
if(cljs.core._EQ_.call(null,(1),G__24165)){
return "";
} else {
if(cljs.core._EQ_.call(null,(2),G__24165)){
return "";
} else {
if(cljs.core._EQ_.call(null,(3),G__24165)){
return ending1;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24165)].join('')));

}
}
}
}
})();
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(word),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((1) === n))?singular:plural))].join('');
});

reagent.format.pluralize.cljs$lang$maxFixedArity = (1);

reagent.format.pluralize.cljs$lang$applyTo = (function (seq24158){
var G__24159 = cljs.core.first.call(null,seq24158);
var seq24158__$1 = cljs.core.next.call(null,seq24158);
return reagent.format.pluralize.cljs$core$IFn$_invoke$arity$variadic(G__24159,seq24158__$1);
});

reagent.format.capitalize_words = (function reagent$format$capitalize_words(s){
return clojure.string.join.call(null," ",cljs.core.map.call(null,clojure.string.capitalize,clojure.string.split.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),/ /)));
});
/**
 * removes specified tags, eg:
 * (remove-tags "<p>foo bar</p>" "p")
 */
reagent.format.remove_tags = (function reagent$format$remove_tags(var_args){
var args__10191__auto__ = [];
var len__10184__auto___24172 = arguments.length;
var i__10185__auto___24173 = (0);
while(true){
if((i__10185__auto___24173 < len__10184__auto___24172)){
args__10191__auto__.push((arguments[i__10185__auto___24173]));

var G__24174 = (i__10185__auto___24173 + (1));
i__10185__auto___24173 = G__24174;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((1) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((1)),(0),null)):null);
return reagent.format.remove_tags.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10192__auto__);
});

reagent.format.remove_tags.cljs$core$IFn$_invoke$arity$variadic = (function (s,tags){
if(cljs.core.not.call(null,tags)){
return s;
} else {
var s__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
var tags__$1 = ["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"|",tags)),")"].join('');
var opening = cljs.core.re_pattern.call(null,["(?i)<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tags__$1),"(/?>|(\\s+[^>]*>))"].join(''));
var closing = cljs.core.re_pattern.call(null,["(?i)</",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tags__$1),">"].join(''));
return clojure.string.replace.call(null,clojure.string.replace.call(null,s__$1,opening,""),closing,"");
}
});

reagent.format.remove_tags.cljs$lang$maxFixedArity = (1);

reagent.format.remove_tags.cljs$lang$applyTo = (function (seq24170){
var G__24171 = cljs.core.first.call(null,seq24170);
var seq24170__$1 = cljs.core.next.call(null,seq24170);
return reagent.format.remove_tags.cljs$core$IFn$_invoke$arity$variadic(G__24171,seq24170__$1);
});

reagent.format.encode_uri = (function reagent$format$encode_uri(uri){
return encodeURIComponent(uri);
});
