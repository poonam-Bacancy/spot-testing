// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('spots.ui.main');
goog.require('cljs.core');
goog.require('keechma.ui_component');
goog.require('keechma.toolbox.ui');
goog.require('keechma.toolbox.css.core');
goog.require('keechma.toolbox.util');
spots.ui.main.pages = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),"user-info",new cljs.core.Keyword(null,"title","title",636505583),"Your Info"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),"order-info",new cljs.core.Keyword(null,"title","title",636505583),"Order Info"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),"personalization",new cljs.core.Keyword(null,"title","title",636505583),"Personalization"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),"confirmation",new cljs.core.Keyword(null,"title","title",636505583),"Confirmation"], null)], null);
keechma.toolbox.css.core.register_component_styles.call(null,new cljs.core.Keyword(null,".spots_ui_main--wrap28819",".spots_ui_main--wrap28819",-837452112),cljs.core.PersistentVector.EMPTY);

spots.ui.main._wrap = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,(function (){var or__8916__auto__ = null;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return "div";
}
})())),".spots_ui_main--wrap28819",".spots_ui_main--wrap",".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.core.name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mx-auto","mx-auto",796863543),new cljs.core.Keyword(null,"my4","my4",813258798)], null))))].join('');
keechma.toolbox.css.core.register_component_styles.call(null,new cljs.core.Keyword(null,".spots_ui_main--content28820",".spots_ui_main--content28820",-616697493),cljs.core.PersistentArrayMap.EMPTY);

spots.ui.main._content = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,(function (){var or__8916__auto__ = null;
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return "div";
}
})())),".spots_ui_main--content28820",".spots_ui_main--content",".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.core.name,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mx-auto","mx-auto",796863543),new cljs.core.Keyword(null,"mt4","mt4",1710195215),new cljs.core.Keyword(null,"max-width-4","max-width-4",1280412343)], null))))].join('');
keechma.toolbox.css.core.register_component_styles.call(null,new cljs.core.Keyword(null,".spots_ui_main--tab28821",".spots_ui_main--tab28821",1851373421),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"50px",new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"none",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"none",new cljs.core.Keyword(null,"border-left","border-left",-1150760178),"3px solid white"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),"50px"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:first-child","&:first-child",-246447560),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"border-left","border-left",-1150760178),"none"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:last-child","&:last-child",1329794843),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&.current","&.current",-1296563250),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"&:after","&:after",-945103658),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"content","content",15833224),"\"\"",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"left","left",-399115937),"calc(50% - 5px)",new cljs.core.Keyword(null,"width","width",-384071477),(0),new cljs.core.Keyword(null,"height","height",1025178622),(0),new cljs.core.Keyword(null,"border-left","border-left",-1150760178),"10px solid transparent",new cljs.core.Keyword(null,"border-right","border-right",-668932860),"10px solid transparent",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"10px solid #86D6F7"], null)], null)], null)], null)], null));

spots.ui.main._tab = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,(function (){var or__8916__auto__ = new cljs.core.Keyword(null,"li","li",723558921);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return "div";
}
})())),".spots_ui_main--tab28821",".spots_ui_main--tab",".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,".",cljs.core.map.call(null,cljs.core.name,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"center","center",-748944368)], null))))].join('');
spots.ui.main.render_tabs = (function spots$ui$main$render_tabs(ctx){
var current_route = keechma.toolbox.ui.route_GT_.call(null,ctx);
var current_page = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(current_route);
var form_progress = keechma.toolbox.ui.sub_GT_.call(null,ctx,new cljs.core.Keyword(null,"form-progress","form-progress",1431385543));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.bg-gray.clearfix","div.bg-gray.clearfix",-1582404561),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-style-none.m0.p0.max-width-4.mx-auto.justify-center.flex","ul.list-style-none.m0.p0.max-width-4.mx-auto.justify-center.flex",1370849336),cljs.core.map.call(null,((function (current_route,current_page,form_progress){
return (function (p__28822){
var map__28823 = p__28822;
var map__28823__$1 = ((((!((map__28823 == null)))?((((map__28823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28823.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28823):map__28823);
var page = cljs.core.get.call(null,map__28823__$1,new cljs.core.Keyword(null,"page","page",849072397));
var title = cljs.core.get.call(null,map__28823__$1,new cljs.core.Keyword(null,"title","title",636505583));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.main._tab,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),keechma.toolbox.util.class_names.call(null,cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bg-cyan","bg-cyan",-1582237015),new cljs.core.Keyword(null,"current","current",-1088038603)], null),(cljs.core._EQ_.call(null,page,current_page)) || ((cljs.core._EQ_.call(null,"payment",current_page)) && (cljs.core._EQ_.call(null,"confirmation",page))) || ((cljs.core._EQ_.call(null,"recipient",current_page)) && (cljs.core._EQ_.call(null,"order-info",page)))]))], null),(cljs.core.truth_(cljs.core.keyword.call(null,page).call(null,form_progress))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.block.py1.text-decoration-none.c-white.uppercase","a.block.py1.text-decoration-none.c-white.uppercase",1112888885),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),keechma.ui_component.url.call(null,ctx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),page], null))], null),title], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.block.py0.text-decoration-none.c-white.uppercase","p.block.py0.text-decoration-none.c-white.uppercase",-799494923),title], null))], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),page], null));
});})(current_route,current_page,form_progress))
,spots.ui.main.pages)], null)], null);
});
spots.ui.main.progress_allows_route_QMARK_ = (function spots$ui$main$progress_allows_route_QMARK_(target,cp,fp){
if(cljs.core.truth_(fp)){
var and__8904__auto__ = cljs.core._EQ_.call(null,target,cp);
if(and__8904__auto__){
return cljs.core.keyword.call(null,cp).call(null,fp);
} else {
return and__8904__auto__;
}
} else {
return null;
}
});
spots.ui.main.last_completed_step = (function spots$ui$main$last_completed_step(fp){
if(cljs.core.truth_(fp)){
return cljs.core.name.call(null,cljs.core.key.call(null,cljs.core.last.call(null,cljs.core.filter.call(null,(function (p1__28825_SHARP_){
return cljs.core.val.call(null,p1__28825_SHARP_) === true;
}),fp))));
} else {
return null;
}
});
spots.ui.main.render = (function spots$ui$main$render(ctx){
var current_route = keechma.toolbox.ui.route_GT_.call(null,ctx);
var form_progress = keechma.toolbox.ui.sub_GT_.call(null,ctx,new cljs.core.Keyword(null,"form-progress","form-progress",1431385543));
var current_page = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(current_route);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.main._wrap,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.center","div.center",1338956224),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.c-gray-l","h1.c-gray-l",214816728),"ORDER MINI CUPCAKES"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.main.render_tabs,ctx], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.ui.main._content,(cljs.core.truth_(spots.ui.main.progress_allows_route_QMARK_.call(null,"user-info",current_page,form_progress))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.ui_component.component.call(null,ctx,new cljs.core.Keyword(null,"forms-user-info","forms-user-info",-646647207))], null):(cljs.core.truth_(spots.ui.main.progress_allows_route_QMARK_.call(null,"order-info",current_page,form_progress))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.ui_component.component.call(null,ctx,new cljs.core.Keyword(null,"forms-order-info","forms-order-info",-1565198257))], null):(cljs.core.truth_(spots.ui.main.progress_allows_route_QMARK_.call(null,"personalization",current_page,form_progress))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.ui_component.component.call(null,ctx,new cljs.core.Keyword(null,"forms-personalization","forms-personalization",1490219199))], null):(cljs.core.truth_(spots.ui.main.progress_allows_route_QMARK_.call(null,"confirmation",current_page,form_progress))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.ui_component.component.call(null,ctx,new cljs.core.Keyword(null,"forms-confirmation","forms-confirmation",1753593750))], null):(cljs.core.truth_(spots.ui.main.progress_allows_route_QMARK_.call(null,"recipient",current_page,form_progress))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.ui_component.component.call(null,ctx,new cljs.core.Keyword(null,"forms-recipient","forms-recipient",1594245544))], null):keechma.ui_component.redirect.call(null,ctx,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(spots.ui.main.last_completed_step.call(null,form_progress))].join('')], null))
)))))], null)], null);
});
spots.ui.main.component = keechma.ui_component.constructor$.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"renderer","renderer",336841071),spots.ui.main.render,new cljs.core.Keyword(null,"subscription-deps","subscription-deps",1798032321),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"order-form","order-form",-1222210477),new cljs.core.Keyword(null,"form-progress","form-progress",1431385543)], null),new cljs.core.Keyword(null,"component-deps","component-deps",-405716162),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"forms-user-info","forms-user-info",-646647207),new cljs.core.Keyword(null,"forms-order-info","forms-order-info",-1565198257),new cljs.core.Keyword(null,"forms-personalization","forms-personalization",1490219199),new cljs.core.Keyword(null,"forms-confirmation","forms-confirmation",1753593750),new cljs.core.Keyword(null,"forms-recipient","forms-recipient",1594245544)], null)], null));
