let main = document.querySelector('footer');
setInterval(()=>{
    createMore()
    // 删除多余节点
    if(getChildrenLength()>60){
        for(var i=0;i<15;i++){
            main.removeChild(main.firstChild)
        }
    }
},1000)
// 获取当前footer下面有多少节点
function getChildrenLength(){
    let leng = document.querySelectorAll('footer div').length;
    return leng
}
function create(){
    var div = document.createElement('div');
    var random = Math.floor(Math.random()*100);
    // 获取视口宽度
    var width = window.innerWidth;
    var random2 = Math.floor(Math.random()*width-100);
    div.style.width = random+'px';
    div.style.height = random+'px';
    div.style.borderRadius = random/2+'px';
    div.style.left = `${random2}px`
    // 气泡飞行速度
    div.style.animation = `moveTop ${Math.random()*1+2}s linear`;
    main.appendChild(div);
}
function createMore(){
    for(var i =0;i< 15;i++){
        create()
    }
}