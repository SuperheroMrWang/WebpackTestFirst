// Greeter.js
/*module.exports = function() {
  var greet = document.createElement('div');
  greet.textContent = "Hello~ Hi~ there and greetings!";
  return greet;
};*/

/*var config = require("../public/config.json");
module.exports = function() {
	var greet = document.createElement('div');
	greet.textContent = config.greetText;
	return greet;
}*/

//ES6语法
import React, {Component} from 'react'
import config from './config.json';
import styles from './Greeter.css'; //导入.root css

class Greeter extends Component{
	render() {
		return (
			<div className={styles.root}> //添加类名
				{config.greetText}
			</div>
		);
	}
}

export default Greeter