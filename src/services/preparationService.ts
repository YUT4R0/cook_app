import { supabase } from "./supabase";

async function findByRecipeId(id: string){
  const { data } = await supabase
    .from('preparations')
    .select()
    .eq("recipe_id", id)
    .returns<PreparationResponse[]>()
  
  return data ?? []
}

export { findByRecipeId };
