import './content.css'

import { IoPerson } from 'react-icons/io5'
import { FaUserTie } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { FaPerson } from 'react-icons/fa6'
import { FaBook } from 'react-icons/fa6'
import { FaBookOpenReader } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'
import { BiSolidReport } from 'react-icons/bi'
import { FaRegHospital } from 'react-icons/fa'

const Content = () => {
  const [Regular, setRegular] = useState(0)
  const [Remedial, setRemedial] = useState(0)
  const [Paid, setPaid] = useState(0)

  const data = [
    {
      id: 1,
      icon: <IoPerson />,
      count: Regular,
      title: 'Regular Students',
      color: 'orange',
    },
    {
      id: 2,
      icon: <FaUserTie />,
      count: Remedial,
      title: 'Remedial students',
      color: 'purple',
    },
    {
      id: 3,
      icon: <FaPerson />,
      count: Paid,
      title: 'In paid club',
      color: 'green',
    },
  ]

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRegular(Regular + 1)
    }, 1000)
    return () => clearInterval(intervalId)
  }, [Regular])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setPaid(Paid + 1)
    }, 10000)
    return () => clearInterval(intervalId)
  }, [Paid])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemedial(Remedial + 1)
    }, 4000)
    return () => clearInterval(intervalId)
  }, [Remedial])

  return (
    <div className="content">
      <nav>
        <h3>Student Management</h3>
      </nav>
      <div className="cards">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              className="card"
              style={{ backgroundColor: item.color }}
              onClick={() => {
                if (item.title === 'Remedial students') {
                  setRemedial((p) => (p = 0))
                } else if (item.title === 'Regular Students') {
                  setRegular((p) => (p = 0))
                } else {
                  setPaid((p) => (p = 0))
                }
              }}
            >
              <div className="icon">{item.icon}</div>
              <div className="text">
                <h1>{item.count}</h1>
                <p>{item.title}</p>
              </div>
            </div>
          )
        })}
      </div>
      <div className="menu">
        <div className="menu-top">
          <div className="option">
            <IoPerson className='icon' />
            <p>Regular Enrollment</p>
          </div>
          <div className="option">
            <FaBook className='icon' />
            <p>Remedial Enrollment</p>
          </div>
          <div className="option">
            <FaPerson className='icon' />
            <p>Club Management</p>
          </div>
          <div className="option">
            <FaBookOpenReader className='icon' />
            <p>Classroom Management</p>
          </div>
          <div className="option">
            <MdEmail className='icon' />
            <p>SMS / EMAIL</p>
          </div>
          <div className="option">
            <BiSolidReport className='icon' />
            <p>Attendance</p>
          </div>
        </div>
        <div className="menu-bottom">
          <div className="option">
            <FaRegHospital className='icon' />
            <p>Clinic</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
