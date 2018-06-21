$(window).on('load', function() {
    var eh =  $(".eh").height();
    console.log(eh);
    $(".e1").height(eh);

      if($(window).width() < 1200) {
          $(".e1").height("auto");
      }
      if($(window).width() < 1200 && $(window).width() > 767 ){
          var eh =  $(".e1").height();
          $(".e2").height(eh-4.5);
      }

});

$(window).resize(function() {
      var eh =  $(".eh").height();
      console.log(eh);
      $(".e1").height(eh);

      if ($(window).width() < 1200) {
          $(".e1").height("auto");
      }
      if($(window).width() < 1200 && $(window).width() > 767 ){
          var eh =  $(".e1").height();
          $(".e2").height(eh-4.5);
      }
});
  




$(function() {
    $('.chart').easyPieChart({
        
        scaleColor: '#fff',
        barColor: '#a4b83c',
        trackColor: '#223541',
        lineCap: 'line',
        size: 165,
        lineWidth: 18,
        animate: 1000,
        onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });
    var chart = window.chart = $('.chart').data('easyPieChart');
    $('.js_update').on('click', function() {
        chart.update(Math.random()*200-100);
    });
});
