// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('oops.config');
goog.require('cljs.core');
oops.config.get_initial_runtime_config = (function oops$config$get_initial_runtime_config(){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"unexpected-empty-selector","unexpected-empty-selector",-572791900),new cljs.core.Keyword(null,"warning-reporting","warning-reporting",-319054391),new cljs.core.Keyword(null,"use-envelope","use-envelope",-2007197780),new cljs.core.Keyword(null,"error-reporting","error-reporting",1274700782),new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),new cljs.core.Keyword(null,"child-factory","child-factory",-1019029066),new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.Keyword(null,"unexpected-punching-selector","unexpected-punching-selector",-1934135338),new cljs.core.Keyword(null,"throw-errors-from-macro-call-sites","throw-errors-from-macro-call-sites",-1338743049),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.Keyword(null,"unexpected-soft-selector","unexpected-soft-selector",-1117708580),new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731)],[new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"console","console",1228072057),true,new cljs.core.Keyword(null,"throw","throw",-1044625833),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"js-obj","js-obj",-1298148277),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"warn","warn",-436710552),true,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"error","error",-978969032)]);
});
oops.config._STAR_runtime_config_STAR_ = oops.config.get_initial_runtime_config.call(null);
oops.config.set_current_runtime_config_BANG_ = (function oops$config$set_current_runtime_config_BANG_(new_config){

oops.config._STAR_runtime_config_STAR_ = new_config;

return new_config;
});
oops.config.get_current_runtime_config = (function oops$config$get_current_runtime_config(){
return oops.config._STAR_runtime_config_STAR_;
});
oops.config.update_current_runtime_config_BANG_ = (function oops$config$update_current_runtime_config_BANG_(var_args){
var args__10191__auto__ = [];
var len__10184__auto___14825 = arguments.length;
var i__10185__auto___14826 = (0);
while(true){
if((i__10185__auto___14826 < len__10184__auto___14825)){
args__10191__auto__.push((arguments[i__10185__auto___14826]));

var G__14827 = (i__10185__auto___14826 + (1));
i__10185__auto___14826 = G__14827;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((1) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((1)),(0),null)):null);
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10192__auto__);
});

oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f_or_map,args){
if(cljs.core.map_QMARK_.call(null,f_or_map)){
return oops.config.update_current_runtime_config_BANG_.call(null,cljs.core.merge,f_or_map);
} else {
return oops.config.set_current_runtime_config_BANG_.call(null,cljs.core.apply.call(null,f_or_map,oops.config.get_current_runtime_config.call(null),args));
}
});

oops.config.update_current_runtime_config_BANG_.cljs$lang$maxFixedArity = (1);

oops.config.update_current_runtime_config_BANG_.cljs$lang$applyTo = (function (seq14823){
var G__14824 = cljs.core.first.call(null,seq14823);
var seq14823__$1 = cljs.core.next.call(null,seq14823);
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14824,seq14823__$1);
});

oops.config.get_config_key = (function oops$config$get_config_key(var_args){
var args__10191__auto__ = [];
var len__10184__auto___14834 = arguments.length;
var i__10185__auto___14835 = (0);
while(true){
if((i__10185__auto___14835 < len__10184__auto___14834)){
args__10191__auto__.push((arguments[i__10185__auto___14835]));

var G__14836 = (i__10185__auto___14835 + (1));
i__10185__auto___14835 = G__14836;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((1) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((1)),(0),null)):null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10192__auto__);
});

oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__14830){
var vec__14831 = p__14830;
var config = cljs.core.nth.call(null,vec__14831,(0),null);
return key.call(null,(function (){var or__8916__auto__ = config;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return oops.config.get_current_runtime_config.call(null);
}
})());
});

oops.config.get_config_key.cljs$lang$maxFixedArity = (1);

oops.config.get_config_key.cljs$lang$applyTo = (function (seq14828){
var G__14829 = cljs.core.first.call(null,seq14828);
var seq14828__$1 = cljs.core.next.call(null,seq14828);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(G__14829,seq14828__$1);
});

oops.config.has_config_key_QMARK_ = (function oops$config$has_config_key_QMARK_(var_args){
var args__10191__auto__ = [];
var len__10184__auto___14843 = arguments.length;
var i__10185__auto___14844 = (0);
while(true){
if((i__10185__auto___14844 < len__10184__auto___14843)){
args__10191__auto__.push((arguments[i__10185__auto___14844]));

var G__14845 = (i__10185__auto___14844 + (1));
i__10185__auto___14844 = G__14845;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((1) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((1)),(0),null)):null);
return oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__10192__auto__);
});

oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__14839){
var vec__14840 = p__14839;
var config = cljs.core.nth.call(null,vec__14840,(0),null);
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("oops.config","not-found","oops.config/not-found",105443457),cljs.core.get.call(null,(function (){var or__8916__auto__ = config;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return oops.config.get_current_runtime_config.call(null);
}
})(),key,new cljs.core.Keyword("oops.config","not-found","oops.config/not-found",105443457)));
});

oops.config.has_config_key_QMARK_.cljs$lang$maxFixedArity = (1);

oops.config.has_config_key_QMARK_.cljs$lang$applyTo = (function (seq14837){
var G__14838 = cljs.core.first.call(null,seq14837);
var seq14837__$1 = cljs.core.next.call(null,seq14837);
return oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__14838,seq14837__$1);
});

oops.config.get_error_reporting = (function oops$config$get_error_reporting(var_args){
var args__10191__auto__ = [];
var len__10184__auto___14851 = arguments.length;
var i__10185__auto___14852 = (0);
while(true){
if((i__10185__auto___14852 < len__10184__auto___14851)){
args__10191__auto__.push((arguments[i__10185__auto___14852]));

var G__14853 = (i__10185__auto___14852 + (1));
i__10185__auto___14852 = G__14853;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((0) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((0)),(0),null)):null);
return oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__10192__auto__);
});

oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__14847){
var vec__14848 = p__14847;
var config = cljs.core.nth.call(null,vec__14848,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"error-reporting","error-reporting",1274700782),config);
});

oops.config.get_error_reporting.cljs$lang$maxFixedArity = (0);

oops.config.get_error_reporting.cljs$lang$applyTo = (function (seq14846){
return oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14846));
});

oops.config.get_warning_reporting = (function oops$config$get_warning_reporting(var_args){
var args__10191__auto__ = [];
var len__10184__auto___14859 = arguments.length;
var i__10185__auto___14860 = (0);
while(true){
if((i__10185__auto___14860 < len__10184__auto___14859)){
args__10191__auto__.push((arguments[i__10185__auto___14860]));

var G__14861 = (i__10185__auto___14860 + (1));
i__10185__auto___14860 = G__14861;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((0) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((0)),(0),null)):null);
return oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__10192__auto__);
});

oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__14855){
var vec__14856 = p__14855;
var config = cljs.core.nth.call(null,vec__14856,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"warning-reporting","warning-reporting",-319054391),config);
});

oops.config.get_warning_reporting.cljs$lang$maxFixedArity = (0);

oops.config.get_warning_reporting.cljs$lang$applyTo = (function (seq14854){
return oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14854));
});

oops.config.get_suppress_reporting = (function oops$config$get_suppress_reporting(var_args){
var args__10191__auto__ = [];
var len__10184__auto___14867 = arguments.length;
var i__10185__auto___14868 = (0);
while(true){
if((i__10185__auto___14868 < len__10184__auto___14867)){
args__10191__auto__.push((arguments[i__10185__auto___14868]));

var G__14869 = (i__10185__auto___14868 + (1));
i__10185__auto___14868 = G__14869;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((0) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((0)),(0),null)):null);
return oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__10192__auto__);
});

oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__14863){
var vec__14864 = p__14863;
var config = cljs.core.nth.call(null,vec__14864,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"suppress-reporting","suppress-reporting",43885458),config);
});

oops.config.get_suppress_reporting.cljs$lang$maxFixedArity = (0);

oops.config.get_suppress_reporting.cljs$lang$applyTo = (function (seq14862){
return oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14862));
});

oops.config.get_child_factory = (function oops$config$get_child_factory(var_args){
var args__10191__auto__ = [];
var len__10184__auto___14875 = arguments.length;
var i__10185__auto___14876 = (0);
while(true){
if((i__10185__auto___14876 < len__10184__auto___14875)){
args__10191__auto__.push((arguments[i__10185__auto___14876]));

var G__14877 = (i__10185__auto___14876 + (1));
i__10185__auto___14876 = G__14877;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((0) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((0)),(0),null)):null);
return oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic(argseq__10192__auto__);
});

oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic = (function (p__14871){
var vec__14872 = p__14871;
var config = cljs.core.nth.call(null,vec__14872,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"child-factory","child-factory",-1019029066),config);
});

oops.config.get_child_factory.cljs$lang$maxFixedArity = (0);

oops.config.get_child_factory.cljs$lang$applyTo = (function (seq14870){
return oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14870));
});

oops.config.set_child_factory_BANG_ = (function oops$config$set_child_factory_BANG_(new_factory_fn){
return oops.config.update_current_runtime_config_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"child-factory","child-factory",-1019029066),new_factory_fn], null));
});
oops.config.throw_errors_from_macro_call_sites_QMARK_ = (function oops$config$throw_errors_from_macro_call_sites_QMARK_(var_args){
var args__10191__auto__ = [];
var len__10184__auto___14883 = arguments.length;
var i__10185__auto___14884 = (0);
while(true){
if((i__10185__auto___14884 < len__10184__auto___14883)){
args__10191__auto__.push((arguments[i__10185__auto___14884]));

var G__14885 = (i__10185__auto___14884 + (1));
i__10185__auto___14884 = G__14885;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((0) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((0)),(0),null)):null);
return oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__10192__auto__);
});

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__14879){
var vec__14880 = p__14879;
var config = cljs.core.nth.call(null,vec__14880,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"throw-errors-from-macro-call-sites","throw-errors-from-macro-call-sites",-1338743049),config) === true;
});

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$maxFixedArity = (0);

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$applyTo = (function (seq14878){
return oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14878));
});

oops.config.use_envelope_QMARK_ = (function oops$config$use_envelope_QMARK_(var_args){
var args__10191__auto__ = [];
var len__10184__auto___14891 = arguments.length;
var i__10185__auto___14892 = (0);
while(true){
if((i__10185__auto___14892 < len__10184__auto___14891)){
args__10191__auto__.push((arguments[i__10185__auto___14892]));

var G__14893 = (i__10185__auto___14892 + (1));
i__10185__auto___14892 = G__14893;
continue;
} else {
}
break;
}

var argseq__10192__auto__ = ((((0) < args__10191__auto__.length))?(new cljs.core.IndexedSeq(args__10191__auto__.slice((0)),(0),null)):null);
return oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__10192__auto__);
});

oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__14887){
var vec__14888 = p__14887;
var config = cljs.core.nth.call(null,vec__14888,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"use-envelope","use-envelope",-2007197780),config) === true;
});

oops.config.use_envelope_QMARK_.cljs$lang$maxFixedArity = (0);

oops.config.use_envelope_QMARK_.cljs$lang$applyTo = (function (seq14886){
return oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14886));
});

