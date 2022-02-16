import React from 'react';
import './Faq.css';
const Faq = () => {

   const datas = [
      {
         id: 1,
         questions: 'What is XXXX Platform?'
      },
      {
         id: 2,
         questions: 'What is a XXXXX NFT?'
      },
      {
         id: 3,
         questions: 'Are all Governance NFTs the same?'
      },
      {
         id: 4,
         questions: 'What are the advantages of Governance NFTs?'
      },
      {
         id: 5,
         questions: 'How can I get a Governance NFT?'
      },
      {
         id: 6,
         questions: 'How can I sell Governance NFTs?'
      },
      {
         id: 7,
         questions: 'What blockchain does XXXXX use?'
      },
      {
         id: 8,
         questions: 'What are the utilities of XXXX token?'
      },
      {
         id: 9,
         questions: 'What NFT tools are offered on XXXXX Platform?'
      },
      {
         id: 10,
         questions: 'How can you make money on XXXXX Platform?'
      },
      {
         id: 11,
         questions: 'What is XXXX NFT for?'
      }
   ]
   return (
      <div className='container faq my-5'>
         <div className="row">
            <div className="col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
               <h1>FAQ</h1>
            </div>
            <div className="col-md-6 col-sm-12 text-white text-start">
               <div className='row'>
                  <div className="col-md-1 text-end">
                     <i style={{ fontSize: '34px', height: '3px', color: '#FF14B1' }} className="fas fa-minus"></i>
                  </div>
                  <div className="col-md-11">
                     <h2>Who is NFT?</h2>

                     <p className='py-2' style={{ fontSize: '16px', color: '#C2ABCB', fontWeight: '500' }}>The critically endangered small red panda. Lives in the southeastern part of the Himalayas. The panda is found in the forests of China and India. Several hundred animals have been recorded in Nepal. This cute creature is listed on the Endangered Species Act. Let’s help all together these cute, funny red pandas!!!</p>
                  </div>
               </div>

               {
                  datas?.map(data => <div className="row align-items-center">
                     <div className="col-md-1 text-end">
                        <p style={{ cursor: 'pointer' }}><i style={{ fontSize: '14px' }} className="fas fa-plus"></i></p>
                     </div>
                     <div className="col-md-11">
                        <p>{data?.questions}</p>
                     </div>
                  </div>)
               }

            </div>
         </div>
      </div>
   );
};

export default Faq;