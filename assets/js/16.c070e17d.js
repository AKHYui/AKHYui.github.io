(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{476:function(t,n,o){"use strict";o.r(n);var s=o(1),i=Object(s.a)({},function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"shell引号"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#shell引号","aria-hidden":"true"}},[t._v("#")]),t._v(" Shell引号")]),t._v(" "),o("h2",{attrs:{id:"反斜线"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#反斜线","aria-hidden":"true"}},[t._v("#")]),t._v(" 反斜线")]),t._v(" "),o("ul",[o("li",[t._v("反斜线将将紧跟其后的单个字符设为字面意义上的字符")]),t._v(" "),o("li",[t._v("如果在命令末尾使用\\回车后，\\可以将回车命令提交功能屏蔽，将回车认为是换行继续输入命令，实现命令的多行输入")])]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v('[root@Hyui-VM ~]# echo *  #显示当前目录所有文件\nfile1 file2 file3 test.sh\n[root@Hyui-VM ~]# echo \\*  #显示字符*\n*\n[root@Hyui-VM ~]# echo \\>\n>\n[root@Hyui-VM ~]# find / \\  #换行输入多行命令\n> -name "test.sh" \\\n> -type f \\\n> -size +5M\n')])])]),o("h2",{attrs:{id:"单引号"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#单引号","aria-hidden":"true"}},[t._v("#")]),t._v(" 单引号")]),t._v(" "),o("ul",[o("li",[t._v("单引号将所有字符还原为字面意义，实现屏蔽Shell元字符的功能")]),t._v(" "),o("li",[t._v("单引号必须成对出现")])]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("[root@Hyui-VM ~]# echo '$HOME'  #单引号屏蔽了$的功能\n$HOME\n[root@Hyui-VM ~]# echo 'test\\'  #单引号屏蔽了\\功能\ntest\\\n")])])]),o("h2",{attrs:{id:"双引号"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#双引号","aria-hidden":"true"}},[t._v("#")]),t._v(" 双引号")]),t._v(" "),o("ul",[o("li",[o("strong",[t._v("双引号不会屏蔽'和\\和$这三个Shell元字符的含义")])]),t._v(" "),o("li",[o("strong",[t._v("如果需要屏蔽这些字符含义，必须前置添加一个\\符号")])])]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v('[root@Hyui-VM ~]# echo "This\'s CentOS7"  #双引号中的单引号可以单个出现\nThis\'s CentOS7\n[root@Hyui-VM ~]# echo "$HOME"  #正常输出$HOME路径\n/root\n[root@Hyui-VM ~]# echo "\\$HOME"  #$符号被屏蔽\n$HOME\n')])])]),o("h2",{attrs:{id:"反引号"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#反引号","aria-hidden":"true"}},[t._v("#")]),t._v(" 反引号")]),t._v(" "),o("ul",[o("li",[t._v("Shell中使用反引号进行命令替换，命令替换可以使Shell将命令字符替换为命令执行结果的输出内容，同样功能也可以使用$()来实现")])]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v('[root@Hyui-VM ~]# echo "Today is $(date +%D)"  \nToday is 02/17/20\n')])])]),o("h1",{attrs:{id:"正则表达式"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#正则表达式","aria-hidden":"true"}},[t._v("#")]),t._v(" 正则表达式")]),t._v(" "),o("ul",[o("li",[t._v("系统常用编辑工具与正则表达式的对应关系")])]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",{staticStyle:{"text-align":"center"}},[t._v("编辑工具")]),t._v(" "),o("th",{staticStyle:{"text-align":"center"}},[t._v("基本正则表达式")]),t._v(" "),o("th",{staticStyle:{"text-align":"center"}},[t._v("扩展正则表达式")])])]),t._v(" "),o("tbody",[o("tr",[o("td",{staticStyle:{"text-align":"center"}},[t._v("grep")]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("X")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"center"}},[t._v("egrep")]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("√")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"center"}},[t._v("vi")]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("X")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"center"}},[t._v("sed")]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("X")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"center"}},[t._v("awk")]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("√")]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("√")])])])]),t._v(" "),o("h2",{attrs:{id:"基本正则表达式"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#基本正则表达式","aria-hidden":"true"}},[t._v("#")]),t._v(" 基本正则表达式")]),t._v(" "),o("h3",{attrs:{id:"基本正则表达式含义"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#基本正则表达式含义","aria-hidden":"true"}},[t._v("#")]),t._v(" 基本正则表达式含义")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",{staticStyle:{"text-align":"left"}},[t._v("符号")]),t._v(" "),o("th",{staticStyle:{"text-align":"left"}},[t._v("含义")])])]),t._v(" "),o("tbody",[o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("c")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("匹配字母c")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v(".")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("匹配任意单个字符")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("*")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("匹配前一个字符出现零次或多次")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v(".*")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("匹配任意多个任意字符")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("[]")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("匹配集合中的任意单个字符，括号中为一个集合")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("[x-y]")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("匹配连续的字串范围")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("^")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("匹配字符串的开头")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("$")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("匹配字串的结尾")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("[^]")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("匹配否定，对括号中的集合取反")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("|匹配转义后的字串")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}})]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("{n,m}")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("匹配前一个字符重复n到m次")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("{n,}")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("匹配前一个字符重复至少n次")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("{n}")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("匹配前一个字符n次")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("()")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("将(与)之间的内容存储在“保留空间”，最大存储9个")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("\\n")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("通过\\1至\\9调用保留空间中的内容")])])])]),t._v(" "),o("h3",{attrs:{id:"基本正则表达式案例"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#基本正则表达式案例","aria-hidden":"true"}},[t._v("#")]),t._v(" 基本正则表达式案例")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v('[root@Hyui-VM ~]# cp /etc/passwd ./\n[root@Hyui-VM ~]# grep root ./passwd  #查找passwd文件中包含root的行\nroot:x:0:0:root:/root:/bin/bash\noperator:x:11:0:operator:/root:/sbin/nologin\n\n[root@Hyui-VM ~]# grep --color :..0: ./passwd  #查找:与0之间包含任意两个字符的字串，并用颜色加亮显示该行\nroot:x:0:0:root:/root:/bin/bash\nsync:x:5:0:sync:/sbin:/bin/sync\nshutdown:x:6:0:shutdown:/sbin:/sbin/shutdown\nhalt:x:7:0:halt:/sbin:/sbin/halt\ngames:x:12:100:games:/usr/games:/sbin/nologin\n\n[root@Hyui-VM ~]# grep --color 00* ./passwd  #查找包含至少一个0的行\nroot:x:0:0:root:/root:/bin/bash\nsync:x:5:0:sync:/sbin:/bin/sync\nshutdown:x:6:0:shutdown:/sbin:/sbin/shutdown\nhalt:x:7:0:halt:/sbin:/sbin/halt\noperator:x:11:0:operator:/root:/sbin/nologin\ngames:x:12:100:games:/usr/games:/sbin/nologin\nftp:x:14:50:FTP User:/var/ftp:/sbin/nologin\n\n[root@Hyui-VM ~]# grep --color o[os]t ./passwd  #查找包含oot或ost的行\nroot:x:0:0:root:/root:/bin/bash\noperator:x:11:0:operator:/root:/sbin/nologin\npostfix:x:89:89::/var/spool/postfix:/sbin/nologin\n\n[root@Hyui-VM ~]# grep --color [0-9] ./passwd  #查找包含数字0~9的行\nroot:x:0:0:root:/root:/bin/bash\nbin:x:1:1:bin:/bin:/sbin/nologin\ndaemon:x:2:2:daemon:/sbin:/sbin/nologin\nadm:x:3:4:adm:/var/adm:/sbin/nologin\nlp:x:4:7:lp:/var/spool/lpd:/sbin/nologin\nsync:x:5:0:sync:/sbin:/bin/sync\nshutdown:x:6:0:shutdown:/sbin:/sbin/shutdown\nhalt:x:7:0:halt:/sbin:/sbin/halt\nmail:x:8:12:mail:/var/spool/mail:/sbin/nologin\noperator:x:11:0:operator:/root:/sbin/nologin\ngames:x:12:100:games:/usr/games:/sbin/nologin\nftp:x:14:50:FTP User:/var/ftp:/sbin/nologin\nnobody:x:99:99:Nobody:/:/sbin/nologin\nsystemd-network:x:192:192:systemd Network Management:/:/sbin/nologin\ndbus:x:81:81:System message bus:/:/sbin/nologin\npolkitd:x:999:998:User for polkitd:/:/sbin/nologin\nsshd:x:74:74:Privilege-separated SSH:/var/empty/sshd:/sbin/nologin\npostfix:x:89:89::/var/spool/postfix:/sbin/nologin\nchrony:x:998:996::/var/lib/chrony:/sbin/nologin\nntp:x:38:38::/etc/ntp:/sbin/nologin\ntcpdump:x:72:72::/:/sbin/nologin\nnscd:x:28:28:NSCD Daemon:/:/sbin/nologin\n\n[root@Hyui-VM ~]# grep --color [f-q] ./passwd  #查找包含字母f~q的行\nroot:x:0:0:root:/root:/bin/bash\nbin:x:1:1:bin:/bin:/sbin/nologin\ndaemon:x:2:2:daemon:/sbin:/sbin/nologin\nadm:x:3:4:adm:/var/adm:/sbin/nologin\nlp:x:4:7:lp:/var/spool/lpd:/sbin/nologin\nsync:x:5:0:sync:/sbin:/bin/sync\nshutdown:x:6:0:shutdown:/sbin:/sbin/shutdown\nhalt:x:7:0:halt:/sbin:/sbin/halt\nmail:x:8:12:mail:/var/spool/mail:/sbin/nologin\noperator:x:11:0:operator:/root:/sbin/nologin\ngames:x:12:100:games:/usr/games:/sbin/nologin\nftp:x:14:50:FTP User:/var/ftp:/sbin/nologin\nnobody:x:99:99:Nobody:/:/sbin/nologin\nsystemd-network:x:192:192:systemd Network Management:/:/sbin/nologin\ndbus:x:81:81:System message bus:/:/sbin/nologin\npolkitd:x:999:998:User for polkitd:/:/sbin/nologin\nsshd:x:74:74:Privilege-separated SSH:/var/empty/sshd:/sbin/nologin\npostfix:x:89:89::/var/spool/postfix:/sbin/nologin\nchrony:x:998:996::/var/lib/chrony:/sbin/nologin\nntp:x:38:38::/etc/ntp:/sbin/nologin\ntcpdump:x:72:72::/:/sbin/nologin\nnscd:x:28:28:NSCD Daemon:/:/sbin/nologin\n\n[root@Hyui-VM ~]# grep --color ^root ./passwd  #查找开头为root的行\nroot:x:0:0:root:/root:/bin/bash\n\n[root@Hyui-VM ~]# grep --color bash$ ./passwd  #查找以bash结尾的行\nroot:x:0:0:root:/root:/bin/bash\n\n[root@Hyui-VM ~]# grep --color sbin/[^n] ./passwd  #查找sbin/后不跟n的行\nshutdown:x:6:0:shutdown:/sbin:/sbin/shutdown\nhalt:x:7:0:halt:/sbin:/sbin/halt\n\n[root@Hyui-VM ~]# grep --color \'0\\{1,2\\}\' ./passwd  #查找数字0出现一次两次的行\nroot:x:0:0:root:/root:/bin/bash\nsync:x:5:0:sync:/sbin:/bin/sync\nshutdown:x:6:0:shutdown:/sbin:/sbin/shutdown\nhalt:x:7:0:halt:/sbin:/sbin/halt\noperator:x:11:0:operator:/root:/sbin/nologin\ngames:x:12:100:games:/usr/games:/sbin/nologin\nftp:x:14:50:FTP User:/var/ftp:/sbin/nologin\n\n[root@Hyui-VM ~]# grep --color "\\(root\\).*\\1" ./passwd  #查找包含两个root的行\nroot:x:0:0:root:/root:/bin/bash\n\n[root@Hyui-VM ~]# grep --color "\\(root\\)\\(:\\).*\\2\\1" ./passwd  #查找以root:开头并以:root结尾的字串行\nroot:x:0:0:root:/root:/bin/bash\n\n[root@Hyui-VM ~]# grep ^$ ./passwd  #过滤文件的空白行\n[root@Hyui-VM ~]# grep -v ^$ ./passwd  #过滤文件的非空白行\n')])])]),o("h2",{attrs:{id:"扩展正则表达式"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#扩展正则表达式","aria-hidden":"true"}},[t._v("#")]),t._v(" 扩展正则表达式")]),t._v(" "),o("ul",[o("li",[t._v("扩展正则表达式及含义")])]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",{staticStyle:{"text-align":"left"}},[t._v("字 符")]),t._v(" "),o("th",{staticStyle:{"text-align":"left"}},[t._v("含 义")])])]),t._v(" "),o("tbody",[o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("{n,m}")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("等同于基本正则表达式的{n,m}")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("+")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("匹配前一个字符出现一次或多次")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("?")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("匹配前一个字符出现一次或零次")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("()")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("匹配正则集合")])])])]),t._v(" "),o("ul",[o("li",[t._v("|是匹配逻辑或，即匹配|前后的字串")]),t._v(" "),o("li",[t._v("扩展正则表达式案例")])]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("[root@Hyui-VM ~]# egrep --color '0{1,2}' ./passwd  #查询数字0出现1次或2次的行\nroot:x:0:0:root:/root:/bin/bash\nsync:x:5:0:sync:/sbin:/bin/sync\nshutdown:x:6:0:shutdown:/sbin:/sbin/shutdown\nhalt:x:7:0:halt:/sbin:/sbin/halt\noperator:x:11:0:operator:/root:/sbin/nologin\ngames:x:12:100:games:/usr/games:/sbin/nologin\nftp:x:14:50:FTP User:/var/ftp:/sbin/nologin\n\n[root@Hyui-VM ~]# egrep --color '0+' ./passwd  #查找至少出现一个0的行\nroot:x:0:0:root:/root:/bin/bash\nsync:x:5:0:sync:/sbin:/bin/sync\nshutdown:x:6:0:shutdown:/sbin:/sbin/shutdown\nhalt:x:7:0:halt:/sbin:/sbin/halt\noperator:x:11:0:operator:/root:/sbin/nologin\ngames:x:12:100:games:/usr/games:/sbin/nologin\nftp:x:14:50:FTP User:/var/ftp:/sbin/nologin\n\n[root@Hyui-VM ~]# egrep --color '(root|admin)' ./passwd  #查找包含root或admin的行\nroot:x:0:0:root:/root:/bin/bash\noperator:x:11:0:operator:/root:/sbin/nologin\n")])])]),o("h3",{attrs:{id:"posix规范"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#posix规范","aria-hidden":"true"}},[t._v("#")]),t._v(" POSIX规范")]),t._v(" "),o("ul",[o("li",[t._v("基本正则表达式会有语系问题，需要用POSIX规范正则表达式规则")])]),t._v(" "),o("h4",{attrs:{id:"posix规范含义"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#posix规范含义","aria-hidden":"true"}},[t._v("#")]),t._v(" POSIX规范含义")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",{staticStyle:{"text-align":"left"}},[t._v("字符集")]),t._v(" "),o("th",{staticStyle:{"text-align":"left"}},[t._v("含 义")]),t._v(" "),o("th",{staticStyle:{"text-align":"left"}},[t._v("字符集")]),t._v(" "),o("th",{staticStyle:{"text-align":"left"}},[t._v("含 义")])])]),t._v(" "),o("tbody",[o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("[:alpha:]")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("字母字符")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("[:graph:]")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("非空格字符")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("[:alnum:]")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("字母与数字字符")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("[:print:]")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("任何可以显示的字符")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("[:cntrl:]")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("控制字符")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("[:space:]")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("任何产生空白的字符")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("[:digit:]")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("数字字符")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("[:black:]")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("空格与Tab键字符")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("[:xdigit:]")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("十六进制数字字符")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("[:lower:]")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("小写字符")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("[:punct:]")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("标点符号")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("[:upper:]")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("大写字符")])])])]),t._v(" "),o("h4",{attrs:{id:"posix规范案例"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#posix规范案例","aria-hidden":"true"}},[t._v("#")]),t._v(" POSIX规范案例")]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("[root@Hyui-VM ~]# grep --color [[:digit:]] ./passwd  \nroot:x:0:0:root:/root:/bin/bash\nbin:x:1:1:bin:/bin:/sbin/nologin\ndaemon:x:2:2:daemon:/sbin:/sbin/nologin\nadm:x:3:4:adm:/var/adm:/sbin/nologin\nlp:x:4:7:lp:/var/spool/lpd:/sbin/nologin\nsync:x:5:0:sync:/sbin:/bin/sync\nshutdown:x:6:0:shutdown:/sbin:/sbin/shutdown\nhalt:x:7:0:halt:/sbin:/sbin/halt\nmail:x:8:12:mail:/var/spool/mail:/sbin/nologin\noperator:x:11:0:operator:/root:/sbin/nologin\ngames:x:12:100:games:/usr/games:/sbin/nologin\nftp:x:14:50:FTP User:/var/ftp:/sbin/nologin\nnobody:x:99:99:Nobody:/:/sbin/nologin\nsystemd-network:x:192:192:systemd Network Management:/:/sbin/nologin\ndbus:x:81:81:System message bus:/:/sbin/nologin\npolkitd:x:999:998:User for polkitd:/:/sbin/nologin\nsshd:x:74:74:Privilege-separated SSH:/var/empty/sshd:/sbin/nologin\npostfix:x:89:89::/var/spool/postfix:/sbin/nologin\nchrony:x:998:996::/var/lib/chrony:/sbin/nologin\nntp:x:38:38::/etc/ntp:/sbin/nologin\ntcpdump:x:72:72::/:/sbin/nologin\nnscd:x:28:28:NSCD Daemon:/:/sbin/nologin\n\n[root@Hyui-VM ~]# grep --color [[:alpha:]] ./passwd \nroot:x:0:0:root:/root:/bin/bash\nbin:x:1:1:bin:/bin:/sbin/nologin\ndaemon:x:2:2:daemon:/sbin:/sbin/nologin\nadm:x:3:4:adm:/var/adm:/sbin/nologin\nlp:x:4:7:lp:/var/spool/lpd:/sbin/nologin\nsync:x:5:0:sync:/sbin:/bin/sync\nshutdown:x:6:0:shutdown:/sbin:/sbin/shutdown\nhalt:x:7:0:halt:/sbin:/sbin/halt\nmail:x:8:12:mail:/var/spool/mail:/sbin/nologin\noperator:x:11:0:operator:/root:/sbin/nologin\ngames:x:12:100:games:/usr/games:/sbin/nologin\nftp:x:14:50:FTP User:/var/ftp:/sbin/nologin\nnobody:x:99:99:Nobody:/:/sbin/nologin\nsystemd-network:x:192:192:systemd Network Management:/:/sbin/nologin\ndbus:x:81:81:System message bus:/:/sbin/nologin\npolkitd:x:999:998:User for polkitd:/:/sbin/nologin\nsshd:x:74:74:Privilege-separated SSH:/var/empty/sshd:/sbin/nologin\npostfix:x:89:89::/var/spool/postfix:/sbin/nologin\nchrony:x:998:996::/var/lib/chrony:/sbin/nologin\nntp:x:38:38::/etc/ntp:/sbin/nologin\ntcpdump:x:72:72::/:/sbin/nologin\nnscd:x:28:28:NSCD Daemon:/:/sbin/nologin\n\n[root@Hyui-VM ~]# grep --color [[:punct:]] ./passwd \nroot:x:0:0:root:/root:/bin/bash\nbin:x:1:1:bin:/bin:/sbin/nologin\ndaemon:x:2:2:daemon:/sbin:/sbin/nologin\nadm:x:3:4:adm:/var/adm:/sbin/nologin\nlp:x:4:7:lp:/var/spool/lpd:/sbin/nologin\nsync:x:5:0:sync:/sbin:/bin/sync\nshutdown:x:6:0:shutdown:/sbin:/sbin/shutdown\nhalt:x:7:0:halt:/sbin:/sbin/halt\nmail:x:8:12:mail:/var/spool/mail:/sbin/nologin\noperator:x:11:0:operator:/root:/sbin/nologin\ngames:x:12:100:games:/usr/games:/sbin/nologin\nftp:x:14:50:FTP User:/var/ftp:/sbin/nologin\nnobody:x:99:99:Nobody:/:/sbin/nologin\nsystemd-network:x:192:192:systemd Network Management:/:/sbin/nologin\ndbus:x:81:81:System message bus:/:/sbin/nologin\npolkitd:x:999:998:User for polkitd:/:/sbin/nologin\nsshd:x:74:74:Privilege-separated SSH:/var/empty/sshd:/sbin/nologin\npostfix:x:89:89::/var/spool/postfix:/sbin/nologin\nchrony:x:998:996::/var/lib/chrony:/sbin/nologin\nntp:x:38:38::/etc/ntp:/sbin/nologin\ntcpdump:x:72:72::/:/sbin/nologin\nnscd:x:28:28:NSCD Daemon:/:/sbin/nologin\n\n[root@Hyui-VM ~]# grep [[:space:]] ./passwd \nftp:x:14:50:FTP User:/var/ftp:/sbin/nologin\nsystemd-network:x:192:192:systemd Network Management:/:/sbin/nologin\ndbus:x:81:81:System message bus:/:/sbin/nologin\npolkitd:x:999:998:User for polkitd:/:/sbin/nologin\nsshd:x:74:74:Privilege-separated SSH:/var/empty/sshd:/sbin/nologin\nnscd:x:28:28:NSCD Daemon:/:/sbin/nologin\n")])])]),o("h3",{attrs:{id:"gun规范"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#gun规范","aria-hidden":"true"}},[t._v("#")]),t._v(" GUN规范")]),t._v(" "),o("ul",[o("li",[t._v("Linux中的GUN软件一般还会支持转义元字符，转义元字符包括：\\b(边界字符)、\\B(与\\b为反义词)")]),t._v(" "),o("li",[t._v("例如 then, hello the world，字串每一个单词前后都有个\\b，用\\bthe\\b匹配单词，但不会匹配then；\\B相反，\\Bthe\\B不会匹配the，只会匹配the在中加的单词")])]),t._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v('[root@Hyui-VM ~]# grep --color "d\\b" ./passwd  #匹配d结尾的单词\nlp:x:4:7:lp:/var/spool/lpd:/sbin/nologin\nsystemd-network:x:192:192:systemd Network Management:/:/sbin/nologin\npolkitd:x:999:998:User for polkitd:/:/sbin/nologin\nsshd:x:74:74:Privilege-separated SSH:/var/empty/sshd:/sbin/nologin\nnscd:x:28:28:NSCD Daemon:/:/sbin/nologin\n\n[root@Hyui-VM ~]# grep --color "\\W" ./passwd  #匹配非单词字符\nroot:x:0:0:root:/root:/bin/bash\nbin:x:1:1:bin:/bin:/sbin/nologin\ndaemon:x:2:2:daemon:/sbin:/sbin/nologin\nadm:x:3:4:adm:/var/adm:/sbin/nologin\nlp:x:4:7:lp:/var/spool/lpd:/sbin/nologin\nsync:x:5:0:sync:/sbin:/bin/sync\nshutdown:x:6:0:shutdown:/sbin:/sbin/shutdown\nhalt:x:7:0:halt:/sbin:/sbin/halt\nmail:x:8:12:mail:/var/spool/mail:/sbin/nologin\noperator:x:11:0:operator:/root:/sbin/nologin\ngames:x:12:100:games:/usr/games:/sbin/nologin\nftp:x:14:50:FTP User:/var/ftp:/sbin/nologin\nnobody:x:99:99:Nobody:/:/sbin/nologin\nsystemd-network:x:192:192:systemd Network Management:/:/sbin/nologin\ndbus:x:81:81:System message bus:/:/sbin/nologin\npolkitd:x:999:998:User for polkitd:/:/sbin/nologin\nsshd:x:74:74:Privilege-separated SSH:/var/empty/sshd:/sbin/nologin\npostfix:x:89:89::/var/spool/postfix:/sbin/nologin\nchrony:x:998:996::/var/lib/chrony:/sbin/nologin\nntp:x:38:38::/etc/ntp:/sbin/nologin\ntcpdump:x:72:72::/:/sbin/nologin\nnscd:x:28:28:NSCD Daemon:/:/sbin/nologin\n')])])])])},[],!1,null,null,null);n.default=i.exports}}]);