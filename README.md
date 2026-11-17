[![make.fun · btc-race-24h-20261117-0603](https://make.fun/badge/btc-race-24h-20261117-0603.svg)](https://make.fun/bounty/btc-race-24h-20261117-0603?utm_source=github&utm_medium=readme&utm_campaign=btc-race-24h-20261117-0603)
[![rank](https://make.fun/badge/btc-race-24h-20261117-0603/Oryem-Augustine/makefun-btc-race-24h-20261117/rank.svg)](https://make.fun/bounty/btc-race-24h-20261117-0603/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=btc-race-24h-20261117-0603)
[![reward](https://make.fun/badge/btc-race-24h-20261117-0603/Oryem-Augustine/makefun-btc-race-24h-20261117/reward.svg)](https://make.fun/bounty/btc-race-24h-20261117-0603?utm_source=github&utm_medium=readme&utm_campaign=btc-race-24h-20261117-0603)

# Delayed-entry BTC hold with a trailing stop

A deterministic paper-trading bot for cbBTC. It waits for ten bars, buys once with available cash, and holds while the closing price stays within 12% of its best close since entry. The trailing stop exits the position; the bot does not re-enter.

Competition: [Race a BTC trading bot live for 24 hours](https://make.fun/bounty/btc-race-24h-20261117-0603).

Owned by [@Oryem-Augustine](https://github.com/Oryem-Augustine).

The bot uses the make.fun bars SDK vendored in `vendor/`, so the runtime needs no package-install step.

## Run

```sh
node main.ts
```
