var jQueryEnabled,BannerType,bckColor,fontColor, fontSize, buttonColors, exitTF, linkToDonate, text, buttonText;

if(bckColor != null){
    bckColor = bckColor;
}else{
    bckColor = "#000";
}

if(fontColor != null){
    fontColor = fontColor;
}else{
    fontColor = "#fff";
}

if(fontSize != null){
    fontSize = fontSize;
}else{
    fontSize = "1.3em";
}

if(buttonColors != null){
    buttonColors = buttonColors;
}else{
    buttonColors = [
        "#fff",
        "#000"
    ];
}

if(linkToDonate != null){
    linkToDonate = linkToDonate
}else{
    linkToDonate = "https://secure.actblue.com/donate/ms_blm_homepage_2019"
}

if(exitTF){
    exitTF = "<span id='close'>x</span>"
}else{
    exitTF = ""
}


if(text != null){
    text = text;
}else{
    text = "#BLACKLIVESMATTER"
}

if(buttonText != null){
    buttonText = buttonText;
}else{
    buttonText = "#SUPPORT"
}


if(jQueryEnabled){
    document.write("<script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js \" ></script>")
    console.log("jQuery enabled");
}else{
        console.log("jQuery not enabled");
}


document.write("<style>@font-face {font-family: Dosis;src: url(fonts/Dosis-Regular.ttf);} #Banner{font-family:Dosis;}</style>")
switch(BannerType) {
        case "insertToTop":
            insertToTop()
          break;
        case "insertToBottom":
            insertToBottom()
          break;
        case "popUpModel":
            popUpModel()
          break;

        case "sideWindowLeftTop":
            sideWindowLeftTop()
          break;

        case "sideWindowLeftBottom":
            sideWindowLeftBottom()
          break;

        case "sideWindowRightTop":
            sideWindowRightTop()
          break;

        case "sideWindowRightBottom":
            sideWindowRightBottom()
          break;

        default:
          console.log("Please enter a banner type")
}

function insertToTop(){
      $("body").prepend("<div id='Banner'><p>"+text+"</p><a id='bannerBtn' href='"+linkToDonate+"' target='_blank'>"+ buttonText+"</a>" +exitTF+"</div>");
    document.write("<style>#Banner{text-align:center;width:100%; padding:1.5em; background-color:" + bckColor + ";color:"+fontColor+"; font-size:" +fontSize+";} #bannerBtn{background:" +buttonColors[0]+"; color:" + buttonColors[1]+"; padding:15px; font-weight:bold;} #Banner > p, #Banner > span{vertical-align: top;display: inline-block; padding: 0 0.8em 0 0.8em;margin: 0;}span#close {font-weight: bold;cursor: pointer;float: right;color:"+fontColor+";}</style>");
}


function insertToBottom(){
    $("body").append("<div id='Banner'><p>"+text+"</p><a id='bannerBtn' href='"+linkToDonate+"' target='_blank'>"+ buttonText+"</a>" +exitTF+"</div>");
    document.write("<style>#Banner{text-align:center;width:100%; padding:1.5em; background-color:" + bckColor + ";color:"+fontColor+"; font-size:" +fontSize+";} #bannerBtn{background:" +buttonColors[0]+"; color:" + buttonColors[1]+"; padding:15px; font-weight:bold;} #Banner > p, #Banner > span{vertical-align: top;display: inline-block; padding: 0 0.8em 0 0.8em;margin: 0;}span#close {font-weight: bold;cursor: pointer;float: right;color:"+fontColor+";}</style>");  
}


function popUpModel(){
    $("body").append("<div id='bannerBCKG'><div id='Banner'><p>"+text+"</p><a id='bannerBtn' href='"+linkToDonate+"' target='_blank'>"+ buttonText+"</a>" +exitTF+"</div></div>");
    document.write("<style>div#bannerBCKG {position: fixed;top: 0;width: 100%;height: 100%;background: rgba(0, 0, 0, 0.35);}#Banner{text-align:center;width:100%; padding:1.5em; background-color:" + bckColor + ";color:"+fontColor+"; font-size:" +fontSize+";    max-width: 500px;position: absolute;top: 50%;transform: translateY(-50%);margin: auto;left: 0;right: 0;} #bannerBtn{display: block;background:" +buttonColors[0]+"; color:" + buttonColors[1]+"; padding:15px; font-weight:bold;} #Banner > p, #Banner > span{vertical-align: top; padding: 0.8em 0 2.8em 0;margin: 0;}span#close {font-weight: bold;cursor: pointer;color:"+fontColor+";    position: absolute;top: -10px;right: 10px;}</style>");  
}

function sideWindowLeftTop(){
    $("body").append("<div id='Banner'><p>"+text+"</p><a id='bannerBtn' href='"+linkToDonate+"' target='_blank'>"+ buttonText+"</a>" +exitTF+"</div>");
    document.write("<style>#Banner{text-align:center;width:100%; padding:1.5em; background-color:" + bckColor + ";color:"+fontColor+"; font-size:" +fontSize+";    max-width: 500px;position: fixed;top: 0;left: 0;} #bannerBtn{display: block;background:" +buttonColors[0]+"; color:" + buttonColors[1]+"; padding:15px; font-weight:bold;} #Banner > p, #Banner > span{vertical-align: top; padding: 0.8em 0 2.8em 0;margin: 0;}span#close {font-weight: bold;cursor: pointer;color:"+fontColor+";    position: absolute;top: -10px;right: 10px;}</style>");  
}


function sideWindowLeftBottom(){
    $("body").append("<div id='Banner'><p>"+text+"</p><a id='bannerBtn' href='"+linkToDonate+"' target='_blank'>"+ buttonText+"</a>" +exitTF+"</div>");
    document.write("<style>#Banner{text-align:center;width:100%; padding:1.5em; background-color:" + bckColor + ";color:"+fontColor+"; font-size:" +fontSize+";    max-width: 500px;position: fixed;bottom: 0;left: 0;} #bannerBtn{display: block;background:" +buttonColors[0]+"; color:" + buttonColors[1]+"; padding:15px; font-weight:bold;} #Banner > p, #Banner > span{vertical-align: top; padding: 0.8em 0 2.8em 0;margin: 0;}span#close {font-weight: bold;cursor: pointer;color:"+fontColor+";    position: absolute;top: -10px;right: 10px;}</style>");  
}


function sideWindowRightTop(){
    $("body").append("<div id='Banner'><p>"+text+"</p><a id='bannerBtn' href='"+linkToDonate+"' target='_blank'>"+ buttonText+"</a>" +exitTF+"</div>");
    document.write("<style>#Banner{text-align:center;width:100%; padding:1.5em; background-color:" + bckColor + ";color:"+fontColor+"; font-size:" +fontSize+";    max-width: 500px;position: fixed;top: 0;right: 0;} #bannerBtn{display: block;background:" +buttonColors[0]+"; color:" + buttonColors[1]+"; padding:15px; font-weight:bold;} #Banner > p, #Banner > span{vertical-align: top; padding: 0.8em 0 2.8em 0;margin: 0;}span#close {font-weight: bold;cursor: pointer;color:"+fontColor+";    position: absolute;top: -10px;right: 10px;}</style>");  

}


function sideWindowRightBottom(){
    $("body").append("<div id='Banner'><p>"+text+"</p><a id='bannerBtn' href='"+linkToDonate+"' target='_blank'>"+ buttonText+"</a>" +exitTF+"</div>");
    document.write("<style>#Banner{text-align:center;width:100%; padding:1.5em; background-color:" + bckColor + ";color:"+fontColor+"; font-size:" +fontSize+";    max-width: 500px;position: fixed;bottom: 0;right: 0;} #bannerBtn{display: block;background:" +buttonColors[0]+"; color:" + buttonColors[1]+"; padding:15px; font-weight:bold;} #Banner > p, #Banner > span{vertical-align: top; padding: 0.8em 0 2.8em 0;margin: 0;}span#close {font-weight: bold;cursor: pointer;color:"+fontColor+";    position: absolute;top: -10px;right: 10px;}</style>");  

}



$("span#close").on("click", function(){
    $("#bannerBCKG").fadeOut("slow");
    $("#Banner").fadeOut("slow");
})