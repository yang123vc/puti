webpackJsonp([13],{"5gea":function(t,e,s){var o=s("Jyq3");"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);s("rjj0")("9389e6fc",o,!0)},Jyq3:function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,'\n.post-container[data-v-17f427bc] {\n  position: relative;\n}\n.post-container .post-main-container[data-v-17f427bc] {\n    padding: 10px 10px 10px 10px;\n}\n.post-container .post-main-container .post-content-container #post-editor[data-v-17f427bc] {\n      margin: auto;\n      width: 100%;\n      height: 650px;\n}\n.post-container .post-main-container .post-content-container #post-description[data-v-17f427bc] {\n      margin: 20px 0;\n}\n.post-container .word-counter[data-v-17f427bc] {\n    width: 40px;\n    position: absolute;\n    right: -10px;\n    top: 0px;\n}\n.post-container .clearfix[data-v-17f427bc]:before,\n  .post-container .clearfix[data-v-17f427bc]:after {\n    display: table;\n    content: "";\n}\n.post-container .clearfix[data-v-17f427bc]:after {\n    clear: both;\n}\n',""])},K85C:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={name:"editArticle",components:{ArticleDetail:s("oGlg").a}},a={render:function(){var t=this.$createElement;return(this._self._c||t)("article-detail",{attrs:{"is-edit":!0}})},staticRenderFns:[]},i=s("VU/8")(o,a,!1,null,null,null);e.default=i.exports},oGlg:function(t,e,s){"use strict";var o=s("woOf"),a=s.n(o),i=s("OS1Z"),r=s("h3d2"),c=s("0QkR"),n=s("viA7"),l=(s("pw1w"),{id:void 0,status:"draft",title:"",content:"",content_html:"",description:"",comment_status:1,cover_picture:"",posted_time:"",if_top:0,category:[],tag:[],subject:[]}),p={name:"articleDetail",components:{mavonEditor:i.mavonEditor},props:{isEdit:{type:Boolean,default:!1}},data:function(){return{postForm:a()({},l),defaultStatus:"draft",defaultExpandAllCategory:!0,categoryTab:"allCategory",categoryData:[],categoryProps:{id:"item_id",children:"children",label:"name"},defaultCheckedCategory:[1],filterText:"",subjectData:[],subjectProps:{id:"id",children:"children",label:"name"},defaultExpandAllSubject:!1,defaultCheckedSubject:[],filterSubjectText:"",tagOptions:[],defaultSelectTags:[],activeValue:1,inactiveValue:0}},watch:{filterText:function(t){this.$refs.categoryTree.filter(t)},filterSubjectText:function(t){this.$refs.subjectTree.filter(t)}},computed:{contentShortLength:function(){return void 0!==this.postForm.description?this.postForm.description.length:0}},created:function(){if(this.setTitle(),this.initTaxonomy(),this.isEdit){var t=this.$route.params.id;this.getArticleInfo(t)}else this.postForm=a()({},l)},methods:{setTitle:function(){document.title=this.$t("route."+this.$route.meta.title)+" | Puti"},initTaxonomy:function(){var t=this;Object(r.c)({type:"category"}).then(function(e){t.categoryData=e.data}),Object(r.c)({type:"tag"}).then(function(e){t.tagOptions=e.data}),Object(c.c)().then(function(e){t.subjectData=e.data})},getArticleInfo:function(t){var e=this;Object(n.c)(t).then(function(t){var s=t.data;e.postForm.id=s.id,e.postForm.status=s.status,e.postForm.title=s.title,e.postForm.content=s.content_markdown,e.postForm.description=s.meta_date.description?s.meta_date.description:"",e.postForm.comment_status=s.comment_status,e.postForm.cover_picture=s.cover_picture,e.postForm.posted_time=s.post_date,e.postForm.if_top=s.if_top,e.postForm.category=s.category,e.postForm.tag=s.tag,e.postForm.subject=s.subject,e.$refs.categoryTree.setCheckedKeys(e.postForm.category),e.$refs.subjectTree.setCheckedKeys(e.postForm.subject),e.defaultStatus=s.status})},filterNode:function(t,e){return!t||-1!==e.name.indexOf(t)},getCategoryCheckedKeys:function(){return this.$refs.categoryTree.getCheckedKeys()},getSubjectCheckedKeys:function(){return this.$refs.subjectTree.getCheckedKeys()},getHtmlContent:function(t,e){this.postForm.content_html=e},submitForm:function(){this.postForm.status="publish",this.postForm.category=this.getCategoryCheckedKeys(),this.postForm.subject=this.getSubjectCheckedKeys(),0===this.postForm.category.length&&(this.postForm.category=this.defaultCheckedCategory),0===this.postForm.subject.length&&(this.postForm.subject=this.defaultCheckedSubject),void 0===this.postForm.id?this.createArticle():this.updateArticle()},draftForm:function(){this.postForm.status="draft",this.postForm.category=this.getCategoryCheckedKeys(),this.postForm.subject=this.getSubjectCheckedKeys(),0===this.postForm.category.length&&(this.postForm.category=this.defaultCheckedCategory),0===this.postForm.subject.length&&(this.postForm.subject=this.defaultCheckedSubject),void 0===this.postForm.id?this.createArticle():this.updateArticle()},createArticle:function(){var t=this,e=this.$store.getters.token;Object(n.a)(this.postForm,e).then(function(e){t.$message({message:t.$t("common.operationSucceeded"),type:"success",duration:2e3}),e.data.id&&t.$router.push({path:"/article/edit/"+e.data.id})}).catch(function(e){t.postForm.status=t.defaultStatus})},updateArticle:function(){var t=this;Object(n.e)(this.postForm).then(function(e){t.$message({message:t.$t("common.operationSucceeded"),type:"success",duration:2e3}),t.getArticleInfo(t.$route.params.id)}).catch(function(e){t.postForm.status=t.defaultStatus})}}},d={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app-container-grey"},[s("div",{staticClass:"post-container"},[s("el-form",{ref:"postForm",staticClass:"form-container",attrs:{model:t.postForm,"label-position":"left"}},[s("div",{staticClass:"post-main-container"},[s("el-row",{attrs:{gutter:20}},[s("el-col",{staticClass:"post-content-container",attrs:{span:19}},[s("el-form-item",{attrs:{prop:"title"}},[s("el-input",{staticClass:"post-title-container",attrs:{placeholder:t.$t("post.pleaseInputArticleTitle")},model:{value:t.postForm.title,callback:function(e){t.$set(t.postForm,"title",e)},expression:"postForm.title"}},[s("template",{slot:"prepend"},[t._v(t._s(t.$t("post.postTitle")))])],2)],1),t._v(" "),s("div",{attrs:{id:"post-editor"}},[s("mavon-editor",{staticStyle:{height:"100%"},attrs:{boxShadow:!1},on:{change:t.getHtmlContent},model:{value:t.postForm.content,callback:function(e){t.$set(t.postForm,"content",e)},expression:"postForm.content"}})],1),t._v(" "),s("el-form-item",{attrs:{id:"post-description","label-width":"80px",label:t.$t("post.postDescription")}},[s("el-input",{staticClass:"article-textarea",attrs:{type:"textarea",rows:1,autosize:"",placeholder:t.$t("post.pleaseInputPostDescription")},model:{value:t.postForm.description,callback:function(e){t.$set(t.postForm,"description",e)},expression:"postForm.description"}}),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:t.contentShortLength,expression:"contentShortLength"}],staticClass:"word-counter"},[t._v(t._s(t.contentShortLength)+" "+t._s(t.$t("post.postDescriptionWords")))])],1)],1),t._v(" "),s("el-col",{staticClass:"post-action-container",attrs:{span:5}},[s("el-card",{staticClass:"post-card",attrs:{shadow:"never","body-style":"padding:0"}},[s("div",{staticClass:"post-card-header clearfix"},[s("span",[s("svg-icon",{attrs:{"icon-class":"guide"}}),t._v(" "+t._s(t.$t("post.postPublish")))],1)]),t._v(" "),s("div",{staticClass:"post-card-text"},[s("el-form-item",[s("div",{attrs:{slot:"label"},slot:"label"},[s("i",{staticClass:"el-icon-star-on"}),t._v(" "+t._s(t.$t("post.postStatus")))]),t._v(" "),"draft"==t.defaultStatus?s("span",[t._v(t._s(t.$t("post.draft")))]):t._e(),t._v(" "),"publish"==t.defaultStatus?s("span",[t._v(t._s(t.$t("post.publish")))]):t._e()]),t._v(" "),s("el-form-item",{attrs:{prop:"comment_status"}},[s("div",{attrs:{slot:"label"},slot:"label"},[s("svg-icon",{attrs:{"icon-class":"comments"}}),t._v(" "+t._s(t.$t("post.postOpenComment")))],1),t._v(" "),s("el-switch",{attrs:{"active-value":t.activeValue,"inactive-value":t.inactiveValue},model:{value:t.postForm.comment_status,callback:function(e){t.$set(t.postForm,"comment_status",e)},expression:"postForm.comment_status"}})],1),t._v(" "),s("el-form-item",{attrs:{prop:"if_top"}},[s("div",{attrs:{slot:"label"},slot:"label"},[s("i",{staticClass:"el-icon-caret-top"}),t._v(" "+t._s(t.$t("post.postIfTop")))]),t._v(" "),s("el-switch",{attrs:{"active-value":t.activeValue,"inactive-value":t.inactiveValue},model:{value:t.postForm.if_top,callback:function(e){t.$set(t.postForm,"if_top",e)},expression:"postForm.if_top"}})],1),t._v(" "),s("el-form-item",{attrs:{prop:"posted_time"}},[s("div",{attrs:{slot:"label"},slot:"label"},[s("i",{staticClass:"el-icon-date"}),t._v(" "+t._s(t.$t("post.postPushlishedDate")))]),t._v(" "),s("el-date-picker",{attrs:{type:"datetime",format:"yyyy-MM-dd HH:mm:ss","value-format":"yyyy-MM-dd HH:mm:ss",placeholder:t.$t("post.chooseReleaseTime"),size:"small"},model:{value:t.postForm.posted_time,callback:function(e){t.$set(t.postForm,"posted_time",e)},expression:"postForm.posted_time"}})],1)],1),t._v(" "),s("div",{staticClass:"post-card-bottom clearfix"},["draft"===t.postForm.status?s("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.submitForm}},[t._v(t._s(t.$t("post.postPublish")))]):s("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.submitForm}},[t._v(t._s(t.$t("post.postSubmitUpdate")))]),t._v(" "),"draft"===t.postForm.status?s("el-button",{attrs:{type:"info",size:"mini"},on:{click:t.draftForm}},[t._v(t._s(t.$t("post.postSaveDraft")))]):s("el-button",{attrs:{type:"info",size:"mini"},on:{click:t.draftForm}},[t._v(t._s(t.$t("post.postSaveAsDraft")))])],1)]),t._v(" "),s("el-card",{staticClass:"post-card",attrs:{shadow:"never","body-style":"padding:0"}},[s("div",{staticClass:"post-card-header clearfix"},[s("span",[s("svg-icon",{attrs:{"icon-class":"list"}}),t._v(" "+t._s(t.$t("post.articleCategory")))],1)]),t._v(" "),s("div",{staticClass:"post-card-text"},[s("el-tabs",{attrs:{type:"card"},model:{value:t.categoryTab,callback:function(e){t.categoryTab=e},expression:"categoryTab"}},[s("el-tab-pane",{staticClass:"post-category-tree",attrs:{label:t.$t("post.articleAllCategory"),name:"allCategory"}},[s("el-input",{staticClass:"category-tree-input",attrs:{placeholder:t.$t("post.inputKeywordsToFilter"),"prefix-icon":"el-icon-search",size:"small",clearable:""},model:{value:t.filterText,callback:function(e){t.filterText=e},expression:"filterText"}}),t._v(" "),s("el-tree",{ref:"categoryTree",attrs:{data:t.categoryData,"show-checkbox":"","check-strictly":"","node-key":"term_id","default-expand-all":t.defaultExpandAllCategory,"default-checked-keys":t.defaultCheckedCategory,"filter-node-method":t.filterNode,props:t.categoryProps},model:{value:t.postForm.category,callback:function(e){t.$set(t.postForm,"category",e)},expression:"postForm.category"}})],1)],1)],1)]),t._v(" "),s("el-card",{staticClass:"post-card",attrs:{shadow:"never","body-style":"padding:0"}},[s("div",{staticClass:"post-card-header clearfix"},[s("span",[s("svg-icon",{attrs:{"icon-class":"tag"}}),t._v(" "+t._s(t.$t("post.articleTag")))],1)]),t._v(" "),s("div",{staticClass:"post-card-text"},[s("el-select",{ref:"tagTree",staticStyle:{width:"100%"},attrs:{filterable:"",multiple:"",placeholder:t.$t("post.pleaseChooseTags")},model:{value:t.postForm.tag,callback:function(e){t.$set(t.postForm,"tag",e)},expression:"postForm.tag"}},t._l(t.tagOptions,function(t){return s("el-option",{key:t.term_id,attrs:{label:t.name,value:t.term_id}})}))],1)]),t._v(" "),s("el-card",{staticClass:"post-card",attrs:{shadow:"never","body-style":"padding:0"}},[s("div",{staticClass:"post-card-header clearfix"},[s("span",[s("svg-icon",{attrs:{"icon-class":"component"}}),t._v(" "+t._s(t.$t("post.articleSubject")))],1)]),t._v(" "),s("div",{staticClass:"post-card-text"},[s("div",{staticClass:"post-subject-tree"},[s("el-input",{staticClass:"subject-tree-input",attrs:{placeholder:t.$t("post.inputKeywordsToFilter"),"prefix-icon":"el-icon-search",size:"small",clearable:""},model:{value:t.filterSubjectText,callback:function(e){t.filterSubjectText=e},expression:"filterSubjectText"}}),t._v(" "),s("el-tree",{ref:"subjectTree",attrs:{data:t.subjectData,"show-checkbox":"","node-key":"id","default-expand-all":t.defaultExpandAllSubject,"default-checked-keys":t.defaultCheckedSubject,"filter-node-method":t.filterNode,props:t.subjectProps},model:{value:t.postForm.subject,callback:function(e){t.$set(t.postForm,"subject",e)},expression:"postForm.subject"}})],1)])])],1)],1)],1)])],1)])},staticRenderFns:[]};var u=s("VU/8")(p,d,!1,function(t){s("5gea")},"data-v-17f427bc",null);e.a=u.exports}});