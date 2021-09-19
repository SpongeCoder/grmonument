
### Верстка сайта-визитки фирмы по изготовлению памятников

Используется сборщик [TARS](TARS_RU.md) с шаблонизатором [pug](https://pugjs.org/) и CSS-препроцессор [Sass(SCSS)](https://sass-scss.ru/)

**Работает на версиях:**

* node - v14.17.3
* npm - 6.14.15
* python - 3.9.6
* TARS-CLI version: "1.12.2"
* TARS version in current project: "1.14.3"

**Установка:**
Для корректной работы необходимо установить [TARS-CLI](https://github.com/tars/tars-cli/blob/master/README_RU.md) глобально:

```bash
npm i -g tars-cli
```

Склонировать репозиторий, установить зависимости:
```bash
npm i
```

**Команды:**
`tars dev` — запускает dev-режим сборки.
`tars build` — запускает build-режим сборки.

Файлы проекта находятся в папке `/markup`
