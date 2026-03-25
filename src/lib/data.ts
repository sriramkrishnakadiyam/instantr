import type { Cuisine, Testimonial } from './definitions';

export const cuisines: Cuisine[] = [
  { name: 'Indian', imageId: 'indian-cuisine' },
  { name: 'Chinese', imageId: 'chinese-cuisine' },
  { name: 'Italian', imageId: 'italian-cuisine' },
  { name: 'Mexican', imageId: 'mexican-cuisine' },
  { name: 'American', imageId: 'american-cuisine' },
  { name: 'Japanese', imageId: 'japanese-cuisine' },
  { name: 'Thai', imageId: 'thai-cuisine' },
  { name: 'French', imageId: 'french-cuisine' },
  { name: 'Mediterranean', imageId: 'mediterranean-cuisine' },
  { name: 'Korean', imageId: 'korean-cuisine' },
  { name: 'Arabic', imageId: 'arabic-cuisine' },
  { name: 'Spanish', imageId: 'spanish-cuisine' },
  { name: 'Greek', imageId: 'greek-cuisine' },
  { name: 'Turkish', imageId: 'turkish-cuisine' },
  { name: 'Continental', imageId: 'continental-cuisine' },
  { name: 'Vegetarian Specials', imageId: 'vegetarian-specials' },
  { name: 'Vegan', imageId: 'vegan' },
  { name: 'Street Food', imageId: 'street-food' },
  { name: 'Desserts', imageId: 'desserts' },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Priya Sharma',
    title: 'Food Blogger',
    quote:
      'GourmetAI has transformed my cooking! The AI-generated recipes are surprisingly creative and delicious. It\'s like having a personal chef in my pocket.',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    name: 'David Chen',
    title: 'Home Cook',
    quote:
      'I used to cook the same five meals every week. Now, I explore different cuisines every day. The recipe generator is a game-changer for my family dinners.',
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    name: 'Emily Rodriguez',
    title: 'Busy Professional',
    quote:
      'As someone with a hectic schedule, I love how quick and easy it is to find a recipe based on the ingredients I already have. Highly recommended!',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
];
