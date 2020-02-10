const user = {
  name: "Mango",
  age: 20,
  hobby: "html",
  premium: true
};
// Добавление ключа mood
user.mood = "happy";
//Замена значений hobby и premium
user.hobby = "skydiving";
user.premium = false;
//Проверка
//console.log (user);

// Вывод сoдержимого
const keys = Object.keys(user);
for (const key of keys) {
  console.log(`${key}: ${user[key]}`);
}
