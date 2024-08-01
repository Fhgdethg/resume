function isMobile() {
  return /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile|Mobile/i.test(navigator.userAgent);
}

document.addEventListener('DOMContentLoaded', () => {
  const isPhone = isMobile();

  if (isPhone)
    document.querySelector('.view-link').style.display = 'none';
});