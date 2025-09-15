"use client";

import { useToast } from "./ToastProvider";
import { BRAND } from "../constants/brand";
import { TbRocket } from "react-icons/tb";
import { AiOutlineAreaChart } from "react-icons/ai";

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
                <TbRocket className="w-4 h-4 mr-2" />
                <span>Solusi Retail Terdepan</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Revolusi Bisnis Retail Anda dengan{" "}
                <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                  {BRAND}
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Kelola bisnis retail Anda dengan mudah menggunakan aplikasi POS
                dan dashboard analytics yang powerful. Tingkatkan efisiensi,
                pantau performa, dan kembangkan bisnis Anda ke level
                selanjutnya.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={showComingSoon}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
              >
                Coba Gratis Sekarang
              </button>
              <button
                onClick={showComingSoon}
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all duration-200"
              >
                Lihat Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-8 pt-8">
              <div className="flex items-center space-x-2">
                <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                <span className="text-sm text-gray-600">
                  4.9/5 dari 2000+ users
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
                <span className="text-sm text-gray-600">Keamanan Terjamin</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg
                  className="w-5 h-5 text-orange-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 4a2 2 0 012-2h6a2 2 0 012 2v2h2a2 2 0 012 2l-1 9a2 2 0 01-2 2H7a2 2 0 01-2-2L4 8a2 2 0 012-2h2V4zM6 6v2H4l1 9h10l1-9h-2V6H6z" />
                </svg>
                <span className="text-sm text-gray-600">Support 24/7</span>
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
                    {BRAND} Dashboard
                  </span>
                </div>
              </div>

              {/* Dashboard Preview */}
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">
                      ₹2.4M
                    </div>
                    <div className="text-sm text-gray-600">Total Sales</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">
                      1,240
                    </div>
                    <div className="text-sm text-gray-600">Orders</div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-orange-600">
                      98%
                    </div>
                    <div className="text-sm text-gray-600">Uptime</div>
                  </div>
                </div>

                <div className="bg-gray-50 h-32 rounded-lg flex items-center justify-center">
                  <div className="flex items-center text-gray-400">
                    <AiOutlineAreaChart className="w-5 h-5 mr-2" />
                    <span>Sales Analytics Chart</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm">Recent Transaction</span>
                    <span className="text-sm font-medium text-green-600">
                      +₹25,000
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="text-sm">Product Sold</span>
                    <span className="text-sm font-medium text-orange-600">
                      +45 items
                    </span>
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
