function highlight() {
  const table = document.querySelector('table.chatUsers');

  for (let i = 1; i < table.rows.length; i++) {
    if (table.rows[i].cells[1] < 18) {
      table.rows[i].style.textDecoration = 'line-through';
    }

    if (table.rows[i].cells[2] === 'm') {
      table.rows[i].classList.add('male');
    } else if (table.rows[i].cells[2] === 'f') {
      table.rows[i].classList.add('female');
    }

    if (table.rows[i].cells[3].dataset.role === 'regular') {
      table.rows[i].classList.add('regular');
    } else if (table.rows[i].cells[3].dataset.role === 'admin') {
      table.rows[i].classList.add('admin');
    } else {
      table.rows[i].hidden = true;
    }
  }
}
