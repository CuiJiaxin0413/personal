import MotionDiv from "@/components/motion-div";

export default function about() {
    return (
        <section
            id="about"
            className="mx-auto my-16 flex flex-col items-center justify-center gap-4 px-2 md:my-20  md:max-w-full lg:flex-row lg:items-start lg:gap-16"
        >
            <div className="order-2 lg:order-1 lg:w-2/3">
                <MotionDiv delayOffset={0.2}>
                    <h2 className="mb-3 w-full text-center md:mb-6">About Me</h2>
                </MotionDiv>
                <article className="flex flex-col gap-4">
                    <MotionDiv delayOffset={0.4}>
                        <p>
                            Hello 👋, I'm Jiaxin (Jacey) Cui.
                            <span className="whitespace-nowrap"> </span>
                            I'm a full-stack developer from Dalian, China.
                            Now I live in the United States.
                            I graduated from Duke University with a Master of Engineering degree in Electrical and Computer Engineering, specializing in Software Engineering.
                            Prior to this, I earned my undergraduate degree from Dalian University of Technology, majoring in Management Information Systems.
                        </p>
                    </MotionDiv>
                    <MotionDiv delayOffset={0.5}>
                        <p>
                            This is my fifth year studying programming and computer science 👩🏻‍💻.
                            I have always been passionate about hands-on software engineering,
                            implementing my own ideas, and creating applications that can improve
                            or assist human lives. At the same time,
                            I thoroughly enjoy collaborating and supporting each other in a team,
                            discussing more elegant code architectures and design patterns.
                            This has always been something I love!

                        </p>
                    </MotionDiv>
                    <MotionDiv delayOffset={0.6}>
                        <p>

                            Outside of programming, my hobbies include music and studying foreign languages and linguistics 📚.
                            I am an amateur pianist 🎹. Recently, I have been learning music theory and improvisational accompaniment,
                            and I hope to one day rearrange some of my favorite songs and do some creative composition.
                            I speak some Japanese (daily conversation level).
                            My dream is to someday combine all these things I love into some really cool work!
                        </p>
                    </MotionDiv>
                </article>
            </div>
            <div className="lg:order-2 lg:w-1/3">
                <MotionDiv delayOffset={0.4}>
                    <img
                        src="/photo.JPG"
                        alt="photo"
                        className="w-[350px] min-w-[300px] rounded-xl transition-all hover:rotate-3 hover:scale-105"
                    />
                </MotionDiv>
            </div>
        </section>
    );
}
