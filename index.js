const https = require('https');

// Get the text input from the command line arguments
let inputText = process.argv.slice(2).join(' ');

if (inputText) {
  // const url = 'https://example.com';  // Replace with your desired URL
  const url = 'https://fastapi-text-asciify-npt1siwyq-ganmahmud.vercel.app/api/?text='
              // 'https://fastapi-text-asciify-npt1siwyq-ganmahmud.vercel.app/asciify/?text=Jarrod%20is%20a%20big%20STINKI'

  https.get(`${url}${inputText}`, (res) => {
    let data = '';

    // A chunk of data has been received.
    res.on('data', (chunk) => {
      data += chunk;
    });

    // The response has been fully received.
    res.on('end', () => {
      console.log(JSON.parse(data).art);
    });

  }).on('error', (err) => {
    console.log('Error:', err.message);
  });
} else {
  console.log('Please provide text as input.');
}

