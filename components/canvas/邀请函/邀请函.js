var option = {
    img: 'cat.jpg',
    width: 500, // 画布宽度
    height: 350, // 画布高度
    fontSize: '20px Microsoft YaHei', // 画布内字体样式
    color: '#000', // 画布内字体颜色
    text: '守候', // 画布内要显示的文本
    imgType: 'jpg', //图片类型
    x: 30, // 设置文本的横坐标
    y: 30, // 设置文本的纵坐标
    xCenter: false, // 文本是否水平居中显示
    yCenter: false // 文本是否垂直居中显示
};

window.onload = function() {
    // --------------- 改变画布尺寸的功能
    var size = document.getElementById('size');
    size.addEventListener('blur', function(){
        // 根据空格，区分高亮
        var _width = parseInt(size.value.replace(/(^\s*)|(\s*$)/g, '').split(/\s+/)[0]),
            _height = parseInt(size.value.replace(/(^\s*)|(\s*$)/g,'').split(/\s+/)[1]);
        // 把参数的width和height改掉
        option.width = _width || 100;
        option.height = _height || 100;
        // 重新画图
        draw(option);
    });

    // --------------- 选择图片的功能
    // 获取图片控件
    var file = document.getElementById('file'),
        imageFile,
        imageData;
    file.addEventListener('change', function(e){
        // 获取图片
        imageFile = e.target.files[0];
        // 把图片转base64
        var reader = new FileReader();
        reader.readAsDataURL(imageFile);
        // 图片加载后
        reader.onload = function(e) {
            // 设置option的img属性，再冲洗年绘制
            console.log(this);
            imageData = this.result;
            option.img = imageData;
            draw(option);
        };
    });

    // --------------- 更改用户名的功能
    var userName = document.getElementById('user-name');
    userName.addEventListener('blur', function(){
        var _text = userName.value.replace(/(^\s*)|(\s*$)/g, '').split(/\s+/);
        option.text = _text[0];
        draw(option);
    });

    // --------------- 下载图片
    var downloadBtn = document.getElementById('download-img');
    downloadBtn.addEventListener('click', function(){
        downloadImg('当前画布图');
    });

    // --------------- 更改图片类型
    var imgType = document.getElementById('img-type');
    imgType.addEventListener('change', function(){
        option.imgType = this.value;
    });

    // 初始化画布
    draw(option);
};

// 绘制画布
function draw(obj) {
    var canvas = document.getElementById('thecanvas');
    // 画布大小
    canvas.width = obj.width;
    canvas.height = obj.height;
    // 设置图片
    var img = new Image();
    img.src = obj.img;
    var ctx = canvas.getContext('2d');
    // 设置字体的坐标
    var _x = obj.x,
        _y = obj.y;
    // 是否居中显示
    if(obj.xCenter) {
        _x = obj.width / 2;
    }
    if(obj.yCenter) {
        _y = obj.height / 2;
    }
    // 图片加载后
    img.onload = function() {
        // 先画图片
        ctx.drawImage(img, 0, 0);
        // 设置文字的大小
        ctx.font = obj.fontSize;
        // 设置文字的颜色
        ctx.fillStyle = obj.color;
        // 设置文字坐标
        if(obj.xCenter) {
            ctx.textAlign = 'center';
        }
        // 画文字
        ctx.fillText(obj.text, _x, _y);
    };
}

// 下载图片
function downloadImg(fileName) {        
    //获取canvas        
    var myCanvas = document.getElementById("thecanvas");
    var url = myCanvas.toDataURL();
    var alink = document.createElement("a");
    alink.href = url; 
    alink.download = "二维码.jpg"; // 下载图片的名称
    alink.click(); // 模拟点击下载
}

// // 下载图片
// function downloadImg(fileName) {        
//     //获取canvas        
//     var myCanvas = document.getElementById("thecanvas");
//     //设置图片类型
//     var image = myCanvas.toDataURL("image/" + option.imgType).replace("image/" + option.imgType, "image/octet-stream");   
//     var save_link = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
//     save_link.href = image;        
//     //设置下载图片的名称
//     save_link.download = fileName + '.' + option.imgType;        
//     //下载图片
//     var event = document.createEvent('MouseEvents');
//     event.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);        
//     save_link.dispatchEvent(event);
// }