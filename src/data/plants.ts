// Mock data for houseplants across different categories
export interface Plant {
  id: number;
  name: string;
  price: number;
  thumbnail: string;
  category: string;
  description: string;
}

export const plants: Plant[] = [
  {
    id: 1,
    name: "Jade Plant",
    price: 12.99,
    thumbnail: "https://images.pexels.com/photos/6912775/pexels-photo-6912775.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    category: "Succulents",
    description: "Easy-care succulent with thick, glossy leaves"
  },
  {
    id: 2,
    name: "Aloe Vera",
    price: 15.99,
    thumbnail: "https://images.pexels.com/photos/4750373/pexels-photo-4750373.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    category: "Succulents",
    description: "Medicinal succulent perfect for beginners"
  },
  {
    id: 3,
    name: "Monstera Deliciosa",
    price: 29.99,
    thumbnail: "https://images.pexels.com/photos/6208086/pexels-photo-6208086.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    category: "Foliage",
    description: "Stunning split-leaf tropical plant"
  },
  {
    id: 4,
    name: "Fiddle Leaf Fig",
    price: 39.99,
    thumbnail: "https://images.pexels.com/photos/6208087/pexels-photo-6208087.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    category: "Foliage",
    description: "Popular statement plant with large leaves"
  },
  {
    id: 5,
    name: "Peace Lily",
    price: 24.99,
    thumbnail: "https://images.pexels.com/photos/7084365/pexels-photo-7084365.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    category: "Flowering",
    description: "Elegant flowering plant that purifies air"
  },
  {
    id: 6,
    name: "African Violet",
    price: 18.99,
    thumbnail: "https://images.pexels.com/photos/4425779/pexels-photo-4425779.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
    category: "Flowering",
    description: "Compact flowering plant with velvety leaves"
  }
];

// Helper function to get plants by category
export const getPlantsByCategory = (category: string): Plant[] => {
  return plants.filter(plant => plant.category === category);
};

// Helper function to get all categories
export const getCategories = (): string[] => {
  return [...new Set(plants.map(plant => plant.category))];
};