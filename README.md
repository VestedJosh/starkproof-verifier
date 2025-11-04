# starkProof AAVE Proof Verifier

A browser-based verifier for starkProof (RISC Zero) ZK-STARK proofs of AAVE lending protocol data, with integrated Chainlink Functions for on-chain verification.

## Features

- **Browser-based WASM Verification**: Verify ZK-STARK proofs directly in your browser using WebAssembly
- **Chainlink Functions Integration**: Submit proofs for on-chain verification on Arbitrum
- **MetaMask Integration**: Seamless wallet connection with automatic network switching
- **AAVE Data Validation**: Verify cryptographic proofs of AAVE supply and borrow rates

## Live Demo

[Deploy to Vercel](https://vercel.com/new/clone?repository-url=https://github.com/VestedJosh/starkproof-verifier)

## Quick Start

### Deploy to Vercel

1. Click the "Deploy to Vercel" button above, or:
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "Add New" → "Project"
4. Import this repository: `VestedJosh/starkproof-verifier`
5. Click "Deploy"

That's it! Your verifier will be live at `https://your-project.vercel.app`

### Local Development

```bash
# Clone the repository
git clone https://github.com/VestedJosh/starkproof-verifier.git
cd starkproof-verifier

# Serve locally (requires a simple HTTP server)
python -m http.server 8080
# or
npx serve

# Open in browser
open http://localhost:8080
```

## How It Works

### WASM Verification

The verifier uses Rust-compiled WebAssembly to verify ZK-STARK proofs directly in the browser:

1. User provides a proof receipt (hex string) and program ID
2. WASM module validates the cryptographic proof
3. Verified statistics are displayed (AAVE supply/borrow rates)

### Chainlink Functions Integration

For on-chain verification on Arbitrum:

1. Connect MetaMask wallet
2. Automatically switch to Arbitrum network
3. Click "Verify with Chainlink Functions"
4. Contract calls Chainlink DON to verify proof off-chain
5. Result is stored on-chain and can be queried

### Smart Contract

- **Network**: Arbitrum One
- **Contract Address**: `0xcAAD1DE0D7bfDc07F4D526d864250e82751723a8`
- **Function**: `getRate()` - Triggers Chainlink Functions request

## Project Structure

```
starkproof-verifier/
├── index.html              # Main verifier interface
├── pkg/                    # WASM files
│   ├── risc0_wasm_verifier.js
│   ├── risc0_wasm_verifier_bg.wasm
│   ├── risc0_wasm_verifier.d.ts
│   └── risc0_wasm_verifier_bg.wasm.d.ts
├── .gitignore
└── README.md
```

## Technology Stack

- **Frontend**: Pure HTML/CSS/JavaScript
- **WASM**: Rust + wasm-bindgen
- **Blockchain**: Arbitrum One
- **Oracle Network**: Chainlink Functions
- **Deployment**: Vercel

## Configuration

### MetaMask Network Details

The verifier automatically configures Arbitrum One:

- **Network Name**: Arbitrum One
- **RPC URL**: https://arb1.arbitrum.io/rpc
- **Chain ID**: 42161
- **Symbol**: ETH
- **Block Explorer**: https://arbiscan.io

### Chainlink Functions

- **Subscription ID**: 72
- **Gas Limit**: 250,000-300,000
- **Router**: Arbitrum Functions Router

## API Integration

The on-chain verification uses this API:

- **Endpoint**: `https://api.nyccode.org/api/getproof`
- **Authentication**: API key (stored as encrypted DON secret)

Response format:
```json
{
  "success": true,
  "data": {
    "receipt": "0x...",
    "program_id": "...",
    "verified_statistics": {
      "total_supply_rate_sum": "...",
      "total_borrow_rate_sum": "...",
      "days_collected": 2
    }
  }
}
```

## Vercel Configuration

No special configuration needed! Vercel automatically:

- Serves `index.html` as the main page
- Properly serves WASM files with correct MIME types
- Enables HTTPS by default

### Optional: vercel.json

For custom configuration, create `vercel.json`:

```json
{
  "headers": [
    {
      "source": "/pkg/(.*)",
      "headers": [
        {
          "key": "Content-Type",
          "value": "application/wasm"
        }
      ]
    }
  ]
}
```

## Development

To rebuild the WASM module (requires Rust):

```bash
# Install wasm-pack
curl https://rustwasm.github.io/wasm-pack/installer/init.sh -sSf | sh

# Build WASM
wasm-pack build --target web --out-dir pkg

# Files will be generated in pkg/
```

## Testing

### Test Data

Example proof receipt and program ID are included in the interface for testing.

### Browser Console

Check browser console for detailed verification logs:

```javascript
// WASM verification result
window.wasmVerifyProof(receipt, programId)

// Chainlink transaction details
// Transaction hash and Arbiscan links displayed after submission
```

## Troubleshooting

### WASM Not Loading

- Ensure you're using a modern browser (Chrome, Firefox, Edge)
- Check browser console for CORS errors
- Verify WASM files are served with correct MIME type

### MetaMask Connection Issues

- Ensure MetaMask extension is installed
- Try refreshing the page
- Check that you're not blocking pop-ups

### Chainlink Transaction Failing

- Ensure you have ETH on Arbitrum for gas
- Check that contract subscription has LINK balance
- Verify your wallet is connected to Arbitrum

## Support

For issues or questions:

- GitHub Issues: [Create an issue](https://github.com/VestedJosh/starkproof-verifier/issues)
- Contract: 0xcAAD1DE0D7bfDc07F4D526d864250e82751723a8 on Arbitrum

## License

MIT License - feel free to use and modify!

## Acknowledgments

- Built with [RISC Zero](https://www.risczero.com/) zkVM
- Powered by [Chainlink Functions](https://chain.link/functions)
- Deployed on [Vercel](https://vercel.com)
