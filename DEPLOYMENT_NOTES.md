# Vercel Deployment Notes

## Image Path Fixes

### ✅ Fixed Issues:
- **ContactUs.tsx**: Changed from local path to Unsplash CDN image
- **Costcalculate.tsx**: Changed from local path to Unsplash CDN image

### ✅ Working Image Paths:
All images in `/public/assets/` directory are properly accessible:
- `/assets/white-delivery-van-professional-logistics.jpg` ✓
- `/assets/delivery-van-white-professional.jpg` ✓
- `/assets/delivery-person-running-with-packages.jpg` ✓
- `/assets/bangladeshi-businessman.jpg` ✓
- `/assets/background.jpg` ✓
- Payment logos: `/paypal-logo.png`, `/mastercard-logo.jpg`, `/visa-logo.jpg`, `/amex-logo.jpg` ✓

### ✅ External URLs Used:
- Blog post images: Unsplash CDN URLs
- Hero section background: Unsplash CDN
- About/Process sections: Mix of local and external URLs

## Environment Variables
```env
VITE_BASE_URL=http://localhost:5000/api/v1  # Development
```

For Vercel, update to your production API URL:
```env
VITE_BASE_URL=https://your-backend-url/api/v1
```

## Build & Deploy Checklist

- ✅ All local image paths fixed
- ✅ Environment variables configured
- ✅ Redux auth state persisting to localStorage
- ✅ RTK Query API endpoints ready
- ✅ Protected routes implemented
- ✅ Responsive design verified
- ✅ Animations optimized for performance

## Common Issues

### Images Not Showing
- Ensure images are in `/public` directory
- Use `/filename` or `/assets/filename` paths
- For external images, use full HTTP/HTTPS URLs

### API Calls Failing
- Update `VITE_BASE_URL` environment variable
- Check CORS settings on backend
- Verify token is being sent in headers

### Auth Not Persisting
- Check localStorage is enabled
- Verify `authSlice.tsx` initialization logic
- Check Redux DevTools for state

## Deployment Steps

1. Push to GitHub repository
2. Connect repository to Vercel
3. Set environment variable `VITE_BASE_URL` in Vercel dashboard
4. Deploy automatically on push to main/development branch
5. Test all features in production

## Performance Optimization

- CSS animations use transforms for 60fps performance
- Images are lazy-loaded where applicable
- Build size optimized with tree-shaking
- Tailwind CSS purging unused styles
