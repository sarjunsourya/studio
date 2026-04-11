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
    
    const itemsListHtml = input.orderItems
      .map(item => `- ${item.dish} (Qty: ${item.quantity})`)
      .join('<br />');

    const htmlBody = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 40px; border-radius: 8px;">
        <p style="font-size: 18px;">Namaste ${input.name},</p>
        
        <p>---</p>
        
        <h3 style="margin-bottom: 10px; color: #0a2e2a;">Order Details</h3>
        <p style="margin: 0;"><strong>Order Number:</strong> ${input.orderNumber}</p>
        <p style="margin: 0;"><strong>Order Date:</strong> ${input.orderDate}</p>
        <p style="margin: 0;"><strong>Order Type:</strong> ${input.orderType}</p>
        <p style="margin: 0;"><strong>Order Time:</strong> ${input.time}</p>

        <p style="margin-top: 15px;"><strong>Order Items:</strong><br />
        ${itemsListHtml}</p>

        <p><strong>Total Amount:</strong> ${input.totalAmount}</p>

        <p>---</p>

        <h3 style="margin-bottom: 10px; color: #0a2e2a;">Pickup / Delivery Information</h3>
        <p>${input.instructions}</p>

        <p>---</p>

        <h3 style="margin-bottom: 10px; color: #0a2e2a;">Contact Information</h3>
        <p style="margin: 0;"><strong>Phone:</strong> +31 6 2130 8998</p>
        <p style="margin: 0;"><strong>Emails:</strong> info@the-divine-kitchen.com and roopag14@gmail.com</p>

        <p>---</p>

        <p style="margin-bottom: 0;">Best regards,</p>
        <p style="margin-top: 5px;">
          <strong>Roopa Gokul</strong><br />
          C.E.O & Founder<br />
          The Divine Kitchen
        </p>

        <p>---</p>
        <p style="font-size: 10px; color: #999; text-align: center; margin-top: 30px; letter-spacing: 1px;">
          CRAFTED BY MADE BY. SARJUNSOURYA.COM • BRAND DESIGN • WEBSITE DEVELOPMENT ✨
        </p>
      </div>
    `;

    try {
      await resend.emails.send({
        from: 'The Divine Kitchen <orders@the-divine-kitchen.com>',
        to: [input.email],
        cc: ['roopag14@gmail.com'],
        subject: `Order Confirmation - #${input.orderNumber}`,
        html: htmlBody,
      });
      return { success: true };
    } catch (error: any) {
      console.error('Failed to send order confirmation email:', error);
      return { success: false, error: error?.message || 'Unknown error' };
    }
  }
);
