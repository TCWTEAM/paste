var request = require('request')
function ghostBin(text) {
  var vurl = "https://ghostbin.com/paste/new"

  var form = {
    'lang':'text',
    'expire':'15d',
    'text':text
  }
  var options = {
    url: vurl,
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/66.0.3359.181 Safari/537.36',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    form: form,
    method: 'POST'
  }
  function callback(error, response, body) {

    var resurl = "https://ghostbin.com" + response.headers['location']
    document.getElementById('reee').value = resurl
    document.getElementById('reee').select()
    document.execCommand("copy")
  }
  request(options, callback)
}

function hasteBin(text) {
  var vurl = "https://hastebin.com/documents"
  var options = {
    url: vurl,
    body: text,
    method: 'POST'
  }
  function callback(error, response, body) {
    var obj = JSON.parse(body)
    var resurl = "https://hastebin.com/" + obj['key']
    document.getElementById('reee').value = resurl
    document.getElementById('reee').select()
    document.execCommand("copy")
  }
  request(options, callback)
}
