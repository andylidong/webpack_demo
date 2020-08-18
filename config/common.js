const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');



const appDirectory = fs.realpathSync(process.cwd());

// 文件的路径
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

// 获取排版
const getHtmlPlugins = (entry) => {
  console.log('entry: ', entry);
  if (!entry || entry.length === 0) {
    console.error('暂无编译的入口');
    return;
  }
  return entry.map(item => {
    return new HtmlWebpackPlugin({
      filename: `${item}.html`,
      template: 'public/index.html', // 以src/目录下的index.html为模板打包
      chunks: [item]
    });
  });
};


const getSpa = () => {
  return [
    'web',
    'app'
  ];
};

const getAPI = () => {
  const nodeEnv = process.env.NODE_ENV || 'development';
  const env = {
    development: {
      IMAGE_ADDRESS: 'http://localhost:9000',
    },
    production: {
      IMAGE_ADDRESS: 'http://localhost:5000/dist',
    },
  };
  return env[nodeEnv];
}

module.exports = {
  resolveApp,
  getHtmlPlugins,
  getSpa,
  getAPI
};
