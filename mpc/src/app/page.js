import Link from 'next/link';

// ✅ SEO metadata using App Router's format
export const metadata = {
  title: 'Modern Pest Control | Home',
  description: 'We offer professional pest control services including white ants treatment, cockroach control, and rat control. Trusted since 1998.',
  keywords: ['Pest Control', 'White Ants', 'Cockroach Control', 'Rat Control', 'Modern Pest Control'],
  authors: [{ name: 'Modern Pest Control' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Modern Pest Control | Home',
    description: 'Reliable pest control services since 1998 — white ants, cockroach, and rat treatment.',
    url: 'https://modernpestcontrol.in',
    siteName: 'Modern Pest Control',
    locale: 'en_IN',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
   other: {
    'google-site-verification': 'wLV-lHgeC7XpDY2JIwjdBJ-yC4qakDaqdJ7itwlhAck',
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navbar */}
      <nav className="bg-green-900 text-white p-4 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0 fixed top-0 w-full z-50 shadow-md">
        <h1 className="text-2xl font-bold">Modern Pest Control</h1>
        <div className="space-x-4">
          <Link href="#services">Services</Link>
          <Link href="#about">About</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </nav>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="text-center py-16 px-4 bg-green-50">
          <h2 className="text-3xl font-semibold text-green-900">Expert Pest Control Services</h2>
          <p className="mt-4 text-lg max-w-xl mx-auto">
            We specialize in white ants treatment, cockroach control, and rat control at a reasonable price.
          </p>
          <a href="tel:9849315503" className="mt-6 inline-block bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800">
            Call Us: 9849315503
          </a>
        </section>

        {/* Services Section */}
        <section id="services" className="py-12 px-4 bg-white text-center">
          <h3 className="text-3xl font-extrabold mb-8 text-green-900">Professional Pest Solutions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="shadow-lg p-6 rounded-lg border">
              <h4 className="text-lg font-semibold mb-2 text-green-800">White Ants Treatment</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Our specialized treatment ensures protection from white ants and termites using effective and long-lasting methods.</p>
            </div>
            <div className="shadow-lg p-6 rounded-lg border">
              <h4 className="text-lg font-semibold mb-2 text-green-800">Cockroach Control</h4>
              <p className="text-gray-600 text-sm leading-relaxed">We eliminate cockroach infestations with eco-safe techniques, keeping your premises clean and hygienic.</p>
            </div>
            <div className="shadow-lg p-6 rounded-lg border">
              <h4 className="text-lg font-semibold mb-2 text-green-800">Rat Control</h4>
              <p className="text-gray-600 text-sm leading-relaxed">Protect your space from rodents using safe, humane, and proven control solutions tailored to your needs.</p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 px-4 bg-green-50 text-center">
          <h3 className="text-2xl font-semibold mb-6 text-green-900">About Us</h3>
          <p className="max-w-2xl mx-auto text-lg">
            Modern Pest Control was founded in 1998. With over two decades of experience, we have become a trusted name in the pest control industry. Our team consists of efficient and highly skilled workers who are dedicated to delivering the best service with a strong focus on quality and effective treatment methods.
          </p>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 px-4 text-center bg-white">
          <h3 className="text-2xl font-semibold mb-6 text-green-900">Contact Us</h3>
          <p className="mb-4">Call us at <a href="tel:123456789" className="text-green-800 font-semibold">9849315503</a> or fill out the form below.</p>
          <form className="max-w-md mx-auto grid gap-4 text-left">
            <input type="text" placeholder="Your Name" className="border p-2 rounded w-full" />
            <input type="email" placeholder="Your Email" className="border p-2 rounded w-full" />
            <textarea placeholder="Your Message" rows={4} className="border p-2 rounded w-full"></textarea>
            <button type="submit" className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
              Send Message
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-green-900 text-white p-4 text-center">
        &copy; 2025 Modern Pest Control. All rights reserved.
      </footer>
    </div>
  );
}
