// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('spots.forms');
goog.require('cljs.core');
goog.require('spots.forms.user_info');
goog.require('spots.forms.order_info');
goog.require('spots.forms.personalization');
goog.require('spots.forms.confirmation');
goog.require('spots.forms.recipient');
goog.require('spots.forms.payment');
goog.require('spots.forms.design.message');
spots.forms.forms = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"user-info","user-info",-1061909920),spots.forms.user_info.constructor$.call(null),new cljs.core.Keyword(null,"order-info","order-info",1576812499),spots.forms.order_info.constructor$.call(null),new cljs.core.Keyword(null,"personalization","personalization",-90772288),spots.forms.personalization.constructor$.call(null),new cljs.core.Keyword(null,"confirmation","confirmation",-634977782),spots.forms.confirmation.constructor$.call(null),new cljs.core.Keyword(null,"recipient","recipient",1650072234),spots.forms.recipient.constructor$.call(null),new cljs.core.Keyword(null,"payment","payment",-1682035288),spots.forms.payment.constructor$.call(null),new cljs.core.Keyword(null,"design-message","design-message",-641954377),spots.forms.design.message.constructor$.call(null)], null);
spots.forms.make_page_matches_QMARK_ = (function spots$forms$make_page_matches_QMARK_(matching_page){
return (function (p__27824){
var map__27825 = p__27824;
var map__27825__$1 = ((((!((map__27825 == null)))?((((map__27825.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27825.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27825):map__27825);
var page = cljs.core.get.call(null,map__27825__$1,new cljs.core.Keyword(null,"page","page",849072397));
if(cljs.core._EQ_.call(null,page,matching_page)){
return new cljs.core.Keyword(null,"form","form",-1624062471);
} else {
return null;
}
});
});
spots.forms.forms_params = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"user-info","user-info",-1061909920),spots.forms.make_page_matches_QMARK_.call(null,"user-info"),new cljs.core.Keyword(null,"order-info","order-info",1576812499),spots.forms.make_page_matches_QMARK_.call(null,"order-info"),new cljs.core.Keyword(null,"recipient","recipient",1650072234),spots.forms.make_page_matches_QMARK_.call(null,"recipient"),new cljs.core.Keyword(null,"personalization","personalization",-90772288),spots.forms.make_page_matches_QMARK_.call(null,"personalization"),new cljs.core.Keyword(null,"confirmation","confirmation",-634977782),spots.forms.make_page_matches_QMARK_.call(null,"confirmation"),new cljs.core.Keyword(null,"design-message","design-message",-641954377),(function (route){
if(cljs.core._EQ_.call(null,"message",cljs.core.get_in.call(null,route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"popup","popup",635890211),new cljs.core.Keyword(null,"type","type",1174270348)], null)))){
return cljs.core.get_in.call(null,route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"popup","popup",635890211),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
} else {
return null;
}
})], null);
