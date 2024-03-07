import { theme } from '@/theme'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 32,
    paddingTop: 60,
    marginBottom: 12
  },
  title: {
    marginTop: 22,
    fontSize: theme.fonts.size.heading.md,
    fontFamily: theme.fonts.family.bold
  },
  recipes: {
    padding: 32
  },
  recipesContent: {
    gap: 16
  }
})
