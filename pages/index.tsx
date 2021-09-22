import {Button, Htag, Paragraph} from "../components";

export default function Home(): JSX.Element {
  return (
      <>
          <Htag tag='h1'>Текст</Htag>
          <Button appearance='primary' arrow='right'>Текст1</Button>
          <Button appearance='ghost'>Текст2</Button>
          <Paragraph size='s'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi beatae, culpa dolorem dolores eligendi esse ex excepturi natus officiis omnis quam qui reiciendis repellat temporibus vel voluptate? Dignissimos, eveniet!</Paragraph>
          <Paragraph size='m'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi beatae, culpa dolorem dolores eligendi esse ex excepturi natus officiis omnis quam qui reiciendis repellat temporibus vel voluptate? Dignissimos, eveniet!</Paragraph>
          <Paragraph size='l'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A animi beatae, culpa dolorem dolores eligendi esse ex excepturi natus officiis omnis quam qui reiciendis repellat temporibus vel voluptate? Dignissimos, eveniet!</Paragraph>
      </>
  )
}
