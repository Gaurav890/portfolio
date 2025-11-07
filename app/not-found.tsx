import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-soft-blue via-cream-bg to-white">
      <div className="container-custom text-center">
        <div className="max-w-2xl mx-auto">
          {/* 404 */}
          <h1 className="text-9xl font-bold gradient-text mb-4">404</h1>

          {/* Title */}
          <h2 className="text-4xl font-bold text-deep-black mb-4">
            Page Not Found
          </h2>

          {/* Description */}
          <p className="body-lg mb-8">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>

          {/* Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button variant="primary" size="lg">
                <Home className="mr-2 w-5 h-5" />
                Go Home
              </Button>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="btn-secondary"
            >
              <ArrowLeft className="mr-2 w-5 h-5" />
              Go Back
            </button>
          </div>

          {/* Helpful Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-text mb-4">Maybe you're looking for:</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/case-studies" className="link-primary">
                Case Studies
              </Link>
              <Link href="/projects" className="link-primary">
                Projects
              </Link>
              <Link href="/#contact" className="link-primary">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
