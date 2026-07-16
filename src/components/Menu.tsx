"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Check, ShoppingBag } from "lucide-react";

type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  tag?: string;
};

export default function Menu() {
  const [activeTab, setActiveTab] = useState<"beverages" | "pastries">("beverages");
  const [addedItems, setAddedItems] = useState<Record<string, boolean>>({});
  const [cartCount, setCartCount] = useState(0);

  const beverages: MenuItem[] = [
    {
      id: "bev-1",
      name: "Cold Brew Orange Tonic",
      description: "Micro-lot cold brew topped with premium tonic and fresh blood orange slice.",
      price: "$5.75",
      image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=600",
      tag: "Best Seller",
    },
    {
      id: "bev-2",
      name: "Salted Pistachio Latte",
      description: "Double shot espresso, creamy oat milk, and house-made roasted pistachio syrup.",
      price: "$6.25",
      image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=600",
      tag: "New",
    },
    {
      id: "bev-3",
      name: "Rose Water Shaken Espresso",
      description: "Espresso shaken over ice with pure organic rose water and raw cane sugar.",
      price: "$5.50",
      image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=600",
    },
    {
      id: "bev-4",
      name: "Affogato Espresso Float",
      description: "Double espresso poured over a scoop of organic Madagascar vanilla bean gelato.",
      price: "$6.50",
      image: "https://images.unsplash.com/photo-1594911774802-8822a7079af1?q=80&w=600",
    },
  ];

  const pastries: MenuItem[] = [
    {
      id: "past-1",
      name: "Almond Frangipane Croissant",
      description: "Double baked, crispy butter layers filled with organic sweet almond cream.",
      price: "$5.00",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=600",
      tag: "Best Seller",
    },
    {
      id: "past-2",
      name: "Avocado Poached Sourdough",
      description: "Smashed Hass avocado, organic poached egg, and microgreens on toasted sourdough.",
      price: "$11.50",
      image: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=600",
    },
    {
      id: "past-3",
      name: "Matcha White Choco Cruffin",
      description: "Flaky cruffin shell loaded with thick premium Uji matcha white chocolate custard.",
      price: "$5.50",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600",
      tag: "New",
    },
    {
      id: "past-4",
      name: "Dark Chocolate Swirl Babka",
      description: "Braided sweet brioche dough layered with premium Belgian dark chocolate cream.",
      price: "$4.50",
      image: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?q=80&w=600",
    },
  ];

  const currentItems = activeTab === "beverages" ? beverages : pastries;

  const handleAddItem = (itemId: string) => {
    const isAlreadyAdded = addedItems[itemId];
    setAddedItems((prev) => ({ ...prev, [itemId]: !isAlreadyAdded }));
    setCartCount((prev) => (isAlreadyAdded ? prev - 1 : prev + 1));
  };

  return (
    <section id="menu" className="py-24 bg-[#FDFBF7]/50 border-y border-[#E6D5C3]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 text-center md:text-left">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#E6D5C3]">
              The Menu
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#60241E] tracking-tight">
              Highlight Showcase
            </h2>
            <div className="w-16 h-1 bg-[#60241E] rounded-full mx-auto md:mx-0" />
          </div>

          {/* Cart Indicator */}
          {cartCount > 0 && (
            <div className="flex items-center gap-2.5 bg-[#60241E] text-[#FDFBF7] px-5 py-2.5 rounded-full shadow-lg self-center md:self-auto animate-bounce">
              <ShoppingBag className="w-4 h-4" />
              <span className="text-sm font-extrabold">{cartCount} items in basket</span>
            </div>
          )}
        </div>

        {/* Custom Tab Selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-[#E6D5C3]/30 p-1.5 rounded-2xl border border-[#E6D5C3]/60">
            <button
              onClick={() => setActiveTab("beverages")}
              className={`px-6 sm:px-8 py-3 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 ${
                activeTab === "beverages"
                  ? "bg-[#60241E] text-[#FDFBF7] shadow-md"
                  : "text-[#60241E] hover:bg-[#E6D5C3]/20"
              }`}
            >
              Coffee & Beverages
            </button>
            <button
              onClick={() => setActiveTab("pastries")}
              className={`px-6 sm:px-8 py-3 rounded-xl text-sm font-bold tracking-wide transition-all duration-300 ${
                activeTab === "pastries"
                  ? "bg-[#60241E] text-[#FDFBF7] shadow-md"
                  : "text-[#60241E] hover:bg-[#E6D5C3]/20"
              }`}
            >
              Signature Pastries/Food
            </button>
          </div>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentItems.map((item) => {
            const isAdded = addedItems[item.id];
            return (
              <div
                key={item.id}
                className="group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-[#E6D5C3]/30 shadow-sm hover:shadow-xl hover:border-[#60241E]/10 transition-all duration-300 ease-in-out"
              >
                {/* Image Section */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#E6D5C3]/25">
                  {item.tag && (
                    <span className="absolute top-4 left-4 z-10 bg-[#60241E] text-[#FDFBF7] text-[10px] font-extrabold uppercase px-3 py-1 rounded-full tracking-wider shadow-sm">
                      {item.tag}
                    </span>
                  )}
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-w-768px) 100vw, 250px"
                  />
                </div>

                {/* Content Section */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg text-[#60241E] group-hover:text-[#60241E]/90 transition-colors duration-300">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#60241E]/60 leading-relaxed font-medium line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-5 mt-4 border-t border-[#E6D5C3]/20">
                    <span className="text-lg font-extrabold text-[#60241E]">
                      {item.price}
                    </span>

                    {/* Interactive Button */}
                    <button
                      onClick={() => handleAddItem(item.id)}
                      className={`relative flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 ${
                        isAdded
                          ? "bg-emerald-600 text-white shadow-emerald-600/20"
                          : "bg-[#60241E] text-[#FDFBF7] hover:bg-[#60241E]/90 shadow-[#60241E]/20"
                      } shadow-md`}
                      title={isAdded ? "Remove from order" : "Add to order"}
                    >
                      <span className="sr-only">Add item</span>
                      {isAdded ? (
                        <Check className="w-5 h-5 animate-pulse" />
                      ) : (
                        <Plus className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
