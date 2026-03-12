import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-night text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div>
            <h3 className="font-display text-xl font-500 letter-spacing-12 text-uppercase mb-6">
              ExecuMarketing
            </h3>
            <p className="text-sm text-stone leading-relaxed">
              AI-powered matching connecting businesses with verified marketing specialists.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-body font-500 letter-spacing-18 text-uppercase mb-4 text-teal">
              For Business
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-stone hover:text-teal transition-colors">How It Works</a></li>
              <li><a href="#" className="text-sm text-stone hover:text-teal transition-colors">Our Specialists</a></li>
              <li><a href="#" className="text-sm text-stone hover:text-teal transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-body font-500 letter-spacing-18 text-uppercase mb-4 text-teal">
              For Freelancers
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-stone hover:text-teal transition-colors">Apply Now</a></li>
              <li><a href="#" className="text-sm text-stone hover:text-teal transition-colors">Requirements</a></li>
              <li><a href="#" className="text-sm text-stone hover:text-teal transition-colors">Earnings</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-body font-500 letter-spacing-18 text-uppercase mb-4 text-teal">
              Company
            </h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-stone hover:text-teal transition-colors">About</a></li>
              <li><a href="#" className="text-sm text-stone hover:text-teal transition-colors">Privacy</a></li>
              <li><a href="#" className="text-sm text-stone hover:text-teal transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-carbon/20 pt-8">
          <p className="text-center text-xs text-stone">
            © {new Date().getFullYear()} ExecuMarketing. All rights reserved. · Matched to verified talent · AI-vetted · Onboard in 24 hrs
          </p>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
