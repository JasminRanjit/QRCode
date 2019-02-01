$(function(){ 
   $('.rate-btn').hover(function(){
   $('.rate-btn').removeClass('rate-btn-hover');
      var therate = $(this).attr('id');
      for (var i = therate; i >= 0; i--) {
   $('.btn-'+i).addClass('rate-btn-hover');
       };
     });
                           
   $('.rate-btn').click(function(){    
      var therate = $(this).attr('id');
      var id = location.search.split('id=')[1]
      var dataRate = 'act=rate&post_id='+id+'&rate='+therate; //
   $('.rate-btn').removeClass('rate-btn-active');
      for (var i = therate; i >= 0; i--) {
   $('.btn-'+i).addClass('rate-btn-active');
      };
   $.ajax({
      type : "POST",
      url : "ajax.php",
      data: dataRate,
       success: function(){
          alert('Successfully rated');
          document.location.reload();
        },
        error: function(){
          alert('Failed to rate');
        }
        });
  });
});