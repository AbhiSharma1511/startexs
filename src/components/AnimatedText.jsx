import { motion } from "framer-motion";

export default function AnimatedText() {
    const fullText = "Startex";

    // Animation Variants
    const letterVariants = {
        hidden: { x: 100, opacity: 0 }, 
        visible: (i) => ({
            x: 0, 
            opacity: 1,
            transition: {
                delay: i * 0.2, 
                type: "spring", 
                stiffness: 200,
            }
        }),
    };

    return (
        <div className=" flex items-center justify-center flex-col mr-8 md:mr-16 mt-20 md:mt-0">
            {/* Animated Letters */}
            <div className="flex text-5xl md:text-8xl font-semibold border-2 border-[#858FFF] rounded-full p-10  hover:scale-110 transition-transform duration-300">
                {fullText.split("").map((letter, index) => (
                    <motion.span
                        key={index}
                        custom={index} 
                        variants={letterVariants}
                        initial="hidden" 
                        whileInView="visible" 
                        viewport={{ once: true, amount: 0.2 }} 
                    >
                        <span className="text-[#858FFF]">
                            {letter}
                        </span>
                    </motion.span>
                ))}
            </div>
        </div>
    );
}
