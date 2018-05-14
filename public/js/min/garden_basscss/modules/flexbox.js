// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('garden_basscss.modules.flexbox');
goog.require('cljs.core');
goog.require('garden_basscss.vars');
goog.require('garden.stylesheet');
garden_basscss.modules.flexbox.breakpoints = (function garden_basscss$modules$flexbox$breakpoints(){
return new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,garden_basscss.vars.vars));
});
garden_basscss.modules.flexbox.add_prefix = (function garden_basscss$modules$flexbox$add_prefix(val){
var val__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(val)].join('');
var G__23336 = val__$1;
switch (G__23336) {
case "start":
return "flex-start";

break;
case "end":
return "flex-end";

break;
case "between":
return "space-between";

break;
case "around":
return "space-around";

break;
default:
return val__$1;

}
});
garden_basscss.modules.flexbox.gen_items_self = (function garden_basscss$modules$flexbox$gen_items_self(type){
return cljs.core.map.call(null,(function (val){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(val)].join(''),cljs.core.PersistentArrayMap.createAsIfByAssoc([["align-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join(''),garden_basscss.modules.flexbox.add_prefix.call(null,val)])], null);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"center","center",891587159,null),new cljs.core.Symbol(null,"baseline","baseline",-1503402489,null),new cljs.core.Symbol(null,"stretch","stretch",-248305853,null)], null));
});
garden_basscss.modules.flexbox.gen_justify_content = (function garden_basscss$modules$flexbox$gen_justify_content(type){
var classes = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"start","start",1285322546,null),new cljs.core.Symbol(null,"end","end",1372345569,null),new cljs.core.Symbol(null,"center","center",891587159,null),new cljs.core.Symbol(null,"between","between",-1523336493,null),new cljs.core.Symbol(null,"around","around",1374555974,null)], null);
return cljs.core.map.call(null,((function (classes){
return (function (val){
var prop = ((cljs.core._EQ_.call(null,type,"justify"))?type:"align");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(val)].join(''),cljs.core.PersistentArrayMap.createAsIfByAssoc([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prop),"-content"].join(''),garden_basscss.modules.flexbox.add_prefix.call(null,val)])], null);
});})(classes))
,((cljs.core._EQ_.call(null,type,"content"))?cljs.core.conj.call(null,classes,new cljs.core.Symbol(null,"stretch","stretch",-248305853,null)):classes));
});
garden_basscss.modules.flexbox.stylesheet = (function garden_basscss$modules$flexbox$stylesheet(){
var bp = garden_basscss.modules.flexbox.breakpoints.call(null);
return new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex",".flex",-73425686),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Symbol(null,"flex","flex",215406899,null)], null)], null),garden.stylesheet.at_media.call(null,new cljs.core.Keyword(null,"sm","sm",-1402575065).cljs$core$IFn$_invoke$arity$1(bp),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".sm-flex",".sm-flex",1367363610),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Symbol(null,"flex","flex",215406899,null)], null)], null)),garden.stylesheet.at_media.call(null,new cljs.core.Keyword(null,"md","md",707286655).cljs$core$IFn$_invoke$arity$1(bp),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".md-flex",".md-flex",-126499747),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Symbol(null,"flex","flex",215406899,null)], null)], null)),garden.stylesheet.at_media.call(null,new cljs.core.Keyword(null,"lg","lg",-80787836).cljs$core$IFn$_invoke$arity$1(bp),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".lg-flex",".lg-flex",-1408587279),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Symbol(null,"flex","flex",215406899,null)], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex-column",".flex-column",-2018359015),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Symbol(null,"column","column",-576213674,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex-wrap",".flex-wrap",471878710),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),new cljs.core.Symbol(null,"wrap","wrap",-1802765782,null)], null)], null),garden_basscss.modules.flexbox.gen_items_self.call(null,"items"),garden_basscss.modules.flexbox.gen_items_self.call(null,"self"),garden_basscss.modules.flexbox.gen_justify_content.call(null,"justify"),garden_basscss.modules.flexbox.gen_justify_content.call(null,"content"),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex-auto",".flex-auto",-1995749917),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 1 auto",new cljs.core.Keyword(null,"min-width","min-width",1926193728),(0),new cljs.core.Keyword(null,"min-height","min-height",398480837),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex-grow",".flex-grow",447600420),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"1 0 auto"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".flex-none",".flex-none",-882370823),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),"none"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".order-0",".order-0",-1825267476),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".order-1",".order-1",994518957),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),(1)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".order-2",".order-2",-825232852),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),(2)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".order-last",".order-last",1570404629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"order","order",-1254677256),(99999)], null)], null)], null);
});
