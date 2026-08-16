import { View, Text, StyleSheet } from 'react-native'
import { colors, spacing } from '@/theme'

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.hint}>Tela inicial pós-login (placeholder)</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
    gap: spacing.md,
  },
  title: { fontSize: 24, fontWeight: '700', color: colors.text },
  hint: { color: colors.textSecondary },
})