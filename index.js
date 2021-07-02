var fs = require('fs');
var postcss = require('postcss');
var pxtorem = require('postcss-pxtorem');
var rootCss = fs.readFileSync('css/index.css', 'utf8');
var bizCss = fs.readFileSync('css/zhixun/zhixun.css', 'utf8');
var zhixunPcCss = fs.readFileSync('css/zhixunPc/zhixunPc.css', 'utf8');
var options = {
    rootValue: 16,
    propList: ['font', 
    'font-size', 
    'line-height', 
    'letter-spacing', 
    'margin', 
    'margin-left',
    'margin-right',
    'margin-top',
    'margin-bottom',
    'padding',
    'padding-left',
    'padding-right',
    'padding-top',
    'padding-bottom'],
    // propList: ['*'],
    replace: false
};
var processedRootCss = postcss(pxtorem(options)).process(rootCss).css;
var processedBizCss = postcss(pxtorem(options)).process(bizCss).css;
var processedZhixunPcCss = postcss(pxtorem(options)).process(zhixunPcCss).css;
fs.writeFile('css/index-rem.css', processedRootCss, function (err) {
  if (err) {
    throw err;
  }
  console.log('Rem file written.');
});

fs.writeFile('css/zhixun/zhixun-rem.css', processedBizCss, function (err) {
  if (err) {
    throw err;
  }
  console.log('Rem file written.');
});

fs.writeFile('css/zhixunPc/zhixunPc-rem.css', processedZhixunPcCss, function (err) {
  if (err) {
    throw err;
  }
  console.log('Rem file written.');
});
