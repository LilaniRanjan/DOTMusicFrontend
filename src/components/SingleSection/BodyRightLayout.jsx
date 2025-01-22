import React, { Component } from 'react';
import BottomRightLayout from '../Home/bottomRightLayout';

export default class BodyRightLayout extends Component {
  render() {
    return (
      <>
        <div
          style={{
            backgroundImage: `url('https://rmc.dk/sites/default/files/styles/background_full_wide/public/node/field_image/rmc_uddannelse_music_management_0.jpg?h=d88fbc39&itok=qdS2rNsO')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            fontSize: '78px',
          }}
          className='font-extrabold pt-10 pb-10 px-5 rounded-lg text-white'
        >
          Anirudh Ravichander
        </div>
        <div className='mx-8 my-4'>
          <div className='mt-16 text-xl font-semibold'>
            <div className='font-bold text-2xl pb-5'>Popular</div>
            <table className='table-auto w-full text-left border-collapse'>
              <tbody className='text-base'>
                <tr className='hover:bg-gray-800'>
                  <td className='py-2 px-4'>1</td>
                  <td className='py-2 pr-4'>
                    <img src='https://c.saavncdn.com/411/Chuttamalle-From-Devara-Part-1-Telugu-2024-20240805181008-500x500.jpg' alt='Song Cover' className='w-10 h-10 rounded-md' />
                  </td>
                  <td className='py-2 pr-28'>Chuttamalle (From 'Devara Part 1')</td>
                  <td className='py-2'>3:42</td>
                </tr>
                <tr className='hover:bg-gray-800'>
                  <td className='py-2 px-4'>1</td>
                  <td className='py-2 pr-4'>
                    <img src='https://c.saavncdn.com/411/Chuttamalle-From-Devara-Part-1-Telugu-2024-20240805181008-500x500.jpg' alt='Song Cover' className='w-10 h-10 rounded-md' />
                  </td>
                  <td className='py-2 pr-28'>Chuttamalle (From 'Devara Part 1')</td>
                  <td className='py-2'>3:42</td>
                </tr>
              </tbody>
            </table>
            <div className='mt-6'>
              <button className="rounded-full bg-slate-800 text-white py-2 text-sm font-bold px-4 hover:bg-gray-200 hover:text-black transition-colors">
                <a href=''>See more</a>
              </button>
            </div>
          </div>
        </div>

        <div className='mx-8 my-4 mt-16'>
          <BottomRightLayout/>
        </div>
      </>
    );
  }
}
