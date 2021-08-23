var banner = '/*! <%= pkg.name %> V<%= pkg.version %> | (c) 2020 <%= pkg.author %>*/\n';

var source = require('./libs/preload.js');
var sourceScript = source.jsFiles;
var sourceStyle = source.cssFiles;

// 需要进行js语法经常的
var sourceScriptJshint = (function (sourceScript) {
    var resultData = [];
    var flag = 0;
    for (; flag < sourceScript.length; flag++) {
        if (!/libs\/min/.test(sourceScript[flag])) {
            resultData.push(sourceScript[flag]);
        }
    }
    return resultData;
})(sourceScript);

module.exports = function (grunt) {

    // 配置插件任务
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // 合并js和css代码
        concat: {
            options: {
                separator: '\n', //文件连接分隔符，表示连接的文件用指定的separator分割。
                stripBanners: true, //如果为true，去除代码中的块注释，默认为false
                banner: banner
            },
            targetJs: {
                src: sourceScript,
                dest: 'build/lib-<%= pkg.version %>.js'
            },
            targetCss: {
                src: sourceStyle,
                dest: 'build/style-<%= pkg.version %>.css'
            }
        },

        // js语法检查
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                "force": true,
                "reporterOutput": "jshint.debug.txt"
            },
            target: sourceScriptJshint
        },

        //压缩js
        uglify: {
            options: {
                banner: banner
            },
            target: {
                options: {
                    mangle: true
                },
                files: [{
                    'build/lib-<%= pkg.version %>.min.js': ['build/lib-<%= pkg.version %>.js']
                }]
            }
        },

        // css后处理
        postcss: {
            options: {
                processors: [
                    require('autoprefixer')()
                ]
            },
            target: {
                src: 'build/style-<%= pkg.version %>.css',
                dest: 'build/style-<%= pkg.version %>.postcss.css'
            }
        },

        // css语法检查
        csslint: {
            options: {
                csslintrc: '.csslint'
            },
            target: sourceStyle

        },

        // 压缩css
        cssmin: {
            options: {
                keepSpecialComments: 0
            },
            target: {
                files: {
                    'build/style-<%= pkg.version %>.min.css': ['build/style-<%= pkg.version %>.postcss.css']
                }
            }
        },

        // 服务器
        connect: {
            server: {
                options: {
                    port: 20000,
                    base: './',
                    open: false,
                    keepalive: true,
                    hostname: 'localhost'
                }
            }
        }

    });

    // 加载需要的插件
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // 注册Grunt任务
    grunt.registerTask('default', ['connect']);
    grunt.registerTask('prod', ['concat:targetJs', 'jshint:target', 'uglify:target', 'concat:targetCss', 'postcss:target', 'cssmin:target', 'csslint:target']);

};