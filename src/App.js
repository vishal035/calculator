import './App.css';
import Card from './components/Main/Card';
import Button from './components/Button/Button';

function App() {
  return (
    <div className="absolute top-0 left-0 w-screen h-screen flex flex-col justify-center items-center overflow-hidden bg-black">
      <Card className="relative flex flex-col w-96 h-24 justify-end bg-primary-black text-primary text-4xl font-semibold">
        <Card className="absolute top-0 right-0 w-fit py-2 px-4 ">123</Card>
        <Card className="absolute right-0 py-2 px-4 w-fit font-medium text-2xl">
          100 + 123
        </Card>
      </Card>
      <Card className=" relative grid grid-cols-4 w-96 h-[520px] bg-primary-black text-primary-white text-4xl font-normal">
        <Button className="text-primary">AC</Button>
        <Button>⨦</Button>
        <Button>%</Button>
        <Button className="text-primary bg-slate-800">⨬</Button>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button className="text-primary bg-slate-800">x</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button className="text-primary bg-slate-800">-</Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button className="text-primary bg-slate-800">+</Button>
        <Button>0</Button>
        <Button>.</Button>
        <Button className="text-primary bg-slate-800 col-span-2 py-2 px-4">
          =
        </Button>
        {/* <Button className="text-primary bg-slate-800">=</Button> */}
      </Card>
    </div>
  );
}

export default App;
