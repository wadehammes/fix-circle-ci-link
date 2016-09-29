chrome.runtime.sendMessage({}, function(response) {
  var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);

      // Get Elements
      var anchors = document.getElementsByClassName('merge-status-details');
      if (anchors) {
        anchors[0].setAttribute('target', '_blank');
      }
    }
  }, 10);
});
