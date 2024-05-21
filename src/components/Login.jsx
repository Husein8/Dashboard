import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, e.g., authentication
    const formData = { username, password };
    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-svg bg-no-repeat bg-cover">
      <motion.div
        initial={{ opacity: 0.8, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-xs "
      >
        <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8 mb-4">
          <motion.div
            className="mb-4 relative"
            initial={{ opacity: 0.8, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <FaUser className="absolute left-3 top-3" />
            <motion.input
              initial={{ opacity: 0.9 }}
              animate={{ opacity: 0.9 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="shadow appearance-none border rounded w-full py-2 pl-10 pr-3 text-black leading-tight default-input hovered-input"
              id="username"
              type="text"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Username"
              required
            />
          </motion.div>
          <motion.div
            className="mb-4 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <FaLock className="absolute left-3 top-3 " />
            <motion.input
              initial={{ opacity: 0.9 }}
              animate={{ opacity: 0.9 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="shadow appearance-none border rounded w-full py-2 pl-10 pr-3 text-gray-700 mb-3 leading-tight default-input hovered-input"
              id="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Password"
              required
            />
          </motion.div>
          <motion.div
            className="flex items-center justify-between"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.button
              initial={{ opacity: 0.9 }}
              animate={{ opacity: 0.9 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white text-black font-bold py-2 px-4  w-full rounded focus:outline-none focus:shadow-outline border "
              type="submit"
            >
              LOGIN
            </motion.button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
}

export default Login;
