const path = require('path');
const webpack = require('webpack');
const webpackCfg = require('./webpack.config.common')


function addIstanbulInstrumenterLoader(webpackCfg) {
    webpackCfg.module.rules.push({
        test: /\.(js|ts|tsx)$/,
        enforce: 'post',
        include: path.resolve('src/'),
        use: 'istanbul-instrumenter-loader'
    })
    return webpackCfg
}

// Karma configuration
// Generated on Wed Apr 27 2016 11:26:22 GMT+0200 (CEST)

module.exports = (config) => {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: './',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],

        // list of files / patterns to load in the browser
        // all modules are imported by tests via webpack
        files: [
            './test.webpack.js'
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            './test.webpack.js': ['webpack']
        },

        //import common webpack config
        webpack: addIstanbulInstrumenterLoader(webpackCfg),

        webpackMiddleware: {
            // webpack-dev-middleware configuration
            noInfo: true //do not foward webpack logs to karma
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: [
            'dots',
            'coverage-istanbul'
        ],

        //https://www.npmjs.com/package/karma-coverage-istanbul-reporter
        coverageIstanbulReporter: {
            reports: [
                'html',
                'text-summary'
            ],
            fixWebpackSourcePaths: true,
            skipFilesWithNoCoverage: false
        },


        // web server port
        port: 9876,

        //replace localhost by ip. It is required to launch system throw selenium server in other PC
        hostname: 'localhost', //ip.address(),

        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: [
            'Chrome'
        ],


        customLaunchers: {
            //chrome with disabled security
            Chrome_without_security: {
                base: 'Chrome',
                flags: ['--disable-web-security', '--ignore-certificate-errors']
            }
        },

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,

        //https://github.com/karma-runner/karma/blob/master/docs/config/01-configuration-file.md#mime
        mime: {
            'text/x-typescript': ['ts', 'tsx']
        },

        plugins: [
            'karma-webpack',
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-coverage-istanbul-reporter'
        ].map(x => require(x))
    })
}
