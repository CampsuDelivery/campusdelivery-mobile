# CampusDelivery Mobile

App Android do CampusDelivery - um marketplace de alimentos do campus
Stack: React Native · Expo (SDK 54) · Expo Router · TypeScript · pnpm

## Pré-requisitos
- Node.js 20+ · pnpm · Expo Go (celular) · Git

## Rodando pela primeira vez
1. Clone: `git clone https://github.com/CampsuDelivery/campusdelivery-mobile.git`
2. Instale: `pnpm install`
3. Copie o env: `cp .env.example .env`
4. Descubra o IP local do seu PC (`ipconfig`, procure o adaptador Wi-Fi ativo) e edite o `.env`:
  `EXPO_PUBLIC_API_URL=http://SEU_IP_LOCAL:3000/v1`
5. Suba a API local ([campusdelivery-api](https://github.com/CampsuDelivery/campusdelivery-api)) antes de testar — o app depende dela.
6. Rode: `pnpm start`
7. Escaneie o QR Code com o Expo Go, no **mesmo Wi-Fi** que o PC.

### Se o celular não conseguir conectar
Redes corporativas/institucionais às vezes bloqueiam conexão direta entre dispositivos (firewall/política de rede). Se o QR não carregar:
`pnpm start --tunnel`

Comandos úteis
1. `pnpm start` | Inicia o servidor de desenvolvimento
2. `pnpm start --tunnel` | Idem, via túnel (contorna bloqueios de rede local)
3. `pnpm lint` | Roda o lint
4. `pnpm tsc --noEmit` | Checa os tipos TypeScript
