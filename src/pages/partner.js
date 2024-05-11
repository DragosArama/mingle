import MultiStepForm from "@/components/MultiStepForm";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-4xl font-bold mb-4 text-center ">Sign up to become a partner</h1>
        <MultiStepForm />
      </main>
    </div>
  );
}
