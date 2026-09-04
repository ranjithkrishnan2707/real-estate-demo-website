/**
 * AURA ESTATES - Application Logic
 * State management, dynamic rendering, filtering, financial tools, and interactive modal dialogs.
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- App State ---
  const state = {
    properties: REAL_ESTATE_DATA.properties,
    filteredProperties: [...REAL_ESTATE_DATA.properties],
    favorites: JSON.parse(localStorage.getItem('aura_favorites') || '[]'),
    activeCategory: 'all',
    activeTab: 'Buy',
    searchQuery: '',
    selectedLocation: 'all',
    selectedType: 'all',
    selectedBeds: 'all',
    priceMax: 35000000,
    sortBy: 'featured',
    currentPropertyModal: null,
    theme: localStorage.getItem('aura_theme') || 'dark'
  };

  // --- Initialize Application ---
  initTheme();
  initHeaderScroll();
  initHeroSlider();
  renderCategories();
  renderProperties();
  renderLocations();
  renderAgents();
  renderTestimonials();
  initMortgageCalculator();
  initEventListeners();
  updateWishlistCount();

  // --- Theme Controller ---
  function initTheme() {
    document.documentElement.setAttribute('data-theme', state.theme);
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) {
      themeBtn.innerHTML = state.theme === 'dark' 
        ? '<i class="fa-solid fa-sun"></i>' 
        : '<i class="fa-solid fa-moon"></i>';
    }
  }

  function toggleTheme() {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('aura_theme', state.theme);
    initTheme();
    showToast(`Switched to ${state.theme.toUpperCase()} luxury theme`);
  }

  // --- Header Scroll Effect ---
  function initHeaderScroll() {
    const header = document.getElementById('mainHeader');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // --- Hero Background Slider ---
  function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    if (!slides.length) return;
    let currentSlide = 0;

    setInterval(() => {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }, 6000);
  }

  // --- Render Categories / Filter Pills ---
  function renderCategories() {
    const container = document.getElementById('categoryPills');
    if (!container) return;

    const categories = [
      { id: 'all', label: 'All Estates' },
      { id: 'villas', label: 'Luxury Villas' },
      { id: 'penthouse', label: 'Penthouses' },
      { id: 'oceanfront', label: 'Waterfront' },
      { id: 'chalet', label: 'Alpine Chalets' },
      { id: 'commercial', label: 'Commercial' }
    ];

    container.innerHTML = categories.map(cat => `
      <button class="pill-btn ${state.activeCategory === cat.id ? 'active' : ''}" data-cat="${cat.id}">
        ${cat.label}
      </button>
    `).join('');

    container.querySelectorAll('.pill-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        container.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.activeCategory = btn.dataset.cat;
        applyFilters();
      });
    });
  }

  // --- Render Property Grid ---
  function renderProperties() {
    const grid = document.getElementById('propertyGrid');
    const countEl = document.getElementById('propertyResultCount');
    if (!grid) return;

    if (countEl) {
      countEl.textContent = `${state.filteredProperties.length} Properties Found`;
    }

    if (state.filteredProperties.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
          <i class="fa-solid fa-house-chimney-crack" style="font-size: 3rem; color: var(--accent-gold); margin-bottom: 16px;"></i>
          <h3 style="font-family: var(--font-heading); font-size: 1.5rem; margin-bottom: 8px;">No Exclusive Properties Match Your Criteria</h3>
          <p style="color: var(--text-secondary); max-width: 450px; margin: 0 auto 20px;">Try adjusting your location, price slider, or property type filters.</p>
          <button class="btn btn-outline" id="resetFiltersBtn"><i class="fa-solid fa-rotate-left"></i> Reset All Filters</button>
        </div>
      `;
      const resetBtn = document.getElementById('resetFiltersBtn');
      if (resetBtn) resetBtn.addEventListener('click', resetFilters);
      return;
    }

    grid.innerHTML = state.filteredProperties.map(prop => {
      const isFav = state.favorites.includes(prop.id);
      const agent = REAL_ESTATE_DATA.agents.find(a => a.id === prop.agentId);

      return `
        <div class="property-card" data-id="${prop.id}">
          <div class="card-img-wrap">
            <img class="card-img" src="${prop.mainImage}" alt="${prop.title}" loading="lazy">
            <span class="card-badge">${prop.status}</span>
            <button class="card-fav-btn ${isFav ? 'active' : ''}" data-id="${prop.id}" title="Save to Favorites">
              <i class="${isFav ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
            </button>
            <div class="card-price-tag">${prop.formattedPrice}</div>
          </div>
          <div class="card-body">
            <div class="card-location">
              <i class="fa-solid fa-location-dot"></i> ${prop.location}
            </div>
            <h3 class="card-title">${prop.title}</h3>
            <div class="card-specs">
              ${prop.beds ? `<div class="spec-item"><i class="fa-solid fa-bed"></i> ${prop.beds} Beds</div>` : ''}
              <div class="spec-item"><i class="fa-solid fa-bath"></i> ${prop.baths} Baths</div>
              <div class="spec-item"><i class="fa-solid fa-vector-square"></i> ${prop.sqft.toLocaleString()} Sq Ft</div>
            </div>
            <div class="card-footer">
              ${agent ? `
                <div class="card-agent-mini">
                  <img src="${agent.avatar}" alt="${agent.name}">
                  <span>${agent.name}</span>
                </div>
              ` : '<span></span>'}
              <button class="btn btn-outline quick-view-btn" data-id="${prop.id}">
                Quick View <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Attach Event Handlers to Rendered Elements
    grid.querySelectorAll('.card-fav-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleFavorite(btn.dataset.id);
      });
    });

    grid.querySelectorAll('.quick-view-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        openPropertyModal(btn.dataset.id);
      });
    });
  }

  // --- Filtering Engine ---
  function applyFilters() {
    state.filteredProperties = state.properties.filter(prop => {
      // Category Filter
      if (state.activeCategory !== 'all' && prop.category !== state.activeCategory) {
        return false;
      }
      // Tab Filter (Buy / Rent)
      if (state.activeTab && prop.type !== state.activeTab) {
        return false;
      }
      // Location Dropdown / Search Query
      if (state.selectedLocation !== 'all' && !prop.location.toLowerCase().includes(state.selectedLocation.toLowerCase())) {
        return false;
      }
      if (state.searchQuery) {
        const q = state.searchQuery.toLowerCase();
        const match = prop.title.toLowerCase().includes(q) || 
                      prop.location.toLowerCase().includes(q) ||
                      prop.description.toLowerCase().includes(q);
        if (!match) return false;
      }
      // Property Type Dropdown
      if (state.selectedType !== 'all' && prop.category !== state.selectedType) {
        return false;
      }
      // Bedrooms
      if (state.selectedBeds !== 'all') {
        const bedsMin = parseInt(state.selectedBeds);
        if (prop.beds < bedsMin) return false;
      }
      // Price Max Range
      if (prop.type === 'Buy' && prop.price > state.priceMax) {
        return false;
      }
      return true;
    });

    // Sorting Logic
    if (state.sortBy === 'price-low') {
      state.filteredProperties.sort((a, b) => a.price - b.price);
    } else if (state.sortBy === 'price-high') {
      state.filteredProperties.sort((a, b) => b.price - a.price);
    } else if (state.sortBy === 'newest') {
      state.filteredProperties.sort((a, b) => b.yearBuilt - a.yearBuilt);
    }

    renderProperties();
  }

  function resetFilters() {
    state.activeCategory = 'all';
    state.searchQuery = '';
    state.selectedLocation = 'all';
    state.selectedType = 'all';
    state.selectedBeds = 'all';
    state.priceMax = 35000000;
    state.sortBy = 'featured';

    const searchInput = document.getElementById('heroSearchInput');
    const locSelect = document.getElementById('heroLocSelect');
    const typeSelect = document.getElementById('heroTypeSelect');
    const bedSelect = document.getElementById('heroBedSelect');
    const priceSlider = document.getElementById('priceRangeSlider');
    const sortSelect = document.getElementById('sortSelect');

    if (searchInput) searchInput.value = '';
    if (locSelect) locSelect.value = 'all';
    if (typeSelect) typeSelect.value = 'all';
    if (bedSelect) bedSelect.value = 'all';
    if (priceSlider) priceSlider.value = 35000000;
    if (sortSelect) sortSelect.value = 'featured';

    renderCategories();
    applyFilters();
    showToast("Filters reset to default view");
  }

  // --- Render Neighborhood Locations ---
  function renderLocations() {
    const grid = document.getElementById('locationsGrid');
    if (!grid) return;

    grid.innerHTML = REAL_ESTATE_DATA.locations.map(loc => `
      <div class="location-card" data-loc="${loc.name}">
        <img class="location-img" src="${loc.image}" alt="${loc.name}" loading="lazy">
        <div class="location-overlay">
          <h3 class="location-name">${loc.name}</h3>
          <span class="location-tagline">${loc.tagline}</span>
          <div class="location-meta">
            <span>${loc.propertyCount} Exclusive Listings</span>
            <span>From ${loc.startPrice}</span>
          </div>
        </div>
      </div>
    `).join('');

    grid.querySelectorAll('.location-card').forEach(card => {
      card.addEventListener('click', () => {
        state.selectedLocation = card.dataset.loc;
        const locSelect = document.getElementById('heroLocSelect');
        if (locSelect) locSelect.value = card.dataset.loc;
        applyFilters();
        document.getElementById('propertiesSection').scrollIntoView({ behavior: 'smooth' });
      });
    });
  }

  // --- Render Agents ---
  function renderAgents() {
    const grid = document.getElementById('agentsGrid');
    if (!grid) return;

    grid.innerHTML = REAL_ESTATE_DATA.agents.map(agent => `
      <div class="agent-card">
        <img class="agent-avatar" src="${agent.avatar}" alt="${agent.name}">
        <h3 class="agent-name">${agent.name}</h3>
        <p class="agent-title">${agent.title}</p>
        <div class="agent-stats">
          <div><strong>${agent.experience}</strong><br><small style="color:var(--text-muted)">Experience</small></div>
          <div><strong>${agent.salesVolume}</strong><br><small style="color:var(--text-muted)">Track Record</small></div>
        </div>
        <div class="agent-actions">
          <button class="btn btn-outline" onclick="window.location.href='mailto:${agent.email}'">
            <i class="fa-regular fa-envelope"></i> Email
          </button>
          <button class="btn btn-gold schedule-agent-btn" data-agent="${agent.name}">
            <i class="fa-regular fa-calendar-check"></i> Book Consultation
          </button>
        </div>
      </div>
    `).join('');

    grid.querySelectorAll('.schedule-agent-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        openScheduleModal(null, btn.dataset.agent);
      });
    });
  }

  // --- Render Testimonials ---
  function renderTestimonials() {
    const container = document.getElementById('testimonialsGrid');
    if (!container) return;

    container.innerHTML = REAL_ESTATE_DATA.testimonials.map(t => `
      <div style="background: var(--bg-card); border: 1px solid var(--border-light); border-radius: var(--radius-lg); padding: 30px; display: flex; flex-direction: column; justify-content: space-between;">
        <div style="color: var(--accent-gold); font-size: 1.1rem; margin-bottom: 16px;">
          ${'<i class="fa-solid fa-star"></i>'.repeat(t.rating)}
        </div>
        <p style="font-style: italic; color: var(--text-primary); font-size: 1.05rem; margin-bottom: 24px;">"${t.quote}"</p>
        <div style="display: flex; align-items: center; gap: 14px;">
          <img src="${t.avatar}" alt="${t.clientName}" style="width: 48px; height: 48px; border-radius: 50%; object-fit: cover; border: 2px solid var(--accent-gold);">
          <div>
            <h4 style="font-size: 1rem; font-weight: 600;">${t.clientName}</h4>
            <span style="font-size: 0.8rem; color: var(--text-muted);">${t.clientRole}</span>
          </div>
        </div>
      </div>
    `).join('');
  }

  // --- Mortgage Calculator Calculations ---
  function initMortgageCalculator() {
    const priceInput = document.getElementById('calcHomePrice');
    const downInput = document.getElementById('calcDownPayment');
    const rateInput = document.getElementById('calcInterestRate');
    const termInput = document.getElementById('calcLoanTerm');

    if (!priceInput || !downInput || !rateInput || !termInput) return;

    function calculateMortgage() {
      const homePrice = parseFloat(priceInput.value);
      const downPercent = parseFloat(downInput.value);
      const rate = parseFloat(rateInput.value) / 100 / 12;
      const termYears = parseInt(termInput.value);
      const totalPayments = termYears * 12;

      const downAmount = homePrice * (downPercent / 100);
      const loanAmount = homePrice - downAmount;

      let monthlyPrincipalInterest = 0;
      if (rate > 0) {
        monthlyPrincipalInterest = loanAmount * (rate * Math.pow(1 + rate, totalPayments)) / (Math.pow(1 + rate, totalPayments) - 1);
      } else {
        monthlyPrincipalInterest = loanAmount / totalPayments;
      }

      const monthlyTax = (homePrice * 0.012) / 12; // ~1.2% tax
      const monthlyInsurance = (homePrice * 0.004) / 12; // ~0.4% insurance
      const monthlyHOA = homePrice > 10000000 ? 1200 : 450; // HOA estimate

      const totalMonthly = monthlyPrincipalInterest + monthlyTax + monthlyInsurance + monthlyHOA;

      // Update UI Labels
      document.getElementById('valHomePrice').textContent = `$${homePrice.toLocaleString()}`;
      document.getElementById('valDownPayment').textContent = `${downPercent}% ($${Math.round(downAmount).toLocaleString()})`;
      document.getElementById('valInterestRate').textContent = `${rateInput.value}%`;
      document.getElementById('valLoanTerm').textContent = `${termYears} Years`;
      document.getElementById('calcMonthlyTotal').textContent = `$${Math.round(totalMonthly).toLocaleString()}`;

      // Update Breakdown Percentages & Bar
      const pPercent = (monthlyPrincipalInterest / totalMonthly) * 100;
      const taxPercent = (monthlyTax / totalMonthly) * 100;
      const insPercent = (monthlyInsurance / totalMonthly) * 100;
      const hoaPercent = (monthlyHOA / totalMonthly) * 100;

      document.getElementById('barPrincipal').style.width = `${pPercent}%`;
      document.getElementById('barTax').style.width = `${taxPercent}%`;
      document.getElementById('barInsurance').style.width = `${insPercent}%`;
      document.getElementById('barHOA').style.width = `${hoaPercent}%`;

      document.getElementById('legPrincipal').textContent = `$${Math.round(monthlyPrincipalInterest).toLocaleString()}`;
      document.getElementById('legTax').textContent = `$${Math.round(monthlyTax).toLocaleString()}`;
      document.getElementById('legInsurance').textContent = `$${Math.round(monthlyInsurance).toLocaleString()}`;
      document.getElementById('legHOA').textContent = `$${Math.round(monthlyHOA).toLocaleString()}`;
    }

    priceInput.addEventListener('input', calculateMortgage);
    downInput.addEventListener('input', calculateMortgage);
    rateInput.addEventListener('input', calculateMortgage);
    termInput.addEventListener('input', calculateMortgage);

    calculateMortgage();
  }

  // --- Favorites / Wishlist Management ---
  function toggleFavorite(id) {
    const index = state.favorites.indexOf(id);
    if (index > -1) {
      state.favorites.splice(index, 1);
      showToast("Removed property from saved wishlist");
    } else {
      state.favorites.push(id);
      showToast("Added property to saved wishlist!");
    }
    localStorage.setItem('aura_favorites', JSON.stringify(state.favorites));
    updateWishlistCount();
    renderProperties();
    renderWishlistDrawer();
  }

  function updateWishlistCount() {
    const badge = document.getElementById('wishlistCountBadge');
    if (badge) badge.textContent = state.favorites.length;
  }

  function renderWishlistDrawer() {
    const container = document.getElementById('wishlistItemsContainer');
    if (!container) return;

    if (state.favorites.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 40px 0; color: var(--text-muted);">
          <i class="fa-regular fa-heart" style="font-size: 2.5rem; margin-bottom: 12px; display: block;"></i>
          <p>Your wishlist is currently empty.</p>
        </div>
      `;
      return;
    }

    const favProps = state.properties.filter(p => state.favorites.includes(p.id));
    container.innerHTML = favProps.map(p => `
      <div class="wishlist-item">
        <img class="wishlist-thumb" src="${p.mainImage}" alt="${p.title}">
        <div class="wishlist-info">
          <h4 class="wishlist-title">${p.title}</h4>
          <span class="wishlist-price">${p.formattedPrice}</span>
        </div>
        <button class="wishlist-remove" data-id="${p.id}" title="Remove">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    `).join('');

    container.querySelectorAll('.wishlist-remove').forEach(btn => {
      btn.addEventListener('click', () => toggleFavorite(btn.dataset.id));
    });
  }

  // --- Modal Controllers ---
  function openPropertyModal(id) {
    const prop = state.properties.find(p => p.id === id);
    if (!prop) return;

    const modal = document.getElementById('propertyDetailModal');
    const content = document.getElementById('propertyModalContent');
    const agent = REAL_ESTATE_DATA.agents.find(a => a.id === prop.agentId);

    content.innerHTML = `
      <div class="modal-grid">
        <div>
          <img class="modal-gallery-main" id="modalMainImg" src="${prop.mainImage}" alt="${prop.title}">
          <div class="modal-thumbs">
            ${prop.gallery.map((img, i) => `
              <img class="modal-thumb ${i === 0 ? 'active' : ''}" src="${img}" alt="Gallery ${i+1}">
            `).join('')}
          </div>
        </div>
        <div>
          <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px;">
            <span class="card-badge">${prop.status}</span>
            <div style="font-family: var(--font-heading); font-size: 1.6rem; color: var(--accent-gold); font-weight: 700;">
              ${prop.formattedPrice}
            </div>
          </div>
          <h2 style="font-family: var(--font-heading); font-size: 2rem; margin-bottom: 6px;">${prop.title}</h2>
          <p style="color: var(--accent-gold); margin-bottom: 16px;"><i class="fa-solid fa-location-dot"></i> ${prop.address}</p>
          
          <div class="card-specs" style="margin-bottom: 20px;">
            ${prop.beds ? `<div class="spec-item"><i class="fa-solid fa-bed"></i> ${prop.beds} Beds</div>` : ''}
            <div class="spec-item"><i class="fa-solid fa-bath"></i> ${prop.baths} Baths</div>
            <div class="spec-item"><i class="fa-solid fa-vector-square"></i> ${prop.sqft.toLocaleString()} Sq Ft</div>
            <div class="spec-item"><i class="fa-solid fa-warehouse"></i> ${prop.garages} Garage</div>
          </div>

          <p style="color: var(--text-secondary); font-size: 0.95rem; margin-bottom: 20px; line-height: 1.6;">${prop.description}</p>
          
          <h4 style="font-family: var(--font-heading); font-size: 1.1rem; margin-bottom: 10px;">Premium Amenities</h4>
          <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px;">
            ${prop.amenities.map(a => `
              <span style="background: rgba(212, 175, 55, 0.1); border: 1px solid var(--border-gold); padding: 4px 12px; border-radius: var(--radius-full); font-size: 0.8rem; color: var(--accent-gold-light);">
                <i class="fa-solid fa-check" style="margin-right: 4px;"></i>${a}
              </span>
            `).join('')}
          </div>

          <div style="display: flex; gap: 12px;">
            <button class="btn btn-gold modal-schedule-btn" style="flex: 1;" data-id="${prop.id}">
              <i class="fa-regular fa-calendar-check"></i> Schedule Private Tour
            </button>
            <button class="btn btn-outline" style="width: 50px;" onclick="window.print()">
              <i class="fa-solid fa-print"></i>
            </button>
          </div>
        </div>
      </div>
    `;

    // Thumbnails click handler
    const mainImg = content.querySelector('#modalMainImg');
    content.querySelectorAll('.modal-thumb').forEach(thumb => {
      thumb.addEventListener('click', () => {
        content.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        mainImg.src = thumb.src;
      });
    });

    content.querySelector('.modal-schedule-btn').addEventListener('click', () => {
      closeModal('propertyDetailModal');
      openScheduleModal(prop.title, agent ? agent.name : 'Senior Agent');
    });

    openModal('propertyDetailModal');
  }

  function openScheduleModal(propertyTitle = '', agentName = '') {
    const propInput = document.getElementById('tourPropertyInput');
    const agentInput = document.getElementById('tourAgentInput');

    if (propInput) propInput.value = propertyTitle || 'General Private Tour Request';
    if (agentInput) agentInput.value = agentName || 'Assigned Senior Broker';

    openModal('scheduleTourModal');
  }

  function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.add('active');
  }

  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.classList.remove('active');
  }

  // --- Event Listeners Setup ---
  function initEventListeners() {
    // Theme Button
    const themeBtn = document.getElementById('themeToggleBtn');
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

    // Wishlist Drawer Toggle
    const wishlistBtn = document.getElementById('wishlistDrawerBtn');
    const drawerBackdrop = document.getElementById('wishlistDrawerBackdrop');
    const closeDrawerBtn = document.getElementById('closeDrawerBtn');

    if (wishlistBtn) {
      wishlistBtn.addEventListener('click', () => {
        renderWishlistDrawer();
        drawerBackdrop.classList.add('active');
      });
    }
    if (closeDrawerBtn) {
      closeDrawerBtn.addEventListener('click', () => {
        drawerBackdrop.classList.remove('active');
      });
    }

    // Tab Search Buttons (Buy / Rent)
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        state.activeTab = btn.dataset.tab;
        applyFilters();
      });
    });

    // Hero Search Bar Inputs
    const searchInput = document.getElementById('heroSearchInput');
    const locSelect = document.getElementById('heroLocSelect');
    const typeSelect = document.getElementById('heroTypeSelect');
    const bedSelect = document.getElementById('heroBedSelect');
    const searchBtn = document.getElementById('heroSearchBtn');

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
      });
    }
    if (locSelect) {
      locSelect.addEventListener('change', (e) => {
        state.selectedLocation = e.target.value;
      });
    }
    if (typeSelect) {
      typeSelect.addEventListener('change', (e) => {
        state.selectedType = e.target.value;
      });
    }
    if (bedSelect) {
      bedSelect.addEventListener('change', (e) => {
        state.selectedBeds = e.target.value;
      });
    }
    if (searchBtn) {
      searchBtn.addEventListener('click', () => {
        applyFilters();
        document.getElementById('propertiesSection').scrollIntoView({ behavior: 'smooth' });
      });
    }

    // Price Slider & Sort Select
    const priceSlider = document.getElementById('priceRangeSlider');
    const sortSelect = document.getElementById('sortSelect');

    if (priceSlider) {
      priceSlider.addEventListener('input', (e) => {
        state.priceMax = parseFloat(e.target.value);
        document.getElementById('priceSliderVal').textContent = `$${(state.priceMax / 1000000).toFixed(1)}M`;
        applyFilters();
      });
    }
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        state.sortBy = e.target.value;
        applyFilters();
      });
    }

    // Modal Close Triggers
    document.querySelectorAll('.modal-close-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const modal = btn.closest('.modal-backdrop');
        if (modal) modal.classList.remove('active');
      });
    });

    document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
      backdrop.addEventListener('click', (e) => {
        if (e.target === backdrop) backdrop.classList.remove('active');
      });
    });

    // Schedule Tour Form Submit
    const tourForm = document.getElementById('scheduleTourForm');
    if (tourForm) {
      tourForm.addEventListener('submit', (e) => {
        e.preventDefault();
        closeModal('scheduleTourModal');
        showToast("Private tour request submitted! Our senior broker will contact you shortly.");
        tourForm.reset();
      });
    }

    // 360 Tour Button Demo Trigger
    const play360Btn = document.getElementById('play360Btn');
    if (play360Btn) {
      play360Btn.addEventListener('click', () => {
        showToast("Launching interactive 360° Virtual Spatial Viewer...");
        openPropertyModal('prop-1');
      });
    }
  }

  // --- Toast Notification Helper ---
  function showToast(message) {
    const container = document.getElementById('toastContainer');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <i class="fa-solid fa-circle-check" style="color: var(--accent-gold);"></i>
      <span>${message}</span>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      toast.style.transition = 'all 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3500);
  }
});
