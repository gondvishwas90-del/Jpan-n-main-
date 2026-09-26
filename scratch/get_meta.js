const https = require('https');
https.get('https://in.pinterest.com/pin/1147643917679741990/', {
  headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
}, (res) => {
  let data = '';
  res.on('data', c => data += c);
  res.on('end', () => {
    const title = data.match(/<title>([^<]+)<\/title>/i);
    const desc = data.match(/<meta\s+name="description"\s+content="([^"]+)"/i);
    console.log('TITLE:', title ? title[1] : 'none');
    console.log('DESC:', desc ? desc[1] : 'none');

    const m = data.match(/https:\/\/v1\.pinimg\.com\/videos\/[^\s"']+/g);
    console.log('Pin videos:', m);

    // search for author / behance / dribbble / site links in data
    const links = data.match(/https?:\/\/(?:www\.)?(?:behance\.net|dribbble\.com|awwwards\.com)[^\s"']+/g);
    console.log('Design links:', links ? [...new Set(links)] : 'None');
  });
});
