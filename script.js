document.querySelectorAll('.itens').forEach((item) => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      const href = event.target.closest('a').getAttribute('href');
      const target = href.substring(href.indexOf('#') + 1); // Isso pega o valor após o #
      const targetElement = document.getElementById(target);
  
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
        });
      }
    });
  });