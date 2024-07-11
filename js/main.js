document.querySelectorAll('ul.custom-list li').forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('checked');
    });
  });