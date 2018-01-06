var option = {
    title: 'hello world',
    fontSize: '20px Microsoft YaHei',
    color: '#555',
    bgColor: 'rgba(255, 0, 0, 0.6)',
    width: 320,
    height: 568
};

window.onload = function() {
    // 修改标题
    var title = getById('title');
    title.addEventListener('keyup', function(){
        option.title = title.value;
        draw(option);
    });
    // 修改背景颜色
    var radios = document.getElementsByName('bgColorGroup');
    radios.forEach(function(radio) {
        radio.addEventListener('change', function(){
            option.bgColor = radio.value;
            draw(option);
        });
    });
    // 初始化画布
    draw(option);
};

function draw(obj) {
    // 获取画布
    var canvas = getById('canvas');
    canvas.width = obj.width;
    canvas.height = obj.height;

    // 获取画布上下文
    var ctx = canvas.getContext('2d');

    // 填充画布颜色
    ctx.fillStyle = obj.bgColor;

    // 设置文字大小
    ctx.font = obj.fontSize;
    // 设置文字颜色
    // ctx.fillStyle = obj.color;
    // 设置文字坐标
    ctx.textAlign = 'center';
    // 绘制文字
    ctx.fillText(obj.title, obj.width / 2, 100);
    // 绘制画布
    ctx.fillRect(0, 0, obj.width, obj.height);
}

function getById(id) {
    return document.getElementById(id);
}