const chalk = require('chalk') /* console 颜色 */
const slog = require('single-line-log'); /* 单行打印 console */

class ConsolePlugin1 {
  constructor(options = {}) {
    console.log('options: 1', options);
    this.options = options;
  }

  apply(compiler) {
    console.log('compiler: ', compiler);
    /**
     * Monitor file change 记录当前改动文件
     */
    compiler.hooks.watchRun.tap('ConsolePlugin', (watching) => {
      const changeFiles = watching.watchFileSystem.watcher.mtimes;
      for (let file in changeFiles) {
        console.log(chalk.green('当前改动文件：' + file));
      }
    });
    /**
     *  before a new compilation is created. 开始 compilation 编译 。
     */
    compiler.hooks.compile.tap('ConsolePlugin', () => {
      this.beginCompile();
    });
    /**
     * Executed when the compilation has completed. 一次 compilation 完成。
     */
    compiler.hooks.done.tap('ConsolePlugin', () => {
      this.timer && clearInterval(this.timer);
      const endTime = new Date().getTime();
      const time = (endTime - this.starTime) / 1000;
      console.log(chalk.yellow(' 编译完成'));
      console.log(chalk.yellow('编译用时：' + time + '秒'));
    });
  }

  beginCompile() {
    const lineSlog = slog.stdout;
    let text = '开始编译：';
    /* 记录开始时间 */
    this.starTime = new Date().getTime();
    this.timer = setInterval(() => {
      text += '█';
      lineSlog(chalk.green(text));
    }, 50);
  }
}
// exports = module.exports; exports是module.exports的一个引用，node的简写
module.exports = ConsolePlugin1;
