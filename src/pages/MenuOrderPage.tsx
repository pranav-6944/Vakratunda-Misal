import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, MapPin, X, MapPinOff, Loader2 } from 'lucide-react';
import { menuItems, menuCategories } from '../data/menu';
import { Footer } from '../components/layout/Footer';

export const MenuOrderPage: React.FC = () => {
  const [cart, setCart] = useState<Record<string, number>>({});
  
  // Checkout State
  const [showCheckout, setShowCheckout] = useState(false);
  const [customerDetails, setCustomerDetails] = useState({
    name: '',
    mobile: '',
    address: '',
    locationUrl: ''
  });
  const [isLocating, setIsLocating] = useState(false);
  const [locationError, setLocationError] = useState('');

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

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      setLocationError('Geolocation is not supported by your browser');
      return;
    }

    setIsLocating(true);
    setLocationError('');

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const mapsUrl = `https://maps.google.com/?q=${latitude},${longitude}`;
        setCustomerDetails(prev => ({ ...prev, locationUrl: mapsUrl }));
        setIsLocating(false);
      },
      (error) => {
        console.error('Error getting location:', error);
        setLocationError('Unable to retrieve your location. Please check browser permissions.');
        setIsLocating(false);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };

  const handleOrderWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (totalItems === 0) return;

    let message = "Hello Vakratunda Misal, I would like to order:\n\n";
    Object.entries(cart).forEach(([id, qty]) => {
      const item = menuItems.find((i) => i.id === id);
      if (item) {
        message += `${qty}x ${item.name} (Rs ${item.price})\n`;
      }
    });
    message += `\n*Total: Rs ${totalPrice}*\n\n`;
    message += `-------------------------\n`;
    message += `*Customer Details:*\n`;
    message += `Name: ${customerDetails.name}\n`;
    message += `Mobile: ${customerDetails.mobile}\n`;
    message += `Address: ${customerDetails.address}\n`;
    if (customerDetails.locationUrl) {
      message += `Location: ${customerDetails.locationUrl}\n`;
    }

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/918149866810?text=${encodedMessage}`, '_blank');
    setShowCheckout(false);
  };

  return (
    <div className="min-h-screen bg-parchment-100 flex flex-col font-sans relative">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-parchment-50/90 backdrop-blur-md border-b border-parchment-200 shadow-sm px-4 py-4 flex items-center justify-between">
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
      {totalItems > 0 && !showCheckout && (
        <div className="fixed bottom-0 inset-x-0 z-40 p-4 bg-gradient-to-t from-parchment-100 via-parchment-100 to-transparent pointer-events-none">
          <div className="max-w-3xl mx-auto bg-emerald-600 text-white rounded-2xl shadow-xl p-4 flex items-center justify-between pointer-events-auto">
            <div>
              <p className="text-xs text-emerald-100 font-medium">{totalItems} Item{totalItems > 1 ? 's' : ''}</p>
              <p className="font-black text-xl">₹{totalPrice}</p>
            </div>
            <button 
              onClick={() => setShowCheckout(true)}
              className="px-6 py-2.5 bg-white text-emerald-700 font-bold rounded-full shadow-md flex items-center gap-2 hover:bg-parchment-50 transition-colors"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Checkout</span>
            </button>
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      {showCheckout && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/50 backdrop-blur-sm p-0 sm:p-4 animate-in fade-in duration-200">
          <div className="bg-parchment-50 w-full sm:max-w-md rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="px-6 py-4 border-b border-parchment-200 flex justify-between items-center bg-parchment-100">
              <h2 className="text-xl font-bold text-terracotta">Delivery Details</h2>
              <button 
                onClick={() => setShowCheckout(false)}
                className="p-2 rounded-full hover:bg-parchment-200 text-terracotta/70 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto">
              <form id="checkout-form" onSubmit={handleOrderWhatsApp} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-terracotta mb-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Enter your name"
                    value={customerDetails.name}
                    onChange={e => setCustomerDetails(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl border border-parchment-300 bg-white focus:outline-none focus:ring-2 focus:ring-saffron/50 placeholder:text-terracotta/40"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-terracotta mb-1">Mobile Number</label>
                  <input 
                    type="tel" 
                    required
                    placeholder="10-digit mobile number"
                    pattern="[0-9]{10}"
                    value={customerDetails.mobile}
                    onChange={e => setCustomerDetails(prev => ({ ...prev, mobile: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl border border-parchment-300 bg-white focus:outline-none focus:ring-2 focus:ring-saffron/50 placeholder:text-terracotta/40"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-terracotta mb-1">Delivery Address</label>
                  <textarea 
                    required
                    rows={3}
                    placeholder="Full address with landmark"
                    value={customerDetails.address}
                    onChange={e => setCustomerDetails(prev => ({ ...prev, address: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl border border-parchment-300 bg-white focus:outline-none focus:ring-2 focus:ring-saffron/50 placeholder:text-terracotta/40 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <p className="text-sm font-semibold text-terracotta mb-2">Pin Your Location (Optional)</p>
                  
                  {customerDetails.locationUrl ? (
                    <div className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm font-medium">Location Captured</span>
                      </div>
                      <button 
                        type="button"
                        onClick={() => setCustomerDetails(prev => ({ ...prev, locationUrl: '' }))}
                        className="text-xs text-emerald-600 hover:text-emerald-800 underline"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={handleGetLocation}
                      disabled={isLocating}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border-2 border-saffron/30 text-saffron-dark hover:bg-saffron/10 font-bold text-sm transition-colors disabled:opacity-50"
                    >
                      {isLocating ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Locating...</span>
                        </>
                      ) : (
                        <>
                          <MapPin className="w-4 h-4" />
                          <span>Get Current Location</span>
                        </>
                      )}
                    </button>
                  )}
                  {locationError && (
                    <p className="mt-1.5 flex items-center gap-1 text-xs text-red-500">
                      <MapPinOff className="w-3 h-3" /> {locationError}
                    </p>
                  )}
                </div>
              </form>
            </div>

            <div className="p-6 border-t border-parchment-200 bg-parchment-50">
              <div className="flex justify-between items-center mb-4">
                <span className="text-terracotta/70 font-medium text-sm">Total to pay</span>
                <span className="text-terracotta font-black text-xl">₹{totalPrice}</span>
              </div>
              <button 
                type="submit"
                form="checkout-form"
                className="w-full px-6 py-3.5 bg-emerald-600 text-white font-bold rounded-xl shadow-md flex items-center justify-center gap-2 hover:bg-emerald-700 transition-colors active:scale-[0.98]"
              >
                <span>Send Order via WhatsApp</span>
              </button>
            </div>
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
