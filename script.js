const teams = [
  { id: "arsenal", name: "Arsenal", logo: "data:image/png;base64,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", colors: { bg: "#DB0007", text: "#FFFFFF", secondary: "#063672" }, manager: "Mikel Arteta", stadium: "Emirates Stadium", bestPlayer: "Eberechi Eze", captain: "Martin Ødegaard" },
  { id: "astonvilla", name: "Aston Villa", logo: "https://raw.githubusercontent.com/YOUR-USERNAME/YOUR-REPO/main/astonvilla.png", colors: { bg: "#95BFE5", text: "#670E36", secondary: "#670E36" }, manager: "Unai Emery", stadium: "Villa Park", bestPlayer: "Ollie Watkins", captain: "John McGinn" },
  { id: "bournemouth", name: "Bournemouth", logo: "https://raw.githubusercontent.com/YOUR-USERNAME/YOUR-REPO/main/bournemouth.png", colors: { bg: "#DA291C", text: "#000000", secondary: "#000000" }, manager: "Andoni Iraola", stadium: "Vitality Stadium", bestPlayer: "Antoine Semenyo", captain: "Adam Smith" },
  { id: "brentford", name: "Brentford", logo: "https://raw.githubusercontent.com/YOUR-USERNAME/YOUR-REPO/main/brentford.png", colors: { bg: "#E30613", text: "#FFFFFF", secondary: "#FBB800" }, manager: "Thomas Frank", stadium: "Gtech Community Stadium", bestPlayer: "Yoane Wissa", captain: "Christian Nørgaard" },
  { id: "brighton", name: "Brighton & Hove Albion", logo: "https://raw.githubusercontent.com/YOUR-USERNAME/YOUR-REPO/main/brighton.png", colors: { bg: "#0057B8", text: "#FFFFFF", secondary: "#FFCD00" }, manager: "Fabian Hürzeler", stadium: "AMEX Stadium", bestPlayer: "Kaoru Mitoma", captain: "Lewis Dunk" },
  { id: "chelsea", name: "Chelsea", logo: "https://raw.githubusercontent.com/YOUR-USERNAME/YOUR-REPO/main/chelsea.png", colors: { bg: "#034694", text: "#FFFFFF", secondary: "#DBA111" }, manager: "Enzo Maresca", stadium: "Stamford Bridge", bestPlayer: "Cole Palmer", captain: "Reece James" },
  { id: "coventry", name: "Coventry City", logo: "https://raw.githubusercontent.com/YOUR-USERNAME/YOUR-REPO/main/coventry.png", colors: { bg: "#27AAE1", text: "#FFFFFF", secondary: "#003366" }, manager: "Frank Lampard", stadium: "Coventry Building Society Arena", bestPlayer: "Haji Wright", captain: "Ben Sheaf" },
  { id: "crystalpalace", name: "Crystal Palace", logo: "https://raw.githubusercontent.com/YOUR-USERNAME/YOUR-REPO/main/crystalpalace.png", colors: { bg: "#1B458F", text: "#FFFFFF", secondary: "#C41230" }, manager: "Oliver Glasner", stadium: "Selhurst Park", bestPlayer: "Jean-Philippe Mateta", captain: "Marc Guéhi" },
  { id: "everton", name: "Everton", logo: "https://raw.githubusercontent.com/YOUR-USERNAME/YOUR-REPO/main/everton.png", colors: { bg: "#003399", text: "#FFFFFF", secondary: "#FFFFFF" }, manager: "Sean Dyche", stadium: "Hill Dickinson Stadium", bestPlayer: "Jarrad Branthwaite", captain: "Seamus Coleman" },
  { id: "fulham", name: "Fulham", logo: "https://raw.githubusercontent.com/YOUR-USERNAME/YOUR-REPO/main/fulham.png", colors: { bg: "#FFFFFF", text: "#000000", secondary: "#CC0000" }, manager: "Marco Silva", stadium: "Craven Cottage", bestPlayer: "Rodrigo Muniz", captain: "Tom Cairney" },
  { id: "hull", name: "Hull City", logo: "https://raw.githubusercontent.com/YOUR-USERNAME/YOUR-REPO/main/hull.png", colors: { bg: "#FF8200", text: "#000000", secondary: "#000000" }, manager: "Sergej Jakirović", stadium: "MKM Stadium", bestPlayer: "Oli McBurnie", captain: "Lewie Coyle" },
  { id: "ipswich", name: "Ipswich Town", logo: "https://raw.githubusercontent.com/YOUR-USERNAME/YOUR-REPO/main/ipswich.png", colors: { bg: "#0000FF", text: "#FFFFFF", secondary: "#FF0000" }, manager: "Kieran McKenna", stadium: "Portman Road", bestPlayer: "Omari Hutchinson", captain: "Sam Morsy" },
  { id: "leeds", name: "Leeds United", logo: "https://raw.githubusercontent.com/YOUR-USERNAME/YOUR-REPO/main/leeds.png", colors: { bg: "#FFCD00", text: "#1D2554", secondary: "#1D2554" }, manager: "Daniel Farke", stadium: "Elland Road", bestPlayer: "Crysencio Summerville", captain: "Ethan Ampadu" },
  { id: "liverpool", name: "Liverpool", logo: "https://raw.githubusercontent.com/YOUR-USERNAME/YOUR-REPO/main/liverpool.png", colors: { bg: "#C8102E", text: "#FFFFFF", secondary: "#00B2A9" }, manager: "Arne Slot", stadium: "Anfield", bestPlayer: "Alexander Isak", captain: "Virgil van Dijk" },
  { id: "mancity", name: "Manchester City", logo: "https://raw.githubusercontent.com/YOUR-USERNAME/YOUR-REPO/main/mancity.png", colors: { bg: "#6CABDD", text: "#1C2C5B", secondary: "#1C2C5B" }, manager: "Pep Guardiola", stadium: "Etihad Stadium", bestPlayer: "Erling Haaland", captain: "Kyle Walker" },
  { id: "manutd", name: "Manchester United", logo: "https://raw.githubusercontent.com/YOUR-USERNAME/YOUR-REPO/main/manutd.png", colors: { bg: "#DA291C", text: "#FFFFFF", secondary: "#FBE122" }, manager: "Ruben Amorim", stadium: "Old Trafford", bestPlayer: "Bryan Mbeumo", captain: "Bruno Fernandes" },
  { id: "newcastle", name: "Newcastle United", logo: "https://raw.githubusercontent.com/YOUR-USERNAME/YOUR-REPO/main/newcastle.png", colors: { bg: "#241F20", text: "#FFFFFF", secondary: "#41B6E6" }, manager: "Eddie Howe", stadium: "St. James' Park", bestPlayer: "Anthony Gordon", captain: "Bruno Guimarães" },
  { id: "nottingham", name: "Nottingham Forest", logo: "https://raw.githubusercontent.com/YOUR-USERNAME/YOUR-REPO/main/nottingham.png", colors: { bg: "#DD0000", text: "#FFFFFF", secondary: "#FFFFFF" }, manager: "Nuno Espírito Santo", stadium: "The City Ground", bestPlayer: "Morgan Gibbs-White", captain: "Ryan Yates" },
  { id: "sunderland", name: "Sunderland", logo: "https://raw.githubusercontent.com/YOUR-USERNAME/YOUR-REPO/main/sunderland.png", colors: { bg: "#EB172B", text: "#FFFFFF", secondary: "#000000" }, manager: "Régis Le Bris", stadium: "Stadium of Light", bestPlayer: "Jobe Bellingham", captain: "Dan Neil" },
  { id: "tottenham", name: "Tottenham Hotspur", logo: "https://raw.githubusercontent.com/YOUR-USERNAME/YOUR-REPO/main/tottenham.png", colors: { bg: "#FFFFFF", text: "#132257", secondary: "#132257" }, manager: "Ange Postecoglou", stadium: "Tottenham Hotspur Stadium", bestPlayer: "James Maddison", captain: "Richarlison" }
];

const customImages = {};

function triggerFileUpload(teamId) {
  document.getElementById(`file-${teamId}`).click();
}

function handleFileSelect(event, teamId) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      customImages[teamId] = e.target.result;
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
    // Priority: uploaded local file -> GitHub logo URL -> team primary color fallback
    const imageSource = customImages[team.id] || team.logo;
    const bgStyle = imageSource 
      ? `background-image: url('${imageSource}');` 
      : `background-color: ${team.colors.bg}; color: ${team.colors.text};`;

    return `
    <article class="team-card">
      <div class="card-header">
        <input type="file" id="file-${team.id}" class="file-input" accept="image/*" onchange="handleFileSelect(event, '${team.id}')" />
        <div class="badge-wrapper" onclick="triggerFileUpload('${team.id}')" title="Click to upload/change logo" style="${bgStyle} border: 3px solid ${team.colors.secondary}">
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
