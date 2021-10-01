# ROCKETFRONT-RN

Шаблон для разработки мобильных приложений на React Native

---

## Techstack

[![yarn](https://img.shields.io/static/v1?label=yarn&message=1.22.10&color=2c8ebb&style=for-the-badge&logo=yarn&logoColor=white)](https://yarnpkg.com/)
[![node](https://img.shields.io/static/v1?label=node&message=14.x&color=026E00&style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/)
[![react](https://img.shields.io/static/v1?label=react&message=16.13.1&color=61DBFB&style=for-the-badge&logo=react&logoColor=white)](https://ru.reactjs.org/)
[![react native](https://img.shields.io/static/v1?label=react-native&message=0.63.4&color=61DBFB&style=for-the-badge&logo=react&logoColor=white)](https://reactnative.dev/)
[![redux](https://img.shields.io/static/v1?label=redux&message=4.0.5&color=764ABD&style=for-the-badge&logo=redux&logoColor=white)](https://redux.js.org/)
[![prettier](https://img.shields.io/static/v1?label=prettier&message=2.2.1&color=F7B93E&style=for-the-badge&logo=prettier&logoColor=white)](https://prettier.io/)
[![eslint](https://img.shields.io/static/v1?label=eslint&message=7.23.0&color=4B32C3&style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)
[![babel](https://img.shields.io/static/v1?label=babel&message=7.9.0&color=F9DC3E&style=for-the-badge&logo=babel&logoColor=white)](https://prettier.io/)

---

## Работа с шаблоном
В шаблоне все наследуется от стандартного `create-react-native-app`. Однако, в шаблоне присуствуют некоторые архитектурные паттерны:
- `models` - дирректория, которая хранит в себе структуры данных или их типы/интерфейсы/абстракции
- `repositories` - дирректория, которая хранит в себе классы, которые делают запросы по API. Для HTTP запросов внутри есть базовый NetAPI класс, который по DI принимает Http клиент и делает запросы по внешним API. Также есть базовый LocalAPI, который записывает или берет данные с локального хранилища. Для работы с последующими репозиториями, надо наследоваться от одного из базовых классов.
- `services` - дирректория, которая хранит в себе классы, которые производят какие либо вычесления, или служат оберткой для сторонних зависимостей.
- `modules` - дирректория, которая создает контекст для хранения инстанции классов репозиториев или сервисов, для реализации DI(Dependency Injection).

Также, в шаблоне структурированы компоненты по Atomic Design. Компоненты деляться на:

- `/atoms/*` – тут расположены примитивные компоненты: кнопки, заголовки, поля ввода и пр.
- `/molecules/*` – тут расположены связки/группы примитивов: группы кнопок, карточки и пр.
- `/organisms/*` – тут расположены связки/группы молекул. То есть компоненты, которая состоит из молекул, которые состоят из примитивов: шапка, списки карточек, модальные окна и пр.
- `/templates/*` – тут расположены шаблоны страницы

Подробнее можно почитать:

- [Atomic Design Methodology](https://atomicdesign.bradfrost.com/chapter-2/)
- [Atomic Design in practice](https://blog.ippon.tech/atomic-design-in-practice/)

