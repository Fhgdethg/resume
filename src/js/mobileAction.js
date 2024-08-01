function isMobile() {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  const mobileRegex = /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile|Mobile/i;

  const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  const screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

  return (mobileRegex.test(userAgent) || isTouchDevice) && (screenWidth < 768 || screenHeight < 768);
}

document.addEventListener('DOMContentLoaded', () => {
  const isPhone = isMobile();

  if (isPhone)
    document.querySelector('.view-link').style.display = 'none';
});