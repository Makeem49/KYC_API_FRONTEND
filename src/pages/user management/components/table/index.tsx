import React from 'react';
import OlvImg from '../../../../assets/images/olivia.svg';
import olvImg2 from '../../../../assets/images/olyvia2.svg';
import UserAction from '../drop down';

const Table = () => {
  return (
    <div className='h-full pb-5'>
      <div className='overflow-auto w-full '>
        <table className='overflow-auto w-full align-top  text-[#54565B] text-[12px] xl:text-[14px]'>
          <thead className='text-[10px]  sticky top-0 text-left whitespace-nowrap z-[5]'>
            <tr className=' border-b child:cursor-default'>
              <th>
                <input type='checkbox' className='checkbox white' />
              </th>

              <th>S/N</th>
              <th>User</th>
              <th>Last Login</th>
              <th>Two Step</th>
              <th>Status</th>
              <th>Joined Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className='text-[10px] xl:text-[12px]'>
            <tr className=' text-left  child:py-4 border-b'>
              <td>
                <input
                  type='checkbox'
                  id='remember'
                  className='checkbox white'
                />
              </td>

              <td>
                <span className='font-medium'>1</span>
              </td>

              <td className='text-start '>
                {' '}
                <div className='flex gap-5'>
                  <img src={OlvImg} alt='olvimg' />{' '}
                  <span className='font-medium text-[14px]'>
                    Olivia Rhye <br /> <small>oryhe@afexnigeria.com</small>
                  </span>
                </div>
              </td>

              <td>
                <span className='font-medium bg-[#F1F0F0] text-[#948E8E] p-1  rounded '>
                  4 days ago
                </span>
              </td>

              <td>
                <span className='font-medium text-[#076D3A] bg-[#E7F9F0] p-1 rounded '>
                  Enabled
                </span>
              </td>

              <td>
                <span className='font-medium text-[#076D3A] bg-[#E7F9F0] p-1  rounded '>
                  Active
                </span>
              </td>

              <td>
                <span className='font-medium '>May 1st 2021</span>
              </td>

              <td>
                <UserAction />
              </td>
            </tr>

            <tr className=' text-left  child:py-3 border-b'>
              <td>
                <input
                  type='checkbox'
                  id='remember'
                  className='checkbox white'
                />
              </td>

              <td>
                <span className='font-medium'>2</span>
              </td>

              <td className='text-start '>
                {' '}
                <div className='flex gap-5'>
                  <img src={OlvImg} alt='olvimg' />{' '}
                  <span className='font-medium text-[14px]'>
                    Olivia Rhye <br /> <small>oryhe@afexnigeria.com</small>
                  </span>
                </div>
              </td>

              <td>
                <span className='font-medium bg-[#F1F0F0] text-[#948E8E] p-1  rounded '>
                  4 days ago
                </span>
              </td>

              <td>
                <span className='font-medium text-[#076D3A] bg-[#E7F9F0] p-1 rounded '>
                  Enabled
                </span>
              </td>

              <td>
                <span className='font-medium text-[#076D3A] bg-[#E7F9F0] p-1  rounded '>
                  Active
                </span>
              </td>

              <td>
                <span className='font-medium '>May 1st 2021</span>
              </td>

              <td>
                <UserAction />
              </td>
            </tr>

            <tr className=' text-left  child:py-4 border-b'>
              <td>
                <input
                  type='checkbox'
                  id='remember'
                  className='checkbox white'
                />
              </td>

              <td>
                <span className='font-medium'>3</span>
              </td>

              <td className='text-start '>
                {' '}
                <div className='flex gap-5'>
                  <img src={olvImg2} alt='olvimg' />{' '}
                  <span className='font-medium text-[14px]'>
                    Olivia Rhye <br /> <small>oryhe@afexnigeria.com</small>
                  </span>
                </div>
              </td>

              <td>
                <span className='font-medium bg-[#F1F0F0] text-[#948E8E] p-1  rounded '>
                  4 days ago
                </span>
              </td>

              <td>
                <span className='font-medium text-[#076D3A] bg-[#E7F9F0] p-1 rounded '>
                  Enabled
                </span>
              </td>

              <td>
                <span className='font-medium text-[#076D3A] bg-[#E7F9F0] p-1  rounded '>
                  Active
                </span>
              </td>

              <td>
                <span className='font-medium '>May 1st 2021</span>
              </td>

              <td>
                <UserAction />
              </td>
            </tr>

            <tr className=' text-left  child:py-4 border-b'>
              <td>
                <input
                  type='checkbox'
                  id='remember'
                  className='checkbox white'
                />
              </td>

              <td>
                <span className='font-medium'>4</span>
              </td>

              <td className='text-start '>
                {' '}
                <div className='flex gap-5'>
                  <img src={olvImg2} alt='olvimg' />{' '}
                  <span className='font-medium text-[14px]'>
                    Olivia Rhye <br /> <small>oryhe@afexnigeria.com</small>
                  </span>
                </div>
              </td>

              <td>
                <span className='font-medium bg-[#F1F0F0] text-[#948E8E] p-1  rounded '>
                  4 days ago
                </span>
              </td>

              <td>
                <span className='font-medium text-[#076D3A] bg-[#E7F9F0] p-1 rounded '>
                  Enabled
                </span>
              </td>

              <td>
                <span className='font-medium text-[#076D3A] bg-[#E7F9F0] p-1  rounded '>
                  Active
                </span>
              </td>

              <td>
                <span className='font-medium '>May 1st 2021</span>
              </td>

              <td>
                <UserAction />
              </td>
            </tr>

            <tr className=' text-left  child:py-4 border-b'>
              <td>
                <input
                  type='checkbox'
                  id='remember'
                  className='checkbox white'
                />
              </td>

              <td>
                <span className='font-medium'>5</span>
              </td>

              <td className='text-start '>
                {' '}
                <div className='flex gap-5'>
                  <img src={olvImg2} alt='olvimg' />{' '}
                  <span className='font-medium text-[14px]'>
                    Olivia Rhye <br /> <small>oryhe@afexnigeria.com</small>
                  </span>
                </div>
              </td>

              <td>
                <span className='font-medium bg-[#F1F0F0] text-[#948E8E] p-1  rounded '>
                  4 days ago
                </span>
              </td>

              <td>
                <span className='font-medium text-[#076D3A] bg-[#E7F9F0] p-1 rounded '>
                  Enabled
                </span>
              </td>

              <td>
                <span className='font-medium text-[#076D3A] bg-[#E7F9F0] p-1  rounded '>
                  Active
                </span>
              </td>

              <td>
                <span className='font-medium '>May 1st 2021</span>
              </td>

              <td>
                <UserAction />
              </td>
            </tr>

            <tr className=' text-left  child:py-4 border-b'>
              <td>
                <input
                  type='checkbox'
                  id='remember'
                  className='checkbox white'
                />
              </td>

              <td>
                <span className='font-medium'>6</span>
              </td>

              <td className='text-start '>
                {' '}
                <div className='flex gap-5'>
                  <img src={olvImg2} alt='olvimg' />{' '}
                  <span className='font-medium text-[14px]'>
                    Olivia Rhye <br /> <small>oryhe@afexnigeria.com</small>
                  </span>
                </div>
              </td>

              <td>
                <span className='font-medium bg-[#F1F0F0] text-[#948E8E] p-1  rounded '>
                  4 days ago
                </span>
              </td>

              <td>
                <span className='font-medium text-[#076D3A] bg-[#E7F9F0] p-1 rounded '>
                  Enabled
                </span>
              </td>

              <td>
                <span className='font-medium text-[#076D3A] bg-[#E7F9F0] p-1  rounded '>
                  Active
                </span>
              </td>

              <td>
                <span className='font-medium '>May 1st 2021</span>
              </td>

              <td>
                <UserAction />
              </td>
            </tr>

            <tr className=' text-left  child:py-4 border-b'>
              <td>
                <input
                  type='checkbox'
                  id='remember'
                  className='checkbox white'
                />
              </td>

              <td>
                <span className='font-medium'>7</span>
              </td>

              <td className='text-start '>
                {' '}
                <div className='flex gap-5'>
                  <img src={olvImg2} alt='olvimg' />{' '}
                  <span className='font-medium text-[14px]'>
                    Olivia Rhye <br /> <small>oryhe@afexnigeria.com</small>
                  </span>
                </div>
              </td>

              <td>
                <span className='font-medium bg-[#F1F0F0] text-[#948E8E] p-1  rounded '>
                  4 days ago
                </span>
              </td>

              <td>
                <span className='font-medium text-[#076D3A] bg-[#E7F9F0] p-1 rounded '>
                  Enabled
                </span>
              </td>

              <td>
                <span className='font-medium text-[#076D3A] bg-[#E7F9F0] p-1  rounded '>
                  Active
                </span>
              </td>

              <td>
                <span className='font-medium '>May 1st 2021</span>
              </td>

              <td>
                <UserAction />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
