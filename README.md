# 🌐 DevOps Portfolio Website (React + TypeScript + AWS + CI/CD)

<p align="center">
  <img src="https://img.shields.io/badge/Frontend-React%20%7C%20TypeScript-blue?style=for-the-badge&logo=react" />
  <img src="https://img.shields.io/badge/Build-Vite-purple?style=for-the-badge&logo=vite" />
  <img src="https://img.shields.io/badge/Cloud-AWS%20S3%20%7C%20CloudFront-orange?style=for-the-badge&logo=amazonaws" />
  <img src="https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-black?style=for-the-badge&logo=githubactions" />
</p>

---

## 📌 Overview

This project is a **modern portfolio website** built using **React and TypeScript**, deployed on **AWS S3 and CloudFront**, and automated with a **CI/CD pipeline using GitHub Actions**.

It demonstrates real-world **frontend architecture + DevOps practices**, including component-based design, automated deployment, and global content delivery.

---

## 🌐 Live Demo

👉 https://d3qvrbjs8hjfhe.cloudfront.net/

---

## 🖼️ Showcase

![DevOps Portfolio Homepage](./images/homepage.png)

---

## 🏗️ Architecture

```
User → CloudFront (CDN) → AWS S3 (Static Hosting)
                      ↑
              GitHub Actions (CI/CD)
                      ↑
                  GitHub Repo
```

---

## ⚙️ Tech Stack

### 🔹 Frontend

* React.js
* TypeScript
* Vite

### 🔹 Architecture

* Component-based structure
* Reusable UI components
* Custom hooks

### 🔹 DevOps & Cloud

* AWS S3 (Static Hosting)
* AWS CloudFront (CDN)
* GitHub Actions (CI/CD)

### 🔹 Tools

* Git & GitHub
* VS Code

---

## 📂 Project Structure

```
portfolio_v2/
│── public/
│── src/
│    ├── components/
│    ├── hooks/
│    ├── pages/
│    ├── App.tsx
│    ├── main.tsx
│── images/
│── .github/workflows/
│── package.json
│── tsconfig.json
│── vite.config.ts
│── README.md
```

---

## 🔄 CI/CD Workflow

1. Code pushed to GitHub
2. GitHub Actions triggers automatically
3. Project is built using Vite
4. Build files deployed to AWS S3
5. CloudFront serves content globally

---

## 🚀 Features

* Modern UI with React + TypeScript
* Component-based scalable architecture
* Fast builds using Vite
* Global content delivery via CDN
* Automated CI/CD pipeline
* Responsive design

---

## 🌍 Production Challenges & Solutions

### SPA Routing Fix (CloudFront + React)

While deploying the React/Vite application on AWS S3 + CloudFront, direct route access and page refreshes resulted in 403/404 errors due to client-side routing.

Implemented CloudFront custom error responses to correctly serve `index.html` for unknown routes:

- 403 → `/index.html` → `200`
- 404 → `/index.html` → `200`

This ensured proper SPA routing support across browsers and devices.

---

## 🚀 Future Improvements

- Custom domain mapping with AWS Route53
- HTTPS certificate management via AWS Certificate Manager (ACM)
- Automated testing (e.g. Playwright or Cypress) integrated into the GitHub Actions pipeline
- Infrastructure as Code (IaC) using Terraform to provision the S3 and CloudFront resources
- Monitoring and access logging dashboard using AWS CloudWatch and SNS alerts
- Multi-environment staging pipeline (Dev/Prod branches)

---

## 📊 What This Project Demonstrates

✔ Modern frontend development (React + TypeScript)
✔ Real-world DevOps pipeline (CI/CD)
✔ Cloud deployment using AWS
✔ Scalable static architecture

---

## 🤝 Connect with Me

* LinkedIn: https://www.linkedin.com/in/utkarsh090205/
* GitHub: https://github.com/PandaVerse09

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub!
