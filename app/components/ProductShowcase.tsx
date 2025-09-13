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
            Solusi Lengkap untuk Setiap Kebutuhan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dari aplikasi POS hingga dashboard analytics, kami menyediakan tools
            yang Anda butuhkan untuk sukses
          </p>
        </div>

        {/* POS Application Showcase */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
                💳 Aplikasi POS
              </div>
              <h3 className="text-3xl font-bold text-gray-900">
                POS System yang Mudah & Powerful
              </h3>
              <p className="text-lg text-gray-600">
                Proses transaksi dengan cepat dan akurat. Kelola inventory,
                customer, dan pembayaran dalam satu aplikasi yang user-friendly.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-green-500 mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Multi Payment Gateway
                    </h4>
                    <p className="text-gray-600">
                      Cash, Card, Digital Wallet, QRIS - semua metode pembayaran
                      dalam satu sistem
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-green-500 mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Inventory Management
                    </h4>
                    <p className="text-gray-600">
                      Stock tracking real-time, low stock alerts, dan automated
                      reordering
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-green-500 mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Digital Receipt
                    </h4>
                    <p className="text-gray-600">
                      Email dan SMS receipt otomatis untuk pengalaman customer
                      yang modern
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* POS App Mockup */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4 flex items-center justify-between">
                  <h4 className="text-white font-semibold">NAB POS</h4>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-100 p-4 rounded-lg text-center">
                      <div className="text-2xl mb-2">🍕</div>
                      <div className="text-sm font-medium">
                        Pizza Margherita
                      </div>
                      <div className="text-orange-600 font-bold">₹299</div>
                    </div>
                    <div className="bg-gray-100 p-4 rounded-lg text-center">
                      <div className="text-2xl mb-2">🥤</div>
                      <div className="text-sm font-medium">Coca Cola</div>
                      <div className="text-orange-600 font-bold">₹59</div>
                    </div>
                  </div>

                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm">Pizza Margherita x2</span>
                      <span className="font-medium">₹598</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm">Coca Cola x1</span>
                      <span className="font-medium">₹59</span>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between items-center font-bold">
                      <span>Total</span>
                      <span className="text-orange-600">₹657</span>
                    </div>
                  </div>

                  <button
                    onClick={showComingSoon}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg font-semibold"
                  >
                    Process Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Analytics Showcase */}
        <div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Dashboard Mockup */}
            <div className="relative order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-4 flex items-center justify-between">
                  <h4 className="text-white font-semibold">NAB Dashboard</h4>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                    <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="text-xs text-green-600 font-medium">
                        TODAY SALES
                      </div>
                      <div className="text-2xl font-bold text-green-700">
                        ₹45,230
                      </div>
                      <div className="text-xs text-green-600">
                        +12% from yesterday
                      </div>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <div className="text-xs text-orange-600 font-medium">
                        ORDERS
                      </div>
                      <div className="text-2xl font-bold text-orange-700">
                        127
                      </div>
                      <div className="text-xs text-orange-600">
                        +8 from yesterday
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="text-sm font-medium mb-2">
                      Sales Trend (7 days)
                    </div>
                    <div className="h-16 bg-gradient-to-r from-orange-200 to-orange-300 rounded flex items-end justify-around">
                      <div className="w-3 bg-orange-500 h-8 rounded-t"></div>
                      <div className="w-3 bg-orange-500 h-12 rounded-t"></div>
                      <div className="w-3 bg-orange-500 h-6 rounded-t"></div>
                      <div className="w-3 bg-orange-500 h-14 rounded-t"></div>
                      <div className="w-3 bg-orange-600 h-16 rounded-t"></div>
                      <div className="w-3 bg-orange-600 h-10 rounded-t"></div>
                      <div className="w-3 bg-orange-600 h-12 rounded-t"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="text-sm">
                        Top Product: Pizza Margherita
                      </span>
                      <span className="text-sm font-medium text-green-600">
                        45 sold
                      </span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="text-sm">Peak Hour: 7-8 PM</span>
                      <span className="text-sm font-medium text-orange-600">
                        23 orders
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
                📊 Dashboard Analytics
              </div>
              <h3 className="text-3xl font-bold text-gray-900">
                Insights Mendalam untuk Keputusan Bisnis
              </h3>
              <p className="text-lg text-gray-600">
                Pantau performa bisnis secara real-time dengan dashboard yang
                memberikan data analytics komprehensif dan actionable insights.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-green-500 mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Real-time Sales Monitoring
                    </h4>
                    <p className="text-gray-600">
                      Track sales performance, revenue trends, dan KPI bisnis
                      secara real-time
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-green-500 mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Customer Analytics
                    </h4>
                    <p className="text-gray-600">
                      Analisis customer behavior, preference, dan customer
                      lifetime value
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <svg
                    className="w-6 h-6 text-green-500 mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Custom Reports
                    </h4>
                    <p className="text-gray-600">
                      Generate laporan custom untuk berbagai kebutuhan bisnis
                      dan compliance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
