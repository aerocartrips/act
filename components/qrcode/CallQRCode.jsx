// "use client"
// import React from 'react';
// import dynamic from 'next/dynamic';

// const QRCodeSVG = dynamic(() => import('qrcode.react').then((mod) => mod.QRCodeSVG), {
//   ssr: false, 
// });

// const CallQRCode = ({ phoneNumber }) => {
//   const telUrl = `tel:${phoneNumber}`;

//   return (
//     <div>
//       <QRCodeSVG value={telUrl} size={200} />
//     </div>
//   );
// };

// export default CallQRCode;
