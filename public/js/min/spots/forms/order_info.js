// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('spots.forms.order_info');
goog.require('cljs.core');
goog.require('keechma.toolbox.forms.core');
goog.require('keechma.toolbox.forms.controller');
goog.require('forms.validator');
goog.require('clojure.string');
goog.require('spots.forms.validators');
goog.require('keechma.toolbox.pipeline.core');
spots.forms.order_info.address_part_not_empty_QMARK_ = (function spots$forms$order_info$address_part_not_empty_QMARK_(value,form_data,path){
var shipping_method = new cljs.core.Keyword(null,"shippingMethod","shippingMethod",-206764952).cljs$core$IFn$_invoke$arity$1(form_data);
if(cljs.core.not_EQ_.call(null,"pickup",shipping_method)){
return spots.forms.validators.not_empty_QMARK_.call(null,value,form_data,path);
} else {
return true;
}
});
spots.forms.order_info.validator = forms.validator.validator.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"shippingMethod","shippingMethod",-206764952),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not-empty","not-empty",388922063),spots.forms.validators.not_empty_QMARK_], null)], null),new cljs.core.Keyword(null,"address.street","address.street",2013477424),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not-empty","not-empty",388922063),spots.forms.order_info.address_part_not_empty_QMARK_], null)], null),new cljs.core.Keyword(null,"address.city","address.city",-341021513),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not-empty","not-empty",388922063),spots.forms.order_info.address_part_not_empty_QMARK_], null)], null),new cljs.core.Keyword(null,"address.state","address.state",1587282334),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not-empty","not-empty",388922063),spots.forms.order_info.address_part_not_empty_QMARK_], null)], null),new cljs.core.Keyword(null,"address.zipcode","address.zipcode",-1676444471),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not-empty","not-empty",388922063),spots.forms.order_info.address_part_not_empty_QMARK_], null)], null)], null));

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
spots.forms.order_info.OrderInfoForm = (function (validator,__meta,__extmap,__hash){
this.validator = validator;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
spots.forms.order_info.OrderInfoForm.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9604__auto__,k__9605__auto__){
var self__ = this;
var this__9604__auto____$1 = this;
return this__9604__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9605__auto__,null);
});

spots.forms.order_info.OrderInfoForm.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9606__auto__,k27813,else__9607__auto__){
var self__ = this;
var this__9606__auto____$1 = this;
var G__27817 = k27813;
var G__27817__$1 = (((G__27817 instanceof cljs.core.Keyword))?G__27817.fqn:null);
switch (G__27817__$1) {
case "validator":
return self__.validator;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27813,else__9607__auto__);

}
});

spots.forms.order_info.OrderInfoForm.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9618__auto__,writer__9619__auto__,opts__9620__auto__){
var self__ = this;
var this__9618__auto____$1 = this;
var pr_pair__9621__auto__ = ((function (this__9618__auto____$1){
return (function (keyval__9622__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,cljs.core.pr_writer,""," ","",opts__9620__auto__,keyval__9622__auto__);
});})(this__9618__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,pr_pair__9621__auto__,"#spots.forms.order-info.OrderInfoForm{",", ","}",opts__9620__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"validator","validator",-1966190681),self__.validator],null))], null),self__.__extmap));
});

spots.forms.order_info.OrderInfoForm.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27812){
var self__ = this;
var G__27812__$1 = this;
return (new cljs.core.RecordIter((0),G__27812__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"validator","validator",-1966190681)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

spots.forms.order_info.OrderInfoForm.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9602__auto__){
var self__ = this;
var this__9602__auto____$1 = this;
return self__.__meta;
});

spots.forms.order_info.OrderInfoForm.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9599__auto__){
var self__ = this;
var this__9599__auto____$1 = this;
return (new spots.forms.order_info.OrderInfoForm(self__.validator,self__.__meta,self__.__extmap,self__.__hash));
});

spots.forms.order_info.OrderInfoForm.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9608__auto__){
var self__ = this;
var this__9608__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

spots.forms.order_info.OrderInfoForm.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9600__auto__){
var self__ = this;
var this__9600__auto____$1 = this;
var h__9372__auto__ = self__.__hash;
if(!((h__9372__auto__ == null))){
return h__9372__auto__;
} else {
var h__9372__auto____$1 = ((function (h__9372__auto__,this__9600__auto____$1){
return (function (coll__9601__auto__){
return (1711753057 ^ cljs.core.hash_unordered_coll.call(null,coll__9601__auto__));
});})(h__9372__auto__,this__9600__auto____$1))
.call(null,this__9600__auto____$1);
self__.__hash = h__9372__auto____$1;

return h__9372__auto____$1;
}
});

spots.forms.order_info.OrderInfoForm.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27814,other27815){
var self__ = this;
var this27814__$1 = this;
return (!((other27815 == null))) && ((this27814__$1.constructor === other27815.constructor)) && (cljs.core._EQ_.call(null,this27814__$1.validator,other27815.validator)) && (cljs.core._EQ_.call(null,this27814__$1.__extmap,other27815.__extmap));
});

spots.forms.order_info.OrderInfoForm.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9613__auto__,k__9614__auto__){
var self__ = this;
var this__9613__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"validator","validator",-1966190681),null], null), null),k__9614__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9613__auto____$1),self__.__meta),k__9614__auto__);
} else {
return (new spots.forms.order_info.OrderInfoForm(self__.validator,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9614__auto__)),null));
}
});

spots.forms.order_info.OrderInfoForm.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9611__auto__,k__9612__auto__,G__27812){
var self__ = this;
var this__9611__auto____$1 = this;
var pred__27818 = cljs.core.keyword_identical_QMARK_;
var expr__27819 = k__9612__auto__;
if(cljs.core.truth_(pred__27818.call(null,new cljs.core.Keyword(null,"validator","validator",-1966190681),expr__27819))){
return (new spots.forms.order_info.OrderInfoForm(G__27812,self__.__meta,self__.__extmap,null));
} else {
return (new spots.forms.order_info.OrderInfoForm(self__.validator,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9612__auto__,G__27812),null));
}
});

spots.forms.order_info.OrderInfoForm.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9616__auto__){
var self__ = this;
var this__9616__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"validator","validator",-1966190681),self__.validator],null))], null),self__.__extmap));
});

spots.forms.order_info.OrderInfoForm.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9603__auto__,G__27812){
var self__ = this;
var this__9603__auto____$1 = this;
return (new spots.forms.order_info.OrderInfoForm(self__.validator,G__27812,self__.__extmap,self__.__hash));
});

spots.forms.order_info.OrderInfoForm.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9609__auto__,entry__9610__auto__){
var self__ = this;
var this__9609__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9610__auto__)){
return this__9609__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9610__auto__,(0)),cljs.core._nth.call(null,entry__9610__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9609__auto____$1,entry__9610__auto__);
}
});

spots.forms.order_info.OrderInfoForm.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"validator","validator",-325659154,null)], null);
});

spots.forms.order_info.OrderInfoForm.cljs$lang$type = true;

spots.forms.order_info.OrderInfoForm.cljs$lang$ctorPrSeq = (function (this__9642__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"spots.forms.order-info/OrderInfoForm");
});

spots.forms.order_info.OrderInfoForm.cljs$lang$ctorPrWriter = (function (this__9642__auto__,writer__9643__auto__){
return cljs.core._write.call(null,writer__9643__auto__,"spots.forms.order-info/OrderInfoForm");
});

spots.forms.order_info.__GT_OrderInfoForm = (function spots$forms$order_info$__GT_OrderInfoForm(validator){
return (new spots.forms.order_info.OrderInfoForm(validator,null,null,null));
});

spots.forms.order_info.map__GT_OrderInfoForm = (function spots$forms$order_info$map__GT_OrderInfoForm(G__27816){
return (new spots.forms.order_info.OrderInfoForm(new cljs.core.Keyword(null,"validator","validator",-1966190681).cljs$core$IFn$_invoke$arity$1(G__27816),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__27816,new cljs.core.Keyword(null,"validator","validator",-1966190681))),null));
});

cljs.core._add_method.call(null,keechma.toolbox.forms.core.get_data,spots.forms.order_info.OrderInfoForm,(function (this$,app_db,form_props){
return cljs.core.get_in.call(null,app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword(null,"order-form","order-form",-1222210477)], null));
}));
cljs.core._add_method.call(null,keechma.toolbox.forms.core.process_attr_with,spots.forms.order_info.OrderInfoForm,(function (this$,path){
if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shippingMethod","shippingMethod",-206764952)], null),path)){
return (function (app_db,form_props,form_state,path__$1,value){
var data = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(form_state);
var new_data = cljs.core.dissoc.call(null,cljs.core.dissoc.call(null,cljs.core.assoc_in.call(null,data,path__$1,value),new cljs.core.Keyword(null,"address","address",559499426)),new cljs.core.Keyword(null,"apartmentNumber","apartmentNumber",969536382));
return cljs.core.assoc.call(null,form_state,new cljs.core.Keyword(null,"data","data",-232669377),new_data);
});
} else {
return null;
}
}));
cljs.core._add_method.call(null,keechma.toolbox.forms.core.submit_data,spots.forms.order_info.OrderInfoForm,(function (_,app_db,___$1,data){
return data;
}));
cljs.core._add_method.call(null,keechma.toolbox.forms.core.on_submit_success,spots.forms.order_info.OrderInfoForm,(function (this$,app_db,form_props,data){
var form_data = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(keechma.toolbox.forms.controller.get_form_state.call(null,app_db,form_props));
return keechma.toolbox.pipeline.core.make_pipeline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (form_data){
return (function (value,app_db__$1,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/commit! (assoc-in app-db [:kv :order-form] data))",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.commit_BANG_.call(null,cljs.core.assoc_in.call(null,app_db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword(null,"order-form","order-form",-1222210477)], null),data))], null);
});})(form_data))
,((function (form_data){
return (function (value,app_db__$1,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/send-command! [forms-core/id-key :mount-form] [:recipient :form])",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.send_command_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.toolbox.forms.core.id_key,new cljs.core.Keyword(null,"mount-form","mount-form",-123555853)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"recipient","recipient",1650072234),new cljs.core.Keyword(null,"form","form",-1624062471)], null))], null);
});})(form_data))
,((function (form_data){
return (function (value,app_db__$1,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/commit! (assoc-in app-db [:kv :form-progress :recipient] true))",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.commit_BANG_.call(null,cljs.core.assoc_in.call(null,app_db__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword(null,"form-progress","form-progress",1431385543),new cljs.core.Keyword(null,"recipient","recipient",1650072234)], null),true))], null);
});})(form_data))
,((function (form_data){
return (function (value,app_db__$1,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/redirect! {:page \"recipient\"})",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.redirect_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page","page",849072397),"recipient"], null))], null);
});})(form_data))
], null)], null));
}));
spots.forms.order_info.constructor$ = (function spots$forms$order_info$constructor(){
return spots.forms.order_info.__GT_OrderInfoForm.call(null,spots.forms.order_info.validator);
});
