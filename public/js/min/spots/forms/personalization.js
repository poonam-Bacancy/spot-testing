// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('spots.forms.personalization');
goog.require('cljs.core');
goog.require('keechma.toolbox.forms.core');
goog.require('clojure.string');
goog.require('forms.validator');
goog.require('clojure.walk');
goog.require('keechma.toolbox.forms.controller');
goog.require('spots.forms.validators');
goog.require('keechma.toolbox.pipeline.core');
goog.require('spots.gql');
goog.require('spots.util.gql_api');
goog.require('spots.domain.cupcake_design');
goog.require('cljs_uuid_utils.core');
spots.forms.personalization.larger_than_minimum_pack_amount_QMARK_ = (function spots$forms$personalization$larger_than_minimum_pack_amount_QMARK_(value,form_data,path){
var count_cupcakes_by = new cljs.core.Keyword(null,"countCupcakesBy","countCupcakesBy",1194237456).cljs$core$IFn$_invoke$arity$1(form_data);
if(cljs.core.not_EQ_.call(null,"the_dozen",count_cupcakes_by)){
var and__8904__auto__ = spots.forms.validators.number_GT__EQ_6_QMARK_.call(null,value,form_data,path);
if(cljs.core.truth_(and__8904__auto__)){
return spots.forms.validators.not_empty_QMARK_.call(null,value,form_data,path);
} else {
return and__8904__auto__;
}
} else {
return true;
}
});
spots.forms.personalization.validator = forms.validator.validator.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cupcakeCount","cupcakeCount",-729321273),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">=6",">=6",-31388082),spots.forms.personalization.larger_than_minimum_pack_amount_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not-empty","not-empty",388922063),spots.forms.validators.not_empty_QMARK_], null)], null)], null));
if(typeof spots.forms.personalization.cupcake_id !== 'undefined'){
} else {
spots.forms.personalization.cupcake_id = cljs_uuid_utils.core.make_random_uuid.call(null);
}
spots.forms.personalization.mock_data = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"shareableImages","shareableImages",1104334690),new cljs.core.Keyword(null,"shippingMethod","shippingMethod",-206764952),new cljs.core.Keyword(null,"pickupTime","pickupTime",-806113848),new cljs.core.Keyword(null,"orderType","orderType",-1327411288),new cljs.core.Keyword(null,"countCupcakesBy","countCupcakesBy",1194237456),new cljs.core.Keyword(null,"flavorIds","flavorIds",1648187953),new cljs.core.Keyword(null,"fullName","fullName",-202600044),new cljs.core.Keyword(null,"cupcakes","cupcakes",1587634267),new cljs.core.Keyword(null,"phoneNumber","phoneNumber",-1478227908)],["tibor.kranjcec@maddev.com",true,"pickup","2018-01-20 09:30","personal","the_dozen",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["1","2"], null),"Tibor Kranjcec",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"colorId","colorId",935519260),"1",new cljs.core.Keyword(null,"curved","curved",1164242293),true,new cljs.core.Keyword(null,"firstLine","firstLine",-51539625),"asdasd",new cljs.core.Keyword(null,"fontId","fontId",-474874285),"2",new cljs.core.Keyword(null,"quantity","quantity",-1929050694),(144),new cljs.core.Keyword(null,"secondLine","secondLine",-1210275124),"sadads",new cljs.core.Keyword(null,"thirdLine","thirdLine",698999214),"sadasd",new cljs.core.Keyword(null,"type","type",1174270348),"message"], null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"colorId","colorId",935519260),"2",new cljs.core.Keyword(null,"curved","curved",1164242293),false,new cljs.core.Keyword(null,"textSize","textSize",524775797),"small",new cljs.core.Keyword(null,"firstLine","firstLine",-51539625),"asdasd",new cljs.core.Keyword(null,"fontId","fontId",-474874285),"2",new cljs.core.Keyword(null,"quantity","quantity",-1929050694),(144),new cljs.core.Keyword(null,"secondLine","secondLine",-1210275124),"sadads",new cljs.core.Keyword(null,"type","type",1174270348),"message"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"clipartId","clipartId",-284954072),"1",new cljs.core.Keyword(null,"quantity","quantity",-1929050694),(144),new cljs.core.Keyword(null,"type","type",1174270348),"clipart"], null)], null),"111-222-3333"]);
spots.forms.personalization.init_data = (function spots$forms$personalization$init_data(original_data){
return cljs.core.merge.call(null,original_data,spots.forms.personalization.mock_data);
});
spots.forms.personalization.cupcakes_total = (function spots$forms$personalization$cupcakes_total(cupcakes){
return cljs.core.reduce.call(null,(function (acc,v){
return (acc + (function (){var or__8916__auto__ = new cljs.core.Keyword(null,"quantity","quantity",-1929050694).cljs$core$IFn$_invoke$arity$1(v);
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return (0);
}
})());
}),(0),cupcakes);
});
spots.forms.personalization.cupcakes_max = (function spots$forms$personalization$cupcakes_max(form_data){
var ccb = new cljs.core.Keyword(null,"countCupcakesBy","countCupcakesBy",1194237456).cljs$core$IFn$_invoke$arity$1(form_data);
var cc = new cljs.core.Keyword(null,"cupcakeCount","cupcakeCount",-729321273).cljs$core$IFn$_invoke$arity$1(form_data);
if(cljs.core._EQ_.call(null,"the_dozen",ccb)){
return ((12) * cc);
} else {
return ((4) * cc);
}
});
spots.forms.personalization.cupcake_qty_processor = (function spots$forms$personalization$cupcake_qty_processor(app_db,form_props,form_state,path,value){
var int_value = parseInt(value);
var real_int_value = (cljs.core.truth_(isNaN(int_value))?(0):int_value);
var form_data = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(form_state);
var potential_form_data = cljs.core.assoc_in.call(null,form_data,path,real_int_value);
var potential_cupcakes_diff = (spots.forms.personalization.cupcakes_max.call(null,potential_form_data) - spots.forms.personalization.cupcakes_total.call(null,new cljs.core.Keyword(null,"cupcakes","cupcakes",1587634267).cljs$core$IFn$_invoke$arity$1(potential_form_data)));
return cljs.core.assoc.call(null,form_state,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.assoc_in.call(null,form_data,path,(((potential_cupcakes_diff < (0)))?(real_int_value + potential_cupcakes_diff):real_int_value)));
});
spots.forms.personalization.update_cupcake_qty = (function spots$forms$personalization$update_cupcake_qty(form_state,cupcakes_group_count,val_qty,val_mod){
var qtys = cljs.core.update.call(null,cljs.core.vec.call(null,cljs.core.repeat.call(null,cupcakes_group_count,val_qty)),(0),(function (p1__27310_SHARP_){
return (val_mod + p1__27310_SHARP_);
}));
if((cupcakes_group_count > (0))){
return cljs.core.reduce_kv.call(null,((function (qtys){
return (function (m,k,v){
return cljs.core.assoc_in.call(null,m,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"cupcakes","cupcakes",1587634267),k,new cljs.core.Keyword(null,"quantity","quantity",-1929050694)], null),v);
});})(qtys))
,form_state,qtys);
} else {
return form_state;
}
});
spots.forms.personalization.cupcake_max_processor = (function spots$forms$personalization$cupcake_max_processor(app_db,form_props,form_state,path,value){
var int_value = parseInt(value);
var real_int_value = (cljs.core.truth_(isNaN(int_value))?(0):int_value);
var form_data = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(form_state);
var cupcakes_group_count = cljs.core.count.call(null,new cljs.core.Keyword(null,"cupcakes","cupcakes",1587634267).cljs$core$IFn$_invoke$arity$1(form_data));
var cupcakes_max_count = spots.forms.personalization.cupcakes_max.call(null,cljs.core.assoc.call(null,form_data,new cljs.core.Keyword(null,"cupcakeCount","cupcakeCount",-729321273),real_int_value));
var new_val_mod = cljs.core.mod.call(null,cupcakes_max_count,cupcakes_group_count);
var new_val_qty = cljs.core.quot.call(null,cupcakes_max_count,cupcakes_group_count);
return cljs.core.assoc_in.call(null,spots.forms.personalization.update_cupcake_qty.call(null,form_state,cupcakes_group_count,new_val_qty,new_val_mod),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),path),real_int_value);
});
spots.forms.personalization.count_cupcakes_by_processor = (function spots$forms$personalization$count_cupcakes_by_processor(app_db,form_props,form_state,path,value){
var new_state = cljs.core.assoc_in.call(null,form_state,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377)], null),path),value);
if(cljs.core._EQ_.call(null,"the_dozen",value)){
return new_state;
} else {
try{var cupcakes = cljs.core.get_in.call(null,form_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"cupcakes","cupcakes",1587634267)], null));
var new_cupcakes = cljs.core.vec.call(null,((((4) <= cljs.core.count.call(null,cupcakes)))?cljs.core.subvec.call(null,cupcakes,(0),(4)):cljs.core.concat.call(null,cupcakes,cljs.core.repeatedly.call(null,((4) - cljs.core.count.call(null,cupcakes)),((function (cupcakes,new_state){
return (function (){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"quantity","quantity",-1929050694),(0),new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"id","id",-1388402092),cljs_uuid_utils.core.make_random_uuid.call(null)], null);
});})(cupcakes,new_state))
))));
return spots.forms.personalization.cupcake_max_processor.call(null,app_db,form_props,cljs.core.assoc_in.call(null,new_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"cupcakes","cupcakes",1587634267)], null),new_cupcakes),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cupcakeCount","cupcakeCount",-729321273)], null),(function (){var or__8916__auto__ = cljs.core.get_in.call(null,form_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"cupcakeCount","cupcakeCount",-729321273)], null));
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return (0);
}
})());
}catch (e27311){var e = e27311;
return null;
}}
});

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
spots.forms.personalization.PersonalizationForm = (function (validator,__meta,__extmap,__hash){
this.validator = validator;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
spots.forms.personalization.PersonalizationForm.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9604__auto__,k__9605__auto__){
var self__ = this;
var this__9604__auto____$1 = this;
return this__9604__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9605__auto__,null);
});

spots.forms.personalization.PersonalizationForm.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9606__auto__,k27313,else__9607__auto__){
var self__ = this;
var this__9606__auto____$1 = this;
var G__27317 = k27313;
var G__27317__$1 = (((G__27317 instanceof cljs.core.Keyword))?G__27317.fqn:null);
switch (G__27317__$1) {
case "validator":
return self__.validator;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27313,else__9607__auto__);

}
});

spots.forms.personalization.PersonalizationForm.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9618__auto__,writer__9619__auto__,opts__9620__auto__){
var self__ = this;
var this__9618__auto____$1 = this;
var pr_pair__9621__auto__ = ((function (this__9618__auto____$1){
return (function (keyval__9622__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,cljs.core.pr_writer,""," ","",opts__9620__auto__,keyval__9622__auto__);
});})(this__9618__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,pr_pair__9621__auto__,"#spots.forms.personalization.PersonalizationForm{",", ","}",opts__9620__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"validator","validator",-1966190681),self__.validator],null))], null),self__.__extmap));
});

spots.forms.personalization.PersonalizationForm.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27312){
var self__ = this;
var G__27312__$1 = this;
return (new cljs.core.RecordIter((0),G__27312__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"validator","validator",-1966190681)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

spots.forms.personalization.PersonalizationForm.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9602__auto__){
var self__ = this;
var this__9602__auto____$1 = this;
return self__.__meta;
});

spots.forms.personalization.PersonalizationForm.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9599__auto__){
var self__ = this;
var this__9599__auto____$1 = this;
return (new spots.forms.personalization.PersonalizationForm(self__.validator,self__.__meta,self__.__extmap,self__.__hash));
});

spots.forms.personalization.PersonalizationForm.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9608__auto__){
var self__ = this;
var this__9608__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

spots.forms.personalization.PersonalizationForm.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9600__auto__){
var self__ = this;
var this__9600__auto____$1 = this;
var h__9372__auto__ = self__.__hash;
if(!((h__9372__auto__ == null))){
return h__9372__auto__;
} else {
var h__9372__auto____$1 = ((function (h__9372__auto__,this__9600__auto____$1){
return (function (coll__9601__auto__){
return (-1749150481 ^ cljs.core.hash_unordered_coll.call(null,coll__9601__auto__));
});})(h__9372__auto__,this__9600__auto____$1))
.call(null,this__9600__auto____$1);
self__.__hash = h__9372__auto____$1;

return h__9372__auto____$1;
}
});

spots.forms.personalization.PersonalizationForm.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27314,other27315){
var self__ = this;
var this27314__$1 = this;
return (!((other27315 == null))) && ((this27314__$1.constructor === other27315.constructor)) && (cljs.core._EQ_.call(null,this27314__$1.validator,other27315.validator)) && (cljs.core._EQ_.call(null,this27314__$1.__extmap,other27315.__extmap));
});

spots.forms.personalization.PersonalizationForm.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9613__auto__,k__9614__auto__){
var self__ = this;
var this__9613__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"validator","validator",-1966190681),null], null), null),k__9614__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9613__auto____$1),self__.__meta),k__9614__auto__);
} else {
return (new spots.forms.personalization.PersonalizationForm(self__.validator,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9614__auto__)),null));
}
});

spots.forms.personalization.PersonalizationForm.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9611__auto__,k__9612__auto__,G__27312){
var self__ = this;
var this__9611__auto____$1 = this;
var pred__27318 = cljs.core.keyword_identical_QMARK_;
var expr__27319 = k__9612__auto__;
if(cljs.core.truth_(pred__27318.call(null,new cljs.core.Keyword(null,"validator","validator",-1966190681),expr__27319))){
return (new spots.forms.personalization.PersonalizationForm(G__27312,self__.__meta,self__.__extmap,null));
} else {
return (new spots.forms.personalization.PersonalizationForm(self__.validator,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9612__auto__,G__27312),null));
}
});

spots.forms.personalization.PersonalizationForm.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9616__auto__){
var self__ = this;
var this__9616__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"validator","validator",-1966190681),self__.validator],null))], null),self__.__extmap));
});

spots.forms.personalization.PersonalizationForm.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9603__auto__,G__27312){
var self__ = this;
var this__9603__auto____$1 = this;
return (new spots.forms.personalization.PersonalizationForm(self__.validator,G__27312,self__.__extmap,self__.__hash));
});

spots.forms.personalization.PersonalizationForm.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9609__auto__,entry__9610__auto__){
var self__ = this;
var this__9609__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9610__auto__)){
return this__9609__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9610__auto__,(0)),cljs.core._nth.call(null,entry__9610__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9609__auto____$1,entry__9610__auto__);
}
});

spots.forms.personalization.PersonalizationForm.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"validator","validator",-325659154,null)], null);
});

spots.forms.personalization.PersonalizationForm.cljs$lang$type = true;

spots.forms.personalization.PersonalizationForm.cljs$lang$ctorPrSeq = (function (this__9642__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"spots.forms.personalization/PersonalizationForm");
});

spots.forms.personalization.PersonalizationForm.cljs$lang$ctorPrWriter = (function (this__9642__auto__,writer__9643__auto__){
return cljs.core._write.call(null,writer__9643__auto__,"spots.forms.personalization/PersonalizationForm");
});

spots.forms.personalization.__GT_PersonalizationForm = (function spots$forms$personalization$__GT_PersonalizationForm(validator){
return (new spots.forms.personalization.PersonalizationForm(validator,null,null,null));
});

spots.forms.personalization.map__GT_PersonalizationForm = (function spots$forms$personalization$map__GT_PersonalizationForm(G__27316){
return (new spots.forms.personalization.PersonalizationForm(new cljs.core.Keyword(null,"validator","validator",-1966190681).cljs$core$IFn$_invoke$arity$1(G__27316),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__27316,new cljs.core.Keyword(null,"validator","validator",-1966190681))),null));
});

cljs.core._add_method.call(null,keechma.toolbox.forms.core.get_data,spots.forms.personalization.PersonalizationForm,(function (this$,app_db,form_props){
spots.forms.personalization.init_data.call(null,cljs.core.identity.call(null,cljs.core.get_in.call(null,app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword(null,"order-form","order-form",-1222210477)], null))));

return cljs.core.get_in.call(null,app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword(null,"order-form","order-form",-1222210477)], null));
}));
cljs.core._add_method.call(null,keechma.toolbox.forms.core.process_attr_with,spots.forms.personalization.PersonalizationForm,(function (this$,path){
var vec__27322 = path;
var k_first = cljs.core.nth.call(null,vec__27322,(0),null);
var _ = cljs.core.nth.call(null,vec__27322,(1),null);
var k_last = cljs.core.nth.call(null,vec__27322,(2),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"countCupcakesBy","countCupcakesBy",1194237456),k_first)){
return spots.forms.personalization.count_cupcakes_by_processor;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cupcakeCount","cupcakeCount",-729321273),k_first)){
return spots.forms.personalization.cupcake_max_processor;
} else {
if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cupcakes","cupcakes",1587634267),k_first)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"quantity","quantity",-1929050694),k_last))){
return spots.forms.personalization.cupcake_qty_processor;
} else {
return null;

}
}
}
}));
cljs.core._add_method.call(null,keechma.toolbox.forms.core.submit_data,spots.forms.personalization.PersonalizationForm,(function (_,app_db,___$1,data){
return spots.util.gql_api.wrap_validation.call(null,spots.util.gql_api.gql_req.call(null,spots.gql.validate_order_personalization_m,spots.util.gql_api.wrap_request.call(null,spots.domain.cupcake_design.strip_local_data.call(null,data))));
}));
cljs.core._add_method.call(null,keechma.toolbox.forms.core.on_submit_success,spots.forms.personalization.PersonalizationForm,(function (this$,app_db,form_props,data){
var res = new cljs.core.Keyword(null,"validate","validate",-201300827).cljs$core$IFn$_invoke$arity$1(data);
var data__$1 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(keechma.toolbox.forms.controller.get_form_state.call(null,app_db,form_props));
return keechma.toolbox.pipeline.core.make_pipeline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (res,data__$1){
return (function (value,app_db__$1,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(when\n (:valid res)\n (pipeline!\n  [value app-db]\n  (pp/commit! (assoc-in app-db [:kv :order-form] data))\n  (pp/send-command!\n   [forms-core/id-key :mount-form]\n   [:confirmation :form])\n  (pp/commit!\n   (assoc-in app-db [:kv :form-progress :confirmation] true))\n  (pp/redirect! {:page \"confirmation\"})))",new cljs.core.Keyword(null,"val","val",128701612),(cljs.core.truth_(new cljs.core.Keyword(null,"valid","valid",155614240).cljs$core$IFn$_invoke$arity$1(res))?keechma.toolbox.pipeline.core.make_pipeline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (res,data__$1){
return (function (value__$1,app_db__$2,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/commit! (assoc-in app-db [:kv :order-form] data))",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.commit_BANG_.call(null,cljs.core.assoc_in.call(null,app_db__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword(null,"order-form","order-form",-1222210477)], null),data__$1))], null);
});})(res,data__$1))
,((function (res,data__$1){
return (function (value__$1,app_db__$2,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/send-command! [forms-core/id-key :mount-form] [:confirmation :form])",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.send_command_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.toolbox.forms.core.id_key,new cljs.core.Keyword(null,"mount-form","mount-form",-123555853)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"confirmation","confirmation",-634977782),new cljs.core.Keyword(null,"form","form",-1624062471)], null))], null);
});})(res,data__$1))
,((function (res,data__$1){
return (function (value__$1,app_db__$2,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/commit! (assoc-in app-db [:kv :form-progress :confirmation] true))",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.commit_BANG_.call(null,cljs.core.assoc_in.call(null,app_db__$2,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword(null,"form-progress","form-progress",1431385543),new cljs.core.Keyword(null,"confirmation","confirmation",-634977782)], null),true))], null);
});})(res,data__$1))
,((function (res,data__$1){
return (function (value__$1,app_db__$2,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/redirect! {:page \"confirmation\"})",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.redirect_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),"confirmation"], null))], null);
});})(res,data__$1))
], null)], null)):null)], null);
});})(res,data__$1))
], null)], null));
}));
spots.forms.personalization.constructor$ = (function spots$forms$personalization$constructor(){
return spots.forms.personalization.__GT_PersonalizationForm.call(null,spots.forms.personalization.validator);
});
