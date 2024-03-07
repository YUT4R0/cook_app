import { Ingredient } from "@/components/Ingredient";
import { SelectionModal } from "@/components/SelectionModal";
import { services } from '@/services';
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import { styles } from './styles';

export default function index() {
  const [selected, setSelected] = useState<String[]>([])
  const [ingredients, setIngredients] = useState<IngredientResponse[]>([])

  useEffect(() => {
    services.ingredients
      .findAll()
      .then(setIngredients) 
  }, [])

  function handleToggleSelected(item: string) {
    if (selected.includes(item)) {
      return setSelected((state) => state.filter(el => el !== item))
    }
    setSelected((state) => [...state, item])
  }

  function handleClearSelected() {
    Alert.alert(
      'Limpar',
      `Você realmente deseja limpar os ${selected.length} items selecionados?`,
      [
        {text: 'Não', style: "cancel"},
        {text: 'Sim', onPress: () => setSelected([])}
      ]
    )
  }

  const handleSearch = () => router.navigate(`/recipes/${selected}`)
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Escolha {"\n"}
        <Text style={styles.subtitle}>os produtos</Text>
      </Text>
      <Text style={styles.message}>Descubra receitas baseadas nos produtos que você escolheu.</Text>

      <ScrollView 
        contentContainerStyle={styles.ingredients}
        showsVerticalScrollIndicator={false}
      >
        {
          ingredients.map(({ id, image, name }) => (
            <Ingredient
              key={id}
              name={name}
              image={`${services.storage.imagePath}/${image}`}
              selected={selected.includes(id)}
              onPress={() => handleToggleSelected(id)}
            />
          ))
        }
      </ScrollView>
      {selected.length > 0 && (
        <SelectionModal
          quantity={selected.length}
          onClear={handleClearSelected}
          onSearch={handleSearch}
        />
      )}
    </View>
  )
}