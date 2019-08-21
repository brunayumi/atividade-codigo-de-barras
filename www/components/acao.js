$(document).on("click", "#codigoBarra", function (){
    cordova.plugins.barcodeScanner.scan(
      function (result) {
         if(result.text == 280720550){
           $(location).attr("href", "iPad.html");
         } 
      },
      function (error) {
          navigator.notification.alert("Código de barra inválido: " + error);
      },
      {
          preferFrontCamera : false,
          showFlipCameraButton : true, 
          showTorchButton : true,
          torchOn: false, 
          saveHistory: true, 
          prompt : "Place a barcode inside the scan area",
          resultDisplayDuration: 500,
          formats : "QR_CODE,PDF_417,CODE_39", 
          orientation : "landscape",
          disableAnimations : true,
          disableSuccessBeep: false 
      }
   );
});




