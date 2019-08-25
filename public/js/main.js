$(document).ready(function () {
  if (typeof(Storage) !== "undefined") {
    if(!localStorage.parrotLevel){
      localStorage.parrotLevel = 0;
      localStorage.sosig = 0;
    }
    if(localStorage.dateStamp){
      var today = new Date();
      var dateStamp = new Date(Date.parse(localStorage.dateStamp));
      dateStamp.setDate(dateStamp.getDate()+5);
      if(today > dateStamp) {
        localStorage.removeItem("dateStamp");
        localStorage.parrotLevel = 0;
        localStorage.sosig = 0;
      }
    }

    $('#partyParrot').attr("src","img/parrot-"+localStorage.parrotLevel+".gif");
    $('#sosigEarned').html(localStorage.sosig);
    $('body').css('backgroundColor','#' + localStorage.color);

  } else {
    window.location = "404.html";
  }
});

function levelUpParrot(){
  if(Number(localStorage.sosig) == 0){
    var dateStamp = new Date();
    localStorage.dateStamp = dateStamp.toString();
  }
  if (Number(localStorage.parrotLevel) < 4){
    localStorage.parrotLevel = Number(localStorage.parrotLevel)+1;
    $('#partyParrot').attr("src","img/parrot-"+localStorage.parrotLevel+".gif");
  }
  localStorage.sosig = Number(localStorage.sosig)+1;
  $('#sosigEarned').html(localStorage.sosig);
}

function levelDownParrot() {
  if (Number(localStorage.parrotLevel) > 0){
    localStorage.parrotLevel = Number(localStorage.parrotLevel)-1;
    $('#partyParrot').attr("src","img/parrot-"+localStorage.parrotLevel+".gif");
  }
}

$('#colorSelector').ColorPicker({
  color: '#0000ff',
	onShow: function (colpkr) {
		$(colpkr).fadeIn(500);
		return false;
	},
	onHide: function (colpkr) {
		$(colpkr).fadeOut(500);
		return false;
	},
	onChange: function (hsb, hex, rgb) {
    localStorage.color = hex;
    $('body').css('backgroundColor', '#' + localStorage.color);
	}
});
