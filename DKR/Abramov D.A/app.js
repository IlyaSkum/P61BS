$(function() {
  $('.btn-new').on('click', function() {
    $("#current-0").html('0');
    $("#score-0").html('0');
    $("#current-1").html('0');
    $("#score-1").html('0');
    $('.player-1-panel').removeClass('active');
    $('.player-0-panel').addClass('active');
  })
  $('.btn-hold').on('click', function() {
    if($('.player-0-panel').hasClass("active"))
      activehold(0,1);
    else if($('.player-1-panel').hasClass("active"))
      activehold(1,0);
  })
  $('.btn-roll').on('click', function () {
    var player0 = parseInt($("#current-0").html());
    var player1 = parseInt($("#current-1").html());
    var dice = getRandomInt(1,6);
    if($('.player-0-panel').hasClass("active") && dice === 1) {
      $(".dice").attr("src","dice-"+dice+".png");
      active(0,1);
    }
    else if($('.player-1-panel').hasClass("active") && dice === 1) {
      $(".dice").attr("src","dice-"+dice+".png");
      active(1,0);
    }
    else {
      if($('.player-0-panel').hasClass("active")) {
        if(player0+dice >= 100)
          win(1,0);
        $('.player-1-panel').removeClass('active');
        $(".dice").attr("src","dice-"+dice+".png");
        $("#current-0").html(player0+dice);
      }
      if($('.player-1-panel').hasClass("active")) {
        if(player1+dice >= 100)
          win(0,1);
        $('.player-0-panel').removeClass('active');
        $(".dice").attr("src","dice-"+dice+".png");
        $("#current-1").html(player1+dice);
      }
    }
  })
  function getRandomInt(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  function active(rem, add) {
    $('.player-'+rem+'-panel').removeClass('active');
    $('.player-'+add+'-panel').addClass('active');
    $("#current-"+rem).html('0');
  }
  function activehold(rem, add) {
    var curr = $("#current-"+rem).html();
    var sc =  $("#score-"+rem).html();
    $("#score-"+rem).html(Number(curr)+Number(sc));
    if(sc >= 100) {
        win(rem, add);
        $("#current-"+rem).html('0');
    } else {
     // alert('ПОБЕДА !!');
    $("#current-"+rem).html('0');
    $('.player-'+rem+'-panel').removeClass('active');
    $('.player-'+add+'-panel').addClass('active');
    }
  }
  function win(rem, add) {
    $('.player-'+rem+'-panel').removeClass('active');
    $('.player-'+add+'-panel').addClass('winner');
    alert("Ураа победа!")
  }
});