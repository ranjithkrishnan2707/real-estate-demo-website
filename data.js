/**
 * AURA ESTATES - Data Store
 * Modern luxury real estate database
 */

const REAL_ESTATE_DATA = {
  properties: [
    {
      id: "prop-1",
      title: "The Bel Air Vista Villa",
      location: "Bel Air, Los Angeles, CA",
      city: "Los Angeles",
      address: "10820 Chalon Rd, Bel Air, CA 90077",
      price: 24500000,
      formattedPrice: "$24,500,000",
      category: "villas",
      type: "Buy",
      beds: 6,
      baths: 8,
      sqft: 12400,
      garages: 4,
      yearBuilt: 2024,
      rating: 4.95,
      featured: true,
      status: "Exclusive",
      mainImage: "./assets/images/hero_villa.jpg",
      gallery: [
        "./assets/images/hero_villa.jpg",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80"
      ],
      description: "An architectural masterpiece perched atop Bel Air with panoramic ocean to city lights views. Features an ultra-wide heated infinity pool, private wine cellar, cinema room, biometric security, smart home automation, and expansive floor-to-ceiling motorized glass doors.",
      amenities: ["Infinity Pool", "Private Cinema", "Wine Cellar", "Smart Automation", "Spa & Sauna", "Helipad Access", "Outdoor Firepit"],
      lat: 34.0837,
      lng: -118.4455,
      agentId: "agent-1"
    },
    {
      id: "prop-2",
      title: "Manhattan Glass Penthouse",
      location: "Upper East Side, New York, NY",
      city: "New York",
      address: "432 Park Avenue, Penthouse 88, NY 10022",
      price: 32000000,
      formattedPrice: "$32,000,000",
      category: "penthouse",
      type: "Buy",
      beds: 5,
      baths: 6,
      sqft: 8600,
      garages: 2,
      yearBuilt: 2023,
      rating: 4.98,
      featured: true,
      status: "Featured",
      mainImage: "./assets/images/property_penthouse.jpg",
      gallery: [
        "./assets/images/property_penthouse.jpg",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
      ],
      description: "Crown jewel penthouse soaring high over Central Park. Highlights include a 360-degree skyline observation deck, private express elevator, Calacatta marble chef kitchen, heated chevron hardwood floors, and 24/7 concierge service.",
      amenities: ["Private Elevator", "Central Park Views", "Marble Fireplace", "24/7 Concierge", "Private Sky Terrace", "Custom Bar"],
      lat: 40.7616,
      lng: -73.9712,
      agentId: "agent-2"
    },
    {
      id: "prop-3",
      title: "Star Island Waterfront Manor",
      location: "Miami Beach, Florida",
      city: "Miami",
      address: "44 Star Island Dr, Miami Beach, FL 33139",
      price: 18900000,
      formattedPrice: "$18,900,000",
      category: "oceanfront",
      type: "Buy",
      beds: 7,
      baths: 9,
      sqft: 10500,
      garages: 3,
      yearBuilt: 2022,
      rating: 4.92,
      featured: true,
      status: "Hot Offer",
      mainImage: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80"
      ],
      description: "Ultra-private deepwater bayfront sanctuary with 120 feet of prime water frontage and yacht dockage. Organic modern aesthetics, indoor-outdoor tropical breezeways, summer kitchen, and resort-grade pool deck.",
      amenities: ["Deepwater Yacht Dock", "Resort Pool", "Outdoor Summer Kitchen", "Private Security Gate", "Gourmet Kitchen"],
      lat: 25.7781,
      lng: -80.1508,
      agentId: "agent-1"
    },
    {
      id: "prop-4",
      title: "Aspen Alpine Timber Estate",
      location: "Aspen Highlands, Colorado",
      city: "Aspen",
      address: "710 Red Mountain Rd, Aspen, CO 81611",
      price: 21000000,
      formattedPrice: "$21,000,000",
      category: "chalet",
      type: "Buy",
      beds: 6,
      baths: 7,
      sqft: 9200,
      garages: 3,
      yearBuilt: 2023,
      rating: 4.96,
      featured: false,
      status: "Price Drop",
      mainImage: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
      ],
      description: "Ski-in / ski-out luxury chalet crafted with hand-hewn timbers and modern glass architecture. Heated driveway, custom ski locker room, outdoor hot tub overlooking snow-capped mountain peaks, and stone fireplaces.",
      amenities: ["Ski-In/Ski-Out", "Outdoor Hot Tub", "Heated Driveway", "Ski Locker Room", "Double Stone Fireplace"],
      lat: 39.1911,
      lng: -106.8175,
      agentId: "agent-2"
    },
    {
      id: "prop-5",
      title: "Dubai Marina Horizon Tower Penthouse",
      location: "Dubai Marina, United Arab Emirates",
      city: "Dubai",
      address: "Tower One, Penthouse 64, Dubai Marina",
      price: 15500000,
      formattedPrice: "$15,500,000",
      category: "penthouse",
      type: "Buy",
      beds: 4,
      baths: 5,
      sqft: 7100,
      garages: 2,
      yearBuilt: 2024,
      rating: 4.97,
      featured: true,
      status: "Exclusive",
      mainImage: "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80"
      ],
      description: "Glamorous duplex penthouse featuring private plunge pool on the 64th floor balcony, designer Italian leather interiors, smart lighting, and unobstructed views of Palm Jumeirah and the Arabian Gulf.",
      amenities: ["Private Balcony Pool", "Palm Jumeirah View", "Italian Interiors", "Private Lift", "Valet Parking"],
      lat: 25.0772,
      lng: 55.1332,
      agentId: "agent-1"
    },
    {
      id: "prop-6",
      title: "French Riviera Cliffside Villa",
      location: "Saint-Jean-Cap-Ferrat, France",
      city: "Cap-Ferrat",
      address: "Boulevard de la Corne, 06230 Cap-Ferrat",
      price: 28000000,
      formattedPrice: "€25,800,000",
      category: "oceanfront",
      type: "Buy",
      beds: 6,
      baths: 7,
      sqft: 8900,
      garages: 4,
      yearBuilt: 2021,
      rating: 4.99,
      featured: false,
      status: "Just Listed",
      mainImage: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
      ],
      description: "Iconic Côte d'Azur estate boasting manicured Mediterranean gardens, direct sea access, infinity pool, olive groves, and refined Neo-Classical French styling integrated with modern luxury amenities.",
      amenities: ["Direct Sea Access", "Olive Gardens", "Infinity Pool", "Wine Tasting Room", "Guest House"],
      lat: 43.6894,
      lng: 7.3292,
      agentId: "agent-2"
    },
    {
      id: "prop-7",
      title: "Beverly Hills Contemporary Estate",
      location: "Beverly Hills, Los Angeles, CA",
      city: "Los Angeles",
      address: "1230 Sunset Blvd, Beverly Hills, CA 90210",
      price: 45000,
      formattedPrice: "$45,000 / mo",
      category: "villas",
      type: "Rent",
      beds: 4,
      baths: 5,
      sqft: 6200,
      garages: 2,
      yearBuilt: 2023,
      rating: 4.89,
      featured: false,
      status: "Rental",
      mainImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
      ],
      description: "Sleek furnished luxury residence available for long term or seasonal lease. Gated motor court, sparkling pool, outdoor lounge, screening room, and gourmet kitchen.",
      amenities: ["Fully Furnished", "Gated Entry", "Pool & Cabana", "Screening Room", "Tesla Charging"],
      lat: 34.0736,
      lng: -118.4004,
      agentId: "agent-1"
    },
    {
      id: "prop-8",
      title: "Financial District Corporate Tower Suite",
      location: "Lower Manhattan, New York, NY",
      city: "New York",
      address: "1 Wall Street, Suite 500, NY 10005",
      price: 14200000,
      formattedPrice: "$14,200,000",
      category: "commercial",
      type: "Buy",
      beds: 0,
      baths: 4,
      sqft: 11000,
      garages: 5,
      yearBuilt: 2024,
      rating: 4.91,
      featured: false,
      status: "Commercial",
      mainImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
      ],
      description: "Prime AAA commercial flagship executive suite in heart of Wall Street. Floor-to-ceiling soundproof glass, private boardroom, modern lounge, high speed fiber optic infrastructure, and security access.",
      amenities: ["AAA Flagship Rating", "Executive Boardroom", "24/7 Security", "Private Elevator Access", "Fiber Optic Net"],
      lat: 40.7075,
      lng: -74.0113,
      agentId: "agent-2"
    }
  ],

  agents: [
    {
      id: "agent-1",
      name: "Julian Sterling",
      title: "Senior Vice President & Managing Broker",
      phone: "+1 (310) 892-7711",
      email: "j.sterling@auraestates.com",
      experience: "15+ Years Luxury Market",
      salesVolume: "$1.4B+ Lifetime Sales",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
      specialties: ["Bel Air Estates", "Waterfront Properties", "Investment Portfolios"]
    },
    {
      id: "agent-2",
      name: "Victoria Vance",
      title: "Managing Director - Manhattan & International",
      phone: "+1 (212) 554-9988",
      email: "v.vance@auraestates.com",
      experience: "12+ Years High-Net-Worth Advisory",
      salesVolume: "$980M+ Lifetime Sales",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      specialties: ["Manhattan Penthouses", "European Estates", "Off-Market Listings"]
    }
  ],

  locations: [
    {
      id: "loc-1",
      name: "Beverly Hills",
      tagline: "Golden Triangle Estates",
      image: "./assets/images/hero_villa.jpg",
      propertyCount: 24,
      startPrice: "$12.5M"
    },
    {
      id: "loc-2",
      name: "Manhattan",
      tagline: "Skyline Luxury & Penthouses",
      image: "./assets/images/property_penthouse.jpg",
      propertyCount: 38,
      startPrice: "$9.8M"
    },
    {
      id: "loc-3",
      name: "Miami Beach",
      tagline: "Deepwater Island Living",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=800&q=80",
      propertyCount: 19,
      startPrice: "$8.5M"
    },
    {
      id: "loc-4",
      name: "Aspen & Rockies",
      tagline: "Alpine Ski-in Chalets",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80",
      propertyCount: 15,
      startPrice: "$14.0M"
    }
  ],

  testimonials: [
    {
      id: "test-1",
      quote: "AURA Estates delivered an unmatched level of confidentiality and finesse during our acquisition of the Bel Air residence. Their off-market network is truly elite.",
      clientName: "Alexander Roth",
      clientRole: "Managing Partner, Roth Capital Partners",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "test-2",
      quote: "Victoria and the AURA team handled our Manhattan penthouse sale in record time, setting a new benchmark price per square foot in the neighborhood.",
      clientName: "Eleanor Vance-Smyth",
      clientRole: "Tech Entrepreneur & Investor",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
    },
    {
      id: "test-3",
      quote: "The seamless virtual tour and instant schedule workflow made acquiring our winter alpine retreat completely effortless while travelling overseas.",
      clientName: "David K. Lindqvist",
      clientRole: "Chairman, Lindqvist Global Asset Mgmt",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = REAL_ESTATE_DATA;
}
