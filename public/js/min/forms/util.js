// Compiled by ClojureScript 1.9.946 {:elide-asserts true}
goog.provide('forms.util');
goog.require('cljs.core');
goog.require('clojure.string');
forms.util.keyword_or_integer = (function forms$util$keyword_or_integer(key){
if((key instanceof cljs.core.Keyword)){
return key;
} else {
if(typeof key === 'number'){
return key;
} else {
if(cljs.core.truth_(cljs.core.re_matches.call(null,/[0-9]+/,key))){
return parseInt(key,(10));
} else {
return cljs.core.keyword.call(null,key);

}
}
}
});
forms.util.key_to_path = (function forms$util$key_to_path(key){
var path = ((cljs.core.vector_QMARK_.call(null,key))?key:clojure.string.split.call(null,cljs.core.name.call(null,key),"."));
return cljs.core.vec.call(null,cljs.core.map.call(null,forms.util.keyword_or_integer,path));
});
/**
 * Dissociates an entry from a nested associative structure returning a new
 *   nested structure. keys is a sequence of keys. Any empty maps that result
 *   will not be present in the new structure.
 */
forms.util.dissoc_in = (function forms$util$dissoc_in(m,p__19854){
var vec__19855 = p__19854;
var seq__19856 = cljs.core.seq.call(null,vec__19855);
var first__19857 = cljs.core.first.call(null,seq__19856);
var seq__19856__$1 = cljs.core.next.call(null,seq__19856);
var k = first__19857;
var ks = seq__19856__$1;
var keys = vec__19855;
if(ks){
var temp__5455__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(temp__5455__auto__)){
var nextmap = temp__5455__auto__;
var newmap = forms.util.dissoc_in.call(null,nextmap,ks);
if(cljs.core.seq.call(null,newmap)){
return cljs.core.assoc.call(null,m,k,newmap);
} else {
return cljs.core.dissoc.call(null,m,k);
}
} else {
return m;
}
} else {
return cljs.core.dissoc.call(null,m,k);
}
});
