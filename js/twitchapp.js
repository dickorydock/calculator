

var  twitchNames=["freecodecamp", "ESL_SC2", "comster404"];
var htmlstring = "";
var streamerName, streamerIcon, streamerDesc, streamerInfo, streamerGame, streamerLevel, streamerLinkOpen, streamerLinkClose; 

streamerArray = [["streamer1", "icon1", "ADCink1", "desc1"]
                 ,["streamer2", "icon2", "link2", "desc2"]
                 ,["streamer3", "icon3", "link3", "desc3"]
                 ,["streamer4", "icon4", "link4", "desc4"]];

var streamerArray2 = [];
var streamerIndividual = [];
// var addToHTML = function(streamerIcon, streamerLinkOpen, streamerName, streamerLinkClose, streamerDesc){
  
//           } ; 

for (i=0;i<twitchNames.length;i++){

addStreamer(1, function(desc){
  // streamerArray2.push("what");
});
addStreamer(2, function(desc){
  // streamerArray2.push("what");
});
    streamerName = twitchNames[i];
    streamerIcon= 'Icon'+i;
    // streamerLinkOpen="<a href='http://www.google.com' target='blank'>";
    streamerLinkOpen = "<a target='blank' href = 'https://www.twitch.tv/"+streamerName+"'>";
    streamerLinkClose = "</a>";
var streamerDesc = "hi";

streamerArray2.push("why");

}

writelog();

console.log(streamerArray);
console.log(streamerArray2);

console.log(streamerArray);
console.log(streamerArray2);
console.log("this should be second");
console.log(htmlstring);
 $("#replaceme").html("what are ffyou");



for (i=0;i<streamerArray.length; i++){
 htmlstring +='<div class="row streamerrow" id="'
            +streamerArray[i][0]
            +'"><div class="col-xs-1">'
            +streamerArray[i][1]
            +'</div><div class="col-xs-3">'
            +streamerArray[i][2]
            +'</a></div><div class="col-xs-8  ">'
            +streamerArray[i][3]
            +'</div></div>';


}

 $("#fulllisting").html(htmlstring); 
  console.log("desc is"+ streamerDesc);




function writelog(){
console.log("this should be first");
};


function addStreamer (i, callback){
$.getJSON('https://api.twitch.tv/kraken/streams/'+twitchNames[i]+'?callback=?', function(data) {
  console.log(data); 
  console.log("sdncjlancd");
  if (data.stream==null){
    streamerDesc = "Offline" ;
  }
  if (data.error){
    streamerDesc = "Account Closed";
    streamerLinkOpen = "";
    streamerLinkClose = "";
  }
  if (data.stream != null){
      streamerGame = data.stream.game;
      streamerLevel = data.stream.channel.status;
      streamerDesc = streamerGame +": "+streamerLevel;
      // streamerArray2.push(streamerDesc);  
  }
  streamerLink = streamerLinkOpen + streamerName + streamerLinkClose;
  streamerInfo =[streamerName, streamerDesc, streamerLink, streamerIcon] ; 
  streamerArray2.push([streamerName, streamerIcon, streamerLink, streamerDesc]);
  callback(streamerDesc);
    console.log("whyyyyy");

  // streamerIndividual = [];
  // streamerArray2.push("inside");
});

  // streamerIndividual = [];
  streamerArray2.push([streamerDesc, twitchNames[i]]);
}

console.log("last array is");
console.log(streamerArray2);




var  twitchNames=["freecodecamp", "ESL_SC2", "comster404"];
var htmlstring = "";
var streamerName, streamerIcon, streamerDesc, streamerInfo, streamerGame, streamerLevel, streamerLinkOpen, streamerLinkClose; 

streamerArray = [["streamer1", "icon1", "ADCink1", "desc1"]
                 ,["streamer2", "icon2", "link2", "desc2"]
                 ,["streamer3", "icon3", "link3", "desc3"]
                 ,["streamer4", "icon4", "link4", "desc4"]];

var streamerArray2 = [];

for (i=0;i<streamerArray.length; i++){
 htmlstring +='<div class="row streamerrow" id="'
            +streamerArray[i][0]
            +'"><div class="col-xs-1">'
            +streamerArray[i][1]
            +'</div><div class="col-xs-3">'
            +streamerArray[i][2]
            +'</a></div><div class="col-xs-8  ">'
            +streamerArray[i][3]
            +'</div></div>';


}

i=1;

//  var jsonresult=null;
//     $.ajax({
//       dataType: "jsonp",
//       url: 'https://api.twitch.tv/kraken/streams/'+twitchNames[i]+'?callback=?', 
//       success: function(result){
//       console.log('it worked!');
// console
//       .log();
//       jsonresult = result;
//       printAjax(result);
//       },
//       error: function(error){
//         console.log("oh no");
//       }
//     });

for (i=0;i<3;i++){

  console.log(i);
  streamerName = twitchNames[i];
$.getJSON('https://api.twitch.tv/kraken/streams/'+twitchNames[i]+'?callback=?', function(data) {

  streamerLinkOpen = "<a target='blank' href = 'https://www.twitch.tv/"+streamerName+"'>";
  streamerLinkClose = "</a>";

  if (data.stream==null){
    streamerDesc = "Offline" ;
  }
  if (data.error){
    streamerDesc = "Account Closed";
    streamerLinkOpen = "";
    streamerLinkClose = "";
  }
  if (data.stream != null){
      streamerGame = data.stream.game;
      streamerLevel = data.stream.channel.status;
      streamerDesc = streamerGame +": "+streamerLevel;
      // streamerArray2.push(streamerDesc);  
  }

  streamerLink = streamerLinkOpen + streamerName + streamerLinkClose;

  streamerArray2.push([twitchNames[i],streamerDesc, streamerLink]);
  console.log(data); 
  console.log("before");
  console.log(i);
  console.log(twitchNames[2]);
  console.log("after");
  console.log(streamerArray2);
});

}
console.log("this should be second");

 $("#fulllisting").html(htmlstring); 
  console.log("desc is"+ streamerDesc);
