# Пример использования:

### HTML-разметка для RadioTabs:

```html
<!-- Кнопки -->
<button data-tabs-button="myRadioTabs" data-value="tab1">Таб 1</button>
<button data-tabs-button="myRadioTabs" data-value="tab2">Таб 2</button>

<!-- Контент -->
<div data-tabs-content="myRadioTabs" data-value="tab1">Контент для Таба 1</div>
<div data-tabs-content="myRadioTabs" data-value="tab2">Контент для Таба 2</div>
```
### HTML-разметка для CheckboxTabs:

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
```
### Инициализация в JavaScript:

```javascript
// Инициализируем радио-табы
new RadioTabs({
    name: 'myRadioTabs', // Имя группы табов
    activeClass: 'active' // Класс активности (необязательный параметр, по умолчанию 'active')
});

// Инициализируем чекбокс-табы
new CheckboxTabs({
    name: 'interactive', // Имя группы табов
    activeClass: 'active' // Класс активности (необязательный параметр, по умолчанию 'active')
});
```