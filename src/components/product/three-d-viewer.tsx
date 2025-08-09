import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ZoomIn, RotateCw, Box } from 'lucide-react';

interface ThreeDViewerProps {
  image: string;
  alt: string;
}

export function ThreeDViewer({ image, alt }: ThreeDViewerProps) {
  return (
    <div className="sticky top-24">
      <Card className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg">
        {/* Placeholder for the actual 3D model viewer (e.g., react-three-fiber canvas) */}
        <Image
          src={image}
          alt={alt}
          width={800}
          height={800}
          className="h-full w-full object-cover"
          priority
          data-ai-hint="jewelry 3d model"
        />
        <div className="absolute inset-0 bg-black/5 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
             <p className="text-white bg-black/50 px-4 py-2 rounded-md">3D Viewer Coming Soon</p>
        </div>
      </Card>
      <div className="mt-4 flex justify-center gap-2">
        <Button variant="outline" size="icon" aria-label="Zoom In">
          <ZoomIn className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="icon" aria-label="Rotate">
          <RotateCw className="h-5 w-5" />
        </Button>
         <Button variant="outline" aria-label="AR Try On">
          <Box className="mr-2 h-5 w-5" />
          AR Try-On
        </Button>
      </div>
    </div>
  );
}
