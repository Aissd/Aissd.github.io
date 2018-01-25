/**
 * 数字，字母组成的字符串（长度为8~24个）
 */
var reg1 = /[\d\w]{8,24}/;

/**
 * 长度为8~12的用户密码（由数字，字母，下划线组成，但必须以字母开头）
 */

 var reg2 = /^[\w][\w\d_]{7,11}$/;

 /**
  * 获取页面img标签的src值
  */
//          <img[\s]+src[\s]*=[\s]*((['"](?<src>[^'"]*)[\'"])|(?<src>[^\s]*))
// var reg3 = /<img[\s]+src[\s]*=[\s]*((['"](?<src>[^'"]*)[\'"])|(?<src>[^\s]*))>/;

/**
 * 至少n位数
 */

 var reg4 = /^\d{n,}$/;

 /**
  * 
  */
var reg5 = /^[1-9]+$/;