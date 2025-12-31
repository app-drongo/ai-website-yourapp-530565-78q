'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const DEFAULT_TESTIMONIALS = {
  title: 'Trusted by Industry Leaders',
  subtitle:
    'See how teams worldwide streamline their workflows and boost productivity with our intelligent solutions',
  testimonials: [
    {
      id: '1',
      quote:
        'This platform transformed our workflow efficiency by 300%. Our team can now focus on strategic initiatives instead of manual processes.',
      author: 'Sarah Chen',
      role: 'VP of Operations',
      company: 'TechFlow Solutions',
      avatar:
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      companyLogo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=40&fit=crop',
    },
    {
      id: '2',
      quote:
        "The intelligent automation features eliminated our productivity bottlenecks. We've seen measurable improvements across all departments.",
      author: 'Marcus Rodriguez',
      role: 'CTO',
      company: 'DataSync Pro',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      companyLogo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=120&h=40&fit=crop',
    },
    {
      id: '3',
      quote:
        'Seamless collaboration tools that actually work. Our distributed team is more connected and efficient than ever before.',
      author: 'Emily Watson',
      role: 'Product Manager',
      company: 'CloudScale Inc',
      avatar:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      companyLogo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=120&h=40&fit=crop',
    },
  ],
  stats: [
    { label: 'Average Efficiency Increase', value: '285%' },
    { label: 'Teams Using Daily', value: '10K+' },
    { label: 'Customer Satisfaction', value: '98%' },
  ],
} as const;

type TestimonialsProps = Partial<typeof DEFAULT_TESTIMONIALS>;

export default function Testimonials(props: TestimonialsProps) {
  const config = { ...DEFAULT_TESTIMONIALS, ...props };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-primary text-primary' : 'text-muted-foreground'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="bg-background text-foreground py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
          {config.stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                <span data-editable={`stats[${idx}].value`}>{stat.value}</span>
              </div>
              <div className="text-muted-foreground">
                <span data-editable={`stats[${idx}].label`}>{stat.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {config.testimonials.map((testimonial, idx) => (
            <Card
              key={testimonial.id}
              className="bg-card text-card-foreground border-border hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-8">
                {/* Quote Icon */}
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-primary opacity-60" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Quote */}
                <blockquote className="text-foreground mb-8 leading-relaxed">
                  <span data-editable={`testimonials[${idx}].quote`}>"{testimonial.quote}"</span>
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4 mb-6">
                  <Avatar className="w-12 h-12">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      data-editable-src={`testimonials[${idx}].avatar`}
                    />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.author
                        .split(' ')
                        .map(n => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">
                      <span data-editable={`testimonials[${idx}].author`}>
                        {testimonial.author}
                      </span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <span data-editable={`testimonials[${idx}].role`}>{testimonial.role}</span>
                    </div>
                  </div>
                </div>

                {/* Company */}
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                    <span data-editable={`testimonials[${idx}].company`}>
                      {testimonial.company}
                    </span>
                  </Badge>
                  <div className="w-20 h-6 relative opacity-60">
                    <Image
                      src={testimonial.companyLogo}
                      alt={`${testimonial.company} logo`}
                      fill
                      className="object-contain filter grayscale"
                      data-editable-src={`testimonials[${idx}].companyLogo`}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Join thousands of teams already optimizing their workflows
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="outline" className="border-border text-foreground">
              Results-driven
            </Badge>
            <Badge variant="outline" className="border-border text-foreground">
              Scalable
            </Badge>
            <Badge variant="outline" className="border-border text-foreground">
              Intelligent
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
}
