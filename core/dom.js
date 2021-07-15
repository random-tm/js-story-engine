class CoreDom {
  constructor() {

  }

  setElementTextById = (id, text) => {
    const ele = document.getElementById(id);
    ele.innerHTML = text;
  }

  //Based loosely off of: https://stackoverflow.com/questions/17636528/how-do-i-load-an-html-page-in-a-div-using-javascript
  injectPage = (id, url, callback) => {
    const ele = document.getElementById(id);
    request = new XMLHttpRequest();
    request.open("GET", url);
    request.send(null);
    request.onreadystatechange = () => {
      if(request.readyState == 4){
        ele.innerHTML = request.responseText;
        callback();
      }
    }
  }

  processVisible = () => {
    const allElements = document.getElementsByTagName("*");
  
    for (let ele of allElements) {
      const visAttr = ele.getAttribute("visible");
      if(visAttr){
        if(!eval(visAttr)){
          ele.style.display = "none";
        }
      }
    }
  }

}

core.dom = new CoreDom();
