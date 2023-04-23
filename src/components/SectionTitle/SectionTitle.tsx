type Props = {
    title: string;
};

export function SectionTitle({ title }: Props) {
    return (
        <h2 className={"text-4xl md:text-6xl font-black text-center leading-[2.75rem] mx-2"}>{title}</h2>
    );
}