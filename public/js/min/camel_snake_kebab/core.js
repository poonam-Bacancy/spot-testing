// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('camel_snake_kebab.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('camel_snake_kebab.internals.misc');
goog.require('camel_snake_kebab.internals.alter_name');
/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__10191__auto__ = [];
var len__10184__auto___23769 = arguments.length;
var i__10185__auto___23770 = (0);
while(true){
if((i__10185__auto___23770 < len__10184__auto___23769)){
args__10191__auto__.push((arguments[i__10185__auto___23770]));

var G__23771 = (i__10185__auto___23770 + (1));
i__10185__auto___23770 = G__23771;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((4) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__10192__auto__);
});

camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,rest);
});

camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4);

camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq23764){
var G__23765 = cljs.core.first.call(null,seq23764);
var seq23764__$1 = cljs.core.next.call(null,seq23764);
var G__23766 = cljs.core.first.call(null,seq23764__$1);
var seq23764__$2 = cljs.core.next.call(null,seq23764__$1);
var G__23767 = cljs.core.first.call(null,seq23764__$2);
var seq23764__$3 = cljs.core.next.call(null,seq23764__$2);
var G__23768 = cljs.core.first.call(null,seq23764__$3);
var seq23764__$4 = cljs.core.next.call(null,seq23764__$3);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic(G__23765,G__23766,G__23767,G__23768,seq23764__$4);
});

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__10191__auto__ = [];
var len__10184__auto___23780 = arguments.length;
var i__10185__auto___23781 = (0);
while(true){
if((i__10185__auto___23781 < len__10184__auto___23780)){
args__10191__auto__.push((arguments[i__10185__auto___23781]));

var G__23782 = (i__10185__auto___23781 + (1));
i__10185__auto___23781 = G__23782;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((1) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10192__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__23727__auto__,rest__23728__auto__){
var convert_case__23729__auto__ = (function (p1__23726__23730__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__23726__23730__auto__,rest__23728__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__23727__auto__,convert_case__23729__auto__);
});

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq23772){
var G__23773 = cljs.core.first.call(null,seq23772);
var seq23772__$1 = cljs.core.next.call(null,seq23772);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic(G__23773,seq23772__$1);
});


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__10191__auto__ = [];
var len__10184__auto___23783 = arguments.length;
var i__10185__auto___23784 = (0);
while(true){
if((i__10185__auto___23784 < len__10184__auto___23783)){
args__10191__auto__.push((arguments[i__10185__auto___23784]));

var G__23785 = (i__10185__auto___23784 + (1));
i__10185__auto___23784 = G__23785;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((1) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10192__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__23732__auto__,rest__23733__auto__){

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__23732__auto__),rest__23733__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq23774){
var G__23775 = cljs.core.first.call(null,seq23774);
var seq23774__$1 = cljs.core.next.call(null,seq23774);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic(G__23775,seq23774__$1);
});


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__10191__auto__ = [];
var len__10184__auto___23786 = arguments.length;
var i__10185__auto___23787 = (0);
while(true){
if((i__10185__auto___23787 < len__10184__auto___23786)){
args__10191__auto__.push((arguments[i__10185__auto___23787]));

var G__23788 = (i__10185__auto___23787 + (1));
i__10185__auto___23787 = G__23788;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((1) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10192__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__23732__auto__,rest__23733__auto__){

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__23732__auto__),rest__23733__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq23776){
var G__23777 = cljs.core.first.call(null,seq23776);
var seq23776__$1 = cljs.core.next.call(null,seq23776);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__23777,seq23776__$1);
});


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__10191__auto__ = [];
var len__10184__auto___23789 = arguments.length;
var i__10185__auto___23790 = (0);
while(true){
if((i__10185__auto___23790 < len__10184__auto___23789)){
args__10191__auto__.push((arguments[i__10185__auto___23790]));

var G__23791 = (i__10185__auto___23790 + (1));
i__10185__auto___23790 = G__23791;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((1) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10192__auto__);
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__23732__auto__,rest__23733__auto__){

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name.call(null,s__23732__auto__),rest__23733__auto__));
});

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq23778){
var G__23779 = cljs.core.first.call(null,seq23778);
var seq23778__$1 = cljs.core.next.call(null,seq23778);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__23779,seq23778__$1);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__10191__auto__ = [];
var len__10184__auto___23800 = arguments.length;
var i__10185__auto___23801 = (0);
while(true){
if((i__10185__auto___23801 < len__10184__auto___23800)){
args__10191__auto__.push((arguments[i__10185__auto___23801]));

var G__23802 = (i__10185__auto___23801 + (1));
i__10185__auto___23801 = G__23802;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((1) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10192__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__23727__auto__,rest__23728__auto__){
var convert_case__23729__auto__ = (function (p1__23726__23730__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__23726__23730__auto__,rest__23728__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__23727__auto__,convert_case__23729__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq23792){
var G__23793 = cljs.core.first.call(null,seq23792);
var seq23792__$1 = cljs.core.next.call(null,seq23792);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic(G__23793,seq23792__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__10191__auto__ = [];
var len__10184__auto___23803 = arguments.length;
var i__10185__auto___23804 = (0);
while(true){
if((i__10185__auto___23804 < len__10184__auto___23803)){
args__10191__auto__.push((arguments[i__10185__auto___23804]));

var G__23805 = (i__10185__auto___23804 + (1));
i__10185__auto___23804 = G__23805;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((1) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10192__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__23732__auto__,rest__23733__auto__){

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__23732__auto__),rest__23733__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq23794){
var G__23795 = cljs.core.first.call(null,seq23794);
var seq23794__$1 = cljs.core.next.call(null,seq23794);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__23795,seq23794__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__10191__auto__ = [];
var len__10184__auto___23806 = arguments.length;
var i__10185__auto___23807 = (0);
while(true){
if((i__10185__auto___23807 < len__10184__auto___23806)){
args__10191__auto__.push((arguments[i__10185__auto___23807]));

var G__23808 = (i__10185__auto___23807 + (1));
i__10185__auto___23807 = G__23808;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((1) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10192__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__23732__auto__,rest__23733__auto__){

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__23732__auto__),rest__23733__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq23796){
var G__23797 = cljs.core.first.call(null,seq23796);
var seq23796__$1 = cljs.core.next.call(null,seq23796);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__23797,seq23796__$1);
});


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__10191__auto__ = [];
var len__10184__auto___23809 = arguments.length;
var i__10185__auto___23810 = (0);
while(true){
if((i__10185__auto___23810 < len__10184__auto___23809)){
args__10191__auto__.push((arguments[i__10185__auto___23810]));

var G__23811 = (i__10185__auto___23810 + (1));
i__10185__auto___23810 = G__23811;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((1) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10192__auto__);
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__23732__auto__,rest__23733__auto__){

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name.call(null,s__23732__auto__),rest__23733__auto__));
});

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq23798){
var G__23799 = cljs.core.first.call(null,seq23798);
var seq23798__$1 = cljs.core.next.call(null,seq23798);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__23799,seq23798__$1);
});

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__10191__auto__ = [];
var len__10184__auto___23820 = arguments.length;
var i__10185__auto___23821 = (0);
while(true){
if((i__10185__auto___23821 < len__10184__auto___23820)){
args__10191__auto__.push((arguments[i__10185__auto___23821]));

var G__23822 = (i__10185__auto___23821 + (1));
i__10185__auto___23821 = G__23822;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((1) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10192__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__23727__auto__,rest__23728__auto__){
var convert_case__23729__auto__ = (function (p1__23726__23730__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__23726__23730__auto__,rest__23728__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__23727__auto__,convert_case__23729__auto__);
});

camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq23812){
var G__23813 = cljs.core.first.call(null,seq23812);
var seq23812__$1 = cljs.core.next.call(null,seq23812);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic(G__23813,seq23812__$1);
});


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__10191__auto__ = [];
var len__10184__auto___23823 = arguments.length;
var i__10185__auto___23824 = (0);
while(true){
if((i__10185__auto___23824 < len__10184__auto___23823)){
args__10191__auto__.push((arguments[i__10185__auto___23824]));

var G__23825 = (i__10185__auto___23824 + (1));
i__10185__auto___23824 = G__23825;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((1) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10192__auto__);
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__23732__auto__,rest__23733__auto__){

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__23732__auto__),rest__23733__auto__));
});

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq23814){
var G__23815 = cljs.core.first.call(null,seq23814);
var seq23814__$1 = cljs.core.next.call(null,seq23814);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic(G__23815,seq23814__$1);
});


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__10191__auto__ = [];
var len__10184__auto___23826 = arguments.length;
var i__10185__auto___23827 = (0);
while(true){
if((i__10185__auto___23827 < len__10184__auto___23826)){
args__10191__auto__.push((arguments[i__10185__auto___23827]));

var G__23828 = (i__10185__auto___23827 + (1));
i__10185__auto___23827 = G__23828;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((1) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10192__auto__);
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__23732__auto__,rest__23733__auto__){

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__23732__auto__),rest__23733__auto__));
});

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq23816){
var G__23817 = cljs.core.first.call(null,seq23816);
var seq23816__$1 = cljs.core.next.call(null,seq23816);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic(G__23817,seq23816__$1);
});


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__10191__auto__ = [];
var len__10184__auto___23829 = arguments.length;
var i__10185__auto___23830 = (0);
while(true){
if((i__10185__auto___23830 < len__10184__auto___23829)){
args__10191__auto__.push((arguments[i__10185__auto___23830]));

var G__23831 = (i__10185__auto___23830 + (1));
i__10185__auto___23830 = G__23831;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((1) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10192__auto__);
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__23732__auto__,rest__23733__auto__){

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name.call(null,s__23732__auto__),rest__23733__auto__));
});

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq23818){
var G__23819 = cljs.core.first.call(null,seq23818);
var seq23818__$1 = cljs.core.next.call(null,seq23818);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic(G__23819,seq23818__$1);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__10191__auto__ = [];
var len__10184__auto___23840 = arguments.length;
var i__10185__auto___23841 = (0);
while(true){
if((i__10185__auto___23841 < len__10184__auto___23840)){
args__10191__auto__.push((arguments[i__10185__auto___23841]));

var G__23842 = (i__10185__auto___23841 + (1));
i__10185__auto___23841 = G__23842;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((1) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10192__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__23727__auto__,rest__23728__auto__){
var convert_case__23729__auto__ = (function (p1__23726__23730__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__23726__23730__auto__,rest__23728__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__23727__auto__,convert_case__23729__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq23832){
var G__23833 = cljs.core.first.call(null,seq23832);
var seq23832__$1 = cljs.core.next.call(null,seq23832);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic(G__23833,seq23832__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__10191__auto__ = [];
var len__10184__auto___23843 = arguments.length;
var i__10185__auto___23844 = (0);
while(true){
if((i__10185__auto___23844 < len__10184__auto___23843)){
args__10191__auto__.push((arguments[i__10185__auto___23844]));

var G__23845 = (i__10185__auto___23844 + (1));
i__10185__auto___23844 = G__23845;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((1) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10192__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__23732__auto__,rest__23733__auto__){

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__23732__auto__),rest__23733__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq23834){
var G__23835 = cljs.core.first.call(null,seq23834);
var seq23834__$1 = cljs.core.next.call(null,seq23834);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic(G__23835,seq23834__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__10191__auto__ = [];
var len__10184__auto___23846 = arguments.length;
var i__10185__auto___23847 = (0);
while(true){
if((i__10185__auto___23847 < len__10184__auto___23846)){
args__10191__auto__.push((arguments[i__10185__auto___23847]));

var G__23848 = (i__10185__auto___23847 + (1));
i__10185__auto___23847 = G__23848;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((1) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10192__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__23732__auto__,rest__23733__auto__){

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__23732__auto__),rest__23733__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq23836){
var G__23837 = cljs.core.first.call(null,seq23836);
var seq23836__$1 = cljs.core.next.call(null,seq23836);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic(G__23837,seq23836__$1);
});


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__10191__auto__ = [];
var len__10184__auto___23849 = arguments.length;
var i__10185__auto___23850 = (0);
while(true){
if((i__10185__auto___23850 < len__10184__auto___23849)){
args__10191__auto__.push((arguments[i__10185__auto___23850]));

var G__23851 = (i__10185__auto___23850 + (1));
i__10185__auto___23850 = G__23851;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((1) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10192__auto__);
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__23732__auto__,rest__23733__auto__){

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name.call(null,s__23732__auto__),rest__23733__auto__));
});

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq23838){
var G__23839 = cljs.core.first.call(null,seq23838);
var seq23838__$1 = cljs.core.next.call(null,seq23838);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic(G__23839,seq23838__$1);
});

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__10191__auto__ = [];
var len__10184__auto___23860 = arguments.length;
var i__10185__auto___23861 = (0);
while(true){
if((i__10185__auto___23861 < len__10184__auto___23860)){
args__10191__auto__.push((arguments[i__10185__auto___23861]));

var G__23862 = (i__10185__auto___23861 + (1));
i__10185__auto___23861 = G__23862;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((1) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10192__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__23727__auto__,rest__23728__auto__){
var convert_case__23729__auto__ = (function (p1__23726__23730__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__23726__23730__auto__,rest__23728__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__23727__auto__,convert_case__23729__auto__);
});

camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq23852){
var G__23853 = cljs.core.first.call(null,seq23852);
var seq23852__$1 = cljs.core.next.call(null,seq23852);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic(G__23853,seq23852__$1);
});


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__10191__auto__ = [];
var len__10184__auto___23863 = arguments.length;
var i__10185__auto___23864 = (0);
while(true){
if((i__10185__auto___23864 < len__10184__auto___23863)){
args__10191__auto__.push((arguments[i__10185__auto___23864]));

var G__23865 = (i__10185__auto___23864 + (1));
i__10185__auto___23864 = G__23865;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((1) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10192__auto__);
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__23732__auto__,rest__23733__auto__){

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__23732__auto__),rest__23733__auto__));
});

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq23854){
var G__23855 = cljs.core.first.call(null,seq23854);
var seq23854__$1 = cljs.core.next.call(null,seq23854);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic(G__23855,seq23854__$1);
});


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__10191__auto__ = [];
var len__10184__auto___23866 = arguments.length;
var i__10185__auto___23867 = (0);
while(true){
if((i__10185__auto___23867 < len__10184__auto___23866)){
args__10191__auto__.push((arguments[i__10185__auto___23867]));

var G__23868 = (i__10185__auto___23867 + (1));
i__10185__auto___23867 = G__23868;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((1) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10192__auto__);
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__23732__auto__,rest__23733__auto__){

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__23732__auto__),rest__23733__auto__));
});

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq23856){
var G__23857 = cljs.core.first.call(null,seq23856);
var seq23856__$1 = cljs.core.next.call(null,seq23856);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__23857,seq23856__$1);
});


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__10191__auto__ = [];
var len__10184__auto___23869 = arguments.length;
var i__10185__auto___23870 = (0);
while(true){
if((i__10185__auto___23870 < len__10184__auto___23869)){
args__10191__auto__.push((arguments[i__10185__auto___23870]));

var G__23871 = (i__10185__auto___23870 + (1));
i__10185__auto___23870 = G__23871;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((1) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10192__auto__);
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__23732__auto__,rest__23733__auto__){

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name.call(null,s__23732__auto__),rest__23733__auto__));
});

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq23858){
var G__23859 = cljs.core.first.call(null,seq23858);
var seq23858__$1 = cljs.core.next.call(null,seq23858);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__23859,seq23858__$1);
});

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__10191__auto__ = [];
var len__10184__auto___23880 = arguments.length;
var i__10185__auto___23881 = (0);
while(true){
if((i__10185__auto___23881 < len__10184__auto___23880)){
args__10191__auto__.push((arguments[i__10185__auto___23881]));

var G__23882 = (i__10185__auto___23881 + (1));
i__10185__auto___23881 = G__23882;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((1) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10192__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__23727__auto__,rest__23728__auto__){
var convert_case__23729__auto__ = (function (p1__23726__23730__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__23726__23730__auto__,rest__23728__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__23727__auto__,convert_case__23729__auto__);
});

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq23872){
var G__23873 = cljs.core.first.call(null,seq23872);
var seq23872__$1 = cljs.core.next.call(null,seq23872);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic(G__23873,seq23872__$1);
});


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__10191__auto__ = [];
var len__10184__auto___23883 = arguments.length;
var i__10185__auto___23884 = (0);
while(true){
if((i__10185__auto___23884 < len__10184__auto___23883)){
args__10191__auto__.push((arguments[i__10185__auto___23884]));

var G__23885 = (i__10185__auto___23884 + (1));
i__10185__auto___23884 = G__23885;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((1) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10192__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__23732__auto__,rest__23733__auto__){

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__23732__auto__),rest__23733__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq23874){
var G__23875 = cljs.core.first.call(null,seq23874);
var seq23874__$1 = cljs.core.next.call(null,seq23874);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic(G__23875,seq23874__$1);
});


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__10191__auto__ = [];
var len__10184__auto___23886 = arguments.length;
var i__10185__auto___23887 = (0);
while(true){
if((i__10185__auto___23887 < len__10184__auto___23886)){
args__10191__auto__.push((arguments[i__10185__auto___23887]));

var G__23888 = (i__10185__auto___23887 + (1));
i__10185__auto___23887 = G__23888;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((1) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10192__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__23732__auto__,rest__23733__auto__){

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__23732__auto__),rest__23733__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq23876){
var G__23877 = cljs.core.first.call(null,seq23876);
var seq23876__$1 = cljs.core.next.call(null,seq23876);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic(G__23877,seq23876__$1);
});


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__10191__auto__ = [];
var len__10184__auto___23889 = arguments.length;
var i__10185__auto___23890 = (0);
while(true){
if((i__10185__auto___23890 < len__10184__auto___23889)){
args__10191__auto__.push((arguments[i__10185__auto___23890]));

var G__23891 = (i__10185__auto___23890 + (1));
i__10185__auto___23890 = G__23891;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((1) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10192__auto__);
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__23732__auto__,rest__23733__auto__){

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name.call(null,s__23732__auto__),rest__23733__auto__));
});

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq23878){
var G__23879 = cljs.core.first.call(null,seq23878);
var seq23878__$1 = cljs.core.next.call(null,seq23878);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic(G__23879,seq23878__$1);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__10191__auto__ = [];
var len__10184__auto___23900 = arguments.length;
var i__10185__auto___23901 = (0);
while(true){
if((i__10185__auto___23901 < len__10184__auto___23900)){
args__10191__auto__.push((arguments[i__10185__auto___23901]));

var G__23902 = (i__10185__auto___23901 + (1));
i__10185__auto___23901 = G__23902;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((1) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10192__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__23727__auto__,rest__23728__auto__){
var convert_case__23729__auto__ = (function (p1__23726__23730__auto__){
return cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__23726__23730__auto__,rest__23728__auto__);
});
return camel_snake_kebab.internals.alter_name.alter_name.call(null,s__23727__auto__,convert_case__23729__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq23892){
var G__23893 = cljs.core.first.call(null,seq23892);
var seq23892__$1 = cljs.core.next.call(null,seq23892);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic(G__23893,seq23892__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__10191__auto__ = [];
var len__10184__auto___23903 = arguments.length;
var i__10185__auto___23904 = (0);
while(true){
if((i__10185__auto___23904 < len__10184__auto___23903)){
args__10191__auto__.push((arguments[i__10185__auto___23904]));

var G__23905 = (i__10185__auto___23904 + (1));
i__10185__auto___23904 = G__23905;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((1) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10192__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__23732__auto__,rest__23733__auto__){

return cljs.core.identity.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__23732__auto__),rest__23733__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq23894){
var G__23895 = cljs.core.first.call(null,seq23894);
var seq23894__$1 = cljs.core.next.call(null,seq23894);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic(G__23895,seq23894__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__10191__auto__ = [];
var len__10184__auto___23906 = arguments.length;
var i__10185__auto___23907 = (0);
while(true){
if((i__10185__auto___23907 < len__10184__auto___23906)){
args__10191__auto__.push((arguments[i__10185__auto___23907]));

var G__23908 = (i__10185__auto___23907 + (1));
i__10185__auto___23907 = G__23908;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((1) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10192__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__23732__auto__,rest__23733__auto__){

return cljs.core.symbol.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__23732__auto__),rest__23733__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq23896){
var G__23897 = cljs.core.first.call(null,seq23896);
var seq23896__$1 = cljs.core.next.call(null,seq23896);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic(G__23897,seq23896__$1);
});


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__10191__auto__ = [];
var len__10184__auto___23909 = arguments.length;
var i__10185__auto___23910 = (0);
while(true){
if((i__10185__auto___23910 < len__10184__auto___23909)){
args__10191__auto__.push((arguments[i__10185__auto___23910]));

var G__23911 = (i__10185__auto___23910 + (1));
i__10185__auto___23910 = G__23911;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((1) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10192__auto__);
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__23732__auto__,rest__23733__auto__){

return cljs.core.keyword.call(null,cljs.core.apply.call(null,camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name.call(null,s__23732__auto__),rest__23733__auto__));
});

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1);

camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq23898){
var G__23899 = cljs.core.first.call(null,seq23898);
var seq23898__$1 = cljs.core.next.call(null,seq23898);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic(G__23899,seq23898__$1);
});

