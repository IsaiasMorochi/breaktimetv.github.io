$(document).ready(function(){$(".header-video").each(function(e,i){headerVideo=new HeaderVideo({element:i,media:".header-video__media",playTrigger:".header-video__play-trigger",closeTrigger:".header-video__close-trigger"})})}),$(function(){$("a[href*=#ver]").click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if((e=e.length&&e||$("[name="+this.hash.slice(1)+"]")).length){var i=e.offset().top;return $("html,body").animate({scrollTop:i},1e3),!1}}})}),$(function(){var e=window.navigator.standalone,i=window.navigator.userAgent.toLowerCase(),o=/safari/.test(i);/iphone|ipod|ipad/.test(i)&&(!e&&o||e&&!o||e||o||$("#android-footer").remove())});var useragent=navigator.userAgent||navigator.vendor||window.opera,ismobile=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|zh-cn|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(useragent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(useragent.substr(0,4));if(ismobile)$(".video")[0]&&$("#video-reproduccion").remove();else if($(".video")[0]&&(document.getElementsByClassName("video")[0].style.display="block","breaktimetv.github.io"!=window.location.hostname&&(document.body.innerHTML="")),$(".div-movil")[0]){};var i,close=document.getElementsByClassName("closebtn");for(i=0;i<close.length;i++)close[i].onclick=function(){var e=this.parentElement;e.style.opacity="0",setTimeout(function(){e.style.display="none"},600)};$("#limpiar_busqueda").click(function(){document.getElementById("podria_gustarte").style.display = "block",document.getElementById("input_busqueda").value="",$("#lista").empty(),$("#limpiar_busqueda").hide(),$("#input_busqueda").focus()}),$("#input_busqueda").keyup(function(){$(this).val()?$("#limpiar_busqueda").show():$("#limpiar_busqueda").hide()});
$("#cerrar_busqueda").click(function(){
    document.getElementById("input_busqueda").value="";
    $("#lista").empty();
    document.getElementById("input_listado").value="no";
    $("#limpiar_busqueda").hide();
    history.pushState("", document.title, window.location.pathname);
    document.getElementById("podria_gustarte").style.display = "none";
});

$("#search").click(function(){
    $("#limpiar_busqueda").hide();
    document.getElementById("input_listado").value="si";
    document.getElementById("podria_gustarte").style.display = "block";
  
 
})




window.onhashchange = function(e) {
    var oldURL = e.oldURL.split('#')[1];
  
   
  
    if (oldURL == 'buscar') {
        document.getElementById("input_busqueda").value="";
        $("#lista").empty();
        $("#search_wrapper").removeClass("active");
        $("#search_form").removeClass("active");
         $("#myBody").removeClass("search-overlay");
         document.getElementById("podria_gustarte").style.display = "none";
      e.preventDefault();
      return false;
    }
    //console.log('old:'+oldURL+' new:'+newURL);
  }

  var template = { Title: "", Desc: "Temp Name", Url: "" };

  function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString() + "; path=/";
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1);
      if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
  }
  return "";
}

function isPwa() {
    var displayModes = ["fullscreen", "standalone", "minimal-ui"];
    displayModes.forEach(function(displayMode) {
        if (window.matchMedia('(display-mode: ' + displayMode + ')').matches) {
            return true;
        }
    });
    return false;
}


function checkCookie(PageTitle, PageDescription, PageUrl, portada, fecha_hora ) {

  var newArray = new Array(); /*Temp Array to generate cookie*/
  var tempObject = ""; /*To hold the already exists page data*/
  var arrObject;  /*To store cookie value in a object*/

  if (getCookie("RecentViewList") != '') {
      arrObject = $.parseJSON(getCookie("RecentViewList")); /* Convert string to object */
  }

  if (arrObject != null) {
      $.each(arrObject, function (index, value) {
          if (PageUrl == value.Url) {
              tempObject = { Title: PageTitle, Desc: PageDescription, Url: PageUrl, Portada: portada, Fecha: fecha_hora };
             
            } else {
              newArray.push({ Title: value.Title.toString(), Desc: value.Desc.toString(), Url: value.Url.toString(), Portada: value.Portada, Fecha: value.Fecha  });
            
            }
      });
  }

  if (tempObject != "") {
      newArray.push(tempObject);
  } else {
      if (newArray.length > 45) newArray.splice(0, 1); /*Remove most recent value from array*/
      tempObject = { Title: PageTitle, Desc: PageDescription, Url: PageUrl, Portada: portada, Fecha: fecha_hora };
    
      newArray.push(tempObject);
      
  }

  var stringObj = JSON.stringify(newArray); /*Convert Array to JSON formated string*/
  setCookie("RecentViewList", stringObj, 90);

 
}




  $(document).ready(function(){







  

 

    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;

    
      document.getElementById("pwa").addEventListener('click', (e) => {

        document.getElementById("pwa").style.display = "none";
 
        // Show the prompt
        deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
              console.log('User accepted the A2HS prompt');
              document.getElementById("pwa").style.display = "none";
            } else {
              console.log('User dismissed the A2HS prompt');
              document.getElementById("pwa").style.display = "block";
            }
            deferredPrompt = null;
          });
      });
    });





    var respuesta= isPwa();

    if (window.matchMedia('(display-mode: standalone)').matches) {

      var video_reproduccion = document.getElementById("video-reproduccion");
      if(video_reproduccion){
        $("#video-reproduccion").remove();

      }

      

      var pwa = document.getElementById("pwa");
      if(pwa){
        document.getElementById("pwa").style.display = "none";

      }


      var portada_index = document.getElementById("portada_index");
      if(portada_index){
        document.getElementById("portada_index").style.display = "block";

      }
      var peliculas_series_texto = document.getElementById("peliculas_series_texto");
      if(peliculas_series_texto){
        document.getElementById("peliculas_series_texto").style.paddingTop = "10px";

      }

      var info_index = document.getElementById("info_index");
      if(info_index){
        document.getElementById("info_index").style.display = "block";

      }
        
       
   
    

     

        var filtros = document.getElementById("filtros");
        if(filtros){
          document.getElementById("filtros").style.display = "block";

        }

 
      
    
    }else{

      var ua2 = new UserAgent();

      if(ua2.PC){

        document.getElementById("pwa").style.display = "none";
        var menu_abajo = document.getElementById("menu_abajo");
        if(menu_abajo){
          document.getElementById("menu_abajo").style.display = "none";

        }

      }else{
           document.getElementById("pwa").style.display = "block";
           var menu_abajo = document.getElementById("menu_abajo");
           if(menu_abajo){
             document.getElementById("menu_abajo").style.display = "none";
   
           }

      }

       

    }



    console.log("Es PWA? "+ respuesta);

    if ('serviceWorker' in navigator) {
        console.log('CLIENT: service worker registration in progress.');
        navigator.serviceWorker.register('/service-worker.js').then(function() {
          console.log('CLIENT: service worker registration complete.');
        }, function() {
          console.log('CLIENT: service worker registration failure.');
        });
      } else {
        console.log('CLIENT: service worker is not supported.');
      }

    $("#input_busqueda").on("input", function(){
        // Print entered value in a div box
        var respuesta= $(this).val();
        if(respuesta == ""){
            document.getElementById("podria_gustarte").style.display = "block";
           
           
           }else{
            
            document.getElementById("podria_gustarte").style.display = "none";
               
           }
        
    });


  


  var PageDescription = $("meta[name='description']").attr("content");
  var PageTitle = document.title.replace("é","e");
  var PageUrl = window.location.href;




  if(window.location.pathname === '/historial' || window.location.pathname === '/conexion' || window.location.pathname === '/' || window.location.pathname.includes('/contenido/')  || window.location.pathname.includes('/peliculas/')  || window.location.pathname.includes('/series/')  || window.location.pathname.includes('/netflix/') || window.location.pathname.includes('/todos/') || window.location.pathname === '/informacion' || window.location.pathname === '/politica-privacidad' || window.location.pathname === '/terminos-servicios' || window.location.pathname === '/aviso-legal'){
   
  }else{
    var hoy = new Date();
    var fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
    var fechaYHora = fecha;

    var portada=  document.getElementById("imagen_portada").value;

    if ((typeof document.title !== "undefined") && (typeof $("meta[name='description']").attr("content") !== "undefined")) {
      PageDescription = (typeof $("meta[name='description']").attr("content") !== "undefined") ? PageDescription : "No";
      // alert(PageDescription + "  ::Under On load:   " + PageTitle + "  ::::     " + PageUrl);
      checkCookie(PageTitle.toString(), PageDescription.toString(), PageUrl.toString(), portada, fechaYHora);
  }

  }








});


