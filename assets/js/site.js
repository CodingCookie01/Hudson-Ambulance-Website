const fundraisers = [
  {
    title: "Spring Community Drive",
    date: "May 2026",
    description: "A community fundraising effort to support new emergency equipment and local outreach events.",
    goal: "$8,000 goal"
  },
  {
    title: "Back-to-School Safety Supply Drive",
    date: "August 2026",
    description: "Support emergency preparedness supplies and family safety education programs.",
    goal: "$4,500 goal"
  },
  {
    title: "Annual Benefit Gala",
    date: "October 2026",
    description: "Join us for a community celebration to raise funds for training and volunteer support.",
    goal: "$12,000 goal"
  }
];

const staff = [
  {
    name: "John Carter",
    role: "Operations Supervisor",
    bio: "John brings years of emergency response leadership and community support experience.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Maria Lopez",
    role: "Paramedic",
    bio: "Maria is known for calm, compassionate care and quick action in high-pressure situations.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "David Nguyen",
    role: "Emergency Response Technician",
    bio: "David supports field operations and works closely with local partners during community events.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Alicia James",
    role: "Volunteer Coordinator",
    bio: "Alicia helps organize community outreach, support programs, and local family initiatives.",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80"
  }
];

const historyMilestones = [
  { year: "2008", text: "Hudson Ambulance officially began serving the community with a volunteer-driven response team." },
  { year: "2012", text: "Expanded operations and added additional emergency response support services." },
  { year: "2017", text: "Launched major local fundraising efforts to improve equipment and training." },
  { year: "2024", text: "Continued growing community partnerships and emergency readiness across Hudson." }
];

function renderFundraisers() {
  const container = document.getElementById("fundraiserList");
  if (!container) return;

  container.innerHTML = fundraisers.map((item) => `
    <div class="col-md-6 col-xl-4">
      <div class="card h-100">
        <div class="card-body">
          <p class="eyebrow text-primary">${item.date}</p>
          <h3 class="card-title">${item.title}</h3>
          <p>${item.description}</p>
          <p class="fw-bold text-primary">${item.goal}</p>
          <a href="donate.html" class="btn btn-primary">Support this campaign</a>
        </div>
      </div>
    </div>
  `).join("");
}

function renderHomeFundraisers() {
  const container = document.getElementById("homeFundraisers");
  if (!container) return;

  container.innerHTML = fundraisers.slice(0, 3).map((item) => `
    <div class="col-md-4">
      <div class="card h-100">
        <div class="card-body">
          <p class="eyebrow text-primary">${item.date}</p>
          <h3 class="card-title">${item.title}</h3>
          <p>${item.description}</p>
          <a href="fundraisers.html" class="btn btn-outline-primary">Learn more</a>
        </div>
      </div>
    </div>
  `).join("");
}

function renderStaff() {
  const container = document.getElementById("staffList");
  if (!container) return;

  container.innerHTML = staff.map((person) => `
    <div class="col-md-6 col-xl-3">
      <div class="card h-100">
        <img src="${person.image}" alt="${person.name}" class="card-img-top">
        <div class="card-body text-center">
          <h3 class="card-title">${person.name}</h3>
          <p class="text-primary fw-bold">${person.role}</p>
          <p>${person.bio}</p>
        </div>
      </div>
    </div>
  `).join("");
}

function renderHomeStaff() {
  const container = document.getElementById("homeStaff");
  if (!container) return;

  container.innerHTML = staff.slice(0, 4).map((person) => `
    <div class="col-md-3">
      <div class="card h-100">
        <img src="${person.image}" alt="${person.name}" class="card-img-top">
        <div class="card-body text-center">
          <h3 class="card-title">${person.name}</h3>
          <p class="text-primary fw-bold">${person.role}</p>
        </div>
      </div>
    </div>
  `).join("");
}

function renderHistoryTimeline() {
  const container = document.getElementById("historyTimeline");
  if (!container) return;

  container.innerHTML = historyMilestones.map((item) => `
    <div class="timeline-item">
      <div class="timeline-year">${item.year}</div>
      <p>${item.text}</p>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderFundraisers();
  renderHomeFundraisers();
  renderStaff();
  renderHomeStaff();
  renderHistoryTimeline();
});
