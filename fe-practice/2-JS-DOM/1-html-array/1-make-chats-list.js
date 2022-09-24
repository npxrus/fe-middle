function makeChatsList(chats) {
  // Создаём список
  const list = document.createElement('ul');

  // Проходимся по массиву переданных чатов, создаём для каждого элемент списка и добавляем в список
  chats.map((chat) => {
    const listItem = document.createElement('li');
    listItem.textContent = chat;
    list.appendChild(listItem);
  });

  return list;
}
