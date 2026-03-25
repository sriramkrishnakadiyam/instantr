'use server';
/**
 * @fileOverview This file implements a Genkit flow for generating personalized recipe recommendations with AI-generated blurbs.
 *
 * - getPersonalizedRecipeBlurbs - A function that fetches recipes based on user preferences and generates personalized blurbs for each.
 * - PersonalizedRecipeBlurbsInput - The input type for the getPersonalizedRecipeBlurbs function.
 * - PersonalizedRecipeBlurbsOutput - The return type for the getPersonalizedRecipeBlurbs function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const PersonalizedRecipeBlurbsInputSchema = z.object({
  cuisine: z.string().describe('The user\'s preferred cuisine.'),
  favoriteIngredients: z.array(z.string()).describe('A list of ingredients the user likes.').optional(),
  dietaryPreference: z.enum(['Veg', 'Non-Veg', 'Vegan', 'None']).describe('The user\'s dietary preference.').default('None'),
  spiceLevel: z.enum(['Mild', 'Medium', 'Hot', 'None']).describe('The user\'s preferred spice level.').default('None'),
});
export type PersonalizedRecipeBlurbsInput = z.infer<typeof PersonalizedRecipeBlurbsInputSchema>;

const RecommendedRecipeSchema = z.object({
  name: z.string().describe('The name of the recommended recipe.'),
  description: z.string().describe('A brief description of the recipe.'),
  ingredients: z.array(z.string()).describe('A list of key ingredients in the recipe.'),
  cuisine: z.string().describe('The cuisine type of the recipe.'),
  isVeg: z.boolean().describe('Whether the recipe is vegetarian.'),
  spiceLevel: z.enum(['Mild', 'Medium', 'Hot', 'None']).describe('The spice level of the recipe.'),
});

const PersonalizedRecipeBlurbsOutputSchema = z.object({
  recipes: z.array(z.object({
    recipeName: z.string().describe('The name of the recommended recipe.'),
    aiBlurb: z.string().describe('A unique, AI-generated blurb explaining why this recipe aligns with the user\'s tastes.'),
  })).describe('A list of personalized recipe recommendations with AI-generated blurbs.'),
});
export type PersonalizedRecipeBlurbsOutput = z.infer<typeof PersonalizedRecipeBlurbsOutputSchema>;

// Mock database of recipes
const mockRecipes = [
  {
    name: 'Spicy Chicken Curry',
    description: 'A rich and flavorful chicken curry with a spicy kick.',
    ingredients: ['Chicken', 'Onion', 'Tomato', 'Ginger', 'Garlic', 'Chili Powder', 'Turmeric', 'Coriander'],
    cuisine: 'Indian',
    isVeg: false,
    spiceLevel: 'Hot',
  },
  {
    name: 'Paneer Butter Masala',
    description: 'Creamy and mildly spiced cottage cheese dish.',
    ingredients: ['Paneer', 'Tomato', 'Cream', 'Butter', 'Cashews', 'Ginger', 'Garlic', 'Garam Masala'],
    cuisine: 'Indian',
    isVeg: true,
    spiceLevel: 'Mild',
  },
  {
    name: 'Vegetable Biryani',
    description: 'Fragrant basmati rice cooked with mixed vegetables and aromatic spices.',
    ingredients: ['Basmati Rice', 'Mixed Vegetables', 'Onion', 'Tomato', 'Yogurt', 'Biryani Masala'],
    cuisine: 'Indian',
    isVeg: true,
    spiceLevel: 'Medium',
  },
  {
    name: 'Classic Margherita Pizza',
    description: 'A simple yet delicious pizza with tomato, mozzarella, and basil.',
    ingredients: ['Pizza Dough', 'Tomato Sauce', 'Mozzarella', 'Fresh Basil', 'Olive Oil'],
    cuisine: 'Italian',
    isVeg: true,
    spiceLevel: 'Mild',
  },
  {
    name: 'Spaghetti Carbonara',
    description: 'A classic Roman pasta dish with eggs, hard cheese, cured pork, and black pepper.',
    ingredients: ['Spaghetti', 'Eggs', 'Pecorino Romano', 'Guanciale', 'Black Pepper'],
    cuisine: 'Italian',
    isVeg: false,
    spiceLevel: 'Medium',
  },
  {
    name: 'Chicken Stir-fry with Cashews',
    description: 'A quick and easy stir-fry with tender chicken, crisp vegetables, and crunchy cashews.',
    ingredients: ['Chicken Breast', 'Broccoli', 'Carrots', 'Bell Peppers', 'Soy Sauce', 'Cashews'],
    cuisine: 'Chinese',
    isVeg: false,
    spiceLevel: 'Mild',
  },
  {
    name: 'Tofu with Mixed Vegetables',
    description: 'Healthy and flavorful tofu stir-fry with a variety of seasonal vegetables.',
    ingredients: ['Tofu', 'Broccoli', 'Carrots', 'Bell Peppers', 'Soy Sauce', 'Ginger', 'Garlic'],
    cuisine: 'Chinese',
    isVeg: true,
    spiceLevel: 'Mild',
  },
  {
    name: 'Vegan Black Bean Burgers',
    description: 'Hearty and flavorful plant-based burgers.',
    ingredients: ['Black Beans', 'Oats', 'Onion', 'Garlic', 'Spices'],
    cuisine: 'American',
    isVeg: true,
    spiceLevel: 'Medium',
  },
  {
    name: 'Spicy Shrimp Tacos',
    description: 'Zesty shrimp tacos with a hint of spice and fresh salsa.',
    ingredients: ['Shrimp', 'Tortillas', 'Cabbage Slaw', 'Lime', 'Chipotle Sauce'],
    cuisine: 'Mexican',
    isVeg: false,
    spiceLevel: 'Hot',
  },
];

/**
 * Tool to simulate fetching recipes from a database based on user preferences.
 * In a real application, this would query a database.
 */
const getRecipesFromDB = ai.defineTool(
  {
    name: 'getRecipesFromDB',
    description: 'Fetches recipes from the database based on cuisine, dietary preference, and spice level.',
    inputSchema: PersonalizedRecipeBlurbsInputSchema,
    outputSchema: z.array(RecommendedRecipeSchema),
  },
  async (input) => {
    // Simulate database query and filtering
    let filteredRecipes = mockRecipes.filter(recipe => {
      const cuisineMatch = input.cuisine.toLowerCase() === 'all' || recipe.cuisine.toLowerCase() === input.cuisine.toLowerCase();
      const dietaryMatch = input.dietaryPreference === 'None' ||
        (input.dietaryPreference === 'Veg' && recipe.isVeg) ||
        (input.dietaryPreference === 'Non-Veg' && !recipe.isVeg) ||
        (input.dietaryPreference === 'Vegan' && recipe.isVeg && !recipe.ingredients.some(ing => ['milk', 'cheese', 'butter', 'cream', 'eggs'].includes(ing.toLowerCase()))); // Simplified vegan check
      const spiceMatch = input.spiceLevel === 'None' || recipe.spiceLevel === input.spiceLevel;
      const ingredientMatch = !input.favoriteIngredients || input.favoriteIngredients.length === 0 ||
        input.favoriteIngredients.some(favIng => recipe.ingredients.some(recIng => recIng.toLowerCase().includes(favIng.toLowerCase())));

      return cuisineMatch && dietaryMatch && spiceMatch && ingredientMatch;
    });

    // Limit to 3-5 recipes for demonstration
    return filteredRecipes.slice(0, 5);
  }
);

/**
 * Prompt to generate a personalized blurb for a recipe based on user preferences.
 */
const recipeBlurbPrompt = ai.definePrompt({
  name: 'recipeBlurbPrompt',
  input: {
    schema: z.object({
      recipe: RecommendedRecipeSchema,
      userPreferences: PersonalizedRecipeBlurbsInputSchema,
    }),
  },
  output: {
    schema: z.object({
      blurb: z.string().describe('A unique, AI-generated blurb (2-3 sentences) explaining why this recipe aligns with the user\'s tastes.'),
    }),
  },
  prompt: `You are a creative culinary expert tasked with inspiring users to try new recipes.
Given a recipe and a user\'s preferences, generate a unique, engaging, and personalized blurb (2-3 sentences) highlighting why this specific recipe is a perfect match for their tastes. Focus on flavors, ingredients, and the overall experience.

User Preferences:
- Cuisine: {{{userPreferences.cuisine}}}
- Favorite Ingredients: {{#if userPreferences.favoriteIngredients}}{{#each userPreferences.favoriteIngredients}}
  - {{{this}}}{{/each}}{{else}}None specified.{{/if}}
- Dietary Preference: {{{userPreferences.dietaryPreference}}}
- Spice Level: {{{userPreferences.spiceLevel}}}

Recipe Details:
- Name: {{{recipe.name}}}
- Description: {{{recipe.description}}}
- Key Ingredients: {{#each recipe.ingredients}}
  - {{{this}}}{{/each}}
- Cuisine: {{{recipe.cuisine}}}
- Vegetarian: {{#if recipe.isVeg}}Yes{{else}}No{{/if}}
- Spice Level: {{{recipe.spiceLevel}}}

Why this recipe is perfect for them:`,
});

/**
 * Genkit flow to get personalized recipe recommendations with AI-generated blurbs.
 */
const personalizedRecipeBlurbsFlow = ai.defineFlow(
  {
    name: 'personalizedRecipeBlurbsFlow',
    inputSchema: PersonalizedRecipeBlurbsInputSchema,
    outputSchema: PersonalizedRecipeBlurbsOutputSchema,
  },
  async (input) => {
    // 1. Fetch recipes based on user preferences using the tool
    const recommendedRecipes = await getRecipesFromDB(input);

    // 2. Generate a personalized blurb for each recommended recipe
    const recipesWithBlurbs = await Promise.all(recommendedRecipes.map(async (recipe) => {
      const { output } = await recipeBlurbPrompt({ recipe, userPreferences: input });
      return {
        recipeName: recipe.name,
        aiBlurb: output?.blurb || `This ${recipe.cuisine} recipe sounds delicious!`, // Fallback in case blurb generation fails
      };
    }));

    return { recipes: recipesWithBlurbs };
  }
);

/**
 * Wrapper function to call the personalized recipe blurbs Genkit flow.
 * @param input - The user's preferences for recipe recommendations.
 * @returns A promise that resolves to a list of recommended recipes with AI-generated blurbs.
 */
export async function getPersonalizedRecipeBlurbs(input: PersonalizedRecipeBlurbsInput): Promise<PersonalizedRecipeBlurbsOutput> {
  return personalizedRecipeBlurbsFlow(input);
}
