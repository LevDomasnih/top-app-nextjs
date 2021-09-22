import {Button, Htag} from "../components";

export default function Home(): JSX.Element {
  return (
      <>
          <Htag tag='h1'>Текст</Htag>
          <Button appearance='primary'>Текст1</Button>
          <Button appearance='ghost'>Текст2</Button>
      </>
  )
}
