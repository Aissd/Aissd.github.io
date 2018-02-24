var Ajax = {
    get: function(url, fn) {
        // XMLHttpRequest 对象用于在后台与服务器交换数据
        var xhr = new XMLHttpRequest();
        // 将请求送往服务器
        xhr.open('GET', url, true);
        // 存有处理服务器响应的函数，当readyState改变时，onreadystatechange函数就会被执行
        xhr.onreadystatechange = function() {
            // readyState == 4 说明请求已完成
            if(xhr.readyState == 4 && xhr.status == 200 || xhr.status == 304) {
                // 从服务器获得数据
                fn.call(this, xhr.responseText);
            }
        };
        xhr.send();
    },
    /**
     * data应为 ‘a=a1&b=b1’的字符串格式，jq里若data为对象会自动将对象转成这种字符串格式
     */
    post: function(url, data, fn) {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url, true);
        // 添加http投，发送信息至服务器时内容编码类型
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function() {
            if(xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304)) { // 304 未修改
                fn.call(this, xhr.responseText);
            }
        };
        xhr.send(data);
    }
};

// open（method, url, async)
/**
 * 1、method - 发送请求所使用的方法（GET，POST）
 *  1）GET相比速度更快
 *  POST的使用情况：
 *  2）无法使用缓存文件（更新服务器上的文件或数据库）
 *  3）向服务器发送大量数据（POST没有数据量限制）
 *  4）发送包含未知字符的用户输入时，POST比GET更稳定也更可靠
 * 
 * 2、url 
 * 
 * 3、async （异步）true，同步（false）；默认为true
 */

 /**
  * send()
  *
  *
  */

  
 /**
  * onreadystatechang()
  */
  

  
 /**
  * readyState
  * 0 请求未初始化（代理被创建，但尚未调用open方法）
  * 1 服务器连接已建立（open方法已经被调用）
  * 2
  * 3
  * 4
  * 
  */
  

  // -------------------------------------------------------------20180224
  //  来源 http://itakeo.com/blog/2015/07/06/ajax/
  window.Ajax = (function(w){
	function ajax(){
		this.set = {
			type : 'get',
			url : "", 
			data : "",
			async : true,
			timeout : 10000,
			dataType : 'text',
			success : null, 
			error :  null
		};
		this.datas = '';
	};
	ajax.prototype = {
		init : function(a){
			var _t = this;
			_t.extend(_t.set,a);
			for(var n in _t.set.data){_t.datas += n+'='+encodeURI(_t.set.data[n])+'&'};
			this.datas = this.datas+new Date().getTime();
			var xhr = w.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
			if(_t.set.type =='get' && this.datas){
				_t.set.url +='?'+this.datas+ new Date().getTime();
			};
			xhr.open(_t.set.type,_t.set.url,_t.set.async);
			xhr.timeout = _t.set.timeout;
			xhr.onreadystatechange = function(){
				try{
					if(xhr.readyState == 4){
						if(xhr.status >= 200 && xhr.status < 300  || xhr.status == 304){
							switch(true){
								case (_t.set.dataType.toLowerCase()=='text'):
									_t.set.success && _t.set.success(xhr.responseText);
								break;
								case (_t.set.dataType.toLowerCase()=='xml'):
									_t.set.success && _t.set.success(xhr.responseXML);
								break;
								default:
									try {
										_t.set.success && _t.set.success(JSON.parse(xhr.responseText));
									} catch (e) {
					 					_t.set.success && _t.set.success(xhr.responseText);
									};
								break;
							};
						}else{
							_t.set.error && _t.set.error(xhr.status);
						};
					};
				}catch(e){
					_t.set.error && _t.set.error();
				}
			};
			if(_t.set.type.toLowerCase()=='get'){
				xhr.send();
			}else{
				xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
				xhr.send(_t.datas);
			};
		},
		extend:function(n,n1){
			for(var i in n1){n[i] = n1[i]};
		}
	};
	return {
		init : function(json){
			new ajax().init(json);
		}
	}
})(window);