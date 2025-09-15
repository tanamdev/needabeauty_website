"use client";

import { useToast } from "./ToastProvider";
import {
  FaBullseye,
  FaSearch,
  FaMagic,
  FaSpa,
  FaGift,
  FaPrescriptionBottle,
} from "react-icons/fa";

export default function HeroSection() {
  const { showComingSoon } = useToast();

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
                <FaBullseye
                  className="mr-2 text-orange-800"
                  aria-hidden="true"
                />{" "}
                Toko Kosmetik Terpercaya
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Temukan Kecantikan Alami Anda dengan{" "}
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  NAB (Need A Beauty)
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                NAB (Need A Beauty) adalah toko kosmetik terpercaya yang telah
                melayani kebutuhan kecantikan Anda di berbagai daerah. Dengan
                koleksi produk berkualitas tinggi dan layanan terbaik, kami
                hadir untuk mewujudkan impian kecantikan Anda. Segera hadir
                marketplace online untuk kemudahan berbelanja!
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={showComingSoon}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                Temukan Toko Terdekat
              </button>
              <button
                onClick={showComingSoon}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all duration-200"
              >
                Konsultasi Beauty Expert
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 pt-8">
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                <span className="text-sm text-gray-600">
                  4.9/5 dari pelanggan setia
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm text-gray-600">Produk Original</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-orange-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 4a2 2 0 012-2h6a2 2 0 012 2v2h2a2 2 0 012 2l-1 9a2 2 0 01-2 2H7a2 2 0 01-2-2L4 8a2 2 0 012-2h2V4zM6 6v2H4l1 9h10l1-9h-2V6H6z" />
                </svg>
                <span className="text-sm text-gray-600">Konsultasi Gratis</span>
              </div>
            </div>
          </div>

          {/* Hero Image/Mockup */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-12 flex items-center px-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                  <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                  <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-white font-medium">
                    NAB Marketplace
                  </span>
                </div>
              </div>

              {/* Marketplace Preview */}
              <div className="p-6 space-y-4">
                {/* Search Bar */}
                <div className="bg-gray-50 p-3 rounded-lg flex items-center">
                  <FaSearch className="text-gray-400 mr-3" aria-hidden="true" />
                  <span className="text-gray-500">
                    Search beauty products...
                  </span>
                </div>

                {/* Product Categories */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-pink-50 p-3 rounded-lg text-center">
                    <div className="text-2xl mb-1">
                      <FaMagic
                        className="inline-block text-pink-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="text-sm font-medium text-pink-700">
                      Makeup
                    </div>
                    <div className="text-xs text-pink-600">150+ products</div>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg text-center">
                    <div className="text-2xl mb-1">
                      <FaPrescriptionBottle
                        className="inline-block text-purple-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="text-sm font-medium text-purple-700">
                      Skincare
                    </div>
                    <div className="text-xs text-purple-600">200+ products</div>
                  </div>
                  <div className="bg-orange-50 p-3 rounded-lg text-center">
                    <div className="text-2xl mb-1">
                      <FaSpa
                        className="inline-block text-orange-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="text-sm font-medium text-orange-700">
                      Hair Care
                    </div>
                    <div className="text-xs text-orange-600">120+ products</div>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg text-center">
                    <div className="text-2xl mb-1">
                      <FaGift
                        className="inline-block text-green-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="text-sm font-medium text-green-700">
                      Fragrance
                    </div>
                    <div className="text-xs text-green-600">80+ products</div>
                  </div>
                </div>

                {/* Coming Soon Banner */}
                <div className="bg-gradient-to-r from-orange-100 to-pink-100 p-4 rounded-lg text-center border border-orange-200">
                  <div className="text-lg font-bold text-orange-600 mb-1">
                    Coming Soon!
                  </div>
                  <div className="text-sm text-gray-600">
                    Online marketplace launching soon
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    Visit our stores for now
                  </div>
                </div>
              </div>
            </div>

            {/* Background decorations */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
