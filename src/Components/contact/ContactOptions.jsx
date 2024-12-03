
const ContactOptions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#7B3F5F] to-[#C2825D] px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Vendors Section */}
        <div className="bg-[#4B2043] p-6 rounded-md relative">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg" // Example URL
              alt="Vendors"
              className="w-20 h-20 rounded-full border-4 border-yellow-500"
            />
          </div>
          <h2 className="text-yellow-300 text-2xl text-center font-semibold mt-12">
            Vendors
          </h2>
          <p className="text-yellow-100 mt-4 text-center">
            Are you a registered vendor or a business wanting to promote your
            brand on our platform? Send your queries to us at
            <strong> vendors@company.com</strong>.
          </p>
        </div>

        {/* Marketing Collaborations Section */}
        <div className="bg-[#4B2043] p-6 rounded-md relative">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg" // Example URL
              alt="Marketing"
              className="w-20 h-20 rounded-full border-4 border-yellow-500"
            />
          </div>
          <h2 className="text-yellow-300 text-2xl text-center font-semibold mt-12">
            Marketing Collaborations
          </h2>
          <p className="text-yellow-100 mt-4 text-center">
            For brand collaborations, sponsored content, or social media
            activations, reach out to us at
            <strong> partnerships@company.com</strong>.
          </p>
        </div>

        {/* Wedding Submissions Section */}
        <div className="bg-[#4B2043] p-6 rounded-md relative">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <img
              src="https://randomuser.me/api/portraits/women/47.jpg" // Example URL
              alt="Submissions"
              className="w-20 h-20 rounded-full border-4 border-yellow-500"
            />
          </div>
          <h2 className="text-yellow-300 text-2xl text-center font-semibold mt-12">
            Wedding submissions
          </h2>
          <p className="text-yellow-100 mt-4 text-center">
            We celebrate weddings of all cultures, styles, and budgets. To
            feature your wedding, email us 15–20 photos at
            <strong> submissions@company.com</strong>.
          </p>
        </div>

        {/* Careers Section */}
        <div className="bg-[#4B2043] p-6 rounded-md relative">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <img
              src="https://randomuser.me/api/portraits/men/15.jpg" // Example URL
              alt="Careers"
              className="w-20 h-20 rounded-full border-4 border-yellow-500"
            />
          </div>
          <h2 className="text-yellow-300 text-2xl text-center font-semibold mt-12">
            Careers
          </h2>
          <p className="text-yellow-100 mt-4 text-center">
            Join our team of passionate innovators reshaping the wedding
            industry. Reach us at <strong>hr@company.com</strong>.
          </p>
        </div>

        {/* Customers Section (Spanning Full Width) */}
        <div className="bg-[#4B2043] p-6 rounded-md relative col-span-1 md:col-span-2">
          <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
            <img
              src="https://randomuser.me/api/portraits/women/25.jpg" // Example URL
              alt="Customers"
              className="w-20 h-20 rounded-full border-4 border-yellow-500"
            />
          </div>
          <h2 className="text-yellow-300 text-2xl text-center font-semibold mt-12">
            Customers
          </h2>
          <p className="text-yellow-100 mt-4 text-center">
            We value our customers and love hearing from you. For any feedback
            or queries, feel free to contact us at
            <strong> info@company.com</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactOptions;
