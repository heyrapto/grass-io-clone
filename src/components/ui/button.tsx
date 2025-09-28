export const Button = ({ title, className, variant }: ButtonProps) => {
    // const widths = bidWidth ? "min-w-[150px] text-[16px[" : "min-w-[100px] text-[13px]"
    const variants = variant === "white" ? "bg-white text-black font-semibold" : variant === "green" ? "bg-green-500 text-black font-semibold" : "bg-black text-white"
    return (
        <button className={`${className} ${variants} cursor-pointer rounded-[50px] text-center inline-flex uppercase py-[10px] px-[30px]`}>{title}</button>
    )
}