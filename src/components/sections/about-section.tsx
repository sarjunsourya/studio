import Image from "next/image";

export function AboutSection() {
    return (
        <section className="w-full py-24 md:py-32 bg-background overflow-hidden">
            <div className="container mx-auto max-w-6xl px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="relative aspect-square max-w-md mx-auto luxury-button">
                            <Image 
                                src="https://i.imgur.com/REENKrh.jpeg" 
                                alt="Roopa Gokul"
                                fill
                                className="rounded-full object-cover shadow-2xl border-8 border-background z-10"
                            />
                            <div className="absolute inset-0 rounded-full border border-primary/20 scale-110 animate-spin-slow" />
                        </div>
                    </div>
                    <div className="space-y-8 text-center lg:text-left">
                        <div className="space-y-2">
                             <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs">A Culinary Legacy</span>
                             <h2 className="font-headline text-4xl md:text-6xl font-normal text-foreground leading-tight">
                                Crafted with <br /><span className="text-accent italic">Soul & Science</span>
                             </h2>
                        </div>
                        <div className="space-y-6 text-muted-foreground text-lg md:text-xl font-light leading-relaxed">
                            <p>
                                I am <span className="text-foreground font-semibold">Roopa Gokul</span>. The Divine Kitchen is my laboratory of tradition, where the sacred flavors of my ancestors are preserved and perfected.
                            </p>
                            <p>
                                With 18 years of refinement, I translate the vibrant spirit of Indian home-cooking into a luxury culinary experience for the modern Delft community.
                            </p>
                             <div className="pt-6">
                                <p className="font-headline text-2xl text-foreground italic border-l-4 border-primary pl-6">
                                    "Real food, true flavours, and the pure comfort of home in every exquisite bite."
                                </p>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}