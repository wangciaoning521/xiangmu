var gulp=require('gulp');
var sass=require('gulp-sass');
// var concat = require("gulp-concat");
// var uglify = require("gulp-uglify");

gulp.task("copy-index",function(){
	gulp.src("*.html")
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\xiangmu"));
});

gulp.task("copy-js",function(){
	gulp.src("js/*.js")
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\xiangmu\\js"));
});
//合并文件
// gulp.task("concatjs",function(){
// 	gulp.src(["js/index.js","js/goods.js"])
// 		.pipe(concat("concat.js"))
// 		.pipe(gulp.dest("D:\\phpStudy\\WWW\\xiangmu\\js"));
// });

//合并并压缩文件
// gulp.task("concatanguglifyjs",function(){
// 	gulp.src(["js/index.js","js/goods.js"])
// 		.pipe(concat("concat.js"))
// 		.pipe(uglify())
// 		.pipe(gulp.dest("D:\\phpStudy\\WWW\\xiangmu\\js"));
// });

gulp.task("sassfile",function(){
	gulp.src("sass/*.scss")
		.pipe(sass())
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\xiangmu\\css"));
});

gulp.task("sassfiles",function(){
	gulp.src("sass/*.scss")
		.pipe(sass())
		.pipe(gulp.dest("css"));
});

gulp.task("copy-img",function(){
	gulp.src("img/**/*")
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\xiangmu\\img"));
});

// gulp.task("bat",["copy-index","copy-img"],function(){

// });

gulp.task("watchall",function(){
	gulp.watch("*.html",["copy-index"]);
	gulp.watch("js/*.js",["copy-js"]);
	gulp.watch("img/**/*",["copy-img"]);
	gulp.watch("sass/*.scss",["sassfile"]);
	gulp.watch("sass/*.scss",["sassfiles"]);
	// gulp.watch(["js/index.js","js/goods.js"],["concatjs"]);
	// gulp.watch(["js/index.js","js/goods.js"],["concatanguglifyjs"]);
});