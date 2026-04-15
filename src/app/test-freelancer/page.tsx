"use client";

import { useState } from 'react';

export default function TestFreelancer() {
  const [dealId, setDealId] = useState('');
  const [amount, setAmount] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const submitInvoice = async () => {
    if (!dealId || !amount || !email) {
      alert("All fields required");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/freelancer/invoices', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          deal_id: dealId,
          amount: parseFloat(amount),
          description: 'Test invoice submission',
          freelancer_email: email // ✅ REQUIRED FIX
        })
      });

      const result = await response.json();

      console.log(result);

      if (result.success) {
        alert('✅ Invoice submitted successfully!');
      } else {
        alert(`❌ Failed: ${result.error}`);
      }

    } catch (error) {
      console.error(error);
      alert('Something went wrong');
    }

    setLoading(false);
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Test Freelancer Invoice</h1>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Deal ID"
          value={dealId}
          onChange={(e) => setDealId(e.target.value)}
          className="border p-2 w-full"
        />

        <input
          type="email"
          placeholder="Freelancer Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full"
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-2 w-full"
        />

        <button
          onClick={submitInvoice}
          disabled={loading}
          className="bg-green-500 text-white p-2 w-full"
        >
          {loading ? 'Submitting...' : 'Submit Invoice'}
        </button>
      </div>
    </div>
  );
}