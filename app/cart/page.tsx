"use client";

import Image from "next/image";
import { useCart } from "../../components/CartContext";
import { generateWhatsAppLink } from "../../components/whatsapp";

export default function CartPage() {
  const {
    cart,
    addToCart,
    decreaseQuantity,
    removeFromCart,
    subtotal,
  } = useCart();

  return (
    <section className="relative bg-[#f6f1e9] min-h-[80vh]">
      <div className="max-w-6xl mx-auto px-6 pt-40 pb-48">

        {/* HEADER */}
        <div className="max-w-3xl mb-20">
          <p className="uppercase tracking-[0.45em] text-[11px] text-[#8c7a45] mb-8">
            Cart
          </p>

          <h1 className="font-serif text-4xl md:text-5xl text-[#2a2118] mb-6">
            Your selection.
          </h1>

          <div className="w-20 h-[1px] bg-[#c9b37a] opacity-60 mb-10" />

          <p className="text-[#4a4336] leading-[1.9]">
            Pieces you have chosen appear here. Maheshwari sarees are woven
            in limited runs — availability is never assumed.
          </p>
        </div>

        {/* EMPTY */}
        {cart.length === 0 && (
          <p className="text-[#6b6354]">
            Your cart is currently empty.
          </p>
        )}

        {/* ITEMS */}
        {cart.length > 0 && (
          <div className="max-w-4xl space-y-12">

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between gap-10 border-b border-[#d8caa2]/60 pb-8"
              >
                {/* LEFT */}
                <div className="flex gap-6 items-center">
                  {/* IMAGE */}
                  <div className="relative w-[72px] h-[96px] border border-[#d8caa2]/60 shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* INFO */}
                  <div>
                    <p className="text-lg text-[#2a2118]">
                      {item.name}
                    </p>

                    <p className="text-sm text-[#6b6354] mt-1">
                      ₹{item.price.toLocaleString()}
                    </p>

                    {/* QUANTITY */}
                    <div className="flex items-center gap-4 mt-4">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="px-3 py-1 border border-[#c9b37a] text-sm"
                      >
                        −
                      </button>

                      <span className="text-sm">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          addToCart({
                            id: item.id,
                            name: item.name,
                            price: item.price,
                            image: item.image,
                            slug: item.slug,
                          })
                        }
                        className="px-3 py-1 border border-[#c9b37a] text-sm"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="text-right">
                  <p className="text-lg text-[#2a2118]">
                    ₹{(item.price * item.quantity).toLocaleString()}
                  </p>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="mt-4 text-xs uppercase tracking-widest text-[#8c7a45]"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}

            {/* SUBTOTAL */}
            <div className="flex justify-between text-lg pt-10 border-t border-[#d8caa2]/60">
              <span>Subtotal</span>
              <span>₹{subtotal.toLocaleString()}</span>
            </div>

            {/* WHATSAPP */}
            <div className="mt-20 max-w-md">
              <a
                href={generateWhatsAppLink(cart, subtotal)}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center justify-center
                  w-full
                  bg-[#25D366]
                  text-white
                  py-4
                  text-sm
                  tracking-widest
                  uppercase
                  hover:bg-[#1ebe5d]
                  transition
                "
              >
                Confirm Order on WhatsApp
              </a>

              <p className="mt-4 text-xs text-[#6b6354] leading-relaxed">
                You will be redirected to WhatsApp to confirm availability,
                delivery timeline, and payment details directly with us.
              </p>
            </div>

          </div>
        )}
      </div>
    </section>
  );
}
