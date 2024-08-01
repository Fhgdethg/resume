function isMobile() {
  const platforms = ['iPhone', 'iPad', 'iPod', 'Android', 'webOS', 'BlackBerry', 'Windows Phone', 'Opera Mini', 'IEMobile'];
  return platforms.includes(navigator.platform);
}

document.addEventListener('DOMContentLoaded', () => {
  const isPhone = isMobile();

  if (isPhone)
    document.querySelector('.view-link').style.display = 'none';
});