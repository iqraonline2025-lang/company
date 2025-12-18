import React from "react";
import { Users, Clock, Award, Globe, Video, BookOpen } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "One-on-One Classes",
    description: "Personalized attention with dedicated instructors",
  },
  {
    icon: Clock,
    title: "Flexible Schedule",
    description: "Choose class times that fit your daily routine",
  },
  {
    icon: Award,
    title: "Certified Teachers",
    description: "Learn from qualified Ijazah-holding scholars",
  },
  {
    icon: Globe,
    title: "Learn Anywhere",
    description: "100% online classes accessible worldwide",
  },
  {
    icon: Video,
    title: "HD Video Lessons",
    description: "Crystal clear audio & video quality for better learning",
  },
  {
    icon: BookOpen,
    title: "Free Study Resources",
    description: "Slides, recordings, and PDFs included",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white mt-18">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Students Love Learning With Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl shadow-md hover:shadow-xl transition bg-gray-50"
            >
              <item.icon className="h-10 w-10 text-purple-600 mb-4" />

              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
