(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{532:function(s,a,t){"use strict";t.r(a);var n=t(2),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[s._v("以日期码+xxx.com.access.log命名格式为例")]),s._v(" "),t("p",[s._v("假定原日志文件名为xxx.com.access.log")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /data\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /data/runlog.sh\n")])])]),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/bash")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LOGPATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/nginx/logs/xxx.com.access.log\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将切割出来的日志文件存入/data(没有就创建一个)")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("BASEPATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/data\n        \n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 时间用年月日小时分钟")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("bak")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$BASEPATH")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" -d yesterday +%Y%m%d%H%M"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(".xxx.com.access.log\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用echo调试")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## echo $bak")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将xxx.com.access.log移动到/data下并改名为日期码+文件名")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LOGPATH")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$bak")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在/usr/local/nginx/logs里创建一个新的xxx.com.access.log")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LOGPATH")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 用kill信号量控制nginx")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" -USR1 "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /usr/local/nginx/logs/nginx.pid"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 保存退出")]),s._v("\n")])])]),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" +x /data/runlog.sh\n")])])]),t("p",[s._v("将这个脚本定时运行(一分钟运行一次)")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("crontab")]),s._v(" -e\n\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 分时日月周")]),s._v("\n    */1 * * * * "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" /data/runlog.sh\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#保存")]),s._v("\n")])])]),t("hr"),s._v(" "),t("p",[s._v("另外试着写了一个统计IP访问网站次数的脚本")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/bash")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# LOGPATH是你的网站日志")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("LOGPATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/nginx/logs/xxx.com.access.log\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 存放cut好的log的目录")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("BASEPATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/IPlogs\n    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("IPPATH")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/IPlogs/IP.logs\n    \n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("touch")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$BASEPATH")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" -d yesterday +%Y%m%d%H%M"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(".xxx.com.access.log\n    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("bak")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$BASEPATH")]),s._v("/"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" -d yesterday +%Y%m%d%H%M"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(".xxx.com.access.log\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 以“-”为分隔符 取第一部分内容(即IP)")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" -d"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'-'")]),s._v(" -f1 "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$LOGPATH")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$bak")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$IPPATH")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" -d yesterday +%Y"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'年'")]),s._v("%m"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'月'")]),s._v("%d"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'日'")]),s._v("%H"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'时'")]),s._v("%M"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'分'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$IPPATH")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 'head -20'这里 你想统计前几名就写几")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$bak")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("NF-1"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v("}'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("uniq")]),s._v(" -c "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" -k "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" -n -r"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("head")]),s._v(" -20 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$IPPATH")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'IP访问次数已存储至/IPlogs/IP.logs'")]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);