
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
    content: `<div class="w-full">
    
    <!-- Full Width Hero Banner -->
    <div class="w-full bg-gradient-to-r from-gray-900 to-primary relative py-20 md:py-28 px-6 overflow-hidden">
         <div class="absolute inset-0 opacity-20">
             <img src="https://picsum.photos/seed/const-bg/1920/600" class="w-full h-full object-cover" alt="Construction background">
         </div>
         <div class="relative z-10 container mx-auto text-center">
             <h1 class="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">10 Steps to Your Dream Home</h1>
             <p class="text-xl md:text-2xl text-gray-200 font-light">เส้นทางสู่บ้านในฝันของคุณ...เริ่มต้นที่นี่ กับมาตรฐานมืออาชีพ</p>
             <div class="mt-8 inline-block border border-white/30 bg-white/10 backdrop-blur-md rounded-full px-8 py-2 text-white">
                One Stop Service ครบจบในที่เดียว
             </div>
         </div>
    </div>

    <!-- Timeline Process Section -->
    <div class="w-full bg-white py-20">
        <div class="container mx-auto px-4 md:px-12 lg:px-20 max-w-[1800px]">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-800">ขั้นตอนการดำเนินงาน</h2>
                <div class="w-20 h-1 bg-primary mx-auto mt-4 rounded-full"></div>
            </div>
            
            <!-- Responsive Grid Step Layout -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative">
                <!-- Connecting Line (Desktop Only) -->
                <div class="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 -z-10"></div>

                <!-- Step 1 -->
                <div class="flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300 bg-white p-4 rounded-xl">
                    <div class="w-24 h-24 rounded-full bg-white border-4 border-primary text-primary flex items-center justify-center font-bold text-3xl mb-6 shadow-lg group-hover:bg-primary group-hover:text-white transition-colors relative z-10">01</div>
                    <h3 class="font-bold text-xl text-gray-800 mb-2">เลือกแบบบ้าน</h3>
                    <p class="text-gray-500 text-sm leading-relaxed">เลือกแบบบ้านมาตรฐานที่ตรงใจ พร้อมปรับฟังก์ชันให้เข้ากับไลฟ์สไตล์ของคุณ</p>
                </div>

                <!-- Step 2 -->
                <div class="flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300 bg-white p-4 rounded-xl">
                    <div class="w-24 h-24 rounded-full bg-white border-4 border-primary text-primary flex items-center justify-center font-bold text-3xl mb-6 shadow-lg group-hover:bg-primary group-hover:text-white transition-colors relative z-10">02</div>
                    <h3 class="font-bold text-xl text-gray-800 mb-2">จอง & สำรวจที่ดิน</h3>
                    <p class="text-gray-500 text-sm leading-relaxed">ชำระเงินจอง ทีมงานลงพื้นที่สำรวจที่ดิน วางผังบริเวณและระดับ</p>
                </div>

                <!-- Step 3 -->
                <div class="flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300 bg-white p-4 rounded-xl">
                    <div class="w-24 h-24 rounded-full bg-white border-4 border-primary text-primary flex items-center justify-center font-bold text-3xl mb-6 shadow-lg group-hover:bg-primary group-hover:text-white transition-colors relative z-10">03</div>
                    <h3 class="font-bold text-xl text-gray-800 mb-2">สัญญา & เขียนแบบ</h3>
                    <p class="text-gray-500 text-sm leading-relaxed">ทำสัญญาปลูกสร้าง และดำเนินการเขียนแบบก่อสร้างโดยสถาปนิก</p>
                </div>

                 <!-- Step 4 -->
                <div class="flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300 bg-white p-4 rounded-xl">
                    <div class="w-24 h-24 rounded-full bg-white border-4 border-primary text-primary flex items-center justify-center font-bold text-3xl mb-6 shadow-lg group-hover:bg-primary group-hover:text-white transition-colors relative z-10">04</div>
                    <h3 class="font-bold text-xl text-gray-800 mb-2">ยื่นขออนุญาต</h3>
                    <p class="text-gray-500 text-sm leading-relaxed">เตรียมเอกสารและดำเนินการยื่นขอใบอนุญาตปลูกสร้างกับทางราชการ</p>
                </div>

                 <!-- Step 5 -->
                <div class="flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300 bg-white p-4 rounded-xl">
                    <div class="w-24 h-24 rounded-full bg-white border-4 border-primary text-primary flex items-center justify-center font-bold text-3xl mb-6 shadow-lg group-hover:bg-primary group-hover:text-white transition-colors relative z-10">05</div>
                    <h3 class="font-bold text-xl text-gray-800 mb-2">เริ่มก่อสร้าง</h3>
                    <p class="text-gray-500 text-sm leading-relaxed">เริ่มงานเข็ม ฐานราก และโครงสร้างตามลำดับวิศวกรรม</p>
                </div>

                <!-- Divider for mobile/tablet flow visual only -->
                <div class="hidden md:block lg:hidden col-span-full h-px bg-gray-200 my-4"></div>

                <!-- Step 6 -->
                 <div class="flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300 bg-white p-4 rounded-xl">
                    <div class="w-24 h-24 rounded-full bg-white border-4 border-gray-300 text-gray-400 flex items-center justify-center font-bold text-3xl mb-6 shadow-md group-hover:border-primary group-hover:text-primary transition-colors relative z-10">06</div>
                    <h3 class="font-bold text-xl text-gray-800 mb-2">น้ำ-ไฟ ชั่วคราว</h3>
                    <p class="text-gray-500 text-sm leading-relaxed">บริการขอติดตั้งมิเตอร์น้ำและไฟฟ้าชั่วคราวสำหรับใช้ในการก่อสร้าง</p>
                </div>
                
                <!-- Step 7 -->
                 <div class="flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300 bg-white p-4 rounded-xl">
                    <div class="w-24 h-24 rounded-full bg-white border-4 border-gray-300 text-gray-400 flex items-center justify-center font-bold text-3xl mb-6 shadow-md group-hover:border-primary group-hover:text-primary transition-colors relative z-10">07</div>
                    <h3 class="font-bold text-xl text-gray-800 mb-2">งวดงานก่อสร้าง</h3>
                    <p class="text-gray-500 text-sm leading-relaxed">ดำเนินการก่อสร้างและชำระเงินตามงวดงานที่ระบุในสัญญาอย่างชัดเจน</p>
                </div>

                <!-- Step 8 -->
                 <div class="flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300 bg-white p-4 rounded-xl">
                    <div class="w-24 h-24 rounded-full bg-white border-4 border-gray-300 text-gray-400 flex items-center justify-center font-bold text-3xl mb-6 shadow-md group-hover:border-primary group-hover:text-primary transition-colors relative z-10">08</div>
                    <h3 class="font-bold text-xl text-gray-800 mb-2">ทะเบียนบ้าน & มิเตอร์</h3>
                    <p class="text-gray-500 text-sm leading-relaxed">บริการขอเลขที่บ้าน ทะเบียนบ้าน และเปลี่ยนเป็นมิเตอร์ถาวร</p>
                </div>

                <!-- Step 9 -->
                 <div class="flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300 bg-white p-4 rounded-xl">
                    <div class="w-24 h-24 rounded-full bg-white border-4 border-gray-300 text-gray-400 flex items-center justify-center font-bold text-3xl mb-6 shadow-md group-hover:border-primary group-hover:text-primary transition-colors relative z-10">09</div>
                    <h3 class="font-bold text-xl text-gray-800 mb-2">ส่งมอบบ้าน</h3>
                    <p class="text-gray-500 text-sm leading-relaxed">ตรวจสอบความเรียบร้อยครั้งสุดท้าย (QC) และส่งมอบบ้านคุณภาพให้คุณ</p>
                </div>

                 <!-- Step 10 -->
                 <div class="flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300 bg-white p-4 rounded-xl">
                    <div class="w-24 h-24 rounded-full bg-primary text-white flex items-center justify-center font-bold text-3xl mb-6 shadow-xl relative z-10 ring-4 ring-red-100">10</div>
                    <h3 class="font-bold text-xl text-gray-800 mb-2">บริการหลังการขาย</h3>
                    <p class="text-gray-500 text-sm leading-relaxed">อุ่นใจด้วยการรับประกันโครงสร้างและบริการดูแลหลังการเข้าอยู่</p>
                </div>

            </div>
        </div>
    </div>

    <!-- Detailed Accordion Section -->
    <div class="w-full bg-gray-50 py-20">
        <div class="container mx-auto px-4 md:px-12 lg:px-32 max-w-[1600px]">
             <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold text-gray-800">รายละเอียดแต่ละขั้นตอน</h2>
                <p class="text-gray-500 mt-2">เจาะลึกกระบวนการทำงานของเรา เพื่อความมั่นใจของคุณ</p>
            </div>
            
            <div class="space-y-4">
                <!-- Item 1 -->
                <div class="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                    <details class="group">
                        <summary class="flex items-center justify-between p-6 cursor-pointer bg-white hover:bg-gray-50 transition-colors">
                            <div class="flex items-center gap-4">
                                <span class="bg-primary/10 text-primary font-bold px-3 py-1 rounded text-sm">Phase 1</span>
                                <h3 class="text-xl font-bold text-gray-800">เตรียมความพร้อมก่อนปลูกสร้าง</h3>
                            </div>
                            <svg class="w-6 h-6 text-gray-400 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
                        </summary>
                        <div class="p-6 pt-0 text-gray-600 border-t border-gray-100 bg-gray-50/50">
                            <ul class="list-disc list-inside space-y-2 mt-4 ml-2">
                                <li>เลือกแบบบ้านมาตรฐานพร้อมปรับฟังก์ชันให้เหมาะสม</li>
                                <li>บริการให้คำปรึกษาและแนะนำเรื่องสินเชื่อกู้สร้างบ้าน</li>
                                <li>สำรวจที่ดิน วางผัง เช็คระยะร่นตามกฎหมาย</li>
                                <li>จัดทำสัญญาว่าจ้างปลูกสร้างบ้าน</li>
                            </ul>
                        </div>
                    </details>
                </div>

                 <!-- Item 2 -->
                <div class="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                    <details class="group">
                        <summary class="flex items-center justify-between p-6 cursor-pointer bg-white hover:bg-gray-50 transition-colors">
                            <div class="flex items-center gap-4">
                                <span class="bg-primary/10 text-primary font-bold px-3 py-1 rounded text-sm">Phase 2</span>
                                <h3 class="text-xl font-bold text-gray-800">งานเสาเข็มและฐานราก</h3>
                            </div>
                            <svg class="w-6 h-6 text-gray-400 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
                        </summary>
                        <div class="p-6 pt-0 text-gray-600 border-t border-gray-100 bg-gray-50/50">
                            <div class="mt-4">
                                <p class="mb-2">เมื่อวางผังเสร็จเรียบร้อย จะเข้าสู่ขั้นตอนงานฐานราก:</p>
                                <ul class="list-disc list-inside space-y-2 ml-2">
                                    <li>ตอกเสาเข็มตามตำแหน่งวิศวกรรม (ใช้เสาเข็มตอก หรือ เจาะ ตามสภาพพื้นที่)</li>
                                    <li>ตรวจสอบความสมบูรณ์ของเสาเข็ม (Blow Count / Seismic Test)</li>
                                    <li>ตัดหัวเข็มและหล่อฐานรากคอนกรีตเสริมเหล็ก</li>
                                </ul>
                            </div>
                        </div>
                    </details>
                </div>

                <!-- Item 3 -->
                <div class="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                    <details class="group">
                        <summary class="flex items-center justify-between p-6 cursor-pointer bg-white hover:bg-gray-50 transition-colors">
                            <div class="flex items-center gap-4">
                                <span class="bg-primary/10 text-primary font-bold px-3 py-1 rounded text-sm">Phase 3</span>
                                <h3 class="text-xl font-bold text-gray-800">งานโครงสร้างหลัก</h3>
                            </div>
                            <svg class="w-6 h-6 text-gray-400 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
                        </summary>
                        <div class="p-6 pt-0 text-gray-600 border-t border-gray-100 bg-gray-50/50">
                            <p class="mt-4">ดำเนินการก่อสร้างโครงสร้างอาคาร เสา คาน พื้น และโครงหลังคา ด้วยระบบก่อสร้างมาตรฐานวิศวกรรม (Nova System หรือ Conventional) มั่นใจในความแข็งแรง</p>
                        </div>
                    </details>
                </div>

                <!-- Item 4 -->
                <div class="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                    <details class="group">
                        <summary class="flex items-center justify-between p-6 cursor-pointer bg-white hover:bg-gray-50 transition-colors">
                            <div class="flex items-center gap-4">
                                <span class="bg-primary/10 text-primary font-bold px-3 py-1 rounded text-sm">Phase 4</span>
                                <h3 class="text-xl font-bold text-gray-800">งานสถาปัตยกรรมและระบบ</h3>
                            </div>
                            <svg class="w-6 h-6 text-gray-400 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
                        </summary>
                        <div class="p-6 pt-0 text-gray-600 border-t border-gray-100 bg-gray-50/50">
                            <ul class="list-disc list-inside space-y-2 mt-4 ml-2">
                                <li>งานก่อผนัง ฉาบปูน</li>
                                <li>งานติดตั้งระบบไฟฟ้าและประปา</li>
                                <li>งานฝ้าเพดาน และงานวัสดุปูพื้น</li>
                                <li>งานติดตั้งสุขภัณฑ์และอุปกรณ์ต่างๆ</li>
                            </ul>
                        </div>
                    </details>
                </div>

                <!-- Item 5 -->
                <div class="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                    <details class="group">
                        <summary class="flex items-center justify-between p-6 cursor-pointer bg-white hover:bg-gray-50 transition-colors">
                            <div class="flex items-center gap-4">
                                <span class="bg-primary/10 text-primary font-bold px-3 py-1 rounded text-sm">Final</span>
                                <h3 class="text-xl font-bold text-gray-800">ตรวจสอบและส่งมอบ</h3>
                            </div>
                            <svg class="w-6 h-6 text-gray-400 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
                        </summary>
                        <div class="p-6 pt-0 text-gray-600 border-t border-gray-100 bg-gray-50/50">
                            <p class="mt-4">ทีม QC ตรวจสอบคุณภาพงานทุกจุด ทำความสะอาดพื้นที่ (Big Cleaning) และส่งมอบบ้านพร้อมเอกสารรับประกันให้แก่ลูกค้า</p>
                        </div>
                    </details>
                </div>
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
    content: `<div class="w-full">
    <!-- Hero Header -->
    <div class="bg-gray-900 py-20 text-center px-4">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">Premium Quality Materials</h1>
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">เราคัดสรรวัสดุชั้นเยี่ยมและเทคโนโลยีการก่อสร้างที่ทันสมัย เพื่อความแข็งแรง ทนทาน และความสวยงามที่ยั่งยืนสำหรับบ้านของคุณ</p>
    </div>

    <!-- Content Container -->
    <div class="container mx-auto px-4 md:px-12 lg:px-24 py-16 max-w-[1920px]">
        
        <!-- Structure Section -->
        <div class="flex flex-col lg:flex-row items-stretch bg-white rounded-3xl overflow-hidden shadow-xl mb-16 border border-gray-100">
            <div class="lg:w-1/2 h-64 lg:h-auto relative min-h-[400px]">
                <img src="https://picsum.photos/seed/structure-build/800/800" alt="Structural Engineering" class="absolute inset-0 w-full h-full object-cover">
                <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h2 class="text-4xl font-bold text-white drop-shadow-lg">งานโครงสร้าง</h2>
                </div>
            </div>
            <div class="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div class="space-y-8">
                    <div class="flex gap-4">
                        <div class="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-primary flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h6m-6 4h6m-6 4h6" /></svg>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-gray-800 mb-2">เสาเข็มและฐานราก</h3>
                            <p class="text-gray-600">ตอกเสาเข็มถึงชั้นดินดานตามมาตรฐานวิศวกรรม พร้อมฐานรากคอนกรีตเสริมเหล็กที่ออกแบบเพื่อรับน้ำหนักได้สูงสุด</p>
                        </div>
                    </div>
                    <div class="flex gap-4">
                        <div class="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-primary flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-gray-800 mb-2">คอนกรีตและเหล็กเส้น</h3>
                            <p class="text-gray-600">เลือกใช้คอนกรีตผสมเสร็จมาตรฐาน CPAC/Namheng กำลังอัด 240 KSC และเหล็กเส้นมาตรฐาน มอก. เต็มโรงใหญ่</p>
                        </div>
                    </div>
                    <div class="flex gap-4">
                        <div class="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-primary flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-gray-800 mb-2">อิฐมวลเบา Q-CON</h3>
                            <p class="text-gray-600">ใช้อิฐมวลเบาเกรด G4 คุณภาพสูง กันความร้อน กันเสียง และทนไฟ ช่วยให้บ้านเย็นสบายและประหยัดพลังงาน</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Architecture Section -->
        <div class="flex flex-col lg:flex-row-reverse items-stretch bg-white rounded-3xl overflow-hidden shadow-xl mb-16 border border-gray-100">
            <div class="lg:w-1/2 h-64 lg:h-auto relative min-h-[400px]">
                <img src="https://picsum.photos/seed/arch-finish/800/800" alt="Architectural Finishes" class="absolute inset-0 w-full h-full object-cover">
                <div class="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h2 class="text-4xl font-bold text-white drop-shadow-lg">งานสถาปัตยกรรม</h2>
                </div>
            </div>
            <div class="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div class="space-y-8">
                     <div class="flex gap-4">
                        <div class="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-primary flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-gray-800 mb-2">หลังคาเอสซีจี (SCG)</h3>
                            <p class="text-gray-600">กระเบื้องหลังคาคอนกรีต SCG Prestige หรือ Excella พร้อมแผ่นสะท้อนความร้อนใต้หลังคา ป้องกันความร้อนเข้าสู่ตัวบ้าน</p>
                        </div>
                    </div>
                    <div class="flex gap-4">
                        <div class="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-primary flex-shrink-0">
                           <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" /></svg>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-gray-800 mb-2">สีทาอาคาร TOA</h3>
                            <p class="text-gray-600">สีเกรดพรีเมียม TOA Supershield หรือ 4 Seasons ทนทานต่อสภาพอากาศ เช็ดล้างทำความสะอาดง่าย ป้องกันเชื้อราและตะไคร่น้ำ</p>
                        </div>
                    </div>
                     <div class="flex gap-4">
                        <div class="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-primary flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-gray-800 mb-2">วัสดุปูพื้น</h3>
                            <p class="text-gray-600">พื้นชั้นล่างปูกระเบื้องแกรนิตโต้ 60x60 ซม. เกรด AAA ชั้นบนปูพื้นไม้ลามิเนตหนา 12 มม. หรือกระเบื้องยาง SPC สวยงามและทนทาน</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Warranty Section (Full Width) -->
        <div class="bg-gradient-to-r from-primary to-red-900 rounded-3xl p-10 md:p-16 text-white text-center shadow-2xl relative overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <h2 class="text-3xl md:text-5xl font-bold mb-6 relative z-10">การรับประกันที่คุณวางใจได้</h2>
            <p class="text-xl text-red-100 mb-12 max-w-3xl mx-auto relative z-10">เพราะบ้านคือการลงทุนระยะยาว เราจึงมอบความคุ้มครองสูงสุดเพื่อความสบายใจของคุณ</p>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all transform hover:-translate-y-2">
                    <div class="text-5xl md:text-6xl font-bold text-yellow-400 mb-4">20 <span class="text-2xl">ปี</span></div>
                    <h3 class="text-xl font-bold uppercase tracking-wide">รับประกันโครงสร้าง</h3>
                    <p class="text-sm text-white/80 mt-2">เสาเข็ม ฐานราก คาน เสา พื้น</p>
                </div>
                <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all transform hover:-translate-y-2">
                    <div class="text-5xl md:text-6xl font-bold text-yellow-400 mb-4">5 <span class="text-2xl">ปี</span></div>
                    <h3 class="text-xl font-bold uppercase tracking-wide">รับประกันหลังคา</h3>
                    <p class="text-sm text-white/80 mt-2">การรั่วซึมของหลังคา</p>
                </div>
                <div class="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all transform hover:-translate-y-2">
                    <div class="text-5xl md:text-6xl font-bold text-yellow-400 mb-4">1 <span class="text-2xl">ปี</span></div>
                    <h3 class="text-xl font-bold uppercase tracking-wide">รับประกันสถาปัตยกรรม</h3>
                    <p class="text-sm text-white/80 mt-2">งานพื้น ผนัง ฝ้า และสี</p>
                </div>
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
    content: `<div class="w-full">
    
    <!-- Header -->
    <div class="text-center py-16 md:py-24 px-4">
        <h1 class="text-4xl md:text-6xl font-bold text-primary mb-6">More Than Just A Home</h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">เติมเต็มความสมบูรณ์แบบให้การอยู่อาศัย ด้วยบริการเสริมครบวงจรจากทีมงานมืออาชีพของ DDHOUSE</p>
    </div>

    <!-- Image Grid Gallery -->
    <div class="container mx-auto px-4 md:px-12 lg:px-24 max-w-[1920px] mb-20">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <!-- Service 1 -->
            <div class="group relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-lg">
                <img src="https://picsum.photos/seed/interior-design/600/800" alt="Interior Design" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
                <div class="absolute bottom-0 left-0 p-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div class="bg-primary w-12 h-12 rounded-full flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h6m-6 4h6m-6 4h6" /></svg>
                    </div>
                    <h3 class="text-2xl font-bold mb-2">งานตกแต่งภายใน</h3>
                    <p class="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">เนรมิตพื้นที่ภายในให้สวยงาม ตรงตามไลฟ์สไตล์ของคุณ ด้วยทีมมัณฑนากรมากประสบการณ์</p>
                </div>
            </div>

            <!-- Service 2 -->
            <div class="group relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-lg">
                <img src="https://picsum.photos/seed/pool-service/600/800" alt="Swimming Pool" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
                 <div class="absolute bottom-0 left-0 p-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                     <div class="bg-primary w-12 h-12 rounded-full flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
                    </div>
                    <h3 class="text-2xl font-bold mb-2">สระว่ายน้ำส่วนตัว</h3>
                    <p class="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">ออกแบบและก่อสร้างสระว่ายน้ำระบบเกลือ สปา และจากุซซี่ เพื่อการพักผ่อนที่สมบูรณ์แบบ</p>
                </div>
            </div>

            <!-- Service 3 -->
            <div class="group relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-lg">
                <img src="https://picsum.photos/seed/landscape-gardening/600/800" alt="Landscape" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
                 <div class="absolute bottom-0 left-0 p-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                     <div class="bg-primary w-12 h-12 rounded-full flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6H8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" /></svg>
                    </div>
                    <h3 class="text-2xl font-bold mb-2">จัดสวนและภูมิทัศน์</h3>
                    <p class="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">เพิ่มพื้นที่สีเขียว สร้างบรรยากาศร่มรื่นรอบตัวบ้าน ให้คุณใกล้ชิดธรรมชาติได้ทุกวัน</p>
                </div>
            </div>

            <!-- Service 4 -->
            <div class="group relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-lg">
                <img src="https://picsum.photos/seed/smart-home-tech/600/800" alt="Smart Home" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
                 <div class="absolute bottom-0 left-0 p-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                     <div class="bg-primary w-12 h-12 rounded-full flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <h3 class="text-2xl font-bold mb-2">ระบบ Smart Home</h3>
                    <p class="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">เทคโนโลยีบ้านอัจฉริยะ ควบคุมไฟฟ้า ความปลอดภัย และเครื่องใช้ไฟฟ้าผ่านสมาร์ทโฟน</p>
                </div>
            </div>

            <!-- Service 5 -->
             <div class="group relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-lg">
                <img src="https://picsum.photos/seed/gate-fence/600/800" alt="Gate & Fence" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
                 <div class="absolute bottom-0 left-0 p-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                     <div class="bg-primary w-12 h-12 rounded-full flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h6m-6 4h6m-6 4h6" /></svg>
                    </div>
                    <h3 class="text-2xl font-bold mb-2">ประตูรั้วและกำแพง</h3>
                    <p class="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">ออกแบบติดตั้งรั้วรอบขอบชิด ประตูรั้วรีโมท อลูมิเนียมลายไม้ แข็งแรง สวยงาม</p>
                </div>
            </div>

             <!-- Service 6 -->
            <div class="group relative h-96 rounded-2xl overflow-hidden cursor-pointer shadow-lg">
                <img src="https://picsum.photos/seed/permits-docs/600/800" alt="Documents" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity"></div>
                 <div class="absolute bottom-0 left-0 p-8 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                     <div class="bg-primary w-12 h-12 rounded-full flex items-center justify-center mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                    </div>
                    <h3 class="text-2xl font-bold mb-2">บริการขอมิเตอร์ถาวร</h3>
                    <p class="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">ดำเนินการด้านเอกสารราชการ ยื่นขอติดตั้งมิเตอร์น้ำ-ไฟ ถาวร ให้พร้อมใช้งาน</p>
                </div>
            </div>

        </div>
    </div>

    <!-- CTA Banner -->
    <div class="bg-gray-100 py-16">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-3xl font-bold text-gray-800 mb-4">สนใจบริการเสริม?</h2>
            <p class="text-gray-600 mb-8">ปรึกษาทีมงานของเราวันนี้ เพื่อประเมินราคาและรับข้อเสนอพิเศษ</p>
            <a href="/appointment" class="bg-primary hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 inline-block">
                ติดต่อสอบถามข้อมูล
            </a>
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
