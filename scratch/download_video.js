const https = require('https');
const fs = require('fs');

const file = fs.createWriteStream('scratch/video.mp4');
https.get('https://v1.pinimg.com/videos/iht/expMp4/e3/54/a3/e354a38f14d9cf824f2b4a73a11ad45c_t4.mp4', (response) => {
  response.pipe(file);
  file.on('finish', () => {
    file.close(() => {
      console.log('Video downloaded successfully, size:', fs.statSync('scratch/video.mp4').size);
    });
  });
}).on('error', (err) => {
  fs.unlink('scratch/video.mp4');
  console.error('Error downloading:', err.message);
});
