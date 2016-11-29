# wroadw
个人网站
1. node.js 使用nodemon 实时监控文件的修改 npm install -g nodemon 全局安装
2. cd到网站目录 nodemon 开启站点
3. linux 解压tar.gz命令 tar zxvf file.tar.gz
4. scp 远程传输文件  scp /User/XXXX root@115.28.65.42:/user
## linux nginx 安装
* nginx官网下载地址 ：http://nginx.org/download/
1. 直接官网上下载  wget http://nginx.org/download/nginx-1.9.9.tar.gz
2. 下载完成后 tar 解压 进入目录  运行./configure
3. 一大堆的not found 最后提示
/configure: error: the HTTP rewrite module requires the PCRE library.
You can either disable the module by using --without-http_rewrite_module
option, or install the PCRE library into the system, or build the PCRE library
statically from the source with nginx by using --with-pcre=<path> option.

## pcre 安装
1. PCRE目前最新版本为8.36，可以点这里进行下载。

2. 使用tar -zxvf pcre-8.36.tar.gz进行解压。

3. 运行 chmod -R 777 /pcre-8.36 对当前文件夹授予全部读写权限。

4. 切换到/pcre-8.36目录下，运行 ./configure 进行pcre初始化配置，会在控制台打印出一大堆的输出信息。

5. 执行make操作，进行编译。

[root@server06 pcre-8.36]# make
rm -f pcre_chartables.c
ln -s ./pcre_chartables.c.dist pcre_chartables.c
make  all-am
make[1]: Entering directory `/opt/nginx/pcre-8.36'
  CC      libpcre_la-pcre_byte_order.lo
  CC      libpcre_la-pcre_compile.lo
  CC      libpcre_la-pcre_config.lo
  CC      libpcre_la-pcre_dfa_exec.lo
  CC      libpcre_la-pcre_exec.lo
  CC      libpcre_la-pcre_fullinfo.lo
  CC      libpcre_la-pcre_get.lo
  CC      libpcre_la-pcre_globals.lo
  CC      libpcre_la-pcre_jit_compile.lo
  CC      libpcre_la-pcre_maketables.lo
  CC      libpcre_la-pcre_newline.lo
  CC      libpcre_la-pcre_ord2utf8.lo
  CC      libpcre_la-pcre_refcount.lo
  CC      libpcre_la-pcre_string_utils.lo
  CC      libpcre_la-pcre_study.lo
  CC      libpcre_la-pcre_tables.lo
  CC      libpcre_la-pcre_ucd.lo
  CC      libpcre_la-pcre_valid_utf8.lo
  CC      libpcre_la-pcre_version.lo
  CC      libpcre_la-pcre_xclass.lo
  CC      libpcre_la-pcre_chartables.lo
  CCLD    libpcre.la
  CC      libpcreposix_la-pcreposix.lo
  CCLD    libpcreposix.la
  CXX      libpcrecpp_la-pcrecpp.lo
  CXX      libpcrecpp_la-pcre_scanner.lo
  CXX      libpcrecpp_la-pcre_stringpiece.lo
  CXXLD    libpcrecpp.la
  CC      pcretest-pcretest.o
  CC      pcretest-pcre_printint.o
  CCLD    pcretest
  CC      pcregrep-pcregrep.o
  CCLD    pcregrep
  CXX      pcrecpp_unittest-pcrecpp_unittest.o
  CXXLD    pcrecpp_unittest
  CXX      pcre_scanner_unittest-pcre_scanner_unittest.o
  CXXLD    pcre_scanner_unittest
  CXX      pcre_stringpiece_unittest-pcre_stringpiece_unittest.o
  CXXLD    pcre_stringpiece_unittest
make[1]: Leaving directory `/opt/nginx/pcre-8.36'

6. 运行 [root@server06 pcre-8.36]# make install，进行安装，至此PCRE安装完成。   

[root@server06 pcre-8.36]# make install
