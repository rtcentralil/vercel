import Slider from 'react-slick';
import Image from 'next/image';

export default function PartnerCarousel() {
  const logos = [
    { name: "YMCA", src: "partner1.png" },
    { name: "Partner 2", src: "partner2.png" },
    { name: "Partner 3", src: "partner3.png" },
    // Optionally, add a fourth logo:
    // { name: "Partner 4", src: "partner4.png" },
  ];

  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    cssEase: 'ease-in-out',
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: logos.length,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: logos.length >= 3 ? 3 : logos.length } },
      { breakpoint: 768, settings: { slidesToShow: logos.length >= 2 ? 2 : logos.length } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="partner-carousel-section py-16">
      <div className="container mx-auto px-6">
        <Slider {...settings} aria-label="Partner logos carousel">
          {logos.map((logo, index) => (
            <div key={index} className="relative h-20 px-2">
              <Image
                src={`/images/partners/${logo.src}`}
                alt={logo.name || 'Partner logo'}
                width={150}
                height={100}
                className="object-contain mx-auto"
                quality={85}
                priority
              />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}