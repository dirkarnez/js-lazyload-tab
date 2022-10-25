js-lazyload-tab
===============
https://dirkarnez.github.io/js-lazyload-tab/

A demostration on doing lazy loading tab without
- third-parties (vanilla js)
- `window` pollution
  - [ ] ```js
        (() => {
            eval("var add = (a, b) => a + b")
            alert(add(1, 2))
        })()
        ```
- js bundling

### Notes
- lazy loading on works per `.tab-container`, expecting different `.tab-container` do not share a tab
