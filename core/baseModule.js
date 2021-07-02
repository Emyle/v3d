define([
	'VisualVue',
	'text!VisualCoreDir/baseModule.html'
], function (Vue, html) {
	
  function BaseModule(config) {
    // 实例属性，只能实例使用，构造函数获取不到
    this.title = config.title;
    this.titleType = config.titleType ? config.titleType : '';
    this.getTitleHtml =  function() {
      if( this.titleType == 'flatClean' ){
        return '<div class="visual-title-inner">' + this.title + '</div>';
      }else if( this.titleType == 'flat' ){
        return '<div class="visual-title-inner">' + this.title + '</div>';
      }else if( this.titleType == 'scifi' ){
        return '<div class="visual-title-left"></div>' + 
               '<div class="visual-title-middle">' + this.title + '</div>' + 
               '<div class="visual-title-right"></div>';
      }else if( this.titleType == 'scifiClean'){
        return '<div class="visual-title-inner">' + this.title + '</div>';
      }
    };
    this.setTitleType = function(){
      $('#' + config.id).find('.visual-title').addClass(this.titleType);
    } 
  };
  // 原型链属性，可被多个实例共享, 也只能实例使用
  BaseModule.prototype.class = ['visual-module'];   // console.log(Person.nationality); undefined
  // 原型链方法
  // BaseModule.prototype.getTitleHtml = function() {

  // }

	return BaseModule;
});