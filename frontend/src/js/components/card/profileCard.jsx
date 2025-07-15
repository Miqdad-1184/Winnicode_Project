import '../../../css/card.css';

export default function UserProfileCard({ user, onClose }) {
  return (
    <div className="profileModalOverlay">
      <div className="profileModalCard">
        <button className="closeBtn" onClick={onClose}>✕</button>
        <h2>Profil Pengguna</h2>
        <div className="profileField"><strong>Nama:</strong> {user.name}</div>
        <div className="profileField"><strong>Email:</strong> {user.email}</div>
        <div className="profileField"><strong>Jenis Kelamin:</strong> {user.gender === 'male' ? 'Laki-laki' : 'Perempuan'}</div>
        <div className="profileField"><strong>Tanggal Lahir:</strong> {user.birthDate}</div>
        <div className="profileField"><strong>Nomor Telepon:</strong> {user.phone}</div>
        <div className="profileField"><strong>Alamat:</strong> {user.address}</div>
      </div>
    </div>
  );
}
