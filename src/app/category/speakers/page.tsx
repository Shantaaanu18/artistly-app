import artists from "@/app/data/artists.json"
import ArtistCard from "@/components/ArtistCard"
import { FaUserTie } from "react-icons/fa"

interface Artist {
  id: number
  name: string
  bio: string
  location: string
  priceRange: string
  photo: string
  category: string
}

export default function SpeakersPage() {
  const speakers = (artists as Artist[]).filter((a: Artist) => a.category === "Speakers")
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-blue-50 py-10">
      <div className="flex flex-col items-center mb-8 animate-fade-in-down">
        <FaUserTie className="text-5xl text-blue-500 drop-shadow-lg mb-2" />
        <h1 className="text-5xl sm:text-6xl font-extrabold text-center bg-gradient-to-r from-blue-600 via-pink-500 to-yellow-400 text-transparent bg-clip-text drop-shadow-xl tracking-tight">
          Speakers
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-pink-500 to-yellow-400 rounded-full mt-4 mb-2 animate-pulse" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {speakers.map((artist: Artist) => (
          <ArtistCard key={artist.id} artists={artist} />
        ))}
      </div>
    </main>
  )
}
