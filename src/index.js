import _ from 'lodash';

// 本应该是报错的, 因为css文件并不是JS模块, 其语法并不能够被JS支持
// 但webpack通过loader处理了它, 使得它可以作为一个JS模块被加载
import './index.css';

// 与上述相同
import MyImage from './potato_prince.jpg'

function component() {
  const element = document.createElement('div');

  // 执行这一行需要引入 lodash（目前通过 script 脚本引入）
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  // 将图像添加到已经存在的 div 中。
  const image = new Image();
  image.src = MyImage;

  element.appendChild(image);

  return element;
}

document.body.appendChild(component());