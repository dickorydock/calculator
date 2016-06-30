
//adding number buttons
function addI(i){
  var buttonName  =  "#button"+i;
  $(buttonName).click(function(){
   var htmlstring = $(".screen").html();
   htmlstring+=i;
   $(".screen").html(htmlstring);
   });
}

for (i=0;i<10;i++){
  addI(i);
 }


//individual operation buttons
$("#buttonplus").click(function(){
   var htmlstring = $(".screen").html();
   htmlstring+="+";
  $(".screen").html(htmlstring);
})

$("#buttonminus").click(function(){
   var htmlstring = $(".screen").html();
   htmlstring+="-";
  $(".screen").html(htmlstring);
})

$("#buttontimes").click(function(){
   var htmlstring = $(".screen").html();
   htmlstring+="*";
  $(".screen").html(htmlstring);
})

$("#buttondivide").click(function(){
   var htmlstring = $(".screen").html();
   htmlstring+="/";
  $(".screen").html(htmlstring);
})

$("#buttonCE").click(function(){
   var htmlstring = $(".screen").html();
   htmlstring=htmlstring.substr(0,htmlstring.length-1);
  $(".screen").html(htmlstring);
})


$("#buttonAC").click(function(){
   var htmlstring = $(".screen").html();
   htmlstring=htmlstring.substr(0,htmlstring.length-1);
  $(".screen").html("");
})

var equalCalc = function (){
  var htmlstring = $(".screen").html();
  var minusArray = htmlstring.match(/\d-/g);
  if (minusArray != null){

  //replace - with +- so that we can split by plus signs
  for (i=0; i<minusArray.length;i++){
    htmlstring = htmlstring.replace(minusArray[i], minusArray[i].substr(0,1)+"+-");
    htmlstring = htmlstring.replace("---", "-");
    htmlstring = htmlstring.replace("--", "");
  }
  }
  addArray = htmlstring.split("+");
  
  //setting initial 'solution'
  var htmlNum = 0;

  //split by * and /, then multiply and divide until you get each individual component that will be added/subtracted
  for (var i=0; i<addArray.length;i++){
  multArray = addArray[i].split("*");
  multProduct = 1;

  for (var j=0; j<multArray.length;j++){
    var divArray = multArray[j].split("/")
    var divQuotient = divArray[0] ; 
    for (var k=1; k<divArray.length; k++){
      divQuotient = divQuotient/divArray[k];
    }
    multProduct *= parseFloat(divQuotient);
  }

  htmlNum +=parseFloat(multProduct);
  }

  return htmlNum;

};


$("#buttonequal").click(function(){
  replaceNum = equalCalc();
  $(".screen").html(replaceNum);
  });


$("#buttonrecip").click(function(){
  replaceNum = equalCalc();
  $(".screen").html(1/replaceNum);
  });
