"use strict";
// Начало - Подключаю плагины -
var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var mqpacker = require("css-mqpacker");
var minify = require("gulp-csso");
var rename = require("gulp-rename");
var svgstore = require("gulp-svgstore");
var svgmin = require("gulp-svgmin");
var imagemin = require("gulp-imagemin");
var run = require("run-sequence");
var del = require("del");
var uglify = require("gulp-uglify");
var server = require("browser-sync").create();
// Конец



gulp.task("top_style_index", function() {     // создает задачу "style"
  gulp.src("sass/top_index.scss")       // указывает какие файлы(где лежат) использовать для выполнения задачи
    .pipe(plumber())               // плагин отслеживающий ошибки
    .pipe(sass())                  // включаеет сборщик sass файлов в файл css
    .pipe(postcss([                // включает модуль для изменения сss
      autoprefixer({browsers: [    // подключение плагина для postcss
        "last 2 version",          // указывет для каких версий браузеров расставлять префиксы
        "last 2 Chrome versions",
        "last 2 Firefox versions",
        "last 2 Opera versions",
        "last 2 Edge versions"
      ]})
      /*mqpacker({                   // подключение плагина для группировки медиазапросов
       sort: true                 // сортировка от минимального значения
       })*/
    ]))
    .pipe(gulp.dest("build/css"))   // указывает, куда положить файл после выполнения задач
    .pipe(minify())                 // включение плагина для минификации файла css
    .pipe(rename("top_index.min.css"))  // переименовывает минифицированный файл
    .pipe(gulp.dest("build/css"))   // указывает, куда положить переименованный минифицированный файл
    .pipe(server.reload({stream: true})); // перезагрузка браузера
});

gulp.task("style", function() {     // создает задачу "style"
  gulp.src("sass/style.scss")       // указывает какие файлы(где лежат) использовать для выполнения задачи
    .pipe(plumber())               // плагин отслеживающий ошибки
    .pipe(sass())                  // включаеет сборщик sass файлов в файл css
    .pipe(postcss([                // включает модуль для изменения сss
      autoprefixer({browsers: [    // подключение плагина для postcss
        "last 2 version",          // указывет для каких версий браузеров расставлять префиксы
        "last 2 Chrome versions",
        "last 2 Firefox versions",
        "last 2 Opera versions",
        "last 2 Edge versions"
      ]})
      /*mqpacker({                   // подключение плагина для группировки медиазапросов
       sort: true                 // сортировка от минимального значения
       })*/
    ]))
    .pipe(gulp.dest("build/css"))   // указывает, куда положить файл после выполнения задач
    .pipe(minify())                 // включение плагина для минификации файла css
    .pipe(rename("style.min.css"))  // переименовывает минифицированный файл
    .pipe(gulp.dest("build/css"))   // указывает, куда положить переименованный минифицированный файл
    .pipe(server.reload({stream: true})); // перезагрузка браузера
});

gulp.task("copycss", function() {     // создает задачу "style"
  gulp.src("css/*.css")       // указывает какие файлы(где лежат) использовать для выполнения задачи
    .pipe(plumber())               // плагин отслеживающий ошибки
    .pipe(postcss([                // включает модуль для изменения сss
      autoprefixer({browsers: [    // подключение плагина для postcss
        "last 2 version",          // указывет для каких версий браузеров расставлять префиксы
        "last 2 Chrome versions",
        "last 2 Firefox versions",
        "last 2 Opera versions",
        "last 2 Edge versions"
      ]}),
      mqpacker({                   // подключение плагина для группировки медиазапросов
        sort: true                 // сортировка от минимального значения
      })
    ]))
    .pipe(gulp.dest("build/css"))   // указывает, куда положить файл после выполнения задач
    .pipe(minify())                 // включение плагина для минификации файла css
    .pipe(gulp.dest("build/css"))   // указывает, куда положить переименованный минифицированный файл
    .pipe(server.reload({stream: true})); // перезагрузка браузера
});

gulp.task("scripts", function() {  // минификация js
  return gulp.src("js/*.js")
    .pipe(uglify())                // плагин минификации js
    .pipe(gulp.dest("build/js"));
});

// задача для создания svg спрайтов
gulp.task("symbols", function() {
  return gulp.src("build/img/*.svg")
    .pipe(svgmin())                    // плагин минификации SVG файлов
    .pipe(gulp.dest("build/img"));
});

// задача для оптимизации картинок
gulp.task("images", function() {
  return gulp.src("build/img/**/*.{png,jpg,gif}")
    .pipe(imagemin([                            // плагин
      imagemin.optipng({optimizationLevel: 3}), // параметры качества оптимизиции
      imagemin.jpegtran({progressive: true})
    ]))
    .pipe(gulp.dest("build/img"));
});

// настройка "живого сервера"
gulp.task("serve", function() {   //задача по запуску сервера
  server.init({
    server: "build",              // папка из которой он должен запуститься
  });

  gulp.watch("sass/**/*.{scss,sass}", ["style"]);     // отслеживание изменения файлов sass и запуск задачи style
  gulp.watch("js/**/*.js", ["scripts"]);       // при изменении js копируем в build, минифицируем и перезагружаем сервер
  gulp.watch("build/js/**/*.js").on("change", server.reload);
  gulp.watch("*.html", ["copyhtml"]);                // при изменении html запустить зачаду copyhtml
  gulp.watch("build/*.html").on("change", server.reload);  // при изменении файлов html в папке build  перезагрузить сервер
});

gulp.task("copyhtml", function() {
  return gulp.src("*.html")        // откуда копировать html и js
    .pipe(gulp.dest("build/"));      // куда копировать файлы
});


//-----------------------------------------------
gulp.task("copy", function() {     // задача по копированию исходных файлов сайта в папку build
  return gulp.src([
    "fonts/**/*.{woff,woff2}",     // что копировать
    "img/**",
    "js/**",
    "documents/**",
    "images/**",
    "*.txt",
    "*.xml",
    "*.html"
  ], {
    base: "."                     // указываем что исходные папки должны остаться (файловая структура должна остаться как в исходниках)
  })
    .pipe(gulp.dest("build"));      // куда копировать
});

//-----------------------------------------------
gulp.task("clean", function() {    // задача по удалению папки build
  return del("build");
});

//-----------------------------------------------
gulp.task("build", function(fn) {   // задача по сборке
  run(
    "clean",                        // удаляем папку
    "copy",                         // копируем исходные файлы
    "copycss",
    "top_style_index",
    "style",                        // проводим все оптимизации
    "images",
    "symbols",
    "scripts",
    fn                               // выход из задачи
  );
});
