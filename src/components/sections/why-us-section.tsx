import { Home, Leaf, Sparkles, Flame, MapPin } from 'lucide-react';

const whyUsPoints = [
  {
    icon: Home,
    title: 'Homemade',
    description: 'Authentic recipes passed down through generations, made in my home.',
  },
  {
    icon: Leaf,
    title: 'Fresh Ingredients',
    description: 'We source only the freshest produce for every single dish.',
  },
  {
    icon: Sparkles,
    title: 'Hygienic Prep',
    description: 'Highest standards of cleanliness and care in every step.',
  },
  {
    icon: Flame,
    title: 'Authentic Flavors',
    description: 'Taste the real soul of Indian cuisine without compromise.',
  },
  {
    icon: MapPin,
    title: 'Based in Delft',
    description: 'Your local home kitchen serving the Delft community with love.',
  },
];

export function WhyUsSection() {
  return (
    <section className="w-full py-24 md:py-32 bg-foreground relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-headline text-4xl md:text-6xl font-bold text-white mb-6">
            Why <span className="text-primary italic">The Divine Kitchen?</span>
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8" />
          <p className="mt-4 text-xl text-white/60 font-light max-w-2xl mx-auto">
            A standard of excellence rooted in tradition and purity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {whyUsPoints.map((point) => (
            <div key={point.title} className="group glass-card-dark p-8 text-center transition-all duration-500 hover:translate-y-[-10px]">
              <div className="mb-8 relative flex justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-foreground shadow-2xl transition-transform duration-500 group-hover:scale-110">
                  <point.icon className="h-10 w-10" />
                </div>
              </div>
              <h3 className="text-xl font-headline font-semibold mb-3 text-white tracking-tight">
                {point.title}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed font-light">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
