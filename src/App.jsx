import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  return (
    <div>
      <h1>hello React</h1>
      <Button text={"메일"} color={"red"} />
      <Button text={"카페"} color={"blue"} />
      <Button text={"블로그"} color={"orange"} />
      <Button text={"기본값 설정"} />
      <Button text={"자식요소 설정"} color={"pink"}>
        <strong>중요</strong>
      </Button>
      <Input inputValue = {'hello react'} title={"input title"} placeholder={"입력하세요."} />
    </div>
  );
}

export default App;
