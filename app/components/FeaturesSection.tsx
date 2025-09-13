"use client";

// import { useToast } from "./ToastProvider";

export default function FeaturesSection() {
  // const { showComingSoon } = useToast();

  const features = [
    {
      icon: "💄",
      title: "Produk Kosmetik Premium",
      description:
        "Koleksi lengkap produk kosmetik berkualitas tinggi dari brand ternama dan lokal terpercaya untuk memenuhi kebutuhan kecantikan Anda.",
      highlights: [
        "Skincare Original",
        "Makeup Berkualitas",
        "Produk Halal & Aman",
      ],
    },
    {
      icon: "🏪",
      title: "Toko Terpercaya",
      description:
        "NAB (Need A Beauty) telah melayani pelanggan di berbagai daerah dengan komitmen memberikan produk original dan layanan terbaik selama bertahun-tahun.",
      highlights: ["Produk Original", "Layanan Ramah", "Konsultasi Ahli"],
    },
    {
      icon: "🛒",
      title: "Marketplace Online (Coming Soon)",
      description:
        "Segera hadir platform belanja online yang memudahkan Anda berbelanja kosmetik favorit dari kenyamanan rumah dengan berbagai kemudahan.",
      highlights: ["Belanja Online", "Delivery Service", "Payment Gateway"],
    },
    {
      icon: "🌟",
      title: "Konsultasi Kecantikan",
      description:
        "Tim beauty advisor berpengalaman siap membantu Anda memilih produk yang tepat sesuai dengan jenis kulit dan kebutuhan kecantikan Anda.",
      highlights: ["Beauty Consultant", "Skin Analysis", "Personalized Advice"],
    },
    {
      icon: "�",
      title: "Brand Terpilih",
      description:
        "Kami menghadirkan berbagai brand kosmetik ternama dan produk lokal berkualitas yang telah teruji dan mendapat sertifikasi resmi.",
      highlights: ["Brand Ternama", "Produk Lokal", "Sertifikasi BPOM"],
    },
    {
      icon: "🎁",
      title: "Promo & Reward",
      description:
        "Nikmati berbagai promo menarik, program loyalty, dan hadiah eksklusif untuk pelanggan setia NAB (Need A Beauty) di setiap pembelian.",
      highlights: ["Promo Bulanan", "Loyalty Program", "Gift Exclusive"],
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mengapa Memilih NAB (Need A Beauty)?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kepercayaan dan kualitas adalah prioritas utama kami dalam melayani
            kebutuhan kecantikan Anda
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{feature.icon}</div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                {feature.title}
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {feature.description}
              </p>

              {/* Highlights */}
              <div className="space-y-2">
                {feature.highlights.map((highlight, highlightIndex) => (
                  <div
                    key={highlightIndex}
                    className="flex items-center text-sm"
                  >
                    <svg
                      className="w-4 h-4 text-green-500 mr-2 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Siap Meningkatkan Bisnis Anda?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Bergabunglah dengan ribuan bisnis yang telah mempercayai NAB untuk
              mengoptimalkan operasional retail mereka
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={showComingSoon}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-200 transform hover:scale-105"
              >
                Mulai Trial 14 Hari
              </button>
              <button
                onClick={showComingSoon}
                className="border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-200"
              >
                Hubungi Sales
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
