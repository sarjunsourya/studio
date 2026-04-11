
'use server';

/**
 * @fileOverview Order Confirmation Email Flow.
 * 
 * This flow sends a professional and warm confirmation email to customers
 * after a successful order placement at The Divine Kitchen.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import { Resend } from 'resend';

const OrderConfirmationInputSchema = z.object({
  name: z.string().describe('The name of the customer.'),
  email: z.string().email().describe('The email address of the customer.'),
  orderNumber: z.string().describe('The 6-digit order identification number.'),
  orderDate: z.string().describe('The date the order was placed.'),
  orderType: z.string().describe('Pickup or Delivery.'),
  time: z.string().describe('The time the order was placed.'),
  orderItems: z.array(z.object({
    dish: z.string(),
    quantity: z.number(),
  })).describe('The items in the order.'),
  totalAmount: z.string().describe('The total cost of the order.'),
  instructions: z.string().describe('Pickup or Delivery address details.'),
});

export type OrderConfirmationInput = z.infer<typeof OrderConfirmationInputSchema>;

/**
 * Wrapper function to trigger the order confirmation email flow.
 */
export async function sendOrderConfirmation(input: OrderConfirmationInput) {
  return orderConfirmationFlow(input);
}

const orderConfirmationFlow = ai.defineFlow(
  {
    name: 'orderConfirmationFlow',
    inputSchema: OrderConfirmationInputSchema,
    outputSchema: z.object({ success: z.boolean(), error: z.string().optional() }),
  },
  async (input) => {
    // Note: RESEND_API_KEY must be configured in environment variables.
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    const itemsList = input.orderItems
      .map(item => `- ${item.dish} (Qty: ${item.quantity})`)
      .join('\n');

    const emailText = `
Namaste ${input.name},

---

### Order Details
**Order Number:** ${input.orderNumber}
**Order Date:** ${input.orderDate}
**Order Type:** ${input.orderType}
**Order Time:** ${input.time}

**Order Items:**
${itemsList}

**Total Amount:** ${input.totalAmount}

---

### Pickup / Delivery Information
${input.instructions}

---

### Contact Information
**Phone:** +31 6 2130 8998
**Emails:** info@the-divine-kitchen.com and roopag14@gmail.com

---

Best regards,

Roopa Gokul
C.E.O & Founder
The Divine Kitchen

---
CRAFTED BY MADE BY. SARJUNSOURYA.COM • BRAND DESIGN • WEBSITE DEVELOPMENT ✨
    `;

    try {
      await resend.emails.send({
        from: 'The Divine Kitchen <orders@the-divine-kitchen.com>',
        to: [input.email, 'roopag14@gmail.com'],
        subject: `Order Confirmation - #${input.orderNumber}`,
        text: emailText,
      });
      return { success: true };
    } catch (error: any) {
      console.error('Failed to send order confirmation email:', error);
      return { success: false, error: error?.message || 'Unknown error' };
    }
  }
);
