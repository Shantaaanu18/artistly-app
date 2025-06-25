import artists from "@/app/data/artists.json"
import ArtistCard from "@/components/ArtistCard"
import { FaUsers } from "react-icons/fa"

interface Artist {
  id: number
  name: string
  category: string
  bio: string
  location: string
  priceRange: string
  photo: string
}


function groupByCategory(artists: Artist[]) {
  return artists.reduce((groups: Record<string, Artist[]>, artist) => {
    const cat = artist.category
    if (!groups[cat]) groups[cat] = []
    groups[cat].push(artist)
    return groups
  }, {})
}

export default function ArtistsPage() {
  const grouped = groupByCategory(artists as Artist[])

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 py-10">
      <div className="flex flex-col items-center mb-10 animate-fade-in-down">
        <FaUsers className="text-5xl text-pink-500 drop-shadow-lg mb-2" />
        <h1 className="text-5xl sm:text-6xl font-extrabold text-center bg-gradient-to-r from-blue-600 via-pink-500 to-yellow-400 text-transparent bg-clip-text drop-shadow-xl tracking-tight">
          All Artists
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-pink-500 via-yellow-400 to-blue-600 rounded-full mt-4 mb-2 animate-pulse" />
      </div>
      <div className="max-w-7xl mx-auto px-4 space-y-16">
        {Object.entries(grouped).map(([category, group]) => (
          <section key={category} className="animate-fade-in-up">
            <div className="flex items-center gap-2 mb-6">
              <FaUsers className="text-xl text-yellow-500" />
              <h2 className="text-3xl font-bold text-pink-600 border-b-2 border-yellow-400 pb-1 inline-block">
                {category}
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {group.map((artist) => (
                <div key={artist.id} className="p-2">
                  <ArtistCard artists={artist} />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
