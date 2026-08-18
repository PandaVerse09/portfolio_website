# 🌐 DevOps Portfolio Website (React + TypeScript + AWS EC2 + Docker Hub + Terraform + CI/CD)

<p align="center">
  <img src="https://img.shields.io/badge/Frontend-React%20%7C%20TypeScript-blue?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/Build-Vite-purple?style=for-the-badge&logo=vite" />
  <img src="https://img.shields.io/badge/Cloud-AWS%20EC2-orange?style=for-the-badge&logo=amazonaws" />
  <img src="https://img.shields.io/badge/Containers-Docker%20Hub%20%7C%20Nginx-blue?style=for-the-badge&logo=docker" />
  <img src="https://img.shields.io/badge/IaC-Terraform-violet?style=for-the-badge&logo=terraform" />
  <img src="https://img.shields.io/badge/Security-Certbot%20SSL-green?style=for-the-badge&logo=letsencrypt" />
  <img src="https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-black?style=for-the-badge&logo=githubactions" />
</p>

---

## 📌 Overview

This project is a **modern DevOps portfolio website** built using **React and TypeScript**, containerized with **Docker & Nginx**, published to **Docker Hub**, provisioned on an **AWS EC2 instance (Amazon Linux 2023)** using **Terraform**, secured with **Certbot SSL/TLS**, and fully automated with a **GitHub Actions CI/CD pipeline**.

It demonstrates real-world **Cloud Infrastructure Engineering + Container Registry Workflows**: code pushed to `main` triggers GitHub Actions to build the container image, publish it to **Docker Hub (`pandaverze/portfolio-v2:latest`)**, and SSH into EC2 to pull the updated image and restart the web server with zero downtime.

---

## 🌐 Live Demo

👉 **https://utkarsh-portfolio.duckdns.org**

---

## 🖼️ Showcase

![DevOps Portfolio Homepage](./images/homepage.png)

---

## 🏗️ Architecture

```
User Browser (HTTPS / Port 443)
    │
    ▼
Custom DNS (utkarsh-portfolio.duckdns.org) ➔ Elastic IP (13.200.118.170)
    │
    ▼
AWS EC2 Instance (Amazon Linux 2023)
    │ 
    └── Pulls & Runs `pandaverze/portfolio-v2:latest` Container
            ▲
            │ (Docker Pull & Redeploy via SSH)
    GitHub Actions CI/CD Pipeline
            │
            ├── 1. Builds React Vite App
            ├── 2. Pushes Docker Image ➔ Docker Hub (pandaverze/portfolio-v2)
            └── 3. Triggers EC2 to pull latest image and restart
```

---

## ⚙️ Tech Stack

### 🔹 Frontend & UI
* **React 18** with **TypeScript**
* **Vite** (Next-generation frontend toolchain)
* **Lucide Icons** & **Tailwind CSS**

### 🔹 Infrastructure & DevOps
* **AWS EC2** (Amazon Linux 2023, Elastic IP, Security Groups)
* **Docker Hub Registry** (`pandaverze/portfolio-v2`)
* **Docker Engine & Nginx** (Containerized SPA web server)
* **Terraform** (Infrastructure as Code for provisioning AWS resources)
* **Certbot / Let's Encrypt** (Automated free SSL/TLS certificates)
* **GitHub Actions** (Automated build, Docker Hub push & EC2 pull pipeline)

---

## 📂 Project Structure

```
portfolio_v2/
│── .github/
│    └── workflows/
│         └── deploy.yml      # CI/CD Pipeline (Docker Hub Push & EC2 Pull)
│── terraform/
│    ├── main.tf              # EC2, Security Group & Elastic IP
│    ├── provider.tf          # AWS Provider Config
│    ├── variables.tf         # Configurable Variables
│    ├── outputs.tf           # Terraform Outputs (Public IP, SSH)
│    └── user_data.sh         # EC2 Bootstrap Script
│── Dockerfile                # Multi-stage Docker Build (Node 20 -> Nginx)
│── nginx.conf                # Nginx Config (SPA fallback, Gzip, SSL)
│── docker-compose.yml        # Docker Compose Orchestration
│── public/
│── src/
│    ├── components/
│    ├── hooks/
│    ├── pages/
│    ├── App.tsx
│    └── main.tsx
│── package.json
│── vite.config.ts
└── README.md
```

---

## 🔄 CI/CD Workflow (Docker Hub Pipeline)

1. Code pushed to the `main` branch triggers **GitHub Actions**.
2. Vite builds static production files (`npm run build`).
3. GitHub Actions builds the Docker image and pushes it to **Docker Hub**: `pandaverze/portfolio-v2:latest`.
4. GitHub Actions connects to EC2 via **SSH** and runs:
   ```bash
   sudo docker pull pandaverze/portfolio-v2:latest
   sudo docker stop portfolio-v2 || true
   sudo docker rm portfolio-v2 || true
   sudo docker run -d -p 80:80 -p 443:443 -v /etc/letsencrypt:/etc/letsencrypt:ro --name portfolio-v2 --restart always pandaverze/portfolio-v2:latest
   ```

---

## 🛠️ Infrastructure Setup with Terraform

To provision or reproduce the cloud infrastructure:

```bash
cd terraform
terraform init
terraform plan
terraform apply
```

---

## 🔐 Secrets Required in GitHub Repository

| Secret Name | Value |
| :--- | :--- |
| `DOCKERHUB_USERNAME` | `pandaverze` |
| `DOCKERHUB_TOKEN` | Docker Hub Personal Access Token |
| `EC2_HOST` | `13.200.118.170` |
| `EC2_SSH_KEY` | Contents of `portfolio_v2_key_pair.pem` |

---

## 📊 Key Highlights & DevOps Skills Demonstrated

✔ **Container Registry Integration** with Docker Hub (`pandaverze/portfolio-v2`)  
✔ **Infrastructure as Code (IaC)** with Terraform  
✔ **Cloud Compute** with AWS EC2 & Elastic IPs  
✔ **Web Security** with Let's Encrypt SSL/TLS & Security Groups  
✔ **CI/CD Automation** with GitHub Actions, Docker Buildx, and SSH  
✔ **SPA Routing & Performance Optimization** with Gzip & Cache Control  

---

## 🤝 Connect with Me

* **Portfolio**: [utkarsh-portfolio.duckdns.org](https://utkarsh-portfolio.duckdns.org)
* **LinkedIn**: [linkedin.com/in/utkarsh090205](https://www.linkedin.com/in/utkarsh090205/)
* **GitHub**: [github.com/PandaVerse09](https://github.com/PandaVerse09)

---

⭐ **Star this repository if you found it helpful!**
