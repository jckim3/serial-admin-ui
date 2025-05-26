import { useState } from 'react';
import axios from 'axios';
import './Form.css';

export default function CreateSerial() {
  const [form, setForm] = useState({
    hospital: '', country: '', company: 'JRX',
    software: '', available: 1, type: 'Basic', memo: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // const res = await axios.post('http://localhost:3000/api/serials', form);
      const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/serials`, form);
      alert(`✅ Serial Created: ${res.data.serial}`);
    } catch {
      alert('❌ Failed to create serial');
    }
  };

  return (
    <div className="form-page">
    <div className="form-wrapper">
      <h2>Create Serial</h2>
      <form className="serial-form" onSubmit={handleSubmit}>
        <input name="hospital" placeholder="Hospital Name" onChange={handleChange} />
        <input name="country" placeholder="Country" onChange={handleChange} />
        <input name="software" placeholder="Software" onChange={handleChange} />
        <input name="available" type="number" placeholder="Available" onChange={handleChange} />
        <select name="type" onChange={handleChange}>
          <option value="Basic">Basic</option>
          <option value="Premium">Premium</option>
        </select>
        <textarea name="memo" placeholder="Memo" onChange={handleChange} />
        <button type="submit">Create</button>
      </form>
    </div>
    </div>
  );
}
