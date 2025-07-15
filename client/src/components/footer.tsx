import { Rocket } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black py-8 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="font-orbitron text-lg font-bold mb-4 md:mb-0">
            <Rocket className="inline-block w-5 h-5 text-blue-400 mr-2" />
            Developer Portfolio
          </div>
          <div className="text-gray-400 text-sm">
            © 2024 All rights reserved. Built with modern web technologies.
          </div>
        </div>
      </div>
    </footer>
  );
}
