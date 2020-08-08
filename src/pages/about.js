import Layout from '../components/layout';
import Content from '../components/content';

export default function About() {
  return (
    <Layout>
      <Content>
        <div className="h-56">
          <img
            src="./images/illustrations/toto_book_cape.svg"
            alt="A cartoon illustration of a dog reading a book"
            className="w-64 mx-auto "
          />
        </div>
        <h2 className="text-center">Coding and stories and thoughts, oh my!</h2>
        <p>
          I created this blog to write more and share about what I learn. As an
          Enterprise Software Architect, I cover a lot of ground and have to
          learn and understand a wide range of technologies. Writing about these
          help me process what I'm learning.
        </p>
        <p>Some of the subjects you're likely to read about here are:</p>
        <ul>
          <li>Software architecture (front end and back end)</li>
          <li>Team leadership</li>
          <li>
            Front end frameworks and libraries like VueJS, React &amp;
            TailwindCSS
          </li>
          <li>Back end technologies like .NET Core</li>
          <li>
            Cloud architecture and technologies like Azure Functions, Service
            Bus, Event Grid &amp; CosmosDB
          </li>
        </ul>
        <h2>How did I build this site?</h2>
        <p>
          At the time my site was due for a rebuild, I was learning React (after
          coming from using Vue for 2 years). I decided to build this site using
          Next.js to help me put into practice everything I'm learning with
          React.
        </p>
        <p>
          For styling I really wanted to keep it simple and I've used my go-to
          framework, Tailwind CSS. The illustrations were kindly done by my very
          talented wife.
        </p>
      </Content>
    </Layout>
  );
}
