import Image from "next/image";
import { SectionTitle } from "@/components/SectionTitle/SectionTitle";
import { Description } from "@/components/Description/Description";
import { Circle } from "@/components/Circle/Circle";

export default function Home() {
    return (
        <main className={"flex flex-col items-center"}>
            <div className="flex justify-center">
                <Image className={"pt-12 pb-16 md:pt-20"} src={"/images/logo.svg"} width={128} height={28}
                       alt={"Logo"}/>
            </div>

            <div className="flex w-full h-[9.563rem] md:h-[18.938rem] gap-4">
                <div
                    className={"xl:hidden image relative bg-[url('/tablet/image-hero.png')] bg-[length:25.875rem] md:bg-contain bg-center bg-no-repeat"}/>
            </div>

            <div className={"flex md:h-[22.375rem] relative w-full justify-center"}>
                <div
                    className={"hidden xl:block image relative bg-[url('/desktop/image-hero-left.png')] bg-contain bg-left bg-no-repeat left-[-3rem]"}/>

                <div className={"flex flex-col gap-6 items-center"}>
                    <div className="px-16 pt-12 md:pt-0 md:mt-[2.75rem] max-w-[27.813rem] md:px-0">
                        <SectionTitle title={"Group Chat for Everyone"}/>
                    </div>

                    <div className="md:max-w-[33.75rem]">
                        <Description
                            text={"Meet makes it easy to connect with others face-to-face virtually and collaborate across any device."}/>
                    </div>

                    <div className={"flex flex-col md:flex-row mt-8 md:mt-0 gap-4"}>
                        <button
                            className="rounded-3xl bg-green hover:bg-hoverGreen py-4 px-10 text-white font-black flex gap-1">
                            <div>Download</div>
                            <div className={"text-lightGreen"}>v1.3</div>
                        </button>

                        <button className="rounded-3xl bg-purple hover:bg-hoverPurple py-4 px-7 text-white font-black">
                            <div>What is it?</div>
                        </button>
                    </div>
                </div>

                <div
                    className={"hidden xl:block image relative bg-[url('/desktop/image-hero-right.png')] bg-contain bg-right bg-no-repeat right-[-3rem]"}/>
            </div>

            <Circle title={"01"}/>

            <div
                className={"grid grid-cols-2 md:grid-cols-4 md:grid-rows-1 gap-8 md:gap-3 xl:gap-8 grid-rows-2 min-h-[19.375rem] xl:min-h-[15.125rem] max-w-[43rem] xl:max-w-[69.375rem] md:min-h-0 w-full px-6 md:px-0 mt-16 h-[9.75rem]"}>
                <div className={"relative md:max-w-[10.25rem] xl:max-w-[15.938rem]"}>
                    <Image className={"rounded-2xl"} src={"/desktop/image-woman-in-videocall.jpg"} fill alt={"Image"}/>
                </div>
                <div className={"relative md:max-w-[10.25rem] xl:max-w-[15.938rem]"}>
                    <Image className={"rounded-2xl"} src={"/desktop/image-women-videochatting.jpg"} fill alt={"Image"}/>
                </div>
                <div className={"relative md:max-w-[10.25rem] xl:max-w-[15.938rem]"}>
                    <Image className={"rounded-2xl"} src={"/desktop/image-men-in-meeting.jpg"} fill alt={"Image"}/>
                </div>
                <div className={"relative md:max-w-[10.25rem] xl:max-w-[15.938rem]"}>
                    <Image className={"rounded-2xl"} src={"/desktop/image-man-texting.jpg"} fill alt={"Image"}/>
                </div>
            </div>

            <div className={"max-w-[33.75rem] flex flex-col items-center"}>
                <div className={"text-green font-black tracking-[0.25rem] leading-[1.625rem] mt-16"}>
                    Built for modern use
                </div>

                <div className="p-6 mt-4">
                    <h2 className={"text-4xl px-12 font-black text-center leading-[2.75rem]"}>Smarter meetings, all in
                        one
                        place</h2>
                </div>

                <div className={"mt-8"}>
                    <div className={"text-gray font-medium px-6 text-center leading-[1.625rem] text-[1.125rem]"}>Send
                        messages, share
                        files, show your screen, and record your meetings — all in one workspace. Control who can join
                        with invite-only team access, data encryption, and data export.
                    </div>
                </div>
            </div>

            <footer
                className={`text-darkWhite h-[26.75rem] relative w-full bg-[url('/mobile/image-footer.jpg')] md:bg-[url('/tablet/image-footer.jpg')]
                xl::bg-[url('/desktop/image-footer.jpg')] bg-cover bg-center bg-no-repeat mt-36 flex flex-col md:flex-row justify-between md:px-40 items-center pb-20 pt-24 gap-6`}>
                <div className="layer"/>
                <div
                    className={"z-10 rounded-full text-gray font-black leading-[1.625rem] border h-[3.5rem] w-[3.5rem] flex items-center justify-center absolute top-[-28px] circle bg-white"}>
                    <div>02</div>
                    <div className={"absolute h-[5.25rem] border top-[-5.22rem] border-[#87879D]"}/>
                </div>

                <h2 className={"z-10 text-3xl md:text-4xl font-black px-6 text-center max-w-[21.875rem] md:text-start"}>Experience more together</h2>

                <div className={"z-10 text-lg md:text-[1.125rem] leading-[1.625rem] font-medium px-6 text-center max-w-[21.875rem] md:text-start"}>Stay connected with
                    reliable HD meetings and unlimited one-on-one and group video sessions.
                </div>

                <button className="z-10 rounded-3xl bg-purple hover:bg-hoverPurple  py-4 px-10 text-white font-black flex gap-1 mt-2">
                    <div>Download</div>
                    <div className={"text-lightPurple"}>v1.3</div>
                </button>
            </footer>
        </main>
    );
}
