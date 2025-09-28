export const Button = ({ title, className }: ButtonProps) => {
    // const widths = bidWidth ? "min-w-[150px] text-[16px[" : "min-w-[100px] text-[13px]"
    return (
        <button className={`${className} bg-black rounded-[50px] text-center inline-flex uppercase py-[10px] px-[30px] text-white`}>{title}</button>
    )
}