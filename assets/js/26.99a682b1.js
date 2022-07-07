(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{569:function(s,t,a){"use strict";a.r(t);var e=a(2),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"lnmp安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lnmp安装"}},[s._v("#")]),s._v(" LNMP安装")]),s._v(" "),a("h2",{attrs:{id:"安装nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装nginx"}},[s._v("#")]),s._v(" 安装Nginx")]),s._v(" "),a("h3",{attrs:{id:"下载nginx预编译包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载nginx预编译包"}},[s._v("#")]),s._v(" 下载Nginx预编译包")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://nginx.org/en/download.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://nginx.org/en/download.html"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"解压压缩包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解压压缩包"}},[s._v("#")]),s._v(" 解压压缩包")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@Hyui-VM ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mkdir nginx ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@Hyui-VM ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# mv nginx-1.19.0.tar.gz ./nginx")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@Hyui-VM ~"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd nginx/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@Hyui-VM nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# tar -zxvf nginx-1.19.0.tar.gz")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@Hyui-VM nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls")]),s._v("\nnginx-1.19.0  nginx-1.19.0.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@Hyui-VM nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd nginx-1.19.0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@Hyui-VM nginx-1.19.0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls")]),s._v("\nauto  CHANGES  CHANGES.ru  conf  configure  contrib  html  LICENSE  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("man")]),s._v("  README  src\n")])])]),a("h3",{attrs:{id:"安装依赖软件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖软件"}},[s._v("#")]),s._v(" 安装依赖软件")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gcc gcc-c++ cyrus-sasl-md5 openssl openssl-devel -y\n")])])]),a("h3",{attrs:{id:"编译安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译安装"}},[s._v("#")]),s._v(" 编译安装")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将ssl模块也编译入nginx")]),s._v("\n./configure --prefix"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/nginx/ --with-http_ssl_module\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])])]),a("h3",{attrs:{id:"运行nginx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行nginx"}},[s._v("#")]),s._v(" 运行Nginx")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("./sbin/nginx\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -aux "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" nginx\nroot     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17033")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("45976")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1120")]),s._v(" ?        Ss   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":30   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":00 nginx: master process ./sbin/nginx\nnobody   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17034")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("46416")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2112")]),s._v(" ?        S    "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":30   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":00 nginx: worker process\nroot     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17060")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("112812")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("972")]),s._v(" pts/1    S+   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":33   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(":00 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" --color"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("auto nginx\n")])])]),a("h3",{attrs:{id:"将nginx放入systemd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将nginx放入systemd"}},[s._v("#")]),s._v(" 将Nginx放入systemd")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /usr/lib/systemd/system/nginx.service\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Description")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("Nginx "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 描述Nginx信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Documentation")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://nginx.org/ \n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("After")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("network.target remote-fs.target nss-lookup.target "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 表明依赖服务")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("forking "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动时关系的定义")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PIDFile")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/nginx/logs/nginx.pid "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# PID文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动Nginx使用的命令")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecReload")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/bin/kill -s HUP "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MAINPID")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启Nginx命令")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStop")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/bin/kill -s QUIT "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MAINPID")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 停止Nginx命令")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PrivateTmp")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 给服务分配独立的临时空间")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WantedBy")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("multi-user.target\n")])])]),a("h2",{attrs:{id:"安装php"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装php"}},[s._v("#")]),s._v(" 安装PHP")]),s._v(" "),a("h3",{attrs:{id:"下载预编译包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载预编译包"}},[s._v("#")]),s._v(" 下载预编译包")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.php.net/downloads",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.php.net/downloads"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"添加www用户"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#添加www用户"}},[s._v("#")]),s._v(" 添加www用户")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("groupadd")]),s._v(" www\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("useradd")]),s._v(" -s /sbin/nologin -g www -M www\n")])])]),a("h3",{attrs:{id:"解压预编译包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解压预编译包"}},[s._v("#")]),s._v(" 解压预编译包")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" php\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" php-7.2.31.tar.gz php\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf php-7.2.31.tar.gz\n")])])]),a("h3",{attrs:{id:"安装依赖软件-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装依赖软件-2"}},[s._v("#")]),s._v(" 安装依赖软件")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gcc autoconf gcc-c++ libxml2 libxml2-devel openssl openssl-devel "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bzip2")]),s._v(" bzip2-devel libcurl libcurl-devel libjpeg libjpeg-devel libpng libpng-devel freetype freetype-devel gmp gmp-devel readline readline-devel libxslt libxslt-devel systemd-devel openjpeg-devel\n")])])]),a("h3",{attrs:{id:"开始编译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始编译"}},[s._v("#")]),s._v(" 开始编译")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" /usr/local/php7.2\n./configure --prefix"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/php7.2 --with-config-file-path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/php7.2/etc --with-zlib-dir --with-freetype-dir --enable-mbstring --with-libxml-dir"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr --enable-xmlreader --enable-xmlwriter --enable-soap --enable-calendar --with-curl --with-zlib --with-gd --with-pdo-sqlite --with-pdo-mysql --with-mysqli --with-mysql-sock --enable-mysqlnd --disable-rpath --enable-inline-optimization --with-bz2 --with-zlib --enable-sockets --enable-sysvsem --enable-sysvshm --enable-pcntl --enable-mbregex --enable-exif --enable-bcmath --with-mhash --enable-zip --with-pcre-regex --with-jpeg-dir"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr --with-png-dir"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr --with-openssl --enable-ftp --with-kerberos --with-gettext --with-xmlrpc --with-xsl --enable-fpm --with-fpm-user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("php-fpm --with-fpm-group"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("php-fpm --with-fpm-systemd --disable-fileinfo\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])])]),a("h3",{attrs:{id:"配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置文件"}},[s._v("#")]),s._v(" 配置文件")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/php7.2/etc\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" php-fpm.conf.default php-fpm.conf\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 编辑配置文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" php-fpm.conf\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将pid = run/php-fpm.pid前的“;”注释删除")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /usr/local/php7.2/etc/php-fpm.d\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" www.conf.default www.conf\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" www.conf\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改其中的user和group项user = www，group = www")]),s._v("\n")])])]),a("h3",{attrs:{id:"运行php-fpm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行php-fpm"}},[s._v("#")]),s._v(" 运行php-fpm")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("/usr/local/php7.2/sbin/php-fpm\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 检查启动状态")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -aux "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" php\n")])])]),a("h3",{attrs:{id:"修改nginx配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改nginx配置文件"}},[s._v("#")]),s._v(" 修改Nginx配置文件")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /usr/local/nginx/conf/nginx.conf\n")])])]),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改user项为www")]),s._v("\nuser  www"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("div",{staticClass:"language-conf extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("# 去掉以下location的注释 并将fastcgi_param项中的/scripts修改为$document_root\nlocation ~ \\.php$ {\n            root           html;\n            fastcgi_pass   127.0.0.1:9000;\n            fastcgi_index  index.php;\n            fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;\n            include        fastcgi_params;\n        }\n\n")])])]),a("h2",{attrs:{id:"安装mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装mysql"}},[s._v("#")]),s._v(" 安装MySQL")]),s._v(" "),a("h3",{attrs:{id:"下载mysql的rpm包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载mysql的rpm包"}},[s._v("#")]),s._v(" 下载MySQL的rpm包")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://repo.mysql.com/mysql57-community-release-el7-11.noarch.rpm\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装MySQL5.7的rpm包")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" -ivh mysql57-community-release-el7-11.noarch.rpm\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新源")]),s._v("\nyum update -y \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装mysql")]),s._v("\nyum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mysql-server -y\n")])])]),a("h3",{attrs:{id:"启动mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动mysql"}},[s._v("#")]),s._v(" 启动MySQL")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("systemctl start mysqld  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启")]),s._v("\nsystemctl restart mysqld  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启")]),s._v("\nsystemctl stop mysqld  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 关闭")]),s._v("\n")])])]),a("h3",{attrs:{id:"登录mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#登录mysql"}},[s._v("#")]),s._v(" 登录MySQL")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /var/log/mysqld.log "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" password\nmysql -u root -p  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 会要求输入root密码")]),s._v("\n")])])]),a("h3",{attrs:{id:"修改root密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改root密码"}},[s._v("#")]),s._v(" 修改root密码")]),s._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("alter user 'root'@'localhost' identified by 'Aa123456.';  #密码最好要有大小写和符号\n")])])]),a("h3",{attrs:{id:"设置有密码外部访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置有密码外部访问"}},[s._v("#")]),s._v(" 设置有密码外部访问")]),s._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("use mysql;  # 选择mysql数据库\nupdate user set host='%' where User='root';  # 修改user表中User=\"root\"的行中的host值为\"%\"\nflush privileges;  # 刷新\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);