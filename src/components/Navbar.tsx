import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <nav className="flex relative w-full z-10 justify-around items-center gap-[20%] px-6 py-2 bg-black border-b-[1px] border-zinc-800">
            {/* Logo */}
            <h1 className="text-zinc-300 text-lg font-semibold">Magic UI</h1>

            {/* Navigation Links */}
            <div className="flex items-center space-x-4">
                <button className="text-gray-300 hover:text-white transition">Log in</button>

                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-zinc-800 hover:bg-zinc-900 text-white px-4 py-2 rounded-lg"
                >
                    Sign up
                </motion.button>
            </div>
        </nav>
    );
};

export default Navbar;
