import { useState } from "react";
import { Heart, Camera, X } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion, AnimatePresence } from "motion/react";

interface Photo {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
}

const photos: Photo[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1746342063667-522e06b942fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RoZXIlMjBjaGlsZCUyMHNpbGhvdWV0dGUlMjBzdW5zZXQlMjBnb2xkZW58ZW58MXx8fHwxNzU3OTY2Njg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Mother and child silhouette at golden sunset",
    title: "Golden Moments",
    description:
      "Like this beautiful sunset, your love lights up my entire world with warmth and hope.",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1719089816205-6e7a6544e99c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBmbG93ZXJzJTIwcGluayUyMHB1cnBsZSUyMGdhcmRlbnxlbnwxfHx8fDE3NTc5NjY2ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Beautiful pink and purple flowers in garden",
    title: "Garden of Love",
    description:
      "Just like these flowers bloom in spring, your love has helped me blossom into who I am today.",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1525667218880-145f026b0ad0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmVhbXklMjBwYXN0ZWwlMjBjbG91ZHMlMjBza3klMjBzb2Z0JTIwbGlnaHR8ZW58MXx8fHwxNzU3OTY2Njk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Dreamy pastel clouds in soft light",
    title: "Dreams in the Sky",
    description:
      "Our dreams float together like these clouds - beautiful, endless, and always reaching higher.",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1616125566107-eec69f76648f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJtJTIwY296eSUyMGZhbWlseSUyMGhvbWUlMjBsb3ZlfGVufDF8fHx8MTc1Nzk2NjY5OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Warm cozy family home",
    title: "Home is Where You Are",
    description:
      "No matter where life takes me, home will always be wherever you are, Mom.",
  },
];

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] =
    useState<Photo | null>(null);

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <Camera className="w-6 h-6 text-pink-500" />
          <h2 className="text-2xl sm:text-3xl bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
            Our Memory Gallery
          </h2>
          <Camera className="w-6 h-6 text-pink-500" />
        </div>
        <p className="text-gray-600 text-sm sm:text-base">
          Visual stories of love, dreams, and beautiful moments
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card
              className="overflow-hidden shadow-lg border-0 cursor-pointer group"
              onClick={() => setSelectedPhoto(photo)}
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-2 left-2 right-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {photo.title}
                  </h3>
                </div>
              </div>
              <div className="p-4 space-y-2">
                <h3 className="text-gray-800 text-lg">
                  {photo.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                  {photo.description}
                </p>
                <div className="flex justify-end">
                  <Heart className="w-4 h-4 text-pink-400 fill-pink-300" />
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Modal for expanded photo view */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <ImageWithFallback
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  className="w-full h-64 sm:h-80 object-cover"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                  onClick={() => setSelectedPhoto(null)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-pink-500 fill-pink-400" />
                  <h3 className="text-xl text-gray-800">
                    {selectedPhoto.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {selectedPhoto.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}