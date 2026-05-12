# SuezAssessment

---

# Google Maps API Key Setup

This project uses Google Maps integration which requires a valid Google Maps API key.

## Request API Key Access

Before running the application locally, please request the `GOOGLE_API_KEY` by contacting: mohrizkisaa@gmail.com

---

# Environment Setup

After obtaining the API key, create a `.env` file in the project root directory (same level as `angular.json` and `tsconfig.json`).

Example structure:

```text
project-root/
├── .env
├── angular.json
├── tsconfig.json
```

---

# Environment Variable

Add the following variable inside the `.env` file:

```env
NG_APP_GOOGLE_API_KEY=[YOUR_GOOGLE_API_KEY]
```

Example:

```env
NG_APP_GOOGLE_API_KEY=AIza...
```

---

# Security Note

The `.env` file is intentionally excluded from version control to protect sensitive API credentials.

---

## Project Structure

```
libs/ (shared components)
└── shared/
    └── src/
        └── lib/
            ├── components/
            │   ├── air-density-widget/
            │   ├── avg-throttle-widget/
            │   ├── fuel-consumption-widget/
            │   ├── motorcycle-detail-info/
            │   ├── speed-widget/
            │   ├── tire-pressure-widget/
            │   └── weight-widget/
            ├── data/
            ├── layout/
            │   └── app-header/
            ├── models/
            └── services/

public/ (assets)
├── brand/
├── motorcycle-type/
└── person/

src/ (main components)
└── app/
    └── features/
        └── monitoring-dashboard/
            ├── models/
            └── services/

```
---

# Architecture & Design Decisions

## Clean Architecture Approach

## Component-Based Dashboard

Each telemetry widget is designed as an isolated reusable standalone Angular component.

Benefits:
- reusable UI
- isolated business logic
- easier testing
- cleaner maintenance

## Dashboard UX

The UI was designed to resemble a telemetry/command-center dashboard with:
- animated transitions
- visual status indicators
- dynamic color states
- quick information scanability

Anime.js was used to enhance user experience through subtle dashboard animations.

---

# Setup Instructions

## Install Dependencies

`npm install`

## Build Shared Components
First. Run `ng build shared` to build the shared components. 


## Run locally
`ng s` / `ng serve`

## Run Development 
http://localhost:4200 

---

# Deployment

The application is deployed using GitHub Pages.

Deployment URL:
https://mohrizkisaputra.github.io/rizki-suez-assessment/

Branch URL :
https://github.com/mohrizkisaputra/rizki-suez-assessment/tree/main

Potential future enhancements:

- Real-time websocket telemetry
- Historical sensor charts
- Authentication & authorization
- Sensor management module
- Dark/light theme switching
- Backend API integration
- Advanced alert notification system

---


# Author

Rizki Saputra