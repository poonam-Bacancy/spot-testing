// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('spots.domain.form_helpers');
goog.require('cljs.core');
goog.require('spots.ui.components.inputs');
goog.require('clojure.string');
goog.require('spots.ui.components.spinner');
spots.domain.form_helpers.submit_button = (function spots$domain$form_helpers$submit_button(form_state,label){
var submitting_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"submitting","submitting",472950900),cljs.core.get_in.call(null,form_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"type","type",1174270348)], null)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.inputs._button,label,((submitting_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.components.spinner.small_white_spinner], null):null)], null);
});
spots.domain.form_helpers.is_sunday_QMARK_ = (function spots$domain$form_helpers$is_sunday_QMARK_(date_str){
if(cljs.core._EQ_.call(null,"0",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(date_str.getDay())].join(''))){
return true;
} else {
return false;
}
});
spots.domain.form_helpers.is_saturday_QMARK_ = (function spots$domain$form_helpers$is_saturday_QMARK_(date_str){
if(cljs.core._EQ_.call(null,"6",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(date_str.getDay())].join(''))){
return true;
} else {
return false;
}
});
spots.domain.form_helpers.format_phone = cljs.core.with_meta((function spots$domain$form_helpers$format_phone(value,_){
var clean_value = cljs.core.subs.call(null,clojure.string.replace.call(null,(function (){var or__8916__auto__ = value;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return "";
}
})(),/[^0-9]/,""),(0),(10));
var clean_value_length = cljs.core.count.call(null,clean_value);
if(((3) >= clean_value_length)){
return clean_value;
} else {
if(((6) >= clean_value_length)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,clean_value,(0),(3))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,clean_value,(3)))].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,clean_value,(0),(3))),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,clean_value,(3),(function (){var x__9275__auto__ = (6);
var y__9276__auto__ = clean_value_length;
return ((x__9275__auto__ < y__9276__auto__) ? x__9275__auto__ : y__9276__auto__);
})())),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,clean_value,(6)))].join('');
}
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"format-chars","format-chars",-1464252231),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["-",null], null), null)], null));
