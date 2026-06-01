// import RegisterForm from "@/components/auth/RegisterForm";

import RegisterForm from "@/component/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-700/30 blur-[120px] rounded-full" />

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff10 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff10 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegisterPage;