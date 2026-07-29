const teams = [
  { id: "arsenal", name: "Arsenal", logo: "arsenal.jpg", colors: { bg: "#DB0007", text: "#FFFFFF", secondary: "#063672" }, manager: "Mikel Arteta", stadium: "Emirates Stadium", bestPlayer: "Eberechi Eze", captain: "Martin Ødegaard" },
  { id: "astonvilla", name: "Aston Villa", logo: "villa.jpg", colors: { bg: "#95BFE5", text: "#670E36", secondary: "#670E36" }, manager: "Unai Emery", stadium: "Villa Park", bestPlayer: "Ollie Watkins", captain: "John McGinn" },
  { id: "bournemouth", name: "Bournemouth", logo: "bournemouth.jpg", colors: { bg: "#DA291C", text: "#000000", secondary: "#000000" }, manager: "Andoni Iraola", stadium: "Vitality Stadium", bestPlayer: "Antoine Semenyo", captain: "Adam Smith" },
  { id: "brentford", name: "Brentford", logo: "brentford.jpg", colors: { bg: "#E30613", text: "#FFFFFF", secondary: "#FBB800" }, manager: "Thomas Frank", stadium: "Gtech Community Stadium", bestPlayer: "Yoane Wissa", captain: "Christian Nørgaard" },
  { id: "brighton", name: "Brighton & Hove Albion", logo: "brighton.jpg", colors: { bg: "#0057B8", text: "#FFFFFF", secondary: "#FFCD00" }, manager: "Fabian Hürzeler", stadium: "AMEX Stadium", bestPlayer: "Kaoru Mitoma", captain: "Lewis Dunk" },
  { id: "chelsea", name: "Chelsea", logo: "chelsea.jpg", colors: { bg: "#034694", text: "#FFFFFF", secondary: "#DBA111" }, manager: "Enzo Maresca", stadium: "Stamford Bridge", bestPlayer: "Cole Palmer", captain: "Reece James" },
  { id: "coventry", name: "Coventry City", logo: "coventry.jpg", colors: { bg: "#27AAE1", text: "#FFFFFF", secondary: "#003366" }, manager: "Frank Lampard", stadium: "Coventry Building Society Arena", bestPlayer: "Haji Wright", captain: "Ben Sheaf" },
  { id: "crystalpalace", name: "Crystal Palace", logo: "palace.jpg", colors: { bg: "#1B458F", text: "#FFFFFF", secondary: "#C41230" }, manager: "Oliver Glasner", stadium: "Selhurst Park", bestPlayer: "Jean-Philippe Mateta", captain: "Marc Guéhi" },
  { id: "everton", name: "Everton", logo: "everton.jpg", colors: { bg: "#003399", text: "#FFFFFF", secondary: "#FFFFFF" }, manager: "Sean Dyche", stadium: "Hill Dickinson Stadium", bestPlayer: "Jarrad Branthwaite", captain: "Seamus Coleman" },
  { id: "fulham", name: "Fulham", logo: "fulham.jpg", colors: { bg: "#FFFFFF", text: "#000000", secondary: "#CC0000" }, manager: "Marco Silva", stadium: "Craven Cottage", bestPlayer: "Rodrigo Muniz", captain: "Tom Cairney" },
  { id: "hull", name: "Hull City", logo: "hull.jpg", colors: { bg: "#FF8200", text: "#000000", secondary: "#000000" }, manager: "Sergej Jakirović", stadium: "MKM Stadium", bestPlayer: "Oli McBurnie", captain: "Lewie Coyle" },
  { id: "ipswich", name: "Ipswich Town", logo: "ipswich.jpg", colors: { bg: "#0000FF", text: "#FFFFFF", secondary: "#FF0000" }, manager: "Kieran McKenna", stadium: "Portman Road", bestPlayer: "Omari Hutchinson", captain: "Sam Morsy" },
  { id: "liverpool", name: "Liverpool", logo: "liverpool.jpg", colors: { bg: "#C8102E", text: "#FFFFFF", secondary: "#00B2A9" }, manager: "Arne Slot", stadium: "Anfield", bestPlayer: "Alexander Isak", captain: "Virgil van Dijk" },
  { id: "mancity", name: "Manchester City", logo: "citym.jpg", colors: { bg: "#6CABDD", text: "#1C2C5B", secondary: "#1C2C5B" }, manager: "Pep Guardiola", stadium: "Etihad Stadium", bestPlayer: "Erling Haaland", captain: "Kyle Walker" },
  { id: "manutd", name: "Manchester United", logo: "utdm.jpg", colors: { bg: "#DA291C", text: "#FFFFFF", secondary: "#FBE122" }, manager: "Ruben Amorim", stadium: "Old Trafford", bestPlayer: "Bryan Mbeumo", captain: "Bruno Fernandes" },
  { id: "newcastle", name: "Newcastle United", logo: "newcastle.jpg", colors: { bg: "#241F20", text: "#FFFFFF", secondary: "#41B6E6" }, manager: "Eddie Howe", stadium: "St. James' Park", bestPlayer: "Anthony Gordon", captain: "Bruno Guimarães" },
  { id: "nottingham", name: "Nottingham Forest", logo: "forest.jpg", colors: { bg: "#DD0000", text: "#FFFFFF", secondary: "#FFFFFF" }, manager: "Nuno Espírito Santo", stadium: "The City Ground", bestPlayer: "Morgan Gibbs-White", captain: "Ryan Yates" },
  { id: "tottenham", name: "Tottenham Hotspur", logo: "spurs.jpg", colors: { bg: "#FFFFFF", text: "#132257", secondary: "#132257" }, manager: "Roberto De Zerbi", stadium: "Tottenham Hotspur Stadium", bestPlayer: "James Maddison", captain: "Richarlison" }
];

// Load local custom overrides from browser memory if present
const customImages = JSON.parse(localStorage.getItem('pl_team_badges')) || {};

function triggerFileUpload(teamId) {
  document.getElementById(`file-${teamId}`).click();
}

function handleFileSelect(event, teamId) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      customImages[teamId] = e.target.result;
      localStorage.setItem('pl_team_badges', JSON.stringify(customImages));
      renderTeams(document.getElementById("searchInput").value);
    };
    reader.readAsDataURL(file);
  }
}

function renderTeams(filterText = "") {
  const grid = document.getElementById("teamsGrid");
  const countEl = document.getElementById("teamCount");
  
  const filtered = teams.filter(team => {
    const query = filterText.toLowerCase();
    return (
      team.name.toLowerCase().includes(query) ||
      team.manager.toLowerCase().includes(query) ||
      team.stadium.toLowerCase().includes(query) ||
      team.bestPlayer.toLowerCase().includes(query) ||
      team.captain.toLowerCase().includes(query)
    );
  });

  countEl.textContent = filtered.length;

  grid.innerHTML = filtered.map(team => {
    // Check custom override first, then your uploaded file logo
    const imageSource = customImages[team.id] || team.logo;
    const bgStyle = imageSource 
      ? `background-image: url('${imageSource}');` 
      : `background-color: ${team.colors.bg}; color: ${team.colors.text};`;

    return `
    <article class="team-card">
      <div class="card-header">
        <input type="file" id="file-${team.id}" class="file-input" accept="image/*" onchange="handleFileSelect(event, '${team.id}')" />
        <div class="badge-wrapper" onclick="triggerFileUpload('${team.id}')" title="Click to upload/change badge" style="${bgStyle} border: 3px solid ${team.colors.secondary}">
          ${!imageSource ? `<span class="badge-hint">UPLOAD<br/>BADGE</span>` : ''}
        </div>
        <h2 class="team-name">${team.name}</h2>
      </div>
      <div class="card-body">
        <div class="info-row">
          <span class="info-label">Manager</span>
          <span class="info-value">${team.manager}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Stadium</span>
          <span class="info-value">${team.stadium}</span>
        </div>
        <div class="info-row">
          <span class="info-label"><span class="highlight-star">★</span> Best Player</span>
          <span class="info-value">${team.bestPlayer}</span>
        </div>
        <div class="info-row">
          <span class="info-label">Captain</span>
          <span class="info-value">${team.captain}</span>
        </div>
      </div>
    </article>
  `}).join("");
}

document.getElementById("searchInput").addEventListener("input", (e) => {
  renderTeams(e.target.value);
});

renderTeams();
