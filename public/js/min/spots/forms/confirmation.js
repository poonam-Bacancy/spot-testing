// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('spots.forms.confirmation');
goog.require('cljs.core');
goog.require('keechma.toolbox.forms.core');
goog.require('keechma.toolbox.forms.controller');
goog.require('spots.forms.validators');
goog.require('forms.validator');
goog.require('keechma.toolbox.pipeline.core');
goog.require('promesa.core');
goog.require('spots.domain.stripe');
goog.require('spots.gql');
goog.require('spots.util.gql_api');
goog.require('spots.domain.cupcake_design');
goog.require('oops.core');
spots.forms.confirmation.validator = forms.validator.validator.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shareableImages","shareableImages",1104334690),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"not-empty","not-empty",388922063),spots.forms.validators.not_empty_QMARK_], null)], null)], null));
spots.forms.confirmation.init_data = (function spots$forms$confirmation$init_data(original_data){
return original_data;
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
spots.forms.confirmation.ConfirmationForm = (function (validator,__meta,__extmap,__hash){
this.validator = validator;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
spots.forms.confirmation.ConfirmationForm.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__9604__auto__,k__9605__auto__){
var self__ = this;
var this__9604__auto____$1 = this;
return this__9604__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__9605__auto__,null);
});

spots.forms.confirmation.ConfirmationForm.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__9606__auto__,k27801,else__9607__auto__){
var self__ = this;
var this__9606__auto____$1 = this;
var G__27805 = k27801;
var G__27805__$1 = (((G__27805 instanceof cljs.core.Keyword))?G__27805.fqn:null);
switch (G__27805__$1) {
case "validator":
return self__.validator;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k27801,else__9607__auto__);

}
});

spots.forms.confirmation.ConfirmationForm.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__9618__auto__,writer__9619__auto__,opts__9620__auto__){
var self__ = this;
var this__9618__auto____$1 = this;
var pr_pair__9621__auto__ = ((function (this__9618__auto____$1){
return (function (keyval__9622__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,cljs.core.pr_writer,""," ","",opts__9620__auto__,keyval__9622__auto__);
});})(this__9618__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__9619__auto__,pr_pair__9621__auto__,"#spots.forms.confirmation.ConfirmationForm{",", ","}",opts__9620__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"validator","validator",-1966190681),self__.validator],null))], null),self__.__extmap));
});

spots.forms.confirmation.ConfirmationForm.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__27800){
var self__ = this;
var G__27800__$1 = this;
return (new cljs.core.RecordIter((0),G__27800__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"validator","validator",-1966190681)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

spots.forms.confirmation.ConfirmationForm.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__9602__auto__){
var self__ = this;
var this__9602__auto____$1 = this;
return self__.__meta;
});

spots.forms.confirmation.ConfirmationForm.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__9599__auto__){
var self__ = this;
var this__9599__auto____$1 = this;
return (new spots.forms.confirmation.ConfirmationForm(self__.validator,self__.__meta,self__.__extmap,self__.__hash));
});

spots.forms.confirmation.ConfirmationForm.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__9608__auto__){
var self__ = this;
var this__9608__auto____$1 = this;
return (1 + cljs.core.count.call(null,self__.__extmap));
});

spots.forms.confirmation.ConfirmationForm.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__9600__auto__){
var self__ = this;
var this__9600__auto____$1 = this;
var h__9372__auto__ = self__.__hash;
if(!((h__9372__auto__ == null))){
return h__9372__auto__;
} else {
var h__9372__auto____$1 = ((function (h__9372__auto__,this__9600__auto____$1){
return (function (coll__9601__auto__){
return (-1628415615 ^ cljs.core.hash_unordered_coll.call(null,coll__9601__auto__));
});})(h__9372__auto__,this__9600__auto____$1))
.call(null,this__9600__auto____$1);
self__.__hash = h__9372__auto____$1;

return h__9372__auto____$1;
}
});

spots.forms.confirmation.ConfirmationForm.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this27802,other27803){
var self__ = this;
var this27802__$1 = this;
return (!((other27803 == null))) && ((this27802__$1.constructor === other27803.constructor)) && (cljs.core._EQ_.call(null,this27802__$1.validator,other27803.validator)) && (cljs.core._EQ_.call(null,this27802__$1.__extmap,other27803.__extmap));
});

spots.forms.confirmation.ConfirmationForm.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__9613__auto__,k__9614__auto__){
var self__ = this;
var this__9613__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"validator","validator",-1966190681),null], null), null),k__9614__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__9613__auto____$1),self__.__meta),k__9614__auto__);
} else {
return (new spots.forms.confirmation.ConfirmationForm(self__.validator,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__9614__auto__)),null));
}
});

spots.forms.confirmation.ConfirmationForm.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__9611__auto__,k__9612__auto__,G__27800){
var self__ = this;
var this__9611__auto____$1 = this;
var pred__27806 = cljs.core.keyword_identical_QMARK_;
var expr__27807 = k__9612__auto__;
if(cljs.core.truth_(pred__27806.call(null,new cljs.core.Keyword(null,"validator","validator",-1966190681),expr__27807))){
return (new spots.forms.confirmation.ConfirmationForm(G__27800,self__.__meta,self__.__extmap,null));
} else {
return (new spots.forms.confirmation.ConfirmationForm(self__.validator,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__9612__auto__,G__27800),null));
}
});

spots.forms.confirmation.ConfirmationForm.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__9616__auto__){
var self__ = this;
var this__9616__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"validator","validator",-1966190681),self__.validator],null))], null),self__.__extmap));
});

spots.forms.confirmation.ConfirmationForm.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__9603__auto__,G__27800){
var self__ = this;
var this__9603__auto____$1 = this;
return (new spots.forms.confirmation.ConfirmationForm(self__.validator,G__27800,self__.__extmap,self__.__hash));
});

spots.forms.confirmation.ConfirmationForm.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__9609__auto__,entry__9610__auto__){
var self__ = this;
var this__9609__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__9610__auto__)){
return this__9609__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__9610__auto__,(0)),cljs.core._nth.call(null,entry__9610__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__9609__auto____$1,entry__9610__auto__);
}
});

spots.forms.confirmation.ConfirmationForm.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"validator","validator",-325659154,null)], null);
});

spots.forms.confirmation.ConfirmationForm.cljs$lang$type = true;

spots.forms.confirmation.ConfirmationForm.cljs$lang$ctorPrSeq = (function (this__9642__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"spots.forms.confirmation/ConfirmationForm");
});

spots.forms.confirmation.ConfirmationForm.cljs$lang$ctorPrWriter = (function (this__9642__auto__,writer__9643__auto__){
return cljs.core._write.call(null,writer__9643__auto__,"spots.forms.confirmation/ConfirmationForm");
});

spots.forms.confirmation.__GT_ConfirmationForm = (function spots$forms$confirmation$__GT_ConfirmationForm(validator){
return (new spots.forms.confirmation.ConfirmationForm(validator,null,null,null));
});

spots.forms.confirmation.map__GT_ConfirmationForm = (function spots$forms$confirmation$map__GT_ConfirmationForm(G__27804){
return (new spots.forms.confirmation.ConfirmationForm(new cljs.core.Keyword(null,"validator","validator",-1966190681).cljs$core$IFn$_invoke$arity$1(G__27804),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__27804,new cljs.core.Keyword(null,"validator","validator",-1966190681))),null));
});

cljs.core._add_method.call(null,keechma.toolbox.forms.core.get_data,spots.forms.confirmation.ConfirmationForm,(function (this$,app_db,form_props){
spots.forms.confirmation.init_data.call(null,cljs.core.identity.call(null,cljs.core.get_in.call(null,app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword(null,"order-form","order-form",-1222210477)], null))));

return cljs.core.get_in.call(null,app_db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword(null,"order-form","order-form",-1222210477)], null));
}));
cljs.core._add_method.call(null,keechma.toolbox.forms.core.submit_data,spots.forms.confirmation.ConfirmationForm,(function (_,app_db,___$1,data){
var form_data = data;
return keechma.toolbox.pipeline.core.make_pipeline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (form_data){
return (function (value,app_db__$1,___$2){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(wrap-validation\n (gql-req\n  validate-order-overview-m\n  (wrap-request (strip-local-data data))))",new cljs.core.Keyword(null,"val","val",128701612),spots.util.gql_api.wrap_validation.call(null,spots.util.gql_api.gql_req.call(null,spots.gql.validate_order_overview_m,spots.util.gql_api.wrap_request.call(null,spots.domain.cupcake_design.strip_local_data.call(null,data))))], null);
});})(form_data))
,((function (form_data){
return (function (value,app_db__$1,___$2){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(gql-req\n calculate-order-prices-m\n (wrap-request (strip-local-data data)))",new cljs.core.Keyword(null,"val","val",128701612),spots.util.gql_api.gql_req.call(null,spots.gql.calculate_order_prices_m,spots.util.gql_api.wrap_request.call(null,spots.domain.cupcake_design.strip_local_data.call(null,data)))], null);
});})(form_data))
], null)], null));
}));
cljs.core._add_method.call(null,keechma.toolbox.forms.core.on_submit_error,spots.forms.confirmation.ConfirmationForm,(function (this$,app_db,form_props,data,error){
return null;
}));
cljs.core._add_method.call(null,keechma.toolbox.forms.core.on_submit_success,spots.forms.confirmation.ConfirmationForm,(function (this$,app_db,form_props,data){
var res = data;
var form_data = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(keechma.toolbox.forms.controller.get_form_state.call(null,app_db,form_props));
return keechma.toolbox.pipeline.core.make_pipeline.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"begin","begin",-319034319),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (res,form_data){
return (function (value,app_db__$1,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/commit!\n (assoc-in app-db [:kv :order-pricing] (:calculateOrderPrice res)))",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.commit_BANG_.call(null,cljs.core.assoc_in.call(null,app_db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword(null,"order-pricing","order-pricing",1246212489)], null),new cljs.core.Keyword(null,"calculateOrderPrice","calculateOrderPrice",1991742553).cljs$core$IFn$_invoke$arity$1(res)))], null);
});})(res,form_data))
,((function (res,form_data){
return (function (value,app_db__$1,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/commit! (assoc-in app-db [:kv :order-form] form-data))",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.commit_BANG_.call(null,cljs.core.assoc_in.call(null,app_db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kv","kv",-1099920440),new cljs.core.Keyword(null,"order-form","order-form",-1222210477)], null),form_data))], null);
});})(res,form_data))
,((function (res,form_data){
return (function (value,app_db__$1,_){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repr","repr",669525472),"(pp/send-command! [forms-core/id-key :mount-form] [:payment :form])",new cljs.core.Keyword(null,"val","val",128701612),keechma.toolbox.pipeline.core.send_command_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keechma.toolbox.forms.core.id_key,new cljs.core.Keyword(null,"mount-form","mount-form",-123555853)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"payment","payment",-1682035288),new cljs.core.Keyword(null,"form","form",-1624062471)], null))], null);
});})(res,form_data))
], null)], null));
}));
spots.forms.confirmation.constructor$ = (function spots$forms$confirmation$constructor(){
return spots.forms.confirmation.__GT_ConfirmationForm.call(null,spots.forms.confirmation.validator);
});
