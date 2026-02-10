// src/components/Contact.tsx

import { Mail, Github, Linkedin, MapPin } from "lucide-react";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "parneetbuttar1153@gmail.com",
    href: "mailto:parneetbuttar1153@gmail.com"
  },
  {
    icon: Github,
    label: "GitHub",
    value: "parneet-11",
    href: "https://github.com/parneet-11"
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/parneet-kaur-11102a1ba",
    href: "https://linkedin.com/in/parneet-kaur-11102a1ba"
  }
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-[#f7f9fc]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Let's Connect</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Open to data engineering, analytics roles, or collaboration. Reach out to discuss data pipelines, dashboarding, or research opportunities.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              className="p-4 bg-white rounded-lg border border-gray-200 shadow hover:shadow-lg transition duration-300 flex flex-col items-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              <contact.icon className="h-6 w-6 text-blue-600 mb-2" />
              <div className="text-sm text-gray-500">{contact.label}</div>
              <div className="text-blue-800 font-medium">{contact.value}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
