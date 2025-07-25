import artists from "@/app/data/artists.json"
import ArtistCard from "@/components/ArtistCard"
import { FaMicrophoneAlt } from "react-icons/fa"

interface Artist {
  id: number
  name: string
  bio: string
  location: string
  priceRange: string
  photo: string
  category: string
}

export default function SingerPage() {
  const singers = (artists as Artist[]).filter((a: Artist) => a.category === "Singers")
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-blue-50 py-10">
      <div className="flex flex-col items-center mb-8 animate-fade-in-down">
        <FaMicrophoneAlt className="text-5xl text-pink-500 drop-shadow-lg mb-2" />
        <h1 className="text-5xl sm:text-6xl font-extrabold text-center bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-600 text-transparent bg-clip-text drop-shadow-xl tracking-tight">
          Singers
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-600 rounded-full mt-4 mb-2 animate-pulse" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {singers.map((artist: Artist) => (
          <ArtistCard key={artist.id} artists={artist} />
        ))}
      </div>
    </main>
  )
}