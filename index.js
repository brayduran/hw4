var url = 'https://newsapi.org/v2/top-headlines?' +
          'sources=bbc-news&' +
          'apiKey=f0a43bff3c1348b1b60bbfeaa5bca957';

var req = new Request(url);
fetch(req)
    .then(function(response) {
      console.log(response.json());
    })
