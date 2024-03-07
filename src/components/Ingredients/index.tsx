import { services } from "@/services";
import { ScrollView } from "react-native";
import { Ingredient, IngredientProps } from "../Ingredient";
import { styles } from "./styles";

type Props = {
  ingredients: IngredientProps[]
}

export function Ingredients({ ingredients }: Props) {
  return (
    <ScrollView
      horizontal
      style={styles.container}
      contentContainerStyle={styles.ingredientsContent}
      showsHorizontalScrollIndicator={false}
    >
      {
        ingredients.map(({ name, image }) => (
          <Ingredient
            key={name}
            name={name}
            image={`${services.storage.imagePath}/${image}`}
          />
        ))
      }
    </ScrollView>
  );
}
