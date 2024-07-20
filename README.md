# VPrettier

**_define_** space/BL-symbol = `_`

**_define_** BL = break line

<!--  -->
<!--  -->
<!--  -->

## [Main commit #1](https://github.com/b5414/vprettier/commit/1430b51b3bab4299c42b38c9dab4a6703e37e0ce)

<!--  -->
<!--  -->
<!--  -->

#### /doc-builders.js

-   New line (break) type: `nospline`

<!--  -->
<!--  -->
<!--  -->

#### /doc-printer.js

-   Behavior for the line type - `nospline`

<!--  -->
<!--  -->
<!--  -->

#### /function.js

-   062 Space01: `const a = {async_func(){}};`
-   079 Space01: `function func()_{}`
-   084 Space88: `const obj = {get_isInstalled(){}};`
-   113 Space02: `func2({a:1,func(){},b:2});`
-   126 Space03: `const func = async_()=>{};`
-   161 Space04: `const func = async()_=>{};` _probably_
-   205 Space05: `const func = ()_=>{};`
-   219 Space06: `const func = ()=>_{};`
-   225 Space07: IDK
-   243 Space08: `const func = ()=>_();`
-   314 Space09: IDK // `if()return_(func() < 1);` _probably_

<!--  -->
<!--  -->
<!--  -->

#### /member-chain.js

-   BL: `func()_.func()_.func()_.func();`; `cutoff` value set to x`13` funcs

<!--  -->
<!--  -->
<!--  -->

#### /misc.js

-   Space1: `if()_{}`
-   Space2 and BL: `if()_func();else_func();`

<!--  -->
<!--  -->
<!--  -->

#### /printer-estree.js

-   386 Space101: `with_(`
-   389 Space102: `if_(`
-   396 Space103: `if(){}_else if(){}`
-   402 Space104: `else_func();` fix, because of **Space2**
-   417 Space105: `for_(;;)`
-   420 Space106: `for_(`
-   423 Space107: `while_(`
-   425 Space108: `for_(`
-   428 Space109: `for await_(`
-   436 Space110: `while_func` _probably, idk_
-   440 Space111: `while_(`
-   473 Space112: `try_{}catch(e){}_finally_{}`
-   488 Space113: `try{}catch_(e)_{}`
-   491 Space114: `try{}catch_(e){}`
-   495 Space115: `switch_()_{}`

<!--  -->
<!--  -->
<!--  -->
