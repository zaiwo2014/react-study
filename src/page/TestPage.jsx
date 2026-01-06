import { Button,Space } from 'antd'

const TestPage = () => {

  function handleClick() {
    alert('Button clicked!')
  }

  return (
    <>
      <Space style={{ width: '100%' }} align="center">
        <Button type="primary" onClick={handleClick}>AntD Button</Button>
      </Space>
    </>
  )
}

export default TestPage