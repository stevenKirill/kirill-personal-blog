---
title: 'Как стать frontend-разработчиком в 2022 году? (часть 1)'
category: 'PROGRAMMING'
date: '2022-01-23'
excerpt: 'С чего начать свой путь в frontend разработке'
cover_image: '/images/posts/coding.jpg'
---

## Как войти в IT как frontend разработчик.

Сегодня профессия frontend разработчик очень востребована, по данным hh.ru на сегодня в Москве около 3 тысяч вакансий. Это связано в первую очередь с тем, что уже второй год как идёт пандемия COVID-19, и многие компания стараются диджитализировать свои бизнесы. И тут без frontenda никуда, ведь всем нужны красивые и функциональные интерфейсы. Сегодня очень много стартапов и бизнесов уходят в web. Создаются огромные web-приложения со сложной логикой и функциональностью (e-commerce,CRM-системы,стриминговые площадки и др). Все эти продукты создаются такими людьми как frontend разработчики и сегодня я немного расскажу о том с чего стоит начать свой путь во фронтенде.

Весь фронтенд состоит из трех базовых технологий.

-HTML
-CSS
-JavaScript

HTML это язык разметки web-приложений - он состоит из тегов а набор тегов представлябт из себя DOM дерево, что переводиться как Document object model.
Например параграф выглядит вот так:

```html
<p>Привет мир</p>
```
а заголовок второй порядка вот так

```html
<h2>Привет мир</h2>
```
По сути много времени на изучение html у вас не займет, можно просто почитать список всех тегов и за что они отвечают. Так же имеет смысл почитать про то что такое семантическая вёрстка. 

CSS - технология позволяющая стилизовать наши теги, то есть тот параграф вверху который мы написали будет просто обычным параграфов без CSS. Но спомощью CSS мы можем стилизовать его, покрасить в какой то цвет, придать ему какой то шрифт, вообще сделать его красивым.

```css
p {
    color: red;
}
```
В данном куске кода мы сказали что наш параграф будет красным. Так выгдядит самый стандартный пример CSS.

И третьей частью идет язык программирования JavaScript. Он полностью интегрирован с HTML и CSS, спомощью этого языка мы можем управлять нашими тегами и стилями, можем удалять, добавлять, создавать новый теги, делать с ними что угодно. Мы как бы делаем наше web-приложение динамическим, как настоящее приложение, которое имеет разные состояния.

```javascript
const paragraf = document.getElementById('.my-paragraf');
paragraf.style.color = 'green';
paragraf.innerText = 'Привет мир';
```
В данном примере мы программно получили наш параграф с холста браузера и сказали что он будет зеленого цвета и его содержимым будет текст 'Привет мир'.

Итак для того чтобы нам попытаться стать frontend-разработчиками, нам нужно подружиться с этими тремя технологиями. Ниже я приведу план как и с чего начать.

1) Изучаете теги HTML - [список тегов](https://www.w3schools.com/TAGS/default.ASP).
2) Изучаем CSS - селекторы,float,flexbox,grid,media-query.
3) Изучаем JavaScript - [учебник для изучения языка](https://learn.javascript.ru/)

На сегодня все, в следующей статье я расскажу что такое библиотеки и фреймворки. Какие фреймворки языка JavaScript лучше всего изучать, их плюсы и минусы.
Если у вас остались какие то вопросы вы всегда можете написать мне в [телеграм](https://t.me/stevenPav)