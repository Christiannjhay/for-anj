import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function ImagesCarousel() {

  const images = [
 
    "/anj/img2.jpeg",
    "/anj/img3.jpg",
    "/anj/img4.jpg",
    "/anj/img5.jpg",
    "/anj/img6.jpg",
    "/anj/img7.jpg",
    "/anj/img8.jpg",
    "/anj/img9.jpg",
    "/anj/img10.jpg",
    "/anj/img11.jpg",
    "/anj/img12.jpg",
    "/anj/img13.jpg",
    "/anj/img14.jpg",
    "/anj/img15.jpg",
    "/anj/img16.jpg",
    "/anj/img17.jpg",
    "/anj/img18.jpg",
    "/anj/img19.jpg",
    "/anj/img20.jpg",
    "/anj/img21.jpg",
    "/anj/img22.jpg",
    "/anj/img23.jpg",
    "/anj/img24.jpg"
   
  ];



  return (
    <Carousel className="max-md:w-full w-[50%]">
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <div className="max-lg:max-h-[575px] lg:max-h-[944px]">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center">
                  <img
                    src={src}
                    alt={`Carousel image ${index + 1}`}
                    className="object-cover w-full h-full rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    
    </Carousel>
  )
}
