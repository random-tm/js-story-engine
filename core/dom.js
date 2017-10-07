core.dom = {};

core.dom.setElementTextById = function(id, text){
  var ele = document.getElementById(id);
  ele.innerHTML = text;
}

//Based loosely off of: https://stackoverflow.com/questions/17636528/how-do-i-load-an-html-page-in-a-div-using-javascript
core.dom.injectPage = function(id, url){
  var ele = document.getElementById(id);
  var dataString = '<object type="text/html" style="width:100%; height:100%" data="' + url + '" ></object>';
  ele.innerHTML= dataString;
}

core.dom.processVisible = function(){
  var allElements = document.getElementsByTagName("*");

  for (var i = 0; i < allElements.length; i++) {
    var ele = allElements[i];
    var visAttr = ele.getAttribute("visible");
    if(visAttr){
      console.log(visAttr);
      if(!eval(visAttr)){
        ele.style.display = "none";
      }
    }
  }
}
