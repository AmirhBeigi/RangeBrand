(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{Aq6K:function(n,t,e){"use strict";e("Iva2")},HUPu:function(n,t,e){"use strict";e.r(t);e("fbCW"),e("Rfxz");var r=e("nBRN"),a=(e("oVuX"),e("eUpm")),o={filters:{toRGB:function(n){return Object(a.b)(n)},toHSL:function(n){return Object(a.a)(n)},toString:function(n){return n.join(", ")}},props:{colors:{type:Array,default:function(){return[]}}}},s=(e("vhAT"),e("KHd+")),i=Object(s.a)(o,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("table",[n._m(0),e("tbody",n._l(n.colors,(function(t){return e("tr",{key:t},[e("td",[e("div",{staticClass:"w-20 h-20 rounded-lg shadow inline-block",style:{backgroundColor:"#"+t}})]),e("td",[e("dl",[e("dt",[n._v("HEX")]),e("dd",[n._v(n._s(t))]),e("dt",[n._v("RGB")]),e("dd",[n._v(n._s(n._f("toString")(n._f("toRGB")(t))))]),e("dt",[n._v("HSL")]),e("dd",[n._v(n._s(n._f("toString")(n._f("toHSL")(t))))])])])])})),0)])}),[function(){var n=this.$createElement,t=this._self._c||n;return t("thead",{staticClass:"bg-rb-violet-100"},[t("tr",[t("th",[this._v("\n                رنگ\n            ")]),t("th",[this._v("\n                اطلاعات\n            ")])])])}],!1,null,"7d6379e0",null).exports,u=(e("TeQF"),e("yXV3"),e("2B1R"),e("yGW7")),c={props:{colors:{type:Array,default:function(){return[]}},brandName:{type:String,default:"این برند"},isClosed:{type:Boolean,default:!1}},computed:{uniqueNames:function(){return this.colors.map((function(n){return Object(u.b)(n).name_fa})).filter((function(n,t,e){return e.indexOf(n)===t}))},colorNames:function(){var n="ListFormat"in Intl?new Intl.ListFormat("fa"):null;return n?n.format(this.uniqueNames):this.uniqueNames.join(this.uniqueNames.length>1?"، ":"")}},methods:{nameColorGroup:u.b}},f=Object(s.a)(c,(function(){var n=this,t=n.$createElement;return(n._self._c||t)("div",[n._v("\n    "+n._s(n.brandName)+" از\n    "),n.uniqueNames.length>1?[n._v("\n        رنگ‌های\n    ")]:[n._v("\n        رنگ\n    ")],n._v("\n    "+n._s(n.colorNames)+" در هویت سازمانی خود استفاده\n    "+n._s(n.isClosed?"می‌کرد":"می‌کند")+".\n")],2)}),[],!1,null,null,null).exports,l={components:{ColorBanner:r.a,BrandDetail:i,BrandGroups:f},metaInfo:function(){return{title:"رنگ‌های ".concat(this.$page.brand.title)}},computed:{brand:function(){return this.$page.brand||{}},isClosed:function(){return this.brand.tags.some((function(n){return"closed"===n.toLowerCase()}))},brandCountry:function(){var n={iran:"ایرانی",usa:"آمریکایی",germany:"آلمانی",japan:"ژاپنی",turkey:"ترکیه‌ای",italy:"ایتالیایی",china:"چینی"},t=this.brand.tags.find((function(t){return n[t]}))||{};return n[t]}}},d=(e("Aq6K"),null),m=Object(s.a)(l,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("Layout",[e("div",{staticClass:"color-banner"},[e("color-banner",{attrs:{colors:n.brand.colors}})],1),e("main",{staticClass:"wrapper text-black text-opacity-80 py-8"},[e("h1",{staticClass:"text-3xl font-bold mt-8 mb-4"},[n._v("\n            پالت رنگ‌های رسمی "+n._s(n.brand.title)+" به همراه کدهای RGB و HEX\n        ")]),n.brand.description?e("p",{staticClass:"mb-2"},[n._v("\n            "+n._s(n.brand.title)+"\n            یک\n            "+n._s(n.brand.description)+"\n            "+n._s(n.brandCountry)+"\n            "),n.isClosed?[n._v("\n                بود که همکنون به فعالیت خود پایان داده\n            ")]:n._e(),n._v("\n            است.\n        ")],2):n._e(),e("brand-groups",{staticClass:"mb-2",attrs:{colors:n.brand.colors,"brand-name":n.brand.title,"is-closed":n.isClosed}}),e("p",{staticClass:"mb-2"},[n._v("\n            در جدول زیر رنگ‌های رسمی برند "+n._s(n.brand.title)+" را مشاهده می‌کنید. برای اطمینان از این که متریال تبلیغاتی شما با برند "+n._s(n.brand.title)+" هماهنگ باشد، در کارهای خود از این رنگ‌ها استفاده کنید:\n        ")]),e("div",{staticClass:"color-detail"},[e("brand-detail",{attrs:{colors:n.brand.colors}})],1)],1)])}),[],!1,null,"872e99d8",null);"function"==typeof d&&d(m);t.default=m.exports},Iva2:function(n,t,e){},Rfxz:function(n,t,e){"use strict";var r=e("I+eb"),a=e("tycR").some,o=e("pkCn"),s=e("rkAj"),i=o("some"),u=s("some");r({target:"Array",proto:!0,forced:!i||!u},{some:function(n){return a(this,n,arguments.length>1?arguments[1]:void 0)}})},"cG/F":function(n,t,e){},fbCW:function(n,t,e){"use strict";var r=e("I+eb"),a=e("tycR").find,o=e("RNIs"),s=e("rkAj"),i=!0,u=s("find");"find"in[]&&Array(1).find((function(){i=!1})),r({target:"Array",proto:!0,forced:i||!u},{find:function(n){return a(this,n,arguments.length>1?arguments[1]:void 0)}}),o("find")},tkto:function(n,t,e){var r=e("I+eb"),a=e("ewvW"),o=e("33Wh");r({target:"Object",stat:!0,forced:e("0Dky")((function(){o(1)}))},{keys:function(n){return o(a(n))}})},vhAT:function(n,t,e){"use strict";e("cG/F")},yGW7:function(n,t,e){"use strict";e.d(t,"a",(function(){return a})),e.d(t,"b",(function(){return o}));e("2B1R"),e("E9XD"),e("tkto"),e("4l63");var r=e("eUpm"),a={red:{hex:"ff0000",name:"red",name_fa:"قرمز"},orange:{hex:"ffa500",name:"orange",name_fa:"نارنجی"},yellow:{hex:"ffff00",name:"yellow",name_fa:"زرد"},green:{hex:"008000",name:"green",name_fa:"سبز"},cyan:{hex:"00ffff",name:"cyan",name_fa:"سبزآبی"},azure:{hex:"007fff",name:"azure",name_fa:"نیلی"},blue:{hex:"0000ff",name:"blue",name_fa:"آبی"},purple:{hex:"800080",name:"purple",name_fa:"بنفش"},magenta:{hex:"ff00ff",name:"magenta",name_fa:"سرخابی"},white:{hex:"ffffff",name:"white",name_fa:"سفید"},grey:{hex:"808080",name:"grey",name_fa:"خاکستری"},black:{hex:"000000",name:"black",name_fa:"مشکی"}},o=function(n){var t=Object(r.a)(n);if(t[1]<=15)return t[2]<=20?a.black:t[2]>=70?a.white:a.grey;var e={0:a.red,30:a.orange,60:a.yellow,120:a.green,180:a.cyan,210:a.azure,240:a.blue,270:a.purple,300:a.magenta,360:a.red};return e[Object.keys(e).map((function(n){return parseInt(n)})).reduce((function(n,e){return Math.abs(e-t[0])<Math.abs(n-t[0])?e:n}))]}}}]);