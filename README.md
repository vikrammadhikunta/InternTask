# LakeRider - Boating Experience Platform

## 📋 Project Overview
LakeRider is a React-based web application for booking premium boat rides across Andhra Pradesh and Telangana. The platform features a modern booking system with traveler management, package selection, and integrated safety technology through partnership with Alert24.

**HLD Design & Page Layout:** For detailed High-Level Design diagrams and page layouts, view the [Figma design board](https://www.figma.com/board/Y3HADvatVgCsJVJAFTOlgi/Alert.24?node-id=2-731&t=J4hzb1VxP4UqD6g5-1).

## 🚀 Quick Start
```bash
git clone https://github.com/vikrammadhikunta/InternTask.git

cd InternTask

npm install # Or  npm i
```


## Dependencies
```bash
npm install react react-dom react-router-dom react-hot-toast remixicon
npm install -D tailwindcss @tailwindcss/cli
```

## 📁 Project Structure
```bash
src/
├── components/
│   ├── BoatRideCard.jsx    
│   ├── BookingModal.jsx   
│   └── Header.jsx          
├── pages/
│   ├── HomePage.jsx       
│   ├── AboutPage.jsx       
│   └── ContactPage.jsx     
├── App.jsx                 
├── main.jsx                
└── index.css              
```

## ✨ Features

### 🎯 Booking System
- **Multi-step modal**: Date selection → Payment summary
- **Traveler management**: Add/edit up to 10 travelers
- **Real-time validation**: Phone (10 digits), names (100 chars max)
- **Package options**: Recommended (with life jacket) or Budget Saver

### 💰 Pricing & Discounts
- **Ticket Price**: ₹900-₹1100 per person
- **Life Jacket**: ₹100/person (Recommended package only)
- **GST**: 18% on ticket price
- **Discounts**:
  - `NEW10`: ₹100 off (min 2 travelers)
  - `NEW20`: ₹200 off (min 5 travelers)

### 🎨 UI/UX
- Responsive design (mobile-first)
- Toast notifications
- Clean, intuitive booking flow
- Safety-first messaging

## ⚡ Tech Stack
- **Frontend**: React 18+, Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Remixicons
- **Notifications**: React Hot Toast

## 🛠️ Key Components

### `BookingModal.jsx` (Core Booking Logic)
- 2-step booking flow
- Traveler CRUD operations
- Promo code validation
- Real-time price calculation

### `BoatRideCard.jsx`
- Ride display cards
- Image + details + pricing
- "Book Now" trigger

## 📱 Responsive Design
- Mobile-friendly navigation
- Adaptive grid layouts
- Touch-friendly buttons
- Modal optimization for all screens

## 🔒 Validation Rules
- **Phone**: 10 digits, numbers only
- **Names**: Max 100 characters
- **Date**: Future dates only
- **Travelers**: Min 1 required

## 🚀 Running the App
1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Open: `http://localhost:5173`


