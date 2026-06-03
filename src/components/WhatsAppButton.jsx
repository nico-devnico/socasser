import React from 'react'
import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/237674026695"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-10 right-10 z-50 w-16 h-16 bg-primary rounded-2xl flex items-center justify-center text-black shadow-[0_20px_50px_rgba(0,194,255,0.4)] group overflow-hidden"
    >
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
      <MessageCircle size={28} />
    </motion.a>
  )
}

export default WhatsAppButton
