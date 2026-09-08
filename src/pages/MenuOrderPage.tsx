import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag } from 'lucide-react';
import { menuItems, menuCategories } from '../data/menu';
import { Footer } from '../components/layout/Footer';

export const MenuOrderPage: React.FC = () => {
  const [cart, setCart] = useState<Record<string, number>>({});

  const updateQuantity = (id: string, delta: number) => {
    setCart((prev) => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      if (next === 0) {
        const newCart = { ...prev };
        delete newCart[id];
        return newCart;
      }
      return { ...prev, [id]: next };
    });
  };

  const totalPrice = Object.entries(cart).reduce((total, [id, qty]) => {
    const item = menuItems.find((i) => i.id === id);
    return total + (item?.price || 0) * qty;
  }, 0);

  const totalItems = Object.values(cart).reduce((sum, qty) => sum + qty, 0);

  const handleOrderWhatsApp = () => {
    if (totalItems === 0) return;

    let message = "Hello Vakratunda Misal, I would like to order:\n\n";
    Object.entries(cart).forEach(([id, qty]) => {
      const item = menuItems.find((i) => i.id === id);
      if (item) {
        message += `${qty}x ${item.name} (Rs ${item.price})\n`;
      }
    });
    message += `\n*Total: Rs ${totalPrice}*`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/918149866810?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-parchment-100 flex flex-col font-sans relative">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-parchment-50/90 backdrop-blur-md border-b border-parchment-200 shadow-sm px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link to="/" className="p-2 rounded-full hover:bg-parchment-200 transition-colors">
            <ArrowLeft className="w-5 h-5 text-terracotta" />
          </Link>
          <h1 className="marathi-headline text-2xl font-bold text-terracotta">Our Menu</h1>
        </div>
        <img src="/Logo.png" alt="Logo" className="w-10 h-10 rounded-full border border-saffron" />
      </header>

      {/* Menu Content */}
      <main className="flex-1 max-w-3xl mx-auto w-full px-4 py-8 space-y-12 pb-32">
        {menuCategories.map((cat) => {
          const itemsInCat = menuItems.filter((i) => i.category === cat.id);
          if (itemsInCat.length === 0) return null;

          return (
            <div key={cat.id} className="space-y-4">
              <h2 className="marathi-headline text-2xl font-bold text-terracotta border-b-2 border-saffron/20 pb-2 inline-block">
                {cat.name} <span className="text-sm opacity-70">({cat.marathiName})</span>
              </h2>
              
              <div className="grid gap-4">
                {itemsInCat.map((item) => {
                  const qty = cart[item.id] || 0;
                  return (
                    <div key={item.id} className="p-4 rounded-2xl bg-parchment-50 border border-parchment-200 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex flex-1 gap-4">
                        {item.image && (
                          <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 rounded-xl overflow-hidden bg-parchment-100 border border-parchment-200 flex items-center justify-center p-1">
                            <img src={item.image} alt={item.name} className="w-full h-full object-contain drop-shadow-sm" />
                          </div>
                        )}
                        <div className="flex-1">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className={`w-2 h-2 rounded-full shrink-0 ${item.isVegetarian ? 'bg-emerald-600' : 'bg-red-600'}`} />
                            <h3 className="font-bold text-terracotta text-lg">{item.name}</h3>
                            {item.badge && (
                              <span className="text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-saffron/15 text-saffron-dark shrink-0">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-terracotta/70 mt-1 line-clamp-2">{item.description}</p>
                          <p className="text-saffron font-black mt-2">₹{item.price}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-end sm:justify-center bg-parchment-200 rounded-full border border-parchment-300 overflow-hidden shrink-0 self-end sm:self-auto w-fit">
                        {qty > 0 ? (
                          <>
                            <button onClick={() => updateQuantity(item.id, -1)} className="w-8 h-8 flex items-center justify-center font-bold text-terracotta hover:bg-parchment-300 transition-colors">
                              -
                            </button>
                            <span className="w-8 text-center font-bold text-sm text-terracotta">{qty}</span>
                            <button onClick={() => updateQuantity(item.id, 1)} className="w-8 h-8 flex items-center justify-center font-bold text-terracotta hover:bg-parchment-300 transition-colors">
                              +
                            </button>
                          </>
                        ) : (
                          <button onClick={() => updateQuantity(item.id, 1)} className="px-6 py-2 font-bold text-saffron text-sm hover:bg-saffron/10 transition-colors">
                            ADD
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </main>

      {/* Sticky Cart Footer */}
      {totalItems > 0 && (
        <div className="fixed bottom-0 inset-x-0 z-50 p-4 bg-gradient-to-t from-parchment-100 via-parchment-100 to-transparent">
          <div className="max-w-3xl mx-auto bg-emerald-600 text-white rounded-2xl shadow-xl p-4 flex items-center justify-between">
            <div>
              <p className="text-xs text-emerald-100 font-medium">{totalItems} Item{totalItems > 1 ? 's' : ''}</p>
              <p className="font-black text-xl">₹{totalPrice}</p>
            </div>
            <button 
              onClick={handleOrderWhatsApp}
              className="px-6 py-2.5 bg-white text-emerald-700 font-bold rounded-full shadow-md flex items-center gap-2 hover:bg-parchment-50 transition-colors"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Order via WhatsApp</span>
            </button>
          </div>
        </div>
      )}
      
      {/* We only render footer if cart is empty or we let it scroll behind the cart */}
      <div className={totalItems > 0 ? "pb-24" : ""}>
        <Footer />
      </div>
    </div>
  );
};
