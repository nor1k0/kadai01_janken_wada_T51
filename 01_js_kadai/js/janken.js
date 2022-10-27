

// nail recommend
$(".cute").on("click", function () {
  
  var nail_random = Math.floor(Math.random() * 5);
console.log(nail_random, "ランダムな数字");

if(nail_random === 0){
  $(".recommend_heart_img").attr("src","./img/320 (1).jpeg");
}else if(nail_random === 1){
  $(".recommend_heart_img").attr("src","./img/320 (2).jpeg");
}else if(nail_random === 2){
  $(".recommend_heart_img").attr("src","./img/320 (3).jpeg");
}else if(nail_random === 3){
  $(".recommend_heart_img").attr("src","./img/320 (6).jpeg");
}else if(nail_random === 4){
  $(".recommend_heart_img").attr("src","./img/321.jpeg");
}else if(nail_random === 5){
  $(".recommend_heart_img").attr("src","./img/322.jpeg");
}

});

$(".cool").on("click", function () {
  
  var nail_random = Math.floor(Math.random() * 5);
console.log(nail_random, "ランダムな数字");

if(nail_random === 0){
  $(".recommend_heart_img").attr("src","./img/320.jpeg");
}else if(nail_random === 1){
  $(".recommend_heart_img").attr("src","./img/320 (4).jpeg");
}else if(nail_random === 2){
  $(".recommend_heart_img").attr("src","./img/320 (5).jpeg");
}else if(nail_random === 3){
  $(".recommend_heart_img").attr("src","./img/320 (7).jpeg");
}else if(nail_random === 4){
  $(".recommend_heart_img").attr("src","./img/320 (8).jpeg");
}else if(nail_random === 5){
  $(".recommend_heart_img").attr("src","./img/320 (9).jpeg");
}

});

// nail favorite
  $("#nail1").on("click contextmenu", function (e) {
    console.log(e.which);
    if (e.which == 1) {
      //左クリック
      console.log("左クリック");
      $(".favorite_left_heart_img").attr("src","./img/320.jpeg");
    } else if (e.which == 3) {
      //右クリック
      console.log("右クリック");
      $(".favorite_right_heart_img").attr("src","./img/320.jpeg");
    }
  });


  $("#nail2").on("click contextmenu", function (e) {
    console.log(e.which);
    if (e.which == 1) {
      //左クリック
      console.log("左クリック");
      $(".favorite_left_heart_img").attr("src","./img/320 (1).jpeg");
    } else if (e.which == 3) {
      //右クリック
      console.log("右クリック");
      $(".favorite_right_heart_img").attr("src","./img/320 (1).jpeg");
    }
  });

  $("#nail3").on("click contextmenu", function (e) {
    console.log(e.which);
    if (e.which == 1) {
      //左クリック
      console.log("左クリック");
      $(".favorite_left_heart_img").attr("src","./img/320 (2).jpeg");
    } else if (e.which == 3) {
      //右クリック
      console.log("右クリック");
      $(".favorite_right_heart_img").attr("src","./img/320 (2).jpeg");
    }
  });

  $("#nail4").on("click contextmenu", function (e) {
    console.log(e.which);
    if (e.which == 1) {
      //左クリック
      console.log("左クリック");
      $(".favorite_left_heart_img").attr("src","./img/320 (3).jpeg");
    } else if (e.which == 3) {
      //右クリック
      console.log("右クリック");
      $(".favorite_right_heart_img").attr("src","./img/320 (3).jpeg");
    }
  });

  $("#nail5").on("click contextmenu", function (e) {
    console.log(e.which);
    if (e.which == 1) {
      //左クリック
      console.log("左クリック");
      $(".favorite_left_heart_img").attr("src","./img/320 (4).jpeg");
    } else if (e.which == 3) {
      //右クリック
      console.log("右クリック");
      $(".favorite_right_heart_img").attr("src","./img/320 (4).jpeg");
    }
  });

  $("#nail6").on("click contextmenu", function (e) {
    console.log(e.which);
    if (e.which == 1) {
      //左クリック
      console.log("左クリック");
      $(".favorite_left_heart_img").attr("src","./img/320 (5).jpeg");
    } else if (e.which == 3) {
      //右クリック
      console.log("右クリック");
      $(".favorite_right_heart_img").attr("src","./img/320 (5).jpeg");
    }
  });

  $("#nail7").on("click contextmenu", function (e) {
    console.log(e.which);
    if (e.which == 1) {
      //左クリック
      console.log("左クリック");
      $(".favorite_left_heart_img").attr("src","./img/320 (6).jpeg");
    } else if (e.which == 3) {
      //右クリック
      console.log("右クリック");
      $(".favorite_right_heart_img").attr("src","./img/320 (6).jpeg");
    }
  });

  $("#nail8").on("click contextmenu", function (e) {
    console.log(e.which);
    if (e.which == 1) {
      //左クリック
      console.log("左クリック");
      $(".favorite_left_heart_img").attr("src","./img/320 (7).jpeg");
    } else if (e.which == 3) {
      //右クリック
      console.log("右クリック");
      $(".favorite_right_heart_img").attr("src","./img/320 (7).jpeg");
    }
  });

  $("#nail9").on("click contextmenu", function (e) {
    console.log(e.which);
    if (e.which == 1) {
      //左クリック
      console.log("左クリック");
      $(".favorite_left_heart_img").attr("src","./img/320 (8).jpeg");
    } else if (e.which == 3) {
      //右クリック
      console.log("右クリック");
      $(".favorite_right_heart_img").attr("src","./img/320 (8).jpeg");
    }
  });

  $("#nail10").on("click contextmenu", function (e) {
    console.log(e.which);
    if (e.which == 1) {
      //左クリック
      console.log("左クリック");
      $(".favorite_left_heart_img").attr("src","./img/320 (9).jpeg");
    } else if (e.which == 3) {
      //右クリック
      console.log("右クリック");
      $(".favorite_right_heart_img").attr("src","./img/320 (9).jpeg");
    }
  });

  $("#nail11").on("click contextmenu", function (e) {
    console.log(e.which);
    if (e.which == 1) {
      //左クリック
      console.log("左クリック");
      $(".favorite_left_heart_img").attr("src","./img/321.jpeg");
    } else if (e.which == 3) {
      //右クリック
      console.log("右クリック");
      $(".favorite_right_heart_img").attr("src","./img/321.jpeg");
    }
  });

  $("#nail12").on("click contextmenu", function (e) {
    console.log(e.which);
    if (e.which == 1) {
      //左クリック
      console.log("左クリック");
      $(".favorite_left_heart_img").attr("src","./img/322.jpeg");
    } else if (e.which == 3) {
      //右クリック
      console.log("右クリック");
      $(".favorite_right_heart_img").attr("src","./img/322.jpeg");
    }
  });


// 写真に連番をつけることでfor文のループ処理にトライしたかった。。

// じゃんけん

$("#gu_btn").on("click", function () {

var random = Math.floor(Math.random() * 3);
console.log(random, "ランダムな数字");

if (random === 0) {
    console.log("0=グー");
    $("#pc_hands").attr("src", "./img/17433.png");
    $("#judgment").text("DRAW");
  } else if (random === 1) {
    console.log("1=チョキ");
    $("#pc_hands").attr("src", "./img/17434.png");
    $("#judgment").text("WIN");
  } else if (random === 2) {
    console.log("2=パー");
    $("#pc_hands").attr("src", "./img/17435.png");
    $("#judgment").text("LOSE");
  } 

  $("#gu_btn").css("width" , "70px")
  $("#cho_btn").css("width" , "40px")
  $("#par_btn").css("width" , "50px")
});

$("#cho_btn").on("click", function () {

    var random = Math.floor(Math.random() * 3);
    console.log(random, "ランダムな数字");
    
    if (random === 0) {
        console.log("0=グー");
        $("#pc_hands").text("グー");
        $("#pc_hands").attr("src", "./img/17433.png");
        $("#judgment").text("LOSE");
      } else if (random === 1) {
        console.log("1=チョキ");
        $("#pc_hands").attr("src", "./img/17434.png");
        $("#judgment").text("DRAW");
      } else if (random === 2) {
        console.log("2=パー");
        $("#pc_hands").attr("src", "./img/17435.png");
        $("#judgment").text("WIN");
      } 
    
      $("#gu_btn").css("width" , "50px")
      $("#cho_btn").css("width" , "70px")
      $("#par_btn").css("width" , "50px")
    });

$("#par_btn").on("click", function () {

    var random = Math.floor(Math.random() * 3);
    console.log(random, "ランダムな数字");
    
    if (random === 0) {
        console.log("0=グー");
        $("#pc_hands").attr("src", "./img/17433.png");
        $("#judgment").text("WIN");
      } else if (random === 1) {
        console.log("1=チョキ");
        $("#pc_hands").attr("src", "./img/17434.png");
        $("#judgment").text("LOSE");
      } else if (random === 2) {
        console.log("2=パー");
        $("#pc_hands").attr("src", "./img/17435.png");
        $("#judgment").text("DRAW");
      } 
    
      $("#gu_btn").css("width" , "50px")
      $("#cho_btn").css("width" , "40px")
      $("#par_btn").css("width" , "80px")

    });