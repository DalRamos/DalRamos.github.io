$(document).ready(function() {
  function toggleSidebar() {
    if ($(window).width() > 768) {
      $('.sidebar').show();
    } else {
      $('.sidebar').hide();
    }
  }

  function updateActiveLink() {
    var scrollPosition = $(document).scrollTop();
    $('section').each(function() {
      var offsetTop = $(this).offset().top;
      var sectionId = $(this).attr('id');
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + $(this).outerHeight()) {
        $('.nav-link').removeClass('active');
        $('a[href="#' + sectionId + '"]').addClass('active');
      }
    });
  }

  $('.nav-link').click(function(e) {
    e.preventDefault();
    var target = $($(this).attr('href'));
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
    }
    $('.nav-link').removeClass('active');
    $(this).addClass('active');
  });

  $('.portfolio-button a').click(function(e) {
    e.preventDefault();
    var target = $($(this).attr('href'));
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });

  $('.project-button').click(function(e) {
    e.preventDefault();
    var target = $('#projects-section');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });

  $('#home-section').addClass('active');

  // $('.menu-icon').click(function() {
  //   $('.sidebar').toggle();
  // });

  $(window).resize(function() {
    toggleSidebar();
  });

  $(document).scroll(function() {
    updateActiveLink();
  });

  toggleSidebar();
  updateActiveLink();
});
