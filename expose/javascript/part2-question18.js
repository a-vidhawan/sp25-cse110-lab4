function printCurrentTime()
{
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

printCurrentTime();
setInterval(printCurrentTime, 1000);