var currentDate = new Date();
var currentYear = currentDate.getFullYear();
function isLeapYear(){
    var isLeapYear = (currentYear % 4 === 0 && currentYear % 100 !== 0) || (currentYear % 400 === 0);
    return isLeapYear;
}
function noOfDays(){
    if(isLeapYear()){
       return 366;
    }
        else {
          return 365;
        }
    }

function calculateSeconds(){
    
    var totalseconds= noOfDays()*60*60*24;
    var start=new Date(currentYear,0,1);
    var end=new Date();
    var diff=end-start;
    diff/=1000;
    return diff;
    
    }
    
    var progress = setInterval(updateProgressBar, 1000);
    var a=0;
     function updateProgressBar() {
        var secondsPassed = calculateSeconds();
        var percentage= (secondsPassed / (noOfDays() * 60 * 60 * 24)) * 100;
        var remaining=100-percentage;

        $('#progress .progress-text').text(percentage.toFixed(7)+'%')| $('#progress .progress-text').text(remaining.toFixed(7)+'%');
     
        $('#progress .progress-bar').css({ width: percentage.toFixed(7) + '%' });
        if(a==100){
            clearInterval(progress);
        }else{
        a +=10;
        }

    } 
    

   


