import { whyUsPoints } from '@/lib/data';

export function WhyUsSection() {
  return (
    <section className="w-full py-24 md:py-32 bg-secondary/50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-headline text-4xl md:text-6xl font-normal text-foreground mb-6">
            The <span className="text-primary">Standard</span> of Excellence
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-8" />
          <p className="mt-4 text-xl text-muted-foreground font-light max-w-2xl mx-auto">
            A minimalist approach to high-end home catering, where quality is never compromised.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-5">
          {whyUsPoints.map((point) => (
            <div key={point.title} className="group flex flex-col items-center text-center p-8 rounded-2xl transition-all duration-500 hover:bg-background hover:shadow-2xl luxury-button border border-transparent hover:border-border">
              <div className="mb-8 relative">
                <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-xl text-primary transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                  <point.icon className="h-10 w-10" />
                </div>
              </div>
              <h3 className="text-xl font-headline font-semibold mb-3 text-foreground tracking-tight">
                {point.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}