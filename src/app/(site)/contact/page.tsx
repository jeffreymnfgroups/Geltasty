
import ContactForm from "@/app/components/contact-form";
import Faq from "@/app/components/home/faq";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: "Contact | Gestalty",
    description: "Contact Gestalty for NEET & UPSC exam preparation inquiries. Get in touch with our team for aspirant support, mentorship opportunities, parent consultations, or general questions about our learning platform.",
    keywords: [
        "contact Gestalty",
        "NEET coaching contact",
        "UPSC coaching contact",
        "exam preparation support",
        "NEET inquiry",
        "UPSC inquiry",
        "learning platform support",
        "mentorship inquiry"
    ],
    openGraph: {
        title: "Contact | Gestalty - NEET & UPSC Exam Preparation",
        description: "Contact Gestalty for NEET & UPSC exam preparation inquiries. Get in touch for aspirant support, mentorship opportunities, or parent consultations.",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact | Gestalty",
        description: "Contact Gestalty for NEET & UPSC exam preparation inquiries. Get in touch for aspirant support, mentorship opportunities, or parent consultations.",
    },
};

export default function Page() {
    return (
        <main>
            <ContactForm/>
            <Faq/>
        </main>
    );
};
