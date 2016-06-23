
sArray = [];
htmlstring = "";
streamerNames = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "comster404","noobs2ninjas"];
for (i=0;i<streamerNames.length;i++){
  (function(i){
    $.getJSON('https://api.twitch.tv/kraken/streams/'+streamerNames[i]+'?callback=?', function(data) {
      console.log(data);
      console.log("the thing is also");
      // sArray.push("now");
      streamerName = streamerNames[i];
      streamerLinkOpen = "<a target='_blank' href = 'https://www.twitch.tv/"+streamerName+"'>";
      streamerLinkClose = "</a>";
      streamerIcon = "" ; 
      if (data.stream!=null){
        streamerIcon = "<img class = 'img-responsive logo' src ='"+data.stream.channel.logo+"''>";
        console.log("icon at "+streamerIcon);
      }
      if (data.stream==null){
        streamerDesc = "Offline" ;
        streamerDescOrder = 2; 
      }
      if (data.error){
        streamerDesc = "Account Closed";
        streamerLinkOpen = "";
        streamerLinkClose = "";
        streamerDescOrder = 2;
      }
      if (data.stream != null){
        streamerGame = data.stream.game;
        streamerLevel = data.stream.channel.status;
        streamerDesc = streamerGame +": "+streamerLevel;
        streamerDescOrder = 1; 
      }
      streamerLink = streamerLinkOpen + streamerName + streamerLinkClose;
      
      streamIndividual= [streamerNames[i], streamerIcon, streamerLink,streamerDesc, streamerDescOrder];
      sArray.push(streamIndividual);
     

      if (i==streamerNames.length-1){

      sArrayOnline = sArray.filter(isOnline);
      sArrayOffline = sArray.filter(isOffline);

        for (i=0;i<sArrayOnline.length; i++){
          htmlstring +='<div class="row streamerrow" id="'
          +sArrayOnline[i][0]
          +'"><div class="col-xs-1">'
          +sArrayOnline[i][1]
          +'</div><div class="col-xs-3">'
          +sArrayOnline[i][2]
          +'</a></div><div class="col-xs-8  ">'
          +sArrayOnline[i][3]
          +'</div></div>';
        }
        
         for (i=0;i<sArrayOffline.length; i++){
          htmlstring +='<div class="row streamerrow" id="'
          +sArrayOffline[i][0]
          +'"><div class="col-xs-1">'
          +sArrayOffline[i][1]
          +'</div><div class="col-xs-3">'
          +sArrayOffline[i][2]
          +'</a></div><div class="col-xs-8  ">'
          +sArrayOffline[i][3]
          +'</div></div>';
        }
       $("#fulllisting").html(htmlstring);
      }
      })
  }) (i);
}

console.log("the thing is");

 function isOnline(streamer){
            return streamer[4]==1;
            }

 function isOffline(streamer){
            return streamer[4]==2;
            }