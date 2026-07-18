export function LoadingScreen() {
  return (
    <section className="min-h-[55vh] flex items-center justify-center bg-[linear-gradient(135deg,#f5efe6_0%,#fcfaf7_44%,#edf4f1_100%)]">
      <div className="text-center px-6">
        <div className="relative mx-auto mb-6 h-20 w-20">
          <div className="absolute inset-0 rounded-full border-2 border-primary/15" />
          <div className="absolute inset-2 rounded-full border-2 border-primary/35 border-t-primary animate-spin" />
          <div className="absolute inset-6 rounded-full bg-primary/10 animate-pulse" />
        </div>
        <p className="font-serif text-3xl text-gray-900 mb-2">Loading...</p>
        <p className="text-sm text-gray-600">Preparing the page for you.</p>
      </div>
    </section>
  );
}
