/**
 * 奖品设置
 * type: 唯一标识，0是默认特别奖的占位符，其它奖品不可使用
 * count: 奖品数量
 * title: 奖品描述
 * text: 奖品标题
 * img: 图片地址
 */
const fs = require('fs');
const path = require('path');

const year = new Date().getFullYear() + "";
const settingsPath = path.join(__dirname, '..', 'product', 'data', year, 'settings', 'settings.json');
const settings = JSON.parse(fs.readFileSync(settingsPath, 'utf8'));
const prizes = settings.prizes;
const COMPANY = settings.COMPANY;


module.exports = {
  prizes,
  COMPANY
};
