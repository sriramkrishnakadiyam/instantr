import type { Recipe } from './definitions';

export const allRecipes: Recipe[] = [
  // Indian Recipes (South Indian)
  {
    id: 'indian-1',
    name: 'Hyderabadi Biryani',
    description: 'A legendary rice and meat dish from Hyderabad, known for its rich flavors and aromatic spices.',
    cuisine: 'Indian',
    imageId: 'recipe-hyderabadi-biryani',
    ingredients: [
        { quantity: '500g', ingredient: 'Basmati Rice' },
        { quantity: '500g', ingredient: 'Chicken or Mutton, cut into pieces' },
        { quantity: '1 cup', ingredient: 'Yogurt' },
        { quantity: '2 large', ingredient: 'Onions, thinly sliced and fried until golden (birista)' },
        { quantity: '1 tbsp', ingredient: 'Ginger-garlic paste' },
        { quantity: '1/2 cup', ingredient: 'Mint leaves, chopped' },
        { quantity: '1/2 cup', ingredient: 'Coriander leaves, chopped' },
        { quantity: '4-5', ingredient: 'Green chilies, slit' },
        { quantity: '1 tsp', ingredient: 'Turmeric powder' },
        { quantity: '2 tsp', ingredient: 'Red chili powder' },
        { quantity: '1 tsp', ingredient: 'Garam masala' },
        { quantity: 'to taste', ingredient: 'Salt' },
        { quantity: '4 tbsp', ingredient: 'Ghee or Oil' },
        { quantity: 'A pinch', ingredient: 'Saffron strands, soaked in 2 tbsp warm milk' },
        { quantity: 'Whole spices', ingredient: '(cinnamon, cardamom, cloves, bay leaf)' }
    ],
    instructions: [
        'Marinate the meat with yogurt, ginger-garlic paste, turmeric, chili powder, garam masala, salt, half of the fried onions, mint, and coriander. Let it rest for at least 1 hour.',
        'Wash and soak the basmati rice for 30 minutes. Cook the rice in boiling water with whole spices and salt until it is 70% cooked. Drain the water.',
        'In a heavy-bottomed pot, layer the marinated meat at the bottom. Spread the partially cooked rice over the meat.',
        'Sprinkle the remaining fried onions, mint, coriander, saffron milk, and ghee over the rice.',
        'Cover the pot with a tight-fitting lid and seal the edges with dough (dum method).',
        'Cook on low heat for 25-30 minutes, or until the meat is tender and the rice is fully cooked.',
        'Gently fluff the biryani with a fork before serving. Serve hot with raita or salan.'
    ]
  },
  {
    id: 'indian-2',
    name: 'Chicken 65',
    description: 'A spicy, deep-fried chicken dish originating from Chennai, India.',
    cuisine: 'Indian',
    imageId: 'recipe-chicken-65',
    ingredients: [
        { quantity: '500g', ingredient: 'Boneless chicken, cut into cubes' },
        { quantity: '2 tbsp', ingredient: 'Ginger-garlic paste' },
        { quantity: '1 tbsp', ingredient: 'Red chili powder' },
        { quantity: '1/2 tsp', ingredient: 'Turmeric powder' },
        { quantity: '1 tsp', ingredient: 'Garam masala' },
        { quantity: '1', ingredient: 'Egg' },
        { quantity: '2 tbsp', ingredient: 'Cornflour' },
        { quantity: '2 tbsp', ingredient: 'Rice flour' },
        { quantity: 'to taste', ingredient: 'Salt' },
        { quantity: 'for deep frying', ingredient: 'Oil' },
        { quantity: 'Few', ingredient: 'Curry leaves' },
        { quantity: '3-4', ingredient: 'Green chilies, slit' }
    ],
    instructions: [
        'In a bowl, mix chicken with ginger-garlic paste, chili powder, turmeric powder, garam masala, and salt. Marinate for 30 minutes.',
        'Add egg, cornflour, and rice flour to the marinated chicken and mix well to coat.',
        'Heat oil in a pan for deep frying. Fry the chicken pieces until golden brown and crisp. Drain on a paper towel.',
        'In a separate pan, heat 1 tbsp of oil. Sauté curry leaves and green chilies.',
        'Add the fried chicken pieces and toss well.',
        'Serve hot as an appetizer.'
    ]
  },
  {
    id: 'indian-3',
    name: 'Masala Dosa',
    description: 'A popular South Indian breakfast dish, it is a thin pancake or crepe, made from a fermented batter.',
    cuisine: 'Indian',
    imageId: 'recipe-masala-dosa',
    ingredients: [
        { quantity: '2 cups', ingredient: 'Dosa rice' },
        { quantity: '1/2 cup', ingredient: 'Urad dal' },
        { quantity: '1 tsp', ingredient: 'Fenugreek seeds' },
        { quantity: '4', ingredient: 'Potatoes, boiled and mashed' },
        { quantity: '1', ingredient: 'Onion, finely chopped' },
        { quantity: '1 tsp', ingredient: 'Mustard seeds' },
        { quantity: '1/2 tsp', ingredient: 'Turmeric powder' },
        { quantity: '2', ingredient: 'Green chilies, chopped' },
        { quantity: 'Few', ingredient: 'Curry leaves' },
        { quantity: 'to taste', ingredient: 'Salt' },
        { quantity: 'as needed', ingredient: 'Oil' }
    ],
    instructions: [
        'Soak rice, urad dal, and fenugreek seeds for 4-6 hours. Grind to a smooth batter. Ferment overnight.',
        'For the filling, heat oil in a pan. Add mustard seeds. When they splutter, add onion, green chilies, and curry leaves. Sauté until onions are soft.',
        'Add turmeric powder and salt. Add mashed potatoes and mix well. Cook for 2-3 minutes.',
        'Heat a non-stick tawa or griddle. Pour a ladleful of batter and spread it in a circular motion to make a thin dosa.',
        'Drizzle some oil. When the dosa turns golden brown, place a portion of the potato filling in the center.',
        'Fold the dosa and serve hot with sambar and chutney.'
    ]
  },
  {
    id: 'indian-4',
    name: 'Idli with Sambar',
    description: 'A savoury rice cake, popularly eaten for breakfast in Southern India, served with lentil-based vegetable stew.',
    cuisine: 'Indian',
    imageId: 'recipe-idli-sambar',
    ingredients: [
        { quantity: '2 cups', ingredient: 'Idli rice or parboiled rice' },
        { quantity: '1 cup', ingredient: 'Urad dal' },
        { quantity: '1 cup', ingredient: 'Toor dal (pigeon peas)' },
        { quantity: '1', ingredient: 'Onion, chopped' },
        { quantity: '1', ingredient: 'Tomato, chopped' },
        { quantity: '1/2 cup', ingredient: 'Mixed vegetables (carrots, beans, drumstick)' },
        { quantity: 'Small piece', ingredient: 'Tamarind' },
        { quantity: '2 tbsp', ingredient: 'Sambar powder' },
        { quantity: '1 tsp', ingredient: 'Mustard seeds' },
        { quantity: 'Few', ingredient: 'Curry leaves' },
        { quantity: 'to taste', ingredient: 'Salt' }
    ],
    instructions: [
        'Soak rice and urad dal separately for 4-6 hours. Grind to a smooth batter. Mix and ferment overnight.',
        'Pour the batter into idli molds and steam for 10-12 minutes.',
        'For sambar, pressure cook toor dal with turmeric until soft.',
        'Soak tamarind in warm water and extract the juice.',
        'In a pot, cook vegetables with tamarind juice, sambar powder, and salt.',
        'Add the cooked dal and bring to a boil. Simmer for 10 minutes.',
        'For tempering, heat oil, add mustard seeds and curry leaves. Add to the sambar.',
        'Serve hot idlis with sambar.'
    ]
  },
  {
    id: 'indian-5',
    name: 'Medu Vada',
    description: 'A traditional South Indian fritter made from Vigna mungo. It is usually made in a doughnut shape.',
    cuisine: 'Indian',
    imageId: 'recipe-medu-vada',
    ingredients: [
        { quantity: '1 cup', ingredient: 'Urad dal' },
        { quantity: '1', ingredient: 'Onion, finely chopped' },
        { quantity: '2', ingredient: 'Green chilies, finely chopped' },
        { quantity: '1 inch', ingredient: 'Ginger, finely chopped' },
        { quantity: 'Few', ingredient: 'Curry leaves, chopped' },
        { quantity: '1/4 cup', ingredient: 'Coriander leaves, chopped' },
        { quantity: '1/2 tsp', ingredient: 'Black peppercorns, crushed' },
        { quantity: 'to taste', ingredient: 'Salt' },
        { quantity: 'for deep frying', ingredient: 'Oil' }
    ],
    instructions: [
        'Soak urad dal for 2-3 hours. Drain and grind to a smooth, fluffy batter with very little water.',
        'Add onion, green chilies, ginger, curry leaves, coriander leaves, peppercorns, and salt to the batter. Mix well.',
        'Wet your hands, take a portion of the batter, and make a doughnut shape.',
        'Carefully slide it into hot oil. Fry on medium heat until golden brown and crisp.',
        'Drain on a paper towel.',
        'Serve hot with sambar and coconut chutney.'
    ]
  },
  {
    id: 'indian-6',
    name: 'Andhra Chicken Curry',
    description: 'A fiery and flavorful chicken curry from the Andhra region, known for its spice and heat.',
    cuisine: 'Indian',
    imageId: 'recipe-andhra-chicken-curry',
    ingredients: [
        { quantity: '500g', ingredient: 'Chicken, cut into pieces' },
        { quantity: '2', ingredient: 'Onions, chopped' },
        { quantity: '2', ingredient: 'Tomatoes, chopped' },
        { quantity: '2 tbsp', ingredient: 'Ginger-garlic paste' },
        { quantity: '1 tbsp', ingredient: 'Red chili powder (or to taste)' },
        { quantity: '1 tsp', ingredient: 'Turmeric powder' },
        { quantity: '1 tbsp', ingredient: 'Coriander powder' },
        { quantity: '1 tsp', ingredient: 'Garam masala' },
        { quantity: '1/2 cup', ingredient: 'Coriander leaves, chopped' },
        { quantity: 'to taste', ingredient: 'Salt' },
        { quantity: '3 tbsp', ingredient: 'Oil' }
    ],
    instructions: [
        'Heat oil in a pan. Add chopped onions and sauté until golden brown.',
        'Add ginger-garlic paste and sauté for a minute.',
        'Add chopped tomatoes and cook until soft.',
        'Add chili powder, turmeric powder, coriander powder, and salt. Cook for 2 minutes.',
        'Add the chicken pieces and cook on high heat for 5 minutes.',
        'Add 1 cup of water, cover and cook until the chicken is tender.',
        'Add garam masala and chopped coriander leaves. Mix well.',
        'Serve hot with rice or roti.'
    ]
  },
  {
    id: 'indian-7',
    name: 'Tomato Rasam',
    description: 'A light and tangy South Indian soup, traditionally prepared using tomato as a primary ingredient.',
    cuisine: 'Indian',
    imageId: 'recipe-tomato-rasam',
    ingredients: [
        { quantity: '3', ingredient: 'Tomatoes, ripe' },
        { quantity: 'Small piece', ingredient: 'Tamarind' },
        { quantity: '1 tsp', ingredient: 'Black peppercorns' },
        { quantity: '1 tsp', ingredient: 'Cumin seeds' },
        { quantity: '2-3 cloves', ingredient: 'Garlic' },
        { quantity: '1/2 tsp', ingredient: 'Turmeric powder' },
        { quantity: '1 tsp', ingredient: 'Mustard seeds' },
        { quantity: '2', ingredient: 'Dry red chilies' },
        { quantity: 'Few', ingredient: 'Curry leaves' },
        { quantity: '2 tbsp', ingredient: 'Coriander leaves, chopped' },
        { quantity: 'to taste', ingredient: 'Salt' },
        { quantity: '1 tbsp', ingredient: 'Ghee or oil' }
    ],
    instructions: [
        'Boil tomatoes and tamarind with 2 cups of water until tomatoes are mushy. Cool and mash well. Strain the liquid.',
        'Coarsely grind peppercorns, cumin seeds, and garlic.',
        'Add the ground mixture, turmeric powder, and salt to the tomato-tamarind water. Bring to a boil.',
        'Simmer for 10-15 minutes until the raw smell disappears.',
        'Heat ghee in a small pan. Add mustard seeds, dry red chilies, and curry leaves. When mustard seeds splutter, pour this tempering over the rasam.',
        'Garnish with coriander leaves.',
        'Serve hot as a soup or with rice.'
    ]
  },
  {
    id: 'indian-8',
    name: 'Lemon Rice',
    description: 'A crunchy, flavorful and tangy rice dish that is easy to make and tastes so good.',
    cuisine: 'Indian',
    imageId: 'recipe-lemon-rice',
    ingredients: [
        { quantity: '2 cups', ingredient: 'Cooked rice' },
        { quantity: '2 tbsp', ingredient: 'Lemon juice' },
        { quantity: '1 tsp', ingredient: 'Mustard seeds' },
        { quantity: '1 tsp', ingredient: 'Urad dal' },
        { quantity: '1 tbsp', ingredient: 'Chana dal' },
        { quantity: '2 tbsp', ingredient: 'Peanuts or Cashews' },
        { quantity: '2', ingredient: 'Dry red chilies' },
        { quantity: '2', ingredient: 'Green chilies, slit' },
        { quantity: '1/2 tsp', ingredient: 'Turmeric powder' },
        { quantity: 'Few', ingredient: 'Curry leaves' },
        { quantity: 'A pinch', ingredient: 'Asafoetida (hing)' },
        { quantity: 'to taste', ingredient: 'Salt' },
        { quantity: '2 tbsp', ingredient: 'Oil' }
    ],
    instructions: [
        'Heat oil in a pan. Add mustard seeds, urad dal, chana dal, and peanuts. Sauté until they turn golden.',
        'Add dry red chilies, green chilies, curry leaves, and asafoetida. Sauté for a few seconds.',
        'Add turmeric powder and salt. Mix well.',
        'Turn off the heat. Add the cooked rice and lemon juice.',
        'Mix gently until everything is well combined.',
        'Garnish with coriander leaves if desired.',
        'Serve warm.'
    ]
  },
  {
    id: 'indian-9',
    name: 'Curd Rice',
    description: 'A comforting South Indian dish made with cooked rice, yogurt, and a few spices.',
    cuisine: 'Indian',
    imageId: 'recipe-curd-rice',
    ingredients: [
        { quantity: '2 cups', ingredient: 'Cooked rice, mashed slightly' },
        { quantity: '1 cup', ingredient: 'Yogurt (curd), fresh' },
        { quantity: '1/2 cup', ingredient: 'Milk' },
        { quantity: '1 tsp', ingredient: 'Mustard seeds' },
        { quantity: '1 tsp', ingredient: 'Urad dal' },
        { quantity: '1', ingredient: 'Dry red chili, broken' },
        { quantity: '1 inch', ingredient: 'Ginger, finely chopped' },
        { quantity: 'Few', ingredient: 'Curry leaves' },
        { quantity: 'to taste', ingredient: 'Salt' },
        { quantity: '1 tbsp', ingredient: 'Oil' }
    ],
    instructions: [
        'In a bowl, mix mashed rice, yogurt, milk, and salt.',
        'Heat oil in a small pan for tempering. Add mustard seeds, urad dal, and dry red chili. Sauté until dal turns golden.',
        'Add ginger and curry leaves. Sauté for a few seconds.',
        'Pour the tempering over the curd rice and mix well.',
        'You can also add grated carrots, chopped cucumber or pomegranate seeds.',
        'Serve chilled or at room temperature.'
    ]
  },
  {
    id: 'indian-10',
    name: 'Pesarattu',
    description: 'A crepe-like bread, originating in Andhra Pradesh, made with a batter of green gram.',
    cuisine: 'Indian',
    imageId: 'recipe-pesarattu',
    ingredients: [
        { quantity: '1 cup', ingredient: 'Whole green gram (moong dal)' },
        { quantity: '2 tbsp', ingredient: 'Rice' },
        { quantity: '1 inch', ingredient: 'Ginger' },
        { quantity: '2-3', ingredient: 'Green chilies' },
        { quantity: '1/2', ingredient: 'Onion, finely chopped (for topping)' },
        { quantity: 'to taste', ingredient: 'Salt' },
        { quantity: 'as needed', ingredient: 'Oil' }
    ],
    instructions: [
        'Soak green gram and rice together for at least 4-6 hours.',
        'Drain the water and grind the soaked dal and rice with ginger and green chilies to a slightly coarse batter. Add water as needed.',
        'Add salt to the batter and mix well. No fermentation is needed.',
        'Heat a tawa or griddle. Pour a ladleful of batter and spread it into a thin circle.',
        'Sprinkle chopped onions on top.',
        'Drizzle some oil around the edges. Cook until the bottom is golden and crisp.',
        'Fold and serve hot with ginger chutney or coconut chutney.'
    ]
  },

  // Chinese Recipes
  {
    id: 'chinese-1',
    name: 'Kung Pao Chicken',
    description: 'A spicy, stir-fried Chinese dish made with cubes of chicken, peanuts, vegetables, and chili peppers.',
    cuisine: 'Chinese',
    imageId: 'recipe-kung-pao-chicken',
    ingredients: [
        { quantity: '1 lb', ingredient: 'Boneless, skinless chicken breast, cut into 1-inch cubes' },
        { quantity: '1 tbsp', ingredient: 'Soy sauce' },
        { quantity: '1 tbsp', ingredient: 'Chinese cooking wine (Shaoxing)' },
        { quantity: '1 tsp', ingredient: 'Cornstarch' },
        { quantity: '1/2 cup', ingredient: 'Unsalted peanuts' },
        { quantity: '6-8', ingredient: 'Dried red chilies' },
        { quantity: '3 cloves', ingredient: 'Garlic, minced' },
        { quantity: '1 inch', ingredient: 'Ginger, minced' },
        { quantity: '2', ingredient: 'Scallions, chopped' },
        { quantity: '3 tbsp', ingredient: 'Oil' }
    ],
    instructions: [
        'In a bowl, combine chicken, soy sauce, cooking wine, and cornstarch. Let it marinate for 15 minutes.',
        'Make the sauce: In another bowl, mix 2 tbsp soy sauce, 1 tbsp black vinegar, 1 tbsp Chinese cooking wine, 1 tsp sugar, and 1 tsp cornstarch.',
        'Heat oil in a wok or large skillet over high heat. Add dried chilies and Sichuan peppercorns (optional) and stir-fry until fragrant.',
        'Add the chicken and stir-fry until cooked through and lightly browned.',
        'Add garlic, ginger, and the white parts of the scallions. Stir-fry for 30 seconds.',
        'Pour in the sauce and stir until it thickens. Add peanuts and the green parts of the scallions. Mix well.',
        'Serve immediately with steamed rice.'
    ]
  },
  {
    id: 'chinese-2',
    name: 'Schezwan Noodles',
    description: 'A popular and spicy noodle dish from the Sichuan province, full of bold and fiery flavors.',
    cuisine: 'Chinese',
    imageId: 'recipe-schezwan-noodles',
    ingredients: [
        { quantity: '200g', ingredient: 'Hakka noodles' },
        { quantity: '1 tbsp', ingredient: 'Sesame oil' },
        { quantity: '2 tbsp', ingredient: 'Schezwan sauce' },
        { quantity: '1', ingredient: 'Onion, thinly sliced' },
        { quantity: '1', ingredient: 'Carrot, julienned' },
        { quantity: '1', ingredient: 'Bell pepper, julienned' },
        { quantity: '1/2 cup', ingredient: 'Cabbage, shredded' },
        { quantity: '1 tbsp', ingredient: 'Soy sauce' },
        { quantity: '1 tsp', ingredient: 'Vinegar' },
        { quantity: 'to taste', ingredient: 'Salt and pepper' }
    ],
    instructions: [
        'Cook noodles according to package directions. Drain and toss with sesame oil.',
        'Heat oil in a wok. Add onions and stir-fry for a minute.',
        'Add carrots, bell pepper, and cabbage. Stir-fry on high heat for 2-3 minutes until tender-crisp.',
        'Add Schezwan sauce, soy sauce, vinegar, salt, and pepper. Mix well.',
        'Add the cooked noodles and toss everything together until the noodles are well-coated.',
        'Garnish with chopped scallions and serve hot.'
    ]
  },
  {
    id: 'chinese-3',
    name: 'Sweet and Sour Chicken',
    description: 'Crispy chicken pieces tossed in a classic sweet and tangy sauce with bell peppers and pineapple.',
    cuisine: 'Chinese',
    imageId: 'recipe-sweet-and-sour-chicken',
    ingredients: [
        { quantity: '1 lb', ingredient: 'Boneless chicken, cut into chunks' },
        { quantity: '1/2 cup', ingredient: 'Cornstarch' },
        { quantity: '1', ingredient: 'Egg, beaten' },
        { quantity: '1/2 cup', ingredient: 'Pineapple chunks' },
        { quantity: '1', ingredient: 'Bell pepper, chopped' },
        { quantity: '1', ingredient: 'Onion, chopped' },
        { quantity: '1/4 cup', ingredient: 'Ketchup' },
        { quantity: '1/4 cup', ingredient: 'Rice vinegar' },
        { quantity: '1/4 cup', ingredient: 'Sugar' },
        { quantity: '1 tbsp', ingredient: 'Soy sauce' }
    ],
    instructions: [
        'Coat chicken pieces in egg, then dredge in cornstarch.',
        'Fry chicken in hot oil until golden and crispy. Set aside.',
        'In a pan, combine ketchup, vinegar, sugar, and soy sauce. Bring to a simmer to make the sauce.',
        'Add onion, bell pepper, and pineapple to the sauce. Cook for 2-3 minutes.',
        'Add the crispy chicken to the pan and toss to coat with the sauce.',
        'Serve immediately with rice.'
    ]
  },
  {
    id: 'chinese-4',
    name: 'Fried Rice',
    description: 'A versatile dish of stir-fried rice with a mix of vegetables, eggs, and your choice of protein.',
    cuisine: 'Chinese',
    imageId: 'recipe-fried-rice',
    ingredients: [
        { quantity: '3 cups', ingredient: 'Cooked and chilled long-grain rice' },
        { quantity: '2', ingredient: 'Eggs, lightly beaten' },
        { quantity: '1 cup', ingredient: 'Mixed vegetables (peas, carrots, corn)' },
        { quantity: '1/2 cup', ingredient: 'Diced chicken, shrimp, or tofu (optional)' },
        { quantity: '2 tbsp', ingredient: 'Soy sauce' },
        { quantity: '1 tbsp', ingredient: 'Oyster sauce (optional)' },
        { quantity: '1 tsp', ingredient: 'Sesame oil' },
        { quantity: '2', ingredient: 'Scallions, chopped' },
        { quantity: '2 tbsp', ingredient: 'Vegetable oil' }
    ],
    instructions: [
        'Heat 1 tbsp of oil in a wok. Add the eggs and scramble until just cooked. Remove and set aside.',
        'Add another tbsp of oil. Add chicken/shrimp/tofu if using and cook through. Remove and set aside.',
        'Add mixed vegetables and stir-fry for 2-3 minutes.',
        'Add the chilled rice to the wok. Break up any clumps. Stir-fry for 3-4 minutes.',
        'Add soy sauce, oyster sauce, and sesame oil. Stir to combine.',
        'Return the scrambled eggs and cooked protein to the wok. Add scallions.',
        'Toss everything together and serve hot.'
    ]
  },
  {
    id: 'chinese-5',
    name: 'Manchurian',
    description: 'Deep-fried vegetable or chicken balls tossed in a tangy and savory Manchurian sauce.',
    cuisine: 'Chinese',
    imageId: 'recipe-manchurian',
    ingredients: [
        { quantity: '1 cup', ingredient: 'Grated cabbage' },
        { quantity: '1/2 cup', ingredient: 'Grated carrot' },
        { quantity: '1/4 cup', ingredient: 'Finely chopped beans' },
        { quantity: '1/4 cup', ingredient: 'All-purpose flour (maida)' },
        { quantity: '1/4 cup', ingredient: 'Cornstarch' },
        { quantity: '1 tbsp', ingredient: 'Ginger-garlic paste' },
        { quantity: '1 tbsp', ingredient: 'Soy sauce' },
        { quantity: '1 tbsp', ingredient: 'Chili sauce' },
        { quantity: '1 tsp', ingredient: 'Vinegar' },
        { quantity: 'for deep frying', ingredient: 'Oil' }
    ],
    instructions: [
        'Squeeze out excess water from vegetables. In a bowl, mix vegetables, flours, half of the ginger-garlic paste, and salt to form a dough.',
        'Make small balls from the dough and deep-fry until golden and crisp.',
        'For the sauce, heat oil in a pan. Sauté the remaining ginger-garlic paste.',
        'Add soy sauce, chili sauce, vinegar, and 1 cup of water. Bring to a boil.',
        'Thicken the sauce with a cornstarch slurry (1 tsp cornstarch in 2 tbsp water).',
        'Add the fried balls to the sauce and toss to coat.',
        'Garnish with spring onions and serve immediately.'
    ]
  },
  {
    id: 'chinese-6',
    name: 'Spring Rolls',
    description: 'Crispy, deep-fried rolls filled with a savory mixture of vegetables and sometimes meat.',
    cuisine: 'Chinese',
    imageId: 'recipe-spring-rolls',
    ingredients: [
        { quantity: '8-10', ingredient: 'Spring roll wrappers' },
        { quantity: '1 cup', ingredient: 'Shredded cabbage' },
        { quantity: '1/2 cup', ingredient: 'Julienned carrots' },
        { quantity: '1/2 cup', ingredient: 'Julienned bell peppers' },
        { quantity: '1/4 cup', ingredient: 'Chopped scallions' },
        { quantity: '1 tsp', ingredient: 'Soy sauce' },
        { quantity: '1/2 tsp', ingredient: 'Black pepper' },
        { quantity: '1 tbsp', ingredient: 'Flour paste (for sealing)' },
        { quantity: 'for deep frying', ingredient: 'Oil' }
    ],
    instructions: [
        'Heat 1 tbsp of oil in a pan. Stir-fry all vegetables for 2-3 minutes until tender-crisp.',
        'Add soy sauce and pepper. Mix well and let the filling cool.',
        'Place a portion of the filling on one corner of a spring roll wrapper.',
        'Roll it tightly, folding in the sides. Seal the edge with flour paste.',
        'Deep-fry the spring rolls in hot oil until golden brown and crispy.',
        'Serve hot with sweet chili sauce.'
    ]
  },
  {
    id: 'chinese-7',
    name: 'Hot and Sour Soup',
    description: 'A classic Chinese soup that is both spicy and tangy, filled with mushrooms, tofu, and bamboo shoots.',
    cuisine: 'Chinese',
    imageId: 'recipe-hot-and-sour-soup',
    ingredients: [
        { quantity: '4 cups', ingredient: 'Vegetable or chicken broth' },
        { quantity: '1/2 cup', ingredient: 'Shredded mushrooms' },
        { quantity: '1/2 cup', ingredient: 'Cubed firm tofu' },
        { quantity: '1/4 cup', ingredient: 'Julienned bamboo shoots' },
        { quantity: '2 tbsp', ingredient: 'Soy sauce' },
        { quantity: '3 tbsp', ingredient: 'Rice vinegar' },
        { quantity: '1 tbsp', ingredient: 'Chili-garlic sauce' },
        { quantity: '1 tsp', ingredient: 'White pepper' },
        { quantity: '2 tbsp', ingredient: 'Cornstarch slurry' },
        { quantity: '1', ingredient: 'Egg, lightly beaten' }
    ],
    instructions: [
        'Bring broth to a boil in a pot.',
        'Add mushrooms, tofu, and bamboo shoots. Simmer for 5 minutes.',
        'Stir in soy sauce, vinegar, chili-garlic sauce, and white pepper.',
        'Slowly pour in the cornstarch slurry while stirring until the soup thickens.',
        'Slowly drizzle the beaten egg into the simmering soup, stirring gently to create egg ribbons.',
        'Garnish with chopped scallions and a drizzle of sesame oil.',
        'Serve hot.'
    ]
  },
  {
    id: 'chinese-8',
    name: 'Chow Mein',
    description: 'Stir-fried noodles with vegetables and often meat or tofu, tossed in a savory sauce.',
    cuisine: 'Chinese',
    imageId: 'recipe-chow-mein',
    ingredients: [
        { quantity: '200g', ingredient: 'Egg noodles or Hakka noodles' },
        { quantity: '1 cup', ingredient: 'Shredded chicken or tofu' },
        { quantity: '1', ingredient: 'Onion, sliced' },
        { quantity: '1/2 cup', ingredient: 'Sliced carrots' },
        { quantity: '1/2 cup', ingredient: 'Sliced bell peppers' },
        { quantity: '1 cup', ingredient: 'Bean sprouts' },
        { quantity: '2 tbsp', ingredient: 'Soy sauce' },
        { quantity: '1 tbsp', ingredient: 'Oyster sauce' },
        { quantity: '1 tsp', ingredient: 'Sesame oil' }
    ],
    instructions: [
        'Cook noodles as per package instructions. Drain.',
        'Heat oil in a wok. Stir-fry chicken or tofu until cooked. Set aside.',
        'In the same wok, stir-fry onion, carrots, and bell peppers for 2-3 minutes.',
        'Add the cooked noodles, bean sprouts, and the cooked protein.',
        'Add soy sauce, oyster sauce, and sesame oil. Toss well to combine.',
        'Cook for another 2-3 minutes until everything is heated through.',
        'Serve immediately.'
    ]
  },
  {
    id: 'chinese-9',
    name: 'Dim Sum',
    description: 'A large range of small dishes that are traditionally enjoyed in restaurants for breakfast and lunch.',
    cuisine: 'Chinese',
    imageId: 'recipe-dim-sum',
    ingredients: [
        { quantity: '1 cup', ingredient: 'Ground pork or shrimp' },
        { quantity: '1/4 cup', ingredient: 'Finely chopped shiitake mushrooms' },
        { quantity: '2 tbsp', ingredient: 'Finely chopped scallions' },
        { quantity: '1 tbsp', ingredient: 'Soy sauce' },
        { quantity: '1 tsp', ingredient: 'Sesame oil' },
        { quantity: '1 tsp', ingredient: 'Grated ginger' },
        { quantity: '20', ingredient: 'Wonton wrappers' }
    ],
    instructions: [
        'In a bowl, combine the filling ingredients: pork/shrimp, mushrooms, scallions, soy sauce, sesame oil, and ginger. Mix well.',
        'Place a teaspoon of filling in the center of a wonton wrapper.',
        'Moisten the edges with water and fold to seal, creating a dumpling shape of your choice.',
        'Line a bamboo steamer with parchment paper or cabbage leaves.',
        'Arrange the dumplings in the steamer, ensuring they don\'t touch.',
        'Steam over boiling water for 10-12 minutes, or until the filling is cooked through.',
        'Serve hot with dipping sauce (e.g., soy-vinegar sauce).'
    ]
  },
  {
    id: 'chinese-10',
    name: 'Chilli Paneer',
    description: 'A popular Indo-Chinese dish where cubes of fried crispy paneer are tossed in a spicy sauce.',
    cuisine: 'Chinese',
    imageId: 'recipe-chilli-paneer',
    ingredients: [
        { quantity: '200g', ingredient: 'Paneer, cubed' },
        { quantity: '2 tbsp', ingredient: 'Cornstarch' },
        { quantity: '1', ingredient: 'Onion, cubed' },
        { quantity: '1', ingredient: 'Bell pepper, cubed' },
        { quantity: '1 tbsp', ingredient: 'Ginger-garlic paste' },
        { quantity: '2 tbsp', ingredient: 'Soy sauce' },
        { quantity: '1 tbsp', ingredient: 'Chili sauce' },
        { quantity: '1 tbsp', ingredient: 'Vinegar' },
        { quantity: 'for frying', ingredient: 'Oil' }
    ],
    instructions: [
        'Coat paneer cubes in cornstarch.',
        'Shallow fry the paneer until golden and crisp. Set aside.',
        'Heat oil in a pan. Add ginger-garlic paste, cubed onions, and bell peppers. Stir-fry for 2 minutes.',
        'Add soy sauce, chili sauce, and vinegar. Mix well.',
        'Add a splash of water and bring the sauce to a simmer.',
        'Add the fried paneer cubes and toss to coat well.',
        'Garnish with spring onions and serve hot.'
    ]
  },

  // Italian Recipes
  {
    id: 'italian-1',
    name: 'Margherita Pizza',
    description: 'A classic pizza topped with San Marzano tomatoes, fresh mozzarella, basil, salt, and extra-virgin olive oil.',
    cuisine: 'Italian',
    imageId: 'recipe-margherita-pizza',
    ingredients: [
        { quantity: '1', ingredient: 'Pizza dough ball' },
        { quantity: '1/2 cup', ingredient: 'San Marzano tomato sauce' },
        { quantity: '125g', ingredient: 'Fresh mozzarella cheese, sliced' },
        { quantity: 'Handful', ingredient: 'Fresh basil leaves' },
        { quantity: 'to taste', ingredient: 'Salt' },
        { quantity: 'Drizzle', ingredient: 'Extra-virgin olive oil' }
    ],
    instructions: [
        'Preheat your oven to its highest temperature (at least 250°C or 500°F) with a pizza stone or steel inside.',
        'Stretch the pizza dough into a 12-inch circle.',
        'Spread the tomato sauce evenly over the dough, leaving a small border.',
        'Arrange the mozzarella slices and a few basil leaves on top.',
        'Season with salt and drizzle with olive oil.',
        'Carefully transfer the pizza to the hot stone/steel.',
        'Bake for 7-10 minutes, or until the crust is golden and the cheese is bubbly.',
        'Top with more fresh basil before serving.'
    ]
  },
  {
    id: 'italian-2',
    name: 'Alfredo Pasta',
    description: 'Pasta coated in a rich and creamy sauce made from butter, Parmesan cheese, and heavy cream.',
    cuisine: 'Italian',
    imageId: 'recipe-alfredo-pasta',
    ingredients: [
        { quantity: '400g', ingredient: 'Fettuccine pasta' },
        { quantity: '1/2 cup', ingredient: 'Unsalted butter' },
        { quantity: '1 1/2 cups', ingredient: 'Heavy cream' },
        { quantity: '1 1/2 cups', ingredient: 'Freshly grated Parmesan cheese' },
        { quantity: '2 cloves', ingredient: 'Garlic, minced' },
        { quantity: 'to taste', ingredient: 'Salt and fresh black pepper' },
        { quantity: '2 tbsp', ingredient: 'Chopped fresh parsley' }
    ],
    instructions: [
        'Cook fettuccine according to package directions.',
        'Meanwhile, in a large saucepan, melt butter over medium heat. Add garlic and cook until fragrant (about 1 minute).',
        'Stir in the heavy cream and bring to a simmer. Cook for 3-5 minutes, until slightly thickened.',
        'Reduce heat to low and whisk in the Parmesan cheese until the sauce is smooth.',
        'Season with salt and pepper.',
        'Drain the cooked pasta and add it to the sauce.',
        'Toss to coat well. Garnish with fresh parsley and serve immediately.'
    ]
  },
  {
    id: 'italian-3',
    name: 'Lasagna',
    description: 'Layers of flat pasta alternating with sauces and ingredients such as meats, vegetables, and cheese.',
    cuisine: 'Italian',
    imageId: 'recipe-lasagna',
    ingredients: [
        { quantity: '12', ingredient: 'Lasagna noodles' },
        { quantity: '1 lb', ingredient: 'Ground beef or Italian sausage' },
        { quantity: '1', ingredient: 'Onion, chopped' },
        { quantity: '2 cloves', ingredient: 'Garlic, minced' },
        { quantity: '28 oz can', ingredient: 'Crushed tomatoes' },
        { quantity: '15 oz', ingredient: 'Ricotta cheese' },
        { quantity: '1', ingredient: 'Egg' },
        { quantity: '1 lb', ingredient: 'Mozzarella cheese, shredded' },
        { quantity: '1/2 cup', ingredient: 'Grated Parmesan cheese' }
    ],
    instructions: [
        'Cook lasagna noodles. Brown the meat with onion and garlic, then add tomatoes and simmer for 15 minutes to make the meat sauce.',
        'In a bowl, mix ricotta, egg, and half of the Parmesan.',
        'Preheat oven to 375°F (190°C).',
        'Spread a layer of meat sauce in a baking dish. Top with a layer of noodles, then a layer of the ricotta mixture, and a layer of mozzarella.',
        'Repeat the layers, ending with a final layer of meat sauce, mozzarella, and the remaining Parmesan.',
        'Bake for 30-40 minutes, until bubbly and golden.',
        'Let it rest for 10 minutes before slicing and serving.'
    ]
  },
  {
    id: 'italian-4',
    name: 'Risotto',
    description: 'A creamy Northern Italian rice dish cooked with broth until it reaches a rich, velvety consistency.',
    cuisine: 'Italian',
    imageId: 'recipe-risotto',
    ingredients: [
        { quantity: '1.5 cups', ingredient: 'Arborio rice' },
        { quantity: '1/2 cup', ingredient: 'Dry white wine' },
        { quantity: '6 cups', ingredient: 'Warm chicken or vegetable broth' },
        { quantity: '1', ingredient: 'Onion, finely chopped' },
        { quantity: '2 tbsp', ingredient: 'Olive oil' },
        { quantity: '1/2 cup', ingredient: 'Grated Parmesan cheese' },
        { quantity: '2 tbsp', ingredient: 'Butter' },
        { quantity: 'to taste', ingredient: 'Salt and pepper' }
    ],
    instructions: [
        'In a large saucepan, heat olive oil. Sauté the onion until soft.',
        'Add the Arborio rice and toast for 1-2 minutes until the edges are translucent.',
        'Pour in the white wine and cook until it\'s fully absorbed, stirring constantly.',
        'Add a ladle of warm broth to the rice and stir until absorbed. Continue adding broth, one ladle at a time, waiting for it to be absorbed before adding the next. This should take about 20-25 minutes.',
        'Once the rice is creamy and al dente, remove from heat.',
        'Stir in the Parmesan cheese and butter. Season with salt and pepper.',
        'Serve immediately.'
    ]
  },
  {
    id: 'italian-5',
    name: 'Tiramisu',
    description: 'A coffee-flavoured Italian dessert, made of ladyfingers dipped in coffee, layered with a whipped mixture of eggs, sugar and mascarpone cheese.',
    cuisine: 'Italian',
    imageId: 'recipe-tiramisu',
    ingredients: [
        { quantity: '6', ingredient: 'Egg yolks' },
        { quantity: '3/4 cup', ingredient: 'White sugar' },
        { quantity: '1 lb', ingredient: 'Mascarpone cheese' },
        { quantity: '1 1/2 cups', ingredient: 'Strong brewed coffee, cooled' },
        { quantity: '24', ingredient: 'Ladyfinger biscuits' },
        { quantity: 'Unsweetened', ingredient: 'Cocoa powder for dusting' }
    ],
    instructions: [
        'In a bowl, whisk egg yolks and sugar until pale and creamy.',
        'Gently fold in the mascarpone cheese until smooth.',
        'Briefly dip each ladyfinger into the cooled coffee and arrange a single layer in a serving dish.',
        'Spread half of the mascarpone mixture over the ladyfingers.',
        'Repeat with another layer of coffee-dipped ladyfingers and the remaining mascarpone mixture.',
        'Cover and refrigerate for at least 4 hours, or overnight.',
        'Just before serving, dust generously with cocoa powder.'
    ]
  },
  {
    id: 'italian-6',
    name: 'Carbonara',
    description: 'A pasta dish made with eggs, hard cheese, cured pork, and freshly ground black pepper.',
    cuisine: 'Italian',
    imageId: 'recipe-carbonara',
    ingredients: [
        { quantity: '400g', ingredient: 'Spaghetti' },
        { quantity: '150g', ingredient: 'Guanciale or Pancetta, cubed' },
        { quantity: '4', ingredient: 'Large egg yolks' },
        { quantity: '1/2 cup', ingredient: 'Grated Pecorino Romano cheese' },
        { quantity: 'to taste', ingredient: 'Freshly ground black pepper' },
        { quantity: 'to taste', ingredient: 'Salt' }
    ],
    instructions: [
        'Cook spaghetti according to package directions.',
        'While pasta cooks, sauté guanciale in a pan until crisp. Remove from heat.',
        'In a bowl, whisk together egg yolks, Pecorino Romano, and a generous amount of black pepper.',
        'Drain the pasta, reserving about a cup of the pasta water.',
        'Quickly add the hot pasta to the pan with the guanciale. Stir to coat with the rendered fat.',
        'Remove the pan from heat. Pour the egg and cheese mixture over the pasta, stirring quickly to create a creamy sauce. If it\'s too thick, add a little reserved pasta water.',
        'Serve immediately with more grated cheese and black pepper.'
    ]
  },
  {
    id: 'italian-7',
    name: 'Bruschetta',
    description: 'An antipasto from Italy consisting of grilled bread rubbed with garlic and topped with olive oil and salt.',
    cuisine: 'Italian',
    imageId: 'recipe-bruschetta',
    ingredients: [
        { quantity: '1 loaf', ingredient: 'Ciabatta or rustic bread, sliced' },
        { quantity: '2 cups', ingredient: 'Ripe tomatoes, diced' },
        { quantity: '1/4 cup', ingredient: 'Fresh basil, chopped' },
        { quantity: '1 clove', ingredient: 'Garlic, halved' },
        { quantity: '2 tbsp', ingredient: 'Extra-virgin olive oil' },
        { quantity: '1 tbsp', ingredient: 'Balsamic vinegar' },
        { quantity: 'to taste', ingredient: 'Salt and pepper' }
    ],
    instructions: [
        'Toast or grill the bread slices until golden brown.',
        'Rub the surface of the warm bread with the cut side of the garlic clove.',
        'In a bowl, combine diced tomatoes, chopped basil, olive oil, and balsamic vinegar.',
        'Season the tomato mixture with salt and pepper.',
        'Spoon the tomato mixture onto the garlic-rubbed bread.',
        'Serve immediately as an appetizer.'
    ]
  },
  {
    id: 'italian-8',
    name: 'Ravioli',
    description: 'A type of pasta comprising a filling enveloped in thin pasta dough.',
    cuisine: 'Italian',
    imageId: 'recipe-ravioli',
    ingredients: [
        { quantity: '1 recipe', ingredient: 'Fresh pasta dough' },
        { quantity: '1 cup', ingredient: 'Ricotta cheese' },
        { quantity: '1/2 cup', ingredient: 'Grated Parmesan cheese' },
        { quantity: '1/2 cup', ingredient: 'Chopped spinach, cooked and squeezed dry' },
        { quantity: '1', ingredient: 'Egg yolk' },
        { quantity: 'Pinch', ingredient: 'Nutmeg' },
        { quantity: 'to taste', ingredient: 'Salt and pepper' }
    ],
    instructions: [
        'In a bowl, mix ricotta, Parmesan, spinach, egg yolk, nutmeg, salt, and pepper for the filling.',
        'Roll out pasta dough into thin sheets.',
        'Place teaspoonfuls of filling about 2 inches apart on one sheet of pasta.',
        'Brush around the filling with water. Place another sheet of pasta on top and press firmly around the filling to seal.',
        'Cut into individual ravioli squares with a knife or pastry wheel.',
        'Cook in boiling salted water for 3-5 minutes, or until they float to the top.',
        'Serve with your favorite sauce.'
    ]
  },
  {
    id: 'italian-9',
    name: 'Minestrone Soup',
    description: 'A thick soup of Italian origin made with vegetables, often with the addition of pasta or rice.',
    cuisine: 'Italian',
    imageId: 'recipe-minestrone-soup',
    ingredients: [
        { quantity: '2 tbsp', ingredient: 'Olive oil' },
        { quantity: '1', ingredient: 'Onion, chopped' },
        { quantity: '2', ingredient: 'Carrots, chopped' },
        { quantity: '2 stalks', ingredient: 'Celery, chopped' },
        { quantity: '4 cloves', ingredient: 'Garlic, minced' },
        { quantity: '8 cups', ingredient: 'Vegetable broth' },
        { quantity: '15 oz can', ingredient: 'Diced tomatoes' },
        { quantity: '15 oz can', ingredient: 'Kidney or cannellini beans, rinsed' },
        { quantity: '1 cup', ingredient: 'Small pasta (like ditalini)' },
        { quantity: '1', ingredient: 'Zucchini, chopped' },
        { quantity: '2 cups', ingredient: 'Spinach' }
    ],
    instructions: [
        'Heat olive oil in a large pot. Sauté onion, carrots, and celery until softened.',
        'Add garlic and cook for another minute.',
        'Pour in the vegetable broth and diced tomatoes. Bring to a boil.',
        'Add the beans and pasta. Simmer until pasta is al dente.',
        'Stir in the zucchini and spinach and cook for a few more minutes until tender.',
        'Season with salt, pepper, and Italian herbs.',
        'Serve hot, garnished with Parmesan cheese.'
    ]
  },
  {
    id: 'italian-10',
    name: 'Caprese Salad',
    description: 'A simple Italian salad, made of sliced fresh mozzarella, tomatoes, and sweet basil.',
    cuisine: 'Italian',
    imageId: 'recipe-caprese-salad',
    ingredients: [
        { quantity: '2', ingredient: 'Large ripe tomatoes, sliced' },
        { quantity: '8 oz', ingredient: 'Fresh mozzarella, sliced' },
        { quantity: '1/4 cup', ingredient: 'Fresh basil leaves' },
        { quantity: '2 tbsp', ingredient: 'Extra-virgin olive oil' },
        { quantity: '1 tbsp', ingredient: 'Balsamic glaze (optional)' },
        { quantity: 'to taste', ingredient: 'Flaky sea salt and fresh black pepper' }
    ],
    instructions: [
        'Arrange alternating slices of tomato and mozzarella on a platter.',
        'Tuck fresh basil leaves in between the slices.',
        'Drizzle generously with high-quality extra-virgin olive oil.',
        'If using, drizzle with balsamic glaze.',
        'Season with flaky sea salt and freshly ground black pepper.',
        'Serve immediately.'
    ]
  },
  
  // Mexican Recipes
  {
    id: 'mexican-1',
    name: 'Tacos',
    description: 'A traditional Mexican dish consisting of a small hand-sized corn or wheat tortilla topped with a filling.',
    cuisine: 'Mexican',
    imageId: 'recipe-tacos',
    ingredients: [
        { quantity: '1 lb', ingredient: 'Ground beef or chicken' },
        { quantity: '1 tbsp', ingredient: 'Chili powder' },
        { quantity: '1 tsp', ingredient: 'Cumin' },
        { quantity: '12', ingredient: 'Corn or flour tortillas' },
        { quantity: 'Toppings:', ingredient: 'lettuce, tomato, cheese, salsa, sour cream' }
    ],
    instructions: [
        'Cook meat in a skillet until browned. Drain fat.',
        'Stir in chili powder, cumin, salt, and a little water. Simmer for 5 minutes.',
        'Warm the tortillas.',
        'Fill each tortilla with the meat mixture.',
        'Serve with your favorite toppings like shredded lettuce, diced tomatoes, shredded cheese, salsa, and sour cream.'
    ]
  },
  {
    id: 'mexican-2',
    name: 'Burritos',
    description: 'A dish in Mexican and Tex-Mex cuisine consisting of a flour tortilla wrapped into a sealed cylindrical shape around various ingredients.',
    cuisine: 'Mexican',
    imageId: 'recipe-burritos',
    ingredients: [
        { quantity: '4 large', ingredient: 'Flour tortillas' },
        { quantity: '1 lb', ingredient: 'Cooked shredded chicken or beef' },
        { quantity: '1 cup', ingredient: 'Cooked rice' },
        { quantity: '1 cup', ingredient: 'Black or pinto beans, rinsed' },
        { quantity: '1 cup', ingredient: 'Shredded cheese' },
        { quantity: 'Salsa', ingredient: 'for serving' }
    ],
    instructions: [
        'Warm the tortillas to make them pliable.',
        'Layer the fillings down the center of each tortilla: rice, beans, meat, and cheese.',
        'Fold in the sides of the tortilla, then tightly roll it up from the bottom.',
        'You can serve as is, or lightly grill the burrito in a pan until golden brown.',
        'Serve with salsa and sour cream.'
    ]
  },
  {
    id: 'mexican-3',
    name: 'Quesadilla',
    description: 'A Mexican dish consisting of a tortilla that is filled primarily with cheese, and sometimes meats and spices.',
    cuisine: 'Mexican',
    imageId: 'recipe-quesadilla',
    ingredients: [
        { quantity: '2', ingredient: 'Flour tortillas' },
        { quantity: '1 cup', ingredient: 'Shredded Monterey Jack or cheddar cheese' },
        { quantity: 'Optional:', ingredient: 'cooked chicken, beans, jalapeños' },
        { quantity: '1 tbsp', ingredient: 'Butter or oil' }
    ],
    instructions: [
        'Heat a skillet over medium heat with butter or oil.',
        'Place one tortilla in the pan. Sprinkle cheese and optional fillings over the entire surface.',
        'Top with the second tortilla.',
        'Cook for 2-3 minutes per side, until the tortilla is golden brown and the cheese is melted.',
        'Slide onto a cutting board, slice into wedges, and serve with salsa and sour cream.'
    ]
  },
  {
    id: 'mexican-4',
    name: 'Enchiladas',
    description: 'A corn tortilla rolled around a filling and covered with a savory sauce.',
    cuisine: 'Mexican',
    imageId: 'recipe-enchiladas',
    ingredients: [
        { quantity: '8', ingredient: 'Corn tortillas' },
        { quantity: '2 cups', ingredient: 'Cooked, shredded chicken' },
        { quantity: '2 cups', ingredient: 'Red enchilada sauce' },
        { quantity: '1 cup', ingredient: 'Shredded cheddar or Monterey Jack cheese' },
        { quantity: '1/2', ingredient: 'Onion, chopped' }
    ],
    instructions: [
        'Preheat oven to 375°F (190°C).',
        'Warm tortillas slightly to make them pliable.',
        'Mix the shredded chicken with a little bit of the enchilada sauce and chopped onion.',
        'Spoon the chicken mixture into each tortilla and roll it up.',
        'Place the rolled tortillas seam-side down in a baking dish. Pour the remaining enchilada sauce over the top.',
        'Sprinkle with cheese.',
        'Bake for 20-25 minutes, until the sauce is bubbly and the cheese is melted.'
    ]
  },
  {
    id: 'mexican-5',
    name: 'Nachos',
    description: 'A Tex-Mex dish from northern Mexico that consists of heated tortilla chips or totopos covered with melted cheese.',
    cuisine: 'Mexican',
    imageId: 'recipe-nachos',
    ingredients: [
        { quantity: '1 bag', ingredient: 'Tortilla chips' },
        { quantity: '2 cups', ingredient: 'Shredded cheddar or nacho cheese sauce' },
        { quantity: '1 cup', ingredient: 'Cooked ground beef or beans' },
        { quantity: 'Toppings:', ingredient: 'jalapeños, sour cream, guacamole, salsa' }
    ],
    instructions: [
        'Preheat oven to 350°F (175°C).',
        'Spread the tortilla chips in a single layer on a baking sheet.',
        'Sprinkle the cooked ground beef or beans over the chips.',
        'Evenly cover with shredded cheese or drizzle with nacho cheese sauce.',
        'Top with sliced jalapeños if desired.',
        'Bake for 5-10 minutes, until the cheese is melted and bubbly.',
        'Serve immediately with sour cream, guacamole, and salsa on the side.'
    ]
  },
  {
    id: 'mexican-6',
    name: 'Guacamole',
    description: 'An avocado-based dip, spread, or salad first developed in Mexico.',
    cuisine: 'Mexican',
    imageId: 'recipe-guacamole',
    ingredients: [
        { quantity: '3', ingredient: 'Ripe avocados' },
        { quantity: '1/2', ingredient: 'Onion, finely chopped' },
        { quantity: '1', ingredient: 'Jalapeño, minced (optional)' },
        { quantity: '1/4 cup', ingredient: 'Fresh cilantro, chopped' },
        { quantity: '1', ingredient: 'Lime, juiced' },
        { quantity: 'to taste', ingredient: 'Salt' }
    ],
    instructions: [
        'Cut the avocados in half, remove the pit, and scoop the flesh into a bowl.',
        'Mash the avocado with a fork to your desired consistency (chunky or smooth).',
        'Stir in the chopped onion, jalapeño, cilantro, and lime juice.',
        'Season with salt to taste.',
        'Mix everything together well.',
        'Serve immediately with tortilla chips.'
    ]
  },
  {
    id: 'mexican-7',
    name: 'Fajitas',
    description: 'A Tex-Mex dish consisting of grilled meat, usually served on a flour or corn tortilla.',
    cuisine: 'Mexican',
    imageId: 'recipe-fajitas',
    ingredients: [
        { quantity: '1 lb', ingredient: 'Skirt steak or chicken breast, sliced' },
        { quantity: '1', ingredient: 'Onion, sliced' },
        { quantity: '2', ingredient: 'Bell peppers (different colors), sliced' },
        { quantity: '2 tbsp', ingredient: 'Fajita seasoning' },
        { quantity: '2 tbsp', ingredient: 'Oil' },
        { quantity: 'Warm', ingredient: 'Flour tortillas for serving' }
    ],
    instructions: [
        'Toss the sliced meat with fajita seasoning.',
        'Heat oil in a large skillet or cast-iron pan over medium-high heat.',
        'Add the meat and cook until browned and cooked through. Remove from pan.',
        'In the same pan, add the sliced onions and bell peppers. Sauté until tender-crisp.',
        'Return the meat to the pan and toss everything together.',
        'Serve sizzling hot with warm tortillas and your favorite toppings like sour cream, guacamole, and salsa.'
    ]
  },
  {
    id: 'mexican-8',
    name: 'Churros',
    description: 'A strip of fried dough, sometimes filled, dusted with cinnamon sugar.',
    cuisine: 'Mexican',
    imageId: 'recipe-churros',
    ingredients: [
        { quantity: '1 cup', ingredient: 'Water' },
        { quantity: '1/2 cup', ingredient: 'Butter' },
        { quantity: '1 cup', ingredient: 'All-purpose flour' },
        { quantity: '3', ingredient: 'Eggs' },
        { quantity: 'for frying', ingredient: 'Vegetable oil' },
        { quantity: '1/2 cup', ingredient: 'Sugar' },
        { quantity: '1 tsp', ingredient: 'Cinnamon' }
    ],
    instructions: [
        'In a saucepan, bring water and butter to a boil. Stir in flour until a ball forms. Remove from heat and cool slightly.',
        'Beat in eggs, one at a time, until the dough is smooth.',
        'Transfer the dough to a piping bag with a star tip.',
        'Heat oil for frying to 375°F (190°C). Pipe strips of dough into the hot oil.',
        'Fry for 2-3 minutes per side, until golden brown.',
        'Remove and drain on paper towels. While still warm, roll the churros in a mixture of sugar and cinnamon.',
        'Serve with chocolate sauce for dipping.'
    ]
  },
  {
    id: 'mexican-9',
    name: 'Mexican Rice',
    description: 'A side dish made from white rice, tomatoes, garlic, onions, and other ingredients.',
    cuisine: 'Mexican',
    imageId: 'recipe-mexican-rice',
    ingredients: [
        { quantity: '1 cup', ingredient: 'Long-grain white rice' },
        { quantity: '2 tbsp', ingredient: 'Oil' },
        { quantity: '1/2', ingredient: 'Onion, chopped' },
        { quantity: '1 clove', ingredient: 'Garlic, minced' },
        { quantity: '2 cups', ingredient: 'Chicken or vegetable broth' },
        { quantity: '1/2 cup', ingredient: 'Tomato sauce' },
        { quantity: 'to taste', ingredient: 'Salt' }
    ],
    instructions: [
        'Heat oil in a saucepan. Add the rice and toast, stirring frequently, until lightly golden.',
        'Add the chopped onion and garlic and sauté for another 2-3 minutes until softened.',
        'Stir in the broth, tomato sauce, and salt. Bring to a boil.',
        'Reduce heat to low, cover, and simmer for 20 minutes, or until all the liquid is absorbed.',
        'Fluff with a fork before serving.'
    ]
  },
  {
    id: 'mexican-10',
    name: 'Tortilla Soup',
    description: 'A traditional Mexican soup made of fried corn tortilla pieces, submerged into a broth of tomato, garlic, onion, and epazote.',
    cuisine: 'Mexican',
    imageId: 'recipe-tortilla-soup',
    ingredients: [
        { quantity: '4 cups', ingredient: 'Chicken broth' },
        { quantity: '2', ingredient: 'Chicken breasts, cooked and shredded' },
        { quantity: '15 oz can', ingredient: 'Diced tomatoes' },
        { quantity: '1', ingredient: 'Onion, chopped' },
        { quantity: '2 cloves', ingredient: 'Garlic, minced' },
        { quantity: '1', ingredient: 'Chipotle pepper in adobo, chopped (optional)' },
        { quantity: 'Garnish:', ingredient: 'crispy tortilla strips, avocado, cheese, cilantro' }
    ],
    instructions: [
        'In a large pot, sauté onion and garlic until soft.',
        'Add chicken broth, diced tomatoes, and chipotle pepper. Bring to a boil.',
        'Reduce heat and simmer for 15-20 minutes.',
        'Stir in the shredded chicken.',
        'Ladle soup into bowls.',
        'Garnish with crispy tortilla strips, diced avocado, shredded cheese, and fresh cilantro just before serving.'
    ]
  },

  // Japanese Recipes
  {
    id: 'japanese-1',
    name: 'Sushi',
    description: 'A Japanese dish of prepared vinegared rice, usually with some sugar and salt, accompanying a variety of ingredients, such as seafood, vegetables, and occasionally tropical fruits.',
    cuisine: 'Japanese',
    imageId: 'recipe-sushi',
    ingredients: [
        { quantity: '2 cups', ingredient: 'Sushi rice' },
        { quantity: '1/4 cup', ingredient: 'Rice vinegar' },
        { quantity: '4 sheets', ingredient: 'Nori (seaweed)' },
        { quantity: 'Fillings:', ingredient: 'sushi-grade fish, avocado, cucumber' }
    ],
    instructions: [
        'Cook sushi rice according to package directions. While warm, season with rice vinegar, sugar, and salt mixture.',
        'Lay a sheet of nori on a bamboo rolling mat.',
        'Spread a thin layer of sushi rice over the nori, leaving a small border at the top.',
        'Arrange your fillings in a line across the center of the rice.',
        'Tightly roll the sushi using the bamboo mat.',
        'Slice the roll into pieces with a sharp, wet knife.',
        'Serve with soy sauce, wasabi, and pickled ginger.'
    ]
  },
  {
    id: 'japanese-2',
    name: 'Ramen',
    description: 'A Japanese noodle soup, with a combination of a rich flavoured broth, one of a variety of noodles and a selection of meats or vegetables, often topped with a boiled egg.',
    cuisine: 'Japanese',
    imageId: 'recipe-ramen',
    ingredients: [
        { quantity: '4 cups', ingredient: 'Pork or chicken broth' },
        { quantity: '2 packs', ingredient: 'Fresh or dried ramen noodles' },
        { quantity: '2', ingredient: 'Soft-boiled eggs, halved' },
        { quantity: '4 slices', ingredient: 'Chashu pork or cooked chicken' },
        { quantity: 'Toppings:', ingredient: 'scallions, nori, bamboo shoots' }
    ],
    instructions: [
        'Heat the broth in a large pot. Season with soy sauce, miso, or salt to create your ramen base (tare).',
        'Cook ramen noodles according to package instructions. Drain well.',
        'Divide the noodles among serving bowls.',
        'Pour the hot broth over the noodles.',
        'Top with slices of chashu pork, a soft-boiled egg half, chopped scallions, nori, and bamboo shoots.',
        'Serve immediately.'
    ]
  },
  {
    id: 'japanese-3',
    name: 'Tempura',
    description: 'A classic Japanese dish of battered and deep-fried seafood and vegetables.',
    cuisine: 'Japanese',
    imageId: 'recipe-tempura',
    ingredients: [
        { quantity: '1 cup', ingredient: 'All-purpose flour' },
        { quantity: '1', ingredient: 'Large egg' },
        { quantity: '1 cup', ingredient: 'Ice-cold water' },
        { quantity: 'Assorted:', ingredient: 'shrimp, sweet potatoes, broccoli, zucchini' },
        { quantity: 'for frying', ingredient: 'Vegetable oil' }
    ],
    instructions: [
        'Prepare your vegetables and shrimp (peeled and deveined).',
        'Heat oil for deep frying to 350°F (175°C).',
        'In a bowl, lightly whisk the egg. Add the ice-cold water and whisk again.',
        'Add the flour all at once and mix lightly. The batter should be lumpy.',
        'Dip the shrimp and vegetables into the batter, one at a time, and carefully place them in the hot oil.',
        'Fry for 2-3 minutes, until light golden and crispy. Do not overcrowd the pan.',
        'Remove with a slotted spoon and drain on a wire rack.',
        'Serve hot with tempura dipping sauce.'
    ]
  },
  {
    id: 'japanese-4',
    name: 'Teriyaki Chicken',
    description: 'A Japanese dish of chicken grilled in a sweet and savory sauce.',
    cuisine: 'Japanese',
    imageId: 'recipe-teriyaki-chicken',
    ingredients: [
        { quantity: '1 lb', ingredient: 'Boneless, skinless chicken thighs' },
        { quantity: '1/2 cup', ingredient: 'Soy sauce' },
        { quantity: '1/4 cup', ingredient: 'Mirin (sweet rice wine)' },
        { quantity: '1/4 cup', ingredient: 'Sake' },
        { quantity: '2 tbsp', ingredient: 'Sugar' },
        { quantity: '1 tbsp', ingredient: 'Vegetable oil' }
    ],
    instructions: [
        'In a small saucepan, combine soy sauce, mirin, sake, and sugar. This is your teriyaki sauce. Bring to a simmer and cook until slightly thickened. Set aside.',
        'Heat oil in a skillet over medium-high heat.',
        'Place chicken thighs skin-side down (if they have skin) and cook until golden and crispy.',
        'Flip the chicken and cook until done.',
        'Pour the teriyaki sauce over the chicken. Let it bubble and thicken, coating the chicken.',
        'Slice the chicken and serve over rice, with extra sauce drizzled on top.'
    ]
  },
  {
    id: 'japanese-5',
    name: 'Miso Soup',
    description: 'A traditional Japanese soup consisting of a stock called "dashi" into which softened miso paste is mixed.',
    cuisine: 'Japanese',
    imageId: 'recipe-miso-soup',
    ingredients: [
        { quantity: '4 cups', ingredient: 'Dashi (Japanese soup stock)' },
        { quantity: '3-4 tbsp', ingredient: 'Miso paste (white or red)' },
        { quantity: '1/2 block', ingredient: 'Silken tofu, cubed' },
        { quantity: '1 tbsp', ingredient: 'Dried wakame seaweed' },
        { quantity: '1', ingredient: 'Scallion, thinly sliced' }
    ],
    instructions: [
        'Rehydrate the wakame seaweed in a little water for a few minutes, then drain.',
        'In a pot, bring the dashi to a simmer. Do not boil.',
        'In a small bowl, dissolve the miso paste with a little bit of the hot dashi.',
        'Pour the dissolved miso back into the pot and stir gently.',
        'Add the cubed tofu and rehydrated wakame.',
        'Heat through gently for a minute. Do not let the soup boil after adding the miso.',
        'Ladle into bowls and garnish with sliced scallions.'
    ]
  },
  {
    id: 'japanese-6',
    name: 'Udon',
    description: 'A type of thick, wheat-flour noodle used frequently in Japanese cuisine.',
    cuisine: 'Japanese',
    imageId: 'recipe-udon',
    ingredients: [
        { quantity: '2 packs', ingredient: 'Cooked or frozen udon noodles' },
        { quantity: '4 cups', ingredient: 'Dashi broth' },
        { quantity: '2 tbsp', ingredient: 'Soy sauce' },
        { quantity: '1 tbsp', ingredient: 'Mirin' },
        { quantity: 'Toppings:', ingredient: 'tempura, fish cakes, scallions' }
    ],
    instructions: [
        'In a pot, combine dashi, soy sauce, and mirin to make the soup broth. Heat gently.',
        'Cook or reheat the udon noodles according to package directions.',
        'Place the cooked noodles in serving bowls.',
        'Pour the hot broth over the noodles.',
        'Add your favorite toppings, such as shrimp tempura, sliced fish cakes (kamaboko), and chopped scallions.',
        'Serve immediately.'
    ]
  },
  {
    id: 'japanese-7',
    name: 'Sashimi',
    description: 'A Japanese delicacy consisting of fresh raw fish or meat sliced into thin pieces and often eaten with soy sauce.',
    cuisine: 'Japanese',
    imageId: 'recipe-sashimi',
    ingredients: [
        { quantity: '1/2 lb', ingredient: 'Sashimi-grade tuna or salmon' },
        { quantity: 'For serving:', ingredient: 'soy sauce, wasabi, pickled ginger' },
        { quantity: 'Garnish:', ingredient: 'shredded daikon radish' }
    ],
    instructions: [
        'Ensure your fish is sashimi-grade, meaning it is safe to eat raw.',
        'Using a very sharp knife, slice the fish against the grain into bite-sized pieces, about 1/4 inch thick.',
        'Arrange the slices artfully on a plate, often over a bed of shredded daikon radish.',
        'Serve immediately.',
        'To eat, mix a small amount of wasabi into your soy sauce for dipping.',
        'Eat pickled ginger between different types of fish to cleanse the palate.'
    ]
  },
  {
    id: 'japanese-8',
    name: 'Okonomiyaki',
    description: 'A Japanese savory pancake containing a variety of ingredients in a wheat-flour-based batter.',
    cuisine: 'Japanese',
    imageId: 'recipe-okonomiyaki',
    ingredients: [
        { quantity: '1 cup', ingredient: 'All-purpose flour' },
        { quantity: '3/4 cup', ingredient: 'Dashi or water' },
        { quantity: '2', ingredient: 'Large eggs' },
        { quantity: '3 cups', ingredient: 'Shredded cabbage' },
        { quantity: '1/2 cup', ingredient: 'Chopped scallions' },
        { quantity: '1/2 cup', ingredient: 'Thinly sliced pork belly or shrimp' },
        { quantity: 'Toppings:', ingredient: 'okonomiyaki sauce, Japanese mayo, bonito flakes' }
    ],
    instructions: [
        'In a large bowl, whisk together flour, dashi/water, and eggs to make the batter.',
        'Stir in the shredded cabbage and scallions.',
        'Heat a lightly oiled griddle or large pan over medium heat.',
        'Pour half the batter onto the griddle to form a round pancake.',
        'Top with slices of pork belly or shrimp.',
        'Cook for 5-7 minutes, until the bottom is golden brown. Flip carefully and cook the other side for another 5-7 minutes.',
        'Transfer to a plate and brush with okonomiyaki sauce, drizzle with Japanese mayonnaise, and sprinkle with bonito flakes and aonori (seaweed powder).'
    ]
  },
  {
    id: 'japanese-9',
    name: 'Yakitori',
    description: 'A Japanese type of skewered chicken.',
    cuisine: 'Japanese',
    imageId: 'recipe-yakitori',
    ingredients: [
        { quantity: '1 lb', ingredient: 'Boneless chicken thighs, cut into 1-inch pieces' },
        { quantity: '1/2 cup', ingredient: 'Soy sauce' },
        { quantity: '1/2 cup', ingredient: 'Mirin' },
        { quantity: '1/4 cup', ingredient: 'Sake' },
        { quantity: '2 tbsp', ingredient: 'Sugar' },
        { quantity: '1 bunch', ingredient: 'Scallions, cut into 1-inch pieces' },
        { quantity: '8', ingredient: 'Bamboo skewers, soaked in water' }
    ],
    instructions: [
        'Make the tare sauce: combine soy sauce, mirin, sake, and sugar in a saucepan. Simmer until it thickens slightly.',
        'Thread the chicken and scallion pieces alternately onto the bamboo skewers.',
        'Preheat a grill or broiler to high heat.',
        'Grill the skewers for 3-4 minutes. Flip, then brush with the tare sauce.',
        'Continue to grill, flipping and brushing with sauce every minute or so, until the chicken is cooked through and nicely glazed (about 8-10 minutes total).',
        'Serve immediately.'
    ]
  },
  {
    id: 'japanese-10',
    name: 'Onigiri',
    description: 'A Japanese food made from white rice formed into triangular or cylindrical shapes and often wrapped in nori.',
    cuisine: 'Japanese',
    imageId: 'recipe-onigiri',
    ingredients: [
        { quantity: '2 cups', ingredient: 'Cooked Japanese short-grain rice' },
        { quantity: '1 tsp', ingredient: 'Salt' },
        { quantity: 'Fillings:', ingredient: 'salted salmon, pickled plum (umeboshi), tuna mayo' },
        { quantity: 'Strips of', ingredient: 'Nori (seaweed)' }
    ],
    instructions: [
        'Cook the rice and let it cool just enough so you can handle it.',
        'Wet your hands with water and sprinkle with salt to prevent the rice from sticking.',
        'Take a handful of rice and flatten it slightly in your palm.',
        'Place a small amount of your chosen filling in the center.',
        'Form the rice around the filling, pressing firmly to shape it into a triangle or ball.',
        'Wrap a strip of nori around the onigiri.',
        'Repeat with the remaining rice and fillings.'
    ]
  },

  // American Recipes
  {
    id: 'american-1',
    name: 'Classic Cheeseburger',
    description: 'A juicy beef patty with melted cheese, lettuce, tomato, and onion in a soft bun.',
    cuisine: 'American',
    imageId: 'recipe-cheeseburger',
    ingredients: [
        { quantity: '1 lb', ingredient: 'Ground beef' },
        { quantity: '4 slices', ingredient: 'American cheese' },
        { quantity: '4', ingredient: 'Hamburger buns' },
        { quantity: 'Toppings:', ingredient: 'lettuce, tomato, onion, pickles' }
    ],
    instructions: [
        'Divide ground beef into 4 equal portions and form into patties.',
        'Season patties with salt and pepper.',
        'Grill or pan-sear the patties for 3-5 minutes per side, or to your desired doneness.',
        'Place a slice of cheese on each patty during the last minute of cooking to melt.',
        'Lightly toast the hamburger buns.',
        'Assemble the burgers with the cooked patties and your favorite toppings.'
    ]
  },
  {
    id: 'american-2',
    name: 'BBQ Ribs',
    description: 'Slow-cooked pork ribs smothered in a sweet and tangy barbecue sauce.',
    cuisine: 'American',
    imageId: 'recipe-bbq-ribs',
    ingredients: [
        { quantity: '1 rack', ingredient: 'Pork baby back ribs' },
        { quantity: '1/2 cup', ingredient: 'Brown sugar' },
        { quantity: '1 tbsp', ingredient: 'Paprika' },
        { quantity: '1 tbsp', ingredient: 'Garlic powder' },
        { quantity: '1 cup', ingredient: 'BBQ sauce' }
    ],
    instructions: [
        'Preheat oven to 300°F (150°C).',
        'In a small bowl, mix together brown sugar, paprika, garlic powder, salt, and pepper to create a dry rub.',
        'Rub the mixture all over the ribs.',
        'Wrap the ribs tightly in aluminum foil and place on a baking sheet.',
        'Bake for 2.5 to 3 hours, until the meat is tender.',
        'Carefully remove the foil. Brush the ribs with BBQ sauce and broil for a few minutes on each side until the sauce is caramelized.'
    ]
  },
  {
    id: 'american-3',
    name: 'Buffalo Wings',
    description: 'Crispy chicken wings tossed in a spicy buffalo sauce, served with blue cheese dressing.',
    cuisine: 'American',
    imageId: 'recipe-buffalo-wings',
    ingredients: [
        { quantity: '2 lbs', ingredient: 'Chicken wings' },
        { quantity: '1/2 cup', ingredient: 'Frank\'s RedHot sauce' },
        { quantity: '1/3 cup', ingredient: 'Melted butter' },
        { quantity: '1 tbsp', ingredient: 'White vinegar' },
        { quantity: 'Serving suggestion:', ingredient: 'blue cheese dressing and celery sticks' }
    ],
    instructions: [
        'Preheat oven to 400°F (200°C).',
        'Pat the chicken wings dry and arrange them in a single layer on a baking sheet lined with a wire rack.',
        'Bake for 45-50 minutes, flipping halfway through, until the skin is crispy and golden.',
        'While the wings are baking, whisk together the hot sauce, melted butter, and vinegar to make the buffalo sauce.',
        'In a large bowl, toss the hot, crispy wings with the buffalo sauce until evenly coated.',
        'Serve immediately with blue cheese dressing and celery sticks.'
    ]
  },
  {
    id: 'american-4',
    name: 'Mac and Cheese',
    description: 'A creamy and cheesy pasta bake, a classic comfort food.',
    cuisine: 'American',
    imageId: 'recipe-mac-and-cheese',
    ingredients: [
        { quantity: '1 lb', ingredient: 'Elbow macaroni' },
        { quantity: '1/4 cup', ingredient: 'Butter' },
        { quantity: '1/4 cup', ingredient: 'All-purpose flour' },
        { quantity: '3 cups', ingredient: 'Milk' },
        { quantity: '2 cups', ingredient: 'Shredded sharp cheddar cheese' },
        { quantity: '1 cup', ingredient: 'Shredded Gruyere or Monterey Jack cheese' },
        { quantity: '1/2 cup', ingredient: 'Breadcrumbs' }
    ],
    instructions: [
        'Cook macaroni according to package directions. Drain.',
        'Preheat oven to 375°F (190°C).',
        'In a saucepan, melt butter. Whisk in flour and cook for 1 minute to make a roux.',
        'Gradually whisk in the milk until the sauce is smooth. Bring to a simmer and cook until thickened.',
        'Remove from heat and stir in the cheeses until melted. Season with salt and pepper.',
        'Combine the cheese sauce with the cooked macaroni. Pour into a baking dish.',
        'Top with breadcrumbs and bake for 20-25 minutes, until bubbly and golden.'
    ]
  },
  {
    id: 'american-5',
    name: 'Apple Pie',
    description: 'A classic American dessert with a flaky crust and a sweet apple filling.',
    cuisine: 'American',
    imageId: 'recipe-apple-pie',
    ingredients: [
        { quantity: '1 recipe', ingredient: 'Double-crust pie dough' },
        { quantity: '6-8', ingredient: 'Granny Smith apples, peeled and sliced' },
        { quantity: '3/4 cup', ingredient: 'Sugar' },
        { quantity: '1 tsp', ingredient: 'Cinnamon' },
        { quantity: '1/4 tsp', ingredient: 'Nutmeg' },
        { quantity: '2 tbsp', ingredient: 'Butter' }
    ],
    instructions: [
        'Preheat oven to 425°F (220°C).',
        'Line a pie plate with one of the crusts.',
        'In a large bowl, toss the sliced apples with sugar, cinnamon, and nutmeg.',
        'Spoon the apple mixture into the pie crust. Dot with small pieces of butter.',
        'Top with the second crust, crimp the edges to seal, and cut a few slits in the top to vent.',
        'Bake for 15 minutes, then reduce the oven temperature to 375°F (190°C) and bake for another 35-45 minutes, until the crust is golden and the filling is bubbly.'
    ]
  },
  {
    id: 'american-6',
    name: 'Clam Chowder',
    description: 'A rich and creamy soup with clams, potatoes, and onions.',
    cuisine: 'American',
    imageId: 'recipe-clam-chowder',
    ingredients: [
        { quantity: '4 slices', ingredient: 'Bacon, diced' },
        { quantity: '1', ingredient: 'Onion, chopped' },
        { quantity: '2 stalks', ingredient: 'Celery, chopped' },
        { quantity: '2', ingredient: 'Potatoes, diced' },
        { quantity: '2 (6.5 oz) cans', ingredient: 'Chopped clams, with juice' },
        { quantity: '2 cups', ingredient: 'Half-and-half or cream' }
    ],
    instructions: [
        'In a large pot, cook bacon until crisp. Remove bacon, leaving the fat in the pot.',
        'Sauté onion and celery in the bacon fat until tender.',
        'Add diced potatoes and the juice from the canned clams. Add enough water to cover the potatoes. Simmer until potatoes are tender.',
        'Stir in the chopped clams and the half-and-half.',
        'Heat through gently, but do not boil.',
        'Season with salt and pepper. Garnish with the cooked bacon bits before serving.'
    ]
  },
  {
    id: 'american-7',
    name: 'Philly Cheesesteak',
    description: 'A sandwich made with thinly sliced beefsteak and melted cheese in a long hoagie roll.',
    cuisine: 'American',
    imageId: 'recipe-philly-cheesesteak',
    ingredients: [
        { quantity: '1 lb', ingredient: 'Ribeye steak, thinly sliced' },
        { quantity: '1 large', ingredient: 'Onion, sliced' },
        { quantity: '8 slices', ingredient: 'Provolone or American cheese' },
        { quantity: '4', ingredient: 'Hoagie rolls' }
    ],
    instructions: [
        'Heat a griddle or large skillet over medium-high heat. Add some oil.',
        'Sauté the sliced onions until caramelized and soft. Remove from skillet.',
        'Add the thinly sliced steak to the hot skillet in a single layer. Cook for 1-2 minutes per side until browned.',
        'Pile the cooked steak together and top with the sautéed onions.',
        'Lay the cheese slices over the meat and onions to melt.',
        'Slice the hoagie rolls and toast them lightly. Scoop the meat, onion, and cheese mixture into the rolls.',
        'Serve immediately.'
    ]
  },
  {
    id: 'american-8',
    name: 'Cornbread',
    description: 'A sweet or savory bread made with cornmeal, a Southern staple.',
    cuisine: 'American',
    imageId: 'recipe-cornbread',
    ingredients: [
        { quantity: '1 cup', ingredient: 'All-purpose flour' },
        { quantity: '1 cup', ingredient: 'Yellow cornmeal' },
        { quantity: '2/3 cup', ingredient: 'Sugar' },
        { quantity: '1 tsp', ingredient: 'Salt' },
        { quantity: '1 tbsp', ingredient: 'Baking powder' },
        { quantity: '1/3 cup', ingredient: 'Melted butter' },
        { quantity: '1 cup', ingredient: 'Milk' },
        { quantity: '2', ingredient: 'Large eggs' }
    ],
    instructions: [
        'Preheat oven to 400°F (200°C). Grease an 8-inch square baking pan.',
        'In a large bowl, whisk together flour, cornmeal, sugar, salt, and baking powder.',
        'In a separate bowl, whisk together melted butter, milk, and eggs.',
        'Pour the wet ingredients into the dry ingredients and stir until just combined. Do not overmix.',
        'Pour the batter into the prepared pan.',
        'Bake for 20-25 minutes, or until a toothpick inserted into the center comes out clean.',
        'Let it cool slightly before slicing.'
    ]
  },
  {
    id: 'american-9',
    name: 'Hot Dogs',
    description: 'A grilled or steamed sausage served in the slit of a partially sliced bun.',
    cuisine: 'American',
    imageId: 'recipe-hot-dogs',
    ingredients: [
        { quantity: '8', ingredient: 'Hot dogs' },
        { quantity: '8', ingredient: 'Hot dog buns' },
        { quantity: 'Toppings:', ingredient: 'ketchup, mustard, relish, onions' }
    ],
    instructions: [
        'Cook the hot dogs to your liking: grill, boil, or pan-fry.',
        'Grill for a few minutes per side until heated through and lightly charred.',
        'Boil for 4-6 minutes.',
        'Pan-fry over medium heat until browned.',
        'Place each cooked hot dog in a bun.',
        'Serve with your favorite toppings.'
    ]
  },
  {
    id: 'american-10',
    name: 'Pancakes with Maple Syrup',
    description: 'Fluffy pancakes served with a generous drizzle of maple syrup.',
    cuisine: 'American',
    imageId: 'recipe-pancakes',
    ingredients: [
        { quantity: '1 1/2 cups', ingredient: 'All-purpose flour' },
        { quantity: '2 tbsp', ingredient: 'Sugar' },
        { quantity: '2 tsp', ingredient: 'Baking powder' },
        { quantity: '1/2 tsp', ingredient: 'Salt' },
        { quantity: '1 1/4 cups', ingredient: 'Milk' },
        { quantity: '1', ingredient: 'Large egg' },
        { quantity: '2 tbsp', ingredient: 'Melted butter' },
        { quantity: 'For serving:', ingredient: 'maple syrup and butter' }
    ],
    instructions: [
        'In a large bowl, whisk together flour, sugar, baking powder, and salt.',
        'In a separate bowl, whisk together milk, egg, and melted butter.',
        'Pour the wet ingredients into the dry ingredients and stir until just combined. The batter should be slightly lumpy.',
        'Heat a lightly oiled griddle or frying pan over medium-high heat.',
        'Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake.',
        'Cook until bubbles appear on the surface, then flip and cook until golden brown on the other side.',
        'Serve hot with butter and maple syrup.'
    ]
  },

  // Thai Recipes
  {
    id: 'thai-1',
    name: 'Pad Thai',
    description: 'A classic Thai stir-fried noodle dish with shrimp or chicken, peanuts, and bean sprouts.',
    cuisine: 'Thai',
    imageId: 'recipe-pad-thai',
    ingredients: [
        { quantity: '8 oz', ingredient: 'Flat rice noodles' },
        { quantity: '1/2 lb', ingredient: 'Shrimp or chicken, sliced' },
        { quantity: '1 cup', ingredient: 'Bean sprouts' },
        { quantity: '2', ingredient: 'Eggs' },
        { quantity: '1/4 cup', ingredient: 'Chopped peanuts' }
    ],
    instructions: [
        'Soak rice noodles in warm water until soft. Drain.',
        'Make the sauce: Mix 3 tbsp fish sauce, 3 tbsp tamarind paste, 2 tbsp sugar, and 1 tbsp lime juice.',
        'Heat oil in a wok. Stir-fry shrimp or chicken until cooked. Add tofu if using.',
        'Push everything to one side, add eggs and scramble.',
        'Add the noodles and sauce to the wok. Toss everything together.',
        'Add bean sprouts, scallions, and half the peanuts. Toss again.',
        'Serve immediately, garnished with remaining peanuts and a lime wedge.'
    ]
  },
  {
    id: 'thai-2',
    name: 'Green Curry',
    description: 'A spicy and aromatic curry made with green chilies, coconut milk, and vegetables.',
    cuisine: 'Thai',
    imageId: 'recipe-green-curry',
    ingredients: [
        { quantity: '2 tbsp', ingredient: 'Green curry paste' },
        { quantity: '1 can (13.5 oz)', ingredient: 'Coconut milk' },
        { quantity: '1 lb', ingredient: 'Chicken breast, sliced' },
        { quantity: '1 cup', ingredient: 'Bamboo shoots' },
        { quantity: '1', ingredient: 'Bell pepper, sliced' },
        { quantity: 'Handful', ingredient: 'Thai basil leaves' }
    ],
    instructions: [
        'In a pot, heat half of the coconut milk until the oil separates.',
        'Add the green curry paste and stir-fry until fragrant.',
        'Add the chicken and cook until no longer pink.',
        'Pour in the remaining coconut milk and bring to a simmer.',
        'Add bamboo shoots and bell pepper. Cook until vegetables are tender.',
        'Stir in fish sauce and sugar to taste.',
        'Remove from heat and stir in the Thai basil leaves.',
        'Serve hot with jasmine rice.'
    ]
  },
  {
    id: 'thai-3',
    name: 'Tom Yum Goong',
    description: 'A hot and sour Thai soup, usually cooked with shrimp.',
    cuisine: 'Thai',
    imageId: 'recipe-tom-yum-goong',
    ingredients: [
        { quantity: '4 cups', ingredient: 'Chicken or vegetable broth' },
        { quantity: '1 lb', ingredient: 'Shrimp, peeled and deveined' },
        { quantity: '2 stalks', ingredient: 'Lemongrass, bruised' },
        { quantity: '4-5 slices', ingredient: 'Galangal' },
        { quantity: '5-6', ingredient: 'Kaffir lime leaves' },
        { quantity: '2-3', ingredient: 'Thai chilies, bruised' },
        { quantity: '1/2 cup', ingredient: 'Mushrooms, sliced' },
        { quantity: '2 tbsp', ingredient: 'Fish sauce' },
        { quantity: '3 tbsp', ingredient: 'Lime juice' },
        { quantity: '1 tbsp', ingredient: 'Chili paste in oil (nam prik pao)' }
    ],
    instructions: [
        'In a pot, bring the broth to a boil with lemongrass, galangal, and kaffir lime leaves. Simmer for 10 minutes.',
        'Add the mushrooms and chilies. Cook for a few minutes.',
        'Add the shrimp and cook until they turn pink.',
        'Turn off the heat. Stir in the fish sauce, lime juice, and chili paste.',
        'Garnish with fresh cilantro.',
        'Serve hot.'
    ]
  },
  {
    id: 'thai-4',
    name: 'Mango Sticky Rice',
    description: 'A classic Thai dessert made with glutinous rice, fresh mango, and coconut milk.',
    cuisine: 'Thai',
    imageId: 'recipe-mango-sticky-rice',
    ingredients: [
        { quantity: '1 cup', ingredient: 'Glutinous (sweet) rice' },
        { quantity: '1 can (13.5 oz)', ingredient: 'Coconut milk' },
        { quantity: '1/2 cup', ingredient: 'Sugar' },
        { quantity: '1/4 tsp', ingredient: 'Salt' },
        { quantity: '2', ingredient: 'Ripe mangoes, peeled and sliced' },
        { quantity: '1 tbsp', ingredient: 'Toasted sesame seeds (for garnish)' }
    ],
    instructions: [
        'Soak glutinous rice in water for at least 4 hours or overnight. Drain and steam for 20-25 minutes until cooked.',
        'While rice is steaming, heat coconut milk, sugar, and salt in a saucepan until the sugar dissolves. Do not boil.',
        'Pour most of the sweet coconut sauce over the hot sticky rice and mix well. Let it sit for 20 minutes to absorb.',
        'Make a thicker topping by simmering the remaining coconut sauce with a little cornstarch slurry.',
        'To serve, place a portion of sticky rice on a plate, arrange mango slices next to it, and drizzle with the thickened coconut topping. Sprinkle with sesame seeds.'
    ]
  },
  {
    id: 'thai-5',
    name: 'Som Tam',
    description: 'A spicy green papaya salad that combines all four tastes: sour, sweet, salty, and spicy.',
    cuisine: 'Thai',
    imageId: 'recipe-som-tam',
    ingredients: [
        { quantity: '1', ingredient: 'Small green papaya, shredded' },
        { quantity: '2-3', ingredient: 'Thai chilies' },
        { quantity: '2 cloves', ingredient: 'Garlic' },
        { quantity: '1 tbsp', ingredient: 'Dried shrimp' },
        { quantity: '2 tbsp', ingredient: 'Roasted peanuts' },
        { quantity: '1 tbsp', ingredient: 'Fish sauce' },
        { quantity: '1 tbsp', ingredient: 'Lime juice' },
        { quantity: '1 tbsp', ingredient: 'Palm sugar' },
        { quantity: '1/2 cup', ingredient: 'Cherry tomatoes, halved' }
    ],
    instructions: [
        'In a large mortar and pestle, pound the chilies and garlic until fragrant.',
        'Add the dried shrimp and peanuts, and pound lightly.',
        'Add the fish sauce, lime juice, and palm sugar. Mix until the sugar is dissolved.',
        'Add the shredded green papaya and cherry tomatoes.',
        'Gently pound and toss everything together to combine the flavors.',
        'Serve immediately.'
    ]
  },
  {
    id: 'thai-6',
    name: 'Massaman Curry',
    description: 'A rich, relatively mild Thai curry that is a fusion of Thai- and Indian-style curries.',
    cuisine: 'Thai',
    imageId: 'recipe-massaman-curry',
    ingredients: [
        { quantity: '2 tbsp', ingredient: 'Massaman curry paste' },
        { quantity: '1 can (13.5 oz)', ingredient: 'Coconut milk' },
        { quantity: '1 lb', ingredient: 'Beef or chicken, cubed' },
        { quantity: '2', ingredient: 'Potatoes, cubed' },
        { quantity: '1', ingredient: 'Onion, chopped' },
        { quantity: '1/4 cup', ingredient: 'Roasted peanuts' },
        { quantity: '1 tbsp', ingredient: 'Tamarind paste' },
        { quantity: '1 tbsp', ingredient: 'Fish sauce' },
        { quantity: '1 tbsp', ingredient: 'Palm sugar' }
    ],
    instructions: [
        'In a pot, fry the Massaman curry paste in a little coconut cream until fragrant.',
        'Add the beef or chicken and brown it.',
        'Pour in the rest of the coconut milk and bring to a simmer.',
        'Add the potatoes, onion, and peanuts. Simmer until the meat and potatoes are tender.',
        'Stir in the tamarind paste, fish sauce, and palm sugar. Adjust seasoning to taste.',
        'Serve hot with rice.'
    ]
  },
  {
    id: 'thai-7',
    name: 'Pad Kra Pao',
    description: 'A popular Thai street food dish made with minced meat, holy basil, and chili.',
    cuisine: 'Thai',
    imageId: 'recipe-pad-kra-pao',
    ingredients: [
        { quantity: '1 lb', ingredient: 'Minced pork or chicken' },
        { quantity: '4-5 cloves', ingredient: 'Garlic, minced' },
        { quantity: '3-4', ingredient: 'Thai chilies, minced' },
        { quantity: '1 cup', ingredient: 'Holy basil leaves' },
        { quantity: '1 tbsp', ingredient: 'Oyster sauce' },
        { quantity: '1 tbsp', ingredient: 'Soy sauce' },
        { quantity: '1 tsp', ingredient: 'Sugar' },
        { quantity: 'Optional:', ingredient: 'fried egg on top' }
    ],
    instructions: [
        'Heat oil in a wok over high heat.',
        'Add minced garlic and chilies and stir-fry until fragrant.',
        'Add the minced meat and break it up. Stir-fry until cooked through.',
        'Add oyster sauce, soy sauce, and sugar. Stir to combine.',
        'Turn off the heat and stir in the holy basil leaves until they wilt.',
        'Serve immediately over jasmine rice, with a fried egg on top if desired.'
    ]
  },
  {
    id: 'thai-8',
    name: 'Khao Pad',
    description: 'Thai-style fried rice with your choice of protein and vegetables.',
    cuisine: 'Thai',
    imageId: 'recipe-khao-pad',
    ingredients: [
        { quantity: '3 cups', ingredient: 'Cooked jasmine rice, chilled' },
        { quantity: '1/2 lb', ingredient: 'Shrimp or chicken, chopped' },
        { quantity: '1', ingredient: 'Onion, chopped' },
        { quantity: '2 cloves', ingredient: 'Garlic, minced' },
        { quantity: '1', ingredient: 'Egg' },
        { quantity: '2 tbsp', ingredient: 'Soy sauce' },
        { quantity: '1 tbsp', ingredient: 'Fish sauce' },
        { quantity: 'For serving:', ingredient: 'lime wedges, cucumber slices' }
    ],
    instructions: [
        'Heat oil in a wok. Add garlic and onion and stir-fry.',
        'Add the shrimp or chicken and cook until done.',
        'Push ingredients to one side. Crack the egg into the wok and scramble.',
        'Add the chilled rice and break up any clumps.',
        'Season with soy sauce and fish sauce. Stir-fry until everything is well-combined and heated through.',
        'Serve hot with lime wedges and cucumber slices on the side.'
    ]
  },
  {
    id: 'thai-9',
    name: 'Satay',
    description: 'Skewered and grilled meat, served with a peanut sauce.',
    cuisine: 'Thai',
    imageId: 'recipe-satay',
    ingredients: [
        { quantity: '1 lb', ingredient: 'Chicken or pork, thinly sliced' },
        { quantity: 'Marinade:', ingredient: 'coconut milk, turmeric, coriander, cumin' },
        { quantity: 'Peanut sauce:', ingredient: 'peanut butter, coconut milk, soy sauce, lime juice, chili' },
        { quantity: 'Bamboo skewers', ingredient: 'soaked in water' }
    ],
    instructions: [
        'Marinate the meat slices in coconut milk and spices for at least 30 minutes.',
        'Thread the meat onto the bamboo skewers.',
        'Grill or broil the skewers for 3-5 minutes per side, until cooked through and slightly charred.',
        'To make the peanut sauce, whisk all sauce ingredients together until smooth.',
        'Serve the satay skewers hot with the peanut sauce for dipping.'
    ]
  },
  {
    id: 'thai-10',
    name: 'Red Curry',
    description: 'A spicy Thai curry with a paste based on red chilies, served with coconut milk.',
    cuisine: 'Thai',
    imageId: 'recipe-red-curry',
    ingredients: [
        { quantity: '2 tbsp', ingredient: 'Red curry paste' },
        { quantity: '1 can (13.5 oz)', ingredient: 'Coconut milk' },
        { quantity: '1 lb', ingredient: 'Chicken, beef, or duck' },
        { quantity: '1 cup', ingredient: 'Bamboo shoots' },
        { quantity: '1/2 cup', ingredient: 'Thai basil leaves' },
        { quantity: '1', ingredient: 'Red bell pepper, sliced' }
    ],
    instructions: [
        'In a pot, heat half of the coconut milk until oil separates.',
        'Add red curry paste and stir-fry until fragrant.',
        'Add the meat and cook until browned.',
        'Pour in the remaining coconut milk and bring to a simmer.',
        'Add bamboo shoots and bell pepper. Cook until tender.',
        'Season with fish sauce and sugar to taste.',
        'Stir in Thai basil leaves before serving.',
        'Serve hot with jasmine rice.'
    ]
  },

  // French Recipes
  {
    id: 'french-1',
    name: 'Coq au Vin',
    description: 'A classic French dish of chicken braised with wine, lardons, mushrooms, and garlic.',
    cuisine: 'French',
    imageId: 'recipe-coq-au-vin',
    ingredients: [
        { quantity: '1 bottle', ingredient: 'Red wine (Burgundy)' },
        { quantity: '3-4 lbs', ingredient: 'Chicken pieces' },
        { quantity: '1/2 lb', ingredient: 'Lardons or bacon, diced' },
        { quantity: '1 lb', ingredient: 'Mushrooms, quartered' },
        { quantity: '1', ingredient: 'Onion, chopped' },
        { quantity: '2', ingredient: 'Carrots, chopped' },
        { quantity: '2 cloves', ingredient: 'Garlic, minced' }
    ],
    instructions: [
        'Marinate chicken in red wine overnight with herbs.',
        'In a large pot, cook lardons until crisp. Remove and set aside.',
        'Brown the chicken pieces in the rendered fat. Remove and set aside.',
        'Sauté onion, carrots, and garlic in the same pot. Add flour to make a roux.',
        'Return chicken to the pot. Pour in the marinade wine and some chicken broth. Bring to a simmer.',
        'Cover and cook on low for 1.5 to 2 hours, until chicken is tender.',
        'In a separate pan, sauté mushrooms. Add them and the cooked lardons to the pot.',
        'Serve hot, garnished with parsley.'
    ]
  },
  {
    id: 'french-2',
    name: 'Boeuf Bourguignon',
    description: 'A rich beef stew braised in red wine, often with carrots, onions, and mushrooms.',
    cuisine: 'French',
    imageId: 'recipe-boeuf-bourguignon',
    ingredients: [
        { quantity: '3 lbs', ingredient: 'Beef chuck, cubed' },
        { quantity: '1 bottle', ingredient: 'Dry red wine' },
        { quantity: '1', ingredient: 'Onion, sliced' },
        { quantity: '2', ingredient: 'Carrots, sliced' },
        { quantity: '1 lb', ingredient: 'Mushrooms' },
        { quantity: '1/4 lb', ingredient: 'Bacon, diced' }
    ],
    instructions: [
        'Cook bacon in a large Dutch oven. Remove bacon and brown the beef cubes in batches.',
        'Sauté onions and carrots. Return beef and bacon to the pot.',
        'Add flour and stir. Pour in red wine and beef broth. Add herbs.',
        'Cover and simmer on low for 3-4 hours, or until beef is very tender.',
        'In the last hour, add pearl onions and sautéed mushrooms.',
        'Serve hot with potatoes or crusty bread.'
    ]
  },
  {
    id: 'french-3',
    name: 'Soufflé',
    description: 'A light, airy baked dish made with egg yolks and beaten egg whites combined with various other ingredients.',
    cuisine: 'French',
    imageId: 'recipe-souffle',
    ingredients: [
        { quantity: '1/4 cup', ingredient: 'Grated Gruyère cheese' },
        { quantity: '3 tbsp', ingredient: 'Butter' },
        { quantity: '3 tbsp', ingredient: 'All-purpose flour' },
        { quantity: '1 cup', ingredient: 'Hot milk' },
        { quantity: '4', ingredient: 'Egg yolks' },
        { quantity: '5', ingredient: 'Egg whites' },
        { quantity: 'Pinch', ingredient: 'Nutmeg' }
    ],
    instructions: [
        'Preheat oven to 400°F (200°C). Butter and flour a soufflé dish.',
        'Melt butter in a saucepan, whisk in flour to make a roux.',
        'Gradually whisk in hot milk to make a béchamel sauce. Cook until thick.',
        'Remove from heat. Whisk in egg yolks one at a time. Stir in cheese, nutmeg, salt, and pepper.',
        'In a separate bowl, beat egg whites until stiff peaks form.',
        'Gently fold one-third of the egg whites into the cheese mixture to lighten it, then fold in the rest.',
        'Pour into the prepared dish and bake for 25-30 minutes until puffed and golden. Serve immediately.'
    ]
  },
  {
    id: 'french-4',
    name: 'Croissant',
    description: 'A buttery, flaky, viennoiserie pastry named for its historical crescent shape.',
    cuisine: 'French',
    imageId: 'recipe-croissant',
    ingredients: [
        { quantity: '1 packet', ingredient: 'Active dry yeast' },
        { quantity: '1/4 cup', ingredient: 'Warm water' },
        { quantity: '3 1/2 cups', ingredient: 'All-purpose flour' },
        { quantity: '1/4 cup', ingredient: 'Sugar' },
        { quantity: '1 cup', ingredient: 'Unsalted butter, cold' },
        { quantity: '1', ingredient: 'Egg, for wash' }
    ],
    instructions: [
        'Proof the yeast in warm water.',
        'Mix flour, sugar, salt, and milk. Add yeast mixture and form a dough. Knead and let it rise.',
        'Create a butter block (beurrage) and chill.',
        'Laminate the dough: roll out the dough, enclose the butter block, and perform a series of folds and turns, chilling between each turn.',
        'After the final turn, roll out the dough, cut into triangles, and roll them up into crescent shapes.',
        'Let the croissants proof until doubled in size.',
        'Brush with egg wash and bake at 400°F (200°C) for 15-20 minutes until golden brown.'
    ]
  },
  {
    id: 'french-5',
    name: 'French Onion Soup',
    description: 'A hearty soup made with beef broth and caramelized onions, topped with croutons and melted cheese.',
    cuisine: 'French',
    imageId: 'recipe-french-onion-soup',
    ingredients: [
        { quantity: '4 large', ingredient: 'Onions, thinly sliced' },
        { quantity: '4 tbsp', ingredient: 'Butter' },
        { quantity: '8 cups', ingredient: 'Beef broth' },
        { quantity: '1/2 cup', ingredient: 'Dry white wine' },
        { quantity: '1', ingredient: 'Baguette, sliced' },
        { quantity: '1 1/2 cups', ingredient: 'Grated Gruyère cheese' }
    ],
    instructions: [
        'In a large pot, melt butter. Add onions and caramelize slowly over low heat for 45-60 minutes until deep brown.',
        'Deglaze the pot with white wine.',
        'Add the beef broth, bring to a simmer, and cook for at least 30 minutes.',
        'Toast the baguette slices.',
        'Ladle the soup into oven-safe bowls. Top each with a baguette slice and a generous amount of Gruyère cheese.',
        'Broil until the cheese is melted and bubbly.'
    ]
  },
  {
    id: 'french-6',
    name: 'Ratatouille',
    description: 'A traditional French Provençal stewed vegetable dish, originating in Nice.',
    cuisine: 'French',
    imageId: 'recipe-ratatouille',
    ingredients: [
        { quantity: '1', ingredient: 'Eggplant' },
        { quantity: '1', ingredient: 'Zucchini' },
        { quantity: '1', ingredient: 'Yellow squash' },
        { quantity: '1', ingredient: 'Red bell pepper' },
        { quantity: '4', ingredient: 'Tomatoes' },
        { quantity: '1', ingredient: 'Onion' },
        { quantity: '2 cloves', ingredient: 'Garlic' }
    ],
    instructions: [
        'Thinly slice the eggplant, zucchini, yellow squash, and tomatoes.',
        'Make a sauce by sautéing chopped onion, garlic, and bell pepper, then adding crushed tomatoes.',
        'Spread the sauce in the bottom of a baking dish.',
        'Arrange the sliced vegetables in an alternating pattern over the sauce.',
        'Drizzle with olive oil and season with salt, pepper, and herbs (like thyme).',
        'Cover with parchment paper and bake at 375°F (190°C) for 40-50 minutes, until vegetables are tender.'
    ]
  },
  {
    id: 'french-7',
    name: 'Crème Brûlée',
    description: 'A dessert consisting of a rich custard base topped with a layer of hardened caramelized sugar.',
    cuisine: 'French',
    imageId: 'recipe-creme-brulee',
    ingredients: [
        { quantity: '2 cups', ingredient: 'Heavy cream' },
        { quantity: '1', ingredient: 'Vanilla bean, split' },
        { quantity: '5', ingredient: 'Large egg yolks' },
        { quantity: '1/2 cup', ingredient: 'Sugar, plus more for topping' }
    ],
    instructions: [
        'Preheat oven to 325°F (165°C).',
        'Heat cream and vanilla bean in a saucepan until just simmering. Remove from heat and let it steep.',
        'In a bowl, whisk egg yolks and sugar until pale.',
        'Slowly pour the warm cream into the egg mixture, whisking constantly.',
        'Strain the custard and pour it into individual ramekins.',
        'Place the ramekins in a water bath and bake for 30-35 minutes, until the center is set.',
        'Chill for at least 4 hours. Before serving, sprinkle sugar on top and caramelize with a kitchen torch.'
    ]
  },
  {
    id: 'french-8',
    name: 'Macarons',
    description: 'A sweet meringue-based confection made with egg white, icing sugar, granulated sugar, almond powder, and food colouring.',
    cuisine: 'French',
    imageId: 'recipe-macarons',
    ingredients: [
        { quantity: '1 cup', ingredient: 'Almond flour' },
        { quantity: '2/3 cup', ingredient: 'Powdered sugar' },
        { quantity: '3', ingredient: 'Large egg whites, room temperature' },
        { quantity: '1/4 cup', ingredient: 'Granulated sugar' },
        { quantity: 'Filling:', ingredient: 'buttercream, ganache, or jam' }
    ],
    instructions: [
        'Sift almond flour and powdered sugar together.',
        'Whip egg whites until foamy. Gradually add granulated sugar and continue to whip until stiff, glossy peaks form (French meringue).',
        'Gently fold the dry ingredients into the meringue in two stages until the batter flows like lava (macaronage).',
        'Pipe small circles onto a baking sheet lined with parchment paper.',
        'Let the shells rest for 30-60 minutes until they form a skin.',
        'Bake at 300°F (150°C) for 15-18 minutes.',
        'Let cool completely before filling and sandwiching the shells together.'
    ]
  },
  {
    id: 'french-9',
    name: 'Steak Frites',
    description: 'A simple and popular dish of steak paired with French fries.',
    cuisine: 'French',
    imageId: 'recipe-steak-frites',
    ingredients: [
        { quantity: '2', ingredient: 'Ribeye or sirloin steaks' },
        { quantity: '4', ingredient: 'Russet potatoes, for fries' },
        { quantity: 'For sauce:', ingredient: 'butter, shallots, herbs, brandy' }
    ],
    instructions: [
        'Cut potatoes into fries and fry them twice: once at a lower temperature to cook through, and a second time at a higher temperature to crisp up.',
        'Season steaks generously with salt and pepper.',
        'Sear the steaks in a hot, buttered cast-iron skillet for 3-5 minutes per side for medium-rare.',
        'Let the steaks rest.',
        'In the same pan, make a simple pan sauce by sautéing shallots, deglazing with brandy, and whisking in more butter and herbs.',
        'Slice the steak and serve with the hot fries and the pan sauce.'
    ]
  },
  {
    id: 'french-10',
    name: 'Quiche Lorraine',
    description: 'A savory tart with a filling of custard with bacon, and cheese.',
    cuisine: 'French',
    imageId: 'recipe-quiche-lorraine',
    ingredients: [
        { quantity: '1', ingredient: '9-inch pie crust, partially baked' },
        { quantity: '1/2 lb', ingredient: 'Bacon, cooked and crumbled' },
        { quantity: '1 cup', ingredient: 'Grated Gruyère cheese' },
        { quantity: '3', ingredient: 'Large eggs' },
        { quantity: '1 1/2 cups', ingredient: 'Heavy cream or half-and-half' },
        { quantity: 'Pinch', ingredient: 'Nutmeg' }
    ],
    instructions: [
        'Preheat oven to 375°F (190°C).',
        'Sprinkle the cooked bacon and grated cheese into the bottom of the partially baked pie crust.',
        'In a bowl, whisk together eggs, cream, salt, pepper, and a pinch of nutmeg.',
        'Carefully pour the egg mixture over the bacon and cheese.',
        'Bake for 35-45 minutes, until the center is set (a knife inserted comes out clean) and the top is golden brown.',
        'Let it cool for at least 10 minutes before slicing.'
    ]
  },

  // Mediterranean Recipes
  {
    id: 'mediterranean-1',
    name: 'Hummus with Pita Bread',
    description: 'A creamy dip made from chickpeas, tahini, lemon, and garlic, served with warm pita bread.',
    cuisine: 'Mediterranean',
    imageId: 'recipe-hummus',
    ingredients: [
        { quantity: '1 can (15 oz)', ingredient: 'Chickpeas, rinsed' },
        { quantity: '1/4 cup', ingredient: 'Tahini' },
        { quantity: '1/4 cup', ingredient: 'Fresh lemon juice' },
        { quantity: '1 clove', ingredient: 'Garlic' },
        { quantity: '2 tbsp', ingredient: 'Olive oil' },
        { quantity: 'Warm', ingredient: 'Pita bread for serving' }
    ],
    instructions: [
        'In a food processor, combine tahini and lemon juice. Process for 1 minute.',
        'Add chickpeas, garlic, a pinch of salt, and olive oil.',
        'Process until smooth. Add a few tablespoons of water if needed to reach desired consistency.',
        'Taste and adjust seasoning.',
        'Serve in a bowl, drizzled with more olive oil and a sprinkle of paprika.',
        'Serve with warm pita bread.'
    ]
  },
  {
    id: 'mediterranean-2',
    name: 'Falafel',
    description: 'Deep-fried balls or patties made from ground chickpeas, fava beans, or both.',
    cuisine: 'Mediterranean',
    imageId: 'recipe-falafel',
    ingredients: [
        { quantity: '1 cup', ingredient: 'Dried chickpeas, soaked overnight' },
        { quantity: '1/2', ingredient: 'Onion, chopped' },
        { quantity: '1/2 cup', ingredient: 'Fresh parsley' },
        { quantity: '1/2 cup', ingredient: 'Fresh cilantro' },
        { quantity: '2 cloves', ingredient: 'Garlic' },
        { quantity: '1 tsp', ingredient: 'Cumin' },
        { quantity: 'for frying', ingredient: 'Oil' }
    ],
    instructions: [
        'Drain the soaked chickpeas well.',
        'In a food processor, combine chickpeas, onion, parsley, cilantro, garlic, cumin, salt, and pepper.',
        'Pulse until the mixture is finely chopped but not a paste.',
        'Transfer to a bowl and stir in a little flour or chickpea flour if too wet. Chill the mixture for 30 minutes.',
        'Form the mixture into small balls or patties.',
        'Heat oil for deep frying. Fry the falafel in batches for 3-5 minutes, until golden brown and crisp.',
        'Serve hot in pita bread with tahini sauce and salad.'
    ]
  },
  {
    id: 'mediterranean-3',
    name: 'Greek Salad',
    description: 'A refreshing salad with tomatoes, cucumbers, onions, feta cheese, and olives.',
    cuisine: 'Mediterranean',
    imageId: 'recipe-greek-salad',
    ingredients: [
        { quantity: '2', ingredient: 'Large tomatoes, cut into wedges' },
        { quantity: '1', ingredient: 'Cucumber, sliced' },
        { quantity: '1/2', ingredient: 'Red onion, thinly sliced' },
        { quantity: '1/2 cup', ingredient: 'Kalamata olives' },
        { quantity: '4 oz', ingredient: 'Feta cheese, cubed or crumbled' },
        { quantity: 'Dressing:', ingredient: 'olive oil, lemon juice, oregano' }
    ],
    instructions: [
        'In a large bowl, combine tomatoes, cucumber, red onion, and olives.',
        'In a small bowl, whisk together olive oil, lemon juice, dried oregano, salt, and pepper for the dressing.',
        'Pour the dressing over the vegetables and toss gently.',
        'Top with feta cheese.',
        'Serve immediately.'
    ]
  },
  {
    id: 'mediterranean-4',
    name: 'Gyros',
    description: 'Meat cooked on a vertical rotisserie, served in a pita with tomato, onion, and tzatziki sauce.',
    cuisine: 'Mediterranean',
    imageId: 'recipe-gyros',
    ingredients: [
        { quantity: '1 lb', ingredient: 'Lamb, beef, or chicken, thinly sliced' },
        { quantity: 'Marinade:', ingredient: 'yogurt, lemon, garlic, oregano' },
        { quantity: '4', ingredient: 'Pita breads' },
        { quantity: 'For serving:', ingredient: 'tzatziki sauce, sliced tomato, sliced onion' }
    ],
    instructions: [
        'Marinate the meat for at least 1 hour.',
        'Cook the meat in a skillet over high heat until browned and cooked through.',
        'Warm the pita breads.',
        'Fill each pita with the cooked meat.',
        'Top with tzatziki sauce, sliced tomato, and sliced onion.',
        'Fold and serve immediately.'
    ]
  },
  {
    id: 'mediterranean-5',
    name: 'Baba Ghanoush',
    description: 'A smoky eggplant dip made with tahini, olive oil, and seasonings.',
    cuisine: 'Mediterranean',
    imageId: 'recipe-baba-ghanoush',
    ingredients: [
        { quantity: '1 large', ingredient: 'Eggplant' },
        { quantity: '1/4 cup', ingredient: 'Tahini' },
        { quantity: '2 tbsp', ingredient: 'Lemon juice' },
        { quantity: '1 clove', ingredient: 'Garlic, minced' },
        { quantity: '2 tbsp', ingredient: 'Olive oil' }
    ],
    instructions: [
        'Roast or grill the eggplant until the skin is charred and the inside is very soft.',
        'Let it cool, then scoop out the flesh and discard the skin.',
        'In a food processor, combine the eggplant flesh, tahini, lemon juice, and garlic.',
        'Blend until smooth.',
        'Season with salt. Transfer to a serving bowl and drizzle with olive oil.',
        'Serve with pita bread or vegetables for dipping.'
    ]
  },
  {
    id: 'mediterranean-6',
    name: 'Spanakopita',
    description: 'A Greek savory spinach pie, often also containing feta cheese.',
    cuisine: 'Mediterranean',
    imageId: 'recipe-spanakopita',
    ingredients: [
        { quantity: '1 lb', ingredient: 'Spinach, chopped' },
        { quantity: '1/2 lb', ingredient: 'Feta cheese, crumbled' },
        { quantity: '1', ingredient: 'Onion, chopped' },
        { quantity: '1/4 cup', ingredient: 'Fresh dill, chopped' },
        { quantity: '2', ingredient: 'Eggs, beaten' },
        { quantity: '1 package', ingredient: 'Phyllo dough' },
        { quantity: '1/2 cup', ingredient: 'Melted butter' }
    ],
    instructions: [
        'Sauté onion until soft. Add spinach and cook until wilted. Squeeze out all excess moisture.',
        'In a bowl, combine the spinach, feta, dill, and eggs. Mix well.',
        'Preheat oven to 375°F (190°C).',
        'Layer sheets of phyllo dough in a baking dish, brushing each sheet with melted butter.',
        'Spread the spinach filling over the phyllo.',
        'Top with more layers of buttered phyllo sheets.',
        'Score the top layers into squares and bake for 30-40 minutes, until golden brown.'
    ]
  },
  {
    id: 'mediterranean-7',
    name: 'Baklava',
    description: 'A rich, sweet dessert pastry made of layers of filo filled with chopped nuts and sweetened with syrup or honey.',
    cuisine: 'Mediterranean',
    imageId: 'recipe-baklava',
    ingredients: [
        { quantity: '1 lb', ingredient: 'Phyllo dough' },
        { quantity: '1 lb', ingredient: 'Mixed nuts (walnuts, pistachios), chopped' },
        { quantity: '1 cup', ingredient: 'Melted butter' },
        { quantity: 'Syrup:', ingredient: '1 cup water, 1 cup sugar, 1/2 cup honey' }
    ],
    instructions: [
        'Preheat oven to 350°F (175°C).',
        'Butter a baking dish. Layer several sheets of phyllo, brushing each with butter. Sprinkle a layer of nuts.',
        'Repeat layering phyllo and nuts until all are used, ending with a top layer of phyllo.',
        'Cut the baklava into diamond or square shapes before baking.',
        'Bake for 45-50 minutes until golden brown.',
        'While it bakes, make the syrup by boiling water, sugar, and honey. Let it cool.',
        'Pour the cool syrup over the hot baklava. Let it soak for several hours before serving.'
    ]
  },
  {
    id: 'mediterranean-8',
    name: 'Dolmades',
    description: 'Stuffed grape leaves with a filling of rice, herbs, and sometimes minced meat.',
    cuisine: 'Mediterranean',
    imageId: 'recipe-dolmades',
    ingredients: [
        { quantity: '1 jar', ingredient: 'Grape leaves in brine' },
        { quantity: '1 cup', ingredient: 'Long-grain rice' },
        { quantity: '1', ingredient: 'Onion, finely chopped' },
        { quantity: '1/2 cup', ingredient: 'Fresh parsley, chopped' },
        { quantity: '1/4 cup', ingredient: 'Fresh mint, chopped' },
        { quantity: '1/2 cup', ingredient: 'Olive oil' },
        { quantity: '1/2 cup', ingredient: 'Lemon juice' }
    ],
    instructions: [
        'Rinse the grape leaves. Sauté onion until soft. Add rice and herbs and cook for a minute.',
        'Place a spoonful of the rice mixture on the shiny side of a grape leaf.',
        'Fold the sides in and roll up tightly.',
        'Arrange the stuffed leaves snugly in a pot.',
        'Pour olive oil, lemon juice, and enough water to cover them over the top.',
        'Place a plate on top to keep them submerged. Simmer on low heat for 45-60 minutes until rice is cooked.',
        'Let them cool in the pot. Serve at room temperature or chilled.'
    ]
  },
  {
    id: 'mediterranean-9',
    name: 'Moussaka',
    description: 'An eggplant- or potato-based dish, often including ground meat, in the Levant, Middle East, and Balkans.',
    cuisine: 'Mediterranean',
    imageId: 'recipe-moussaka',
    ingredients: [
        { quantity: '2 large', ingredient: 'Eggplants, sliced' },
        { quantity: '1 lb', ingredient: 'Ground lamb or beef' },
        { quantity: '1', ingredient: 'Onion, chopped' },
        { quantity: '1 can (15 oz)', ingredient: 'Crushed tomatoes' },
        { quantity: 'Béchamel sauce:', ingredient: 'butter, flour, milk, nutmeg' }
    ],
    instructions: [
        'Salt the eggplant slices and let them sit to draw out moisture. Pat dry, then fry or bake until golden.',
        'Make the meat sauce: brown the ground meat with onion, then add tomatoes, red wine, cinnamon, and oregano. Simmer until thick.',
        'Make the béchamel sauce.',
        'In a baking dish, layer the eggplant slices and the meat sauce.',
        'Pour the béchamel sauce over the top. Sprinkle with cheese.',
        'Bake at 350°F (175°C) for 45-60 minutes, until golden and bubbling.'
    ]
  },
  {
    id: 'mediterranean-10',
    name: 'Tabbouleh',
    description: 'A Levantine vegetarian salad made mostly of finely chopped parsley, with tomatoes, mint, onion, and bulgur.',
    cuisine: 'Mediterranean',
    imageId: 'recipe-tabbouleh',
    ingredients: [
        { quantity: '1/2 cup', ingredient: 'Fine bulgur wheat' },
        { quantity: '2 large bunches', ingredient: 'Parsley, finely chopped' },
        { quantity: '1/2 bunch', ingredient: 'Mint, finely chopped' },
        { quantity: '2', ingredient: 'Tomatoes, finely diced' },
        { quantity: '1/2', ingredient: 'Onion, finely chopped' },
        { quantity: '1/4 cup', ingredient: 'Lemon juice' },
        { quantity: '1/4 cup', ingredient: 'Olive oil' }
    ],
    instructions: [
        'Soak the bulgur wheat in hot water for 10-15 minutes, then drain well.',
        'In a large bowl, combine the finely chopped parsley, mint, tomatoes, and onion.',
        'Add the drained bulgur.',
        'Whisk together lemon juice and olive oil for the dressing. Pour over the salad.',
        'Season with salt and pepper and toss gently to combine.',
        'Let it sit for about 15 minutes for the flavors to meld before serving.'
    ]
  },
];
