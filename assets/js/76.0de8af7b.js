(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{589:function(t,s,a){"use strict";a.r(s);var n=a(3),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"申请ssl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#申请ssl"}},[t._v("#")]),t._v(" 申请SSL")]),t._v(" "),a("ul",[a("li",[t._v("可以去Let's Encrypt申请一个免费的SSL证书，申请教程网上有很多")]),t._v(" "),a("li",[t._v("如果嫌麻烦也可以装个宝塔面板，可以直接一键申请SSL")])]),t._v(" "),a("h2",{attrs:{id:"配置nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置nginx"}},[t._v("#")]),t._v(" 配置Nginx")]),t._v(" "),a("p",[t._v("修改网站对应的Nginx配置文件。")]),t._v(" "),a("p",[t._v("ssl_protocols处可以改为：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;\n")])])]),a("p",[t._v("ssl_ciphers处可以改为：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("    ssl_ciphers     HIGH:!aNULL:!MD5;\n")])])]),a("p",[t._v('然后在当前server的最后一个"}"号之前加入：')]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('    location /v/ {\n    \tproxy_redirect off;\n    \tproxy_pass http://127.0.0.1:{端口号}/;\n    \tproxy_http_version 1.1;\n    \tproxy_set_header Host "{网址}";\n    \tproxy_set_header Connection "Upgrade";\n    \tproxy_set_header Upgrade "WebSocket";\n    \tproxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    \tproxy_intercept_errors on;\n    }\n    #{端口号}处改为你要让v2ray运行的端口号\n    #{网址}处写你的网址就行\n')])])]),a("h2",{attrs:{id:"修改v2ray配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改v2ray配置"}},[t._v("#")]),t._v(" 修改V2ray配置")]),t._v(" "),a("p",[t._v("修改V2ray的配置文件config.json")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"log"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"access"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/var/log/v2ray/access.log"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"error"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/var/log/v2ray/error.log"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"loglevel"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"info"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"inbound"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"port"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("端口"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"listen"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"127.0.0.1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vmess"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"settings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"clients"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"id"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{UUID}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"level"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alterId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"security"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"none"')]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"streamSettings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"network"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ws"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"security"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"auto"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"wsSettings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/"')]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"outbound"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"protocol"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"freedom"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"settings"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  #"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("端口"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("处填写V2ray运行端口\n  #"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("UUID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("处填写自己随机生成的UUID\n")])])]),a("h2",{attrs:{id:"在客户端测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在客户端测试"}},[t._v("#")]),t._v(" 在客户端测试")]),t._v(" "),a("p",[t._v("打开客户端\n地址填写web的网址\n端口443\n用户ID是服务端中自己生成的UUID\n传输协议选ws\n伪装域名填写web的网址\n路径填写/v/\n底层传输安全选tls\n进行连接测试")]),t._v(" "),a("h2",{attrs:{id:"在cloudflare中打开cdn-非必需"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在cloudflare中打开cdn-非必需"}},[t._v("#")]),t._v(" 在CloudFlare中打开CDN(非必需)")]),t._v(" "),a("h2",{attrs:{id:"测试成功以后去cloudflare那里点亮对应解析记录中的灰色的云朵-未使用cdn时是灰色的-使用时是黄色"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试成功以后去cloudflare那里点亮对应解析记录中的灰色的云朵-未使用cdn时是灰色的-使用时是黄色"}},[t._v("#")]),t._v(" 测试成功以后去cloudflare那里点亮对应解析记录中的灰色的云朵(未使用CDN时是灰色的，使用时是黄色)")]),t._v(" "),a("h2",{attrs:{id:"vless协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vless协议"}},[t._v("#")]),t._v(" VLESS协议")]),t._v(" "),a("h3",{attrs:{id:"在vmess协议配置文件上进行改动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在vmess协议配置文件上进行改动"}},[t._v("#")]),t._v(" 在VMESS协议配置文件上进行改动")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('    {\n      "log" : {\n        "access": "/var/log/v2ray/access.log",\n        "error": "/var/log/v2ray/error.log",\n        "loglevel": "info"\n      },\n      "inbound": {\n        "port": {端口},\n        "listen": "127.0.0.1",\n        "protocol": "vless",\n        "settings": {\n          "clients": [\n            {\n              "id": "{UUID}",\n              "level": 1,\n              "alterId": 64,\n              "security": "none"\n            }\n          ],\n          "decryption": "none"\n        },\n        "streamSettings": {\n          "network": "ws",\n          "security": "auto",\n          "wsSettings": {\n            "path": "/"\n          }\n        }\n      },\n      "outbound": {\n        "protocol": "freedom",\n        "settings": {}\n      }\n    }\n')])])]),a("ul",[a("li",[t._v('对protocol项进行更改，将"vmess"替换为"vless"')]),t._v(" "),a("li",[t._v('增添一个"decryption": "none"项')])])])}),[],!1,null,null,null);s.default=r.exports}}]);