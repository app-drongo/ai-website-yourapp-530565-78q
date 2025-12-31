'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Zap, Shield, BarChart3, Users, Clock, Workflow } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FEATURES = {
  title: 'Intelligent Features That Drive Results',
  subtitle:
    'Streamline workflows and boost productivity with our comprehensive suite of tools designed for modern business teams.',
  ctaText: 'Explore All Features',
  ctaHref: '/features',
  features: [
    {
      id: 'workflow-automation',
      icon: 'Workflow',
      title: 'Workflow Automation',
      description:
        "Eliminate bottlenecks with intelligent automation that adapts to your team's unique processes and scales with your business.",
      badge: 'Most Popular',
    },
    {
      id: 'real-time-analytics',
      icon: 'BarChart3',
      title: 'Real-Time Analytics',
      description:
        'Make data-driven decisions with comprehensive insights and performance metrics that track what matters most to your team.',
      badge: 'New',
    },
    {
      id: 'team-collaboration',
      icon: 'Users',
      title: 'Seamless Collaboration',
      description:
        'Connect your team with powerful collaboration tools that keep everyone aligned and productive, no matter where they work.',
      badge: '',
    },
    {
      id: 'enterprise-security',
      icon: 'Shield',
      title: 'Enterprise Security',
      description:
        'Protect your data with bank-level security, compliance certifications, and advanced access controls built for modern businesses.',
      badge: '',
    },
    {
      id: 'smart-optimization',
      icon: 'Zap',
      title: 'Smart Optimization',
      description:
        'Leverage AI-powered recommendations to optimize your workflows and identify opportunities for efficiency improvements.',
      badge: 'AI-Powered',
    },
    {
      id: 'time-tracking',
      icon: 'Clock',
      title: 'Intelligent Time Tracking',
      description:
        "Track productivity with smart time management tools that provide insights without micromanaging your team's workflow.",
      badge: '',
    },
  ],
} as const;

type FeaturesProps = Partial<typeof DEFAULT_FEATURES>;

export default function Features(props: FeaturesProps) {
  const config = { ...DEFAULT_FEATURES, ...props };
  const navigate = useSmartNavigation();

  const getIcon = (iconName: string) => {
    const icons = {
      Workflow,
      BarChart3,
      Users,
      Shield,
      Zap,
      Clock,
    };
    const IconComponent = icons[iconName as keyof typeof icons] || Zap;
    return IconComponent;
  };

  const handleCTAClick = () => {
    navigate(config.ctaHref);
  };

  return (
    <section id="features" className="bg-background text-foreground py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {config.features.map((feature, idx) => {
            const IconComponent = getIcon(feature.icon);

            return (
              <Card
                key={feature.id}
                className="bg-card text-card-foreground border-border hover:bg-accent/50 transition-all duration-300 group"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-primary text-primary-foreground p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {feature.badge && (
                      <Badge
                        variant="secondary"
                        className="bg-secondary text-secondary-foreground text-xs"
                      >
                        <span data-editable={`features[${idx}].badge`}>{feature.badge}</span>
                      </Badge>
                    )}
                  </div>

                  <h3 className="text-xl font-semibold mb-3">
                    <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    <span data-editable={`features[${idx}].description`}>
                      {feature.description}
                    </span>
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button
            onClick={handleCTAClick}
            size="lg"
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 group"
            data-editable-href="ctaHref"
            data-href={config.ctaHref}
          >
            <span data-editable="ctaText">{config.ctaText}</span>
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
}
