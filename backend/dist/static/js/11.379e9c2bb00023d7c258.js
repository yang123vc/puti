webpackJsonp([11],{Shsc:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={name:"editPage",components:{PageDetail:s("oEEY").a}},a={render:function(){var t=this.$createElement;return(this._self._c||t)("page-detail",{attrs:{"is-edit":!0}})},staticRenderFns:[]},i=s("VU/8")(o,a,!1,null,null,null);e.default=i.exports},c93b:function(t,e,s){var o=s("oqbH");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);s("rjj0")("9ecec43a",o,!0)},oEEY:function(t,e,s){"use strict";var o=s("woOf"),a=s.n(o),i=s("OS1Z"),n=s("iDPj"),r=(s("pw1w"),{id:void 0,status:"draft",title:"",content:"",content_html:"",description:"",comment_status:1,cover_picture:"",posted_time:"",page_template:"default",slug:"",parent_id:0}),l={name:"pageDetail",components:{mavonEditor:i.mavonEditor},props:{isEdit:{type:Boolean,default:!1}},data:function(){return{postForm:a()({},r),defaultStatus:"draft",activeValue:1,inactiveValue:0,defaultParentID:0}},watch:{},computed:{contentShortLength:function(){return void 0!==this.postForm.description?this.postForm.description.length:0}},created:function(){if(this.setTitle(),this.isEdit){var t=this.$route.params.id;this.getPageInfo(t)}else this.postForm=a()({},r)},methods:{setTitle:function(){document.title=this.$t("route."+this.$route.meta.title)+" | Puti"},getPageInfo:function(t){var e=this;Object(n.d)(t).then(function(t){var s=t.data;e.postForm.id=s.id,e.postForm.status=s.status,e.postForm.title=s.title,e.postForm.content=s.content_markdown,e.postForm.description=s.meta_date.description?s.meta_date.description:"",e.postForm.page_template=s.meta_date.page_template?s.meta_date.page_template:"",e.postForm.comment_status=s.comment_status,e.postForm.cover_picture=s.cover_picture,e.postForm.posted_time=s.post_date,e.postForm.slug=s.slug,e.postForm.parent_id=s.parent_id,e.defaultStatus=s.status})},getHtmlContent:function(t,e){this.postForm.content_html=e},submitForm:function(){this.postForm.status="publish",this.postForm.slug=this.postForm.slug?this.postForm.slug:this.postForm.title,void 0===this.postForm.id?this.createPage():this.updatePage()},draftForm:function(){this.postForm.status="draft",this.postForm.slug=this.postForm.slug?this.postForm.slug:this.postForm.title,void 0===this.postForm.id?this.createPage():this.updatePage()},createPage:function(){var t=this,e=this.$store.getters.token;Object(n.a)(this.postForm,e).then(function(e){t.$message({message:t.$t("common.operationSucceeded"),type:"success",duration:2e3}),e.data.id&&t.$router.push({path:"/page/edit/"+e.data.id})}).catch(function(e){t.postForm.status=t.defaultStatus})},updatePage:function(){var t=this;Object(n.e)(this.postForm).then(function(e){t.$message({message:t.$t("common.operationSucceeded"),type:"success",duration:2e3}),t.getPageInfo(t.$route.params.id)}).catch(function(e){t.postForm.status=t.defaultStatus})}}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app-container-grey"},[s("div",{staticClass:"post-container"},[s("el-form",{ref:"postForm",staticClass:"form-container",attrs:{model:t.postForm}},[s("div",{staticClass:"post-main-container"},[s("el-row",{attrs:{gutter:20}},[s("el-col",{staticClass:"post-content-container",attrs:{span:19}},[s("el-form-item",{attrs:{prop:"title"}},[s("el-input",{staticClass:"post-title-container",attrs:{placeholder:"请输入页面标题"},model:{value:t.postForm.title,callback:function(e){t.$set(t.postForm,"title",e)},expression:"postForm.title"}},[s("template",{slot:"prepend"},[t._v("标题")])],2)],1),t._v(" "),s("div",{attrs:{id:"post-editor"}},[s("mavon-editor",{staticStyle:{height:"100%"},attrs:{boxShadow:!1},on:{change:t.getHtmlContent},model:{value:t.postForm.content,callback:function(e){t.$set(t.postForm,"content",e)},expression:"postForm.content"}})],1),t._v(" "),s("el-form-item",{attrs:{id:"post-description","label-width":"50px",label:"摘要:"}},[s("el-input",{staticClass:"article-textarea",attrs:{type:"textarea",rows:1,autosize:"",placeholder:"请输入内容"},model:{value:t.postForm.description,callback:function(e){t.$set(t.postForm,"description",e)},expression:"postForm.description"}}),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:t.contentShortLength,expression:"contentShortLength"}],staticClass:"word-counter"},[t._v(t._s(t.contentShortLength)+"字")])],1)],1),t._v(" "),s("el-col",{staticClass:"post-action-container",attrs:{span:5}},[s("el-card",{staticClass:"post-card",attrs:{shadow:"never","body-style":"padding:0"}},[s("div",{staticClass:"post-card-header clearfix"},[s("span",[s("svg-icon",{attrs:{"icon-class":"guide"}}),t._v(" 发布")],1)]),t._v(" "),s("div",{staticClass:"post-card-text"},[s("el-form-item",[s("div",{attrs:{slot:"label"},slot:"label"},[s("i",{staticClass:"el-icon-star-on"}),t._v(" 状态：")]),t._v(" "),"draft"==t.defaultStatus?s("span",[t._v("草稿")]):t._e(),t._v(" "),"publish"==t.defaultStatus?s("span",[t._v("已发布")]):t._e()]),t._v(" "),s("el-form-item",{attrs:{prop:"comment_status"}},[s("div",{attrs:{slot:"label"},slot:"label"},[s("svg-icon",{attrs:{"icon-class":"comments"}}),t._v(" 开启评论：")],1),t._v(" "),s("el-switch",{attrs:{"active-value":t.activeValue,"inactive-value":t.inactiveValue},model:{value:t.postForm.comment_status,callback:function(e){t.$set(t.postForm,"comment_status",e)},expression:"postForm.comment_status"}})],1),t._v(" "),s("el-form-item",{attrs:{prop:"posted_time"}},[s("div",{attrs:{slot:"label"},slot:"label"},[s("i",{staticClass:"el-icon-date"}),t._v(" 发布时间:")]),t._v(" "),s("el-date-picker",{attrs:{type:"datetime",format:"yyyy-MM-dd HH:mm:ss","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"选择发布日期时间",size:"small"},model:{value:t.postForm.posted_time,callback:function(e){t.$set(t.postForm,"posted_time",e)},expression:"postForm.posted_time"}})],1)],1),t._v(" "),s("div",{staticClass:"post-card-bottom clearfix"},["draft"===t.postForm.status?s("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.submitForm}},[t._v("发布")]):s("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.submitForm}},[t._v("发布更新")]),t._v(" "),"draft"===t.postForm.status?s("el-button",{attrs:{type:"info",size:"mini"},on:{click:t.draftForm}},[t._v("保存草稿")]):s("el-button",{attrs:{type:"info",size:"mini"},on:{click:t.draftForm}},[t._v("保存为草稿")])],1)]),t._v(" "),s("el-card",{staticClass:"post-card",attrs:{shadow:"never","body-style":"padding:0"}},[s("div",{staticClass:"post-card-header clearfix"},[s("span",[s("svg-icon",{attrs:{"icon-class":"list"}}),t._v(" 页面属性")],1)]),t._v(" "),s("div",{staticClass:"post-card-text"},[s("el-form-item",{attrs:{prop:"slug","label-width":"88px"}},[s("div",{attrs:{slot:"label"},slot:"label"},[s("i",{staticClass:"el-icon-edit"}),t._v(" 缩略名：")]),t._v(" "),s("el-input",{attrs:{placeholder:"请输入缩略名",size:"small",clearable:""},model:{value:t.postForm.slug,callback:function(e){t.$set(t.postForm,"slug",e)},expression:"postForm.slug"}})],1),t._v(" "),s("el-form-item",{attrs:{prop:"parent_id"}},[s("div",{attrs:{slot:"label"},slot:"label"},[s("i",{staticClass:"el-icon-news"}),t._v(" 父级页面：")]),t._v(" "),s("el-select",{attrs:{placeholder:"请选择父级页面",size:"small"},model:{value:t.postForm.parent_id,callback:function(e){t.$set(t.postForm,"parent_id",e)},expression:"postForm.parent_id"}},[s("el-option",{attrs:{label:"无",value:t.defaultParentID}})],1)],1),t._v(" "),s("el-form-item",{attrs:{prop:"page_template"}},[s("div",{attrs:{slot:"label"},slot:"label"},[s("i",{staticClass:"el-icon-tickets"}),t._v(" 显示模板：")]),t._v(" "),s("el-select",{attrs:{placeholder:"请选择页面模板",size:"small"},model:{value:t.postForm.page_template,callback:function(e){t.$set(t.postForm,"page_template",e)},expression:"postForm.page_template"}},[s("el-option",{attrs:{label:"默认",value:"default"}})],1)],1)],1)])],1)],1)],1)])],1)])},staticRenderFns:[]};var p=s("VU/8")(l,c,!1,function(t){s("c93b")},"data-v-077276e6",null);e.a=p.exports},oqbH:function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,'\n.post-container[data-v-077276e6] {\n  position: relative;\n}\n.post-container .post-main-container[data-v-077276e6] {\n    padding: 10px 10px 10px 10px;\n}\n.post-container .post-main-container .post-content-container #post-editor[data-v-077276e6] {\n      margin: auto;\n      width: 100%;\n      height: 650px;\n}\n.post-container .post-main-container .post-content-container #post-description[data-v-077276e6] {\n      margin: 20px 0;\n}\n.post-container .word-counter[data-v-077276e6] {\n    width: 40px;\n    position: absolute;\n    right: -10px;\n    top: 0px;\n}\n.post-container .clearfix[data-v-077276e6]:before,\n  .post-container .clearfix[data-v-077276e6]:after {\n    display: table;\n    content: "";\n}\n.post-container .clearfix[data-v-077276e6]:after {\n    clear: both;\n}\n',""])}});