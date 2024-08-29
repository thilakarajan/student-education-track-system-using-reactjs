import './content.css'


import { IoPerson } from 'react-icons/io5'
import { FaUserTie } from 'react-icons/fa'
import { useEffect, useState } from 'react'
import { FaPerson } from 'react-icons/fa6'



const Content = () => {
    const [Regular,setRegular]=useState(0);
    const [Remedial,setRemedial]=useState(0);
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
        color: 'greenyellow',
      },
    ]

    useEffect(()=>{
        setInterval(() => {
            setRegular(Regular+1);
        }, 4000);
        setInterval(() => {
          setRemedial(Remedial + 1)
        }, 4000)
        setInterval(() => {
          setPaid(Paid + 1)
        }, 4000)
    })


    return ( <div className="content">
        <nav>
            <h3>Student Management</h3>
        </nav>
        <div className="cards">
            {
                data.map((item) => {
                    return (
                      <div
                        key={item.id}
                        className="card"
                        style={{ backgroundColor: item.color }}
                      >
                        <div className="icon">{item.icon}</div>
                        <div className="text">
                          <h1>{item.count}</h1>
                          <p>{item.title}</p>
                        </div>
                      </div>
                    )
                })
            }
        </div>
    </div> );
}
 
export default Content;