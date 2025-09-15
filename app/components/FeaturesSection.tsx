"use client";

import { useToast } from "./ToastProvider";
import { BRAND } from "../constants/brand";
import { BiStoreAlt } from "react-icons/bi";
import { AiOutlineAreaChart } from "react-icons/ai";
import { FiCloud } from "react-icons/fi";
import { AiOutlineSwap } from "react-icons/ai";
import { FaUsers } from "react-icons/fa";
import { HiOutlineDeviceMobile } from "react-icons/hi";

export default function FeaturesSection() {
  const { showComingSoon } = useToast();

  const features = [
    {
  icon: <BiStoreAlt className="w-10 h-10 text-orange-500" />,
      title: "Aplikasi POS Lengkap",
      description:
        "Sistem POS yang mudah digunakan dengan fitur inventory management, sales tracking, dan payment processing yang terintegrasi.",
      highlights: [
        "Multi Payment Gateway",
        "Inventory Real-time",
        "Receipt Digital",
      ],
    },
    {
  icon: <AiOutlineAreaChart className="w-10 h-10 text-orange-500" />,
      title: "Dashboard Analytics",
      description:
        "Pantau performa bisnis Anda dengan dashboard yang memberikan insights mendalam tentang sales, inventory, dan customer behavior.",
      highlights: ["Sales Analytics", "Customer Insights", "Profit Tracking"],
    },
    {
  icon: <FiCloud className="w-10 h-10 text-orange-500" />,
      title: "Cloud-Based System",
      description:
        "Akses data bisnis Anda dari mana saja dengan sistem berbasis cloud yang aman dan selalu ter-update secara real-time.",
      highlights: ["Multi Device Access", "Auto Backup", "99.9% Uptime"],
    },
    {
  icon: <AiOutlineSwap className="w-10 h-10 text-orange-500" />,
      title: "Multi-Store Management",
      description:
        "Kelola multiple toko dari satu dashboard terpusat. Monitor performa setiap cabang dan sinkronisasi inventory dengan mudah.",
      highlights: [
        "Centralized Control",
        "Branch Analytics",
        "Unified Reporting",
      ],
    },
    {
  icon: <FaUsers className="w-10 h-10 text-orange-500" />,
      title: "Customer Management",
      description:
        "Bangun relationship yang kuat dengan customer melalui sistem CRM terintegrasi, loyalty program, dan personalized marketing.",
      highlights: ["Customer Database", "Loyalty Program", "Marketing Tools"],
    },
    {
  icon: <HiOutlineDeviceMobile className="w-10 h-10 text-orange-500" />,
      title: "Mobile-First Design",
      description:
        "Akses semua fitur melalui mobile app yang responsif. Kelola bisnis Anda bahkan saat sedang tidak di toko.",
      highlights: ["iOS & Android App", "Offline Mode", "Push Notifications"],
    },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Fitur Lengkap untuk Bisnis Modern
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Semua yang Anda butuhkan untuk menjalankan dan mengembangkan bisnis
            retail dalam satu platform terintegrasi
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
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Siap Meningkatkan Bisnis Anda?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Bergabunglah dengan ribuan bisnis yang telah mempercayai {BRAND}{" "}
              untuk mengoptimalkan operasional retail mereka
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
        </div>
      </div>
    </section>
  );
}
