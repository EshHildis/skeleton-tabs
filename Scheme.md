# Класс `RadioTabs`

### Блок-схема
[![](https://mermaid.ink/img/pako:eNrNVdtu00AQ_RVrn4KUVs2lSW2pIHIpvV_TPhD3wUncJiKxK19aShSJtmoBtQgJFQkhAUL8QBIIuEmT_sL6j5gdx87FFRJvVErlXc8cn3NmdrZK8mpBJgLZK6tH-aKkGVwmJSoc_D3O0s-0br-iddqhvV1uYuIhl8iKhH6kXWrZF9TCNxb9DVGwst9xm1KhpGaknC6SXQckgWlJlvbdPrFPIaVLe7RJ27TO2Sfw0KM3-KIpOBkTnJQ3SodysizpuruVMw1DVfTE8Y5UNmV3N68qhqwYvm1T02Db2XOJJJFIihF5b18CZyDB7ctGuixXGEZAkSryAy88heFpFv4VQi2g2uaANCN_Bz9YWGzdo13g3sL_dS87jdlzVcgGC-kN_Ykhl5z9Fhxr0Vsnw758JJKakzIHKRzGt-xTkSDAE5dtw35Je0DBgpwrDh5fg-0N2rbPvE-6-deMBmbPj2rVZSPZ9yvgGjfQO48pC1lE6EApWYHoLyDeoz9ozyfVKxba07HPoE8cdofDpaAfgHWHWWWhaNA2XN4-iq9q3OwYzDfQfA4m1LH10ISmr_yulgXUsuiTn3CaKNBvpoH4RUxYulf8zaDqbWr9D7LHzoIrYglFLI-pNnN6Xivl5PQhFn6geRnDV_5J8zVsNSCq6TUidmYdNnuwAVY4h4QNhbbXI32_INAavGyBEmTZhOHBsPSjkpEvwuwIoAUDoitIdJUR_QL8LGCIdjAIdqz60wM2gPYdVuXKUc-QIQDEeWCrCLbmHmt_6NUQfywbgxy2o-VhrSHW-pjhngxFPtoZVbKOCRswFUaLPsu5sYNxsOE7zptZnA4W2NxyjmTXtaDjeOh9aOOeWbKFIxjN6_TLN9SRMIo5dABGiv0G3p-PtMBfh90W4mecThptkOEvsNbA0Q9e3Y446kcfmmsZRN92yt_oXx4O-tjRcU30UrcxdSdLPzFs8OICXpAgqchaRSoV4NKrskCRGEW4A0QiwGNB0p6JRFRqECeZhrp1rOSJYGimHCSaau4XibAnlXVYmQcFyZBTJWlfkyre7oGkPFXVkTURquQ5ESJTsclIhOejoWgoFuGjsSA5JgIfm5yeCUdDET4UjvNT4WgtSF4gQHiSj4fi0ekoH5oKx2ci4SCRCyVD1VacCxvv7dofoqifvg?type=png)](https://mermaid.live/edit#pako:eNrNVdtu00AQ_RVrn4KUVs2lSW2pIHIpvV_TPhD3wUncJiKxK19aShSJtmoBtQgJFQkhAUL8QBIIuEmT_sL6j5gdx87FFRJvVErlXc8cn3NmdrZK8mpBJgLZK6tH-aKkGVwmJSoc_D3O0s-0br-iddqhvV1uYuIhl8iKhH6kXWrZF9TCNxb9DVGwst9xm1KhpGaknC6SXQckgWlJlvbdPrFPIaVLe7RJ27TO2Sfw0KM3-KIpOBkTnJQ3SodysizpuruVMw1DVfTE8Y5UNmV3N68qhqwYvm1T02Db2XOJJJFIihF5b18CZyDB7ctGuixXGEZAkSryAy88heFpFv4VQi2g2uaANCN_Bz9YWGzdo13g3sL_dS87jdlzVcgGC-kN_Ykhl5z9Fhxr0Vsnw758JJKakzIHKRzGt-xTkSDAE5dtw35Je0DBgpwrDh5fg-0N2rbPvE-6-deMBmbPj2rVZSPZ9yvgGjfQO48pC1lE6EApWYHoLyDeoz9ozyfVKxba07HPoE8cdofDpaAfgHWHWWWhaNA2XN4-iq9q3OwYzDfQfA4m1LH10ISmr_yulgXUsuiTn3CaKNBvpoH4RUxYulf8zaDqbWr9D7LHzoIrYglFLI-pNnN6Xivl5PQhFn6geRnDV_5J8zVsNSCq6TUidmYdNnuwAVY4h4QNhbbXI32_INAavGyBEmTZhOHBsPSjkpEvwuwIoAUDoitIdJUR_QL8LGCIdjAIdqz60wM2gPYdVuXKUc-QIQDEeWCrCLbmHmt_6NUQfywbgxy2o-VhrSHW-pjhngxFPtoZVbKOCRswFUaLPsu5sYNxsOE7zptZnA4W2NxyjmTXtaDjeOh9aOOeWbKFIxjN6_TLN9SRMIo5dABGiv0G3p-PtMBfh90W4mecThptkOEvsNbA0Q9e3Y446kcfmmsZRN92yt_oXx4O-tjRcU30UrcxdSdLPzFs8OICXpAgqchaRSoV4NKrskCRGEW4A0QiwGNB0p6JRFRqECeZhrp1rOSJYGimHCSaau4XibAnlXVYmQcFyZBTJWlfkyre7oGkPFXVkTURquQ5ESJTsclIhOejoWgoFuGjsSA5JgIfm5yeCUdDET4UjvNT4WgtSF4gQHiSj4fi0ekoH5oKx2ci4SCRCyVD1VacCxvv7dofoqifvg)

### Пояснения к блок-схеме
- **Инициализация**: При создании экземпляра устанавливаются начальные свойства и вызывается метод `getElements(name)` для поиска элементов.
- **Настройка элементов**:
  - `setContents(contents)`: Сохраняет контентные элементы и устанавливает `currentValue`, если активный контент найден.
  - `setButtons(buttons)`: Сохраняет кнопки и устанавливает `currentValue`, если активная кнопка найдена.
- **Подписка на события**: Метод `subscribeEvents()` навешивает обработчики клика на кнопки.
- **Обработка клика**:
  - При клике вызывается `switchTab(newValue)`.
  - Если `currentValue` совпадает с `newValue`, ничего не происходит.
  - Иначе обновляются классы активности у соответствующих кнопок и контента, и `currentValue` обновляется.

<br/>
<br/>
<br/>
<br/>

# Класс `CheckboxTabs`

### Блок-схема
[![](https://mermaid.ink/img/pako:eNqtVmlPE1EU_SuT96kmhdBFsE3UdFNc2KSAwvhhOn22DW2HTKcINiQCcYlgTIwmxkSN8Q8UtDq0tv6FN__I--7rbJ1KQiIJMMs9Z84597430yKqVqQkSR5VtcdqWdENKZ-V6xL8pDbYJ9a2XrA267HBQ2li4pqU3pAJ-8D6zLSeMxPvmOwXVMGZ9UbKlKm6WdB28kqhIZOHgieNyAxHfrP2rQNA9dmAnbIua0vWPhwM2BneOE0KxISkqEZlm2aqSqNhXyo0DUOrN9K7q0q1Se2rqlY3aN0YvSzwaYTgDYdGbeo6AES1LTGDErNc4lvrCAyBPKlEjVyV1jh7qK7U6CWnPIvlOV7-BUpNMNGVwA639Qd-4cTk5wPWB1cd_Nt20DlE32gBGvJlZ-wHlhxJ1muIs8N-C4R1dF0mewJyAyAS1nesA5kgwU1b7Yn1lA1AggmYYwkOX0JPTljXOnQeaePfcRmInvV7bVAjM0wyZEfq-p1FyK0NZOhBn3nr2E8QPmDf2SBg1WkjxtOzDmGIhLptb5PYe1Dd41GZaBq8eRs_ZAl0Tbo6QvMVPD-DENo4lxjCaWAwbC-30MvtgH0xK43QcMxc87cRcGes-TO3611m_n_b8MQBtLINa8RDxO39e8DHxzGyemxzd9DcXX8aza2iYtCMJ_KQG8ddRMwBYqQnXKn1Cvz8AF99PgrwvzNOqE01h1TzI61oFhqqXinQ3DZOo_vkeSxfuFAjRvNDkTyaEwjpgPdHrFy-jXWdwR02EQpN92YHYkSVp7DdcS5DK5WqVOSDfXGlLqDURS71Myg0QWN7mAeu9uF2BxdA-B8clmPhn3NDAdhzyBaRbMnebYKlxx4HOE2c0htIx-FaQq57_sjPMXIP65d5fXCstGrRbv7YXXUZwXnY6M4ZW3eTywc2qRV8Z2B4Pf8CgJfOeUvAj_EsLnjf-CbF0Zofs8OuilG7-AocxXgFeN8U3s6s4CPXLrASVwVCnKzhyf3_sSzvI9WDcUqWaZWqBi0O3xUhewLCvgFwJT5AqvVgG4Mt8b1AnNFymNaRKZUa15JgvB4y63D8cKZSgjG9wT7yeuj7c7hFwqRG9ZpSKcI3UYuXysQow1eATJJwWFT0TZnI9T2oU5qGtrxbV0nS0CEComvNUpkkHynVBpyJwLIVpaQrNefqllJf1zTfOUm2yA5JxqamJ2OxRCIeiUemY4n4dJjskmRievLylWg8EktEojOJqWh8L0yeIEF0MjETmYlfjiciU9GZK7FomNBixdD0OfE9h591e38BNHOAaw?type=png)](https://mermaid.live/edit#pako:eNqtVmlPE1EU_SuT96kmhdBFsE3UdFNc2KSAwvhhOn22DW2HTKcINiQCcYlgTIwmxkSN8Q8UtDq0tv6FN__I--7rbJ1KQiIJMMs9Z84597430yKqVqQkSR5VtcdqWdENKZ-V6xL8pDbYJ9a2XrA267HBQ2li4pqU3pAJ-8D6zLSeMxPvmOwXVMGZ9UbKlKm6WdB28kqhIZOHgieNyAxHfrP2rQNA9dmAnbIua0vWPhwM2BneOE0KxISkqEZlm2aqSqNhXyo0DUOrN9K7q0q1Se2rqlY3aN0YvSzwaYTgDYdGbeo6AES1LTGDErNc4lvrCAyBPKlEjVyV1jh7qK7U6CWnPIvlOV7-BUpNMNGVwA639Qd-4cTk5wPWB1cd_Nt20DlE32gBGvJlZ-wHlhxJ1muIs8N-C4R1dF0mewJyAyAS1nesA5kgwU1b7Yn1lA1AggmYYwkOX0JPTljXOnQeaePfcRmInvV7bVAjM0wyZEfq-p1FyK0NZOhBn3nr2E8QPmDf2SBg1WkjxtOzDmGIhLptb5PYe1Dd41GZaBq8eRs_ZAl0Tbo6QvMVPD-DENo4lxjCaWAwbC-30MvtgH0xK43QcMxc87cRcGes-TO3611m_n_b8MQBtLINa8RDxO39e8DHxzGyemxzd9DcXX8aza2iYtCMJ_KQG8ddRMwBYqQnXKn1Cvz8AF99PgrwvzNOqE01h1TzI61oFhqqXinQ3DZOo_vkeSxfuFAjRvNDkTyaEwjpgPdHrFy-jXWdwR02EQpN92YHYkSVp7DdcS5DK5WqVOSDfXGlLqDURS71Myg0QWN7mAeu9uF2BxdA-B8clmPhn3NDAdhzyBaRbMnebYKlxx4HOE2c0htIx-FaQq57_sjPMXIP65d5fXCstGrRbv7YXXUZwXnY6M4ZW3eTywc2qRV8Z2B4Pf8CgJfOeUvAj_EsLnjf-CbF0Zofs8OuilG7-AocxXgFeN8U3s6s4CPXLrASVwVCnKzhyf3_sSzvI9WDcUqWaZWqBi0O3xUhewLCvgFwJT5AqvVgG4Mt8b1AnNFymNaRKZUa15JgvB4y63D8cKZSgjG9wT7yeuj7c7hFwqRG9ZpSKcI3UYuXysQow1eATJJwWFT0TZnI9T2oU5qGtrxbV0nS0CEComvNUpkkHynVBpyJwLIVpaQrNefqllJf1zTfOUm2yA5JxqamJ2OxRCIeiUemY4n4dJjskmRievLylWg8EktEojOJqWh8L0yeIEF0MjETmYlfjiciU9GZK7FomNBixdD0OfE9h591e38BNHOAaw)

## Пояснения к блок-схемe
- **Инициализация**: Устанавливаются начальные свойства, включая множество `activeButtonValues`, и вызывается `getElements(name)`.
- **Настройка элементов**:
  - `setContents(contents)`: Сохраняет контентные элементы и устанавливает `currentValue`, если активный контент найден.
  - `setButtons(buttons)`: Сохраняет кнопки и добавляет активные кнопки в `activeButtonValues`.
- **Обновление текущего значения**: Метод `updateCurrentValue()` формирует `currentValue` на основе активных кнопок.
- **Подписка на события**: `subscribeEvents()` навешивает обработчики клика на кнопки.
- **Обработка клика**:
  - При клике вызывается `toggleValue(value)`.
  - Сохраняется `oldValue`, и проверяется, содержится ли `value` в `activeButtonValues`.
    - Если да, `value` удаляется из `activeButtonValues`, и класс активности убирается с кнопки.
    - Если нет, `value` добавляется в `activeButtonValues`, и класс активности добавляется к кнопке.
  - `updateCurrentValue()` обновляет `currentValue`.
  - `updateSelectedContent(oldValue, currentValue)` обновляет отображаемый контент.