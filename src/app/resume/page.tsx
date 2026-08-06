import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Resume() {
    return (
        <main className="min-h-screen relative flex flex-col font-sans bg-[#FAF9F6] text-stone-900">
            <Navigation variant="solid" />

            <div className="flex-grow max-w-4xl mx-auto w-full px-6 pt-32 pb-24">
                {/* Header / Title Bar */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-stone-300 pb-8 gap-6">
                    <div>
                        <h1 className="font-serif text-4xl md:text-5xl font-bold text-stone-900 mb-2">Jason Ho</h1>
                        <p className="text-stone-600 text-base font-normal">
                            Ph.D. Candidate in Electrical & Computer Engineering, UT Austin
                        </p>
                        <div className="text-sm text-stone-500 flex flex-wrap gap-4 mt-2 font-mono">
                            <a href="mailto:jasonchekfungho@gmail.com" className="hover:text-stone-900 transition-colors">
                                jasonchekfungho@gmail.com
                            </a>
                            <span>·</span>
                            <span>(+1) 401-965-7728</span>
                        </div>
                    </div>
                    <a
                        href="/portfolio/CV_2025_2026.pdf"
                        target="_blank"
                        className="bg-stone-900 hover:bg-stone-800 text-white px-6 py-2.5 rounded-lg font-semibold text-xs uppercase tracking-wider transition-colors shadow-xs"
                    >
                        Download PDF CV
                    </a>
                </div>

                {/* Education Section */}
                <section id="education" className="mb-16">
                    <h2 className="font-serif text-2xl font-bold text-stone-900 border-b border-stone-300 pb-2 mb-6">
                        Education
                    </h2>

                    <div className="space-y-8">
                        <div>
                            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-1">
                                <h3 className="text-lg font-bold text-stone-900">University of Texas at Austin</h3>
                                <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">Aug 2022 – Present</span>
                            </div>
                            <div className="flex justify-between items-baseline text-stone-700 text-sm font-medium mb-2">
                                <span>Ph.D. Electrical and Computer Engineering (Computer Architecture)</span>
                                <span className="text-xs font-mono text-stone-500">GPA: 3.96</span>
                            </div>
                            <p className="text-stone-600 text-sm">
                                <strong className="text-stone-800 font-semibold">Thesis Topic:</strong> Design of Energy-Efficient Hybrid Analog/Digital Neuromorphic Architectures
                            </p>
                        </div>

                        <div>
                            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-1">
                                <h3 className="text-lg font-bold text-stone-900">University of Texas at Austin</h3>
                                <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">Aug 2022 – Dec 2024</span>
                            </div>
                            <div className="flex justify-between items-baseline text-stone-700 text-sm font-medium mb-2">
                                <span>M.S. Electrical and Computer Engineering (Computer Architecture)</span>
                                <span className="text-xs font-mono text-stone-500">GPA: 3.96</span>
                            </div>
                            <p className="text-stone-600 text-sm">
                                <strong className="text-stone-800 font-semibold">Coursework:</strong> Cross-Layer ML HW/SW Codesign, Parallel Computer Architecture, Prediction Mechanisms in Computer Architecture, ML for Computer Systems, Low Power Design
                            </p>
                        </div>

                        <div>
                            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-1">
                                <h3 className="text-lg font-bold text-stone-900">Brown University</h3>
                                <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">Sept 2018 – May 2022</span>
                            </div>
                            <div className="flex justify-between items-baseline text-stone-700 text-sm font-medium mb-2">
                                <span>Sc.B. Computer Engineering with Honors</span>
                                <span className="text-xs font-mono text-stone-500">GPA: 3.96</span>
                            </div>
                            <p className="text-stone-600 text-sm mb-1">
                                <strong className="text-stone-800 font-semibold">Thesis:</strong> Tools for Understanding the Computational Behaviors of Biofilms
                            </p>
                            <p className="text-stone-600 text-xs">
                                <strong className="text-stone-800 font-semibold">Coursework:</strong> VLSI Design, Digital Signal Processing, Operating Systems
                            </p>
                        </div>
                    </div>
                </section>

                {/* Research Experience */}
                <section id="research" className="mb-16">
                    <h2 className="font-serif text-2xl font-bold text-stone-900 border-b border-stone-300 pb-2 mb-6">
                        Research Experience
                    </h2>

                    <div className="space-y-10">
                        <div>
                            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-1">
                                <h3 className="text-lg font-bold text-stone-900">Graduate Researcher, SLAM Lab — UT Austin</h3>
                                <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">Aug 2022 – Present</span>
                            </div>
                            <p className="text-xs text-stone-500 font-medium mb-3">Advisor: Prof. Andreas Gerstlauer</p>
                            <ul className="list-disc ml-5 text-stone-700 text-sm space-y-2 leading-relaxed">
                                <li>Researching co-design of hybrid analog/digital neuromorphic computing systems combining analog energy efficiency with digital backend scalability.</li>
                                <li>Developed machine learning surrogate models for analog circuits, achieving 3 orders of magnitude simulation speedup over SPICE while keeping energy, latency, and behavior error below 7%, 8%, and 2%.</li>
                                <li>Investigating device-level tradeoffs (e.g. RRAMs) in hybrid neuromorphic architectures for spiking neural network acceleration.</li>
                            </ul>
                        </div>

                        <div>
                            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-1">
                                <h3 className="text-lg font-bold text-stone-900">Undergraduate Researcher, SCALE Lab — Brown University</h3>
                                <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">Jan 2021 – Jun 2022</span>
                            </div>
                            <p className="text-xs text-stone-500 font-medium mb-3">Advisors: Prof. Sherief Reda, Prof. Jacob Rosenstein</p>
                            <ul className="list-disc ml-5 text-stone-700 text-sm space-y-2 leading-relaxed">
                                <li>Modeled bacterial biofilm coupling interactions as Kuramoto oscillators to investigate non-conventional oscillatory computing systems.</li>
                                <li>Developed super-resolution techniques for impedance tomography on a custom imaging and stimulation platform.</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Publications */}
                <section id="publications" className="mb-16">
                    <h2 className="font-serif text-2xl font-bold text-stone-900 border-b border-stone-300 pb-2 mb-6">
                        Publications
                    </h2>
                    <ol className="list-decimal ml-5 space-y-4 text-stone-700 text-sm leading-relaxed">
                        <li>
                            <strong className="text-stone-900">J. Ho</strong>, E. Atayeter, T. Blottin, I. Joe, R. Sistrunk, B. Zhang, L. Solnica-Krezel, A. Gerstlauer, J. Wallingford, R. Gray, &quot;Cilia.io: Computer vision and machine learning reveal spatial patterns of cilia beating dynamics in the spinal cord,&quot; <em>Cell Reports Methods</em>, 2026. (in review)
                        </li>
                        <li>
                            J. Boyle, <strong className="text-stone-900">J. Ho</strong>, A. Aalund, Z. Houlton, A. Iman, I. Gonzalez, K. Jha, L. Lui, P. Shroff, R. Sam, S. Cardwell, F. Chance, A. Gerstlauer, &quot;Bridging the Gap in Neuromorphic Co-Design with the SANA-FE Co-Simulation Framework,&quot; <em>IEEE Computer Special Issue: Convergence in Neuromorphic Systems</em>, 2026. (in review)
                        </li>
                        <li>
                            <strong className="text-stone-900">J. Ho</strong>, J. Boyle, L. Liu, A. Gerstlauer, &quot;LASANA: Large-Scale Analog Surrogate Modeling for Neuromorphic Architecture Exploration,&quot; <em>International Symposium on Machine Learning for Computer-Aided Design (MLCAD)</em>, 2025.
                        </li>
                        <li>
                            J. Boyle, <strong className="text-stone-900">J. Ho</strong>, M. Plagge, S. Cardwell, F. Chance, A. Gerstlauer, &quot;Exploring Dendrites in Large-Scale Neuromorphic Architectures,&quot; <em>International Conference for Neuromorphic Systems (ICONS)</em>, 2025.
                        </li>
                        <li>
                            K. Hu, <strong className="text-stone-900">J. Ho</strong>, J. K. Rosenstein, &quot;Super-Resolution Electrochemical Impedance Imaging with a 512 x 256 CMOS Sensor Array,&quot; <em>IEEE Transactions on Biomedical Circuits and Systems (TBioCAS)</em>, 2022.
                        </li>
                    </ol>
                </section>

                {/* Invited Talks & Posters */}
                <section id="talks-posters" className="mb-16">
                    <h2 className="font-serif text-2xl font-bold text-stone-900 border-b border-stone-300 pb-2 mb-6">
                        Talks & Posters
                    </h2>
                    
                    <div className="mb-6">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-500 mb-3">Invited Talks</h3>
                        <ul className="list-disc ml-5 text-stone-700 text-sm space-y-2">
                            <li>
                                &quot;LASANA: Large-Scale Analog Surrogate Modeling for Neuromorphic Architecture Exploration,&quot; Qualcomm Internal Ph.D. Talk, July 2025.
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-500 mb-3">Poster Presentations</h3>
                        <ul className="list-disc ml-5 text-stone-700 text-sm space-y-2">
                            <li>&quot;LASANA: Large-Scale Analog Surrogate Modeling,&quot; 6G @ UT Symposium, Austin, TX, Nov 2025.</li>
                            <li>&quot;LASANA: Large-Scale Analog Surrogate Modeling,&quot; iMAGiNE Consortium Poster Session, Austin, TX, Apr 2025.</li>
                            <li>&quot;LASANA: Large-Scale Analog Surrogate Modeling,&quot; AMD Poster Session, Austin, TX, Nov 2024.</li>
                            <li>&quot;LASGNA: Large-Scale Analog Surrogate Modeling,&quot; MLCAD 2024, Snowbird, UT, Sept 2024.</li>
                        </ul>
                    </div>
                </section>

                {/* Engineering Experience */}
                <section id="engineering" className="mb-16">
                    <h2 className="font-serif text-2xl font-bold text-stone-900 border-b border-stone-300 pb-2 mb-6">
                        Engineering Experience
                    </h2>

                    <div className="space-y-8">
                        <div>
                            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-1">
                                <h3 className="text-lg font-bold text-stone-900">GPU Power Architect Intern — NVIDIA</h3>
                                <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">May 2026 – Sept 2026</span>
                            </div>
                            <p className="text-stone-600 text-sm italic">Upcoming internship.</p>
                        </div>

                        <div>
                            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-1">
                                <h3 className="text-lg font-bold text-stone-900">CPU Power Characterization & Modeling Intern — Qualcomm</h3>
                                <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">Jun 2025 – Aug 2025</span>
                            </div>
                            <ul className="list-disc ml-5 text-stone-700 text-sm space-y-1">
                                <li>Characterized and modeled energy efficiency of PMIC trees in future Oryon CPUs for mobile and laptop targets.</li>
                            </ul>
                        </div>

                        <div>
                            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-1">
                                <h3 className="text-lg font-bold text-stone-900">Power & Performance Lead / Architect Intern — AMD</h3>
                                <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">May 2023 – Aug 2023</span>
                            </div>
                            <ul className="list-disc ml-5 text-stone-700 text-sm space-y-1">
                                <li>Characterized power/performance on APU + discrete GPU platforms focused on dynamic power allocation algorithms.</li>
                                <li>Built internal analysis tool linking Power BI and databases to automate log analysis (100x speedup).</li>
                            </ul>
                        </div>

                        <div>
                            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-1">
                                <h3 className="text-lg font-bold text-stone-900">VLSI Design & Verification Intern — Seagate Technology</h3>
                                <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">May 2021 – Aug 2022</span>
                            </div>
                            <ul className="list-disc ml-5 text-stone-700 text-sm space-y-1">
                                <li>Led verification environment transition from VMM to UVM and authored firmware initialization code.</li>
                                <li>Designed and optimized RTL block to increase ECC correction throughput in hard drive read pipelines.</li>
                            </ul>
                        </div>

                        <div>
                            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-1">
                                <h3 className="text-lg font-bold text-stone-900">FPGA Engineering Intern — Nabsys</h3>
                                <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">Jun 2020 – Sept 2020</span>
                            </div>
                            <ul className="list-disc ml-5 text-stone-700 text-sm space-y-1">
                                <li>Developed parallel signal processing state machines on Xilinx FPGAs for DNA sequencing (2x slice reduction, 16x throughput).</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Awards & Service */}
                <section id="awards-service" className="mb-16">
                    <h2 className="font-serif text-2xl font-bold text-stone-900 border-b border-stone-300 pb-2 mb-6">
                        Honors & Service
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-500 mb-3">Honors & Awards</h3>
                            <ul className="space-y-2 text-stone-700 text-sm">
                                <li><strong className="text-stone-900">NSF GRFP Honorable Mention</strong> (2024, 2022)</li>
                                <li><strong className="text-stone-900">Cockrell School Fellowship</strong>, UT Austin (2022 – Present)</li>
                                <li><strong className="text-stone-900">Graduate Excellence Fellow</strong>, UT Austin (2022 – Present)</li>
                                <li><strong className="text-stone-900">Sigma Xi & Tau Beta Pi Honor Societies</strong> (2021, 2022)</li>
                                <li><strong className="text-stone-900">Best Use of Google Cloud</strong>, Hack @ Brown (2020)</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-500 mb-3">Service & Mentorship</h3>
                            <ul className="space-y-2 text-stone-700 text-sm">
                                <li><strong className="text-stone-900">ABET External Advisory Board</strong>, Brown University (2025)</li>
                                <li><strong className="text-stone-900">ECE Graduate Peer Mentor</strong>, UT Austin (2023 – Present)</li>
                                <li><strong className="text-stone-900">ECE Representative</strong>, UT Austin GSA (2023 – 2024)</li>
                                <li><strong className="text-stone-900">Head TA</strong>, Design of Computing Systems (RISC-V/FPGA)</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </main>
    );
}
