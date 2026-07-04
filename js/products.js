const PRODUCTS = [
  // SAREES
  {
    id: "saree-01",
    name: "Royal Crimson Banarasi Silk Saree",
    category: "sarees",
    price: 8499,
    originalPrice: 12999,
    discount: 35,
    image: "images/img-saree-red.jpg",
    hoverImage: "images/img-saree-banarasi.jpg",
    fabric: "Silk",
    weave: "Banarasi",
    color: "Red",
    rating: 4.8,
    reviews: 124,
    description: "Indulge in royal heritage with this crimson Banarasi silk saree. Adorned with intricate zari work, handwoven by master artisans, it features a heavy pallu and a classic border, making it perfect for weddings and grand festivities.",
    highlights: ["Pure Katan Silk", "Gold Zari Floral Jaal", "Handcrafted in Varanasi", "Silk Mark Certified"]
  },
  {
    id: "saree-02",
    name: "Golden Hour Kanjivaram Silk Saree",
    category: "sarees",
    price: 9999,
    originalPrice: 15999,
    discount: 37,
    image: "images/img-saree-gold.jpg",
    hoverImage: "images/img-saree-kanjivaram.jpg",
    fabric: "Silk",
    weave: "Kanjivaram",
    color: "Gold",
    rating: 4.9,
    reviews: 86,
    description: "An epitome of grace and South Indian tradition, this Kanjivaram silk saree features a dual-tone shimmer, gold korvai borders, and traditional temple motifs. The premium mulberry silk gives it a rich drape.",
    highlights: ["Pure Mulberry Silk", "Pure Gold & Silver Zari", "Temple Border Design", "Silk Mark Certified"]
  },
  {
    id: "saree-03",
    name: "Sage Mint Organza Floral Saree",
    category: "sarees",
    price: 3299,
    originalPrice: 4999,
    discount: 34,
    image: "images/img-saree-organza.jpg",
    hoverImage: "images/img-saree-tussar.jpg",
    fabric: "Organza",
    weave: "Chanderi Weave",
    color: "Pastel",
    rating: 4.5,
    reviews: 42,
    description: "Embrace modern pastel minimalism with this mint green organza saree. It features hand-painted floral motifs and delicate scalloped embroidery borders, offering a lightweight and breezy silhouette.",
    highlights: ["Premium Light Organza", "Hand-painted Florals", "Scalloped Borders", "Easy & Elegant Drape"]
  },
  {
    id: "saree-04",
    name: "Ocean Indigo Linen Jamdani Saree",
    category: "sarees",
    price: 4599,
    originalPrice: 6499,
    discount: 29,
    image: "images/img-saree-kanjivaram.jpg",
    hoverImage: "images/img-saree-red.jpg",
    fabric: "Linen",
    weave: "Jamdani",
    color: "Blue",
    rating: 4.6,
    reviews: 58,
    description: "Crafted from pure organic linen, this indigo saree features elegant Jamdani geometric motifs woven across the body. It blends organic texture with artistic craft, making it an excellent choice for office wear or daytime events.",
    highlights: ["100% Organic Linen", "Breathable & Eco-friendly", "Traditional Jamdani Weave", "Handcrafted borders"]
  },
  {
    id: "saree-05",
    name: "Mustard Tussar Silk Saree",
    category: "sarees",
    price: 5299,
    originalPrice: 7999,
    discount: 33,
    image: "images/img-saree-tussar.jpg",
    hoverImage: "images/img-saree-organza.jpg",
    fabric: "Silk",
    weave: "Tussar",
    color: "Yellow",
    rating: 4.4,
    reviews: 31,
    description: "Revel in the rich, natural texture of Tussar silk. This mustard yellow saree boasts a contrast forest green border, block prints, and a decorated pallu highlighting rural folklore paintings.",
    highlights: ["Wild Tussar Silk", "Natural Gold Texture", "Traditional Block Prints", "Craftmark Certified"]
  },
  {
    id: "saree-06",
    name: "Classic Ivory Cotton Mulmul Saree",
    category: "sarees",
    price: 1999,
    originalPrice: 2999,
    discount: 33,
    image: "images/img-saree-banarasi.jpg",
    hoverImage: "images/img-saree-red.jpg",
    fabric: "Cotton",
    weave: "Chanderi Weave",
    color: "Off-White",
    rating: 4.7,
    reviews: 95,
    description: "Enjoy maximum breathability with our ultra-soft ivory cotton mulmul saree. Highlighted with gold zari borders and matching thread embroidery, it offers a sophisticated casual summer style.",
    highlights: ["100% Cotton Mulmul", "Feather-light & Soft", "Zari Border Highlights", "Handloom Mark"]
  },
  {
    id: "saree-07",
    name: "Emerald Chanderi Silk Cotton Saree",
    category: "sarees",
    price: 3899,
    originalPrice: 5999,
    discount: 35,
    image: "images/img-saree-organza.jpg",
    hoverImage: "images/img-saree-gold.jpg",
    fabric: "Silk",
    weave: "Chanderi",
    color: "Green",
    rating: 4.5,
    reviews: 29,
    description: "Elegant emerald green Chanderi saree woven with a blend of fine silk and organic cotton. Known for its sheer texture and lightweight elegance, finished with a classic golden border.",
    highlights: ["Chanderi Silk Cotton", "Sheer Glamorous Drapes", "Gold Zari Border", "Handwoven Heritage"]
  },
  {
    id: "saree-08",
    name: "Blush Pink Tissue Silk Saree",
    category: "sarees",
    price: 7699,
    originalPrice: 10999,
    discount: 30,
    image: "images/img-saree-tussar.jpg",
    hoverImage: "images/img-saree-red.jpg",
    fabric: "Tissue",
    weave: "Banarasi",
    color: "Pastel",
    rating: 4.8,
    reviews: 67,
    description: "A glamorous sheen meets soft aesthetics in this blush pink Tissue silk saree. Highlighted with floral motifs in copper and silver zari threads, it flows beautifully and catches the light elegantly.",
    highlights: ["Shimmering Tissue Silk", "Floral Zari Buttas", "Copper Border Work", "Silk Mark Certified"]
  },

  // KURTAS & SUITS
  {
    id: "kurta-01",
    name: "Ruby Embroidered Anarkali Kurta Set",
    category: "kurtas",
    price: 3499,
    originalPrice: 5499,
    discount: 36,
    image: "images/img-kurta-anarkali.jpg",
    hoverImage: "images/img-kurta-yellow.jpg",
    fabric: "Silk Blend",
    weave: "Printed",
    color: "Red",
    rating: 4.6,
    reviews: 73,
    description: "An elegant ruby red Anarkali kurta crafted from premium silk blend. Features detailed gota-patti and thread embroidery along the neck and cuffs, paired with printed pants and an organza dupatta.",
    highlights: ["Anarkali Silhouette", "Gota Patti Neckline", "Silk Blend Fabric", "Complete 3-Piece Set"]
  },
  {
    id: "kurta-02",
    name: "Mustard A-Line Cotton Kurta Set",
    category: "kurtas",
    price: 2199,
    originalPrice: 3499,
    discount: 37,
    image: "images/img-kurta-yellow.jpg",
    hoverImage: "images/img-kurta-blue.jpg",
    fabric: "Cotton",
    weave: "Printed",
    color: "Yellow",
    rating: 4.5,
    reviews: 110,
    description: "A cheerful mustard yellow A-Line kurta with subtle floral block prints. Pairs with comfortable cropped trousers and is ideal for casual outings or festive daywear.",
    highlights: ["100% Pure Cotton", "Floral Block Prints", "A-Line fit with pockets", "Highly breathable"]
  },
  {
    id: "kurta-03",
    name: "Sage Pastel Chanderi Straight Kurta",
    category: "kurtas",
    price: 2899,
    originalPrice: 3999,
    discount: 28,
    image: "images/img-kurta-blue.jpg",
    hoverImage: "images/img-kurta-anarkali.jpg",
    fabric: "Chanderi",
    weave: "Chanderi Weave",
    color: "Pastel",
    rating: 4.7,
    reviews: 54,
    description: "Infuse serene style with this sage green straight-cut Chanderi kurta. Accented with self-thread embroidery and delicate gold highlights, paired with ivory straight pants.",
    highlights: ["Premium Chanderi Blend", "Intricate Self-Embroidery", "Straight Comfort Fit", "Includes inner lining"]
  },
  {
    id: "kurta-04",
    name: "Indigo Blue Bandhani Print Kurta Set",
    category: "kurtas",
    price: 2499,
    originalPrice: 3799,
    discount: 34,
    image: "images/img-kurta-anarkali.jpg",
    hoverImage: "images/img-kurta-blue.jpg",
    fabric: "Cotton",
    weave: "Printed",
    color: "Blue",
    rating: 4.4,
    reviews: 38,
    description: "Classic Indigo blue cotton kurta featuring traditional Rajasthani Bandhani prints. Features a V-neck style and comes with printed palazzo pants for maximum comfort and style.",
    highlights: ["Breathable Cotton", "Traditional Bandhani Motif", "Relaxed Palazzo Bottoms", "Colour-fast material"]
  },
  {
    id: "kurta-05",
    name: "Peach Floral Georgette Suit Set",
    category: "kurtas",
    price: 3999,
    originalPrice: 5999,
    discount: 33,
    image: "images/img-kurta-yellow.jpg",
    hoverImage: "images/img-kurta-anarkali.jpg",
    fabric: "Georgette",
    weave: "Printed",
    color: "Pastel",
    rating: 4.3,
    reviews: 21,
    description: "Graceful peach suit set featuring an elegant floral-patterned Georgette kurta, matching solid leggings, and a soft chiffon dupatta with golden border lace.",
    highlights: ["Lightweight Georgette", "Lace Border Accents", "Fluid Flare Fit", "Chiffon Dupatta Included"]
  },
  {
    id: "kurta-06",
    name: "Olive Khadi Cotton Short Kurti",
    category: "kurtas",
    price: 1299,
    originalPrice: 1999,
    discount: 35,
    image: "images/img-kurta-blue.jpg",
    hoverImage: "images/img-kurta-yellow.jpg",
    fabric: "Cotton",
    weave: "Khadi Weave",
    color: "Green",
    rating: 4.6,
    reviews: 82,
    description: "Celebrate organic fashion with this olive green short kurti crafted in hand-spun Khadi cotton. Features front wooden buttons and convenient pockets. Ideal to style with denims or trousers.",
    highlights: ["Hand-spun Khadi Cotton", "Short Modern Cut", "Environmentally Conscious", "Functional Pockets"]
  }
];

// Helper functions for E-commerce State and filtering
const ProductsDB = {
  getAll: () => PRODUCTS,
  
  getById: (id) => PRODUCTS.find(p => p.id === id),
  
  getByCategory: (category) => PRODUCTS.filter(p => p.category === category),
  
  filterProducts: (products, filters) => {
    return products.filter(product => {
      // Filter by Fabric
      if (filters.fabric && filters.fabric.length > 0) {
        if (!filters.fabric.includes(product.fabric)) return false;
      }
      
      // Filter by Weave
      if (filters.weave && filters.weave.length > 0) {
        if (!filters.weave.includes(product.weave)) return false;
      }
      
      // Filter by Color
      if (filters.color && filters.color.length > 0) {
        if (!filters.color.includes(product.color)) return false;
      }
      
      // Filter by Price Range
      if (filters.priceRange && filters.priceRange.length > 0) {
        let matchesPrice = false;
        filters.priceRange.forEach(range => {
          if (range === "under-2000" && product.price < 2000) matchesPrice = true;
          if (range === "2000-5000" && product.price >= 2000 && product.price <= 5000) matchesPrice = true;
          if (range === "above-5000" && product.price > 5000) matchesPrice = true;
        });
        if (!matchesPrice) return false;
      }
      
      // Filter by Search Query
      if (filters.searchQuery && filters.searchQuery.trim() !== "") {
        const query = filters.searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesDesc = product.description.toLowerCase().includes(query);
        const matchesFabric = product.fabric.toLowerCase().includes(query);
        const matchesWeave = product.weave.toLowerCase().includes(query);
        if (!matchesName && !matchesDesc && !matchesFabric && !matchesWeave) return false;
      }
      
      return true;
    });
  },
  
  sortProducts: (products, sortType) => {
    const list = [...products];
    switch (sortType) {
      case "price-low-high":
        return list.sort((a, b) => a.price - b.price);
      case "price-high-low":
        return list.sort((a, b) => b.price - a.price);
      case "rating":
        return list.sort((a, b) => b.rating - a.rating);
      case "discount":
        return list.sort((a, b) => b.discount - a.discount);
      default: // Popular / Featured
        return list;
    }
  }
};
