/*
 * @Author: gaiwa gaiwa@163.com
 * @Date: 2023-07-28 21:15:09
 * @LastEditors: gaiwa gaiwa@163.com
 * @LastEditTime: 2023-07-30 23:03:20
 * @FilePath: \html\work\js\day27\Comment\js\comment.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
let oImg = document.querySelector('.user-avatar');
let oInput = document.querySelector('.comment-input');
let oSubmit = document.querySelector('.comment-submit');
let oToggle = document.querySelector('.toggle');
let oCon = document.querySelector('.comment-con');
let oTips = document.querySelector('.tips');

oSubmit.addEventListener('click',function(){
  if (oInput.value.trim() === ''){
    showTips();
  } else{
    addComment(oCon, oImg, oInput.value);
  }
});

oInput.addEventListener('keypress',function(e){
  if (oInput.value.trim() === ''){
    showTips();
  } else {
    if (e.keyCode === 13){
      addComment(oCon, oImg, oInput.value);
    }  
  }
});

oToggle.addEventListener('click',function(e){
  let length = oCon.children.length;
  if (length > 0){
    oCon.children[length-1].remove();
  } else if (length === 0) {
    if(oToggle.innerHTML === '+') {
      oInput.style.display = 'block';
      oSubmit.style.display = 'block';
      oToggle.innerHTML = '-';  
    } else {
      oInput.style.display = 'none';
      oSubmit.style.display = 'none';
      oToggle.innerHTML = '+';  
    }
  }
});

function addComment(parentNode, avatar, comment){
  let fragment = document.createDocumentFragment();
  let vDiv = document.createElement('div');
  let vImg = document.createElement('img');
  let vP = document.createElement('p');
  vDiv.classList.add('con-list');
  vImg.src = avatar.getAttribute('src');
  vP.innerHTML = comment;
  vDiv.appendChild(vImg);
  vDiv.appendChild(vP);
  fragment.appendChild(vDiv);
  parentNode.appendChild(fragment);
  oInput.value = '';  
}

function showTips() {
  animate(oTips,{
    top: '-80px'
  },function(){
    let time = setTimeout(function(){
      animate(oTips,{
        top: '-130px'
      })
      clearTimeout(time);
    },1500);
  });
}

function animate(ele, json, callback){
  clearInterval(ele.time);
  let toggle = false;
  let target, curr;
  ele.time = setInterval(function(){
    toggle = true;
    for(let key in json){
      target = parseInt(json[key]);
      curr = parseInt(getStyle(ele, key));
      speed = (target - curr) /20;
      speed > 0 ? Math.ceil(speed) : Math.floor(speed);
      if(curr === target){
        ele.style[key] = target + 'px';
      }
      ele.style[key] = target + speed + 'px';
      if (curr !== target){
        toggle = false;
      }
    }
    if (toggle){
      clearInterval(ele.time);
      callback && callback();
    }
  })
}

function getStyle(obj, attr){
  return obj.currentStyle ? obj.currentStyle[attr]: getComputedStyle(obj, false)[attr];
}