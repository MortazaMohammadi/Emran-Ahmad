// image input

function menubtn() {
  var menubar = document.querySelector('.menubar');
  var body = document.querySelector('.body');
  if (menubar.style.display === 'none') {
    menubar.style.display = 'block';
    body.style.marginRight = '181px';
  } else {
    menubar.style.display = 'none';
    body.style.marginRight = 0;
  }
}