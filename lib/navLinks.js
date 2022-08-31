export const productsLinks = [
  {
    text: "New Arrivals",
    url: "/products/new-arrivals",
  },

  {
    text: "Tops",
    url: "/products/tops",
    dropDown: {
      title: "Shop by Type:",
      links: [
        {
          text: "Shirts",
          url: "/products/tops/shirts",
        },
        {
          text: "T-Shirts",
          url: "/products/tops/t-shirts",
        },
        {
          text: "Hoodies",
          url: "/products/tops/hoodies",
        },
        {
          text: "Shop All",
          url: "/products/tops",
        },
      ],
    },
  },
  {
    text: "Suits",
    url: "/products/suits",
  },
  {
    text: "Pants",
    url: "/products/pants",
    dropDown: {
      title: "Shop by Style:",
      links: [
        {
          text: "Slim fit",
          url: "/products/pants/slim-fit",
        },
        {
          text: "relaxed fit",
          url: "/products/pants/relaxed-fit",
        },
        {
          text: "Regular fit",
          url: "/products/pants/regular-fit",
        },
        {
          text: "Shop All",
          url: "/products/pants",
        },
      ],
    },
  },
  {
    text: "Shoes & Slippers",
    url: "/products/shoes",
  },
  {
    text: "Shop All",
    url: "/products",
  },
];
