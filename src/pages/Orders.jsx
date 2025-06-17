import React, { useState, useMemo } from 'react';
import ordersData from '../data/orders.json';
import { AiOutlineShoppingCart, AiOutlineClockCircle, AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';

export default function Orders() {
  const [orders, setOrders] = useState(ordersData);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ orderId: '', customerName: '', status: 'Pending', totalPrice: '', orderDate: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    const newOrder = { ...form, totalPrice: Number(form.totalPrice) };
    setOrders(prev => [...prev, newOrder]);
    setShowForm(false);
    setForm({ orderId: '', customerName: '', status: 'Pending', totalPrice: '', orderDate: '' });
  };

  // Group orders by status
  const groupedOrders = useMemo(() =>
    orders.reduce((acc, ord) => {
      acc[ord.status] = acc[ord.status] || [];
      acc[ord.status].push(ord);
      return acc;
    }, {}),
    [orders]
  );

  // Icons for statuses
  const statusIcons = {
    Pending: <AiOutlineClockCircle className="text-2xl text-yellow-500" />, 
    Completed: <AiOutlineCheckCircle className="text-2xl text-green-500" />, 
    Cancelled: <AiOutlineCloseCircle className="text-2xl text-red-500" />
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Orders</h2>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          onClick={() => setShowForm(true)}
        >
          Add Order
        </button>
      </div>

      {/* Form Modal */}
      {showForm && (
        <form onSubmit={handleSubmit} className="mb-6 p-6 bg-white rounded-2xl shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="orderId" placeholder="Order ID" value={form.orderId} onChange={handleChange} required className="p-3 border rounded-lg" />
            <input name="customerName" placeholder="Customer Name" value={form.customerName} onChange={handleChange} required className="p-3 border rounded-lg" />
            <select name="status" value={form.status} onChange={handleChange} className="p-3 border rounded-lg">
              <option>Pending</option>
              <option>Completed</option>
              <option>Cancelled</option>
            </select>
            <input name="totalPrice" type="number" placeholder="Total Price" value={form.totalPrice} onChange={handleChange} required className="p-3 border rounded-lg" />
            <input name="orderDate" type="date" value={form.orderDate} onChange={handleChange} required className="p-3 border rounded-lg" />
          </div>
          <div className="mt-6 space-x-4">
            <button type="submit" className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Save</button>
            <button type="button" onClick={() => setShowForm(false)} className="px-6 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">Cancel</button>
          </div>
        </form>
      )}

      {/* Grouped Orders */}
      {Object.entries(groupedOrders).map(([status, list]) => (
        <section key={status} className="">
          <h3 className="text-xl font-medium mb-4 flex items-center space-x-2">
            {statusIcons[status]}
            <span>{status} Orders</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {list.map(o => (
              <div key={o.orderId} className="p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-2 space-x-2">
                  <AiOutlineShoppingCart className="text-xl text-blue-500" />
                  <span className="text-lg font-semibold">{o.orderId}</span>
                </div>
                <p className="text-sm text-gray-500 mb-2">{o.customerName}</p>
                <p className="text-sm mb-1"><span className="font-medium">Total:</span> Rp{o.totalPrice.toLocaleString()}</p>
                <p className="text-sm"><span className="font-medium">Date:</span> {o.orderDate}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}