// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('camel_snake_kebab.internals.string_separator');
goog.require('cljs.core');

/**
 * @interface
 */
camel_snake_kebab.internals.string_separator.StringSeparator = function(){};

/**
 * : StringSeparator -> String -> NonEmptySeq[String]
 */
camel_snake_kebab.internals.string_separator.split = (function camel_snake_kebab$internals$string_separator$split(this$,s){
if((!((this$ == null))) && (!((this$.camel_snake_kebab$internals$string_separator$StringSeparator$split$arity$2 == null)))){
return this$.camel_snake_kebab$internals$string_separator$StringSeparator$split$arity$2(this$,s);
} else {
var x__9649__auto__ = (((this$ == null))?null:this$);
var m__9650__auto__ = (camel_snake_kebab.internals.string_separator.split[goog.typeOf(x__9649__auto__)]);
if(!((m__9650__auto__ == null))){
return m__9650__auto__.call(null,this$,s);
} else {
var m__9650__auto____$1 = (camel_snake_kebab.internals.string_separator.split["_"]);
if(!((m__9650__auto____$1 == null))){
return m__9650__auto____$1.call(null,this$,s);
} else {
throw cljs.core.missing_protocol.call(null,"StringSeparator.split",this$);
}
}
}
});

RegExp.prototype.camel_snake_kebab$internals$string_separator$StringSeparator$ = cljs.core.PROTOCOL_SENTINEL;

RegExp.prototype.camel_snake_kebab$internals$string_separator$StringSeparator$split$arity$2 = (function (this$,s){
var this$__$1 = this;
return cljs.core.seq.call(null,s.split(this$__$1));
});

goog.object.set(camel_snake_kebab.internals.string_separator.StringSeparator,"string",true);

goog.object.set(camel_snake_kebab.internals.string_separator.split,"string",(function (this$,s){
return cljs.core.seq.call(null,s.split(this$));
}));
camel_snake_kebab.internals.string_separator.classify_char = (function camel_snake_kebab$internals$string_separator$classify_char(c){
var G__23548 = c;
switch (G__23548) {
case "0":
case "1":
case "2":
case "3":
case "4":
case "5":
case "6":
case "7":
case "8":
case "9":
return new cljs.core.Keyword(null,"number","number",1570378438);

break;
case "-":
case "_":
case " ":
case "\t":
case "\n":
case "\u000B":
case "\f":
case "\r":
return new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483);

break;
case "a":
case "b":
case "c":
case "d":
case "e":
case "f":
case "g":
case "h":
case "i":
case "j":
case "k":
case "l":
case "m":
case "n":
case "o":
case "p":
case "q":
case "r":
case "s":
case "t":
case "u":
case "v":
case "w":
case "x":
case "y":
case "z":
return new cljs.core.Keyword(null,"lower","lower",1120320821);

break;
case "A":
case "B":
case "C":
case "D":
case "E":
case "F":
case "G":
case "H":
case "I":
case "J":
case "K":
case "L":
case "M":
case "N":
case "O":
case "P":
case "Q":
case "R":
case "S":
case "T":
case "U":
case "V":
case "W":
case "X":
case "Y":
case "Z":
return new cljs.core.Keyword(null,"upper","upper",246243906);

break;
default:
return new cljs.core.Keyword(null,"other","other",995793544);

}
});
camel_snake_kebab.internals.string_separator.generic_split = (function camel_snake_kebab$internals$string_separator$generic_split(ss){
var cs = cljs.core.mapv.call(null,camel_snake_kebab.internals.string_separator.classify_char,ss);
var result = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var start = (0);
var current = (0);
while(true){
var next = (current + (1));
var result_PLUS_new = ((function (result,start,current,next,cs){
return (function (end){
if((end > start)){
return cljs.core.conj_BANG_.call(null,result,ss.substring(start,end));
} else {
return result;
}
});})(result,start,current,next,cs))
;
if((current >= cljs.core.count.call(null,ss))){
var or__8916__auto__ = cljs.core.seq.call(null,cljs.core.persistent_BANG_.call(null,result_PLUS_new.call(null,current)));
if(or__8916__auto__){
return or__8916__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null);
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.nth.call(null,cs,current),new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))){
var G__23553 = result_PLUS_new.call(null,current);
var G__23554 = next;
var G__23555 = next;
result = G__23553;
start = G__23554;
current = G__23555;
continue;
} else {
if((function (){var vec__23550 = cljs.core.subvec.call(null,cs,current);
var a = cljs.core.nth.call(null,vec__23550,(0),null);
var b = cljs.core.nth.call(null,vec__23550,(1),null);
var c = cljs.core.nth.call(null,vec__23550,(2),null);
return ((cljs.core.not_EQ_.call(null,a,new cljs.core.Keyword(null,"upper","upper",246243906))) && (cljs.core._EQ_.call(null,b,new cljs.core.Keyword(null,"upper","upper",246243906)))) || ((cljs.core.not_EQ_.call(null,a,new cljs.core.Keyword(null,"number","number",1570378438))) && (cljs.core._EQ_.call(null,b,new cljs.core.Keyword(null,"number","number",1570378438)))) || ((cljs.core._EQ_.call(null,a,new cljs.core.Keyword(null,"upper","upper",246243906))) && (cljs.core._EQ_.call(null,b,new cljs.core.Keyword(null,"upper","upper",246243906))) && (cljs.core._EQ_.call(null,c,new cljs.core.Keyword(null,"lower","lower",1120320821))));
})()){
var G__23556 = result_PLUS_new.call(null,next);
var G__23557 = next;
var G__23558 = next;
result = G__23556;
start = G__23557;
current = G__23558;
continue;
} else {
var G__23559 = result;
var G__23560 = start;
var G__23561 = next;
result = G__23559;
start = G__23560;
current = G__23561;
continue;

}
}
}
break;
}
});
camel_snake_kebab.internals.string_separator.generic_separator = (function (){
if(typeof camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator23562 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {camel_snake_kebab.internals.string_separator.StringSeparator}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator23562 = (function (meta23563){
this.meta23563 = meta23563;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator23562.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23564,meta23563__$1){
var self__ = this;
var _23564__$1 = this;
return (new camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator23562(meta23563__$1));
});

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator23562.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23564){
var self__ = this;
var _23564__$1 = this;
return self__.meta23563;
});

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator23562.prototype.camel_snake_kebab$internals$string_separator$StringSeparator$ = cljs.core.PROTOCOL_SENTINEL;

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator23562.prototype.camel_snake_kebab$internals$string_separator$StringSeparator$split$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return camel_snake_kebab.internals.string_separator.generic_split.call(null,s);
});

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator23562.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta23563","meta23563",1708935040,null)], null);
});

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator23562.cljs$lang$type = true;

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator23562.cljs$lang$ctorStr = "camel-snake-kebab.internals.string-separator/t_camel_snake_kebab$internals$string_separator23562";

camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator23562.cljs$lang$ctorPrWriter = (function (this__9587__auto__,writer__9588__auto__,opt__9589__auto__){
return cljs.core._write.call(null,writer__9588__auto__,"camel-snake-kebab.internals.string-separator/t_camel_snake_kebab$internals$string_separator23562");
});

camel_snake_kebab.internals.string_separator.__GT_t_camel_snake_kebab$internals$string_separator23562 = (function camel_snake_kebab$internals$string_separator$__GT_t_camel_snake_kebab$internals$string_separator23562(meta23563){
return (new camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator23562(meta23563));
});

}

return (new camel_snake_kebab.internals.string_separator.t_camel_snake_kebab$internals$string_separator23562(cljs.core.PersistentArrayMap.EMPTY));
})()
;
