import { Twitter, Linkedin, Github, Instagram } from "lucide-react";

export default function SocialLinks({ className }) {
  return (
    <div className={className}>
      <a
        href="https://twitter.com"
        aria-label="Twitter"
        target="_blank"
        rel="noreferrer"
        className="p-2 rounded-full hover:bg-gray-100"
      >
        <Twitter size={18} />
      </a>
      <a
        href="https://linkedin.com"
        aria-label="LinkedIn"
        target="_blank"
        rel="noreferrer"
        className="p-2 rounded-full hover:bg-gray-100"
      >
        <Linkedin size={18} />
      </a>
      <a
        href="https://github.com"
        aria-label="GitHub"
        target="_blank"
        rel="noreferrer"
        className="p-2 rounded-full hover:bg-gray-100"
      >
        <Github size={18} />
      </a>
      <a
        href="https://instagram.com"
        aria-label="Instagram"
        target="_blank"
        rel="noreferrer"
        className="p-2 rounded-full hover:bg-gray-100"
      >
        <Instagram size={18} />
      </a>
    </div>
  );
}
