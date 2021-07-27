module.exports = {
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "Market Price | Nim-Ags";
                return args;
            })
    },
    publicPath: '/nim-ags-frontend/',
    outputDir: 'docs'
};