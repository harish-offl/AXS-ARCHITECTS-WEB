"use client";

import * as React from "react";
import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/content/site";
import { cn } from "@/lib/utils";

const HEADER_HEIGHT = 72;

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleMenu = useCallback(() => setOpen((prev) => !prev), []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border"
          : "bg-background"
      }`}
      style={{ paddingTop: `calc(${HEADER_HEIGHT}px + env(safe-area-inset-top))` }}
    >
      <div className="relative w-full">
        <div className="flex items-center justify-between h-[72px] px-6 lg:px-8">
          <Link
            href="/"
            className="flex items-center gap-2"
            aria-label="AXS Architects home"
          >
            <span className="font-display font-semibold text-xl tracking-tight text-primary">
              AXS Architects
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-10 text-sm font-medium tracking-wider">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "transition-colors hover:opacity-80",
                  isActive(link.href)
                    ? "text-primary font-semibold"
                    : "text-primary",
                )}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/projects">
              <Button size="sm" variant="outline">
                Explore Projects
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="sm">Start a Project</Button>
            </Link>

            <button
              onClick={handleMenu}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-md text-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={open}
            >
              {open ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-card border-b border-border"
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              <span className="font-display font-semibold text-xl tracking-tight text-primary">
                AXS Architects
              </span>
              <button
                onClick={handleMenu}
                className="w-10 h-10 rounded-md text-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="py-4 px-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={handleMenu}
                  className={cn(
                    "block px-4 py-3 text-sm font-medium transition-colors",
                    isActive(link.href)
                      ? "bg-accent text-accent-foreground"
                      : "text-secondary hover:text-accent hover:bg-secondary",
                  )}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="px-6 py-4 border-t border-border flex flex-col gap-2">
              <Link href="/projects">
                <Button fullWidth variant="outline">
                  Explore Projects
                </Button>
              </Link>
              <Link href="/contact">
                <Button fullWidth>Start a Project</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
