import { useEffect, useState } from 'react';
import axios from 'axios';
import './List.css'; // ✨ 스타일 추가

export default function SerialList() {
  const [serials, setSerials] = useState<any[]>([]);

  useEffect(() => {
    // axios.get('http://localhost:3000/api/serials').then(res => {
      axios.get(`${import.meta.env.VITE_API_BASE_URL}/serials`).then(res => {
      setSerials(res.data);
    });
  }, []);

  return (
    <div className="list-container">
      <h2>Generated Serials</h2>
      <table className="serial-table">
        <thead>
          <tr>
            <th>No.</th>
            <th>Key</th>
            <th>Hospital</th>
            <th>Software</th>
            <th>Type</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {serials.map((s, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td> {/* No. 열 */}
              <td>{s.key}</td>
              <td>{s.hospital}</td>
              <td>{s.software}</td>
              <td>{s.type}</td>
              <td>{new Date(s.createdAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
