Angular 4+ wrapper for  [text-overflow-clamp](https://github.com/joshgillies/text-overflow-clamp)
========================================

The lib simply wraps the plain JS library for Angular usage.

Installation
------------

Install the plugin with npm:
```shell
$ npm install --save ngx-text-overflow-clamp
```

Add to your angular module:
```javascript
import { NgxTextOverflowClampModule } from "ngx-text-overflow-clamp";

@NgModule({
    imports: [
        // ...
        NgxTextOverflowClampModule
    ],
    // ...
});
```

Usage
-----------
```html
<!-- the outer container MUST have a width! -->
<div style="width:250px;">
    <!-- we want two lines max. -->
    <div [clamp]="2">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
    </div>
</div>
```

Will become (depending on font size etc.):
```
Lorem ipsum dolor sit amet, consetetur
sadipscing elitr, sed diam nonumy...
```
