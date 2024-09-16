/** Интерфейс опций для классов RadioTabs и CheckboxTabs */
interface TabsOptions {
    /** Имя группы табов, используется для связывания кнопок и контента */
    name: string;
    /** Класс активности, который будет добавляться к активным элементам (по умолчанию 'active') */
    activeClass?: string;
}

/** Класс для работы с радио-табацией (только один таб может быть активен в момент времени) */
export class RadioTabs {
    /** 
     * Текущее активное значение
     * @readonly
     */
    currentValue: string;

    /**
     * Конструктор класса RadioTabs
     * @param options Объект с опциями инициализации
     */
    constructor(options: TabsOptions);

    /**
     * Переключает активный таб на указанный
     * @param newValue Значение таба, на который нужно переключиться
     */
    switchTab(newValue: string): void;

    /**
     * Получает элементы кнопок и контента на странице
     * @param name Имя группы табов
     */
    protected getElements(name: string): void;

    /**
     * Устанавливает кнопки табов
     * @param buttons Список кнопок
     */
    protected setButtons(buttons: NodeListOf<HTMLElement>): void;

    /**
     * Устанавливает контентные блоки табов
     * @param contents Список контента
     */
    protected setContents(contents: NodeListOf<HTMLElement>): void;

    /**
     * Подписывается на события клика по кнопкам
     */
    protected subscribeEvents(): void;
}

/** Класс для работы с чекбокс-табацией (можно выбрать несколько табов одновременно) */
export class CheckboxTabs {
    /**
     * Текущее активное значение (объединение активных кнопок)
     * @readonly
     */
    currentValue: string;

    /**
     * Множество активных значений кнопок
     * @readonly
     */
    activeButtonValues: Set<string>;

    /**
     * Конструктор класса CheckboxTabs
     * @param options Объект с опциями инициализации
     */
    constructor(options: TabsOptions);

    /**
     * Переключает состояние кнопки (активна/неактивна)
     * @param value Значение кнопки для переключения
     */
    toggleValue(value: string): void;

    /**
     * Обновляет текущее активное значение на основе активных кнопок
     */
    protected updateCurrentValue(): void;

    /**
     * Обновляет отображаемый контент при изменении активных кнопок
     * @param oldValue Предыдущее активное значение
     * @param newValue Новое активное значение
     */
    protected updateSelectedContent(oldValue: string, newValue: string): void;

    /**
     * Получает элементы кнопок и контента на странице
     * @param name Имя группы табов
     */
    protected getElements(name: string): void;

    /**
     * Устанавливает кнопки табов
     * @param buttons Список кнопок
     */
    protected setButtons(buttons: NodeListOf<HTMLElement>): void;

    /**
     * Устанавливает контентные блоки табов
     * @param contents Список контента
     */
    protected setContents(contents: NodeListOf<HTMLElement>): void;

    /**
     * Подписывается на события клика по кнопкам
     */
    protected subscribeEvents(): void;
}