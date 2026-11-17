import { runBars, type BuyInput, type SellInput } from './vendor/makefun-bars.ts';

const TRAIL_STOP_BPS = 1_200;
const MAX_SLIPPAGE_BPS = 10_000;
const ENTRY_AFTER_BATCH = 10;

let entered = false;
let peakClose: bigint | null = null;

await runBars({
  onBatch(state, batch) {
    if (state.warmingUp) return [];

    const symbol = state.hello.symbols[0]?.symbol;
    if (symbol === undefined) return [];
    const close = state.close(symbol);
    if (close === null) return [];

    const held = state.positions.get(symbol);
    if (held === undefined) {
      if (entered || batch.seq < ENTRY_AFTER_BATCH || state.cash < BigInt(state.hello.fees.min_notional_quote_units)) return [];
      entered = true;
      const buy: BuyInput = {
        side: 'buy',
        symbol,
        notional_quote_units: state.cash,
        max_slippage_bps: MAX_SLIPPAGE_BPS,
      };
      return [buy];
    }

    if (peakClose === null || close > peakClose) peakClose = close;
    if (close * 10_000n <= peakClose * BigInt(10_000 - TRAIL_STOP_BPS)) {
      const sell: SellInput = {
        side: 'sell',
        symbol,
        qty: held.qty,
        max_slippage_bps: MAX_SLIPPAGE_BPS,
      };
      return [sell];
    }

    return [];
  },
});
