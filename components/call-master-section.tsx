"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Phone, Clock, MapPin } from "lucide-react"
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"

export function CallMasterSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-teal-600 to-teal-800 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute inset-0 bg-[url('/images/water-droplets.png')] opacity-10"></div>
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Нужен мастер прямо сейчас?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Звоните! Мы работаем 24/7 и готовы приехать в любое время
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Button
              size="lg"
              className="bg-white text-teal-700 hover:bg-gray-100 text-lg px-8 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 group"
            >
              <Phone className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              <AnimatedShinyText className="font-semibold">Вызвать мастера</AnimatedShinyText>
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <Phone className="h-8 w-8 text-white mb-4 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Быстрый вызов</h3>
              <p className="text-white/80 text-sm">
                +38 (067) 123-45-67
                <br />
                Звоните в любое время
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <Clock className="h-8 w-8 text-white mb-4 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Режим работы</h3>
              <p className="text-white/80 text-sm">
                24 часа в сутки
                <br />7 дней в неделю
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
            >
              <MapPin className="h-8 w-8 text-white mb-4 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Зона покрытия</h3>
              <p className="text-white/80 text-sm">
                Вся Одесса
                <br />и пригороды
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
