import { CateringForm } from "@/components/catering-form";

export default function CateringPage() {
    return (
        <div className="min-h-screen bg-secondary/30 py-16 md:py-24">
            <div className="container mx-auto max-w-4xl px-4">
                <div className="text-center mb-12">
                    <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
                        Catering Services
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Bring the authentic taste of The Divine Kitchen to your special event. Fill out the form below to tell us more about your needs.
                    </p>
                </div>
                <div className="glass-card p-8 md:p-12">
                    <CateringForm />
                </div>
            </div>
        </div>
    );
}
