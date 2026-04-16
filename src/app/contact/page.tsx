'use client';
import ClientRequestForm from '../../components/client-request';



export default function ContactForm() {

  return (
    <div className="py-12 md:py-16 px-5 sm:px-6 md:px-8 lg:px-12 border-t border-[rgba(28,35,33,0.08)]">
      <div className="max-w-7xl mx-auto">
        <ClientRequestForm />
      </div>
    </div>
  );
}