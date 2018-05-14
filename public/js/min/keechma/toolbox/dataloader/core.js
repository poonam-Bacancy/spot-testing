// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('keechma.toolbox.dataloader.core');
goog.require('cljs.core');
goog.require('com.stuartsierra.dependency');
goog.require('cljs.core.async');
goog.require('promesa.core');
goog.require('entitydb.core');
keechma.toolbox.dataloader.core.id_key = new cljs.core.Keyword("keechma.toolbox.dataloader.core","dataloader","keechma.toolbox.dataloader.core/dataloader",-359595488);

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
keechma.toolbox.dataloader.core.EntityDBWithRelations = (function (data,relations,__meta,__extmap,__hash){
this.data = data;
this.relations = relations;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9604__auto__,k__9605__auto__){
var self__ = this;
var this__9604__auto____$1 = this;
return this__9604__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9605__auto__,null);
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9606__auto__,k27328,else__9607__auto__){
var self__ = this;
var this__9606__auto____$1 = this;
var G__27332 = k27328;
var G__27332__$1 = (((G__27332 instanceof cljs.core.Keyword))?G__27332.fqn:null);
switch (G__27332__$1) {
case "data":
return self__.data;

break;
case "relations":
return self__.relations;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27328,else__9607__auto__);

}
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9618__auto__,writer__9619__auto__,opts__9620__auto__){
var self__ = this;
var this__9618__auto____$1 = this;
var pr_pair__9621__auto__ = ((function (this__9618__auto____$1){
return (function (keyval__9622__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,cljs.core.pr_writer,""," ","",opts__9620__auto__,keyval__9622__auto__);
});})(this__9618__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,pr_pair__9621__auto__,"#keechma.toolbox.dataloader.core.EntityDBWithRelations{",", ","}",opts__9620__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relations","relations",-427124442),self__.relations],null))], null),self__.__extmap));
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27327){
var self__ = this;
var G__27327__$1 = this;
return (new cljs.core.RecordIter((0),G__27327__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"relations","relations",-427124442)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9602__auto__){
var self__ = this;
var this__9602__auto____$1 = this;
return self__.__meta;
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9599__auto__){
var self__ = this;
var this__9599__auto____$1 = this;
return (new keechma.toolbox.dataloader.core.EntityDBWithRelations(self__.data,self__.relations,self__.__meta,self__.__extmap,self__.__hash));
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9608__auto__){
var self__ = this;
var this__9608__auto____$1 = this;
return (2 + cljs.core.count.call(null,self__.__extmap));
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9600__auto__){
var self__ = this;
var this__9600__auto____$1 = this;
var h__9372__auto__ = self__.__hash;
if(!((h__9372__auto__ == null))){
return h__9372__auto__;
} else {
var h__9372__auto____$1 = ((function (h__9372__auto__,this__9600__auto____$1){
return (function (coll__9601__auto__){
return (440975300 ^ cljs.core.hash_unordered_coll.call(null,coll__9601__auto__));
});})(h__9372__auto__,this__9600__auto____$1))
.call(null,this__9600__auto____$1);
self__.__hash = h__9372__auto____$1;

return h__9372__auto____$1;
}
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27329,other27330){
var self__ = this;
var this27329__$1 = this;
return (!((other27330 == null))) && ((this27329__$1.constructor === other27330.constructor)) && (cljs.core._EQ_.call(null,this27329__$1.data,other27330.data)) && (cljs.core._EQ_.call(null,this27329__$1.relations,other27330.relations)) && (cljs.core._EQ_.call(null,this27329__$1.__extmap,other27330.__extmap));
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9613__auto__,k__9614__auto__){
var self__ = this;
var this__9613__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"relations","relations",-427124442),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__9614__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9613__auto____$1),self__.__meta),k__9614__auto__);
} else {
return (new keechma.toolbox.dataloader.core.EntityDBWithRelations(self__.data,self__.relations,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9614__auto__)),null));
}
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9611__auto__,k__9612__auto__,G__27327){
var self__ = this;
var this__9611__auto____$1 = this;
var pred__27333 = cljs.core.keyword_identical_QMARK_;
var expr__27334 = k__9612__auto__;
if(cljs.core.truth_(pred__27333.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__27334))){
return (new keechma.toolbox.dataloader.core.EntityDBWithRelations(G__27327,self__.relations,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__27333.call(null,new cljs.core.Keyword(null,"relations","relations",-427124442),expr__27334))){
return (new keechma.toolbox.dataloader.core.EntityDBWithRelations(self__.data,G__27327,self__.__meta,self__.__extmap,null));
} else {
return (new keechma.toolbox.dataloader.core.EntityDBWithRelations(self__.data,self__.relations,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9612__auto__,G__27327),null));
}
}
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9616__auto__){
var self__ = this;
var this__9616__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relations","relations",-427124442),self__.relations],null))], null),self__.__extmap));
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9603__auto__,G__27327){
var self__ = this;
var this__9603__auto____$1 = this;
return (new keechma.toolbox.dataloader.core.EntityDBWithRelations(self__.data,self__.relations,G__27327,self__.__extmap,self__.__hash));
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9609__auto__,entry__9610__auto__){
var self__ = this;
var this__9609__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9610__auto__)){
return this__9609__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9610__auto__,(0)),cljs.core._nth.call(null,entry__9610__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9609__auto____$1,entry__9610__auto__);
}
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"relations","relations",1213407085,null)], null);
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.cljs$lang$type = true;

keechma.toolbox.dataloader.core.EntityDBWithRelations.cljs$lang$ctorPrSeq = (function (this__9642__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"keechma.toolbox.dataloader.core/EntityDBWithRelations");
});

keechma.toolbox.dataloader.core.EntityDBWithRelations.cljs$lang$ctorPrWriter = (function (this__9642__auto__,writer__9643__auto__){
return cljs.core._write.call(null,writer__9643__auto__,"keechma.toolbox.dataloader.core/EntityDBWithRelations");
});

keechma.toolbox.dataloader.core.__GT_EntityDBWithRelations = (function keechma$toolbox$dataloader$core$__GT_EntityDBWithRelations(data,relations){
return (new keechma.toolbox.dataloader.core.EntityDBWithRelations(data,relations,null,null,null));
});

keechma.toolbox.dataloader.core.map__GT_EntityDBWithRelations = (function keechma$toolbox$dataloader$core$map__GT_EntityDBWithRelations(G__27331){
return (new keechma.toolbox.dataloader.core.EntityDBWithRelations(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__27331),new cljs.core.Keyword(null,"relations","relations",-427124442).cljs$core$IFn$_invoke$arity$1(G__27331),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__27331,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"relations","relations",-427124442))),null));
});

keechma.toolbox.dataloader.core.target__GT_edb = (function keechma$toolbox$dataloader$core$target__GT_edb(target){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,cljs.core.namespace.call(null,target)),cljs.core.keyword.call(null,cljs.core.name.call(null,target))], null);
});
keechma.toolbox.dataloader.core.save_kv_data = (function keechma$toolbox$dataloader$core$save_kv_data(app_db,target,data){
return cljs.core.assoc_in.call(null,app_db,target,data);
});
keechma.toolbox.dataloader.core.insert_relations = (function keechma$toolbox$dataloader$core$insert_relations(edb_schema,edb,relations){
return cljs.core.reduce_kv.call(null,(function (acc,k,v){
var items = ((cljs.core.map_QMARK_.call(null,v))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [v], null):v);
return cljs.core.reduce.call(null,((function (items){
return (function (acc2,item){
return entitydb.core.insert_item.call(null,edb_schema,acc2,k,item);
});})(items))
,acc,items);
}),edb,relations);
});
keechma.toolbox.dataloader.core.save_edb_named_item = (function keechma$toolbox$dataloader$core$save_edb_named_item(app_db,edb_schema,target,data){
var edb = new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(app_db);
var vec__27337 = keechma.toolbox.dataloader.core.target__GT_edb.call(null,target);
var entity = cljs.core.nth.call(null,vec__27337,(0),null);
var named_item = cljs.core.nth.call(null,vec__27337,(1),null);
var insert_named_item = cljs.core.partial.call(null,entitydb.core.insert_named_item,edb_schema);
var vec__27340 = ((cljs.core._EQ_.call(null,keechma.toolbox.dataloader.core.EntityDBWithRelations,cljs.core.type.call(null,data)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"relations","relations",-427124442).cljs$core$IFn$_invoke$arity$1(data)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [data,null], null));
var data__$1 = cljs.core.nth.call(null,vec__27340,(0),null);
var relations = cljs.core.nth.call(null,vec__27340,(1),null);
return cljs.core.assoc.call(null,app_db,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),(cljs.core.truth_(data__$1)?insert_named_item.call(null,keechma.toolbox.dataloader.core.insert_relations.call(null,edb_schema,edb,relations),entity,named_item,data__$1):entitydb.core.remove_named_item.call(null,edb,entity,named_item)));
});
keechma.toolbox.dataloader.core.save_edb_collection = (function keechma$toolbox$dataloader$core$save_edb_collection(app_db,edb_schema,target,data){
var edb = new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(app_db);
var vec__27343 = keechma.toolbox.dataloader.core.target__GT_edb.call(null,target);
var entity = cljs.core.nth.call(null,vec__27343,(0),null);
var collection = cljs.core.nth.call(null,vec__27343,(1),null);
var insert_collection = cljs.core.partial.call(null,entitydb.core.insert_collection,edb_schema);
var vec__27346 = ((cljs.core._EQ_.call(null,keechma.toolbox.dataloader.core.EntityDBWithRelations,cljs.core.type.call(null,data)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"relations","relations",-427124442).cljs$core$IFn$_invoke$arity$1(data)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [data,null], null));
var data__$1 = cljs.core.nth.call(null,vec__27346,(0),null);
var relations = cljs.core.nth.call(null,vec__27346,(1),null);
return cljs.core.assoc.call(null,app_db,new cljs.core.Keyword(null,"entity-db","entity-db",422060390),((cljs.core.seq.call(null,data__$1))?insert_collection.call(null,keechma.toolbox.dataloader.core.insert_relations.call(null,edb_schema,edb,relations),entity,collection,data__$1):entitydb.core.remove_collection.call(null,edb,entity,collection)));
});
keechma.toolbox.dataloader.core.get_edb_named_item = (function keechma$toolbox$dataloader$core$get_edb_named_item(app_db,edb_schema,target){
var edb = new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(app_db);
var vec__27349 = keechma.toolbox.dataloader.core.target__GT_edb.call(null,target);
var entity = cljs.core.nth.call(null,vec__27349,(0),null);
var named_item = cljs.core.nth.call(null,vec__27349,(1),null);
return entitydb.core.get_named_item.call(null,edb_schema,edb,entity,named_item);
});
keechma.toolbox.dataloader.core.get_edb_collection = (function keechma$toolbox$dataloader$core$get_edb_collection(app_db,edb_schema,target){
var edb = new cljs.core.Keyword(null,"entity-db","entity-db",422060390).cljs$core$IFn$_invoke$arity$1(app_db);
var vec__27352 = keechma.toolbox.dataloader.core.target__GT_edb.call(null,target);
var entity = cljs.core.nth.call(null,vec__27352,(0),null);
var collection = cljs.core.nth.call(null,vec__27352,(1),null);
return entitydb.core.get_collection.call(null,edb_schema,edb,entity,collection);
});
keechma.toolbox.dataloader.core.get_kv_data = (function keechma$toolbox$dataloader$core$get_kv_data(app_db,target){
return cljs.core.get_in.call(null,app_db,target);
});
keechma.toolbox.dataloader.core.get_meta = (function keechma$toolbox$dataloader$core$get_meta(app_db,datasource_key){
return cljs.core.get_in.call(null,app_db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),keechma.toolbox.dataloader.core.id_key,datasource_key], null));
});
keechma.toolbox.dataloader.core.save_meta = (function keechma$toolbox$dataloader$core$save_meta(app_db,datasource_key,meta){
return cljs.core.assoc_in.call(null,app_db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),keechma.toolbox.dataloader.core.id_key,datasource_key], null),meta);
});
keechma.toolbox.dataloader.core.save_data = (function keechma$toolbox$dataloader$core$save_data(app_db,edb_schema,target,data){
var target_start = cljs.core.first.call(null,target);
var G__27355 = target_start;
var G__27355__$1 = (((G__27355 instanceof cljs.core.Keyword))?G__27355.fqn:null);
switch (G__27355__$1) {
case "edb/named-item":
return keechma.toolbox.dataloader.core.save_edb_named_item.call(null,app_db,edb_schema,cljs.core.last.call(null,target),data);

break;
case "edb/collection":
return keechma.toolbox.dataloader.core.save_edb_collection.call(null,app_db,edb_schema,cljs.core.last.call(null,target),data);

break;
default:
return keechma.toolbox.dataloader.core.save_kv_data.call(null,app_db,target,data);

}
});
keechma.toolbox.dataloader.core.get_data = (function keechma$toolbox$dataloader$core$get_data(app_db,edb_schema,target){
var target_start = cljs.core.first.call(null,target);
var G__27357 = target_start;
var G__27357__$1 = (((G__27357 instanceof cljs.core.Keyword))?G__27357.fqn:null);
switch (G__27357__$1) {
case "edb/named-item":
return keechma.toolbox.dataloader.core.get_edb_named_item.call(null,app_db,edb_schema,cljs.core.last.call(null,target));

break;
case "edb/collection":
return keechma.toolbox.dataloader.core.get_edb_collection.call(null,app_db,edb_schema,cljs.core.last.call(null,target));

break;
default:
return keechma.toolbox.dataloader.core.get_kv_data.call(null,app_db,target);

}
});
keechma.toolbox.dataloader.core.datasources__GT_loaders = (function keechma$toolbox$dataloader$core$datasources__GT_loaders(app_datasources,datasources,app_db,results_chan,edb_schema){
var route_params = cljs.core.get_in.call(null,app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"data","data",-232669377)], null));
var ds = datasources;
var loaders = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if(cljs.core.not.call(null,cljs.core.seq.call(null,ds))){
return loaders;
} else {
var vec__27359 = cljs.core.first.call(null,ds);
var key = cljs.core.nth.call(null,vec__27359,(0),null);
var val = cljs.core.nth.call(null,vec__27359,(1),null);
var prev = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"data","data",-232669377),keechma.toolbox.dataloader.core.get_data.call(null,app_db,edb_schema,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(val)),new cljs.core.Keyword(null,"meta","meta",1499536964),keechma.toolbox.dataloader.core.get_meta.call(null,app_db,key)], null);
var params_fn = (function (){var or__8916__auto__ = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(val);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return ((function (ds,loaders,or__8916__auto__,vec__27359,key,val,prev,route_params){
return (function() { 
var G__27362__delegate = function (args){
return null;
};
var G__27362 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27363__i = 0, G__27363__a = new Array(arguments.length -  0);
while (G__27363__i < G__27363__a.length) {G__27363__a[G__27363__i] = arguments[G__27363__i + 0]; ++G__27363__i;}
  args = new cljs.core.IndexedSeq(G__27363__a,0,null);
} 
return G__27362__delegate.call(this,args);};
G__27362.cljs$lang$maxFixedArity = 0;
G__27362.cljs$lang$applyTo = (function (arglist__27364){
var args = cljs.core.seq(arglist__27364);
return G__27362__delegate(args);
});
G__27362.cljs$core$IFn$_invoke$arity$variadic = G__27362__delegate;
return G__27362;
})()
;
;})(ds,loaders,or__8916__auto__,vec__27359,key,val,prev,route_params))
}
})();
var deps = cljs.core.reduce.call(null,((function (ds,loaders,vec__27359,key,val,prev,params_fn,route_params){
return (function (acc,dep_key){
var dep = cljs.core.get.call(null,app_datasources,dep_key);
return cljs.core.assoc.call(null,acc,dep_key,keechma.toolbox.dataloader.core.get_data.call(null,app_db,edb_schema,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(dep)));
});})(ds,loaders,vec__27359,key,val,prev,params_fn,route_params))
,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(val));
var params = params_fn.call(null,prev,route_params,deps);
var loader = (function (){var or__8916__auto__ = new cljs.core.Keyword(null,"loader","loader",-462395423).cljs$core$IFn$_invoke$arity$1(val);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return cljs.core.identity;
}
})();
var target = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(val);
var current_loaders = (function (){var or__8916__auto__ = cljs.core.get.call(null,loaders,loader);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var G__27365 = cljs.core.rest.call(null,ds);
var G__27366 = cljs.core.assoc.call(null,loaders,loader,cljs.core.conj.call(null,current_loaders,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"prev","prev",-1597069226),prev,new cljs.core.Keyword(null,"datasource","datasource",-246060221),key,new cljs.core.Keyword(null,"app-db","app-db",865606302),app_db,new cljs.core.Keyword(null,"target","target",253001721),target], null)));
ds = G__27365;
loaders = G__27366;
continue;
}
break;
}
});
keechma.toolbox.dataloader.core.start_loaders_BANG_ = (function keechma$toolbox$dataloader$core$start_loaders_BANG_(app_db_atom,app_datasources,datasources,results_chan,edb_schema,context){
var app_db = cljs.core.deref.call(null,app_db_atom);
var loaders = keechma.toolbox.dataloader.core.datasources__GT_loaders.call(null,app_datasources,datasources,app_db,results_chan,edb_schema);
var seq__27367 = cljs.core.seq.call(null,loaders);
var chunk__27368 = null;
var count__27369 = (0);
var i__27370 = (0);
while(true){
if((i__27370 < count__27369)){
var vec__27371 = cljs.core._nth.call(null,chunk__27368,i__27370);
var loader = cljs.core.nth.call(null,vec__27371,(0),null);
var pending_datasources = cljs.core.nth.call(null,vec__27371,(1),null);
var promises_27397 = loader.call(null,pending_datasources,context);
var seq__27374_27398 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,promises_27397));
var chunk__27375_27399 = null;
var count__27376_27400 = (0);
var i__27377_27401 = (0);
while(true){
if((i__27377_27401 < count__27376_27400)){
var vec__27378_27402 = cljs.core._nth.call(null,chunk__27375_27399,i__27377_27401);
var idx_27403 = cljs.core.nth.call(null,vec__27378_27402,(0),null);
var loader_promise_27404 = cljs.core.nth.call(null,vec__27378_27402,(1),null);
promesa.core.error.call(null,((function (seq__27374_27398,chunk__27375_27399,count__27376_27400,i__27377_27401,seq__27367,chunk__27368,count__27369,i__27370,vec__27378_27402,idx_27403,loader_promise_27404,promises_27397,vec__27371,loader,pending_datasources,app_db,loaders){
return (function (error){
var pending_datasource = cljs.core.get.call(null,pending_datasources,idx_27403);
return cljs.core.async.put_BANG_.call(null,results_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.assoc.call(null,pending_datasource,new cljs.core.Keyword(null,"error","error",-978969032),error)], null));
});})(seq__27374_27398,chunk__27375_27399,count__27376_27400,i__27377_27401,seq__27367,chunk__27368,count__27369,i__27370,vec__27378_27402,idx_27403,loader_promise_27404,promises_27397,vec__27371,loader,pending_datasources,app_db,loaders))
,promesa.core.map.call(null,((function (seq__27374_27398,chunk__27375_27399,count__27376_27400,i__27377_27401,seq__27367,chunk__27368,count__27369,i__27370,vec__27378_27402,idx_27403,loader_promise_27404,promises_27397,vec__27371,loader,pending_datasources,app_db,loaders){
return (function (value){
var pending_datasource = cljs.core.get.call(null,pending_datasources,idx_27403);
var processor = (function (){var or__8916__auto__ = cljs.core.get_in.call(null,datasources,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(pending_datasource),new cljs.core.Keyword(null,"processor","processor",-16217796)], null));
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return cljs.core.identity;
}
})();
return cljs.core.async.put_BANG_.call(null,results_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.assoc.call(null,pending_datasource,new cljs.core.Keyword(null,"value","value",305978217),processor.call(null,value,pending_datasource))], null));
});})(seq__27374_27398,chunk__27375_27399,count__27376_27400,i__27377_27401,seq__27367,chunk__27368,count__27369,i__27370,vec__27378_27402,idx_27403,loader_promise_27404,promises_27397,vec__27371,loader,pending_datasources,app_db,loaders))
,promesa.core.promise.call(null,loader_promise_27404)));

var G__27405 = seq__27374_27398;
var G__27406 = chunk__27375_27399;
var G__27407 = count__27376_27400;
var G__27408 = (i__27377_27401 + (1));
seq__27374_27398 = G__27405;
chunk__27375_27399 = G__27406;
count__27376_27400 = G__27407;
i__27377_27401 = G__27408;
continue;
} else {
var temp__5457__auto___27409 = cljs.core.seq.call(null,seq__27374_27398);
if(temp__5457__auto___27409){
var seq__27374_27410__$1 = temp__5457__auto___27409;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27374_27410__$1)){
var c__9847__auto___27411 = cljs.core.chunk_first.call(null,seq__27374_27410__$1);
var G__27412 = cljs.core.chunk_rest.call(null,seq__27374_27410__$1);
var G__27413 = c__9847__auto___27411;
var G__27414 = cljs.core.count.call(null,c__9847__auto___27411);
var G__27415 = (0);
seq__27374_27398 = G__27412;
chunk__27375_27399 = G__27413;
count__27376_27400 = G__27414;
i__27377_27401 = G__27415;
continue;
} else {
var vec__27381_27416 = cljs.core.first.call(null,seq__27374_27410__$1);
var idx_27417 = cljs.core.nth.call(null,vec__27381_27416,(0),null);
var loader_promise_27418 = cljs.core.nth.call(null,vec__27381_27416,(1),null);
promesa.core.error.call(null,((function (seq__27374_27398,chunk__27375_27399,count__27376_27400,i__27377_27401,seq__27367,chunk__27368,count__27369,i__27370,vec__27381_27416,idx_27417,loader_promise_27418,seq__27374_27410__$1,temp__5457__auto___27409,promises_27397,vec__27371,loader,pending_datasources,app_db,loaders){
return (function (error){
var pending_datasource = cljs.core.get.call(null,pending_datasources,idx_27417);
return cljs.core.async.put_BANG_.call(null,results_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.assoc.call(null,pending_datasource,new cljs.core.Keyword(null,"error","error",-978969032),error)], null));
});})(seq__27374_27398,chunk__27375_27399,count__27376_27400,i__27377_27401,seq__27367,chunk__27368,count__27369,i__27370,vec__27381_27416,idx_27417,loader_promise_27418,seq__27374_27410__$1,temp__5457__auto___27409,promises_27397,vec__27371,loader,pending_datasources,app_db,loaders))
,promesa.core.map.call(null,((function (seq__27374_27398,chunk__27375_27399,count__27376_27400,i__27377_27401,seq__27367,chunk__27368,count__27369,i__27370,vec__27381_27416,idx_27417,loader_promise_27418,seq__27374_27410__$1,temp__5457__auto___27409,promises_27397,vec__27371,loader,pending_datasources,app_db,loaders){
return (function (value){
var pending_datasource = cljs.core.get.call(null,pending_datasources,idx_27417);
var processor = (function (){var or__8916__auto__ = cljs.core.get_in.call(null,datasources,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(pending_datasource),new cljs.core.Keyword(null,"processor","processor",-16217796)], null));
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return cljs.core.identity;
}
})();
return cljs.core.async.put_BANG_.call(null,results_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.assoc.call(null,pending_datasource,new cljs.core.Keyword(null,"value","value",305978217),processor.call(null,value,pending_datasource))], null));
});})(seq__27374_27398,chunk__27375_27399,count__27376_27400,i__27377_27401,seq__27367,chunk__27368,count__27369,i__27370,vec__27381_27416,idx_27417,loader_promise_27418,seq__27374_27410__$1,temp__5457__auto___27409,promises_27397,vec__27371,loader,pending_datasources,app_db,loaders))
,promesa.core.promise.call(null,loader_promise_27418)));

var G__27419 = cljs.core.next.call(null,seq__27374_27410__$1);
var G__27420 = null;
var G__27421 = (0);
var G__27422 = (0);
seq__27374_27398 = G__27419;
chunk__27375_27399 = G__27420;
count__27376_27400 = G__27421;
i__27377_27401 = G__27422;
continue;
}
} else {
}
}
break;
}

var G__27423 = seq__27367;
var G__27424 = chunk__27368;
var G__27425 = count__27369;
var G__27426 = (i__27370 + (1));
seq__27367 = G__27423;
chunk__27368 = G__27424;
count__27369 = G__27425;
i__27370 = G__27426;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__27367);
if(temp__5457__auto__){
var seq__27367__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27367__$1)){
var c__9847__auto__ = cljs.core.chunk_first.call(null,seq__27367__$1);
var G__27427 = cljs.core.chunk_rest.call(null,seq__27367__$1);
var G__27428 = c__9847__auto__;
var G__27429 = cljs.core.count.call(null,c__9847__auto__);
var G__27430 = (0);
seq__27367 = G__27427;
chunk__27368 = G__27428;
count__27369 = G__27429;
i__27370 = G__27430;
continue;
} else {
var vec__27384 = cljs.core.first.call(null,seq__27367__$1);
var loader = cljs.core.nth.call(null,vec__27384,(0),null);
var pending_datasources = cljs.core.nth.call(null,vec__27384,(1),null);
var promises_27431 = loader.call(null,pending_datasources,context);
var seq__27387_27432 = cljs.core.seq.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,promises_27431));
var chunk__27388_27433 = null;
var count__27389_27434 = (0);
var i__27390_27435 = (0);
while(true){
if((i__27390_27435 < count__27389_27434)){
var vec__27391_27436 = cljs.core._nth.call(null,chunk__27388_27433,i__27390_27435);
var idx_27437 = cljs.core.nth.call(null,vec__27391_27436,(0),null);
var loader_promise_27438 = cljs.core.nth.call(null,vec__27391_27436,(1),null);
promesa.core.error.call(null,((function (seq__27387_27432,chunk__27388_27433,count__27389_27434,i__27390_27435,seq__27367,chunk__27368,count__27369,i__27370,vec__27391_27436,idx_27437,loader_promise_27438,promises_27431,vec__27384,loader,pending_datasources,seq__27367__$1,temp__5457__auto__,app_db,loaders){
return (function (error){
var pending_datasource = cljs.core.get.call(null,pending_datasources,idx_27437);
return cljs.core.async.put_BANG_.call(null,results_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.assoc.call(null,pending_datasource,new cljs.core.Keyword(null,"error","error",-978969032),error)], null));
});})(seq__27387_27432,chunk__27388_27433,count__27389_27434,i__27390_27435,seq__27367,chunk__27368,count__27369,i__27370,vec__27391_27436,idx_27437,loader_promise_27438,promises_27431,vec__27384,loader,pending_datasources,seq__27367__$1,temp__5457__auto__,app_db,loaders))
,promesa.core.map.call(null,((function (seq__27387_27432,chunk__27388_27433,count__27389_27434,i__27390_27435,seq__27367,chunk__27368,count__27369,i__27370,vec__27391_27436,idx_27437,loader_promise_27438,promises_27431,vec__27384,loader,pending_datasources,seq__27367__$1,temp__5457__auto__,app_db,loaders){
return (function (value){
var pending_datasource = cljs.core.get.call(null,pending_datasources,idx_27437);
var processor = (function (){var or__8916__auto__ = cljs.core.get_in.call(null,datasources,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(pending_datasource),new cljs.core.Keyword(null,"processor","processor",-16217796)], null));
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return cljs.core.identity;
}
})();
return cljs.core.async.put_BANG_.call(null,results_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.assoc.call(null,pending_datasource,new cljs.core.Keyword(null,"value","value",305978217),processor.call(null,value,pending_datasource))], null));
});})(seq__27387_27432,chunk__27388_27433,count__27389_27434,i__27390_27435,seq__27367,chunk__27368,count__27369,i__27370,vec__27391_27436,idx_27437,loader_promise_27438,promises_27431,vec__27384,loader,pending_datasources,seq__27367__$1,temp__5457__auto__,app_db,loaders))
,promesa.core.promise.call(null,loader_promise_27438)));

var G__27439 = seq__27387_27432;
var G__27440 = chunk__27388_27433;
var G__27441 = count__27389_27434;
var G__27442 = (i__27390_27435 + (1));
seq__27387_27432 = G__27439;
chunk__27388_27433 = G__27440;
count__27389_27434 = G__27441;
i__27390_27435 = G__27442;
continue;
} else {
var temp__5457__auto___27443__$1 = cljs.core.seq.call(null,seq__27387_27432);
if(temp__5457__auto___27443__$1){
var seq__27387_27444__$1 = temp__5457__auto___27443__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27387_27444__$1)){
var c__9847__auto___27445 = cljs.core.chunk_first.call(null,seq__27387_27444__$1);
var G__27446 = cljs.core.chunk_rest.call(null,seq__27387_27444__$1);
var G__27447 = c__9847__auto___27445;
var G__27448 = cljs.core.count.call(null,c__9847__auto___27445);
var G__27449 = (0);
seq__27387_27432 = G__27446;
chunk__27388_27433 = G__27447;
count__27389_27434 = G__27448;
i__27390_27435 = G__27449;
continue;
} else {
var vec__27394_27450 = cljs.core.first.call(null,seq__27387_27444__$1);
var idx_27451 = cljs.core.nth.call(null,vec__27394_27450,(0),null);
var loader_promise_27452 = cljs.core.nth.call(null,vec__27394_27450,(1),null);
promesa.core.error.call(null,((function (seq__27387_27432,chunk__27388_27433,count__27389_27434,i__27390_27435,seq__27367,chunk__27368,count__27369,i__27370,vec__27394_27450,idx_27451,loader_promise_27452,seq__27387_27444__$1,temp__5457__auto___27443__$1,promises_27431,vec__27384,loader,pending_datasources,seq__27367__$1,temp__5457__auto__,app_db,loaders){
return (function (error){
var pending_datasource = cljs.core.get.call(null,pending_datasources,idx_27451);
return cljs.core.async.put_BANG_.call(null,results_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.assoc.call(null,pending_datasource,new cljs.core.Keyword(null,"error","error",-978969032),error)], null));
});})(seq__27387_27432,chunk__27388_27433,count__27389_27434,i__27390_27435,seq__27367,chunk__27368,count__27369,i__27370,vec__27394_27450,idx_27451,loader_promise_27452,seq__27387_27444__$1,temp__5457__auto___27443__$1,promises_27431,vec__27384,loader,pending_datasources,seq__27367__$1,temp__5457__auto__,app_db,loaders))
,promesa.core.map.call(null,((function (seq__27387_27432,chunk__27388_27433,count__27389_27434,i__27390_27435,seq__27367,chunk__27368,count__27369,i__27370,vec__27394_27450,idx_27451,loader_promise_27452,seq__27387_27444__$1,temp__5457__auto___27443__$1,promises_27431,vec__27384,loader,pending_datasources,seq__27367__$1,temp__5457__auto__,app_db,loaders){
return (function (value){
var pending_datasource = cljs.core.get.call(null,pending_datasources,idx_27451);
var processor = (function (){var or__8916__auto__ = cljs.core.get_in.call(null,datasources,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(pending_datasource),new cljs.core.Keyword(null,"processor","processor",-16217796)], null));
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return cljs.core.identity;
}
})();
return cljs.core.async.put_BANG_.call(null,results_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ok","ok",967785236),cljs.core.assoc.call(null,pending_datasource,new cljs.core.Keyword(null,"value","value",305978217),processor.call(null,value,pending_datasource))], null));
});})(seq__27387_27432,chunk__27388_27433,count__27389_27434,i__27390_27435,seq__27367,chunk__27368,count__27369,i__27370,vec__27394_27450,idx_27451,loader_promise_27452,seq__27387_27444__$1,temp__5457__auto___27443__$1,promises_27431,vec__27384,loader,pending_datasources,seq__27367__$1,temp__5457__auto__,app_db,loaders))
,promesa.core.promise.call(null,loader_promise_27452)));

var G__27453 = cljs.core.next.call(null,seq__27387_27444__$1);
var G__27454 = null;
var G__27455 = (0);
var G__27456 = (0);
seq__27387_27432 = G__27453;
chunk__27388_27433 = G__27454;
count__27389_27434 = G__27455;
i__27390_27435 = G__27456;
continue;
}
} else {
}
}
break;
}

var G__27457 = cljs.core.next.call(null,seq__27367__$1);
var G__27458 = null;
var G__27459 = (0);
var G__27460 = (0);
seq__27367 = G__27457;
chunk__27368 = G__27458;
count__27369 = G__27459;
i__27370 = G__27460;
continue;
}
} else {
return null;
}
}
break;
}
});
keechma.toolbox.dataloader.core.has_pending_datasources_QMARK_ = (function keechma$toolbox$dataloader$core$has_pending_datasources_QMARK_(app_db){
var statuses = cljs.core.map.call(null,(function (p__27462){
var vec__27463 = p__27462;
var _ = cljs.core.nth.call(null,vec__27463,(0),null);
var val = cljs.core.nth.call(null,vec__27463,(1),null);
return cljs.core.get.call(null,val,new cljs.core.Keyword(null,"status","status",-1997798413));
}),cljs.core.get_in.call(null,app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),keechma.toolbox.dataloader.core.id_key], null)));
return cljs.core.boolean$.call(null,cljs.core.some.call(null,((function (statuses){
return (function (p1__27461_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pending","pending",-220036727),p1__27461_SHARP_);
});})(statuses))
,statuses));
});
keechma.toolbox.dataloader.core.store_datasource_BANG_ = (function keechma$toolbox$dataloader$core$store_datasource_BANG_(app_db_atom,edb_schema,payload){
var app_db = cljs.core.deref.call(null,app_db_atom);
var datasource_key = new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(payload);
var value = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(payload);
var value_keys = ((cljs.core.map_QMARK_.call(null,value))?cljs.core.set.call(null,cljs.core.keys.call(null,value)):cljs.core.PersistentHashSet.EMPTY);
var vec__27466 = ((cljs.core._EQ_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"meta","meta",1499536964),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),value_keys))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(value),new cljs.core.Keyword(null,"meta","meta",1499536964).cljs$core$IFn$_invoke$arity$1(value)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,cljs.core.PersistentArrayMap.EMPTY], null));
var res_data = cljs.core.nth.call(null,vec__27466,(0),null);
var res_meta = cljs.core.nth.call(null,vec__27466,(1),null);
return cljs.core.reset_BANG_.call(null,app_db_atom,keechma.toolbox.dataloader.core.save_data.call(null,keechma.toolbox.dataloader.core.save_meta.call(null,app_db,datasource_key,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"completed","completed",-486056503),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(payload),new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"meta","meta",1499536964),res_meta,new cljs.core.Keyword(null,"prev","prev",-1597069226),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"status","status",-1997798413),null,new cljs.core.Keyword(null,"error","error",-978969032),null,new cljs.core.Keyword(null,"params","params",710516235),null], null),new cljs.core.Keyword(null,"prev","prev",-1597069226).cljs$core$IFn$_invoke$arity$1(payload))], null)),edb_schema,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(payload),res_data));
});
keechma.toolbox.dataloader.core.start_dependent_loaders_BANG_ = (function keechma$toolbox$dataloader$core$start_dependent_loaders_BANG_(app_db_atom,app_datasources,datasources,results_chan,edb_schema,context){
var app_db = cljs.core.deref.call(null,app_db_atom);
var statuses = cljs.core.reduce.call(null,((function (app_db){
return (function (acc,datasource_key){
return cljs.core.assoc.call(null,acc,datasource_key,new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(keechma.toolbox.dataloader.core.get_meta.call(null,app_db,datasource_key)));
});})(app_db))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keys.call(null,app_datasources));
var fulfilled = cljs.core.reduce.call(null,((function (app_db,statuses){
return (function (acc,p__27470){
var vec__27471 = p__27470;
var datasource_key = cljs.core.nth.call(null,vec__27471,(0),null);
var val = cljs.core.nth.call(null,vec__27471,(1),null);
if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pending","pending",-220036727),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(keechma.toolbox.dataloader.core.get_meta.call(null,app_db,datasource_key)))) && (cljs.core.every_QMARK_.call(null,((function (vec__27471,datasource_key,val,app_db,statuses){
return (function (p1__27469_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"completed","completed",-486056503),p1__27469_SHARP_);
});})(vec__27471,datasource_key,val,app_db,statuses))
,cljs.core.vals.call(null,cljs.core.select_keys.call(null,statuses,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(val)))))){
return cljs.core.assoc.call(null,acc,datasource_key,val);
} else {
return acc;
}
});})(app_db,statuses))
,cljs.core.PersistentArrayMap.EMPTY,datasources);
return keechma.toolbox.dataloader.core.start_loaders_BANG_.call(null,app_db_atom,app_datasources,fulfilled,results_chan,edb_schema,context);
});
keechma.toolbox.dataloader.core.store_datasource_error_BANG_ = (function keechma$toolbox$dataloader$core$store_datasource_error_BANG_(app_db,edb_schema,payload){
var datasource_key = new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(payload);
return keechma.toolbox.dataloader.core.save_data.call(null,keechma.toolbox.dataloader.core.save_meta.call(null,app_db,datasource_key,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"prev","prev",-1597069226),null,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(payload),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(payload)], null)),edb_schema,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(payload),null);
});
keechma.toolbox.dataloader.core.mark_dependent_errors_BANG_ = (function keechma$toolbox$dataloader$core$mark_dependent_errors_BANG_(app_db,app_datasources,datasources,edb_schema,payload){
return cljs.core.reduce.call(null,(function (acc,p__27474){
var vec__27475 = p__27474;
var datasource_key = cljs.core.nth.call(null,vec__27475,(0),null);
var val = cljs.core.nth.call(null,vec__27475,(1),null);
return keechma.toolbox.dataloader.core.save_data.call(null,keechma.toolbox.dataloader.core.save_meta.call(null,app_db,datasource_key,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"prev","prev",-1597069226),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(payload)], null)),edb_schema,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(val),null);
}),app_db,datasources);
});
keechma.toolbox.dataloader.core.mark_pending_BANG_ = (function keechma$toolbox$dataloader$core$mark_pending_BANG_(app_db_atom,edb_schema,datasources){
var app_db = cljs.core.deref.call(null,app_db_atom);
return cljs.core.reset_BANG_.call(null,app_db_atom,cljs.core.reduce.call(null,((function (app_db){
return (function (acc,p__27478){
var vec__27479 = p__27478;
var datasource_key = cljs.core.nth.call(null,vec__27479,(0),null);
var val = cljs.core.nth.call(null,vec__27479,(1),null);
var prev_value = keechma.toolbox.dataloader.core.get_data.call(null,acc,edb_schema,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(val));
var prev_datasource = keechma.toolbox.dataloader.core.get_meta.call(null,app_db,datasource_key);
return keechma.toolbox.dataloader.core.save_meta.call(null,acc,datasource_key,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"pending","pending",-220036727),new cljs.core.Keyword(null,"prev","prev",-1597069226),cljs.core.assoc.call(null,cljs.core.dissoc.call(null,prev_datasource,new cljs.core.Keyword(null,"prev","prev",-1597069226)),new cljs.core.Keyword(null,"value","value",305978217),prev_value)], null));
});})(app_db))
,app_db,datasources));
});
keechma.toolbox.dataloader.core.datasource_params = (function keechma$toolbox$dataloader$core$datasource_params(datasources,datasource_key,datasource,app_db,edb_schema){
var params_fn = (function (){var or__8916__auto__ = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(datasource);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return ((function (or__8916__auto__){
return (function() { 
var G__27482__delegate = function (args){
return null;
};
var G__27482 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27483__i = 0, G__27483__a = new Array(arguments.length -  0);
while (G__27483__i < G__27483__a.length) {G__27483__a[G__27483__i] = arguments[G__27483__i + 0]; ++G__27483__i;}
  args = new cljs.core.IndexedSeq(G__27483__a,0,null);
} 
return G__27482__delegate.call(this,args);};
G__27482.cljs$lang$maxFixedArity = 0;
G__27482.cljs$lang$applyTo = (function (arglist__27484){
var args = cljs.core.seq(arglist__27484);
return G__27482__delegate(args);
});
G__27482.cljs$core$IFn$_invoke$arity$variadic = G__27482__delegate;
return G__27482;
})()
;
;})(or__8916__auto__))
}
})();
var prev = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"meta","meta",1499536964),keechma.toolbox.dataloader.core.get_meta.call(null,app_db,datasource_key),new cljs.core.Keyword(null,"data","data",-232669377),keechma.toolbox.dataloader.core.get_data.call(null,app_db,edb_schema,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(datasource))], null);
var route = cljs.core.get_in.call(null,app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"data","data",-232669377)], null));
var deps = cljs.core.reduce.call(null,((function (params_fn,prev,route){
return (function (acc,dep_key){
return cljs.core.assoc.call(null,acc,dep_key,keechma.toolbox.dataloader.core.get_data.call(null,app_db,edb_schema,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,datasources,dep_key))));
});})(params_fn,prev,route))
,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(datasource));
return params_fn.call(null,prev,route,deps);
});
keechma.toolbox.dataloader.core.deps_fulfilled_QMARK_ = (function keechma$toolbox$dataloader$core$deps_fulfilled_QMARK_(app_db,datasources_plan,datasource){
return cljs.core.reduce.call(null,(function (fulfilled_QMARK_,dep_key){
var dep = cljs.core.get.call(null,datasources_plan,dep_key);
var and__8904__auto__ = fulfilled_QMARK_;
if(cljs.core.truth_(and__8904__auto__)){
var and__8904__auto____$1 = new cljs.core.Keyword(null,"deps-fulfilled?","deps-fulfilled?",-1634962438).cljs$core$IFn$_invoke$arity$1(dep);
if(cljs.core.truth_(and__8904__auto____$1)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"reload?","reload?",-1559406964).cljs$core$IFn$_invoke$arity$1(dep));
} else {
return and__8904__auto____$1;
}
} else {
return and__8904__auto__;
}
}),true,new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(datasource));
});
keechma.toolbox.dataloader.core.datasources_load_plan = (function keechma$toolbox$dataloader$core$datasources_load_plan(app_db,datasources,datasources_order,edb_schema){
var datasources_plan = cljs.core.PersistentArrayMap.EMPTY;
var datasources_order__$1 = datasources_order;
while(true){
if(cljs.core.seq.call(null,datasources_order__$1)){
var datasource_key = cljs.core.first.call(null,datasources_order__$1);
var datasource = cljs.core.get.call(null,datasources,datasource_key);
var datasource_meta = keechma.toolbox.dataloader.core.get_meta.call(null,app_db,datasource_key);
var datasource_deps_fulfilled_QMARK_ = keechma.toolbox.dataloader.core.deps_fulfilled_QMARK_.call(null,app_db,datasources_plan,datasource);
var new_datasource_params = keechma.toolbox.dataloader.core.datasource_params.call(null,datasources,datasource_key,datasource,app_db,edb_schema);
var reload_QMARK_ = ((cljs.core.not.call(null,datasource_deps_fulfilled_QMARK_))?true:!(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(datasource_meta),new_datasource_params)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword("keechma.toolbox.dataloader.core","ignore","keechma.toolbox.dataloader.core/ignore",-1113981850),new_datasource_params))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"completed","completed",-486056503),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(datasource_meta)))));
var G__27485 = cljs.core.assoc.call(null,datasources_plan,datasource_key,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"deps-fulfilled?","deps-fulfilled?",-1634962438),datasource_deps_fulfilled_QMARK_,new cljs.core.Keyword(null,"reload?","reload?",-1559406964),reload_QMARK_], null));
var G__27486 = cljs.core.rest.call(null,datasources_order__$1);
datasources_plan = G__27485;
datasources_order__$1 = G__27486;
continue;
} else {
return datasources_plan;
}
break;
}
});
keechma.toolbox.dataloader.core.make_dataloader = (function keechma$toolbox$dataloader$core$make_dataloader(var_args){
var G__27493 = arguments.length;
switch (G__27493) {
case 1:
return keechma.toolbox.dataloader.core.make_dataloader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return keechma.toolbox.dataloader.core.make_dataloader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

keechma.toolbox.dataloader.core.make_dataloader.cljs$core$IFn$_invoke$arity$1 = (function (datasources){
return keechma.toolbox.dataloader.core.make_dataloader.call(null,datasources,cljs.core.PersistentArrayMap.EMPTY);
});

keechma.toolbox.dataloader.core.make_dataloader.cljs$core$IFn$_invoke$arity$2 = (function (datasources,edb_schema){
var g = cljs.core.reduce.call(null,(function (acc,p__27494){
var vec__27495 = p__27494;
var key = cljs.core.nth.call(null,vec__27495,(0),null);
var val = cljs.core.nth.call(null,vec__27495,(1),null);
var deps = new cljs.core.Keyword(null,"deps","deps",1883360319).cljs$core$IFn$_invoke$arity$1(val);
return cljs.core.reduce.call(null,((function (deps,vec__27495,key,val){
return (function (p1__27487_SHARP_,p2__27488_SHARP_){
return com.stuartsierra.dependency.depend.call(null,p1__27487_SHARP_,key,p2__27488_SHARP_);
});})(deps,vec__27495,key,val))
,acc,deps);
}),com.stuartsierra.dependency.graph.call(null),datasources);
var g_nodes = com.stuartsierra.dependency.nodes.call(null,g);
var independent = cljs.core.filter.call(null,((function (g,g_nodes){
return (function (p1__27489_SHARP_){
return !(cljs.core.contains_QMARK_.call(null,g_nodes,p1__27489_SHARP_));
});})(g,g_nodes))
,cljs.core.keys.call(null,datasources));
return ((function (g,g_nodes,independent){
return (function (app_db_atom,context){
return promesa.core.promise.call(null,((function (g,g_nodes,independent){
return (function (resolve,reject,on_cancel){
var running_QMARK_ = cljs.core.atom.call(null,true);
var results_chan = cljs.core.async.chan.call(null);
var plan = keechma.toolbox.dataloader.core.datasources_load_plan.call(null,cljs.core.deref.call(null,app_db_atom),datasources,cljs.core.concat.call(null,independent,com.stuartsierra.dependency.topo_sort.call(null,g)),edb_schema);
var start_nodes = cljs.core.filter.call(null,((function (running_QMARK_,results_chan,plan,g,g_nodes,independent){
return (function (p1__27490_SHARP_){
var and__8904__auto__ = new cljs.core.Keyword(null,"reload?","reload?",-1559406964).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,plan,p1__27490_SHARP_));
if(cljs.core.truth_(and__8904__auto__)){
return new cljs.core.Keyword(null,"deps-fulfilled?","deps-fulfilled?",-1634962438).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,plan,p1__27490_SHARP_));
} else {
return and__8904__auto__;
}
});})(running_QMARK_,results_chan,plan,g,g_nodes,independent))
,cljs.core.keys.call(null,plan));
if(cljs.core.fn_QMARK_.call(null,on_cancel)){
on_cancel.call(null,((function (running_QMARK_,results_chan,plan,start_nodes,g,g_nodes,independent){
return (function (){
return cljs.core.swap_BANG_.call(null,running_QMARK_,cljs.core.not);
});})(running_QMARK_,results_chan,plan,start_nodes,g,g_nodes,independent))
);
} else {
}

keechma.toolbox.dataloader.core.mark_pending_BANG_.call(null,app_db_atom,edb_schema,cljs.core.select_keys.call(null,datasources,cljs.core.filter.call(null,((function (running_QMARK_,results_chan,plan,start_nodes,g,g_nodes,independent){
return (function (p1__27491_SHARP_){
return new cljs.core.Keyword(null,"reload?","reload?",-1559406964).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,plan,p1__27491_SHARP_));
});})(running_QMARK_,results_chan,plan,start_nodes,g,g_nodes,independent))
,cljs.core.keys.call(null,plan))));

keechma.toolbox.dataloader.core.start_loaders_BANG_.call(null,app_db_atom,datasources,cljs.core.select_keys.call(null,datasources,start_nodes),results_chan,edb_schema,context);

var c__17808__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__17808__auto__,running_QMARK_,results_chan,plan,start_nodes,g,g_nodes,independent){
return (function (){
var f__17809__auto__ = (function (){var switch__17718__auto__ = ((function (c__17808__auto__,running_QMARK_,results_chan,plan,start_nodes,g,g_nodes,independent){
return (function (state_27540){
var state_val_27541 = (state_27540[(1)]);
if((state_val_27541 === (7))){
var state_27540__$1 = state_27540;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27540__$1,(10),results_chan);
} else {
if((state_val_27541 === (1))){
var state_27540__$1 = state_27540;
var statearr_27542_27567 = state_27540__$1;
(statearr_27542_27567[(2)] = null);

(statearr_27542_27567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27541 === (4))){
var inst_27501 = cljs.core.deref.call(null,app_db_atom);
var inst_27502 = keechma.toolbox.dataloader.core.has_pending_datasources_QMARK_.call(null,inst_27501);
var state_27540__$1 = state_27540;
if(cljs.core.truth_(inst_27502)){
var statearr_27543_27568 = state_27540__$1;
(statearr_27543_27568[(1)] = (7));

} else {
var statearr_27544_27569 = state_27540__$1;
(statearr_27544_27569[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27541 === (13))){
var inst_27512 = (state_27540[(7)]);
var inst_27510 = (state_27540[(8)]);
var inst_27517 = cljs.core.deref.call(null,app_db_atom);
var inst_27518 = keechma.toolbox.dataloader.core.store_datasource_error_BANG_.call(null,inst_27517,edb_schema,inst_27510);
var inst_27519 = cljs.core.select_keys.call(null,datasources,inst_27512);
var inst_27520 = keechma.toolbox.dataloader.core.mark_dependent_errors_BANG_.call(null,inst_27518,datasources,inst_27519,edb_schema,inst_27510);
var inst_27521 = cljs.core.reset_BANG_.call(null,app_db_atom,inst_27520);
var state_27540__$1 = state_27540;
var statearr_27545_27570 = state_27540__$1;
(statearr_27545_27570[(2)] = inst_27521);

(statearr_27545_27570[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27541 === (6))){
var inst_27536 = (state_27540[(2)]);
var state_27540__$1 = state_27540;
var statearr_27546_27571 = state_27540__$1;
(statearr_27546_27571[(2)] = inst_27536);

(statearr_27546_27571[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27541 === (3))){
var inst_27538 = (state_27540[(2)]);
var state_27540__$1 = state_27540;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27540__$1,inst_27538);
} else {
if((state_val_27541 === (12))){
var inst_27512 = (state_27540[(7)]);
var inst_27510 = (state_27540[(8)]);
var inst_27513 = keechma.toolbox.dataloader.core.store_datasource_BANG_.call(null,app_db_atom,edb_schema,inst_27510);
var inst_27514 = cljs.core.select_keys.call(null,datasources,inst_27512);
var inst_27515 = keechma.toolbox.dataloader.core.start_dependent_loaders_BANG_.call(null,app_db_atom,datasources,inst_27514,results_chan,edb_schema,context);
var state_27540__$1 = (function (){var statearr_27547 = state_27540;
(statearr_27547[(9)] = inst_27513);

return statearr_27547;
})();
var statearr_27548_27572 = state_27540__$1;
(statearr_27548_27572[(2)] = inst_27515);

(statearr_27548_27572[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27541 === (2))){
var inst_27499 = cljs.core.deref.call(null,running_QMARK_);
var state_27540__$1 = state_27540;
if(cljs.core.truth_(inst_27499)){
var statearr_27549_27573 = state_27540__$1;
(statearr_27549_27573[(1)] = (4));

} else {
var statearr_27550_27574 = state_27540__$1;
(statearr_27550_27574[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27541 === (11))){
var inst_27525 = (state_27540[(2)]);
var state_27540__$1 = (function (){var statearr_27551 = state_27540;
(statearr_27551[(10)] = inst_27525);

return statearr_27551;
})();
var statearr_27552_27575 = state_27540__$1;
(statearr_27552_27575[(2)] = null);

(statearr_27552_27575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27541 === (9))){
var inst_27531 = (state_27540[(2)]);
var state_27540__$1 = state_27540;
var statearr_27553_27576 = state_27540__$1;
(statearr_27553_27576[(2)] = inst_27531);

(statearr_27553_27576[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27541 === (5))){
var inst_27533 = (new Error("Dataloader Rejected"));
var inst_27534 = reject.call(null,inst_27533);
var state_27540__$1 = state_27540;
var statearr_27554_27577 = state_27540__$1;
(statearr_27554_27577[(2)] = inst_27534);

(statearr_27554_27577[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27541 === (14))){
var state_27540__$1 = state_27540;
var statearr_27555_27578 = state_27540__$1;
(statearr_27555_27578[(2)] = null);

(statearr_27555_27578[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27541 === (10))){
var inst_27510 = (state_27540[(8)]);
var inst_27508 = (state_27540[(2)]);
var inst_27509 = cljs.core.nth.call(null,inst_27508,(0),null);
var inst_27510__$1 = cljs.core.nth.call(null,inst_27508,(1),null);
var inst_27511 = new cljs.core.Keyword(null,"datasource","datasource",-246060221).cljs$core$IFn$_invoke$arity$1(inst_27510__$1);
var inst_27512 = com.stuartsierra.dependency.transitive_dependents.call(null,g,inst_27511);
var state_27540__$1 = (function (){var statearr_27556 = state_27540;
(statearr_27556[(7)] = inst_27512);

(statearr_27556[(8)] = inst_27510__$1);

return statearr_27556;
})();
var G__27557_27579 = inst_27509;
var G__27557_27580__$1 = (((G__27557_27579 instanceof cljs.core.Keyword))?G__27557_27579.fqn:null);
switch (G__27557_27580__$1) {
case "ok":
var statearr_27558_27582 = state_27540__$1;
(statearr_27558_27582[(1)] = (12));


break;
case "error":
var statearr_27559_27583 = state_27540__$1;
(statearr_27559_27583[(1)] = (13));


break;
default:
var statearr_27560_27584 = state_27540__$1;
(statearr_27560_27584[(1)] = (14));



}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27541 === (8))){
var inst_27528 = cljs.core.deref.call(null,app_db_atom);
var inst_27529 = resolve.call(null,inst_27528);
var state_27540__$1 = state_27540;
var statearr_27561_27585 = state_27540__$1;
(statearr_27561_27585[(2)] = inst_27529);

(statearr_27561_27585[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__17808__auto__,running_QMARK_,results_chan,plan,start_nodes,g,g_nodes,independent))
;
return ((function (switch__17718__auto__,c__17808__auto__,running_QMARK_,results_chan,plan,start_nodes,g,g_nodes,independent){
return (function() {
var keechma$toolbox$dataloader$core$state_machine__17719__auto__ = null;
var keechma$toolbox$dataloader$core$state_machine__17719__auto____0 = (function (){
var statearr_27562 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27562[(0)] = keechma$toolbox$dataloader$core$state_machine__17719__auto__);

(statearr_27562[(1)] = (1));

return statearr_27562;
});
var keechma$toolbox$dataloader$core$state_machine__17719__auto____1 = (function (state_27540){
while(true){
var ret_value__17720__auto__ = (function (){try{while(true){
var result__17721__auto__ = switch__17718__auto__.call(null,state_27540);
if(cljs.core.keyword_identical_QMARK_.call(null,result__17721__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__17721__auto__;
}
break;
}
}catch (e27563){if((e27563 instanceof Object)){
var ex__17722__auto__ = e27563;
var statearr_27564_27586 = state_27540;
(statearr_27564_27586[(5)] = ex__17722__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27540);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27563;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__17720__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27587 = state_27540;
state_27540 = G__27587;
continue;
} else {
return ret_value__17720__auto__;
}
break;
}
});
keechma$toolbox$dataloader$core$state_machine__17719__auto__ = function(state_27540){
switch(arguments.length){
case 0:
return keechma$toolbox$dataloader$core$state_machine__17719__auto____0.call(this);
case 1:
return keechma$toolbox$dataloader$core$state_machine__17719__auto____1.call(this,state_27540);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
keechma$toolbox$dataloader$core$state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$0 = keechma$toolbox$dataloader$core$state_machine__17719__auto____0;
keechma$toolbox$dataloader$core$state_machine__17719__auto__.cljs$core$IFn$_invoke$arity$1 = keechma$toolbox$dataloader$core$state_machine__17719__auto____1;
return keechma$toolbox$dataloader$core$state_machine__17719__auto__;
})()
;})(switch__17718__auto__,c__17808__auto__,running_QMARK_,results_chan,plan,start_nodes,g,g_nodes,independent))
})();
var state__17810__auto__ = (function (){var statearr_27565 = f__17809__auto__.call(null);
(statearr_27565[(6)] = c__17808__auto__);

return statearr_27565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__17810__auto__);
});})(c__17808__auto__,running_QMARK_,results_chan,plan,start_nodes,g,g_nodes,independent))
);

return c__17808__auto__;
});})(g,g_nodes,independent))
);
});
;})(g,g_nodes,independent))
});

keechma.toolbox.dataloader.core.make_dataloader.cljs$lang$maxFixedArity = 2;

