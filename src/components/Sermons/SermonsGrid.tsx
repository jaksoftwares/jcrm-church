// src/components/sermons/SermonsGrid.tsx
import { SermonCard } from "./SermonCard";

const mockSermons = [
  {
    title: "Are you for Sin or Righteousness?",
    slug: "are-you-for-sin-or-righteousness",
    thumbnail: "/sermons/are-you-for-sin-or-righteous.jpg",
    preacher: "Apostle Arthur Likhakasi",
    date: "2025-06-16",
    link: "https://youtu.be/czNxNxuxccs",
  },
  {
    title: "Arise and Praise the Lord",
    slug: "arise-and-praise-the-lord",
    thumbnail: "/sermons/arise and praise the lord.png",
    preacher: "Apostle Arthur Likhakasi",
    date: "2025-06-09",
    link: "https://youtu.be/Ctq6X2HlmF8",
  },
  {
    title: "Overcoming Evil Gates",
    slug: "overcoming-evil-gates",
    thumbnail: "/sermons/overcoming-evil-gates.jpg",
    preacher: "Apostle Arthur Likhakasi",
    date: "2025-06-02",
    link: "https://youtu.be/KHsC_dOMGmE",
  },

  // Newer sermons
  {
    title: "God’s Blessing Upon Your Life",
    slug: "gods-blessing-upon-your-life",
    thumbnail: "/sermons/god's blessing.png",
    preacher: "Apostle Arthur Lenax",
    date: "2025-09-28",
    link: "https://youtu.be/-4vIG8Uf1dQ",
  },
  {
    title: "Operating at the Altar of Sacrifice",
    slug: "operating-at-the-altar-of-sacrifice",
    thumbnail: "/sermons/operating at the altar.png",
    preacher: "Apostle Arthur Lenax",
    date: "2025-09-21",
    link: "https://youtu.be/s0TIqVelv70",
  },
  {
    title: "Connecting to Divine Abundance",
    slug: "connecting-to-divine-abundance",
    thumbnail: "/sermons/connecting to divine abundance.png",
    preacher: "Apostle Arthur Lenax",
    date: "2025-09-14",
    link: "https://youtu.be/tcQuOe_sXpQ",
  },
  {
    title: "Honoring the Lord of Harvest",
    slug: "honoring-the-lord-of-harvest",
    thumbnail: "/sermons/honoring the lord of harvest.png",
    preacher: "Apostle Arthur Lenax",
    date: "2025-09-07",
    link: "https://youtu.be/pKNbOMdcLOw",
  },
  {
    title: "Taking Dominion for Your Vision",
    slug: "taking-dominion-for-your-vision",
    thumbnail: "/sermons/taking dominion for your vision.png",
    preacher: "Apostle Arthur Lenax",
    date: "2025-08-31",
    link: "https://youtu.be/R_6hPiKKU0s",
  },
  {
    title: "Finding Peace at the Lord’s Feet",
    slug: "finding-peace-at-the-lords-feet",
    thumbnail: "/sermons/finding rest at the lord.png",
    preacher: "Apostle Arthur Lenax",
    date: "2025-07-13",
    link: "https://youtu.be/iwRZhUAbE4Y",
  },
  {
    title: "When God Gives You Rest",
    slug: "when-god-gives-you-rest",
    thumbnail: "/sermons/when god gives you rest.png",
    preacher: "Apostle Arthur Lenax",
    date: "2025-07-06",
    link: "https://youtu.be/UTRzpb5w02w",
  },
  {
    title: "Standing Your Ground for Justice",
    slug: "standing-your-ground-for-justice",
    thumbnail: "/sermons/standing your ground for justice.png",
    preacher: "Apostle Arthur Lenax",
    date: "2025-06-29",
    link: "https://youtu.be/9Uv382LgDrw",
  },
  {
    title: "From the Storm to the Baracha",
    slug: "from-the-storm-to-the-baracha",
    thumbnail: "/sermons/from the storm to baracha.png",
    preacher: "Apostle Arthur Lenax",
    date: "2025-06-08",
    link: "https://youtu.be/-Hvfn3Evu0w",
  },
  {
    title: "Connecting with God’s Wealth & Riches",
    slug: "connecting-with-gods-wealth-and-riches",
    thumbnail: "/sermons/connecting with god.png",
    preacher: "Apostle Arthur Lenax",
    date: "2025-05-18",
    link: "https://youtu.be/g1RJRtBG0KM",
  },
  {
    title: "Declare the Word of Your Testimony",
    slug: "declare-the-word-of-your-testimony",
    thumbnail: "/sermons/declare the word of your testimony.png",
    preacher: "Apostle Arthur Lenax",
    date: "2024-10-27",
    link: "https://youtu.be/77yOpNE35h8",
  },
  {
    title: "Acknowledging Your Need for God",
    slug: "acknowledging-your-need-for-god",
    thumbnail: "/sermons/acknowledging your need for god.png",
    preacher: "Apostle Arthur Lenax",
    date: "2025-01-26",
    link: "https://youtu.be/8bbWz1n1mHM",
  },
  {
    title: "A Walk With God",
    slug: "a-walk-with-god",
    thumbnail: "/sermons/walk with god.png",
    preacher: "Apostle Arthur Lenax",
    date: "2025-01-05",
    link: "https://youtu.be/F6MJRiqd09k",
  },
  {
    title: "2025 Youth Conference",
    slug: "2025-youth-conference",
    thumbnail: "/sermons/youth-conference.jpg",
    preacher: "Pst. Winnie Lenax",
    date: "2025-04-17",
    link: "https://youtu.be/eW3jJ3lXekc",
  },
  {
    title: "Overcoming Evil Gates and Guards",
    slug: "overcoming-evil-gates-and-guards",
    thumbnail: "/sermons/overcoming evil gates.png",
    preacher: "Apostle Arthur Lenax",
    date: "2025-04-20",
    link: "https://youtu.be/KHsC_dOMGmE",
  },
  {
    title: "Shake Off the Dust and Possess Your Territory",
    slug: "shake-off-the-dust-and-possess-your-territory",
    thumbnail: "/sermons/shake off the dust and possess your destiny.png",
    preacher: "Apostle Arthur Lenax",
    date: "2024-07-14",
    link: "https://youtu.be/3vdnUA93G08",
  },
  {
    title: "Creating Room for God’s Visitation",
    slug: "creating-room-for-gods-visitation",
    thumbnail: "/sermons/creating room for god's visitation.png",
    preacher: "Apostle Arthur Lenax",
    date: "2025-02-02",
    link: "https://youtu.be/dH0d657A8bA",
  },
  {
    title: "How God Separates People for Himself",
    slug: "how-god-separates-people-for-himself",
    thumbnail: "/sermons/how god seperates people for himself.png",
    preacher: "Pst. Hillary Khatasio",
    date: "2025-03-16",
    link: "https://youtu.be/3d1BL5D5Z7A",
  },
  {
    title: "The Key to Your Miracle",
    slug: "the-key-to-your-miracle",
    thumbnail: "/sermons/the key to your miracle.png",
    preacher: "Apostle Arthur Lenax",
    date: "2024-11-03",
    link: "https://youtu.be/SRX0W7tuvZc",
  },
];


export function SermonsGrid() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10 text-center">
          Sermon Archive
        </h2>

     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {mockSermons.map((sermon) => (
    <SermonCard key={sermon.slug} sermon={sermon} sermons={mockSermons} />
  ))}
</div>

        {/* Load More - Optional */}
        <div className="text-center mt-10">
          <button className="text-[#0077C8] font-medium hover:underline">
            Load More Sermons
          </button>
        </div>
      </div>
    </section>
  );
}