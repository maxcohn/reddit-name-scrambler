
function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

// generate a ranodm username to replace the actual username
newName = makeid(10);

// get user name from this given point. If Reddit UI changes, this will have to
// be updated
let el = document.querySelector('.header-user-dropdown span span span span');
userName = el.textContent;
el.textContent = newName;


// main loop
// every 5 seconds, go through all `a` tags and replace their text if it is the
// original username
setInterval(function(){
    document.querySelectorAll('a').forEach(n => n.textContent = (n.textContent.includes(userName) ? newName : n.textContent));
}, 5000);

//document.querySelectorAll('a').forEach(n => n.textContent = 'ASDASD');
//const delay = ms => new Promise(res => setTimeout(res, ms));
//await delay(7000);
//console.log('asdasdasdasd');
