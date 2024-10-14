import { useState } from 'react'
import { Search, Home, TrendingUp, Library, Compass, Settings, LogOut } from 'lucide-react'

// Sidebar component
const Sidebar = () => (
  <div className="w-64 bg-gray-900 text-white p-4">
    <h1 className="text-2xl font-bold mb-8">
      <span className="text-red-500">♪</span> DreamMusic
    </h1>
    <nav>
      <ul className="space-y-2">
        <li><a href="#" className="flex items-center space-x-2"><Home size={20} /> <span>Home</span></a></li>
        <li><a href="#" className="flex items-center space-x-2"><TrendingUp size={20} /> <span>Trends</span></a></li>
        <li><a href="#" className="flex items-center space-x-2"><Library size={20} /> <span>Library</span></a></li>
        <li><a href="#" className="flex items-center space-x-2"><Compass size={20} /> <span>Discover</span></a></li>
      </ul>
    </nav>
    <div className="mt-auto pt-8">
      <a href="#" className="flex items-center space-x-2"><Settings size={20} /> <span>Settings</span></a>
      <a href="#" className="flex items-center space-x-2 mt-2"><LogOut size={20} /> <span>Log Out</span></a>
    </div>
  </div>
)

// Header component
const Header = () => (
  <header className="flex justify-between items-center p-4">
    <nav>
      <ul className="flex space-x-4">
        <li><a href="#" className="text-white">Music</a></li>
        <li><a href="#" className="text-white">Podcast</a></li>
        <li><a href="#" className="text-white">Live</a></li>
        <li><a href="#" className="text-white">Radio</a></li>
      </ul>
    </nav>
    <div className="relative">
      <input
        type="text"
        placeholder="Michael Jackson"
        className="bg-gray-800 text-white rounded-full py-2 px-4 pr-10"
      />
      <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
    </div>
  </header>
)

// ArtistBanner component
const ArtistBanner = () => (
  <div className="relative h-80 bg-cover bg-center" style={{backgroundImage: "url('/placeholder.svg?height=320&width=1000')"}}>
    <div className="absolute bottom-0 left-0 p-8 text-white">
      <span className="bg-blue-500 text-xs font-bold px-2 py-1 rounded-full mb-2 inline-block">Verified Artist</span>
      <h2 className="text-4xl font-bold mb-2">Michael Jackson</h2>
      <p>27,815,501 monthly listeners</p>
    </div>
  </div>
)

// PopularSongs component
const PopularSongs = () => {
  const songs = [
    { id: 1, title: "Billie Jean", plays: "1,040,811,084", duration: "4:53", album: "Thriller 25 Super Deluxe Edition" },
    { id: 2, title: "Beat It", plays: "643,788,045", duration: "4:18", album: "Thriller 25 Super Deluxe Edition" },
    { id: 3, title: "Smooth Criminal - 2012 Remaster", plays: "607,234,004", duration: "4:17", album: "Thriller 25 Super Deluxe Edition" },
    { id: 4, title: "Don't Stop 'Til You Get Enough", plays: "316,391,952", duration: "6:05", album: "Bad 25th Anniversary" },
    { id: 5, title: "Rock With You - Single Version", plays: "268,187,218", duration: "3:40", album: "Off The Wall" },
  ]

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-bold text-white">Popular</h3>
        <a href="#" className="text-gray-400 text-sm">See All</a>
      </div>
      <table className="w-full text-left text-gray-400">
        <thead>
          <tr className="text-xs uppercase">
            <th className="py-2">#</th>
            <th>Title</th>
            <th>Played</th>
            <th>Time</th>
            <th>Album</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song) => (
            <tr key={song.id} className="border-b border-gray-800 hover:bg-gray-800">
              <td className="py-4">{song.id}</td>
              <td className="text-white">{song.title}</td>
              <td>{song.plays}</td>
              <td>{song.duration}</td>
              <td>{song.album}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

// MusicPlayer component
const MusicPlayer = () => (
  <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 flex justify-between items-center">
    <div className="flex items-center space-x-4">
      <img src="/placeholder.svg?height=50&width=50" alt="Album cover" className="w-12 h-12 rounded" />
      <div>
        <h4 className="font-semibold">Beat It</h4>
        <p className="text-sm text-gray-400">Michael Jackson</p>
      </div>
    </div>
    <div className="flex items-center space-x-4">
      {/* Add player controls here */}
    </div>
    <div className="w-1/3">
      {/* Add progress bar here */}
    </div>
  </div>
)

// Main App component
export default function Component() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <Header />
        <ArtistBanner />
        <PopularSongs />
      </main>
      <MusicPlayer />
    </div>
  )
}