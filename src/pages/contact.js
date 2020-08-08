import Layout from '../components/layout';
import Content from '../components/content';

export default function Contact() {
  return (
    <Layout>
      <Content>
        <div className="h-56">
          <img
            src="/images/illustrations/toto_sit_1.svg"
            alt="A cartoon illustration of a dog"
            className="w-64 mx-auto"
          />
        </div>
        <h2 className="text-center">Follow the Yellow Brick Code!</h2>
        <p>
          I was going to put a contact form in here but does anyone actually use
          them anymore? You can find me on social media though.
        </p>
        <ul>
          <li>
            Twitter:
            <a
              href="https://twitter.com/ff0brickcode"
              target="_blank"
              className="ml-1"
            >
              @ff0brickcode
            </a>
          </li>
          <li>
            LinkedIn:
            <a
              href="https://linkedin.com/in/sarah-williams-cardiff"
              target="_blank"
              className="ml-1"
            >
              Sarah Williams
            </a>
          </li>
        </ul>
      </Content>
    </Layout>
  );
}
