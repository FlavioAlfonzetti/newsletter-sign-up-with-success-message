import"./modulepreload-polyfill-3cfb730f.js";import"./main-424c74dd.js";const o=require("express"),s=o(),t=require("path"),r={}.PORT||3e3;s.use(o.static(t.join(__dirname,"src/dist")));s.listen(r,()=>{console.log(`Server is running on port ${r}`)});
