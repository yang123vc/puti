webpackJsonp([9],{1648:function(t,e,a){var o=a("nemm");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);a("rjj0")("41b5aecc",o,!0)},K85C:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={name:"editArticle",components:{ArticleDetail:a("oGlg").a}},s={render:function(){var t=this.$createElement;return(this._self._c||t)("article-detail",{attrs:{"is-edit":!0}})},staticRenderFns:[]},i=a("VU/8")(o,s,!1,null,null,null);e.default=i.exports},nemm:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,'\n.post-container[data-v-9ba3d292] {\n  position: relative;\n}\n.post-container .post-main-container[data-v-9ba3d292] {\n    padding: 10px 10px 10px 10px;\n}\n.post-container .post-main-container .post-content-container #post-editor[data-v-9ba3d292] {\n      margin: auto;\n      width: 100%;\n      height: 650px;\n}\n.post-container .post-main-container .post-content-container #post-description[data-v-9ba3d292] {\n      margin: 20px 0;\n}\n.post-container .word-counter[data-v-9ba3d292] {\n    width: 40px;\n    position: absolute;\n    right: -10px;\n    top: 0px;\n}\n.post-container .clearfix[data-v-9ba3d292]:before,\n  .post-container .clearfix[data-v-9ba3d292]:after {\n    display: table;\n    content: "";\n}\n.post-container .clearfix[data-v-9ba3d292]:after {\n    clear: both;\n}\n',""])},oGlg:function(t,e,a){"use strict";var o=a("woOf"),s=a.n(o),i=a("OS1Z"),r=a("h3d2"),n=a("viA7"),c=(a("pw1w"),{id:void 0,status:"draft",title:"",content:"",content_html:"",description:"",comment_status:1,cover_picture:"",posted_time:"",if_top:0,category:[],tag:[]}),l={name:"articleDetail",components:{mavonEditor:i.mavonEditor},props:{isEdit:{type:Boolean,default:!1}},data:function(){return{postForm:s()({},c),defaultStatus:"draft",defaultExpandAllCategory:!0,categoryTab:"allCategory",categoryData:[],categoryProps:{id:"item_id",children:"children",label:"name"},defaultCheckedCategory:[1],filterText:"",tagOptions:[],defaultSelectTags:[],activeValue:1,inactiveValue:0}},watch:{filterText:function(t){this.$refs.categoryTree.filter(t)}},computed:{contentShortLength:function(){return void 0!==this.postForm.description?this.postForm.description.length:0}},created:function(){if(this.setTitle(),this.initTaxonomy(),this.isEdit){var t=this.$route.params.id;this.getArticleInfo(t)}else this.postForm=s()({},c)},methods:{setTitle:function(){document.title=this.$t("route."+this.$route.meta.title)+" | Puti"},initTaxonomy:function(){var t=this;Object(r.c)({type:"category"}).then(function(e){t.categoryData=e.data}),Object(r.c)({type:"tag"}).then(function(e){t.tagOptions=e.data})},getArticleInfo:function(t){var e=this;Object(n.c)(t).then(function(t){var a=t.data;e.postForm.id=a.id,e.postForm.status=a.status,e.postForm.title=a.title,e.postForm.content=a.content_markdown,e.postForm.description=a.meta_date.description?a.meta_date.description:"",e.postForm.comment_status=a.comment_status,e.postForm.cover_picture=a.cover_picture,e.postForm.posted_time=a.post_date,e.postForm.if_top=a.if_top,e.postForm.category=a.category,e.postForm.tag=a.tag,e.$refs.categoryTree.setCheckedKeys(e.postForm.category),e.defaultStatus=a.status})},filterNode:function(t,e){return!t||-1!==e.name.indexOf(t)},getCategoryCheckedKeys:function(){return this.$refs.categoryTree.getCheckedKeys()},getHtmlContent:function(t,e){this.postForm.content_html=e},submitForm:function(){this.postForm.status="publish",this.postForm.category=this.getCategoryCheckedKeys(),0===this.postForm.category.length&&(this.postForm.category=this.defaultCheckedCategory),void 0===this.postForm.id?this.createArticle():this.updateArticle()},draftForm:function(){this.postForm.status="draft",this.postForm.category=this.getCategoryCheckedKeys(),0===this.postForm.category.length&&(this.postForm.category=this.defaultCheckedCategory),void 0===this.postForm.id?this.createArticle():this.updateArticle()},createArticle:function(){var t=this,e=this.$store.getters.token;Object(n.a)(this.postForm,e).then(function(e){t.$message({message:t.$t("common.operationSucceeded"),type:"success",duration:2e3}),e.data.id&&t.$router.push({path:"/article/edit/"+e.data.id})}).catch(function(e){t.postForm.status=t.defaultStatus})},updateArticle:function(){var t=this;Object(n.e)(this.postForm).then(function(e){t.$message({message:t.$t("common.operationSucceeded"),type:"success",duration:2e3}),t.getArticleInfo(t.$route.params.id)}).catch(function(e){t.postForm.status=t.defaultStatus})}}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container-grey"},[a("div",{staticClass:"post-container"},[a("el-form",{ref:"postForm",staticClass:"form-container",attrs:{model:t.postForm}},[a("div",{staticClass:"post-main-container"},[a("el-row",{attrs:{gutter:20}},[a("el-col",{staticClass:"post-content-container",attrs:{span:19}},[a("el-form-item",{attrs:{prop:"title"}},[a("el-input",{staticClass:"post-title-container",attrs:{placeholder:"请输入文章标题"},model:{value:t.postForm.title,callback:function(e){t.$set(t.postForm,"title",e)},expression:"postForm.title"}},[a("template",{slot:"prepend"},[t._v("标题")])],2)],1),t._v(" "),a("div",{attrs:{id:"post-editor"}},[a("mavon-editor",{staticStyle:{height:"100%"},attrs:{boxShadow:!1},on:{change:t.getHtmlContent},model:{value:t.postForm.content,callback:function(e){t.$set(t.postForm,"content",e)},expression:"postForm.content"}})],1),t._v(" "),a("el-form-item",{attrs:{id:"post-description","label-width":"50px",label:"摘要:"}},[a("el-input",{staticClass:"article-textarea",attrs:{type:"textarea",rows:1,autosize:"",placeholder:"请输入内容"},model:{value:t.postForm.description,callback:function(e){t.$set(t.postForm,"description",e)},expression:"postForm.description"}}),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.contentShortLength,expression:"contentShortLength"}],staticClass:"word-counter"},[t._v(t._s(t.contentShortLength)+"字")])],1)],1),t._v(" "),a("el-col",{staticClass:"post-action-container",attrs:{span:5}},[a("el-card",{staticClass:"post-card",attrs:{shadow:"never","body-style":"padding:0"}},[a("div",{staticClass:"post-card-header clearfix"},[a("span",[a("svg-icon",{attrs:{"icon-class":"guide"}}),t._v(" 发布")],1)]),t._v(" "),a("div",{staticClass:"post-card-text"},[a("el-form-item",[a("div",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"el-icon-star-on"}),t._v(" 状态：")]),t._v(" "),"draft"==t.defaultStatus?a("span",[t._v("草稿")]):t._e(),t._v(" "),"publish"==t.defaultStatus?a("span",[t._v("已发布")]):t._e()]),t._v(" "),a("el-form-item",{attrs:{prop:"comment_status"}},[a("div",{attrs:{slot:"label"},slot:"label"},[a("svg-icon",{attrs:{"icon-class":"comments"}}),t._v(" 开启评论：")],1),t._v(" "),a("el-switch",{attrs:{"active-value":t.activeValue,"inactive-value":t.inactiveValue},model:{value:t.postForm.comment_status,callback:function(e){t.$set(t.postForm,"comment_status",e)},expression:"postForm.comment_status"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"if_top"}},[a("div",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"el-icon-caret-top"}),t._v(" 是否置顶：")]),t._v(" "),a("el-switch",{attrs:{"active-value":t.activeValue,"inactive-value":t.inactiveValue},model:{value:t.postForm.if_top,callback:function(e){t.$set(t.postForm,"if_top",e)},expression:"postForm.if_top"}})],1),t._v(" "),a("el-form-item",{attrs:{prop:"posted_time"}},[a("div",{attrs:{slot:"label"},slot:"label"},[a("i",{staticClass:"el-icon-date"}),t._v(" 发布时间:")]),t._v(" "),a("el-date-picker",{attrs:{type:"datetime",format:"yyyy-MM-dd HH:mm:ss","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:"选择发布日期时间",size:"small"},model:{value:t.postForm.posted_time,callback:function(e){t.$set(t.postForm,"posted_time",e)},expression:"postForm.posted_time"}})],1)],1),t._v(" "),a("div",{staticClass:"post-card-bottom clearfix"},["draft"===t.postForm.status?a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.submitForm}},[t._v("发布")]):a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.submitForm}},[t._v("发布更新")]),t._v(" "),"draft"===t.postForm.status?a("el-button",{attrs:{type:"info",size:"mini"},on:{click:t.draftForm}},[t._v("保存草稿")]):a("el-button",{attrs:{type:"info",size:"mini"},on:{click:t.draftForm}},[t._v("保存为草稿")])],1)]),t._v(" "),a("el-card",{staticClass:"post-card",attrs:{shadow:"never","body-style":"padding:0"}},[a("div",{staticClass:"post-card-header clearfix"},[a("span",[a("svg-icon",{attrs:{"icon-class":"list"}}),t._v(" 分类目录")],1)]),t._v(" "),a("div",{staticClass:"post-card-text"},[a("el-tabs",{attrs:{type:"card"},model:{value:t.categoryTab,callback:function(e){t.categoryTab=e},expression:"categoryTab"}},[a("el-tab-pane",{staticClass:"post-category-tree",attrs:{label:"所有分类目录",name:"allCategory"}},[a("el-input",{staticClass:"category-tree-input",attrs:{placeholder:"输入关键字进行过滤","prefix-icon":"el-icon-search",size:"small",clearable:""},model:{value:t.filterText,callback:function(e){t.filterText=e},expression:"filterText"}}),t._v(" "),a("el-tree",{ref:"categoryTree",attrs:{data:t.categoryData,"show-checkbox":"","node-key":"term_id","default-expand-all":t.defaultExpandAllCategory,"default-checked-keys":t.defaultCheckedCategory,"filter-node-method":t.filterNode,props:t.categoryProps},model:{value:t.postForm.category,callback:function(e){t.$set(t.postForm,"category",e)},expression:"postForm.category"}})],1)],1)],1)]),t._v(" "),a("el-card",{staticClass:"post-card",attrs:{shadow:"never","body-style":"padding:0"}},[a("div",{staticClass:"post-card-header clearfix"},[a("span",[a("svg-icon",{attrs:{"icon-class":"tag"}}),t._v(" 标签")],1)]),t._v(" "),a("div",{staticClass:"post-card-text"},[a("el-select",{ref:"tagTree",staticStyle:{width:"100%"},attrs:{filterable:"",multiple:"",placeholder:"选择标签"},model:{value:t.postForm.tag,callback:function(e){t.$set(t.postForm,"tag",e)},expression:"postForm.tag"}},t._l(t.tagOptions,function(t){return a("el-option",{key:t.term_id,attrs:{label:t.name,value:t.term_id}})}))],1)])],1)],1)],1)])],1)])},staticRenderFns:[]};var d=a("VU/8")(l,p,!1,function(t){a("1648")},"data-v-9ba3d292",null);e.a=d.exports}});