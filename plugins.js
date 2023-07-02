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

fade();

const ITEMS = [
  ["Battle Gear", "A plugin exclusive to Turtlecraft, suit up with custom items of all shapes and sizes", "https://cdn.discordapp.com/attachments/793870154610114610/1123729903829913690/battlegear.png"],
  ["Casino", "Gamble your earnings in our casino", "https://cdn.discordapp.com/attachments/793870154610114610/1123729905104982068/casino.png"],
  ["Land Claiming", "Claim pieces of land as your own", "https://cdn.discordapp.com/attachments/793870154610114610/1123729908900835469/land_claiming.png"],
  ["Catching Mobs", "Catch mobs to release them elsewhere", "https://cdn.discordapp.com/attachments/793870154610114610/1123729905671209051/catching_mobs.png"],
  ["Fishing", "A custom fishing system and economy", "https://cdn.discordapp.com/attachments/793870154610114610/1123729906858201088/fishing.png"],
  ["Towns", "Create your own towns to lease plots out to other players", "https://cdn.discordapp.com/attachments/793870154610114610/1123729938911072348/town.png"],
  ["Auction House", "A player-run market to buy and sell items", "https://cdn.discordapp.com/attachments/793870154610114610/1123729903385313390/ah.png"],
  ["Sieges", "Attack other peoples' plots in the nether", "https://cdn.discordapp.com/attachments/793870154610114610/1123729934452539484/siege.png"],
  ["Skills", "Upgradable skills for many basic functions", "https://cdn.discordapp.com/attachments/793870154610114610/1123729937115910304/skills.png"],
  ["Head Drops", "Players drop heads on death", "https://cdn.discordapp.com/attachments/793870154610114610/1123729907596394546/heads.png"],
  ["Bounties", "Set a monetary bounty on another player", "https://cdn.discordapp.com/attachments/793870154610114610/1123729904492609597/bounties.png"],
  ["Better Shulker Boxes", "Open shulker boxes from your inventory", "https://cdn.discordapp.com/attachments/793870154610114610/1123729932871274547/shulker.png"],
  ["Time Skipping", "Adds the ability to vote to skip both night and day", "https://cdn.discordapp.com/attachments/793870154610114610/1123729937820549163/skipnight.png"],
  ["Armored Elytra", "Add armour to your elytra", "https://cdn.discordapp.com/attachments/793870154610114610/1123729906250035220/elytra.png"],
  ["Silk Spawners", "Pick up monster spawners with Silk Touch", "https://cdn.discordapp.com/attachments/793870154610114610/1123729935417212989/silk_spawner.png"],
  ["You can add more!", "Our developers are ready to implement whatever comes up, and most of that comes from player input", "https://cdn.discordapp.com/attachments/1089013186117779547/1123001750769643611/outside_spawn.png"],
];

var idx = 0;

function set_image() {
  fade();
  document.getElementById("title").innerHTML = ITEMS[idx][0];
  document.getElementById("text").innerHTML = ITEMS[idx][1];
  document.getElementById("bg").style.backgroundImage = "url(" + ITEMS[idx][2] + ")";
}

set_image();

function back() {
  if (idx > 0) {
    idx--;
  }
  else {
    idx = ITEMS.length - 1;
  }
  set_image();
}

function forward() {
  if (idx < ITEMS.length - 1) {
    idx++;
  }
  else {
    idx = 0;
  }
  set_image();
}

function back_button() {
  window.location.replace("index.html")
}