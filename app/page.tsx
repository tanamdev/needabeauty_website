"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import ProductShowcase from "./components/ProductShowcase";
import { useToast } from "./components/ToastProvider";

export default function Home() {
  const { showComingSoon } = useToast();

  return (
    <div className="font-sans">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ProductShowcase />

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Tentang NAB (Need A Beauty)
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                NAB (Need A Beauty) adalah toko kosmetik terpercaya yang telah
                melayani kebutuhan kecantikan pelanggan di berbagai daerah.
                Dengan pengalaman bertahun-tahun di industri kecantikan, kami
                memahami kebutuhan setiap pelanggan untuk tampil percaya diri.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Komitmen kami adalah menyediakan produk kosmetik original
                berkualitas tinggi dengan layanan konsultasi kecantikan yang
                profesional. Kunjungi toko kami untuk pengalaman berbelanja yang
                tak terlupakan.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">5+</div>
                  <div className="text-sm text-gray-600">Tahun Pengalaman</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">10+</div>
                  <div className="text-sm text-gray-600">Cabang Toko</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">
                    1000+
                  </div>
                  <div className="text-sm text-gray-600">Pelanggan Setia</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">🎯</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Misi Kami</h4>
                      <p className="text-sm text-gray-600">
                        Memberikan produk kecantikan terbaik untuk meningkatkan
                        kepercayaan diri setiap wanita
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-orange-500 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">🚀</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Visi Kami</h4>
                      <p className="text-sm text-gray-600">
                        Menjadi toko kosmetik terpercaya dan terdepan di seluruh
                        Indonesia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-lg">💡</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Komitmen Kami
                      </h4>
                      <p className="text-sm text-gray-600">
                        Produk original, layanan berkualitas, dan konsultasi
                        ahli
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap Menemukan Produk Kecantikan Impian Anda?
          </h2>
          <p className="text-xl text-orange-100 mb-8 leading-relaxed">
            Kunjungi toko NAB (Need A Beauty) terdekat dan rasakan pengalaman
            berbelanja kosmetik dengan produk original dan layanan terbaik.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={showComingSoon}
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all duration-200 transform hover:scale-105"
            >
              Temukan Toko Terdekat
            </button>
            <button
              onClick={showComingSoon}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-200"
            >
              Konsultasi Beauty Expert
            </button>
          </div>
          <p className="text-sm text-orange-100 mt-4">
            * Produk Original • Konsultasi Gratis • Tersebar di Berbagai Daerah
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
