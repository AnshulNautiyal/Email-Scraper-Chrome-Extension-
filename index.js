

const modifyDOM = () => {
    function getEmail(str){
        return  str.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
    }
    let htmlPage = document.body.innerHTML;
    let emailList = getEmail(htmlPage);
    // console.log(emailList);
    let frag = document.createDocumentFragment();
    emailList && emailList.forEach(item => {
        let p  = document.createElement('p');
        p.append(item);
        frag.append(p);
    });
    console.log(frag)
    return frag;
}
chrome.tabs.executeScript(null,{
    code: `(${modifyDOM})()` 
}, (results) => {
    console.log('Popup script:')
    console.log(results[0]);
});

