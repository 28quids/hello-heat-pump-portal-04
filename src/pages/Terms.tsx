import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

export function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using Green Home Path, you agree to be bound by these Terms of Service.
              If you do not agree with any part of these terms, please do not use our service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
            <p>
              Green Home Path provides a platform connecting homeowners with heat pump installers.
              We facilitate the process of obtaining quotes and comparing installation options.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. User Responsibilities</h2>
            <p>
              Users must provide accurate information when requesting quotes and using our service.
              We reserve the right to refuse service to anyone for any reason at any time.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Privacy Policy</h2>
            <p>
              Your use of Green Home Path is also governed by our Privacy Policy.
              Please review our Privacy Policy to understand our practices.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Limitation of Liability</h2>
            <p>
              Green Home Path is not responsible for any damages arising from the use of our service.
              We do not guarantee the quality or reliability of any installations or services provided by third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time.
              Continued use of the service after changes constitutes acceptance of the new terms.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
} 