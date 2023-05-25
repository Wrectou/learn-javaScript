后端中不可直接使用ajax
xhr：XMLHttpRequest
XML：Extensible Markup Language   可拓展标记语言（成对出现）
HTML：Hyper Text Markup Language    超文本标记语言
ajax：asynchronous javascript and XML   异步的js和xml

无加载刷新技术  实现局部渲染技术
1999 IE5 利用javascript单独的像服务器发送http请求

所有基于ajax的通讯基本都是json数据格式

ajax的步骤：
1、创建xhr
2、发送http请求   Hyper Text Transfer Protocol 超文本传输协议（应用层）
3、接收服务器返回的数据
4、处理数据显示在页面上

如果需要发送n个ajax请求，就需要newn次XMLHttpRequest，
如果只有一个XMLHttpRequest实例，sendn次，那么只会返回最后一次send的结果

请求种类：
get post put delete options head connect trace

简单请求？ 复杂请求？
get是简单请求，剩下的都是复杂请求

get和post的区别？
1、post更安全：不会做为url的一部分、不会被缓存、保存在服务器日志和浏览器记录中
2、post发送的数据量更大（get有url长度限制）
    长度限制：IE（2083字节）  firefox（65536字节）  chrome（8182字节）  safari（80000字节）   opera（190000字节）
3、post能发送更多数据类型（各种类型文件）
   get只能发送ASCII字符

put delete options head connect trace 为什么不用了？
不安全，数据处理应该后端处理

xhr.readyState
0 未初始化
1 启动
2 发送
3 接收
4 完成