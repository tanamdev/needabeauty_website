"use client";

import { useToast } from "./ToastProvider";

export default function ProductShowcase() {
  const { showComingSoon } = useToast();

  return (
    <section
      id="products"
      className="py-20 bg-gradient-to-br from-gray-50 to-orange-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kategori Produk Kecantikan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Temukan koleksi lengkap produk kecantikan berkualitas tinggi untuk
            semua kebutuhan perawatan Anda
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Skincare */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🧴</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Skincare</h3>
              <p className="text-gray-600 mb-4">
                Perawatan kulit lengkap dari cleanser, toner, serum hingga
                moisturizer untuk semua jenis kulit
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Facial Cleanser</li>
                <li>• Toner & Essence</li>
                <li>• Serum & Treatment</li>
                <li>• Moisturizer & Sunscreen</li>
              </ul>
            </div>
          </div>

          {/* Makeup */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💄</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Makeup</h3>
              <p className="text-gray-600 mb-4">
                Koleksi makeup lengkap untuk tampilan natural hingga glamorous
                dengan kualitas terbaik
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Foundation & Concealer</li>
                <li>• Lipstick & Lip Gloss</li>
                <li>• Eyeshadow & Mascara</li>
                <li>• Blush & Highlighter</li>
              </ul>
            </div>
          </div>

          {/* Hair Care */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💆‍♀️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Hair Care
              </h3>
              <p className="text-gray-600 mb-4">
                Perawatan rambut untuk menjaga kesehatan dan kecantikan rambut
                Anda setiap hari
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Shampoo & Conditioner</li>
                <li>• Hair Mask & Treatment</li>
                <li>• Hair Serum & Oil</li>
                <li>• Styling Products</li>
              </ul>
            </div>
          </div>

          {/* Body Care */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🧴</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Body Care
              </h3>
              <p className="text-gray-600 mb-4">
                Perawatan tubuh untuk kulit yang lembut, harum, dan sehat dari
                kepala hingga kaki
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Body Wash & Scrub</li>
                <li>• Body Lotion & Cream</li>
                <li>• Hand & Foot Care</li>
                <li>• Body Mist & Spray</li>
              </ul>
            </div>
          </div>

          {/* Fragrance */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌸</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Fragrance
              </h3>
              <p className="text-gray-600 mb-4">
                Koleksi parfum dan fragrance untuk melengkapi penampilan dengan
                aroma yang menawan
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Eau de Parfum</li>
                <li>• Eau de Toilette</li>
                <li>• Body Spray</li>
                <li>• Roll-on Perfume</li>
              </ul>
            </div>
          </div>

          {/* Men's Care */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🧔‍♂️</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Men&apos;s Care
              </h3>
              <p className="text-gray-600 mb-4">
                Produk perawatan khusus pria untuk tampilan yang fresh dan
                percaya diri
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Face Wash & Shaving</li>
                <li>• Men&apos;s Skincare</li>
                <li>• Deodorant & Cologne</li>
                <li>• Hair Styling</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Marketplace Coming Soon Section */}
        <div className="text-center bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            🛒 Marketplace Online Coming Soon!
          </h3>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Segera nikmati kemudahan berbelanja online semua produk kecantikan
            favorit Anda dengan pengalaman yang lebih baik dan praktis
          </p>

          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl mb-2">🚚</div>
              <h4 className="font-semibold mb-1">Free Delivery</h4>
              <p className="text-sm opacity-90">
                Gratis ongkir untuk pembelian minimal
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">💳</div>
              <h4 className="font-semibold mb-1">Multiple Payment</h4>
              <p className="text-sm opacity-90">
                Berbagai pilihan metode pembayaran
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">⭐</div>
              <h4 className="font-semibold mb-1">Review & Rating</h4>
              <p className="text-sm opacity-90">
                Sistem review dari pengguna asli
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🎁</div>
              <h4 className="font-semibold mb-1">Exclusive Deals</h4>
              <p className="text-sm opacity-90">Promo khusus member online</p>
            </div>
          </div>

          <button
            onClick={showComingSoon}
            className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 text-lg"
          >
            Notify Me When Ready
          </button>
          <p className="text-sm opacity-90 mt-4">
            Daftarkan email Anda untuk mendapat notifikasi pertama kali saat
            marketplace online kami launch!
          </p>
        </div>
      </div>
    </section>
  );
}
