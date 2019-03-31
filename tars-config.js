module.exports = {
    "postcss": [],
    "svg": {
        "active": true,
        "workflow": "symbols",
        "symbolsConfig": {
            "loadingType": "inject",
            "usePolyfillForExternalSymbols": false,
            "pathToExternalSymbolsFile": ""
        }
    },
    "css": {
        "workflow": "manual"
    },
    "js": {
        // concat, modular
        workflow: 'modular',

        // Only webpack is available right now
        bundler: 'webpack',

        /**
         * Use linting of js-files
         * @type {Boolean}
         */
        lint: true,

        /**
         * Use babel for ES6(ES7-ESNext) syntax support
         * @type {Boolean}
         */
        useBabel: true,

        /**
         * Remove console.log and debugger from js code in release mode
         * @type {Boolean}
         */
        removeConsoleLog: true,

        // Special config for webpack
        webpack: {
            useHMR: false,

            /**
             * Automatically loaded modules.
             * Module (value) is loaded when the identifier (key) is used as free variable in a module.
             * The identifier is filled with the exports of the loaded module.
             * Example: {$: "jquery"} or {React: 'react'}
             * @type {Object}
             */
            providePlugin: {
                'jQuery': 'jquery',
                'window.jQuery': 'jquery',
                'jquery': 'jquery',
                'window.jquery': 'jquery',
                '$': 'jquery',
                'window.$': 'jquery'
            }
        },
        "jsPathsToConcatBeforeModulesJs": [],
        "lintJsCodeBeforeModules": false,
        "jsPathsToConcatAfterModulesJs": [],
        "lintJsCodeAfterModules": false
    },
    "sourcemaps": {
        "js": {
            "active": true,
            "inline": true
        },
        "css": {
            "active": true,
            "inline": true
        }
    },
    "notifyConfig": {
        "useNotify": false,
        "title": "TARS notification",
        "sounds": {},
        "taskFinishedText": "Task finished at: "
    },
    "minifyHtml": false,
    "generateStaticPath": true,
    "buildPath": "./builds/",
    "useBuildVersioning": true,
    "useArchiver": true,
    "ulimit": 4096,
    "templater": "pug",
    "cssPreprocessor": "scss",
    "useImagesForDisplayWithDpi": [
        96
    ],
    "fs": {
        "staticFolderName": "static",
        "imagesFolderName": "img",
        "componentsFolderName": "components"
    },
    "staticPrefix": "static/"
};
