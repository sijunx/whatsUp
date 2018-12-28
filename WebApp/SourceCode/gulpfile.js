const gulp = require('gulp');
const connect = require('gulp-connect');
const webpack = require('webpack-stream');
const webpackConfig = require('./webpack.config');

const config = {
    port: 3939,
    debug: true,
    name: {
        bundlejs: 'bundle.js',
        folderjs: 'dist'
    },
    path: {
        html: './App/Html/*.html',
        css: './App/Css/**/*',
        js: './App/Js/*.js',
        jsx: './App/**/*.jsx',
        dist: './dist',
        mainhtml: './App/index.html',
        mainjs: './App/App.js'
    }
};

gulp.task('connect', function () {
    connect.server({
        root: ['dist'],
        port: config.port,
        livereload: {
            livereload: true,
            port: 38291
        }
    });
});

gulp.task('html', function () {
    gulp.src(config.path.mainhtml).pipe(gulp.dest(config.path.dist)).pipe(connect.reload());
    gulp.src(config.path.html).pipe(gulp.dest(config.path.dist)).pipe(connect.reload());
});

gulp.task('js', function () {
    gulp.src('http://g.alicdn.com/dingding/open-develop/0.7.0/dingtalk.js').pipe(gulp.dest(config.path.dist));
    gulp.src(config.path.js).pipe(gulp.dest(config.path.dist)).pipe(connect.reload());
    gulp.src('').pipe(webpack(webpackConfig)).pipe(gulp.dest(config.path.dist)).pipe(connect.reload());
});

/**
 * 监听配置
 */
gulp.task('watch', function () {
    gulp.watch([config.path.mainhtml, config.path.html, config.path.js, config.path.jsx], ['html', 'js']);
});

gulp.task('default', ['connect', 'html', 'js', 'watch']);