module.exports = function(grunt) {
    // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uncss: {
            dist: {
                files: {
                    'dest/css/style.min.css': ['index.html']
                }
            }
        },
        watch: {
            sass: {
                files: ['src/sass/**/*.scss'],
                tasks: ['sass', 'cssmin'],
            },
            libs: {
                files: ['libs/**/*.css'],
                tasks: ['cssmin'],
            }
        },
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/sass',
                    src: ['*.scss'],
                    dest: 'dest/css/',
                    ext: '.css'
                }]
            }
        },
        concat: {
            options: {
                seperator: "\n\n",
                stripeBanners: true,
                banner: '/*!<%= pkg.name %> - v<%= pkg.version %> - ' + ' <%= grunt.template.today("yyyy-mm-dd") %> */',
            },
            dist: {
                src: ['src/js/**/*js'],
                dest: 'dest/js/<%= pkg.name %>.min.js',
            },
            deps: {
                src: [
                    'libs/jquery/dist/jquery.js',
                    'libs/modernizr/modernizr.js',
                    'libs/bootstrap/dist/js/bootstrap.js',
                    'libs/angularjs/angular.min.js',
                    'libs/bxslider-4/dist/jquery.bxslider.js',
                    'libs/jpreloader/jpreloader.js',
                ],
                dest: 'dest/js/<%= pkg.name %>-deps.js'
            },
            move: {
                src: ['libs/angularjs/angular.min.js.map'],
                dest: 'dest/js/angular.min.js.map'
            }
        },

        uglify: {
            options: {
                manage: false
                    /*For presreve comments i minified file
                    presrevedComents:'all'
                    */
            },
            my_target: {
                files: [{
                        expand: true,
                        cwd: 'js/',
                        src: ['*.js', '*.min.js'],
                        dest: 'js/',
                        ext: '.min.js'
                    }]
                    /*
                    This is for Combineing files 
                    files:[{'js/main.min.js':['js/file-1.js', 'js/file-2.js','js/file-3.js']}]
                */
            }
        },
        iconfont: {
            options: {
                fontName: "my-font-name"
            },
            your_target: {
                src: 'glyphs/*.svg',
                dest: 'font/'
            }
        },
        cssmin: {
            my_target: {
                files: [{
                    expand: true,
                    cwd: 'dest/css/',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dest/css/',
                    ext: '.min.css'
                }]
            },
            /*deps: {
                files: {
                    'dest/css/deps.min.css': [
                        'libs/bxslider-4/dist/jquery.bxslider.css',
                        'libs/jpreloader/jpreloader.css',
                    ]
                }
            }*/
        },
            webfont: {
                icons: {
                    src: 'src/icons/*.svg',
                    dest: 'dest/fonts',
                    options: {
                        syntax: 'bem',
                        templateOptions: {
                            baseClass: 'glyph-icon',
                            classPrefix: 'glyph_',
                            mixinPrefix: 'glyph-'
                        }
                    }
                }
            },
        browserSync: {
            dev: {
                bsFiles: {
                    src: ['dest/css/*.css', 'dest/*.html']
                },
                options: {
                    watchTask: true,
                    server: './dest'
                }
            }
        }
    });
    grunt.registerTask('default', ['browserSync', 'watch']);
};
