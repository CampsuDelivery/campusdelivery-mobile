# Contribuindo com o CampusDelivery Mobile

## Branches
Formato: `<tipo>/<descricao-curta-com-hifen>`

Tipos: `feat` `fix` `chore` `ci` `docs` `test` `refactor`

Exemplos:
- `feat/menu-screen`
- `fix/api-client-timeout`
- `ci/github-actions`

## Commits
Formato ([Conventional Commits](https://www.conventionalcommits.org/)): `<tipo>(<escopo opcional>): <descrição>`

Exemplos:
- `feat(app): add cardapio screen`
- `fix(lib): fix axios baseURL`
- `ci: add GitHub Actions workflow`

## Abrindo um PR
1. Crie a branch a partir de uma `main` atualizada (`git pull origin main` antes de começar).
2. Dê push na sua branch e abra o PR contra `main`.
3. Preencha o `.github/pull_request_template.md`.
4. O CI (`lint` + `typecheck`) roda automaticamente em todo PR — o merge só é liberado com ele verde.
5. Peça review depois que o CI passar.

## Estrutura de uma tela modelo
Toda rota vive em `src/app/` (1 arquivo = 1 rota, via Expo Router). Use este formato como base:

```tsx
import { View, Text, StyleSheet } from 'react-native'
import { colors, spacing } from '@/theme'

export default function NomeDaTela() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Título</Text>
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
})
```

Regras da tela modelo:
- Cores e espaçamentos sempre de `@/theme` (`colors`, `spacing`) — nunca hardcoded.
- Chamadas à API sempre via `@/lib/api` (instância axios já configurada) — nunca `fetch` direto.
- Veja `src/app/index.tsx` para um exemplo completo, incluindo chamada à API.

## Checklist antes de pedir review
- [ ] Rodei `pnpm lint` e `npx tsc --noEmit` sem erro
- [ ] Testei no Expo Go (ou emulador) o que o PR faz
- [ ] Segui a estrutura de tela acima (`@/theme` + `@/lib/api`)
- [ ] Não commitei `.env`, senha ou credencial
- [ ] Nomeei branch e commits conforme este documento
- [ ] CI está verde no PR
