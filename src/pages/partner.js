import Head from "next/head";
import MultiStepForm from "@/components/MultiStepForm";

export default function Home() {
  return (
    <div>
      <main className="p-8">
        <h1 className="text-4xl font-bold mb-4 text-center ">Sign up to become a partner</h1>
        <MultiStepForm />
      </main>
    </div>
  );
}
