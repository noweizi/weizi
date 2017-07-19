//导入工具包 require('node_modules里对应模块')
var gulp  = require('gulp'), //本地安装gulp所用到的地方
    plumber  = require('gulp-plumber'), //捕获处理任务中的错误
    sass  = require('gulp-sass'), //编译sass
    sourcemaps  = require('gulp-sourcemaps'), //sass浏览器地图
    watch  = require('gulp-watch'), //用来监视文件的变化
    sprite  = require('gulp.spritesmith'), //拼接图片并生成样式表
    notify  = require('gulp-notify'), //更新通知
    livereload  = require('gulp-livereload') //实现浏览器自动刷新页面

path ={
    //局部使用，当前操作人调整html livereload可以实现比较快的读取
    //views: '../../../app_m/views/te.htm',
    Ddev: 'desktop/dev/',
    Ddest: 'desktop/dest/',
    Mdev: 'mobile/dev/',
    Mdest: 'mobile/dest/'
}
//====================================html====================================
gulp.task('html',function(){
    return gulp.src(path.views)
        .pipe(livereload())
});
//=================================统一配置样式=================================
//移动端
gulp.task('style', function () {
    return gulp.src(path.Mdev + "sass/*.scss")
        .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
        .pipe(sass({outputStyle: "compact"}))
        .pipe(gulp.dest(path.Mdest + 'transitcss/'))
        .pipe(sass({outputStyle: "compressed"}))
        .pipe(gulp.dest(path.Mdest + 'css/'))
});
//应用后台样式
gulp.task('styleDesktop', function () {
    return gulp.src(path.Ddev + "sass/*.scss")
        .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
        .pipe(sass({outputStyle: "compact"}))
        .pipe(gulp.dest(path.Ddest + 'transitcss/'))
        .pipe(sass({outputStyle: "compressed"}))
        .pipe(gulp.dest(path.Ddest + 'css/'))
});

//====================================font====================================
gulp.task('font', function(){
    return gulp.src([path.Mdev + 'font/*.eot', path.Mdev + 'font/*.svg', path.Mdev + 'font/*.ttf', path.Mdev + 'font/*.woff'])
        .pipe(gulp.dest(path.Mdest + 'font/'))
});
//图片拼合
function spriteFun(fileName){
    gulp.task('sprite'+fileName, function () {
        var spriteData = gulp.src(path.Mdev + 'img/sprite/'+fileName+'/*.png')
            .pipe(sprite({
                imgName: 'sprite_'+fileName+'.png',
                cssName: 'sprite_'+fileName+'.scss',
                padding: 10,
                cssFormat: 'scss',
                cssTemplate: function (data) {
                    var arr=[];
                    data.sprites.forEach(function (sprite) {
                        arr.push(".sprite_" + sprite.name +
                            "{\n" +
                            "    background-image: url('../img/sprite/" + sprite.escaped_image + "');\n" +
                            "    background-position: " + sprite.offset_x /2 + "px " + sprite.offset_y /2 + "px;\n" +
                            "    background-size: " + sprite.total_width /2  + "px " + sprite.total_height /2 +"px;\n" +
                            "    width: " + sprite.width /2 + "px;\n" +
                            "    height: " + sprite.height /2 + "px;\n" +
                            "}\n");
                       /* arr.push(".sprite_" + sprite.name +
                            "{\n" +
                            "    background-image: url('../img/sprite/" + sprite.escaped_image + "');\n" +
                            "    background-position: " + sprite.offset_x / 100 + "rem " + sprite.offset_y / 100 + "rem;\n" +
                            "    background-size: " + sprite.total_width / 100 + "rem " + sprite.total_height / 100 +"rem;\n" +
                            "    width: " + sprite.width / 100 + "rem;\n" +
                            "    height: " + sprite.height / 100 + "rem;\n" +
                            "}\n");*/
                    });
                    return arr.join('');
                }
            }));
        spriteData.img.pipe(gulp.dest(path.Mdest + 'img/sprite/'));
        spriteData.css.pipe(gulp.dest(path.Mdev + 'sass/sprite/'));
    });
}
//前台
spriteFun('usual');
// watch
gulp.task('watch',function(){
    gulp.watch(path.Mdev + 'sass/**', ['style']);
    gulp.watch(path.Ddev + 'sass/**', ['styleDesktop']);
    gulp.watch(path.Mdev + 'img/sprite/usual/*.png', ['spriteusual']);
});
gulp.task('default', ['watch']);