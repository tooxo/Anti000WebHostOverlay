function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
} // Function needed, because the overlay loads with delay, so the remover needs to do so as well.

sleep(1200).then(() => {
    var divs = document.getElementsByTagName("DIV"); //Put all divs in one array.
    for (let o = 0; o < divs.length; o++){
        try { //Checks if div equals the one used by 000webhost.
            if (divs[o].getAttribute("style").toString() === "text-align: right;position: fixed;z-index:9999999;bottom: 0; width: 100%;cursor: pointer;line-height: 0;display:block !important;"){
                divs[o].parentNode.removeChild(divs[o]);
            }
        }catch (e) {} //Catch needed, because the script stops at every other div without it.
    }
    console.log("[Anti000] Im Done."); //Logs the end.
});
