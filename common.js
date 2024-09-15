// Оборачиваем весь код в функцию, чтобы избежать загрязнения глобального пространства имен
(function() {

    // Значение по умолчанию для класса активности
    const DEFAULT_ACTIVE_CLASS = 'active';

    // Класс для работы с радио-табацией (только один таб может быть активен в момент времени)
    class RadioTabs {
        /**
         * Конструктор класса RadioTabs
         * @param {Object} options - Объект с настройками
         * @param {string} options.name - Имя группы табов
         * @param {string} [options.activeClass] - Класс активности (по умолчанию 'active')
         */
        constructor(options) {
            // Деструктуризация параметров с указанием значений по умолчанию
            const {
                name, // Имя группы табов
                activeClass = DEFAULT_ACTIVE_CLASS // Класс активности
            } = options;

            // Проверяем, что имя группы табов указано и является строкой
            if (typeof name !== 'string') {
                throw new Error('Необходимо указать корректное название группы табов (строка).');
            }

            // Сохраняем активный класс в свойство объекта
            this.activeClass = activeClass;

            // Инициализируем хранилища для кнопок и контента по их значениям
            this.buttonsByValue = {}; // Объект для хранения кнопок по их значениям
            this.contentsByValue = {}; // Объект для хранения контента по его значениям

            // Текущее активное значение (value)
            this.currentValue = ''; // Значение выбранного таба/контента

            // Получаем элементы кнопок и контента по указанному имени группы
            this.getElements(name);
        }

        /**
         * Метод для получения элементов кнопок и контента по имени группы
         * @param {string} name - Имя группы табов
         */
        getElements(name) {
            // Ищем все элементы кнопок и контента по дата-атрибуту с указанным именем группы
            const buttons = document.querySelectorAll(`[data-tabs-button="${name}"]`);
            const contents = document.querySelectorAll(`[data-tabs-content="${name}"]`);

            // Проверяем, что найдены элементы кнопок и контента
            if (buttons.length === 0 || contents.length === 0) {
                throw new Error(`Элементы для группы табов с именем "${name}" не найдены.`);
            }

            // Сохраняем кнопки и контент
            this.setContents(contents);
            this.setButtons(buttons);

            // Навешиваем обработчики событий на кнопки
            this.subscribeEvents();
        }

        /**
         * Метод для сохранения контента по его значениям
         * @param {NodeList} contents - Коллекция элементов контента
         */
        setContents(contents) {
            contents.forEach(content => {
                const value = content.dataset.value; // Получаем значение из data-value

                // Если контент имеет активный класс, сохраняем его значение как текущее
                if (content.classList.contains(this.activeClass)) {
                    this.currentValue = value;
                }

                // Сохраняем контент по его значению
                this.contentsByValue[value] = content;
            });
        }

        /**
         * Метод для сохранения кнопок по их значениям
         * @param {NodeList} buttons - Коллекция кнопок
         */
        setButtons(buttons) {
            buttons.forEach(button => {
                const value = button.dataset.value; // Получаем значение из data-value

                // Сохраняем кнопку по ее значению
                this.buttonsByValue[value] = button;

                // Если кнопка имеет активный класс, сохраняем ее значение как текущее
                if (button.classList.contains(this.activeClass)) {
                    this.currentValue = value;
                }
            });
        }

        /**
         * Метод для навешивания обработчиков событий на кнопки
         */
        subscribeEvents() {
            // Обходим все кнопки
            Object.values(this.buttonsByValue).forEach(button => {
                button.addEventListener('click', () => {
                    // При клике на кнопку вызываем метод для переключения таба
                    this.switchTab(button.dataset.value);
                });
            });
        }

        /**
         * Метод для переключения таба на новое значение
         * @param {string} newValue - Значение нового таба
         */
        switchTab(newValue) {
            // Если текущее значение совпадает с новым, ничего не делаем
            if (this.currentValue === newValue) return;

            // Получаем текущие активные кнопку и контент
            const currentButton = this.buttonsByValue[this.currentValue];
            const currentContent = this.contentsByValue[this.currentValue];

            // Убираем активный класс с текущих элементов
            if (currentButton) currentButton.classList.remove(this.activeClass);
            if (currentContent) currentContent.classList.remove(this.activeClass);

            // Получаем новые активные кнопку и контент
            const newButton = this.buttonsByValue[newValue];
            const newContent = this.contentsByValue[newValue];

            // Добавляем активный класс к новым элементам
            if (newButton) newButton.classList.add(this.activeClass);
            if (newContent) newContent.classList.add(this.activeClass);

            // Обновляем текущее значение
            this.currentValue = newValue;
        }
    }

    // Класс для работы с чекбокс-табацией (можно выбрать несколько табов одновременно)
    class CheckboxTabs {
        /**
         * Конструктор класса CheckboxTabs
         * @param {Object} options - Объект с настройками
         * @param {string} options.name - Имя группы табов
         * @param {string} [options.activeClass] - Класс активности (по умолчанию 'active')
         */
        constructor(options) {
            // Деструктуризация параметров с указанием значений по умолчанию
            const {
                name, // Имя группы табов
                activeClass = DEFAULT_ACTIVE_CLASS // Класс активности
            } = options;

            // Проверяем, что имя группы табов указано и является строкой
            if (typeof name !== 'string') {
                throw new Error('Необходимо указать корректное название группы табов (строка).');
            }

            // Сохраняем активный класс в свойство объекта
            this.activeClass = activeClass;

            // Инициализируем хранилища для кнопок и контента по их значениям
            this.buttonsByValue = {}; // Объект для хранения кнопок по их значениям
            this.contentsByValue = {}; // Объект для хранения контента по его значениям

            // Множество текущих активных значений кнопок
            this.activeButtonValues = new Set();

            // Текущее активное значение (строка, представляющая комбинацию активных кнопок)
            this.currentValue = '';

            // Получаем элементы кнопок и контента по указанному имени группы
            this.getElements(name);
        }

        /**
         * Метод для получения элементов кнопок и контента по имени группы
         * @param {string} name - Имя группы табов
         */
        getElements(name) {
            // Ищем все элементы кнопок и контента по дата-атрибуту с указанным именем группы
            const buttons = document.querySelectorAll(`[data-tabs-button="${name}"]`);
            const contents = document.querySelectorAll(`[data-tabs-content="${name}"]`);

            // Проверяем, что найдены элементы кнопок и контента
            if (buttons.length === 0 || contents.length === 0) {
                throw new Error(`Элементы для группы табов с именем "${name}" не найдены.`);
            }

            // Сохраняем кнопки и контент
            this.setContents(contents);
            this.setButtons(buttons);

            // Навешиваем обработчики событий на кнопки
            this.subscribeEvents();
        }

        /**
         * Метод для сохранения контента по его значениям
         * @param {NodeList} contents - Коллекция элементов контента
         */
        setContents(contents) {
            contents.forEach(content => {
                const value = content.dataset.value; // Получаем значение из data-value

                // Если контент имеет активный класс, устанавливаем его значение как текущее
                if (content.classList.contains(this.activeClass)) {
                    this.currentValue = value;
                }

                // Сохраняем контент по его значению
                this.contentsByValue[value] = content;
            });
        }

        /**
         * Метод для сохранения кнопок по их значениям
         * @param {NodeList} buttons - Коллекция кнопок
         */
        setButtons(buttons) {
            buttons.forEach(button => {
                const value = button.dataset.value; // Получаем значение из data-value

                // Если кнопка имеет активный класс, добавляем её значение в множество активных кнопок
                if (button.classList.contains(this.activeClass)) {
                    this.activeButtonValues.add(value);
                }

                // Сохраняем кнопку по ее значению
                this.buttonsByValue[value] = button;
            });

            // Обновляем текущее значение на основе активных кнопок
            this.updateCurrentValue();
        }

        /**
         * Метод для навешивания обработчиков событий на кнопки
         */
        subscribeEvents() {
            // Обходим все кнопки
            Object.values(this.buttonsByValue).forEach(button => {
                button.addEventListener('click', () => {
                    // При клике на кнопку переключаем ее состояние
                    this.toggleValue(button.dataset.value);
                });
            });
        }

        /**
         * Метод для переключения состояния кнопки и обновления контента
         * @param {string} value - Значение кнопки
         */
        toggleValue(value) {
            const oldValue = this.currentValue; // Сохраняем предыдущее значение

            if (this.activeButtonValues.has(value)) {
                // Если значение уже активно, удаляем его из множества
                this.activeButtonValues.delete(value);
                this.buttonsByValue[value].classList.remove(this.activeClass);
            } else {
                // Если значение не активно, добавляем его в множество
                this.activeButtonValues.add(value);
                this.buttonsByValue[value].classList.add(this.activeClass);
            }

            // Обновляем текущее значение на основе активных кнопок
            this.updateCurrentValue();

            // Обновляем отображаемый контент
            this.updateSelectedContent(oldValue, this.currentValue);
        }

        /**
         * Метод для обновления текущего значения на основе активных кнопок
         */
        updateCurrentValue() {
            // Преобразуем множество в массив, сортируем для консистентности и объединяем в строку
            this.currentValue = Array.from(this.activeButtonValues).sort().join('');
        }

        /**
         * Метод для обновления отображаемого контента
         * @param {string} oldValue - Предыдущее значение
         * @param {string} newValue - Новое значение
         */
        updateSelectedContent(oldValue, newValue) {
            // Убираем активный класс с предыдущего контента
            const oldContent = this.contentsByValue[oldValue];
            if (oldContent) {
                oldContent.classList.remove(this.activeClass);
            }

            // Добавляем активный класс новому контенту
            const newContent = this.contentsByValue[newValue];
            if (newContent) {
                newContent.classList.add(this.activeClass);
            }
        }
    }

    /** Пример использования классов */

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
})();
