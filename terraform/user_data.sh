#!/bin/bash
set -e

# Update packages
apt-get update -y
apt-get upgrade -y

# Install Docker, Git, Nginx, Certbot
apt-get install -y \
    ca-certificates \
    curl \
    gnupg \
    lsb-release \
    git \
    nginx \
    certbot \
    python3-certbot-nginx

# Add Docker GPG key & repository
mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg

echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null

apt-get update -y
apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin

# Enable and start Docker
systemctl enable docker
systemctl start docker
usermod -aG docker ubuntu

# Setup application directory
mkdir -p /var/www/portfolio
chown -R ubuntu:ubuntu /var/www/portfolio

echo "EC2 Initial Setup Completed Successfully." > /var/log/user-data-setup.log
