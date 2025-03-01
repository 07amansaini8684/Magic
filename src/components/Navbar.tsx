import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <nav className="flex sticky top-0 w-full z-999 justify-around items-center gap-[20%] px-6 py-3
            bg-white/2 backdrop-blur-xl border border-white/10 shadow-md shadow-black/20">
            
            {/* Logo */}
            <h1 className="text-white text-lg font-semibold">Magic UI</h1>

            {/* Navigation Links */}
            <div className="flex items-center space-x-4">
                <button className="text-gray-300 hover:text-white transition">Log in</button>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/20 hover:bg-white/40 text-white px-4 py-2 rounded-lg transition"
                >
                    Sign up
                </motion.button>
            </div>
        </nav>
    );
};

export default Navbar;
