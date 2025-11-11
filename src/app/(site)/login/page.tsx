import { Metadata } from "next";
import LoginSection from "@/app/components/auth/login-section";
import LoginBenefits from "@/app/components/auth/login-benefits";

export const metadata: Metadata = {
    title: "Login | Gestalty",
    description: "Access your Gestalty account to continue structured NEET & UPSC preparation with live analytics, mentor feedback, and adaptive planning tools.",
    keywords: [
        "Gestalty login",
        "student login",
        "NEET platform login",
        "UPSC dashboard login",
        "exam preparation login"
    ],
    robots: {
        index: false,
        follow: false,
    },
};

export default function LoginPage() {
  return (
    <main className="min-h-screen pt-20">
      <LoginSection />
      <LoginBenefits />
    </main>
  );
}
