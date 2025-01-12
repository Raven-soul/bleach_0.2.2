function getTxt(){
  debugger;

    $.ajax({
      url:'text.txt',
      success: function (data){
        alert(data);
        //parse your data here
        //you can split into lines using data.split('\n') 
        //an use regex functions to effectively parse it
      }
    });
  }

// function getTxt_fetch(){
//   var myRequest = new Request("http://localhost/text.txt");

//   fetch(myRequest)
//     .then(function (response) {
//       return response.blob();
//     })
//     .then(function (response) {
//       // var objectURL = URL.createObjectURL(response);
//       // myImage.src = objectURL;
//       alert(response);
//     });
// }