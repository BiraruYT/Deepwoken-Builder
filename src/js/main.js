function setVersionDivPosition() {
  const versionDiv = document.getElementById('version');
  const footer = document.getElementById('footer-main');

  const footerRect = footer.getBoundingClientRect();
  const versionRect = versionDiv.getBoundingClientRect();

  if (footerRect.top < window.innerHeight) {
    versionDiv.style.position = 'absolute';
    versionDiv.style.bottom = footerRect.height + 'px';
    versionDiv.style.right = '12px';
  } else {
    versionDiv.style.position = 'fixed';
    versionDiv.style.bottom = '16px';
    versionDiv.style.right = '12px';
  }
}

window.addEventListener('load', function() {
  setVersionDivPosition();
});
window.addEventListener("scroll", function() {
  setVersionDivPosition()
});
