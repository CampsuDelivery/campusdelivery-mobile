import { View, Text, StyleSheet } from 'react-native'
import { Link } from 'expo-router'
import { colors, spacing } from '@/theme'

export default function Login() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <Text style={styles.hint}>Tela de autenticação (placeholder)</Text>
      <Link href="/home" style={styles.link}>
        Entrar
      </Link>
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
  link: { marginTop: spacing.lg, color: colors.primary },
})