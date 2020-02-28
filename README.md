# Angular ivy problem reproduction
This repo serves as a reproduction for https://github.com/angular/angular/issues/35602 or a similar issue.
As described in 35602 ngtsc seems to identify cycles and thus code is dropped.
In this case it is forced by having a base class to mitigate circular dependency warnings in a typical parent child construct.
The parent `tab-group` has contentchildren on `tab` component, the `tab` component gets the parent injected. Now this itself doesn't force the error.
We introduced a third compoennt `header-outlet` which also gets the parent injected.
In Angular 8 it was possible to import the base class for dependency injection and then still import the real class to use it as a type.
```
import {TabGroupBase} from './tab-group-base';
import {TabGroupComponent} from './tab-group';

constructor(private tabGroup: TabGroupBase) {
   (tabGroup as TabGroupComponent).label = 'abc';
}
```

The `header-outlet` component now introduces a bug only when the build optimizer is used that suddenly things like `ngIf` are not working anymore in `tab-group`.


Reproduction steps:
+ run `ng build mylib` to build the library with ivy
+ run `ng serve webapp --prod` to run the prod build and serve the app
+ go to http://localhost:4200 and you will see a blank page.

In comparison this does not happen if build directly from sources and not from `dist`:
+ run `ng serve webapp -c fromsource``
+ go to http://localhost:4200 and you the components render just fine