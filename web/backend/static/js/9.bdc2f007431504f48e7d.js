webpackJsonp([9],{ANGA:function(t,e,o){(t.exports=o("FZ+f")(!1)).push([t.i,'\n.post-container[data-v-7df498f8] {\n  position: relative;\n}\n.post-container .post-main-container[data-v-7df498f8] {\n    padding: 10px 10px 10px 10px;\n}\n.post-container .post-main-container .post-content-container #post-editor[data-v-7df498f8] {\n      margin: auto;\n      width: 100%;\n      height: 650px;\n}\n.post-container .post-main-container .post-content-container #post-description[data-v-7df498f8] {\n      margin: 20px 0;\n}\n.post-container .word-counter[data-v-7df498f8] {\n    width: 40px;\n    position: absolute;\n    right: -10px;\n    top: 0px;\n}\n.post-container .clearfix[data-v-7df498f8]:before,\n  .post-container .clearfix[data-v-7df498f8]:after {\n    display: table;\n    content: "";\n}\n.post-container .clearfix[data-v-7df498f8]:after {\n    clear: both;\n}\n',""])},K85C:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={name:"editArticle",components:{ArticleDetail:o("oGlg").a}},a={render:function(){var t=this.$createElement;return(this._self._c||t)("article-detail",{attrs:{"is-edit":!0}})},staticRenderFns:[]},i=o("VU/8")(s,a,!1,null,null,null);e.default=i.exports},oGlg:function(t,e,o){"use strict";var s=o("woOf"),a=o.n(s),i=o("OS1Z"),r=o("h3d2"),n=o("viA7"),c=(o("pw1w"),{id:void 0,status:"draft",title:"",content:"",content_html:"",description:"",comment_status:1,cover_picture:"",posted_time:"",if_top:0,category:[],tag:[]}),l={name:"articleDetail",components:{mavonEditor:i.mavonEditor},props:{isEdit:{type:Boolean,default:!1}},data:function(){return{postForm:a()({},c),defaultStatus:"draft",defaultExpandAllCategory:!0,categoryTab:"allCategory",categoryData:[],categoryProps:{id:"item_id",children:"children",label:"name"},defaultCheckedCategory:[1],filterText:"",tagOptions:[],defaultSelectTags:[],activeValue:1,inactiveValue:0}},watch:{filterText:function(t){this.$refs.categoryTree.filter(t)}},computed:{contentShortLength:function(){return void 0!==this.postForm.description?this.postForm.description.length:0}},created:function(){if(this.setTitle(),this.initTaxonomy(),this.isEdit){var t=this.$route.params.id;this.getArticleInfo(t)}else this.postForm=a()({},c)},methods:{setTitle:function(){document.title=this.$t("route."+this.$route.meta.title)+" | Puti"},initTaxonomy:function(){var t=this;Object(r.c)({type:"category"}).then(function(e){t.categoryData=e.data}),Object(r.c)({type:"tag"}).then(function(e){t.tagOptions=e.data})},getArticleInfo:function(t){var e=this;Object(n.c)(t).then(function(t){var o=t.data;e.postForm.id=o.id,e.postForm.status=o.status,e.postForm.title=o.title,e.postForm.content=o.content_markdown,e.postForm.description=o.meta_date.description?o.meta_date.description:"",e.postForm.comment_status=o.comment_status,e.postForm.cover_picture=o.cover_picture,e.postForm.posted_time=o.post_date,e.postForm.if_top=o.if_top,e.postForm.category=o.category,e.postForm.tag=o.tag,e.$refs.categoryTree.setCheckedKeys(e.postForm.category),e.defaultStatus=o.status})},filterNode:function(t,e){return!t||-1!==e.name.indexOf(t)},getCategoryCheckedKeys:function(){return this.$refs.categoryTree.getCheckedKeys()},getHtmlContent:function(t,e){this.postForm.content_html=e},submitForm:function(){this.postForm.status="publish",this.postForm.category=this.getCategoryCheckedKeys(),0===this.postForm.category.length&&(this.postForm.category=this.defaultCheckedCategory),void 0===this.postForm.id?this.createArticle():this.updateArticle()},draftForm:function(){this.postForm.status="draft",this.postForm.category=this.getCategoryCheckedKeys(),0===this.postForm.category.length&&(this.postForm.category=this.defaultCheckedCategory),void 0===this.postForm.id?this.createArticle():this.updateArticle()},createArticle:function(){var t=this,e=this.$store.getters.token;Object(n.a)(this.postForm,e).then(function(e){t.$message({message:t.$t("common.operationSucceeded"),type:"success",duration:2e3}),e.data.id&&t.$router.push({path:"/article/edit/"+e.data.id})}).catch(function(e){t.postForm.status=t.defaultStatus})},updateArticle:function(){var t=this;Object(n.e)(this.postForm).then(function(e){t.$message({message:t.$t("common.operationSucceeded"),type:"success",duration:2e3}),t.getArticleInfo(t.$route.params.id)}).catch(function(e){t.postForm.status=t.defaultStatus})}}},p={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"app-container-grey"},[o("div",{staticClass:"post-container"},[o("el-form",{ref:"postForm",staticClass:"form-container",attrs:{model:t.postForm,"label-position":"left"}},[o("div",{staticClass:"post-main-container"},[o("el-row",{attrs:{gutter:20}},[o("el-col",{staticClass:"post-content-container",attrs:{span:19}},[o("el-form-item",{attrs:{prop:"title"}},[o("el-input",{staticClass:"post-title-container",attrs:{placeholder:t.$t("post.pleaseInputArticleTitle")},model:{value:t.postForm.title,callback:function(e){t.$set(t.postForm,"title",e)},expression:"postForm.title"}},[o("template",{slot:"prepend"},[t._v(t._s(t.$t("post.postTitle")))])],2)],1),t._v(" "),o("div",{attrs:{id:"post-editor"}},[o("mavon-editor",{staticStyle:{height:"100%"},attrs:{boxShadow:!1},on:{change:t.getHtmlContent},model:{value:t.postForm.content,callback:function(e){t.$set(t.postForm,"content",e)},expression:"postForm.content"}})],1),t._v(" "),o("el-form-item",{attrs:{id:"post-description","label-width":"80px",label:t.$t("post.postDescription")}},[o("el-input",{staticClass:"article-textarea",attrs:{type:"textarea",rows:1,autosize:"",placeholder:t.$t("post.pleaseInputPostDescription")},model:{value:t.postForm.description,callback:function(e){t.$set(t.postForm,"description",e)},expression:"postForm.description"}}),t._v(" "),o("span",{directives:[{name:"show",rawName:"v-show",value:t.contentShortLength,expression:"contentShortLength"}],staticClass:"word-counter"},[t._v(t._s(t.contentShortLength)+" "+t._s(t.$t("post.postDescriptionWords")))])],1)],1),t._v(" "),o("el-col",{staticClass:"post-action-container",attrs:{span:5}},[o("el-card",{staticClass:"post-card",attrs:{shadow:"never","body-style":"padding:0"}},[o("div",{staticClass:"post-card-header clearfix"},[o("span",[o("svg-icon",{attrs:{"icon-class":"guide"}}),t._v(" "+t._s(t.$t("post.postPublish")))],1)]),t._v(" "),o("div",{staticClass:"post-card-text"},[o("el-form-item",[o("div",{attrs:{slot:"label"},slot:"label"},[o("i",{staticClass:"el-icon-star-on"}),t._v(" "+t._s(t.$t("post.postStatus")))]),t._v(" "),"draft"==t.defaultStatus?o("span",[t._v(t._s(t.$t("post.draft")))]):t._e(),t._v(" "),"publish"==t.defaultStatus?o("span",[t._v(t._s(t.$t("post.publish")))]):t._e()]),t._v(" "),o("el-form-item",{attrs:{prop:"comment_status"}},[o("div",{attrs:{slot:"label"},slot:"label"},[o("svg-icon",{attrs:{"icon-class":"comments"}}),t._v(" "+t._s(t.$t("post.postOpenComment")))],1),t._v(" "),o("el-switch",{attrs:{"active-value":t.activeValue,"inactive-value":t.inactiveValue},model:{value:t.postForm.comment_status,callback:function(e){t.$set(t.postForm,"comment_status",e)},expression:"postForm.comment_status"}})],1),t._v(" "),o("el-form-item",{attrs:{prop:"if_top"}},[o("div",{attrs:{slot:"label"},slot:"label"},[o("i",{staticClass:"el-icon-caret-top"}),t._v(" "+t._s(t.$t("post.postIfTop")))]),t._v(" "),o("el-switch",{attrs:{"active-value":t.activeValue,"inactive-value":t.inactiveValue},model:{value:t.postForm.if_top,callback:function(e){t.$set(t.postForm,"if_top",e)},expression:"postForm.if_top"}})],1),t._v(" "),o("el-form-item",{attrs:{prop:"posted_time"}},[o("div",{attrs:{slot:"label"},slot:"label"},[o("i",{staticClass:"el-icon-date"}),t._v(" "+t._s(t.$t("post.postPushlishedDate")))]),t._v(" "),o("el-date-picker",{attrs:{type:"datetime",format:"yyyy-MM-dd HH:mm:ss","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:t.$t("post.chooseReleaseTime"),size:"small"},model:{value:t.postForm.posted_time,callback:function(e){t.$set(t.postForm,"posted_time",e)},expression:"postForm.posted_time"}})],1)],1),t._v(" "),o("div",{staticClass:"post-card-bottom clearfix"},["draft"===t.postForm.status?o("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.submitForm}},[t._v(t._s(t.$t("post.postPublish")))]):o("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.submitForm}},[t._v(t._s(t.$t("post.postSubmitUpdate")))]),t._v(" "),"draft"===t.postForm.status?o("el-button",{attrs:{type:"info",size:"mini"},on:{click:t.draftForm}},[t._v(t._s(t.$t("post.postSaveDraft")))]):o("el-button",{attrs:{type:"info",size:"mini"},on:{click:t.draftForm}},[t._v(t._s(t.$t("post.postSaveAsDraft")))])],1)]),t._v(" "),o("el-card",{staticClass:"post-card",attrs:{shadow:"never","body-style":"padding:0"}},[o("div",{staticClass:"post-card-header clearfix"},[o("span",[o("svg-icon",{attrs:{"icon-class":"list"}}),t._v(" "+t._s(t.$t("post.articleCategory")))],1)]),t._v(" "),o("div",{staticClass:"post-card-text"},[o("el-tabs",{attrs:{type:"card"},model:{value:t.categoryTab,callback:function(e){t.categoryTab=e},expression:"categoryTab"}},[o("el-tab-pane",{staticClass:"post-category-tree",attrs:{label:t.$t("post.articleAllCategory"),name:"allCategory"}},[o("el-input",{staticClass:"category-tree-input",attrs:{placeholder:t.$t("post.inputKeywordsToFilter"),"prefix-icon":"el-icon-search",size:"small",clearable:""},model:{value:t.filterText,callback:function(e){t.filterText=e},expression:"filterText"}}),t._v(" "),o("el-tree",{ref:"categoryTree",attrs:{data:t.categoryData,"show-checkbox":"","node-key":"term_id","default-expand-all":t.defaultExpandAllCategory,"default-checked-keys":t.defaultCheckedCategory,"filter-node-method":t.filterNode,props:t.categoryProps},model:{value:t.postForm.category,callback:function(e){t.$set(t.postForm,"category",e)},expression:"postForm.category"}})],1)],1)],1)]),t._v(" "),o("el-card",{staticClass:"post-card",attrs:{shadow:"never","body-style":"padding:0"}},[o("div",{staticClass:"post-card-header clearfix"},[o("span",[o("svg-icon",{attrs:{"icon-class":"tag"}}),t._v(" "+t._s(t.$t("post.articleTag")))],1)]),t._v(" "),o("div",{staticClass:"post-card-text"},[o("el-select",{ref:"tagTree",staticStyle:{width:"100%"},attrs:{filterable:"",multiple:"",placeholder:t.$t("post.pleaseChooseTags")},model:{value:t.postForm.tag,callback:function(e){t.$set(t.postForm,"tag",e)},expression:"postForm.tag"}},t._l(t.tagOptions,function(t){return o("el-option",{key:t.term_id,attrs:{label:t.name,value:t.term_id}})}))],1)])],1)],1)],1)])],1)])},staticRenderFns:[]};var d=o("VU/8")(l,p,!1,function(t){o("uKa3")},"data-v-7df498f8",null);e.a=d.exports},uKa3:function(t,e,o){var s=o("ANGA");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);o("rjj0")("7abb7cf0",s,!0)}});