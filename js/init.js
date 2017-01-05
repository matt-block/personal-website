(function($){
  $(function(){
    $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 240
      edge: 'left', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: false // Choose whether you can drag to open on touch screens
    }
  );
  }); 
  $(document).ready(function(){
    $('.scrollspy').scrollSpy();
  }); 
  // end of document ready
})(jQuery); // end of jQuery name space