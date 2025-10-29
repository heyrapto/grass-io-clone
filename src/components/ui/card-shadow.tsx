type ShadowCardProps = {
    children: React.ReactNode;
    shadow?: "bottom" | "bottom-right" | "none";
    hoverShadow?: "bottom" | "bottom-right" | "none";
    className?: string;
  };
  
export function ShadowCard({ children, shadow = "none", hoverShadow = "none", className }: ShadowCardProps) {
    const shadowClass =
      shadow === "bottom"
        ? "shadow-bottom"
        : shadow === "bottom-right"
        ? "shadow-bottom-right"
        : "";
  
    const hoverShadowClass =
      hoverShadow === "bottom"
        ? "hover-shadow-bottom"
        : hoverShadow === "bottom-right"
        ? "hover-shadow-bottom-right"
        : "";
  
    return (
      <div
        className={`rounded-2xl border border-gray-200 p-6 cursor-pointer transition-shadow duration-300 ease-in-out ${shadowClass} ${hoverShadowClass} ${className}`}
      >
        {children}
      </div>
    );
}