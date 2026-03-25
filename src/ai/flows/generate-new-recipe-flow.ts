'use server';
/**
 * @fileOverview A Genkit flow that generates a new recipe based on user inputs.
 *
 * - generateNewRecipe - A function that handles the recipe generation process.
 * - GenerateNewRecipeInput - The input type for the generateNewRecipe function.
 * - GenerateNewRecipeOutput - The return type for the generateNewRecipe function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const GenerateNewRecipeInputSchema = z.object({
  ingredients: z.array(z.string()).describe('A list of ingredients available.'),
  cuisine: z.string().describe('The preferred cuisine type for the recipe.'),
  difficulty: z
    .enum(['Easy', 'Medium', 'Hard'])
    .describe('Desired difficulty level of the recipe.'),
});
export type GenerateNewRecipeInput = z.infer<typeof GenerateNewRecipeInputSchema>;

const GenerateNewRecipeOutputSchema = z.object({
  recipeName: z.string().describe('The name of the generated recipe.'),
  ingredientsList: z
    .array(
      z.object({
        ingredient: z.string().describe('The name of the ingredient.'),
        quantity: z.string().describe('The quantity of the ingredient.'),
      })
    )
    .describe('A detailed list of ingredients with quantities.'),
  instructions: z
    .array(z.string())
    .describe('Step-by-step cooking instructions.'),
  cookingTime: z.string().describe('Estimated cooking time (e.g., "30 minutes").'),
  servingSize: z.string().describe('Suggested serving size (e.g., "4 servings").'),
});
export type GenerateNewRecipeOutput = z.infer<typeof GenerateNewRecipeOutputSchema>;

export async function generateNewRecipe(
  input: GenerateNewRecipeInput
): Promise<GenerateNewRecipeOutput> {
  return generateNewRecipeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateNewRecipePrompt',
  input: { schema: GenerateNewRecipeInputSchema },
  output: { schema: GenerateNewRecipeOutputSchema },
  prompt: `You are an expert chef and recipe creator. Your task is to generate a unique and detailed recipe based on the user's preferences.

Here are the user's requirements:
Ingredients available: {{{ingredients}}}
Preferred cuisine: {{{cuisine}}}
Difficulty level: {{{difficulty}}}

Infer dietary type (vegetarian or non-vegetarian) from the ingredients provided. Generate a complete recipe including:
- A creative and appealing recipe name.
- A detailed list of ingredients with specific quantities.
- Clear, step-by-step cooking instructions.
- An estimated cooking time.
- A suggested serving size.

Please ensure the recipe is coherent, delicious, and matches the specified criteria.`,
});

const generateNewRecipeFlow = ai.defineFlow(
  {
    name: 'generateNewRecipeFlow',
    inputSchema: GenerateNewRecipeInputSchema,
    outputSchema: GenerateNewRecipeOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
      throw new Error('Failed to generate recipe output.');
    }
    return output;
  }
);
