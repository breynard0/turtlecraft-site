const DELAY = 2000;
const SCREENSHOTS = [
  "url('https://cdn.discordapp.com/attachments/1089013186117779547/1123001750769643611/outside_spawn.png')",
  "url('https://cdn.discordapp.com/attachments/1089013186117779547/1123001752518668399/waterslide.png')",
  "url('https://cdn.discordapp.com/attachments/1089013186117779547/1123001749561684039/mob_arena.png')",
  "url('https://cdn.discordapp.com/attachments/1089013186117779547/1123001747141558382/arena.png')",
  "url('https://cdn.discordapp.com/attachments/1089013186117779547/1123001747867177060/casino_inside.png')",
  "url('https://cdn.discordapp.com/attachments/1089013186117779547/1123001748425027584/casino_outside.png')",
  "url('https://cdn.discordapp.com/attachments/1089013186117779547/1123001749008027738/church.png')",
  "url('https://cdn.discordapp.com/attachments/1089013186117779547/1123001750119514163/nether.png')",
  "url('https://cdn.discordapp.com/attachments/1089013186117779547/1123001751344251062/pvp_arena.png')",
  "url('https://cdn.discordapp.com/attachments/1089013186117779547/1123001751914680390/shadow_city.png')",
];

var idx = 1;

fade();
setInterval(() => pick_image(), 3000);

function pick_image() {
  fade();
  document.getElementById("bg").style.backgroundImage = SCREENSHOTS[idx];
  idx++;
  if (idx >= SCREENSHOTS.length) {
    idx = 0;
  }
}

function fade() {
  var style = document.getElementById("bg").style;
  style.opacity = 0;
  var id = setInterval(change_opacity, 50);

  function change_opacity() {
    var style = document.getElementById("bg").style;
    if (parseFloat(style.opacity) >= 1.0) {
      clearInterval(id);
    } else {
      style.opacity = parseFloat(style.opacity) + 0.1;
    }
  }
}

function dynmap() {
  open("http://play.turtlecraftsmp.com:4269/");
}

function discord() {
  open("https://discord.gg/ZwMwCTWz4V");
}

function pluginlist() {
  window.location.replace("turtlecraftplugins.html")
}

function ranks() {
  window.location.replace("turtlecraftranks.html")
}
