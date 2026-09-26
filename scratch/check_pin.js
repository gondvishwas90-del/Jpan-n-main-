const https = require('https');

https.get('https://in.pinterest.com/pin/1147643917679741990/', {
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
  }
}, (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const videoMatches = data.match(/https:\/\/[^"'\s]+\.mp4[^"'\s]*/g);
    console.log('Videos:', videoMatches ? [...new Set(videoMatches)] : 'None');
    
    const ogVideo = data.match(/<meta\s+property="og:video"[^>]+content="([^"]+)"/i);
    console.log('OG Video:', ogVideo ? ogVideo[1] : 'None');

    const jsonLd = data.match(/<script type="application\/ld\+json">([^<]+)<\/script>/g);
    if (jsonLd) {
      jsonLd.forEach(j => console.log('JSON LD:', j.slice(0, 300)));
    }
  });
});
