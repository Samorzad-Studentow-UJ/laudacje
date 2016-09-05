/* scrips for ksi history displaying */

function shouldBePosFixed(parent, child){
  //console.log($(parent)[0].getBoundingClientRect().top);
  //console.log($(parent)[0].getBoundingClientRect().top - $(parent).position().top + $(parent).height());

  var topBorderOk = $(parent)[0].getBoundingClientRect().top<100;
  console.log(($(parent)[0].getBoundingClientRect().top - $(parent).position().top + $(parent).height()));
  var bottomBorderOk = ($(parent)[0].getBoundingClientRect().top - $(parent).position().top + $(parent).height()) > 100 /*$(child).height()*/;


  return topBorderOk && bottomBorderOk;
}

$( window ).bind('scroll', function() {
  var res = shouldBePosFixed($("#decade_viewer"), $("#decade_navigator"));
  console.log(res);
  if (res){
    $("#decade_navigator").css('position', 'fixed')
    $("#decade_navigator").css('top', '100px')
    //console.log("shouldBePosFixed");
  } else {
    $("#decade_navigator").css('position', 'absolute')
    $("#decade_navigator").css('top', 'auto')

    //console.log("shouldNOTBePosFixed");
  }
});
