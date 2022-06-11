import { useState, useEffect  } from 'react'
import './Clock.css'

const Clock = () => {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        setInterval(setTime(new Date()), 1000)
    })

    const getDate = () => {
        const padding = (number) => {
            return ("0" + number).slice(-2)
        }

        return (
            padding(time.getMonth() + 1) +
            "/" +
            padding(time.getUTCDate()) +
            "/" +
            time.getFullYear()
        )
    }

    const getTime = () => {
        const padding = (number) => {
            return ("0" + number).slice(-2)
        }

        return (
            padding(time.getHours()) +
            ":" +
            padding(time.getMinutes()) +
            ":" +
            padding(time.getSeconds())
        )
    }

    return (
        <div className="clock">
            <div className="date-div">
                {getDate()}
            </div>
            <div className="time-div">
                {getTime()}
            </div>
        </div>
    )
}

export default Clock