(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{595:function(t,a,e){"use strict";e.r(a);var s=e(2),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"awk"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#awk"}},[t._v("#")]),t._v(" Awk")]),t._v(" "),e("h2",{attrs:{id:"awk简介"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#awk简介"}},[t._v("#")]),t._v(" Awk简介")]),t._v(" "),e("ul",[e("li",[t._v("Awk是一种编程语言，可以在Linux下对文本和数据进行扫描与处理，数据可以来自标准输入、文件、管道。")])]),t._v(" "),e("h2",{attrs:{id:"awk工作流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#awk工作流程"}},[t._v("#")]),t._v(" Awk工作流程")]),t._v(" "),e("ul",[e("li",[t._v("逐行扫描文件 --\x3e 从第一行到最后一行 --\x3e 寻找匹配特定模式的行 --\x3e 进行用户操作")]),t._v(" "),e("li",[t._v("Awk的两个特殊模式：\n"),e("ol",[e("li",[t._v("BEGIN模式：awk将在读取任何输入行之前执行BEGIN中的操作。")]),t._v(" "),e("li",[t._v("END模式：awk将在正式退出之前执行END中的操作。")])])])]),t._v(" "),e("h2",{attrs:{id:"awk基本语法格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#awk基本语法格式"}},[t._v("#")]),t._v(" Awk基本语法格式")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("gawk [选项] -f program-file [--] file ...\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("POSIX options:          GNU long options: (standard)\n        -f progfile             --file=progfile\n        -F fs                   --field-separator=fs\n        -v var=val              --assign=var=val\nShort options:          GNU long options: (extensions)\n        -b                      --characters-as-bytes\n        -c                      --traditional\n        -C                      --copyright\n        -d[file]                --dump-variables[=file]\n        -e 'program-text'       --source='program-text'\n        -E file                 --exec=file\n        -g                      --gen-pot\n        -h                      --help\n        -L [fatal]              --lint[=fatal]\n        -n                      --non-decimal-data\n        -N                      --use-lc-numeric\n        -O                      --optimize\n        -p[file]                --profile[=file]\n        -P                      --posix\n        -r                      --re-interval\n        -S                      --sandbox\n        -t                      --lint-old\n        -V                      --version\n")])])]),e("h2",{attrs:{id:"awk操作指令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#awk操作指令"}},[t._v("#")]),t._v(" Awk操作指令")]),t._v(" "),e("h3",{attrs:{id:"记录与字段"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#记录与字段"}},[t._v("#")]),t._v(" 记录与字段")]),t._v(" "),e("ul",[e("li",[t._v("Awk一次从文件中读取一条记录，并将记录存储在字段变量$0中。记录为分割为字段并存储在$1,$2,...,$NF中(默认使用空格或制表符为分隔符)。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("#读取输入行，并输出第一个字段、第二个字段、第三个字段\n[root@Hyui-VM ~]# echo hello the world | awk '{print $1,$2,$3}'\nhello the world\n#读取输入行，直接输出该行\n[root@Hyui-VM ~]# echo hello the world | awk '{print $0}'\nhello the world\n#输出该行的字段个数\n[root@Hyui-VM ~]# echo hello the world | awk '{print NF}'\n3\n#输出该行最后一个字段\n[root@Hyui-VM ~]# echo hello the world | awk '{print $NF}'\nworld\n")])])]),e("h3",{attrs:{id:"字段分隔符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#字段分隔符"}},[t._v("#")]),t._v(" 字段分隔符")]),t._v(" "),e("ul",[e("li",[t._v("Awk默认使用空格和制表符作为分隔符，使用-F和FS可以改变分隔符。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[root@Hyui-VM ~]# awk -F: '{print $1}' /etc/passwd\n[root@Hyui-VM ~]# awk 'BEGIN {FS=\":\"} {print $1}' /etc/passwd\n")])])]),e("ul",[e("li",[t._v('以上两种方法都是将":"设定为分隔符，以":"为分隔符打印passwd文件的第一个字段。')]),t._v(" "),e("li",[t._v("如何指定多个字段分隔符?")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[root@Hyui-VM ~]# echo 'hello the:world,!' | awk 'BEGIN {FS=\"[:,]\"} {print $1,$2,$3,$4}'\nhello the world !\n")])])]),e("h3",{attrs:{id:"内置变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内置变量"}},[t._v("#")]),t._v(" 内置变量")]),t._v(" "),e("h4",{attrs:{id:"变量列表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#变量列表"}},[t._v("#")]),t._v(" 变量列表")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"left"}},[t._v("变量名称")]),t._v(" "),e("th",{staticStyle:{"text-align":"left"}},[t._v("描  述")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("ARGC")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("命令行参数个数")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("FILENAME")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("当前输入文档名称")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("FNR")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("当前输入文档当前记录编号")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("NR")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("输入流的当前记录编号")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("NF")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("当前记录的字段个数")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("FS")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("字段分隔符")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("OFS")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("输出字段分隔符，默认为空格")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("ORS")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("输出记录分隔符，默认换行符\\n")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"left"}},[t._v("RS")]),t._v(" "),e("td",{staticStyle:{"text-align":"left"}},[t._v("输入记录分隔符，默认为\\n")])])])]),t._v(" "),e("h4",{attrs:{id:"示例1"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例1"}},[t._v("#")]),t._v(" 示例1")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[root@Hyui-VM ~]# cat neko.html \n<html>\n<title>Neko Site</title>\n<body>\nh1Cute Nekoh1\nh2Kawaii Nekoh2\nh3Yasashi Nekoh3\n</body>\n</html>\n[root@Hyui-VM ~]# cat network \nDEVICE=eno16777736\nonboot=yes\nBOOTPROTO=static\nipaddr=192.168.0.1\nnEtMaSt=255.255.255.0\nGaTeWaY=192.168.0.254\n")])])]),e("ul",[e("li",[t._v("输出当前文档的当前编号，第一个文件有8行，第二个文件有6行。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[root@Hyui-VM ~]# awk '{print FNR}' neko.html network \n1\n2\n3\n4\n5\n6\n7\n8\n1\n2\n3\n4\n5\n6\n")])])]),e("ul",[e("li",[t._v("将两个文档作为一个整体输入流，通过NR输入当前编号。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[root@Hyui-VM ~]# awk '{print NR}' neko.html network \n1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n11\n12\n13\n14\n")])])]),e("ul",[e("li",[t._v("文档每行的字段数量。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[root@Hyui-VM ~]# awk '{print NF}' neko.html \n1\n2\n1\n2\n2\n2\n1\n1\n")])])]),e("h4",{attrs:{id:"示例2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例2"}},[t._v("#")]),t._v(" 示例2")]),t._v(" "),e("ul",[e("li",[t._v('通过OFS将输出分隔符设置为"-"。')])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[root@Hyui-VM ~]# cat test.txt \nThis is a test file.\nWelcome to CentOS Linux 7.\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("root@Hyui-VM ~]# awk 'BEGIN {OFS=\"-\"} {print $1,$2,$3}' test.txt \nThis-is-a\nWelcome-to-CentOS\n")])])]),e("h3",{attrs:{id:"表达式与操作符"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#表达式与操作符"}},[t._v("#")]),t._v(" 表达式与操作符")]),t._v(" "),e("ul",[e("li",[t._v("操作符示例")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[root@Hyui-VM ~]# echo \"test\" | awk 'x=2 {print x+3}'\n5\n[root@Hyui-VM ~]# echo \"test\" | awk 'x=2,y=3 {print x+3, y*3}'\n5 9\n#输出sshd_config所有空白行\n[root@Hyui-VM ~]# awk '/^$/ {print x+=1}' /etc/ssh/sshd_config\n1\n2\n3\n4\n5\n......[省略]\n#输出sshd_config总空白行个数\n[root@Hyui-VM ~]# awk '/^$/ {x+=1} END {print x}' /etc/ssh/sshd_config \n27\n#列出passwd的id大于500的用户名\n[root@Hyui-VM ~]# awk -F: '$3>500 {print $1}' /etc/passwd\npolkitd\nchrony\n")])])]),e("h2",{attrs:{id:"awk高级应用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#awk高级应用"}},[t._v("#")]),t._v(" Awk高级应用")]),t._v(" "),e("h3",{attrs:{id:"if条件判断"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#if条件判断"}},[t._v("#")]),t._v(" If条件判断")]),t._v(" "),e("ul",[e("li",[t._v("格式：")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("if (表达式)\n动作1\nelse\n动作2\n\nif (表达式) 动作1; else 动作2\n")])])]),e("ul",[e("li",[t._v("判断vda1可用存储是否不足2G")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('[root@Hyui-VM ~]# df | grep vda1 | awk \'{if($4<2000000) Print "Insufficient storage"; else print "OK"}\'\nOK\n')])])]),e("h3",{attrs:{id:"while循环"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#while循环"}},[t._v("#")]),t._v(" While循环")]),t._v(" "),e("ul",[e("li",[t._v("格式1：")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("while(条件)\n动作\n")])])]),e("ul",[e("li",[t._v("示例：")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[root@Hyui-VM ~]# awk 'i=1 {} BEGIN {while(i<=5){++i; print i}}' neko.html \n1\n2\n3\n4\n5\n6\n")])])]),e("ul",[e("li",[t._v("格式2：")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("do\n动作\nwhile(条件)\n")])])]),e("ul",[e("li",[t._v("示例：")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[root@Hyui-VM ~]# awk 'BEGIN { do {++x; print x} while (x<=5)}' neko.html \n1\n2\n3\n4\n5\n6\n")])])]),e("h3",{attrs:{id:"for循环"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#for循环"}},[t._v("#")]),t._v(" For循环")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("for (变量;条件;计数器)\n  动作\n")])])]),e("ul",[e("li",[t._v("示例：")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[root@Hyui-VM ~]# awk 'BEGIN {for (i=1;i<=5;i++) print i}' neko.html \n1\n2\n3\n4\n5\n")])])]),e("h3",{attrs:{id:"函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#函数"}},[t._v("#")]),t._v(" 函数")]),t._v(" "),e("h4",{attrs:{id:"rand-函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rand-函数"}},[t._v("#")]),t._v(" rand()函数")]),t._v(" "),e("ul",[e("li",[t._v("作用：产生0~1之间的浮点类型随机数。")]),t._v(" "),e("li",[t._v("示例：")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[root@Hyui-VM ~]# awk 'BEGIN{print rand(); srand(); print srand()}' test.txt \n0.237788\n1585732218\n")])])]),e("ul",[e("li",[e("strong",[t._v("使用srand()使每次产生的随机数不同")])])]),t._v(" "),e("h4",{attrs:{id:"gsub-x-y-z-函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gsub-x-y-z-函数"}},[t._v("#")]),t._v(" gsub(x,y,z)函数")]),t._v(" "),e("ul",[e("li",[t._v("作用：在字串z中使用字串y替换与正则表达式x相匹配的所有字串，z默认为$0。")])]),t._v(" "),e("h4",{attrs:{id:"sub-x-y-z-函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sub-x-y-z-函数"}},[t._v("#")]),t._v(" sub(x,y,z)函数")]),t._v(" "),e("ul",[e("li",[t._v("作用：在字串z中使用字串y替换与正则表达式x相匹配的di'yi'g字串，z默认为$0。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[root@Hyui-VM ~]# awk -F: 'gsub(/root/,\"centos\",$0) {print $0}' /etc/passwd \ncentos:x:0:0:centos:/centos:/bin/bash\noperator:x:11:0:operator:/centos:/sbin/nologin\n[root@Hyui-VM ~]# awk -F: 'sub(/root/,\"centos\",$0) {print $0}' /etc/passwd \ncentos:x:0:0:root:/root:/bin/bash\noperator:x:11:0:operator:/centos:/sbin/nologin\n")])])]),e("h4",{attrs:{id:"length-z-函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#length-z-函数"}},[t._v("#")]),t._v(" length(z)函数")]),t._v(" "),e("ul",[e("li",[t._v("作用：计算并返回字串长度。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[root@Hyui-VM ~]# awk '{print length()}' test.txt \n20\n26\n")])])]),e("h4",{attrs:{id:"getline函数"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getline函数"}},[t._v("#")]),t._v(" getline函数")]),t._v(" "),e("ul",[e("li",[t._v("作用：从输入中读取下一行内容。")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[root@Hyui-VM ~]# df -h\nFilesystem      Size  Used Avail Use% Mounted on\ndevtmpfs        1.9G     0  1.9G   0% /dev\ntmpfs           1.9G     0  1.9G   0% /dev/shm\ntmpfs           1.9G  424K  1.9G   1% /run\ntmpfs           1.9G     0  1.9G   0% /sys/fs/cgroup\n/dev/vda1        40G  2.1G   36G   6% /\ntmpfs           379M     0  379M   0% /run/user/0\n")])])]),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("[root@Hyui-VM ~]# df -h | awk '{if(NF==1) {getline; print $3}; if(NF==6) print $4}'\n1.9G\n1.9G\n1.9G\n1.9G\n36G\n379M\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);