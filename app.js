import urlJoin from 'proper-url-join';
const exec = require('child-process-promise').exec;
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
		exec(cmdStr).then(() => {
			resolve(`${outputDir}/${_outputName}.mp3`);
		}).catch(err => {
			reject(new Error('error:' + err));
			// console.log(`transform to mp3 success!  ${normalize(filepath)}->${urlJoin(outputDir, _outputName + '.mp3')}`);
		})
	});
}

module.exports = amrToMp3;
