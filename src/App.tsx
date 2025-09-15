import { useState, useEffect } from "react";
import {
  Heart,
  Sparkles,
  Camera,
  Home,
  Star,
  Crown,
  Gift,
  Flower,
  Music,
  Image,
} from "lucide-react";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import { motion } from "motion/react";
import PhotoGallery from "./components/PhotoGallery";

export default function App() {
  const [activeSection, setActiveSection] = useState("letter");
  const [hearts, setHearts] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      delay: number;
      size: string;
    }>
  >([]);
  const [letterProgress, setLetterProgress] = useState(0);
  const [showSpecialMessage, setShowSpecialMessage] =
    useState(false);

  useEffect(() => {
    // Create floating hearts animation with varied sizes
    const newHearts = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 8,
      size:
        Math.random() > 0.5
          ? "w-4 h-4"
          : Math.random() > 0.7
            ? "w-6 h-6"
            : "w-3 h-3",
    }));
    setHearts(newHearts);

    // Trigger special message after a delay
    const timer = setTimeout(
      () => setShowSpecialMessage(true),
      2000,
    );
    return () => clearTimeout(timer);
  }, []);

  const memories = [
    {
      title: "Your Unbreakable Strength",
      content:
        "Mom, watching you face every challenge with such grace and determination has taught me what real strength looks like. When life got tough, you never gave up. You showed me that warriors don't always wear armor - sometimes they wear aprons and gentle smiles while fighting the hardest battles for their families.",
      color: "from-pink-400 via-rose-400 to-red-400",
      icon: <Crown className="w-5 h-5" />,
    },
    {
      title: "Your Endless Love",
      content:
        "Your love isn't just a feeling - it's a sanctuary, a warm embrace that has sheltered me through every storm. The way you've loved me unconditionally, even when I made mistakes, has shown me what pure, selfless love truly means. Your heart is a masterpiece painted with kindness.",
      color: "from-purple-400 via-pink-400 to-rose-400",
      icon: <Heart className="w-5 h-5 fill-current" />,
    },
    {
      title: "Your Beautiful Dreams",
      content:
        "Every dream you've ever shared with me, every hope you've whispered into my ear - they live in my heart like precious gems. I promise you'll witness every single one of my achievements because they're not just mine, they're ours. Your dreams for me have become my roadmap to success.",
      color: "from-blue-400 via-purple-400 to-pink-400",
      icon: <Star className="w-5 h-5 fill-current" />,
    },
    {
      title: "Your Golden Future",
      content:
        "The future I'm building isn't complete without your happiness in it. I envision days filled with your laughter, evenings where you can rest knowing your children are thriving, and mornings where you wake up with peace in your heart. You deserve to be celebrated every single day.",
      color: "from-yellow-400 via-orange-400 to-pink-400",
      icon: <Gift className="w-5 h-5" />,
    },
  ];

  const specialQuotes = [
    "Mom, you are the author of my courage and the artist of my dreams.",
    "In your eyes, I learned to see my worth. In your arms, I learned what home feels like.",
    "Every good thing about me traces back to lessons learned at your feet.",
    "You didn't just raise me, you grew my soul with your love.",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Enhanced Floating Hearts Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            className="absolute"
            style={{
              left: `${heart.x}%`,
              top: `${heart.y}%`,
            }}
            animate={{
              y: [-10, -50, -10],
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6 + heart.delay,
              repeat: Infinity,
              delay: heart.delay,
            }}
          >
            <Heart
              className={`${heart.size} text-pink-300 fill-pink-200 opacity-70`}
            />
          </motion.div>
        ))}
      </div>

      {/* Sparkles Animation */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            <Sparkles className="w-4 h-4 text-yellow-400 fill-yellow-300 opacity-60" />
          </motion.div>
        ))}
      </div>

      {/* Navigation with enhanced mobile responsiveness */}
      <nav className="relative z-10 p-4 sm:p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            <Button
              variant={
                activeSection === "letter" ? "default" : "ghost"
              }
              onClick={() => setActiveSection("letter")}
              className="rounded-full px-4 sm:px-6 text-xs sm:text-sm"
            >
              <Heart className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Letter
            </Button>
            <Button
              variant={
                activeSection === "memories"
                  ? "default"
                  : "ghost"
              }
              onClick={() => setActiveSection("memories")}
              className="rounded-full px-4 sm:px-6 text-xs sm:text-sm"
            >
              <Camera className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Memories
            </Button>
            <Button
              variant={
                activeSection === "future" ? "default" : "ghost"
              }
              onClick={() => setActiveSection("future")}
              className="rounded-full px-4 sm:px-6 text-xs sm:text-sm"
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Our Future
            </Button>
            <Button
              variant={
                activeSection === "special"
                  ? "default"
                  : "ghost"
              }
              onClick={() => setActiveSection("special")}
              className="rounded-full px-4 sm:px-6 text-xs sm:text-sm"
            >
              <Music className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Special
            </Button>
            <Button
              variant={
                activeSection === "gallery"
                  ? "default"
                  : "ghost"
              }
              onClick={() => setActiveSection("gallery")}
              className="rounded-full px-4 sm:px-6 text-xs sm:text-sm"
            >
              <Image className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              Gallery
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 pb-12">
        {activeSection === "letter" && (
          <motion.div
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Enhanced Header */}
            <div className="text-center space-y-4 sm:space-y-6">
              <motion.div
                className="flex justify-center items-center gap-2 sm:gap-3 flex-wrap"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-red-500 fill-red-400" />
                <h1 className="text-2xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent text-center">
                  To My Beautiful Mom
                </h1>
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-red-500 fill-red-400" />
              </motion.div>
              <motion.div
                className="w-16 sm:w-24 h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 mx-auto rounded-full"
                animate={{ scaleX: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              ></motion.div>
            </div>

            {/* Main Letter Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Card className="p-6 sm:p-8 lg:p-10 shadow-2xl bg-white/90 backdrop-blur-sm border-0 ring-1 ring-pink-200 relative overflow-hidden">
                {/* Decorative corners */}
                <div className="absolute top-0 left-0 w-12 sm:w-16 h-12 sm:h-16">
                  <div className="absolute top-2 left-2 w-8 sm:w-12 h-8 sm:h-12 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full opacity-30"></div>
                </div>
                <div className="absolute bottom-0 right-0 w-12 sm:w-16 h-12 sm:h-16">
                  <div className="absolute bottom-2 right-2 w-8 sm:w-12 h-8 sm:h-12 bg-gradient-to-br from-blue-200 to-pink-200 rounded-full opacity-30"></div>
                </div>

                <div className="space-y-6 relative z-10">
                  <div className="text-center mb-6 sm:mb-8">
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                      }}
                    >
                      <ImageWithFallback
                        src="https://images.unsplash.com/photo-1746342063667-522e06b942fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RoZXIlMjBjaGlsZCUyMHNpbGhvdWV0dGUlMjBzdW5zZXQlMjBnb2xkZW58ZW58MXx8fHwxNzU3OTY2Njg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                        alt="Mother and child silhouette at golden sunset"
                        className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full mx-auto object-cover ring-4 ring-pink-200 shadow-lg"
                      />
                    </motion.div>
                  </div>

                  <div className="space-y-4 sm:space-y-6 text-gray-700 text-sm sm:text-base leading-relaxed">
                    <motion.p
                      className="text-center italic text-lg sm:text-xl text-purple-600 px-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      "Hey Mom, this is a letter that will stay
                      forever - with love Lekhana."
                    </motion.p>

                    <div className="space-y-4 sm:space-y-6">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 }}
                      >
                        <p className="text-lg sm:text-xl text-purple-700">
                          My dearest, most precious Mom,
                        </p>
                      </motion.div>

                      <motion.div
                        className="space-y-4 sm:space-y-5"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          delay: 1.2,
                          staggerChildren: 0.3,
                        }}
                      >
                        <motion.p>
                          I just want to take a moment to tell
                          you how much you mean to me. You are
                          the heart of our family and the light
                          that keeps everything together. Every
                          little thing you do from your care,
                          your kindness, your patience, and even
                          the way you worry about us makes me
                          realize how lucky I am to have you as
                          my mom.{" "}
                          <span className="text-pink-600 font-semibold text-lg">
                            you are worth everything
                          </span>{" "}
                          - every star in the sky, every flower
                          in bloom, every precious moment of joy
                          this world has to offer.
                        </motion.p>

                        <motion.p>
                          I know sometimes life can feel heavy,
                          and you carry so much on your
                          shoulders. But Mom, please remember:
                          you don’t have to carry it all alone.
                          We love you just the way you are. You
                          are more than enough. You don’t need
                          to be perfect for us just being you is
                          already everything.
                          <span className="text-rose-600 font-semibold">
                            cherished, adored, and treasured
                          </span>{" "}
                          in ways that my heart struggles to
                          express in mere words. Every morning I
                          wake up grateful for the gift of being
                          your child, for the blessing of
                          calling you my mom.
                        </motion.p>

                        <motion.p>
                          I want you to be happy and healthy,
                          because I dream of the day you’ll see
                          me achieving all my goals and living
                          the life you’ve always wished for me.
                          And when that day comes, the biggest
                          joy for me will be seeing the proud
                          smile on your face.
                          <span className="text-purple-600 font-semibold">
                            Please don't let stress or worry
                            cloud your beautiful mind anymore.
                          </span>{" "}
                          You've given us everything - your
                          time, your energy, your dreams, your
                          very best years. You've poured your
                          love into us like sunlight nurturing
                          flowers, and now it's time for you to
                          bloom and be nurtured in return.
                        </motion.p>

                        <motion.p>
                          Do you know what I dream about, Mom? I
                          dream of seeing your face light up
                          with pure joy as you watch me achieve
                          everything we've ever talked about. I
                          dream of the day when you'll sit back,
                          exhale peacefully, and know that all
                          your sacrifices were worth it. I want
                          you to be{" "}
                          <span className="text-blue-600 font-semibold">
                            radiantly happy, beautifully
                            healthy, and completely at peace
                          </span>{" "}
                          as you witness me living my best life
                          - a life made possible by your
                          unwavering love and belief in me.
                        </motion.p>

                        <motion.p className="text-center pt-4 sm:pt-6 text-lg">
                          <span className="text-red-500 text-2xl">
                            ❤️
                          </span>{" "}
                          Forever and always, your lovely
                          daughter{" "}
                          <span className="text-red-500 text-2xl">
                            ❤️
                          </span>
                        </motion.p>
                      </motion.div>
                    </div>

                    {/* Special Message Section */}
                    {showSpecialMessage && (
                      <motion.div
                        className="bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 p-4 sm:p-6 rounded-xl border-2 border-pink-200 mt-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 2 }}
                      >
                        <div className="text-center space-y-3">
                          <div className="flex justify-center space-x-1">
                            {[...Array(3)].map((_, i) => (
                              <motion.div
                                key={i}
                                animate={{ rotate: 360 }}
                                transition={{
                                  duration: 2,
                                  repeat: Infinity,
                                  delay: i * 0.2,
                                }}
                              >
                                <Sparkles className="w-5 h-5 text-purple-500 fill-purple-400" />
                              </motion.div>
                            ))}
                          </div>
                          <p className="text-purple-700 italic text-base sm:text-lg">
                            "You are not just my mother - you
                            are my greatest teacher, and my best
                            friend."
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        )}

        {activeSection === "memories" && (
          <motion.div
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
                Treasured Memories & Reflections
              </h2>
              <p className="text-gray-600 text-sm sm:text-base px-4">
                Every memory with you is a masterpiece painted
                with love in my heart
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {memories.map((memory, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <Card className="overflow-hidden shadow-lg border-0 h-full">
                    <div
                      className={`h-2 bg-gradient-to-r ${memory.color}`}
                    ></div>
                    <div className="p-4 sm:p-6 space-y-4 flex flex-col h-full">
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2 rounded-full bg-gradient-to-r ${memory.color} text-white`}
                        >
                          {memory.icon}
                        </div>
                        <h3 className="text-gray-800 text-lg sm:text-xl">
                          {memory.title}
                        </h3>
                      </div>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base flex-grow">
                        {memory.content}
                      </p>
                      <div className="flex justify-end pt-2">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                        >
                          <Heart className="w-5 h-5 text-pink-400 fill-pink-300" />
                        </motion.div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
            >
              <Card className="p-6 sm:p-8 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 border-0 relative overflow-hidden">
                <div className="absolute top-0 right-0 opacity-20">
                  <Flower className="w-24 h-24 text-pink-400" />
                </div>
                <div className="text-center space-y-4 relative z-10">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1719089816205-6e7a6544e99c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWF1dGlmdWwlMjBmbG93ZXJzJTIwcGluayUyMHB1cnBsZSUyMGdhcmRlbnxlbnwxfHx8fDE3NTc5NjY2ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Beautiful pink and purple flowers in garden"
                    className="w-32 h-20 sm:w-48 sm:h-32 rounded-lg mx-auto object-cover shadow-md"
                  />
                  <h3 className="text-purple-700 text-xl sm:text-2xl">
                    A Garden of Love
                  </h3>
                  <p className="text-purple-600 italic text-sm sm:text-base px-4">
                    "Our bond is like a beautiful tapestry woven
                    with threads of laughter, tears, dreams, and
                    unconditional love - growing more precious
                    with each passing day."
                  </p>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        )}

        {activeSection === "future" && (
          <motion.div
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Our Beautiful Future Together
              </h2>
              <p className="text-gray-600 text-sm sm:text-base px-4">
                The most beautiful chapters of our story are
                still being written
              </p>
            </div>

            <div className="grid gap-6 sm:gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="p-6 sm:p-8 bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                        }}
                      >
                        <Sparkles className="w-6 h-6 text-blue-500" />
                      </motion.div>
                      <h3 className="text-blue-700 text-lg sm:text-xl">
                        My Dreams & Your Witness
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      I envision a future where you're sitting
                      in the front row of my life, your eyes
                      sparkling with pride as you watch me
                      achieve everything we've dreamed about
                      together. You'll see me graduate with
                      honors, build a career that fulfills my
                      passion, create meaningful relationships,
                      and live the extraordinary life you've
                      always envisioned for me. Your smile of
                      pride will be the greatest trophy I could
                      ever receive.
                    </p>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Card className="p-6 sm:p-8 bg-gradient-to-br from-green-50 to-blue-50 border-0 shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                        }}
                      >
                        <Home className="w-6 h-6 text-green-500" />
                      </motion.div>
                      <h3 className="text-green-700 text-lg sm:text-xl">
                        Your Peace & Happiness
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      I promise to create a life where you can
                      finally exhale and enjoy the fruits of all
                      your beautiful sacrifices. No more
                      sleepless nights worrying about us, no
                      more stress weighing on your precious
                      heart - just pure, unbridled joy, endless
                      laughter, and the deep satisfaction of
                      knowing that your children are not just
                      surviving but absolutely thriving because
                      of the incredible foundation of love you
                      built for us.
                    </p>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Card className="p-6 sm:p-8 bg-gradient-to-br from-pink-50 to-rose-50 border-0 shadow-lg">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      >
                        <Heart className="w-6 h-6 text-pink-500 fill-pink-400" />
                      </motion.div>
                      <h3 className="text-pink-700 text-lg sm:text-xl">
                        Forever Together
                      </h3>
                    </div>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                      As I grow and achieve my dreams, you'll
                      always be by my side - not just as my
                      mother, but as my greatest inspiration, my
                      dearest friend, and my most enthusiastic
                      cheerleader. Every success will be ours to
                      celebrate together, every milestone a
                      shared victory. The future is brilliantly
                      bright and absolutely beautiful because
                      you're the centerpiece of it all.
                    </p>
                  </div>
                </Card>
              </motion.div>
            </div>

            <motion.div
              className="text-center p-6 sm:p-8 bg-gradient-to-r from-purple-100 via-pink-100 to-red-100 rounded-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
            >
              <div className="space-y-4">
                <div className="flex justify-center space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    >
                      <Heart className="w-6 h-6 text-red-500 fill-red-400" />
                    </motion.div>
                  ))}
                </div>
                <h3 className="text-purple-700 text-lg sm:text-xl">
                  This is just the beautiful beginning
                </h3>
                <p className="text-purple-600 italic text-sm sm:text-base px-4">
                  "The future belongs to those who believe in
                  the beauty of their dreams... and I believe
                  with all my heart because you taught me how to
                  dream fearlessly and love unconditionally."
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}

        {activeSection === "special" && (
          <motion.div
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Special Messages from My Heart
              </h2>
              <p className="text-gray-600 text-sm sm:text-base px-4">
                Words that dance straight from my soul to yours
              </p>
            </div>

            <div className="grid gap-4 sm:gap-6">
              {specialQuotes.map((quote, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, rotateY: 90 }}
                  animate={{ opacity: 1, rotateY: 0 }}
                  transition={{
                    delay: index * 0.3,
                    duration: 0.8,
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="p-6 sm:p-8 bg-gradient-to-r from-pink-100 via-purple-100 to-blue-100 border-0 shadow-lg relative overflow-hidden">
                    <div className="absolute top-2 right-2 opacity-20">
                      <Music className="w-8 h-8 text-purple-400" />
                    </div>
                    <p className="text-purple-700 italic text-base sm:text-lg text-center leading-relaxed relative z-10">
                      "{quote}"
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
            >
              <Card className="p-6 sm:p-8 bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 border-0 shadow-xl relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-200/20 via-pink-200/20 to-purple-200/20"></div>
                <div className="text-center space-y-6 relative z-10">
                  <div className="flex justify-center space-x-3">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                      }}
                    >
                      <Crown className="w-8 h-8 text-yellow-600 fill-yellow-500" />
                    </motion.div>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    >
                      <Heart className="w-8 h-8 text-red-600 fill-red-500" />
                    </motion.div>
                    <motion.div
                      animate={{ rotate: [0, -360] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                      }}
                    >
                      <Star className="w-8 h-8 text-blue-600 fill-blue-500" />
                    </motion.div>
                  </div>
                  <h3 className="text-purple-800 text-xl sm:text-2xl">
                    You Are My Everything
                  </h3>
                  <p className="text-purple-700 text-sm sm:text-base px-4 leading-relaxed">
                    Mom, you are the queen of my heart, the star
                    of my sky, and the love that makes
                    everything in my world make sense. Thank you
                    for being the most incredible mother a child
                    could ever dream of having.
                  </p>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        )}

        {activeSection === "gallery" && (
          <motion.div
            className="space-y-6 sm:space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <PhotoGallery />
          </motion.div>
        )}
      </main>

      {/* Enhanced Footer */}
      <motion.footer
        className="relative z-10 text-center py-6 sm:py-8 text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm">
          <span>Made with</span>
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Heart className="w-4 h-4 text-red-500 fill-red-400" />
          </motion.div>
          <span>infinite love</span>
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: 0.5,
            }}
          >
            <Heart className="w-4 h-4 text-red-500 fill-red-400" />
          </motion.div>
          <span>for the most amazing mom in the universe</span>
        </div>
      </motion.footer>
    </div>
  );
}