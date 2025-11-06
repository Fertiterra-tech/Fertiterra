import Image from "next/image"

interface BrandLogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export default function BrandLogo({ className = "", size = "md" }: BrandLogoProps) {
  const sizeClasses = {
    sm: "w-32 h-auto",
    md: "w-48 h-auto",
    lg: "w-64 h-auto",
  }

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  }

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className={`relative ${sizeClasses[size]} mb-3`}>
        <Image
          src="/images/fertiterra-logo.png"
          alt="FertiTerra Technologies Logo"
          width={200}
          height={80}
          className="object-contain"
          priority
        />
      </div>
      <h2
        className={`font-serif font-bold text-black text-center ${textSizeClasses[size]}`}
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        FertiTerra Technologies
      </h2>
    </div>
  )
}
