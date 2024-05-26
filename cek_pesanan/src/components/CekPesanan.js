import React from 'react';
import '../style/CekPesanan.css';
import images2 from '../assets/logo.png';

const CekPesanan = () => {
  return (
    <div className="wrapper">
      <form action="">
        <img width="50px" src={images2} />
        <h1>Cek Status Pesanan</h1>
        <div className="input-box">
          <p>No.Transaksi</p>
          <input type="text" placeholder="Masukkan no.transaksi" required />
        </div>
        <div className="button-submit">
          <button type="submit">Cek Pesanan</button>
        </div>
      </form>
    </div>
  );
};
export default CekPesanan;