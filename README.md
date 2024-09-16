# My Tabs Plugin

Плагин для управления табами на странице с использованием классов `RadioTabs` и `CheckboxTabs`. Этот плагин позволяет легко создавать интерактивные вкладки и переключатели на вашей веб-странице без зависимости от сторонних библиотек.

## Оглавление

- [Установка](#установка)
  - [Через npm](#через-npm)
  - [Подключение через тег `<script>`](#подключение-через-тег-script)
- [Использование](#использование)
  - [Импорт плагина](#импорт-плагина)
    - [ES6 Modules](#es6-modules)
    - [CommonJS](#commonjs)
    - [Через глобальные переменные](#через-глобальные-переменные)
  - [Инициализация табов](#инициализация табов)
    - [RadioTabs](#radiotabs)
    - [CheckboxTabs](#checkboxtabs)
- [Документация](#документация)
  - [RadioTabs](#radiotabs-1)
    - [Описание](#описание)
    - [Конструктор](#конструктор)
    - [Методы](#методы)
    - [Пример использования](#пример-использования)
  - [CheckboxTabs](#checkboxtabs-1)
    - [Описание](#описание-1)
    - [Конструктор](#конструктор-1)
    - [Методы](#методы-1)
    - [Пример использования](#пример-использования-1)
- [Лицензия](#лицензия)
- [Контакты](#контакты)
- [Вклад](#вклад)

---

## Установка

### Через npm

Если вы используете пакетный менеджер npm, вы можете установить плагин с помощью следующей команды:

```bash
npm install my-tabs-plugin
```

### Подключение через тег `<script>`

Скачайте файл `my-tabs-plugin.min.js` из папки `dist` или из [релизов GitHub](#) и подключите его в вашем HTML-файле:

```html
<script src="path/to/my-tabs-plugin.min.js"></script>
```

---

## Использование

### Импорт плагина

#### ES6 Modules

Если вы используете сборщик модулей или поддерживаете ES6-модули, вы можете импортировать плагин следующим образом:

```javascript
import { RadioTabs, CheckboxTabs } from 'my-tabs-plugin';
```

#### CommonJS

Если ваш проект использует CommonJS (например, в Node.js или с использованием `require`), импортируйте плагин так:

```javascript
const { RadioTabs, CheckboxTabs } = require('my-tabs-plugin');
```

#### Через глобальные переменные

Если вы подключили плагин через тег `<script>`, классы доступны через объект `MyTabsPlugin`:

```html
<script src="path/to/my-tabs-plugin.min.js"></script>
<script>
  const { RadioTabs, CheckboxTabs } = MyTabsPlugin;
  // Ваш код здесь
</script>
```

---

### Инициализация табов

#### RadioTabs

**HTML-разметка:**

```html
<!-- Кнопки -->
<button data-tabs-button="myRadioTabs" data-value="tab1">Таб 1</button>
<button data-tabs-button="myRadioTabs" data-value="tab2">Таб 2</button>
<button data-tabs-button="myRadioTabs" data-value="tab3">Таб 3</button>

<!-- Контент -->
<div data-tabs-content="myRadioTabs" data-value="tab1">Контент для Таба 1</div>
<div data-tabs-content="myRadioTabs" data-value="tab2">Контент для Таба 2</div>
<div data-tabs-content="myRadioTabs" data-value="tab3">Контент для Таба 3</div>
```

**JavaScript:**

```javascript
new RadioTabs({
  name: 'myRadioTabs',
  activeClass: 'active' // Необязательно, по умолчанию 'active'
});
```

#### CheckboxTabs

**HTML-разметка:**

```html
<!-- Кнопки -->
<button data-tabs-button="interactive" data-value="a">Опция A</button>
<button data-tabs-button="interactive" data-value="b">Опция B</button>
<button data-tabs-button="interactive" data-value="c">Опция C</button>

<!-- Контент -->
<div data-tabs-content="interactive" data-value="a">Контент для A</div>
<div data-tabs-content="interactive" data-value="b">Контент для B</div>
<div data-tabs-content="interactive" data-value="c">Контент для C</div>
<div data-tabs-content="interactive" data-value="ab">Контент для A+B</div>
<div data-tabs-content="interactive" data-value="abc">Контент для A+B+C</div>
<!-- Добавьте контент для необходимых комбинаций -->
```

**JavaScript:**

```javascript
new CheckboxTabs({
  name: 'interactive',
  activeClass: 'active' // Необязательно, по умолчанию 'active'
});
```

---

## Документация

### RadioTabs

#### Описание

`RadioTabs` — класс для создания табов, где в один момент времени может быть активен только один таб. При переключении табов соответствующий контент автоматически отображается.

#### Конструктор

```typescript
new RadioTabs(options: {
  name: string;
  activeClass?: string;
});
```

- **options.name**: (строка) Имя группы табов. Должно совпадать с значением в `data-tabs-button` и `data-tabs-content`.
- **options.activeClass**: (строка, необязательный) Класс, который будет добавляться активным элементам. По умолчанию `'active'`.

#### Методы

- **switchTab(newValue: string): void**

  Переключает активный таб на указанный `newValue`.

#### Пример использования

**HTML-разметка:**

```html
<button data-tabs-button="profileTabs" data-value="info">Информация</button>
<button data-tabs-button="profileTabs" data-value="settings">Настройки</button>

<div data-tabs-content="profileTabs" data-value="info">Контент информации</div>
<div data-tabs-content="profileTabs" data-value="settings">Контент настроек</div>
```

**JavaScript:**

```javascript
const profileTabs = new RadioTabs({
  name: 'profileTabs',
  activeClass: 'active-tab'
});

// Переключение таба программно
profileTabs.switchTab('settings');
```

---

### CheckboxTabs

#### Описание

`CheckboxTabs` — класс для создания переключателей, где может быть активировано несколько опций одновременно. Отображаемый контент зависит от комбинации активных опций.

#### Конструктор

```typescript
new CheckboxTabs(options: {
  name: string;
  activeClass?: string;
});
```

- **options.name**: (строка) Имя группы переключателей. Должно совпадать с значением в `data-tabs-button` и `data-tabs-content`.
- **options.activeClass**: (строка, необязательный) Класс, который будет добавляться активным элементам. По умолчанию `'active'`.

#### Методы

- **toggleValue(value: string): void**

  Переключает состояние кнопки с указанным `value`.

#### Пример использования

**HTML-разметка:**

```html
<button data-tabs-button="filterOptions" data-value="red">Красный</button>
<button data-tabs-button="filterOptions" data-value="green">Зеленый</button>
<button data-tabs-button="filterOptions" data-value="blue">Синий</button>

<div data-tabs-content="filterOptions" data-value="red">Контент красного</div>
<div data-tabs-content="filterOptions" data-value="green">Контент зеленого</div>
<div data-tabs-content="filterOptions" data-value="blue">Контент синего</div>
<div data-tabs-content="filterOptions" data-value="redgreen">Контент красного и зеленого</div>
<!-- Добавьте контент для необходимых комбинаций -->
```

**JavaScript:**

```javascript
const filterOptions = new CheckboxTabs({
  name: 'filterOptions',
  activeClass: 'selected'
});

// Переключение опции программно
filterOptions.toggleValue('blue');
```

---

## Лицензия

Этот проект лицензирован под лицензией **ISC**. Подробнее в файле [LICENSE](LICENSE).

---

## Контакты

- **Автор**: Vlad Shuian
- **Email**: eshhildis@gmail.com
- **GitHub**: [Ваш профиль GitHub](https://github.com/EshHildis)

---

## Вклад

Мы приветствуем вклад сообщества! Если вы нашли ошибку или хотите предложить улучшения, пожалуйста, создайте issue или отправьте pull request в репозиторий проекта.

**Шаги для вклада:**

1. Форкните репозиторий.
2. Создайте ветку для вашей функции или исправления (`git checkout -b feature/my-feature`).
3. Сделайте коммиты ваших изменений (`git commit -am 'Добавлена новая функция'`).
4. Запушьте ветку (`git push origin feature/my-feature`).
5. Создайте pull request.

---

## Дополнительная информация

### Поддерживаемые браузеры

Плагин совместим со всеми современными браузерами, поддерживающими ES6.

### Зависимости

Плагин не имеет внешних зависимостей и работает без использования сторонних библиотек.

### Стилизация

Вы можете применять собственные стили к кнопкам и контенту. Главное — обеспечьте наличие класса активности (`active` или ваш собственный) для корректного отображения активных элементов.

**Пример CSS:**

```css
button.active {
  background-color: #007bff;
  color: #fff;
}

[data-tabs-content] {
  display: none;
}

[data-tabs-content].active {
  display: block;
}
```

### Важные замечания

- Убедитесь, что значения `data-value` уникальны для каждой кнопки и соответствующего контента.
- Для `CheckboxTabs` комбинации значений должны быть прописаны в `data-value` контента в том же порядке, что и объединение активных значений кнопок.

---

## Часто задаваемые вопросы

**1. Можно ли использовать плагин с другими фреймворками, такими как React или Vue?**

Да, плагин можно использовать в любом проекте, однако помните, что он напрямую взаимодействует с DOM. В средах с виртуальным DOM (как в React или Vue) рекомендуется оборачивать использование плагина в соответствующие компоненты или использовать хуки жизненного цикла для инициализации.

**2. Что происходит, если нет контента для комбинации активных опций в `CheckboxTabs`?**

Если нет соответствующего контента для текущей комбинации активных опций, никакой контент не будет отображен. Убедитесь, что вы предусмотрели все необходимые комбинации.

**3. Как изменить класс активности после инициализации?**

Класс активности задается при инициализации и не может быть изменен после. Если вам нужно изменить класс активности, создайте новый экземпляр класса с нужными параметрами.

---

## История версий

- **1.0.0**
  - Первая стабильная версия плагина.
  - Добавлены классы `RadioTabs` и `CheckboxTabs`.
  - Реализована поддержка ES6 и CommonJS модулей.
  - Добавлены определения типов TypeScript.

---

## Благодарности

Спасибо всем, кто помогал в разработке этого плагина и предоставлял обратную связь для его улучшения.

---

**[Вернуться к началу](#my-tabs-plugin)**