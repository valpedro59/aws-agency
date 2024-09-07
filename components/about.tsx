import Image from "next/image";

const About = () => {
    return ( 
        <section className="w-full bg-blue-50  min-h-screen flex items-center">
            <div className="max-w-screen-xl mx-auto items-center space-y-8 p-11">
                <div className="flex flex-col gap-4" data-aos="fade-up">
                    <h4 className="text-zinc-600 text-center uppercase tracking-widest ">Nous Sommes</h4>
                    <h2 className="text-center text-4xl uppercase tracking-widest font-semibold">Une agence de marketing digital</h2>
                    <hr className="h-1 w-8 rounded-lg bg-white dark:bg-black mx-auto" />
                </div>
                <div>
                    {/* <div className="w-full flex flex-col gap-8 md:text-lg text-slate-500">
                        <div className="mx-auto">
                            <Image src='/team.jpg' width={500} height={600} alt="team" />
                        </div>
                        <div className="md:mr-auto md:w-[50%]">
                            <p>AWS est une équipe de conseillers en communication, de designers, de développeurs, de professionnels du référencement qui mettent tout en oeuvre pour faire de votre projet une réussite.</p>

                        </div>
                        <div className="md:ml-auto md:w-[50%]">
                            <p>En nous confiant votre projet, vous bénéficierez d&apos;un savoir-faire qui a permis à de nombreux professionnels (PME, TPE, artisans) de valoriser et de faire connaître leur entreprise sur Internet.</p>

                        </div>
                        <div className="mx-auto">
                            <Image src='/weare.png' width={500} height={600} alt="team" />
                        </div>
                        <div className="md:mr-auto md:w-[50%]">
                            <p>
                            Nous sommes conscients que vous avez le choix, c&apos;est pourquoi nous faisons tout pour anticiper dès aujourd&apos;hui vos attentes de demain.
                            </p>
                            
                        </div>
                        <div className="md:ml-auto md:w-[50%]">
                            <p>AWS, vous accompagne dans toutes les étapes de votre communication digitale et vous place au cœur de ses préoccupations</p>

                        </div>

                    </div> */}
                    <div className="text-center flex flex-col justify-center items-center gap-4" data-aos="fade-right">
                        <p>Notre équipe est composée de conseillers en communication, de designers, de développeurs, de professionnels du référencement qui mettent tout en oeuvre pour faire de votre projet une réussite.</p>
                        <p>
                        En nous confiant votre projet, vous bénéficierez d&apos;un savoir-faire qui a permis à de nombreux professionnels (PME, TPE, artisans) de valoriser et de faire connaître leur entreprise sur Internet.
                        </p>
                        <p>
                            Nous sommes conscients que vous avez le choix, c&apos;est pourquoi nous faisons tout pour anticiper dès aujourd&apos;hui vos attentes de demain.
                        </p>
                        <p>AWS, vous accompagne dans toutes les étapes de votre communication digitale et vous place au cœur de ses préoccupations</p>
                    </div>

                </div>
            </div>

        </section>
     );
}
 
export default About;