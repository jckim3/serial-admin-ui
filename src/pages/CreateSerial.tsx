import { useState } from 'react';
import axios from 'axios';
import './Form.css';

export default function CreateSerial() {
  const [form, setForm] = useState({
    hospital: '', country: '', company: 'JRX',
    software: '', available: 1, type: 'Basic', memo: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    // ✨ available은 숫자로 처리
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: name === 'available' ? parseInt(value) : value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✨ 필수 입력값 검사
    const { hospital, country, software, available } = form;
    if (!hospital || !country || !software || !available) {
      alert('❌ Required fields are missing.');
      return;
    }

    try {
      //const res = await axios.post('http://localhost:3000/api/serials', form);
      const res = await axios.post(`${import.meta.env.VITE_API_BASE_URL}/serials`, form);
      alert(`✅ Serial Created: ${res.data.serial}`);

      // ✨ 생성 후 초기화
      setForm({
        hospital: '', country: '', company: 'JRX',
        software: '', available: 1, type: 'Basic', memo: ''
      });
    } catch (err) {
      console.error(err); // ✨ 디버깅용 콘솔 출력
      alert('❌ Failed to create serial');
    }
  };

  return (
    <div className="form-page">
      <div className="form-wrapper">
        <h2>Create Serial</h2>
        <form className="serial-form" onSubmit={handleSubmit}>
          <input name="hospital" placeholder="Hospital Name" value={form.hospital} onChange={handleChange} />
          <input name="country" placeholder="Country" value={form.country} onChange={handleChange} />
          <input name="software" placeholder="Software" value={form.software} onChange={handleChange} />
          <input name="available" type="number" placeholder="Available" value={form.available} onChange={handleChange} />
          <select name="type" value={form.type} onChange={handleChange}>
            <option value="Basic">Basic</option>
            <option value="Premium">Premium</option>
          </select>
          <textarea name="memo" placeholder="Memo" value={form.memo} onChange={handleChange} />
          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
}
