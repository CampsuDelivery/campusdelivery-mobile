import { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { Link } from 'expo-router'
import { api } from '@/lib/api'
import { colors, spacing } from '@/theme'

type ApiState = 'loading' | 'online' | 'offline'

export default function Index() {
  const [status, setStatus] = useState<ApiState>('loading')

  useEffect(() => {
    api
      .get('/health')
      .then(() => setStatus('online'))
      .catch(() => setStatus('offline'))
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CampusDelivery</Text>

      {status === 'loading' && <ActivityIndicator color={colors.primary} />}
      {status === 'online' && <Text style={styles.online}>API conectada ✓</Text>}
      {status === 'offline' && (
        <Text style={styles.offline}>Não foi possível falar com a API</Text>
      )}

      <Link href="/login" style={styles.link}>
        Ir para login
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
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
  },
  online: { color: colors.primary },
  offline: { color: colors.danger },
  link: {
    marginTop: spacing.lg,
    color: colors.primary,
  },
})