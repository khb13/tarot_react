import { Link } from "react-router-dom";

function Dropdown() {
    return (
        <div>
        <ul>
              <li>
                <Link to="/today">
                  오늘의 타로
                  </Link></li>
              <li>이 주의 타로</li>
              <li>이 달의 타로</li>
              <li>올해의 타로</li>
            </ul>
            </div>
    )
}

export default Dropdown;