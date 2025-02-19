'use client'

import { useState } from 'react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to your server or a third-party service
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="mb-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Numele tău"
          className="w-full p-2 bg-gray-900 border border-gray-700 rounded-md text-white"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email-ul tău"
          className="w-full p-2 bg-gray-900 border border-gray-700 rounded-md text-white"
          required
        />
      </div>
      <div className="mb-4">
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Mesajul tău"
          rows={4}
          className="w-full p-2 bg-gray-900 border border-gray-700 rounded-md text-white"
          required
        ></textarea>
      </div>
      <button type="submit" className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md font-bold w-full">
        Aplică Acum
      </button>
    </form>
  );
};