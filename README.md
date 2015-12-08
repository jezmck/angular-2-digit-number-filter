angular-twodigitnumber-filter
=============================

Two digit number filter for angular.js
Show 2, 1 or zero decimal places to produce a string of a number with a *minimum* of two digits.
Produces something like: `12`; `1.2`; `.12`


## Usage

Include the file:
```html
<script src="/.../twodigitnumber.js"></script>
```

Import it to the angular applicaiton:
```javascript
angular.module('myApp', ['filter.twodigitnumber']);
```

Use it in the view:
```html
<span>{{ 120.2 | twodigitnumber }} thing </span> → 120
<span>{{ 12.02 | twodigitnumber }} thing </span> → 12
<span>{{ 1.202 | twodigitnumber }} thing </span> → 1.2
<span>{{ .1202 | twodigitnumber }} thing </span> → .12
```
