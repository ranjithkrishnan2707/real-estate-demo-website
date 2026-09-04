/**
 * AURA ESTATES - Data Store (Tamil Nadu Edition)
 * Modern ultra-luxury real estate database tailored for Tamil Nadu, India.
 */

const REAL_ESTATE_DATA = {
  currencySymbol: "₹",
  properties: [
    {
      id: "prop-1",
      title: "The ECR Oceanfront Palace",
      location: "East Coast Road (ECR), Chennai, TN",
      city: "Chennai",
      address: "188 East Coast Road, Neelankarai, Chennai - 600115",
      price: 285000000,
      formattedPrice: "₹28.5 Cr",
      category: "villas",
      type: "Buy",
      beds: 6,
      baths: 8,
      sqft: 11500,
      garages: 4,
      yearBuilt: 2024,
      rating: 4.98,
      featured: true,
      status: "Exclusive",
      mainImage: "./assets/images/hero_villa.jpg",
      gallery: [
        "./assets/images/hero_villa.jpg",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80"
      ],
      description: "An architectural landmark on Chennai's prime East Coast Road featuring private ocean access, infinity pool overlooking the Bay of Bengal, Italian marble flooring, lush coconut groves, biometric security, custom indoor theatre, and automated smart climate control.",
      amenities: ["Private Beach Access", "Infinity Bay Pool", "Home Theatre", "Italian Marble", "100% Power Backup", "Private Lift", "Landscaped Gardens"],
      lat: 12.9492,
      lng: 80.2586,
      agentId: "agent-1"
    },
    {
      id: "prop-2",
      title: "Poes Garden Royal Heritage Manor",
      location: "Poes Garden, Chennai, TN",
      city: "Chennai",
      address: "12 Poes Garden, Kasturi Ranga Rd, Chennai - 600086",
      price: 450000000,
      formattedPrice: "₹45.0 Cr",
      category: "villas",
      type: "Buy",
      beds: 7,
      baths: 9,
      sqft: 14200,
      garages: 6,
      yearBuilt: 2023,
      rating: 4.99,
      featured: true,
      status: "Prime VVIP",
      mainImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
      ],
      description: "Nestled in Chennai's most revered VVIP neighborhood of Poes Garden. Features 3 Grounds of prime land, teakwood carvings, indoor heated plunge pool, multi-tier security, private elevator, grand courtyard, and underground parking for 6 cars.",
      amenities: ["VVIP Neighborhood", "3 Grounds Land", "Heated Indoor Pool", "Private Security Post", "Teakwood Interiors"],
      lat: 13.0473,
      lng: 80.2519,
      agentId: "agent-2"
    },
    {
      id: "prop-3",
      title: "Boat Club Road Skyline Sky-Villa",
      location: "Boat Club Road, RA Puram, Chennai, TN",
      city: "Chennai",
      address: "5 Boat Club 3rd Avenue, RA Puram, Chennai - 600028",
      price: 320000000,
      formattedPrice: "₹32.0 Cr",
      category: "penthouse",
      type: "Buy",
      beds: 5,
      baths: 6,
      sqft: 8800,
      garages: 3,
      yearBuilt: 2024,
      rating: 4.96,
      featured: true,
      status: "Featured",
      mainImage: "./assets/images/property_penthouse.jpg",
      gallery: [
        "./assets/images/property_penthouse.jpg",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80"
      ],
      description: "Ultra-luxury penthouse offering panoramic views of the Adyar River and lush canopy of Boat Club. 360-degree terrace garden, private plunge pool, Poggenpohl kitchen, VRV air conditioning, and concierge services.",
      amenities: ["Adyar River View", "Terrace Plunge Pool", "Poggenpohl Kitchen", "VRV Aircon", "Private Sky Terrace"],
      lat: 13.0248,
      lng: 80.2458,
      agentId: "agent-1"
    },
    {
      id: "prop-4",
      title: "Nilgiris Mist Estate & Luxury Chalet",
      location: "Coonoor / Ooty, Nilgiris, TN",
      city: "Ooty",
      address: "Red Hills Road, Coonoor, Nilgiris - 643101",
      price: 185000000,
      formattedPrice: "₹18.5 Cr",
      category: "chalet",
      type: "Buy",
      beds: 5,
      baths: 6,
      sqft: 7500,
      garages: 3,
      yearBuilt: 2023,
      rating: 4.95,
      featured: false,
      status: "Hill Station",
      mainImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
      ],
      description: "A private 5-acre tea garden estate perched in the misty Nilgiri hills. Features stone fireplaces, glass conservatory lounge, organic vegetable farm, helipad access, and panoramic mountain valley views.",
      amenities: ["5 Acres Tea Garden", "Helipad Access", "Glass Conservatory", "Stone Fireplaces", "Organic Farm"],
      lat: 11.3530,
      lng: 76.7959,
      agentId: "agent-2"
    },
    {
      id: "prop-5",
      title: "Race Course Golf Presidential Villa",
      location: "Race Course, Coimbatore, TN",
      city: "Coimbatore",
      address: "42 Race Course Road, Coimbatore - 641018",
      price: 155000000,
      formattedPrice: "₹15.5 Cr",
      category: "villas",
      type: "Buy",
      beds: 5,
      baths: 6,
      sqft: 9200,
      garages: 4,
      yearBuilt: 2024,
      rating: 4.92,
      featured: true,
      status: "Exclusive",
      mainImage: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80"
      ],
      description: "Coimbatore's finest residential estate along the iconic green Race Course Promenade. Double-height ceilings, private lap pool, solar energy grid, imported Italian marble, and climate-controlled wine cellar.",
      amenities: ["Race Course Location", "Solar Energy Powered", "Lap Pool", "Double Height Living", "Security Garrison"],
      lat: 11.0018,
      lng: 76.9744,
      agentId: "agent-1"
    },
    {
      id: "prop-6",
      title: "Mahabalipuram Seafront Resort Villa",
      location: "Mahabalipuram Coastal Zone, ECR, TN",
      city: "Mahabalipuram",
      address: "Shore Temple Road, Mahabalipuram - 603104",
      price: 210000000,
      formattedPrice: "₹21.0 Cr",
      category: "oceanfront",
      type: "Buy",
      beds: 6,
      baths: 7,
      sqft: 9800,
      garages: 4,
      yearBuilt: 2022,
      rating: 4.97,
      featured: false,
      status: "Beachfront",
      mainImage: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80"
      ],
      description: "Resort-style seafront estate situated near historical Mahabalipuram heritage coast. Private sea-deck, infinity pool, Zen water garden, open pavilion, and party lawn for up to 200 guests.",
      amenities: ["Private Sea Deck", "Zen Water Garden", "Party Lawn", "Infinity Pool", "Guest Cottages"],
      lat: 12.6269,
      lng: 80.1927,
      agentId: "agent-2"
    },
    {
      id: "prop-7",
      title: "Nungambakkam Highline Mansion",
      location: "Nungambakkam, Chennai, TN",
      city: "Chennai",
      address: "35 Khader Nawaz Khan Rd, Chennai - 600006",
      price: 450000,
      formattedPrice: "₹4.5 L / mo",
      category: "villas",
      type: "Rent",
      beds: 4,
      baths: 5,
      sqft: 5800,
      garages: 2,
      yearBuilt: 2023,
      rating: 4.88,
      featured: false,
      status: "Rental",
      mainImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
      ],
      description: "Fully furnished executive rental mansion on prestigious Khader Nawaz Khan Road. Private swimming pool, home gym, Italian leather furniture, 24/7 security guard post, and generator backup.",
      amenities: ["Fully Furnished", "KNK Road Location", "Home Gym", "Private Pool", "24/7 Security"],
      lat: 13.0604,
      lng: 80.2496,
      agentId: "agent-1"
    },
    {
      id: "prop-8",
      title: "Anna Salai Flagship Commercial Tower",
      location: "Mount Road / Anna Salai, Chennai, TN",
      city: "Chennai",
      address: "600 Anna Salai, Thousand Lights, Chennai - 600006",
      price: 385000000,
      formattedPrice: "₹38.5 Cr",
      category: "commercial",
      type: "Buy",
      beds: 0,
      baths: 6,
      sqft: 16500,
      garages: 8,
      yearBuilt: 2024,
      rating: 4.93,
      featured: false,
      status: "Commercial",
      mainImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
      ],
      description: "AAA rated commercial corporate headquarters in the central CBD of Anna Salai, Chennai. Glass façade, executive boardrooms, high-speed elevators, biometric turnstiles, and EV charging bays.",
      amenities: ["CBD Central Location", "AAA Commercial Grade", "High Speed Lifts", "EV Charging Bays", "24/7 Security"],
      lat: 13.0569,
      lng: 80.2573,
      agentId: "agent-2"
    }
  ],

  agents: [
    {
      id: "agent-1",
      name: "Karthik Sundaram",
      title: "Managing Director - Tamil Nadu & South India",
      phone: "+91 98400 12345",
      email: "karthik.s@auraestates.in",
      experience: "16+ Years TN Luxury Market",
      salesVolume: "₹1,800 Cr+ Lifetime Transactions",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      specialties: ["Poes Garden & Boat Club", "ECR Beachfront Mansions", "Coimbatore Estates"]
    },
    {
      id: "agent-2",
      name: "Ananya Ramachandran",
      title: "Senior Vice President - Private Client Advisory",
      phone: "+91 98410 98765",
      email: "ananya.r@auraestates.in",
      experience: "14+ Years HNI Advisory",
      salesVolume: "₹1,250 Cr+ Lifetime Transactions",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      specialties: ["Nungambakkam Penthouses", "Nilgiris Tea Estates", "Off-Market Properties"]
    }
  ],

  locations: [
    {
      id: "loc-1",
      name: "ECR & Neelankarai",
      tagline: "East Coast Road Beachfront",
      image: "./assets/images/hero_villa.jpg",
      propertyCount: 28,
      startPrice: "₹15.0 Cr"
    },
    {
      id: "loc-2",
      name: "Poes Garden & Boat Club",
      tagline: "Chennai VVIP Enclaves",
      image: "./assets/images/property_penthouse.jpg",
      propertyCount: 14,
      startPrice: "₹25.0 Cr"
    },
    {
      id: "loc-3",
      name: "Nilgiris (Ooty & Coonoor)",
      tagline: "Misty Tea Garden Hill Estates",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
      propertyCount: 12,
      startPrice: "₹12.5 Cr"
    },
    {
      id: "loc-4",
      name: "Coimbatore (Race Course)",
      tagline: "Promenade Golf & Luxury Villas",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
      propertyCount: 18,
      startPrice: "₹10.0 Cr"
    }
  ],

  testimonials: [
    {
      id: "test-1",
      quote: "AURA Estates made our acquisition of the ECR beach mansion completely seamless and confidential. Karthik's knowledge of Tamil Nadu's prime real estate is second to none.",
      clientName: "S. Murugappan",
      clientRole: "Industrialist & MD, Murugappa Group Enterprise",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "test-2",
      quote: "Ananya represented us during our sale of the Boat Club penthouse. Her network among Chennai's business families secured an exceptional valuation.",
      clientName: "Dr. Revathi Chettiar",
      clientRole: "Healthcare Founder & Philanthropist",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "test-3",
      quote: "Acquiring a 5-acre heritage tea estate in Coonoor was smooth thanks to AURA's clear title verification and white-glove service.",
      clientName: "Vikram Natarajan",
      clientRole: "Tech Investor & Co-Founder",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = REAL_ESTATE_DATA;
}
