'use client'
import React, { useState } from 'react';

const domains = [
  {
    name: 'example.com',
    status: 'active',
    aliases: [
      { local: '*', forwardTo: 'user@gmail.com' },
      { local: 'support', forwardTo: 'user@gmail.com' },
      { local: 'hello', forwardTo: 'user@gmail.com' },
    ],
  },
];

export default function CustomEmailDashboard() {
  const [newAlias, setNewAlias] = useState('');

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4">
        <div className="text-xl font-bold mb-6">📬 Your Mail</div>
        <ul className="space-y-2">
          <li className="text-blue-600 font-medium">Dashboard</li>
          <li className="text-gray-700">Billing</li>
          <li className="text-gray-700">API Access</li>
          <li className="text-gray-700">Help</li>
        </ul>
        <div className="mt-10 text-xs text-gray-400">Logged in as user@gmail.com</div>
      </aside>

      {/* Main Panel */}
      <main className="flex-1 p-8">
        <div className="text-2xl font-semibold mb-6">Domains</div>

        {domains.map((domain, index) => (
          <div key={index} className="bg-white shadow rounded-xl p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">{domain.name}</h3>
              <span className="text-sm text-green-600">● Email routing active</span>
            </div>

            <table className="w-full mb-4 text-sm">
              <thead className="text-left text-gray-500">
                <tr>
                  <th className="pb-2">Email</th>
                  <th className="pb-2">Forwards to</th>
                  <th className="pb-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {domain.aliases.map((alias, i) => (
                  <tr key={i} className="border-t">
                    <td className="py-2">{alias.local}@{domain.name}</td>
                    <td className="py-2">{alias.forwardTo}</td>
                    <td className="py-2">
                      <button className="text-sm text-blue-600 mr-2">Test</button>
                      <button className="text-sm text-red-500">Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="new-alias"
                value={newAlias}
                onChange={(e) => setNewAlias(e.target.value)}
                className="border rounded px-3 py-2 text-sm w-64"
              />
              <button className="bg-green-500 text-white text-sm px-4 py-2 rounded">
                Add
              </button>
            </div>
          </div>
        ))}

        <div className="bg-white shadow rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-2">Add a new domain</h3>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="yourdomain.com"
              className="border rounded px-3 py-2 text-sm w-64"
            />
            <button className="bg-green-500 text-white text-sm px-4 py-2 rounded">
              Add Domain
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
