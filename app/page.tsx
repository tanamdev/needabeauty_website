"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import ProductShowcase from "./components/ProductShowcase";
import { BRAND } from "./constants/brand";
import { useToast } from "./components/ToastProvider";
import { GiBullseye } from "react-icons/gi";
import { FiStar } from "react-icons/fi";
import { TbRocket } from "react-icons/tb";

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
                Tentang {BRAND}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {BRAND} adalah platform retail technology yang membantu ribuan
                bisnis di Indonesia untuk bertransformasi digital. Dengan
                pengalaman lebih dari 5 tahun di industri retail, kami memahami
                tantangan yang dihadapi oleh pemilik bisnis dalam mengelola
                operasional sehari-hari.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Solusi kami telah terbukti meningkatkan efisiensi operasional
                hingga 40% dan memberikan insights yang actionable untuk
                pengambilan keputusan bisnis yang lebih baik.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">5+</div>
                  <div className="text-sm text-gray-600">Tahun Pengalaman</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">
                    2000+
                  </div>
                  <div className="text-sm text-gray-600">Bisnis Terlayani</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600">
                    99.9%
                  </div>
                  <div className="text-sm text-gray-600">Uptime Guarantee</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                      <GiBullseye className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Misi Kami</h4>
                      <p className="text-sm text-gray-600">
                        Membantu setiap bisnis retail mencapai potensi
                        maksimalnya
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-orange-500 rounded-xl flex items-center justify-center">
                      <TbRocket className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Visi Kami</h4>
                      <p className="text-sm text-gray-600">
                        Menjadi platform retail technology terdepan di Asia
                        Tenggara
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                      <FiStar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        Nilai Kami
                      </h4>
                      <p className="text-sm text-gray-600">
                        Inovasi, reliabilitas, dan customer-centric solution
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
            Siap Memulai Transformasi Digital Bisnis Anda?
          </h2>
          <p className="text-xl text-orange-100 mb-8 leading-relaxed">
            Bergabunglah dengan ribuan bisnis yang telah merasakan manfaat
            solusi {BRAND}. Dapatkan trial gratis 14 hari tanpa komitmen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={showComingSoon}
              className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all duration-200 transform hover:scale-105"
            >
              Mulai Trial Gratis
            </button>
            <button
              onClick={showComingSoon}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-200"
            >
              Jadwalkan Demo
            </button>
          </div>
          <p className="text-sm text-orange-100 mt-4">
            * Tidak memerlukan kartu kredit • Setup dalam 5 menit • Support 24/7
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
