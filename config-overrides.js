 const path = require('path');
 const {
     override,
     disableEsLint,
     overrideDevServer,
     addWebpackAlias,
     fixBabelImports,
     addLessLoader,
     watchAll
 } = require("customize-cra");

 module.exports = {
     webpack: override(

         addWebpackAlias({
             ["@"]: path.resolve(__dirname, "src")
         }),

         // fixBabelImports('import', {
         //     libraryName: 'antd',
         //     libraryDirectory: "es",
         //     style: true
         // }),
         // addLessLoader({
         //     javascriptEnabled: true
         // }),

         // usual webpack plugin
         // disableEsLint()
     ),
     devServer: overrideDevServer(
         // dev server plugin
         watchAll()
     )
 };