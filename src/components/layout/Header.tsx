'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SITE_CONTENT } from '@/data/content';
import { Menu, X, Shield, ArrowRight, ChevronRight } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-dark/95 backdrop-blur-md shadow-xl py-3 border-b border-navy-border'
          : 'bg-navy py-4 border-b border-navy-border/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Placeholder */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-navy-dark border-2 border-gold rounded flex items-center justify-center text-gold group-hover:border-white transition-colors shadow-md">
              <span className="font-serif text-xl font-bold tracking-tighter">BEP</span>
            </div>
            <div>
              <span className="font-serif text-lg font-bold text-white tracking-tight group-hover:text-gold transition-colors block leading-tight">
                BURHILL
              </span>
              <span className="font-mono text-[10px] text-slate-300 uppercase tracking-widest block">
                Engineering Partners
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {SITE_CONTENT.navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 rounded text-xs font-mono font-medium transition-all ${
                    isActive
                      ? 'bg-navy-light/40 text-gold border-b-2 border-gold font-bold'
                      : 'text-slate-200 hover:text-white hover:bg-navy-light/20'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Header Action Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-gold hover:bg-gold-light text-navy-dark font-sans text-xs font-bold px-4 py-2.5 rounded shadow transition-all transform hover:-translate-y-0.5"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-slate-200 hover:text-gold hover:bg-navy-light focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-navy-dark border-b border-navy-border shadow-2xl p-6 transition-all duration-300 animate-fadeIn">
          <nav className="flex flex-col space-y-3">
            {SITE_CONTENT.navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between p-3 rounded font-mono text-sm ${
                    isActive
                      ? 'bg-navy text-gold border-l-4 border-gold font-bold'
                      : 'text-slate-200 hover:bg-navy-light/30'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-gold" />
                </Link>
              );
            })}
            <div className="pt-4 border-t border-navy-border">
              <Link
                href="/contact"
                className="w-full flex items-center justify-center space-x-2 bg-gold text-navy-dark font-bold py-3 rounded text-sm font-sans"
              >
                <span>Request a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
