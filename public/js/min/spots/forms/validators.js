// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('spots.forms.validators');
goog.require('cljs.core');
goog.require('clojure.string');
spots.forms.validators.email_regex = /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/;
spots.forms.validators.phone_regex = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
spots.forms.validators.url_regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/;
spots.forms.validators.states = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 59, ["MP",null,"WI",null,"SC",null,"MN",null,"NV",null,"NM",null,"NE",null,"AK",null,"NH",null,"ME",null,"NY",null,"TN",null,"FL",null,"IA",null,"GA",null,"IL",null,"RI",null,"GU",null,"VA",null,"PR",null,"MI",null,"PA",null,"UT",null,"WY",null,"SD",null,"MO",null,"KY",null,"CT",null,"AR",null,"ID",null,"DC",null,"FM",null,"MA",null,"OK",null,"AL",null,"VT",null,"MS",null,"CA",null,"LA",null,"DE",null,"WA",null,"AS",null,"KS",null,"MD",null,"ND",null,"MH",null,"TX",null,"VI",null,"OR",null,"NC",null,"AZ",null,"IN",null,"WV",null,"CO",null,"HI",null,"MT",null,"NJ",null,"PW",null,"OH",null], null), null);
spots.forms.validators.zero_count_QMARK_ = (function spots$forms$validators$zero_count_QMARK_(v){
if(((!((v == null)))?((((v.cljs$lang$protocol_mask$partition0$ & (2))) || ((cljs.core.PROTOCOL_SENTINEL === v.cljs$core$ICounted$)))?true:(((!v.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICounted,v):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ICounted,v))){
return (cljs.core.count.call(null,v) === (0));
} else {
return false;
}
});
spots.forms.validators.not_empty_QMARK_ = (function spots$forms$validators$not_empty_QMARK_(v,_,___$1){
if((v == null)){
return false;
} else {
if(cljs.core._EQ_.call(null,"",v)){
return false;
} else {
if(cljs.core.truth_(spots.forms.validators.zero_count_QMARK_.call(null,v))){
return false;
} else {
return true;

}
}
}
});
spots.forms.validators.url_QMARK_ = (function spots$forms$validators$url_QMARK_(v,_,___$1){
return !((cljs.core.re_matches.call(null,spots.forms.validators.url_regex,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')) == null));
});
spots.forms.validators.email_QMARK_ = (function spots$forms$validators$email_QMARK_(v,_,___$1){
return !((cljs.core.re_matches.call(null,spots.forms.validators.email_regex,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')) == null));
});
spots.forms.validators.phone_QMARK_ = (function spots$forms$validators$phone_QMARK_(v,_,___$1){
return !((cljs.core.re_matches.call(null,spots.forms.validators.phone_regex,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')) == null));
});
spots.forms.validators.number0_GT_100_QMARK_ = (function spots$forms$validators$number0_GT_100_QMARK_(v,_,___$1){
if(cljs.core.not.call(null,spots.forms.validators.not_empty_QMARK_.call(null,v,null,null))){
return true;
} else {
var n = parseFloat(v,(10));
return (((0) < n)) && (((100) >= n));
}
});
spots.forms.validators.bool_QMARK_ = (function spots$forms$validators$bool_QMARK_(v,_,___$1){
if((v == null)){
return true;
} else {
return (cljs.core._EQ_.call(null,true,v)) || (cljs.core._EQ_.call(null,false,v));
}
});
spots.forms.validators.numeric_QMARK_ = (function spots$forms$validators$numeric_QMARK_(v,_,___$1){
if((v == null)){
return true;
} else {
return cljs.core.re_matches.call(null,/^\d+$/,v);
}
});
spots.forms.validators.ok_password_QMARK_ = (function spots$forms$validators$ok_password_QMARK_(v,_,___$1){
if(cljs.core.seq.call(null,v)){
return ((7) < cljs.core.count.call(null,v));
} else {
return true;
}
});
spots.forms.validators.valid_state_QMARK_ = (function spots$forms$validators$valid_state_QMARK_(v,_,___$1){
if(cljs.core.seq.call(null,v)){
return cljs.core.contains_QMARK_.call(null,spots.forms.validators.states,clojure.string.upper_case.call(null,v));
} else {
return true;
}
});
spots.forms.validators.valid_cvv_QMARK_ = (function spots$forms$validators$valid_cvv_QMARK_(v,_,___$1){
if(cljs.core.seq.call(null,v)){
return (cljs.core._EQ_.call(null,(3),cljs.core.count.call(null,v))) || (cljs.core._EQ_.call(null,(4),cljs.core.count.call(null,v)));
} else {
return true;
}
});
spots.forms.validators.valid_zipcode_QMARK_ = (function spots$forms$validators$valid_zipcode_QMARK_(v,_,___$1){
if(cljs.core.seq.call(null,v)){
return !((cljs.core.re_matches.call(null,/(^\d{5}$)|(^\d{5}-\d{4}$)/,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')) == null));
} else {
return true;
}
});
spots.forms.validators.password_confirmation = (function spots$forms$validators$password_confirmation(_,data,___$1){
var pass = new cljs.core.Keyword(null,"password","password",417022471).cljs$core$IFn$_invoke$arity$1(data);
var pass_confirmation = new cljs.core.Keyword(null,"password2","password2",557827521).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pass,pass_confirmation], null)))){
return true;
} else {
return cljs.core._EQ_.call(null,pass,pass_confirmation);
}
});
spots.forms.validators.number_GT__EQ_6_QMARK_ = (function spots$forms$validators$number_GT__EQ_6_QMARK_(v,_,___$1){
if(cljs.core.not.call(null,spots.forms.validators.not_empty_QMARK_.call(null,v,null,null))){
return true;
} else {
var n = parseFloat(v,(10));
return (n >= (6));
}
});
spots.forms.validators.number_GT_0_QMARK_ = (function spots$forms$validators$number_GT_0_QMARK_(v,_,___$1){
if(cljs.core.not.call(null,spots.forms.validators.not_empty_QMARK_.call(null,v,null,null))){
return true;
} else {
return ((0) < parseFloat(v));
}
});
spots.forms.validators.types = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"wrong-access-token","wrong-access-token",444582977),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"email-confirmation","email-confirmation",1841807683),new cljs.core.Keyword(null,"numeric","numeric",-1495594714),new cljs.core.Keyword(null,"ok-password","ok-password",-330757625),new cljs.core.Keyword(null,"phone","phone",-763596057),new cljs.core.Keyword(null,"valid-zipcode","valid-zipcode",-58894485),new cljs.core.Keyword(null,"password-confirmation","password-confirmation",-2100826802),new cljs.core.Keyword(null,">=6",">=6",-31388082),new cljs.core.Keyword(null,"not-empty","not-empty",388922063),new cljs.core.Keyword(null,"0>100","0>100",-826337392),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"0>","0>",415503448),new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.Keyword(null,"valid-state","valid-state",-1276404774)],[new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Wrong access-token",new cljs.core.Keyword(null,"validator","validator",-1966190681),(function (_,___$1,___$2){
return true;
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Value is not a valid email",new cljs.core.Keyword(null,"validator","validator",-1966190681),spots.forms.validators.email_QMARK_], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Email doesn't match email confirmation",new cljs.core.Keyword(null,"validator","validator",-1966190681),(function (_,data,___$1){
var email = new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(data);
var email_confirmation = new cljs.core.Keyword(null,"email-confirmation","email-confirmation",1841807683).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.nil_QMARK_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [email,email_confirmation], null)))){
return true;
} else {
return cljs.core._EQ_.call(null,email,email_confirmation);
}
})], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Value is not a number",new cljs.core.Keyword(null,"validator","validator",-1966190681),spots.forms.validators.numeric_QMARK_], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Password must have at least 8 characters",new cljs.core.Keyword(null,"validator","validator",-1966190681),spots.forms.validators.ok_password_QMARK_], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Value is not a valid phone",new cljs.core.Keyword(null,"validator","validator",-1966190681),spots.forms.validators.phone_QMARK_], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Not a valid Zipcode",new cljs.core.Keyword(null,"validator","validator",-1966190681),spots.forms.validators.valid_zipcode_QMARK_], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Passwords don't match",new cljs.core.Keyword(null,"validator","validator",-1966190681),spots.forms.validators.password_confirmation], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Must be greater or equal to 6",new cljs.core.Keyword(null,"validator","validator",-1966190681),spots.forms.validators.number_GT__EQ_6_QMARK_], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Field can't be empty",new cljs.core.Keyword(null,"validator","validator",-1966190681),spots.forms.validators.not_empty_QMARK_], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Must be between 0 and 100",new cljs.core.Keyword(null,"validator","validator",-1966190681),spots.forms.validators.number0_GT_100_QMARK_], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Value is not a valid URL",new cljs.core.Keyword(null,"validator","validator",-1966190681),spots.forms.validators.url_QMARK_], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Must be bigger than zero",new cljs.core.Keyword(null,"validator","validator",-1966190681),spots.forms.validators.number_GT_0_QMARK_], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Value must be true or false",new cljs.core.Keyword(null,"validator","validator",-1966190681),spots.forms.validators.bool_QMARK_], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),"Not a valid US state",new cljs.core.Keyword(null,"validator","validator",-1966190681),spots.forms.validators.valid_state_QMARK_], null)]);
spots.forms.validators.get_validator_message = (function spots$forms$validators$get_validator_message(type){
var or__8916__auto__ = cljs.core.get_in.call(null,spots.forms.validators.types,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.Keyword(null,"message","message",-406056002)], null));
if(cljs.core.truth_(or__8916__auto__)){
return or__8916__auto__;
} else {
return "Value failed validation.";
}
});
/**
 * Helper function that extracts the validator definitions.
 */
spots.forms.validators.to_validator = (function spots$forms$validators$to_validator(validations,config){
return cljs.core.reduce_kv.call(null,(function (m,attr,v){
return cljs.core.assoc.call(null,m,attr,cljs.core.map.call(null,(function (k){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get_in.call(null,validations,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"validator","validator",-1966190681)], null))], null);
}),v));
}),cljs.core.PersistentArrayMap.EMPTY,config);
});
