export type Cuisine = {
  name: string;
  imageId: string;
};

export type Testimonial = {
  name: string;
  title: string;
  quote: string;
  avatar: string;
};

export type NavItem = {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
};

export type Recipe = {
  id: string;
  name: string;
  description: string;
  cuisine: string;
  imageId: string;
  ingredients: {
    quantity: string;
    ingredient: string;
  }[];
  instructions: string[];
};
