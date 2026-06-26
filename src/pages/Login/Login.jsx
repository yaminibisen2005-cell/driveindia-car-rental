import Navbar from "../../components/Navbar/Navbar";

function Login() {
  return (
    <>
      <Navbar />
      <main className="grid min-h-[calc(100vh-73px)] place-items-center bg-slate-50 px-5 py-12">
        <section className="w-full max-w-md rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-black text-slate-950">Login</h1>
          <div className="mt-6 space-y-4">
            <input
              className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-sky-400"
              placeholder="Email"
              type="email"
            />
            <input
              className="w-full rounded-lg border border-slate-200 px-4 py-3 outline-none focus:border-sky-400"
              placeholder="Password"
              type="password"
            />
            <button className="w-full rounded-lg bg-sky-500 px-4 py-3 font-bold text-white hover:bg-sky-600">
              Login
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

export default Login;
