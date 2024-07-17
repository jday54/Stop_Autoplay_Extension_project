//this script doesnt work right; it is just for reference;

chrome.tabs.onCreated.addListener(function() {

    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;        
        let substring = "&list=WL";
        let index = url.indexOf(substring);
        new_url = url.slice(0,index);

        if(index != -1){
            new_url = url.slice(0,index);
            chrome.tabs.update({url: new_url});
        }

    });

});
