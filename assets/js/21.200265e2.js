(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{488:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"shell脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shell脚本","aria-hidden":"true"}},[t._v("#")]),t._v(" Shell脚本")]),t._v(" "),a("h2",{attrs:{id:"控制语句应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#控制语句应用","aria-hidden":"true"}},[t._v("#")]),t._v(" 控制语句应用")]),t._v(" "),a("h3",{attrs:{id:"shift命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shift命令","aria-hidden":"true"}},[t._v("#")]),t._v(" shift命令")]),t._v(" "),a("ul",[a("li",[t._v("shift的作用是将参数左移一位")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@Hyui-VM ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cat shift.sh ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#!/bin/bash")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$@")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("shift")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\n")])])]),a("p",[t._v("运行结果")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[root@Hyui-VM ~]# ./shift.sh This is CentOS7\nThis\nis\nCentOS7\n")])])]),a("ul",[a("li",[t._v("运行脚本时指定三个参数，分别为This、is、CentOS7。即$1=This,$2=is,$3=CentOS7。for指令开始后会先输出This，然后通过shift命令将参数左移，此时$1=is,$2=CentOS7，以此类推，再一次循环会显示is，第三次循环会显示CentOS7。")])]),t._v(" "),a("h3",{attrs:{id:"continue、break和exit命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#continue、break和exit命令","aria-hidden":"true"}},[t._v("#")]),t._v(" continue、break和exit命令")]),t._v(" "),a("ul",[a("li",[t._v("continue和break用于for、until和while循环中。")])]),t._v(" "),a("ol",[a("li",[t._v("continue用来在循环中中断当前循环的执行，以进入下一次循环体。")]),t._v(" "),a("li",[t._v("break用来结束整个循环语句。")]),t._v(" "),a("li",[t._v("exit用来结束脚本运行。")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@Hyui-VM ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# cat test.sh ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#!/bin/bash")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("16"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$i")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" \n  4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("continue")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  12"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v("\nesac\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${i}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sleep")]),t._v(" 3\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("exit")]),t._v("\n")])])]),a("p",[t._v("运行结果")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[root@Hyui-VM ~]# ./test.sh \n1\n2\n3\n5\n6\n7\n8\n9\n10\n11\n")])])]),a("ul",[a("li",[t._v("当循环体中i=4时运行continue，当前for循环continue后的指令不会再运行，所以不会输出4，直接进入下一循环。当循环体中i=12，直接运行break结束循环，所以11之后的数字将不会出现。")])])])},[],!1,null,null,null);s.default=e.exports}}]);