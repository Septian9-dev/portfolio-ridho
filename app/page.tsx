"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Data Portofolio berdasarkan CV
const portfolioData = {
  name: "RIDHO ERSYAD SETIANTO",
  tagline: "Professional Operations & Service Staff",
  summary: "Individu yang disiplin, berdedikasi tinggi, dan cepat belajar dengan pengalaman kerja di bidang Operasional Produksi, Layanan Perhotelan (Front Office & Housekeeping), Pergudangan, dan Property Staff.",
  avatarUrl: "/profile.jpg", // Simpan file foto di folder public/profile.jpg
  cvUrl: "/CV_Ersyad.pdf",   // Simpan file PDF CV di folder public/CV_Ersyad.pdf
  contact: {
    email: "389ersyadsetianto@gmail.com",
    phone: "083871565883",
    address: "Perumahan BSD Tangerang RT.01/RW.05 Kec. Pagedangan",
  },
  personalInfo: {
    pob: "Jakarta",
    dob: "27 September 2002",
    gender: "Laki-laki",
    nationality: "Indonesia",
    religion: "Islam",
    maritalStatus: "Lajang (Single)",
    height: "175 cm",
    weight: "57 kg",
  },
  skills: [
    "Kerjasama Tim",
    "Berkomunikasi Dengan Baik",
    "Mampu Melayani Dengan Baik",
    "Mudah Belajar",
    "Disiplin Dan Tepat Waktu",
  ],
  experiences: [
    {
      company: "PT Cabio",
      role: "Operator Produksi",
      period: "12/09/2025 – 26/01/2026",
      tasks: [
        "Mengoperasikan mesin produksi sesuai standar operasional.",
        "Melakukan pekerjaan sesuai dengan instruksi pimpinan / leader.",
        "Membantu proses packing barang yang belum selesai.",
        "Mengambil barang dari gudang untuk diproses.",
        "Mengsortir barang setelah pengerjaan selesai.",
        "Melakukan packing akhir pada produk yang telah selesai dikerjakan.",
      ],
    },
    {
      company: "Happy Healthy",
      role: "Office Boy",
      period: "24/04/2025 – 15/07/2025",
      tasks: [
        "Jaga dan pelihara kebersihan area publik secara rutin.",
        "Membantu atasan dan karyawan lain dalam kebutuhan operasional.",
        "Menjaga kebersihan dan kerapian ruang tamu/ruang tunggu.",
        "Melakukan penanganan project harian sesuai schedule.",
        "Memberikan bantuan dan melayani tamu yang sedang memerlukan bantuan.",
      ],
    },
    {
      company: "Stay'd Hotel",
      role: "Staff Property",
      period: "01/12/2024 – 10/04/2025",
      tasks: [
        "Membersihkan dan merawat kebersihan area publik hotel.",
        "Menerapkan prinsip layanan 3S1K (Sapa, Sopan, Senyum, Kebersihan).",
        "Melaksanakan pekerjaan sesuai arahan serta instruksi atasan.",
        "Membersihkan kamar tamu sesuai standar dan instruksi dari office.",
        "Melayani tamu dengan baik.",
        "Menyelesaikan project operasional yang diberikan pimpinan.",
      ],
    },
    {
      company: "Hollywings",
      role: "Daily Worker (Staff Gudang)",
      period: "10/03/2024 – 23/07/2024",
      tasks: [
        "Melaksanakan tugas operasional sesuai instruksi pimpinan.",
        "Melakukan pemeliharaan dan stock opname barang gudang.",
        "Mempacking barang dengan rapi dan aman sesuai instruksi.",
        "Mengantarkan barang yang telah dikemas ke area tujuan.",
        "Menyiapkan serta menyusun barang pesanan.",
      ],
    },
    {
      company: "PT Bobobox",
      role: "Branch Staff (Housekeeping & Front Office)",
      period: "02/09/2023 – 14/01/2024",
      tasks: [
        "Menjalankan tugas sesuai jadwal Housekeeping maupun Front Office.",
        "Menerapkan budaya kerja 3S1K (Sapa, Sopan, Senyum, Kebersihan).",
        "Menjaga ketertiban, kebersihan, dan kedisiplinan kerja.",
        "Menyelesaikan project operasional sesuai schedule dan kebutuhan atasan.",
      ],
    },
  ],
  education: [
    {
      institution: "SMAN 22 KABUPATEN TANGERANG",
      major: "IPS",
      period: "2018 – 2021",
    },
    {
      institution: "MTS NEGERI 5 TANGERANG",
      major: "Pendidikan Menengah Pertama",
      period: "2015 – 2018",
    },
    {
      institution: "MIN 6 TANGERANG",
      major: "Pendidikan Dasar",
      period: "2009 – 2015",
    },
  ],
};

// Variasi Animasi Framer Motion
const fadeInUp = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-teal-400 selection:text-black overflow-x-hidden">
      {/* Glow Decorator Hijau Tosca */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-teal-500/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed bottom-0 right-10 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/80 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-black font-black text-lg shadow-lg shadow-teal-500/25">
              RE
            </div>
            <span className="font-black text-lg tracking-wider text-white">
              RIDHO ERSYAD
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 text-sm font-semibold">
            {[
              { name: 'Tentang Saya', href: '#about' },
              { name: 'Keterampilan', href: '#skills' },
              { name: 'Pengalaman', href: '#experience' },
              { name: 'Pendidikan', href: '#education' },
              { name: 'Kontak', href: '#contact' },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="text-zinc-300 hover:text-teal-400 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-teal-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-zinc-400 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-zinc-950 border-b border-zinc-800 px-4 pt-2 pb-4 space-y-2 backdrop-blur-lg"
          >
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-zinc-300 hover:text-teal-400">Tentang Saya</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-zinc-300 hover:text-teal-400">Keterampilan</a>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-zinc-300 hover:text-teal-400">Pengalaman</a>
            <a href="#education" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-zinc-300 hover:text-teal-400">Pendidikan</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-zinc-300 hover:text-teal-400">Kontak</a>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            
            {/* Foto Profil */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative order-1 lg:order-2 flex-shrink-0"
            >
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-3xl overflow-hidden border-2 border-teal-400 shadow-[0_0_40px_rgba(45,212,191,0.25)] bg-zinc-900 flex items-center justify-center">
                <img
                  src={portfolioData.avatarUrl}
                  alt={portfolioData.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerText = 'Foto Profil';
                  }}
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-teal-400 to-emerald-400 text-black px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider shadow-lg">
                Available to Work
              </div>
            </motion.div>

            {/* Informasi Hero */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-6 text-center lg:text-left order-2 lg:order-1 max-w-2xl"
            >
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-teal-500/10 text-teal-300 border border-teal-500/30">
                <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping"></span>
                Portofolio Profesional
              </span>
              <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight leading-tight">
                {portfolioData.name}
              </h1>
              <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
                {portfolioData.tagline}
              </p>
              <p className="text-zinc-400 leading-relaxed text-base sm:text-lg">
                {portfolioData.summary}
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
                {/* Tombol Unduh CV */}
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={portfolioData.cvUrl}
                  download
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-400 to-emerald-500 hover:from-teal-300 hover:to-emerald-400 text-black font-extrabold transition-all shadow-lg shadow-teal-500/20 flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Unduh CV
                </motion.a>

                {/* Kirim Email */}
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={`mailto:${portfolioData.contact.email}`}
                  className="px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 font-bold transition-all flex items-center gap-2"
                >
                  <svg className="w-5 h-5 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Kirim Email
                </motion.a>

                {/* Hubungi WhatsApp */}
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={`https://wa.me/${portfolioData.contact.phone.replace(/^0/, '62')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 font-bold transition-all flex items-center gap-2"
                >
                  <svg className="w-5 h-5 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 2c-5.514 0-9.999 4.486-9.999 10 0 1.763.46 3.481 1.332 5.003L2 22l5.127-1.343c1.472.802 3.136 1.222 4.904 1.222 5.514 0 10-4.486 10-10s-4.486-10-9.999-10zm5.952 14.151c-.249.702-1.246 1.356-2.012 1.517-.521.109-1.201.196-3.486-.752-2.924-1.213-4.809-4.188-4.956-4.384-.144-.196-1.192-1.587-1.192-3.028 0-1.441.752-2.152 1.021-2.441.27-.289.589-.361.786-.361.196 0 .393.002.564.01.182.008.428-.069.67.511.249.595.849 2.073.923 2.223.075.15.124.326.025.521-.099.196-.149.317-.296.491-.148.175-.312.392-.446.526-.148.148-.302.309-.13.604.172.296.763 1.258 1.637 2.037 1.124.999 2.072 1.31 2.368 1.458.296.148.468.124.64-.075.172-.196.738-.859.934-1.154.196-.296.393-.246.663-.148.27.099 1.721.811 2.017.959.296.148.492.221.565.344.073.123.073.713-.176 1.415z" />
                  </svg>
                  WhatsApp
                </motion.a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-24">
        
        {/* About / Personal Info Section */}
        <motion.section 
          id="about" 
          className="scroll-mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="w-2.5 h-8 bg-gradient-to-b from-teal-400 to-emerald-500 rounded-full"></div>
            <h2 className="text-3xl font-extrabold text-white">Informasi Pribadi</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {Object.entries({
              "Tempat Lahir": portfolioData.personalInfo.pob,
              "Tanggal Lahir": portfolioData.personalInfo.dob,
              "Jenis Kelamin": portfolioData.personalInfo.gender,
              "Kebangsaan": portfolioData.personalInfo.nationality,
              "Agama": portfolioData.personalInfo.religion,
              "Status Pernikahan": portfolioData.personalInfo.maritalStatus,
              "Tinggi Badan": portfolioData.personalInfo.height,
              "Berat Badan": portfolioData.personalInfo.weight,
            }).map(([label, value], idx) => (
              <motion.div 
                key={idx} 
                whileHover={{ y: -4 }}
                className="bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-5 hover:border-teal-400/50 transition-all backdrop-blur-sm"
              >
                <p className="text-xs text-teal-400 font-bold uppercase tracking-wider mb-1">{label}</p>
                <p className="text-white font-semibold text-base">{value}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          id="skills" 
          className="scroll-mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="w-2.5 h-8 bg-gradient-to-b from-teal-400 to-emerald-500 rounded-full"></div>
            <h2 className="text-3xl font-extrabold text-white">Keterampilan & Keahlian</h2>
          </div>
          <motion.div variants={staggerContainer} className="flex flex-wrap gap-4">
            {portfolioData.skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-6 py-3.5 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-teal-400 transition-all text-white font-bold flex items-center gap-3 shadow-md group"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-teal-400 group-hover:scale-125 transition-transform"></span>
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Experience Section */}
        <motion.section 
          id="experience" 
          className="scroll-mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="w-2.5 h-8 bg-gradient-to-b from-teal-400 to-emerald-500 rounded-full"></div>
            <h2 className="text-3xl font-extrabold text-white">Pengalaman Kerja</h2>
          </div>
          <div className="relative border-l-2 border-zinc-800 ml-4 pl-6 sm:pl-8 space-y-12">
            {portfolioData.experiences.map((exp, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Marker Dot Hijau Tosca */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-black border-2 border-teal-400 group-hover:bg-teal-400 group-hover:shadow-[0_0_15px_rgba(45,212,191,0.8)] transition-all"></div>
                
                <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-6 sm:p-8 hover:border-teal-400/50 transition-all backdrop-blur-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-teal-300 transition-colors">{exp.role}</h3>
                      <p className="text-teal-400 font-semibold text-lg">{exp.company}</p>
                    </div>
                    <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold bg-black text-teal-300 border border-teal-500/30 w-fit">
                      📅 {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-3">
                    {exp.tasks.map((task, taskIdx) => (
                      <li key={taskIdx} className="flex items-start gap-3 text-sm sm:text-base text-zinc-300">
                        <span className="text-teal-400 mt-1">✓</span>
                        <span className="leading-relaxed">{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section 
          id="education" 
          className="scroll-mt-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <div className="flex items-center gap-3 mb-10">
            <div className="w-2.5 h-8 bg-gradient-to-b from-teal-400 to-emerald-500 rounded-full"></div>
            <h2 className="text-3xl font-extrabold text-white">Pendidikan</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {portfolioData.education.map((edu, index) => (
              <motion.div 
                key={index} 
                whileHover={{ y: -6 }}
                className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-6 hover:border-teal-400/50 transition-all backdrop-blur-sm flex flex-col justify-between space-y-4"
              >
                <div>
                  <span className="text-xs font-black text-black uppercase tracking-wider bg-gradient-to-r from-teal-400 to-emerald-400 px-3 py-1 rounded-full">
                    {edu.period}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-4 mb-2">{edu.institution}</h3>
                  <p className="text-sm text-zinc-400 font-medium">{edu.major}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Banner Section */}
        <motion.section 
          id="contact" 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="relative bg-zinc-900/80 border border-teal-500/30 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl overflow-hidden backdrop-blur-md"
        >
          <div className="absolute -top-20 -right-20 w-48 h-48 bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />
          <h2 className="text-3xl sm:text-4xl font-black text-white">Siap Berkontribusi untuk Perusahaan Anda</h2>
          <p className="text-zinc-300 max-w-xl mx-auto text-base leading-relaxed">
            Terbuka untuk peluang kerja operasional, hospitality, gudang, maupun staf produksi. Jangan ragu untuk menghubungi saya melalui kontak di bawah ini.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4 relative z-10">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={portfolioData.cvUrl}
              download
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-teal-400 to-emerald-500 hover:from-teal-300 hover:to-emerald-400 text-black font-extrabold transition-all shadow-lg shadow-teal-500/20 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Unduh CV PDF
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`mailto:${portfolioData.contact.email}`}
              className="px-8 py-3.5 rounded-xl bg-black hover:bg-zinc-950 text-white border border-zinc-700 font-bold transition-all"
            >
              Kirim Email
            </motion.a>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 text-center text-sm text-zinc-500">
        <div className="max-w-6xl mx-auto px-4">
          <p>© {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}