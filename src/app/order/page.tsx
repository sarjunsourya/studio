
import { OrderForm } from "@/components/order-form";
import { Suspense } from "react";

function OrderFormLoading() {
    return <div>Loading order form...</div>
}

export default function OrderPage() {
    return (
        <div className="min-h-screen bg-secondary/30 py-16 md:py-24">
            <div className="container mx-auto max-w-4xl px-4">
                <div className="text-center mb-12">
                    <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
                        Place Your Order
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Please provide your details below to complete the order.
                    </p>
                </div>
                <div className="glass-card p-8 md:p-12">
                    <Suspense fallback={<OrderFormLoading />}>
                        <OrderForm />
                    </Suspense>
                </div>
            </div>
        </div>
    );
}
