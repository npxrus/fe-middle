/* Напишите функцию `zip`. Она принимает любое число объектов, а возвращает единственный объект, который содержит все поля исходных объектов. Если один и тот же ключ встречается в нескольких объектах, следует оставить то значение, что встретилось первым. */

function zip(...objects) {
  // Проходим по переданным объектам и возвращаем единственный объект
  return objects.reduce((result, object) => {
    // Проходим по полям каждого объекта, если в результирующем объекте уже существтует ключ, то игнорируем
    for (let key in object) {
      if (!result[key]) {
        result[key] = object[key];
      }
    }

    return result;
  }, {});
}