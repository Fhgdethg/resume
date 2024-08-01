function isMobile() {
  const platforms = ['iPhone', 'iPad', 'iPod', 'Android', 'webOS', 'BlackBerry', 'Windows Phone', 'Opera Mini', 'IEMobile'];
  return platforms.includes(navigator.platform);
}

document.addEventListener('DOMContentLoaded', function () {
  const isPhone = isMobile();
  if (isPhone) {
    document.querySelector('.main__pdf-cv-links a:last-child').style.display = 'none';
  }
});