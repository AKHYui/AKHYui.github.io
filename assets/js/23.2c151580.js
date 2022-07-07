(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{588:function(e,a,r){"use strict";r.r(a);var t=r(2),s=Object(t.a)({},(function(){var e=this,a=e.$createElement,r=e._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"docker-web环境搭建"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#docker-web环境搭建"}},[e._v("#")]),e._v(" Docker-Web环境搭建")]),e._v(" "),r("h2",{attrs:{id:"安装docker容器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装docker容器"}},[e._v("#")]),e._v(" 安装Docker容器")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("yum install -y yum-utils\n# 设置稳定存储库\nyum-config-manager \\\n    --add-repo \\\n    https://download.docker.com/linux/centos/docker-ce.repo\n# 启用nightly存储库\nyum-config-manager --enable docker-ce-nightly\n# 安装Docker引擎\nyum install docker-ce docker-ce-cli containerd.io\n")])])]),r("h2",{attrs:{id:"启动-停止docker"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#启动-停止docker"}},[e._v("#")]),e._v(" 启动/停止Docker")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("# 对docker进行启停操作\n## 启动\nsystemctl start docker\n## 停止\nsystemctl stop docker\n## 开机启动\nsystemctl enable docker\n## 禁止开机启动\nsystemctl disable docker\n## 查看状态\nsystemctl status docker\n")])])]),r("h2",{attrs:{id:"安装portainer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装portainer"}},[e._v("#")]),e._v(" 安装portainer")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("docker search portainer\n# 拉取镜像\ndocker pull portainer/portainer-ce\n")])])]),r("h2",{attrs:{id:"镜像下载完成"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#镜像下载完成"}},[e._v("#")]),e._v(" 镜像下载完成")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("[root@hyui ~]# docker images\nREPOSITORY               TAG                 IMAGE ID            CREATED             SIZE\nportainer/portainer-ce   latest              a0a227bf03dd        5 weeks ago        196MB\n")])])]),r("h2",{attrs:{id:"启动portainer"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#启动portainer"}},[e._v("#")]),e._v(" 启动portainer")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('docker run \\\n--name portainer \\\n-d -p 9000:9000 \\\n-v "/var/run/docker.sock:/var/run/docker.sock" \\\nportainer/portainer-ce\n')])])]),r("p",[e._v("访问http://{IP}:9000，通过Web界面对Docker进行控制。")]),e._v(" "),r("h2",{attrs:{id:"关于firewalld防火墙"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#关于firewalld防火墙"}},[e._v("#")]),e._v(" 关于firewalld防火墙")]),e._v(" "),r("p",[r("strong",[e._v("Docker需要在firewalld之后启动，因为firewalld运行在IPTABLES之上，firewalld在重启时会从IPTABLES中移除DOCKER规则")])]),e._v(" "),r("ul",[r("li",[e._v("解决方法：\n"),r("ol",[r("li",[e._v("Docker容器使用host网络模式启动")]),e._v(" "),r("li",[e._v("关闭firewalld防火墙改用iptables")]),e._v(" "),r("li",[e._v("关闭CentOS7的firewalld和iptables，改用主机商提供的防火墙(如果有的话)")])])])])])}),[],!1,null,null,null);a.default=s.exports}}]);