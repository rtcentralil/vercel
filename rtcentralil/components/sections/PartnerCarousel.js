import Slider from 'react-slick';
import Image from 'next/image';

export default function PartnerCarousel({ logos }) {
  const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    cssEase: 'ease-in-out',
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, arrows: false } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Slider {...settings} aria-label="Partner logos carousel">
      {logos.map((logo, index) => {
        const imagePath = `/images/partners/${logo.src || 'images/logo.png'}`;
        return (
          <div key={index} className="relative h-20 px-2">
            <Image
              src={imagePath}
              alt={logo.alt}
              width={150}
              height={100}
              className="object-contain mx-auto"
              quality={85}
              priority
            />
          </div>
        );
      })}
    </Slider>
  );
}
