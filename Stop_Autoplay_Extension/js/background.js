chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
        let url = details.url;        
        let substring = "&list=WL";
        let index = url.indexOf(substring);
        new_url = url.slice(0,index);

        if(index != -1){
            new_url = url.slice(0,index);
            chrome.tabs.update(details.tabId, {url: new_url});
        }

});

