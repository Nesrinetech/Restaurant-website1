import images from './images';

const wines = [
  {
    title: 'Royal Citrus Elixir',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Minty Mango Symphony',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'Blueberry Basil Infusion',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Pomegranate Bliss Refresher',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Elderflower Sparkling Elegance',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Epicurean Excellence',
    subtitle: 'Indulge in a culinary journey of unparalleled taste and sophistication.',
  },
  {
    imgUrl: images.award01,
    title: 'Culinary Visionary',
    subtitle: 'Experience innovative flavors crafted by our visionary chefs.',
  },
  {
    imgUrl: images.award05,
    title: 'Gastronomic Distinction',
    subtitle: 'Celebrate exquisite dining with our award-winning hospitality.',
  },
  {
    imgUrl: images.award03,
    title: 'Masterful Cuisine Award',
    subtitle: 'Discover the artistry and skill behind our outstanding culinary creations.',
  },
];

export default { wines, cocktails, awards };