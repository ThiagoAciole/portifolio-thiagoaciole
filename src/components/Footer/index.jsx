const Footer = () => {
  return (
    <footer className="bg-gray-100 shadow border text-gray-700 py-6 mt-24">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} ThiagoAciole</p>
        <p>thiagoaciole7@gmail.com</p>
        <div className="flex justify-center mt-4">
          <a
            href="https://www.linkedin.com/in/thiago-aciole/"
            className="text-gray-700 hover:text-blue-500 mx-3"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/ThiagoAciole"
            className="text-gray-700 hover:text-blue-500 mx-3"
          >
            GitHub
          </a>
          <a
            href="https://www.instagram.com/thiago.aciole/"
            className="text-gray-700 hover:text-blue-500 mx-3"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
