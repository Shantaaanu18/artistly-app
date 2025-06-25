"use client"

import React from "react"
import { motion } from "framer-motion"
import { TiltMotion } from "@/components/ui/tilt-motion"

interface Artist {
  id: number
  name: string
  category: string
  location: string
  priceRange: string
  photo: string
  bio: string
}

export default function ArtistCard({ artists }: { artists: Artist }) {
  return (
    <TiltMotion
      tiltFactor={10}
      scale={1.02}
      perspective={1000}
      transitionDuration={0.3}
    >
      <motion.div
        className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col border border-gray-100 transition duration-300 hover:shadow-xl"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <div className="relative w-full h-60 overflow-hidden">
          <img
            src={artists.photo}
            alt={artists.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <span className="absolute top-3 left-3 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
            {artists.category}
          </span>
        </div>

        <div className="p-4 flex flex-col flex-1">
          <h3 className="text-lg font-bold mb-1">{artists.name}</h3>
          <p className="text-pink-600 font-semibold">{artists.category}</p>
          <p className="text-gray-500 text-sm">{artists.location}</p>
          <p className="text-gray-800 font-medium">{artists.priceRange}</p>
          <p className="text-gray-500 text-xs mt-2 line-clamp-2">
            {artists.bio}
          </p>
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition">
            Book
          </button>
        </div>
      </motion.div>
    </TiltMotion>
  )
}
