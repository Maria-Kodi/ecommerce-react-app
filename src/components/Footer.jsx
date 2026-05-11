export default function Footer() {
    return (
      <footer className="footer footer-center p-6 bg-blue-600 text-white mt-10">
        <aside>
          <p>© {new Date().getFullYear()} eCommerce-App. All rights reserved.</p>
        </aside>
      </footer>
    );
  }