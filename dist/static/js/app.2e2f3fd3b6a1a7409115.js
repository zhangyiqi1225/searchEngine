webpackJsonp([1],[,,,,,,,,,,,,,function(t,e,n){"use strict";var r=n(3),s=n(55),i=n(50),a=n.n(i),o=n(51),u=n.n(o);r.a.use(s.a),e.a=new s.a({routes:[{path:"/",name:"searchEngine",component:a.a},{path:"/result",name:"searchResult",component:u.a}]})},function(t,e,n){n(42);var r=n(2)(n(32),n(53),null,null);t.exports=r.exports},,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app",data:function(){return{query:""}},methods:{showResult:function(t){this.query=t,console.log(this.query),this.$router.replace({path:"/result"})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"searchEngine",data:function(){return{query:""}},methods:{change:function(){this.$emit("childChange",this.query)},submit:function(){location.reload()}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(36),s=n.n(r);e.default={name:"searchResult",props:["parentQuery"],mounted:function(){document.getElementById("input").focus()},updated:function(){if(""!=this.query){var t,e=(this.query.split(""),document.getElementsByClassName("item_description")),n=document.getElementsByClassName("item_title"),r=new RegExp(this.query,"g");for(t in e){var s=e[t].innerHTML,i=n[t].innerHTML;i=i.replace(r,"<span style='color:red'>"+this.query+"</span>"),s=s.replace(r,"<span style='color:red'>"+this.query+"</span>"),e[t].innerHTML=s,n[t].innerHTML=i}}},data:function(){return{msg:"Welcome to Your Vue.js App",query:this.parentQuery,page_select:1,tips:"请输入要搜索的内容",show_button:!1,response:[]}},computed:{length:function(){var t=0;for(var e in this.response)t++;return t},part_response:function(){for(var t=[],e=10*(this.page_select-1);e<10*this.page_select;e++)e<this.length&&t.push(this.response[e]);var n=this.query.split("");console.log(n);s()(t);return t}},methods:{submit:function(){var t=this;this.tips="正在查询。。。";var e=n(47);this.$axios.post("./back_end.php",e.stringify({question:this.query})).then(function(e){t.show_button=!0,t.response=e.data,t.tips="为您找到大约"+t.length+"个结果"}).catch(function(e){t.tips="查询失败，请检查网络连接",console.log(e)})}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(3),s=n(14),i=n.n(s),a=n(13),o=n(12),u=n.n(o);u.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded",r.a.prototype.$axios=u.a,r.a.config.productionTip=!1,new r.a({el:"#app",router:a.a,template:"<App/>",components:{App:i.a}})},,,,,,function(t,e){},function(t,e){},function(t,e){},,,,,,,function(t,e,n){n(43);var r=n(2)(n(33),n(54),"data-v-e082b27e",null);t.exports=r.exports},function(t,e,n){n(41);var r=n(2)(n(34),n(52),"data-v-17d40f1c",null);t.exports=r.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"searchResult"}},[n("div",{attrs:{id:"header"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],attrs:{type:"text",id:"input"},domProps:{value:t.query},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.submit(e)},input:function(e){e.target.composing||(t.query=e.target.value)}}}),t._v(" "),n("button",{attrs:{id:"submit"},on:{click:t.submit}},[t._v("search")])]),t._v(" "),n("div",{attrs:{id:"result"}},[n("p",{attrs:{id:"result_number"}},[t._v(t._s(t.tips))]),t._v(" "),t._l(t.part_response,function(e){return n("div",[n("a",{staticClass:"item_title",attrs:{id:"title",href:e.url,target:"_blank"}},[t._v(t._s(e.title))]),t._v(" "),n("p",{staticClass:"item_description"},[t._v(t._s(e.description))]),t._v(" "),n("li",{attrs:{id:"small_url_content"}},[n("a",{attrs:{href:e.url,id:"small_url",target:"_blank"}},[t._v(t._s(e.url))])]),t._v(" "),n("li",{attrs:{id:"date"}},[t._v(" "+t._s(e.date))])])})],2),t._v(" "),n("div",{attrs:{id:"footer"}},t._l(parseInt(t.length/10)+1,function(e){return t.show_button?n("button",{on:{click:function(n){t.page_select=e}}},[t._v(t._s(e))]):t._e()}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view",{attrs:{"parent-query":t.query},on:{childChange:t.showResult}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"searchEngine"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],attrs:{type:"text",id:"text"},domProps:{value:t.query},on:{input:[function(e){e.target.composing||(t.query=e.target.value)},t.change]}}),t._v(" "),n("button",{attrs:{id:"button"},on:{click:t.submit}},[t._v("search")])])},staticRenderFns:[]}}],[35]);
//# sourceMappingURL=app.2e2f3fd3b6a1a7409115.js.map