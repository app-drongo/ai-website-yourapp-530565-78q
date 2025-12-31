'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_NAVIGATION = {
  logo: 'TechFlow',
  logoHref: '/',
  navItems: [
    { label: 'Features', href: '#features' },
    { label: 'Testimonials', href: '#testimonials' },
  ],
  ctaText: 'Get Started',
  ctaHref: '/signup',
  secondaryCtaText: 'Sign In',
  secondaryCtaHref: '/signin',
} as const;

type NavigationProps = Partial<typeof DEFAULT_NAVIGATION>;

export default function Navigation(props: NavigationProps) {
  const config = { ...DEFAULT_NAVIGATION, ...props };
  const navigate = useSmartNavigation();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    navigate(href);
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    navigate(config.logoHref);
  };

  const handleCtaClick = () => {
    navigate(config.ctaHref);
  };

  const handleSecondaryCtaClick = () => {
    navigate(config.secondaryCtaHref);
  };

  return (
    <section
      id="navigation"
      className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border sticky top-0 z-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={handleLogoClick}
              className="text-xl font-bold text-foreground hover:text-primary transition-colors"
              data-editable-href="logoHref"
              data-href={config.logoHref}
            >
              <span data-editable="logo">{config.logo}</span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {config.navItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleNavClick(item.href)}
                className="text-muted-foreground hover:text-foreground transition-colors font-medium"
                data-editable-href={`navItems[${idx}].href`}
                data-href={item.href}
              >
                <span data-editable={`navItems[${idx}].label`}>{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={handleSecondaryCtaClick}
              className="text-muted-foreground hover:text-foreground"
              data-editable-href="secondaryCtaHref"
              data-href={config.secondaryCtaHref}
            >
              <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
            </Button>
            <Button
              onClick={handleCtaClick}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              data-editable-href="ctaHref"
              data-href={config.ctaHref}
            >
              <span data-editable="ctaText">{config.ctaText}</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-foreground">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-background text-foreground w-80">
                <div className="flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between pb-6 border-b border-border">
                    <button
                      onClick={handleLogoClick}
                      className="text-xl font-bold text-foreground"
                      data-editable-href="logoHref"
                      data-href={config.logoHref}
                    >
                      <span data-editable="logo">{config.logo}</span>
                    </button>
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex flex-col space-y-6 py-8">
                    {config.navItems.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleNavClick(item.href)}
                        className="text-left text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
                        data-editable-href={`navItems[${idx}].href`}
                        data-href={item.href}
                      >
                        <span data-editable={`navItems[${idx}].label`}>{item.label}</span>
                      </button>
                    ))}
                  </nav>

                  {/* Mobile CTA Buttons */}
                  <div className="mt-auto space-y-4 pt-6 border-t border-border">
                    <Button
                      variant="outline"
                      onClick={handleSecondaryCtaClick}
                      className="w-full border-border text-foreground hover:bg-accent hover:text-accent-foreground"
                      data-editable-href="secondaryCtaHref"
                      data-href={config.secondaryCtaHref}
                    >
                      <span data-editable="secondaryCtaText">{config.secondaryCtaText}</span>
                    </Button>
                    <Button
                      onClick={handleCtaClick}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      data-editable-href="ctaHref"
                      data-href={config.ctaHref}
                    >
                      <span data-editable="ctaText">{config.ctaText}</span>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
}
