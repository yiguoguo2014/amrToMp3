import urlJoin from 'proper-url-join';
// const execa = require('execa');
const pathParse = require('path-parse');
const normalize = require('normalize-path');
const ffmpegPath = require('ffmpeg-static');

function amrToMp3 (filepath, outputDir = './src/mp3', outputName) {
	return new Promise((resolve, reject) => {
		const { ext, name: filename } = pathParse(filepath);
		// http://xmqvip.oss-cn-hangzhou.aliyuncs.com/other/images/2018/12/11/1544497148360.1526463056869.amr
		if (ext.toLocaleLowerCase() != '.amr') {
			console.log(`${filepath} is not a .amr file`);
			reject(new Error(`${filepath} is not a .amr file`));
			return;
		}
		const _outputName = outputName || filename;
		const cmdStr = `${ffmpegPath} -y -i "${normalize(filepath)}" -acodec libmp3lame -ar 24000 -vol 500 -ab 128 "${urlJoin(outputDir, _outputName + '.mp3')}"`;
		return cmdStr
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
