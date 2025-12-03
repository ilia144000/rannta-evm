import { ethers } from "hardhat";
import * as fs from "fs";
import * as path from "path";

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("-------------------------------------------------");
  console.log("Deploying RANNTA COIN (ERC20 Mirror)...");
  console.log("Deployer address:", deployer.address);

  // In ethers v6 we use ethers.provider (or deployer.provider) to get balance
  const balance = await ethers.provider.getBalance(deployer.address);
  console.log("Deployer balance (wei):", balance.toString());
  console.log("Deployer balance (MATIC):", ethers.formatEther(balance));

  const RANNTA = await ethers.getContractFactory("RANNTA");

  // In ethers v6, deploy returns a Contract with waitForDeployment()
  const contract = await RANNTA.deploy(deployer.address);

  console.log("Waiting for deployment tx to be mined...");
  await contract.waitForDeployment();

  // In ethers v6 there is no contract.address directly, use getAddress()
  const contractAddress = await contract.getAddress();

  console.log("-------------------------------------------------");
  console.log("RANNTA deployed successfully!");
  console.log("Contract address:", contractAddress);
  console.log("-------------------------------------------------");

  const deploymentsDir = path.join(process.cwd(), "deployments");
  if (!fs.existsSync(deploymentsDir)) {
    fs.mkdirSync(deploymentsDir);
  }

  const network = await ethers.provider.getNetwork();
  const networkName = network.name || "unknown";

  const deploymentData = {
    network: networkName,
    chainId: Number(network.chainId),
    address: contractAddress,
    deployer: deployer.address,
    timestamp: new Date().toISOString(),
  };

  const outputPath = path.join(deploymentsDir, `rannta-${networkName}.json`);
  fs.writeFileSync(outputPath, JSON.stringify(deploymentData, null, 2), {
    encoding: "utf-8",
  });

  console.log("Deployment info saved to:", outputPath);
  console.log("-------------------------------------------------");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
