
import { HomeDesign, Banner, Article, CustomPage, PromoCard, Testimonial, SiteNotification, PopupModalContent, SiteInfo, PortfolioProject } from './types';

export const INITIAL_HOMES: HomeDesign[] = [
  {
    id: 'ddh-001',
    name: 'LONDON',
    description: 'A masterpiece of modern architecture, The Serene Villa offers a tranquil escape with its open-plan living spaces, large glass walls, and a seamless connection to the surrounding nature. Perfect for families seeking both comfort and style.',
    area: 597,
    bedrooms: 5,
    bathrooms: 6,
    parking: 4,
    images: [
      'https://picsum.photos/seed/london-house/800/600',
      'https://picsum.photos/seed/villa2/800/600',
      'https://picsum.photos/seed/villa3/800/600',
    ],
    isFeatured: true,
    promotion_enabled: true,
    discount_percentage: 22,
    price_popular_original: 22250000,
    price_popular_discounted: 17280000,
    price_signature_original: 26700000,
    price_signature_discounted: 20820000,
    seo: {
      title: 'The Serene Villa - Modern Family Home | DDHOUSE',
      description: 'Discover The Serene Villa, a 250m² modern masterpiece with 4 bedrooms and 3 bathrooms. Experience tranquil living with open-plan spaces and nature integration.'
    }
  },
  {
    id: 'ddh-002',
    name: 'ANTONIO',
    description: 'Experience city living at its finest in the Urban Loft. Featuring industrial-chic design elements, a double-height ceiling in the living area, and a private rooftop terrace, this home is designed for the modern urbanite.',
    area: 505,
    bedrooms: 5,
    bathrooms: 6,
    parking: 4,
    images: [
      'https://picsum.photos/seed/antonio-house/800/600',
      'https://picsum.photos/seed/loft2/800/600',
      'https://picsum.photos/seed/loft3/800/600',
    ],
    isFeatured: true,
    promotion_enabled: true,
    discount_percentage: 18,
    price_popular_original: 14940000,
    price_popular_discounted: 12310000,
    price_signature_original: 17920000,
    price_signature_discounted: 14720000,
    seo: {
      title: 'Urban Loft - Industrial-Chic City Living | DDHOUSE',
      description: 'Explore the Urban Loft, a 180m² home with 2 bedrooms and a private rooftop terrace. Designed for the modern urbanite seeking style and function.'
    }
  },
  {
    id: 'ddh-003',
    name: 'RICHMOND',
    description: 'Wake up to the sound of waves in this stunning Coastal Retreat. With panoramic ocean views, light and airy interiors, and expansive decks for outdoor entertaining, it’s the ultimate beachside sanctuary.',
    area: 460,
    bedrooms: 6,
    bathrooms: 7,
    parking: 2,
    images: [
      'https://picsum.photos/seed/richmond-house/800/600',
      'https://picsum.photos/seed/coast2/800/600',
    ],
    isFeatured: true,
    promotion_enabled: true,
    discount_percentage: 22,
    price_popular_original: 16560000,
    price_popular_discounted: 12860000,
    price_signature_original: 19890000,
    price_signature_discounted: 15400000,
    seo: {
      title: 'Coastal Retreat - Beachside Sanctuary | DDHOUSE',
      description: 'The Coastal Retreat offers panoramic ocean views in a 220m² layout with 3 bedrooms. Your ultimate beachside sanctuary awaits.'
    }
  },
   {
    id: 'ddh-004',
    name: 'ADLER',
    description: 'Nestled in the mountains, this cozy chalet combines rustic charm with modern amenities. Features include a stone fireplace, exposed wood beams, and large windows that frame breathtaking mountain vistas.',
    area: 745,
    bedrooms: 4,
    bathrooms: 5,
    parking: 4,
    images: [
      'https://picsum.photos/seed/adler-house/800/600',
      'https://picsum.photos/seed/chalet2/800/600',
      'https://picsum.photos/seed/chalet3/800/600',
    ],
    isFeatured: false,
    promotion_enabled: true,
    discount_percentage: 29,
    price_popular_original: 25660000,
    price_popular_discounted: 18210000,
    price_signature_original: 30920000,
    price_signature_discounted: 22030000,
  },
  {
    id: 'ddh-005',
    name: 'PADDINGTON-S',
    description: 'A bold statement in minimalist design. The Cube House focuses on clean lines, geometric shapes, and a monochromatic palette to create a space that is both calming and intellectually stimulating.',
    area: 370,
    bedrooms: 4,
    bathrooms: 5,
    parking: 3,
    images: [
      'https://picsum.photos/seed/paddington-house/800/600',
      'https://picsum.photos/seed/cube2/800/600',
    ],
    isFeatured: false,
    promotion_enabled: true,
    discount_percentage: 28,
    price_popular_original: 13600000,
    price_popular_discounted: 9860000,
    price_signature_original: 16360000,
    price_signature_discounted: 11880000,
  },
  {
    id: 'ddh-006',
    name: 'Suburban Classic',
    description: 'The perfect family home, the Suburban Classic offers spacious rooms, a large backyard, and a timeless design. Its functional layout and warm, inviting atmosphere make it an ideal place to create lasting memories.',
    area: 280,
    bedrooms: 5,
    bathrooms: 4,
    parking: 2,
    images: [
      'https://picsum.photos/seed/suburb1/800/600',
      'https://picsum.photos/seed/suburb2/800/600',
      'https://picsum.photos/seed/suburb3/800/600',
    ],
    isFeatured: false,
    promotion_enabled: false,
  },
];

export const INITIAL_BANNERS: Banner[] = [
  {
    id: 'banner-new-001',
    imageUrl: 'https://i.ibb.co/n8Rzc0gF/banner-1.png',
  },
  {
    id: 'banner-001',
    imageUrl: 'https://i.ibb.co/n8Rzc0gF/banner-1.png',
  },
  {
    id: 'banner-002',
    imageUrl: 'https://i.ibb.co/n8Rzc0gF/banner-1.png',
  },
  {
    id: 'banner-003',
    imageUrl: 'https://picsum.photos/seed/banner3/1200/500',
  },
];

export const INITIAL_ARTICLES: Article[] = [
  {
    id: 'art-001',
    slug: '5-tips-for-choosing-the-perfect-home-design',
    title: '5 เคล็ดลับในการเลือกแบบบ้านที่ใช่สำหรับคุณ',
    content: `การเลือกแบบบ้านเป็นหนึ่งในการตัดสินใจที่สำคัญที่สุดในชีวิต นี่คือ 5 เคล็ดลับที่จะช่วยให้คุณตัดสินใจได้ง่ายขึ้น:

1. **กำหนดงบประมาณของคุณ:** ทราบว่าคุณสามารถจ่ายได้เท่าไหร่ ซึ่งจะช่วยจำกัดตัวเลือกของคุณให้แคบลง
2. **พิจารณาไลฟ์สไตล์ของคุณ:** คุณต้องการพื้นที่เปิดโล่งสำหรับความบันเทิง หรือต้องการห้องแยกสำหรับทำงาน?
3. **คิดถึงอนาคต:** ครอบครัวของคุณจะขยายใหญ่ขึ้นหรือไม่? คุณต้องการพื้นที่สำหรับงานอดิเรกใหม่ๆ หรือไม่?
4. **ทำเลที่ตั้ง:** ตรวจสอบให้แน่ใจว่าแบบบ้านที่คุณเลือกเหมาะสมกับที่ดินและสภาพแวดล้อม
5. **ปรึกษาผู้เชี่ยวชาญ:** สถาปนิกและผู้สร้างบ้านสามารถให้คำแนะนำที่มีค่าและช่วยให้คุณหลีกเลี่ยงข้อผิดพลาดที่มีค่าใช้จ่ายสูงได้`,
    excerpt: 'การเลือกแบบบ้านเป็นการตัดสินใจครั้งใหญ่ ค้นพบ 5 เคล็ดลับสำคัญที่จะช่วยให้คุณเลือกแบบบ้านในฝันที่เหมาะสมกับไลฟ์สไตล์และงบประมาณของคุณ',
    imageUrl: 'https://picsum.photos/seed/article1/800/600',
    author: 'DDHOUSE Staff',
    publishedDate: '2023-10-26',
    tags: ['เคล็ดลับ', 'การเลือกบ้าน', 'ออกแบบบ้าน'],
    seo: {
      title: '5 เคล็ดลับเลือกแบบบ้านที่ใช่สำหรับคุณ | DDHOUSE',
      description: 'คู่มือฉบับสมบูรณ์! อ่าน 5 เคล็ดลับสำคัญในการเลือกแบบบ้านที่ใช่ ทั้งด้านงบประมาณ ไลฟ์สไตล์ และการวางแผนเพื่ออนาคต'
    }
  },
  {
    id: 'art-002',
    slug: 'the-rise-of-sustainable-home-design',
    title: 'เทรนด์การออกแบบบ้านอย่างยั่งยืนที่กำลังมาแรง',
    content: `การออกแบบบ้านอย่างยั่งยืน หรือ "บ้านสีเขียว" กำลังได้รับความนิยมมากขึ้นเรื่อยๆ ไม่เพียงแต่จะดีต่อสิ่งแวดล้อม แต่ยังช่วยประหยัดค่าใช้จ่ายด้านพลังงานในระยะยาวอีกด้วย เทรนด์หลักๆ ประกอบด้วย:

- **การใช้พลังงานแสงอาทิตย์:** การติดตั้งแผงโซลาร์เซลล์เพื่อผลิตไฟฟ้าใช้เอง
- **การออกแบบที่รับลมและแสงธรรมชาติ:** ลดการใช้เครื่องปรับอากาศและไฟฟ้าส่องสว่าง
- **การเลือกใช้วัสดุที่เป็นมิตรต่อสิ่งแวดล้อม:** เช่น ไม้รีไซเคิล, ฉนวนกันความร้อนจากวัสดุธรรมชาติ
- **ระบบจัดการน้ำ:** การติดตั้งถังเก็บน้ำฝนเพื่อนำกลับมาใช้รดน้ำต้นไม้หรือทำความสะอาด`,
    excerpt: 'บ้านสีเขียวไม่ได้เป็นเพียงกระแส แต่เป็นการลงทุนเพื่ออนาคต เรียนรู้เกี่ยวกับเทรนด์การออกแบบบ้านอย่างยั่งยืนที่กำลังมาแรงและประโยชน์ที่ได้รับ',
    imageUrl: 'https://picsum.photos/seed/article2/800/600',
    author: 'DDHOUSE Staff',
    publishedDate: '2023-10-15',
    tags: ['บ้านยั่งยืน', 'บ้านสีเขียว', 'เทรนด์', 'ประหยัดพลังงาน'],
    seo: {
      title: 'เทรนด์การออกแบบบ้านอย่างยั่งยืนมาแรง | DDHOUSE',
      description: 'ค้นพบเทรนด์การออกแบบบ้านเพื่อความยั่งยืน ตั้งแต่การใช้พลังงานแสงอาทิตย์ไปจนถึงการเลือกใช้วัสดุที่เป็นมิตรต่อสิ่งแวดล้อม'
    }
  }
];

export const INITIAL_PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'proj-001',
    slug: 'modern-family-home-bangkok',
    title: 'บ้านโมเดิร์นของคุณสมชาย',
    category: 'บ้านสองชั้น',
    coverImage: 'https://picsum.photos/seed/proj1-cover/800/600',
    images: [
      'https://picsum.photos/seed/proj1-img1/1200/800',
      'https://picsum.photos/seed/proj1-img2/1200/800',
      'https://picsum.photos/seed/proj1-img3/1200/800',
    ],
    description: 'บ้านสไตล์โมเดิร์น 2 ชั้นสำหรับครอบครัวขนาดใหญ่ เน้นพื้นที่ใช้สอยกว้างขวางและการเชื่อมต่อกับธรรมชาติภายนอก',
    location: 'กรุงเทพมหานคร',
    area: 320,
  },
  {
    id: 'proj-002',
    slug: 'cozy-single-story-chiangmai',
    title: 'บ้านสวนชั้นเดียวของคุณมานี',
    category: 'บ้านชั้นเดียว',
    coverImage: 'https://picsum.photos/seed/proj2-cover/800/600',
    images: [
      'https://picsum.photos/seed/proj2-img1/1200/800',
      'https://picsum.photos/seed/proj2-img2/1200/800',
    ],
    description: 'บ้านชั้นเดียวขนาดกะทัดรัด อบอุ่น ท่ามกลางสวนสวย เหมาะสำหรับการพักผ่อนอย่างแท้จริง',
    location: 'เชียงใหม่',
    area: 180,
  },
  {
    id: 'proj-003',
    slug: 'contemporary-villa-phuket',
    title: 'วิลล่าร่วมสมัยของคุณเดวิด',
    category: 'สไตล์ร่วมสมัย',
    coverImage: 'https://picsum.photos/seed/proj3-cover/800/600',
    images: [
        'https://picsum.photos/seed/proj3-img1/1200/800',
        'https://picsum.photos/seed/proj3-img2/1200/800',
        'https://picsum.photos/seed/proj3-img3/1200/800',
    ],
    description: 'วิลล่าสุดหรูสไตล์ร่วมสมัย พร้อมสระว่ายน้ำส่วนตัว มองเห็นวิวทะเลที่สวยงาม',
    location: 'ภูเก็ต',
    area: 450,
  },
  {
    id: 'proj-004',
    slug: 'minimalist-loft-khonkaen',
    title: 'บ้านลอฟท์ของคุณปิติ',
    category: 'สไตล์โมเดิร์น',
    coverImage: 'https://picsum.photos/seed/proj4-cover/800/600',
    images: [
        'https://picsum.photos/seed/proj4-img1/1200/800',
        'https://picsum.photos/seed/proj4-img2/1200/800',
    ],
    description: 'บ้านสองชั้นสไตล์โมเดิร์นลอฟท์ โดดเด่นด้วยการตกแต่งแบบปูนเปลือยและโครงสร้างเหล็ก',
    location: 'ขอนแก่น',
    area: 260,
  },
    {
    id: 'proj-005',
    slug: 'classic-two-story-nakhonratchasima',
    title: 'บ้านอบอุ่นของคุณสมศรี',
    category: 'บ้านสองชั้น',
    coverImage: 'https://picsum.photos/seed/proj5-cover/800/600',
    images: [
      'https://picsum.photos/seed/proj5-img1/1200/800',
      'https://picsum.photos/seed/proj5-img2/1200/800',
    ],
    description: 'บ้านสองชั้นสไตล์คลาสสิคที่ให้ความรู้สึกอบอุ่นและเป็นกันเอง เหมาะสำหรับทุกครอบครัว',
    location: 'นครราชสีมา',
    area: 290,
  },
  {
    id: 'proj-006',
    slug: 'compact-modern-home-rayong',
    title: 'บ้านโมเดิร์นของคุณวิชัย',
    category: 'บ้านชั้นเดียว',
    coverImage: 'https://picsum.photos/seed/proj6-cover/800/600',
    images: [
        'https://picsum.photos/seed/proj6-img1/1200/800',
    ],
    description: 'บ้านชั้นเดียวสไตล์โมเดิร์นขนาดกะทัดรัด ออกแบบฟังก์ชันการใช้งานอย่างลงตัวทุกตารางเมตร',
    location: 'ระยอง',
    area: 150,
  }
];


export const INITIAL_CUSTOM_PAGES: CustomPage[] = [
  {
    id: 'page-privacy-policy',
    slug: 'privacy-policy',
    title: 'Privacy Policy',
    content: `<h2 class="text-2xl font-bold mb-4">นโยบายความเป็นส่วนตัว</h2>
<p class="mb-4">เว็บไซต์ของเราเคารพสิทธิความเป็นส่วนตัวของผู้ใช้ทุกคนที่เข้าเยี่ยมชมเว็บไซต์ของเรา ดังนั้นเราจึงต้องการที่จะชี้แจงให้ท่านทราบเกี่ยวกับการใช้ข้อมูลส่วนบุคคลของท่าน</p>
<h3 class="text-xl font-bold mb-2">การเก็บรวบรวมข้อมูลส่วนบุคคล</h3>
<p class="mb-4">เราจะเก็บรวบรวมข้อมูลส่วนบุคคลที่ท่านให้กับเราโดยตรง เช่น ชื่อ, ที่อยู่อีเมล, และเบอร์โทรศัพท์ เมื่อท่านทำการลงทะเบียนหรือติดต่อเราผ่านทางเว็บไซต์</p>
<h3 class="text-xl font-bold mb-2">การใช้คุกกี้</h3>
<p class="mb-4">เว็บไซต์ของเรามีการใช้คุกกี้เพื่อเก็บข้อมูลการเข้าเยี่ยมชม และเพื่อปรับปรุงประสบการณ์การใช้งานของท่านให้ดียิ่งขึ้น ท่านสามารถเลือกที่จะยอมรับหรือไม่ยอมรับการใช้งานคุกกี้ได้ผ่านการตั้งค่าเบราว์เซอร์ของท่าน</p>
<h3 class="text-xl font-bold mb-2">การเปิดเผยข้อมูล</h3>
<p>เราจะไม่เปิดเผยข้อมูลส่วนบุคคลของท่านแก่บุคคลภายนอกโดยไม่ได้รับความยินยอมจากท่าน เว้นแต่จะเป็นไปตามที่กฎหมายกำหนด</p>`,
    seo: { title: 'Privacy Policy | DDHOUSE', description: 'Read our privacy policy to understand how we handle your data.' }
  },
  {
    id: 'page-002',
    slug: 'construction-process',
    title: 'ขั้นตอนการปลูกสร้าง',
    content: `<div class="w-full font-sans">
    
    <!-- Hero Section -->
    <div class="w-full bg-gray-900 py-20 text-center text-white relative overflow-hidden">
        <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
        <h1 class="text-4xl md:text-6xl font-bold relative z-10">ขั้นตอนการปลูกสร้าง</h1>
        <p class="text-gray-400 mt-4 text-lg md:text-xl relative z-10 max-w-3xl mx-auto">มาตรฐานมืออาชีพ ใส่ใจทุกรายละเอียด เพื่อบ้านในฝันที่เป็นจริง</p>
    </div>

    <!-- 1. Timeline Map Section -->
    <div class="w-full bg-white py-16">
        <div class="w-full px-4 md:px-10">
            <div class="grid grid-cols-2 md:grid-cols-5 gap-y-12 gap-x-8 max-w-7xl mx-auto">
                
                <!-- Step 1 -->
                <div class="flex flex-col items-center text-center group cursor-pointer">
                    <div class="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border-4 border-primary text-primary flex items-center justify-center text-3xl md:text-4xl font-bold shadow-lg group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                        01
                    </div>
                    <h3 class="font-bold text-lg md:text-xl mt-6 text-gray-800 group-hover:text-primary transition-colors">เลือกแบบบ้าน</h3>
                    <div class="h-1 w-12 bg-gray-200 mt-2 rounded-full group-hover:bg-primary transition-colors"></div>
                </div>

                <!-- Step 2 -->
                <div class="flex flex-col items-center text-center group cursor-pointer">
                    <div class="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border-4 border-primary text-primary flex items-center justify-center text-3xl md:text-4xl font-bold shadow-lg group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                        02
                    </div>
                    <h3 class="font-bold text-lg md:text-xl mt-6 text-gray-800 group-hover:text-primary transition-colors">จอง & สำรวจ</h3>
                    <div class="h-1 w-12 bg-gray-200 mt-2 rounded-full group-hover:bg-primary transition-colors"></div>
                </div>

                <!-- Step 3 -->
                <div class="flex flex-col items-center text-center group cursor-pointer">
                    <div class="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border-4 border-primary text-primary flex items-center justify-center text-3xl md:text-4xl font-bold shadow-lg group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                        03
                    </div>
                    <h3 class="font-bold text-lg md:text-xl mt-6 text-gray-800 group-hover:text-primary transition-colors">ทำสัญญา</h3>
                    <div class="h-1 w-12 bg-gray-200 mt-2 rounded-full group-hover:bg-primary transition-colors"></div>
                </div>

                <!-- Step 4 -->
                <div class="flex flex-col items-center text-center group cursor-pointer">
                    <div class="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border-4 border-primary text-primary flex items-center justify-center text-3xl md:text-4xl font-bold shadow-lg group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                        04
                    </div>
                    <h3 class="font-bold text-lg md:text-xl mt-6 text-gray-800 group-hover:text-primary transition-colors">ยื่นขออนุญาต</h3>
                    <div class="h-1 w-12 bg-gray-200 mt-2 rounded-full group-hover:bg-primary transition-colors"></div>
                </div>

                <!-- Step 5 -->
                <div class="flex flex-col items-center text-center group cursor-pointer">
                    <div class="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border-4 border-primary text-primary flex items-center justify-center text-3xl md:text-4xl font-bold shadow-lg group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                        05
                    </div>
                    <h3 class="font-bold text-lg md:text-xl mt-6 text-gray-800 group-hover:text-primary transition-colors">งานฐานราก</h3>
                    <div class="h-1 w-12 bg-gray-200 mt-2 rounded-full group-hover:bg-primary transition-colors"></div>
                </div>

                 <!-- Step 6 -->
                <div class="flex flex-col items-center text-center group cursor-pointer">
                    <div class="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border-4 border-gray-300 text-gray-400 flex items-center justify-center text-3xl md:text-4xl font-bold shadow-lg group-hover:border-primary group-hover:text-primary transition-all duration-300 transform group-hover:scale-110">
                        06
                    </div>
                    <h3 class="font-bold text-lg md:text-xl mt-6 text-gray-600 group-hover:text-primary transition-colors">งานโครงสร้าง</h3>
                    <div class="h-1 w-12 bg-gray-200 mt-2 rounded-full group-hover:bg-primary transition-colors"></div>
                </div>
                
                 <!-- Step 7 -->
                <div class="flex flex-col items-center text-center group cursor-pointer">
                    <div class="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border-4 border-gray-300 text-gray-400 flex items-center justify-center text-3xl md:text-4xl font-bold shadow-lg group-hover:border-primary group-hover:text-primary transition-all duration-300 transform group-hover:scale-110">
                        07
                    </div>
                    <h3 class="font-bold text-lg md:text-xl mt-6 text-gray-600 group-hover:text-primary transition-colors">งานสถาปัตย์</h3>
                    <div class="h-1 w-12 bg-gray-200 mt-2 rounded-full group-hover:bg-primary transition-colors"></div>
                </div>

                 <!-- Step 8 -->
                <div class="flex flex-col items-center text-center group cursor-pointer">
                    <div class="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border-4 border-gray-300 text-gray-400 flex items-center justify-center text-3xl md:text-4xl font-bold shadow-lg group-hover:border-primary group-hover:text-primary transition-all duration-300 transform group-hover:scale-110">
                        08
                    </div>
                    <h3 class="font-bold text-lg md:text-xl mt-6 text-gray-600 group-hover:text-primary transition-colors">งานระบบ</h3>
                    <div class="h-1 w-12 bg-gray-200 mt-2 rounded-full group-hover:bg-primary transition-colors"></div>
                </div>

                 <!-- Step 9 -->
                <div class="flex flex-col items-center text-center group cursor-pointer">
                    <div class="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white border-4 border-gray-300 text-gray-400 flex items-center justify-center text-3xl md:text-4xl font-bold shadow-lg group-hover:border-primary group-hover:text-primary transition-all duration-300 transform group-hover:scale-110">
                        09
                    </div>
                    <h3 class="font-bold text-lg md:text-xl mt-6 text-gray-600 group-hover:text-primary transition-colors">ตรวจรับงาน</h3>
                    <div class="h-1 w-12 bg-gray-200 mt-2 rounded-full group-hover:bg-primary transition-colors"></div>
                </div>

                 <!-- Step 10 -->
                <div class="flex flex-col items-center text-center group cursor-pointer">
                    <div class="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary text-white flex items-center justify-center text-3xl md:text-4xl font-bold shadow-xl ring-4 ring-red-100 transform scale-105">
                        10
                    </div>
                    <h3 class="font-bold text-lg md:text-xl mt-6 text-gray-800">ส่งมอบบ้าน</h3>
                    <div class="h-1 w-12 bg-primary mt-2 rounded-full"></div>
                </div>
            </div>
        </div>
    </div>

    <!-- 2. Banner Section -->
    <div class="w-full bg-primary py-16 md:py-20 text-center text-white shadow-2xl relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-full bg-black opacity-10"></div>
        <div class="relative z-10 px-4">
            <h2 class="text-4xl md:text-6xl font-black uppercase tracking-widest mb-4 drop-shadow-md">One Stop Service</h2>
            <p class="text-xl md:text-2xl font-light opacity-90 max-w-4xl mx-auto">ครบ จบ ในที่เดียว ตั้งแต่เริ่มออกแบบ ก่อสร้าง จนถึงวันส่งมอบและดูแลหลังการขาย</p>
        </div>
    </div>

    <!-- 3. Accordion Details Section -->
    <div class="w-full bg-gray-50 py-16 md:py-24">
        <div class="w-full px-4 md:px-8">
            <div class="max-w-5xl mx-auto space-y-6">
                
                <!-- Accordion Item 1 -->
                <details class="bg-white rounded-2xl shadow-sm border border-gray-200 group overflow-hidden transition-all duration-300 hover:shadow-md">
                    <summary class="flex justify-between items-center p-6 md:p-8 cursor-pointer list-none bg-white hover:bg-gray-50 transition-colors">
                        <div class="flex items-center gap-6">
                            <span class="text-4xl font-bold text-gray-200 group-open:text-primary transition-colors">01</span>
                            <span class="text-xl md:text-2xl font-bold text-gray-800">การเลือกแบบบ้านและปรึกษา</span>
                        </div>
                        <span class="bg-gray-100 p-2 rounded-full group-open:bg-primary group-open:text-white transition-all duration-300 transform group-open:rotate-180">
                            <svg fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                        </span>
                    </summary>
                    <div class="text-gray-600 p-8 pt-0 text-lg leading-relaxed border-t border-gray-100 mt-2">
                        <p>เริ่มต้นด้วยการพูดคุยกับทีมสถาปนิกของเราเพื่อเลือกแบบบ้านมาตรฐานที่มีอยู่หรือปรับเปลี่ยนฟังก์ชันให้เหมาะสมกับไลฟ์สไตล์และที่ดินของคุณ เราพร้อมให้คำแนะนำเรื่องงบประมาณและการวางแผนเบื้องต้น</p>
                    </div>
                </details>

                <!-- Accordion Item 2 -->
                <details class="bg-white rounded-2xl shadow-sm border border-gray-200 group overflow-hidden transition-all duration-300 hover:shadow-md">
                    <summary class="flex justify-between items-center p-6 md:p-8 cursor-pointer list-none bg-white hover:bg-gray-50 transition-colors">
                        <div class="flex items-center gap-6">
                            <span class="text-4xl font-bold text-gray-200 group-open:text-primary transition-colors">02</span>
                            <span class="text-xl md:text-2xl font-bold text-gray-800">การสำรวจที่ดินและทำสัญญา</span>
                        </div>
                         <span class="bg-gray-100 p-2 rounded-full group-open:bg-primary group-open:text-white transition-all duration-300 transform group-open:rotate-180">
                            <svg fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                        </span>
                    </summary>
                    <div class="text-gray-600 p-8 pt-0 text-lg leading-relaxed border-t border-gray-100 mt-2">
                        <p>ทีมงานจะลงพื้นที่สำรวจที่ดินจริง เพื่อวัดขนาด เช็คระดับ และวางผังบ้านให้ถูกต้องตามกฎหมาย จากนั้นจะดำเนินการทำสัญญาจ้างเหมาก่อสร้างเพื่อเริ่มดำเนินการในขั้นตอนต่อไป</p>
                    </div>
                </details>

                <!-- Accordion Item 3 -->
                <details class="bg-white rounded-2xl shadow-sm border border-gray-200 group overflow-hidden transition-all duration-300 hover:shadow-md">
                    <summary class="flex justify-between items-center p-6 md:p-8 cursor-pointer list-none bg-white hover:bg-gray-50 transition-colors">
                        <div class="flex items-center gap-6">
                            <span class="text-4xl font-bold text-gray-200 group-open:text-primary transition-colors">03</span>
                            <span class="text-xl md:text-2xl font-bold text-gray-800">การดำเนินการก่อสร้าง</span>
                        </div>
                         <span class="bg-gray-100 p-2 rounded-full group-open:bg-primary group-open:text-white transition-all duration-300 transform group-open:rotate-180">
                            <svg fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                        </span>
                    </summary>
                    <div class="text-gray-600 p-8 pt-0 text-lg leading-relaxed border-t border-gray-100 mt-2">
                        <p>เริ่มงานตอกเสาเข็ม ทำฐานราก โครงสร้าง ก่อฉาบ งานระบบไฟฟ้า-ประปา ไปจนถึงงานสถาปัตยกรรม โดยมีวิศวกรควบคุมงานอย่างใกล้ชิดทุกขั้นตอน และมีการเบิกจ่ายงวดงานตามความคืบหน้าจริง</p>
                    </div>
                </details>

                <!-- Accordion Item 4 -->
                 <details class="bg-white rounded-2xl shadow-sm border border-gray-200 group overflow-hidden transition-all duration-300 hover:shadow-md">
                    <summary class="flex justify-between items-center p-6 md:p-8 cursor-pointer list-none bg-white hover:bg-gray-50 transition-colors">
                        <div class="flex items-center gap-6">
                            <span class="text-4xl font-bold text-gray-200 group-open:text-primary transition-colors">04</span>
                            <span class="text-xl md:text-2xl font-bold text-gray-800">การส่งมอบและรับประกัน</span>
                        </div>
                         <span class="bg-gray-100 p-2 rounded-full group-open:bg-primary group-open:text-white transition-all duration-300 transform group-open:rotate-180">
                            <svg fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                        </span>
                    </summary>
                    <div class="text-gray-600 p-8 pt-0 text-lg leading-relaxed border-t border-gray-100 mt-2">
                        <p>เมื่อบ้านเสร็จสมบูรณ์ ทีม QC จะตรวจสอบความเรียบร้อยครั้งสุดท้ายก่อนส่งมอบบ้าน พร้อมใบรับประกันโครงสร้างและบริการหลังการขายเพื่อให้คุณอุ่นใจตลอดการอยู่อาศัย</p>
                    </div>
                </details>

            </div>
        </div>
    </div>
</div>`,
    seo: { title: 'ขั้นตอนการปลูกสร้าง | DDHOUSE', description: 'เรียนรู้ขั้นตอนการสร้างบ้านกับ DDHOUSE ตั้งแต่เริ่มต้นจนส่งมอบ' }
  },
  {
    id: 'page-003',
    slug: 'system-spec',
    title: 'ระบบก่อสร้าง & Material Spec',
    content: `<div class="w-full font-sans">
    <!-- Full Screen Hero -->
    <div class="w-full h-[50vh] md:h-[60vh] relative overflow-hidden">
        <img src="https://picsum.photos/seed/spec-hero/1920/1080" class="w-full h-full object-cover" alt="Materials Spec" />
        <div class="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 flex items-center justify-center">
            <div class="text-center px-4">
                <h1 class="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl">Premium Specification</h1>
                <p class="text-xl md:text-2xl text-gray-200 font-light max-w-3xl mx-auto">คัดสรรวัสดุที่ดีที่สุด เพื่อบ้านที่แข็งแรงและสวยงามยาวนาน</p>
            </div>
        </div>
    </div>

    <!-- Split Section 1: Structure (Image Left / Text Right) -->
    <div class="flex flex-col md:flex-row w-full min-h-[600px]">
        <div class="w-full md:w-1/2 relative h-[400px] md:h-auto">
            <img src="https://picsum.photos/seed/structure-build/900/1200" alt="Structure" class="absolute inset-0 w-full h-full object-cover" />
            <div class="absolute inset-0 bg-primary/10"></div>
        </div>
        <div class="w-full md:w-1/2 flex items-center bg-white p-10 md:p-20 lg:p-24">
            <div class="max-w-xl">
                <span class="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Foundation & Structure</span>
                <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-8">งานโครงสร้างที่มั่นคง</h2>
                <ul class="space-y-8">
                    <li class="flex items-start gap-4">
                        <div class="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-primary font-bold text-xl flex-shrink-0">01</div>
                        <div>
                            <h4 class="text-xl font-bold text-gray-800 mb-1">เสาเข็มและฐานราก</h4>
                            <p class="text-gray-600 text-lg leading-relaxed">ตอกเสาเข็มลึกถึงชั้นดินดาน พร้อมฐานรากคอนกรีตเสริมเหล็ก ออกแบบโดยวิศวกรผู้เชี่ยวชาญ</p>
                        </div>
                    </li>
                    <li class="flex items-start gap-4">
                         <div class="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-primary font-bold text-xl flex-shrink-0">02</div>
                        <div>
                            <h4 class="text-xl font-bold text-gray-800 mb-1">คอนกรีตคุณภาพสูง</h4>
                            <p class="text-gray-600 text-lg leading-relaxed">เลือกใช้คอนกรีตผสมเสร็จมาตรฐาน CPAC หรือเทียบเท่า กำลังอัด 240 KSC เพื่อความแข็งแกร่งสูงสุด</p>
                        </div>
                    </li>
                    <li class="flex items-start gap-4">
                         <div class="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-primary font-bold text-xl flex-shrink-0">03</div>
                        <div>
                            <h4 class="text-xl font-bold text-gray-800 mb-1">เหล็กเส้นเต็มโรงใหญ่</h4>
                            <p class="text-gray-600 text-lg leading-relaxed">ใช้เหล็กเส้นมาตรฐาน มอก. โรงใหญ่ เพื่อความยืดหยุ่นและการรับแรงดึงที่สมบูรณ์แบบ</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <!-- Split Section 2: Architecture (Text Left / Image Right) -->
    <div class="flex flex-col md:flex-row-reverse w-full min-h-[600px]">
        <div class="w-full md:w-1/2 relative h-[400px] md:h-auto">
            <img src="https://picsum.photos/seed/arch-finish/900/1200" alt="Architecture" class="absolute inset-0 w-full h-full object-cover" />
             <div class="absolute inset-0 bg-black/10"></div>
        </div>
        <div class="w-full md:w-1/2 flex items-center bg-gray-50 p-10 md:p-20 lg:p-24">
            <div class="max-w-xl">
                <span class="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Architecture & Finishes</span>
                <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-8">ความงามที่สัมผัสได้</h2>
                 <ul class="space-y-8">
                    <li class="flex items-start gap-4">
                        <div class="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-primary font-bold text-xl flex-shrink-0">A</div>
                        <div>
                            <h4 class="text-xl font-bold text-gray-800 mb-1">อิฐมวลเบา Q-CON</h4>
                            <p class="text-gray-600 text-lg leading-relaxed">กันความร้อน กันเสียง และทนไฟ ช่วยให้บ้านเย็นสบาย ประหยัดพลังงานกว่าอิฐมอญทั่วไป</p>
                        </div>
                    </li>
                    <li class="flex items-start gap-4">
                         <div class="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-primary font-bold text-xl flex-shrink-0">B</div>
                        <div>
                            <h4 class="text-xl font-bold text-gray-800 mb-1">หลังคาเอสซีจี (SCG)</h4>
                            <p class="text-gray-600 text-lg leading-relaxed">มั่นใจด้วยกระเบื้องหลังคา SCG พร้อมแผ่นสะท้อนความร้อน ป้องกันการรั่วซึมและความร้อน</p>
                        </div>
                    </li>
                    <li class="flex items-start gap-4">
                         <div class="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-primary font-bold text-xl flex-shrink-0">C</div>
                        <div>
                            <h4 class="text-xl font-bold text-gray-800 mb-1">สีเกรดพรีเมียม TOA</h4>
                            <p class="text-gray-600 text-lg leading-relaxed">ใช้สี TOA Supershield หรือเทียบเท่า ทนทานต่อสภาพอากาศ เช็ดล้างง่าย สีสวยสดใสยาวนาน</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <!-- Full Width Warranty Banner -->
    <div class="w-full bg-primary py-24 px-4 text-center">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-12">การรับประกันที่คุณวางใจ</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            <div class="p-8 border border-white/20 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div class="text-6xl md:text-7xl font-black text-white mb-4 opacity-90">20<span class="text-3xl align-top ml-1">ปี</span></div>
                <div class="h-1 w-20 bg-yellow-400 mx-auto mb-6"></div>
                <h3 class="text-2xl font-bold text-white mb-2">รับประกันโครงสร้าง</h3>
                <p class="text-white/80">เสาเข็ม ฐานราก คาน เสา พื้น</p>
            </div>
             <div class="p-8 border border-white/20 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div class="text-6xl md:text-7xl font-black text-white mb-4 opacity-90">5<span class="text-3xl align-top ml-1">ปี</span></div>
                <div class="h-1 w-20 bg-yellow-400 mx-auto mb-6"></div>
                <h3 class="text-2xl font-bold text-white mb-2">รับประกันหลังคา</h3>
                <p class="text-white/80">การรั่วซึมของหลังคาและดาดฟ้า</p>
            </div>
             <div class="p-8 border border-white/20 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <div class="text-6xl md:text-7xl font-black text-white mb-4 opacity-90">1<span class="text-3xl align-top ml-1">ปี</span></div>
                <div class="h-1 w-20 bg-yellow-400 mx-auto mb-6"></div>
                <h3 class="text-2xl font-bold text-white mb-2">รับประกันทั่วไป</h3>
                <p class="text-white/80">งานสถาปัตยกรรม พื้น ผนัง ฝ้า สี</p>
            </div>
        </div>
    </div>
</div>`,
    seo: { title: 'ระบบก่อสร้าง & Material Spec | DDHOUSE', description: 'ดูรายละเอียดระบบก่อสร้างและสเปควัสดุมาตรฐานของเรา' }
  },
  {
    id: 'page-005',
    slug: 'extra-services',
    title: 'สินค้าและบริการเสริมครบวงจร',
    content: `<div class="w-full font-sans bg-white">
     <!-- Hero -->
    <div class="py-20 md:py-28 text-center px-4 bg-gray-50">
        <h1 class="text-4xl md:text-6xl font-black text-gray-900 mb-6 uppercase tracking-tight">Beyond Construction</h1>
        <p class="text-xl md:text-2xl text-gray-500 max-w-4xl mx-auto font-light">เติมเต็มทุกความต้องการเรื่องบ้าน ด้วยบริการเสริมระดับพรีเมียมจากผู้เชี่ยวชาญ</p>
    </div>
    
    <!-- Full Width Masonry-style Grid -->
    <div class="w-full px-4 md:px-8 pb-24">
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-full">
            
            <!-- Service 1 -->
            <div class="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer shadow-xl">
                <img src="https://picsum.photos/seed/interior-design/800/1200" alt="Interior" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div class="absolute bottom-0 left-0 p-10 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out w-full">
                    <h3 class="text-3xl md:text-4xl font-bold mb-3">งานตกแต่งภายใน</h3>
                    <div class="h-1 w-16 bg-primary mb-4 group-hover:w-24 transition-all duration-500"></div>
                    <p class="text-gray-300 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">เปลี่ยนบ้านเปล่าให้เป็นบ้านในฝัน ด้วยทีมมัณฑนากรมืออาชีพ ออกแบบและบิวท์อินเฟอร์นิเจอร์ครบวงจร</p>
                </div>
            </div>

            <!-- Service 2 -->
            <div class="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer shadow-xl">
                <img src="https://picsum.photos/seed/pool-service/800/1200" alt="Pool" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div class="absolute bottom-0 left-0 p-10 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out w-full">
                    <h3 class="text-3xl md:text-4xl font-bold mb-3">สระว่ายน้ำส่วนตัว</h3>
                    <div class="h-1 w-16 bg-primary mb-4 group-hover:w-24 transition-all duration-500"></div>
                    <p class="text-gray-300 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">ออกแบบและก่อสร้างสระว่ายน้ำระบบเกลือ พร้อมระบบสปาจากุซซี่ เพื่อการพักผ่อนที่สมบูรณ์แบบของคุณ</p>
                </div>
            </div>

            <!-- Service 3 -->
            <div class="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer shadow-xl">
                <img src="https://picsum.photos/seed/landscape-gardening/800/1200" alt="Garden" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div class="absolute bottom-0 left-0 p-10 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out w-full">
                    <h3 class="text-3xl md:text-4xl font-bold mb-3">จัดสวนและภูมิทัศน์</h3>
                    <div class="h-1 w-16 bg-primary mb-4 group-hover:w-24 transition-all duration-500"></div>
                    <p class="text-gray-300 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">สร้างบรรยากาศร่มรื่นรอบตัวบ้าน ด้วยการจัดสวนสวย ปูหญ้า และวางระบบรดน้ำอัตโนมัติ</p>
                </div>
            </div>

             <!-- Service 4 -->
            <div class="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer shadow-xl">
                <img src="https://picsum.photos/seed/smart-home-tech/800/1200" alt="Smart Home" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div class="absolute bottom-0 left-0 p-10 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out w-full">
                    <h3 class="text-3xl md:text-4xl font-bold mb-3">Smart Home System</h3>
                    <div class="h-1 w-16 bg-primary mb-4 group-hover:w-24 transition-all duration-500"></div>
                    <p class="text-gray-300 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">ยกระดับชีวิตด้วยเทคโนโลยีบ้านอัจฉริยะ ควบคุมแสงสว่าง แอร์ และความปลอดภัยผ่านมือถือ</p>
                </div>
            </div>
            
            <!-- Service 5 -->
            <div class="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer shadow-xl">
                <img src="https://picsum.photos/seed/gate-fence/800/1200" alt="Gate" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div class="absolute bottom-0 left-0 p-10 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out w-full">
                    <h3 class="text-3xl md:text-4xl font-bold mb-3">ประตูรั้วและกำแพง</h3>
                    <div class="h-1 w-16 bg-primary mb-4 group-hover:w-24 transition-all duration-500"></div>
                    <p class="text-gray-300 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">งานรั้วรอบขอบชิด ประตูสแตนเลส อลูมิเนียมลายไม้ หรือประตูรีโมทอัตโนมัติ</p>
                </div>
            </div>

             <!-- Service 6 -->
            <div class="group relative h-[500px] rounded-3xl overflow-hidden cursor-pointer shadow-xl">
                <img src="https://picsum.photos/seed/solar-panel/800/1200" alt="Solar" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                <div class="absolute bottom-0 left-0 p-10 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out w-full">
                    <h3 class="text-3xl md:text-4xl font-bold mb-3">Solar Roof</h3>
                    <div class="h-1 w-16 bg-primary mb-4 group-hover:w-24 transition-all duration-500"></div>
                    <p class="text-gray-300 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3">ติดตั้งแผงโซลาร์เซลล์มาตรฐานสากล ช่วยลดค่าไฟและเป็นมิตรต่อสิ่งแวดล้อม</p>
                </div>
            </div>
        </div>
    </div>
</div>`,
    seo: { title: 'สินค้าและบริการเสริม | DDHOUSE', description: 'เลือกชมสินค้าและบริการเสริมเพื่อบ้านของคุณ เช่น ตกแต่งภายใน สระว่ายน้ำ จัดสวน และอื่นๆ' }
  },
  {
    id: 'page-portfolio',
    slug: 'portfolio',
    title: 'ผลงานของเรา',
    content: '<p>ชมผลงานการสร้างสรรค์บ้านคุณภาพ ที่เราภาคภูมิใจส่งมอบให้กับลูกค้าทุกท่าน</p>',
    imageUrl: 'https://picsum.photos/seed/portfolio-hero/1600/800',
    seo: { title: 'ผลงานของเรา | DDHOUSE', description: 'ชมผลงานการสร้างสรรค์บ้านคุณภาพจาก DDHOUSE' }
  }
];

export const INITIAL_PROMO_CARDS: PromoCard[] = [
  {
    id: 'promo-001',
    title: 'นวัตกรรมที่มีเฉพาะ DDHOUSE',
    subtitle: '',
    imageUrl: 'https://picsum.photos/seed/promo1/800/400',
    linkType: 'page',
    linkValue: 'system-spec',
    size: '2x1',
    order: 1,
  },
  {
    id: 'promo-002',
    title: 'ผลงานสร้างบ้าน',
    subtitle: '',
    imageUrl: 'https://picsum.photos/seed/promo2/400/400',
    linkType: 'view',
    linkValue: 'portfolio',
    size: '1x1',
    order: 2,
  },
  {
    id: 'promo-003',
    title: 'แบบบ้านพร้อม',
    subtitle: 'Interior',
    imageUrl: 'https://picsum.photos/seed/promo3/1200/400',
    linkType: 'view',
    linkValue: 'designs',
    size: '3x1',
    order: 3,
  },
  {
    id: 'promo-004',
    title: 'ขั้นตอนการก่อสร้าง',
    subtitle: '',
    imageUrl: 'https://picsum.photos/seed/promo4/400/400',
    linkType: 'page',
    linkValue: 'construction-process',
    size: '1x1',
    order: 4,
  },
  {
    id: 'promo-005',
    title: 'ดาวน์โหลด',
    subtitle: 'E-Catalog',
    imageUrl: 'https://picsum.photos/seed/promo5/400/400',
    linkType: 'url',
    linkValue: '#', // Placeholder link
    size: '1x1',
    order: 5,
  },
  {
    id: 'promo-006',
    title: 'สินค้าและบริการเสริม',
    subtitle: '',
    imageUrl: 'https://picsum.photos/seed/promo6/400/400',
    linkType: 'page',
    linkValue: 'extra-services',
    size: '1x1',
    order: 6,
  },
];

export const INITIAL_TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-001',
    title: 'ทำไม? คุณหมอ ถึงสร้างบ้านกับ แลนดี้ โฮม มากที่สุด',
    imageUrl: 'https://picsum.photos/seed/test1/800/450',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder video
    order: 1,
    isFeatured: true,
  },
  {
    id: 'test-002',
    title: 'สร้างบ้านอยากบอกต่อ คิดจะสร้างบ้านต้องดู EP.1',
    imageUrl: 'https://picsum.photos/seed/test2/400/225',
    videoUrl: 'https://www.youtube.com/embed/o-YBDTqX_ZU', // Placeholder video
    order: 2,
    isFeatured: false,
  },
  {
    id: 'test-003',
    title: 'ตอบโจทย์ทุกความต้องการ ใส่ใจทุกรายละเอียด ต้องแลนดี้ โฮม',
    imageUrl: 'https://picsum.photos/seed/test3/400/225',
    videoUrl: 'https://www.youtube.com/embed/3tmd-ClpJxA', // Placeholder video
    order: 3,
    isFeatured: false,
  },
  {
    id: 'test-004',
    title: 'รีวิวบ้าน Bristol',
    imageUrl: 'https://picsum.photos/seed/test4/400/225',
    videoUrl: 'https://www.youtube.com/embed/C0DPdy98e4c', // Placeholder video
    order: 4,
    isFeatured: false,
  },
];

export const INITIAL_NOTIFICATIONS: SiteNotification[] = [
  {
    id: 'notif-001',
    message: '🎉 ขอต้อนรับสู่เว็บไซต์โฉมใหม่ของเรา พบกันโปรโมชั่นใหม่เร็วๆนี้ - Coming Soon',
    isActive: true,
  }
];

export const INITIAL_POPUP_MODAL: PopupModalContent = {
  id: 'popup-001',
  isEnabled: true,
  imageUrl: 'https://picsum.photos/seed/popup/600/400',
  title: 'โปรโมชันพิเศษ!',
  description: 'ลงทะเบียนวันนี้ รับส่วนลดพิเศษสำหรับแบบบ้านทุกหลัง พร้อมรับคำปรึกษาจากสถาปนิกฟรี!',
  ctaText: 'ดูโปรโมชัน',
  linkType: 'view',
  linkValue: 'designs'
};

export const INITIAL_SITE_INFO: SiteInfo = {
  siteName: 'DDHOUSE',
  siteTagline: '',
  logoUrl: 'https://i.ibb.co/wFCmP663/logo.jpg',
  phone: '097 978 7459',
  officeHours: 'ทำการทุกวัน 09:00 - 18:00 น.',
  socials: {
    facebook: 'https://facebook.com',
    youtube: 'https://youtube.com',
    tiktok: 'https://tiktok.com',
    line: 'https://line.me',
    whatsapp: 'https://wa.me/'
  },
  promoFormImageUrl: 'https://i.ibb.co/wFCmP663/logo.jpg',
  buttonLabels: {
    viewAllHomes: 'ดูแบบบ้านทั้งหมด',
    viewAllArticles: 'ดูบทความทั้งหมด',
    viewAllTestimonials: 'ดูทั้งหมด',
  },
  globalSeo: {
    titleTemplate: '%s | DDHOUSE',
    defaultDescription: 'ศูนย์รับสร้างบ้าน บ้านดีดีวิศวกรรม รับสร้างบ้านคุณภาพ การออกแบบทันสมัย ทั่วประเทศ พร้อมให้คำปรึกษาจากผู้เชี่ยวชาญ',
    defaultKeywords: 'home design, build house, modern homes, construction, architecture',
  },
  serviceArea: {
      title: 'รับสร้างบ้านทั่วไทย พร้อมดูแลพื้นที่ อุบลราชธานี ศรีสะเกษ ยโสธร อำนาจเจริญ',
      content: 'DDHOUSE ศูนย์รับสร้างบ้านอันดับ 1 ที่คุณไว้วางใจ เราให้บริการรับสร้างบ้านทั่วประเทศ ด้วยมาตรฐานเดียวกัน พร้อมทีมงานวิศวกรและสถาปนิกมืออาชีพ โดยเรามีความเชี่ยวชาญพิเศษในการดูแลลูกค้าในโซนภาคตะวันออกเฉียงเหนือ ได้แก่ อุบลราชธานี ศรีสะเกษ ยโสธร อำนาจเจริญ และจังหวัดใกล้เคียง มั่นใจได้ในคุณภาพ ไม่ทิ้งงาน สร้างเสร็จจริงตามงบประมาณ'
  }
};
