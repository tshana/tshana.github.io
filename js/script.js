// Typed JS - Settings
var typedJS = new Typed('#typeName', {
  stringsElement: '#hero',
  typeSpeed: 80,
  startDelay: 230,
});

//Smooth Scrolling
$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
  if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')  &&  location.hostname == this.hostname){
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({ scrollTop: target.offset().top - 40}, 1000);}
    }
  });