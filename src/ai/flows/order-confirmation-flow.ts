
'use server';

/**
 * @fileOverview Order Confirmation Email Flow using SendGrid.
 * 
 * This flow sends a professional and warm confirmation email to customers
 * using the SendGrid API.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';
import sgMail from '@sendgrid/mail';

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
    // Note: SENDGRID_API_KEY must be configured in environment variables.
    if (!process.env.SENDGRID_API_KEY) {
      console.error('SENDGRID_API_KEY is not defined');
      return { success: false, error: 'Email service not configured' };
    }

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
    const itemsListHtml = input.orderItems
      .map(item => `<p style="margin: 0;">- ${item.dish} (Qty: ${item.quantity})</p>`)
      .join('');

    const htmlBody = `
      <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 4px;">
        <p style="font-size: 16px;">Namaste ${input.name},</p>
        
        <p>---</p>
        
        <h3 style="color: #0a2e2a; margin-top: 20px;">Order Details</h3>
        <p style="margin: 5px 0;"><strong>Order Number:</strong> ${input.orderNumber}</p>
        <p style="margin: 5px 0;"><strong>Order Date:</strong> ${input.orderDate}</p>
        <p style="margin: 5px 0;"><strong>Order Type:</strong> ${input.orderType}</p>
        <p style="margin: 5px 0;"><strong>Order Time:</strong> ${input.time}</p>

        <div style="margin-top: 15px;">
          <strong>Order Items:</strong>
          ${itemsListHtml}
        </div>

        <p style="margin: 15px 0;"><strong>Total Amount:</strong> ${input.totalAmount}</p>

        <p>---</p>

        <h3 style="color: #0a2e2a; margin-top: 20px;">Pickup / Delivery Information</h3>
        <p style="margin: 5px 0;">${input.instructions}</p>

        <p>---</p>

        <h3 style="color: #0a2e2a; margin-top: 20px;">Contact Information</h3>
        <p style="margin: 5px 0;"><strong>Phone:</strong> +31 6 2130 8998</p>
        <p style="margin: 5px 0;"><strong>Emails:</strong> info@the-divine-kitchen.com and roopag14@gmail.com</p>

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

    const msg = {
      to: input.email,
      from: 'orders@the-divine-kitchen.com', // Ensure this identity is verified in SendGrid
      bcc: 'roopag14@gmail.com',
      subject: `Order Confirmation - #${input.orderNumber}`,
      html: htmlBody,
    };

    try {
      await sgMail.send(msg);
      return { success: true };
    } catch (error: any) {
      console.error('Failed to send order confirmation email via SendGrid:', error);
      if (error.response) {
        console.error(error.response.body);
      }
      return { success: false, error: error?.message || 'Unknown error' };
    }
  }
);
