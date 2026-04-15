const teamMembers = [
  {
    name: "Aryan Singh",
    role: "Frontend Developer",
    img: "https://via.placeholder.com/100"
  },
  {
    name: "kakul kshtriya",
    role: "Backend Developer",
    img: "https://via.placeholder.com/100"
  },
  {
    name: "Priya Sharma",
    role: "UI/UX Designer",
    img: "https://via.placeholder.com/100"
  },
  {
    name: "Amit Kumar",
    role: "Project Manager",
    img: "https://via.placeholder.com/100"
  }
];

const container = document.getElementById("team");

teamMembers.forEach(member => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${member.img}" alt="${member.name}">
    <div class="name">${member.name}</div>
    <div class="role">${member.role}</div>
    <button onclick="showInfo('${member.name}')">View Profile</button>
  `;

  container.appendChild(card);
});

function showInfo(name) {
  alert("You clicked on " + name);
}