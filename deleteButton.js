import { useState } from "react"
import './deleteButton.css'
const DeleteButtons = () => {
    const [isDeleted, setIsDeleted] = useState(false)
    const handleDeleteButton = () => {
        if(!isDeleted){
            setIsDeleted(true)
            setTimeout(() => {
                setIsDeleted(false)
            },3200);
            console.log("CLICKED")
        }
    }
    return(
        <div>
            {/* Delete Button  */}
            <button className={`button ${isDeleted ? 'delete' : ''}`} onClick={handleDeleteButton}>
                <div className="trash">
                    <div className="top">
                        <div className="paper"></div>
                    </div>
                    <div className="box"></div>
                    <div className="check">
                        <svg viewBox="0 0 8 8">
                          <polyline points="1 3.4 2.71428571 5 7 1"></polyline>
                        </svg>
                    </div>
                </div>
                <span>Delete Button</span>
            </button>


       </div>
    
    )
}
export default DeleteButtons