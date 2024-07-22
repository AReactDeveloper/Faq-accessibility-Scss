var img1 = './../assets/images/icon-plus.svg';
var img2 = './../assets/images/icon-minus.svg';

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('button[id="toggleAnswer"]').forEach((button, index) => {
      const contentId = `faq-${index + 1}-answer`;
      const content = document.getElementById(contentId);
      
      button.addEventListener('click', () => {
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        
        if (isExpanded) {
          button.setAttribute('aria-expanded', 'false');
          content.classList.add('display-none');
          button.querySelector('img').src = './assets/images/icon-plus.svg'; // Change icon to plus
        } else {
          button.setAttribute('aria-expanded', 'true');
          content.classList.remove('display-none');
          button.querySelector('img').src = './assets/images/icon-minus.svg'; // Change icon to minus
        }
      });
    });
  });
  