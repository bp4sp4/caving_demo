"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

import { Button } from "./button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "./carousel";

interface GalleryItem {
  id: string;
  title: string;
  summary: string;
  url: string;
  image: string;
}

interface Gallery6Props {
  heading?: string;
  demoUrl?: string;
  items?: GalleryItem[];
}

const Gallery6 = ({
  heading = "Gallery",
  demoUrl = "https://www.shadcnblocks.com",
  items = [
    {
      id: "item-1",
      title: "Build Modern UIs",
      summary:
        "Create stunning user interfaces with our comprehensive design system.",
      url: "#",
      image: "/images/block/placeholder-dark-1.svg",
    },
    {
      id: "item-2",
      title: "Computer Vision Technology",
      summary:
        "Powerful image recognition and processing capabilities that allow AI systems to analyze, understand, and interpret visual information from the world.",
      url: "#",
      image: "/images/block/placeholder-dark-1.svg",
    },
    {
      id: "item-3",
      title: "Machine Learning Automation",
      summary:
        "Self-improving algorithms that learn from data patterns to automate complex tasks and make intelligent decisions with minimal human intervention.",
      url: "#",
      image: "/images/block/placeholder-dark-1.svg",
    },
    {
      id: "item-4",
      title: "Predictive Analytics",
      summary:
        "Advanced forecasting capabilities that analyze historical data to predict future trends and outcomes, helping businesses make data-driven decisions.",
      url: "#",
      image: "/images/block/placeholder-dark-1.svg",
    },
    {
      id: "item-5",
      title: "Neural Network Architecture",
      summary:
        "Sophisticated AI models inspired by human brain structure, capable of solving complex problems through deep learning and pattern recognition.",
      url: "#",
      image: "/images/block/placeholder-dark-1.svg",
    },
  ],
}: Gallery6Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };

    updateSelection();

    carouselApi.on("select", updateSelection);

    // 자동 슬라이드 (최적화)
    let autoplayTimeout: NodeJS.Timeout;
    const startAutoplay = () => {
      autoplayTimeout = setTimeout(() => {
        if (carouselApi.canScrollNext()) {
          carouselApi.scrollNext();
        } else {
          carouselApi.scrollTo(0);
        }
        startAutoplay();
      }, 4000);
    };
    startAutoplay();

    return () => {
      carouselApi.off("select", updateSelection);
      if (autoplayTimeout) {
        clearTimeout(autoplayTimeout);
      }
    };
  }, [carouselApi]);

  return (
    <section className="w-full bg-gray-100 py-16 md:py-32 overflow-visible" style={{ fontFamily: 'Pretendard, sans-serif' }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-8 flex flex-row items-center justify-center px-5 md:mb-14 md:justify-between md:px-0 lg:mb-8">
          <h2 className="mb-0 text-center text-[25px] font-bold md:flex-1 md:text-[48px]" style={{ fontFamily: 'Pretendard, sans-serif', fontWeight: 700 }}>
            {heading}
          </h2>
          <div className="hidden shrink-0 items-center justify-end gap-2 md:flex">
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
        <div className="w-full overflow-hidden">
          <Carousel
            setApi={setCarouselApi}
            opts={{
              align: "start",
              loop: true,
              containScroll: "keepSnaps",
              slidesToScroll: 1,
              skipSnaps: false,
              dragFree: false,
              breakpoints: {
                "(max-width: 768px)": {
                  dragFree: false,
                  loop: true,
                  slidesToScroll: 1,
                  containScroll: "keepSnaps",
                },
              },
            }}
            className="relative"
          >
            <CarouselContent className="ml-0 md:ml-2" style={{ willChange: 'transform' }}>
              {items.map((item, index) => (
                <CarouselItem key={item.id} className={`pl-4 pr-4 md:pr-0 basis-full md:basis-[calc(100%/2.2)] lg:basis-[calc(100%/2.4)] xl:basis-[calc(100%/2.8)] ${index === items.length - 1 ? 'md:pr-2' : ''}`}>
                  <div
                    className="group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex aspect-[3/2] overflow-clip rounded-xl">
                        <div className="flex-1 relative">
                          <div className="relative h-full w-full origin-bottom transition-transform duration-300 group-hover:scale-105 will-change-transform" style={{ transform: 'translateZ(0)' }}>
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              className="object-cover object-center"
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              loading="lazy"
                              quality={85}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-2 line-clamp-3 break-words pt-4 text-lg font-semibold md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      {item.title}
                    </div>
                    <div className="mb-8 line-clamp-2 text-sm text-muted-foreground md:mb-12 md:text-base lg:mb-9" style={{ fontFamily: 'Pretendard, sans-serif' }}>
                      {item.summary}
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export { Gallery6 };

