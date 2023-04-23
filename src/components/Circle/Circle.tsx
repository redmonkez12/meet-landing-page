type Props = {
    title: string;
};

export function Circle({ title }: Props) {
    return (
        <div
            className={"rounded-full text-gray font-black leading-[1.625rem] border h-[3.5rem] w-[3.5rem] flex items-center justify-center mt-36 md:mt-48 relative"}>
            <div>{title}</div>
            <div className={"absolute h-[5.25rem] border top-[-5.22rem] border-[#87879D]"}/>
        </div>
    );
}