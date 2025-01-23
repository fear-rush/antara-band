"use client";

import { useState } from 'react';
import { Music, Instagram, Mail, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll effect for navbar
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 50);
    });
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-secondary/70 backdrop-blur-md shadow-sm py-4' : 'py-6'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Desktop Menu */}
            <div className="hidden md:flex justify-center items-center space-x-16 w-full">
              <a href="#about" className="nav-link">About</a>
              <a href="#members" className="nav-link">Members</a>
              <a href="#music" className="nav-link">Music</a>
              <a href="#contact" className="nav-link">Contact</a>
            </div>

            {/* Hamburger Menu Button */}
            <div className="md:hidden ml-auto">
              <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : 'closed'}`}>
          <button onClick={closeMobileMenu} className="close-button">
            <X className="w-5 h-5" />
          </button>
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <a href="#about" className="nav-link text-2xl" onClick={closeMobileMenu}>About</a>
            <a href="#members" className="nav-link text-2xl" onClick={closeMobileMenu}>Members</a>
            <a href="#music" className="nav-link text-2xl" onClick={closeMobileMenu}>Music</a>
            <a href="#contact" className="nav-link text-2xl" onClick={closeMobileMenu}>Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="absolute inset-0 w-full h-full">
          <Image 
            src="/assets/hero-image.webp"
            alt="Antara band hero image"
            fill
            priority
          />
          
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70 flex items-center justify-center">
          <div className="text-center text-white hero-text-animation px-4 md:mb-32">
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold mb-6 tracking-wider">ANTARA</h1>
            <p className="text-lg md:text-xl lg:text-3xl">Bridging Generations Through Music</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-14 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-xl mb-8 text-foreground/80 leading-relaxed">
              Antara, meaning between in Indonesian, represents the beautiful harmony that exists in our age diversity. 
              With members spanning across generations - from Gen Z to Millennials - we bridge a 10-20 year age gap through our music.
            </p>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              Our unique blend of perspectives creates a fresh take on Indonesian pop music, 
              bringing together the energy of youth and the wisdom of experience.
            </p>
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section id="members" className="py-14 md:py-24 bg-secondary/10">
        <div className="container mx-auto px-4">
          <h2 className="section-title">The Band</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&q=80&w=800",
                name: "Alex Rivera",
                role: "Lead Vocals"
              },
              {
                img: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&q=80&w=800",
                name: "Maya Chen",
                role: "Lead Guitar"
              },
              {
                img: "https://images.unsplash.com/photo-1517230878791-4d28214057c2?auto=format&fit=crop&q=80&w=800",
                name: "David Kim",
                role: "Bass Guitar"
              },
              {
                img: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&q=80&w=800",
                name: "Sarah Johnson",
                role: "Drums"
              }
            ].map((member, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-xl">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full aspect-square object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                  <div className="text-white">
                    <h3 className="text-2xl font-bold">{member.name}</h3>
                    <p className="tracking-wider">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Music Section */}
      <section id="music" className="py-14 md:py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="section-title">Our Music</h2>
          <div className="max-w-2xl mx-auto">
            <iframe 
              src="https://open.spotify.com/embed/track/5RwGLkfBz5JoEtCcOJprK8" 
              width="100%" 
              height="352" 
              frameBorder="0" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              className="rounded-lg shadow-2xl mb-12"
            ></iframe>
            <div className="flex justify-center space-x-4">
              <Button 
                variant="outline" 
                className="flex items-center gap-2 bg-primary/10 hover:bg-primary/20 border-primary/20 text-lg tracking-wider py-6"
              >
                <Music className="w-5 h-5" />
                Follow on Spotify
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Contact & Social Media */}
      <footer id="contact" className="bg-secondary/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-20">
            {/* Contact Information */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-6 text-primary-foreground tracking-wider">Contact</h3>
              <a 
                href="mailto:contact@antaraband.com" 
                className="text-foreground/80 hover:text-primary transition-colors flex items-center justify-center md:justify-start gap-2 mb-4 tracking-wider"
              >
                <Mail className="w-5 h-5" />
                antarakitaband@gmail.com
              </a>
            </div>
            
            {/* Social Media Links */}
            <div className="text-center md:text-right">
              <h3 className="text-2xl font-bold mb-6 text-primary-foreground tracking-wider">Follow Us</h3>
              <div className="flex justify-center md:justify-end space-x-8">
                <a href="#" className="text-foreground/80 hover:text-primary transition-colors transform hover:scale-110 duration-300">
                  <Instagram className="w-7 h-7" />
                </a>
                <a href="#" className="text-foreground/80 hover:text-primary transition-colors transform hover:scale-110 duration-300">
                  <Music className="w-7 h-7" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-primary/10 py-8 text-center text-sm text-foreground/60 tracking-wider">
            © {new Date().getFullYear()} Antara Band. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}