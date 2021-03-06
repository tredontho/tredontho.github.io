const allGods = ["Achilles", "Agni", "Ah Muzen Cab", "Ah Puch", "Amaterasu", "Anhur", "Anubis", "Ao Kuang", "Aphrodite", "Apollo", "Arachne", "Ares", "Artemis", "Artio", "Athena", "Awilix", "Baba Yaga", "Bacchus", "Bakasura", "Baron Samedi", "Bastet", "Bellona", "Cabrakan", "Camazotz", "Cerberus", "Cernunnos", "Chaac", "Chang'e", "Chernobog", "Chiron", "Chronos", "Cthulhu", "Cu Chulainn", "Cupid", "Da Ji", "Danzaburou", "Discordia", "Erlang Shen", "Eset", "Fafnir", "Fenrir", "Freya", "Ganesha", "Geb", "Gilgamesh", "Guan Yu", "Hachiman", "Hades", "He Bo", "Heimdallr", "Hel", "Hera", "Hercules", "Horus", "Hou Yi", "Hun Batz", "Izanami", "Janus", "Jing Wei", "Jormungandr", "Kali", "Khepri", "King Arthur", "Kukulkan", "Kumbhakarna", "Kuzenbo", "Loki", "Medusa", "Mercury", "Merlin", "Morgan Le Fay", "Mulan", "Ne Zha", "Neith", "Nemesis", "Nike", "Nox", "Nu Wa", "Odin", "Olorun", "Osiris", "Pele", "Persephone", "Poseidon", "Ra", "Raijin", "Rama", "Ratatoskr", "Ravana", "Scylla", "Serqet", "Set", "Skadi", "Sobek", "Sol", "Sun Wukong", "Susano", "Sylvanus", "Terra", "Thanatos", "The Morrigan", "Thor", "Thoth", "Tiamat", "Tsukuyomi", "Tyr", "Ullr", "Vamana", "Vulcan", "Xbalanque", "Xing Tian", "Yemoja", "Ymir", "Zeus", "Zhong Kui"];


updateRandomizeButton();
function shuffle(origArray) {
  const array = [...origArray];
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function selectRandom() {
  const num = document.getElementById("numGods").value;
  const shuffled = shuffle(allGods);
  renderRandom(shuffled.slice(0,num));
}

function renderRandom(arr) {
  const chosenDiv = document.getElementById("chosen-gods");
  chosenDiv.innerHTML = arr.join('<br />');
}

function updateRandomizeButton() {
  const selected = document.getElementById("numGods").value;
  document.getElementById("randomize").hidden = (selected == "default");
}
