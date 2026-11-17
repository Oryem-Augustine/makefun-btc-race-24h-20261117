# Delayed-entry BTC hold with a trailing stop

This bot trades only the bounty's paper cbBTC market. It waits for ten bars,
buys with available cash once, and holds while the closing price stays within
12% of its best close since entry. The trailing stop exits the position; the
bot does not re-enter after an exit.

The entry uses the make.fun bars SDK copied into `vendor/`, so the runtime has
no package-install step.

## Run

```sh
node main.ts
```
