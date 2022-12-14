# Практические задания

## Javascript basics

### 1. Инверсия объекта
Напишите функцию `invert`, которая принимает объект и возвращает новый объект, где:
  - ключи - значения исходного объекта,
  - значения - ключи исходного объекта.
Поля исходного объекта - строки и числа.
[Решение](./1-JS-Basics/1-invert.js)

### 2. Zip
Напишите функцию `zip`. Она принимает любое число объектов, а возвращает единственный объект, который содержит все поля исходных объектов. Если один и тот же ключ встречается в нескольких объектах, следует оставить то значение, что встретилось первым.
[Решение](./1-JS-Basics/2-zip.js)

## DOM API

### 1. Массив HTML-элементов
Напишите функцию `makeChatsList`, которая принимает массив чатов и возвращает `<ul>` список, где каждый `<li>` элемент - это один чат. Добавление списка на страницу будет происходить вне функции.
[Решение](./2-JS-DOM/1-make-chats-list.js)

### 2. Разметка
Напишите функцию `highlight`, которая для каждой строки `tr` таблицы пользователей чатов:
    - Проставит класс `regular` или `admin`, в зависимости от значения атрибута `data-role` у ячейки `Role`. Если такого атрибута нет, функция должна добавить атрибут `hidden`;
    - Проставит класс `male` или `female` в зависимости от содержания ячейки `Gender`;
    - Установит inline-стиль `style="text-decoration: line-through"`, если значение ячейки `Age` меньше 18.
Условия должны выполняться, даже если у элемента стоит атрибут `hidden`.
[Решение](./2-JS-DOM/2-highlight/script.js)