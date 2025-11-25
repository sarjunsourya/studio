import Image from "next/image";
import { Logo } from "../logo";

export function AboutSection() {
    return (
        <section className="w-full py-16 md:py-24 bg-secondary/30">
            <div className="container mx-auto max-w-5xl px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                    <div className="md:col-span-1 flex justify-center">
                        <div className="relative">
                            <Image 
                                src="https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/574602855_18067291658603001_6900762543051329758_n.jpg?stp=dst-jpg_s320x320_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDI0LmMyIn0&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=109&_nc_oc=Q6cZ2QEKYySM_dW_TFQQ3GKmXiqH4DDzZkiXt3FUJNLengAHIww3PD-96wtzGxUnWi_kvN2EwabDYrjSHOeXSR4KaQtG&_nc_ohc=MZ4qNakv-cIQ7kNvwEA_MPO&_nc_gid=ScsnJc6yNfHfzXn_o76EiA&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfjfgLnIDmgQr4umbPfs25XXs3nlsWqhYEv82h_3_r-pFA&oe=692BD37B&_nc_sid=8b3546" 
                                alt="Roopa Gokul"
                                width={250}
                                height={250}
                                className="rounded-full shadow-lg border-4 border-background"
                            />
                        </div>
                    </div>
                    <div className="md:col-span-2 text-center md:text-left">
                        <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
                            From the Heart of My Kitchen
                        </h2>
                        <div className="mt-6 space-y-4 text-muted-foreground text-lg">
                            <p>
                                I’m Roopa Gokul, the founder of The Divine Kitchen, a homemade kitchen built from passion, heritage, and a love for authentic flavors. My cooking journey began with the two women who inspired me most—my mother and grandmother.
                            </p>
                            <p>
                                For more than 18 years, I’ve continued refining their traditions. What started in India has now crossed countries, allowing me to bring these heartfelt flavors to our new community in Delft.
                            </p>
                             <p className="font-semibold text-foreground">
                                At The Divine Kitchen, the motto is simple: real food, true flavours, and the comfort of home in every bite.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
