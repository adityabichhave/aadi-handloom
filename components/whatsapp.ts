import { CartItem } from "./CartContext";

const WHATSAPP_NUMBER = "918770039639";
const SITE_URL = "https://aadihandloom.com";

export function generateWhatsAppLink(cart: CartItem[], subtotal: number) {
  if (cart.length === 0) return "#";

  // First product link FIRST (for preview)
  const first = cart[0];

  const lines = cart.map(
    (item, i) =>
      `${i + 1}. ${item.name}
ID: ${item.id}
Qty: ${item.quantity}
Price: ₹${(item.price * item.quantity).toLocaleString()}
Link: ${SITE_URL}/products/${item.slug}`
  );

  const message = `
${SITE_URL}/products/${first.slug}

Hello AADI Handloom,

I would like to place an order for:

${lines.join("\n\n")}

Subtotal: ₹${subtotal.toLocaleString()}

Please confirm availability and delivery details.
`.trim();

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
