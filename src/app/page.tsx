import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <h1 className="text-2xl font-bold text-blue-600 tracking-tight">Unsocial</h1>
            <input
              type="text"
              placeholder="Search Unsocial..."
              className="hidden sm:block bg-gray-100 rounded-full px-4 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">🔔</button>
            <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">💬</button>
            <div className="w-8 h-8 rounded-full bg-blue-500 text-white font-bold flex items-center justify-center">
              P
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Left Sidebar */}
        <aside className="hidden md:block md:col-span-1 space-y-2">
          <div className="p-3 bg-white rounded-xl shadow-sm hover:bg-gray-50 cursor-pointer flex items-center space-x-3">
            <span>👤</span>
            <span className="font-semibold text-sm">Parvez</span>
          </div>
          <div className="p-3 bg-white rounded-xl shadow-sm hover:bg-gray-50 cursor-pointer flex items-center space-x-3">
            <span>👥</span>
            <span className="font-semibold text-sm">Friends</span>
          </div>
          <div className="p-3 bg-white rounded-xl shadow-sm hover:bg-gray-50 cursor-pointer flex items-center space-x-3">
            <span>🔖</span>
            <span className="font-semibold text-sm">Saved</span>
          </div>
        </aside>

        {/* Center Feed */}
        <section className="col-span-1 md:col-span-2 space-y-4">
          {/* Create Post Box */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-blue-500 text-white font-bold flex items-center justify-center">
                P
              </div>
              <input
                type="text"
                placeholder="What's on your mind, Parvez?"
                className="w-full bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none"
              />
            </div>
            <hr className="my-3 border-gray-100" />
            <div className="flex justify-between text-sm text-gray-600 px-2">
              <button className="hover:bg-gray-50 p-2 rounded-lg flex items-center space-x-1">
                <span>🖼️</span> <span>Photo/Video</span>
              </button>
              <button className="hover:bg-gray-50 p-2 rounded-lg flex items-center space-x-1">
                <span>😊</span> <span>Feeling/Activity</span>
              </button>
            </div>
          </div>

          {/* Sample Post Card */}
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 space-y-3">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-purple-500 text-white font-bold flex items-center justify-center">
                U
              </div>
              <div>
                <h3 className="font-semibold text-sm">Unsocial Official</h3>
                <p className="text-xs text-gray-500">Just now • 🌎</p>
              </div>
            </div>
            <p className="text-sm text-gray-800">
              Welcome to Unsocial! 🎉 We are building a modern, fast, and lightweight social platform.
            </p>
            <hr className="border-gray-100" />
            <div className="flex justify-around text-sm font-medium text-gray-600">
              <button className="hover:bg-gray-50 w-full py-1.5 rounded-lg">👍 Like</button>
              <button className="hover:bg-gray-50 w-full py-1.5 rounded-lg">💬 Comment</button>
              <button className="hover:bg-gray-50 w-full py-1.5 rounded-lg">↪️ Share</button>
            </div>
          </div>
        </section>

        {/* Right Sidebar */}
        <aside className="hidden md:block md:col-span-1 space-y-3">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200">
            <h2 className="font-semibold text-sm text-gray-500 mb-2">Sponsored / Notice</h2>
            <p className="text-xs text-gray-600">
              Unsocial is now live on Vercel! Stay tuned for active updates.
            </p>
          </div>
        </aside>
      </main>
    </div>
  );
}

