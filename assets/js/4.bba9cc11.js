(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{169:function(t,i,a){"use strict";a.r(i);var e={name:"Valine",mounted:function(){var t=a(166);"undefined"!=typeof window&&(this.window=window,window.AV=a(167)),this.valine=new t,this.initValine()},watch:{$route:function(t,i){i.path!=t.path&&this.initValine()}},methods:{initValine:function(){var t=location.origin+location.pathname;document.getElementsByClassName("leancloud-visitors")[0].id=t,this.valine.init({el:"#vcomments",appId:"GiewUI8Hvo5GniBrp5SKBPoL-gzGzoHsz",appKey:"Ab72bplfYkqPgJdCIVCnsi2e",notify:!0,verify:!0,path:t,visitor:!0,avatar:"wavatar",placeholder:"ヾﾉ≧∀≦)o来啊，快活啊~"})}}},n=a(0),s=Object(n.a)(e,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"page"},[i("section",{staticClass:"page-edit"},[i("div",[i("span",{staticClass:"leancloud-visitors",attrs:{"data-flag-title":"Your Article Title"}},[i("em",{staticClass:"post-meta-item-text"},[this._v("阅读量：")]),this._v(" "),i("i",{staticClass:"leancloud-visitors-count"})])]),this._v(" "),i("h3",[i("a",{attrs:{href:"javascript:;"}}),this._v("\n      留言：\n    ")]),this._v(" "),i("div",{attrs:{id:"vcomments"}})])])}],!1,null,null,null);i.default=s.exports}}]);