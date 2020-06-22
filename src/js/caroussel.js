function moveToSelected(element) {


    if (element == "next") {
      var selected = $(".selected").next();
    } else if (element == "prev" && $(".selected").prev().attr("class") != "button") {
      var selected = $(".selected").prev();
    } else {
      console.log("before class : " + element.attr('class'));
      
      for (var i = 0; i < 5 && element.attr('class') != "prevLeftSecond" &&
        element.attr('class') != "prev" &&
        element.attr('class') != "selected" &&
        element.attr('class') != "next" &&
        element.attr('class') != "nextRightSecond" &&
        element.attr('class') != "hideRight"; i++)
      element = element.parent();
      console.log("after class : " + element.attr('class'));


      var selected = element;
    }
  
    var next = $(selected).next();
    var prev = $(selected).prev();
    var prevSecond = $(prev).prev();
    var nextSecond = $(next).next();
  
    if (selected.attr('class') != "button")
    {
      $(selected).removeClass().addClass("selected");
    }
  
    if (prev.attr('class') != "button")
    {
      $(prev).removeClass().addClass("prev");
    }

    if (next.attr('class') != "button")
    {
      $(next).removeClass().addClass("next");
    }

    if (nextSecond.attr('class') != "button")
    {
      $(nextSecond).removeClass().addClass("nextRightSecond");
    }

    if (prevSecond.attr('class') != "button")
    {
      $(prevSecond).removeClass().addClass("prevLeftSecond");
    }

   $(nextSecond).nextAll().removeClass().addClass('hideRight');

    // if (prevSecond.prev().attr('class') != "button")
    // {
    //   $(prevSecond).prev().removeClass().addClass('hideLeft');
    // }

    $(prevSecond).prevUntil("button.button").removeClass().addClass('hideLeft');
  }
  
  // Eventos teclado
  $(document).keydown(function(e) {
      switch(e.which) {
          case 37: // left
          console.log("hello 0");//

          moveToSelected('prev');
          break;
  
          case 39: // right
          console.log("hello 0");//

          moveToSelected('next');
          break;
  
          default: return;
      }
      e.preventDefault();
  });
  
$(document).ready(function() {

    $('#carousel div').click(function() {
        console.log("hello 1");//
        moveToSelected($(this));
      });
      
      $('#prev').click(function() {
        console.log("hello 2");//
    
        moveToSelected('prev');
      });
      
      $('#next').click(function() {
        console.log("hello 3");//
    
        moveToSelected('next');
      });

})
