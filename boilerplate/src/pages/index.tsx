import Head from 'next/head';

const foo = 'bar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Boilerplate</title>
      </Head>

      <h1>Hello, World</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At vero fugiat
        voluptatum animi earum quod, fuga dolore, et iste optio voluptatibus
        quis? Magni deserunt praesentium sequi ab labore, officiis voluptatem.
      </p>
    </div>
  );
}
