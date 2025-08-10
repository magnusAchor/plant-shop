# 🌱 GreenThumb Plants - Houseplant E-commerce Website

A beautiful, fully functional e-commerce website for selling houseplants built with React.js, Redux Toolkit, and Tailwind CSS.

![GreenThumb Plants](https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop)

## 🚀 Live Demo

[View Live Website](https://your-deployed-site-url.netlify.app)

## 📋 Features

- **Complete E-commerce Functionality**: Add to cart, increment/decrement quantities, remove items
- **Redux State Management**: Centralized cart state with Redux Toolkit
- **Responsive Design**: Optimized for desktop and mobile devices
- **Beautiful UI**: Modern design with smooth animations and hover effects
- **Product Categories**: Plants organized into Succulents, Foliage, and Flowering categories
- **Smart Cart Management**: Disabled add buttons for items already in cart
- **Real-time Updates**: Cart icon badge updates automatically
- **Mock Data**: 6 unique houseplants with realistic images and pricing

## 🛠️ Tech Stack

- **Frontend**: React.js 18.x
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Build Tool**: Vite
- **Version Control**: Git & GitHub
- **Deployment**: Netlify/Vercel

## 📁 Project Structure

```
src/
├── components/
│   └── Header.jsx          # Shared navigation header
├── pages/
│   ├── LandingPage.jsx     # Homepage with hero section
│   ├── ProductListingPage.jsx  # Product catalog with filters
│   └── ShoppingCartPage.jsx    # Shopping cart and checkout
├── redux/
│   ├── store.js           # Redux store configuration
│   └── cartSlice.js       # Cart state management
├── data/
│   └── plants.js          # Mock plant data
├── App.jsx                # Main app component with routing
└── main.jsx              # Application entry point
```

## 🎯 Key Features Implemented

### Landing Page (/)
- Full-screen hero background with plant imagery
- Company branding and description
- Feature highlights
- "Get Started" CTA button linking to products

### Product Listing Page (/products)
- Grid layout displaying 6 unique houseplants
- Category filtering (All, Succulents, Foliage, Flowering)
- Add to cart functionality with button state management
- Product cards with images, names, prices, and descriptions
- Disabled state for items already in cart

### Shopping Cart Page (/cart)
- Empty cart state with "Shop Now" button
- Cart items with thumbnails, names, and prices
- Quantity controls (increment/decrement/remove)
- Order summary with totals
- "Coming Soon" checkout alert
- Continue shopping link

### Header Component
- Sticky navigation with logo and links
- Shopping cart icon with real-time item count badge
- Responsive design for mobile and desktop
- Hidden on landing page for clean hero experience

### Redux Cart Management
- Add to cart functionality
- Increment/decrement quantities
- Remove items completely
- Automatic total calculations
- Persistent cart state across navigation

## 🚀 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/greenthumb-plants.git
   cd greenthumb-plants
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🌐 Deployment

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy the `dist` folder to Netlify:
   - Drag and drop the `dist` folder to Netlify
   - Or connect your GitHub repository for automatic deployments

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Environment Variables

No environment variables are required for this project as it uses mock data.

## 📱 Responsive Design

The application is fully responsive with breakpoints for:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🎨 Design System

### Colors
- **Primary**: Emerald Green (#059669)
- **Secondary**: Sage Green (#10b981)
- **Accent**: Orange (#f97316)
- **Success**: Green (#16a34a)
- **Warning**: Yellow (#eab308)
- **Error**: Red (#dc2626)

### Typography
- **Font Family**: Default system fonts
- **Headings**: Bold weights with proper hierarchy
- **Body Text**: Regular weight with 1.5 line height

## 🧪 Testing Checklist

- [x] Landing page loads with hero image and CTA
- [x] Product listing shows all 6 plants correctly
- [x] Category filtering works properly
- [x] Add to cart updates Redux state
- [x] Add to cart button disables when item is in cart
- [x] Cart icon badge shows correct count
- [x] Cart page displays items with correct information
- [x] Increment/decrement updates quantities and totals
- [x] Remove item functionality works
- [x] Empty cart shows appropriate message
- [x] Checkout button shows "Coming Soon" alert
- [x] Navigation works between all pages
- [x] Responsive design works on mobile and desktop

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Plant images sourced from [Pexels](https://pexels.com)
- Icons provided by [React Icons](https://react-icons.github.io/react-icons/)
- Built with [Vite](https://vitejs.dev/) and [React](https://reactjs.org/)

## 📞 Support

If you have any questions or need help, please open an issue on GitHub or contact the development team.

---

**GreenThumb Plants** - Bringing nature to your home, one plant at a time! 🌿