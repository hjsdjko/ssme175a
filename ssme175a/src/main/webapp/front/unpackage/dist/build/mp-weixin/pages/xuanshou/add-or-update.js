(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/xuanshou/add-or-update"],{1521:function(n,e,a){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=u(a("a34a"));function u(n){return n&&n.__esModule?n:{default:n}}function r(n,e,a,t,u,r,i){try{var o=n[r](i),c=o.value}catch(s){return void a(s)}o.done?e(c):Promise.resolve(c).then(t,u)}function i(n){return function(){var e=this,a=arguments;return new Promise((function(t,u){var i=n.apply(e,a);function o(n){r(i,t,u,o,c,"next",n)}function c(n){r(i,t,u,o,c,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(function(){return resolve(a("ffff"))}.bind(null,a)).catch(a.oe)},c={data:function(){return{ruleForm:{mingcheng:"",suoshuzhandui:"",zhaopian:"",dangqianduanwei:"",dangqianfenshu:"",jinqibisaijilu:"",xiangqing:"",thumbsupnum:"",crazilynum:""},dangqianduanweiOptions:[],dangqianduanweiIndex:0,user:{},ro:{mingcheng:!1,suoshuzhandui:!1,zhaopian:!1,dangqianduanwei:!1,dangqianfenshu:!1,jinqibisaijilu:!1,xiangqing:!1,thumbsupnum:!1,crazilynum:!1}}},components:{wPicker:o},computed:{},onLoad:function(e){var a=this;return i(t.default.mark((function u(){var r,i,o,c;return t.default.wrap((function(u){while(1)switch(u.prev=u.next){case 0:return r=n.getStorageSync("nowTable"),u.next=3,a.$api.session(r);case 3:if(i=u.sent,a.user=i.data,a.dangqianduanweiOptions="黑铁,青铜,白银,黄金,铂金,钻石,超凡大师,傲世宗师,最强王者".split(","),a.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(a.ruleForm.refid=e.refid,a.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){u.next=14;break}return a.ruleForm.id=e.id,u.next=12,a.$api.info("xuanshou",a.ruleForm.id);case 12:i=u.sent,a.ruleForm=i.data;case 14:if(!e.cross){u.next=57;break}o=n.getStorageSync("crossObj"),u.t0=t.default.keys(o);case 17:if((u.t1=u.t0()).done){u.next=57;break}if(c=u.t1.value,"mingcheng"!=c){u.next=23;break}return a.ruleForm.mingcheng=o[c],a.ro.mingcheng=!0,u.abrupt("continue",17);case 23:if("suoshuzhandui"!=c){u.next=27;break}return a.ruleForm.suoshuzhandui=o[c],a.ro.suoshuzhandui=!0,u.abrupt("continue",17);case 27:if("zhaopian"!=c){u.next=31;break}return a.ruleForm.zhaopian=o[c],a.ro.zhaopian=!0,u.abrupt("continue",17);case 31:if("dangqianduanwei"!=c){u.next=35;break}return a.ruleForm.dangqianduanwei=o[c],a.ro.dangqianduanwei=!0,u.abrupt("continue",17);case 35:if("dangqianfenshu"!=c){u.next=39;break}return a.ruleForm.dangqianfenshu=o[c],a.ro.dangqianfenshu=!0,u.abrupt("continue",17);case 39:if("jinqibisaijilu"!=c){u.next=43;break}return a.ruleForm.jinqibisaijilu=o[c],a.ro.jinqibisaijilu=!0,u.abrupt("continue",17);case 43:if("xiangqing"!=c){u.next=47;break}return a.ruleForm.xiangqing=o[c],a.ro.xiangqing=!0,u.abrupt("continue",17);case 47:if("thumbsupnum"!=c){u.next=51;break}return a.ruleForm.thumbsupnum=o[c],a.ro.thumbsupnum=!0,u.abrupt("continue",17);case 51:if("crazilynum"!=c){u.next=55;break}return a.ruleForm.crazilynum=o[c],a.ro.crazilynum=!0,u.abrupt("continue",17);case 55:u.next=17;break;case 57:a.styleChange();case 58:case"end":return u.stop()}}),u)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},dangqianduanweiChange:function(n){this.dangqianduanweiIndex=n.target.value,this.ruleForm.dangqianduanwei=this.dangqianduanweiOptions[this.dangqianduanweiIndex]},zhaopianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.zhaopian=n.$base.url+"upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return i(t.default.mark((function e(){return t.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!n.ruleForm.dangqianfenshu||n.$validate.isIntNumer(n.ruleForm.dangqianfenshu)){e.next=3;break}return n.$utils.msg("当前分数应输入整数"),e.abrupt("return");case 3:if(!n.ruleForm.thumbsupnum||n.$validate.isIntNumer(n.ruleForm.thumbsupnum)){e.next=6;break}return n.$utils.msg("赞应输入整数"),e.abrupt("return");case 6:if(!n.ruleForm.crazilynum||n.$validate.isIntNumer(n.ruleForm.crazilynum)){e.next=9;break}return n.$utils.msg("踩应输入整数"),e.abrupt("return");case 9:if(!n.ruleForm.id){e.next=14;break}return e.next=12,n.$api.update("xuanshou",n.ruleForm);case 12:e.next=16;break;case 14:return e.next=16,n.$api.add("xuanshou",n.ruleForm);case 16:n.$utils.msgBack("提交成功");case 17:case"end":return e.stop()}}),e)})))()},optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,a=e.getFullYear(),t=e.getMonth()+1,u=e.getDate();return"start"===n?a-=60:"end"===n&&(a+=2),t=t>9?t:"0"+t,u=u>9?u:"0"+u,"".concat(a,"-").concat(t,"-").concat(u)},toggleTab:function(n){this.$refs[n].show()}}};e.default=c}).call(this,a("543d")["default"])},5594:function(n,e,a){},8085:function(n,e,a){"use strict";a.r(e);var t=a("b254"),u=a("8ab6");for(var r in u)"default"!==r&&function(n){a.d(e,n,(function(){return u[n]}))}(r);a("b1c1");var i,o=a("f0c5"),c=Object(o["a"])(u["default"],t["b"],t["c"],!1,null,"63a7e7a9",null,!1,t["a"],i);e["default"]=c.exports},"8ab6":function(n,e,a){"use strict";a.r(e);var t=a("1521"),u=a.n(t);for(var r in t)"default"!==r&&function(n){a.d(e,n,(function(){return t[n]}))}(r);e["default"]=u.a},b1c1:function(n,e,a){"use strict";var t=a("5594"),u=a.n(t);u.a},b254:function(n,e,a){"use strict";var t;a.d(e,"b",(function(){return u})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return t}));var u=function(){var n=this,e=n.$createElement;n._self._c},r=[]},b780:function(n,e,a){"use strict";(function(n){a("651d");t(a("66fd"));var e=t(a("8085"));function t(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,a("543d")["createPage"])}},[["b780","common/runtime","common/vendor"]]]);