(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{580:function(a,s,t){"use strict";t.r(s);var r=t(3),e=Object(r.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"安装v2ray"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装v2ray"}},[a._v("#")]),a._v(" 安装V2ray")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("    "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" -L -s https://install.direct/go.sh"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("ul",[t("li",[a._v("如果提示curl没有安装可以进行curl的安装")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("    sudo -s  #切换到root\n    apt install curl -y  #Ubuntu用这个\n    yum install curl -y  #CentOS7用这个\n")])])]),t("h2",{attrs:{id:"配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[a._v("#")]),a._v(" 配置文件")]),a._v(" "),t("p",[a._v("脚本运行完后进入/etc/v2ray，找到config.json")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("    vim /etc/v2ray/config.json\n")])])]),t("p",[a._v("将配置写入config.json中")]),a._v(" "),t("h2",{attrs:{id:"控制v2ray的运行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#控制v2ray的运行"}},[a._v("#")]),a._v(" 控制V2ray的运行")]),a._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[a._v("    "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" v2ray start  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("##运行V2ray")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" v2ray stop  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("##停止运行V2ray")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" v2ray status  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("##查看V2ray的日志")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" v2ray reload  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("##重新载入V2ray")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" v2ray restart  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("##重启V2ray")]),a._v("\n")])])]),t("h2",{attrs:{id:"开机自启"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开机自启"}},[a._v("#")]),a._v(" 开机自启")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("    systemctl enable v2ray  ##开机自启\n    systemctl disable v2ray  ##关闭开机自启\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);