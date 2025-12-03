// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/// @title RANNTA ERC20 Mirror on Polygon
/// @notice Mirrored supply controlled only by the TON bridge.
contract RANNTA is ERC20, Ownable {
    address public bridge;

    event BridgeUpdated(address indexed oldBridge, address indexed newBridge);
    event BridgeMint(address indexed to, uint256 amount);
    event BridgeBurn(address indexed from, uint256 amount);

    error BridgeZeroAddress();
    error NotBridge();

    modifier onlyBridge() {
        if (msg.sender != bridge) revert NotBridge();
        _;
    }

    constructor(address initialOwner)
        ERC20("RANNTA COIN", "RANNTA")
        Ownable(initialOwner)
    {}

    /// @notice Override decimals to match TON Jetton (9)
    function decimals() public pure override returns (uint8) {
        return 9;
    }

    function setBridge(address newBridge) external onlyOwner {
        if (newBridge == address(0)) revert BridgeZeroAddress();
        address old = bridge;
        bridge = newBridge;
        emit BridgeUpdated(old, newBridge);
    }

    function bridgeMint(address to, uint256 amount) external onlyBridge {
        _mint(to, amount);
        emit BridgeMint(to, amount);
    }

    function bridgeBurn(address from, uint256 amount) external onlyBridge {
        _burn(from, amount);
        emit BridgeBurn(from, amount);
    }
}
