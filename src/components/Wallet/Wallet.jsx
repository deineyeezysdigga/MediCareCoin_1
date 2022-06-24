import NativeBalance from "../NativeBalance";
import Address from "../Address/Address";
import Blockie from "../Blockie";
import { Card } from "antd";
import React from 'react';
import QRCode from "react-qr-code";
//import { getExplorer } from "helpers/networks";
import { useMoralis } from "react-moralis";




const styles = {
  title: {
    fontSize: "30px",
    fontWeight: "600",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "5px",
  },
  card: {
    boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
    border: "1px solid #e7eaf3",
    borderRadius: "1rem",
    width: "450px",
    fontSize: "16px",
    fontWeight: "500",
  },
};

function Wallet() {
  const { account } = useMoralis();
  return (
    <Card
      style={styles.card}
      title={
        <div style={styles.header}>
          <Blockie scale={5} avatar currentWallet style />
          <Address size={9} copyable />
          <NativeBalance />
          <br></br>
          Scan QR-Code:
          <QRCode value={account} hoverable />
        </div>
      }
    >
    </Card>
  );
}

export default Wallet;
