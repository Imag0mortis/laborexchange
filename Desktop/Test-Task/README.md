# Тестовое задание по выводу списка вакансий на фронтенд
## Технологии:
- nodeJS 21,
- HTML 5
- CSS 3
- Angular 16,
- TaigaUI,
- VSCode
- HTML 5
- CSS 3


## Краткое описание
1. Папка Backend содержит контроллер для вызова GET запроса списка вакансий.
   `port: 3000`
   Для локального запуска необходимо выполнить следующие команды
```
cd <backend path>
node main.js
//Должен запуститься следующий вывод в консоли
Server running at http://127.0.0.1:3000/
```

2. При вызове GET-запроса http://localhost:3000/?page=1 через браузер или Postman будет выводиться список вакансий в формате JSON, преобразованный из XML файла тестового задания
3. Папка с Test-task содержит `frontend` код
   Для локального запуска необходимо выполнить следующие команды
```
cd test-task
npm i
npm run start
//Должен запуститься следующий вывод в консоли
/* Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ **
После вывода в консоли данного сообщения необходимо нажать на ссылку ** Angular Live Development Server is listening on localhost:4200, open your browser on http://localhost:4200/ ** 
либо ввести её в поисковую строку браузера
*/
```
