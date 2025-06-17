import React, { useState, useMemo } from 'react';
import customersData from '../data/customers.json';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineMail, AiOutlinePhone } from 'react-icons/ai';
import { FaMedal } from 'react-icons/fa';

export default function Customers() {
  const [customers, setCustomers] = useState(customersData);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ id: '', name: '', email: '', phone: '', loyalty: 'Bronze' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    setCustomers(prev => [...prev, form]);
    setShowForm(false);
    setForm({ id: '', name: '', email: '', phone: '', loyalty: 'Bronze' });
  };

  // Group customers by loyalty
  const grouped = useMemo(() =>
    customers.reduce((acc, cust) => {
      acc[cust.loyalty] = acc[cust.loyalty] || [];
      acc[cust.loyalty].push(cust);
      return acc;
    }, {}),
  [customers]);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Customers</h2>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          onClick={() => setShowForm(true)}
        >Add Customer</button>
      </div>

      {/* Form */}
      {showForm && (
        <form onSubmit={handleSubmit} className="mb-6 p-6 bg-white rounded-2xl shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="id" placeholder="Customer ID" value={form.id} onChange={handleChange} required className="p-3 border rounded-lg" />
            <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required className="p-3 border rounded-lg" />
            <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required className="p-3 border rounded-lg" />
            <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required className="p-3 border rounded-lg" />
            <select name="loyalty" value={form.loyalty} onChange={handleChange} className="p-3 border rounded-lg">
              <option>Bronze</option>
              <option>Silver</option>
              <option>Gold</option>
            </select>
          </div>
          <div className="mt-6 space-x-4">
            <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Save</button>
            <button type="button" onClick={() => setShowForm(false)} className="px-6 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">Cancel</button>
          </div>
        </form>
      )}

      {/* Grouped Customers */}
      {Object.entries(grouped).map(([loyalty, list]) => (
        <section key={loyalty}>
          <h3 className="text-xl font-medium mb-4 flex items-center space-x-2">
            <FaMedal className={`text-xl ${loyalty === 'Gold' ? 'text-yellow-400' : loyalty === 'Silver' ? 'text-gray-400' : 'text-orange-500'}`} />
            <span>{loyalty} Members</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map(c => (
              <div key={c.id} className="p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-2 space-x-2">
                  <CgProfile className="text-2xl text-blue-500" />
                  <h4 className="text-lg font-semibold">{c.name}</h4>
                </div>
                <p className="text-sm text-gray-500 mb-1">ID: {c.id}</p>
                <p className="flex items-center text-sm mb-1">
                  <AiOutlineMail className="mr-2" /> {c.email}
                </p>
                <p className="flex items-center text-sm">
                  <AiOutlinePhone className="mr-2" /> {c.phone}
                </p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
