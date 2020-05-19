"use strict";
var main;(function(){
var $rt_seed=2463534242;function $rt_nextId(){var x=$rt_seed;x^=x<<13;x^=x>>17;x^=x<<5;$rt_seed=x;return x;}function $rt_compare(a,b){return a>b?1:a<b? -1:a===b?0:1;}function $rt_isInstance(obj,cls){return obj!==null&&!!obj.constructor.$meta&&$rt_isAssignable(obj.constructor,cls);}function $rt_isAssignable(from,to){if(from===to){return true;}if(to.$meta.item!==null){return from.$meta.item!==null&&$rt_isAssignable(from.$meta.item,to.$meta.item);}var supertypes=from.$meta.supertypes;for(var i=0;i<supertypes.length;i
=i+1|0){if($rt_isAssignable(supertypes[i],to)){return true;}}return false;}function $rt_createArray(cls,sz){var data=new Array(sz);var arr=new $rt_array(cls,data);if(sz>0){var i=0;do {data[i]=null;i=i+1|0;}while(i<sz);}return arr;}function $rt_wrapArray(cls,data){return new $rt_array(cls,data);}function $rt_createUnfilledArray(cls,sz){return new $rt_array(cls,new Array(sz));}function $rt_createLongArray(sz){var data=new Array(sz);var arr=new $rt_array($rt_longcls(),data);for(var i=0;i<sz;i=i+1|0){data[i]=Long_ZERO;}return arr;}function $rt_createNumericArray(cls,
nativeArray){return new $rt_array(cls,nativeArray);}function $rt_createCharArray(sz){return $rt_createNumericArray($rt_charcls(),new Uint16Array(sz));}function $rt_createByteArray(sz){return $rt_createNumericArray($rt_bytecls(),new Int8Array(sz));}function $rt_createShortArray(sz){return $rt_createNumericArray($rt_shortcls(),new Int16Array(sz));}function $rt_createIntArray(sz){return $rt_createNumericArray($rt_intcls(),new Int32Array(sz));}function $rt_createBooleanArray(sz){return $rt_createNumericArray($rt_booleancls(),
new Int8Array(sz));}function $rt_createFloatArray(sz){return $rt_createNumericArray($rt_floatcls(),new Float32Array(sz));}function $rt_createDoubleArray(sz){return $rt_createNumericArray($rt_doublecls(),new Float64Array(sz));}function $rt_arraycls(cls){var result=cls.$array;if(result===null){var arraycls={};var name="["+cls.$meta.binaryName;arraycls.$meta={item:cls,supertypes:[$rt_objcls()],primitive:false,superclass:$rt_objcls(),name:name,binaryName:name,enum:false};arraycls.classObject=null;arraycls.$array
=null;result=arraycls;cls.$array=arraycls;}return result;}function $rt_createcls(){return {$array:null,classObject:null,$meta:{supertypes:[],superclass:null}};}function $rt_createPrimitiveCls(name,binaryName){var cls=$rt_createcls();cls.$meta.primitive=true;cls.$meta.name=name;cls.$meta.binaryName=binaryName;cls.$meta.enum=false;cls.$meta.item=null;return cls;}var $rt_booleanclsCache=null;function $rt_booleancls(){if($rt_booleanclsCache===null){$rt_booleanclsCache=$rt_createPrimitiveCls("boolean","Z");}return $rt_booleanclsCache;}var $rt_charclsCache
=null;function $rt_charcls(){if($rt_charclsCache===null){$rt_charclsCache=$rt_createPrimitiveCls("char","C");}return $rt_charclsCache;}var $rt_byteclsCache=null;function $rt_bytecls(){if($rt_byteclsCache===null){$rt_byteclsCache=$rt_createPrimitiveCls("byte","B");}return $rt_byteclsCache;}var $rt_shortclsCache=null;function $rt_shortcls(){if($rt_shortclsCache===null){$rt_shortclsCache=$rt_createPrimitiveCls("short","S");}return $rt_shortclsCache;}var $rt_intclsCache=null;function $rt_intcls(){if($rt_intclsCache
===null){$rt_intclsCache=$rt_createPrimitiveCls("int","I");}return $rt_intclsCache;}var $rt_longclsCache=null;function $rt_longcls(){if($rt_longclsCache===null){$rt_longclsCache=$rt_createPrimitiveCls("long","J");}return $rt_longclsCache;}var $rt_floatclsCache=null;function $rt_floatcls(){if($rt_floatclsCache===null){$rt_floatclsCache=$rt_createPrimitiveCls("float","F");}return $rt_floatclsCache;}var $rt_doubleclsCache=null;function $rt_doublecls(){if($rt_doubleclsCache===null){$rt_doubleclsCache=$rt_createPrimitiveCls("double",
"D");}return $rt_doubleclsCache;}var $rt_voidclsCache=null;function $rt_voidcls(){if($rt_voidclsCache===null){$rt_voidclsCache=$rt_createPrimitiveCls("void","V");}return $rt_voidclsCache;}function $rt_throw(ex){throw $rt_exception(ex);}function $rt_exception(ex){var err=ex.$jsException;if(!err){err=new Error("Java exception thrown");if(typeof Error.captureStackTrace==="function"){Error.captureStackTrace(err);}err.$javaException=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return err;}function $rt_fillStack(err,
ex){if(typeof $rt_decodeStack==="function"&&err.stack){var stack=$rt_decodeStack(err.stack);var javaStack=$rt_createArray($rt_objcls(),stack.length);var elem;var noStack=false;for(var i=0;i<stack.length;++i){var element=stack[i];elem=$rt_createStackElement($rt_str(element.className),$rt_str(element.methodName),$rt_str(element.fileName),element.lineNumber);if(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){$rt_setStack(ex,javaStack);}}}function $rt_createMultiArray(cls,dimensions){var first
=0;for(var i=dimensions.length -1;i>=0;i=i -1|0){if(dimensions[i]===0){first=i;break;}}if(first>0){for(i=0;i<first;i=i+1|0){cls=$rt_arraycls(cls);}if(first===dimensions.length -1){return $rt_createArray(cls,dimensions[first]);}}var arrays=new Array($rt_primitiveArrayCount(dimensions,first));var firstDim=dimensions[first]|0;for(i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createArray(cls,firstDim);}return $rt_createMultiArrayImpl(cls,arrays,dimensions,first);}function $rt_createByteMultiArray(dimensions){var arrays
=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_bytecls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createByteArray(firstDim);}return $rt_createMultiArrayImpl($rt_bytecls(),arrays,dimensions);}function $rt_createCharMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_charcls(),dimensions);}var firstDim=dimensions[0]|0;for
(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createCharArray(firstDim);}return $rt_createMultiArrayImpl($rt_charcls(),arrays,dimensions,0);}function $rt_createBooleanMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_booleancls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createBooleanArray(firstDim);}return $rt_createMultiArrayImpl($rt_booleancls(),arrays,dimensions,0);}function $rt_createShortMultiArray(dimensions)
{var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_shortcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createShortArray(firstDim);}return $rt_createMultiArrayImpl($rt_shortcls(),arrays,dimensions,0);}function $rt_createIntMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_intcls(),dimensions);}var firstDim=dimensions[0]
|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createIntArray(firstDim);}return $rt_createMultiArrayImpl($rt_intcls(),arrays,dimensions,0);}function $rt_createLongMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_longcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createLongArray(firstDim);}return $rt_createMultiArrayImpl($rt_longcls(),arrays,dimensions,0);}function $rt_createFloatMultiArray(dimensions)
{var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_floatcls(),dimensions);}var firstDim=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createFloatArray(firstDim);}return $rt_createMultiArrayImpl($rt_floatcls(),arrays,dimensions,0);}function $rt_createDoubleMultiArray(dimensions){var arrays=new Array($rt_primitiveArrayCount(dimensions,0));if(arrays.length===0){return $rt_createMultiArray($rt_doublecls(),dimensions);}var firstDim
=dimensions[0]|0;for(var i=0;i<arrays.length;i=i+1|0){arrays[i]=$rt_createDoubleArray(firstDim);}return $rt_createMultiArrayImpl($rt_doublecls(),arrays,dimensions,0);}function $rt_primitiveArrayCount(dimensions,start){var val=dimensions[start+1]|0;for(var i=start+2;i<dimensions.length;i=i+1|0){val=val*(dimensions[i]|0)|0;if(val===0){break;}}return val;}function $rt_createMultiArrayImpl(cls,arrays,dimensions,start){var limit=arrays.length;for(var i=start+1|0;i<dimensions.length;i=i+1|0){cls=$rt_arraycls(cls);var dim
=dimensions[i];var index=0;var packedIndex=0;while(index<limit){var arr=$rt_createUnfilledArray(cls,dim);for(var j=0;j<dim;j=j+1|0){arr.data[j]=arrays[index];index=index+1|0;}arrays[packedIndex]=arr;packedIndex=packedIndex+1|0;}limit=packedIndex;}return arrays[0];}function $rt_assertNotNaN(value){if(typeof value==='number'&&isNaN(value)){throw "NaN";}return value;}var $rt_stdoutBuffer="";var $rt_putStdout=typeof $rt_putStdoutCustom==="function"?$rt_putStdoutCustom:function(ch){if(ch===0xA){if(console){console.info($rt_stdoutBuffer);}$rt_stdoutBuffer
="";}else {$rt_stdoutBuffer+=String.fromCharCode(ch);}};var $rt_stderrBuffer="";var $rt_putStderr=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:function(ch){if(ch===0xA){if(console){console.error($rt_stderrBuffer);}$rt_stderrBuffer="";}else {$rt_stderrBuffer+=String.fromCharCode(ch);}};var $rt_packageData=null;function $rt_packages(data){var i=0;var packages=new Array(data.length);for(var j=0;j<data.length;++j){var prefixIndex=data[i++];var prefix=prefixIndex>=0?packages[prefixIndex]:"";packages[j]
=prefix+data[i++]+".";}$rt_packageData=packages;}function $rt_metadata(data){var packages=$rt_packageData;var i=0;while(i<data.length){var cls=data[i++];cls.$meta={};var m=cls.$meta;var className=data[i++];m.name=className!==0?className:null;if(m.name!==null){var packageIndex=data[i++];if(packageIndex>=0){m.name=packages[packageIndex]+m.name;}}m.binaryName="L"+m.name+";";var superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if(m.superclass){m.supertypes.push(m.superclass);cls.prototype
=Object.create(m.superclass.prototype);}else {cls.prototype={};}var flags=data[i++];m.enum=(flags&8)!==0;m.flags=flags;m.primitive=false;m.item=null;cls.prototype.constructor=cls;cls.classObject=null;m.accessLevel=data[i++];var clinit=data[i++];cls.$clinit=clinit!==0?clinit:function(){};var virtualMethods=data[i++];if(virtualMethods!==0){for(var j=0;j<virtualMethods.length;j+=2){var name=virtualMethods[j];var func=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(var k=0;k<name.length;++k){cls.prototype[name[k]]
=func;}}}cls.$array=null;}}function $rt_threadStarter(f){return function(){var args=Array.prototype.slice.apply(arguments);$rt_startThread(function(){f.apply(this,args);});};}function $rt_mainStarter(f){return function(args,callback){if(!args){args=[];}var javaArgs=$rt_createArray($rt_objcls(),args.length);for(var i=0;i<args.length;++i){javaArgs.data[i]=$rt_str(args[i]);}$rt_startThread(function(){f.call(null,javaArgs);},callback);};}var $rt_stringPool_instance;function $rt_stringPool(strings){$rt_stringPool_instance
=new Array(strings.length);for(var i=0;i<strings.length;++i){$rt_stringPool_instance[i]=$rt_intern($rt_str(strings[i]));}}function $rt_s(index){return $rt_stringPool_instance[index];}function $rt_eraseClinit(target){return target.$clinit=function(){};}var $rt_numberConversionView=new DataView(new ArrayBuffer(8));function $rt_doubleToLongBits(n){$rt_numberConversionView.setFloat64(0,n,true);return new Long($rt_numberConversionView.getInt32(0,true),$rt_numberConversionView.getInt32(4,true));}function $rt_longBitsToDouble(n)
{$rt_numberConversionView.setInt32(0,n.lo,true);$rt_numberConversionView.setInt32(4,n.hi,true);return $rt_numberConversionView.getFloat64(0,true);}function $rt_floatToIntBits(n){$rt_numberConversionView.setFloat32(0,n);return $rt_numberConversionView.getInt32(0);}function $rt_intBitsToFloat(n){$rt_numberConversionView.setInt32(0,n);return $rt_numberConversionView.getFloat32(0);}function $rt_javaException(e){return e instanceof Error&&typeof e.$javaException==='object'?e.$javaException:null;}function $rt_jsException(e)
{return typeof e.$jsException==='object'?e.$jsException:null;}function $rt_wrapException(err){var ex=err.$javaException;if(!ex){ex=$rt_createException($rt_str("(JavaScript) "+err.toString()));err.$javaException=ex;ex.$jsException=err;$rt_fillStack(err,ex);}return ex;}function $dbg_class(obj){var cls=obj.constructor;var arrayDegree=0;while(cls.$meta&&cls.$meta.item){++arrayDegree;cls=cls.$meta.item;}var clsName="";if(cls===$rt_booleancls()){clsName="boolean";}else if(cls===$rt_bytecls()){clsName="byte";}else if
(cls===$rt_shortcls()){clsName="short";}else if(cls===$rt_charcls()){clsName="char";}else if(cls===$rt_intcls()){clsName="int";}else if(cls===$rt_longcls()){clsName="long";}else if(cls===$rt_floatcls()){clsName="float";}else if(cls===$rt_doublecls()){clsName="double";}else {clsName=cls.$meta?cls.$meta.name||"a/"+cls.name:"@"+cls.name;}while(arrayDegree-->0){clsName+="[]";}return clsName;}function Long(lo,hi){this.lo=lo|0;this.hi=hi|0;}Long.prototype.__teavm_class__=function(){return "long";};Long.prototype.toString
=function(){var result=[];var n=this;var positive=Long_isPositive(n);if(!positive){n=Long_neg(n);}var radix=new Long(10,0);do {var divRem=Long_divRem(n,radix);result.push(String.fromCharCode(48+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};Long.prototype.valueOf=function(){return Long_toNumber(this);};var Long_ZERO=new Long(0,0);var Long_MAX_NORMAL=1<<18;function Long_fromInt(val){return val>=0?new Long(val,0):new Long(val, -1);}function Long_fromNumber(val)
{if(val>=0){return new Long(val|0,val/0x100000000|0);}else {return Long_neg(new Long( -val|0, -val/0x100000000|0));}}function Long_toNumber(val){var lo=val.lo;var hi=val.hi;if(lo<0){lo+=0x100000000;}return 0x100000000*hi+lo;}var $rt_imul=Math.imul||function(a,b){var ah=a>>>16&0xFFFF;var al=a&0xFFFF;var bh=b>>>16&0xFFFF;var bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;};var $rt_udiv=function(a,b){if(a<0){a+=0x100000000;}if(b<0){b+=0x100000000;}return a/b|0;};var $rt_umod=function(a,b){if(a<0){a+=0x100000000;}if
(b<0){b+=0x100000000;}return a%b|0;};function $rt_setCloneMethod(target, f){target.kC=f;}
function $rt_cls(cls){return Is(cls);}
function $rt_str(str) {if (str === null) {return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return Lo(characters);}
function $rt_ustr(str) {if (str === null) {return null;}var data = str.o.data;var result = "";for (var i = 0; i < data.length; i = (i + 1) | 0) {result += String.fromCharCode(data[i]);}return result;}
function $rt_objcls() { return C; }
function $rt_nullCheck(val) {if (val === null) {$rt_throw(S2());}return val;}
function $rt_intern(str) {return str;}function $rt_getThread(){return null;}
function $rt_setThread(t){}
function $rt_createException(message){return S3(message);}
function $rt_createStackElement(className,methodName,fileName,lineNumber){return null;}
function $rt_setStack(e,stack){}
var A=Object.create(null);
var J=$rt_throw;var C9=$rt_compare;var S4=$rt_nullCheck;var D=$rt_cls;var E=$rt_createArray;var PE=$rt_isInstance;var S5=$rt_nativeThread;var S6=$rt_suspending;var S7=$rt_resuming;var S8=$rt_invalidPointer;var B=$rt_s;var BU=$rt_eraseClinit;var Df=$rt_imul;var Cv=$rt_wrapException;
function C(){this.$id$=0;}
function B_(a){return Is(a.constructor);}
function Nu(a){var b,c,d,e,f,g,h,i;b=new R;U(b);b=I(I(b,KO(B_(a))),B(0));c=H5(a);if(!c)d=B(1);else{e=(((32-Fn(c)|0)+4|0)-1|0)/4|0;f=$rt_createCharArray(e);g=f.data;e=(e-1|0)*4|0;h=0;while(e>=0){i=h+1|0;g[h]=EA(c>>>e&15,16);e=e-4|0;h=i;}d=Lo(f);}return P(I(b,d));}
function H5(a){var b,c;b=a;if(!b.$id$){c=$rt_nextId();b.$id$=c;}return a.$id$;}
function F3(){}
function D5(){C.call(this);}
function Kp(a,b){var c,d,$$je;c=K5(B_(a),a);b=Gw(b);d=new GB;c=KH(c);En(d,b);d.fh=c;Cc(b,c.bH);Bz(S9,d);S$=1;a:{try{HQ(d);break a;}catch($$e){$$je=Cv($$e);b=$$je;}S$=0;J(b);}S$=0;}
function IX(a,b){Kp(a,window.document.getElementById($rt_ustr(b)));}
function E2(){var a=this;D5.call(a);a.eB=null;a.cX=null;a.W=null;a.cQ=null;a.bA=0;a.V=0;a.bU=0;a.bJ=null;a.J=null;a.bq=null;a.cG=null;a.fR=null;}
function K1(a,b){a.bJ=b;}
function Bi(a,b){a.cG=b;}
function Iy(a,b){a.J=b;}
function J_(a,b){a.bq=b;}
function Mt(a){return a.bJ;}
function P1(a){return a.cG;}
function O2(a){return a.J;}
function M4(a){return a.bq;}
function KW(a){var b,c,d,e,f,g,h,i,j,k,l,m;a:{b=DU(a.bJ);c=(-1);switch(Iv(b)){case -1836143820:if(!Bf(b,B(2)))break a;c=7;break a;case -1591928671:if(!Bf(b,B(3)))break a;c=4;break a;case 2153886:if(!Bf(b,B(4)))break a;c=5;break a;case 2213697:if(!Bf(b,B(5)))break a;c=3;break a;case 2372561:if(!Bf(b,B(6)))break a;c=0;break a;case 2634405:if(!Bf(b,B(7)))break a;c=2;break a;case 63463764:if(!Bf(b,B(8)))break a;c=1;break a;case 76396841:if(!Bf(b,B(9)))break a;c=9;break a;case 963525892:if(!Bf(b,B(10)))break a;c
=8;break a;case 963538698:if(!Bf(b,B(11)))break a;c=10;break a;case 1808577511:if(!Bf(b,B(12)))break a;c=6;break a;default:}}b:{switch(c){case 0:Du(a.W,Gk(a.W,a.V,Bm(a.J)),Bm(a.bq));break b;case 1:d=Ck(a.W,a.V,Bm(a.J));b=Ck(a.W,a.V,Bm(a.bq));if(DM(d)==3&&DM(b)==3){e=H7(a.eB,d,b);Du(a.W,e,a.V);f=Eg(e);HH(a.cX,f);Bi(a,Bs(I(Bl(I(Bl(I(BZ(),B(13)),Bm(a.J)),B(14)),Bm(a.bq)),B(15))));break b;}Bi(a,B(16));break b;case 2:g=Bs(Bl(I(Bl(I(BZ(),B(17)),a.bA),B(18)),a.bU));d=Bs(I(Bl(I(I(BZ(),g),B(19)),a.V),B(20)));c=0;while
(c<KS(a.W,a.V)){d=Bs(Bl(I(I(I(Bl(I(BZ(),d),c),B(21)),Eg(Ck(a.W,a.V,c)).data[0]),B(22)),DM(Ck(a.W,a.V,c))));d=Bs(I(I(BZ(),d),B(20)));c=c+1|0;}Bi(a,d);break b;case 3:break;case 4:Bi(a,Jr(a.cX));break b;case 5:if(a.bU>0&&!JZ(Ck(a.W,a.V,Bm(a.J)))){a.bU=a.bU-1|0;Bi(a,Bs(I(Bl(I(BZ(),B(23)),Bm(a.J)),B(24))));break b;}Bi(a,B(25));break b;case 6:Bi(a,B(26));if(!Bf(DU(a.bJ),B(27))){Bi(a,B(28));break b;}Gk(a.W,a.V,Bm(a.J));Bi(a,B(29));break b;case 7:a.V=Bm(a.J);Bi(a,Bs(Bl(I(BZ(),B(30)),Bm(a.J))));break b;case 8:if(a.bA
<=(Bm(a.J)*2|0)){Bi(a,B(31));break b;}a.bU=a.bU+Bm(a.J)|0;a.bA=a.bA-(Bm(a.J)*2|0)|0;Bi(a,B(32));break b;case 9:h=Bs(I(I(I(BZ(),a.J),B(33)),a.bq));i=Hg(a.cQ,h).data;c=Df(S_.data[i[0]],S_.data[i[1]]);Bi(a,Bs(Bl(I(BZ(),B(34)),c)));break b;case 10:j=Bs(I(I(I(BZ(),a.J),B(33)),a.bq));k=Hg(a.cQ,j);i=k.data;l=Kj(a.cQ,k);m=Df(S_.data[i[0]],S_.data[i[1]]);if(m>=a.bA){Bi(a,B(35));break b;}Bi(a,B(32));a.bA=a.bA-m|0;Du(a.W,Mi(l),a.V);break b;default:Bi(a,B(36));break b;}Bi(a,B(37));}K1(a,B(38));Iy(a,B(38));J_(a,B(38));}
function Jg(a){var b,c,d,e,f,g;b=Dd()*3.0|0;c=0;while(c<4){if(c!=b){d=a.W;e=new EH;e.bm=$rt_createIntArray(2);e.bj=$rt_createIntArray(2);if((Dd()*50.0|0)!=42)e.cF=0;else e.cF=1;e.bX=3;e.bm.data[0]=c;e.bm.data[1]=c;e.bj.data[0]=c;e.bj.data[1]=c;Du(d,e,0);}c=c+1|0;}f=0;while(f<3){g=Eg(Ck(a.W,a.V,f));HH(a.cX,g);f=f+1|0;}}
function Sj(b){var c,d,e;J6();JC();Io();IG();Ia();KM();JG();Jx();Ja();c=new E2;c.eB=new Gx;d=new Fv;d.dk=$rt_createBooleanMultiArray([9,9]);d.gy=$rt_createBooleanArray(25);d.f6=$rt_createIntArray(10);c.cX=d;d=new Hv;d.bV=PM(10);e=0;while(e<10){Bz(d.bV,D0());e=e+1|0;}c.W=d;c.cQ=new Fw;c.bA=50;c.V=0;c.bU=20;c.bJ=B(38);c.J=B(38);c.bq=B(38);c.cG=B(38);c.fR=B(38);IX(c,B(39));Jg(c);}
function E7(){}
function GV(){var a=this;C.call(a);a.dq=null;a.bQ=null;}
function Is(b){var c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new GV;c.bQ=b;d=c;b.classObject=d;}return c;}
function MV(a){return a.bQ;}
function Jt(a,b){var c;b=b;c=a.bQ;return b!==null&&!(typeof b.constructor.$meta==='undefined'?1:0)&&Iu(b.constructor,c)?1:0;}
function KO(a){if(a.dq===null)a.dq=$rt_str(a.bQ.$meta.name);return a.dq;}
function DA(a){return a.bQ.$meta.primitive?1:0;}
function C7(a){return Is(a.bQ.$meta.item);}
function I9(){C.call(this);}
function H9(b,c){var name='jso$functor$'+c;if(!b[name]){var fn=function(){return b[c].apply(b,arguments);};b[name]=function(){return fn;};}return b[name]();}
function DZ(b,c){if(typeof b!=="function")return b;var result={};result[c]=b;return result;}
function IU(){C.call(this);}
function Iu(b,c){var d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(Iu(d[e],c))return 1;e=e+1|0;}return 0;}
function Jp(b){return String.fromCharCode(b);}
function BK(){}
function DF(){}
function Et(){}
function Bd(){var a=this;C.call(a);a.o=null;a.cy=0;}
var Ta=null;function Lo(a){var b=new Bd();E9(b,a);return b;}
function F8(a,b,c){var d=new Bd();KZ(d,a,b,c);return d;}
function E9(a,b){var c,d;b=b.data;c=b.length;a.o=$rt_createCharArray(c);d=0;while(d<c){a.o.data[d]=b[d];d=d+1|0;}}
function KZ(a,b,c,d){var e,f;a.o=$rt_createCharArray(d);e=0;while(e<d){f=b.data;a.o.data[e]=f[e+c|0];e=e+1|0;}}
function G(a,b){var c;if(b>=0&&b<a.o.data.length)return a.o.data[b];c=new CZ;V(c);J(c);}
function L(a){return a.o.data.length;}
function Ey(a){return a.o.data.length?0:1;}
function FE(a,b,c){var d,e,f;if((c+L(b)|0)>L(a))return 0;d=0;while(d<L(b)){e=G(b,d);f=c+1|0;if(e!=G(a,c))return 0;d=d+1|0;c=f;}return 1;}
function HA(a,b){if(a===b)return 1;return FE(a,b,0);}
function Dg(a,b,c){var d,e,f,g;d=BR(0,c);if(b<65536){e=b&65535;while(true){if(d>=a.o.data.length)return (-1);if(a.o.data[d]==e)break;d=d+1|0;}return d;}f=DL(b);g=Dy(b);while(true){if(d>=(a.o.data.length-1|0))return (-1);if(a.o.data[d]==f&&a.o.data[d+1|0]==g)break;d=d+1|0;}return d;}
function Di(a,b,c){var d,e,f,g,h;d=Bv(c,L(a)-1|0);if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.o.data[d]==e)break;d=d+(-1)|0;}return d;}f=DL(b);g=Dy(b);while(true){if(d<1)return (-1);if(a.o.data[d]==g){h=a.o.data;b=d-1|0;if(h[b]==f)break;}d=d+(-1)|0;}return b;}
function Jv(a,b,c){var d,e,f;d=BR(0,c);e=L(a)-L(b)|0;a:while(true){if(d>e)return (-1);f=0;while(true){if(f>=L(b))break a;if(G(a,d+f|0)!=G(b,f))break;f=f+1|0;}d=d+1|0;}return d;}
function Jz(a,b,c){var d,e;d=Bv(c,L(a)-L(b)|0);a:while(true){if(d<0)return (-1);e=0;while(true){if(e>=L(b))break a;if(G(a,d+e|0)!=G(b,e))break;e=e+1|0;}d=d+(-1)|0;}return d;}
function Cf(a,b,c){var d;if(b<=c)return F8(a.o,b,c-b|0);d=new Bw;V(d);J(d);}
function Kx(a,b){return Cf(a,b,L(a));}
function Pf(a,b,c){return Cf(a,b,c);}
function Nt(a){return a;}
function Hz(a){var b,c,d,e;b=$rt_createCharArray(a.o.data.length);c=b.data;d=0;e=c.length;while(d<e){c[d]=a.o.data[d];d=d+1|0;}return b;}
function Gt(b){return b===null?B(40):b;}
function Fi(b){var c;c=new R;U(c);return P(Bl(c,b));}
function Bf(a,b){var c,d;if(a===b)return 1;if(!(b instanceof Bd))return 0;c=b;if(L(c)!=L(a))return 0;d=0;while(d<L(c)){if(G(a,d)!=G(c,d))return 0;d=d+1|0;}return 1;}
function Iv(a){var b,c,d,e;a:{if(!a.cy){b=a.o.data;c=b.length;d=0;while(true){if(d>=c)break a;e=b[d];a.cy=(31*a.cy|0)+e|0;d=d+1|0;}}}return a.cy;}
function DU(a){var b,c,d,e,f,g,h,i,j,k;if(Ey(a))return a;b=$rt_createIntArray(a.o.data.length).data;c=0;d=0;while(d<a.o.data.length){a:{if(d!=(a.o.data.length-1|0)&&Bo(a.o.data[d])){e=a.o.data;f=d+1|0;if(Bu(e[f])){g=c+1|0;b[c]=Cz(B1(a.o.data[d],a.o.data[f]));d=f;break a;}}g=c+1|0;b[c]=BT(a.o.data[d]);}d=d+1|0;c=g;}h=new Bd;d=0;h.o=$rt_createCharArray(c*2|0);g=0;f=0;while(f<c){i=d+1|0;d=b[d];if(d<65536){e=h.o.data;j=g+1|0;e[g]=d&65535;}else{e=h.o.data;k=g+1|0;e[g]=DL(d);e=h.o.data;j=k+1|0;e[k]=Dy(d);}f=f+1|0;d
=i;g=j;}if(g<h.o.data.length)h.o=It(h.o,g);return h;}
function KR(a,b){var c,d;if(b===null){b=new CE;Bn(b,B(41));J(b);}Tb=1;c=new Hb;c.dl=E(Bq,10);c.bo=(-1);c.bB=(-1);c.D=(-1);d=new CH;d.bk=1;d.M=b;d.j=$rt_createCharArray(L(b)+2|0);HW(Hz(b),0,d.j,0,L(b));d.j.data[d.j.data.length-1|0]=0;d.j.data[d.j.data.length-2|0]=0;d.dY=d.j.data.length;d.b2=0;Cg(d);Cg(d);c.b=d;c.X=0;c.c1=HI(c,(-1),c.X,null);if(!BD(c.b))J(Bb(B(38),c.b.M,c.b.bt));if(c.ea)c.c1.bw();return Il(c,a);}
function J6(){Ta=new Fr;}
function C1(){var a=this;C.call(a);a.f5=null;a.ei=0;a.fs=0;}
function Tc(a){var b=new C1();Bn(b,a);return b;}
function Bn(a,b){a.ei=1;a.fs=1;a.f5=b;}
function Pu(a){return a;}
function Eu(){C1.call(this);}
function C4(){Eu.call(this);}
function Kk(){C4.call(this);}
function CV(){var a=this;C.call(a);a.A=null;a.v=0;}
function Td(){var a=new CV();U(a);return a;}
function SO(a){var b=new CV();De(b,a);return b;}
function U(a){De(a,16);}
function De(a,b){a.A=$rt_createCharArray(b);}
function Fc(a,b,c){return Kv(a,a.v,b,c);}
function Kv(a,b,c,d){var e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c;}a:{if(c<d){if(e)CG(a,b,b+1|0);else{CG(a,b,b+2|0);f=a.A.data;g=b+1|0;f[b]=45;b=g;}a.A.data[b]=EA(c,d);}else{h=1;i=1;j=2147483647/d|0;b:{while(true){k=Df(h,d);if(k>c){k=h;break b;}i=i+1|0;if(k>j)break;h=k;}}if(!e)i=i+1|0;CG(a,b,b+i|0);if(e)e=b;else{f=a.A.data;e=b+1|0;f[b]=45;}while(true){if(k<=0)break a;f=a.A.data;b=e+1|0;f[e]=EA(c/k|0,d);c=c%k|0;k=k/d|0;e=b;}}}return a;}
function BS(a,b){return a.dB(a.v,b);}
function DH(a,b,c){CG(a,b,b+1|0);a.A.data[b]=c;return a;}
function D1(a,b){var c;if(a.A.data.length>=b)return;c=a.A.data.length>=1073741823?2147483647:BR(b,BR(a.A.data.length*2|0,5));a.A=It(a.A,c);}
function P(a){return F8(a.A,0,a.v);}
function DE(a,b,c,d){return a.df(a.v,b,c,d);}
function Da(a,b,c,d,e){var f,g,h,i;CG(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.A.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;}
function Cl(a,b){return a.dE(b,0,b.data.length);}
function CG(a,b,c){var d,e;d=a.v-b|0;a.co((a.v+c|0)-b|0);e=d-1|0;while(e>=0){a.A.data[c+e|0]=a.A.data[b+e|0];e=e+(-1)|0;}a.v=a.v+(c-b|0)|0;}
function El(){}
function R(){CV.call(this);}
function BZ(){var a=new R();Q2(a);return a;}
function Q2(a){U(a);}
function I(a,b){HJ(a,a.v,b);return a;}
function Bl(a,b){Fc(a,b,10);return a;}
function LA(a,b){BS(a,b);return a;}
function Oq(a,b,c,d){DE(a,b,c,d);return a;}
function Pd(a,b){Cl(a,b);return a;}
function Oa(a,b,c,d,e){Da(a,b,c,d,e);return a;}
function Mv(a,b,c){DH(a,b,c);return a;}
function Ki(a,b,c){var d,e,f,g,h,i,j;d=C9(b,c);if(d<=0&&b<=a.v){if(d){e=a.v-c|0;a.v=a.v-(c-b|0)|0;d=0;while(d<e){f=a.A.data;g=b+1|0;h=a.A.data;i=c+1|0;f[b]=h[c];d=d+1|0;b=g;c=i;}}return a;}j=new CZ;V(j);J(j);}
function GM(a,b){var c,d,e,f;if(b>=0&&b<a.v){a.v=a.v-1|0;while(b<a.v){c=a.A.data;d=a.A.data;e=b+1|0;c[b]=d[e];b=e;}return a;}f=new CZ;V(f);J(f);}
function HJ(a,b,c){var d,e,f;if(b>=0&&b<=a.v){a:{if(c===null)c=B(40);else if(Ey(c))break a;D1(a,a.v+L(c)|0);d=a.v-1|0;while(d>=b){a.A.data[d+L(c)|0]=a.A.data[d];d=d+(-1)|0;}a.v=a.v+L(c)|0;d=0;while(d<L(c)){e=a.A.data;f=b+1|0;e[b]=G(c,d);d=d+1|0;b=f;}}return a;}c=new CZ;V(c);J(c);}
function Rp(a,b,c,d,e){Da(a,b,c,d,e);return a;}
function OS(a,b,c,d){DE(a,b,c,d);return a;}
function Dm(a){return a.v;}
function Bs(a){return P(a);}
function RA(a,b){D1(a,b);}
function Le(a,b,c){DH(a,b,c);return a;}
function RM(a,b,c){return HJ(a,b,c);}
function D_(){C.call(this);}
function Dv(){D_.call(this);this.fg=0;}
var Te=null;function SE(a){var b=new Dv();Ef(b,a);return b;}
function Ef(a,b){a.fg=b;}
function Dj(b,c){var d,e,f,g,h,i,j;if(c>=2&&c<=36){if(b!==null&&!Ey(b)){a:{d=0;e=0;switch(G(b,0)){case 43:e=1;break a;case 45:d=1;e=1;break a;default:}}f=0;if(e==L(b)){b=new BG;V(b);J(b);}while(e<L(b)){g=e+1|0;h=Gc(G(b,e));if(h<0){i=new BG;j=new R;U(j);Bn(i,P(I(I(j,B(42)),b)));J(i);}if(h>=c){i=new BG;j=new R;U(j);Bn(i,P(I(I(Bl(I(j,B(43)),c),B(21)),b)));J(i);}f=Df(c,f)+h|0;if(f<0){if(g==L(b)&&f==(-2147483648)&&d)return (-2147483648);i=new BG;j=new R;U(j);Bn(i,P(I(I(j,B(44)),b)));J(i);}e=g;}if(d)f= -f;return f;}b
=new BG;Bn(b,B(45));J(b);}i=new BG;b=new R;U(b);Bn(i,P(Bl(I(b,B(46)),c)));J(i);}
function Bm(b){return Dj(b,10);}
function Ep(a){var b;b=a.fg;return Fc(SO(20),b,10).bf();}
function Fn(b){var c,d;if(!b)return 32;c=0;d=b>>>16;if(d)c=16;else d=b;b=d>>>8;if(!b)b=d;else c=c|8;d=b>>>4;if(!d)d=b;else c=c|4;b=d>>>2;if(!b)b=d;else c=c|2;if(b>>>1)c=c|1;return (32-c|0)-1|0;}
function Dk(b){var c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;}
function JC(){Te=D($rt_intcls());}
function CS(){C4.call(this);}
function Tf(a){var b=new CS();G2(b,a);return b;}
function G2(a,b){Bn(a,b);}
function IC(){CS.call(this);}
function Tg(a){var b=new IC();NC(b,a);return b;}
function NC(a,b){G2(a,b);}
function J0(){CS.call(this);}
function Th(a){var b=new J0();NX(b,a);return b;}
function NX(a,b){G2(a,b);}
function Ca(){C1.call(this);}
function Ti(){var a=new Ca();V(a);return a;}
function V(a){a.ei=1;a.fs=1;}
function Bh(){Ca.call(this);}
function S3(a){var b=new Bh();QF(b,a);return b;}
function QF(a,b){Bn(a,b);}
function Jj(){C.call(this);}
function Gx(){C.call(this);}
function H7(a,b,c){var d,e,f,g;d=$rt_createIntArray(4);e=d.data;e[0]=0;e[1]=0;e[2]=0;e[3]=0;f=Hi(b).data;g=Hi(c).data;e[0]=f[0];e[1]=g[0];e[2]=f[1];e[3]=g[1];return Mi(d);}
function Fv(){var a=this;C.call(a);a.dk=null;a.gy=null;a.f6=null;}
function Jr(a){var b,c,d,e;b=new R;U(b);b=P(I(I(b,B(38)),B(47)));c=new R;U(c);b=P(I(I(c,b),B(48)));c=new R;U(c);c=P(I(I(c,b),B(49)));d=0;while(d<9){b=new R;U(b);c=P(I(I(I(b,c),Bj(Tj,d)),B(50)));e=0;while(e<9){if(!a.dk.data[d].data[e]){b=new R;U(b);c=P(I(I(b,c),B(51)));}else{b=new R;U(b);c=P(I(I(b,c),B(52)));}e=e+1|0;}b=new R;U(b);c=P(I(I(b,c),B(33)));d=d+1|0;}return c;}
function HH(a,b){var c,d;b=b.data;c=Bm(b[1]);d=Bm(b[2]);a.dk.data[c].data[d]=1;}
function Hv(){C.call(this);this.bV=null;}
function Ck(a,b,c){return Bj(Bj(a.bV,b),c);}
function Du(a,b,c){Bz(Bj(a.bV,c),b);}
function Gk(a,b,c){return Ec(Bj(a.bV,b),c);}
function KS(a,b){return Bj(a.bV,b).y;}
function Fw(){C.call(this);}
function Kj(a,b){var c,d,e,f,g,h;b=b.data;c=$rt_createIntArray(4);d=c.data;e=0;f=b.length;g=0;while(g<f){h=b[g];d[e+0|0]=Tk.data[h].data[0];d[e+1|0]=Tk.data[h].data[1];e=e+2|0;g=g+1|0;}return c;}
function Hg(a,b){var c,d,e,f,g;c=KR(DU(b),B(33)).data;d=c.length;e=$rt_createIntArray(d);f=e.data;g=0;while(g<d){f[g]=Ej(Tj,c[g]);g=g+1|0;}return e;}
function Ho(){}
function Fr(){C.call(this);}
function BV(){C.call(this);}
var Tl=null;var Tm=null;var Tn=null;var To=null;var Tp=null;var Tq=null;function G$(b){var c,d;c=new Bd;d=$rt_createCharArray(1);d.data[0]=b;E9(c,d);return c;}
function Em(b){return b>=65536&&b<=1114111?1:0;}
function Bo(b){return (b&64512)!=55296?0:1;}
function Bu(b){return (b&64512)!=56320?0:1;}
function C$(b,c){return Bo(b)&&Bu(c)?1:0;}
function B1(b,c){return ((b&1023)<<10|c&1023)+65536|0;}
function DL(b){return (55296|(b-65536|0)>>10&1023)&65535;}
function Dy(b){return (56320|b&1023)&65535;}
function Cb(b){return CD(b)&65535;}
function CD(b){return Jp(b).toLowerCase().charCodeAt(0);}
function BT(b){return Cz(b)&65535;}
function Cz(b){return Jp(b).toUpperCase().charCodeAt(0);}
function F6(b,c){if(c>=2&&c<=36){b=Gc(b);if(b>=c)b=(-1);}else b=(-1);return b;}
function Gc(b){var c,d,e,f,g,h,i,j,k;if(Tm===null){if(Tp===null)Tp=Km();c=(Tp.value!==null?$rt_str(Tp.value):null);d=new Gm;d.em=Hz(c);e=If(d);f=$rt_createIntArray(e);g=f.data;h=0;while(h<e){g[h]=If(d);h=h+1|0;}Tm=f;}f=Tm.data;h=0;i=(f.length/2|0)-1|0;while(i>=h){j=(h+i|0)/2|0;e=j*2|0;k=C9(b,f[e]);if(k>0)h=j+1|0;else{if(k>=0)return f[e+1|0];i=j-1|0;}}return (-1);}
function EA(b,c){if(c>=2&&c<=36&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;}
function CY(b){var c,d;if(b<65536){c=$rt_createCharArray(1);c.data[0]=b&65535;return c;}c=$rt_createCharArray(2);d=c.data;d[0]=DL(b);d[1]=Dy(b);return c;}
function Bg(b){var c,d,e,f,g;if(b>0&&b<=65535?1:0){c=b&65535;if(!Bo(c)&&!Bu(c)?0:1)return 19;}if(Tn===null){if(Tq===null)Tq=KQ();Tn=RS((Tq.value!==null?$rt_str(Tq.value):null));}d=Tn.data;e=0;c=d.length-1|0;while(e<=c){f=(e+c|0)/2|0;g=d[f];if(b>=g.dV)e=f+1|0;else{if(b>=g.dz)return g.e1.data[b-g.dz|0];c=f-1|0;}}return 0;}
function DX(b){a:{switch(Bg(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break a;default:break a;}return 1;}return 0;}
function CX(b){a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return Bg(b)!=16?0:1;}
function GA(b){switch(Bg(b)){case 12:case 13:case 14:break;default:return 0;}return 1;}
function Hc(b){switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:return 0;default:return GA(b);}return 1;}
function Io(){Tl=D($rt_charcls());To=E(BV,128);}
function Km(){return {"value":"oD#*% .%%2%)6%-:%1>%5B%9F%=J%AN%Eo%Is%Mw%Q{%U!\'Y&\'^*\'b.\'f2\'j6\'n:\'r>\'vB\'zF\'!#J\'&#N\'*#R\'.#V\'2#Z\'6#_\':#c\'>#g\'B#k\'F#o\'J#s\'N#w\'R#6)I:)M>)QB)UF)YJ)^N)bR)fV)jZ)n_)rc)vg)zk)!#o)&#s)*#w).#{)2#!+6#&+:#*+>#.+B#2+F#6+J#:+N#>+R#{R# !T#%&T#)*T#-.T#12T#56T#9:T#=>T#ABT#E6a# :a#%>a#)Ba#-Fa#1Ja#5Na#9Ra#=Va#AZa#E:s# >s#%Bs#)Fs#-Js#1Ns#5Rs#9Vs#=Zs#A_s#EZ:% _:%%c:%)g:%-k:%1o:%5s:%9w:%={:%A!<%E2F% 6F%%:F%)>F%-BF%1FF%5JF%9NF%=RF%AVF%EgP% kP%%oP%)sP%-wP%1{P%5!R%9&R%=*R%A.R%E>]% B]%%F]%)J]%-N]%1R]%5V]%9Z]%=_]%Ac]%Esg% wg%%{g%)!i%-&"
+"i%1*i%5.i%92i%=6i%A:i%EJs% Ns%%Rs%)Vs%-Zs%1_s%5cs%9gs%=ks%Aos%E!!\' &!\'%*!\').!\'-2!\'16!\'5:!\'9>!\'=B!\'AF!\'EV,\' Z,\'%_,\')c,\'-g,\'1k,\'5o,\'9s,\'=w,\'A{,\'E.8\' 28\'%68\'):8\'->8\'1B8\'5F8\'9J8\'=N8\'AR8\'EcB\' gB\'%kB\')oB\'-sB\'1wB\'5{B\'9!D\'=&D\'A*D\'E>L\' BL\'%FL\')JL\'-NL\'1RL\'5VL\'9ZL\'=_L\'AcL\'EsV\' wV\'%{V\')!X\'-&X\'1*X\'5.X\'92X\'=6X\'A:X\'EB_\' F_\'%J_\')N_\'-R_\'1V_\'5Z_\'9__\'=c_\'Ag_\'Esw\' ww\'%{w\')!y\'-&y\'1*y\'5.y\'92y\'=6y\'A:y\'EB!) F!)%J!))N!)-R!)1V!)5Z!)9_!)=c!)Ag!)Egi+ ki+%oi+)si+-wi+1{i+5!k+9&k+=*k+A.k+Eom+ sm+%wm+){m+-!o+1&o+5*o+9.o+=2o+A6o+E>,- B,-%F"
+",-)J,--N,-1R,-5V,-9Z,-=_,-Ac,-E>8- B8-%F8-)J8--N8-1R8-5V8-9Z8-=_8-Ac8-E{F- !H-%&H-)*H--.H-12H-56H-9:H-=>H-ABH-E_H- cH-%gH-)kH--oH-1sH-5wH-9{H-=!J-A&J-E!Z- &Z-%*Z-).Z--2Z-16Z-5:Z-9>Z-=BZ-AFZ-E2c- 6c-%:c-)>c--Bc-1Fc-5Jc-9Nc-=Rc-AVc-EJo- No-%Ro-)Vo--Zo-1_o-5co-9go-=ko-Aoo-E.q- 2q-%6q-):q-->q-1Bq-5Fq-9Jq-=Nq-ARq-E&4r *4r%.4r)24r-64r1:4r5>4r9B4r=F4rAJ4rE{or !qr%&qr)*qr-.qr12qr56qr9:qr=>qrABqrE&ur *ur%.ur)2ur-6ur1:ur5>ur9Bur=FurAJurE**t .*t%2*t)6*t-:*t1>*t5B*t9F*t=J*tAN*tEN,t R,t%V,t)Z,t-_,t1c,t5g,t9k,t=o,tAs,tE_"
+"4t c4t%g4t)k4t-o4t1s4t5w4t9{4t=!6tA&6tEgXt kXt%oXt)sXt-wXt1{Xt5!Zt9&Zt=*ZtA.ZtE{c@# !e@#%&e@#)*e@#-.e@#12e@#56e@#9:e@#=>e@#ABe@#Ece@#Ige@#Mke@#Qoe@#Use@#Ywe@#^{e@#b!g@#f&g@#j*g@#n.g@#r2g@#v6g@#z:g@#!#>g@#&#Bg@#*#Fg@#.#Jg@#2#Ng@#6#Rg@#:#Vg@#>#Zg@#B#_g@#F#cg@#J#gg@#N#kg@#R#*i@#I.i@#M2i@#Q6i@#U:i@#Y>i@#^Bi@#bFi@#fJi@#jNi@#nRi@#rVi@#vZi@#z_i@#!#ci@#&#gi@#*#ki@#.#oi@#2#si@#6#wi@#:#{i@#>#!k@#B#&k@#F#*k@#J#.k@#N#2k@#R#s&D# w&D#%{&D#)!(D#-&(D#1*(D#5.(D#92(D#=6(D#A:(D#E2.H# 6.H#%:.H#)>.H#-B.H#1F.H#5J.H#9N.H#=R.H#AV."
+"H#EwuH# {uH#%!wH#)&wH#-*wH#1.wH#52wH#96wH#=:wH#A>wH#Ew$J# {$J#%!&J#)&&J#-*&J#1.&J#52&J#96&J#=:&J#A>&J#E{*J# !,J#%&,J#)*,J#-.,J#12,J#56,J#9:,J#=>,J#AB,J#E_8J# c8J#%g8J#)k8J#-o8J#1s8J#5w8J#9{8J#=!:J#A&:J#E2RJ# 6RJ#%:RJ#)>RJ#-BRJ#1FRJ#5JRJ#9NRJ#=RRJ#AVRJ#ENqJ# RqJ#%VqJ#)ZqJ#-_qJ#1cqJ#5gqJ#9kqJ#=oqJ#AsqJ#E&}J# *}J#%.}J#)2}J#-6}J#1:}J#5>}J#9B}J#=F}J#AJ}J#Eg@L# k@L#%o@L#)s@L#-w@L#1{@L#5!BL#9&BL#=*BL#A.BL#EZJL# _JL#%cJL#)gJL#-kJL#1oJL#5sJL#9wJL#={JL#A!LL#ENTL# RTL#%VTL#)ZTL#-_TL#1cTL#5gTL#9kTL#=oTL#AsTL#E:{L# >{L#"
+"%B{L#)F{L#-J{L#1N{L#5R{L#9V{L#=Z{L#A_{L#ERkN# VkN#%ZkN#)_kN#-ckN#1gkN#5kkN#9okN#=skN#AwkN#E_$P# c$P#%g$P#)k$P#-o$P#1s$P#5w$P#9{$P#=!&P#A&&P#E.,P# 2,P#%6,P#):,P#->,P#1B,P#5F,P#9J,P#=N,P#AR,P#EFau# Jau#%Nau#)Rau#-Vau#1Zau#5_au#9cau#=gau#Akau#Eouu# suu#%wuu#){uu#-!wu#1&wu#5*wu#9.wu#=2wu#A6wu#EF0N% J0N%%N0N%)R0N%-V0N%1Z0N%5_0N%9c0N%=g0N%Ak0N%Eo0N% s0N%%w0N%){0N%-!2N%1&2N%5*2N%9.2N%=22N%A62N%E:2N% >2N%%B2N%)F2N%-J2N%1N2N%5R2N%9V2N%=Z2N%A_2N%Ec2N% g2N%%k2N%)o2N%-s2N%1w2N%5{2N%9!4N%=&4N%A*4N%E.4N% 24N%%64N%):4N%->"
+"4N%1B4N%5F4N%9J4N%=N4N%AR4N%ERJR% VJR%%ZJR%)_JR%-cJR%1gJR%5kJR%9oJR%=sJR%AwJR%E>qR% BqR%%FqR%)JqR%-NqR%1RqR%5VqR%9ZqR%=_qR%AcqR%E:FV% >FV%%BFV%)FFV%-JFV%1NFV%5RFV%9VFV%=ZFV%A_FV%E"};}
function KQ(){return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
+"!#!#!#!#!#!#!#!#!#!#!#!#!#=G&H#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!# BGA#%Y\'CJ95A#^#; GN5\'9G#9G#9\'A)F<A%F%Y#A,Q\'Z$Y#;Y#^#G,91 Y#FA%F+G6J+Y%F#\'b&D! 9&G(1=G\'E#G#=G%F#J+F$^#&Y/ 1&\'F?G<A#b&:! G,&A/J+FBG*E#=Y$%A#\'[#F7G%%G*%G$%G&A#Y0 F:G$A#9 F,AVF6 F)A6G01GA)FW\')\'&I$G)I%\'I#&G(F+G#Y#J+9%F0\'I# F)A#F#A#F7 F( &A$F%A#\'&I$G%A#I#A#I#\'&A))A%F# F$G#A#J+F#[#L\'=;&9\'A#G#) F\'A%F#A#F7 F( F# F# F#A#\' "
+"I$G#A%G#A#G$A$\'A(F% &A(J+G#F$\'9A+G#) F* F$ F7 F( F# F&A#\'&I$G& G#) I#\'A#&A0F#G#A#J+9;A(&G\' \'I# F)A#F#A#F7 F( F# F&A#\'&)\')G%A#I#A#I#\'A)\')A%F# F$G#A#J+=&L\'A+\'& F\'A$F$ F%A$F# & F#A$F#A$F$A$F-A%I#\'I#A$I$ I$\'A#&A\')A/J+L$^\';=A&\'I$\'F) F$ F8 F1A$&G$I% G$ G%A(G# F$A&F#G#A#J+A(9L(=&\'I#9F) F$ F8 F+ F&A#\'&)\'I& \'I# I#G#A(I#A(& F#G#A#J+ F#A.G#I# F) F$ FJG#&I$G% I$ I$\'&=A%F$)L(F$G#A#J+L*=F\'A#I# F3A$F9 F* &A#F(A$\'A%I$G$ \' I)A\'J+A#I#9A-FQ\'F#G(A%;F\'%G)9J+Y#AFF# & F& F9 & F+\'F#G*&A#F& % G\'A#J+A#F%AA&^$Y0=9^$G#^\'J+L+=\'=\'=\'6767"
+"I#F) FEA%G/)G&9G#F&G, GE ^)\'^\' ^#Y&^%Y#AFFLI#G%)G\')G#I#G#&J+Y\'F\'I#G#F%G$&I$F#I(F$G%F.\'I#G#I\'\'&)J+I$\'^#BG !A&!A#CL9%C$b&*&  F%A#F( & F%A#FJ F%A#FB F%A#F( & F%A#F0 FZ F%A#FeA#G$Y*L5A$F1^+A\'b!7! A#C\'A#5b&M* =9F2-F;67A$FmY$K$F)A(F. F%G$A,F3G$Y#A*F3G#A-F. F$ G#A-FUG#)G(I)\'I#G,Y$%Y$;&\'A#J+A\'L+A\'Y\'5Y%G$1 J+A\'FD%FVA(F&G#FC\'&A&FhA+F@ G$I%G#I$A%I#\'I\'G$A%=A$Y#J+F?A#F&A,FMA%F;A\'J+,A$^CF8G#I#\'A#Y#FV)\')G( \')\'I#G)I\'G+A#\'J+A\'J+A\'Y(%Y\'A#G/(AcG%)FP\')G&)\'I&\'I#F(A%J+Y(^+G*^*A$G#)F?)G%I#G#)G$F#J+FM\')G#I$\')G$I#A)Y%FEI)G)I#G#A$Y&"
+"J+A$F$J+F?E\'Y#C*A(BLA#B$Y)A)G$9G.)G(F%\'F\'\'F#)G#&A&CMEaC.%CCEFG[ G&!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*B)C\'A#B\'A#C)B)C)B)C\'A#B\'A#C) ! ! ! !C)B)C/A#C)D)C)D)C)D)C& C#B%$<#]$C$ C#B%$]$C%A#C#B% ]$C)B&]$A#C$ C#B%$]# M,Q&U\'Y#>?6_#?6>Y)./Q&-Y*>?Y%X#Y$:67Y,:98Y+-Q& Q+,%A#L\'Z$67%L+Z$67 E.A$[AA1G.H%\'H$G-A0^#"
+"!^%!^##B$C#B$#=!^#:B&^\'!=!=!=B%=#B%#F%#^#C#B#Z&!C%=:^##=L1KD!#K%,^#A%Z&^&Z#^%:^#:^#:^(:^@Z#^#:=:^@b:-% ^)6767^5Z#^(67b=2! :^?Z:^IZ\'^gA:^,A6L^^pL7b=X# :^*:^WZ)b=P! :b=Y$ 67676767676767L?^MZ&67Z@6767676767Z1b= % b:$# 6767676767676767676767Za6767ZA67b:#% ^QZ6^#Z\'^HA#^AA#b=I! BP CP !#B$C#!#!#!#B%#!C#!C\'E#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#^\'!#!#G$!#A&Y%,Y#CG #A&#A#FYA(%9A/\'F8A*F( F( F( F( F( F( F( F( GAY#>?>?Y$>?9>?Y*5Y#59>?Y#>?67676767Y&%Y+U#Y%"
+"596Y.AQ^; b=:! A-b=7$ A;^-A%-Y$=%&+6767676767^#6767676756W#=K*G%I#5E&^#K$%&9^# b&7! A#G#]#E#&5b&;! 9E$&A&FL b&?!  ^#L%^+F<A&^EA-F1^@ L+^?L)=L0^AL+^HL0b= & &b UG!&A+^b&b   %b O(!&A1F6%b&X2 A$^XA*FIE\'Y#b&-% %Y$F1J+F#A5!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#&\'H$9G+9%!#!#!#!#!#!#!#!#!#!#!#!#!#!#E#G#FhK+G#Y\'A)]8E*]#!#!#!#!#!#!#!C$!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#%C)!#!#B##!#!#!#!#%]#!#!#&!#!C$!#!#!#!#!#!#!#!#!#!#B&#B&#!#!#!#!#!#A#!#B$AQ&E##F(\'F$\'F%\'F8I#G#)^%A%L\'^#;=A\'FUY%A)I#F"
+"SI1G#A)Y#J+A\'G3F\'Y$&9F#\'J+F=G)Y#F8G,I#A,9F>A$G$)FP\'I#G%I#G#I$Y. %J+A%Y#F&\'%F*J+F& FJG\'I#G#I#G#A*F$\'F)\')A#J+A#Y%F1%F\'^$&)\')FS\'&G$F#G#F&G#&\'&A9F#%Y#F,)G#I#Y#&E#)\'A+F\'A#F\'A#F\'A*F( F( CL<E%C)A)b#1! FDI#\'I#\'I#9)\'A#J+A\'&b CO#&A-F8A%FRA%4b `. T#b `! T#b `0 43b `D!3b&O& A#b&K! AGC(A-C&A&&\'F+:F. F& & F# F# b&M! ]1A2b&L& 76A1FbA#FWAIF-;=A#G1Y(679A\'G19U#X#6767676767676767Y#67Y%X$Y$ Y%5676767Y$:5Z$ 9;Y#A%F& b&(# A#1 Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:67967Y#F+%FNE#F@A$F\'A#F\'A#F\'A#F$A$[#:<=[# =Z%^#A+Q$^#A#F- F; F4 F# F0"
+"A#F/ACb&]! A&Y$A%LNA$^*KVL%^2L#^$ ^-A%=AP^N\'b ## F>A$FRA0\'L<A%FAL%A*F5+F)+A&FGG&A&F? 9FEA%F)9K&AKBICIFpA#J+A\'BEA%CEA%FIA)FUA,9b 1# b&X% A*F7A+F)b 9# F\'A#& FM F#A$&A#F8 9L)F8^#L(F@A)L*AQF4 F#A&L&F7L\'A$9F;A&9AbFYA%L#F#L1A#LO&G$ G#A&G%F% F$ F>A#G$A%\'L*A(Y*A(F>L#9F>L$AAF)=F=G#A%L&Y(A*FWA$Y(F7A#L)F4A&L)F3A(Y%A-L(b 1! FkAXBTA.CTA(L\'FEG%A)J+b G% L@b !# F>L+&A)F7G,L%Y&b \'# F8A*)\')FVG0Y(A%L5J+A0G$)FNI$G%I#G#Y#1Y%A,1A#F:A(J+A\'G$FEG&)G) J+Y%&I#A*FD\'Y#&A*G#)FQI$G*I#F%Y%G%9A#J+&9&Y$ L5A,F3 F:I$G$I#\')G#Y\'\'AcF( & F% F0 F+"
+"9A\'FP\'I$G)A&J+A\'G#I# F)A#F#A#F7 F( F# F& G#&I#\'I%A#I#A#I$A#&A\')A&F&I#A#G(A$G&b ,# FVI$G)I#G$)\'F%Y&J+ 9 9\'&AAFQI$G\')\'I%G#)G#F#9&A)J+b G# FPI$G%A#I%G#)G#Y8F%G#ACFQI$G)I#\')G#Y$&A,J+A\'Y.A4FL\')\'I#G\')\'&A(J+AWF<A#G$I#G%)G&A%J+L#Y$=b  $ FMI$G*)G#9b E! BACAJ+L*A-&b A# F)A#FHI$G%A#G#I%\'&9&)A<&G+FIG\')&G%Y)\'A)&G\'I#G$FOG.)G#Y$&Y&A>FZb (% F* FF)G( G\')\'&Y&A+J+L4A$Y#F?A#G7 )G()G#)G#AkF( F# FGG\'A$\' G# G(&\'A)J+A\'F\' F# FAI& G# I#\')\'&A(J+b W% F4G#I#Y#b ($ L6^)[%^2A.9b&;/ b G! b+P!  Y&A,b&%$ b ^K b&P1  Q*b (a b&(* b Z\'#b&Z) A(F"
+"@ J+A%Y#b A! F?A#G&9A+FQG(Y&^%E%9=A+J+ L( F6A&F4b Q+ BACAL8Y%b F! FmA%\'&IXA(G%E.AbE#9%A=&b W@!&A)b&T, b .5#b&@% ARF$A2F%A)b&-\' b %E b&L! A&F.A$F*A(F+A#=G#9Q%b =.!b=W$ A+^HA#^^I#G$^$I\'Q)G)^#G(^?G%^]A8^dG$=b ;# L5A-b=8! A*L:b (# B;C;B;C( C3B;C;! B#A#!A#B#A#B% B)C% # C( C,B;C;B# B%A#B) B( C;B# B% B& !A$B( C;B;C;B;C;B;C;B;C;B;C;B;C=A#B::C::C\'B::C::C\'B::C::C\'B::C::C\'B::C::C\'!#A#JSb= ) GX^%GS^)\'^/\'^#Y&A0G& G0b 16 G( G2A#G( G# G&b 6$ FNA$G(E(A#J+A%&=b Q& FMG%J+A&;b  5 b&&$ A#L*G(AJBCCCG(%A%J+A%Y#b 2- L]=L$;L%AnLN="
+"L0b #$ F% F< F# &A#& F+ F% & &A\'&A%& & & F$ F# &A#& & & & & F# &A#F% F( F% F% & F+ F2A&F$ F& F2AUZ#b /% ^MA%b=E! A-^0A#^0 ^0 ^FA+L.A$b=>! A$^_AZ^>A.^MA%^*A(^#A/^\'b ;# b=]$ ]&b=7, A+^.A$^,A&b=U! A-b=:! A(^-A5^-A%^YA)^+A\'^IA)^?b 3! ^- b=F!  ^%A$^JA#^\'A$^>A#b=(# A-^/A#^%A%^$A&^$A.^\'b K6 &b   %b   %b 6<#&AJ&b T !&A,&b =$ &A#&b  ;!&A/&b PU!&b @Q b&?) b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   "
+"%b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b D8 1A?b1A! b  # b\'Q$ b   %b   %b   %b 1Y$3b   %b   %b   %b ^a$3A#3b   %b   %b   %b ^a$3"};}
function GO(){}
function Dl(){}
function CB(){C.call(this);}
function JB(a,b){var c,d,e,f,g;c=b.data;d=a.y;e=c.length;if(e<d)b=I1(C7(B_(b)),d);else while(d<e){c[d]=null;d=d+1|0;}e=0;f=Cr(a);while(CF(f)){c=b.data;g=e+1|0;c[e]=Cs(f);e=g;}return b;}
function C8(){}
function CK(){CB.call(this);this.bD=0;}
function Cr(a){var b;b=new Fh;b.ca=a;b.e6=b.ca.bD;b.e9=b.ca.dd();b.d0=(-1);return b;}
function Ej(a,b){var c,d,e;c=a.y;d=0;a:{while(d<c){b:{e=Bj(a,d);if(b!==null){if(!Bf(b,e))break b;else break a;}if(e===null)break a;}d=d+1|0;}return (-1);}return d;}
function Dr(){}
function D4(){}
function Ft(){var a=this;CK.call(a);a.L=null;a.y=0;}
function D0(){var a=new Ft();PK(a);return a;}
function PM(a){var b=new Ft();EV(b,a);return b;}
function PK(a){EV(a,10);}
function EV(a,b){a.L=E(C,b);}
function Fb(a,b){var c;if(a.L.data.length<b){c=a.L.data.length>=1073741823?2147483647:BR(b,BR(a.L.data.length*2|0,5));a.L=Ky(a.L,c);}}
function Bj(a,b){EY(a,b);return a.L.data[b];}
function MT(a){return a.y;}
function Bz(a,b){var c,d;Fb(a,a.y+1|0);c=a.L.data;d=a.y;a.y=d+1|0;c[d]=b;a.bD=a.bD+1|0;return 1;}
function KB(a,b,c){var d;if(b>=0&&b<=a.y){Fb(a,a.y+1|0);d=a.y;while(d>b){a.L.data[d]=a.L.data[d-1|0];d=d+(-1)|0;}a.L.data[b]=c;a.y=a.y+1|0;a.bD=a.bD+1|0;return;}c=new Bw;V(c);J(c);}
function Ec(a,b){var c,d,e,f;EY(a,b);c=a.L.data[b];a.y=a.y-1|0;while(b<a.y){d=a.L.data;e=a.L.data;f=b+1|0;d[b]=e[f];b=f;}a.L.data[a.y]=null;a.bD=a.bD+1|0;return c;}
function EY(a,b){var c;if(b>=0&&b<a.y)return;c=new Bw;V(c);J(c);}
function Bw(){Bh.call(this);}
function CZ(){Bw.call(this);}
function B5(){}
function EJ(){}
function EN(){}
function B7(){}
function JQ(){}
function Ks(){C.call(this);}
function Dd(){return Rw();}
function Rw(){return Math.random();}
function Bv(b,c){if(b<c)c=b;return c;}
function BR(b,c){if(b>c)c=b;return c;}
function EH(){var a=this;C.call(a);a.bm=null;a.bj=null;a.cF=0;a.bX=0;}
function Mi(a){var b=new EH();RE(b,a);return b;}
function RE(a,b){var c;a.bm=$rt_createIntArray(2);a.bj=$rt_createIntArray(2);if((Dd()*50.0|0)!=42)a.cF=0;else a.cF=1;c=b.data;a.bX=0;a.bm.data[0]=c[0];a.bm.data[1]=c[1];a.bj.data[0]=c[2];a.bj.data[1]=c[3];}
function JZ(a){if(a.bX>=3)return 1;a.bX=a.bX+1|0;return 0;}
function DM(a){return a.bX;}
function IP(a){var b,c;b=$rt_createIntArray(4);c=b.data;c[0]=a.bm.data[0];c[1]=a.bm.data[1];c[2]=a.bj.data[0];c[3]=a.bj.data[1];return b;}
function Hi(a){var b;b=$rt_createIntArray(2);if(Dd()*2.0|0)b.data[0]=a.bm.data[1];else b.data[0]=a.bm.data[0];if(Dd()*2.0|0)b.data[1]=a.bj.data[1];else b.data[1]=a.bj.data[0];return b;}
function Eg(a){var b,c,d,e,f;b=E(Bd,3);c=b.data;d=IP(a).data;e=new R;U(e);f=P(I(I(e,B(38)),Tr.data[d[0]].data[d[1]]));e=new R;U(e);e=P(I(I(e,f),B(53)));f=new R;U(f);c[0]=P(I(I(f,e),Tr.data[d[2]].data[d[3]]));f=new R;U(f);c[1]=P(I(Bl(f,Ej(Tj,Tr.data[d[0]].data[d[1]])),B(38)));f=new R;U(f);c[2]=P(I(Bl(f,Ej(Tj,Tr.data[d[2]].data[d[3]])),B(38)));return b;}
function Gu(){}
function Hm(){}
function Hh(){}
function Ff(){}
function F7(){}
function FZ(){}
function D$(){}
function Iq(){C.call(this);}
function Lb(a,b,c){a.hA($rt_str(b),DZ(c,"handleEvent"));}
function Lw(a,b,c){a.jc($rt_str(b),DZ(c,"handleEvent"));}
function Mz(a,b){return a.f2(b);}
function MI(a,b,c,d){a.hL($rt_str(b),DZ(c,"handleEvent"),d?1:0);}
function QC(a,b){return !!a.hI(b);}
function NN(a){return a.fZ();}
function Ly(a,b,c,d){a.km($rt_str(b),DZ(c,"handleEvent"),d?1:0);}
function DW(){C.call(this);}
var S$=0;var S9=null;function DJ(){var b,$$je;if(S$)return;S$=1;a:{try{b=Cr(S9);while(CF(b)){HQ(Cs(b));}}catch($$e){$$je=Cv($$e);b=$$je;break a;}S$=0;return;}S$=0;J(b);}
function IG(){S9=D0();}
function IE(){C.call(this);}
function It(b,c){var d,e,f,g;b=b.data;d=$rt_createCharArray(c);e=d.data;f=Bv(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Kd(b,c){var d,e,f,g;b=b.data;d=$rt_createByteArray(c);e=d.data;f=Bv(c,b.length);g=0;while(g<f){e[g]=b[g];g=g+1|0;}return d;}
function Ky(b,c){var d,e,f,g;d=b.data;e=I1(C7(B_(b)),c);f=Bv(c,d.length);g=0;while(g<f){e.data[g]=d[g];g=g+1|0;}return e;}
function D3(b,c){var d,e,f,g;b=b.data;d=0;e=b.length;if(d>e){f=new BJ;V(f);J(f);}while(d<e){g=d+1|0;b[d]=c;d=g;}}
function CC(){var a=this;C.call(a);a.bv=null;a.bc=null;a.T=null;}
function Mo(a){return a.bv;}
function Ry(a){return a.T;}
function IJ(a){var b,c;if(a.bv===null)return;HV(a);b=a.bc;if(b!==null)b=b.bc;else a.bv.b5=a.T;c=a.T;if(c!==null)c=c.T;else a.bv.bc=a.bc;if(b!==null)b.T=c;if(c!==null)c.bc=b;a.T=c;a.bc=b;}
function JF(a){while(a.bv!==null){a=a.bv;}return !(a instanceof Eh)?null:a;}
function CR(){var a=this;CC.call(a);a.b5=null;a.cg=null;}
function Cc(a,b){JM(a,b,null);}
function JM(a,b,c){var d,e,f,g,h;if(b.bv!==null){b=new BJ;Bn(b,B(54));J(b);}if(c!==null&&c.fJ()!==a){b=new BJ;Bn(b,B(55));J(b);}b.bv=a;if(c===null){b.bc=a.cg;if(a.cg===null)a.b5=b;else a.cg.T=b;a.cg=b;}else{b.T=c;b.bc=c.bc;if(b.T===null)a.cg=b;else b.T.bc=b;if(b.bc===null)a.b5=b;else b.bc.T=b;}d=JF(a);if(d===null)return;e=new Array();b.c3(e);if(!e.length)return;a:{if(c!==null)f=c.cN();else{f=null;while(a!==null){if(a.T!==null){f=a.T.cN();break a;}a=a.bv;}}}g=0;while(g<e.length){c=d.eq;h=e[g];c.insertBefore(h,
f);g=g+1|0;}}
function Qw(a){var b,c;b=a.b5;while(true){if(b===null)return null;c=b.cN();if(c!==null)break;b=b.T;}return c;}
function Ni(a,b){var c;c=a.b5;while(c!==null){c.c3(b);c=c.T;}}
function IO(){return new GJ;}
function Gw(b){var c;c=new Eh;c.eq=b;return c;}
function Dx(){}
function Fu(){}
function B8(){C.call(this);this.bH=null;}
function Ts(a){var b=new B8();En(b,a);return b;}
function En(a,b){a.bH=b;}
function Oi(a){return a.bH;}
function GB(){B8.call(this);this.fh=null;}
function HQ(a){Ig(a.fh);}
function Ii(){C.call(this);}
function IY(b){if (b === null || b.constructor.$meta.item === undefined) {$rt_throw(Tt());}return b.data.length;}
function I1(b,c){if(b===null){b=new CE;V(b);J(b);}if(b===D($rt_voidcls())){b=new BJ;V(b);J(b);}if(c>=0)return QK(b.bQ,c);b=new HR;V(b);J(b);}
function QK(b,c){if (b.$meta.primitive) {if (b == $rt_bytecls()) {return $rt_createByteArray(c);}if (b == $rt_shortcls()) {return $rt_createShortArray(c);}if (b == $rt_charcls()) {return $rt_createCharArray(c);}if (b == $rt_intcls()) {return $rt_createIntArray(c);}if (b == $rt_longcls()) {return $rt_createLongArray(c);}if (b == $rt_floatcls()) {return $rt_createFloatArray(c);}if (b == $rt_doublecls()) {return $rt_createDoubleArray(c);}if (b == $rt_booleancls()) {return $rt_createBooleanArray(c);}} else {return $rt_createArray(b, c)}}
function Eh(){CR.call(this);this.eq=null;}
function BJ(){Bh.call(this);}
function BG(){BJ.call(this);}
function CE(){Bh.call(this);}
function HR(){Bh.call(this);}
function Ji(){C.call(this);}
function IT(){C.call(this);}
function Ez(b){if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;}
function RS(b){var c,d,e,f,g,h,i,j,k,l,m,n,o;c=E(Fa,16384);d=c.data;e=$rt_createByteArray(16384);f=e.data;g=0;h=0;i=0;j=0;while(j<L(b)){k=Ez(G(b,j));if(k==64){j=j+1|0;k=Ez(G(b,j));l=0;m=1;n=0;while(n<3){j=j+1|0;l=l|Df(m,Ez(G(b,j)));m=m*64|0;n=n+1|0;}}else if(k<32)l=1;else{k=(k-32|0)<<24>>24;j=j+1|0;l=Ez(G(b,j));}if(!k&&l>=128){if(g>0){m=h+1|0;d[h]=PB(i,i+g|0,Kd(e,g));h=m;}i=i+(g+l|0)|0;g=0;}else{o=g+l|0;if(o<f.length)n=h;else{n=h+1|0;d[h]=PB(i,i+g|0,Kd(e,g));i=i+o|0;g=0;}while(true){m=l+(-1)|0;if(l<=0)break;o
=g+1|0;f[g]=k;g=o;l=m;}h=n;}j=j+1|0;}return Ky(c,h);}
function Gm(){var a=this;C.call(a);a.em=null;a.fi=0;}
function Ke(){C.call(this);}
function If(b){var c,d,e,f,g,h;c=0;d=1;while(true){e=b.em.data;f=b.fi;b.fi=f+1|0;f=e[f];g=f<34?f-32|0:f>=92?(f-32|0)-2|0:(f-32|0)-1|0;h=(g%2|0)!=1?0:1;c=c+Df(d,g/2|0)|0;d=d*46|0;if(!h)break;}h=c/2|0;if(c%2|0)h= -h;return h;}
function KI(){C.call(this);}
function K5(b,c){b=new Fe;b.eR=c;c=new Fg;c.eo=b;return c;}
function Eo(){}
function Fe(){C.call(this);this.eR=null;}
function IZ(a){var b,c;b=a.eR;c=new GP;c.eF=b;b=new E0;c=c;En(b,IO());b.dU=c;return b;}
function Fg(){C.call(this);this.eo=null;}
function KH(a){return IZ(a.eo);}
function CQ(){C.call(this);}
var Tr=null;var Tj=null;var S_=null;var Tk=null;function Ia(){var b,c,d,e,f,g,h;b=E($rt_arraycls(Bd),5);c=b.data;d=E(Bd,5);e=d.data;e[0]=B(56);e[1]=B(57);e[2]=B(58);e[3]=B(59);e[4]=B(56);c[0]=d;d=E(Bd,5);e=d.data;e[0]=B(57);e[1]=B(60);e[2]=B(61);e[3]=B(59);e[4]=B(60);c[1]=d;d=E(Bd,5);e=d.data;e[0]=B(58);e[1]=B(61);e[2]=B(62);e[3]=B(59);e[4]=B(62);c[2]=d;d=E(Bd,5);e=d.data;e[0]=B(59);e[1]=B(59);e[2]=B(59);e[3]=B(59);e[4]=B(63);c[3]=d;d=E(Bd,5);e=d.data;e[0]=B(56);e[1]=B(60);e[2]=B(62);e[3]=B(63);e[4]=B(64);c[4]
=d;Tr=b;f=new Ft;b=E(Bd,9);d=b.data;d[0]=B(56);d[1]=B(57);d[2]=B(60);d[3]=B(61);d[4]=B(62);d[5]=B(58);d[6]=B(64);d[7]=B(59);d[8]=B(63);g=new E_;g.dJ=b;EV(f,IA(g));g=Cr(g);h=0;while(h<f.L.data.length){f.L.data[h]=Cs(g);h=h+1|0;}f.y=f.L.data.length;Tj=f;b=$rt_createIntArray(9);d=b.data;d[0]=3;d[1]=5;d[2]=3;d[3]=5;d[4]=3;d[5]=5;d[6]=7;d[7]=2;d[8]=9;S_=b;b=E($rt_arraycls($rt_intcls()),9);c=b.data;d=$rt_createIntArray(2);e=d.data;e[0]=0;e[1]=0;c[0]=d;d=$rt_createIntArray(2);e=d.data;e[0]=1;e[1]=0;c[1]=d;d=$rt_createIntArray(2);e
=d.data;e[0]=1;e[1]=1;c[2]=d;d=$rt_createIntArray(2);e=d.data;e[0]=2;e[1]=1;c[3]=d;d=$rt_createIntArray(2);e=d.data;e[0]=2;e[1]=2;c[4]=d;d=$rt_createIntArray(2);e=d.data;e[0]=0;e[1]=2;c[5]=d;d=$rt_createIntArray(2);e=d.data;e[0]=4;e[1]=4;c[6]=d;d=$rt_createIntArray(2);e=d.data;e[0]=3;e[1]=3;c[7]=d;d=$rt_createIntArray(2);e=d.data;e[0]=4;e[1]=3;c[8]=d;Tk=b;}
function JV(){C.call(this);}
function Rv(a,b){return a.f2(b);}
function NK(a){return a.fZ();}
function E_(){CK.call(this);this.dJ=null;}
function K6(a,b){return a.dJ.data[b];}
function IA(a){return a.dJ.data.length;}
function Gp(){}
function Fh(){var a=this;C.call(a);a.cS=0;a.e6=0;a.e9=0;a.d0=0;a.ca=null;}
function CF(a){return a.cS>=a.e9?0:1;}
function Cs(a){var b,c;if(a.e6<a.ca.bD){b=new GW;V(b);J(b);}a.d0=a.cS;b=a.ca;c=a.cS;a.cS=c+1|0;return b.d2(c);}
function Hd(){}
function GP(){C.call(this);this.eF=null;}
function LQ(a){return;}
function Kg(a,b){var c,d,e,f;c=a.eF;b=b;d=B9(B3(Bp(BO(Bp(B3(Bp(B3(Bp(b,B(65)),B(66)),B(67)),B(68)),B(69))),B(67)),B(70)),B(71),B(72));e=new Fj;e.ef=c;d=B9(B3(Bp(BO(DG(d,e)),B(67)),B(70)),B(71),B(72));e=new Fk;e.ey=c;d=B9(B3(Bp(BO(DG(d,e)),B(67)),B(70)),B(71),B(72));e=new Fl;e.e2=c;BO(DG(d,e));d=B3(Bp(b,B(67)),B(73));e=new Fm;e.fn=c;d=B9(B9(B9(Ku(Bp(BO(Bp(B9(B3(Bp(B3(Bp(BO(Bp(BO(Bp(DG(d,e),B(74))),B(75))),B(65)),B(66)),B(67)),B(68)),B(76),B(77)),B(78))),B(79)),B(80)),B(81),B(77)),B(82),B(83)),B(84),B(85));e=
IO();f=new F2;En(f,e);e=f;f=new Hr;f.en=c;e.dr=f;BO(J8(d,e));BO(Bp(b,B(75)));}
function E0(){var a=this;B8.call(a);a.dU=null;a.dh=null;}
function Ig(a){var b,c,d;if(a.dh===null){b=new Ea;c=a.bH;So();d=new FP;d.S=E(C,9);b.bd=d;b.cq=D0();b.dy=c;Kg(a.dU,b);a.dh=b.cq;}b=Cr(a.dh);while(CF(b)){Cs(b).b7();}}
function GJ(){CR.call(this);}
function Ea(){var a=this;C.call(a);a.dy=null;a.bd=null;a.cq=null;}
var Tu=null;function So(){So=BU(Ea);L7();}
function B3(a,b){return GC(a,b,0);}
function Ku(a,b){return GC(a,b,1);}
function GC(a,b,c){var d,e;d=Tu.createElement($rt_ustr(b));e=new GI;e.bE=d;if(c)e.cs=Gw(d);G4(a.bd,e);return a;}
function BO(a){G_(a,G3(a.bd).bE);return a;}
function Bp(a,b){G_(a,Tu.createTextNode($rt_ustr(b)));return a;}
function B9(a,b,c){if(CI(a.bd)){b=new Dc;Bn(b,B(86));J(b);}C2(a.bd).bE.setAttribute($rt_ustr(b),$rt_ustr(c));return a;}
function J8(a,b){var c;if(CI(a.bd))Cc(a.dy,b.bH);else{c=C2(a.bd);if(c.cs!==null)Cc(c.cs,b.bH);else Cc(Gw(c.bE),b.bH);}J2(b);Bz(a.cq,b);return a;}
function DG(a,b){var c;if(CI(a.bd)){c=new Dc;Bn(c,B(87));J(c);}c=b.cI(C2(a.bd));Bz(a.cq,c);return a;}
function G_(a,b){var c;if(CI(a.bd))Cc(a.dy,RO(b));else{c=C2(a.bd);if(c.cs!==null)Cc(c.cs,RO(b));else c.bE.appendChild(b);}}
function K7(a){return a.cq;}
function L7(){Tu=window.document;}
function GW(){Bh.call(this);}
function EP(){}
function Hy(){}
function FP(){var a=this;CB.call(a);a.cA=0;a.S=null;a.F=0;a.bu=0;}
function G4(a,b){var c,d,e,f,g,h;if(b===null){b=new CE;V(b);J(b);}c=In(a)+1|0;if(c>=a.S.data.length){c=BR(a.S.data.length*2|0,((c*3|0)/2|0)+1|0);if(c<1)c=2147483647;d=E(C,c);e=0;if(a.F<=a.bu){f=d.data;c=a.F;while(c<a.bu){g=e+1|0;f[e]=a.S.data[c];c=c+1|0;e=g;}}else{f=d.data;h=a.F;while(h<a.S.data.length){c=e+1|0;f[e]=a.S.data[h];h=h+1|0;e=c;}c=0;while(c<a.bu){g=e+1|0;f[e]=a.S.data[c];c=c+1|0;e=g;}}a.F=0;a.bu=e;a.S=d;}a.F=a.F-1|0;if(a.F<0)a.F=a.F+a.S.data.length|0;a.S.data[a.F]=b;a.cA=a.cA+1|0;}
function G3(a){var b;b=KL(a);if(b!==null)return b;b=new HP;V(b);J(b);}
function KL(a){var b;if(a.F==a.bu)return null;b=a.S.data[a.F];a.S.data[a.F]=null;a.F=a.F+1|0;if(a.F>=a.S.data.length)a.F=0;a.cA=a.cA+1|0;return b;}
function C2(a){return CI(a)?null:a.S.data[a.F];}
function NJ(a){return C2(a);}
function RG(a,b){G4(a,b);}
function Os(a){return G3(a);}
function In(a){return a.bu>=a.F?a.bu-a.F|0:(a.S.data.length-a.F|0)+a.bu|0;}
function CI(a){return a.F!=a.bu?0:1;}
function C5(){}
function Fj(){C.call(this);this.ef=null;}
function LB(a,b){var c,d;c=a.ef;b=Kc(b);d=new Hu;d.eg=c;b.ci=d;d=new Gh;d.et=c;b.cj=d;return b;}
function Fk(){C.call(this);this.ey=null;}
function Qu(a,b){var c,d;c=a.ey;b=Kc(b);d=new Ht;d.fr=c;b.ci=d;d=new Gi;d.eS=c;b.cj=d;return b;}
function Fl(){C.call(this);this.e2=null;}
function ND(a,b){var c,d;c=a.e2;b=Kc(b);d=new Hs;d.eZ=c;b.ci=d;d=new Gj;d.fj=c;b.cj=d;return b;}
function Fm(){C.call(this);this.fn=null;}
function OC(a,b){var c,d,e;c=a.fn;b=b;d=new GG;b=b;e=new Hk;e.dQ=d;d.eV=e;d.eQ=Fo(b);b=d;d=new HC;d.ep=c;J1(b,d);b.cE=B(88);return b;}
function F2(){var a=this;B8.call(a);a.dr=null;a.cm=null;a.fo=null;a.d3=0;}
function L4(a,b){a.dr=b;}
function J2(a){var b,c,d;b=IW(a.dr);if(a.d3&&IF(a.fo,b))return;a.d3=1;a.fo=b;if(a.cm!==null){IJ(a.cm);a.cm=null;}c=new F0;d=window.document;b=Gt(b);KP(c,d.createTextNode($rt_ustr(b)));a.cm=c;Cc(a.bH,a.cm);}
function CA(){}
function Hr(){C.call(this);this.en=null;}
function IW(a){return a.en.cG;}
function Fz(){}
function GI(){var a=this;C.call(a);a.bE=null;a.cs=null;a.bn=null;a.eC=null;}
function Fo(a){return a.bE;}
function HY(a,b){var c,d;if(a.bn!==null){if(PE(a.bn,C8))Bz(a.bn,b);else{c=PM(2);Bz(c,a.bn);Bz(c,b);a.bn=c;}}else{a.bn=b;d=a.bE;b=new GN;b.el=a;a.eC=b;c=a.eC;d.addEventListener("change",H9(c,"handleEvent"));}}
function JR(a){return $rt_str(a.bE.value);}
function F0(){CC.call(this);this.cC=null;}
function RO(a){var b=new F0();KP(b,a);return b;}
function KP(a,b){a.cC=b;}
function RR(a){return a.cC;}
function QH(a,b){var c;c=a.cC;b.push(c);}
function HV(a){var b;b=a.cC;if(b.parentNode!==null)b.parentNode.removeChild(b);}
function Dc(){Ca.call(this);}
function Ib(){var a=this;C.call(a);a.eH=null;a.e0=null;a.ci=null;a.ew=null;a.cj=null;a.dT=0;}
function Kc(a){var b=new Ib();Mw(b,a);return b;}
function Mw(a,b){a.eH=b;a.e0=Fo(b);}
function Pa(a,b){a.ci=b;}
function Ol(a,b){a.cj=b;}
function LO(a){var b,c;b=a.ci.cV();if(!IF(b,a.ew)){a.ew=b;c=a.e0;b=$rt_ustr(Gt(b));c.value=b;}if(!a.dT){a.dT=1;HY(a.eH,a.cj);}}
function Hu(){C.call(this);this.eg=null;}
function OT(a){return a.eg.bJ;}
function C6(){}
function Gh(){C.call(this);this.et=null;}
function OX(a,b){var c,d;c=a.et;d=E(C,1).data;d[0]=b;c.bJ=d[0];DJ();}
function Ht(){C.call(this);this.fr=null;}
function Oj(a){return a.fr.J;}
function Gi(){C.call(this);this.eS=null;}
function Ma(a,b){var c,d;c=a.eS;d=E(C,1).data;d[0]=b;c.J=d[0];DJ();}
function Hs(){C.call(this);this.eZ=null;}
function NW(a){return a.eZ.bq;}
function Gj(){C.call(this);this.fj=null;}
function Ru(a,b){var c,d;c=a.fj;d=E(C,1).data;d[0]=b;c.bq=d[0];DJ();}
function Er(){var a=this;C.call(a);a.eQ=null;a.cE=null;a.dW=null;a.eI=0;a.eV=null;}
function OP(a,b){a.cE=b;}
function J1(a,b){var c;B_(b);c=new GH;c.ex=b;a.dW=c;}
function Lr(a){var b,c,d;if(!a.eI){a.eI=1;b=a.eQ;c=a.cE;d=a.eV;b.addEventListener($rt_ustr(c),H9(d,"handleEvent"));}}
function GG(){Er.call(this);}
function GK(){}
function HC(){C.call(this);this.ep=null;}
function Jd(a,b){KW(a.ep);DJ();}
function HP(){Bh.call(this);}
function Dw(){}
function Hk(){C.call(this);this.dQ=null;}
function Jo(a,b){var c;c=a.dQ;c.dW.handleEvent(b);if(Bf(c.cE,B(89)))b.preventDefault();}
function N0(a,b){Jo(a,b);}
function JS(){C.call(this);}
function IF(b,c){if(b===c)return 1;return b!==null?Bf(b,c):c!==null?0:1;}
function GH(){C.call(this);this.ex=null;}
function H_(a,b){Jd(a.ex,b);}
function Mq(a,b){H_(a,b);}
function GN(){C.call(this);this.el=null;}
function KK(a,b){var c;b=a.el;c=JR(b);if(b.bn!==null){if(!PE(b.bn,C8))b.bn.cL(c);else{b=Cr(b.bn);while(CF(b)){Cs(b).cL(c);}}}}
function Oo(a,b){KK(a,b);}
function JH(){C.call(this);}
function Hb(){var a=this;C.call(a);a.b=null;a.X=0;a.dl=null;a.ea=0;a.bo=0;a.bB=0;a.D=0;a.c1=null;}
function J5(a,b){var c,d,e,f,g,h,i,j;c=new EK;c.cM=(-1);c.cO=(-1);c.f4=a;c.eO=a.c1;c.ct=b;c.cM=0;c.cO=L(c.ct);d=new Gl;e=c.cM;f=c.cO;g=a.bo;h=JY(a);i=IH(a);d.bN=(-1);j=g+1|0;d.eA=j;d.ba=$rt_createIntArray(j*2|0);d.cl=$rt_createIntArray(i);D3(d.cl,(-1));if(h>0)d.dL=$rt_createIntArray(h);D3(d.ba,(-1));Hx(d,b,e,f);c.G=d;return c;}
function Im(a,b,c){var d,e,f,g,h,i;d=D0();e=J5(a,b);f=0;g=0;if(!L(b)){h=E(Bd,1);h.data[0]=B(38);return h;}while(J3(e)){i=f+1|0;if(i>=c&&c>0)break;Bz(d,Cf(b,g,Kz(e)));g=JE(e);f=i;}a:{Bz(d,Cf(b,g,L(b)));f=f+1|0;if(!c)while(true){f=f+(-1)|0;if(f<0)break;if(L(Bj(d,f)))break a;Ec(d,f);}}if(f<0)f=0;return JB(d,E(Bd,f));}
function Il(a,b){return Im(a,b,0);}
function Ed(a){return a.b.M;}
function HI(a,b,c,d){var e,f,g,h,i;e=D0();f=a.X;g=0;if(c!=a.X)a.X=c;a:{switch(b){case -1073741784:h=new HE;c=a.D+1|0;a.D=c;Ct(h,c);break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new GF;c=a.D+1|0;a.D=c;Ct(h,c);break a;case -33554392:h=new EZ;c=a.D+1|0;a.D=c;Ct(h,c);break a;default:a.bo=a.bo+1|0;if(d!==null)h=Sq(a.bo);else{h=new Ci;Ct(h,0);g=1;}if(a.bo<=(-1))break a;if(a.bo>=10)break a;a.dl.data[a.bo]=h;break a;}h=new HB;Ct(h,(-1));}while(true){if(Cd(a.b)&&a.b.d==(-536870788)){d
=Qh(Be(a,2),Be(a,64));while(!BD(a.b)&&Cd(a.b)&&!(a.b.d&&a.b.d!=(-536870788)&&a.b.d!=(-536870871))){Bk(d,N(a.b));if(a.b.w!=(-536870788))continue;N(a.b);}i=ED(a,d);i.r(h);}else if(a.b.w==(-536870788)){i=CN(h);N(a.b);}else{i=Gf(a,h);if(a.b.w==(-536870788))N(a.b);}if(i!==null)Bz(e,i);if(BD(a.b))break;if(a.b.w==(-536870871))break;}if(a.b.cP==(-536870788))Bz(e,CN(h));if(a.X!=f&&!g){a.X=f;IS(a.b,a.X);}switch(b){case -1073741784:break;case -536870872:d=new ES;Cj(d,e,h);return d;case -268435416:d=new GL;Cj(d,e,h);return d;case -134217688:d
=new He;Cj(d,e,h);return d;case -67108824:d=new Fd;Cj(d,e,h);return d;case -33554392:d=new BN;Cj(d,e,h);return d;default:switch(e.y){case 0:break;case 1:return Sf(Bj(e,0),h);default:return SW(e,h);}return CN(h);}d=new DI;Cj(d,e,h);return d;}
function Jm(a){var b,c,d,e,f,g;b=$rt_createIntArray(4);c=(-1);d=(-1);if(!BD(a.b)&&Cd(a.b)){e=b.data;c=N(a.b);e[0]=c;d=c-4352|0;}if(d>=0&&d<19){e=$rt_createCharArray(3);b=e.data;b[0]=c&65535;f=a.b.w;c=f-4449|0;if(c>=0&&c<21){b[1]=f&65535;N(a.b);f=a.b.w;d=f-4519|0;if(d>=0&&d<28){b[2]=f&65535;N(a.b);return P4(e,3);}return P4(e,2);}if(!Be(a,2))return Jl(b[0]);if(Be(a,64))return N2(b[0]);return NG(b[0]);}e=b.data;c=1;while(c<4&&!BD(a.b)&&Cd(a.b)){f=c+1|0;e[c]=N(a.b);c=f;}if(c==1){f=e[0];if(!(Tv.gf(f)==Tw?0:1))return Hw(a,
e[0]);}if(!Be(a,2))return SZ(b,c);if(Be(a,64)){g=new Hn;Fx(g,b,c);return g;}g=new Fs;Fx(g,b,c);return g;}
function Gf(a,b){var c,d,e,f;if(Cd(a.b)&&!D6(a.b)&&Ek(a.b.d)){if(Be(a,128)){c=Jm(a);if(!BD(a.b)&&!(a.b.w==(-536870871)&&!(b instanceof Ci))&&a.b.w!=(-536870788)&&!Cd(a.b))c=Ew(a,b,c);}else if(!FB(a.b)&&!Go(a.b)){d=new FC;U(d);while(!BD(a.b)&&Cd(a.b)&&!FB(a.b)&&!Go(a.b)&&!(!(!D6(a.b)&&!a.b.d)&&!(!D6(a.b)&&Ek(a.b.d))&&a.b.d!=(-536870871)&&(a.b.d&(-2147418113))!=(-2147483608)&&a.b.d!=(-536870788)&&a.b.d!=(-536870876))){e=N(a.b);if(!Em(e))BS(d,e&65535);else Cl(d,CY(e));}if(!Be(a,2))c=SQ(d);else if(Be(a,64))c=SX(d);else
{c=new E$;BI(c);c.cu=P(d);c.E=EB(d);}}else c=Ew(a,b,Hl(a,b));}else if(a.b.w!=(-536870871))c=Ew(a,b,Hl(a,b));else{if(b instanceof Ci)J(Bb(B(38),a.b.M,a.b.bt));c=CN(b);}if(!BD(a.b)&&!(a.b.w==(-536870871)&&!(b instanceof Ci))&&a.b.w!=(-536870788)){f=Gf(a,b);if(c instanceof By&&!(c instanceof Ch)&&!(c instanceof Br)&&!(c instanceof B6)){b=c;if(!f.I(b.k)){c=new GU;B$(c,b.k,b.c,b.ce);c.k.r(c);}}if((f.ch()&65535)!=43)c.r(f);else c.r(f.k);}else{if(c===null)return null;c.r(b);}if((c.ch()&65535)!=43)return c;return c.k;}
function Ew(a,b,c){var d,e,f,g;d=a.b.w;if(c!==null&&!(c instanceof Ba)){switch(d){case -2147483606:N(a.b);e=new HS;BC(e,c,b,d);c.r(Tx);return e;case -2147483605:N(a.b);e=new GD;BC(e,c,b,(-2147483606));c.r(Tx);return e;case -2147483585:N(a.b);e=new Gn;BC(e,c,b,(-536870849));c.r(Tx);return e;case -2147483525:e=new E8;f=Co(a.b);d=a.bB+1|0;a.bB=d;DR(e,f,c,b,(-536870849),d);c.r(Tx);return e;case -1073741782:case -1073741781:N(a.b);f=new Hp;BC(f,c,b,d);c.r(f);return f;case -1073741761:N(a.b);f=new GY;BC(f,c,b,(-536870849));c.r(b);return f;case -1073741701:f
=new F_;e=Co(a.b);g=a.bB+1|0;a.bB=g;DR(f,e,c,b,(-536870849),g);c.r(f);return f;case -536870870:case -536870869:N(a.b);if(c.ch()!=(-2147483602)){f=new Br;BC(f,c,b,d);}else if(Be(a,32)){f=new Hq;BC(f,c,b,d);}else{f=new FG;e=Gq(a.X);BC(f,c,b,d);f.dw=e;}c.r(f);return f;case -536870849:N(a.b);f=new Cw;BC(f,c,b,(-536870849));c.r(b);return f;case -536870789:f=new Cp;e=Co(a.b);g=a.bB+1|0;a.bB=g;DR(f,e,c,b,(-536870849),g);c.r(f);return f;default:}return c;}e=null;if(c!==null)e=c;switch(d){case -2147483606:case -2147483605:N(a.b);f
=new HT;B$(f,e,b,d);e.c=f;return f;case -2147483585:N(a.b);c=new GR;B$(c,e,b,(-2147483585));return c;case -2147483525:c=new Ge;HO(c,Co(a.b),e,b,(-2147483525));return c;case -1073741782:case -1073741781:N(a.b);f=new GX;B$(f,e,b,d);e.c=f;return f;case -1073741761:N(a.b);c=new Fy;B$(c,e,b,(-1073741761));return c;case -1073741701:c=new Hf;HO(c,Co(a.b),e,b,(-1073741701));return c;case -536870870:case -536870869:N(a.b);f=Sl(e,b,d);e.c=f;return f;case -536870849:N(a.b);c=new B6;B$(c,e,b,(-536870849));return c;case -536870789:return Su(Co(a.b),
e,b,(-536870789));default:}return c;}
function Hl(a,b){var c,d,e,f,g,h,i;c=null;d=b instanceof Ci;while(true){a:{e=DK(a.b);if((e&(-2147418113))==(-2147483608)){N(a.b);f=(e&16711680)>>16;e=e&(-16711681);if(e==(-16777176))a.X=f;else{if(e!=(-1073741784))f=a.X;c=HI(a,e,f,b);if(DK(a.b)!=(-536870871))J(Bb(B(38),BL(a.b),CL(a.b)));N(a.b);}}else{b:{c:{switch(e){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:g=(e&2147483647)-48|0;if(a.bo<g)J(Bb(B(38),
BL(a.b),CL(a.b)));N(a.b);a.D=a.D+1|0;c=!Be(a,2)?R9(g,a.D):Be(a,64)?SK(g,a.D):ST(g,a.D);a.dl.data[g].dj=1;a.ea=1;break a;case -2147483583:break;case -2147483582:N(a.b);c=PN(0);break a;case -2147483577:N(a.b);c=Sv();break a;case -2147483558:N(a.b);c=new Ha;g=a.D+1|0;a.D=g;JN(c,g);break a;case -2147483550:N(a.b);c=PN(1);break a;case -2147483526:N(a.b);c=SC();break a;case -536870876:break c;case -536870866:N(a.b);if(Be(a,32)){c=SN();break a;}c=Sp(Gq(a.X));break a;case -536870821:N(a.b);h=0;if(DK(a.b)==(-536870818))
{h=1;N(a.b);}c=Ir(a,h,b);if(DK(a.b)!=(-536870819))J(Bb(B(38),BL(a.b),CL(a.b)));F4(a.b,1);N(a.b);break a;case -536870818:N(a.b);a.D=a.D+1|0;if(!Be(a,8)){c=PZ();break a;}c=SD(Gq(a.X));break a;case 0:i=Gy(a.b);if(i!==null)c=ED(a,i);else{if(BD(a.b)){c=CN(b);break a;}c=Jl(e&65535);}N(a.b);break a;default:break b;}N(a.b);c=PZ();break a;}N(a.b);a.D=a.D+1|0;if(Be(a,8)){if(Be(a,1)){c=SL(a.D);break a;}c=R6(a.D);break a;}if(Be(a,1)){c=RZ(a.D);break a;}c=Sr(a.D);break a;}if(e>=0&&!CO(a.b)){c=Hw(a,e);N(a.b);}else if(e==
(-536870788))c=CN(b);else{if(e!=(-536870871))J(Bb(!CO(a.b)?G$(e&65535):Gy(a.b).bf(),BL(a.b),CL(a.b)));if(d)J(Bb(B(38),BL(a.b),CL(a.b)));c=CN(b);}}}if(e!=(-16777176))break;}return c;}
function Ir(a,b,c){var d;d=ED(a,CJ(a,b));d.r(c);return d;}
function CJ(a,b){var c,d,e,f,g,h,i,j,$$je;c=Qh(Be(a,2),Be(a,64));B0(c,b);d=(-1);e=0;f=0;g=1;a:{b:{c:while(true){if(BD(a.b))break a;f=a.b.w==(-536870819)&&!g?0:1;if(!f)break a;d:{switch(a.b.w){case -536870874:if(d>=0)Bk(c,d);d=N(a.b);if(a.b.w!=(-536870874)){d=38;break d;}if(a.b.d==(-536870821)){N(a.b);e=1;d=(-1);break d;}N(a.b);if(g){c=CJ(a,0);break d;}if(a.b.w==(-536870819))break d;G6(c,CJ(a,0));break d;case -536870867:if(!g&&a.b.d!=(-536870819)&&a.b.d!=(-536870821)&&d>=0){N(a.b);h=a.b.w;if(CO(a.b))break c;if
(h<0&&a.b.d!=(-536870819)&&a.b.d!=(-536870821)&&d>=0)break c;e:{try{if(Ek(h))break e;h=h&65535;break e;}catch($$e){$$je=Cv($$e);if($$je instanceof Ca){break b;}else{throw $$e;}}}try{Y(c,d,h);}catch($$e){$$je=Cv($$e);if($$je instanceof Ca){break b;}else{throw $$e;}}N(a.b);d=(-1);break d;}if(d>=0)Bk(c,d);d=45;N(a.b);break d;case -536870821:if(d>=0){Bk(c,d);d=(-1);}N(a.b);i=0;if(a.b.w==(-536870818)){N(a.b);i=1;}if(!e)H3(c,CJ(a,i));else G6(c,CJ(a,i));e=0;N(a.b);break d;case -536870819:if(d>=0)Bk(c,d);d=93;N(a.b);break d;case -536870818:if
(d>=0)Bk(c,d);d=94;N(a.b);break d;case 0:if(d>=0)Bk(c,d);j=a.b.bO;if(j===null)d=0;else{KV(c,j);d=(-1);}N(a.b);break d;default:}if(d>=0)Bk(c,d);d=N(a.b);}g=0;}J(Bb(B(38),Ed(a),a.b.bt));}J(Bb(B(38),Ed(a),a.b.bt));}if(!f){if(d>=0)Bk(c,d);return c;}J(Bb(B(38),Ed(a),a.b.bt-1|0));}
function Hw(a,b){var c,d,e;c=Em(b);if(Be(a,2)){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}return NG(b&65535);}if(Be(a,64)&&b>128){if(c){d=new EO;BI(d);d.E=2;d.fk=CD(Cz(b));return d;}if(F$(b))return Ms(b&65535);if(!EM(b))return N2(b&65535);return QS(b&65535);}}if(!c){if(F$(b))return Ms(b&65535);if(!EM(b))return Jl(b&65535);return QS(b&65535);}d=new BQ;BI(d);d.E=2;d.bK=b;e=CY(b).data;d.cW=e[0];d.cJ=e[1];return d;}
function ED(a,b){var c,d,e;if(!H8(b)){if(!b.q){if(b.cd())return Qn(b);return PO(b);}if(!b.cd())return Rj(b);c=new DS;FF(c,b);return c;}c=Iz(b);d=new EX;X(d);d.eW=c;d.fH=c.s;if(!b.q){if(b.cd())return IM(Qn(Dn(b)),d);return IM(PO(Dn(b)),d);}if(!b.cd())return IM(Rj(Dn(b)),d);c=new GQ;e=new DS;FF(e,Dn(b));KE(c,e,d);return c;}
function LS(a){return a.bo;}
function JY(a){return a.bB+1|0;}
function IH(a){return a.D+1|0;}
function Dp(b){if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;}
function Be(a,b){return (a.X&b)!=b?0:1;}
function Q(){var a=this;C.call(a);a.c=null;a.N=0;a.eD=null;a.ce=0;}
var Tb=0;function Ty(){var a=new Q();X(a);return a;}
function Tz(a){var b=new Q();EC(b,a);return b;}
function X(a){var b,c;b=new Dv;c=Tb;Tb=c+1|0;Ef(b,c);a.eD=Ep(b);}
function EC(a,b){var c,d;c=new Dv;d=Tb;Tb=d+1|0;Ef(c,d);a.eD=Ep(c);a.c=b;}
function Ds(a,b,c,d){var e;e=d.i;while(true){if(b>e)return (-1);if(a.a(b,c,d)>=0)break;b=b+1|0;}return b;}
function Dz(a,b,c,d,e){while(true){if(c<b)return (-1);if(a.a(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function Ob(a,b){a.ce=b;}
function Nm(a){return a.ce;}
function O_(a){return a.c;}
function P9(a,b){a.c=b;}
function P8(a,b){return 1;}
function Q1(a){return null;}
function DP(a){var b;a.N=1;if(a.c!==null){if(!a.c.N){b=a.c.bL();if(b!==null){a.c.N=1;a.c=b;}a.c.bw();}else if(a.c instanceof C0&&a.c.Z.dj)a.c=a.c.c;}}
function KM(){Tb=1;}
function Bq(){var a=this;Q.call(a);a.dj=0;a.bl=0;}
var Tx=null;function Sq(a){var b=new Bq();Ct(b,a);return b;}
function Ct(a,b){X(a);a.bl=b;}
function ME(a,b,c,d){var e,f;e=Dq(d,a.bl);D2(d,a.bl,b);f=a.c.a(b,c,d);if(f<0)D2(d,a.bl,e);return f;}
function Lx(a){return a.bl;}
function Na(a,b){return 0;}
function JG(){var b;b=new FD;X(b);Tx=b;}
function CH(){var a=this;C.call(a);a.j=null;a.b2=0;a.bk=0;a.eY=0;a.cP=0;a.w=0;a.d=0;a.dY=0;a.bO=null;a.bG=null;a.f=0;a.cp=0;a.bt=0;a.cn=0;a.M=null;}
var TA=null;var Tv=null;var Tw=0;function DK(a){return a.w;}
function F4(a,b){if(b>0&&b<3)a.bk=b;if(b==1){a.d=a.w;a.bG=a.bO;a.f=a.cn;a.cn=a.bt;Cg(a);}}
function IS(a,b){a.b2=b;a.d=a.w;a.bG=a.bO;a.f=a.bt+1|0;a.cn=a.bt;Cg(a);}
function Gy(a){return a.bO;}
function CO(a){return a.bO===null?0:1;}
function D6(a){return a.bG===null?0:1;}
function N(a){Cg(a);return a.cP;}
function Co(a){var b;b=a.bO;Cg(a);return b;}
function My(a){return a.d;}
function Pp(a){return a.cP;}
function Cg(a){var b,c,d,e,f,$$je;a.cP=a.w;a.w=a.d;a.bO=a.bG;a.bt=a.cn;a.cn=a.f;while(true){b=0;a.d=a.f>=a.j.data.length?0:Eb(a);a.bG=null;if(a.bk==4){if(a.d!=92)return;a.d=a.f>=a.j.data.length?0:a.j.data[Z(a)];switch(a.d){case 69:break;default:a.d=92;a.f=a.cp;return;}a.bk=a.eY;a.d=a.f>(a.j.data.length-2|0)?0:Eb(a);}a:{if(a.d!=92){if(a.bk==1)switch(a.d){case 36:a.d=(-536870876);break a;case 40:if(a.j.data[a.f]!=63){a.d=(-2147483608);break a;}Z(a);c=a.j.data[a.f];d=0;while(true){b:{if(d){d=0;switch(c){case 33:break;case 61:a.d
=(-134217688);Z(a);break b;default:J(Bb(B(38),BL(a),a.f));}a.d=(-67108824);Z(a);}else{switch(c){case 33:break;case 60:Z(a);c=a.j.data[a.f];d=1;break b;case 61:a.d=(-536870872);Z(a);break b;case 62:a.d=(-33554392);Z(a);break b;default:a.d=KN(a);if(a.d<256){a.b2=a.d;a.d=a.d<<16;a.d=(-1073741784)|a.d;break b;}a.d=a.d&255;a.b2=a.d;a.d=a.d<<16;a.d=(-16777176)|a.d;break b;}a.d=(-268435416);Z(a);}}if(!d)break;}break a;case 41:a.d=(-536870871);break a;case 42:case 43:case 63:switch(a.f>=a.j.data.length?42:a.j.data[a.f])
{case 43:a.d=a.d|(-2147483648);Z(a);break a;case 63:a.d=a.d|(-1073741824);Z(a);break a;default:}a.d=a.d|(-536870912);break a;case 46:a.d=(-536870866);break a;case 91:a.d=(-536870821);F4(a,2);break a;case 93:if(a.bk!=2)break a;a.d=(-536870819);break a;case 94:a.d=(-536870818);break a;case 123:a.bG=Ka(a,a.d);break a;case 124:a.d=(-536870788);break a;default:}else if(a.bk==2)switch(a.d){case 38:a.d=(-536870874);break a;case 45:a.d=(-536870867);break a;case 91:a.d=(-536870821);break a;case 93:a.d=(-536870819);break a;case 94:a.d
=(-536870818);break a;default:}}else{c=a.f>=(a.j.data.length-2|0)?(-1):Eb(a);c:{a.d=c;switch(a.d){case -1:J(Bb(B(38),BL(a),a.f));case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.d
=Iw(a);break a;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.bk!=1)break a;a.d=(-2147483648)|a.d;break a;case 65:a.d=(-2147483583);break a;case 66:a.d=(-2147483582);break a;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:J(Bb(B(38),BL(a),a.f));case 68:case 83:case 87:case 100:case 115:case 119:a.bG=HN(F8(a.j,
a.cp,1),0);a.d=0;break a;case 71:a.d=(-2147483577);break a;case 80:case 112:break c;case 81:a.eY=a.bk;a.bk=4;b=1;break a;case 90:a.d=(-2147483558);break a;case 97:a.d=7;break a;case 98:a.d=(-2147483550);break a;case 99:if(a.f>=(a.j.data.length-2|0))J(Bb(B(38),BL(a),a.f));a.d=a.j.data[Z(a)]&31;break a;case 101:a.d=27;break a;case 102:a.d=12;break a;case 110:a.d=10;break a;case 114:a.d=13;break a;case 116:a.d=9;break a;case 117:a.d=GE(a,4);break a;case 120:a.d=GE(a,2);break a;case 122:a.d=(-2147483526);break a;default:}break a;}e
=Ih(a);f=0;if(a.d==80)f=1;try{a.bG=HN(e,f);}catch($$e){$$je=Cv($$e);if($$je instanceof DT){J(Bb(B(38),BL(a),a.f));}else{throw $$e;}}a.d=0;}}if(b)continue;else break;}}
function Ih(a){var b,c,d;b=new R;De(b,10);if(a.f<(a.j.data.length-2|0)){if(a.j.data[a.f]!=123){b=new R;U(b);return P(I(I(b,B(90)),F8(a.j,Z(a),1)));}Z(a);c=0;a:{while(a.f<(a.j.data.length-2|0)){c=a.j.data[Z(a)];if(c==125)break a;BS(b,c);}}if(c!=125)J(Bb(B(38),a.M,a.f));}if(!Dm(b))J(Bb(B(38),a.M,a.f));d=P(b);if(L(d)==1){b=new R;U(b);return P(I(I(b,B(90)),d));}b:{c:{if(L(d)>3){if(HA(d,B(90)))break c;if(HA(d,B(91)))break c;}break b;}d=Kx(d,2);}return d;}
function Ka(a,b){var c,d,e,f,$$je;c=new R;De(c,4);d=(-1);e=2147483647;a:{while(true){if(a.f>=a.j.data.length)break a;b=a.j.data[Z(a)];if(b==125)break a;if(b==44&&d<0)try{d=Dj(Bs(c),10);Ki(c,0,Dm(c));continue;}catch($$e){$$je=Cv($$e);if($$je instanceof BG){break;}else{throw $$e;}}BS(c,b&65535);}J(Bb(B(38),a.M,a.f));}if(b!=125)J(Bb(B(38),a.M,a.f));if(Dm(c)>0)b:{try{e=Dj(Bs(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=Cv($$e);if($$je instanceof BG){}else{throw $$e;}}J(Bb(B(38),a.M,a.f));}else if(d<0)J(Bb(B(38),
a.M,a.f));if((d|e|(e-d|0))<0)J(Bb(B(38),a.M,a.f));f=a.f>=a.j.data.length?42:a.j.data[a.f];c:{switch(f){case 43:a.d=(-2147483525);Z(a);break c;case 63:a.d=(-1073741701);Z(a);break c;default:}a.d=(-536870789);}c=new E5;c.by=d;c.bs=e;return c;}
function BL(a){return a.M;}
function BD(a){return !a.w&&!a.d&&a.f==a.dY&&!CO(a)?1:0;}
function Ek(b){return b<0?0:1;}
function Cd(a){return !BD(a)&&!CO(a)&&Ek(a.w)?1:0;}
function FB(a){return a.w<=56319&&a.w>=55296?1:0;}
function Go(a){return a.w<=57343&&a.w>=56320?1:0;}
function EM(b){return b<=56319&&b>=55296?1:0;}
function F$(b){return b<=57343&&b>=56320?1:0;}
function GE(a,b){var c,d,e,f,$$je;c=new R;De(c,b);d=a.j.data.length-2|0;e=0;while(true){f=C9(e,b);if(f>=0)break;if(a.f>=d)break;BS(c,a.j.data[Z(a)]);e=e+1|0;}if(!f)a:{try{b=Dj(Bs(c),16);}catch($$e){$$je=Cv($$e);if($$je instanceof BG){break a;}else{throw $$e;}}return b;}J(Bb(B(38),a.M,a.f));}
function Iw(a){var b,c,d,e,f;b=3;c=1;d=a.j.data.length-2|0;e=F6(a.j.data[a.f],8);switch(e){case -1:break;default:if(e>3)b=2;Z(a);a:{while(true){if(c>=b)break a;if(a.f>=d)break a;f=F6(a.j.data[a.f],8);if(f<0)break;e=(e*8|0)+f|0;Z(a);c=c+1|0;}}return e;}J(Bb(B(38),a.M,a.f));}
function KN(a){var b,c;b=1;c=a.b2;a:while(true){if(a.f>=a.j.data.length)J(Bb(B(38),a.M,a.f));b:{c:{switch(a.j.data[a.f]){case 41:Z(a);return c|256;case 45:if(!b)J(Bb(B(38),a.M,a.f));b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}Z(a);}Z(a);return c;}
function Z(a){var b,c;a.cp=a.f;if(!(a.b2&4))a.f=a.f+1|0;else{b=a.j.data.length-2|0;a.f=a.f+1|0;a:while(true){if(a.f<b&&Hc(a.j.data[a.f])){a.f=a.f+1|0;continue;}if(a.f>=b)break;if(a.j.data[a.f]!=35)break;a.f=a.f+1|0;while(true){if(a.f>=b)continue a;c=a.j.data[a.f];if(c!=10&&c!=13&&c!=133&&(c|1)!=8233?0:1)continue a;a.f=a.f+1|0;}}}return a.cp;}
function JW(b){return TA.j1(b);}
function Eb(a){var b,c,d;b=a.j.data[Z(a)];if(Bo(b)){c=a.cp+1|0;if(c<a.j.data.length){d=a.j.data[c];if(Bu(d)){Z(a);return B1(b,d);}}}return b;}
function CL(a){return a.bt;}
function Kb(){var a=this;BJ.call(a);a.fY=null;a.fD=null;a.fe=0;}
function Bb(a,b,c){var d=new Kb();L$(d,a,b,c);return d;}
function L$(a,b,c,d){V(a);a.fe=(-1);a.fY=b;a.fD=c;a.fe=d;}
function IL(){C.call(this);}
function HW(b,c,d,e,f){var g,h,i,j,k,l,m;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=IY(b)&&(e+f|0)<=IY(d)){a:{b:{if(b!==d){g=C7(B_(b));h=C7(B_(d));if(g!==null&&h!==null){if(g===h)break b;if(!DA(g)&&!DA(h)){i=b;j=0;k=c;while(j<f){l=i.data;m=k+1|0;if(!Jt(h,l[k])){HD(b,c,d,e,j);b=new DB;V(b);J(b);}j=j+1|0;k=m;}HD(b,c,d,e,f);return;}if(!DA(g))break a;if(DA(h))break b;else break a;}b=new DB;V(b);J(b);}}HD(b,c,d,e,f);return;}b=new DB;V(b);J(b);}b=new Bw;V(b);J(b);}d=new CE;Bn(d,B(92));J(d);}
function HD(b,c,d,e,f){if (b !== d || e < c) {
for (var i = 0; i < f; i = (i + 1) | 0) {d.data[e++] = b.data[c++];}} else {c = (c + f) | 0;e = (e + f) | 0;for (var i = 0; i < f; i = (i + 1) | 0) {d.data[--e] = b.data[--c];}}}
function HE(){Bq.call(this);}
function LX(a,b,c,d){var e;e=a.bl;S(d,e,b-BE(d,e)|0);return a.c.a(b,c,d);}
function OL(a,b){return 0;}
function HB(){Bq.call(this);}
function N9(a,b,c,d){return b;}
function GF(){Bq.call(this);}
function Nk(a,b,c,d){if(BE(d,a.bl)!=b)b=(-1);return b;}
function EZ(){Bq.call(this);this.c_=0;}
function L5(a,b,c,d){var e;e=a.bl;S(d,e,b-BE(d,e)|0);a.c_=b;return b;}
function Np(a){return a.c_;}
function M3(a,b){return 0;}
function Ci(){Bq.call(this);}
function Qq(a,b,c,d){if(d.b1!=1&&b!=d.i)return (-1);Kn(d);D2(d,0,b);return b;}
function Ba(){Q.call(this);this.E=0;}
function TB(){var a=new Ba();BI(a);return a;}
function BI(a){X(a);a.E=1;}
function Rt(a,b,c,d){var e;if((b+a.K()|0)>d.i){d.be=1;return (-1);}e=a.C(b,c);if(e<0)return (-1);return a.c.a(b+e|0,c,d);}
function Pw(a){return a.E;}
function Q7(a,b){return 1;}
function JK(){Ba.call(this);}
function CN(a){var b=new JK();LJ(b,a);return b;}
function LJ(a,b){EC(a,b);a.E=1;a.ce=1;a.E=0;}
function O5(a,b,c){return 0;}
function Pr(a,b,c,d){var e,f,g;e=d.i;f=d.R;while(true){g=C9(b,e);if(g>0)return (-1);if(g<0&&Bu(G(c,b))&&b>f&&Bo(G(c,b-1|0))){b=b+1|0;continue;}if(a.c.a(b,c,d)>=0)break;b=b+1|0;}return b;}
function NZ(a,b,c,d,e){var f,g;f=e.i;g=e.R;while(true){if(c<b)return (-1);if(c<f&&Bu(G(d,c))&&c>g&&Bo(G(d,c-1|0))){c=c+(-1)|0;continue;}if(a.c.a(c,d,e)>=0)break;c=c+(-1)|0;}return c;}
function L1(a,b){return 0;}
function W(){var a=this;Q.call(a);a.B=null;a.Z=null;a.u=0;}
function SW(a,b){var c=new W();Cj(c,a,b);return c;}
function Cj(a,b,c){X(a);a.B=b;a.Z=c;a.u=c.bl;}
function P_(a,b,c,d){var e,f,g,h;if(a.B===null)return (-1);e=Cn(d,a.u);BH(d,a.u,b);f=a.B.y;g=0;while(true){if(g>=f){BH(d,a.u,e);return (-1);}h=Bj(a.B,g).a(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function MX(a,b){a.Z.c=b;}
function RU(a,b){var c;a:{if(a.B!==null){c=Cr(a.B);while(true){if(!CF(c))break a;if(!Cs(c).I(b))continue;else return 1;}}}return 0;}
function NQ(a,b){return Dq(b,a.u)>=0&&Cn(b,a.u)==Dq(b,a.u)?0:1;}
function NU(a){var b,c,d,e;a.N=1;if(a.Z!==null&&!a.Z.N)DP(a.Z);a:{if(a.B!==null){b=a.B.y;c=0;while(true){if(c>=b)break a;d=Bj(a.B,c);e=d.bL();if(e===null)e=d;else{d.N=1;Ec(a.B,c);KB(a.B,c,e);}if(!e.N)e.bw();c=c+1|0;}}}if(a.c!==null)DP(a);}
function DI(){W.call(this);}
function ML(a,b,c,d){var e,f,g,h;e=BE(d,a.u);S(d,a.u,b);f=a.B.y;g=0;while(true){if(g>=f){S(d,a.u,e);return (-1);}h=Bj(a.B,g).a(b,c,d);if(h>=0)break;g=g+1|0;}return h;}
function Om(a,b){return !BE(b,a.u)?0:1;}
function BN(){DI.call(this);}
function OH(a,b,c,d){var e,f,g;e=BE(d,a.u);S(d,a.u,b);f=a.B.y;g=0;while(g<f){if(Bj(a.B,g).a(b,c,d)>=0)return a.c.a(a.Z.c_,c,d);g=g+1|0;}S(d,a.u,e);return (-1);}
function NV(a,b){a.c=b;}
function ES(){BN.call(this);}
function MR(a,b,c,d){var e,f;e=a.B.y;f=0;while(f<e){if(Bj(a.B,f).a(b,c,d)>=0)return a.c.a(b,c,d);f=f+1|0;}return (-1);}
function Qc(a,b){return 0;}
function GL(){BN.call(this);}
function M7(a,b,c,d){var e,f;e=a.B.y;f=0;while(true){if(f>=e)return a.c.a(b,c,d);if(Bj(a.B,f).a(b,c,d)>=0)break;f=f+1|0;}return (-1);}
function PF(a,b){return 0;}
function He(){BN.call(this);}
function NP(a,b,c,d){var e,f,g,h;e=a.B.y;f=d.b6?0:d.R;a:{g=a.c.a(b,c,d);if(g>=0){S(d,a.u,b);h=0;while(true){if(h>=e)break a;if(Bj(a.B,h).O(f,b,c,d)>=0){S(d,a.u,(-1));return g;}h=h+1|0;}}}return (-1);}
function RQ(a,b){return 0;}
function Fd(){BN.call(this);}
function Ls(a,b,c,d){var e,f;e=a.B.y;S(d,a.u,b);f=0;while(true){if(f>=e)return a.c.a(b,c,d);if(Bj(a.B,f).O(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}
function OA(a,b){return 0;}
function C0(){W.call(this);this.U=null;}
function Sf(a,b){var c=new C0();I_(c,a,b);return c;}
function I_(a,b,c){X(a);a.U=b;a.Z=c;a.u=c.bl;}
function LN(a,b,c,d){var e,f;e=Cn(d,a.u);BH(d,a.u,b);f=a.U.a(b,c,d);if(f>=0)return f;BH(d,a.u,e);return (-1);}
function Lg(a,b,c,d){var e;e=a.U.P(b,c,d);if(e>=0)BH(d,a.u,e);return e;}
function ON(a,b,c,d,e){var f;f=a.U.O(b,c,d,e);if(f>=0)BH(e,a.u,f);return f;}
function RL(a,b){return a.U.I(b);}
function M1(a){var b;b=new E6;I_(b,a.U,a.Z);a.c=b;return b;}
function Q4(a){var b;a.N=1;if(a.Z!==null&&!a.Z.N)DP(a.Z);if(a.U!==null&&!a.U.N){b=a.U.bL();if(b!==null){a.U.N=1;a.U=b;}a.U.bw();}}
function DB(){Bh.call(this);}
function CM(){C.call(this);}
function H(){var a=this;CM.call(a);a.s=0;a.H=0;a.p=null;a.ck=null;a.cD=null;a.q=0;}
var TC=null;function TD(){var a=new H();O(a);return a;}
function O(a){var b;b=new G9;b.h=$rt_createIntArray(64);a.p=b;}
function M$(a){return null;}
function Mg(a){return a.p;}
function H8(a){return !a.H?(C3(a.p,0)>=2048?0:1):IR(a.p,0)>=2048?0:1;}
function Qm(a){return a.q;}
function Po(a){return a;}
function Iz(a){var b,c;if(a.cD===null){b=a.bF();c=new GT;c.gj=a;c.ee=b;O(c);a.cD=c;B0(a.cD,a.H);}return a.cD;}
function Dn(a){var b,c;if(a.ck===null){b=a.bF();c=new GS;c.f0=a;c.eG=b;c.e5=a;O(c);a.ck=c;B0(a.ck,a.s);a.ck.q=a.q;}return a.ck;}
function QY(a){return 0;}
function B0(a,b){if(a.s^b){a.s=a.s?0:1;a.H=a.H?0:1;}if(!a.q)a.q=1;return a;}
function Px(a){return a.s;}
function Dh(b,c){if(b.bi()!==null&&c.bi()!==null)return II(b.bi(),c.bi());return 1;}
function HN(b,c){return Jc(Kh(TC,b),c);}
function Ja(){TC=new CT;}
function I6(){var a=this;H.call(a);a.c5=0;a.d7=0;a.bZ=0;a.dI=0;a.bp=0;a.bS=0;a.m=null;a.z=null;}
function BB(){var a=new I6();RD(a);return a;}
function Qh(a,b){var c=new I6();N$(c,a,b);return c;}
function RD(a){O(a);a.m=RT();}
function N$(a,b,c){O(a);a.m=RT();a.c5=b;a.d7=c;}
function Bk(a,b){a:{if(a.c5){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.bp){EE(a.m,Dp(b&65535));break a;}D9(a.m,Dp(b&65535));break a;}if(a.d7&&b>128){a.bZ=1;b=CD(Cz(b));}}}if(!(!EM(b)&&!F$(b))){if(a.dI)EE(a.p,b-55296|0);else D9(a.p,b-55296|0);}if(a.bp)EE(a.m,b);else D9(a.m,b);if(!a.q&&Em(b))a.q=1;return a;}
function KV(a,b){var c,d,e;if(!a.q&&b.q)a.q=1;if(a.dI){if(!b.H)Cx(a.p,b.bF());else BA(a.p,b.bF());}else if(!b.H)Cu(a.p,b.bF());else{Cy(a.p,b.bF());BA(a.p,b.bF());a.H=a.H?0:1;a.dI=1;}if(!a.bS&&b.bi()!==null){if(a.bp){if(!b.s)Cx(a.m,b.bi());else BA(a.m,b.bi());}else if(!b.s)Cu(a.m,b.bi());else{Cy(a.m,b.bi());BA(a.m,b.bi());a.s=a.s?0:1;a.bp=1;}}else{c=a.s;if(a.z!==null){d=a.z;if(!c){e=new FV;e.f1=a;e.fb=c;e.eT=d;e.eL=b;O(e);a.z=e;}else{e=new FW;e.gA=a;e.fv=c;e.fl=d;e.e$=b;O(e);a.z=e;}}else{if(c&&!a.bp&&Es(a.m))
{d=new FS;d.fC=a;d.fq=b;O(d);a.z=d;}else if(!c){d=new FQ;d.dC=a;d.c0=c;d.ez=b;O(d);a.z=d;}else{d=new FR;d.dc=a;d.c7=c;d.eN=b;O(d);a.z=d;}a.bS=1;}}return a;}
function Y(a,b,c){var d;if(b>c){d=new BJ;V(d);J(d);}a:{b:{if(!a.c5){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;Bk(a,b);b=b+1|0;}}if(a.bp)Ie(a.m,b,c+1|0);else DD(a.m,b,c+1|0);}return a;}
function H3(a,b){var c,d,e;if(!a.q&&b.q)a.q=1;if(b.bZ)a.bZ=1;if(!(a.H^b.H)){if(!a.H)Cu(a.p,b.p);else BA(a.p,b.p);}else if(a.H)Cx(a.p,b.p);else{Cy(a.p,b.p);BA(a.p,b.p);a.H=1;}if(!a.bS&&Bt(b)!==null){if(!(a.s^b.s)){if(!a.s)Cu(a.m,Bt(b));else BA(a.m,Bt(b));}else if(a.s)Cx(a.m,Bt(b));else{Cy(a.m,Bt(b));BA(a.m,Bt(b));a.s=1;}}else{c=a.s;if(a.z!==null){d=a.z;if(!c){e=new FK;e.fK=a;e.es=c;e.eM=d;e.e8=b;O(e);a.z=e;}else{e=new Gg;e.f8=a;e.e7=c;e.dZ=d;e.d9=b;O(e);a.z=e;}}else{if(!a.bp&&Es(a.m)){if(!c){d=new FT;d.gC=a;d.e4
=b;O(d);a.z=d;}else{d=new FU;d.f$=a;d.e3=b;O(d);a.z=d;}}else if(!c){d=new FX;d.eu=a;d.dS=b;d.fp=c;O(d);a.z=d;}else{d=new FY;d.d1=a;d.d$=b;d.ec=c;O(d);a.z=d;}a.bS=1;}}}
function G6(a,b){var c,d,e;if(!a.q&&b.q)a.q=1;if(b.bZ)a.bZ=1;if(!(a.H^b.H)){if(!a.H)BA(a.p,b.p);else Cu(a.p,b.p);}else if(!a.H)Cx(a.p,b.p);else{Cy(a.p,b.p);BA(a.p,b.p);a.H=0;}if(!a.bS&&Bt(b)!==null){if(!(a.s^b.s)){if(!a.s)BA(a.m,Bt(b));else Cu(a.m,Bt(b));}else if(!a.s)Cx(a.m,Bt(b));else{Cy(a.m,Bt(b));BA(a.m,Bt(b));a.s=0;}}else{c=a.s;if(a.z!==null){d=a.z;if(!c){e=new FM;e.fX=a;e.ev=c;e.ed=d;e.fu=b;O(e);a.z=e;}else{e=new FN;e.gd=a;e.eh=c;e.dX=d;e.er=b;O(e);a.z=e;}}else{if(!a.bp&&Es(a.m)){if(!c){d=new FI;d.ga=
a;d.eK=b;O(d);a.z=d;}else{d=new FJ;d.gx=a;d.eP=b;O(d);a.z=d;}}else if(!c){d=new FO;d.fx=a;d.fa=b;d.d5=c;O(d);a.z=d;}else{d=new FH;d.d4=a;d.ek=b;d.fw=c;O(d);a.z=d;}a.bS=1;}}}
function Bx(a,b){if(a.z!==null)return a.s^a.z.e(b);return a.s^BF(a.m,b);}
function Bt(a){if(!a.bS)return a.m;return null;}
function Ph(a){return a.p;}
function PX(a){var b,c;if(a.z!==null)return a;b=Bt(a);c=new FL;c.fI=a;c.cK=b;O(c);return B0(c,a.s);}
function L6(a){var b,c;b=new R;U(b);c=C3(a.m,0);while(c>=0){Cl(b,CY(c));BS(b,124);c=C3(a.m,c+1|0);}if(b.v>0)GM(b,b.v-1|0);return P(b);}
function Py(a){return a.bZ;}
function DT(){var a=this;Bh.call(a);a.gv=null;a.gl=null;}
function BP(){Q.call(this);this.k=null;}
function TE(a,b,c){var d=new BP();BC(d,a,b,c);return d;}
function BC(a,b,c,d){EC(a,c);a.k=b;a.ce=d;}
function RC(a){return a.k;}
function OO(a,b){return !a.k.I(b)&&!a.c.I(b)?0:1;}
function Qj(a,b){return 1;}
function LF(a){var b;a.N=1;if(a.c!==null&&!a.c.N){b=a.c.bL();if(b!==null){a.c.N=1;a.c=b;}a.c.bw();}if(a.k!==null){if(!a.k.N){b=a.k.bL();if(b!==null){a.k.N=1;a.k=b;}a.k.bw();}else if(a.k instanceof C0&&a.k.Z.dj)a.k=a.k.c;}}
function By(){BP.call(this);this.x=null;}
function Sl(a,b,c){var d=new By();B$(d,a,b,c);return d;}
function B$(a,b,c,d){BC(a,b,c,d);a.x=b;}
function Lu(a,b,c,d){var e,f;e=0;a:{while((b+a.x.K()|0)<=d.i){f=a.x.C(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.c.a(b,c,d);if(f>=0)break;b=b-a.x.K()|0;e=e+(-1)|0;}return f;}
function Ch(){By.call(this);this.bM=null;}
function Su(a,b,c,d){var e=new Ch();HO(e,a,b,c,d);return e;}
function HO(a,b,c,d,e){B$(a,c,d,e);a.bM=b;}
function MH(a,b,c,d){var e,f,g,h;e=a.bM.by;f=a.bM.bs;g=0;while(true){if(g>=e){a:{while(g<f){if((b+a.x.K()|0)>d.i)break a;h=a.x.C(b,c);if(h<1)break a;b=b+h|0;g=g+1|0;}}while(true){if(g<e)return (-1);h=a.c.a(b,c,d);if(h>=0)break;b=b-a.x.K()|0;g=g+(-1)|0;}return h;}if((b+a.x.K()|0)>d.i){d.be=1;return (-1);}h=a.x.C(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}return (-1);}
function Br(){BP.call(this);}
function LM(a,b,c,d){var e;if(!a.k.n(d))return a.c.a(b,c,d);e=a.k.a(b,c,d);if(e>=0)return e;return a.c.a(b,c,d);}
function B6(){By.call(this);}
function Lm(a,b,c,d){var e;e=a.k.a(b,c,d);if(e<0)e=a.c.a(b,c,d);return e;}
function RV(a,b){a.c=b;a.k.r(b);}
function GU(){By.call(this);}
function Rm(a,b,c,d){while((b+a.x.K()|0)<=d.i&&a.x.C(b,c)>0){b=b+a.x.K()|0;}return a.c.a(b,c,d);}
function L3(a,b,c,d){var e,f,g;e=a.c.P(b,c,d);if(e<0)return (-1);f=e-a.x.K()|0;while(f>=b&&a.x.C(f,c)>0){g=f-a.x.K()|0;e=f;f=g;}return e;}
function E5(){var a=this;CM.call(a);a.by=0;a.bs=0;}
function P6(a){return a.by;}
function Qd(a){return a.bs;}
function Md(a){var b;b=new R;U(b);return P(I(I(I(Bl(I(b,B(93)),a.by),B(94)),a.bs==2147483647?B(38):Ep(SE(a.bs))),B(95)));}
function FD(){Q.call(this);}
function Rl(a,b,c,d){return b;}
function MW(a,b){return 0;}
function G9(){var a=this;C.call(a);a.h=null;a.t=0;}
function RT(){var a=new G9();NB(a);return a;}
function NB(a){a.h=$rt_createIntArray(0);}
function D9(a,b){var c,d;c=b/32|0;if(b>=a.t){Do(a,c+1|0);a.t=b+1|0;}d=a.h.data;d[c]=d[c]|1<<(b%32|0);}
function DD(a,b,c){var d,e,f,g,h;if(b>c){d=new Bw;V(d);J(d);}e=b/32|0;f=c/32|0;if(c>a.t){Do(a,f+1|0);a.t=c;}if(e==f){g=a.h.data;g[e]=g[e]|Dt(a,b)&C_(a,c);}else{g=a.h.data;g[e]=g[e]|Dt(a,b);h=e+1|0;while(h<f){a.h.data[h]=(-1);h=h+1|0;}g=a.h.data;g[f]=g[f]|C_(a,c);}}
function Dt(a,b){return (-1)<<(b%32|0);}
function C_(a,b){b=b%32|0;return !b?0:(-1)>>>(32-b|0);}
function EE(a,b){var c,d,e,f;c=b/32|0;if(c<a.h.data.length){d=a.h.data;e=d[c];f=(b%32|0)&31;d[c]=e&((-2)<<f|(-2)>>>(32-f|0));if(b==(a.t-1|0))CW(a);}}
function Ie(a,b,c){var d,e,f,g,h;if(b>c){d=new Bw;V(d);J(d);}if(b>=a.t)return;c=Bv(a.t,c);e=b/32|0;f=c/32|0;if(e==f){g=a.h.data;g[e]=g[e]&(C_(a,b)|Dt(a,c));}else{g=a.h.data;g[e]=g[e]&C_(a,b);h=e+1|0;while(h<f){a.h.data[h]=0;h=h+1|0;}g=a.h.data;g[f]=g[f]&Dt(a,c);}CW(a);}
function BF(a,b){var c;c=b/32|0;return c<a.h.data.length&&a.h.data[c]&1<<(b%32|0)?1:0;}
function C3(a,b){var c,d,e;if(b>=a.t)return (-1);c=b/32|0;d=a.h.data[c]>>>(b%32|0);if(d)return Dk(d)+b|0;d=(a.t+31|0)/32|0;e=c+1|0;while(e<d){if(a.h.data[e])return (e*32|0)+Dk(a.h.data[e])|0;e=e+1|0;}return (-1);}
function IR(a,b){var c,d,e;if(b>=a.t)return b;c=b/32|0;d=(a.h.data[c]^(-1))>>>(b%32|0);if(d)return Dk(d)+b|0;d=(a.t+31|0)/32|0;e=c+1|0;while(e<d){if(a.h.data[e]!=(-1))return (e*32|0)+Dk(a.h.data[e]^(-1))|0;e=e+1|0;}return a.t;}
function Do(a,b){var c,d,e,f;if(a.h.data.length>=b)return;c=BR((b*3|0)/2|0,(a.h.data.length*2|0)+1|0);d=a.h.data;e=$rt_createIntArray(c);f=e.data;b=Bv(c,d.length);c=0;while(c<b){f[c]=d[c];c=c+1|0;}a.h=e;}
function CW(a){var b,c,d;b=(a.t+31|0)/32|0;a.t=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=Fn(a.h.data[c]);if(d<32)break;c=c+(-1)|0;a.t=a.t-32|0;}a.t=a.t-d|0;}}
function II(a,b){var c,d;c=Bv(a.h.data.length,b.h.data.length);d=0;while(d<c){if(a.h.data[d]&b.h.data[d])return 1;d=d+1|0;}return 0;}
function BA(a,b){var c,d,e;c=Bv(a.h.data.length,b.h.data.length);d=0;while(d<c){e=a.h.data;e[d]=e[d]&b.h.data[d];d=d+1|0;}while(c<a.h.data.length){a.h.data[c]=0;c=c+1|0;}a.t=Bv(a.t,b.t);CW(a);}
function Cx(a,b){var c,d,e;c=Bv(a.h.data.length,b.h.data.length);d=0;while(d<c){e=a.h.data;e[d]=e[d]&(b.h.data[d]^(-1));d=d+1|0;}CW(a);}
function Cu(a,b){var c,d,e;a.t=BR(a.t,b.t);Do(a,(a.t+31|0)/32|0);c=Bv(a.h.data.length,b.t);d=0;while(d<c){e=a.h.data;e[d]=e[d]|b.h.data[d];d=d+1|0;}}
function Cy(a,b){var c,d,e;a.t=BR(a.t,b.t);Do(a,(a.t+31|0)/32|0);c=Bv(a.h.data.length,b.t);d=0;while(d<c){e=a.h.data;e[d]=e[d]^b.h.data[d];d=d+1|0;}CW(a);}
function Es(a){return a.t?0:1;}
function EX(){var a=this;W.call(a);a.eW=null;a.fH=0;}
function Ps(a,b){a.c=b;}
function Ko(a,b,c,d){var e,f,g,h,i;e=d.R;f=d.i;g=b+1|0;h=C9(g,f);if(h>0){d.be=1;return (-1);}i=G(c,b);if(!a.eW.e(i))return (-1);if(Bo(i)){if(h<0&&Bu(G(c,g)))return (-1);}else if(Bu(i)&&b>e&&Bo(G(c,b-1|0)))return (-1);return a.c.a(g,c,d);}
function GQ(){var a=this;W.call(a);a.dv=null;a.de=null;}
function IM(a,b){var c=new GQ();KE(c,a,b);return c;}
function KE(a,b,c){X(a);a.dv=b;a.de=c;}
function MB(a,b,c,d){var e;e=a.dv.a(b,c,d);if(e<0)e=Ko(a.de,b,c,d);if(e>=0)return e;return (-1);}
function MJ(a,b){a.c=b;a.de.c=b;a.dv.r(b);}
function Nq(a,b){return 1;}
function M9(a,b){return 1;}
function BM(){var a=this;W.call(a);a.br=null;a.gF=0;}
function Rj(a){var b=new BM();FF(b,a);return b;}
function FF(a,b){X(a);a.br=b.cB();a.gF=b.s;}
function Pb(a,b,c,d){var e,f,g;e=d.i;if(b<e){f=b+1|0;g=G(c,b);if(a.e(g)){b=a.c.a(f,c,d);if(b>0)return b;}if(f<e){b=f+1|0;f=G(c,f);if(C$(g,f)&&a.e(B1(g,f)))return a.c.a(b,c,d);}}return (-1);}
function PL(a,b){return a.br.e(b);}
function Mu(a,b){if(b instanceof BQ)return a.br.e(b.bK);if(b instanceof BX)return a.br.e(b.bb);if(b instanceof BM)return Dh(a.br,b.br);if(!(b instanceof BY))return 1;return Dh(a.br,b.bC);}
function Rg(a){return a.br;}
function Pi(a,b){a.c=b;}
function Pk(a,b){return 1;}
function DS(){BM.call(this);}
function Q8(a,b){return a.br.e(CD(Cz(b)));}
function IV(){var a=this;Ba.call(a);a.fc=null;a.gs=0;}
function Qn(a){var b=new IV();Mj(b,a);return b;}
function Mj(a,b){BI(a);a.fc=b.cB();a.gs=b.s;}
function Rn(a,b,c){return !a.fc.e(Cb(BT(G(c,b))))?(-1):1;}
function BY(){var a=this;Ba.call(a);a.bC=null;a.fM=0;}
function PO(a){var b=new BY();Ns(b,a);return b;}
function Ns(a,b){BI(a);a.bC=b.cB();a.fM=b.s;}
function EI(a,b,c){return !a.bC.e(G(c,b))?(-1):1;}
function MY(a,b){if(b instanceof BX)return a.bC.e(b.bb);if(b instanceof BY)return Dh(a.bC,b.bC);if(!(b instanceof BM)){if(!(b instanceof BQ))return 1;return 0;}return Dh(a.bC,b.br);}
function MM(a){return a.bC;}
function F1(){var a=this;W.call(a);a.bz=null;a.dm=null;a.cf=0;}
function P4(a,b){var c=new F1();LP(c,a,b);return c;}
function LP(a,b,c){X(a);a.bz=b;a.cf=c;}
function Lk(a,b){a.c=b;}
function GZ(a){if(a.dm===null)a.dm=Lo(a.bz);return a.dm;}
function Ll(a,b,c,d){var e,f,g,h,i,j,k,l,m,n,o;e=d.i;f=$rt_createIntArray(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;j=G(c,b);k=j-44032|0;if(k>=0&&k<11172){b=4352+(k/588|0)|0;l=4449+((k%588|0)/28|0)|0;k=k%28|0;if(!k){m=$rt_createIntArray(2);n=m.data;n[0]=b;n[1]=l;}else{o=4519+k|0;m=$rt_createIntArray(3);n=m.data;n[0]=b;n[1]=l;n[2]=o;}}else m=null;if(m!==null){m=m.data;l=0;if(m.length!=a.cf)return (-1);while(true){if(l>=a.cf)return a.c.a(i,c,d);if(m[l]!=a.bz.data[l])break;l=l+1|0;}return (-1);}f=f.data;f[0]
=j;k=j-4352|0;if(k>=0&&k<19){if(i<e){j=G(c,i);g=j-4449|0;}if(g>=0&&g<21){k=i+1|0;f[1]=j;if(k<e){j=G(c,k);h=j-4519|0;}if(h>=0&&h<28){b=k+1|0;f[2]=j;return a.cf==3&&f[0]==a.bz.data[0]&&f[1]==a.bz.data[1]&&f[2]==a.bz.data[2]?a.c.a(b,c,d):(-1);}return a.cf==2&&f[0]==a.bz.data[0]&&f[1]==a.bz.data[1]?a.c.a(k,c,d):(-1);}return (-1);}return (-1);}
function Nf(a,b){return b instanceof F1&&!Bf(GZ(b),GZ(a))?0:1;}
function P3(a,b){return 1;}
function BX(){Ba.call(this);this.bb=0;}
function Jl(a){var b=new BX();Nz(b,a);return b;}
function Nz(a,b){BI(a);a.bb=b;}
function Re(a){return 1;}
function Ql(a,b,c){return a.bb!=G(c,b)?(-1):1;}
function O$(a,b,c,d){var e,f,g,h;if(!(c instanceof Bd))return Ds(a,b,c,d);e=c;f=d.i;while(true){if(b>=f)return (-1);g=Dg(e,a.bb,b);if(g<0)return (-1);h=a.c;b=g+1|0;if(h.a(b,c,d)>=0)break;}return g;}
function Ri(a,b,c,d,e){var f,g;if(!(d instanceof Bd))return Dz(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);g=Di(f,a.bb,c);if(g<0)break a;if(g<b)break a;if(a.c.a(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}
function M8(a){return a.bb;}
function PT(a,b){if(b instanceof BX)return b.bb!=a.bb?0:1;if(!(b instanceof BY)){if(b instanceof BM)return b.e(a.bb);if(!(b instanceof BQ))return 1;return 0;}return EI(b,0,G$(a.bb))<=0?0:1;}
function Kq(){Ba.call(this);this.dR=0;}
function N2(a){var b=new Kq();L2(b,a);return b;}
function L2(a,b){BI(a);a.dR=Cb(BT(b));}
function K9(a,b,c){return a.dR!=Cb(BT(G(c,b)))?(-1):1;}
function H6(){var a=this;Ba.call(a);a.e_=0;a.eb=0;}
function NG(a){var b=new H6();Ov(b,a);return b;}
function Ov(a,b){BI(a);a.e_=b;a.eb=Dp(b);}
function LG(a,b,c){return a.e_!=G(c,b)&&a.eb!=G(c,b)?(-1):1;}
function Cq(){var a=this;W.call(a);a.b9=0;a.dp=null;a.c4=null;a.cZ=0;}
function SZ(a,b){var c=new Cq();Fx(c,a,b);return c;}
function Fx(a,b,c){X(a);a.b9=1;a.c4=b;a.cZ=c;}
function Q3(a,b){a.c=b;}
function MK(a,b,c,d){var e,f,g,h,i,j,k,l;e=$rt_createIntArray(4);f=d.i;if(b>=f)return (-1);g=Ev(a,b,c,f);h=b+a.b9|0;i=JW(g);if(i===null){i=e.data;b=1;i[0]=g;}else{b=i.data.length;HW(i,0,e,0,b);b=0+b|0;}a:{if(h<f){j=e.data;g=Ev(a,h,c,f);while(b<4){if(!((g!=832?0:1)|(g!=833?0:1)|(g!=835?0:1)|(g!=836?0:1))){k=b+1|0;j[b]=g;}else{i=JW(g).data;if(i.length!=2){k=b+1|0;j[b]=i[0];}else{l=b+1|0;j[b]=i[0];k=l+1|0;j[l]=i[1];}}h=h+a.b9|0;if(h>=f){b=k;break a;}g=Ev(a,h,c,f);b=k;}}}if(b!=a.cZ)return (-1);i=e.data;g=0;while
(true){if(g>=b)return a.c.a(h,c,d);if(i[g]!=a.c4.data[g])break;g=g+1|0;}return (-1);}
function G5(a){var b,c;if(a.dp===null){b=new R;U(b);c=0;while(c<a.cZ){Cl(b,CY(a.c4.data[c]));c=c+1|0;}a.dp=P(b);}return a.dp;}
function Ev(a,b,c,d){var e,f,g;a.b9=1;if(b>=(d-1|0))e=G(c,b);else{d=b+1|0;e=G(c,b);f=G(c,d);if(C$(e,f)){g=$rt_createCharArray(2).data;g[0]=e;g[1]=f;e=0<(g.length-1|0)&&Bo(g[0])&&Bu(g[1])?B1(g[0],g[1]):g[0];a.b9=2;}}return e;}
function Ro(a,b){return b instanceof Cq&&!Bf(G5(b),G5(a))?0:1;}
function NY(a,b){return 1;}
function Hn(){Cq.call(this);}
function Fs(){Cq.call(this);}
function HS(){Br.call(this);}
function Oe(a,b,c,d){var e;while(true){e=a.k.a(b,c,d);if(e<=0)break;b=e;}return a.c.a(b,c,d);}
function GD(){Br.call(this);}
function LT(a,b,c,d){var e;e=a.k.a(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.k.a(e,c,d);if(b<=e)break;e=b;}b=e;}return a.c.a(b,c,d);}
function Cw(){Br.call(this);}
function Pe(a,b,c,d){var e;if(!a.k.n(d))return a.c.a(b,c,d);e=a.k.a(b,c,d);if(e>=0)return e;return a.c.a(b,c,d);}
function Qy(a,b){a.c=b;a.k.r(b);}
function Gn(){Cw.call(this);}
function Rf(a,b,c,d){var e;e=a.k.a(b,c,d);if(e<=0)e=b;return a.c.a(e,c,d);}
function Me(a,b){a.c=b;}
function Cp(){var a=this;Br.call(a);a.bP=null;a.bg=0;}
function TF(a,b,c,d,e){var f=new Cp();DR(f,a,b,c,d,e);return f;}
function DR(a,b,c,d,e,f){BC(a,c,d,e);a.bP=b;a.bg=f;}
function RK(a,b,c,d){var e,f;e=E1(d,a.bg);if(!a.k.n(d))return a.c.a(b,c,d);if(e>=a.bP.bs)return a.c.a(b,c,d);f=a.bg;e=e+1|0;BW(d,f,e);f=a.k.a(b,c,d);if(f>=0){BW(d,a.bg,0);return f;}f=a.bg;e=e+(-1)|0;BW(d,f,e);if(e>=a.bP.by)return a.c.a(b,c,d);BW(d,a.bg,0);return (-1);}
function E8(){Cp.call(this);}
function QM(a,b,c,d){var e,f,g;e=0;f=a.bP.bs;a:{while(true){g=a.k.a(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.bP.by)return (-1);return a.c.a(b,c,d);}
function Hp(){Br.call(this);}
function Rd(a,b,c,d){var e;if(!a.k.n(d))return a.c.a(b,c,d);e=a.c.a(b,c,d);if(e>=0)return e;return a.k.a(b,c,d);}
function GY(){Cw.call(this);}
function Nr(a,b,c,d){var e;if(!a.k.n(d))return a.c.a(b,c,d);e=a.c.a(b,c,d);if(e<0)e=a.k.a(b,c,d);return e;}
function F_(){Cp.call(this);}
function L8(a,b,c,d){var e,f;e=E1(d,a.bg);if(!a.k.n(d))return a.c.a(b,c,d);if(e>=a.bP.bs){BW(d,a.bg,0);return a.c.a(b,c,d);}if(e<a.bP.by){BW(d,a.bg,e+1|0);f=a.k.a(b,c,d);}else{f=a.c.a(b,c,d);if(f>=0){BW(d,a.bg,0);return f;}BW(d,a.bg,e+1|0);f=a.k.a(b,c,d);}return f;}
function Hq(){BP.call(this);}
function Rz(a,b,c,d){var e;e=d.i;if(e>b)return a.c.O(b,e,c,d);return a.c.a(b,c,d);}
function Pq(a,b,c,d){var e;e=d.i;if(a.c.O(b,e,c,d)>=0)return b;return (-1);}
function FG(){BP.call(this);this.dw=null;}
function M2(a,b,c,d){var e,f;e=d.i;f=Gb(a,b,e,c);if(f>=0)e=f;if(e>b)return a.c.O(b,e,c,d);return a.c.a(b,c,d);}
function Lq(a,b,c,d){var e,f,g,h;e=d.i;f=a.c.P(b,c,d);if(f<0)return (-1);g=Gb(a,f,e,c);if(g>=0)e=g;g=a.c.O(f,e,c,d);if(f<g)f=g;if(f<=0)h=f?(-1):0;else{h=f-1|0;a:{while(true){if(h<b){h=(-1);break a;}if(a.dw.cc(G(c,h)))break;h=h+(-1)|0;}}}if(h>=b)b=h>=f?h:h+1|0;return b;}
function Gb(a,b,c,d){while(true){if(b>=c)return (-1);if(a.dw.cc(G(d,b)))break;b=b+1|0;}return b;}
function Ce(){C.call(this);}
var TG=null;var TH=null;function Gq(b){if(!(b&1)){if(TH!==null)return TH;TH=new Gs;return TH;}if(TG!==null)return TG;TG=new Gr;return TG;}
function HT(){By.call(this);}
function Mb(a,b,c,d){var e;a:{while(true){if((b+a.x.K()|0)>d.i)break a;e=a.x.C(b,c);if(e<1)break;b=b+e|0;}}return a.c.a(b,c,d);}
function GR(){B6.call(this);}
function LR(a,b,c,d){var e;if((b+a.x.K()|0)<=d.i){e=a.x.C(b,c);if(e>=1)b=b+e|0;}return a.c.a(b,c,d);}
function Ge(){Ch.call(this);}
function OQ(a,b,c,d){var e,f,g,h,i;e=a.bM.by;f=a.bM.bs;g=0;while(true){if(g>=e){a:{while(true){if(g>=f)break a;if((b+a.x.K()|0)>d.i)break a;h=a.x.C(b,c);if(h<1)break;b=b+h|0;g=g+1|0;}}return a.c.a(b,c,d);}if((b+a.x.K()|0)>d.i){d.be=1;return (-1);}i=a.x.C(b,c);if(i<1)break;b=b+i|0;g=g+1|0;}return (-1);}
function GX(){By.call(this);}
function MU(a,b,c,d){var e;while(true){e=a.c.a(b,c,d);if(e>=0)break;if((b+a.x.K()|0)<=d.i){e=a.x.C(b,c);b=b+e|0;}if(e<1)return (-1);}return e;}
function Fy(){B6.call(this);}
function Mn(a,b,c,d){var e;e=a.c.a(b,c,d);if(e>=0)return e;return a.k.a(b,c,d);}
function Hf(){Ch.call(this);}
function O6(a,b,c,d){var e,f,g,h,i;e=a.bM.by;f=a.bM.bs;g=0;while(true){if(g>=e){a:{while(true){h=a.c.a(b,c,d);if(h>=0)break;if((b+a.x.K()|0)<=d.i){h=a.x.C(b,c);b=b+h|0;g=g+1|0;}if(h<1)break a;if(g>f)break a;}return h;}return (-1);}if((b+a.x.K()|0)>d.i){d.be=1;return (-1);}i=a.x.C(b,c);if(i<1)break;b=b+i|0;g=g+1|0;}return (-1);}
function Kt(){Q.call(this);}
function PZ(){var a=new Kt();OJ(a);return a;}
function OJ(a){X(a);}
function RP(a,b,c,d){if(b&&!(d.bI&&b==d.R))return (-1);return a.c.a(b,c,d);}
function QW(a,b){return 0;}
function Jw(){Q.call(this);this.eU=0;}
function PN(a){var b=new Jw();Q_(b,a);return b;}
function Q_(a,b){X(a);a.eU=b;}
function M6(a,b,c,d){var e,f,g;e=b<d.i?G(c,b):32;f=!b?32:G(c,b-1|0);g=d.b6?0:d.R;return (e!=32&&!G1(a,e,b,g,c)?0:1)^(f!=32&&!G1(a,f,b-1|0,g,c)?0:1)^a.eU?(-1):a.c.a(b,c,d);}
function Ne(a,b){return 0;}
function G1(a,b,c,d,e){var f;if(!DX(b)&&b!=95){a:{if(Bg(b)==6)while(true){c=c+(-1)|0;if(c<d)break a;f=G(e,c);if(DX(f))return 0;if(Bg(f)!=6)return 1;}}return 1;}return 0;}
function IN(){Q.call(this);}
function Sv(){var a=new IN();Pl(a);return a;}
function Pl(a){X(a);}
function Q$(a,b,c,d){if(b!=d.bN)return (-1);return a.c.a(b,c,d);}
function RF(a,b){return 0;}
function Ha(){Q.call(this);this.b3=0;}
function Sr(a){var b=new Ha();JN(b,a);return b;}
function JN(a,b){X(a);a.b3=b;}
function NH(a,b,c,d){var e,f,g;e=!d.bI?L(c):d.i;if(b>=e){S(d,a.b3,0);return a.c.a(b,c,d);}f=e-b|0;if(f==2&&G(c,b)==13&&G(c,b+1|0)==10){S(d,a.b3,0);return a.c.a(b,c,d);}a:{if(f==1){g=G(c,b);if(g==10)break a;if(g==13)break a;if(g==133)break a;if((g|1)==8233)break a;}return (-1);}S(d,a.b3,0);return a.c.a(b,c,d);}
function N4(a,b){var c;c=!BE(b,a.b3)?0:1;S(b,a.b3,(-1));return c;}
function J7(){Q.call(this);}
function SC(){var a=new J7();QZ(a);return a;}
function QZ(a){X(a);}
function MF(a,b,c,d){if(b<(d.b6?L(c):d.i))return (-1);d.be=1;d.gb=1;return a.c.a(b,c,d);}
function K8(a,b){return 0;}
function Ik(){Q.call(this);this.dP=null;}
function SD(a){var b=new Ik();NL(b,a);return b;}
function NL(a,b){X(a);a.dP=b;}
function NR(a,b,c,d){a:{if(b!=d.i){if(!b)break a;if(d.bI&&b==d.R)break a;if(a.dP.ej(G(c,b-1|0),G(c,b)))break a;}return (-1);}return a.c.a(b,c,d);}
function P0(a,b){return 0;}
function J4(){W.call(this);}
function SN(){var a=new J4();Mx(a);return a;}
function Mx(a){X(a);}
function Rh(a,b,c,d){var e,f,g,h;e=d.i;f=b+1|0;if(f>e){d.be=1;return (-1);}g=G(c,b);if(Bo(g)){h=b+2|0;if(h<=e&&C$(g,G(c,f)))return a.c.a(h,c,d);}return a.c.a(f,c,d);}
function Nj(a,b){a.c=b;}
function Mm(a){return (-2147483602);}
function Ng(a,b){return 1;}
function I3(){W.call(this);this.dM=null;}
function Sp(a){var b=new I3();N1(b,a);return b;}
function N1(a,b){X(a);a.dM=b;}
function MA(a,b,c,d){var e,f,g,h;e=d.i;f=b+1|0;if(f>e){d.be=1;return (-1);}g=G(c,b);if(Bo(g)){b=b+2|0;if(b<=e){h=G(c,f);if(C$(g,h))return a.dM.cc(B1(g,h))?(-1):a.c.a(b,c,d);}}return a.dM.cc(g)?(-1):a.c.a(f,c,d);}
function OG(a,b){a.c=b;}
function K3(a){return (-2147483602);}
function Rs(a,b){return 1;}
function JU(){Q.call(this);this.cw=0;}
function RZ(a){var b=new JU();PW(b,a);return b;}
function PW(a,b){X(a);a.cw=b;}
function Rr(a,b,c,d){var e;e=!d.bI?L(c):d.i;if(b>=e){S(d,a.cw,0);return a.c.a(b,c,d);}if((e-b|0)==1&&G(c,b)==10){S(d,a.cw,1);return a.c.a(b+1|0,c,d);}return (-1);}
function PS(a,b){var c;c=!BE(b,a.cw)?0:1;S(b,a.cw,(-1));return c;}
function H$(){Q.call(this);this.b8=0;}
function SL(a){var b=new H$();Qp(b,a);return b;}
function Qp(a,b){X(a);a.b8=b;}
function MD(a,b,c,d){if((!d.bI?L(c)-b|0:d.i-b|0)<=0){S(d,a.b8,0);return a.c.a(b,c,d);}if(G(c,b)!=10)return (-1);S(d,a.b8,1);return a.c.a(b+1|0,c,d);}
function PH(a,b){var c;c=!BE(b,a.b8)?0:1;S(b,a.b8,(-1));return c;}
function H2(){Q.call(this);this.bR=0;}
function R6(a){var b=new H2();RN(b,a);return b;}
function RN(a,b){X(a);a.bR=b;}
function QP(a,b,c,d){var e,f,g;e=!d.bI?L(c)-b|0:d.R-b|0;if(!e){S(d,a.bR,0);return a.c.a(b,c,d);}if(e<2){f=G(c,b);g=97;}else{f=G(c,b);g=G(c,b+1|0);}switch(f){case 10:case 133:case 8232:case 8233:S(d,a.bR,0);return a.c.a(b,c,d);case 13:if(g!=10){S(d,a.bR,0);return a.c.a(b,c,d);}S(d,a.bR,0);return a.c.a(b,c,d);default:}return (-1);}
function N7(a,b){var c;c=!BE(b,a.bR)?0:1;S(b,a.bR,(-1));return c;}
function CU(){var a=this;W.call(a);a.d6=0;a.b4=0;}
function ST(a,b){var c=new CU();F9(c,a,b);return c;}
function F9(a,b,c){X(a);a.d6=b;a.b4=c;}
function Mf(a,b,c,d){var e,f,g,h;e=CP(a,d);if(e!==null&&(b+L(e)|0)<=d.i){f=0;while(true){if(f>=L(e)){S(d,a.b4,L(e));return a.c.a(b+L(e)|0,c,d);}g=G(e,f);h=b+f|0;if(g!=G(c,h)&&Dp(G(e,f))!=G(c,h))break;f=f+1|0;}return (-1);}return (-1);}
function NT(a,b){a.c=b;}
function CP(a,b){return KJ(b,a.d6);}
function On(a,b){var c;c=!BE(b,a.b4)?0:1;S(b,a.b4,(-1));return c;}
function JX(){CU.call(this);}
function R9(a,b){var c=new JX();Qk(c,a,b);return c;}
function Qk(a,b,c){F9(a,b,c);}
function Od(a,b,c,d){var e,f;e=CP(a,d);if(e!==null&&(b+L(e)|0)<=d.i){f=!FE(c,e,b)?(-1):L(e);if(f<0)return (-1);S(d,a.b4,f);return a.c.a(b+f|0,c,d);}return (-1);}
function P$(a,b,c,d){var e,f,g;e=CP(a,d);f=d.R;if(e!==null&&(b+L(e)|0)<=f){g=c;while(true){if(b>f)return (-1);b=Jv(g,e,b);if(b<0)return (-1);if(a.c.a(b+L(e)|0,c,d)>=0)break;b=b+1|0;}return b;}return (-1);}
function LZ(a,b,c,d,e){var f,g,h;f=CP(a,e);if(f===null)return (-1);g=d;a:{while(true){if(c<b)return (-1);h=Jz(g,f,c);if(h<0)break a;if(h<b)break a;if(a.c.a(h+L(f)|0,d,e)>=0)break;c=h+(-1)|0;}return h;}return (-1);}
function LK(a,b){return 1;}
function Kl(){CU.call(this);}
function SK(a,b){var c=new Kl();PR(c,a,b);return c;}
function PR(a,b,c){F9(a,b,c);}
function Ld(a,b,c,d){var e,f;e=CP(a,d);if(e!==null&&(b+L(e)|0)<=d.i){f=0;while(true){if(f>=L(e)){S(d,a.b4,L(e));return a.c.a(b+L(e)|0,c,d);}if(Cb(BT(G(e,f)))!=Cb(BT(G(c,b+f|0))))break;f=f+1|0;}return (-1);}return (-1);}
function FC(){CV.call(this);}
function Pt(a,b){BS(a,b);return a;}
function Rc(a,b,c,d){DE(a,b,c,d);return a;}
function O8(a,b){Cl(a,b);return a;}
function LD(a,b,c,d,e){Da(a,b,c,d,e);return a;}
function QB(a,b,c){DH(a,b,c);return a;}
function PA(a,b,c,d,e){Da(a,b,c,d,e);return a;}
function M_(a,b,c,d){DE(a,b,c,d);return a;}
function H4(a,b){var c;if(b>=0&&b<a.v)return a.A.data[b];c=new Bw;V(c);J(c);}
function EB(a){return a.v;}
function Nh(a){return P(a);}
function Ny(a,b){D1(a,b);}
function Pv(a,b,c){DH(a,b,c);return a;}
function KF(){var a=this;Ba.call(a);a.Q=null;a.du=null;a.c2=null;}
function SQ(a){var b=new KF();OB(b,a);return b;}
function OB(a,b){var c;BI(a);a.Q=P(b);a.E=EB(b);a.du=Mk(a.E);a.c2=Mk(a.E);c=0;while(c<(a.E-1|0)){Hj(a.du,G(a.Q,c),(a.E-c|0)-1|0);Hj(a.c2,G(a.Q,(a.E-c|0)-1|0),(a.E-c|0)-1|0);c=c+1|0;}}
function OE(a,b,c){return !Eq(a,c,b)?(-1):a.E;}
function MZ(a,b,c,d){var e,f;e=d.i;while(true){if(b>e)return (-1);f=J$(a,c,b,e);if(f<0)return (-1);if(a.c.a(f+a.E|0,c,d)>=0)break;b=f+1|0;}return f;}
function PY(a,b,c,d,e){while(true){if(c<b)return (-1);c=JL(a,d,b,c);if(c<0)return (-1);if(a.c.a(c+a.E|0,d,e)>=0)break;c=c+(-1)|0;}return c;}
function Qx(a,b){var c;if(b instanceof BX)return b.bb!=G(a.Q,0)?0:1;if(b instanceof BY)return EI(b,0,Cf(a.Q,0,1))<=0?0:1;if(!(b instanceof BM)){if(!(b instanceof BQ))return 1;return L(a.Q)>1&&b.bK==B1(G(a.Q,0),G(a.Q,1))?1:0;}a:{b:{b=b;if(!b.e(G(a.Q,0))){if(L(a.Q)<=1)break b;if(!b.e(B1(G(a.Q,0),G(a.Q,1))))break b;}c=1;break a;}c=0;}return c;}
function J$(a,b,c,d){var e,f;e=G(a.Q,a.E-1|0);while(true){if(c>(d-a.E|0))return (-1);f=G(b,(c+a.E|0)-1|0);if(f==e&&Eq(a,b,c))break;c=c+EQ(a.du,f)|0;}return c;}
function JL(a,b,c,d){var e,f,g;e=G(a.Q,0);f=(L(b)-d|0)-a.E|0;if(f<=0)d=d+f|0;while(true){if(d<c)return (-1);g=G(b,d);if(g==e&&Eq(a,b,d))break;d=d-EQ(a.c2,g)|0;}return d;}
function Eq(a,b,c){var d;d=0;while(d<a.E){if(G(b,d+c|0)!=G(a.Q,d))return 0;d=d+1|0;}return 1;}
function H0(){Ba.call(this);this.cz=null;}
function SX(a){var b=new H0();PV(b,a);return b;}
function PV(a,b){var c,d;BI(a);c=new R;U(c);d=0;while(d<EB(b)){BS(c,Cb(BT(H4(b,d))));d=d+1|0;}a.cz=P(c);a.E=Dm(c);}
function Li(a,b,c){var d;d=0;while(true){if(d>=L(a.cz))return L(a.cz);if(G(a.cz,d)!=Cb(BT(G(c,b+d|0))))break;d=d+1|0;}return (-1);}
function E$(){Ba.call(this);this.cu=null;}
function OU(a,b,c){var d,e,f;d=0;while(true){if(d>=L(a.cu))return L(a.cu);e=G(a.cu,d);f=b+d|0;if(e!=G(c,f)&&Dp(G(a.cu,d))!=G(c,f))break;d=d+1|0;}return (-1);}
function CT(){C.call(this);}
var TI=null;var TJ=null;var TK=null;function Kh(a,b){var c,d,e;c=0;while(true){if(c>=TK.data.length){d=new DT;Bn(d,B(38));d.gv=B(38);d.gl=b;J(d);}e=TK.data[c].data;if(Bf(b,e[0]))break;c=c+1|0;}return e[1];}
function Jx(){var b,c,d,e;TI=SB();TJ=SV();b=E($rt_arraycls(C),194);c=b.data;d=E(C,2);e=d.data;e[0]=B(96);e[1]=SU();c[0]=d;d=E(C,2);e=d.data;e[0]=B(97);e[1]=R5();c[1]=d;d=E(C,2);e=d.data;e[0]=B(98);e[1]=Sz();c[2]=d;d=E(C,2);e=d.data;e[0]=B(99);e[1]=SH();c[3]=d;d=E(C,2);e=d.data;e[0]=B(100);e[1]=TJ;c[4]=d;d=E(C,2);e=d.data;e[0]=B(101);e[1]=R2();c[5]=d;d=E(C,2);e=d.data;e[0]=B(102);e[1]=SS();c[6]=d;d=E(C,2);e=d.data;e[0]=B(103);e[1]=Sa();c[7]=d;d=E(C,2);e=d.data;e[0]=B(104);e[1]=R8();c[8]=d;d=E(C,2);e=d.data;e[0]
=B(105);e[1]=Sg();c[9]=d;d=E(C,2);e=d.data;e[0]=B(106);e[1]=SA();c[10]=d;d=E(C,2);e=d.data;e[0]=B(107);e[1]=Sc();c[11]=d;d=E(C,2);e=d.data;e[0]=B(108);e[1]=Sk();c[12]=d;d=E(C,2);e=d.data;e[0]=B(109);e[1]=R3();c[13]=d;d=E(C,2);e=d.data;e[0]=B(110);e[1]=SF();c[14]=d;d=E(C,2);e=d.data;e[0]=B(111);e[1]=Sx();c[15]=d;d=E(C,2);e=d.data;e[0]=B(112);e[1]=R0();c[16]=d;d=E(C,2);e=d.data;e[0]=B(113);e[1]=St();c[17]=d;d=E(C,2);e=d.data;e[0]=B(114);e[1]=R1();c[18]=d;d=E(C,2);e=d.data;e[0]=B(115);e[1]=Si();c[19]=d;d=E(C,2);e
=d.data;e[0]=B(116);e[1]=SM();c[20]=d;d=E(C,2);e=d.data;e[0]=B(117);e[1]=Sn();c[21]=d;d=E(C,2);e=d.data;e[0]=B(118);e[1]=R7();c[22]=d;d=E(C,2);e=d.data;e[0]=B(119);e[1]=Sy();c[23]=d;d=E(C,2);e=d.data;e[0]=B(120);e[1]=Ss();c[24]=d;d=E(C,2);e=d.data;e[0]=B(121);e[1]=SJ();c[25]=d;d=E(C,2);e=d.data;e[0]=B(122);e[1]=Sh();c[26]=d;d=E(C,2);e=d.data;e[0]=B(123);e[1]=Sm();c[27]=d;d=E(C,2);e=d.data;e[0]=B(124);e[1]=TI;c[28]=d;d=E(C,2);e=d.data;e[0]=B(125);e[1]=R$();c[29]=d;d=E(C,2);e=d.data;e[0]=B(126);e[1]=Sb();c[30]
=d;d=E(C,2);e=d.data;e[0]=B(127);e[1]=TI;c[31]=d;d=E(C,2);e=d.data;e[0]=B(128);e[1]=RY();c[32]=d;d=E(C,2);e=d.data;e[0]=B(129);e[1]=TJ;c[33]=d;d=E(C,2);e=d.data;e[0]=B(130);e[1]=SG();c[34]=d;d=E(C,2);e=d.data;e[0]=B(131);e[1]=F(0,127);c[35]=d;d=E(C,2);e=d.data;e[0]=B(132);e[1]=F(128,255);c[36]=d;d=E(C,2);e=d.data;e[0]=B(133);e[1]=F(256,383);c[37]=d;d=E(C,2);e=d.data;e[0]=B(134);e[1]=F(384,591);c[38]=d;d=E(C,2);e=d.data;e[0]=B(135);e[1]=F(592,687);c[39]=d;d=E(C,2);e=d.data;e[0]=B(136);e[1]=F(688,767);c[40]=d;d
=E(C,2);e=d.data;e[0]=B(137);e[1]=F(768,879);c[41]=d;d=E(C,2);e=d.data;e[0]=B(138);e[1]=F(880,1023);c[42]=d;d=E(C,2);e=d.data;e[0]=B(139);e[1]=F(1024,1279);c[43]=d;d=E(C,2);e=d.data;e[0]=B(140);e[1]=F(1280,1327);c[44]=d;d=E(C,2);e=d.data;e[0]=B(141);e[1]=F(1328,1423);c[45]=d;d=E(C,2);e=d.data;e[0]=B(142);e[1]=F(1424,1535);c[46]=d;d=E(C,2);e=d.data;e[0]=B(143);e[1]=F(1536,1791);c[47]=d;d=E(C,2);e=d.data;e[0]=B(144);e[1]=F(1792,1871);c[48]=d;d=E(C,2);e=d.data;e[0]=B(145);e[1]=F(1872,1919);c[49]=d;d=E(C,2);e=d.data;e[0]
=B(146);e[1]=F(1920,1983);c[50]=d;d=E(C,2);e=d.data;e[0]=B(147);e[1]=F(2304,2431);c[51]=d;d=E(C,2);e=d.data;e[0]=B(148);e[1]=F(2432,2559);c[52]=d;d=E(C,2);e=d.data;e[0]=B(149);e[1]=F(2560,2687);c[53]=d;d=E(C,2);e=d.data;e[0]=B(150);e[1]=F(2688,2815);c[54]=d;d=E(C,2);e=d.data;e[0]=B(151);e[1]=F(2816,2943);c[55]=d;d=E(C,2);e=d.data;e[0]=B(152);e[1]=F(2944,3071);c[56]=d;d=E(C,2);e=d.data;e[0]=B(153);e[1]=F(3072,3199);c[57]=d;d=E(C,2);e=d.data;e[0]=B(154);e[1]=F(3200,3327);c[58]=d;d=E(C,2);e=d.data;e[0]=B(155);e[1]
=F(3328,3455);c[59]=d;d=E(C,2);e=d.data;e[0]=B(156);e[1]=F(3456,3583);c[60]=d;d=E(C,2);e=d.data;e[0]=B(157);e[1]=F(3584,3711);c[61]=d;d=E(C,2);e=d.data;e[0]=B(158);e[1]=F(3712,3839);c[62]=d;d=E(C,2);e=d.data;e[0]=B(159);e[1]=F(3840,4095);c[63]=d;d=E(C,2);e=d.data;e[0]=B(160);e[1]=F(4096,4255);c[64]=d;d=E(C,2);e=d.data;e[0]=B(161);e[1]=F(4256,4351);c[65]=d;d=E(C,2);e=d.data;e[0]=B(162);e[1]=F(4352,4607);c[66]=d;d=E(C,2);e=d.data;e[0]=B(163);e[1]=F(4608,4991);c[67]=d;d=E(C,2);e=d.data;e[0]=B(164);e[1]=F(4992,
5023);c[68]=d;d=E(C,2);e=d.data;e[0]=B(165);e[1]=F(5024,5119);c[69]=d;d=E(C,2);e=d.data;e[0]=B(166);e[1]=F(5120,5759);c[70]=d;d=E(C,2);e=d.data;e[0]=B(167);e[1]=F(5760,5791);c[71]=d;d=E(C,2);e=d.data;e[0]=B(168);e[1]=F(5792,5887);c[72]=d;d=E(C,2);e=d.data;e[0]=B(169);e[1]=F(5888,5919);c[73]=d;d=E(C,2);e=d.data;e[0]=B(170);e[1]=F(5920,5951);c[74]=d;d=E(C,2);e=d.data;e[0]=B(171);e[1]=F(5952,5983);c[75]=d;d=E(C,2);e=d.data;e[0]=B(172);e[1]=F(5984,6015);c[76]=d;d=E(C,2);e=d.data;e[0]=B(173);e[1]=F(6016,6143);c[77]
=d;d=E(C,2);e=d.data;e[0]=B(174);e[1]=F(6144,6319);c[78]=d;d=E(C,2);e=d.data;e[0]=B(175);e[1]=F(6400,6479);c[79]=d;d=E(C,2);e=d.data;e[0]=B(176);e[1]=F(6480,6527);c[80]=d;d=E(C,2);e=d.data;e[0]=B(177);e[1]=F(6528,6623);c[81]=d;d=E(C,2);e=d.data;e[0]=B(178);e[1]=F(6624,6655);c[82]=d;d=E(C,2);e=d.data;e[0]=B(179);e[1]=F(6656,6687);c[83]=d;d=E(C,2);e=d.data;e[0]=B(180);e[1]=F(7424,7551);c[84]=d;d=E(C,2);e=d.data;e[0]=B(181);e[1]=F(7552,7615);c[85]=d;d=E(C,2);e=d.data;e[0]=B(182);e[1]=F(7616,7679);c[86]=d;d=E(C,
2);e=d.data;e[0]=B(183);e[1]=F(7680,7935);c[87]=d;d=E(C,2);e=d.data;e[0]=B(184);e[1]=F(7936,8191);c[88]=d;d=E(C,2);e=d.data;e[0]=B(185);e[1]=F(8192,8303);c[89]=d;d=E(C,2);e=d.data;e[0]=B(186);e[1]=F(8304,8351);c[90]=d;d=E(C,2);e=d.data;e[0]=B(187);e[1]=F(8352,8399);c[91]=d;d=E(C,2);e=d.data;e[0]=B(188);e[1]=F(8400,8447);c[92]=d;d=E(C,2);e=d.data;e[0]=B(189);e[1]=F(8448,8527);c[93]=d;d=E(C,2);e=d.data;e[0]=B(190);e[1]=F(8528,8591);c[94]=d;d=E(C,2);e=d.data;e[0]=B(191);e[1]=F(8592,8703);c[95]=d;d=E(C,2);e=d.data;e[0]
=B(192);e[1]=F(8704,8959);c[96]=d;d=E(C,2);e=d.data;e[0]=B(193);e[1]=F(8960,9215);c[97]=d;d=E(C,2);e=d.data;e[0]=B(194);e[1]=F(9216,9279);c[98]=d;d=E(C,2);e=d.data;e[0]=B(195);e[1]=F(9280,9311);c[99]=d;d=E(C,2);e=d.data;e[0]=B(196);e[1]=F(9312,9471);c[100]=d;d=E(C,2);e=d.data;e[0]=B(197);e[1]=F(9472,9599);c[101]=d;d=E(C,2);e=d.data;e[0]=B(198);e[1]=F(9600,9631);c[102]=d;d=E(C,2);e=d.data;e[0]=B(199);e[1]=F(9632,9727);c[103]=d;d=E(C,2);e=d.data;e[0]=B(200);e[1]=F(9728,9983);c[104]=d;d=E(C,2);e=d.data;e[0]=B(201);e[1]
=F(9984,10175);c[105]=d;d=E(C,2);e=d.data;e[0]=B(202);e[1]=F(10176,10223);c[106]=d;d=E(C,2);e=d.data;e[0]=B(203);e[1]=F(10224,10239);c[107]=d;d=E(C,2);e=d.data;e[0]=B(204);e[1]=F(10240,10495);c[108]=d;d=E(C,2);e=d.data;e[0]=B(205);e[1]=F(10496,10623);c[109]=d;d=E(C,2);e=d.data;e[0]=B(206);e[1]=F(10624,10751);c[110]=d;d=E(C,2);e=d.data;e[0]=B(207);e[1]=F(10752,11007);c[111]=d;d=E(C,2);e=d.data;e[0]=B(208);e[1]=F(11008,11263);c[112]=d;d=E(C,2);e=d.data;e[0]=B(209);e[1]=F(11264,11359);c[113]=d;d=E(C,2);e=d.data;e[0]
=B(210);e[1]=F(11392,11519);c[114]=d;d=E(C,2);e=d.data;e[0]=B(211);e[1]=F(11520,11567);c[115]=d;d=E(C,2);e=d.data;e[0]=B(212);e[1]=F(11568,11647);c[116]=d;d=E(C,2);e=d.data;e[0]=B(213);e[1]=F(11648,11743);c[117]=d;d=E(C,2);e=d.data;e[0]=B(214);e[1]=F(11776,11903);c[118]=d;d=E(C,2);e=d.data;e[0]=B(215);e[1]=F(11904,12031);c[119]=d;d=E(C,2);e=d.data;e[0]=B(216);e[1]=F(12032,12255);c[120]=d;d=E(C,2);e=d.data;e[0]=B(217);e[1]=F(12272,12287);c[121]=d;d=E(C,2);e=d.data;e[0]=B(218);e[1]=F(12288,12351);c[122]=d;d=E(C,
2);e=d.data;e[0]=B(219);e[1]=F(12352,12447);c[123]=d;d=E(C,2);e=d.data;e[0]=B(220);e[1]=F(12448,12543);c[124]=d;d=E(C,2);e=d.data;e[0]=B(221);e[1]=F(12544,12591);c[125]=d;d=E(C,2);e=d.data;e[0]=B(222);e[1]=F(12592,12687);c[126]=d;d=E(C,2);e=d.data;e[0]=B(223);e[1]=F(12688,12703);c[127]=d;d=E(C,2);e=d.data;e[0]=B(224);e[1]=F(12704,12735);c[128]=d;d=E(C,2);e=d.data;e[0]=B(225);e[1]=F(12736,12783);c[129]=d;d=E(C,2);e=d.data;e[0]=B(226);e[1]=F(12784,12799);c[130]=d;d=E(C,2);e=d.data;e[0]=B(227);e[1]=F(12800,13055);c[131]
=d;d=E(C,2);e=d.data;e[0]=B(228);e[1]=F(13056,13311);c[132]=d;d=E(C,2);e=d.data;e[0]=B(229);e[1]=F(13312,19893);c[133]=d;d=E(C,2);e=d.data;e[0]=B(230);e[1]=F(19904,19967);c[134]=d;d=E(C,2);e=d.data;e[0]=B(231);e[1]=F(19968,40959);c[135]=d;d=E(C,2);e=d.data;e[0]=B(232);e[1]=F(40960,42127);c[136]=d;d=E(C,2);e=d.data;e[0]=B(233);e[1]=F(42128,42191);c[137]=d;d=E(C,2);e=d.data;e[0]=B(234);e[1]=F(42752,42783);c[138]=d;d=E(C,2);e=d.data;e[0]=B(235);e[1]=F(43008,43055);c[139]=d;d=E(C,2);e=d.data;e[0]=B(236);e[1]=F(44032,
55203);c[140]=d;d=E(C,2);e=d.data;e[0]=B(237);e[1]=F(55296,56191);c[141]=d;d=E(C,2);e=d.data;e[0]=B(238);e[1]=F(56192,56319);c[142]=d;d=E(C,2);e=d.data;e[0]=B(239);e[1]=F(56320,57343);c[143]=d;d=E(C,2);e=d.data;e[0]=B(240);e[1]=F(57344,63743);c[144]=d;d=E(C,2);e=d.data;e[0]=B(241);e[1]=F(63744,64255);c[145]=d;d=E(C,2);e=d.data;e[0]=B(242);e[1]=F(64256,64335);c[146]=d;d=E(C,2);e=d.data;e[0]=B(243);e[1]=F(64336,65023);c[147]=d;d=E(C,2);e=d.data;e[0]=B(244);e[1]=F(65024,65039);c[148]=d;d=E(C,2);e=d.data;e[0]=B(245);e[1]
=F(65040,65055);c[149]=d;d=E(C,2);e=d.data;e[0]=B(246);e[1]=F(65056,65071);c[150]=d;d=E(C,2);e=d.data;e[0]=B(247);e[1]=F(65072,65103);c[151]=d;d=E(C,2);e=d.data;e[0]=B(248);e[1]=F(65104,65135);c[152]=d;d=E(C,2);e=d.data;e[0]=B(249);e[1]=F(65136,65279);c[153]=d;d=E(C,2);e=d.data;e[0]=B(250);e[1]=F(65280,65519);c[154]=d;d=E(C,2);e=d.data;e[0]=B(251);e[1]=F(0,1114111);c[155]=d;d=E(C,2);e=d.data;e[0]=B(252);e[1]=Sd();c[156]=d;d=E(C,2);e=d.data;e[0]=B(253);e[1]=T(0,1);c[157]=d;d=E(C,2);e=d.data;e[0]=B(254);e[1]=
DC(62,1);c[158]=d;d=E(C,2);e=d.data;e[0]=B(255);e[1]=T(1,1);c[159]=d;d=E(C,2);e=d.data;e[0]=B(256);e[1]=T(2,1);c[160]=d;d=E(C,2);e=d.data;e[0]=B(257);e[1]=T(3,0);c[161]=d;d=E(C,2);e=d.data;e[0]=B(258);e[1]=T(4,0);c[162]=d;d=E(C,2);e=d.data;e[0]=B(259);e[1]=T(5,1);c[163]=d;d=E(C,2);e=d.data;e[0]=B(260);e[1]=DC(448,1);c[164]=d;d=E(C,2);e=d.data;e[0]=B(261);e[1]=T(6,1);c[165]=d;d=E(C,2);e=d.data;e[0]=B(262);e[1]=T(7,0);c[166]=d;d=E(C,2);e=d.data;e[0]=B(263);e[1]=T(8,1);c[167]=d;d=E(C,2);e=d.data;e[0]=B(264);e[1]
=DC(3584,1);c[168]=d;d=E(C,2);e=d.data;e[0]=B(265);e[1]=T(9,1);c[169]=d;d=E(C,2);e=d.data;e[0]=B(266);e[1]=T(10,1);c[170]=d;d=E(C,2);e=d.data;e[0]=B(267);e[1]=T(11,1);c[171]=d;d=E(C,2);e=d.data;e[0]=B(268);e[1]=DC(28672,0);c[172]=d;d=E(C,2);e=d.data;e[0]=B(269);e[1]=T(12,0);c[173]=d;d=E(C,2);e=d.data;e[0]=B(270);e[1]=T(13,0);c[174]=d;d=E(C,2);e=d.data;e[0]=B(271);e[1]=T(14,0);c[175]=d;d=E(C,2);e=d.data;e[0]=B(272);e[1]=SP(983040,1,1);c[176]=d;d=E(C,2);e=d.data;e[0]=B(273);e[1]=T(15,0);c[177]=d;d=E(C,2);e=d.data;e[0]
=B(274);e[1]=T(16,1);c[178]=d;d=E(C,2);e=d.data;e[0]=B(275);e[1]=T(18,1);c[179]=d;d=E(C,2);e=d.data;e[0]=B(276);e[1]=S1(19,0,1);c[180]=d;d=E(C,2);e=d.data;e[0]=B(277);e[1]=DC(1643118592,1);c[181]=d;d=E(C,2);e=d.data;e[0]=B(278);e[1]=T(20,0);c[182]=d;d=E(C,2);e=d.data;e[0]=B(279);e[1]=T(21,0);c[183]=d;d=E(C,2);e=d.data;e[0]=B(280);e[1]=T(22,0);c[184]=d;d=E(C,2);e=d.data;e[0]=B(281);e[1]=T(23,0);c[185]=d;d=E(C,2);e=d.data;e[0]=B(282);e[1]=T(24,1);c[186]=d;d=E(C,2);e=d.data;e[0]=B(283);e[1]=DC(2113929216,1);c[187]
=d;d=E(C,2);e=d.data;e[0]=B(284);e[1]=T(25,1);c[188]=d;d=E(C,2);e=d.data;e[0]=B(285);e[1]=T(26,0);c[189]=d;d=E(C,2);e=d.data;e[0]=B(286);e[1]=T(27,0);c[190]=d;d=E(C,2);e=d.data;e[0]=B(287);e[1]=T(28,1);c[191]=d;d=E(C,2);e=d.data;e[0]=B(288);e[1]=T(29,0);c[192]=d;d=E(C,2);e=d.data;e[0]=B(289);e[1]=T(30,0);c[193]=d;TK=b;}
function K(){var a=this;C.call(a);a.dg=null;a.dA=null;}
function Jc(a,b){if(!b&&a.dg===null)a.dg=a.l();else if(b&&a.dA===null)a.dA=B0(a.l(),1);if(b)return a.dA;return a.dg;}
function EO(){Ba.call(this);this.fk=0;}
function OZ(a,b,c){var d,e;d=b+1|0;e=G(c,b);d=G(c,d);return a.fk!=CD(Cz(B1(e,d)))?(-1):2;}
function DQ(){W.call(this);this.bY=0;}
function Ms(a){var b=new DQ();Nv(b,a);return b;}
function Nv(a,b){X(a);a.bY=b;}
function MQ(a,b){a.c=b;}
function N5(a,b,c,d){var e,f;e=b+1|0;if(e>d.i){d.be=1;return (-1);}f=G(c,b);if(b>d.R&&Bo(G(c,b-1|0)))return (-1);if(a.bY!=f)return (-1);return a.c.a(e,c,d);}
function Qt(a,b,c,d){var e,f,g,h,i;if(!(c instanceof Bd))return Ds(a,b,c,d);e=c;f=d.R;g=d.i;while(true){if(b>=g)return (-1);h=Dg(e,a.bY,b);if(h<0)return (-1);if(h>f&&Bo(G(e,h-1|0))){b=h+1|0;continue;}i=a.c;b=h+1|0;if(i.a(b,c,d)>=0)break;}return h;}
function OM(a,b,c,d,e){var f,g;if(!(d instanceof Bd))return Dz(a,b,c,d,e);f=e.R;g=d;a:{while(true){if(c<b)return (-1);c=Di(g,a.bY,c);if(c<0)break a;if(c<b)break a;if(c>f&&Bo(G(g,c-1|0))){c=c+(-2)|0;continue;}if(a.c.a(c+1|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function LW(a,b){if(b instanceof BX)return 0;if(b instanceof BY)return 0;if(b instanceof BM)return 0;if(b instanceof BQ)return 0;if(b instanceof DY)return 0;if(!(b instanceof DQ))return 1;return b.bY!=a.bY?0:1;}
function PI(a,b){return 1;}
function DY(){W.call(this);this.b0=0;}
function QS(a){var b=new DY();MC(b,a);return b;}
function MC(a,b){X(a);a.b0=b;}
function Nx(a,b){a.c=b;}
function Lt(a,b,c,d){var e,f,g,h;e=d.i;f=b+1|0;g=C9(f,e);if(g>0){d.be=1;return (-1);}h=G(c,b);if(g<0&&Bu(G(c,f)))return (-1);if(a.b0!=h)return (-1);return a.c.a(f,c,d);}
function Nc(a,b,c,d){var e,f,g;if(!(c instanceof Bd))return Ds(a,b,c,d);e=c;f=d.i;while(true){if(b>=f)return (-1);g=Dg(e,a.b0,b);if(g<0)return (-1);b=g+1|0;if(b<f&&Bu(G(e,b))){b=g+2|0;continue;}if(a.c.a(b,c,d)>=0)break;}return g;}
function OR(a,b,c,d,e){var f,g,h;if(!(d instanceof Bd))return Dz(a,b,c,d,e);f=d;g=e.i;a:{while(true){if(c<b)return (-1);c=Di(f,a.b0,c);if(c<0)break a;if(c<b)break a;h=c+1|0;if(h<g&&Bu(G(f,h))){c=c+(-1)|0;continue;}if(a.c.a(h,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function OF(a,b){if(b instanceof BX)return 0;if(b instanceof BY)return 0;if(b instanceof BM)return 0;if(b instanceof BQ)return 0;if(b instanceof DQ)return 0;if(!(b instanceof DY))return 1;return b.b0!=a.b0?0:1;}
function No(a,b){return 1;}
function BQ(){var a=this;Ba.call(a);a.cW=0;a.cJ=0;a.bK=0;}
function Op(a,b,c){var d,e;d=b+1|0;e=G(c,b);d=G(c,d);return a.cW==e&&a.cJ==d?2:(-1);}
function L9(a,b,c,d){var e,f,g;if(!(c instanceof Bd))return Ds(a,b,c,d);e=c;f=d.i;while(b<f){b=Dg(e,a.cW,b);if(b<0)return (-1);b=b+1|0;if(b>=f)continue;g=G(e,b);if(a.cJ==g&&a.c.a(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}
function Nw(a,b,c,d,e){var f;if(!(d instanceof Bd))return Dz(a,b,c,d,e);f=d;a:{while(true){if(c<b)return (-1);c=Di(f,a.cJ,c)+(-1)|0;if(c<0)break a;if(c<b)break a;if(a.cW==G(f,c)&&a.c.a(c+2|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}
function Lv(a){return a.bK;}
function N8(a,b){if(b instanceof BQ)return b.bK!=a.bK?0:1;if(b instanceof BM)return b.e(a.bK);if(b instanceof BX)return 0;if(!(b instanceof BY))return 1;return 0;}
function Gr(){Ce.call(this);}
function NI(a,b){return b!=10?0:1;}
function Of(a,b,c){return b!=10?0:1;}
function Gs(){Ce.call(this);}
function O9(a,b){return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;}
function QV(a,b,c){a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;}
function I4(){var a=this;C.call(a);a.cv=null;a.c6=null;a.Y=0;a.fm=0;}
function Mk(a){var b=new I4();Q9(b,a);return b;}
function Q9(a,b){while(b>=a.Y){a.Y=a.Y<<1|1;}a.Y=a.Y<<1|1;a.cv=$rt_createIntArray(a.Y+1|0);a.c6=$rt_createIntArray(a.Y+1|0);a.fm=b;}
function Hj(a,b,c){var d,e;d=0;e=b&a.Y;while(a.cv.data[e]&&a.cv.data[e]!=b){d=(d+1|0)&a.Y;e=(e+d|0)&a.Y;}a.cv.data[e]=b;a.c6.data[e]=c;}
function EQ(a,b){var c,d,e;c=b&a.Y;d=0;while(true){e=a.cv.data[c];if(!e)break;if(e==b)return a.c6.data[c];d=(d+1|0)&a.Y;c=(c+d|0)&a.Y;}return a.fm;}
function Ij(){C.call(this);}
function DN(){K.call(this);}
function SB(){var a=new DN();QN(a);return a;}
function QN(a){return;}
function Kr(a){return Bk(Y(BB(),9,13),32);}
function Ee(){K.call(this);}
function SV(){var a=new Ee();Pz(a);return a;}
function Pz(a){return;}
function HZ(a){return Y(BB(),48,57);}
function I0(){K.call(this);}
function SU(){var a=new I0();Qa(a);return a;}
function Qa(a){return;}
function OK(a){return Y(BB(),97,122);}
function Jq(){K.call(this);}
function R5(){var a=new Jq();Rb(a);return a;}
function Rb(a){return;}
function PJ(a){return Y(BB(),65,90);}
function Ju(){K.call(this);}
function Sz(){var a=new Ju();M0(a);return a;}
function M0(a){return;}
function Pc(a){return Y(BB(),0,127);}
function EF(){K.call(this);}
function SH(){var a=new EF();Og(a);return a;}
function Og(a){return;}
function I7(a){return Y(Y(BB(),97,122),65,90);}
function D7(){EF.call(this);}
function R2(){var a=new D7();QU(a);return a;}
function QU(a){return;}
function JT(a){return Y(I7(a),48,57);}
function KU(){K.call(this);}
function SS(){var a=new KU();LU(a);return a;}
function LU(a){return;}
function Qs(a){return Y(Y(Y(BB(),33,64),91,96),123,126);}
function EG(){D7.call(this);}
function Sa(){var a=new EG();NO(a);return a;}
function NO(a){return;}
function HX(a){return Y(Y(Y(JT(a),33,64),91,96),123,126);}
function KC(){EG.call(this);}
function R8(){var a=new KC();Pn(a);return a;}
function Pn(a){return;}
function LH(a){return Bk(HX(a),32);}
function KX(){K.call(this);}
function Sg(){var a=new KX();OV(a);return a;}
function OV(a){return;}
function Oy(a){return Bk(Bk(BB(),32),9);}
function Jn(){K.call(this);}
function SA(){var a=new Jn();QL(a);return a;}
function QL(a){return;}
function LC(a){return Bk(Y(BB(),0,31),127);}
function I$(){K.call(this);}
function Sc(){var a=new I$();Nd(a);return a;}
function Nd(a){return;}
function QX(a){return Y(Y(Y(BB(),48,57),97,102),65,70);}
function Jy(){K.call(this);}
function Sk(){var a=new Jy();MG(a);return a;}
function MG(a){return;}
function Mh(a){var b;b=new E4;b.gE=a;O(b);b.q=1;return b;}
function K2(){K.call(this);}
function R3(){var a=new K2();N_(a);return a;}
function N_(a){return;}
function Lp(a){var b;b=new EW;b.fF=a;O(b);b.q=1;return b;}
function I5(){K.call(this);}
function SF(){var a=new I5();M5(a);return a;}
function M5(a){return;}
function QT(a){var b;b=new HL;b.gn=a;O(b);return b;}
function IQ(){K.call(this);}
function Sx(){var a=new IQ();LE(a);return a;}
function LE(a){return;}
function Ot(a){var b;b=new HK;b.gc=a;O(b);return b;}
function JO(){K.call(this);}
function R0(){var a=new JO();Oc(a);return a;}
function Oc(a){return;}
function Ow(a){var b;b=new G7;b.gg=a;O(b);DD(b.p,0,2048);b.q=1;return b;}
function IB(){K.call(this);}
function St(){var a=new IB();NE(a);return a;}
function NE(a){return;}
function OW(a){var b;b=new Ga;b.fN=a;O(b);b.q=1;return b;}
function Ic(){K.call(this);}
function R1(){var a=new Ic();Lf(a);return a;}
function Lf(a){return;}
function QR(a){var b;b=new FA;b.gw=a;O(b);b.q=1;return b;}
function I8(){K.call(this);}
function Si(){var a=new I8();LV(a);return a;}
function LV(a){return;}
function K$(a){var b;b=new G8;b.gG=a;O(b);return b;}
function Jh(){K.call(this);}
function SM(){var a=new Jh();QE(a);return a;}
function QE(a){return;}
function Rx(a){var b;b=new ER;b.fz=a;O(b);b.q=1;return b;}
function JJ(){K.call(this);}
function Sn(){var a=new JJ();L0(a);return a;}
function L0(a){return;}
function O3(a){var b;b=new EU;b.fP=a;O(b);b.q=1;return b;}
function HU(){K.call(this);}
function R7(){var a=new HU();NM(a);return a;}
function NM(a){return;}
function P2(a){var b;b=new Fq;b.ge=a;O(b);b.q=1;return b;}
function KA(){K.call(this);}
function Sy(){var a=new KA();RH(a);return a;}
function RH(a){return;}
function RB(a){var b;b=new Gv;b.go=a;O(b);b.q=1;return b;}
function Je(){K.call(this);}
function Ss(){var a=new Je();Mc(a);return a;}
function Mc(a){return;}
function P5(a){var b;b=new Gz;b.gp=a;O(b);return b;}
function Kf(){K.call(this);}
function SJ(){var a=new Kf();NF(a);return a;}
function NF(a){return;}
function NA(a){var b;b=new Fp;b.fU=a;O(b);return b;}
function JI(){K.call(this);}
function Sh(){var a=new JI();Ou(a);return a;}
function Ou(a){return;}
function L_(a){var b;b=new EL;b.fE=a;O(b);b.q=1;return b;}
function K0(){K.call(this);}
function Sm(){var a=new K0();QA(a);return a;}
function QA(a){return;}
function OD(a){var b;b=new E3;b.gD=a;O(b);b.q=1;return b;}
function DV(){K.call(this);}
function R$(){var a=new DV();O7(a);return a;}
function O7(a){return;}
function KY(a){return Bk(Y(Y(Y(BB(),97,122),65,90),48,57),95);}
function JP(){DV.call(this);}
function Sb(){var a=new JP();QI(a);return a;}
function QI(a){return;}
function LY(a){var b;b=B0(KY(a),1);b.q=1;return b;}
function KG(){DN.call(this);}
function RY(){var a=new KG();Qz(a);return a;}
function Qz(a){return;}
function MS(a){var b;b=B0(Kr(a),1);b.q=1;return b;}
function JD(){Ee.call(this);}
function SG(){var a=new JD();Rk(a);return a;}
function Rk(a){return;}
function Qi(a){var b;b=B0(HZ(a),1);b.q=1;return b;}
function Jb(){var a=this;K.call(a);a.ff=0;a.fy=0;}
function F(a,b){var c=new Jb();QO(c,a,b);return c;}
function QO(a,b,c){a.ff=b;a.fy=c;}
function RW(a){return Y(BB(),a.ff,a.fy);}
function JA(){K.call(this);}
function Sd(){var a=new JA();Q5(a);return a;}
function Q5(a){return;}
function QJ(a){return Y(Y(BB(),65279,65279),65520,65533);}
function Kw(){var a=this;K.call(a);a.dt=0;a.cY=0;a.eE=0;}
function T(a,b){var c=new Kw();N6(c,a,b);return c;}
function S1(a,b,c){var d=new Kw();QQ(d,a,b,c);return d;}
function N6(a,b,c){a.cY=c;a.dt=b;}
function QQ(a,b,c,d){a.eE=d;a.cY=c;a.dt=b;}
function PD(a){var b;b=SR(a.dt);if(a.eE)DD(b.p,0,2048);b.q=a.cY;return b;}
function KD(){var a=this;K.call(a);a.ds=0;a.c9=0;a.d8=0;}
function DC(a,b){var c=new KD();O4(c,a,b);return c;}
function SP(a,b,c){var d=new KD();La(d,a,b,c);return d;}
function O4(a,b,c){a.c9=c;a.ds=b;}
function La(a,b,c,d){a.d8=d;a.c9=c;a.ds=b;}
function K_(a){var b;b=new HG;Ix(b,a.ds);if(a.d8)DD(b.p,0,2048);b.q=a.c9;return b;}
function Fa(){var a=this;C.call(a);a.dz=0;a.dV=0;a.e1=null;}
function PB(a,b,c){var d=new Fa();Pm(d,a,b,c);return d;}
function Pm(a,b,c,d){a.dz=b;a.dV=c;a.e1=d;}
function GT(){var a=this;H.call(a);a.ee=null;a.gj=null;}
function Pg(a,b){var c;c=b-55296|0;return c>=0&&c<2048?a.H^BF(a.ee,c):0;}
function GS(){var a=this;H.call(a);a.eG=null;a.e5=null;a.f0=null;}
function LL(a,b){var c,d;c=b-55296|0;d=c>=0&&c<2048?a.H^BF(a.eG,c):0;return a.e5.e(b)&&!d?1:0;}
function FL(){var a=this;H.call(a);a.cK=null;a.fI=null;}
function RJ(a,b){return a.s^BF(a.cK,b);}
function P7(a){var b,c;b=new R;U(b);c=C3(a.cK,0);while(c>=0){Cl(b,CY(c));BS(b,124);c=C3(a.cK,c+1|0);}if(b.v>0)GM(b,b.v-1|0);return P(b);}
function FS(){var a=this;H.call(a);a.fq=null;a.fC=null;}
function Or(a,b){return a.fq.e(b);}
function FQ(){var a=this;H.call(a);a.c0=0;a.ez=null;a.dC=null;}
function OY(a,b){return !(a.c0^BF(a.dC.m,b))&&!(a.c0^a.dC.bp^a.ez.e(b))?0:1;}
function FR(){var a=this;H.call(a);a.c7=0;a.eN=null;a.dc=null;}
function Lh(a,b){return !(a.c7^BF(a.dc.m,b))&&!(a.c7^a.dc.bp^a.eN.e(b))?1:0;}
function FV(){var a=this;H.call(a);a.fb=0;a.eT=null;a.eL=null;a.f1=null;}
function O0(a,b){return a.fb^(!a.eT.e(b)&&!a.eL.e(b)?0:1);}
function FW(){var a=this;H.call(a);a.fv=0;a.fl=null;a.e$=null;a.gA=null;}
function K4(a,b){return a.fv^(!a.fl.e(b)&&!a.e$.e(b)?0:1)?0:1;}
function FT(){var a=this;H.call(a);a.e4=null;a.gC=null;}
function Qb(a,b){return Bx(a.e4,b);}
function FU(){var a=this;H.call(a);a.e3=null;a.f$=null;}
function Lj(a,b){return Bx(a.e3,b)?0:1;}
function FX(){var a=this;H.call(a);a.dS=null;a.fp=0;a.eu=null;}
function Qe(a,b){return !Bx(a.dS,b)&&!(a.fp^BF(a.eu.m,b))?0:1;}
function FY(){var a=this;H.call(a);a.d$=null;a.ec=0;a.d1=null;}
function Ok(a,b){return !Bx(a.d$,b)&&!(a.ec^BF(a.d1.m,b))?1:0;}
function FK(){var a=this;H.call(a);a.es=0;a.eM=null;a.e8=null;a.fK=null;}
function RX(a,b){return !(a.es^a.eM.e(b))&&!Bx(a.e8,b)?0:1;}
function Gg(){var a=this;H.call(a);a.e7=0;a.dZ=null;a.d9=null;a.f8=null;}
function Qg(a,b){return !(a.e7^a.dZ.e(b))&&!Bx(a.d9,b)?1:0;}
function FI(){var a=this;H.call(a);a.eK=null;a.ga=null;}
function Oh(a,b){return Bx(a.eK,b);}
function FJ(){var a=this;H.call(a);a.eP=null;a.gx=null;}
function PQ(a,b){return Bx(a.eP,b)?0:1;}
function FO(){var a=this;H.call(a);a.fa=null;a.d5=0;a.fx=null;}
function Ra(a,b){return Bx(a.fa,b)&&a.d5^BF(a.fx.m,b)?1:0;}
function FH(){var a=this;H.call(a);a.ek=null;a.fw=0;a.d4=null;}
function PP(a,b){return Bx(a.ek,b)&&a.fw^BF(a.d4.m,b)?0:1;}
function FM(){var a=this;H.call(a);a.ev=0;a.ed=null;a.fu=null;a.fX=null;}
function Nb(a,b){return a.ev^a.ed.e(b)&&Bx(a.fu,b)?1:0;}
function FN(){var a=this;H.call(a);a.eh=0;a.dX=null;a.er=null;a.gd=null;}
function Nn(a,b){return a.eh^a.dX.e(b)&&Bx(a.er,b)?0:1;}
function E6(){C0.call(this);}
function PG(a,b,c,d){var e,f,g;e=0;f=d.i;a:{while(true){if(b>f){b=e;break a;}g=Cn(d,a.u);BH(d,a.u,b);e=a.U.a(b,c,d);if(e>=0)break;BH(d,a.u,g);b=b+1|0;}}return b;}
function RI(a,b,c,d,e){var f,g;f=0;a:{while(true){if(c<b){c=f;break a;}g=Cn(e,a.u);BH(e,a.u,c);f=a.U.a(c,d,e);if(f>=0)break;BH(e,a.u,g);c=c+(-1)|0;}}return c;}
function N3(a){return null;}
function Ei(){}
function EK(){var a=this;C.call(a);a.f4=null;a.eO=null;a.ct=null;a.G=null;a.cM=0;a.cO=0;}
function ET(a,b){var c,d;c=L(a.ct);if(b>=0&&b<=c){Jf(a.G);a.G.b1=1;Jk(a.G,b);b=a.eO.P(b,a.ct,a.G);if(b==(-1))a.G.be=1;if(b>=0&&a.G.cx){H1(a.G);return 1;}a.G.bh=(-1);return 0;}d=new Bw;Bn(d,Fi(b));J(d);}
function J3(a){var b,c;b=L(a.ct);if(!Ip(a))b=a.cO;if(a.G.bh>=0&&a.G.b1==1){a.G.bh=DO(a.G);if(DO(a.G)==I2(a.G)){c=a.G;c.bh=c.bh+1|0;}return a.G.bh<=b&&ET(a,a.G.bh)?1:0;}return ET(a,a.cM);}
function KT(a,b){return Gd(a.G,b);}
function Id(a,b){return HM(a.G,b);}
function Kz(a){return KT(a,0);}
function JE(a){return Id(a,0);}
function Ip(a){return a.G.b6;}
function E4(){H.call(this);this.gE=null;}
function Qo(a,b){return Bg(b)!=2?0:1;}
function EW(){H.call(this);this.fF=null;}
function MO(a,b){return Bg(b)!=1?0:1;}
function HL(){H.call(this);this.gn=null;}
function Ml(a,b){return Hc(b);}
function HK(){H.call(this);this.gc=null;}
function PC(a,b){return 0;}
function G7(){H.call(this);this.gg=null;}
function Q0(a,b){return !Bg(b)?0:1;}
function Ga(){H.call(this);this.fN=null;}
function Qr(a,b){return Bg(b)!=9?0:1;}
function FA(){H.call(this);this.gw=null;}
function MN(a,b){return CX(b);}
function G8(){H.call(this);this.gG=null;}
function Oz(a,b){a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;}
function ER(){H.call(this);this.fz=null;}
function Rq(a,b){a:{b:{switch(Bg(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=CX(b);}return b;}
function EU(){H.call(this);this.fP=null;}
function OI(a,b){a:{b:{switch(Bg(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=CX(b);}return b;}
function Fq(){H.call(this);this.ge=null;}
function QG(a,b){a:{switch(Bg(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;}
function Gv(){H.call(this);this.go=null;}
function Lz(a,b){return DX(b);}
function Gz(){H.call(this);this.gp=null;}
function NS(a,b){return GA(b);}
function Fp(){H.call(this);this.fU=null;}
function Qf(a,b){return Bg(b)!=3?0:1;}
function EL(){H.call(this);this.fE=null;}
function Q6(a,b){a:{b:{switch(Bg(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=CX(b);}return b;}
function E3(){H.call(this);this.gD=null;}
function Ox(a,b){a:{b:{switch(Bg(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=CX(b);}return b;}
function Ex(){H.call(this);this.c8=0;}
function SR(a){var b=new Ex();Ix(b,a);return b;}
function Ix(a,b){O(a);a.c8=b;}
function MP(a,b){return a.s^(a.c8!=Bg(b&65535)?0:1);}
function HG(){Ex.call(this);}
function Pj(a,b){return a.s^(!(a.c8>>Bg(b&65535)&1)?0:1);}
function Gl(){var a=this;C.call(a);a.ba=null;a.cl=null;a.dL=null;a.dO=null;a.eA=0;a.cx=0;a.R=0;a.i=0;a.bh=0;a.b6=0;a.bI=0;a.be=0;a.gb=0;a.bN=0;a.b1=0;}
function S(a,b,c){a.cl.data[b]=c;}
function BE(a,b){return a.cl.data[b];}
function DO(a){return HM(a,0);}
function HM(a,b){HF(a,b);return a.ba.data[(b*2|0)+1|0];}
function BH(a,b,c){a.ba.data[b*2|0]=c;}
function D2(a,b,c){a.ba.data[(b*2|0)+1|0]=c;}
function Cn(a,b){return a.ba.data[b*2|0];}
function Dq(a,b){return a.ba.data[(b*2|0)+1|0];}
function KJ(a,b){var c,d;c=Cn(a,b);d=Dq(a,b);if((d|c|(d-c|0))>=0&&d<=L(a.dO))return Cf(a.dO,c,d);return null;}
function I2(a){return Gd(a,0);}
function Gd(a,b){HF(a,b);return a.ba.data[b*2|0];}
function H1(a){if(a.ba.data[0]==(-1)){a.ba.data[0]=a.bh;a.ba.data[1]=a.bh;}a.bN=DO(a);}
function E1(a,b){return a.dL.data[b];}
function BW(a,b,c){a.dL.data[b]=c;}
function HF(a,b){var c;if(!a.cx){c=new Dc;V(c);J(c);}if(b>=0&&b<a.eA)return;c=new Bw;Bn(c,Fi(b));J(c);}
function Kn(a){a.cx=1;}
function QD(a){return a.cx;}
function Hx(a,b,c,d){a.cx=0;a.b1=2;D3(a.ba,(-1));D3(a.cl,(-1));if(b!==null)a.dO=b;if(c>=0){a.R=c;a.i=d;}a.bh=a.R;}
function Jf(a){Hx(a,null,(-1),(-1));}
function Jk(a,b){a.bh=b;if(a.bN>=0)b=a.bN;a.bN=b;}
function Nl(a){return a.R;}
function Ln(a){return a.i;}
function O1(a,b){a.b1=b;}
function PU(a){return a.b1;}
function Qv(a){return a.bI;}
function LI(a){return a.b6;}
function Mp(a){return a.bN;}
function IK(){C.call(this);}
$rt_packages([-1,"java",0,"util",1,"regex",0,"lang"]);
$rt_metadata([C,"Object",3,0,[],0,3,0,["bf",function(){return Nu(this);}],F3,0,C,[],3,3,0,0,D5,0,C,[F3],1,3,0,0,E2,0,D5,[],0,3,0,0,E7,0,C,[],3,3,0,0,GV,0,C,[E7],0,3,0,0,I9,0,C,[],4,0,0,0,IU,0,C,[],4,3,0,0,BK,0,C,[],3,3,0,0,DF,0,C,[],3,3,0,0,Et,0,C,[],3,3,0,0,Bd,0,C,[BK,DF,Et],0,3,0,0,C1,0,C,[],0,3,0,0,Eu,0,C1,[],0,3,0,0,C4,0,Eu,[],0,3,0,0,Kk,0,C4,[],0,3,0,0,CV,0,C,[BK,Et],0,0,0,["co",function(b){D1(this,b);},"bf",function(){return P(this);}],El,0,C,[],3,3,0,0,R,0,CV,[El],0,3,0,["df",function(b,c,d,e){return Rp(this,
b,c,d,e);},"dE",function(b,c,d){return OS(this,b,c,d);},"bf",function(){return Bs(this);},"co",function(b){RA(this,b);},"dB",function(b,c){return Le(this,b,c);}],D_,0,C,[BK],1,3,0,0,Dv,0,D_,[DF],0,3,0,0,CS,0,C4,[],0,3,0,0,IC,0,CS,[],0,3,0,0,J0,0,CS,[],0,3,0,0,Ca,0,C1,[],0,3,0,0,Bh,0,Ca,[],0,3,0,0,Jj,0,C,[],4,3,0,0,Gx,0,C,[],0,3,0,0,Fv,0,C,[BK],0,3,0,0,Hv,0,C,[BK],0,3,0,0,Fw,0,C,[],0,3,0,0,Ho,0,C,[],3,3,0,0,Fr,0,C,[Ho],0,3,0,0,BV,0,C,[DF],0,3,0,0,GO,0,C,[],3,3,0,0,Dl,0,C,[GO],3,3,0,0,CB,0,C,[Dl],1,3,0,0,C8,0,
C,[Dl],3,3,0,0,CK,0,CB,[C8],1,3,0,0,Dr,0,C,[],3,3,0,0,D4,0,C,[],3,3,0,0,Ft,0,CK,[Dr,BK,D4],0,3,0,["d2",function(b){return Bj(this,b);},"dd",function(){return MT(this);}],Bw,0,Bh,[],0,3,0,0,CZ,0,Bw,[],0,3,0,0,B5,0,C,[],3,3,0,0,EJ,0,C,[B5],3,3,0,0,EN,0,C,[EJ],3,3,0,0,B7,0,C,[B5],3,3,0,0,JQ,0,C,[EN,B7],3,3,0,0,Ks,0,C,[],4,3,0,0]);
$rt_metadata([EH,0,C,[BK],0,3,0,0,Gu,0,C,[B7],3,3,0,0,Hm,0,C,[B7],3,3,0,0,Hh,0,C,[B7],3,3,0,0,Ff,0,C,[B7],3,3,0,0,F7,0,C,[B7,Gu,Hm,Hh,Ff],3,3,0,0,FZ,0,C,[],3,3,0,0,D$,0,C,[B5],3,3,0,0,Iq,0,C,[B5,F7,FZ,D$],1,3,0,["ic",function(b,c){return Lb(this,b,c);},"jO",function(b,c){return Lw(this,b,c);},"gZ",function(b){return Mz(this,b);},"g7",function(b,c,d){return MI(this,b,c,d);},"jv",function(b){return QC(this,b);},"jy",function(){return NN(this);},"ie",function(b,c,d){return Ly(this,b,c,d);}],DW,0,C,[],4,3,0,0,IE,
0,C,[],0,3,0,0,CC,0,C,[],1,3,0,0,CR,0,CC,[],1,3,0,["cN",function(){return Qw(this);},"c3",function(b){Ni(this,b);}],Dx,0,C,[],3,3,0,0,Fu,0,C,[Dx],3,3,0,0,B8,0,C,[Fu],1,3,0,0,GB,0,B8,[],0,0,0,["b7",function(){HQ(this);}],Ii,0,C,[],4,3,0,0,Eh,0,CR,[],0,0,0,0,BJ,0,Bh,[],0,3,0,0,BG,0,BJ,[],0,3,0,0,CE,0,Bh,[],0,3,0,0,HR,0,Bh,[],0,3,0,0,Ji,0,C,[],4,0,0,0,IT,0,C,[],4,3,0,0,Gm,0,C,[],0,3,0,0,Ke,0,C,[],4,3,0,0,KI,0,C,[],0,3,0,0,Eo,0,C,[],3,3,0,0,Fe,0,C,[Eo],0,3,0,0,Fg,0,C,[Eo],0,3,0,0,CQ,0,C,[],0,3,0,0,JV,0,C,[D$],1,
3,0,["jG",function(b){return Rv(this,b);},"jj",function(){return NK(this);}],E_,0,CK,[D4],0,0,0,["d2",function(b){return K6(this,b);},"dd",function(){return IA(this);}],Gp,0,C,[],3,3,0,0,Fh,0,C,[Gp],0,0,0,0,Hd,0,C,[],3,3,0,0,GP,0,C,[Hd],0,3,0,0,E0,0,B8,[],0,3,0,0,GJ,0,CR,[],0,0,0,0,Ea,0,C,[],0,3,So,0,GW,0,Bh,[],0,3,0,0,EP,0,C,[Dl],3,3,0,0,Hy,0,C,[EP],3,3,0,0,FP,0,CB,[Hy],0,3,0,0,C5,0,C,[],3,3,0,0,Fj,0,C,[C5],0,3,0,["cI",function(b){return LB(this,b);}],Fk,0,C,[C5],0,3,0,["cI",function(b){return Qu(this,b);}],Fl,
0,C,[C5],0,3,0,["cI",function(b){return ND(this,b);}],Fm,0,C,[C5],0,3,0,["cI",function(b){return OC(this,b);}]]);
$rt_metadata([F2,0,B8,[],0,3,0,["b7",function(){J2(this);}],CA,0,C,[],3,3,0,0,Hr,0,C,[CA],0,3,0,0,Fz,0,C,[],3,3,0,0,GI,0,C,[Fz],0,0,0,0,F0,0,CC,[],0,3,0,["cN",function(){return RR(this);},"c3",function(b){QH(this,b);}],Dc,0,Ca,[],0,3,0,0,Ib,0,C,[Dx],0,3,0,["b7",function(){LO(this);}],Hu,0,C,[CA],0,3,0,["cV",function(){return OT(this);}],C6,0,C,[],3,3,0,0,Gh,0,C,[C6],0,3,0,["cL",function(b){OX(this,b);}],Ht,0,C,[CA],0,3,0,["cV",function(){return Oj(this);}],Gi,0,C,[C6],0,3,0,["cL",function(b){Ma(this,b);}],Hs,
0,C,[CA],0,3,0,["cV",function(){return NW(this);}],Gj,0,C,[C6],0,3,0,["cL",function(b){Ru(this,b);}],Er,0,C,[Dx],1,3,0,["b7",function(){Lr(this);}],GG,0,Er,[],0,3,0,0,GK,0,C,[],3,3,0,0,HC,0,C,[GK],0,3,0,0,HP,0,Bh,[],0,3,0,0,Dw,0,C,[B5],3,3,0,0,Hk,0,C,[Dw],0,3,0,["d_",function(b){return N0(this,b);}],JS,0,C,[],4,3,0,0,GH,0,C,[Dw],0,3,0,["d_",function(b){return Mq(this,b);}],GN,0,C,[Dw],0,3,0,["d_",function(b){return Oo(this,b);}],JH,0,C,[B5],1,3,0,0,Hb,0,C,[BK],4,3,0,0,Q,0,C,[],1,0,0,["P",function(b,c,d){return Ds(this,
b,c,d);},"O",function(b,c,d,e){return Dz(this,b,c,d,e);},"ch",function(){return Nm(this);},"r",function(b){P9(this,b);},"I",function(b){return P8(this,b);},"bL",function(){return Q1(this);},"bw",function(){DP(this);}],Bq,0,Q,[],0,0,0,["a",function(b,c,d){return ME(this,b,c,d);},"n",function(b){return Na(this,b);}],CH,0,C,[],0,0,0,0,Kb,0,BJ,[],0,3,0,0,IL,0,C,[],4,3,0,0,HE,0,Bq,[],0,0,0,["a",function(b,c,d){return LX(this,b,c,d);},"n",function(b){return OL(this,b);}],HB,0,Bq,[],0,0,0,["a",function(b,c,d){return N9(this,
b,c,d);}],GF,0,Bq,[],0,0,0,["a",function(b,c,d){return Nk(this,b,c,d);}],EZ,0,Bq,[],0,0,0,["a",function(b,c,d){return L5(this,b,c,d);},"n",function(b){return M3(this,b);}],Ci,0,Bq,[],0,0,0,["a",function(b,c,d){return Qq(this,b,c,d);}],Ba,0,Q,[],1,0,0,["a",function(b,c,d){return Rt(this,b,c,d);},"K",function(){return Pw(this);},"n",function(b){return Q7(this,b);}],JK,0,Ba,[],0,0,0,["C",function(b,c){return O5(this,b,c);},"P",function(b,c,d){return Pr(this,b,c,d);},"O",function(b,c,d,e){return NZ(this,b,c,d,e);
},"n",function(b){return L1(this,b);}],W,0,Q,[],0,0,0,["a",function(b,c,d){return P_(this,b,c,d);},"r",function(b){MX(this,b);},"I",function(b){return RU(this,b);},"n",function(b){return NQ(this,b);},"bw",function(){NU(this);}],DI,0,W,[],0,0,0,["a",function(b,c,d){return ML(this,b,c,d);},"n",function(b){return Om(this,b);}],BN,0,DI,[],0,0,0,["a",function(b,c,d){return OH(this,b,c,d);},"r",function(b){NV(this,b);}],ES,0,BN,[],0,0,0,["a",function(b,c,d){return MR(this,b,c,d);},"n",function(b){return Qc(this,b);
}],GL,0,BN,[],0,0,0,["a",function(b,c,d){return M7(this,b,c,d);},"n",function(b){return PF(this,b);}],He,0,BN,[],0,0,0,["a",function(b,c,d){return NP(this,b,c,d);},"n",function(b){return RQ(this,b);}],Fd,0,BN,[],0,0,0,["a",function(b,c,d){return Ls(this,b,c,d);},"n",function(b){return OA(this,b);}],C0,0,W,[],0,0,0,["a",function(b,c,d){return LN(this,b,c,d);},"P",function(b,c,d){return Lg(this,b,c,d);},"O",function(b,c,d,e){return ON(this,b,c,d,e);},"I",function(b){return RL(this,b);},"bL",function(){return M1(this);
},"bw",function(){Q4(this);}],DB,0,Bh,[],0,3,0,0,CM,0,C,[],1,0,0,0,H,0,CM,[],1,0,0,["bi",function(){return M$(this);},"bF",function(){return Mg(this);},"cB",function(){return Po(this);},"cd",function(){return QY(this);}]]);
$rt_metadata([I6,"CharClass",2,H,[],0,0,0,["e",function(b){return Bx(this,b);},"bi",function(){return Bt(this);},"bF",function(){return Ph(this);},"cB",function(){return PX(this);},"bf",function(){return L6(this);},"cd",function(){return Py(this);}],DT,0,Bh,[],0,3,0,0,BP,0,Q,[],1,0,0,["I",function(b){return OO(this,b);},"n",function(b){return Qj(this,b);},"bw",function(){LF(this);}],By,0,BP,[],0,0,0,["a",function(b,c,d){return Lu(this,b,c,d);}],Ch,0,By,[],0,0,0,["a",function(b,c,d){return MH(this,b,c,d);}],Br,
0,BP,[],0,0,0,["a",function(b,c,d){return LM(this,b,c,d);}],B6,0,By,[],0,0,0,["a",function(b,c,d){return Lm(this,b,c,d);},"r",function(b){RV(this,b);}],GU,0,By,[],0,0,0,["a",function(b,c,d){return Rm(this,b,c,d);},"P",function(b,c,d){return L3(this,b,c,d);}],E5,"Quantifier",2,CM,[Dr],0,0,0,["bf",function(){return Md(this);}],FD,0,Q,[],0,0,0,["a",function(b,c,d){return Rl(this,b,c,d);},"n",function(b){return MW(this,b);}],G9,0,C,[Dr,BK],0,3,0,0,EX,0,W,[],0,0,0,0,GQ,0,W,[],0,0,0,["a",function(b,c,d){return MB(this,
b,c,d);},"r",function(b){MJ(this,b);},"n",function(b){return Nq(this,b);},"I",function(b){return M9(this,b);}],BM,0,W,[],0,0,0,["a",function(b,c,d){return Pb(this,b,c,d);},"e",function(b){return PL(this,b);},"I",function(b){return Mu(this,b);},"r",function(b){Pi(this,b);},"n",function(b){return Pk(this,b);}],DS,0,BM,[],0,0,0,["e",function(b){return Q8(this,b);}],IV,0,Ba,[],0,0,0,["C",function(b,c){return Rn(this,b,c);}],BY,0,Ba,[],0,0,0,["C",function(b,c){return EI(this,b,c);},"I",function(b){return MY(this,
b);}],F1,0,W,[],0,0,0,["r",function(b){Lk(this,b);},"a",function(b,c,d){return Ll(this,b,c,d);},"I",function(b){return Nf(this,b);},"n",function(b){return P3(this,b);}],BX,0,Ba,[],0,0,0,["K",function(){return Re(this);},"C",function(b,c){return Ql(this,b,c);},"P",function(b,c,d){return O$(this,b,c,d);},"O",function(b,c,d,e){return Ri(this,b,c,d,e);},"I",function(b){return PT(this,b);}],Kq,0,Ba,[],0,0,0,["C",function(b,c){return K9(this,b,c);}],H6,0,Ba,[],0,0,0,["C",function(b,c){return LG(this,b,c);}],Cq,0,
W,[],0,0,0,["r",function(b){Q3(this,b);},"a",function(b,c,d){return MK(this,b,c,d);},"I",function(b){return Ro(this,b);},"n",function(b){return NY(this,b);}],Hn,0,Cq,[],0,0,0,0,Fs,0,Cq,[],0,0,0,0,HS,0,Br,[],0,0,0,["a",function(b,c,d){return Oe(this,b,c,d);}],GD,0,Br,[],0,0,0,["a",function(b,c,d){return LT(this,b,c,d);}],Cw,0,Br,[],0,0,0,["a",function(b,c,d){return Pe(this,b,c,d);},"r",function(b){Qy(this,b);}],Gn,0,Cw,[],0,0,0,["a",function(b,c,d){return Rf(this,b,c,d);},"r",function(b){Me(this,b);}],Cp,0,Br,
[],0,0,0,["a",function(b,c,d){return RK(this,b,c,d);}],E8,0,Cp,[],0,0,0,["a",function(b,c,d){return QM(this,b,c,d);}],Hp,0,Br,[],0,0,0,["a",function(b,c,d){return Rd(this,b,c,d);}],GY,0,Cw,[],0,0,0,["a",function(b,c,d){return Nr(this,b,c,d);}],F_,0,Cp,[],0,0,0,["a",function(b,c,d){return L8(this,b,c,d);}],Hq,0,BP,[],0,0,0,["a",function(b,c,d){return Rz(this,b,c,d);},"P",function(b,c,d){return Pq(this,b,c,d);}],FG,0,BP,[],0,0,0,["a",function(b,c,d){return M2(this,b,c,d);},"P",function(b,c,d){return Lq(this,b,
c,d);}],Ce,0,C,[],1,0,0,0,HT,0,By,[],0,0,0,["a",function(b,c,d){return Mb(this,b,c,d);}],GR,0,B6,[],0,0,0,["a",function(b,c,d){return LR(this,b,c,d);}],Ge,0,Ch,[],0,0,0,["a",function(b,c,d){return OQ(this,b,c,d);}],GX,0,By,[],0,0,0,["a",function(b,c,d){return MU(this,b,c,d);}],Fy,0,B6,[],0,0,0,["a",function(b,c,d){return Mn(this,b,c,d);}],Hf,0,Ch,[],0,0,0,["a",function(b,c,d){return O6(this,b,c,d);}],Kt,0,Q,[],4,0,0,["a",function(b,c,d){return RP(this,b,c,d);},"n",function(b){return QW(this,b);}],Jw,0,Q,[],
0,0,0,["a",function(b,c,d){return M6(this,b,c,d);},"n",function(b){return Ne(this,b);}],IN,0,Q,[],0,0,0,["a",function(b,c,d){return Q$(this,b,c,d);},"n",function(b){return RF(this,b);}],Ha,0,Q,[],4,0,0,["a",function(b,c,d){return NH(this,b,c,d);},"n",function(b){return N4(this,b);}],J7,0,Q,[],0,0,0,["a",function(b,c,d){return MF(this,b,c,d);},"n",function(b){return K8(this,b);}],Ik,0,Q,[],0,0,0,["a",function(b,c,d){return NR(this,b,c,d);},"n",function(b){return P0(this,b);}],J4,0,W,[],0,0,0,["a",function(b,
c,d){return Rh(this,b,c,d);},"r",function(b){Nj(this,b);},"ch",function(){return Mm(this);},"n",function(b){return Ng(this,b);}],I3,0,W,[],4,0,0,["a",function(b,c,d){return MA(this,b,c,d);},"r",function(b){OG(this,b);},"ch",function(){return K3(this);},"n",function(b){return Rs(this,b);}]]);
$rt_metadata([JU,0,Q,[],4,0,0,["a",function(b,c,d){return Rr(this,b,c,d);},"n",function(b){return PS(this,b);}],H$,0,Q,[],0,0,0,["a",function(b,c,d){return MD(this,b,c,d);},"n",function(b){return PH(this,b);}],H2,0,Q,[],0,0,0,["a",function(b,c,d){return QP(this,b,c,d);},"n",function(b){return N7(this,b);}],CU,0,W,[],0,0,0,["a",function(b,c,d){return Mf(this,b,c,d);},"r",function(b){NT(this,b);},"n",function(b){return On(this,b);}],JX,0,CU,[],0,0,0,["a",function(b,c,d){return Od(this,b,c,d);},"P",function(b,
c,d){return P$(this,b,c,d);},"O",function(b,c,d,e){return LZ(this,b,c,d,e);},"I",function(b){return LK(this,b);}],Kl,0,CU,[],0,0,0,["a",function(b,c,d){return Ld(this,b,c,d);}],FC,0,CV,[El],0,3,0,["df",function(b,c,d,e){return PA(this,b,c,d,e);},"dE",function(b,c,d){return M_(this,b,c,d);},"co",function(b){Ny(this,b);},"dB",function(b,c){return Pv(this,b,c);}],KF,0,Ba,[],0,0,0,["C",function(b,c){return OE(this,b,c);},"P",function(b,c,d){return MZ(this,b,c,d);},"O",function(b,c,d,e){return PY(this,b,c,d,e);},
"I",function(b){return Qx(this,b);}],H0,0,Ba,[],0,0,0,["C",function(b,c){return Li(this,b,c);}],E$,0,Ba,[],0,0,0,["C",function(b,c){return OU(this,b,c);}],CT,0,C,[],4,0,0,0,K,0,C,[],1,0,0,0,EO,0,Ba,[],0,0,0,["C",function(b,c){return OZ(this,b,c);}],DQ,0,W,[],0,0,0,["r",function(b){MQ(this,b);},"a",function(b,c,d){return N5(this,b,c,d);},"P",function(b,c,d){return Qt(this,b,c,d);},"O",function(b,c,d,e){return OM(this,b,c,d,e);},"I",function(b){return LW(this,b);},"n",function(b){return PI(this,b);}],DY,0,W,[],
0,0,0,["r",function(b){Nx(this,b);},"a",function(b,c,d){return Lt(this,b,c,d);},"P",function(b,c,d){return Nc(this,b,c,d);},"O",function(b,c,d,e){return OR(this,b,c,d,e);},"I",function(b){return OF(this,b);},"n",function(b){return No(this,b);}],BQ,0,Ba,[],0,0,0,["C",function(b,c){return Op(this,b,c);},"P",function(b,c,d){return L9(this,b,c,d);},"O",function(b,c,d,e){return Nw(this,b,c,d,e);},"I",function(b){return N8(this,b);}],Gr,0,Ce,[],4,0,0,["cc",function(b){return NI(this,b);},"ej",function(b,c){return Of(this,
b,c);}],Gs,0,Ce,[],4,0,0,["cc",function(b){return O9(this,b);},"ej",function(b,c){return QV(this,b,c);}],I4,0,C,[],0,0,0,0,Ij,0,C,[],0,0,0,0,DN,0,K,[],0,0,0,["l",function(){return Kr(this);}],Ee,0,K,[],0,0,0,["l",function(){return HZ(this);}],I0,0,K,[],0,0,0,["l",function(){return OK(this);}],Jq,0,K,[],0,0,0,["l",function(){return PJ(this);}],Ju,0,K,[],0,0,0,["l",function(){return Pc(this);}],EF,0,K,[],0,0,0,["l",function(){return I7(this);}],D7,0,EF,[],0,0,0,["l",function(){return JT(this);}],KU,0,K,[],0,0,
0,["l",function(){return Qs(this);}],EG,0,D7,[],0,0,0,["l",function(){return HX(this);}],KC,0,EG,[],0,0,0,["l",function(){return LH(this);}],KX,0,K,[],0,0,0,["l",function(){return Oy(this);}],Jn,0,K,[],0,0,0,["l",function(){return LC(this);}],I$,0,K,[],0,0,0,["l",function(){return QX(this);}],Jy,0,K,[],0,0,0,["l",function(){return Mh(this);}],K2,0,K,[],0,0,0,["l",function(){return Lp(this);}],I5,0,K,[],0,0,0,["l",function(){return QT(this);}],IQ,0,K,[],0,0,0,["l",function(){return Ot(this);}],JO,0,K,[],0,0,
0,["l",function(){return Ow(this);}],IB,0,K,[],0,0,0,["l",function(){return OW(this);}],Ic,0,K,[],0,0,0,["l",function(){return QR(this);}],I8,0,K,[],0,0,0,["l",function(){return K$(this);}],Jh,0,K,[],0,0,0,["l",function(){return Rx(this);}],JJ,0,K,[],0,0,0,["l",function(){return O3(this);}],HU,0,K,[],0,0,0,["l",function(){return P2(this);}],KA,0,K,[],0,0,0,["l",function(){return RB(this);}],Je,0,K,[],0,0,0,["l",function(){return P5(this);}],Kf,0,K,[],0,0,0,["l",function(){return NA(this);}],JI,0,K,[],0,0,0,
["l",function(){return L_(this);}],K0,0,K,[],0,0,0,["l",function(){return OD(this);}],DV,0,K,[],0,0,0,["l",function(){return KY(this);}]]);
$rt_metadata([JP,0,DV,[],0,0,0,["l",function(){return LY(this);}],KG,0,DN,[],0,0,0,["l",function(){return MS(this);}],JD,0,Ee,[],0,0,0,["l",function(){return Qi(this);}],Jb,0,K,[],0,0,0,["l",function(){return RW(this);}],JA,0,K,[],0,0,0,["l",function(){return QJ(this);}],Kw,0,K,[],0,0,0,["l",function(){return PD(this);}],KD,0,K,[],0,0,0,["l",function(){return K_(this);}],Fa,0,C,[],0,3,0,0,GT,"AbstractCharClass$1",2,H,[],0,0,0,["e",function(b){return Pg(this,b);}],GS,"AbstractCharClass$2",2,H,[],0,0,0,["e",function(b)
{return LL(this,b);}],FL,"CharClass$18",2,H,[],0,0,0,["e",function(b){return RJ(this,b);},"bf",function(){return P7(this);}],FS,0,H,[],0,0,0,["e",function(b){return Or(this,b);}],FQ,0,H,[],0,0,0,["e",function(b){return OY(this,b);}],FR,0,H,[],0,0,0,["e",function(b){return Lh(this,b);}],FV,0,H,[],0,0,0,["e",function(b){return O0(this,b);}],FW,0,H,[],0,0,0,["e",function(b){return K4(this,b);}],FT,0,H,[],0,0,0,["e",function(b){return Qb(this,b);}],FU,0,H,[],0,0,0,["e",function(b){return Lj(this,b);}],FX,0,H,[],
0,0,0,["e",function(b){return Qe(this,b);}],FY,0,H,[],0,0,0,["e",function(b){return Ok(this,b);}],FK,0,H,[],0,0,0,["e",function(b){return RX(this,b);}],Gg,0,H,[],0,0,0,["e",function(b){return Qg(this,b);}],FI,0,H,[],0,0,0,["e",function(b){return Oh(this,b);}],FJ,0,H,[],0,0,0,["e",function(b){return PQ(this,b);}],FO,0,H,[],0,0,0,["e",function(b){return Ra(this,b);}],FH,0,H,[],0,0,0,["e",function(b){return PP(this,b);}],FM,0,H,[],0,0,0,["e",function(b){return Nb(this,b);}],FN,0,H,[],0,0,0,["e",function(b){return Nn(this,
b);}],E6,0,C0,[],0,0,0,["P",function(b,c,d){return PG(this,b,c,d);},"O",function(b,c,d,e){return RI(this,b,c,d,e);},"bL",function(){return N3(this);}],Ei,0,C,[],3,3,0,0,EK,0,C,[Ei],4,3,0,0,E4,"AbstractCharClass$LazyJavaLowerCase$1",2,H,[],0,0,0,["e",function(b){return Qo(this,b);}],EW,"AbstractCharClass$LazyJavaUpperCase$1",2,H,[],0,0,0,["e",function(b){return MO(this,b);}],HL,"AbstractCharClass$LazyJavaWhitespace$1",2,H,[],0,0,0,["e",function(b){return Ml(this,b);}],HK,"AbstractCharClass$LazyJavaMirrored$1",
2,H,[],0,0,0,["e",function(b){return PC(this,b);}],G7,"AbstractCharClass$LazyJavaDefined$1",2,H,[],0,0,0,["e",function(b){return Q0(this,b);}],Ga,"AbstractCharClass$LazyJavaDigit$1",2,H,[],0,0,0,["e",function(b){return Qr(this,b);}],FA,"AbstractCharClass$LazyJavaIdentifierIgnorable$1",2,H,[],0,0,0,["e",function(b){return MN(this,b);}],G8,"AbstractCharClass$LazyJavaISOControl$1",2,H,[],0,0,0,["e",function(b){return Oz(this,b);}],ER,"AbstractCharClass$LazyJavaJavaIdentifierPart$1",2,H,[],0,0,0,["e",function(b)
{return Rq(this,b);}],EU,"AbstractCharClass$LazyJavaJavaIdentifierStart$1",2,H,[],0,0,0,["e",function(b){return OI(this,b);}],Fq,"AbstractCharClass$LazyJavaLetter$1",2,H,[],0,0,0,["e",function(b){return QG(this,b);}],Gv,"AbstractCharClass$LazyJavaLetterOrDigit$1",2,H,[],0,0,0,["e",function(b){return Lz(this,b);}],Gz,"AbstractCharClass$LazyJavaSpaceChar$1",2,H,[],0,0,0,["e",function(b){return NS(this,b);}],Fp,"AbstractCharClass$LazyJavaTitleCase$1",2,H,[],0,0,0,["e",function(b){return Qf(this,b);}],EL,"AbstractCharClass$LazyJavaUnicodeIdentifierPart$1",
2,H,[],0,0,0,["e",function(b){return Q6(this,b);}],E3,"AbstractCharClass$LazyJavaUnicodeIdentifierStart$1",2,H,[],0,0,0,["e",function(b){return Ox(this,b);}],Ex,"UnicodeCategory",2,H,[],0,0,0,["e",function(b){return MP(this,b);}],HG,"UnicodeCategoryScope",2,Ex,[],0,0,0,["e",function(b){return Pj(this,b);}],Gl,0,C,[Ei],0,0,0,0]);
$rt_metadata([IK,0,C,[],0,0,0,0]);
function $rt_array(cls,data){this.lC=null;this.$id$=0;this.type=cls;this.data=data;this.constructor=$rt_arraycls(cls);}$rt_array.prototype=Object.create(($rt_objcls()).prototype);$rt_array.prototype.toString=function(){var str="[";for(var i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};$rt_setCloneMethod($rt_array.prototype,function(){var dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for
(var i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new $rt_array(this.type,dataCopy);});$rt_stringPool(["@","0","SWITCH","FROGGYDEX","FEED","HELP","MOVE","VIEW","BREED","PRICE","BUYFEED","BUYFROG","RELEASE","Frog "," bred with frog "," to produce a new frog!","Frogs need to be fully grown (Maturity 3) to breed!","Money: ","    Feed: ","   Current Box: ","\n",": ",", Maturity: ",":yum:, feed frog "," and increased its maturity by 1","That frog is already fully grown!","Are you sure? (Y/N)","Y",
"Release Cancelled.","Done.","Switched to box ","Not enough money! Feed costs 2 money each.","Pleasure doing business with you!"," ","That frog costs: ","That\'s too expensive for you. Make more money first!","Not a recognized command! Type \"Help\" for a list of commands.","Here are the recognized commands:\nBreed <index1> <index2>\nFeed <index>\nMove <index> <destination box>\nSwitch <box to switch to>\nView (This command lists all frogs in the currently selected box)\nRelease <index>\nBuy (arguments are \nFroggydex (shows all frogs unlocked)",
"","application-content","null","Patter is null","String contains invalid digits: ","String contains digits out of radix ","The value is too big for int type: ","String is null or empty","Illegal radix: ","Printing FroggyDex:  ","    BASE RED ORN YLW GRN BLU PRP WHT BLK GLS ","ACCENT ","      "," -  "," +  "," with an accent of ","The given space is already hosted by a slot","Successor does not belong to this slot","RED","ORN","PRP","BLK","YLW","GRN","BLU","GLS","WHT","\r\n\r\n","div","\r\n  ","label","Inputs:",
"input","type","text","button","Do it","\r\n","for","outputStuff","The output is:","\r\n    ","textarea","id","rows","9","cols","70","Can\'t set attribute to root node","Can\'t apply modifier to root node","click","submit","Is","In","Either src or dest is null","{",",","}","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart",
"javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam",
"Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation","SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols",
"NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows","Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation",
"CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri","HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea",
"CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","all","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS","Sm","Sc","Sk","So","Pi","Pf"]);
Bd.prototype.toString=function(){return $rt_ustr(this);};
Bd.prototype.valueOf=Bd.prototype.toString;C.prototype.toString=function(){return $rt_ustr(Nu(this));};
C.prototype.__teavm_class__=function(){return $dbg_class(this);};
function $rt_startThread(runner,callback){var result;try {result=runner();}catch(e){result=e;}if(typeof callback!=='undefined'){callback(result);}else if(result instanceof Error){throw result;}}function $rt_suspending(){return false;}function $rt_resuming(){return false;}function $rt_nativeThread(){return null;}function $rt_invalidPointer(){}main=$rt_mainStarter(Sj);
(function(){var c;c=Iq.prototype;c.dispatchEvent=c.jv;c.addEventListener=c.ic;c.removeEventListener=c.jO;c.getLength=c.jy;c.get=c.gZ;c.addEventListener=c.ie;c.removeEventListener=c.g7;c=JV.prototype;c.getLength=c.jj;c.get=c.jG;c=Hk.prototype;c.handleEvent=c.d_;c=GH.prototype;c.handleEvent=c.d_;c=GN.prototype;c.handleEvent=c.d_;})();
})();

//# sourceMappingURL=classes.js.map