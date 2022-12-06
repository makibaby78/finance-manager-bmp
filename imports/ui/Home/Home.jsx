import React from 'react'
import Header from '../Header/Header'
import './home.css'

function Home() {
  function edit(){
    console.log("Test")
  }
  return (
    <div className='home-wrapper'>
      <Header />
      <div className='inner-home-wrapper'>
        <div className='expense-wrapper'>
          <h4>Expense Management System</h4>
          <table>
            <thead>
              <tr>
                <td className='td-1'>Date</td>
                <td className='td-2'>Description</td>
                <td className='td-3'>Cost</td>
                <td className='td-4'></td>
              </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='td-1'>December 5, 2022</td>
                    <td className='td-2'>Initial Meeting</td>
                    <td className='td-3'>Nothing</td>
                    <td className='td-4 click-td-4' onClick={edit}>Edit</td>
                </tr>
                <tr>
                   <td>Add Expenses</td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Home