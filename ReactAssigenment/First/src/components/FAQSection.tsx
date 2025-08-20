import '../CSSFiles/FAQSection.css';

const faqData = [
  {
    question: 'What do you mean by "Figma assets"?',
    answer:
      'You will have access to download the full Figma project including all of the pages, the components, responsive pages, and also the icons, illustrations, and images included in the screens.'
  },
  {
    question: 'What does "lifetime access" exactly mean?',
    answer:
      'Once you have purchased either the design, code, or both packages, you will have access to all of the future updates based on the roadmap, free of charge.'
  },
  {
    question: 'How does support work?',
    answer:
      'We\'re aware of the importance of well qualified support, that is why we decided that support will only be provided by the authors that actually worked on this project.'
  },
  {
    question: 'I want to build more than one project. Is that allowed?',
    answer:
      'You can use this for an unlimited amount of projects, whether it\'s a personal website, a SaaS app, or a client project. Just don\'t build a competing UI kit or template.'
  },
  {
    question: 'What does "free updates" include?',
    answer:
      'Free updates are based on the public roadmap, though we may add other updates as needed outside of it.'
  },
  {
    question: 'What does the free version include?',
    answer:
      'The free version includes a minimal style guideline, some components, and a dashboard. It’s open-source under MIT.'
  },
  {
    question: 'What is the difference between Windster and Tailwind UI?',
    answer:
      'Windster includes additional components, pages, and e-commerce UI that Tailwind UI does not offer.'
  },
  {
    question: 'Can I use Windster in open-source projects?',
    answer:
      'Yes, as long as it’s not used to build a competing UI library, theme, or template. Feel free to use it otherwise.'
  }
];

const FAQSection = () => {
  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-grid">
          {faqData.map((item, index) => (
            <div className="faq-item" key={index}>
              <h3 className="faq-question">{item.question}</h3>
              <p className="faq-answer">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
