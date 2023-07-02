var slider = document.getElementById("myRange");
document.querySelectorAll('.tile').forEach(tile => {
  set_pos(tile);
});

slider.oninput = function() {
  document.querySelectorAll('.tile').forEach(tile => {
    set_pos(tile);
  });
}

function set_pos(tile) {
  var initial = getComputedStyle(tile).getPropertyValue('--initialstate');
  var val = -Number(slider.value) + Number(initial);
  console.log(val);
  tile.style.setProperty('--state', val);
}

function back_button() {
  window.location.replace("index.html")
}