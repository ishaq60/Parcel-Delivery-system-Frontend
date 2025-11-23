# Parcel Delivery System - Frontend

A modern, responsive React-based frontend for a comprehensive parcel delivery management system. Built with TypeScript, Tailwind CSS, and Redux Toolkit for state management.

## 🚀 Features

### User Authentication
- **Login/Signup**: Secure user authentication with JWT tokens
- **Role-Based Access**: Support for Admin, Sender, and Receiver roles
- **Protected Routes**: Automatic route protection based on authentication status
- **Token Persistence**: Secure token storage with localStorage fallback

### Dashboard System
- **Admin Dashboard**: View all parcels, manage status, block/unblock, and monitor delivery
- **Sender Dashboard**: Track sent parcels, cancel orders, view details
- **Receiver Dashboard**: View incoming parcels, confirm delivery, track status
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop

### Parcel Management
- **Create Parcel**: Send parcels with detailed information and automatic fee calculation
- **Track Parcels**: Real-time tracking with status updates (Requested → Approved → Dispatched → In Transit → Delivered)
- **Filter & Search**: Advanced filtering by status, sender, receiver, and dates
- **Pagination**: Efficient data loading with configurable items per page

### Navigation
- **NavLink Active States**: Automatic highlighting of current route with visual feedback
- **User Profile**: Display user avatar and email in navbar when authenticated
- **Logout**: Quick logout functionality from navbar

### Blog System
- **Blog Page**: Display blog posts with images, author, and publication date
- **Card Layout**: Beautiful card-based design with hover effects

## 📋 Tech Stack

### Frontend Framework
- **React** 19.1.1
- **React Router** v7.9.5 (not react-router-dom)
- **TypeScript** 5.7.3

### State Management
- **Redux Toolkit** 2.9.2
- **RTK Query** - Built-in data fetching and caching

### Form & Validation
- **React Hook Form** 7.65.0
- **Zod** 4.1.12 - TypeScript-first schema validation

### Styling & UI
- **Tailwind CSS** 4.1.16 - Utility-first CSS
- **Lucide React** - Beautiful icon library
- **Sonner** - Toast notifications

### Build & Development
- **Vite** - Fast build tool
- **ESLint** - Code quality
- **TypeScript** - Static type checking

## 🛠️ Installation

### Prerequisites
- Node.js 16+ and npm 7+
- Backend API running at `http://localhost:5000/api/v1` (or your configured URL)

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/ishaq60/Parcel-Delivery-system-Frontend.git
cd parcel-delivery-frontend

# 2. Install dependencies
npm install

# 3. Create .env file
echo "VITE_BASE_URL=http://localhost:5000/api/v1" > .env

# 4. Start development server
npm run dev

# 5. Open in browser
# http://localhost:5173
```

## 📦 Environment Variables

Create a `.env` file in the root directory:

```env
# Local Development
VITE_BASE_URL=http://localhost:5000/api/v1

# Production/Vercel Deployment
# VITE_BASE_URL=https://parcel-delivery-system-drab.vercel.app/api/v1
```

## 🏗️ Project Structure

```
src/
├── components/              # Reusable UI components
│   ├── dashboard/          # Dashboard-specific components
│   │   ├── ParcelTable.tsx
│   │   └── StatCard.tsx
│   ├── AboutUs.tsx
│   ├── ContactUs.tsx
│   ├── FastDelivery.tsx
│   ├── Hero.tsx
│   ├── Proccess.tsx
│   ├── Testimonal.tsx
│   └── ui/
│       └── button.tsx
├── layout/                 # Layout components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Login.tsx
│   ├── Register.tsx
│   └── CommonLayout.tsx
├── pages/                  # Page components
│   ├── Dashboard.tsx       # Main dashboard router
│   ├── Dashboard/
│   │   ├── AdminDashboard.tsx
│   │   ├── SenderDashboard.tsx
│   │   └── ReceiverDashboard.tsx
│   ├── About.tsx
│   ├── Blog.tsx
│   ├── SendParcel.tsx
│   └── Home.tsx
├── redux/                  # Redux state management
│   ├── store.ts
│   ├── baseApi.ts
│   └── Features/
│       ├── auth/
│       │   ├── authSlice.ts
│       │   └── auth.api.ts
│       └── parcel/
│           └── parcel.api.ts
├── routes/                 # Route configuration
│   └── index.tsx
├── types/                  # TypeScript types
│   └── parcel.types.ts
├── lib/                    # Utility functions
│   └── utils.ts
├── App.tsx                 # Main app component
├── main.tsx                # Entry point
└── index.css               # Global styles
```

## 🔑 Key Features Explained

### Authentication Flow
1. User signs up/logs in
2. Backend returns JWT token and user data
3. Token stored in Redux state and localStorage
4. User data includes: id, email, name, role
5. Protected routes check Redux auth state
6. On page reload, token restored from localStorage

### API Integration (RTK Query)
```typescript
// Endpoints available:
- createParcel(data)           # Create new parcel
- getAllParcels()              # Admin: View all
- getMyParcels()               # Sender: View sent
- getIncomingParcels()         # Receiver: View incoming
- getParcelById(id)            # View single parcel
- getParcelByTrackingId()      # Track by ID
- updateParcel(id, data)       # Admin: Update
- cancelParcel(id)             # Sender: Cancel own
- confirmDelivery(id)          # Receiver: Confirm
- updateParcelStatus(id)       # Admin: Update status
- toggleBlockParcel(id)        # Admin: Block/unblock
```

### Parcel Status Flow
```
requested → approved → dispatched → in_transit → delivered
           (optional cancellation at any stage)
```

### Color Scheme
- **Primary Orange**: `#F5A623`
- **Secondary Dark**: `#2c2c2c`
- **Neutral Grays**: Used for backgrounds and text

## 🚢 Deployment

### Vercel Deployment
1. Connect your GitHub repository to Vercel
2. Set environment variable in Vercel dashboard:
   ```
   VITE_BASE_URL=https://your-backend-url/api/v1
   ```
3. Deploy automatically on push to main branch

### Building for Production
```bash
npm run build
npm run preview
```

## 🧪 Test Credentials

Use these demo accounts to test different user roles and dashboard functionality:

### Admin Account
```
Email:    admin@example.com
Password: admin123
Role:     ADMIN
Access:   Full system control, view all parcels, manage all operations
```

### Sender Account
```
Email:    sender@example.com
Password: sender123
Role:     SENDER
Access:   Send parcels, track own shipments, cancel orders
```

### Receiver Account
```
Email:    receiver@example.com
Password: receiver123
Role:     RECEIVER
Access:   View incoming parcels, confirm delivery, track packages
```

**Note**: These are demo credentials for testing. In production, users must sign up or register with valid credentials.

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start dev server

# Build
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # TypeScript type checking
```

## 🔐 Security Features

- **JWT Authentication**: Secure token-based auth
- **Protected Routes**: Route-level access control
- **Role-Based Access**: Different views for different roles
- **Type Safety**: TypeScript prevents runtime errors
- **Input Validation**: Zod schema validation on forms

## 📱 Responsive Design

- **Mobile**: Single column, optimized touch targets
- **Tablet**: 2-column layouts for better space usage
- **Desktop**: Full-featured multi-column layouts with 4-column grids

Breakpoints:
- `sm`: 640px
- `md`: 768px (tablet)
- `lg`: 1024px
- `xl`: 1280px

## 🤝 Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit changes (`git commit -m 'Add amazing feature'`)
3. Push to branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## 📄 API Documentation

For backend API documentation, refer to the [Backend Repository](https://github.com/ishaq60/parcel-delivery-backend)

### Base URL
- **Local**: `http://localhost:5000/api/v1`
- **Production**: `https://parcel-delivery-system-drab.vercel.app/api/v1`

### Authentication Header
All protected endpoints require:
```
Authorization: Bearer {token}
```

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear node modules and reinstall
rm -r node_modules package-lock.json
npm install
npm run build
```

### Environment Variables Not Loading
- Ensure `.env` file is in root directory
- Variable names must start with `VITE_` for Vite
- Restart dev server after changing `.env`

### Type Errors
```bash
# Check TypeScript compilation
npm run type-check
```

### Build Issues on Vercel
- Verify `VITE_BASE_URL` is set correctly
- Check Node version compatibility
- Clear Vercel cache and redeploy

## 📞 Support

For issues and questions:
- Open an issue on GitHub
- Contact: ishaqahamad211@gmail.com

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for utility-first styling
- Redux team for state management
- All contributors and users

---

**Status**: Active Development (November 2025)  
**Version**: 1.0.0  
**Last Updated**: November 23, 2025


