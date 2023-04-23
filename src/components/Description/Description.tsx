type Props = {
    text: string;
};

export function Description({ text }: Props) {
    return (
        <div className={"text-gray font-medium px-6 text-center leading-[1.625rem]"}>{text}</div>
    );
}
