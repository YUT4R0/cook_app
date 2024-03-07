import { Ingredients } from '@/components/Ingredients';
import { Loading } from '@/components/Loading';
import { Step } from '@/components/Step';
import { services } from '@/services';
import { MaterialIcons } from '@expo/vector-icons';
import { Redirect, router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { FlatList, Image, ScrollView, Text, View } from 'react-native';
import { styles } from './styles';

export default function recipe() {
  const [isLoading, setIsLoading] = useState(true)
  const [recipe, setRecipe] = useState<RecipeResponse | null>(null)
  const [ingredients, setIngredients] = useState<IngredientResponse[]>([])
  const [preparations, setPreparations] = useState<PreparationResponse[]>([])

  const { id } = useLocalSearchParams<{ id: string }>()
  
  useEffect(() => {
    services.recipes
    .show(id)
    .then(setRecipe)
    .finally(() => setIsLoading(false))
  }, [])
  
  useEffect(() => {
    services.ingredients
    .findByRecipeId(id)
    .then(setIngredients)
  }, [])

  useEffect(() => {
    services.preparations
    .findByRecipeId(id)
    .then(setPreparations)
  }, [])
  
  if (isLoading) return <Loading />

  if (!id || !recipe) return <Redirect href={"/"} />

  return (
    <View style={styles.container}>
      <Image source={{ uri: recipe.image }} style={styles.image} />

      <ScrollView style={styles.body}>
        <View style={styles.header}>
          <MaterialIcons
            size={32}
            name="arrow-back"
            onPress={() => router.back()}
          />
          <Text style={styles.name}>{recipe.name}</Text>
          <Text style={styles.time}>{recipe.minutes} minutos de preparo</Text>
        </View>

        <Ingredients ingredients={ingredients} />

        <View style={styles.content}>
          <Text style={styles.preparation}>Modo de preparado</Text>
          <FlatList
            data={preparations}
            renderItem={({ item }) => (
              <Step step={item.step} description={item.description} />
            )}
            contentContainerStyle={{ gap: 16 }}
            scrollEnabled
            showsVerticalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </View>
  );
}
