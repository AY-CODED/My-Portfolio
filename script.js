// script.js - Add this new file
document.addEventListener('DOMContentLoaded', function() {
    const bars = document.querySelector('#bars');
    const navList = document.querySelector('.navlist');
    
    // Toggle mobile menu
    bars.addEventListener('click', function() {
      navList.classList.toggle('active');
      
      // Change icon based on menu state
      const icon = bars.querySelector('i');
      if (navList.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
      } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      }
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.navlist a');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navList.classList.remove('active');
        const icon = bars.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
      });
    });
  });