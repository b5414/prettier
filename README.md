# VPrettier V2

let's go v2

### init

1. `yarn`
2. `yarn build`

-   `prettier . --write`

### rest

```js
// /function.js
const a = {async_func(){}};
function func()_{}
const obj = {get_isInstalled(){}};
func2({a:1,func(){},b:2});
const func = async_()=>{};
const func = async()_=>{}; 
const func = ()_=>{};
const func = ()=>_{};
const func = ()=>_();
if()return_(func() < 1); 

// /member-chain.js
func()_.func()_.func()_.func();

// /misc.js
if()_{}
if()_func();else_func();

// /printer-estree.js
with_(
if_(
if(){}_else if(){}
else_func(); 
for_(;;)
for_(
while_(
for_(
for await_(
while_func probably, idk
while_(
try_{}catch(e){}_finally_{}
try{}catch_(e)_{}
try{}catch_(e){}
switch_()_{}
```

```js
// /function.js
const a = {async    func(){}};
function func()    {}
const obj = {get    isInstalled(){}};
func2({a:1,func(){},b:2});
const func = async    ()=>{};
const func = async()    =>{}; 
const func = ()    =>{};
const func = ()=>    {};
const func = ()=>    ();
if()return    (func() < 1); 

// /member-chain.js
func()    .func()    .func()    .func();

// /misc.js
if()    {}
if()    func();else    func();

// /printer-estree.js
with    (
if    (
if(){}    else if(){}
else    func(); 
for    (;;)
for    (
while    (
for    (
for await    (
while    func probably, idk
while    (
try    {}catch(e){}    finally    {}
try{}catch    (e)    {}
try{}catch    (e){}
switch    ()    {}
```