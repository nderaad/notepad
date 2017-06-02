$(document).ready(function() {
  $('.menu').popup({
  inline   : true,
  hoverable: true,
  position : 'bottom right',
  setFluidWidth: false,
  delay: {
    show: 200,
    hide: 100
   }
  });

  $('#darkforest').on('click', function() {
    $('body').css({'background-image': "url('/images/darkforest.jpg')", 'background-size': 'cover'});
  });

  $('#desk').on('click', function() {
    $('body').css({'background-image': "url('/images/desk.jpeg')", 'background-size': 'cover'});
  });

  $('#space').on('click', function() {
    $('body').css({'background-image': "url('/images/space.jpeg')", 'background-size': 'cover'});
  });

  var textareas = document.getElementsByTagName('textarea');
    var count = textareas.length;
    for(var i=0;i<count;i++){
        textareas[i].onkeydown = function(e){
            if(e.keyCode==9 || e.which==9){
                e.preventDefault();
                var s = this.selectionStart;
                this.value = this.value.substring(0,this.selectionStart) + "\t" + this.value.substring(this.selectionEnd);
                this.selectionEnd = s+1;
            }
        }
    }


});
