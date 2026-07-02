const defaultOpportunities = [
  {
    id: "brightfuture-scholarship-2026",
    title: "BrightFuture Private Scholarship Grant 2026",
    category: "Scholarship",
    organizer: "BrightFuture Foundation",
    location: "Northern Mindanao",
    deadline: "2026-07-30",
    status: "Open",
    eligibility: "Senior high school graduates and college students with good academic standing.",
    description: "A private scholarship grant that helps qualified students cover tuition, school fees, and learning materials.",
    requirements: ["Certificate of enrollment", "Latest grades", "Valid ID", "Proof of income"],
    link: "Apply through the BrightFuture Foundation online form."
  },
  {
    id: "techbridge-scholarship",
    title: "TechBridge College Scholarship Program",
    category: "Scholarship",
    organizer: "TechBridge Institute",
    location: "Bukidnon",
    deadline: "2026-07-15",
    status: "Closing Soon",
    eligibility: "College students taking IT, education, business, or related programs.",
    description: "A private institution scholarship for students who show academic promise and financial need.",
    requirements: ["School ID", "Enrollment form", "Application letter", "Latest grades"],
    link: "Submit requirements through the TechBridge admissions office."
  },
  {
    id: "innovatex-it-internship",
    title: "InnovateX IT Internship Program",
    category: "Internship",
    organizer: "InnovateX Solutions",
    location: "Valencia City",
    deadline: "2026-08-01",
    status: "Open",
    eligibility: "IT, CS, IS, and related students looking for practical work experience.",
    description: "A private company internship for students interested in web development, UI design, data encoding, and technical support.",
    requirements: ["Resume", "School endorsement", "Portfolio if available"],
    link: "Send application to the company internship email."
  },
  {
    id: "carelink-healthcare-internship",
    title: "CareLink Student Internship Placement",
    category: "Internship",
    organizer: "CareLink Training Center",
    location: "Cagayan de Oro",
    deadline: "2026-08-12",
    status: "Open",
    eligibility: "College students seeking exposure to office, healthcare support, or community service operations.",
    description: "Internship placement from a private training center for students who want workplace experience and mentorship.",
    requirements: ["Resume", "Student ID", "Parent/guardian consent if needed"],
    link: "Apply through the CareLink Training Center desk."
  },
  {
    id: "leadforward-youth-summit",
    title: "LeadForward Youth Leadership Summit",
    category: "Leadership",
    organizer: "LeadForward Academy",
    location: "Bukidnon",
    deadline: "2026-08-20",
    status: "Open",
    eligibility: "Student leaders, organization officers, scholars, and active volunteers.",
    description: "A private leadership summit focused on communication, teamwork, project planning, and responsible youth leadership.",
    requirements: ["Recommendation letter", "Valid ID", "Application form"],
    link: "Apply through the LeadForward Academy registration page."
  },
  {
    id: "public-speaking-workshop",
    title: "Youth Public Speaking Workshop",
    category: "Leadership",
    organizer: "Campus Leadership Council",
    location: "Central Mindanao University",
    deadline: "2026-07-18",
    status: "Open",
    eligibility: "Students who want to improve confidence, speaking skills, and leadership communication.",
    description: "A workshop offered by a private campus organization for developing presentation skills and public speaking confidence.",
    requirements: ["Student ID", "Online registration", "Short reason for joining"],
    link: "Register through the campus leadership council form."
  },
  {
    id: "social-impact-civic-forum",
    title: "Youth Civic Forum: Be Involved, Be Heard",
    category: "Civic Engagement",
    organizer: "Social Impact Center",
    location: "Valencia City",
    deadline: "2026-10-10",
    status: "Open",
    eligibility: "Students and youth interested in advocacy, service, and community participation.",
    description: "A civic engagement forum hosted by a private social impact organization to encourage youth participation and community action.",
    requirements: ["Registration form", "Valid ID", "Youth organization affiliation if available"],
    link: "Register through the Social Impact Center page."
  },
  {
    id: "community-outreach-volunteer-program",
    title: "Community Outreach Volunteer Program",
    category: "Civic Engagement",
    organizer: "Youth Volunteer NGO",
    location: "Bukidnon",
    deadline: "2026-06-22",
    status: "Closing Soon",
    eligibility: "Youth volunteers willing to help in outreach, education, and community service.",
    description: "Volunteer program by a private NGO supporting school supply drives, feeding activities, and community support initiatives.",
    requirements: ["Volunteer form", "Guardian consent for minors", "Orientation attendance"],
    link: "Register through the NGO volunteer desk."
  },
  {
    id: "private-school-career-fair",
    title: "Private School Career and Opportunity Fair",
    category: "Local Activity",
    organizer: "Bukidnon Private Schools Association",
    location: "Malaybalay City",
    deadline: "2026-07-04",
    status: "Open",
    eligibility: "Senior high school and college students exploring scholarships, internships, and career pathways.",
    description: "A local activity where private schools and partner organizations present scholarships, internships, and student development opportunities.",
    requirements: ["Registration form", "Student ID", "Bring updated resume if available"],
    link: "Register through your school coordinator."
  },
  {
    id: "greenleaf-community-activity",
    title: "GreenLeaf Community Action Day",
    category: "Local Activity",
    organizer: "GreenLeaf Foundation",
    location: "Valencia City",
    deadline: "2026-06-28",
    status: "Open",
    eligibility: "Students, youth organizations, and community volunteers.",
    description: "A local environmental activity hosted by a private foundation to promote volunteerism and community responsibility.",
    requirements: ["Wear comfortable clothes", "Bring water", "Register before the event"],
    link: "Register through the GreenLeaf Foundation form."
  }
];

const categoryIcons = {
  "Scholarship": "🎓",
  "Internship": "💼",
  "Leadership": "🗣️",
  "Civic Engagement": "🤝",
  "Local Activity": "📍"
};

const demoUsers = [
  {
    name: "Admin Demo",
    email: "admin@pathfind.ph",
    password: "admin12345",
    role: "admin"
  },
  {
    name: "Student Demo",
    email: "user@pathfind.ph",
    password: "user12345",
    role: "user"
  }
];

let opportunities = [];
let bookmarks = [];
let currentUser = null;
let deadlineSorted = false;

const storageKeys = {
  opportunities: "pathfind_custom_opportunities",
  bookmarks: "pathfind_bookmarks",
  users: "pathfind_users",
  currentUser: "pathfind_current_user"
};

const pageLoader = document.getElementById("pageLoader");
const siteHeader = document.getElementById("siteHeader");
const navButtons = document.querySelectorAll("[data-page-target]");
const navLinksContainer = document.getElementById("navLinks");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelectorAll(".nav-link");
const pages = document.querySelectorAll(".page");
const accountButton = document.getElementById("accountButton");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const statusFilter = document.getElementById("statusFilter");
const locationFilter = document.getElementById("locationFilter");
const resetFilters = document.getElementById("resetFilters");
const sortDeadlineButton = document.getElementById("sortDeadlineButton");
const opportunityGrid = document.getElementById("opportunityGrid");
const savedGrid = document.getElementById("savedGrid");
const resultCount = document.getElementById("resultCount");
const totalOpportunities = document.getElementById("totalOpportunities");
const openCount = document.getElementById("openCount");
const calendarList = document.getElementById("calendarList");
const notificationList = document.getElementById("notificationList");
const homeSubscriptionSection = document.getElementById("homeSubscriptionSection");
const homeSubscriptionSubtitle = document.getElementById("homeSubscriptionSubtitle");
const homeSubscriptionCard = document.getElementById("homeSubscriptionCard");
const subscriptionPlanContainer = document.getElementById("subscriptionPlanContainer");
const subscriptionNavLinks = document.querySelectorAll(".subscription-nav-link");
const subscriptionEntryButtons = document.querySelectorAll(".subscription-entry-btn");
const adminNavButtons = document.querySelectorAll('[data-page-target="admin"]');
const adminForm = document.getElementById("adminForm");
const adminLock = document.getElementById("adminLock");
const adminPanel = document.getElementById("adminPanel");
const adminOpportunityList = document.getElementById("adminOpportunityList");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const currentUserBox = document.getElementById("currentUserBox");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalClose = document.getElementById("modalClose");
const modalContent = document.getElementById("modalContent");
const toast = document.getElementById("toast");

function getFromStorage(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    console.warn("Storage read failed:", error);
    return fallback;
  }
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function initializeStorage() {
  const existingUsers = getFromStorage(storageKeys.users, null);
  if (!existingUsers) {
    saveToStorage(storageKeys.users, demoUsers);
  }

  const customOpportunities = getFromStorage(storageKeys.opportunities, []);
  opportunities = [...defaultOpportunities, ...customOpportunities.filter(item => item.category !== "Government Program")];
  bookmarks = getFromStorage(storageKeys.bookmarks, []);
  currentUser = getFromStorage(storageKeys.currentUser, null);
}

function formatDate(dateString) {
  const date = new Date(`${dateString}T00:00:00`);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
}

function getShortDate(dateString) {
  const date = new Date(`${dateString}T00:00:00`);
  return {
    day: date.toLocaleDateString("en-US", { day: "2-digit" }),
    month: date.toLocaleDateString("en-US", { month: "short" }),
    year: date.toLocaleDateString("en-US", { year: "numeric" })
  };
}

function getDaysLeft(dateString) {
  const today = new Date();
  const date = new Date(`${dateString}T23:59:59`);
  today.setHours(0, 0, 0, 0);
  const difference = date - today;
  return Math.ceil(difference / (1000 * 60 * 60 * 24));
}

function statusClass(status) {
  return status.toLowerCase().replaceAll(" ", "-");
}

function getEffectiveStatus(opportunity) {
  const daysLeft = getDaysLeft(opportunity.deadline);
  if (daysLeft < 0) return "Closed";
  if (daysLeft <= 7 && opportunity.status !== "Closed") return "Closing Soon";
  return opportunity.status;
}

function populateFilters() {
  const categories = [...new Set(opportunities.map(item => item.category))].sort();
  const locations = [...new Set(opportunities.map(item => item.location))].sort();

  categoryFilter.innerHTML = '<option value="All">All Categories</option>';
  locationFilter.innerHTML = '<option value="All">All Locations</option>';

  categories.forEach(category => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });

  locations.forEach(location => {
    const option = document.createElement("option");
    option.value = location;
    option.textContent = location;
    locationFilter.appendChild(option);
  });
}

function getFilteredOpportunities() {
  const keyword = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;
  const status = statusFilter.value;
  const location = locationFilter.value;

  let filtered = opportunities.filter(item => {
    const searchableText = [
      item.title,
      item.category,
      item.organizer,
      item.location,
      item.description,
      item.eligibility
    ].join(" ").toLowerCase();

    const matchesKeyword = !keyword || searchableText.includes(keyword);
    const matchesCategory = category === "All" || item.category === category;
    const matchesStatus = status === "All" || getEffectiveStatus(item) === status;
    const matchesLocation = location === "All" || item.location === location;

    return matchesKeyword && matchesCategory && matchesStatus && matchesLocation;
  });

  if (deadlineSorted) {
    filtered = filtered.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
  }

  return filtered;
}

function createOpportunityCard(item) {
  const effectiveStatus = getEffectiveStatus(item);
  const isSaved = bookmarks.includes(item.id);
  const daysLeft = getDaysLeft(item.deadline);
  const dayText = daysLeft < 0 ? "Deadline passed" : daysLeft === 0 ? "Due today" : `${daysLeft} day${daysLeft === 1 ? "" : "s"} left`;

  return `
    <article class="opportunity-card">
      <div class="card-header">
        <span class="category-badge">${categoryIcons[item.category] || "📌"} ${item.category}</span>
        <span class="status-badge ${statusClass(effectiveStatus)}">${effectiveStatus}</span>
      </div>
      <h3>${item.title}</h3>
      <p class="card-description">${item.description}</p>
      <div class="card-meta">
        <span>🏢 ${item.organizer}</span>
        <span>📍 ${item.location}</span>
        <span>📅 ${formatDate(item.deadline)} • ${dayText}</span>
        <span>👥 ${item.eligibility}</span>
      </div>
      <div class="card-actions">
        <button class="primary-btn small-btn" data-view-details="${item.id}">View Details</button>
        <button class="icon-btn ${isSaved ? "saved" : ""}" data-save-opportunity="${item.id}" title="Save opportunity">${isSaved ? "★" : "☆"}</button>
      </div>
    </article>
  `;
}

function renderOpportunities() {
  const filtered = getFilteredOpportunities();

  if (!filtered.length) {
    opportunityGrid.innerHTML = `
      <div class="empty-state">
        <h2>No opportunities found</h2>
        <p>Try changing the search keyword, category, status, or location filter.</p>
      </div>
    `;
  } else {
    opportunityGrid.innerHTML = filtered.map(createOpportunityCard).join("");
  }

  resultCount.textContent = `Showing ${filtered.length} of ${opportunities.length} opportunities`;
  updateStats();
}

function renderSaved() {
  const savedItems = opportunities.filter(item => bookmarks.includes(item.id));

  if (!savedItems.length) {
    savedGrid.innerHTML = `
      <div class="empty-state">
        <h2>No saved opportunities yet</h2>
        <p>Click the star button on an opportunity card to save it here.</p>
      </div>
    `;
    return;
  }

  savedGrid.innerHTML = savedItems.map(createOpportunityCard).join("");
}

function renderCalendar() {
  const sorted = [...opportunities].sort((a, b) => new Date(a.deadline) - new Date(b.deadline));

  calendarList.innerHTML = sorted.map(item => {
    const shortDate = getShortDate(item.deadline);
    const effectiveStatus = getEffectiveStatus(item);

    return `
      <article class="calendar-card">
        <div class="calendar-date">
          <strong>${shortDate.day}</strong>
          <span>${shortDate.month} ${shortDate.year}</span>
        </div>
        <div>
          <span class="category-badge">${categoryIcons[item.category] || "📌"} ${item.category}</span>
          <h3>${item.title}</h3>
          <p>${item.organizer} • ${item.location}</p>
        </div>
        <span class="status-badge ${statusClass(effectiveStatus)}">${effectiveStatus}</span>
      </article>
    `;
  }).join("");
}

function buildNotifications() {
  const closingSoon = opportunities
    .filter(item => {
      const days = getDaysLeft(item.deadline);
      return days >= 0 && days <= 7;
    })
    .sort((a, b) => new Date(a.deadline) - new Date(b.deadline));

  const newest = [...opportunities].slice(-3).reverse();

  const notifications = [
    {
      icon: "🔔",
      title: "New Opportunity Alert",
      message: `New posts are available in the opportunity board. Check scholarships, internships, leadership, civic engagement, and local activities from private institutions.`
    },
    {
      icon: "🎓",
      title: "Scholarship Notification",
      message: "Scholarship announcements can include private foundation grants, school-based scholarships, company-sponsored scholarships, and institutional educational assistance."
    },
    {
      icon: "📍",
      title: "Location-Based Alert",
      message: "Users can be notified when a private institution posts a local activity, internship, scholarship, or leadership opportunity near their area."
    },
    {
      icon: "🗣️",
      title: "Leadership & Civic Engagement Reminder",
      message: "Leadership seminars, civic forums, volunteer work, internships, and local activities can be shown as event reminders."
    }
  ];

  closingSoon.slice(0, 4).forEach(item => {
    notifications.unshift({
      icon: "⏰",
      title: "Deadline Reminder",
      message: `${item.title} closes on ${formatDate(item.deadline)}. ${getDaysLeft(item.deadline)} day(s) left to prepare requirements.`
    });
  });

  newest.forEach(item => {
    notifications.push({
      icon: categoryIcons[item.category] || "📌",
      title: `New ${item.category}`,
      message: `${item.title} was added under ${item.category}. Location: ${item.location}. Deadline: ${formatDate(item.deadline)}.`
    });
  });

  return notifications;
}

function renderNotifications() {
  const notifications = buildNotifications();

  notificationList.innerHTML = notifications.map(note => `
    <article class="notification-card">
      <div class="notification-icon">${note.icon}</div>
      <div>
        <h3>${note.title}</h3>
        <p>${note.message}</p>
      </div>
    </article>
  `).join("");
}

function getStudentSubscriptionCard() {
  return `
    <article class="pricing-card student-plan role-plan-card">
      <div class="plan-topline">🎓 Student Plan</div>
      <h2>Premium Model</h2>
      <div class="price-row">
        <span class="price">₱39</span>
        <span class="price-note">/month per student</span>
      </div>
      <p class="plan-description">For students who want enhanced tools for tracking scholarships, internships, civic opportunities, and deadlines.</p>

      <div class="premium-box">
        <p class="premium-label">Premium Access</p>
        <h3>Student tools</h3>
        <p>Unlock enhanced tracking and alert features that help students manage opportunity updates.</p>
      </div>

      <ul class="plan-list">
        <li>Deadline tracking</li>
        <li>Personalized alerts</li>
        <li>Saved opportunities</li>
        <li>Priority notifications</li>
      </ul>
      <button class="primary-btn" data-subscribe-plan="student">Subscribe to Student Plan</button>
      <button class="secondary-btn" data-page-target="opportunities">Explore Opportunities</button>
    </article>
  `;
}

function getInstitutionSubscriptionCard() {
  return `
    <article class="pricing-card institution-plan featured-plan role-plan-card">
      <div class="plan-topline">🏛️ Institution Plan</div>
      <h2>Premium Model</h2>
      <div class="price-row">
        <span class="price">₱1,500</span>
        <span class="price-note">/month per institution</span>
      </div>
      <p class="plan-description">For private institutions, schools, NGOs, scholarship providers, companies, and youth organizations that post and verify opportunities.</p>

      <div class="institution-roles">
        <span>Primary users of the platform</span>
        <span>Opportunity providers</span>
        <span>Content uploaders and verifiers</span>
      </div>

      <ul class="plan-list">
        <li>Post opportunities and events</li>
        <li>Manage listings and deadlines</li>
        <li>Target specific groups of student applicants</li>
        <li>Track engagement and visibility</li>
      </ul>
      <button class="primary-btn" data-subscribe-plan="institution">Subscribe to Institution Plan</button>
      <button class="secondary-btn" data-page-target="admin">Go to Admin Dashboard</button>
    </article>
  `;
}

function getLoginSubscriptionPrompt() {
  return `
    <article class="pricing-card login-plan-card role-plan-card">
      <div class="plan-topline">🔐 Login Required</div>
      <h2>Login to view your plan</h2>
      <p class="plan-description">Login as a private institution admin or student so the homepage can show the correct PathFind plan for your account type.</p>
      <div class="demo-accounts plan-demo-accounts">
        <p><strong>Institution Admin:</strong> admin@pathfind.ph / admin12345</p>
        <p><strong>Student:</strong> user@pathfind.ph / user12345</p>
      </div>
      <button class="primary-btn" data-page-target="login">Login to View Plan</button>
    </article>
  `;
}

function getBothSubscriptionCards() {
  return `${getInstitutionSubscriptionCard()}${getStudentSubscriptionCard()}`;
}

function updateNavigationVisibility() {
  const isLoggedIn = Boolean(currentUser);
  const isAdmin = Boolean(currentUser && currentUser.role === "admin");

  subscriptionNavLinks.forEach(element => {
    element.classList.remove("auth-hidden");
    element.setAttribute("aria-hidden", "false");
    element.tabIndex = 0;
  });

  subscriptionEntryButtons.forEach(element => {
    element.classList.toggle("auth-hidden", !isLoggedIn);
    element.setAttribute("aria-hidden", String(!isLoggedIn));
    element.tabIndex = isLoggedIn ? 0 : -1;
  });

  adminNavButtons.forEach(element => {
    element.classList.toggle("auth-hidden", !isAdmin);
    element.setAttribute("aria-hidden", String(!isAdmin));
    element.tabIndex = isAdmin ? 0 : -1;
  });
}

function updateSubscriptionVisibility() {
  updateNavigationVisibility();
}

function renderRoleBasedSubscriptions() {
  updateSubscriptionVisibility();

  let subtitle = "";
  let homeCardMarkup = "";
  let pageCardMarkup = getBothSubscriptionCards();

  if (currentUser && currentUser.role === "admin") {
    subtitle = "You are logged in as a private institution/admin account, so the Institution Plan is shown on your homepage.";
    homeCardMarkup = getInstitutionSubscriptionCard();
    pageCardMarkup = homeCardMarkup;
  } else if (currentUser && currentUser.role === "user") {
    subtitle = "You are logged in as a student account, so the Student Premium Plan is shown on your homepage.";
    homeCardMarkup = getStudentSubscriptionCard();
    pageCardMarkup = homeCardMarkup;
  }

  if (homeSubscriptionSection) {
    homeSubscriptionSection.classList.toggle("auth-hidden", !currentUser);
  }

  if (homeSubscriptionSubtitle) homeSubscriptionSubtitle.textContent = subtitle;
  if (homeSubscriptionCard) homeSubscriptionCard.innerHTML = homeCardMarkup;
  if (subscriptionPlanContainer) {
    subscriptionPlanContainer.innerHTML = pageCardMarkup;
    subscriptionPlanContainer.classList.toggle("single-plan", Boolean(currentUser));
  }
}

function renderAdminList() {
  if (!opportunities.length) {
    adminOpportunityList.innerHTML = "<p>No announcements yet.</p>";
    return;
  }

  adminOpportunityList.innerHTML = opportunities
    .slice()
    .reverse()
    .map(item => `
      <div class="admin-item">
        <strong>${item.title}</strong>
        <span>${item.category} • ${item.location} • ${formatDate(item.deadline)}</span>
        <button class="secondary-btn small-btn" data-view-details="${item.id}">Preview</button>
      </div>
    `).join("");
}

function updateStats() {
  totalOpportunities.textContent = opportunities.length;
  openCount.textContent = opportunities.filter(item => getEffectiveStatus(item) !== "Closed").length;
}

function refreshAll() {
  populateFilters();
  renderOpportunities();
  renderSaved();
  renderCalendar();
  renderNotifications();
  renderRoleBasedSubscriptions();
  renderAdminList();
  updateAdminAccess();
  updateUserBox();
  updateNavigationVisibility();
}

function toggleBookmark(id) {
  if (bookmarks.includes(id)) {
    bookmarks = bookmarks.filter(savedId => savedId !== id);
    showToast("Removed from saved opportunities.");
  } else {
    bookmarks.push(id);
    showToast("Opportunity saved.");
  }

  saveToStorage(storageKeys.bookmarks, bookmarks);
  renderOpportunities();
  renderSaved();
}

function showDetails(id) {
  const item = opportunities.find(opportunity => opportunity.id === id);
  if (!item) return;

  const effectiveStatus = getEffectiveStatus(item);
  modalContent.innerHTML = `
    <span class="category-badge">${categoryIcons[item.category] || "📌"} ${item.category}</span>
    <h2 id="modalTitle">${item.title}</h2>
    <p>${item.description}</p>
    <div class="details-list">
      <span><strong>Organizer:</strong> ${item.organizer}</span>
      <span><strong>Location:</strong> ${item.location}</span>
      <span><strong>Deadline / Date:</strong> ${formatDate(item.deadline)}</span>
      <span><strong>Status:</strong> ${effectiveStatus}</span>
      <span><strong>Eligibility:</strong> ${item.eligibility}</span>
      <span><strong>Application Info:</strong> ${item.link}</span>
    </div>
    <h3>Common Requirements</h3>
    <ul class="details-list">
      ${item.requirements.map(requirement => `<li>${requirement}</li>`).join("")}
    </ul>
    <div class="card-actions">
      <button class="primary-btn" data-save-opportunity="${item.id}">${bookmarks.includes(item.id) ? "Saved ★" : "Save Opportunity ☆"}</button>
      <button class="secondary-btn" id="copyDetailsButton">Copy Details</button>
    </div>
  `;

  modalBackdrop.classList.add("show");
  modalBackdrop.setAttribute("aria-hidden", "false");

  const copyButton = document.getElementById("copyDetailsButton");
  copyButton.addEventListener("click", () => {
    const detailsText = `${item.title}\nCategory: ${item.category}\nOrganizer: ${item.organizer}\nLocation: ${item.location}\nDeadline: ${formatDate(item.deadline)}\nEligibility: ${item.eligibility}`;
    navigator.clipboard.writeText(detailsText).then(() => showToast("Details copied."));
  });
}

function closeModal() {
  modalBackdrop.classList.remove("show");
  modalBackdrop.setAttribute("aria-hidden", "true");
}

function closeMobileMenu() {
  if (!menuToggle) return;
  siteHeader.classList.remove("mobile-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation menu");
}

function toggleMobileMenu() {
  if (!menuToggle) return;
  const isOpen = siteHeader.classList.toggle("mobile-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
}

function navigateTo(pageId) {
  closeMobileMenu();

  if (pageId === "admin" && (!currentUser || currentUser.role !== "admin")) {
    showToast("Please login as an admin to open the Admin page.");
    pageId = currentUser ? "home" : "login";
  }

  const currentPage = document.querySelector(".page.active");
  const nextPage = document.getElementById(pageId);
  if (!nextPage || currentPage === nextPage) return;

  currentPage.classList.add("exiting");

  setTimeout(() => {
    currentPage.classList.remove("active", "exiting");
    nextPage.classList.add("active");

    navLinks.forEach(link => {
      link.classList.toggle("active", link.dataset.pageTarget === pageId);
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
    revealVisibleItems();

    if (pageId === "saved") renderSaved();
    if (pageId === "calendar") renderCalendar();
    if (pageId === "notifications") renderNotifications();
    if (pageId === "subscriptions" || pageId === "home") renderRoleBasedSubscriptions();
    if (pageId === "admin") updateAdminAccess();
  }, 240);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

function updateAdminAccess() {
  const isAdmin = currentUser && currentUser.role === "admin";
  adminLock.style.display = isAdmin ? "none" : "block";
  adminPanel.classList.toggle("show", isAdmin);
}

function updateUserBox() {
  if (!currentUser) {
    accountButton.textContent = "Login";
    currentUserBox.innerHTML = "";
    return;
  }

  accountButton.textContent = currentUser.role === "admin" ? "Admin" : "Account";
  currentUserBox.innerHTML = `
    <div class="user-pill">
      Logged in as ${currentUser.name} (${currentUser.role})
    </div>
    <button class="secondary-btn full-btn" id="logoutButton">Logout</button>
  `;

  document.getElementById("logoutButton").addEventListener("click", () => {
    currentUser = null;
    localStorage.removeItem(storageKeys.currentUser);
    updateUserBox();
    updateAdminAccess();
    renderRoleBasedSubscriptions();
    updateNavigationVisibility();
    if (document.getElementById("subscriptions").classList.contains("active")) {
      navigateTo("home");
    }
    showToast("Logged out successfully.");
  });
}

function login(email, password) {
  const users = getFromStorage(storageKeys.users, demoUsers);
  const user = users.find(item => item.email.toLowerCase() === email.toLowerCase() && item.password === password);

  if (!user) {
    showToast("Invalid email or password.");
    return;
  }

  currentUser = {
    name: user.name,
    email: user.email,
    role: user.role
  };
  saveToStorage(storageKeys.currentUser, currentUser);
  updateUserBox();
  updateAdminAccess();
  renderRoleBasedSubscriptions();
  updateNavigationVisibility();
  showToast(`Welcome, ${currentUser.name}!`);
  navigateTo("home");
}

function register(name, email, password) {
  if (!email.includes("@")) {
    showToast("Email must contain @.");
    return;
  }

  if (password.length < 8) {
    showToast("Password must be at least 8 characters.");
    return;
  }

  const users = getFromStorage(storageKeys.users, demoUsers);
  const existingUser = users.find(item => item.email.toLowerCase() === email.toLowerCase());

  if (existingUser) {
    showToast("Email already registered.");
    return;
  }

  const newUser = {
    name,
    email,
    password,
    role: "user"
  };

  users.push(newUser);
  saveToStorage(storageKeys.users, users);
  showToast("Account created. You can now login.");

  document.querySelector('[data-auth-tab="loginForm"]').click();
  document.getElementById("loginEmail").value = email;
  document.getElementById("loginPassword").value = password;
}

function addOpportunityFromAdmin(event) {
  event.preventDefault();

  if (!currentUser || currentUser.role !== "admin") {
    showToast("Only admin can post announcements.");
    return;
  }

  const newOpportunity = {
    id: `custom-${Date.now()}`,
    title: document.getElementById("adminTitle").value.trim(),
    category: document.getElementById("adminCategory").value,
    organizer: document.getElementById("adminOrganizer").value.trim(),
    location: document.getElementById("adminLocation").value.trim(),
    deadline: document.getElementById("adminDeadline").value,
    status: document.getElementById("adminStatus").value,
    eligibility: document.getElementById("adminEligibility").value.trim(),
    description: document.getElementById("adminDescription").value.trim(),
    requirements: ["Valid ID", "Completed application form", "Other requirements based on the organizer"],
    link: "Contact the organizer for the official application link or office process."
  };

  if (!newOpportunity.title || !newOpportunity.deadline || !newOpportunity.description) {
    showToast("Please complete all required fields.");
    return;
  }

  const customOpportunities = getFromStorage(storageKeys.opportunities, []);
  customOpportunities.push(newOpportunity);
  saveToStorage(storageKeys.opportunities, customOpportunities);

  opportunities = [...defaultOpportunities, ...customOpportunities.filter(item => item.category !== "Government Program")];
  adminForm.reset();
  refreshAll();
  showToast("Announcement published successfully.");
}

function revealVisibleItems() {
  const revealElements = document.querySelectorAll(".page.active .reveal");
  revealElements.forEach((element, index) => {
    setTimeout(() => element.classList.add("visible"), index * 70);
  });
}

function setupRevealOnScroll() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.14 });

  document.querySelectorAll(".reveal").forEach(element => observer.observe(element));
}

function setupEventListeners() {
  if (menuToggle) {
    menuToggle.addEventListener("click", event => {
      event.stopPropagation();
      toggleMobileMenu();
    });
  }

  document.addEventListener("click", event => {
    const pageButton = event.target.closest("[data-page-target]");
    if (pageButton) {
      event.preventDefault();
      navigateTo(pageButton.dataset.pageTarget);
      return;
    }

    if (siteHeader.classList.contains("mobile-open") && !event.target.closest(".navbar")) {
      closeMobileMenu();
    }
  });

  document.querySelectorAll("[data-category-jump]").forEach(button => {
    button.addEventListener("click", () => {
      navigateTo("opportunities");
      setTimeout(() => {
        categoryFilter.value = button.dataset.categoryJump;
        renderOpportunities();
      }, 280);
    });
  });

  [searchInput, categoryFilter, statusFilter, locationFilter].forEach(input => {
    input.addEventListener("input", renderOpportunities);
    input.addEventListener("change", renderOpportunities);
  });

  resetFilters.addEventListener("click", () => {
    searchInput.value = "";
    categoryFilter.value = "All";
    statusFilter.value = "All";
    locationFilter.value = "All";
    deadlineSorted = false;
    sortDeadlineButton.textContent = "Sort by Nearest Deadline";
    renderOpportunities();
  });

  sortDeadlineButton.addEventListener("click", () => {
    deadlineSorted = !deadlineSorted;
    sortDeadlineButton.textContent = deadlineSorted ? "Return to Default Order" : "Sort by Nearest Deadline";
    renderOpportunities();
  });

  document.addEventListener("click", event => {
    const saveButton = event.target.closest("[data-save-opportunity]");
    const detailsButton = event.target.closest("[data-view-details]");
    const subscribeButton = event.target.closest("[data-subscribe-plan]");

    if (saveButton) {
      toggleBookmark(saveButton.dataset.saveOpportunity);
    }

    if (detailsButton) {
      showDetails(detailsButton.dataset.viewDetails);
    }

    if (subscribeButton) {
      const plan = subscribeButton.dataset.subscribePlan === "institution" ? "Institution Plan (₱1,500/month)" : "Student Plan (₱39/month)";
      if (!currentUser) {
        showToast(`Login first to subscribe to the ${plan}.`);
        navigateTo("login");
        return;
      }
      showToast(`${plan} selected. Subscription checkout can be connected in the next version.`);
    }
  });

  modalClose.addEventListener("click", closeModal);
  modalBackdrop.addEventListener("click", event => {
    if (event.target === modalBackdrop) closeModal();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeModal();
      closeMobileMenu();
    }
  });

  adminForm.addEventListener("submit", addOpportunityFromAdmin);

  loginForm.addEventListener("submit", event => {
    event.preventDefault();
    login(
      document.getElementById("loginEmail").value.trim(),
      document.getElementById("loginPassword").value
    );
  });

  registerForm.addEventListener("submit", event => {
    event.preventDefault();
    register(
      document.getElementById("registerName").value.trim(),
      document.getElementById("registerEmail").value.trim(),
      document.getElementById("registerPassword").value
    );
  });

  document.querySelectorAll("[data-auth-tab]").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".auth-tab").forEach(item => item.classList.remove("active"));
      document.querySelectorAll(".auth-form").forEach(item => item.classList.remove("active"));
      tab.classList.add("active");
      document.getElementById(tab.dataset.authTab).classList.add("active");
    });
  });

  window.addEventListener("scroll", () => {
    siteHeader.classList.toggle("scrolled", window.scrollY > 10);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) closeMobileMenu();
  });
}

window.addEventListener("load", () => {
  setTimeout(() => {
    pageLoader.classList.add("hidden");
  }, 500);
});

initializeStorage();
setupEventListeners();
setupRevealOnScroll();
refreshAll();
revealVisibleItems();
