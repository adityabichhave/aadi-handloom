"use client";

import { useCart } from "./CartContext";
import Link from "next/link";
import { generateWhatsAppLink } from "./whatsapp";

export default function CartDrawer() {
const {
  cart,
  removeFromCart,
  isCartOpen,
  closeCart,
} = useCart();

const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {/* BACKDROP */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity ${
          isCartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
      />

      {/* DRAWER */}
      <aside
        className={`
          fixed top-0 right-0 h-full w-[320px] sm:w-[380px]
          bg-[#f4efe8] z-50
          transform transition-transform duration-500 ease-out
          ${isCartOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* HEADER */}
        <div className="flex justify-between items-center p-5 border-b border-[#bfa25a]/40">
          <h3 className="font-serif text-[#bfa25a] text-lg tracking-widest">
            Your Cart
          </h3>
          <button onClick={closeCart} className="text-xl">×</button>
        </div>

        {/* ITEMS */}
        <div className="p-5 space-y-4 overflow-y-auto h-[calc(100%-200px)]">
  {cart.length === 0 ? (
    <p className="text-center text-sm text-gray-600">
      Your cart is empty
    </p>
  ) : (
    cart.map((item) => (
      <div
        key={item.id}
        className="flex justify-between items-start border-b pb-4"
      >
        <div>
          <p className="text-sm font-medium">{item.name}</p>
          <p className="text-xs text-gray-500 mt-1">
            ₹{item.price.toLocaleString()} × {item.quantity}
          </p>
        </div>

        <button
          onClick={() => removeFromCart(item.id)}
          className="text-xs text-gray-400 hover:text-black"
        >
          ×
        </button>
      </div>
    ))
  )}
</div>


  {/* FOOTER */}
  <div className="p-5 border-t border-[#bfa25a]/40 space-y-2">
    <div className="flex justify-between text-lg">
      <span>Subtotal</span>
      <span>₹{subtotal.toLocaleString()}</span>
    </div>

    {/* WHATSAPP CHECKOUT */}
    {cart.length > 0 && (
      <a
        href={generateWhatsAppLink(cart, subtotal)}
        target="_blank"
        rel="noopener noreferrer"
        className="
          block w-full text-center
          bg-[#25D366]
          text-white
          py-1
          text-sm
          tracking-widest
          uppercase
          hover:bg-[#1ebe5d]
          transition
        "
        onClick={closeCart}
      >
        Order on WhatsApp
      </a>
    )}

    <Link href="/cart" onClick={closeCart}>
      <button className="w-full border border-[#bfa25a] py-2 text-[#2a2118] tracking-widest text-sm">
        View Cart
      </button>
    </Link>
  </div>
</aside>
    </>
  );
}
