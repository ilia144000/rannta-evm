📝 RANNTA TON ↔ Polygon Backing & Mirror Proof — Version 1
Official Multi-Chain Transparency Document

December 2025

🧩 1. Purpose

This document provides full transparency for the 1:1 backing between:

RANNTA Jetton (TON Network)

RANNTA ERC-20 Mirror (Polygon Mainnet)

This is a mirror deployment, not a live bridge.
The official cross-chain bridge (Vault + Relayer + Controller v2) is currently under development and will be activated only after security testing and audits.

🟦 2. TON Backing Wallet (Official Reserve)

The following TON address holds the official reserve backing the Polygon ERC-20 supply:

TON Backing Wallet:
UQAcgPITv1l-T17kVLrcNNOxjKgXvMYrWzytRsgNYn7CSXF

Backed Amount:
13,000,000 RANNTA

Jetton Master (TON):
EQBCY5Yj9G6VAQibTe6hz53j8vBNO234n0fzHUP3lUBBYbeR

These tokens were intentionally separated from the master wallet and serve as the official mirror backing for the Polygon deployment.

🟩 3. Polygon Mirror Token (ERC-20)

The ERC-20 version of the RANNTA token is deployed on Polygon Mainnet at:

RANNTA ERC-20 Contract:
0x899C6846F918d2Ff97b99366D7F8C2226BDE02d7

Initial Mint:
13,000,000 RANNTA (ERC-20)
Exactly matching the reserve held on TON.

Owner / Deployer:
0x11b7f746ebc012054d8406618c579578c6071a89

This represents a 1:1 mirror of the TON-backed supply.

🟥 4. Bridge Status (Critical Notice)

The TON ↔ Polygon bridge is NOT active yet.

Current status:

No on-chain automatic lock or mint

No transfer of assets through a bridge

No user bridge interface

No live Relayer or Vault contract

The 13M ERC-20 tokens were minted as part of a controlled manual mirror process, not via a bridge mechanism.

Until the official bridge is deployed and audited, no user should attempt cross-chain transfers.

🛡 5. Security & Transparency Commitment

For maximum clarity:

The ERC-20 supply is fully backed 1:1 by TON reserves

The backing wallet is publicly verifiable

Tokens will not be moved from the reserve wallet

No circulating tokens exist beyond the reflected 13M mirror

The bridge will not be opened until all audits and test simulations pass

This document ensures transparent accountability for the multi-chain state of RANNTA.

🧭 6. Roadmap
Phase 1 — Mirror Deployment (Completed)

ERC-20 Deployment

Manual 1:1 Backing

Publication of Proof Document

Phase 2 — Metadata Integration (In Progress)

TrustWallet Assets submission

DexScreener auto-listing after LP creation

CoinGecko & CoinMarketCap listing requests

Phase 3 — Full Bridge Infrastructure (Upcoming)

TON Vault (TIP-74 Jetton Lock Contract)

Relayer Node (TON Event Listener → Polygon Mint Executor)

BridgeController v2 (Polygon)

Testnet simulations

Mainnet activation

🟪 7. Final Statement

The RANNTA ERC-20 token on Polygon is valid only because it is fully backed by verifiable reserves on TON.

This document certifies:

🔥 13,000,000 RANNTA (TON) → 13,000,000 RANNTA (Polygon)
🔥 Perfect 1:1 backing
🔥 No circulating tokens beyond the mirrored amount

The RANNTA multi-chain architecture is being developed with maximum transparency and security.

🖋 Signed

RANNTA Protocol — Multi-Chain Architecture Unit
December 2025
