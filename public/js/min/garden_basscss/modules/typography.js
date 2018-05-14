// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('garden_basscss.modules.typography');
goog.require('cljs.core');
goog.require('garden_basscss.vars');
garden_basscss.modules.typography.typography = (function garden_basscss$modules$typography$typography(){
return new cljs.core.Keyword(null,"typography","typography",-399568138).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,garden_basscss.vars.vars));
});
garden_basscss.modules.typography.line_heights = (function garden_basscss$modules$typography$line_heights(){
return new cljs.core.Keyword(null,"line-heights","line-heights",-721649625).cljs$core$IFn$_invoke$arity$1(garden_basscss.modules.typography.typography.call(null));
});
garden_basscss.modules.typography.gen_align = (function garden_basscss$modules$typography$gen_align(){
return cljs.core.map.call(null,(function (dir){
var dir__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)].join('');
var class$ = (function (){var G__23371 = dir__$1;
switch (G__23371) {
case "left":
return "left-align";

break;
case "right":
return "right-align";

break;
default:
return dir__$1;

}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),dir__$1], null)], null);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"left","left",1241415590,null),new cljs.core.Symbol(null,"center","center",891587159,null),new cljs.core.Symbol(null,"right","right",1187949694,null),new cljs.core.Symbol(null,"justify","justify",918007471,null)], null));
});
garden_basscss.modules.typography.stylesheet = (function garden_basscss$modules$typography$stylesheet(){
var t = garden_basscss.modules.typography.typography.call(null);
var lh = garden_basscss.modules.typography.line_heights.call(null);
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".font-family-inherit",".font-family-inherit",712632298),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Symbol(null,"inherit","inherit",-200283895,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".font-size-inherit",".font-size-inherit",1904691732),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Symbol(null,"inherit","inherit",-200283895,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".text-decoration-none",".text-decoration-none",1451246283),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),new cljs.core.Symbol(null,"none","none",-1320967291,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".bold",".bold",-1441945014),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bold-font-weight","bold-font-weight",1511721371).cljs$core$IFn$_invoke$arity$1(t)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".regular",".regular",115204940),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Symbol(null,"normal","normal",121407669,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".italic",".italic",1254151291),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-style","font-style",-773672352),new cljs.core.Symbol(null,"italic","italic",1673130723,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".caps",".caps",-1832922941),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),new cljs.core.Symbol(null,"uppercase","uppercase",-573544847,null),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"caps-letter-spacing","caps-letter-spacing",-2053505681).cljs$core$IFn$_invoke$arity$1(t)], null)], null),garden_basscss.modules.typography.gen_align.call(null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".nowrap",".nowrap",-784360447),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Symbol(null,"nowrap","nowrap",2097796515,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".break-word",".break-word",-2023506081),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"word-wrap","word-wrap",-1700975926),new cljs.core.Symbol(null,"break-word","break-word",1486981264,null)], null)], null),cljs.core.map.call(null,((function (t,lh){
return (function (v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".line-height-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),cljs.core.get.call(null,lh,v)], null)], null);
});})(t,lh))
,cljs.core.range.call(null,(1),(5))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".list-style-none",".list-style-none",-80883258),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"list-style","list-style",-809622358),new cljs.core.Symbol(null,"none","none",-1320967291,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".underline",".underline",-1923664731),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),new cljs.core.Symbol(null,"underline","underline",-636369066,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".truncate",".truncate",-1168836934),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),"100%",new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Symbol(null,"hidden","hidden",1328025435,null),new cljs.core.Keyword(null,"text-overflow","text-overflow",-1022366814),new cljs.core.Symbol(null,"ellipsis","ellipsis",-1655930031,null),new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Symbol(null,"nowrap","nowrap",2097796515,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,".list-reset",".list-reset",151938812),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"list-style","list-style",-809622358),new cljs.core.Symbol(null,"none","none",-1320967291,null),new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),(0)], null)], null)], null);
});
