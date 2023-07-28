/*
 * @Author: gaiwa gaiwa@163.com
 * @Date: 2023-07-28 21:15:09
 * @LastEditors: gaiwa gaiwa@163.com
 * @LastEditTime: 2023-07-28 23:04:29
 * @FilePath: \html\work\js\day27\Comment\js\comment.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
let oImg = document.querySelector('.user-avatar');
let oInput = document.querySelector('.comment-input');
let oSubmit = document.querySelector('.comment-submit');
let odel = document.querySelector('.del');
let oCon = document.querySelector('.comment-con');

oSubmit.addEventListener('click',function(){
  addComment(oCon, oImg, oInput.value);
});

oInput.addEventListener('keypress',function(e){
  if (e.keyCode === 13){
    addComment(oCon, oImg, oInput.value);
  }
});

odel.addEventListener('click',function(e){
  let length = oCon.children.length;
  if (length>0){
    oCon.children[length-1].remove();
  }
});

function addComment(parentNode, avatar, comment){
  let fragment = document.createDocumentFragment();
  let vDiv = document.createElement('div');
  let vImg = document.createElement('img');
  let vP = document.createElement('p');
  vDiv.classList.add('con-list');
  vImg.src = avatar.src;
  vP.innerHTML = comment;
  vDiv.appendChild(vImg);
  vDiv.appendChild(vP);
  fragment.appendChild(vDiv);
  parentNode.appendChild(fragment);
  oInput.value = '';  
}
