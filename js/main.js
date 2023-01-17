$(function(){


  //header

  const innerHeader = $('.inner_header');
  const logo = $('.inner_header .header .logo');
  const lnb = $('.inner_header .header .lnb>li');
  const ham = $('.ham_btn .ham');
  const ul = $('.header .lnb .menu');
  let headerMin = innerHeader.innerHeight();
  let headerMax = headerMin + ul.innerHeight();

  innerHeader.mouseenter(function(){
    $(this).stop().css('background-color','rgba(255,255,255,1)');
    logo.stop().children('img').attr('src','./images/logo.png');
    lnb.stop().find('a').css('color','black');
    ham.stop().find('span').css('background-color','black');
    $(this).stop().animate({
      height : headerMax
    },150,function(){
      ul.stop().fadeIn(150)
    });

  }).mouseleave(function(){
    $(this).stop().css('background-color','');
    logo.stop().children('img').attr('src','./images/logo_w.png');
    lnb.stop().find('a').css('color','white');
    ham.stop().find('span').css('background-color','white');
    ul.stop().fadeOut(150,function(){
      innerHeader.stop().animate({
        height : headerMin
      },10)
    });
  })
  
  //mousewheel_event

  $('.contents').mousewheel(function(e,delta){
    
    if(delta>0){
      let prev = $(this).prev().offset().top;

      $('html,body').stop().animate({
        scrollTop:prev
      },1000)
    }else if(delta<0){
      let next = $(this).next().offset().top;
      
      $('html,body').stop().animate({
        scrollTop:next
      },1000)
    }
  })

  //indicator

  $('.indicator').css('top',$(window).height()/2-$('.indicator').height()/2);

  $('.indicator a').click(function(e){
    e.preventDefault();
    
    $(window).stop().scrollTo(this.hash || 0, 1000)
  })

  //scroll_event

  $(window).scroll(function(){

    //header_fix

    if($(this).scrollTop() > 0) {
      innerHeader.addClass('fixed')
    }else {
      innerHeader.removeClass('fixed')
    }

    //indicator_color

    const btn = $('.indicator li');
    const page = $('section');

    page.each(function(){
      let pagePoint = $(window).scrollTop();
      let target = $(this);
      let i = target.index();

      if(pagePoint >= target.offset().top) {
        btn.removeClass('on');
        btn.eq(i).addClass('on');
      }
    })

    //section01_scroll_event
  
    if($(this).scrollTop() == $('.section01').offset().top){
      $('.section01_left .text01').stop().addClass('textAni01');
      setTimeout(function(){
        $('.section01_left .text02').stop().addClass('textAni02');
      },3000)
      setTimeout(function(){
        $('.section01_left .text03').stop().addClass('textAni03');
      },3000)
      setTimeout(function(){
        $('.section01_left .section01_btn').stop().addClass('textAni04');
      },3000)
      setTimeout(function(){
        $('.section01_right').stop().addClass('textAni05');
      },4000)
    }else {
      $('.section01_left .text01').stop().removeClass('textAni01');
      $('.section01_left .text02').stop().removeClass('textAni02');
      $('.section01_left .text03').stop().removeClass('textAni03');
      $('.section01_left .section01_btn').stop().removeClass('textAni04');
      $('.section01_right').stop().removeClass('textAni05');
    }

    //section02_scroll_event

    if($(this).scrollTop() == $('.section02').offset().top){
      $('.section02_title').stop().addClass('textAni06');
      $('.section02_box1').delay(600).fadeIn(500);
      $('.section02_box2').delay(1000).fadeIn(500);
      $('.section02_box3').delay(1500).fadeIn(500);
    }else {
      $('.section02_title').stop().removeClass('textAni06');
      $('.section02_box1').fadeOut(500);
      $('.section02_box2').fadeOut(500);
      $('.section02_box3').fadeOut(500);
    }

    //section03_scroll_event

    if($(this).scrollTop() == $('.section03').offset().top){
      $('.section03_title').stop().addClass('textAni07');
      setTimeout(function(){
        $('.section03_1').stop().addClass('textAni08');
      },800)
      setTimeout(function(){
        $('.section03_2').stop().addClass('textAni09');
      },1100)
      setTimeout(function(){
        $('.section03_3').stop().addClass('textAni10');
      },1300)
      setTimeout(function(){
        $('.section03_4').stop().addClass('textAni11');
      },1500)
    }else {
      $('.section03_title').stop().removeClass('textAni07');
      $('.section03_1').stop().removeClass('textAni08');
      $('.section03_2').stop().removeClass('textAni09');
      $('.section03_3').stop().removeClass('textAni10');
      $('.section03_4').stop().removeClass('textAni11');
    }

    //section05_scroll_event

    if($(this).scrollTop() == $('.section05').offset().top){
      $('.section05_title').stop().addClass('textAni12');
      setTimeout(function(){
        $('.section05_btn').stop().addClass('textAni13');
      },1000)
    }else {
      $('.section05_title').stop().removeClass('textAni12');
      $('.section05_btn').stop().removeClass('textAni13');
    }

  })


})