// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('spots.stylesheets.grid');
goog.require('cljs.core');
goog.require('garden_basscss.vars');
goog.require('garden.stylesheet');
spots.stylesheets.grid.breakpoints = new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,garden_basscss.vars.vars));
spots.stylesheets.grid.gen_widths = (function spots$stylesheets$grid$gen_widths(bp_name){
var widths = cljs.core.range.call(null,(1),(13));
var max_width = (12);
return cljs.core.map.call(null,((function (widths,max_width){
return (function (width){
var val = ((cljs.core._EQ_.call(null,width,max_width))?"100%":["calc(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),"/12 * 99.999%)"].join(''));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bp_name),"-col-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(width)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),val], null)], null);
});})(widths,max_width))
,widths);
});
spots.stylesheets.grid.gen_general_widths = (function spots$stylesheets$grid$gen_general_widths(){
var widths = cljs.core.range.call(null,(1),(13));
var max_width = (12);
return cljs.core.map.call(null,((function (widths,max_width){
return (function (width){
var val = ((cljs.core._EQ_.call(null,width,max_width))?"100%":["calc(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),"/12 * 99.999%)"].join(''));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".col-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(width)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),val], null)], null);
});})(widths,max_width))
,widths);
});
spots.stylesheets.grid.gen_grid = (function spots$stylesheets$grid$gen_grid(bp){
var bp_name = cljs.core.name.call(null,bp);
var breakpoint = bp.call(null,spots.stylesheets.grid.breakpoints);
return garden.stylesheet.at_media.call(null,breakpoint,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bp_name),"-col"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Symbol(null,"left","left",1241415590,null),new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),new cljs.core.Symbol(null,"border-box","border-box",-1376380965,null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(bp_name),"-col-right"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Symbol(null,"right","right",1187949694,null),new cljs.core.Keyword(null,"box-sizing","box-sizing",-1956090239),new cljs.core.Symbol(null,"border-box","border-box",-1376380965,null)], null)], null),spots.stylesheets.grid.gen_widths.call(null,bp_name));
});
spots.stylesheets.grid.stylesheet = (function spots$stylesheets$grid$stylesheet(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spots.stylesheets.grid.gen_grid.call(null,new cljs.core.Keyword(null,"xs","xs",649443341)),spots.stylesheets.grid.gen_grid.call(null,new cljs.core.Keyword(null,"md","md",707286655)),spots.stylesheets.grid.gen_general_widths.call(null)], null);
});
