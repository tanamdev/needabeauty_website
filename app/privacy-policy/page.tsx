"use client";
import Link from "next/link";
import { useState } from "react";

export default function PrivacyPolicy() {
  const [lang, setLang] = useState<"en" | "id">("en");

  const content = {
    en: {
      title: "Privacy Policy",
      updated: "Last updated: September 13, 2024",
      intro: [
        "Welcome to NaB POS! This Privacy Policy explains how we collect, use, and store your information. Since technology and privacy laws are always evolving, we may occasionally update this policy. If significant changes are made, we will notify our clients. By continuing to use NaB POS after such changes, you agree to the revised policy.",
        "By using NaB POS (the “Application”), you agree to the terms of this Privacy Policy and, where applicable, the NaB POS Terms of Service. This Privacy Policy is a legally binding agreement between you (and your company or employer, if applicable) as the user of the Application (“you”, “your”) and NaB POS (“we”, “our”, “us”).",
        "“Personal Information” refers to any information related to an identifiable individual, excluding basic business contact details such as employee name, title, business address, or telephone number.",
      ],
      merchants: {
        title: "Information Collected from Merchants",
        list: [
          "Company name, business address, email address, and phone number",
          "Data related to transactions, sales, products, inventory, and user activity",
          "Technical details such as device, OS, network connection, and IP address",
        ],
        usage: [
          "Provide the Application’s core features (POS, inventory, reporting, etc.)",
          "Improve reliability and performance",
          "Assist in managing your business operations",
        ],
      },
      customers: {
        title: "Information Collected from Merchant Customers",
        list: [
          "Customer name, phone number, and email address",
          "Purchase history and payment details (as recorded by the merchant)",
        ],
        usage: [
          "Processing orders",
          "Generating receipts",
          "Maintaining transaction history",
        ],
      },
      use: {
        title: "Use of Information",
        list: [
          "Operate and maintain the Application",
          "Provide reports and analytics to merchants",
          "Ensure the security and integrity of your data",
          "Comply with legal and regulatory requirements",
        ],
        note: "We do not use your data for advertising or marketing to third parties.",
      },
      sharing: {
        title: "Sharing of Information",
        p1: "We do not share, disclose, sell, or rent your Personal Information to third parties for marketing purposes.",
        p2: "We may disclose information only if required by:",
        list: ["Law or regulation", "Court order or other legal processes"],
      },
      retention: {
        title: "Data Retention",
        p: "We retain your data as long as your account is active or as required by your organization. Archived copies may be maintained for legitimate business purposes and legal compliance.",
      },
      security: {
        title: "Security",
        p: "We follow industry-standard information security practices to safeguard sensitive data. However, no method of transmission or electronic storage is completely secure. While we strive to protect your Personal Information, we cannot guarantee absolute security.",
      },
      control: {
        title: "Control and Access",
        p: "You retain all rights to your Personal Information. You may access, correct, update, or request deletion of your information at any time by contacting us.",
      },
      contact: {
        title: "Contact",
        p1: "If you have any questions about this Privacy Policy or how your data is handled, please contact us at:",
        email: "[your email address]",
      },
    },

    id: {
      title: "Kebijakan Privasi",
      updated: "Terakhir diperbarui: 13 September 2024",
      intro: [
        "Selamat datang di NaB POS! Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan menyimpan informasi Anda. Karena teknologi dan hukum privasi selalu berkembang, kami dapat memperbarui kebijakan ini dari waktu ke waktu. Jika ada perubahan besar, kami akan memberi tahu klien kami. Dengan terus menggunakan NaB POS setelah perubahan tersebut, Anda dianggap menyetujui kebijakan yang telah diperbarui.",
        'Dengan menggunakan NaB POS ("Aplikasi"), Anda setuju dengan ketentuan Kebijakan Privasi ini dan, jika berlaku, Ketentuan Layanan NaB POS. Kebijakan Privasi ini merupakan perjanjian hukum yang mengikat antara Anda (dan perusahaan atau atasan Anda, jika berlaku) sebagai pengguna Aplikasi ("Anda") dan NaB POS ("kami").',
        '"Informasi Pribadi" berarti setiap informasi terkait individu yang dapat diidentifikasi, tidak termasuk detail kontak bisnis dasar seperti nama karyawan, jabatan, alamat bisnis, atau nomor telepon.',
      ],
      merchants: {
        title: "Informasi yang Dikumpulkan dari Merchant",
        list: [
          "Nama perusahaan, alamat bisnis, alamat email, dan nomor telepon",
          "Data terkait transaksi, penjualan, produk, inventaris, dan aktivitas pengguna",
          "Detail teknis seperti perangkat, sistem operasi, koneksi jaringan, dan alamat IP",
        ],
        usage: [
          "Menyediakan fitur utama aplikasi (POS, inventaris, laporan, dll.)",
          "Meningkatkan keandalan dan kinerja",
          "Membantu mengelola operasional bisnis Anda",
        ],
      },
      customers: {
        title: "Informasi yang Dikumpulkan dari Pelanggan Merchant",
        list: [
          "Nama pelanggan, nomor telepon, dan alamat email",
          "Riwayat pembelian dan detail pembayaran (sebagaimana dicatat oleh merchant)",
        ],
        usage: [
          "Memproses pesanan",
          "Membuat struk",
          "Menyimpan riwayat transaksi",
        ],
      },
      use: {
        title: "Penggunaan Informasi",
        list: [
          "Mengoperasikan dan memelihara aplikasi",
          "Menyediakan laporan dan analitik kepada merchant",
          "Menjaga keamanan dan integritas data Anda",
          "Mematuhi persyaratan hukum dan regulasi",
        ],
        note: "Kami tidak menggunakan data Anda untuk iklan atau pemasaran ke pihak ketiga.",
      },
      sharing: {
        title: "Berbagi Informasi",
        p1: "Kami tidak membagikan, mengungkapkan, menjual, atau menyewakan Informasi Pribadi Anda kepada pihak ketiga untuk tujuan pemasaran.",
        p2: "Kami hanya dapat mengungkapkan informasi jika diwajibkan oleh:",
        list: [
          "Hukum atau regulasi",
          "Perintah pengadilan atau proses hukum lainnya",
        ],
      },
      retention: {
        title: "Penyimpanan Data",
        p: "Kami menyimpan data Anda selama akun Anda aktif atau sebagaimana disyaratkan oleh organisasi Anda. Salinan arsip dapat dipertahankan untuk tujuan bisnis yang sah dan kepatuhan hukum.",
      },
      security: {
        title: "Keamanan",
        p: "Kami mengikuti praktik keamanan informasi standar industri untuk melindungi data sensitif. Namun, tidak ada metode transmisi atau penyimpanan elektronik yang sepenuhnya aman. Meskipun kami berupaya melindungi Informasi Pribadi Anda, kami tidak dapat menjamin keamanannya secara mutlak.",
      },
      control: {
        title: "Kontrol dan Akses",
        p: "Anda memiliki semua hak atas Informasi Pribadi Anda. Anda dapat mengakses, memperbarui, memperbaiki, atau meminta penghapusan informasi Anda kapan saja dengan menghubungi kami.",
      },
      contact: {
        title: "Kontak",
        p1: "Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau cara data Anda ditangani, silakan hubungi kami di:",
        email: "[alamat email Anda]",
      },
    },
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center text-orange-600 hover:text-orange-800 transition-colors"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            {lang === "id" ? "Kembali ke Beranda" : "Back to Home"}
          </Link>

          <button
            onClick={() => setLang(lang === "en" ? "id" : "en")}
            className="px-3 py-1 text-sm rounded border border-orange-500 text-orange-600 hover:bg-orange-50 transition"
          >
            {lang === "en" ? "🇮🇩 Bahasa Indonesia" : "🇬🇧 English"}
          </button>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Use a darker base text color for better contrast */}
        <div className="prose prose-lg max-w-none text-gray-800">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">{t.title}</h1>

          <div className="bg-orange-50 border-l-4 border-orange-400 p-6 mb-8">
            <p className="text-orange-800">
              <strong>{t.updated}</strong>
            </p>
          </div>

          <div className="space-y-10">
            <section id="introduction">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {lang === "id" ? "Pendahuluan" : "Introduction"}
              </h2>
              {t.intro.map((p, i) => (
                <p key={i} className="text-gray-700 leading-relaxed">
                  {p}
                </p>
              ))}
            </section>

            <section id="merchants">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t.merchants.title}
              </h2>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                {t.merchants.list.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
              <p className="text-gray-700 mt-4">
                {lang === "id"
                  ? "Informasi ini digunakan untuk:"
                  : "This information is used to:"}
              </p>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                {t.merchants.usage.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </section>

            <section id="customers">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t.customers.title}
              </h2>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                {t.customers.list.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
              <p className="text-gray-700 mt-4">
                {lang === "id"
                  ? "Informasi ini hanya digunakan untuk:"
                  : "This information is used solely for:"}
              </p>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                {t.customers.usage.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </section>

            <section id="use">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t.use.title}
              </h2>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                {t.use.list.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
              <p className="text-gray-700 mt-4">
                <strong>{t.use.note}</strong>
              </p>
            </section>

            <section id="sharing">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t.sharing.title}
              </h2>
              <p className="text-gray-700">{t.sharing.p1}</p>
              <p className="text-gray-700">{t.sharing.p2}</p>
              <ul className="list-disc ml-6 space-y-2 text-gray-700">
                {t.sharing.list.map((x, i) => (
                  <li key={i}>{x}</li>
                ))}
              </ul>
            </section>

            <section id="retention">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t.retention.title}
              </h2>
              <p className="text-gray-700">{t.retention.p}</p>
            </section>

            <section id="security">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t.security.title}
              </h2>
              <p className="text-gray-700">{t.security.p}</p>
            </section>

            <section id="control">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t.control.title}
              </h2>
              <p className="text-gray-700">{t.control.p}</p>
            </section>

            <section id="contact">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {t.contact.title}
              </h2>
              <p className="text-gray-700">{t.contact.p1}</p>
              <p className="text-gray-700 mt-3">
                📧 <strong className="text-gray-900">{t.contact.email}</strong>
              </p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
