chrome.devtools.network.onRequestFinished.addListener(request => {
  request.getContent((body) => {
    if (request.request && request.request.url) {
      if (request.request.url.includes('items.learnosity.com/v2022.1.LTS/activity')) {
        const qdata = JSON.parse(body);
        console.log('Got activity data:', qdata);
        let str = '';
        for (let i = 0; i < qdata.data.apiActivity.items.length; i++) {
          str += qdata.data.apiActivity.items[i].questions[0].options.find(a => a.value == qdata.data.apiActivity.items[i].questions[0].validation.valid_response.value[0]).label + '<br>';
        }
        document.getElementById('content').innerHTML = str;
      }
    }
  });
});