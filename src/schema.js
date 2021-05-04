const schema = {}

/**
 * SenSwap
 */

schema.POOL_STATE = {
  get Uninitialized() {
    return 0;
  },
  get Initialized() {
    return 1;
  },
  get Frozen() {
    return 2;
  }
}
schema.POOL_SCHEMA = [
  { key: 'owner', type: 'pub' },
  { key: 'state', type: 'u8' },
  { key: 'vault', type: 'pub' },
  { key: 'mint_lpt', type: 'pub' },

  { key: 'mint_s', type: 'pub' },
  { key: 'treasury_s', type: 'pub' },
  { key: 'reserve_s', type: 'u64' },

  { key: 'mint_a', type: 'pub' },
  { key: 'treasury_a', type: 'pub' },
  { key: 'reserve_a', type: 'u64' },

  { key: 'mint_b', type: 'pub' },
  { key: 'treasury_b', type: 'pub' },
  { key: 'reserve_b', type: 'u64' },
];

/**
 * SPL Token
 */

schema.MINT_SCHEMA = [
  { key: "mint_authority_option", type: "u32" },
  { key: "mint_authority", type: "pub" },
  { key: "supply", type: "u64" },
  { key: "decimals", type: "u8" },
  { key: "is_initialized", type: "bool" },
  { key: "freeze_authority_option", type: "u32" },
  { key: "freeze_authority", type: "pub" },
]

schema.ACCOUNT_STATE = {
  get Uninitialized() {
    return 0;
  },
  get Initialized() {
    return 1;
  },
  get Frozen() {
    return 2;
  }
}
schema.ACCOUNT_SCHEMA = [
  { key: "mint", type: "pub" },
  { key: "owner", type: "pub" },
  { key: "amount", type: "u64" },
  { key: "delegate_option", type: "u32" },
  { key: "delegate", type: "pub" },
  { key: "state", type: "u8" },
  { key: "is_native_option", type: "u32" },
  { key: "is_native", type: "u64" },
  { key: "delegated_amount", type: "u64" },
  { key: "close_authority_option", type: "u32" },
  { key: "close_authority", type: "pub" }
]

schema.MULTISIG_SCHEMA = [
  { key: "m", type: "u8" },
  { key: "n", type: "u8" },
  { key: "is_initialized", type: "bool" },
  { key: "signers", type: "[pub;11]" }
]

module.exports = schema;