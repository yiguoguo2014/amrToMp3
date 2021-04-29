'use strict';

var _properUrlJoin = require('proper-url-join');

var _properUrlJoin2 = _interopRequireDefault(_properUrlJoin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const execa = require('execa');
var pathParse = require('path-parse');
var normalize = require('normalize-path');
var ffmpegPath = require('ffmpeg-static');

function amrToMp3(filepath) {
	var outputDir = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : './src/mp3';
	var outputName = arguments[2];

	return new Promise(function (resolve, reject) {
		var _pathParse = pathParse(filepath),
		    ext = _pathParse.ext,
		    filename = _pathParse.name;
		// http://xmqvip.oss-cn-hangzhou.aliyuncs.com/other/images/2018/12/11/1544497148360.1526463056869.amr


		if (ext.toLocaleLowerCase() != '.amr') {
			console.log(filepath + ' is not a .amr file');
			reject(new Error(filepath + ' is not a .amr file'));
			return;
		}
		var _outputName = outputName || filename;
		var cmdStr = ffmpegPath + ' -y -i "' + normalize(filepath) + '" -acodec libmp3lame -ar 24000 -vol 500 -ab 128 "' + (0, _properUrlJoin2.default)(outputDir, _outputName + '.mp3') + '"';
		return cmdStr;
		// execa(cmdStr).then(() => {
		// 	resolve(`${outputDir}/${_outputName}.mp3`);
		// }).catch(err => {
		// 	reject(new Error('error:' + err));
		// })
		// exec(cmdStr, (err, stdout, stderr) => {
		// 	if (err) {
		// 		// console.log('error:' + stderr);
		// 		reject(new Error('error:' + stderr));
		// 	} else {
		// 		resolve(`${outputDir}/${_outputName}.mp3`);
		// 		// console.log(`transform to mp3 success!  ${path.normalize(filepath)}->${path.join(outputDir, _outputName + '.mp3')}`);
		// 	}
		// });
	});
}

module.exports = amrToMp3;