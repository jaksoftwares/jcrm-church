// app/about/page.tsx

import Image from 'next/image'

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center text-center text-white"
        style={{ height: '75vh' }}
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/about.png')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>

        {/* Centered Text Content */}
        <div className="relative z-10 px-6">
          <h1 className="text-5xl md:text-6xl font-bold uppercase">
            Igniting Faith, Transforming Lives
          </h1>
          <p className="text-xl md:text-2xl mt-2">Reviving Souls, Transforming Nations</p>
        </div>
      </section>

      {/* About JCRM Section */}
      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center md:items-stretch">
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <Image
              src="/images/ps.jpg"
              alt="JCRM Founders"
              width={600}
              height={320}
              className="w-full h-80 object-cover rounded-lg shadow-lg"
              priority
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 md:pl-6 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black">ABOUT JCRM</h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              At JCRM, our foundation is Jesus Christ, our message is His Gospel, and our mission is to see souls saved
              and discipled in His name. From humble beginnings to a thriving global ministry, we have remained steadfast
              in our calling to proclaim the truth of God’s Word and extend His grace to all. Founded in <strong>[Year]</strong>,
              our ministry was built on faith, prayer, and obedience to God’s calling. Today, we serve <strong>[Number]</strong> 
              of people weekly, reaching lives with the truth of Jesus. With <strong>[Number]</strong> ministries and outreach
              programs, we bring hope through Christ-centered service. Located in <strong>[City, Country]</strong>, 
              JCRM stands as a beacon of God’s love and revival.
            </p>
            <p className="mt-4">
              <a href="#" className="text-blue-600 hover:underline font-semibold">
                Join Us This Sunday →
              </a>{' '}
              <span className="text-red-600">Come encounter the presence of God!</span>
            </p>
          </div>
        </div>
      </section>

      {/* About Section with Overlay */}
      <section id="about" className="relative h-72 md:h-96">
        <Image
          src="/images/about.png"
          alt="Background Image"
          fill
          className="object-cover absolute inset-0"
          priority
        />
        <div className="relative container mx-auto py-10 px-5 bg-gray-900 bg-opacity-70 h-full flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-center text-red-500 mb-5">About</h2>
          <p className="text-xl text-center text-gray-300">
            Experiencing God&apos;s Power, Embracing His Love, and Walking in His Grace
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="mission-vision" className="py-10 px-5 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-black">
            <h2 className="text-4xl font-bold mb-5">OUR MISSION & VISION</h2>
          </div>
          <div className="md:w-1/2 bg-sky-500 p-5 rounded-md text-black">
            <p className="mb-3">
              At JCRM, our mission is to lead people into a deeper relationship with Jesus Christ. We are committed
              to preaching the Gospel with passion, fostering a strong faith-based community, and equipping believers
              with the Word of God.
            </p>
            <p>
              We envision a world transformed by the power of the Holy Spirit, where people from all walks of life
              experience the love, grace, and salvation of Jesus Christ. Our desire is to ignite a global revival that
              touches nations, heals the brokenhearted, and brings people closer to God.
            </p>
          </div>
        </div>
      </section>

      {/* Our Ministries Section */}
      <section id="ministries" className="py-10 px-5 bg-white relative overflow-hidden">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-red-500 mb-5">OUR MINISTRIES</h2>

          {/* Carousel */}
          <div className="carousel flex space-x-5 overflow-x-auto scroll-smooth snap-x snap-mandatory">
            {[
              "Children's Ministry",
              'Youth Ministry',
              'Worship & Creative Arts Ministry',
              'Evangelism & Missions',
              'Evangelism & Missions',
            ].map((ministry, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-full md:w-1/4 bg-sky-500 p-5 rounded-md text-center text-black snap-center"
              >
                <Image
                  src="/images/jcrm-logo.png"
                  alt={ministry}
                  width={120}
                  height={120}
                  className="mx-auto mb-3"
                />
                <h3 className="text-2xl font-bold">{ministry}</h3>
              </div>
            ))}
          </div>

          {/* Navigation Arrows: optional, can be implemented later with React hooks */}
        </div>
      </section>

      {/* Get Involved Section */}
      <section id="get-involved" className="py-10 px-5 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-red-500 mb-5">GET INVOLVED</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Visit Us This Sunday',
                desc: 'Come and worship with us.',
                img: '/images/ps.jpg',
              },
              {
                title: 'Become a Member',
                desc: 'Grow in faith and community.',
                img: '/images/ps.jpg',
              },
              {
                title: 'Join a Ministry',
                desc: "Use your gifts for God's glory!",
                img: '/images/ps.jpg',
              },
              {
                title: 'Give & Support',
                desc: "Partner with us in advancing God's kingdom.",
                img: '/images/ps.jpg',
              },
            ].map(({ title, desc, img }, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <Image src={img} alt={title} width={48} height={48} className="mb-3" />
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <p className="text-gray-700">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
