import { Badge } from "@/registry/default/ui/badge";
import { Input } from "@/registry/default/ui/input";
import { Search } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./accordion";


const FAQ_SECTIONS = [
  {
    id: "what-is",
    question: "What is ShapeX UI?",
    answer:
      "ShapeX UI is a comprehensive design system and UI kit that helps designers and developers create consistent, beautiful interfaces.",
  },
  {
    id: "why-need",
    question: "Why do I need a UI kit?",
    answer:
      "A UI kit helps maintain consistency across your projects, speeds up your workflow, and ensures best practices in design and development.",
  },
  {
    id: "what does it offer",
    question: "What is this UI library, and what does it offer?",
    answer:
      "This UI library is built on top of ShadCN UI and includes 30+ pre-designed components such as headers, footers, login forms, sign-up forms, FAQs, CTAs, contact sections, and more. It allows developers to quickly build high-quality user interfaces with ease.",
  },
  {
    id: "tech stack",
    question: "Is this library compatible with my project’s tech stack?",
    answer:
      "Yes, the library is compatible with modern JavaScript frameworks like React.js and Next.js. It is designed to integrate seamlessly with Tailwind CSS, as it is built on ShadCN UI principles.",
  },
  {
    id: "design needs",
    question: "Can I customize the components to fit my design needs?",
    answer:
      "Absolutely! All components are fully customizable and allow you to tweak styles, variants, and layouts using Tailwind CSS or additional configurations.",
  },
  {
    id: "dark mode",
    question: "Does this library support dark mode?",
    answer:
      "Yes, the library fully supports dark mode out of the box. You can toggle between light and dark themes or configure the components to match your application's theme.",
  },
  {
    id: "mobile-friendly",
    question: "Are the components responsive and mobile-friendly?",
    answer:
      "Yes, all components are designed to be fully responsive, ensuring that they look great on devices of all sizes, from desktops to mobile phones.",
  },
  {
    id: "open-source or paid",
    question: "Is this library open-source or paid?",
    answer: "The library is open-source.",
  },
  {
    id: "request new features",
    question:
      "How can I contribute to or request new features for the library?",
    answer:
      "Contributions are welcome! You can open issues or pull requests on our GitHub repository.",
  },
  {
    id: "library-access",
    question: "How do I access the library?",
    answer:
      "The library is available through our web platform after logging in to your account.",
  },
];


const FAQ = () => {
  return (
    <div className="w-full mx-auto p-6">
      <div className=" rounded-lg border p-6 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className="mb-4">
          <Badge
            variant={"outline"}
            className="inline-flex items-center rounded-full border px-4 py-1 text-sm font-medium"
          >
            FAQs
          </Badge>
        </div>

        <h1 className="text-4xl font-mono font-medium mb-6">
          What can we help you find?
        </h1>

        <div className="relative max-w-md">
          <Input
            type="text"
            className="w-full px-10 py-2 border rounded-md"
            placeholder="Search"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-8">
        {FAQ_SECTIONS?.map((faq) => (
          <Accordion key={faq?.id} type="multiple" defaultValue={[faq.id]}>
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger className="text-left hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
