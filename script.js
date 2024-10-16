$(document).ready(function () {
    $('.home-btn').on('click', function () {
        $('.home-info').toggle(500);
    })
});

$(document).ready(function() {
    $('.col').each(function() {
      var $col = $(this);
      var $img = $col.find('.index-img');
      var $description = $col.find('.img-description');
      $description.hide();
  
      $col.hover(
        function() {
          // Mouse enter
          $description.fadeIn(300);
        },
        function() {
          // Mouse leave
          $description.fadeOut(300);
        }
      );
    });
  });

  $(document).ready(function() {
    $('.home-btn').on('click', function() {
      // Find the next sibling h1 element
      var $scheduleText = $(this).next('.sch-txt');
      var $scheduleImage = $scheduleText.next('.sch-img');


      $scheduleText.slideToggle(300);
      $scheduleImage.fadeToggle(300);

      
 
    });
  });