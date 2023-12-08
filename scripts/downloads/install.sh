#!/bin/bash

echo "Downloading NVM"
bash ./scripts/downloads/install_nvm.sh

# Read Node.js version from .nvmrc file
NODE_VERSION=$(<.nvmrc)

# Install the required Node.js version using NVM
echo "Installing Node.js version $NODE_VERSION..."
nvm install $NODE_VERSION

# Use the installed Node.js version
nvm use $NODE_VERSION

# Install Docker (Assuming Ubuntu-based system)
echo "Installing Docker..."
sudo apt-get update
sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt-get update
sudo apt-get install -y docker-ce docker-ce-cli containerd.io

# Add user to the docker group
sudo usermod -aG docker $USER

sudo systemctl restart docker


# Final message
echo "Setup complete."
