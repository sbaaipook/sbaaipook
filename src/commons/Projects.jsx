import LineGradient from "../components/LineGradient"
import { motion } from "framer-motion"

const Project =({title})=>{
    const overlaystyles = `
        absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey
        z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue
    `
    const projectTitle = title.split(" ").join("-").toLowerCase()
    return (
        <motion.div variants={projectVariant} className="relative">
            <div className={overlaystyles}>
                <p className="text-2xl font-playfair">{title}</p>
                <p className="mt-7">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit culpa obcaecati, exercitationem et esse ab possimus doloribus deserunt voluptate ducimus soluta placeat nisi? Eius, ipsum incidunt excepturi perspiciatis labore aperiam.
                </p>
            </div>
            <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />

        </motion.div>
    )
}

const container = {
    hidden: {},
    visible: {
        transition: {staggerChildren: .2},
    }
}
const projectVariant = {
    hidden: {
        opacity:0,scale: .8
    },
    visible:{
        opacity:1,scale:1
    }
}
const Projects = () => {
    return (
        <section id="projects" className="pt-48 pb-48">

            <motion.div
                className="md:w-2/4 mx-auto text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: .5 }}
                transition={{ duration: .5 }}
                variants={{
                    hidden: { opacity: .5, y: -50 },
                    visible: { opacity: 1, y: 0 }
                }}
            >
                <div>
                    <p className="font-playfair font-semibold text-4xl">
                        My <span className="text-red">Pro</span>jects

                    </p>
                    <div className="flex justify-center mt-5">
                        <LineGradient width="w-1/3" />
                    </div>
                </div>

                <p className="mt-10 mb-10">
                    Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis rem totam quidem error nam. Cupiditate sequi, tenetur itaque voluptatibus vel iure eum doloremque fugiat reprehenderit molestiae ad distinctio explicabo saepe?.
                </p>
            </motion.div>

            <div className="flex justify-center">
                <motion.div
                    className="sm:grid sm:grid-cols-3"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: .5 }}
                    variants={container}
                >
                    <div className="flex justify-center text-center items-center p-10 bg-red
                     max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
                        BEAUTIFUL USER INTERFACES
                    </div>
                    <Project title="Project 1" />
                    <Project title="Project 2" />

                    <Project title="Project 3" />
                    <Project title="Project 4" />
                    <Project title="Project 5" />

                    <Project title="Project 6" />
                    <Project title="Project 7" />
                    <div className="flex justify-center text-center items-center p-10 bg-blue
                     max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold">
                        BEAUTIFUL USER INTERFACES
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Projects