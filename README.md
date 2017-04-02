# ion-datetime-picker-converter-fixed

[![GitHub version](https://img.shields.io/github/release/katemihalikova/ion-datetime-picker-converter-fixed.svg?style=flat-square)](https://github.com/katemihalikova/ion-datetime-picker-converter-fixed)
[![npm version](https://img.shields.io/npm/v/ion-datetime-picker-converter-fixed.svg?style=flat-square)](https://npm.im/ion-datetime-picker-converter-fixed)
[![Bower version](https://img.shields.io/bower/v/ion-datetime-picker-converter-fixed.svg?style=flat-square)](https://libraries.io/bower/ion-datetime-picker-converter-fixed)
[![Ionic version](https://img.shields.io/badge/ionic-v1.3-6ea2fb.svg?style=flat-square)](http://ionicframework.com/docs/v1/)
[![License](https://img.shields.io/npm/l/ion-datetime-picker-converter-fixed.svg?style=flat-square)](https://github.com/katemihalikova/ion-datetime-picker-converter-fixed/blob/develop/LICENSE)

> Model converter from/to from/to International fixed calendar - for [ion-datetime-picker](https://github.com/katemihalikova/ion-datetime-picker)

# Installation

1. Use bower or npm to install this module:

    ```bash
    bower install ion-datetime-picker-converter-fixed --save
    ```

    ```bash
    npm install ion-datetime-picker ion-datetime-picker-converter-fixed --save
    ```

2. Import the javascript file into your HTML file (or use [webpack](https://webpack.js.org/)):

    ```html
    <script src="lib/ion-datetime-picker-converter-fixed/dist/index.js"></script>
    ```

# Usage

Use `fixed` as a value of `converter` attribute when you define your picker. It's best used together with [International fixed calendar](https://github.com/katemihalikova/ion-datetime-picker-calendar-fixed).

```html
<ion-datetime-picker converter="fixed" ...></ion-datetime-picker>
```

See [ion-datetime-picker README](https://github.com/katemihalikova/ion-datetime-picker/blob/develop/README.md) for more info.
