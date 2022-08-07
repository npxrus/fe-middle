function highlight() {
  const table = document.querySelector('table.chatUsers');
  const rows = table.rows;

  for (let i = 1; i < rows.length; i++) {
    if (rows[i].cells[1].textContent < 18) {
      rows[i].style.textDecoration = 'line-through';
    }

    if (rows[i].cells[2].textContent === 'm') {
      rows[i].classList.add('male');
    } else if (rows[i].cells[2].textContent === 'f') {
      rows[i].classList.add('female');
    }

    if (rows[i].cells[3].dataset.role === 'regular') {
      rows[i].classList.add('regular');
    } else if (rows[i].cells[3].dataset.role === 'admin') {
      rows[i].classList.add('admin');
    } else {
      rows[i].hidden = true;
    }
  }
}
