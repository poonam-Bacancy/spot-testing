// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('spots.edb');
goog.require('cljs.core');
goog.require('entitydb.core');
goog.require('keechma.toolbox.edb');
spots.edb.edb_schema = cljs.core.PersistentArrayMap.EMPTY;
/**
 * @param {...*} var_args
 */
spots.edb.get_collection = (function() { 
var spots$edb$get_collection__delegate = function (db15708,rest15709){
return cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.util.ensure_layout.call(null,entitydb.core.get_collection),spots.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db15708)], null),rest15709));
};
var spots$edb$get_collection = function (db15708,var_args){
var rest15709 = null;
if (arguments.length > 1) {
var G__15752__i = 0, G__15752__a = new Array(arguments.length -  1);
while (G__15752__i < G__15752__a.length) {G__15752__a[G__15752__i] = arguments[G__15752__i + 1]; ++G__15752__i;}
  rest15709 = new cljs.core.IndexedSeq(G__15752__a,0,null);
} 
return spots$edb$get_collection__delegate.call(this,db15708,rest15709);};
spots$edb$get_collection.cljs$lang$maxFixedArity = 1;
spots$edb$get_collection.cljs$lang$applyTo = (function (arglist__15753){
var db15708 = cljs.core.first(arglist__15753);
var rest15709 = cljs.core.rest(arglist__15753);
return spots$edb$get_collection__delegate(db15708,rest15709);
});
spots$edb$get_collection.cljs$core$IFn$_invoke$arity$variadic = spots$edb$get_collection__delegate;
return spots$edb$get_collection;
})()
;

/**
 * @param {...*} var_args
 */
spots.edb.get_item_by_id = (function() { 
var spots$edb$get_item_by_id__delegate = function (db15710,rest15711){
return cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.core.get_item_by_id,spots.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db15710)], null),rest15711));
};
var spots$edb$get_item_by_id = function (db15710,var_args){
var rest15711 = null;
if (arguments.length > 1) {
var G__15754__i = 0, G__15754__a = new Array(arguments.length -  1);
while (G__15754__i < G__15754__a.length) {G__15754__a[G__15754__i] = arguments[G__15754__i + 1]; ++G__15754__i;}
  rest15711 = new cljs.core.IndexedSeq(G__15754__a,0,null);
} 
return spots$edb$get_item_by_id__delegate.call(this,db15710,rest15711);};
spots$edb$get_item_by_id.cljs$lang$maxFixedArity = 1;
spots$edb$get_item_by_id.cljs$lang$applyTo = (function (arglist__15755){
var db15710 = cljs.core.first(arglist__15755);
var rest15711 = cljs.core.rest(arglist__15755);
return spots$edb$get_item_by_id__delegate(db15710,rest15711);
});
spots$edb$get_item_by_id.cljs$core$IFn$_invoke$arity$variadic = spots$edb$get_item_by_id__delegate;
return spots$edb$get_item_by_id;
})()
;

/**
 * @param {...*} var_args
 */
spots.edb.get_named_item = (function() { 
var spots$edb$get_named_item__delegate = function (db15712,rest15713){
return cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.core.get_named_item,spots.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db15712)], null),rest15713));
};
var spots$edb$get_named_item = function (db15712,var_args){
var rest15713 = null;
if (arguments.length > 1) {
var G__15756__i = 0, G__15756__a = new Array(arguments.length -  1);
while (G__15756__i < G__15756__a.length) {G__15756__a[G__15756__i] = arguments[G__15756__i + 1]; ++G__15756__i;}
  rest15713 = new cljs.core.IndexedSeq(G__15756__a,0,null);
} 
return spots$edb$get_named_item__delegate.call(this,db15712,rest15713);};
spots$edb$get_named_item.cljs$lang$maxFixedArity = 1;
spots$edb$get_named_item.cljs$lang$applyTo = (function (arglist__15757){
var db15712 = cljs.core.first(arglist__15757);
var rest15713 = cljs.core.rest(arglist__15757);
return spots$edb$get_named_item__delegate(db15712,rest15713);
});
spots$edb$get_named_item.cljs$core$IFn$_invoke$arity$variadic = spots$edb$get_named_item__delegate;
return spots$edb$get_named_item;
})()
;

/**
 * @param {...*} var_args
 */
spots.edb.get_item_meta = (function() { 
var spots$edb$get_item_meta__delegate = function (db15714,rest15715){
return cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.core.get_item_meta,spots.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db15714)], null),rest15715));
};
var spots$edb$get_item_meta = function (db15714,var_args){
var rest15715 = null;
if (arguments.length > 1) {
var G__15758__i = 0, G__15758__a = new Array(arguments.length -  1);
while (G__15758__i < G__15758__a.length) {G__15758__a[G__15758__i] = arguments[G__15758__i + 1]; ++G__15758__i;}
  rest15715 = new cljs.core.IndexedSeq(G__15758__a,0,null);
} 
return spots$edb$get_item_meta__delegate.call(this,db15714,rest15715);};
spots$edb$get_item_meta.cljs$lang$maxFixedArity = 1;
spots$edb$get_item_meta.cljs$lang$applyTo = (function (arglist__15759){
var db15714 = cljs.core.first(arglist__15759);
var rest15715 = cljs.core.rest(arglist__15759);
return spots$edb$get_item_meta__delegate(db15714,rest15715);
});
spots$edb$get_item_meta.cljs$core$IFn$_invoke$arity$variadic = spots$edb$get_item_meta__delegate;
return spots$edb$get_item_meta;
})()
;

/**
 * @param {...*} var_args
 */
spots.edb.get_named_item_meta = (function() { 
var spots$edb$get_named_item_meta__delegate = function (db15716,rest15717){
return cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.core.get_named_item_meta,spots.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db15716)], null),rest15717));
};
var spots$edb$get_named_item_meta = function (db15716,var_args){
var rest15717 = null;
if (arguments.length > 1) {
var G__15760__i = 0, G__15760__a = new Array(arguments.length -  1);
while (G__15760__i < G__15760__a.length) {G__15760__a[G__15760__i] = arguments[G__15760__i + 1]; ++G__15760__i;}
  rest15717 = new cljs.core.IndexedSeq(G__15760__a,0,null);
} 
return spots$edb$get_named_item_meta__delegate.call(this,db15716,rest15717);};
spots$edb$get_named_item_meta.cljs$lang$maxFixedArity = 1;
spots$edb$get_named_item_meta.cljs$lang$applyTo = (function (arglist__15761){
var db15716 = cljs.core.first(arglist__15761);
var rest15717 = cljs.core.rest(arglist__15761);
return spots$edb$get_named_item_meta__delegate(db15716,rest15717);
});
spots$edb$get_named_item_meta.cljs$core$IFn$_invoke$arity$variadic = spots$edb$get_named_item_meta__delegate;
return spots$edb$get_named_item_meta;
})()
;

/**
 * @param {...*} var_args
 */
spots.edb.get_collection_meta = (function() { 
var spots$edb$get_collection_meta__delegate = function (db15718,rest15719){
return cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.core.get_collection_meta,spots.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db15718)], null),rest15719));
};
var spots$edb$get_collection_meta = function (db15718,var_args){
var rest15719 = null;
if (arguments.length > 1) {
var G__15762__i = 0, G__15762__a = new Array(arguments.length -  1);
while (G__15762__i < G__15762__a.length) {G__15762__a[G__15762__i] = arguments[G__15762__i + 1]; ++G__15762__i;}
  rest15719 = new cljs.core.IndexedSeq(G__15762__a,0,null);
} 
return spots$edb$get_collection_meta__delegate.call(this,db15718,rest15719);};
spots$edb$get_collection_meta.cljs$lang$maxFixedArity = 1;
spots$edb$get_collection_meta.cljs$lang$applyTo = (function (arglist__15763){
var db15718 = cljs.core.first(arglist__15763);
var rest15719 = cljs.core.rest(arglist__15763);
return spots$edb$get_collection_meta__delegate(db15718,rest15719);
});
spots$edb$get_collection_meta.cljs$core$IFn$_invoke$arity$variadic = spots$edb$get_collection_meta__delegate;
return spots$edb$get_collection_meta;
})()
;

/**
 * @param {...*} var_args
 */
spots.edb.insert_item = (function() { 
var spots$edb$insert_item__delegate = function (db15720,rest15721){
return cljs.core.assoc.call(null,db15720,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.util.ensure_layout.call(null,entitydb.core.insert_item),spots.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db15720)], null),rest15721)));
};
var spots$edb$insert_item = function (db15720,var_args){
var rest15721 = null;
if (arguments.length > 1) {
var G__15764__i = 0, G__15764__a = new Array(arguments.length -  1);
while (G__15764__i < G__15764__a.length) {G__15764__a[G__15764__i] = arguments[G__15764__i + 1]; ++G__15764__i;}
  rest15721 = new cljs.core.IndexedSeq(G__15764__a,0,null);
} 
return spots$edb$insert_item__delegate.call(this,db15720,rest15721);};
spots$edb$insert_item.cljs$lang$maxFixedArity = 1;
spots$edb$insert_item.cljs$lang$applyTo = (function (arglist__15765){
var db15720 = cljs.core.first(arglist__15765);
var rest15721 = cljs.core.rest(arglist__15765);
return spots$edb$insert_item__delegate(db15720,rest15721);
});
spots$edb$insert_item.cljs$core$IFn$_invoke$arity$variadic = spots$edb$insert_item__delegate;
return spots$edb$insert_item;
})()
;

/**
 * @param {...*} var_args
 */
spots.edb.insert_named_item = (function() { 
var spots$edb$insert_named_item__delegate = function (db15722,rest15723){
return cljs.core.assoc.call(null,db15722,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.util.ensure_layout.call(null,entitydb.core.insert_named_item),spots.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db15722)], null),rest15723)));
};
var spots$edb$insert_named_item = function (db15722,var_args){
var rest15723 = null;
if (arguments.length > 1) {
var G__15766__i = 0, G__15766__a = new Array(arguments.length -  1);
while (G__15766__i < G__15766__a.length) {G__15766__a[G__15766__i] = arguments[G__15766__i + 1]; ++G__15766__i;}
  rest15723 = new cljs.core.IndexedSeq(G__15766__a,0,null);
} 
return spots$edb$insert_named_item__delegate.call(this,db15722,rest15723);};
spots$edb$insert_named_item.cljs$lang$maxFixedArity = 1;
spots$edb$insert_named_item.cljs$lang$applyTo = (function (arglist__15767){
var db15722 = cljs.core.first(arglist__15767);
var rest15723 = cljs.core.rest(arglist__15767);
return spots$edb$insert_named_item__delegate(db15722,rest15723);
});
spots$edb$insert_named_item.cljs$core$IFn$_invoke$arity$variadic = spots$edb$insert_named_item__delegate;
return spots$edb$insert_named_item;
})()
;

/**
 * @param {...*} var_args
 */
spots.edb.insert_collection = (function() { 
var spots$edb$insert_collection__delegate = function (db15724,rest15725){
return cljs.core.assoc.call(null,db15724,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.util.ensure_layout.call(null,entitydb.core.insert_collection),spots.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db15724)], null),rest15725)));
};
var spots$edb$insert_collection = function (db15724,var_args){
var rest15725 = null;
if (arguments.length > 1) {
var G__15768__i = 0, G__15768__a = new Array(arguments.length -  1);
while (G__15768__i < G__15768__a.length) {G__15768__a[G__15768__i] = arguments[G__15768__i + 1]; ++G__15768__i;}
  rest15725 = new cljs.core.IndexedSeq(G__15768__a,0,null);
} 
return spots$edb$insert_collection__delegate.call(this,db15724,rest15725);};
spots$edb$insert_collection.cljs$lang$maxFixedArity = 1;
spots$edb$insert_collection.cljs$lang$applyTo = (function (arglist__15769){
var db15724 = cljs.core.first(arglist__15769);
var rest15725 = cljs.core.rest(arglist__15769);
return spots$edb$insert_collection__delegate(db15724,rest15725);
});
spots$edb$insert_collection.cljs$core$IFn$_invoke$arity$variadic = spots$edb$insert_collection__delegate;
return spots$edb$insert_collection;
})()
;

/**
 * @param {...*} var_args
 */
spots.edb.append_collection = (function() { 
var spots$edb$append_collection__delegate = function (db15726,rest15727){
return cljs.core.assoc.call(null,db15726,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.util.ensure_layout.call(null,entitydb.core.append_collection),spots.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db15726)], null),rest15727)));
};
var spots$edb$append_collection = function (db15726,var_args){
var rest15727 = null;
if (arguments.length > 1) {
var G__15770__i = 0, G__15770__a = new Array(arguments.length -  1);
while (G__15770__i < G__15770__a.length) {G__15770__a[G__15770__i] = arguments[G__15770__i + 1]; ++G__15770__i;}
  rest15727 = new cljs.core.IndexedSeq(G__15770__a,0,null);
} 
return spots$edb$append_collection__delegate.call(this,db15726,rest15727);};
spots$edb$append_collection.cljs$lang$maxFixedArity = 1;
spots$edb$append_collection.cljs$lang$applyTo = (function (arglist__15771){
var db15726 = cljs.core.first(arglist__15771);
var rest15727 = cljs.core.rest(arglist__15771);
return spots$edb$append_collection__delegate(db15726,rest15727);
});
spots$edb$append_collection.cljs$core$IFn$_invoke$arity$variadic = spots$edb$append_collection__delegate;
return spots$edb$append_collection;
})()
;

/**
 * @param {...*} var_args
 */
spots.edb.prepend_collection = (function() { 
var spots$edb$prepend_collection__delegate = function (db15728,rest15729){
return cljs.core.assoc.call(null,db15728,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.util.ensure_layout.call(null,entitydb.core.prepend_collection),spots.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db15728)], null),rest15729)));
};
var spots$edb$prepend_collection = function (db15728,var_args){
var rest15729 = null;
if (arguments.length > 1) {
var G__15772__i = 0, G__15772__a = new Array(arguments.length -  1);
while (G__15772__i < G__15772__a.length) {G__15772__a[G__15772__i] = arguments[G__15772__i + 1]; ++G__15772__i;}
  rest15729 = new cljs.core.IndexedSeq(G__15772__a,0,null);
} 
return spots$edb$prepend_collection__delegate.call(this,db15728,rest15729);};
spots$edb$prepend_collection.cljs$lang$maxFixedArity = 1;
spots$edb$prepend_collection.cljs$lang$applyTo = (function (arglist__15773){
var db15728 = cljs.core.first(arglist__15773);
var rest15729 = cljs.core.rest(arglist__15773);
return spots$edb$prepend_collection__delegate(db15728,rest15729);
});
spots$edb$prepend_collection.cljs$core$IFn$_invoke$arity$variadic = spots$edb$prepend_collection__delegate;
return spots$edb$prepend_collection;
})()
;

/**
 * @param {...*} var_args
 */
spots.edb.remove_item = (function() { 
var spots$edb$remove_item__delegate = function (db15730,rest15731){
return cljs.core.assoc.call(null,db15730,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.util.ensure_layout.call(null,entitydb.core.remove_item),spots.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db15730)], null),rest15731)));
};
var spots$edb$remove_item = function (db15730,var_args){
var rest15731 = null;
if (arguments.length > 1) {
var G__15774__i = 0, G__15774__a = new Array(arguments.length -  1);
while (G__15774__i < G__15774__a.length) {G__15774__a[G__15774__i] = arguments[G__15774__i + 1]; ++G__15774__i;}
  rest15731 = new cljs.core.IndexedSeq(G__15774__a,0,null);
} 
return spots$edb$remove_item__delegate.call(this,db15730,rest15731);};
spots$edb$remove_item.cljs$lang$maxFixedArity = 1;
spots$edb$remove_item.cljs$lang$applyTo = (function (arglist__15775){
var db15730 = cljs.core.first(arglist__15775);
var rest15731 = cljs.core.rest(arglist__15775);
return spots$edb$remove_item__delegate(db15730,rest15731);
});
spots$edb$remove_item.cljs$core$IFn$_invoke$arity$variadic = spots$edb$remove_item__delegate;
return spots$edb$remove_item;
})()
;

/**
 * @param {...*} var_args
 */
spots.edb.insert_related_collection = (function() { 
var spots$edb$insert_related_collection__delegate = function (db15732,rest15733){
return cljs.core.assoc.call(null,db15732,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.util.ensure_layout.call(null,entitydb.core.insert_related_collection),spots.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db15732)], null),rest15733)));
};
var spots$edb$insert_related_collection = function (db15732,var_args){
var rest15733 = null;
if (arguments.length > 1) {
var G__15776__i = 0, G__15776__a = new Array(arguments.length -  1);
while (G__15776__i < G__15776__a.length) {G__15776__a[G__15776__i] = arguments[G__15776__i + 1]; ++G__15776__i;}
  rest15733 = new cljs.core.IndexedSeq(G__15776__a,0,null);
} 
return spots$edb$insert_related_collection__delegate.call(this,db15732,rest15733);};
spots$edb$insert_related_collection.cljs$lang$maxFixedArity = 1;
spots$edb$insert_related_collection.cljs$lang$applyTo = (function (arglist__15777){
var db15732 = cljs.core.first(arglist__15777);
var rest15733 = cljs.core.rest(arglist__15777);
return spots$edb$insert_related_collection__delegate(db15732,rest15733);
});
spots$edb$insert_related_collection.cljs$core$IFn$_invoke$arity$variadic = spots$edb$insert_related_collection__delegate;
return spots$edb$insert_related_collection;
})()
;

/**
 * @param {...*} var_args
 */
spots.edb.append_related_collection = (function() { 
var spots$edb$append_related_collection__delegate = function (db15734,rest15735){
return cljs.core.assoc.call(null,db15734,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.util.ensure_layout.call(null,entitydb.core.append_related_collection),spots.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db15734)], null),rest15735)));
};
var spots$edb$append_related_collection = function (db15734,var_args){
var rest15735 = null;
if (arguments.length > 1) {
var G__15778__i = 0, G__15778__a = new Array(arguments.length -  1);
while (G__15778__i < G__15778__a.length) {G__15778__a[G__15778__i] = arguments[G__15778__i + 1]; ++G__15778__i;}
  rest15735 = new cljs.core.IndexedSeq(G__15778__a,0,null);
} 
return spots$edb$append_related_collection__delegate.call(this,db15734,rest15735);};
spots$edb$append_related_collection.cljs$lang$maxFixedArity = 1;
spots$edb$append_related_collection.cljs$lang$applyTo = (function (arglist__15779){
var db15734 = cljs.core.first(arglist__15779);
var rest15735 = cljs.core.rest(arglist__15779);
return spots$edb$append_related_collection__delegate(db15734,rest15735);
});
spots$edb$append_related_collection.cljs$core$IFn$_invoke$arity$variadic = spots$edb$append_related_collection__delegate;
return spots$edb$append_related_collection;
})()
;

/**
 * @param {...*} var_args
 */
spots.edb.prepend_related_collection = (function() { 
var spots$edb$prepend_related_collection__delegate = function (db15736,rest15737){
return cljs.core.assoc.call(null,db15736,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,cljs.core.partial.call(null,entitydb.util.ensure_layout.call(null,entitydb.core.prepend_related_collection),spots.edb.edb_schema),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db15736)], null),rest15737)));
};
var spots$edb$prepend_related_collection = function (db15736,var_args){
var rest15737 = null;
if (arguments.length > 1) {
var G__15780__i = 0, G__15780__a = new Array(arguments.length -  1);
while (G__15780__i < G__15780__a.length) {G__15780__a[G__15780__i] = arguments[G__15780__i + 1]; ++G__15780__i;}
  rest15737 = new cljs.core.IndexedSeq(G__15780__a,0,null);
} 
return spots$edb$prepend_related_collection__delegate.call(this,db15736,rest15737);};
spots$edb$prepend_related_collection.cljs$lang$maxFixedArity = 1;
spots$edb$prepend_related_collection.cljs$lang$applyTo = (function (arglist__15781){
var db15736 = cljs.core.first(arglist__15781);
var rest15737 = cljs.core.rest(arglist__15781);
return spots$edb$prepend_related_collection__delegate(db15736,rest15737);
});
spots$edb$prepend_related_collection.cljs$core$IFn$_invoke$arity$variadic = spots$edb$prepend_related_collection__delegate;
return spots$edb$prepend_related_collection;
})()
;

/**
 * @param {...*} var_args
 */
spots.edb.insert_meta = (function() { 
var spots$edb$insert_meta__delegate = function (db15738,rest15739){
return cljs.core.assoc.call(null,db15738,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,entitydb.core.insert_meta,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db15738)], null),rest15739)));
};
var spots$edb$insert_meta = function (db15738,var_args){
var rest15739 = null;
if (arguments.length > 1) {
var G__15782__i = 0, G__15782__a = new Array(arguments.length -  1);
while (G__15782__i < G__15782__a.length) {G__15782__a[G__15782__i] = arguments[G__15782__i + 1]; ++G__15782__i;}
  rest15739 = new cljs.core.IndexedSeq(G__15782__a,0,null);
} 
return spots$edb$insert_meta__delegate.call(this,db15738,rest15739);};
spots$edb$insert_meta.cljs$lang$maxFixedArity = 1;
spots$edb$insert_meta.cljs$lang$applyTo = (function (arglist__15783){
var db15738 = cljs.core.first(arglist__15783);
var rest15739 = cljs.core.rest(arglist__15783);
return spots$edb$insert_meta__delegate(db15738,rest15739);
});
spots$edb$insert_meta.cljs$core$IFn$_invoke$arity$variadic = spots$edb$insert_meta__delegate;
return spots$edb$insert_meta;
})()
;

/**
 * @param {...*} var_args
 */
spots.edb.remove_meta = (function() { 
var spots$edb$remove_meta__delegate = function (db15740,rest15741){
return cljs.core.assoc.call(null,db15740,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,entitydb.core.remove_meta,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db15740)], null),rest15741)));
};
var spots$edb$remove_meta = function (db15740,var_args){
var rest15741 = null;
if (arguments.length > 1) {
var G__15784__i = 0, G__15784__a = new Array(arguments.length -  1);
while (G__15784__i < G__15784__a.length) {G__15784__a[G__15784__i] = arguments[G__15784__i + 1]; ++G__15784__i;}
  rest15741 = new cljs.core.IndexedSeq(G__15784__a,0,null);
} 
return spots$edb$remove_meta__delegate.call(this,db15740,rest15741);};
spots$edb$remove_meta.cljs$lang$maxFixedArity = 1;
spots$edb$remove_meta.cljs$lang$applyTo = (function (arglist__15785){
var db15740 = cljs.core.first(arglist__15785);
var rest15741 = cljs.core.rest(arglist__15785);
return spots$edb$remove_meta__delegate(db15740,rest15741);
});
spots$edb$remove_meta.cljs$core$IFn$_invoke$arity$variadic = spots$edb$remove_meta__delegate;
return spots$edb$remove_meta;
})()
;

/**
 * @param {...*} var_args
 */
spots.edb.remove_named_item = (function() { 
var spots$edb$remove_named_item__delegate = function (db15742,rest15743){
return cljs.core.assoc.call(null,db15742,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,entitydb.core.remove_named_item,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db15742)], null),rest15743)));
};
var spots$edb$remove_named_item = function (db15742,var_args){
var rest15743 = null;
if (arguments.length > 1) {
var G__15786__i = 0, G__15786__a = new Array(arguments.length -  1);
while (G__15786__i < G__15786__a.length) {G__15786__a[G__15786__i] = arguments[G__15786__i + 1]; ++G__15786__i;}
  rest15743 = new cljs.core.IndexedSeq(G__15786__a,0,null);
} 
return spots$edb$remove_named_item__delegate.call(this,db15742,rest15743);};
spots$edb$remove_named_item.cljs$lang$maxFixedArity = 1;
spots$edb$remove_named_item.cljs$lang$applyTo = (function (arglist__15787){
var db15742 = cljs.core.first(arglist__15787);
var rest15743 = cljs.core.rest(arglist__15787);
return spots$edb$remove_named_item__delegate(db15742,rest15743);
});
spots$edb$remove_named_item.cljs$core$IFn$_invoke$arity$variadic = spots$edb$remove_named_item__delegate;
return spots$edb$remove_named_item;
})()
;

/**
 * @param {...*} var_args
 */
spots.edb.remove_collection = (function() { 
var spots$edb$remove_collection__delegate = function (db15744,rest15745){
return cljs.core.assoc.call(null,db15744,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,entitydb.core.remove_collection,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db15744)], null),rest15745)));
};
var spots$edb$remove_collection = function (db15744,var_args){
var rest15745 = null;
if (arguments.length > 1) {
var G__15788__i = 0, G__15788__a = new Array(arguments.length -  1);
while (G__15788__i < G__15788__a.length) {G__15788__a[G__15788__i] = arguments[G__15788__i + 1]; ++G__15788__i;}
  rest15745 = new cljs.core.IndexedSeq(G__15788__a,0,null);
} 
return spots$edb$remove_collection__delegate.call(this,db15744,rest15745);};
spots$edb$remove_collection.cljs$lang$maxFixedArity = 1;
spots$edb$remove_collection.cljs$lang$applyTo = (function (arglist__15789){
var db15744 = cljs.core.first(arglist__15789);
var rest15745 = cljs.core.rest(arglist__15789);
return spots$edb$remove_collection__delegate(db15744,rest15745);
});
spots$edb$remove_collection.cljs$core$IFn$_invoke$arity$variadic = spots$edb$remove_collection__delegate;
return spots$edb$remove_collection;
})()
;

/**
 * @param {...*} var_args
 */
spots.edb.empty_collection = (function() { 
var spots$edb$empty_collection__delegate = function (db15746,rest15747){
return cljs.core.assoc.call(null,db15746,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,entitydb.core.empty_collection,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db15746)], null),rest15747)));
};
var spots$edb$empty_collection = function (db15746,var_args){
var rest15747 = null;
if (arguments.length > 1) {
var G__15790__i = 0, G__15790__a = new Array(arguments.length -  1);
while (G__15790__i < G__15790__a.length) {G__15790__a[G__15790__i] = arguments[G__15790__i + 1]; ++G__15790__i;}
  rest15747 = new cljs.core.IndexedSeq(G__15790__a,0,null);
} 
return spots$edb$empty_collection__delegate.call(this,db15746,rest15747);};
spots$edb$empty_collection.cljs$lang$maxFixedArity = 1;
spots$edb$empty_collection.cljs$lang$applyTo = (function (arglist__15791){
var db15746 = cljs.core.first(arglist__15791);
var rest15747 = cljs.core.rest(arglist__15791);
return spots$edb$empty_collection__delegate(db15746,rest15747);
});
spots$edb$empty_collection.cljs$core$IFn$_invoke$arity$variadic = spots$edb$empty_collection__delegate;
return spots$edb$empty_collection;
})()
;

/**
 * @param {...*} var_args
 */
spots.edb.remove_related_collection = (function() { 
var spots$edb$remove_related_collection__delegate = function (db15748,rest15749){
return cljs.core.assoc.call(null,db15748,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,entitydb.core.remove_related_collection,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db15748)], null),rest15749)));
};
var spots$edb$remove_related_collection = function (db15748,var_args){
var rest15749 = null;
if (arguments.length > 1) {
var G__15792__i = 0, G__15792__a = new Array(arguments.length -  1);
while (G__15792__i < G__15792__a.length) {G__15792__a[G__15792__i] = arguments[G__15792__i + 1]; ++G__15792__i;}
  rest15749 = new cljs.core.IndexedSeq(G__15792__a,0,null);
} 
return spots$edb$remove_related_collection__delegate.call(this,db15748,rest15749);};
spots$edb$remove_related_collection.cljs$lang$maxFixedArity = 1;
spots$edb$remove_related_collection.cljs$lang$applyTo = (function (arglist__15793){
var db15748 = cljs.core.first(arglist__15793);
var rest15749 = cljs.core.rest(arglist__15793);
return spots$edb$remove_related_collection__delegate(db15748,rest15749);
});
spots$edb$remove_related_collection.cljs$core$IFn$_invoke$arity$variadic = spots$edb$remove_related_collection__delegate;
return spots$edb$remove_related_collection;
})()
;

/**
 * @param {...*} var_args
 */
spots.edb.vacuum = (function() { 
var spots$edb$vacuum__delegate = function (db15750,rest15751){
return cljs.core.assoc.call(null,db15750,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),cljs.core.apply.call(null,entitydb.core.vacuum,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(db15750)], null),rest15751)));
};
var spots$edb$vacuum = function (db15750,var_args){
var rest15751 = null;
if (arguments.length > 1) {
var G__15794__i = 0, G__15794__a = new Array(arguments.length -  1);
while (G__15794__i < G__15794__a.length) {G__15794__a[G__15794__i] = arguments[G__15794__i + 1]; ++G__15794__i;}
  rest15751 = new cljs.core.IndexedSeq(G__15794__a,0,null);
} 
return spots$edb$vacuum__delegate.call(this,db15750,rest15751);};
spots$edb$vacuum.cljs$lang$maxFixedArity = 1;
spots$edb$vacuum.cljs$lang$applyTo = (function (arglist__15795){
var db15750 = cljs.core.first(arglist__15795);
var rest15751 = cljs.core.rest(arglist__15795);
return spots$edb$vacuum__delegate(db15750,rest15751);
});
spots$edb$vacuum.cljs$core$IFn$_invoke$arity$variadic = spots$edb$vacuum__delegate;
return spots$edb$vacuum;
})()
;
