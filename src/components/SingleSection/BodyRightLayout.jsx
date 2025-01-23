import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BottomRightLayout from '../Home/bottomRightLayout';

const SingleSection = () => {
  const { artistId } = useParams(); // Get artistId from URL params
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch(`http://127.0.0.1:8000/api/songs/artist/${artistId}`);
        const data = await response.json();

        if (data.songs) {
          setSongs(data.songs);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchSongs();
  }, [artistId]);

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
              {songs.length > 0 ? (
                songs.map((song, index) => (
                  <tr key={song.id} className='hover:bg-gray-800'>
                    <td className='py-2 px-4'>{index + 1}</td>
                    <td className='py-2 pr-4'>
                      <img 
                        src={`https://example.com/${song.album_cover}`} // Replace with actual cover URL
                        alt='Song Cover' 
                        className='w-10 h-10 rounded-md' 
                      />
                    </td>
                    <td className='py-2 pr-28'>{song.title}</td>
                    <td className='py-2'>{song.duration}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="py-2 text-center">No songs available</td>
                </tr>
              )}
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
};

export default SingleSection;
