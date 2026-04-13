export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1e1e1e] py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          Win Business Collective &middot; 2025
        </p>
        <a
          href="mailto:hello@winbusinesscollective.com"
          className="text-gray-400 text-sm hover:text-[#c9a96e] transition-colors"
        >
          hello@winbusinesscollective.com
        </a>
      </div>
    </footer>
  );
}
