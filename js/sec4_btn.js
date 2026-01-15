document.addEventListener('DOMContentLoaded', function() {
    const toggles = document.querySelectorAll('#sec4 .toggle');
  
    toggles.forEach(toggleIcon => {
      const content = toggleIcon.closest('.sec4-main').querySelector('.content');
  
      // 初始狀態
      toggleIcon.classList.add('minus');
      content.style.display = 'block';
  
      toggleIcon.addEventListener('click', function() {
        if (toggleIcon.classList.contains('plus')) {
          toggleIcon.classList.remove('plus');
          toggleIcon.classList.add('minus');
          content.style.display = 'block';
        } else {
          toggleIcon.classList.remove('minus');
          toggleIcon.classList.add('plus');
          content.style.display = 'none';
        }
      });
    });
  });