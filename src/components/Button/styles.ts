import { theme } from "@/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  button: {
    height: 48,
    width: "100%",
    backgroundColor: theme.colors.green_600,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.borderRadius.sm
  },
  title: {
    color: theme.colors.white,
    fontFamily: theme.fonts.family.medium,
    fontSize: theme.fonts.size.body.sm
  }
})
