"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is a website development service?",
    a: "Website development services involve creating and maintaining websites, focusing on coding, design, functionality, and user experience. This includes front-end development (UI/UX), back-end development (server-side), and integrating third-party services, ensuring fast, responsive websites.",
  },
  {
    q: "What are the 3 types of web development?",
    a: "The three main types of web development are front-end development (design and interactivity), back-end development (server-side and databases), and full-stack development (combining front-end and back-end work to create complete websites and applications).",
  },
  {
    q: "What are Web services in web development?",
    a: "Web services in web development allow different applications to communicate over the internet. They typically use protocols like HTTP and standards such as SOAP or REST to seamlessly integrate services, data exchange, and functionality across platforms.",
  },
  {
    q: "How much does a Web Developer cost?",
    a: "Web developer costs vary widely based on location, expertise, and project complexity. Freelancers typically charge £25-£120 per hour, while agencies might offer fixed-price packages starting at £1,500 for small projects, and much higher for custom solutions.",
  },
  {
    q: "Who needs web development services?",
    a: "Businesses, individuals, e-commerce stores, and organizations needing an online presence, functionality, or branding require web development services. This includes those seeking custom websites, platforms, blogs, or web applications for brand visibility and business operations.",
  },
  {
    q: "What does a web developer do?",
    a: "A web developer designs, builds, and maintains websites or web applications. They handle tasks like writing code (HTML, CSS, JavaScript), integrating back-end systems, debugging, testing, and ensuring websites are responsive, fast, and secure for users.",
  },
  {
    q: "What language is used in web development?",
    a: "Common languages in web development include HTML, CSS, JavaScript (for front-end), PHP, Python, Ruby, and Node.js (for back-end). Frameworks like React, Angular, and Laravel help streamline development, while SQL and NoSQL manage databases and data handling.",
  },
  {
    q: "What are the three 3 main parts of web services?",
    a: "Web services consist of three key components: the service provider, which is the system offering the web service; the service requestor, the system that consumes the service; and the service registry, a directory where web services are listed for discovery and accessibility.",
  },
  {
    q: "What are the four principles of web development?",
    a: "The four fundamental principles of web development are usability, which ensures a website is easy to navigate; performance, which focuses on optimizing speed and load time; scalability, enabling the site to handle growth; and security, which protects user data and prevents breaches.",
  },
  {
    q: "What is the most important in web development?",
    a: "User experience (UX) is the most important in web development. A website must be intuitive, responsive, and easy to navigate across devices. Fast loading times, accessibility, and clear functionality also contribute to successful web development.",
  },
  {
    q: "Where are web services used?",
    a: "Web services integrate software applications and enable communication between diverse systems. They're commonly used in e-commerce, banking, cloud computing, mobile apps, and data-sharing platforms, facilitating seamless data exchange and remote access.",
  },
  {
    q: "What is the purpose of web servers?",
    a: "Web servers store, process, and deliver web pages to users. When a browser requests a page, the server processes the request, retrieves the necessary data, and sends the HTML, CSS, and other files for display on the user's screen.",
  },
  {
    q: "How many web services are there?",
    a: "There are several types of web services, including SOAP, REST, XML-RPC, and JSON-RPC. RESTful services are most common due to their simplicity and ease of integration with modern web applications and mobile platforms.",
  },
];

export default function WebDevFaq() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="overflow-hidden bg-surface px-4 py-14 sm:px-6 md:py-20 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p data-reveal="up" className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            Web Development FAQs
          </p>
          <h2 data-reveal="up" className="mt-3 text-2xl font-extrabold text-ink sm:text-3xl">
            Expert Answers to Your Web Development Questions
          </h2>
        </div>

        <div data-reveal-group="" data-stagger="0.06" className="mt-10 space-y-3 md:mt-12">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={faq.q}
                data-reveal="up"
                className={`rounded-2xl border bg-white transition-colors duration-200 ${
                  isOpen ? "border-brand-blue/30 shadow-lg shadow-brand-900/5" : "border-[#E4E8F3]"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    aria-controls={`webdev-faq-panel-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                  >
                    <span className={`text-sm font-bold sm:text-base ${isOpen ? "text-brand-blue" : "text-ink"}`}>
                      {faq.q}
                    </span>
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen ? "rotate-180 bg-brand-blue text-white" : "bg-surface text-ink"
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                </h3>
                <div
                  id={`webdev-faq-panel-${i}`}
                  aria-hidden={!isOpen}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="whitespace-pre-line px-5 pb-5 text-sm leading-relaxed text-muted sm:px-6">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
