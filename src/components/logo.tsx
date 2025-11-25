import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "flex items-center gap-2",
        className
      )}
    >
      <Image 
        src="https://scontent-ams2-1.cdninstagram.com/v/t51.2885-19/574602855_18067291658603001_6900762543051329758_n.jpg?stp=dst-jpg_s320x320_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6InByb2ZpbGVfcGljLmRqYW5nby4xMDI0LmMyIn0&_nc_ht=scontent-ams2-1.cdninstagram.com&_nc_cat=109&_nc_oc=Q6cZ2QEKYySM_dW_TFQQ3GKmXiqH4DDzZkiXt3FUJNLengAHIww3PD-96wtzGxUnWi_kvN2EwabDYrjSHOeXSR4KaQtG&_nc_ohc=MZ4qNakv-cIQ7kNvwEA_MPO&_nc_gid=ScsnJc6yNfHfzXn_o76EiA&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfjfgLnIDmgQr4umbPfs25XXs3nlsWqhYEv82h_3_r-pFA&oe=692BD37B&_nc_sid=8b3546" 
        alt="The Divine Kitchen Logo" 
        width={150} 
        height={150} 
        className="w-24 h-24 md:w-32 md:h-32 rounded-full"
        priority
      />
    </Link>
  );
}
