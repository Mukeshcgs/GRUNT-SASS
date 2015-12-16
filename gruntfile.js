module.exports = function(grunt) {
    // load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
    require('load-grunt-tasks')(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        imagemin: {
            dynamic: {
                files: [{
                    expand: true, // Enable dynamic expansion 
                    cwd: 'src/images/', // Src matches are relative to this path 
                    src: ['*{ jpg, gif, png,}'], // Actual patterns to match 
                    dest: 'dest/images/' // Destination path prefix 
                }]
            }
        },
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
            },
            scripts: {
                files: ['src/js/*.js', 'lib/**/*.js'],
                tasks: ['concat', 'uglify'],
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
            deps: {
                src: [
                    'libs/jquery-ui/themes/base/core.css',
                    'libs/jquery-ui/themes/base/base.css',
                    'libs/jquery-ui/themes/base/theme.css',
                    'libs/jquery-ui/themes/base/widget.css',
                    'libs/jquery-ui/themes/base/mouse.css',
                    'libs/jquery-ui/themes/base/datepicker.css',
                    'libs/jquery-ui/themes/base/slider.css',
                    'libs/bxslider/jquery.bxslider.css',
                ],
                dest: 'dest/css/app-deps.css'

            }
        },
        concat: {
            options: {
                seperator: "\n\n",
                sourceMap: true,
                stripeBanners: true,
                banner: '/*!<%= pkg.name %> - v<%= pkg.version %> - ' + ' <%= grunt.template.today("yyyy-mm-dd") %> */',
            },
            dist: {
                src: ['src/js/bootstrap/*js'],
                dest: 'dest/js/bootstrap.js',
            },
            deps: {
                src: [
                    'libs/jquery/dist/jquery.js',
                    'libs/modernizr/modernizr.js',
                    'libs/jquery-ui/ui/core.js',
                    'libs/jquery-ui/ui/widget.js',
                    'libs/jquery-ui/ui/mouse.js',
                    'libs/jquery-ui/ui/position.js',
                    'libs/jquery-ui/ui/datepicker.js',
                    'libs/jquery-ui/ui/slider.js',
                    'src/js/jquery-ui-touch.js',
                    'libs/bxslider/jquery.bxslider.js',
                    'src/js/script.js',
                    'src/js/slider.js',
                ],
                dest: 'dest/js/app-deps.js'
            },
            // move: {
            //     src: ['libs/angularjs/angular.min.js.map'],
            //     dest: 'dest/js/angular.min.js.map'
            // }
        },
        uglify: {
            options: {
                manage: false,
                sourceMap: true,
                sourceMapIncludeSources: true,
                /*For presreve comments i minified file*/
                preserveComments: 'all'
            },
            // Following task will take all the js in "dest/js" folder and combine in one minifyed js
            minify_all_js: {
                files: {
                    'dest/js/app.min.js': ['dest/js/bootstrap.js', 'dest/js/app-deps.js']
                }
            },
            /* Following task make all js minified but not combine in one file
            my_target2: {
                files: [{
                        expand: true,
                        cwd: 'dest/js/',
                        src: ['*.js', '*.min.js'],
                        dest: 'dest/js/',
                        ext: '.min.js'
                    }]
                                     This is for Combineing files 
                    files:[{'js/main.min.js':['js/file-1.js', 'js/file-2.js','js/file-3.js']}]
            }
                */
        },

        webfont: {
            icons: {
                src: 'src/icons/*.svg',
                dest: 'dest/icon-font',
                options: {
                    syntax: 'bem',
                    templateOptions: {
                        baseClass: 'tn-icon',
                        classPrefix: 'tn-',
                        mixinPrefix: 'tn-'
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
        },
    });
    grunt.registerTask('default', ['browserSync', 'watch']);
};
