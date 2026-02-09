import Navigation from "@/components/Navigation";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Resume() {
    return (
        <main className="min-h-screen relative flex flex-col font-serif">
            <Navigation variant="solid" />

            <div className="flex-grow container mx-auto px-6 max-w-5xl py-32 animate-fade-in-up">
                <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 border-b-2 border-stone-200 pb-8 gap-6 text-center md:text-left">
                    <div>
                        <h1 className="text-5xl md:text-6xl font-bold text-stone-900 mb-4">Jason Ho</h1>
                        <div className="text-lg text-stone-600 flex flex-col gap-1 font-medium">
                            <a href="mailto:jasonchekfungho@gmail.com" className="hover:text-stone-900 transition-colors">jasonchekfungho@gmail.com</a>
                            <a href="tel:+14019657728" className="hover:text-stone-900 transition-colors">(+1) 401-965-7728</a>
                        </div>
                    </div>
                    <a
                        href="/portfolio/CV_2025_2026.pdf"
                        target="_blank"
                        className="bg-stone-900 text-stone-100 px-8 py-3 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-stone-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                    >
                        Download PDF
                    </a>
                </div>

                {/* Education Section */}
                <section id="education" className="mb-20">
                    <h2 className="text-2xl font-bold mb-8 text-stone-800 border-l-4 border-stone-400 pl-4">Education</h2>

                    <div className="space-y-10">
                        <div className="group">
                            <div className="flex flex-col md:flex-row justify-between md:items-center mb-2">
                                <div>
                                    <h3 className="text-xl font-bold text-stone-900 group-hover:text-stone-900 transition-colors">University of Texas, Austin</h3>
                                    <p className="text-lg text-stone-700">Ph.D. Electrical and Computer Engineering in Computer Architecture</p>
                                </div>
                                <div className="text-right">
                                    <span className="block text-stone-500 font-bold uppercase text-sm tracking-wider">Aug 2022 - Present</span>
                                    <span className="text-stone-600 font-semibold">GPA: 3.96</span>
                                </div>
                            </div>
                            <p className="text-stone-600 mt-2"><span className="font-semibold text-stone-800">Thesis Topic:</span> Design of Energy-Efficient Hybrid Analog/Digital Neuromorphic Architectures</p>
                        </div>

                        <div className="group">
                            <div className="flex flex-col md:flex-row justify-between md:items-center mb-2">
                                <div>
                                    <h3 className="text-xl font-bold text-stone-900 group-hover:text-stone-900 transition-colors">University of Texas, Austin</h3>
                                    <p className="text-lg text-stone-700">M.S. Electrical and Computer Engineering in Computer Architecture</p>
                                </div>
                                <div className="text-right">
                                    <span className="block text-stone-500 font-bold uppercase text-sm tracking-wider">Aug 2022 - Dec 2024</span>
                                    <span className="text-stone-600 font-semibold">GPA: 3.96</span>
                                </div>
                            </div>
                            <p className="text-stone-600 mt-2 text-sm leading-relaxed">
                                <span className="font-semibold text-stone-800">Relevant Coursework:</span> Cross-Layer ML HW/SW Codesign, Parallel Computer Architecture, Prediction Mechanisms in Computer Architecture, ML for Computer Systems, Low Power Design
                            </p>
                        </div>

                        <div className="group">
                            <div className="flex flex-col md:flex-row justify-between md:items-center mb-2">
                                <div>
                                    <h3 className="text-xl font-bold text-stone-900 group-hover:text-stone-900 transition-colors">Brown University</h3>
                                    <p className="text-lg text-stone-700">Sc.B. Computer Engineering with Honors</p>
                                </div>
                                <div className="text-right">
                                    <span className="block text-stone-500 font-bold uppercase text-sm tracking-wider">Sept 2018 - May 2022</span>
                                    <span className="text-stone-600 font-semibold">GPA: 3.96</span>
                                </div>
                            </div>
                            <p className="text-stone-600 mt-2 mb-1"><span className="font-semibold text-stone-800">Thesis:</span> Tools for Understanding the Computational Behaviors of Biofilms</p>
                            <p className="text-stone-600 text-sm"><span className="font-semibold text-stone-800">Relevant Coursework:</span> VLSI Design, Digital Signal Processing, Operating Systems</p>
                        </div>
                    </div>
                </section>

                {/* Research Experience */}
                <section id="research" className="mb-20">
                    <h2 className="text-2xl font-bold mb-8 text-stone-800 border-l-4 border-stone-400 pl-4">Research Experience</h2>

                    <div className="space-y-12">
                        <div className="group">
                            <div className="flex flex-col md:flex-row justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-stone-900">Graduate Researcher, SLAM Lab, UT Austin</h3>
                                    <p className="text-stone-600">Advisor: Professor Andreas Gerstlauer</p>
                                </div>
                                <span className="text-stone-500 font-bold uppercase text-sm tracking-wider">Aug 2022 - Present</span>
                            </div>
                            <ul className="list-disc ml-5 text-stone-700 space-y-3 leading-relaxed">
                                <li>Researching the co-design of hybrid analog/digital neuromorphic (brain-like) computing systems that combine the efficiency of analog computing with the scalability of a digital backend</li>
                                <li>Investigating the use of machine learning to create surrogate models of analog circuits, resulting in 3 orders of magnitude simulation speedup over SPICE with energy, latency and behavior estimation under 7%, 8%, and 2%, respectively</li>
                                <li>Researching tradeoffs of novel devices such as RRAMs in hybrid neuromorphic architectures for spiking neural network acceleration</li>
                            </ul>
                        </div>

                        <div className="group">
                            <div className="flex flex-col md:flex-row justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-stone-900">Undergraduate Researcher, SCALE Lab, Brown University</h3>
                                    <p className="text-stone-600">Advisor: Professor Sherief Reda and Professor Jacob Rosenstein</p>
                                </div>
                                <span className="text-stone-500 font-bold uppercase text-sm tracking-wider">Jan 2021 - Jun 2022</span>
                            </div>
                            <ul className="list-disc ml-5 text-stone-700 space-y-3 leading-relaxed">
                                <li>Modeled bacterial biofilm coupling interactions as Kuramoto oscillators to investigate non-conventional oscillatory computing systems</li>
                                <li>Developed super-resolution techniques for impedance tomography on a custom imaging and stimulation platform for oscillatory computing system exploration</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Publications */}
                <section id="publications" className="mb-20">
                    <h2 className="text-2xl font-bold mb-8 text-stone-800 border-l-4 border-stone-400 pl-4">Publications</h2>
                    <ul className="space-y-6 text-stone-700 leading-relaxed">
                        <li>
                            <span className="font-bold text-stone-900">J. Ho</span>, E. Atayeter, T. Blottin, I. Joe, R. Sistrunk, B. Zhang, L. Solnica-Krezel, A. Gerstlauer, J. Wallingford, R. Gray, &quot;Cilia.io: Computer vision and machine learning reveal spatial patterns of cilia beating dynamics in the spinal cord&quot;, in Cell Reports Methods, 2026. (in review)
                        </li>
                        <li>
                            J. Boyle, <span className="font-bold text-stone-900">J. Ho</span>, A. Aalund, Z. Houlton, A. Iman, I. Gonzalez, K. Jha, L. Lui, P. Shroff, R. Sam, S. Cardwell, F. Chance, A. Gerstlauer, &quot;Bridging the Gap in Neuromorphic Co-Design with the SANA-FE Co-Simulation Framework&quot;, in IEEE Computer Special Issue: Convergence in Neuromorphic Sysgtems: From Circuit Innovation to Adaptive Cognition, 2026. (in review)
                        </li>
                        <li>
                            <span className="font-bold text-stone-900">J. Ho</span>, J. Boyle, L. Liu, A. Gerstlauer, &quot;LASANA: Large-Scale Analog Surrogate Modeling for Neuromorphic Architecture Exploration&quot;, in International Symposium on Machine Learning for Computer-Aided Design (MLCAD), 2025.
                        </li>
                        <li>
                            J. Boyle, <span className="font-bold text-stone-900">J. Ho</span>, M. Plagge, S. Cardwell, F. Chance, A. Gerstlauer, “Exploring Dendrites in Large-Scale Neuromorphic Architectures,” in International Conference for Neuromorphic Systems. (ICONS), 2025.
                        </li>
                        <li>
                            K. Hu, <span className="font-bold text-stone-900">J. Ho</span> and J. K. Rosenstein, &quot;Super-Resolution Electrochemical Impedance Imaging with a 512 x 256 CMOS Sensor Array,&quot; in IEEE Transactions on Biomedical Circuits and Systems (TBioCAS), 2022, doi: 10.1109/TBCAS.2022.3183856.
                        </li>
                    </ul>
                </section>

                {/* Verified Invited Talks */}
                <section id="talks" className="mb-20">
                    <h2 className="text-2xl font-bold mb-8 text-stone-800 border-l-4 border-stone-400 pl-4">Invited Talks</h2>
                    <ul className="space-y-4 text-stone-700">
                        <li>
                            &quot;LASANA: Large-Scale Analog Surrogate Modeling for Neuromorphic Architecture Exploration&quot;, Qualcomm Internal Ph.D. Talk, July 2025.
                        </li>
                    </ul>
                </section>

                {/* Poster Presentations */}
                <section id="posters" className="mb-20">
                    <h2 className="text-2xl font-bold mb-8 text-stone-800 border-l-4 border-stone-400 pl-4">Poster Presentations</h2>
                    <ul className="space-y-4 text-stone-700">
                        <li>
                            ``LASANA: Large-Scale Analog Surrogate Modeling for Neuromorphic Architecture Exploration&quot;, 6G @ UT Symposium, Austin, Texas, November 2025.
                        </li>
                        <li>
                            ``LASANA: Large-Scale Analog Surrogate Modeling for Neuromorphic Architecture Exploration&quot;, iMAGiNE Consortium Student Poster Session, Austin, Texas, April 2025.
                        </li>
                        <li>
                            ``LASANA: Large-Scale Analog Surrogate Modeling for Neuromorphic Architecture Exploration&quot;, AMD Poster Session, Austin, Texas, November 2024.
                        </li>
                        <li>
                            ``LASGNA: Large-Scale Analog Surrogate Modeling for General Neuromorphic Architectures&quot;, MLCAD 2024, Snowbird Utah, September 2024.
                        </li>
                    </ul>
                </section>

                {/* Engineering Experience */}
                <section id="engineering" className="mb-20">
                    <h2 className="text-2xl font-bold mb-8 text-stone-800 border-l-4 border-stone-400 pl-4">Engineering Experience</h2>

                    <div className="space-y-12">
                        <div className="group">
                            <div className="flex flex-col md:flex-row justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-stone-900">GPU Power Architect Intern, Nvidia</h3>
                                </div>
                                <span className="text-stone-500 font-bold uppercase text-sm tracking-wider">May 2026 - Sept 2026</span>
                            </div>
                            <ul className="list-disc ml-5 text-stone-700 space-y-2">
                                <li><i>Upcoming</i></li>
                            </ul>
                        </div>

                        <div className="group">
                            <div className="flex flex-col md:flex-row justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-stone-900">CPU Power Characterization and Modeling Intern, Qualcomm</h3>
                                </div>
                                <span className="text-stone-500 font-bold uppercase text-sm tracking-wider">Jun 2025 - Aug 2025</span>
                            </div>
                            <ul className="list-disc ml-5 text-stone-700 space-y-2">
                                <li>Characterized and modeled energy efficiency of the power management IC tree in future Oryon CPUs targeted for mobile and laptop applications</li>
                            </ul>
                        </div>

                        <div className="group">
                            <div className="flex flex-col md:flex-row justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-stone-900">Power and Performance Lead / Architect Intern, AMD</h3>
                                </div>
                                <span className="text-stone-500 font-bold uppercase text-sm tracking-wider">May 2023 - Aug 2023</span>
                            </div>
                            <ul className="list-disc ml-5 text-stone-700 space-y-2">
                                <li>Characterized power and performance on future APU plus discrete GPU platforms focused on power allocation algorithms between the APU and GPU on GPU-bound benchmarks</li>
                                <li>Owned and deployed an internal data analysis tool that linked Power BI and internal databases to automate multi-phasic statistical analysis of benchmark logs, providing a 100x speedup from previous methods</li>
                                <li>Maintained, built and ran benchmarks on 8 separate systems for power and performance characterization</li>
                            </ul>
                        </div>

                        <div className="group">
                            <div className="flex flex-col md:flex-row justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-stone-900">VLSI Read Channel Design and Verification Intern, Seagate Technology</h3>
                                </div>
                                <span className="text-stone-500 font-bold uppercase text-sm tracking-wider">June 2022 - Aug 2022</span>
                            </div>
                            <ul className="list-disc ml-5 text-stone-700 space-y-2">
                                <li>Lead verification transition for the team from VMM to UVM environment while reusing as much code as possible</li>
                                <li>Developed firmware initialization and configuration code for read channel UVM environment with functionality for large-scale read channel testbenches</li>
                            </ul>
                        </div>

                        <div className="group">
                            <div className="flex flex-col md:flex-row justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-stone-900">VLSI Design and Verification Engineering Intern, Seagate Technology</h3>
                                </div>
                                <span className="text-stone-500 font-bold uppercase text-sm tracking-wider">May 2021 - Aug 2021</span>
                            </div>
                            <ul className="list-disc ml-5 text-stone-700 space-y-2">
                                <li>Designed and optimized RTL block to increase ECC correction throughput in the hard drive read pipeline</li>
                                <li>Developed VMM infrastructure to verify the new RTL block robustly</li>
                            </ul>
                        </div>

                        <div className="group">
                            <div className="flex flex-col md:flex-row justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-stone-900">FPGA Engineering Intern, Nabsys</h3>
                                </div>
                                <span className="text-stone-500 font-bold uppercase text-sm tracking-wider">Jun 2020 - Sept 2020</span>
                            </div>
                            <ul className="list-disc ml-5 text-stone-700 space-y-2">
                                <li>Developed parallel signal processing algorithms and state machines on Xilinx FPGAs for analysis of tagged DNA for whole genome sequencing</li>
                                <li>Optimized FPGA design to reduce slices by 2x, while increasing throughput by 16x to process streaming of 128 nanopore sensors</li>
                            </ul>
                        </div>

                        <div className="group">
                            <div className="flex flex-col md:flex-row justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-stone-900">Security Engineering Intern, Brown OIT</h3>
                                </div>
                                <span className="text-stone-500 font-bold uppercase text-sm tracking-wider">Apr 2019 - Sept 2019</span>
                            </div>
                            <ul className="list-disc ml-5 text-stone-700 space-y-2">
                                <li>Designed Copyright infringement scripts in Python that parsed DMCA emails, searched firewall logs, and verified infringement on University firewall traffic, saving non-technical staff over 3 hours of time per case or speedup of 30x</li>
                                <li>Queried SQL databases to aggregate Crowdstrike data with firewall permit-deny traffic on real-time dashboards to display malicious traffic by optimizing firewall parsing by 20 times using regex</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Teaching and Mentoring */}
                <section id="teaching" className="mb-20">
                    <h2 className="text-2xl font-bold mb-8 text-stone-800 border-l-4 border-stone-400 pl-4">Teaching and Mentoring Experience</h2>
                    <div className="space-y-10">
                        <div className="group">
                            <div className="flex justify-between mb-2">
                                <h3 className="text-xl font-bold text-stone-900">ECE Graduate Peer Mentor, UT Austin</h3>
                                <span className="text-stone-500 font-bold uppercase text-sm tracking-wider">Aug 2023 - Present</span>
                            </div>
                            <ul className="list-disc ml-5 text-stone-700">
                                <li>Mentor group of 6-8 first-year Electrical and Computer Engineering graduate students through the transition to UT Austin</li>
                            </ul>
                        </div>

                        <div className="group">
                            <div className="flex justify-between mb-2">
                                <h3 className="text-xl font-bold text-stone-900">Master's Student Mentor, UT Austin</h3>
                                <span className="text-stone-500 font-bold uppercase text-sm tracking-wider">Aug 2023 - Jun 2025</span>
                            </div>
                            <ul className="list-disc ml-5 text-stone-700">
                                <li>Mentored master's student interested in pursuing a Ph.D. in computer architecture; Now pursuing a Ph.D. at Johns Hopkins University</li>
                            </ul>
                        </div>

                        <div className="group">
                            <div className="flex justify-between mb-2">
                                <h3 className="text-xl font-bold text-stone-900">EEMP Mentor, Science Mentorship Institute</h3>
                                <span className="text-stone-500 font-bold uppercase text-sm tracking-wider">Feb 2024 - Aug 2024</span>
                            </div>
                            <ul className="list-disc ml-5 text-stone-700">
                                <li>Mentor for two high school students interested in research, which culminated in a literature-review-based poster session</li>
                            </ul>
                        </div>

                        <div className="group">
                            <div className="flex justify-between mb-2">
                                <h3 className="text-xl font-bold text-stone-900">Head Teaching Assistant, ENGN 1640: Design of Computing Systems</h3>
                                <span className="text-stone-500 font-bold uppercase text-sm tracking-wider">Jan 2022 - May 2022</span>
                            </div>
                            <ul className="list-disc ml-5 text-stone-700">
                                <li>Ran office hours twice a week in the computing lab to help students build RISC-V processors on Altera FPGA boards</li>
                                <li>Held conceptual hours for students and helped guide students toward designs optimized to minimize logic, or speed</li>
                            </ul>
                        </div>

                        <div className="group">
                            <div className="flex justify-between mb-2">
                                <h3 className="text-xl font-bold text-stone-900">Teaching Assistant, ENGN 1580: Communication Systems</h3>
                                <span className="text-stone-500 font-bold uppercase text-sm tracking-wider">Jan 2022 - May 2022</span>
                            </div>
                            <ul className="list-disc ml-5 text-stone-700">
                                <li>Designed a final project for students to emulate communication across a physical channel amid noise and crosstalk on the channel.</li>
                                <li>Held conceptual hours for students to further their understanding beyond the classroom</li>
                            </ul>
                        </div>

                        <div className="group">
                            <div className="flex justify-between mb-2">
                                <h3 className="text-xl font-bold text-stone-900">Head Teaching Assistant, CSCI 1600: Real-Time and Embedded Software</h3>
                                <span className="text-stone-500 font-bold uppercase text-sm tracking-wider">Sept 2021 - Dec 2021</span>
                            </div>
                            <ul className="list-disc ml-5 text-stone-700">
                                <li>Lead two lab sessions a week, teaching students Arduino and breadboarding on topics such as timers, interrupts, real-time operating systems, and sensors</li>
                                <li>Held conceptual hours once a week for any students to come to as well</li>
                                <li>Guided and provided advice to students for their final design projects</li>
                            </ul>
                        </div>

                        <div className="group">
                            <div className="flex justify-between mb-2">
                                <h3 className="text-xl font-bold text-stone-900">Mentor, MAPS (Matched Advising Program for Sophomores)</h3>
                                <span className="text-stone-500 font-bold uppercase text-sm tracking-wider">Jan 2021 - May 2022</span>
                            </div>
                            <ul className="list-disc ml-5 text-stone-700">
                                <li>Advised mentees interested in concentrating in Computer Engineering, Computer Science, or related fields on classes, research, and internship opportunities</li>
                            </ul>
                        </div>

                        <div className="group">
                            <div className="flex justify-between mb-2">
                                <h3 className="text-xl font-bold text-stone-900">Mentor, Brown School of Engineering</h3>
                                <span className="text-stone-500 font-bold uppercase text-sm tracking-wider">Jan 2021 - May 2022</span>
                            </div>
                            <ul className="list-disc ml-5 text-stone-700">
                                <li>Helped mentees devise plans on completing concentration requirements as well as providing advice on classes, research, internship opportunities, and approach to learning</li>
                            </ul>
                        </div>

                        <div className="group">
                            <div className="flex justify-between mb-2">
                                <h3 className="text-xl font-bold text-stone-900">Teaching Assistant, ENGN 0500: Digital Computing Systems</h3>
                                <span className="text-stone-500 font-bold uppercase text-sm tracking-wider">Jan 2021 - May 2021</span>
                            </div>
                            <ul className="list-disc ml-5 text-stone-700">
                                <li>Held weekly office hours to provide conceptual understanding of digital design, computer architecture, and programming assignments</li>
                                <li>Helped teach students in class with interactive digital design demonstrations and embedded systems coding</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Outreach and Volunteer Work */}
                <section id="outreach" className="mb-20">
                    <h2 className="text-2xl font-bold mb-8 text-stone-800 border-l-4 border-stone-400 pl-4">Outreach and Volunteer Work</h2>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-stone-900">ABET External Advisory Board Member, Brown University</h3>
                            <p className="text-sm text-stone-500 font-bold uppercase mb-2">Jan 2025</p>
                            <ul className="list-disc ml-5 text-stone-700">
                                <li>Served on the external advisory board with 5 other members for ABET accreditation of the Brown University engineering program</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-stone-900">EEMP Curriculum Developer, Science Mentorship Institute</h3>
                            <p className="text-sm text-stone-500 font-bold uppercase mb-2">Feb 2024 - Jun 2024</p>
                            <ul className="list-disc ml-5 text-stone-700">
                                <li>Design lecture curriculum to support SCI-MI&apos;s 2024 launch of the electrical engineering mentorship program for exposure to research in computer architecture for high school students</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-stone-900">ECE Department Representative, UT Austin Graduate Student Assembly</h3>
                            <p className="text-sm text-stone-500 font-bold uppercase mb-2">Aug 2023 - Dec 2024</p>
                            <ul className="list-disc ml-5 text-stone-700">
                                <li>Vote on legislation as the graduate student liaison for the Department of Computer and Electrical Engineering at UT Austin</li>
                                <li>Relay important information from council meetings to department officials relating to graduate student affairs</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-stone-900">Project Manager and Developer, Develop for Good</h3>
                            <p className="text-sm text-stone-500 font-bold uppercase mb-2">Sept 2020 - Jan 2021</p>
                            <ul className="list-disc ml-5 text-stone-700">
                                <li>Developed and deployed a Django website for CARE International on analysis and visualization of USAID Hamzari data in an internal website</li>
                                <li>Supervised a team of 6 Frontend, Backend, UI/UX developers, and Data Scientists</li>
                            </ul>
                        </div>
                    </div>
                </section>


                {/* Relevant Projects */}
                <section id="projects" className="mb-20">
                    <h2 className="text-2xl font-bold mb-8 text-stone-800 border-l-4 border-stone-400 pl-4">Relevant Projects</h2>

                    <div className="mb-8">
                        <div className="flex flex-col md:flex-row justify-between mb-2">
                            <h3 className="text-xl font-bold text-stone-900">Cache Coherence Simulator</h3>
                            <span className="text-stone-500 font-bold uppercase text-sm tracking-wider">Sept 2023 - Dec 2023</span>
                        </div>
                        <ul className="list-disc ml-5 text-stone-700 space-y-2">
                            <li>Designed and implemented a directory-based MESI cache coherence simulator in C++ for up to 32 processors in distributed shared-memory parallel machines</li>
                        </ul>
                    </div>

                    <div className="mb-8">
                        <div className="flex flex-col md:flex-row justify-between mb-2">
                            <h3 className="text-xl font-bold text-stone-900">CNN FPGA Hardware Accelerator</h3>
                            <span className="text-stone-500 font-bold uppercase text-sm tracking-wider">Sept 2022 - Dec 2022</span>
                        </div>
                        <ul className="list-disc ml-5 text-stone-700 space-y-2">
                            <li>Designed and deployed CNN accelerator on AWS FPGAs using blocking systolic matrix multipliers on FashionMNIST problem with Xilinx Vitis HLS tools</li>
                            <li>Reduced trained parameter size by 75% using custom fixed-point 8 bit values with little loss to test accuracy</li>
                        </ul>
                    </div>
                </section>

                {/* Awards */}
                <section id="awards" className="mb-20">
                    <h2 className="text-2xl font-bold mb-6 text-stone-800 border-l-4 border-stone-400 pl-4">Awards</h2>
                    <ul className="space-y-4">
                        <li className="text-stone-700"><b className="text-stone-900">NSF GRFP Honorable Mention</b>, April 2024</li>
                        <li className="text-stone-700"><b className="text-stone-900">Cockrell School of Engineering Fellow</b>, 2022 - Current</li>
                        <li className="text-stone-700"><b className="text-stone-900">UT Austin Graduate Excellence Fellow</b>, 2022 - Current</li>
                        <li className="text-stone-700"><b className="text-stone-900">Sigma Xi Research Honor Society</b>, May 2022</li>
                        <li className="text-stone-700"><b className="text-stone-900">NSF GRFP Honorable Mention</b>, April 2022</li>
                        <li className="text-stone-700"><b className="text-stone-900">Tau Beti Pi Engineering Honor Society</b>, December 2021</li>
                        <li className="text-stone-700"><b className="text-stone-900">Grimshaw-Gudewicz Annual Scholar</b>, 2020 - 2022</li>
                        <li className="text-stone-700"><b className="text-stone-900">Best Use of Google Cloud</b>, Hack @ Brown, Jan 2020</li>
                        <li className="text-stone-700"><b className="text-stone-900">Valedictorian</b>, Seekonk High School, 2018</li>
                    </ul>
                </section>

                {/* Professional Memberships */}
                <section id="memberships" className="mb-20">
                    <h2 className="text-2xl font-bold mb-6 text-stone-800 border-l-4 border-stone-400 pl-4">Professional Memberships</h2>
                    <ul className="text-stone-700 space-y-2">
                        <li><b className="text-stone-900">Student Member, IEEE</b>, 2021 - Present</li>
                        <li><b className="text-stone-900">Student Member, ACM</b>, 2021 - Present</li>
                    </ul>
                </section>

                {/* Skills */}
                <section id="skills" className="mb-20">
                    <h2 className="text-2xl font-bold mb-6 text-stone-800 border-l-4 border-stone-400 pl-4">Skills</h2>
                    <div className="space-y-4">
                        <div>
                            <span className="font-bold text-stone-900 block mb-1">Programming Languages: </span>
                            <span className="text-stone-700">Python, C, C++, Verilog, SystemVerilog, SPICE</span>
                        </div>
                        <div>
                            <span className="font-bold text-stone-900 block mb-1">Applications: </span>
                            <span className="text-stone-700">PyTorch, Cadence Virtuoso, Matlab, Gem5, Synopsys HSPICE</span>
                        </div>
                        <div>
                            <span className="font-bold text-stone-900 block mb-1">Languages: </span>
                            <span className="text-stone-700">English (Fluent), Cantonese (Fluent)</span>
                        </div>
                    </div>
                </section>

            </div>

            <Footer />
        </main>
    );
}
