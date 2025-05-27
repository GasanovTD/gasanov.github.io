function updateCard() {
  const name = document.getElementById('name').value.trim();
  const surname = document.getElementById('surname').value.trim();
  const gender = document.getElementById('gender').value;
  const color = document.getElementById('color').value;

  // Проверка фамилии: минимум 2 буквы, только буквы и дефис
  const isValidSurname = /^[А-Яа-яA-Za-zЁё\-]{2,}$/.test(surname);
  if (!isValidSurname) {
    alert('Введите корректную фамилию (от 2 символов, только буквы и дефис)');
    return;
  }

  // Обновление имени и фамилии на экране
  const displayName = document.getElementById('displayName');
  displayName.textContent = `${name || 'Имя'} ${surname || 'Фамилия'}`;

  // Изменение цвета фона
  document.body.style.background = color;

  // Вывод подтверждения
  alert(`Привет, ${name} ${surname}!\nПол: ${gender}`);
}
function updateCard() {
  const name = document.getElementById('name').value.trim();
  const surname = document.getElementById('surname').value.trim();
  const gender = document.getElementById('gender').value;
  const color = document.getElementById('color').value;

  // Проверка фамилии: минимум 2 буквы, только буквы и дефис
  const isValidSurname = /^[А-Яа-яA-Za-zЁё\-]{2,}$/.test(surname);
  if (!isValidSurname) {
    alert('Введите корректную фамилию (от 2 символов, только буквы и дефис)');
    return;
  }

  // Обновление имени и фамилии на экране
  const displayName = document.getElementById('displayName');
  displayName.textContent = `${name || 'Имя'} ${surname || 'Фамилия'}`;

  // Изменение цвета фона
  document.body.style.background = color;

  // Вывод подтверждения
  alert(`Привет, ${name} ${surname}!\nПол: ${gender}`);
}
