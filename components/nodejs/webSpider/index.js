// node.js 版的jQuery
var cheerio = require('cheerio'); 
// cnpm install cheerio --save
// 封装了一个HTTP服务器和一个简易的HTTP客户端
var http = require('http');
// 解决爬取gb2312网页出现乱码
var iconv = require('iconv-lite');
var url = 'http://www.dytt8.net/html/gndy/dyzz/list_23_';
var index = 1; // 页面数控制
var titles = []; // 用于保存title
var btLink = [];
// var btDao = require('./btDao');


/**
 * 程序入口 - 开始
 */
function main() {
    console.log('开始爬取');
    getTitle(url, index);
}

main();

/**
 * 
 * @param {*拉取数据的地址} url 
 * @param {*页数} i 
 */
function getTitle(url, i) {
    console.log('正在获取第' + i + '页的内容');
    http.get(url + i + '.html', function(sres) {
        var chunks = [];
        sres.on('data', function(chunk) {
            chunks.push(chunk);
        });
        /**
         * chunks里面存储着网页的html内容，将它转码给cheerio.load之后
         * 就可以得到一个实现jQuery接口的变量，将它命名为‘$’
         * 剩下的都是jQuery的内容了
         */
        sres.on('end', function() {
            /**
             * 由于发现此网页的编码格式为gb2312，所以需要对其进行转码，否则乱码
             * 依据：<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
             */
            var html = iconv.decode(Buffer.concat(chunks), 'gb2312');
            var $ = cheerio.load(html, {decodeEntities: false});
            $('.co_content8 .ulink').each(function(idx, element) {
                var $element = $(element);
                titles.push({
                    // title: $element.text()
                    title: $element.attr('href')
                });
            });
            if(i < 2) {
                getTitle(url, ++index);
            } else {
                // console.log(titles);
                // console.log('Title获取完毕！');
            }
            // console.log(titles);
            getBTLink(titles, 2);
        });
    });
}

/**
 * 
 * @param {*urls里面包含着所有详情页的地址} urls 
 * @param {*} n 
 */
function getBTLink(urls, n) {
    // console.log('正在获取第' + n + '个url的内容');
    http.get('http://www.dytt8.net' + urls[n].title, function(sres) {
        var chunks = [];
        sres.on('data', function(chunk) {
            chunks.push(chunk);
        });
        sres.on('end', function() {
            var html = iconv.decode(Buffer.concat(chunks), 'gb2312');
            var $ = cheerio.load(html, {decodeEntities: false});
            $('#Zoom td').children('a').each(function(idx, element) {
                var $element = $(element);
                console.log($element.attr('href'));
                btLink.push({
                    bt: $element.attr('href')
                });
            });
            if(n < urls.length - 1) {
                getBTLink(urls, ++n);
            } else {
                console.log(btLink);
                console.log('btlink获取完毕！');
            }
        });
    });
}

/**
 * 保存到数据库
 */
function save() {
    // btDao.add();
}