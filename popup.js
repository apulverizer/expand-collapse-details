// Copyright (c) 2017 Aaron Pulver

// process the click on the pop
function process(e) {
  chrome.tabs.executeScript(null,
      {code:
        `var action = "` + e.target.id + `";
        var detailsTags = document.getElementsByTagName("details");
        for (let details of detailsTags){
          if (action == "expand"){
            if (!details.hasAttribute('open')){
              details.setAttribute('open',null);
            }
          }
          else if (action == "collapse"){
            if (details.hasAttribute('open')){
              details.removeAttribute('open');
            }
          }
        }`
      });
  window.close();
}

// add event handler to popup divs
document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].addEventListener('click', process);
  }
});

