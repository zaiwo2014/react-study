import { Link } from "react-router-dom"
import { Button } from "antd"
import { useNavigate } from "react-router-dom"

const NotFoundPage = () => {

  const navigate = useNavigate()

  function handleGoHome() {
    navigate('/app')
  }


  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Button type="primary" onClick={handleGoHome}>返回主页</Button>
    </div>
  )
}

export default NotFoundPage