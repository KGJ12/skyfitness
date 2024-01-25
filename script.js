const counters = document.querySelectorAll(".counter_number");

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5, // Adjust this threshold value as needed
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      counter.innerText = "0";
      const target = +counter.getAttribute("data-target");
      const increment = target / 80;

      const updateCounter = () => {
        const count = +counter.innerText;
        if (count < target) {
          counter.innerText = `${Math.ceil(count + increment)}`;
          setTimeout(updateCounter, 1);
        } else {
          counter.innerText = target;
        }
      };
      updateCounter();

      observer.unobserve(counter);
    }
  });
}, options);

counters.forEach((counter) => {
  observer.observe(counter);
});



  // Add smooth scrolling for anchor links
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      const offsetTop = target.getBoundingClientRect().top + window.pageYOffset;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    });
  });

  window.onscroll = function() {scrollFunction(),scrollFunction1()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      
      document.getElementById("header").style.background = "#191e1f";
    } else {
     
      document.getElementById("header").style.background = "none";
    }
  }



  function scrollFunction1() {
   
  // When the user scrolls down 500px from the top of the document, show the button
     if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none"; 
    
    }
  
  }

  // function topFunction() {
  //   window.scrollTo({top: 0});
  //  }
  //  $(function(){
  //       $('#open').click(function(){
  //      $("#mySidenav").addClass('lft');
  //    });
  //        $('#close').click(function(){
  //      $("#mySidenav").removeClass('lft');
  //    });
  //   });
   
  //    $(window).scroll(function(){
  //        $('.fade').each(function(i){
  //          var bottom_of_object = $(this).position().top + $(this).outerHeight();
  //          var bottom_of_window =$(window).scrollTop() + $(window).height();
   
  //          if(bottom_of_window > bottom_of_object){
  //            $(this).animate({'opacity':'1'},900);
  //          }
  //        });
  //     });