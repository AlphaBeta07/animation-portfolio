"use client";

import { motion } from "framer-motion";

interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    tags: string[];
    link: string;
    color: string;
    image: string;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Robot Cat",
        category: "Robot • Productivity • AI",
        description: "OpenCat robot that mimics animal-like movements using servo motors and smart control logic.It demonstrates my hands-on skills in robotics, embedded systems, and real-time motion control",
        tags: ["Embedded C", "HTML", "CSS", "JS"],
        link: "https://github.com/AlphaBeta07/opencat",
        color: "#A8E524",
        image: "/projects/opencat.png"
    },
    {
        id: 2,
        title: "Textile Guru",
        category: "Textile • Notes • Assistant",
        description: "It is an online platform offering textile education programs and learning materials for various subjects related to textiles..",
        tags: ["Python", "HTML", "CSS", "JS"],
        link: "https://textileguru.in",
        color: "#A8E524",
        image: "/projects/textileguru.png"
    },
    {
        id: 3,
        title: "Esp8266 Drone",
        category: "Drone • Wifi",
        description: "Developed a drone that is built using a NodeMCU microcontroller and features wireless control via the Blynk app. It offers real-time flight maneuvering through smartphone-based joystick inputs over Wi-Fi.",
        tags: ["Embedded C", "API", "Blynk"],
        link: "https://github.com/AlphaBeta07/ESP8266-drone-Blynk",
        color: "#A8E524",
        image: "/projects/espdrone.png"
    },
    {
        id: 4,
        title: "3d Room Portfolio",
        category: "Portfolio • Blender",
        description: "It is a personal portfolio website that highlights Anish Landage's 3D design and modeling projects.It showcases his creativity, technical skills, and passion for digital artistry in an interactive format.",
        tags: ["Three.js", "React.js", "CSS", "Blender"],
        link: "https://anishlandage3d.netlify.app/",
        color: "#A8E524",
        image: "/projects/3droom.png"
    },
    {
        id: 5,
        title: "ThreadCounty",
        category: "Textile • AI • Assistant",
        description: "Thread County is a smart textile analysis platform that uses AI and image processing to accurately count fabric threads and assist in quality inspection.",
        tags: ["Python", "React.js", "PDF Generation"],
        link: "https://github.com/AlphaBeta07/threadcounty_new",
        color: "#A8E524",
        image: "/projects/threadcounty.png"
    },
    {
        id: 6,
        title: "React Portfolio",
        category: "Animations • Portfolio",
        description: "Developed a personal portfolio website that highlights React design and modeling projects.It showcases his creativity, technical skills, and passion for digital artistry in an interactive format.",
        tags: ["React.js", "CSS"],
        link: "https://portfolio-anishlandage.vercel.app/",
        color: "#A8E524",
        image: "/projects/portfolio1.png"
    },
    {
        id: 7,
        title: "3D Portfolio",
        category: "Animations • Portfolio",
        description: "personal 3D-focused portfolio website built and hosted on Netlify, showcasing Anish’s 3D projects, skills, and creative work in web-based 3D graphics and design.",
        tags: ["Three.js", "React.js", "CSS", "JS"],
        link: "https://portfolio-anishlandage.vercel.app/",
        color: "#A8E524",
        image: "/projects/portfolio2.png"
    }
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative w-full aspect-[4/3] bg-[#111] overflow-hidden cursor-pointer"
            style={{
                clipPath: "polygon(0% 0%, 100% 0%, 100% 85%, 85% 100%, 0% 100%)", // Custom shape from reference
            }}
        >
            {/* Project Image */}
            <div className="absolute inset-0 bg-zinc-900 group-hover:scale-110 transition-transform duration-700 ease-out">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
            </div>

            {/* Initial Bottom Label (Green Box) */}
            <div className="absolute bottom-8 left-8 bg-[#A8E524] px-4 py-2 text-black font-bold uppercase tracking-wider text-sm transition-all duration-500 transform group-hover:translate-y-20 group-hover:opacity-0 clip-path-polygon">
                {project.title}
            </div>

            {/* Hover Overlay Content */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md flex flex-col justify-end p-8 opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out">
                <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                <span className="text-[#A8E524] text-sm uppercase tracking-widest mb-4 font-semibold">{project.category}</span>
                <p className="text-gray-400 mb-6 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.slice(0, 4).map(tag => (
                        <span key={tag} className="text-xs px-2 py-1 border border-white/20 rounded-full text-white/70">
                            {tag}
                        </span>
                    ))}
                </div>

                <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-[#A8E524] font-bold uppercase tracking-wider hover:gap-4 transition-all"
                >
                    View Project
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </a>
            </div>
        </motion.div>
    );
}

export default function Projects() {
    return (
        <section id="projects" className="bg-[#0a0a0a] py-24 px-4 w-full flex flex-col items-center">
            {/* Title Section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-20"
            >
                <h2 className="text-6xl md:text-8xl font-bold text-white tracking-tight opacity-90 font-mono">
                    Projects
                </h2>
            </motion.div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl px-4">
                {projects.map((project, index) => (
                    <ProjectCard key={project.id} project={project} index={index} />
                ))}
            </div>
        </section>
    );
}
