export default function Footer() {
    return (
      <footer className="footer footer-center p-8 bg-blue-600 text-white">
        <aside>
          <p>© {new Date().getFullYear()} eCommerce-App. All rights reserved.</p>
        </aside>
      </footer>
    );
  }