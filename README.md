angular-2-digit-number-filter
=============================

2 digit number filter for angular.js
Show 2, 1 or zero decimal places to produce a number with a minimum of two digits.
produces something like: 17; 1.7; .17


## Usage

Include the file:
```html
<script src="/.../2digitnumber.js"></script>
```

Import it to the angular applicaiton:
```javascript
angular.module('myApp', ['filter.2digitnumber']);
```

Use it in the view:
```html
<span>{{ 1.7 | 2digitnumber}} thing </span>
<span>{{ 17.11 | 2digitnumber}} thing </span>
```
