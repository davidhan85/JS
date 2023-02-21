var divStars = document.getElementById("stars");
var divComment = document.getElementById("comment");
var starNum = -1; //記錄當前第幾顆星星被點擊
var starArray = Array.from(divStars.children); //星星數組

 //滑鼠移入
 divStars.onmouseover = function (e) {
    if (e.target.tagName === "IMG") { //事件源是圖片
        //把滑鼠移動到的星星替換圖片
        e.target.src = "img/chngstar.gif";
        //把滑鼠移動到的星星之前的星星替換圖片
        var prev = e.target.previousElementSibling;
        while (prev) {
            prev.src = "img/chngstar.gif";
            prev = prev.previousElementSibling;
        }
        //把滑鼠移動到的星星之後的星星替換圖片
        var next = e.target.nextElementSibling;
        while (next) { //把滑鼠移動到的星星之後的星星替換圖片
            next.src = "img/star.gif";
            next = next.nextElementSibling;
        }

        var index = starArray.indexOf(e.target); //找到滑鼠移動到的星星的序號
    
    }
}
   //滑鼠點擊
   divStars.onclick = function (e) {
    if (e.target.tagName === "IMG") {
        //記錄當前點擊的星星序號
        starNum = starArray.indexOf(e.target);
    }
}

 //滑鼠移出
 divStars.onmouseout = function (e) {
    if (starNum !== -1) { //滑鼠點擊事件發生，將評分固定在點擊的星星上
        for (var i = 0; i < divStars.children.length; i++) {
            if (i <= starNum) {
                divStars.children[i].src = "img/chngstar.gif";
                
            } else {
                divStars.children[i].src = "img/star.gif";
            }
        }
     
    } else {
        for (var i = 0; i < divStars.children.length; i++) {
            divStars.children[i].src = "img/star.gif";
        }
  
    }
}