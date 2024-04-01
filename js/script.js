document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hmb-btn');
  const headNav = document.querySelector('#js-nav');
  // #js-nav要素取得して変数に格納

  hamburger.addEventListener('click', () => {
    if (hamburger.classList.contains("active")) {
      hamburger.classList.remove('active');
      hamburger.querySelector('.hmb-btn-txt').textContent = 'MENU';
      headNav.classList.remove('active')
    } else {
      hamburger.classList.add('active');
      hamburger.querySelector('.hmb-btn-txt').textContent = 'CLOSE';
      headNav.classList.add('active')
    }
  });


  headNav.addEventListener('click', () => {
    hamburger.classList.remove('active');
    hamburger.querySelector('.hmb-btn-txt').textContent = 'MENU';
    headNav.classList.remove('active')
  });

});