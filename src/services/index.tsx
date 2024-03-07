import * as ingredients from './ingredientService'
import * as preparations from './preparationService'
import * as recipes from './recipeService'

export const services = {
  recipes,
  preparations,
  ingredients,
  storage: {
    imagePath: "https://nycmanrddfvrphpacidb.supabase.co/storage/v1/object/public/ingredients"
  }
}