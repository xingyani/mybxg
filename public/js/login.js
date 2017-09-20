define(['jquery','cookie'],function($){
	$('#loginBtn').click(function(){
               $.ajax({
                   type : 'post',
                   url : '/api/login',
                   data : $('#loginForm').serialize(),
                   dataType :'json',
                   success:function(data){
                      if(data.code==200){
                        location.href='/main/index';
                      }
                   }
               });


                return false;
          });

});