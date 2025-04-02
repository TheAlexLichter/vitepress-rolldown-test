Build fails when running `pnpm build` command. The error message is as follows:

```
 vitepress-project@ build /home/alichter/Programming/vitepress-rolldown-test
> ROLLDOWN_OPTIONS_VALIDATION=loose vitepress build docs


  vitepress v1.6.3

The built-in minifier is still under development. Setting "minify: true" is not recommended for production use.
✓ building client + server bundles...
build error:
Package subpath './server-renderer/index.mjs' is not defined by "exports" in /home/alichter/Programming/vitepress-rolldown-test/node_modules/vue/package.json imported from /home/alichter/Programming/vitepress-rolldown-test/docs/.vitepress/.temp/app.js
Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: Package subpath './server-renderer/index.mjs' is not defined by "exports" in /home/alichter/Programming/vitepress-rolldown-test/node_modules/vue/package.json imported from /home/alichter/Programming/vitepress-rolldown-test/docs/.vitepress/.temp/app.js
    at exportsNotFound (node:internal/modules/esm/resolve:314:10)
    at packageExportsResolve (node:internal/modules/esm/resolve:661:9)
    at packageResolve (node:internal/modules/esm/resolve:774:12)
    at moduleResolve (node:internal/modules/esm/resolve:854:18)
    at defaultResolve (node:internal/modules/esm/resolve:984:11)
    at ModuleLoader.defaultResolve (node:internal/modules/esm/loader:685:12)
    at #cachedDefaultResolve (node:internal/modules/esm/loader:634:25)
    at ModuleLoader.resolve (node:internal/modules/esm/loader:617:38)
    at ModuleLoader.getModuleJobForImport (node:internal/modules/esm/loader:273:38)
    at ModuleJob._link (node:internal/modules/esm/module_job:135:49)
 ELIFECYCLE  Command failed with exit code 1.
```