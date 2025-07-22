import React, { useState } from 'react';
import ContactHeadings from './ContactHeadings';

const initialState = {
  name: '',
  email: '',
  phone: '',
  company: '',
  services: [],
  budget: '',
  timeline: '',
  brief: '',
  attach: null,
};

const serviceOptions = [
  { id: 'webdesign', value: 'Web Design', label: 'Web Design' },
  { id: 'webdev', value: 'Web Development', label: 'Web Development' },
  {
    id: 'maintenance',
    value: 'Website Maintenance',
    label: 'Website Maintenance',
  },
  { id: 'seo', value: 'SEO', label: 'SEO' },
];

const timelineOptions = [
  { value: '', label: 'Select timeline', disabled: true },
  { value: '2 weeks', label: '2 Weeks' },
  { value: '1 month', label: '1 Month' },
  { value: '2-3 months', label: '2-3 Months' },
  { value: '3-6 months', label: '3-6 Months' },
];

const ContactPageFormSection = () => {
  const [form, setForm] = useState(initialState);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox' && name === 'services') {
      setForm((prev) => {
        if (checked) {
          return { ...prev, services: [...prev.services, value] };
        } else {
          return {
            ...prev,
            services: prev.services.filter((s) => s !== value),
          };
        }
      });
    } else if (type === 'file') {
      setForm((prev) => ({
        ...prev,
        attach: files && files.length > 0 ? files[0] : null,
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle form submission, e.g., send data to API
    // For now, just log the form data
    // You may want to handle file upload separately
    // eslint-disable-next-line no-console
    console.log(form);
    // Optionally reset form
    // setForm(initialState);
  };

  return (
    <form
      className='border border-zinc-200 rounded-2xl p-6 lg:col-span-1 shadow-md bg-white'
      onSubmit={handleSubmit}
      autoComplete='off'
    >
      <ContactHeadings
        title='Tell Us About Your Project'
        tagline='The more details you share, the better we can help you. All fields marked with * are required.'
      />
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        <div className='flex flex-col gap-1 mb-6'>
          <label htmlFor='name' className='font-semibold text-zinc-800'>
            Full Name <sup className='text-red-500'>*</sup>
          </label>
          <input
            type='text'
            name='name'
            id='name'
            required
            placeholder='Your full name'
            className='border border-zinc-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition'
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div className='flex flex-col gap-1 mb-6'>
          <label htmlFor='email' className='font-semibold text-zinc-800'>
            Email Address <sup className='text-red-500'>*</sup>
          </label>
          <input
            type='email'
            name='email'
            id='email'
            required
            placeholder='you@example.com'
            className='border border-zinc-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition'
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className='flex flex-col gap-1 mb-6'>
          <label htmlFor='phone' className='font-semibold text-zinc-800'>
            Phone Number
          </label>
          <input
            type='tel'
            name='phone'
            id='phone'
            placeholder='99051-00804'
            className='border border-zinc-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition'
            value={form.phone}
            onChange={handleChange}
          />
        </div>
        <div className='flex flex-col gap-1 mb-6'>
          <label htmlFor='company' className='font-semibold text-zinc-800'>
            Company Name
          </label>
          <input
            type='text'
            name='company'
            id='company'
            placeholder='Your company name'
            className='border border-zinc-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition'
            value={form.company}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className='flex flex-col gap-1 mb-6'>
        <label className='font-semibold text-zinc-800'>
          Services Interested In <sup className='text-red-500'>*</sup>{' '}
          <span className='font-normal text-zinc-500'>
            (Select all that apply)
          </span>
        </label>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3 pt-2'>
          {serviceOptions.map((service, idx) => (
            <div className='flex items-center gap-3' key={service.id}>
              <input
                type='checkbox'
                name='services'
                id={service.id}
                value={service.value}
                className='accent-blue-600 w-5 h-5'
                checked={form.services.includes(service.value)}
                onChange={handleChange}
                required={idx === 0 && form.services.length === 0}
                // Only the first checkbox is required if none are checked
              />
              <label htmlFor={service.id} className='text-zinc-700 font-medium'>
                {service.label}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        <div className='flex flex-col gap-1'>
          <label htmlFor='budget' className='font-semibold text-zinc-800'>
            Budget Range <sup className='text-red-500'>*</sup>
          </label>
          <input
            type='number'
            name='budget'
            id='budget'
            className='border border-zinc-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition'
            placeholder='Enter your budget (INR)'
            required
            min='0'
            value={form.budget}
            onChange={handleChange}
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor='timeline' className='font-semibold text-zinc-800'>
            Project Timeline <sup className='text-red-500'>*</sup>
          </label>
          <select
            name='timeline'
            id='timeline'
            className='border border-zinc-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-white'
            required
            value={form.timeline}
            onChange={handleChange}
          >
            {timelineOptions.map((option) => (
              <option
                key={option.value}
                value={option.value}
                disabled={option.disabled}
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className='flex flex-col gap-1 mt-6'>
        <label htmlFor='brief' className='font-semibold text-zinc-800'>
          Project Brief <sup className='text-red-500'>*</sup>
        </label>
        <textarea
          name='brief'
          id='brief'
          className='border border-zinc-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[240px] transition'
          placeholder='Describe your project in detail'
          required
          value={form.brief}
          onChange={handleChange}
        ></textarea>
      </div>

      <div className='flex flex-col gap-1 mb-6 mt-4'>
        <label htmlFor='attach' className='font-semibold text-zinc-800'>
          Attachment (optional)
        </label>
        <input
          type='file'
          name='attach'
          id='attach'
          className='border border-zinc-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition'
          onChange={handleChange}
        />
        {form.attach && (
          <span className='text-sm text-zinc-600 mt-1'>
            Selected: {form.attach.name}
          </span>
        )}
      </div>

      <button
        type='submit'
        className='mt-2 w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow'
      >
        Submit
      </button>
    </form>
  );
};

export default ContactPageFormSection;
