
import { HomeDesign, Banner, Article, CustomPage, PromoCard, Testimonial, SiteNotification, PopupModalContent, SiteInfo, PortfolioProject, CalendarEvent, GalleryAlbum } from './types';

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
    seo: { title: 'Privacy Policy | DDHOUSE', description: 'Read our privacy policy to understand how we handle your data.' },
    menuLocation: 'none',
    order: 99
  },
  {
    id: 'page-002',
    slug: 'construction-process',
    title: 'ขั้นตอนการปลูกสร้าง',
    content: `<div class="w-full font-sans bg-white">
    <!-- Hero Section -->
    <div class="w-full bg-gray-50 py-20 md:py-28 text-center relative overflow-hidden">
        <h1 class="text-4xl md:text-6xl font-extrabold text-primary relative z-10 mb-4 tracking-tight">ขั้นตอนการปลูกสร้าง</h1>
        <p class="text-gray-500 text-lg md:text-xl relative z-10 max-w-2xl mx-auto px-4">เราใส่ใจทุกรายละเอียด เพื่อให้คุณได้บ้านที่มีคุณภาพตามมาตรฐานวิศวกรรม</p>
        <div class="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
    </div>

    <!-- Timeline Steps -->
    <div class="container mx-auto px-4 py-16 max-w-6xl">
        <div class="space-y-12 md:space-y-0 relative">
            <!-- Central Line (Desktop) -->
            <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>

            <!-- Step 1 -->
            <div class="flex flex-col md:flex-row items-center justify-between relative group">
                <div class="w-full md:w-5/12 text-center md:text-right pr-0 md:pr-12 mb-6 md:mb-0">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">01. เลือกแบบบ้าน</h3>
                    <p className="text-gray-600">เลือกแบบบ้านมาตรฐานที่ท่านชื่นชอบ หรือปรึกษาสถาปนิกเพื่อปรับปรุงฟังก์ชันให้ตอบโจทย์ไลฟ์สไตล์</p>
                </div>
                <div class="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-primary z-10 flex items-center justify-center text-primary font-bold shadow-lg md:block hidden">
                    1
                </div>
                <div class="w-full md:w-5/12 pl-0 md:pl-12">
                    <img src="https://picsum.photos/seed/step1/600/400" alt="Step 1" className="rounded-xl shadow-lg w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500" />
                </div>
            </div>

            <!-- Step 2 -->
            <div class="flex flex-col md:flex-row-reverse items-center justify-between relative group">
                <div class="w-full md:w-5/12 text-center md:text-left pl-0 md:pl-12 mb-6 md:mb-0">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">02. สำรวจที่ดิน & ทำสัญญา</h3>
                    <p className="text-gray-600">ทีมงานลงพื้นที่สำรวจที่ดินจริง วัดระดับ และจัดทำสัญญาจ้างเหมาก่อสร้างอย่างเป็นธรรม</p>
                </div>
                <div class="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-primary z-10 flex items-center justify-center text-primary font-bold shadow-lg md:block hidden">
                    2
                </div>
                <div class="w-full md:w-5/12 pr-0 md:pr-12">
                    <img src="https://picsum.photos/seed/step2/600/400" alt="Step 2" className="rounded-xl shadow-lg w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500" />
                </div>
            </div>

            <!-- Step 3 -->
            <div class="flex flex-col md:flex-row items-center justify-between relative group">
                <div class="w-full md:w-5/12 text-center md:text-right pr-0 md:pr-12 mb-6 md:mb-0">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">03. ยื่นขออนุญาต</h3>
                    <p className="text-gray-600">ดำเนินการจัดเตรียมเอกสารและยื่นขออนุญาตก่อสร้างกับหน่วยงานราชการให้ครบถ้วน</p>
                </div>
                <div class="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-primary z-10 flex items-center justify-center text-primary font-bold shadow-lg md:block hidden">
                    3
                </div>
                <div class="w-full md:w-5/12 pl-0 md:pl-12">
                    <img src="https://picsum.photos/seed/step3/600/400" alt="Step 3" className="rounded-xl shadow-lg w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500" />
                </div>
            </div>

             <!-- Step 4 -->
            <div class="flex flex-col md:flex-row-reverse items-center justify-between relative group">
                <div class="w-full md:w-5/12 text-center md:text-left pl-0 md:pl-12 mb-6 md:mb-0">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">04. ดำเนินการก่อสร้าง</h3>
                    <p className="text-gray-600">เริ่มงานฐานราก โครงสร้าง สถาปัตยกรรม และงานระบบ โดยวิศวกรควบคุมงานอย่างใกล้ชิด</p>
                </div>
                <div class="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-primary z-10 flex items-center justify-center text-primary font-bold shadow-lg md:block hidden">
                    4
                </div>
                <div class="w-full md:w-5/12 pr-0 md:pr-12">
                    <img src="https://picsum.photos/seed/step4/600/400" alt="Step 4" className="rounded-xl shadow-lg w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500" />
                </div>
            </div>

             <!-- Step 5 -->
            <div class="flex flex-col md:flex-row items-center justify-between relative group">
                <div class="w-full md:w-5/12 text-center md:text-right pr-0 md:pr-12 mb-6 md:mb-0">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors">05. ส่งมอบบ้าน</h3>
                    <p className="text-gray-600">ตรวจสอบคุณภาพครั้งสุดท้าย (QC) และส่งมอบบ้านพร้อมใบรับประกันความพึงพอใจ</p>
                </div>
                <div class="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-primary border-4 border-white z-10 flex items-center justify-center text-white font-bold shadow-lg md:block hidden">
                    5
                </div>
                <div class="w-full md:w-5/12 pl-0 md:pl-12">
                    <img src="https://picsum.photos/seed/step5/600/400" alt="Step 5" className="rounded-xl shadow-lg w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500" />
                </div>
            </div>
        </div>
    </div>
</div>`,
    seo: { title: 'ขั้นตอนการปลูกสร้าง | DDHOUSE', description: 'เรียนรู้ขั้นตอนการสร้างบ้านกับ DDHOUSE ตั้งแต่เริ่มต้นจนส่งมอบ' },
    menuLocation: 'service_submenu',
    order: 1
  },
  {
    id: 'page-003',
    slug: 'system-spec',
    title: 'ระบบก่อสร้าง & Material Spec',
    content: `<div class="w-full font-sans bg-white">
    
    <!-- Hero Banner -->
    <div class="relative w-full h-[400px] md:h-[500px]">
        <img src="https://picsum.photos/seed/construction-hero/1600/900" alt="Premium Specification" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
            <h1 class="text-4xl md:text-6xl font-bold text-white mb-2 drop-shadow-md">Premium Specification</h1>
            <p class="text-white text-lg md:text-xl font-light tracking-wide drop-shadow-sm">คัดสรรวัสดุที่ดีที่สุด เพื่อบ้านที่แข็งแรงและสวยงามยาวนาน</p>
        </div>
    </div>

    <!-- Section 1: Foundation & Structure -->
    <div class="flex flex-col md:flex-row w-full">
        <!-- Left Image -->
        <div class="w-full md:w-1/2 h-[400px] md:h-auto relative">
            <img src="https://picsum.photos/seed/structure-concrete/800/800" alt="Structure" class="w-full h-full object-cover" />
        </div>
        
        <!-- Right Content -->
        <div class="w-full md:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center bg-white">
            <span class="text-primary text-xs font-bold tracking-widest uppercase mb-4">Foundation & Structure</span>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-serif">งานโครงสร้างที่มั่นคง</h2>
            
            <div class="space-y-8">
                <div class="flex items-start gap-4">
                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-red-50 text-primary font-bold flex items-center justify-center text-sm border border-red-100">01</div>
                    <div>
                        <h4 class="text-lg font-bold text-gray-800">เสาเข็มและฐานราก</h4>
                        <p class="text-sm text-gray-500 mt-1 leading-relaxed">ตอกเสาเข็มลึกถึงชั้นดินดาน พร้อมฐานรากคอนกรีตเสริมเหล็ก ออกแบบโดยวิศวกรผู้เชี่ยวชาญ</p>
                    </div>
                </div>
                <div class="flex items-start gap-4">
                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-red-50 text-primary font-bold flex items-center justify-center text-sm border border-red-100">02</div>
                    <div>
                        <h4 class="text-lg font-bold text-gray-800">คอนกรีตคุณภาพสูง</h4>
                        <p class="text-sm text-gray-500 mt-1 leading-relaxed">เลือกใช้คอนกรีตผสมเสร็จมาตรฐาน CPAC หรือเทียบเท่า กำลังอัด 240 KSC เพื่อความแข็งแกร่งสูงสุด</p>
                    </div>
                </div>
                <div class="flex items-start gap-4">
                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-red-50 text-primary font-bold flex items-center justify-center text-sm border border-red-100">03</div>
                    <div>
                        <h4 class="text-lg font-bold text-gray-800">เหล็กเส้นเต็มโรงใหญ่</h4>
                        <p class="text-sm text-gray-500 mt-1 leading-relaxed">ใช้เหล็กเส้นมาตรฐาน มอก. โรงใหญ่ เพื่อความยืดหยุ่นและการรับแรงดึงที่สมบูรณ์แบบ</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Section 2: Architecture & Finishes -->
    <div class="flex flex-col md:flex-row-reverse w-full">
        <!-- Right Image -->
        <div class="w-full md:w-1/2 h-[400px] md:h-auto relative">
            <img src="https://picsum.photos/seed/roof-finish/800/800" alt="Finishes" class="w-full h-full object-cover" />
        </div>
        
        <!-- Left Content -->
        <div class="w-full md:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center bg-gray-50">
            <span class="text-primary text-xs font-bold tracking-widest uppercase mb-4">Architecture & Finishes</span>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-8 font-serif">ความงามที่สัมผัสได้</h2>
            
            <div class="space-y-8">
                <div class="flex items-start gap-4">
                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-white text-primary font-bold flex items-center justify-center text-sm border border-primary/20">A</div>
                    <div>
                        <h4 class="text-lg font-bold text-gray-800">อิฐมวลเบา Q-CON</h4>
                        <p class="text-sm text-gray-500 mt-1 leading-relaxed">กันความร้อน กันเสียง และทนไฟ ช่วยให้บ้านเย็นสบาย ประหยัดพลังงานกว่าอิฐมอญทั่วไป</p>
                    </div>
                </div>
                <div class="flex items-start gap-4">
                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-white text-primary font-bold flex items-center justify-center text-sm border border-primary/20">B</div>
                    <div>
                        <h4 class="text-lg font-bold text-gray-800">หลังคาเอสซีจี (SCG)</h4>
                        <p class="text-sm text-gray-500 mt-1 leading-relaxed">มั่นใจด้วยกระเบื้องหลังคา SCG พร้อมแผ่นสะท้อนความร้อน ป้องกันการรั่วซึมและความร้อน</p>
                    </div>
                </div>
                <div class="flex items-start gap-4">
                    <div class="flex-shrink-0 w-10 h-10 rounded-full bg-white text-primary font-bold flex items-center justify-center text-sm border border-primary/20">C</div>
                    <div>
                        <h4 class="text-lg font-bold text-gray-800">สีเกรดพรีเมียม TOA</h4>
                        <p class="text-sm text-gray-500 mt-1 leading-relaxed">ใช้สี TOA Supershield หรือเทียบเท่า ทนทานต่อสภาพอากาศ เช็ดล้างง่าย สีสวยสดใสยาวนาน</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Warranty Footer -->
    <div class="w-full bg-primary py-12 px-4 text-white text-center">
        <h2 class="text-3xl font-bold mb-8">การรับประกันที่คุณวางใจ</h2>
        <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="border border-white/30 p-6 rounded-lg hover:bg-white/10 transition-colors">
                <div class="text-5xl font-bold mb-2">20<span class="text-xl">ปี</span></div>
                <div class="w-12 h-1 bg-yellow-400 mx-auto mb-4"></div>
                <h3 class="text-xl font-bold">รับประกันโครงสร้าง</h3>
                <p class="text-sm text-white/80 mt-2">เสาเข็ม ฐานราก คาน เสา พื้น</p>
            </div>
            <div class="border border-white/30 p-6 rounded-lg hover:bg-white/10 transition-colors">
                <div class="text-5xl font-bold mb-2">5<span class="text-xl">ปี</span></div>
                <div class="w-12 h-1 bg-yellow-400 mx-auto mb-4"></div>
                <h3 class="text-xl font-bold">รับประกันหลังคา</h3>
                <p class="text-sm text-white/80 mt-2">การรั่วซึมของหลังคาและดาดฟ้า</p>
            </div>
            <div class="border border-white/30 p-6 rounded-lg hover:bg-white/10 transition-colors">
                <div class="text-5xl font-bold mb-2">1<span class="text-xl">ปี</span></div>
                <div class="w-12 h-1 bg-yellow-400 mx-auto mb-4"></div>
                <h3 class="text-xl font-bold">รับประกันทั่วไป</h3>
                <p class="text-sm text-white/80 mt-2">งานสถาปัตยกรรม พื้น ผนัง ฝ้า สี</p>
            </div>
        </div>
    </div>
</div>`,
    seo: { title: 'ระบบก่อสร้าง & Material Spec | DDHOUSE', description: 'ดูรายละเอียดระบบก่อสร้างและสเปควัสดุมาตรฐานของเรา' },
    menuLocation: 'service_submenu',
    order: 2
  },
  {
    id: 'page-005',
    slug: 'extra-services',
    title: 'สินค้าและบริการเสริมครบวงจร',
    content: `<div class="w-full font-sans bg-gray-50 py-16 md:py-24">
    <div class="container mx-auto px-4 max-w-6xl">
        <div class="text-center mb-16">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-tight">Beyond Construction</h1>
            <p class="text-gray-500 text-lg max-w-2xl mx-auto">เติมเต็มทุกความต้องการเรื่องบ้าน ด้วยบริการเสริมระดับพรีเมียมจากผู้เชี่ยวชาญที่คุณไว้วางใจได้</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Card 1 -->
            <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-100">
                <div class="h-64 overflow-hidden relative">
                    <img src="https://picsum.photos/seed/interior/600/400" alt="Interior" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div class="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                </div>
                <div class="p-8">
                    <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                        <svg class="w-6 h-6 text-primary group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">งานตกแต่งภายใน</h3>
                    <p class="text-gray-500 text-sm leading-relaxed">เปลี่ยนบ้านเปล่าให้เป็นบ้านในฝัน ด้วยทีมมัณฑนากรมืออาชีพ ออกแบบและบิวท์อินเฟอร์นิเจอร์ครบวงจร</p>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-100">
                <div class="h-64 overflow-hidden relative">
                    <img src="https://picsum.photos/seed/pool/600/400" alt="Pool" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div class="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                </div>
                <div class="p-8">
                    <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                        <svg class="w-6 h-6 text-primary group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">สระว่ายน้ำส่วนตัว</h3>
                    <p class="text-gray-500 text-sm leading-relaxed">ออกแบบและก่อสร้างสระว่ายน้ำระบบเกลือ พร้อมระบบสปาจากุซซี่ เพื่อการพักผ่อนที่สมบูรณ์แบบ</p>
                </div>
            </div>

            <!-- Card 3 -->
            <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-100">
                <div class="h-64 overflow-hidden relative">
                    <img src="https://picsum.photos/seed/landscape/600/400" alt="Landscape" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div class="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                </div>
                <div class="p-8">
                    <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                        <svg class="w-6 h-6 text-primary group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" /></svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">จัดสวนและภูมิทัศน์</h3>
                    <p class="text-gray-500 text-sm leading-relaxed">สร้างบรรยากาศร่มรื่นรอบตัวบ้าน ด้วยการจัดสวนสวย ปูหญ้า และวางระบบรดน้ำอัตโนมัติ</p>
                </div>
            </div>
            
             <!-- Card 4 -->
            <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-100">
                <div class="h-64 overflow-hidden relative">
                    <img src="https://picsum.photos/seed/smarthome/600/400" alt="Smart Home" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div class="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                </div>
                <div class="p-8">
                    <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                        <svg class="w-6 h-6 text-primary group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">Smart Home</h3>
                    <p class="text-gray-500 text-sm leading-relaxed">ยกระดับชีวิตด้วยเทคโนโลยีบ้านอัจฉริยะ ควบคุมแสงสว่าง แอร์ และความปลอดภัยผ่านมือถือ</p>
                </div>
            </div>

             <!-- Card 5 -->
            <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-100">
                <div class="h-64 overflow-hidden relative">
                    <img src="https://picsum.photos/seed/solar/600/400" alt="Solar" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div class="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                </div>
                <div class="p-8">
                    <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                        <svg class="w-6 h-6 text-primary group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">Solar Roof</h3>
                    <p class="text-gray-500 text-sm leading-relaxed">ติดตั้งแผงโซลาร์เซลล์มาตรฐานสากล ช่วยลดค่าไฟและเป็นมิตรต่อสิ่งแวดล้อม</p>
                </div>
            </div>

             <!-- Card 6 -->
            <div class="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer border border-gray-100">
                <div class="h-64 overflow-hidden relative">
                    <img src="https://picsum.photos/seed/gate/600/400" alt="Gate" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div class="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                </div>
                <div class="p-8">
                    <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                        <svg class="w-6 h-6 text-primary group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-3 group-hover:text-primary transition-colors">ประตูรั้วและกำแพง</h3>
                    <p class="text-gray-500 text-sm leading-relaxed">งานรั้วรอบขอบชิด ประตูสแตนเลส อลูมิเนียมลายไม้ หรือประตูรีโมทอัตโนมัติ</p>
                </div>
            </div>
        </div>
    </div>
</div>`,
    seo: { title: 'สินค้าและบริการเสริม | DDHOUSE', description: 'เลือกชมสินค้าและบริการเสริมเพื่อบ้านของคุณ เช่น ตกแต่งภายใน สระว่ายน้ำ จัดสวน และอื่นๆ' },
    menuLocation: 'service_submenu',
    order: 3
  },
  {
    id: 'page-portfolio',
    slug: 'portfolio',
    title: 'ผลงานของเรา',
    content: '<p>ชมผลงานการสร้างสรรค์บ้านคุณภาพ ที่เราภาคภูมิใจส่งมอบให้กับลูกค้าทุกท่าน</p>',
    imageUrl: 'https://picsum.photos/seed/portfolio-hero/1600/800',
    seo: { title: 'ผลงานของเรา | DDHOUSE', description: 'ชมผลงานการสร้างสรรค์บ้านคุณภาพจาก DDHOUSE' },
    menuLocation: 'primary',
    order: 5
  },
  {
    id: 'page-appointment',
    slug: 'appointment',
    title: 'ติดต่อเรา',
    content: `<div class="w-full font-sans">
    <!-- Hero Header -->
    <div class="w-full bg-gray-900 py-24 text-center relative overflow-hidden">
         <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-30"></div>
         <img src="https://picsum.photos/seed/office-bg/1600/600" class="absolute inset-0 w-full h-full object-cover opacity-30 blur-sm" alt="Office Background" />
         <div class="relative z-10 px-4">
             <h1 class="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">ติดต่อเรา</h1>
             <p class="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">เราพร้อมให้คำปรึกษาและสานฝันเรื่องบ้านของคุณให้เป็นจริง ติดต่อเราได้ทุกช่องทาง</p>
         </div>
    </div>

    <!-- Contact Info Grid -->
    <div class="w-full bg-white py-16">
        <div class="container mx-auto px-4 max-w-6xl">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                
                <!-- Phone -->
                <div class="bg-gray-50 p-8 rounded-2xl flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                    <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary shadow-md mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-2">เบอร์โทรศัพท์</h3>
                    <p class="text-gray-600 text-lg">097 978 7459</p>
                    <p class="text-gray-500 text-sm mt-1">ติดต่อได้ทุกวัน</p>
                </div>

                <!-- Email -->
                <div class="bg-gray-50 p-8 rounded-2xl flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                    <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary shadow-md mb-4">
                         <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-2">อีเมล</h3>
                    <p class="text-gray-600 text-lg">contact@ddhouse.co.th</p>
                    <p class="text-gray-500 text-sm mt-1">ตอบกลับภายใน 24 ชม.</p>
                </div>

                <!-- Office Hours -->
                <div class="bg-gray-50 p-8 rounded-2xl flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                    <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary shadow-md mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-2">เวลาทำการ</h3>
                    <p class="text-gray-600 text-lg">09:00 - 18:00 น.</p>
                    <p class="text-gray-500 text-sm mt-1">เปิดทำการทุกวัน</p>
                </div>
            </div>

            <!-- Address & Map Row -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                 <div class="flex flex-col justify-center p-8 bg-white rounded-2xl shadow-md border border-gray-100">
                     <h3 class="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                        ที่อยู่สำนักงาน
                     </h3>
                     <p class="text-gray-600 text-lg leading-relaxed mb-6">
                        บริษัท บ้านดีดีวิศวกรรม จำกัด<br>
                        123/45 ถนนมิตรภาพ ตำบลในเมือง<br>
                        อำเภอเมือง จังหวัดนครราชสีมา 30000
                     </p>
                     <div class="h-1 w-full bg-gray-100 my-4"></div>
                     <p class="text-gray-500 italic">"เรามุ่งมั่นให้บริการสร้างบ้านคุณภาพ ครอบคลุมพื้นที่ภาคอีสานตอนล่าง"</p>
                 </div>
                 
                 <div class="h-[400px] bg-gray-200 rounded-2xl overflow-hidden shadow-lg relative group">
                      <!-- Placeholder for Google Map -->
                      <img src="https://picsum.photos/seed/map-location/800/600" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="Map Location" />
                      <div class="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                          <button class="bg-white/90 text-gray-800 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-white hover:text-primary transition-all flex items-center gap-2">
                             <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" /></svg>
                             ดูแผนที่ Google Maps
                          </button>
                      </div>
                 </div>
            </div>
        </div>
    </div>
</div>`,
    seo: { title: 'ติดต่อเรา | DDHOUSE', description: 'ติดต่อ DDHOUSE ศูนย์รับสร้างบ้าน บ้านดีดีวิศวกรรม' },
    menuLocation: 'primary',
    order: 90
  },
  {
    id: 'page-calendar',
    slug: 'calendar',
    title: 'ตารางกิจกรรม',
    content: '', 
    menuLocation: 'service_submenu',
    order: 4
  },
  {
    id: 'page-gallery',
    slug: 'gallery',
    title: 'อัลบั้มรูปภาพ',
    content: '', 
    menuLocation: 'service_submenu',
    order: 5
  }
];

export const INITIAL_CALENDAR_EVENTS: CalendarEvent[] = [
  { id: 'ev-1', title: 'เริ่มก่อสร้างบ้านคุณสมชาย', date: '2023-11-15', type: 'construction', description: 'เริ่มงานตอกเสาเข็ม' },
  { id: 'ev-2', title: 'ส่งมอบบ้านคุณมานี', date: '2023-11-20', type: 'handover', description: 'นัดตรวจรับและส่งมอบกุญแจ' },
  { id: 'ev-3', title: 'วันหยุดบริษัท', date: '2023-11-25', type: 'holiday', description: 'หยุดประจำปี' },
  { id: 'ev-4', title: 'ประชุมทีมวิศวกร', date: '2023-11-10', type: 'meeting', description: 'อัปเดตความคืบหน้าโครงการ' },
];

export const INITIAL_GALLERY_ALBUMS: GalleryAlbum[] = [
  {
    id: 'album-1',
    title: 'รวมภาพส่งมอบบ้าน 2023',
    description: 'ภาพความประทับใจในวันส่งมอบบ้านให้กับลูกค้าของเรา',
    coverImage: 'https://picsum.photos/seed/album1/800/600',
    date: '2023-10-01',
    images: [
        'https://picsum.photos/seed/h1/800/600',
        'https://picsum.photos/seed/h2/800/600',
        'https://picsum.photos/seed/h3/800/600',
        'https://picsum.photos/seed/h4/800/600',
    ]
  },
  {
    id: 'album-2',
    title: 'บรรยากาศหน้างานก่อสร้าง',
    description: 'ติดตามการทำงานของทีมช่างและวิศวกรในไซต์งานจริง',
    coverImage: 'https://picsum.photos/seed/album2/800/600',
    date: '2023-09-15',
    images: [
        'https://picsum.photos/seed/c1/800/600',
        'https://picsum.photos/seed/c2/800/600',
        'https://picsum.photos/seed/c3/800/600',
    ]
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
  officeHours: 'ทำการทุกวัน 08:00 - 17:30 น.',
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
