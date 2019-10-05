
// Generates random name
function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

// generate a random username to replace the actual username
newName = makeid(10);

// get user name from this given point. If Reddit UI changes, this will have to
// be updated
let el = document.querySelector('.header-user-dropdown span span span span');
userName = el.textContent;
el.textContent = newName;

// every 5 seconds, go through all `a` tags and replace their text if it is the
// original username
setInterval(function(){
    // for each `a` tag, check if it contains the username
    document.querySelectorAll('a').forEach(n => {
        // if it does, replace it with the new name
        if(n.textContent.includes(userName)){
            n.textContent = (n.textContent.includes('u/') ? 'u/' : '') + newName;
        }
    });    
}, 5000);

