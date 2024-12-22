// ==UserScript==
// @name         清空百度搜索框恶心的新闻广告
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  在访问百度时，将搜索框的placeholder清空
// @author       chen cheng 
// @match        *://*.baidu.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    debugger;

        // 封装一个处理函数，用来清空 placeholder
    function clearPlaceholder() {
        // 查找所有 input 元素
        const inputElements = document.querySelectorAll('input');

        // 遍历所有的 input 元素
        inputElements.forEach(function(input) {
            // 如果 input 元素的 id 为 'kw'，清空 placeholder
            if (input.id === 'kw' ||input.id==='index-kw'||input.name=='wd'&& input.placeholder !== '') {
                input.placeholder = '';
            }
        });
    }

  // 确保在页面加载完成后执行
    window.addEventListener('load', function() {
        clearPlaceholder(); // 第一次处理
        // 不同网络状态可以导致不能结果
        setTimeout(function() {
          clearPlaceholder();
        }, 30);
        setTimeout(function() {
          clearPlaceholder();
        }, 100);
        setTimeout(function() {
         clearPlaceholder();
        }, 300);
    });
})();
