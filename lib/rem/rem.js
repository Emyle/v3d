define([], function(){
    // 设置 rem 函数
    function setRem () {
      // 320 默认大小16px; 320px = 20rem ;每个元素px基础上/16
      let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
    //得到html的Dom元素
      let htmlDom = document.getElementsByTagName('html')[0];

      // let bodyDom = document.getElementsByTagName('body')[0].style = 'font-size: 16px';
    //设置根元素字体大小
      htmlDom.style.fontSize= htmlWidth/120 + 'px';
    }

    function init(){
      // 初始化
      setRem();
      // 改变窗口大小时重新设置 rem
      window.onresize = function () {
        setRem()
      }
    }
 
    // 暴露公共方法
    return {
      init: init
    };
})
 

