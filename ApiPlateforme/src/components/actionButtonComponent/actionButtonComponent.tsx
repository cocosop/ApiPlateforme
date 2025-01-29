import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface ActionButtonProps {
    title: string;
    color: string;
}

const ActionButtonComponent = ({ title, color }: ActionButtonProps): JSX.Element => {
    const history = useNavigate();
    const handleOnclick = () => {
        history("/projets");
    }
    const buttonStyle = {
        backgroundColor: color,
    };
    return (
        <motion.button
            initial={{ "--x": "100%", scale: 1 }}
            animate={{ "--x": "-100%" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
                handleOnclick();
            }}
            style={buttonStyle}
            transition={{
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 1,
                type: "spring",
                stiffness: 20,
                damping: 15,
                mass: 2,
                scale: {
                    type: "spring",
                    stiffness: 10,
                    damping: 5,
                    mass: 0.1,
                },
            }}
            className="p-3 rounded-md relative radial-gradient cta-button"
        >
            <span className="text-neutral-100 tracking-wide font-light h-full w-full block relative linear-mask">
                {title}
            </span>
            <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
        </motion.button>
    );
};

export default ActionButtonComponent;