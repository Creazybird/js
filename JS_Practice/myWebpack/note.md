##本地安装webpack
-在本地安装webpack，需要安装两个程序，一个是webpack,一个是webpack-cli



##使用webpack
--为什么要使用webpack ，众所周知，node.js支持模块化，支持require 这样的语句，但是
--在浏览器中是不支持的，不支持引入模块，webpack的作用就是帮助解析js模块，让浏览器可以读懂js模块代码


--1.使用npx webpack命令 打包程序，但是此时没有配置，会出现警告和错误
--2.webpack的打包过程需要指定 ，文件入口，和文件出口，从哪开始解析打包，解析打包之后文件放在那里,这些
--配置文件一般写在一个webpack.config.js的文件中（自己手动创建，名字也可以不写这个，但是需要去改配置文件。。自己查）
--3.也可以使用 npx webpack --config xxxx(配置文件)  指定打包的配置文件



--注意事项：webpack打包程序(源代码)，一般是指打包src文件夹下的代码，所以需要手动创建src文件夹，并且将
--源代码写到src下
