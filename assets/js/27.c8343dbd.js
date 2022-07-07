(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{568:function(s,t,a){"use strict";a.r(t);var e=a(2),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("前一段时间发现路由器里面可以自定义DNS，就想如果把纯净的DNS放入路由器里会不会直接访问谷歌和pixiv之类的。")]),s._v(" "),a("hr"),s._v(" "),a("p",[s._v("教程开始\n我们制作私人DNS有两种方法：")]),s._v(" "),a("ol",[a("li",[s._v("dnsmasq")]),s._v(" "),a("li",[s._v("overture")])]),s._v(" "),a("p",[s._v("制作环境使用CentOS7")]),s._v(" "),a("h2",{attrs:{id:"dnsmasq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dnsmasq"}},[s._v("#")]),s._v(" dnsmasq")]),s._v(" "),a("h3",{attrs:{id:"首先我们先更新源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#首先我们先更新源"}},[s._v("#")]),s._v(" 首先我们先更新源")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("    yum -y update\n")])])]),a("h3",{attrs:{id:"然后安装dnsmasq"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#然后安装dnsmasq"}},[s._v("#")]),s._v(" 然后安装dnsmasq")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("    yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" dnsmasq -y\n")])])]),a("h3",{attrs:{id:"编辑配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编辑配置文件"}},[s._v("#")]),s._v(" 编辑配置文件")]),s._v(" "),a("p",[s._v("dnsmasq的配置文件在/etc/dnsmasq.conf中，编辑这个文件")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/dnsmasq.conf\n")])])]),a("p",[s._v("里面的东西很多，需要添加的就以下几种")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    #这个是你指定的hosts文件，dnsmasq会使用你指定的hosts(有的时候hosts比较好的可以直接连YouTube)\n    addn-hosts=/etc/hosts\n    #这个是你自定义的上游DNS(第一个是阿里云的DNS，第二个是教育网的DNS)\n    server=223.5.5.5\n    server=202.38.93.153\n    #listen-address这个配置不可以有，一定要删掉\n    #如果看到listen-address=127.0.0.1这个可以注释掉或者删掉\n")])])]),a("h3",{attrs:{id:"基本指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本指令"}},[s._v("#")]),s._v(" 基本指令")]),s._v(" "),a("p",[s._v("dnsmasq的基本指令")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#开启")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" dnsmasq start\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#关闭")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" dnsmasq stop\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重启")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" dnsmasq restart\n")])])]),a("p",[s._v("开启以后查看53端口")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -tunlp "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("53")]),s._v("\n")])])]),a("p",[s._v("如果显示结果为")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("\n    tcp        0      0 0.0.0.0:53                  0.0.0.0:*                   LIST                    EN      2346/dnsmasq\n    udp        0      0 0.0.0.0:53                  0.0.0.0:*                                                   2346/dnsmasq\n")])])]),a("p",[s._v("dnsmasq正在运行了\ndnsmasq有个很大的缺点，虽然操作比较简单，但是dnsmasq是从上游DNS的53端口获取流量，而无法确定上游DNS的53端口的流量是否已经遭到了污染，如果你一套稳定而且很棒的hosts可以用dnsmasq。")]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"overture"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overture"}},[s._v("#")]),s._v(" overture")]),s._v(" "),a("p",[s._v("和dnsmasq不同的是，overture可以从上游DNS的非标准端口(非53端口)接收流量，不过需要上游DNS的支持。")]),s._v(" "),a("p",[s._v("overture不仅可以用在VPS中，也可以用在树莓派甚至Android")]),s._v(" "),a("p",[s._v("overture可以在GITHUB上找到"),a("a",{attrs:{href:"https://github.com/shawn1m/overture"}},[s._v("点此进入")])]),s._v(" "),a("h3",{attrs:{id:"下载程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载程序"}},[s._v("#")]),s._v(" 下载程序")]),s._v(" "),a("p",[s._v("根据你的架构下载对应的版本")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("要下载文件的网址"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),a("p",[s._v("我下载的是overture-linux-amd64.zip")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" overture "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" overture-linux-amd64.zip overture\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("774")]),s._v(" overture\n")])])]),a("p",[s._v("解压zip文件")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" overture\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v(" overture-linux-amd64.zip\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("774")]),s._v(" ./*\n")])])]),a("p",[s._v("会有这些文件")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    [root@hyui overture]# ls\n    config.json                domain_primary_sample  hosts_sample                   ip_network_primary_sample  overture-linux-amd64.zip\n    domain_alternative_sample             ip_network_alternative_sample  overture-linux-amd64\n")])])]),a("h3",{attrs:{id:"修改配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改配置文件"}},[s._v("#")]),s._v(" 修改配置文件")]),s._v(" "),a("p",[s._v("修改config.json")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" config.json\n")])])]),a("p",[s._v("其中需要修改一些地方")]),s._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"PrimaryDNS"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//你的主DNS信息，使用了DNSPOD")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"DNSPod"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Address"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"119.29.29.29:53"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Protocol"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"udp"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"SOCKS5Address"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Timeout"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"EDNSClientSubnet"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Policy"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"auto"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"ExternalIP"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"NoCookie"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"AlternativeDNS"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//你的备用DNS信息，这个是外国DNS，为了防止对53端口的投毒，可以使用443端口(前提是他们支持443或其他端口)")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Opendns"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Address"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"208.67.220.220:443"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Protocol"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tcp"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"SOCKS5Address"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Timeout"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"EDNSClientSubnet"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"Policy"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"disable"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"ExternalIP"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"NoCookie"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])])]),a("p",[s._v("关于EDNSClientSubnet的说明，作者给出的是")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("EDNSClientSubnet: Used to improve DNS accuracy. Please check RFC7871 for details.\nPolicy\nauto: If client IP is not in the reserved IP network, use client IP. Otherwise, use external IP.\nmanual: Use external IP if this field is not empty, otherwise use client IP if it is not reserved IP.\ndisable: Disable this feature.\nExternalIP: If this field is empty, ECS will be disabled when the inbound IP is not an external IP.\nNoCookie: Disable cookie.\n")])])]),a("p",[s._v("EDNSClientSubnet：用于提高DNS准确性。")]),s._v(" "),a("p",[s._v("auto：如果客户端IP不在保留的IP网络中，请使用客户端IP。否则，请使用外部IP。")]),s._v(" "),a("p",[s._v("manual：如果此字段不为空，则使用外部IP，否则使用客户端IP（如果不是保留IP）。")]),s._v(" "),a("p",[s._v("disable：禁用此功能。")]),s._v(" "),a("p",[s._v("ExternalIP：如果此字段为空，则当入站IP不是外部IP时，将禁用ECS。")]),s._v(" "),a("p",[s._v("NoCookie：禁用cookie。")]),s._v(" "),a("p",[s._v("overture同样可以自定义hosts")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('    "HostsFile": "/root/overture/hosts"   //这一行中的hosts即为自定义的hosts需要自己添加\n')])])]),a("h3",{attrs:{id:"运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[s._v("#")]),s._v(" 运行")]),s._v(" "),a("p",[s._v("设置完成后就可以运行了")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    ./overture-linux-amd64\n")])])]),a("p",[s._v("会显示")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    INFO[0000] Overture v1.5-rc3                            \n    INFO[0000] If you need any help, please visit the project repository: https://github.com/shawn1m/overture \n    INFO[0000] Load domain ./domain_primary_sample successful with 1 records  \n    INFO[0000] Load domain ./domain_alternative_sample successful with 1 records  \n    INFO[0000] Load ./ip_network_primary_sample successful  \n    INFO[0000] Load ./ip_network_alternative_sample successful \n    INFO[0000] Minimum TTL is disabled                      \n    INFO[0000] Cache is disabled                            \n    INFO[0000] Load hosts file successful                   \n    INFO[0000] Start overture on :53 \n")])])]),a("p",[s._v("说明正在运行了\n保持overture在后台运行可以用")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("    setsid ./overture-linux-amd64\n")])])]),a("h3",{attrs:{id:"开机启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开机启动"}},[s._v("#")]),s._v(" 开机启动")]),s._v(" "),a("p",[s._v("当然我们也可以写一个脚本让它开机自启动")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /etc/overture\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/overture/overture.sh\n    \n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/bash")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /root/overture/\n    setsid ./overture-linux-amd64\n")])])]),a("p",[s._v("创建好以后标记为可执行文件")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    chmod +x /etc/overture/overture.sh\n")])])]),a("p",[s._v("将rc.local也标记为可执行文件")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    chmod +x /etc/rc.d/rc.local\n")])])]),a("p",[s._v("打开rc.local")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    vim /etc/rc.d/rc.local\n")])])]),a("p",[s._v("添加脚本进去")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("    /etc/overture/overture.sh\n")])])]),a("p",[s._v("就可以开机被执行了。")]),s._v(" "),a("hr"),s._v(" "),a("h2",{attrs:{id:"补充"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#补充"}},[s._v("#")]),s._v(" 补充")]),s._v(" "),a("p",[s._v("后记:后来一直都觉得哪里不太好，觉得是不是哪里可以改进之类的，于是有了这个补充。\n/root/overture这个目录我们完全可以放在/usr/local/目录中\n然后进入/usr/local/overture将overture-linux-amd64软链接到/usr/bin\n这样就可以不用在cd进overture的目录了")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 代码实现")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 移动前可以先停止overture的运行")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" /root/overture /usr/local/\n    "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/overture\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 软链接的实现 ")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /usr/local/overture/overture-linux-amd64 /usr/bin/overture\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 运行")]),s._v("\n    setsid overture -c /usr/local/overture/config.json\n")])])]),a("p",[s._v("这个时候就不需要那个开机脚本了 直接把运行命令添加到/etc/rc.d/rc.local就够了")])])}),[],!1,null,null,null);t.default=r.exports}}]);